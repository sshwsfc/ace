var fs = require("fs");
var util = require('util');
var tools = require('./tools');

var path = __dirname + "/PHP.plist";
var plist = fs.readFileSync(path, "utf8");
var j =  tools.plistToJson(plist);

console.log(util.inspect(j, false, 10));