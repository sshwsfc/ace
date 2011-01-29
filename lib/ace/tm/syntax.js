
var doExec = function(regex, input, pos){
	regex.lastIndex = pos;
    if(match = regex.exec(input)){
		match.first = match.index;
		match.last = match.index + match[0].length;
		match.regex = regex;
		
		match.offsets = [];
		for(var i=0;i<match.length;i++){
			var key = match[i];
			if(key){
				var first = match.index + match[0].indexOf(key);
				match.offsets.push({first: first, last: first + key.length});
			} else {
				match.offsets.push({first: -1, last: -1});
			}
		}
						
    	return match;
	} else {
		return null;
	}
}

var getRegExp = function(val){
	var modifier = 'gx';
	if(inset_modifier = /\?([i|x|s])\:/g.exec(val)){
		val = val.replace(/\?[i|x|s]\:/g, '');
		modifier += inset_modifier[1];
	}
	try{
		return XRegExp(val, modifier);
	}catch(e){
		return RegExp(val, modifier);
	}
}

function gsub(str, pattern, replacement) {
	var result = '', source = str, match;

	while (source.length > 0) {
	  if (match = source.match(pattern)) {
	    result += source.slice(0, match.index);
	    result += replacement(match);
	    source  = source.slice(match.index + match[0].length);
	  } else {
	    result += source, source = '';
	  }
	}
	return result;
}

define(function(require, exports, module) {

var SyntaxProxy = function(value, syntax){
	this.$syntax = syntax;
	this.$proxy = value['include'];
	this.$proxyer;
	
	var _self = this;
	this.$check_proxyer = function(){
		var manager = require("ace/syntax/manager").SyntaxManager;
		
		if(! _self.$proxyer){
			switch(_self.$proxy){
				case "$self":
				case "$base": _self.$proxyer = _self.$syntax; break;
				default: 
					if(_self.$syntax.repository && _self.$syntax.repository[_self.$proxy.substring(1)]){
						_self.$proxyer = _self.$syntax.repository[_self.$proxy.substring(1)];
					} else {
						_self.$proxyer = manager.getSyntax(_self.$proxy);
					}
			}
		}
		if(! _self.$proxyer){ return null;} else {return true;}
	}
	
	//proxy methods
	this.parse_captures = function(name, pattern, match, processor){
		if(_self.$check_proxyer()){
			return _self.$proxyer.parse_captures(name, pattern, match, processor);
		}
	};
	this.match_captures = function(name, match){
		if(_self.$check_proxyer()){
			return _self.$proxyer.match_captures(name, match);
		}
	};      
    this.match_first = function(string, position){
		if(_self.$check_proxyer()){
			return _self.$proxyer.match_first(string, position);
		}
    };    
    this.match_end = function(string, match, position){
		if(_self.$check_proxyer()){
			return _self.$proxyer.match_end(string, match, position);
		}
    };    
    this.match_first_son = function(string, position){
		if(_self.$check_proxyer()){
			return _self.$proxyer.match_first_son(string, position);
		}
    };
}

var SyntaxNode = function(hash, syntax) {
	this.inti(hash, syntax);
};

(function() {

    this.inti = function(hash, syntax) {
    	this.syntax = syntax || this;
		if(this.scopeName) manager.addSyntax(this.scopeName, this);
    	
		for(var key in hash){
			var value = hash[key];
			
			if(["firstLineMatch", "foldingStartMarker", "foldingStopMarker", "match", "begin"].indexOf(key) >= 0){
				try{
					this[key] = getRegExp(value);
				}catch(e){
					//console.log(e + " >>>> " + value);
				}
			} else if(["content", "fileTypes", "name", "contentName", "end", "scopeName", "keyEquivalent"].indexOf(key) >= 0){
				this[key] = value;
			} else if(["captures", "beginCaptures", "endCaptures"].indexOf(key) >= 0){
				this[key] = value;
			} else if(key == 'patterns'){
				this.create_children(value);
			} else if(key == 'repository'){
				this.parse_repository(value);
			}
		}
    };

    this.parse_repository = function(repository) {
		this.repository = {};
		for(k in repository){
			var val = repository[k];
			if(val['include']){
				this.repository[k] = new SyntaxProxy(val, this.syntax);
			} else {
				this.repository[k] = new SyntaxNode(val, this.syntax);
			}
		}
    };

    this.create_children = function(patterns) {
		this.patterns = [];
		for(k in patterns){
			var p = patterns[k];
			if(p['include']){
				this.patterns.push(new SyntaxProxy(p, this.syntax));
			} else {
				this.patterns.push(new SyntaxNode(p, this.syntax));
			}
		}
    };
    
	this.parse_captures = function(name, pattern, match, processor){
    	var matches = pattern.match_captures( name, match );
		
		var starts = matches[0], ends = matches[1];
		starts.sort(function(a, b){return b[0] - a[0]});
		ends.sort(function(a, b){return b[0] - a[0]});
		
		while(starts.length > 0 || ends.length > 0){
			if(starts.length == 0){
				var capture = ends.pop();
				processor.close_tag(capture[2], capture[0]);
			} else if(ends.length == 0){
				var capture = starts.pop();
				processor.open_tag(capture[2], capture[0]);
			} else if(Math.abs(ends[ends.length -1][1]) < starts[starts.length-1][1]){
				var capture = ends.pop();
				processor.close_tag(capture[2], capture[0]);
			} else {
				var capture = starts.pop();
				processor.open_tag(capture[2], capture[0]);
			}
		}
	};

	this.match_captures = function(name, match){
		var matches = [[], []];
		
		var val = match[0];
		
		var captures = this[name];
		if(captures){
			for(key in captures){
				var value = captures[key];
				if(/^\d*$/.test(key)){
					var n = Number(key);
					if(n < match.length && match.offsets[n] && match.offsets[n].first >=0 && match.offsets[n].last != match.offsets[n].first){
						matches[0].push([match.offsets[n].first, n, value['name']]);
						matches[1].push([match.offsets[n].last, -n, value['name']]);
					}
				} else {
					//TODO
					if(match.indexOf(key) && match.offsets[key] && match.offsets[key].first >=0 && match.offsets[key].last != match.offsets[key].first){
						matches[0].push([match.offsets[key].first, match.indexOf(key), value['name']]);
						matches[1].push([match.offsets[key].last, -match.indexOf(key), value['name']]);
					}
				}
			}
		}
		return matches;
	};      
      
    this.match_first = function(string, position){
		if(this.match){
            if(match = doExec(this.match, string, position)){
            	return [this, match];
			}
		} else if(this.begin){
			try{
				getRegExp(this.end);
		        if(match = doExec(this.begin, string, position)){
		        	return [this, match];
				}
			}catch(e){}
		} else if(this.end){}
		else {
			return this.match_first_son(string, position)
		}
		return [null, null];
    };
    
    this.match_end = function(string, match, position){
		var end = gsub(this.end, /\\([1-9])/g, function(m){
			return match[Number(m[0])];
		});
		end = gsub(end, /\\k<(.*?)>/g, function(m){
			return match[m[0]];
		});
		var endexg = getRegExp(end);
		if(endexg){
	        if(m = doExec(endexg, string, position)){
	           	return m;
			}
		}
    };
    
    this.match_first_son = function(string, position){
         var match = [null, null];
         if(this.patterns){
			for(k in this.patterns){
				var p = this.patterns[k];
				var tmatch = p.match_first(string, position);
				if(tmatch && tmatch[1] && (! match[1] || match[1].first > tmatch[1].first)){
					match = tmatch;
				}
			}
         }
         return match;
    };
    
    this.parse = function(lines, processor){
    	stack = [[this, null]]
    	for(var i=0;i<lines.length;i++){
			//console.log('>>>>>>:' + lines[i]);
    		this.parse_line(stack, lines[i], processor);
    	}
    };
    
    this.parse_line = function(stack, line, processor){
    	processor.new_line(line);
    	
    	var p = stack[stack.length - 1];
    	var top = p[0], match = p[1];
    	
    	var position = 0;
    	var pattern, pattern_match;
    	
    	while(true){
            if(top.patterns){
            	var result = top.match_first_son(line, position);
            	pattern = result[0], pattern_match = result[1];
            }else{
				pattern = null, pattern_match = null;
            }
            
            var end_match = false;
            if(top.end){
				end_match = top.match_end( line, match, position );
			}
            
            if(end_match && ( ! pattern_match || pattern_match.first >= end_match.first )){
				pattern_match = end_match;

				var start_pos = pattern_match.first;
				var end_pos = pattern_match.last;

				if(top.contentName) processor.close_tag(top.contentName, start_pos);

				this.parse_captures("captures", top, pattern_match, processor);
				this.parse_captures("endCaptures", top, pattern_match, processor);

				if(top.name) processor.close_tag(top.name, end_pos);
               
				stack.pop();
				top = stack[stack.length-1][0], match = stack[stack.length-1][1];
            }else{
				if(!pattern || !pattern_match) break;

				var start_pos = pattern_match.first;
				var end_pos = pattern_match.last;
               
				if(pattern.begin){
					if(pattern.name) processor.open_tag(pattern.name, start_pos);

					this.parse_captures("captures", pattern, pattern_match, processor);
					this.parse_captures("beginCaptures", pattern, pattern_match, processor);
					
					if(pattern.contentName)processor.open_tag(pattern.contentName, end_pos);
					
					top = pattern;
					match = pattern_match;
					stack.push([top, match]);
				}else if(pattern.match){
					if(pattern.name) processor.open_tag(pattern.name, start_pos);
					this.parse_captures("captures", pattern, pattern_match, processor);
					if(pattern.name) processor.close_tag(pattern.name, end_pos);
				}
            }
            position = end_pos;
    	}
    };

}).call(SyntaxNode.prototype);

(function(){
	this.syntaxs = {};
	
	this.addSyntaxs = function(scope, node){
		this.syntaxs[scope] = node;
	}
	this.getSyntaxs = function(scope){
		if(!this.syntaxs[scope]){
			this.addSyntaxs(scope, new SyntaxNode(python_hash));
		}
		return this.syntaxs[scope];
	}
	
}).call(SyntaxNode);

exports.SyntaxNode = SyntaxNode;
});
