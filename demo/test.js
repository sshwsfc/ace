define(function(require, exports, module) {

var manager = require("ace/textmate/bundles/syntaxes/manager").SyntaxManager;
var Mode = require("ace/textmate/mode").Mode;
var text = require('text!demo/test.rb');

exports.launch = function(env) {
	
	var mode = new Mode('rb');
	var token = mode.getTokenizer();
	var text_lines = text.split(/\n/g);
	
	var lines = [];
	var start_time = new Date();
	var state = 'start';
	for (var i=0; i < text_lines.length; i++) {
		var t = token.getLineTokens(text_lines[i], state);
		lines.push(t.tokens);
		state = t.state;
	};
	var sb = [];
	console.log((new Date) - start_time);
	
    var spaceRe = /[\v\f \u00a0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000]/g;
    var spaceReplace = "&nbsp;";
	
	for (var i=0; i < lines.length; i++) {
		sb.push("<div class='ace_line'>");
		lines[i].genString(sb,
			{'tabString':'&nbsp;&nbsp;&nbsp;&nbsp;', 'spaceRe': spaceRe, 'spaceReplace': spaceReplace, 'characterWidth': 12});	
		sb.push('</div>');
	};
	
	document.getElementById('ace_text-layer').innerHTML = sb.join('');
	
};

});
