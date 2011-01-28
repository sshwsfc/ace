define(function(require, exports, module) {

var Token = function(name, parent) {
	this.tokens = [];
	this.name = name;
	this.parent = parent;
};

(function() {

	this.genString = function(sb, val_fn, out_fn) {
		var tmpsb = [];
		for (var i = 0; i < this.tokens.length; i++) {
			var token = this.tokens[i];
			if (token.genString) {
				tmpsb.push(token.genString(tmpsb, val_fn, out_fn));
			} else {
				tmpsb.push(val_fn(token));
			}
		};
		sb.push(out_fn(this, tmpsb.join('')));
	};

}).call(Token.prototype);

var LineToken = function(root_token) {

	this.$root = root_token;

	this.genString = function(sb, config) {

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

		var out_fn = function(token, output) {
			if (token.name) {
				var classes = "ace_" + token.name.replace(/\./g, " ace_");
				return "<span class='" + classes + "'>" + output + "</span>";
			} else {
				return output;
			}
		}

		this.$root.genString(sb, val_fn, out_fn);
	}

}

var Processer = function() {
	this.$tokens = [];
};

(function() {

	this.getTokens = function() {
		return this.$tokens;
	}

	this.getLinesToken = function() {
		var lines = []
		for (var i=0; i < this.$tokens.length; i++) {
			lines.push(new LineToken(this.$tokens[i]));
		};
		return lines;
	}

	this.getLineToken = function() {
		return new LineToken(this.$tokens[0]);
	}

	this.open_tag = function(name, position) {
		//console.log('TAG:' + position + ' - ' + name);
		if(this.$current){
			this.$current.tokens.pop();		
			if(this.$index < position){
				this.$current.tokens.push(this.$line.substring(this.$index, position));
			}
		}
		
		var new_token = new Token(name, this.$current);
		new_token.tokens.push(this.$line.substring(position));
		this.$current.tokens.push(new_token);
		
		this.$current = new_token;
		this.$index = position;
	};
	this.close_tag = function(name, position) {
		//console.log('END:' + position + ' - ' + name);
		this.$current.tokens.pop();		
		if(this.$index < position){
			this.$current.tokens.push(this.$line.substring(this.$index, position));
		}		
		this.$current = this.$current.parent;
		if(this.$current){
			this.$current.tokens.push(this.$line.substring(position));
		}
		this.$index = position;
	};
	this.new_line = function(line) {
		this.$line = line;
		this.$index = 0;
		
		var root = new Token();
		root.tokens.push(line);
		
		this.$tokens.push(root);
		this.$current = root;
	};
	this.start_parsing = function(name) {
		};
	this.end_parsing = function(name) {
		};

}).call(Processer.prototype);

exports.Processer = Processer;
});
