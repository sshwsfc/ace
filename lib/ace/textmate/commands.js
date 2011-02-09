
define(function(require, exports, module) {

var lang = require("pilot/lang");
var canon = require("pilot/canon");

var Range = require("ace/range").Range;
var snippetsManager = require("ace/textmate/bundles/snippets/manager").SnippetsManager;

var tokenRe = /^[^\s]+/g;
var nonTokenRe = /^(?:[\s|[\u3040-\u309F]|[\u30A0-\u30FF]|[\u4E00-\u9FFF\uF900-\uFAFF\u3400-\u4DBF])+/g

getWordRange = function(line, row, column) {
    var inToken = false;
    if (column > 0) {
        inToken = !!line.charAt(column - 1).match(tokenRe);
    }

    if (!inToken) {
        inToken = !!line.charAt(column).match(tokenRe);
    }

    var re = inToken ? tokenRe : nonTokenRe;

    var start = column;
    if (start > 0) {
        do {
            start--;
        }
        while (start >= 0 && line.charAt(start).match(re));
        start++;
    }

    var end = column;
    while (end < line.length && line.charAt(end).match(re)) {
        end++;
    }

    return new Range(row, start, row, end);
};

canon.addCommand({
    name: "tm_tab_trigger",
    exec: function(env, args, request) {    	
        var sel   = env.editor.getSelection();
        var session   = env.editor.getSession();
        
		var lead = sel.getSelectionLead();
		var line = session.getLine(lead.row);
		var wordrange = getWordRange(line, lead.row, lead.column);
		var current_word = /[^\s]+/g.exec(session.getTextRange(wordrange));
		
		var scope = 'source.python';
		
		var snippets = snippetsManager.getTabSnippets(scope);
		console.log(snippets);
		
		var selected_snippets = [];
		if(snippets){
			for (var i=0; i < snippets.length; i++) {
				if(snippets[i].tabTrigger == current_word){
					selected_snippets.push(snippets[i]);
				}
			};
		}
		
		if(selected_snippets.length > 0){
			sel.setSelectionRange(wordrange);
			env.editor.insert(selected_snippets[0].content);
				
		}else{
			env.editor.indent();
		}
    }
});
canon.addCommand({
    name: "tm_completions",
    exec: function(env, args, request) {     	
        var sel   = env.editor.getSelection();
        var session   = env.editor.getSession();
        
		var lead = sel.getSelectionLead();
		var wordrange = session.getWordRange(lead.row, lead.column);
		var current_word = /[\w\d\_]+/g.exec(session.getTextRange(wordrange));
		
		if(!current_word){
			return false;
		} else {
			current_word = current_word[0];
		}
		
		var init = false;
		
        if(!session.autoComRe || !session.autoComText){
			session.autoComRe = new RegExp('([\\w\\d\\_]+'+ lang.stringReverse(current_word) +')[^\\w\\d]', 'g');
			
			var r = Range.fromPoints({'row':0,'column':0}, sel.getSelectionLead());
			session.autoComText = lang.stringReverse(session.getTextRange(r));
			session.autoComMatchedWords = [];
			
			init = true;
        }
        
        if(!init && session.autoComMatchedWords.length == 0) return false;
    	
    	var result;
    	var matched = false;
    	
    	var inputWord = function(w){
			sel.setSelectionRange(wordrange);
			env.editor.onTextInput(w);
			
			session.autoComMatchedWords.push(w);
		}
    	
    	while (!matched && (result = session.autoComRe.exec(session.autoComText))){
    		if(result.length == 2){
    			var match_word = lang.stringReverse(result[1]);
    			
    			if(session.autoComMatchedWords.indexOf(match_word) == -1){
					inputWord(match_word);
					matched = true;
    			}
    		}
    	}
    	
    	if(init){
			var event = require("pilot/event");
			var key_fun = function(e) {
				if(e.keyCode != "229" && e.keyCode != "27"){
					session.autoComRe = null;
					session.autoComText = null;
					session.autoComMatchedWords = null;
					event.removeListener(env.editor.container, "keyup", key_fun);
				}
			}				
			event.addListener(env.editor.container, "keyup", key_fun);
    	} else if (!matched){
    		inputWord(session.autoComMatchedWords.shift());
    		matched = true;
    	}
    	
    	return matched;
    }
});

});
