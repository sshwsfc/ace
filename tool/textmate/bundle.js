var fs = require("fs");
var util = require('util');
var tools = require('./tools');

var syntaxTemplate = fs.readFileSync(__dirname + "/templates/syntax.tmpl.js", "utf8");
var syntaxManagerTemplate = fs.readFileSync(__dirname + "/templates/syntax.manager.tmpl.js", "utf8");
var snippetsManagerTemplate = fs.readFileSync(__dirname + "/templates/snippets.manager.tmpl.js", "utf8");

function parseSyntax(path, context) {
try {
	var files = fs.readdirSync(path);
	for(var i=0;i<files.length;i++){
		//console.log('Star parse Syntax : ' + files[i]);
	    try {
			var plist = fs.readFileSync(path + files[i], "utf8");
	        var j =  tools.plistToJson(plist);
			j.scopeName = j.scopeName.replace(/\+/g, 'plus').replace(/\.js/g, '.javascript');
			var output = tools.fillTemplate(syntaxTemplate, {'syntaxHash': util.inspect(j, false, 10)});
			console.log(j.scopeName);
			fs.writeFileSync(__dirname + "/../../lib/ace/textmate/bundles/syntaxes/"+ j.scopeName +".js", output);
		
			context['syntaxes'].push(j);
			//console.log('Finish parse Syntax :' + files[i]);
	    } catch(e) {
	        console.log(e.stack);
	    }
	}
} catch(e) {}
};

function parseSnippets(path, context){
try {
	var files = fs.readdirSync(path);
	for(var i=0;i<files.length;i++){
		//console.log('Star parse Snippets : ' + files[i]);
	    try {
			var plist = fs.readFileSync(path + files[i], "utf8");
	        var j =  tools.plistToJson(plist);
			if(!context['snippets'][j.scope]){
				context['snippets'][j.scope] = {'tab': [], 'key': []};
			}
			if(j.tabTrigger){
				context['snippets'][j.scope]['tab'].push(j);
			}else if(j.keyEquivalent){
				context['snippets'][j.scope]['key'].push(j);
			}
			//console.log('Finish parse Snippets :' + files[i]);
	    } catch(e) {
	        console.log(e.stack);
	    }
	}
} catch(e) {}
};

function parseBundle(bundlePath, context){
	parseSyntax(bundlePath + '/Syntaxes/', context);
	//parseSnippets(bundlePath + '/Snippets/', context);
}

function parseSyntaxManager(context){
	var syntaxes = context['syntaxes'];
	var syntaxs_hash = '';
	var file_typs = '';
	for (var i=0; i < syntaxes.length; i++) {
		var s = syntaxes[i];
		if(!s.scopeName) continue;
		syntaxs_hash += ("'"+ s.scopeName +"' : require('ace/textmate/bundles/syntaxes/"+ s.scopeName +"').hash,\r\n");
		if(s['fileTypes']){
			for (var j=0; j < s['fileTypes'].length; j++) {
				var ft = s['fileTypes'][j];
				file_typs += ("'"+ ft +"':'"+ s.scopeName +"',\r\n");
			};
		}
	};
	var output = tools.fillTemplate(syntaxManagerTemplate, {'syntaxs_hash': syntaxs_hash, 'file_typs': file_typs});
	fs.writeFileSync(__dirname + "/../../lib/ace/textmate/bundles/syntaxes/manager.js", output);
}

function parseSnippetsManager(context){
	var output = tools.fillTemplate(snippetsManagerTemplate, {'snippets_hash': util.inspect(context['snippets'], false, 10)});
	fs.writeFileSync(__dirname + "/../../lib/ace/textmate/bundles/snippets/manager.js", output);
}

function parseBundleManager(context){
	//parseSyntaxManager(context);
	//parseSnippetsManager(context);
}

var path = __dirname + "/convert_bundles/";
var context = {'syntaxes': [], 'snippets': {}};
var files = fs.readdirSync(path);

for(var i=0;i<files.length;i++){
    if (! (/\.tmbundle/.test(files[i]))) continue;
	parseBundle(path + files[i], context);
}
try {
	parseBundleManager(context);
} catch(e) {
    console.log(e.stack);
}


