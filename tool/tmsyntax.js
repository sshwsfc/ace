var xml = require("../../cloud9/support/ace/support/node-o3-xml/lib/o3-xml");
var fs = require("fs");
var util = require('util');

function plistToJson(el) {
    if (el.tagName != "plist")
        throw new Error("not a plist!");

    return $plistParse(el.selectSingleNode("dict"));
};

function $plistParse(el) {            
    if (el.tagName == "dict") {
        var dict = {};
        var key;
        var childNodes = el.childNodes;
        for (var i=0, l=childNodes.length; i<l; i++) {
            var child = childNodes[i];
            if (child.nodeType !== 1) 
                continue;
                
            if (child.tagName == "key") {
                key = child.nodeValue;
            } else {
                if (!key)
                    throw new Error("missing key");
                dict[key] = $plistParse(child);
                if(key == 'match'){
                	dict[key] = dict[key].replace(/\s/g, '');
                }
                key = null;
            }
        }
        return dict;
    }
    else if (el.tagName == "array") {
        var arr = [];
                var childNodes = el.childNodes;
        for (var i=0, l=childNodes.length; i<l; i++) {
            var child = childNodes[i];
            if (child.nodeType !== 1) 
                continue;
                
            arr.push($plistParse(child));
        }
        return arr;
    }
    else if (el.tagName == "string") {
        return el.nodeValue;
    }
    else if (el.tagName == "integer") {
        return Number(el.nodeValue);
    } else {
        throw new Error("unsupported node type " + el.tagName);
    }
}

function parseLanguage(tl) {
    try {
        return plistToJson(xml.parseFromString(tl).documentElement);
    } catch(e) { 
    	console.log(e);
    	return 
    }
}

var path = __dirname + "/tmsyntaxs/";
fs.readdir(path, function(err,files){
	if(err){
    	console.log(e);
    	return;
	}
	for(var i=0;i<files.length;i++){
		console.log('Star parse ' + files[i]);
		var tmLanguage = fs.readFileSync(path + files[i], "utf8");
		var j = parseLanguage(tmLanguage);
		fs.writeFileSync(__dirname + "/../lib/ace/syntax/"+ j.scopeName +".js", util.inspect(j, false, 10));
		console.log('Finish parse ' + files[i]);
	}
})


