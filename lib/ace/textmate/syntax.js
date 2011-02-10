var doExec = function(regex, input, pos) {
	regex.lastIndex = pos;
	if (match = regex.exec(input)) {
		match.first = match.index;
		match.last = match.index + match[0].length;

		match.offsets = [];
		for (var i = 0; i < match.length; i++) {
			var key = match[i];
			if (key) {
				var first = match.index + match[0].indexOf(key);
				match.offsets.push({
					first: first,
					last: first + key.length
				});
			} else {
				match.offsets.push({
					first: -1,
					last: -1
				});
			}
		}

		return match;
	} else {
		return null;
	}
}

var getRegExp = function(val) {
	var regexp = {'modifier': 'gx', 'plus_modifier': ''};
	regexp.plus_modifier = '';
	if (inset_modifier = /\?([i|x|s])\:/g.exec(val)) {
		val = val.replace(/\?[i|x|s]\:/g, '?:');
		regexp.plus_modifier += inset_modifier[1];
	}
	if (inset_modifier = /\(\?([i|x|s])\)/g.exec(val)) {
		val = val.replace(/\(\?([i|x|s])\)/g, '');
		regexp.plus_modifier += inset_modifier[1];
	}
	
	regexp.plus_modifier = regexp.plus_modifier.split('');
	for (var i=0; i < regexp.plus_modifier.length; i++) {
		switch(regexp.plus_modifier[i]){
			case "x":
				break;
			case "i":
				val = val.replace(/a\-z/g, 'a-zA-Z');
				break;
		}
	};
	
	if(lookbehind = /\(\?\<([\=|\!])/g.exec(val)){
		regexp.origin = val;
		regexp.lookbehind = true;
		val = val.replace(/\(\?\<\=/g, '(');
		val = val.replace('(?<!\\.)', '([^\\.])');
		val = val.replace(/\(\?\<\!\[([^\]|.]*)\]\)/g, '([^$1])');
		val = val.replace(/\(\?\<\!([^\)|.]*)\)/g, '([^$1])');
	}
	
	val = val.replace(/\+\+/g, '+');
	val = val.replace(/\\x\{7f\}\-\\x\{ff\}/g, '');
	
	try {
		regexp.regexp = XRegExp(val, regexp.modifier);
		regexp.need_exec = true;
	
		regexp.regval = regexp.regexp.source;
		regexp.count =  XRegExp("(?:(("+ regexp.regval +")|(.)))").exec('abc').length - 4;
	} catch(e) {
		regexp.regexp = RegExp(val, regexp.modifier);
	
		regexp.regval = regexp.regexp.source;
		regexp.count =  RegExp("(?:(("+ regexp.regval +")|(.)))").exec('abc').length - 4;
	}
	if(!regexp.count || regexp.count < 0){
		regexp.count = 0;
	}
	return regexp;
}

function gsub(str, pattern, replacement) {
	var result = '',
	source = str,
	match;
	while(match = pattern.exec(source)){
		result += source.slice(0, match.index);
		result += replacement(match);
		source = source.slice(match.index + match[0].length);
	}
	result += source;
	return result;
}

define(function(require, exports, module) {

	var Scope = function(hash, syntax) {
		this.$syntax = syntax;
		this.init(hash);
	};

	(function() {

		this.init = function(hash) {
			for (var key in hash) {
				var value = hash[key];

				if (["match", "begin", "end"].indexOf(key) >= 0) {
					this[key] = value;
				} else if (["content", "name", "contentName"].indexOf(key) >= 0) {
					this[key] = value;
				} else if (["captures", "beginCaptures", "endCaptures"].indexOf(key) >= 0) {
					this[key] = value;
				} else if (["disabled"].indexOf(key) >= 0) {
					this[key] = value;
				} else if (key == 'patterns') {
					this.create_children(value);
				}
			}
		}
		
		this.create_children = function(patterns) {
			this.patterns = [];
			for (k in patterns) {
				var p = patterns[k];
				if (p['include']) {
					this.patterns.push(new ScopeProxy(p, this.$syntax, this));
				} else {
					try{
						this.patterns.push(new Scope(p, this.$syntax));
					} catch(e) {
						//console.log(e);
					}
				}
			}
		};

		this.parse_captures = function(name, match, processor) {
			var matches = this.match_captures(name, match);

			var starts = matches[0],
			ends = matches[1];
			starts.sort(function(a, b) {
				return b[0] - a[0]
			});
			ends.sort(function(a, b) {
				return b[0] - a[0]
			});

			while (starts.length > 0 || ends.length > 0) {
				if (starts.length == 0) {
					var capture = ends.pop();
					processor.close_tag(capture[2], capture[0]);
				} else if (ends.length == 0) {
					var capture = starts.pop();
					processor.open_tag(capture[2], capture[0]);
				} else if (Math.abs(ends[ends.length - 1][1]) < starts[starts.length - 1][1]) {
					var capture = ends.pop();
					processor.close_tag(capture[2], capture[0]);
				} else {
					var capture = starts.pop();
					processor.open_tag(capture[2], capture[0]);
				}
			}
		};

		this.match_captures = function(name, match) {
			var matches = [[], []];

			var val = match[0];

			var captures = this[name];
			if (captures) {
				for (key in captures) {
					var value = captures[key];
					if (/^\d*$/.test(key)) {
						var n = Number(key);
						if (n < match.length && match.offsets[n] && match.offsets[n].first >= 0 && match.offsets[n].last != match.offsets[n].first) {
							matches[0].push([match.offsets[n].first, n, value['name']]);
							matches[1].push([match.offsets[n].last, -n, value['name']]);
						}
					} else {
						//TODO
						if (match.indexOf(key) && match.offsets[key] && match.offsets[key].first >= 0 && match.offsets[key].last != match.offsets[key].first) {
							matches[0].push([match.offsets[key].first, match.indexOf(key), value['name']]);
							matches[1].push([match.offsets[key].last, -match.indexOf(key), value['name']]);
						}
					}
				}
			}
			return matches;
		};

		this.match_end = function(string, match, position) {
			var end = gsub(this.end, /\\([1-9])/g,
			function(m) {
				return match[Number(m[1])];
			});
			end = gsub(end, /\\k<(.*?)>/g,
			function(m) {
				return match[m[0]];
			});
			try{
			var endexg = getRegExp(end);
			if (endexg.regexp) {
				if (m = doExec(endexg.regexp, string, position)) {
					return m;
				}
			}
			}catch(e){return null;}
		};
		
		this.convert_regexp = function(match, index, regexp){
			var	reg_match = [];
			reg_match.first = match.first;
			reg_match.last = match.last;
			reg_match.index = match.index;
			reg_match.input = match.input;

			reg_match.offsets = [];
			for (var z=0; z <= regexp.count; z++) {
				reg_match.push(match[index+z]);
				reg_match.offsets.push(match.offsets[index+z]);
			};			
			return reg_match;
		}

		this.match_first_son = function(string, position) {
			if(!this.regexps || !this.scopes){
				this.regexps = [];
				this.scopes = [];
				
				this.get_regexps(this.regexps, this.scopes);
				
				var regvals = [];
				for (var i=0; i < this.regexps.length; i++) {
					if(!this.regexps[i].lookbehind){
						regvals.push(this.regexps[i].regval);
					}
				};
        		this.line_regexps = RegExp("(?:(" + regvals.join(")|(") + "))", "g");
			}
						
			var reg_matchs = null;
			
			if (match = doExec(this.line_regexps, string, position)) {
	            for ( var i=0, j=1; i < this.regexps.length; i++) {
					if(this.regexps[i].lookbehind){
						continue;
					}
	                if (match[j] != undefined) {
						reg_matchs = [this.scopes[i], this.convert_regexp(match, j, this.regexps[i])];
					}
					j += (this.regexps[i].count + 1);
				}
			}
			
			for (var i=0; i < this.regexps.length; i++) {
				if(this.regexps[i].lookbehind && (lb_match = doExec(RegExp(this.regexps[i].regval, 'g'), string, (position - 1)<0 ? 0 : (position - 1)))){
					if(lb_match.offsets.length > 1 && lb_match.offsets[1].last >= position){
						if(reg_matchs == null || reg_matchs[1].first > lb_match.offsets[1].last){
							reg_matchs = [this.scopes[i], lb_match];
							break;
						}
					}
				}
			};
			
			if(reg_matchs){
				return reg_matchs;
			}
			
			return [null, null];
		};
		
		this.get_regexp = function(regexps, scopes){
			if(this.disabled) return;
			for (var i=0; i < scopes.length; i++) {
				if(scopes[i] == this) return true;
			};
			if (this.match) {
				try {
					//console.log(this.match);
					regexps.push(getRegExp(this.match));
					scopes.push(this);
				} catch(e) {
					console.log(e);
				}
				return true;
			} else if (this.begin) {
				try {
					//console.log(this.begin);
					regexps.push(getRegExp(this.begin));
					scopes.push(this);
				} catch(e) {
					console.log(e);
				}
				return true;
			} else {
				return false;
			}
		}
		
		this.get_regexps = function(regexps, scopes){
			if (this.patterns) {
				for (var k=0; k<this.patterns.length;k++) {
					var p = this.patterns[k];
					if(!p.get_regexp(regexps, scopes)) {
						p.get_regexps(regexps, scopes);
					}
				}
			}
		};

	}).call(Scope.prototype);

	var ScopeProxy = function(value, syntax, scope) {
		this.$syntax = syntax;
		this.$self = scope;
		this.$proxy = value['include'];
		this.$proxyer;
		this.is_proxy = true;

		var _self = this;
		this.$check_proxyer = function() {
			var manager = require("ace/textmate/bundles/syntaxes/manager").SyntaxManager;

			if (!_self.$proxyer) {
				switch (_self.$proxy) {
				case "$self":
					// _self.$proxyer = _self.$self || _self.$syntax.root_scope;
					// break;
				case "$base":
					_self.$proxyer = _self.$syntax.root_scope;
					break;
				default:
					if (_self.$syntax.repository && _self.$syntax.repository[_self.$proxy.substring(1)]) {
						_self.$proxyer = _self.$syntax.repository[_self.$proxy.substring(1)];
					} else {
						try{
							_self.$proxyer = manager.getSyntax(_self.$proxy).root_scope;
						}catch(e){
							console.log(_self.$proxy + ' cloud not found!');
							return null;
						}
					}
				}
			}
			if (!_self.$proxyer) {
				return null;
			} else {
				return true;
			}
		}

		//proxy methods
		this.parse_captures = function(name, pattern, match, processor) {
			if (_self.$check_proxyer()) {
				return _self.$proxyer.parse_captures(name, pattern, match, processor);
			}
		};
		this.match_captures = function(name, match) {
			if (_self.$check_proxyer()) {
				return _self.$proxyer.match_captures(name, match);
			}
		};
		this.match_first = function(string, position) {
			if (_self.$check_proxyer()) {
				return _self.$proxyer.match_first(string, position);
			}
		};
		this.match_end = function(string, match, position) {
			if (_self.$check_proxyer()) {
				return _self.$proxyer.match_end(string, match, position);
			}
		};
		this.match_first_son = function(string, position) {
			if (_self.$check_proxyer()) {
				return _self.$proxyer.match_first_son(string, position);
			}
		};
		this.get_regexp = function(regexps, scopes){
			if (_self.$check_proxyer()) {
				return _self.$proxyer.get_regexp(regexps, scopes);
			}
		};
		this.get_regexps = function(regexps, scopes){
			if (_self.$check_proxyer()) {
				return _self.$proxyer.get_regexps(regexps, scopes);
			}
		};
	}

	var SyntaxNode = function(hash) {
		this.inti(hash);
	};

	(function() {

		this.inti = function(hash) {
			for (var key in hash) {
				var value = hash[key];

				if (["firstLineMatch", "foldingStartMarker", "foldingStopMarker"].indexOf(key) >= 0) {
					// try {
					// 	this[key] = getRegExp(value);
					// } catch(e) {
					// 	//console.log(e + " >>>> " + value);
					// }
				} else if (["content", "fileTypes", "scopeName", "keyEquivalent"].indexOf(key) >= 0) {
					this[key] = value;
				} else if (["captures", "beginCaptures", "endCaptures"].indexOf(key) >= 0) {
					this[key] = value;
				}
			}
			
			if(hash.repository){
				this.parse_repository(hash.repository);
			}
			
			this.root_scope = new Scope(hash, this);
			//if (hash.scopeName) manager.addSyntax(hash.scopeName, this);
		};

		this.parse_repository = function(repository) {
			this.repository = {};
			for (k in repository) {
				var val = repository[k];
				if (val['include']) {
					this.repository[k] = new ScopeProxy(val, this, null);
				} else {
					try{
						this.repository[k] = new Scope(val, this);
					} catch(e) {console.log(e);}
				}
			}
		};

		this.parse = function(lines, processor) {
			stack = {scope: this.root_scope, match: null};
			for (var i = 0; i < lines.length; i++) {
				this.parse_line(stack, lines[i], processor);
			}
		};

		this.parse_line = function(start_state, line, processor) {
			processor.new_line(line);
			var state = (start_state == 'start') ? {scope: this.root_scope, match: null} : start_state;
			var top = state.scope,
			match = state.match || null;

			var position = 0;
			var pattern,
			pattern_match;
			
			//begin line scope
			var s = state;
			var begin_scopes = [];
			while(s.scope.begin){
				begin_scopes.push(s.scope);
				if(s.prev){s = s.prev;}
				else{ break; }
			}
			while(begin_scopes.length > 0){
				var begin_scope = begin_scopes.pop();
				if (begin_scope.name) processor.open_tag(begin_scope.name, 0);
				if (begin_scope.contentName) processor.open_tag(begin_scope.contentName, 0);				
			}

			while (true) {
				if (top.patterns) {
					var result = top.match_first_son(line, position);
					pattern = result[0],
					pattern_match = result[1];
				} else {
					pattern = null,
					pattern_match = null;
				}

				var end_match = false;
				if (top.end) {
					end_match = top.match_end(line, match, position);
				}

				if (end_match && (!pattern_match || pattern_match.first >= end_match.first)) {
					pattern_match = end_match;

					var start_pos = pattern_match.first;
					var end_pos = pattern_match.last;

					if (top.contentName) processor.close_tag(top.contentName, start_pos);

					top.parse_captures("captures", pattern_match, processor);
					top.parse_captures("endCaptures", pattern_match, processor);

					if (top.name) processor.close_tag(top.name, end_pos);

					if (state.prev) {
						state = state.prev;
						top = state.scope,
						match = state.match || null;
					}
				} else {
					if (!pattern || !pattern_match) break;

					var start_pos = pattern_match.first;
					var end_pos = pattern_match.last;

					if (pattern.begin) {
						if (pattern.name) processor.open_tag(pattern.name, start_pos);

						pattern.parse_captures("captures", pattern_match, processor);
						pattern.parse_captures("beginCaptures", pattern_match, processor);

						if (pattern.contentName) processor.open_tag(pattern.contentName, end_pos);

						state.next = {
							scope: pattern,
							match: pattern_match,
							prev: state
						};
						state = state.next;
						top = state.scope,
						match = state.match || null;
					} else if (pattern.match) {
						if (pattern.name) processor.open_tag(pattern.name, start_pos);
						pattern.parse_captures("captures", pattern_match, processor);
						if (pattern.name) processor.close_tag(pattern.name, end_pos);
					}
				}
				position = end_pos;
			}
			var s = state;
			while(s.scope.end){
				if (s.scope.name) processor.close_tag(s.scope.name, line.length);
				if (s.scope.contentName) processor.close_tag(s.scope.contentName, line.length);
				if(s.prev){s = s.prev;}
				else{ break; }
			}
			return state;
		};

	}).call(SyntaxNode.prototype);

	exports.SyntaxNode = SyntaxNode;
});
