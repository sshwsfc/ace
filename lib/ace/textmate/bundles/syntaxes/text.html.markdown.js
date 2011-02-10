define(function(require, exports, module) {
exports.hash = 

{ fileTypes: [ 'mdown', 'markdown', 'markdn', 'md' ]
, foldingStartMarker: '(?x)\n\t\t(<(?i:head|body|table|thead|tbody|tfoot|tr|div|select|fieldset|style|script|ul|ol|form|dl)\\b.*?>\n\t\t|<!--(?!.*-->)\n\t\t|\\{\\s*($|\\?>\\s*$|//|/\\*(.*\\*/\\s*$|(?!.*?\\*/)))\n\t\t)'
, foldingStopMarker: '(?x)\n\t\t(</(?i:head|body|table|thead|tbody|tfoot|tr|div|select|fieldset|style|script|ul|ol|form|dl)>\n\t\t|^\\s*-->\n\t\t|(^|\\s)\\}\n\t\t)'
, keyEquivalent: '^~M'
, name: 'Markdown'
, patterns: 
   [ { begin: '(?x)^(?=[]{,3}>.|([]{4}|\\t)(?!$)|[|[]{,3}(?<marker>[-*_])([]{,2}\\k<marker>){2,}[\\t]*+$)'
     , comment: '\n\t\t\t\tWe could also use an empty end match and set\n\t\t\t\tapplyEndPatternLast, but then we must be sure that the begin\n\t\t\t\tpattern will only match stuff matched by the sub-patterns.\n\t\t\t'
     , end: '(?x)^(?![]{,3}>.|([]{4}|\\t)|[|[]{,3}(?<marker>[-*_])([]{,2}\\k<marker>){2,}[\\t]*+$)'
     , name: 'meta.block-level.markdown'
     , patterns: 
        [ { include: '#block_quote' }
        , { include: '#block_raw' }
        , { include: '#heading' }
        , { include: '#separator' }
        ]
     }
   , { begin: '^[]{0,3}([*+-])(?=\\s)'
     , captures: { '1': { name: 'punctuation.definition.list_item.markdown' } }
     , end: '^(?=\\S)'
     , name: 'markup.list.unnumbered.markdown'
     , patterns: [ { include: '#list-paragraph' } ]
     }
   , { begin: '^[]{0,3}[0-9]+(\\.)(?=\\s)'
     , captures: { '1': { name: 'punctuation.definition.list_item.markdown' } }
     , end: '^(?=\\S)'
     , name: 'markup.list.numbered.markdown'
     , patterns: [ { include: '#list-paragraph' } ]
     }
   , { begin: '^(?=<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|ins|del)\\b)(?!.*?</\\1>)'
     , comment: '\n\t\t\t\tMarkdown formatting is disabled inside block-level tags.\n\t\t\t'
     , end: '(?<=^</\\1>$\\n)'
     , name: 'meta.disable-markdown'
     , patterns: [ { include: 'text.html.basic' } ]
     }
   , { begin: '^(?=<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|ins|del)\\b)'
     , comment: 'Same rule but for one line disables.'
     , end: '$\\n?'
     , name: 'meta.disable-markdown'
     , patterns: [ { include: 'text.html.basic' } ]
     }
   , { captures: 
        { '1': { name: 'punctuation.definition.constant.markdown' }
        , '2': { name: 'constant.other.reference.link.markdown' }
        , '3': { name: 'punctuation.definition.constant.markdown' }
        , '4': { name: 'punctuation.separator.key-value.markdown' }
        , '5': { name: 'punctuation.definition.link.markdown' }
        , '6': { name: 'markup.underline.link.markdown' }
        , '7': { name: 'punctuation.definition.link.markdown' }
        , '8': { name: 'string.other.link.description.title.markdown' }
        , '9': { name: 'punctuation.definition.string.begin.markdown' }
        , '10': { name: 'punctuation.definition.string.end.markdown' }
        , '11': { name: 'string.other.link.description.title.markdown' }
        , '12': { name: 'punctuation.definition.string.begin.markdown' }
        , '13': { name: 'punctuation.definition.string.end.markdown' }
        }
     , match: '(?x:\\s*(\\[)(.+?)(\\])(:)[\\t]*(<?)(\\S+?)(>?)[\\t]*(?:((\\().+?(\\)))|((").+?(")))?\\s*$)'
     , name: 'meta.link.reference.def.markdown'
     }
   , { begin: '^(?=\\S)(?![=-]{3,}(?=$))'
     , end: '^(?:\\s*$|(?=[]{,3}>.))|(?=[\\t]*\\n)(?<=^===|^====|=====|^---|^----|-----)[\\t]*\\n|(?=^#)'
     , name: 'meta.paragraph.markdown'
     , patterns: 
        [ { include: '#inline' }
        , { include: 'text.html.basic' }
        , { captures: { '1': { name: 'punctuation.definition.heading.markdown' } }
          , match: '^(={3,})(?=[\\t]*$)'
          , name: 'markup.heading.1.markdown'
          }
        , { captures: { '1': { name: 'punctuation.definition.heading.markdown' } }
          , match: '^(-{3,})(?=[\\t]*$)'
          , name: 'markup.heading.2.markdown'
          }
        ]
     }
   ]
, repository: 
   { ampersand: 
      { comment: '\n\t\t\t\tMarkdown will convert this for us. We match it so that the\n\t\t\t\tHTML grammar will not mark it up as invalid.\n\t\t\t'
      , match: '&(?!([a-zA-Z0-9]+|#[0-9]+|#x[0-9a-fA-F]+);)'
      , name: 'meta.other.valid-ampersand.markdown'
      }
   , block_quote: 
      { begin: '\\G[]{,3}(>)(?!$)[]?'
      , beginCaptures: { '1': { name: 'punctuation.definition.blockquote.markdown' } }
      , comment: '\n\t\t\t\tWe terminate the block quote when seeing an empty line, a\n\t\t\t\tseparator or a line with leading > characters. The latter is\n\t\t\t\tto \u201creset\u201d the quote level for quoted lines.\n\t\t\t'
      , end: '(?x)^(?=\\s*$|[]{,3}(?<marker>[-*_])([]{,2}\\k<marker>){2,}[\\t]*+$|[]{,3}>.)'
      , name: 'markup.quote.markdown'
      , patterns: 
         [ { begin: '(?x)\\G(?=[]{,3}>.)'
           , end: '^'
           , patterns: [ { include: '#block_quote' } ]
           }
         , { applyEndPatternLast: 1
           , begin: '(?x)\\G(?=([]{4}|\\t)|[|[]{,3}(?<marker>[-*_])([]{,2}\\k<marker>){2,}[\\t]*+$)'
           , end: '^'
           , patterns: 
              [ { include: '#block_raw' }
              , { include: '#heading' }
              , { include: '#separator' }
              ]
           }
         , { begin: '(?x)\\G(?!$|[]{,3}>.|([]{4}|\\t)|[|[]{,3}(?<marker>[-*_])([]{,2}\\k<marker>){2,}[\\t]*+$)'
           , end: '$|(?<=\\n)'
           , patterns: [ { include: '#inline' } ]
           }
         ]
      }
   , block_raw: 
      { match: '\\G([]{4}|\\t).*$\\n?'
      , name: 'markup.raw.block.markdown'
      }
   , bold: 
      { begin: '(?x)(\\*\\*|__)(?=\\S)(?=(<[^>]*+>|(?<raw>`+)([^`]|(?!(?<!`)\\k<raw>(?!`))`)*+\\k<raw>|\\\\[\\\\`*_{}\\[\\]()|\\[((?<square>[^\\[\\]\\\\]|\\\\.|\\[\\g<square>*+\\])*+\\](([]?\\[[^\\]]*+\\])|(\\([\\t]*+<?(.*?)>?[\\t]*+((?<title>[\'"])(.*?)\\k<title>)?\\))))|(?!(?<=\\S)\\1).)++(?<=\\S)\\1)'
      , captures: { '1': { name: 'punctuation.definition.bold.markdown' } }
      , end: '(?<=\\S)(\\1)'
      , name: 'markup.bold.markdown'
      , patterns: 
         [ { applyEndPatternLast: 1
           , begin: '(?=<[^>]*?>)'
           , end: '(?<=>)'
           , patterns: [ { include: 'text.html.basic' } ]
           }
         , { include: '#escape' }
         , { include: '#ampersand' }
         , { include: '#bracket' }
         , { include: '#raw' }
         , { include: '#italic' }
         , { include: '#image-inline' }
         , { include: '#link-inline' }
         , { include: '#link-inet' }
         , { include: '#link-email' }
         , { include: '#image-ref' }
         , { include: '#link-ref-literal' }
         , { include: '#link-ref' }
         ]
      }
   , bracket: 
      { comment: '\n\t\t\t\tMarkdown will convert this for us. We match it so that the\n\t\t\t\tHTML grammar will not mark it up as invalid.\n\t\t\t'
      , match: '<(?![a-z/?\\$!])'
      , name: 'meta.other.valid-bracket.markdown'
      }
   , escape: 
      { match: '\\\\[-`*_#+.!(){}\\[\\]\\\\>]'
      , name: 'constant.character.escape.markdown'
      }
   , heading: 
      { begin: '\\G(#{1,6})(?!#)\\s*(?=\\S)'
      , captures: { '1': { name: 'punctuation.definition.heading.markdown' } }
      , contentName: 'entity.name.section.markdown'
      , end: '\\s*(#*)$\\n?'
      , name: 'markup.heading.markdown'
      , patterns: [ { include: '#inline' } ]
      }
   , 'image-inline': 
      { captures: 
         { '1': { name: 'punctuation.definition.string.begin.markdown' }
         , '2': { name: 'string.other.link.description.markdown' }
         , '3': { name: 'punctuation.definition.string.end.markdown' }
         , '5': { name: 'invalid.illegal.whitespace.markdown' }
         , '6': { name: 'punctuation.definition.metadata.markdown' }
         , '7': { name: 'punctuation.definition.link.markdown' }
         , '8': { name: 'markup.underline.link.image.markdown' }
         , '9': { name: 'punctuation.definition.link.markdown' }
         , '10': { name: 'string.other.link.description.title.markdown' }
         , '11': { name: 'punctuation.definition.string.markdown' }
         , '12': { name: 'punctuation.definition.string.markdown' }
         , '13': { name: 'string.other.link.description.title.markdown' }
         , '14': { name: 'punctuation.definition.string.markdown' }
         , '15': { name: 'punctuation.definition.string.markdown' }
         , '16': { name: 'punctuation.definition.metadata.markdown' }
         }
      , match: '(?x:\\!(\\[)((?<square>[^\\[\\]\\\\]|\\\\.|\\[\\g<square>*+\\])*+)(\\])([])?(\\()(<?)(\\S+?)(>?)[\\t]*(?:((\\().+?(\\)))|((").+?(")))?\\s*(\\)))'
      , name: 'meta.image.inline.markdown'
      }
   , 'image-ref': 
      { captures: 
         { '1': { name: 'punctuation.definition.string.begin.markdown' }
         , '2': { name: 'string.other.link.description.markdown' }
         , '4': { name: 'punctuation.definition.string.begin.markdown' }
         , '5': { name: 'punctuation.definition.constant.markdown' }
         , '6': { name: 'constant.other.reference.link.markdown' }
         , '7': { name: 'punctuation.definition.constant.markdown' }
         }
      , match: '\\!(\\[)((?<square>[^\\[\\]\\\\]|\\\\.|\\[\\g<square>*+\\])*+)(\\])[]?(\\[)(.*?)(\\])'
      , name: 'meta.image.reference.markdown'
      }
   , inline: 
      { patterns: 
         [ { include: '#escape' }
         , { include: '#ampersand' }
         , { include: '#bracket' }
         , { include: '#raw' }
         , { include: '#bold' }
         , { include: '#italic' }
         , { include: '#line-break' }
         , { include: '#image-inline' }
         , { include: '#link-inline' }
         , { include: '#link-inet' }
         , { include: '#link-email' }
         , { include: '#image-ref' }
         , { include: '#link-ref-literal' }
         , { include: '#link-ref' }
         ]
      }
   , italic: 
      { begin: '(?x)(\\*|_)(?=\\S)(?=(<[^>]*+>|(?<raw>`+)([^`]|(?!(?<!`)\\k<raw>(?!`))`)*+\\k<raw>|\\\\[\\\\`*_{}\\[\\]()|\\[((?<square>[^\\[\\]\\\\]|\\\\.|\\[\\g<square>*+\\])*+\\](([]?\\[[^\\]]*+\\])|(\\([\\t]*+<?(.*?)>?[\\t]*+((?<title>[\'"])(.*?)\\k<title>)?\\))))|\\1\\1|(?!(?<=\\S)\\1).)++(?<=\\S)\\1)'
      , captures: { '1': { name: 'punctuation.definition.italic.markdown' } }
      , end: '(?<=\\S)(\\1)((?!\\1)|(?=\\1\\1))'
      , name: 'markup.italic.markdown'
      , patterns: 
         [ { applyEndPatternLast: 1
           , begin: '(?=<[^>]*?>)'
           , end: '(?<=>)'
           , patterns: [ { include: 'text.html.basic' } ]
           }
         , { include: '#escape' }
         , { include: '#ampersand' }
         , { include: '#bracket' }
         , { include: '#raw' }
         , { include: '#bold' }
         , { include: '#image-inline' }
         , { include: '#link-inline' }
         , { include: '#link-inet' }
         , { include: '#link-email' }
         , { include: '#image-ref' }
         , { include: '#link-ref-literal' }
         , { include: '#link-ref' }
         ]
      }
   , 'line-break': { match: '{2,}$', name: 'meta.dummy.line-break' }
   , 'link-email': 
      { captures: 
         { '1': { name: 'punctuation.definition.link.markdown' }
         , '2': { name: 'markup.underline.link.markdown' }
         , '4': { name: 'punctuation.definition.link.markdown' }
         }
      , match: '(<)((?:mailto:)?[-.\\w]+@[-a-z0-9]+(\\.[-a-z0-9]+)*\\.[a-z]+)(>)'
      , name: 'meta.link.email.lt-gt.markdown'
      }
   , 'link-inet': 
      { captures: 
         { '1': { name: 'punctuation.definition.link.markdown' }
         , '2': { name: 'markup.underline.link.markdown' }
         , '3': { name: 'punctuation.definition.link.markdown' }
         }
      , match: '(<)((?:https?|ftp)://.*?)(>)'
      , name: 'meta.link.inet.markdown'
      }
   , 'link-inline': 
      { captures: 
         { '1': { name: 'punctuation.definition.string.begin.markdown' }
         , '2': { name: 'string.other.link.title.markdown' }
         , '4': { name: 'punctuation.definition.string.end.markdown' }
         , '5': { name: 'invalid.illegal.whitespace.markdown' }
         , '6': { name: 'punctuation.definition.metadata.markdown' }
         , '7': { name: 'punctuation.definition.link.markdown' }
         , '8': { name: 'markup.underline.link.markdown' }
         , '9': { name: 'punctuation.definition.link.markdown' }
         , '10': { name: 'string.other.link.description.title.markdown' }
         , '11': { name: 'punctuation.definition.string.begin.markdown' }
         , '12': { name: 'punctuation.definition.string.end.markdown' }
         , '13': { name: 'string.other.link.description.title.markdown' }
         , '14': { name: 'punctuation.definition.string.begin.markdown' }
         , '15': { name: 'punctuation.definition.string.end.markdown' }
         , '16': { name: 'punctuation.definition.metadata.markdown' }
         }
      , match: '(?x:(\\[)((?<square>[^\\[\\]\\\\]|\\\\.|\\[\\g<square>*+\\])*+)(\\])([])?(\\()(<?)(.*?)(>?)[\\t]*(?:((\\().+?(\\)))|((").+?(")))?\\s*(\\)))'
      , name: 'meta.link.inline.markdown'
      }
   , 'link-ref': 
      { captures: 
         { '1': { name: 'punctuation.definition.string.begin.markdown' }
         , '2': { name: 'string.other.link.title.markdown' }
         , '4': { name: 'punctuation.definition.string.end.markdown' }
         , '5': { name: 'punctuation.definition.constant.begin.markdown' }
         , '6': { name: 'constant.other.reference.link.markdown' }
         , '7': { name: 'punctuation.definition.constant.end.markdown' }
         }
      , match: '(\\[)((?<square>[^\\[\\]\\\\]|\\\\.|\\[\\g<square>*+\\])*+)(\\])[]?(\\[)([^\\]]*+)(\\])'
      , name: 'meta.link.reference.markdown'
      }
   , 'link-ref-literal': 
      { captures: 
         { '1': { name: 'punctuation.definition.string.begin.markdown' }
         , '2': { name: 'string.other.link.title.markdown' }
         , '4': { name: 'punctuation.definition.string.end.markdown' }
         , '5': { name: 'punctuation.definition.constant.begin.markdown' }
         , '6': { name: 'punctuation.definition.constant.end.markdown' }
         }
      , match: '(\\[)((?<square>[^\\[\\]\\\\]|\\\\.|\\[\\g<square>*+\\])*+)(\\])[]?(\\[)(\\])'
      , name: 'meta.link.reference.literal.markdown'
      }
   , 'list-paragraph': 
      { patterns: 
         [ { begin: '\\G\\s+(?=\\S)'
           , end: '^\\s*$'
           , name: 'meta.paragraph.list.markdown'
           , patterns: [ { include: '#inline' } ]
           }
         ]
      }
   , raw: 
      { captures: 
         { '1': { name: 'punctuation.definition.raw.markdown' }
         , '3': { name: 'punctuation.definition.raw.markdown' }
         }
      , match: '(`+)([^`]|(?!(?<!`)\\1(?!`))`)*+(\\1)'
      , name: 'markup.raw.inline.markdown'
      }
   , separator: 
      { match: '\\G[]{,3}([-*_])([]{,2}\\1){2,}[\\t]*$\\n?'
      , name: 'meta.separator.markdown'
      }
   }
, scopeName: 'text.html.markdown'
, uuid: '0A1D9874-B448-11D9-BD50-000D93B6E43C'
}

});