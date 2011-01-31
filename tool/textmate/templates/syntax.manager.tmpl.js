define(function(require, exports, module) {

var SyntaxNode = require("ace/textmate/syntax").SyntaxNode;

var syntaxs_hash = {
	%syntaxs_hash%
}
var file_typs = {
	%file_typs%
}

var SyntaxManager = function(scope) {
    this.$syntaxs_hash = syntaxs_hash;
	this.$file_typs = file_typs;
    this.$syntaxs = {};
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
