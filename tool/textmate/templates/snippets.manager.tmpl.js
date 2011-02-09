define(function(require, exports, module) {

var snippets_hash = %snippets_hash%;

var SnippetsManager = function(scope) {
    this.$snippets_hash = snippets_hash;
};

(function() {
	
	this.getTabSnippets = function(scope){
		return (this.$snippets_hash[scope] && this.$snippets_hash[scope]['tab']) || {};
	}

}).call(SnippetsManager.prototype);

exports.SnippetsManager = new SnippetsManager();
});
