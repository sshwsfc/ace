
define(function(require, exports, module) {

var Tokenizer = function(syntax) {
    this.root_syntax = syntax;
    
    this.patterns = this.root_syntax.patterns;

    this.regExps = {};
    var startState = syntax.scopeName;
    
    function addPatterns(state, regex){
    	if(! this.regExps[state]){
    		this.regExps[state] = []
    	}
    	this.regExps[state].push(regex);
    }
    
    for (var i=0;i < this.patterns.length; i++) {
        var p = this.patterns[i];
        if(p.begin && p.end){
        
        } else {
        	addPatterns(startState, p.match)
        }
        
        var ruleRegExps = [];

        for ( var i = 0; i < state.length; i++) {
            ruleRegExps.push(state[i].regex);
        };

        this.regExps[key] = new RegExp("(?:(" + ruleRegExps.join(")|(") + ")|(.))", "g");
    }
};

(function() {

    this.getLineTokens = function(line, startState) {
        var currentState = startState;
        var state = this.rules[currentState];
        var re = this.regExps[currentState];
        re.lastIndex = 0;

        var match, tokens = [];

        var lastIndex = 0;

        var token = {
            type: null,
            value: ""
        };

        while (match = re.exec(line)) {
            var type = "text";
            var value = match[0];

            if (re.lastIndex == lastIndex) { throw new Error("tokenizer error"); }
            lastIndex = re.lastIndex;

            for ( var i = 0; i < state.length; i++) {
                if (match[i + 1]) {
                    if (typeof state[i].token == "function") {
                        type = state[i].token(match[0]);
                    }
                    else {
                        type = state[i].token;
                    }

                    if (state[i].next && state[i].next !== currentState) {
                        currentState = state[i].next;
                        var state = this.rules[currentState];
                        var lastIndex = re.lastIndex;

                        var re = this.regExps[currentState];
                        re.lastIndex = lastIndex;
                    }
                    break;
                }
            };
            
                  
            if (token.type !== type) {
                if (token.type) {
                    tokens.push(token);
                }
                token = {
                    type: type,
                    value: value
                };
            } else {
                token.value += value;
            }
        };

        if (token.type) {
            tokens.push(token);
        }

        return {
            tokens : tokens,
            state : currentState
        };
    };

}).call(Tokenizer.prototype);

exports.Tokenizer = Tokenizer;
});
