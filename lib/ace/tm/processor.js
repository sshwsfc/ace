
define(function(require, exports, module) {

var Processer = function(scope) {
	this.$tags = [];
};

(function() {

	this.open_tag = function(name, position){
		console.log('TAG:' + name);
		this.$tags.push([name, position]);
	};
	this.close_tag = function(name, position){
		console.log('END:' + name);
		this.$tags.push([name, position]);
	};
	this.new_line = function(line){
		
	};
	this.start_parsing = function(name){
		
	};
	this.end_parsing = function(name){
		
	};
	
}).call(Processer.prototype);

exports.Processer = Processer;
});
