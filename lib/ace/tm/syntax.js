tch
define(function(require, exports, module) {

var syntaxes = {}

var SyntaxProxy = function(){

};

(function() {

}).call(SyntaxProxy.prototype);

var SyntaxNode = function(hash, syntax) {
	this.inti(hash, syntax);
};

(function() {

    this.inti = function(hash, syntax) {
    	if(syntax) this.syntax = syntax;
    	else	this.syntax = this;
    	
		for(var key in hash){
			var value = hash[key];
			if(key == 'patterns'){
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
				if(Number(key)){
					if(Number(key) < match.size)
						matches.push([Number(key), match[Number(key)], value['name']]);
				} else {
					//TODO
					if(match.indexOf(key))
						matches.push([match.indexOf(key), match[key], value['name']]);
				}
			}
		}
		return matches;
	};      
      
    this.match_first = function(string, position){
		if(this.match){
            if(match = this.match.match( string, position ))
               return [this, match];
		} else if(this.begin){
            if(match = this.begin.match( string, position ))
               return [this, match];
		} else if(this.end){}
		else {
			return this.match_first_son(string, position)
		}
		return [null, false]
    };
    
    this.match_end = function(string, match, position){
    	//TODO
    };
    
    this.match_first_son = function(string, position){
         var match = false;
         if(this.patterns){
			for(k in patterns){
				var p = patterns[k];
				var tmatch = p.match_first(string, position);
				if(tmatch && (! match || match[1].offset.first > tmatch[1].offset.first)){
					match = tmatch;
				}
			}
         }
         return match;
    };
    
    this.parse = function(lines, processor){
    	stack = [[this, false]]
    	for(var i=0;i<lines.length;i++){
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
				pattern = null, pattern_match = false;
            }
            
            var end_match = false;
            if(top.end)
				end_match = top.match_end( line, match, position );
            
            if(end_match && ( ! pattern_match || pattern_match.offset.first >= end_match.offset.first )){
				pattern_match = end_match;

				var start_pos = pattern_match.offset.first;
				var end_pos = pattern_match.offset.last;

				if(top.contentName) processor.close_tag(top.contentName, start_pos);

				this.parse_captures("captures", top, pattern_match, processor);
				this.parse_captures("endCaptures", top, pattern_match, processor);

				if(top.name) processor.close_tag(top.name, end_pos);
               
				var tp = stack.pop();
				top = tp[0], match = tp[1];				
            }else{
				if(!pattern) break;              

				var start_pos = pattern_match.offset.first;
				var end_pos = pattern_match.offset.last;
               
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
exports.syntaxes = syntaxes;
});
