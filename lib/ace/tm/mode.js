
define(function(require, exports, module) {

var Tokenizer = require("ace/tm/tokenizer").Tokenizer;

var Mode = function(scope) {
	this.$syntax = require("ace/syntax/" + scope).Syntax;
    this.$tokenizer = new Tokenizer(this.$syntax);
};

(function() {

    this.getTokenizer = function() {
        return this.$tokenizer;
    };

    this.toggleCommentLines = function(state, doc, startRow, endRow) {
        return 0;
    };

    this.getNextLineIndent = function(state, line, tab) {
        return "";
    };

    this.checkOutdent = function(state, line, input) {
        return false;
    };

    this.autoOutdent = function(state, doc, row) {
    };

    this.$getIndent = function(line) {
        var match = line.match(/^(\s+)/);
        if (match) {
            return match[1];
        }

        return "";
    };

}).call(Mode.prototype);

exports.Mode = Mode;
});
