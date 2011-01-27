define(function(require, exports, module) {

var SyntaxNode = require("ace/tm/syntax").SyntaxNode;
var Processer = require("ace/tm/processor").Processer;
var text = require('text!demo/test.py');

exports.launch = function(env) {
	
	var python_syntax = new SyntaxNode(require("ace/syntax/" + 'source.python').hash);
	
	var processor = new Processer();
	python_syntax.parse(text.split('\n'), processor);
	console.log(processor.$tags);
};

});
