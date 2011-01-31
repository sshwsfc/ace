
define(function(require, exports, module) {

var oop = require("pilot/oop");

var manager = require("ace/textmate/bundles/syntaxes/manager").SyntaxManager;
var Tokenizer = require("ace/textmate/tokenizer").Tokenizer;

var PythonMode = require("ace/mode/python").Mode;

var MatchingBraceOutdent = require("ace/mode/matching_brace_outdent").MatchingBraceOutdent;

var Mode = function(file_type, mode) {
    this.$tokenizer = new Tokenizer(manager.getScope(file_type));
    this.$outdent = new MatchingBraceOutdent();
	this.$mode = mode;
};
oop.inherits(Mode, PythonMode);

(function() {

    this.getTokenizer = function() {
        return this.$tokenizer;
    };

}).call(Mode.prototype);

exports.Mode = Mode;
});
