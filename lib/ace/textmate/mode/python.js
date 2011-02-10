
define(function(require, exports, module) {

require('ace/textmate/commands');
var oop = require("pilot/oop");

var manager = require("ace/textmate/bundles/syntaxes/manager").SyntaxManager;
var Tokenizer = require("ace/textmate/tokenizer").Tokenizer;

var PythonMode = require("ace/mode/python").Mode;

var MatchingBraceOutdent = require("ace/mode/matching_brace_outdent").MatchingBraceOutdent;

var Mode = function() {
    this.$tokenizer = new Tokenizer(manager.getScope('py'));
    this.$outdent = new MatchingBraceOutdent();
};
oop.inherits(Mode, PythonMode);

(function() {

    this.getTokenizer = function() {
        return this.$tokenizer;
    };

}).call(Mode.prototype);

exports.Mode = Mode;
});
