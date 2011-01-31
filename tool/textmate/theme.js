var fs = require("fs");
var util = require('util');
var tools = require('./tools');

function parseTheme(themeXml) {
    try {
        return tools.plistToJson(themeXml);
    } catch(e) {
        console.log(e.stack);
    }
}

var supportedScopes = {
    "keyword": "keyword",
    "keyword.operator": "keyword.operator",

    "constant": "constant",
    "constant.language": "constant.language",
    "constant.library": "constant.library",
    "constant.numeric": "constant.numeric",

    "support": "support",
    "support.function": "support.function",

    "function": "function",
    "function.buildin": "function.buildin",

    "invalid": "invalid",
    "invalid.illegal": "invalid.illegal",
    "invalid.deprecated": "invalid.deprecated",

    "string": "string",
    "string.regexp": "string.regexp",

    "comment": "comment",
    "comment.documentation": "comment.doc",
    "comment.documentation.tag": "comment.doc.tag",

    "variable": "variable",
    "variable.language": "variable.language",

    "meta.tag.sgml.doctype": "xml_pe"
};

function extractStyles(theme) {
    var globalSettings = theme.settings[0].settings;

    var colors = {
        "printMargin": "#e8e8e8",
        "background": parseColor(globalSettings.background),
        "foreground": parseColor(globalSettings.foreground),
        "overwrite": parseColor(globalSettings.caret),
        "gutter": "#e8e8e8",
        "selection": parseColor(globalSettings.selection),
        "step": "rgb(198, 219, 174)",
        "bracket": parseColor(globalSettings.invisibles),
        "active_line": parseColor(globalSettings.lineHighlight),
        "cursor": parseColor(globalSettings.caret),

        "invisible": "color: " + parseColor(globalSettings.invisibles) + ";"
    }

    var styles = {};

    for (var i = 1; i < theme.settings.length; i++) {
        var element = theme.settings[i];
        if (!element.scope)
        continue;
        var scopes = element.scope.split(/\s*[|,]\s*/g);
        for (var j = 0; j < scopes.length; j++) {
            var scope = scopes[j];
            if (supportedScopes[scope]) {
                colors[supportedScopes[scope]] = parseStyles(element.settings);
            } else {
                styles[scope] = parseStyles(element.settings);
            }
        }
    }

    colors['styles'] = styles;

    return colors;
};

function parseColor(color) {
    if (color.length == 7)
    return color;
    else {
        var rgba = color.match(/^#(..)(..)(..)(..)$/).slice(1).map(function(c) {
            return parseInt(c, 16);
        });
        rgba[3] = (rgba[3] / 0xFF).toPrecision(2);
        return "rgba(" + rgba.join(", ") + ")";
    }
}

function parseStyles(styles) {
    var css = [];
    var fontStyle = styles.fontStyle || "";
    if (fontStyle.indexOf("underline") !== -1) {
        css.push("text-decoration:underline;");
    }
    if (fontStyle.indexOf("italic") !== -1) {
        css.push("font-style:italic;");
    }
    if (styles.foreground) {
        css.push("color:" + parseColor(styles.foreground) + ";");
    }
    if (styles.background) {
        css.push("background-color:" + parseColor(styles.background) + ";");
    }
    return css.join("\n");
}

function fillTemplate(template, replacements) {
    return template.replace(/%(.+?)%/g,
    function(str, m) {
        return replacements[m] || "";
    });
}

function createTheme(name, styles, cssTemplate, jsTemplate) {
    styles.cssClass = "ace-" + hyphenate(name);
	
	var other_styles = styles.styles;
	var stylesBuilder = [];
	for(var key in other_styles){
		var lineBuilder = ["."+styles.cssClass];
		
		var ss = key.split(/\s/g);
		for (var i=0; i < ss.length; i++) {
			var selectors = ss[i].split('.');
			for (var j=0; j < selectors.length; j++) {
				selectors[j] = '.ace_' + selectors[j];
			};
			lineBuilder.push(selectors.join(''));			
		};
		lineBuilder.push("{"+ other_styles[key].replace(/\s/g, '') +"}");
		
		stylesBuilder.push(lineBuilder.join(' '));
	}
	styles.other_styles_string = stylesBuilder.join('\r\n');

    var css = fillTemplate(cssTemplate, styles);
    return css;
};

function hyphenate(str) {
    return str.replace(/([A-Z])/g, "-$1").toLowerCase();
}

var cssTemplate = fs.readFileSync(__dirname + "/templates/theme.tmpl.css", "utf8");
var jsTemplate = fs.readFileSync(__dirname + "/templates/theme.tmpl.js", "utf8");

var path = __dirname + "/themes/";
fs.readdir(path,
function(err, files) {
    if (err) {
        console.log(e);
        return;
    }
    for (var i = 0; i < files.length; i++) {
        if (! (/\.plist/.test(files[i]))) continue;
        console.log('Star parse ' + files[i]);
        try {
            var tmTheme = fs.readFileSync(path + files[i], "utf8");
            var styles = extractStyles(parseTheme(tmTheme));

            var name = files[i].replace('.plist', '').replace(/\s/g, '_').toLowerCase();
            fs.writeFileSync(__dirname + "/../../lib/ace/textmate/themes/" + name + ".css", createTheme(name, styles, cssTemplate, jsTemplate));
            console.log('Finish parse ' + files[i]);
        } catch(e) {
            console.log(e.stack);
        }
    }
})


