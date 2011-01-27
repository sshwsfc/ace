
var getRegExp = function(val){
	var modifier = 'g';
	val = val.replace(/\?i\:/g, '');
	return RegExp(val, modifier);
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

var SyntaxProxy = function(value, syntax){
	this.$syntax = syntax;
	this.$proxy = value['include'];
	this.$proxyer;
	
	var _self = this;
	this.$check_proxyer = function(){
		if(! _self.$proxyer){
			switch(_self.$proxy){
				case "$self":
				case "$base": _self.$proxyer = _self.$syntax; break;
				default: 
					if(_self.$syntax.repository && _self.$syntax.repository[_self.$proxy.substring(1)]){
						_self.$proxyer = _self.$syntax.repository[_self.$proxy.substring(1)];
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

define(function(require, exports, module) {

var SyntaxNode = function(hash, syntax) {
	this.inti(hash, syntax);
};

(function() {

    this.inti = function(hash, syntax) {
    	this.syntax = syntax || this;
    	
		for(var key in hash){
			var value = hash[key];
			
			if(["firstLineMatch", "foldingStartMarker", "foldingStopMarker", "match", "begin"].indexOf(key) >= 0){
				try{
					this[key] = getRegExp(value);
				}catch(e){}
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
    	var captures = pattern.match_captures( name, match );
    	//TODO    
	};

	this.match_captures = function(name, match){
		var matches = [];
		var captures = this[name];
		if(captures){
			for(key in captures){
				var value = captures[key];
				if(/^\d*$/.test(key)){
					if(Number(key) < match.length && match[Number(key)])
						matches.push([Number(key), match[Number(key)], value['name']]);
				} else {
					//TODO
					if(match.indexOf(key) && match[key])
						matches.push([match.indexOf(key), match[key], value['name']]);
				}
			}
		}
		return matches;
	};      
      
    this.match_first = function(string, position){
		if(this.match){
			this.match.lastIndex = position;
            if(match = this.match.exec(string)){
				match.first = match.index;
				match.last = match.index + match[0].length;
            	return [this, match];
			}
		} else if(this.begin){
			this.begin.lastIndex = position;
            if(match = this.begin.exec(string)){
				match.first = match.index;
				match.last = match.index + match[0].length;
            	return [this, match];
			}
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
			endexg.lastIndex = position;
	        if(m = endexg.exec(string)){
				m.first = m.index;
				m.last = m.index + m[0].length;
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
			console.log('>>>>>>:' + lines[i]);
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
            if(top.end)
				end_match = top.match_end( line, match, position );
            
            if(end_match && ( ! pattern_match || pattern_match.first >= end_match.first )){
				pattern_match = end_match;

				var start_pos = pattern_match.first;
				var end_pos = pattern_match.last;

				if(top.contentName) processor.close_tag(top.contentName, start_pos);

				this.parse_captures("captures", top, pattern_match, processor);
				this.parse_captures("endCaptures", top, pattern_match, processor);

				if(top.name) processor.close_tag(top.name, end_pos);
               
				var tp = stack.pop();
				top = tp[0], match = tp[1];
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

exports.SyntaxNode = SyntaxNode;
});
