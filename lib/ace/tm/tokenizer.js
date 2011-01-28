
define(function(require, exports, module) {

var manager = require("ace/syntax/manager").SyntaxManager;
var SyntaxNode = require("ace/tm/syntax").SyntaxNode;
var Processer = require("ace/tm/processor").Processer;

var Tokenizer = function(scope) {
    this.$default_syntax = manager.getSyntax(scope);
};

(function() {

    this.getLineTokens = function(line, state) {
    	var syntax = (state == 'start' || 1)? this.$default_syntax : null;
		var processor = new Processer(line);
		syntax.parse(line.split(/\n/g), processor);
		
        var token = {
            type: "text",
            value: processor.getValue()
        };

        return {
            tokens : [token],
            state : state
        };
    };

}).call(Tokenizer.prototype);

exports.Tokenizer = Tokenizer;
});
