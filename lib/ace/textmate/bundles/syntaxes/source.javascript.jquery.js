define(function(require, exports, module) {
exports.hash = 

{ comment: 'jQuery Javascript Library. TextMate bundle by Jonathan Chaffer & Karl Swedberg. Dual licensed under MIT (http://www.opensource.org/licenses/mit-license.php) and GPL (http://www.gnu.org/licenses/gpl.html) licenses.'
, foldingStartMarker: '(^.*\\{[^}]*$|^.*\\([^\\)]*$|^.*/\\*(?!.*\\*/).*$)'
, foldingStopMarker: '(^\\s*\\}|^\\s*\\)|^(?!.*/\\*).*\\*/)'
, keyEquivalent: '^~J'
, name: 'jQuery (JavaScript)'
, patterns: 
   [ { begin: '(\\$|jQuery)(\\((?!(\'|")<))'
     , beginCaptures: 
        { '1': { name: 'support.class.js.jquery' }
        , '2': { name: 'punctuation.section.class.js' }
        }
     , contentName: 'meta.selector.jquery'
     , end: '(\\))'
     , endCaptures: { '1': { name: 'punctuation.section.class.js' } }
     , patterns: 
        [ { include: '#nested-parens' }
        , { begin: '\''
          , beginCaptures: { '0': { name: 'punctuation.definition.selector.begin.js' } }
          , end: '\''
          , endCaptures: { '0': { name: 'punctuation.definition.selector.end.js' } }
          , patterns: [ { include: '#css-selector' } ]
          }
        , { begin: '"'
          , beginCaptures: { '0': { name: 'punctuation.definition.selector.begin.js' } }
          , end: '"'
          , endCaptures: { '0': { name: 'punctuation.definition.selector.end.js' } }
          , patterns: [ { include: '#css-selector' } ]
          }
        , { include: 'source.js' }
        ]
     }
   , { begin: '\\b(add|appendTo|children|closest|detach|filter|find|has|index|insertAfter|insertBefore|is|next|nextAll|nextUntil|not|parent|parents|parentsUntil|prependTo|prev|prevAll|prevUntil|remove|replaceAll|siblings)\\s*(\\((?!(\'|")<))'
     , beginCaptures: 
        { '1': { name: 'support.function.js.jquery' }
        , '2': { name: 'punctuation.section.function.js' }
        }
     , contentName: 'meta.selector.jquery'
     , end: '(\\))'
     , endCaptures: { '1': { name: 'punctuation.section.function.js' } }
     , patterns: 
        [ { include: '#nested-parens' }
        , { begin: '\''
          , beginCaptures: { '0': { name: 'punctuation.definition.selector.begin.js' } }
          , end: '\''
          , endCaptures: { '0': { name: 'punctuation.definition.selector.end.js' } }
          , patterns: [ { include: '#css-selector' } ]
          }
        , { begin: '"'
          , beginCaptures: { '0': { name: 'punctuation.definition.selector.begin.js' } }
          , end: '"'
          , endCaptures: { '0': { name: 'punctuation.definition.selector.end.js' } }
          , patterns: [ { include: '#css-selector' } ]
          }
        , { include: 'source.js' }
        ]
     }
   , { begin: '(\\$|jQuery)(\\((?=(\'|")<))'
     , beginCaptures: 
        { '1': { name: 'support.class.js.jquery' }
        , '2': { name: 'punctuation.section.class.js' }
        }
     , contentName: 'meta.markup.jquery'
     , end: '(\\))'
     , endCaptures: { '1': { name: 'punctuation.section.class.js' } }
     , patterns: 
        [ { begin: '\''
          , beginCaptures: { '0': { name: 'punctuation.definition.markup.begin.js' } }
          , end: '\''
          , endCaptures: { '0': { name: 'punctuation.definition.markup.end.js' } }
          , patterns: [ { include: '#html-markup-single' } ]
          }
        , { begin: '"'
          , beginCaptures: { '0': { name: 'punctuation.definition.markup.begin.js' } }
          , end: '"'
          , endCaptures: { '0': { name: 'punctuation.definition.markup.end.js' } }
          , patterns: [ { include: '#html-markup-double' } ]
          }
        , { include: 'source.js' }
        ]
     }
   , { begin: '\\b(add|after|append|before|html|prepend|replaceWith|wrap|wrapAll|wrapInner)\\s*(\\((?=(\'|")<))'
     , beginCaptures: 
        { '1': { name: 'support.function.js.jquery' }
        , '2': { name: 'punctuation.section.class.js' }
        }
     , contentName: 'meta.markup.jquery'
     , end: '(\\))'
     , endCaptures: { '1': { name: 'punctuation.section.class.js' } }
     , patterns: 
        [ { begin: '\''
          , beginCaptures: { '0': { name: 'punctuation.definition.markup.begin.js' } }
          , end: '\''
          , endCaptures: { '0': { name: 'punctuation.definition.markup.end.js' } }
          , patterns: [ { include: '#html-markup-single' } ]
          }
        , { begin: '"'
          , beginCaptures: { '0': { name: 'punctuation.definition.markup.begin.js' } }
          , end: '"'
          , endCaptures: { '0': { name: 'punctuation.definition.markup.end.js' } }
          , patterns: [ { include: '#html-markup-double' } ]
          }
        , { include: 'source.js' }
        ]
     }
   , { captures: 
        { '1': { name: 'support.class.js' }
        , '2': { name: 'support.constant.js' }
        }
     , match: '(\\$|jQuery)\\.(ajaxSettings|boxModel|browser|fx|isReady|support|fn)'
     , name: 'meta.property.jquery'
     }
   , { match: '(?<=\\.)(length|selector|context)\\b'
     , name: 'support.constant.js.jquery'
     }
   , { match: '(?<=\\.)(add|addClass|after|ajaxComplete|ajaxError|ajaxSend|ajaxStart|ajaxStop|ajaxSuccess|andSelf|animate|append|appendTo|attr|before|bind|blur|change|children|clearQueue|click|clone|closest|contents|css|data|dblclick|delay|delegate|dequeue|detach|die|domManip|done|each|empty|end|eq|error|fadeIn|fadeOut|fadeTo|fadeToggle|fail|filter|find|first|focus|focusin|focusout|get|has|hasClass|height|hide|hover|html|index|innerHeight|innerWidth|insertAfter|insertBefore|is|isRejected|isResolved|keydown|keypress|keyup|last|live|load|map|mousedown|mouseenter|mouseleave|mousemove|mouseout|mouseover|mouseup|next|nextAll|nextUntil|not|offset|offsetParent|one|outerHeight|outerWidth|parent|parents|parentsUntil|position|prepend|prependTo|prev|prevAll|prevUntil|push|pushStack|queue|ready|reject|rejectWith|remove|removeAttr|removeClass|removeData|replaceAll|replaceWith|resize|resolve|resolveWith|scroll|scrollLeft|scrollTop|select|serialize|serializeArray|show|siblings|size|slice|slideDown|slideToggle|slideUp|stop|submit|text|then|toArray|toggle|toggleClass|trigger|triggerHandler|unbind|undelegate|unload|unwrap|val|width|wrap|wrapAll|wrapInner)\\b'
     , name: 'support.function.js.jquery'
     }
   , { captures: 
        { '1': { name: 'support.class.js' }
        , '3': { name: 'support.function.js' }
        }
     , match: '(\\$|jQuery)(\\.)(Event|ajax|ajaxSetup|bindReady|clean|cleanData|contains|css|data|dequeue|each|error|extend|Event|get|getJSON|getScript|globalEval|grep|inArray|isArray|isEmptyObject|isFunction|isPlainObject|isWindow|isXMLDoc|makeArray|map|merge|noConflict|noop|param|parseJSON|parseXML|post|proxy|queue|ready|removeData|sibling|sub|text|triggerGlobal|trim|type|unique|when)\\b'
     , name: 'support.function.js.jquery'
     }
   , { include: 'source.js' }
   ]
, repository: 
   { 'css-selector': 
      { begin: '(?=\\s*[.*#a-zA-Z])'
      , end: '(?=["\'])'
      , name: 'meta.selector.css'
      , patterns: 
         [ { match: '\\b(a|abbr|acronym|address|area|article|aside|audio|b|base|big|blockquote|body|br|button|canvas|caption|cite|command|code|col|colgroup|datalist|dd|del|details|device|dfn|div|dl|dt|em|embed|fieldset|fig(ure|caption)|footer|form|frame|frameset|(h[1-6])|head(er)?|hgroup|hr|html|i|iframe|img|input|ins|kbd|keygen|label|legend|li|link|map|menu|meta|meter|noframes|noscript|object|ol|optgroup|option|output|p|param|pre|progress|q|samp|script|section|select|small|span|strike|strong|style|summary|sub|sup|table|tbody|td|textarea|tfoot|th|thead|time|title|tr|tt|ul|var|video)\\b'
           , name: 'entity.name.tag.css'
           }
         , { captures: { '1': { name: 'punctuation.definition.attribute-name.css' } }
           , match: '(\\.)[a-zA-Z0-9_-]+'
           , name: 'entity.other.attribute-name.class.css'
           }
         , { captures: { '1': { name: 'punctuation.definition.attribute-name.css' } }
           , match: '(#)[a-zA-Z0-9_-]+'
           , name: 'entity.other.attribute-name.id.css'
           }
         , { match: '\\*', name: 'entity.name.tag.wildcard.css' }
         , { captures: { '1': { name: 'punctuation.definition.attribute-name.css' } }
           , match: '(:)\\b(active|after|before|first-letter|first-line|hover|link|target|visited)\\b'
           , name: 'entity.other.attribute-name.pseudo-class.css'
           }
         ]
      }
   , 'html-markup-double': 
      { name: 'meta.markup.html'
      , patterns: 
         [ { include: 'text.html.basic' }
         , { match: '\\\\(")'
           , name: 'constant.character.escape.js'
           }
         ]
      }
   , 'html-markup-single': 
      { name: 'meta.markup.html'
      , patterns: 
         [ { include: 'text.html.basic' }
         , { match: '\\\\(\')'
           , name: 'constant.character.escape.js'
           }
         ]
      }
   , 'nested-parens': 
      { begin: '\\('
      , captures: { '0': { name: 'punctuation.section.scope.js' } }
      , end: '\\)'
      , patterns: 
         [ { include: '#nested-parens' }
         , { include: 'source.js' }
         ]
      }
   }
, scopeName: 'source.javascript.jquery'
, uuid: '1AD8EB10-62BE-417C-BC4B-29B5C6F0B36A'
}

});
