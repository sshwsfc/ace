define(function(require, exports, module) {
exports.hash = 

{ fileTypes: [ 'rhtml', 'erb', 'html.erb' ]
, foldingStartMarker: '(?x)\n\t\t(<(?i:head|body|table|thead|tbody|tfoot|tr|div|select|fieldset|style|script|ul|ol|form|dl)\\b.*?>\n\t\t|<!--(?!.*-->)\n\t\t|\\{\\s*($|\\?>\\s*$|//|/\\*(.*\\*/\\s*$|(?!.*?\\*/)))\n\t\t)'
, foldingStopMarker: '(?x)\n\t\t(</(?i:head|body|table|thead|tbody|tfoot|tr|div|select|fieldset|style|script|ul|ol|form|dl)>\n\t\t|^\\s*-->\n\t\t|(^|\\s)\\}\n\t\t)'
, keyEquivalent: '^~R'
, name: 'HTML (Rails)'
, patterns: 
   [ { begin: '<%+#'
     , captures: { '0': { name: 'punctuation.definition.comment.erb' } }
     , end: '%>'
     , name: 'comment.block.erb'
     }
   , { begin: '<%+(?!>)[-=]?'
     , captures: { '0': { name: 'punctuation.section.embedded.ruby' } }
     , end: '-?%>'
     , name: 'source.ruby.rails.embedded.html'
     , patterns: 
        [ { captures: { '1': { name: 'punctuation.definition.comment.ruby' } }
          , match: '(#).*?(?=-?%>)'
          , name: 'comment.line.number-sign.ruby'
          }
        , { include: 'source.ruby.rails' }
        ]
     }
   , { include: 'text.html.basic' }
   ]
, scopeName: 'text.html.ruby'
, uuid: '45D7E1FC-7D0B-4105-A1A2-3D10BB555A5C'
}

});