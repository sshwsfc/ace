define(function(require, exports, module) {

var SyntaxNode = require("ace/tm/syntax").SyntaxNode;
var Processer = require("ace/tm/processor").Processer;
var text = require('text!demo/test.py');

exports.launch = function(env) {
	
	var m = /\b(?:(import)|(from))\b/g.exec('import xx from sss');
	m.index;
	
	var python_syntax = new SyntaxNode(require("ace/syntax/" + 'source.python').hash);
	
	var processor = new Processer(text);
		console.log(Date());
	python_syntax.parse(text.split('\n'), processor);
		console.log(Date());
	document.getElementById('ace_text-layer').innerHTML = (processor.getValue());
};

});
