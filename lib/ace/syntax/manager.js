
define(function(require, exports, module) {

var SyntaxNode = require("ace/tm/syntax").SyntaxNode;
var python_hash = require("ace/syntax/source.python").hash;

var SyntaxManager = function(scope) {
    this.$syntaxs_hash = {'source.python' : python_hash};
    this.$syntaxs = {};

	this.$file_typs = {'py':'source.python'};
};

(function() {
	
	this.getScope = function(file_type){
		return this.$file_typs[file_type];
	}
	this.addSyntax = function(scope, node){
		this.$syntaxs[scope] = node;
	}
	this.getSyntax = function(scope){
		if(!this.$syntaxs[scope] && this.$syntaxs_hash[scope]){
			this.addSyntax(scope, new SyntaxNode(this.$syntaxs_hash[scope]));
		}
		return this.$syntaxs[scope];
	}

}).call(SyntaxManager.prototype);

exports.SyntaxManager = new SyntaxManager();
});
