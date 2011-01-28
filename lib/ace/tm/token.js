define(function(require, exports, module) {

    var Token = function(name) {	
        this.tokens = [];
		this.name = name;
    };

    (function() {

        this.genString = function(sb, val_fn, out_fn) {	
			var tmpsb = [];
            for (var i = 0; i < this.tokens.length; i++) {
                var token = this.tokens[i];
				if(token.genString){
					tmpsb.push(token.genString(tmpsb, val_fn, out_fn));
				}else{
					sb.push(val_fn(token));
				}
            };
			sb.push(out_fn(this, tmpsb.join('')));
        };

    }).call(Token.prototype);

    exports.Token = Token;
});
