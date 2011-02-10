define(function(require, exports, module) {

    var dom = require("pilot/dom");
    var cssText = require("text!ace/textmate/themes/django.css");

    // import CSS once
    dom.importCssString(cssText);

    exports.cssClass = "ace-django";
});
