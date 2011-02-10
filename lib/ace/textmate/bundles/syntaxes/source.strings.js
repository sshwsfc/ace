define(function(require, exports, module) {
exports.hash = 

{ fileTypes: [ 'strings' ]
, name: 'Strings File'
, patterns: 
   [ { begin: '/\\*'
     , captures: { '0': { name: 'punctuation.definition.comment.strings' } }
     , end: '\\*/'
     , name: 'comment.block.strings'
     }
   , { begin: '"'
     , beginCaptures: { '0': { name: 'punctuation.definition.string.begin.strings' } }
     , end: '"'
     , endCaptures: { '0': { name: 'punctuation.definition.string.end.strings' } }
     , name: 'string.quoted.double.strings'
     , patterns: 
        [ { match: '\\\\(\\\\|[abefnrtv\'"?]|[0-3]\\d{,2}|[4-7]\\d?|x[a-zA-Z0-9]+)'
          , name: 'constant.character.escape.strings'
          }
        , { match: '\\\\.'
          , name: 'invalid.illegal.unknown-escape.strings'
          }
        , { match: '(?x)%(\\d+\\$)?[[,;:_]?((-?\\d+)|\\*(-?\\d+\\$)?)?(\\.((-?\\d+)|\\*(-?\\d+\\$)?)?)?(hh|h|ll|l|j|t|z|q|L|vh|vl|v|hv|hl)?[@diouxXDOUeEfFgGaACcSspn%]'
          , name: 'constant.other.placeholder.strings'
          }
        , { match: '%', name: 'invalid.illegal.placeholder.c' }
        ]
     }
   ]
, scopeName: 'source.strings'
, uuid: '429E2DB7-EB4F-4B34-A4DF-DBFD3336C581'
}

});