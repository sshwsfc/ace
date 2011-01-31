var xml = require("./o3-xml");
var fs = require("fs");

function fillTemplate(template, replacements) {
    return template.replace(/%(.+?)%/g,
    function(str, m) {
        return replacements[m] || "";
    });
}

function plistToJson(xml_string) {
	var el = xml.parseFromString(xml_string).documentElement;
	
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

module.exports.plistToJson = plistToJson;
module.exports.fillTemplate = fillTemplate;