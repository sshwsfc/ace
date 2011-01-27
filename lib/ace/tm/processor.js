
define(function(require, exports, module) {

var Processer = function() {
	this.$lines = [];
	this.$tags = [];
};

(function() {

	this.getValue = function(){
		console.log(Date());
		var sbs = [];
		for(var i=0;i<this.$lines.length;i++){
			var sb = [];
			var line = this.$lines[i];
			var tags = this.$tags[i];
			var index = 0;
			if(tags.length > 0){
				for(var j=0;j<tags.length;j++){
					var tag = tags[j];
					sb.push(line.substring(index, tag[0]).replace(/\t/g, '&nbsp;&nbsp;&nbsp;&nbsp;'));
					sb.push(tag[1]);
					index = tag[0];
				}
			}
			sb.push(line.substring(index).replace(/\t/g, '&nbsp;&nbsp;&nbsp;&nbsp;'));
			sbs.push(sb.join(''));
		}
		return "<div class='ace_line'>" + sbs.join('</div><div class="ace_line">') + '</div>';
		console.log(Date());
	}

	this.open_tag = function(name, position){
		//console.log('TAG:' + position + ' - ' + name);
        var classes = "ace_" + name.replace(/\./g, " ace_");
		this.$tags[this.$tags.length-1].push([position, "<span class='"+ classes+ "'>"]);
	};
	this.close_tag = function(name, position){
		//console.log('END:' + position + ' - ' + name);
		this.$tags[this.$tags.length-1].push([position, '</span>']);
	};
	this.new_line = function(line){
		this.$lines.push(line);
		this.$tags.push([]);
	};
	this.start_parsing = function(name){
		
	};
	this.end_parsing = function(name){
		
	};
	
}).call(Processer.prototype);

exports.Processer = Processer;
});
