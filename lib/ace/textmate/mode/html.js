
define(function(require, exports, module) {

require('ace/textmate/commands');
var oop = require("pilot/oop");

var manager = require("ace/textmate/bundles/syntaxes/manager").SyntaxManager;
var Tokenizer = require("ace/textmate/tokenizer").Tokenizer;

var TextMode = require("ace/mode/text").Mode;

var Mode = function() {
    this.$tokenizer = new Tokenizer(manager.getScope('html'));
};
oop.inherits(Mode, TextMode);

(function() {

    this.getTokenizer = function() {
        return this.$tokenizer;
    };

}).call(Mode.prototype);

exports.Mode = Mode;
});
