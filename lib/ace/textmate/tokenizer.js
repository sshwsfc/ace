
define(function(require, exports, module) {

var manager = require("ace/textmate/bundles/syntaxes/manager").SyntaxManager;
var SyntaxNode = require("ace/textmate/syntax").SyntaxNode;
var Processer = require("ace/textmate/processor").Processer;

var Tokenizer = function(scope) {
    this.$default_syntax = manager.getSyntax(scope);
};

(function() {

    this.getLineTokens = function(line, state) {
		var processor = new Processer();
		var currentState = this.$default_syntax.parse_line(state, line, processor);

        return {
            tokens : processor,
            state : currentState
        };
    };

}).call(Tokenizer.prototype);

exports.Tokenizer = Tokenizer;
});
