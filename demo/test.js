define(function(require, exports, module) {

exports.launch = function(env) {

	var SyntaxNode = require("ace/tm/syntax").SyntaxNode;
	var python_syntax = new SyntaxNode(require("ace/syntax/" + 'source.python').hash);
	console.log(python_syntax);
};

});
