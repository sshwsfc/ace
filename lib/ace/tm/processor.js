define(function(require, exports, module) {

var Processer = function() {
	this.sb = [];
};

(function() {
	
	this.genString = function(sb, config){

		var val_fn = function(value) {
			var spaceRe = config['spaceRe'];
			var spaceReplace = config['spaceReplace'];
			var tabString = config['tabString'];
			var characterWidth = config['characterWidth'];

			return value
			.replace(/&/g, "&amp;")
			.replace(/</g, "&lt;")
			.replace(spaceRe, spaceReplace)
			.replace(/\t/g, tabString)
			.replace(/[\u3040-\u309F]|[\u30A0-\u30FF]|[\u4E00-\u9FFF\uF900-\uFAFF\u3400-\u4DBF]/g,
			function(c) {
				return "<span class='ace_cjk' style='width:" + (characterWidth * 2) + "px'>" + c + "</span>"
			});
		}
		
		this.next(this.$line.length);
		for(var i=0;i<this.sb.length;i++){
			if(this.sb[i] instanceof Array && this.sb[i].length == 1){
				sb.push(val_fn(this.sb[i][0]));
			} else {
				sb.push(this.sb[i]);
			}
		}
	}	
	this.next = function(position){
		if(this.$index < position){
			this.sb.push([this.$line.substring(this.$index, position)]);
			this.$index = position;
		}
	}
	this.open_tag = function(name, position) {
		//console.log('TAG:' + position + ' - ' + name);
		this.next(position);this.sb.push("<span class='" + "ace_" + name.replace(/\./g, " ace_") + "'>");
	};
	this.close_tag = function(name, position) {
		//console.log('END:' + position + ' - ' + name);
		this.next(position);this.sb.push("</span>");
	};	
	this.new_line = function(line) {
		this.$line = line;
		this.$index = 0;
	};
	
	this.start_parsing = function(name) {
		};
	this.end_parsing = function(name) {
		};

}).call(Processer.prototype);

exports.Processer = Processer;
});
