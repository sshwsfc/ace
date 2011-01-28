define(function(require, exports, module) {

var Mode = require("ace/tm/mode").Mode;
var SyntaxNode = require("ace/tm/syntax").SyntaxNode;
var Processer = require("ace/tm/processor").Processer;

var text = require('text!demo/test.py');

exports.launch = function(env) {
	
	var mode = new Mode('py');
	var token = mode.getTokenizer();
	var tokens = token.getLineTokens(text, 'start').tokens;
	document.getElementById('ace_text-layer').innerHTML = (tokens[0].value);
	
};

});
