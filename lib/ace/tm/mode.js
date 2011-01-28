
define(function(require, exports, module) {

var oop = require("pilot/oop");

var manager = require("ace/syntax/manager").SyntaxManager;
var Tokenizer = require("ace/tm/tokenizer").Tokenizer;

var PythonMode = require("ace/mode/python").Mode;

var Mode = function(file_type, mode) {
    this.$tokenizer = new Tokenizer(manager.getScope(file_type));
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
