define(function(require, exports, module) {
exports.hash = 

{ comment: 'TODO:\n\u2022 Try to improve parameters list syntax \u2013 scope numbers, \u2018=\u2019, \u2018,\u2019 and possibly be intelligent about entity ordering\n\u2022 Is meta.function-call the correct scope? I\'ve added it to my theme but by default it\'s not highlighted'
, firstLineMatch: '^#!.*(?<!-)php[0-9]{0,1}\\b'
, foldingStartMarker: '(/\\*|\\{\\s*$|<<<HTML)'
, foldingStopMarker: '(\\*/|^\\s*\\}|^HTML;)'
, name: 'PHP'
, patterns: 
   [ { captures: 
        { '1': { name: 'punctuation.whitespace.embedded.leading.php' }
        , '2': { name: 'source.php.embedded.line.empty.html' }
        , '3': { name: 'punctuation.section.embedded.begin.php' }
        , '4': { name: 'meta.consecutive-tags.php' }
        , '5': { name: 'source.php' }
        , '6': { name: 'punctuation.section.embedded.end.php' }
        , '7': { name: 'source.php' }
        , '8': { name: 'punctuation.whitespace.embedded.trailing.php' }
        }
     , comment: 'Matches empty tags.'
     , match: '(?x)(^\\s*)?(((?:((?<=\\?>)<)|<)\\?(?i:php|=)?)(\\s*)((\\?)>))(\\1|(\\s*$\\n)?)'
     }
   , { begin: '^\\s*(?=<\\?)'
     , beginCaptures: { '0': { name: 'punctuation.whitespace.embedded.leading.php' } }
     , comment: 'Catches tags with preceeding whitespace.'
     , end: '(?<=\\?>)(\\s*$\\n)?'
     , endCaptures: { '0': { name: 'punctuation.whitespace.embedded.trailing.php' } }
     , patterns: 
        [ { begin: '<\\?(?i:php|=)?'
          , beginCaptures: { '0': { name: 'punctuation.section.embedded.begin.php' } }
          , end: '(\\?)>'
          , endCaptures: 
             { '0': { name: 'punctuation.section.embedded.end.php' }
             , '1': { name: 'source.php' }
             }
          , name: 'source.php.embedded.block.html'
          , patterns: [ { include: '#language' } ]
          }
        ]
     }
   , { begin: '(((?<=\\?>)<)|<)\\?(?i:php|=)?'
     , beginCaptures: 
        { '0': { name: 'punctuation.section.embedded.begin.php' }
        , '2': { name: 'meta.consecutive-tags.php' }
        }
     , comment: 'Catches the remainder.'
     , end: '(\\?)>'
     , endCaptures: 
        { '0': { name: 'punctuation.section.embedded.end.php' }
        , '1': { name: 'source.php' }
        }
     , name: 'source.php.embedded.line.html'
     , patterns: [ { include: '#language' } ]
     }
   ]
, repository: 
   { constants: 
      { patterns: 
         [ { match: '(?i)\\b(TRUE|FALSE|NULL|__(FILE|FUNCTION|CLASS|METHOD|LINE)__|ON|OFF|YES|NO|NL|BR|TAB)\\b'
           , name: 'constant.language.php'
           }
         , { match: '\\b(DEFAULT_INCLUDE_PATH|E_(ALL|COMPILE_(ERROR|WARNING)|CORE_(ERROR|WARNING)|(RECOVERABLE_)?ERROR|NOTICE|PARSE|STRICT|USER_(ERROR|NOTICE|WARNING)|WARNING)|PEAR_(EXTENSION_DIR|INSTALL_DIR)|PHP_(BINDIR|CONFIG_FILE_PATH|DATADIR|E(OL|XTENSION_DIR)|L(IBDIR|OCALSTATEDIR)|O(S|UTPUT_HANDLER_CONT|UTPUT_HANDLER_END|UTPUT_HANDLER_START)|SYSCONFDIR|VERSION))\\b'
           , name: 'support.constant.core.php'
           }
         , { match: '\\b(A(B(DAY_([1-7])|MON_([0-9]{1,2}))|LT_DIGITS|M_STR|SSERT_(ACTIVE|BAIL|CALLBACK|QUIET_EVAL|WARNING))|C(ASE_(LOWER|UPPER)|HAR_MAX|O(DESET|NNECTION_(ABORTED|NORMAL|TIMEOUT)|UNT_(NORMAL|RECURSIVE))|REDITS_(ALL|DOCS|FULLPAGE|GENERAL|GROUP|MODULES|QA|SAPI)|RNCYSTR|RYPT_(BLOWFISH|EXT_DES|MD5|SALT_LENGTH|STD_DES)|URRENCY_SYMBOL)|D(AY_([1-7])|ECIMAL_POINT|IRECTORY_SEPARATOR|_(FMT|T_FMT))|E(NT_(COMPAT|NOQUOTES|QUOTES)|RA(|_D_FMT|_D_T_FMT|_T_FMT|_YEAR)|XTR_(IF_EXISTS|OVERWRITE|PREFIX_(ALL|IF_EXISTS|INVALID|SAME)|SKIP))|FRAC_DIGITS|GROUPING|HTML_(ENTITIES|SPECIALCHARS)|IN(FO_(ALL|CONFIGURATION|CREDITS|ENVIRONMENT|GENERAL|LICENSE|MODULES|VARIABLES)|I_(ALL|PERDIR|SYSTEM|USER)|T_(CURR_SYMBOL|FRAC_DIGITS))|L(C_(ALL|COLLATE|CTYPE|MESSAGES|MONETARY|NUMERIC|TIME)|O(CK_(EX|NB|SH|UN)|G_(ALERT|AUTH(|PRIV)|CONS|CRIT|CRON|DAEMON|DEBUG|EMERG|ERR|INFO|KERN|LOCAL([0-7])|LPR|MAIL|NDELAY|NEWS|NOTICE|NOWAIT|ODELAY|PERROR|PID|SYSLOG|USER|UUCP|WARNING)))|M(ON_([0-9]{1,2}|DECIMAL_POINT|GROUPING|THOUSANDS_SEP)|YSQL_(ASSOC|BOTH|NUM)|_(1_PI|2_(PI|SQRTPI)|E|L(N10|N2|OG(10E|2E))|PI(|_2|_4)|SQRT1_2|SQRT2))|N(EGATIVE_SIGN|O(EXPR|STR)|_(CS_PRECEDES|SEP_BY_SPACE|SIGN_POSN))|P(ATH(INFO_(BASENAME|DIRNAME|EXTENSION|FILENAME)|_SEPARATOR)|M_STR|OSITIVE_SIGN|_(CS_PRECEDES|SEP_BY_SPACE|SIGN_POSN))|RADIXCHAR|S(EEK_(CUR|END|SET)|ORT_(ASC|DESC|NUMERIC|REGULAR|STRING)|TR_PAD_(BOTH|LEFT|RIGHT))|T(HOUS(ANDS_SEP|EP)|_(FMT(|_AMPM)))|YES(EXPR|STR))\\b'
           , name: 'support.constant.std.php'
           }
         , { comment: 'In PHP, any identifier which is not a variable is taken to be a constant.\n\t\t\t\tHowever, if there is no constant defined with the given name then a notice\n\t\t\t\tis generated and the constant is assumed to have the value of its name.'
           , match: '[a-zA-Z_\\x{7f}-\\x{ff}][a-zA-Z0-9_\\x{7f}-\\x{ff}]*'
           , name: 'constant.other.php'
           }
         ]
      }
   , 'function-call': 
      { match: '[A-Za-z_][A-Za-z_0-9]*(?=\\s*\\()'
      , name: 'meta.function-call.php'
      }
   , instantiation: 
      { captures: 
         { '1': { name: 'keyword.other.new.php' }
         , '2': { name: 'variable.other.php' }
         , '3': { name: 'support.class.php' }
         , '4': { name: 'support.class.php' }
         }
      , match: '(?i)\\b(new)\\s+(?:(\\$[a-zA-Z_\\x{7f}-\\x{ff}][a-zA-Z0-9_\\x{7f}-\\x{ff}]*)|(\\w+))|(\\w+)(?=::)'
      }
   , interpolation: 
      { comment: 'http://www.php.net/manual/en/language.types.string.php#language.types.string.parsing'
      , patterns: 
         [ { match: '\\\\[0-7]{1,3}'
           , name: 'constant.numeric.octal.php'
           }
         , { match: '\\\\x[0-9A-Fa-f]{1,2}'
           , name: 'constant.numeric.hex.php'
           }
         , { match: '\\\\[nrt\\\\\\$\\"]'
           , name: 'constant.character.escape.php'
           }
         , { captures: 
              { '1': { name: 'variable.other.php' }
              , '2': { name: 'punctuation.definition.variable.php' }
              , '4': { name: 'punctuation.definition.variable.php' }
              }
           , comment: 'Simple syntax with braces: "foo${bar}baz"'
           , match: '(?x)((\\$\\{)(?<name>[a-zA-Z_\\x{7f}-\\x{ff}][a-zA-Z0-9_\\x{7f}-\\x{ff}]*)(\\}))'
           }
         , { captures: 
              { '1': { name: 'variable.other.php' }
              , '2': { name: 'punctuation.definition.variable.php' }
              , '4': { name: 'keyword.operator.class.php' }
              , '5': { name: 'variable.other.property.php' }
              , '6': { name: 'invalid.illegal.php' }
              , '7': { name: 'keyword.operator.index-start.php' }
              , '8': { name: 'constant.numeric.index.php' }
              , '9': { name: 'variable.other.index.php' }
              , '10': { name: 'punctuation.definition.variable.php' }
              , '11': { name: 'string.unquoted.index.php' }
              , '12': { name: 'invalid.illegal.invalid-simple-array-index.php' }
              , '13': { name: 'keyword.operator.index-end.php' }
              }
           , comment: 'Simple syntax: $foo, $foo[0], $foo[$bar], $foo->bar'
           , match: '(?x)((\\$)(?<name>[a-zA-Z_\\x{7f}-\\x{ff}][a-zA-Z0-9_\\x{7f}-\\x{ff}]*))(?:(->)(?:(\\g<name>)|(\\$\\g<name>))|(\\[)(?:(\\d+)|((\\$)\\g<name>)|(\\w+)|(.*?))(\\]))?'
           }
         , { begin: '(?=(?<regex>(?#simplesyntax)\\$(?<name>[a-zA-Z_\\x{7f}-\\x{ff}][a-zA-Z0-9_\\x{7f}-\\x{ff}]*)(?:\\[(?<index>[a-zA-Z0-9_\\x{7f}-\\x{ff}]+|\\$\\g<name>)\\]|->\\g<name>(\\(.*?\\))?)?|(?#simplesyntaxwithbraces)\\$\\{(?:\\g<name>(?<indices>\\[(?:\\g<index>|\'(?:\\\\.|[^\'\\\\])*\'|"(?:\\g<regex>|\\\\.|[^"\\\\])*")\\])?|\\g<complex>|\\$\\{\\g<complex>\\})\\}|(?#complexsyntax)\\{(?<complex>\\$(?<segment>\\g<name>(\\g<indices>*|\\(.*?\\))?)(?:->\\g<segment>)*|\\$\\g<complex>|\\$\\{\\g<complex>\\})\\}))\\{'
           , beginCaptures: { '0': { name: 'punctuation.definition.variable.php' } }
           , comment: 'Complex syntax. It seems this now supports complex method calls, as of PHP5.\n\t\t\t\t\t\t\t   I\'ve put wildcards into the function call parameter lists to handle this, but this may break the pattern.\n\t\t\t\t\t\t\t   It also might be better to disable it as I shouldn\'t imagine it\'s used often (hopefully) and it may confuse PHP4 users.'
           , end: '\\}'
           , endCaptures: { '0': { name: 'punctuation.definition.variable.php' } }
           , patterns: 
              [ { include: '#function-call' }
              , { include: '#var_basic' }
              , { include: '#object' }
              , { include: '#numbers' }
              , { match: '\\['
                , name: 'keyword.operator.index-start.php'
                }
              , { match: '\\]'
                , name: 'keyword.operator.index-end.php'
                }
              ]
           }
         ]
      }
   , language: 
      { patterns: 
         [ { begin: '(?=<<<\\s*(HTML|XML|SQL|JAVASCRIPT)\\s*$)'
           , end: '(?!<?<<\\s*(HTML|XML|SQL|JAVASCRIPT)\\s*$)'
           , name: 'string.unquoted.heredoc.php'
           , patterns: 
              [ { begin: '(<<<)\\s*(HTML)\\s*$\\n?'
                , beginCaptures: 
                   { '0': { name: 'punctuation.section.embedded.begin.php' }
                   , '1': { name: 'punctuation.definition.string.php' }
                   , '2': { name: 'keyword.operator.heredoc.php' }
                   }
                , contentName: 'text.html'
                , end: '^(HTML)(;?)$\\n?'
                , endCaptures: 
                   { '0': { name: 'punctuation.section.embedded.end.php' }
                   , '1': { name: 'keyword.operator.heredoc.php' }
                   , '2': { name: 'punctuation.definition.string.php' }
                   }
                , name: 'meta.embedded.html'
                , patterns: 
                   [ { include: 'text.html.basic' }
                   , { include: '#interpolation' }
                   ]
                }
              , { begin: '(<<<)\\s*(XML)\\s*$\\n?'
                , beginCaptures: 
                   { '0': { name: 'punctuation.section.embedded.begin.php' }
                   , '1': { name: 'punctuation.definition.string.php' }
                   , '2': { name: 'keyword.operator.heredoc.php' }
                   }
                , contentName: 'text.xml'
                , end: '^(XML)(;?)$\\n?'
                , endCaptures: 
                   { '0': { name: 'punctuation.section.embedded.end.php' }
                   , '1': { name: 'keyword.operator.heredoc.php' }
                   , '2': { name: 'punctuation.definition.string.php' }
                   }
                , name: 'meta.embedded.xml'
                , patterns: 
                   [ { include: 'text.xml' }
                   , { include: '#interpolation' }
                   ]
                }
              , { begin: '(<<<)\\s*(SQL)\\s*$\\n?'
                , beginCaptures: 
                   { '0': { name: 'punctuation.section.embedded.begin.php' }
                   , '1': { name: 'punctuation.definition.string.php' }
                   , '2': { name: 'keyword.operator.heredoc.php' }
                   }
                , contentName: 'source.sql'
                , end: '^(SQL)(;?)$\\n?'
                , endCaptures: 
                   { '0': { name: 'punctuation.section.embedded.end.php' }
                   , '1': { name: 'keyword.operator.heredoc.php' }
                   , '2': { name: 'punctuation.definition.string.php' }
                   }
                , name: 'meta.embedded.sql'
                , patterns: 
                   [ { include: 'source.sql' }
                   , { include: '#interpolation' }
                   ]
                }
              , { begin: '(<<<)\\s*(JAVASCRIPT)\\s*$\\n?'
                , beginCaptures: 
                   { '0': { name: 'punctuation.section.embedded.begin.php' }
                   , '1': { name: 'punctuation.definition.string.php' }
                   , '2': { name: 'keyword.operator.heredoc.php' }
                   }
                , contentName: 'source.js'
                , end: '^(JAVASCRIPT)(;?)$\\n?'
                , endCaptures: 
                   { '0': { name: 'punctuation.section.embedded.end.php' }
                   , '1': { name: 'keyword.operator.heredoc.php' }
                   , '2': { name: 'punctuation.definition.string.php' }
                   }
                , name: 'meta.embedded.js'
                , patterns: 
                   [ { include: 'source.js' }
                   , { include: '#interpolation' }
                   ]
                }
              ]
           }
         , { begin: '/\\*\\*(?:#@\\+)?\\s*$'
           , captures: { '0': { name: 'punctuation.definition.comment.php' } }
           , comment: 'This now only highlights a docblock if the first line contains only /**\n\t\t\t\t\t\t\t\t- this is to stop highlighting everything as invalid when people do comment banners with /******** ...\n\t\t\t\t\t\t\t\t- Now matches /**#@+ too - used for docblock templates: http://manual.phpdoc.org/HTMLframesConverter/default/phpDocumentor/tutorial_phpDocumentor.howto.pkg.html#basics.docblocktemplate'
           , end: '\\*/'
           , name: 'comment.block.documentation.phpdoc.php'
           , patterns: [ { include: '#php_doc' } ]
           }
         , { begin: '/\\*'
           , captures: { '0': { name: 'punctuation.definition.comment.php' } }
           , end: '\\*/'
           , name: 'comment.block.php'
           }
         , { captures: { '1': { name: 'punctuation.definition.comment.php' } }
           , match: '(//).*?($\\n?|(?=\\?>))'
           , name: 'comment.line.double-slash.php'
           }
         , { captures: { '1': { name: 'punctuation.definition.comment.php' } }
           , match: '(#).*?($\\n?|(?=\\?>))'
           , name: 'comment.line.number-sign.php'
           }
         , { begin: '^(?i)\\s*(interface)\\s+([a-z0-9_]+)\\s*(extends)?\\s*'
           , beginCaptures: 
              { '1': { name: 'storage.type.interface.php' }
              , '2': { name: 'entity.name.type.interface.php' }
              , '3': { name: 'storage.modifier.extends.php' }
              }
           , end: '$'
           , name: 'meta.interface.php'
           , patterns: 
              [ { match: '[a-zA-Z0-9_]+'
                , name: 'entity.other.inherited-class.php'
                }
              ]
           }
         , { begin: '(?i)^\\s*(abstract|final)?\\s*(class)\\s+([a-z0-9_]+)\\s*'
           , beginCaptures: 
              { '1': { name: 'storage.modifier.abstract.php' }
              , '2': { name: 'storage.type.class.php' }
              , '3': { name: 'entity.name.type.class.php' }
              }
           , end: '$'
           , name: 'meta.class.php'
           , patterns: 
              [ { captures: 
                   { '1': { name: 'storage.modifier.extends.php' }
                   , '2': { name: 'entity.other.inherited-class.php' }
                   }
                , match: '(?i:(extends))\\s+([a-zA-Z0-9_]+)\\s*'
                }
              , { begin: '(?i:(implements))\\s+([a-zA-Z0-9_]+)\\s*'
                , beginCaptures: 
                   { '1': { name: 'storage.modifier.implements.php' }
                   , '2': { name: 'support.class.implements.php' }
                   }
                , end: '(?=\\s*\\b(?i:(extends)))|$'
                , patterns: 
                   [ { captures: { '1': { name: 'support.class.implements.php' } }
                     , match: ',\\s*([a-zA-Z0-9_]+)\\s*'
                     }
                   ]
                }
              ]
           }
         , { match: '\\b(break|c(ase|ontinue)|d(e(clare|fault)|ie|o)|e(lse(if)?|nd(declare|for(each)?|if|switch|while)|xit)|for(each)?|if|return|switch|use|while)\\b'
           , name: 'keyword.control.php'
           }
         , { begin: '(?i)\\b((?:require|include)(?:_once)?)\\b\\s*'
           , beginCaptures: { '1': { name: 'keyword.control.import.include.php' } }
           , end: '(?=\\s|;|$)'
           , name: 'meta.include.php'
           , patterns: [ { include: '#language' } ]
           }
         , { captures: 
              { '1': { name: 'keyword.control.exception.php' }
              , '2': { name: 'support.class.php' }
              , '3': { name: 'variable.other.php' }
              , '4': { name: 'punctuation.definition.variable.php' }
              }
           , match: '\\b(catch)\\b\\s*\\(\\s*([A-Za-z_][A-Za-z_0-9]*)\\s*((\\$+)[a-zA-Z_\\x{7f}-\\x{ff}][a-zA-Z0-9_\\x{7f}-\\x{ff}]*)\\s*\\)'
           , name: 'meta.catch.php'
           }
         , { match: '\\b(catch|try|throw|exception)\\b'
           , name: 'keyword.control.exception.php'
           }
         , { begin: '(?:^\\s*)((?:(?:final|abstract|public|private|protected|static)\\s+)*)(function)(?:\\s+|(\\s*&\\s*))(?:(__(?:call|(?:con|de)struct|get|(?:is|un)?set|tostring|clone|set_state|sleep|wakeup|autoload))|([a-zA-Z0-9_]+))\\s*(\\()'
           , beginCaptures: 
              { '1': { name: 'storage.modifier.php' }
              , '2': { name: 'storage.type.function.php' }
              , '3': { name: 'storage.modifier.reference.php' }
              , '4': { name: 'support.function.magic.php' }
              , '5': { name: 'entity.name.function.php' }
              , '6': { name: 'punctuation.definition.parameters.begin.php' }
              }
           , contentName: 'meta.function.arguments.php'
           , end: '\\)'
           , endCaptures: { '1': { name: 'punctuation.definition.parameters.end.php' } }
           , name: 'meta.function.php'
           , patterns: 
              [ { begin: '(?x)\\s*(array)\\s*(&)?\\s*((\\$+)[a-zA-Z_\\x{7f}-\\x{ff}][a-zA-Z0-9_\\x{7f}-\\x{ff}]*)\\s*(=)\\s*(array)\\s*(\\()'
                , beginCaptures: 
                   { '1': { name: 'storage.type.php' }
                   , '2': { name: 'storage.modifier.php' }
                   , '3': { name: 'variable.other.php' }
                   , '4': { name: 'punctuation.definition.variable.php' }
                   , '5': { name: 'keyword.operator.assignment.php' }
                   , '6': { name: 'support.function.construct.php' }
                   , '7': { name: 'punctuation.definition.array.begin.php' }
                   }
                , contentName: 'meta.array.php'
                , end: '\\)'
                , endCaptures: { '0': { name: 'punctuation.definition.array.end.php' } }
                , name: 'meta.function.argument.array.php'
                , patterns: [ { include: '#strings' }, { include: '#numbers' } ]
                }
              , { captures: 
                   { '1': { name: 'storage.type.php' }
                   , '2': { name: 'storage.modifier.php' }
                   , '3': { name: 'variable.other.php' }
                   , '4': { name: 'punctuation.definition.variable.php' }
                   , '5': { name: 'keyword.operator.assignment.php' }
                   , '6': { name: 'constant.language.php' }
                   , '7': { name: 'invalid.illegal.non-null-typehinted.php' }
                   }
                , match: '(?x)\\s*(array)\\s*(&)?\\s*((\\$+)[a-zA-Z_\\x{7f}-\\x{ff}][a-zA-Z0-9_\\x{7f}-\\x{ff}]*)(?:\\s*(=)\\s*(?i:(NULL)|(\\S.*?))?)?\\s*(?=,|\\))'
                , name: 'meta.function.argument.array.php'
                }
              , { captures: 
                   { '1': { name: 'support.class.php' }
                   , '2': { name: 'storage.modifier.php' }
                   , '3': { name: 'variable.other.php' }
                   , '4': { name: 'punctuation.definition.variable.php' }
                   , '5': { name: 'keyword.operator.assignment.php' }
                   , '6': { name: 'constant.language.php' }
                   , '7': { name: 'invalid.illegal.non-null-typehinted.php' }
                   }
                , match: '(?x)\\s*([A-Za-z_][A-Za-z_0-9]*)\\s*(&)?\\s*((\\$+)[a-zA-Z_\\x{7f}-\\x{ff}][a-zA-Z0-9_\\x{7f}-\\x{ff}]*)(?:\\s*(=)\\s*(?i:(NULL)|(\\S.*?))?)?\\s*(?=,|\\))'
                , name: 'meta.function.argument.typehinted.php'
                }
              , { captures: 
                   { '1': { name: 'storage.modifier.php' }
                   , '2': { name: 'variable.other.php' }
                   , '3': { name: 'punctuation.definition.variable.php' }
                   }
                , match: '(\\s*&)?\\s*((\\$+)[a-zA-Z_\\x{7f}-\\x{ff}][a-zA-Z0-9_\\x{7f}-\\x{ff}]*)\\s*(?=,|\\))'
                , name: 'meta.function.argument.no-default.php'
                }
              , { begin: '(\\s*&)?\\s*((\\$+)[a-zA-Z_\\x{7f}-\\x{ff}][a-zA-Z0-9_\\x{7f}-\\x{ff}]*)(?:\\s*(=)\\s*)\\s*'
                , captures: 
                   { '1': { name: 'storage.modifier.php' }
                   , '2': { name: 'variable.other.php' }
                   , '3': { name: 'punctuation.definition.variable.php' }
                   , '4': { name: 'keyword.operator.assignment.php' }
                   }
                , end: '(?=,|\\))'
                , name: 'meta.function.argument.default.php'
                , patterns: [ { include: '#parameter-default-types' } ]
                }
              , { begin: '/\\*'
                , captures: { '0': { name: 'punctuation.definition.comment.php' } }
                , end: '\\*/'
                , name: 'comment.block.php'
                }
              ]
           }
         , { match: '(?i)\\b(real|double|float|int(eger)?|bool(ean)?|string|class|clone|var|function|interface|parent|self|object)\\b'
           , name: 'storage.type.php'
           }
         , { match: '(?i)\\b(global|abstract|const|extends|implements|final|p(r(ivate|otected)|ublic)|static)\\b'
           , name: 'storage.modifier.php'
           }
         , { include: '#object' }
         , { captures: 
              { '1': { name: 'keyword.operator.class.php' }
              , '2': { name: 'meta.function-call.static.php' }
              , '3': { name: 'variable.other.class.php' }
              , '4': { name: 'punctuation.definition.variable.php' }
              , '5': { name: 'constant.other.class.php' }
              }
           , match: '(?x)(::)(?:([A-Za-z_][A-Za-z_0-9]*)\\s*\\(|((\\$+)[a-zA-Z_\\x{7f}-\\x{ff}][a-zA-Z0-9_\\x{7f}-\\x{ff}]*)|([a-zA-Z_\\x{7f}-\\x{ff}][a-zA-Z0-9_\\x{7f}-\\x{ff}]*))?'
           }
         , { include: '#support' }
         , { begin: '(<<<)\\s*([a-zA-Z_]+[a-zA-Z0-9_]*)'
           , beginCaptures: 
              { '1': { name: 'punctuation.definition.string.php' }
              , '2': { name: 'keyword.operator.heredoc.php' }
              }
           , end: '^(\\2)(;?)$'
           , endCaptures: 
              { '1': { name: 'keyword.operator.heredoc.php' }
              , '2': { name: 'punctuation.definition.string.php' }
              }
           , name: 'string.unquoted.heredoc.php'
           , patterns: [ { include: '#interpolation' } ]
           }
         , { match: '=>', name: 'keyword.operator.key.php' }
         , { match: '&(?=\\s*(\\$|new|[A-Za-z_][A-Za-z_0-9]+(?=\\s*\\()))'
           , name: 'storage.modifier.reference.php'
           }
         , { match: ';'
           , name: 'punctuation.terminator.expression.php'
           }
         , { match: '(@)'
           , name: 'keyword.operator.error-control.php'
           }
         , { match: '(\\-\\-|\\+\\+)'
           , name: 'keyword.operator.increment-decrement.php'
           }
         , { match: '(\\-|\\+|\\*|/|%)'
           , name: 'keyword.operator.arithmetic.php'
           }
         , { match: '(?i)(!|&&|\\|\\|)|\\b(and|or|xor|as)\\b'
           , name: 'keyword.operator.logical.php'
           }
         , { match: '<<|>>|~|\\^|&|\\|'
           , name: 'keyword.operator.bitwise.php'
           }
         , { match: '(===|==|!==|!=|<=|>=|<>|<|>)'
           , name: 'keyword.operator.comparison.php'
           }
         , { match: '(\\.=|\\.)'
           , name: 'keyword.operator.string.php'
           }
         , { match: '='
           , name: 'keyword.operator.assignment.php'
           }
         , { captures: 
              { '1': { name: 'keyword.operator.type.php' }
              , '2': { name: 'support.class.php' }
              }
           , match: '(?i)\\b(instanceof)\\b(?:\\s+(\\w+))?'
           }
         , { include: '#numbers' }
         , { include: '#strings' }
         , { include: '#string-backtick' }
         , { include: '#function-call' }
         , { include: '#variables' }
         , { captures: 
              { '1': { name: 'keyword.operator.php' }
              , '2': { name: 'variable.other.property.php' }
              }
           , match: '(?<=[a-zA-Z0-9_\\x{7f}-\\x{ff}])(->)([a-zA-Z_\\x{7f}-\\x{ff}][a-zA-Z0-9_\\x{7f}-\\x{ff}]*?)\\b'
           }
         , { include: '#instantiation' }
         , { include: '#constants' }
         ]
      }
   , numbers: 
      { match: '\\b((0(x|X)[0-9a-fA-F]*)|(([0-9]+\\.?[0-9]*)|(\\.[0-9]+))((e|E)(\\+|-)?[0-9]+)?)\\b'
      , name: 'constant.numeric.php'
      }
   , object: 
      { captures: 
         { '1': { name: 'keyword.operator.class.php' }
         , '2': { name: 'meta.function-call.object.php' }
         , '3': { name: 'variable.other.property.php' }
         , '4': { name: 'punctuation.definition.variable.php' }
         }
      , match: '(?x)(->)(?:([A-Za-z_][A-Za-z_0-9]*)\\s*\\(|((\\$+)?[a-zA-Z_\\x{7f}-\\x{ff}][a-zA-Z0-9_\\x{7f}-\\x{ff}]*))?'
      }
   , 'parameter-default-types': 
      { patterns: 
         [ { include: '#strings' }
         , { include: '#numbers' }
         , { include: '#string-backtick' }
         , { include: '#variables' }
         , { match: '=>', name: 'keyword.operator.key.php' }
         , { match: '='
           , name: 'keyword.operator.assignment.php'
           }
         , { match: '&(?=\\s*\\$)'
           , name: 'storage.modifier.reference.php'
           }
         , { begin: '(array)\\s*(\\()'
           , beginCaptures: 
              { '1': { name: 'support.function.construct.php' }
              , '2': { name: 'punctuation.definition.array.begin.php' }
              }
           , end: '\\)'
           , endCaptures: { '0': { name: 'punctuation.definition.array.end.php' } }
           , name: 'meta.array.php'
           , patterns: [ { include: '#parameter-default-types' } ]
           }
         , { include: '#instantiation' }
         , { include: '#constants' }
         ]
      }
   , php_doc: 
      { patterns: 
         [ { comment: 'PHPDocumentor only recognises lines with an asterisk as the first non-whitespaces character'
           , match: '^(?!\\s*\\*).*$\\n?'
           , name: 'invalid.illegal.missing-asterisk.phpdoc.php'
           }
         , { captures: 
              { '1': { name: 'keyword.other.phpdoc.php' }
              , '3': { name: 'storage.modifier.php' }
              , '4': { name: 'invalid.illegal.wrong-access-type.phpdoc.php' }
              }
           , match: '^\\s*\\*\\s*(@access)\\s+((public|private|protected)|(.+))\\s*$'
           }
         , { match: '((https?|s?ftp|ftps|file|smb|afp|nfs|(x-)?man|gopher|txmt)://|mailto:)[-:@a-zA-Z0-9_.~%+/?=&#]+(?<![.?:])'
           , name: 'markup.underline.link.php'
           }
         , { captures: 
              { '1': { name: 'keyword.other.phpdoc.php' }
              , '2': { name: 'markup.underline.link.php' }
              }
           , match: '(@xlink)\\s+(.+)\\s*$'
           }
         , { match: '\\@(a(bstract|uthor)|c(ategory|opyright)|example|global|internal|li(cense|nk)|pa(ckage|ram)|return|s(ee|ince|tatic|ubpackage)|t(hrows|odo)|v(ar|ersion)|uses|deprecated|final)\\b'
           , name: 'keyword.other.phpdoc.php'
           }
         , { captures: { '1': { name: 'keyword.other.phpdoc.php' } }
           , match: '\\{(@(link)).+?\\}'
           , name: 'meta.tag.inline.phpdoc.php'
           }
         ]
      }
   , 'regex-double-quoted': 
      { begin: '(?x)"/(?=(\\\\.|[^"/])++/[imsxeADSUXu]*")'
      , beginCaptures: { '0': { name: 'punctuation.definition.string.begin.php' } }
      , end: '(/)([imsxeADSUXu]*)(")'
      , endCaptures: { '0': { name: 'punctuation.definition.string.end.php' } }
      , name: 'string.regexp.double-quoted.php'
      , patterns: 
         [ { comment: 'Escaped from the regexp \u2013 there can also be 2 backslashes (since 1 will escape the first)'
           , match: '(\\\\){1,2}[.$^\\[\\]{}]'
           , name: 'constant.character.escape.regex.php'
           }
         , { include: '#interpolation' }
         , { captures: 
              { '1': { name: 'punctuation.definition.arbitrary-repitition.php' }
              , '3': { name: 'punctuation.definition.arbitrary-repitition.php' }
              }
           , match: '(\\{)\\d+(,\\d+)?(\\})'
           , name: 'string.regexp.arbitrary-repitition.php'
           }
         , { begin: '\\[(?:\\^?\\])?'
           , captures: { '0': { name: 'punctuation.definition.character-class.php' } }
           , end: '\\]'
           , name: 'string.regexp.character-class.php'
           , patterns: [ { include: '#interpolation' } ]
           }
         , { match: '[$^+*]'
           , name: 'keyword.operator.regexp.php'
           }
         ]
      }
   , 'regex-single-quoted': 
      { begin: '(?x)\'/(?=(\\\\.|[^\'/])++/[imsxeADSUXu]*\')'
      , beginCaptures: { '0': { name: 'punctuation.definition.string.begin.php' } }
      , end: '(/)([imsxeADSUXu]*)(\')'
      , endCaptures: { '0': { name: 'punctuation.definition.string.end.php' } }
      , name: 'string.regexp.single-quoted.php'
      , patterns: 
         [ { captures: 
              { '1': { name: 'punctuation.definition.arbitrary-repitition.php' }
              , '3': { name: 'punctuation.definition.arbitrary-repitition.php' }
              }
           , match: '(\\{)\\d+(,\\d+)?(\\})'
           , name: 'string.regexp.arbitrary-repitition.php'
           }
         , { comment: 'Escaped from the regexp \u2013 there can also be 2 backslashes (since 1 will escape the first)'
           , match: '(\\\\){1,2}[.$^\\[\\]{}]'
           , name: 'constant.character.escape.regex.php'
           }
         , { comment: 'Escaped from the PHP string \u2013 there can also be 2 backslashes (since 1 will escape the first)'
           , match: '\\\\{1,2}[\\\\\']'
           , name: 'constant.character.escape.php'
           }
         , { begin: '\\[(?:\\^?\\])?'
           , captures: { '0': { name: 'punctuation.definition.character-class.php' } }
           , end: '\\]'
           , name: 'string.regexp.character-class.php'
           , patterns: 
              [ { match: '\\\\[\\\\\'\\[\\]]'
                , name: 'constant.character.escape.php'
                }
              ]
           }
         , { match: '[$^+*]'
           , name: 'keyword.operator.regexp.php'
           }
         ]
      }
   , 'sql-string-double-quoted': 
      { begin: '"\\s*(?=(SELECT|INSERT|UPDATE|DELETE|CREATE|REPLACE|ALTER)\\b)'
      , beginCaptures: { '0': { name: 'punctuation.definition.string.begin.php' } }
      , contentName: 'source.sql.embedded.php'
      , end: '"'
      , endCaptures: { '0': { name: 'punctuation.definition.string.end.php' } }
      , name: 'string.quoted.double.sql.php'
      , patterns: 
         [ { match: '#(\\\\"|[^"])*(?="|$\\n?)'
           , name: 'comment.line.number-sign.sql'
           }
         , { match: '--(\\\\"|[^"])*(?="|$\\n?)'
           , name: 'comment.line.double-dash.sql'
           }
         , { begin: '\'(?=[^\']*?")'
           , comment: 'Unclosed strings must be captured to avoid them eating the remainder of the PHP script\n\t\t\t\t\tSample case: $sql = "SELECT * FROM bar WHERE foo = \'" . $variable . "\'"'
           , end: '(?=")'
           , name: 'string.quoted.single.unclosed.sql'
           , patterns: 
              [ { match: '\\\\[\\\\\']'
                , name: 'constant.character.escape.php'
                }
              ]
           }
         , { begin: '`(?=[^`]*?")'
           , comment: 'Unclosed strings must be captured to avoid them eating the remainder of the PHP script\n\t\t\t\t\tSample case: $sql = "SELECT * FROM bar WHERE foo = \'" . $variable . "\'"'
           , end: '(?=")'
           , name: 'string.quoted.other.backtick.unclosed.sql'
           , patterns: 
              [ { match: '\\\\[\\\\\']'
                , name: 'constant.character.escape.php'
                }
              ]
           }
         , { begin: '\\\\"(?!([^\\\\"]|\\\\[^"])*\\\\")(?=(\\\\[^"]|.)*?")'
           , comment: 'Unclosed strings must be captured to avoid them eating the remainder of the PHP script\n\t\t\t\t\tSample case: $sql = "SELECT * FROM bar WHERE foo = \'" . $variable . "\'"'
           , end: '(?=")'
           , name: 'string.quoted.double.unclosed.sql'
           , patterns: 
              [ { match: '\\\\[\\\\\']'
                , name: 'constant.character.escape.php'
                }
              ]
           }
         , { begin: '\\\\"'
           , captures: { '0': { name: 'constant.character.escape.php' } }
           , end: '\\\\"'
           , name: 'string.quoted.double.sql'
           , patterns: [ { include: '#interpolation' } ]
           }
         , { begin: '`'
           , end: '`'
           , name: 'string.quoted.other.backtick.sql'
           , patterns: [ { include: '#interpolation' } ]
           }
         , { begin: '\''
           , end: '\''
           , name: 'string.quoted.single.sql'
           , patterns: [ { include: '#interpolation' } ]
           }
         , { match: '\\\\.'
           , name: 'constant.character.escape.php'
           }
         , { include: '#interpolation' }
         , { include: 'source.sql' }
         ]
      }
   , 'sql-string-single-quoted': 
      { begin: '\'\\s*(?=(SELECT|INSERT|UPDATE|DELETE|CREATE|REPLACE|ALTER)\\b)'
      , beginCaptures: { '0': { name: 'punctuation.definition.string.begin.php' } }
      , contentName: 'source.sql.embedded.php'
      , end: '\''
      , endCaptures: { '0': { name: 'punctuation.definition.string.end.php' } }
      , name: 'string.quoted.single.sql.php'
      , patterns: 
         [ { match: '#(\\\\\'|[^\'])*(?=\'|$\\n?)'
           , name: 'comment.line.number-sign.sql'
           }
         , { match: '--(\\\\\'|[^\'])*(?=\'|$\\n?)'
           , name: 'comment.line.double-dash.sql'
           }
         , { begin: '\\\\\'(?!([^\\\\\']|\\\\[^\'])*\\\\\')(?=(\\\\[^\']|.)*?\')'
           , comment: 'Unclosed strings must be captured to avoid them eating the remainder of the PHP script\n\t\t\t\t\tSample case: $sql = "SELECT * FROM bar WHERE foo = \'" . $variable . "\'"'
           , end: '(?=\')'
           , name: 'string.quoted.single.unclosed.sql'
           , patterns: 
              [ { match: '\\\\[\\\\\']'
                , name: 'constant.character.escape.php'
                }
              ]
           }
         , { begin: '`(?=[^`]*?\')'
           , comment: 'Unclosed strings must be captured to avoid them eating the remainder of the PHP script\n\t\t\t\t\tSample case: $sql = "SELECT * FROM bar WHERE foo = \'" . $variable . "\'"'
           , end: '(?=\')'
           , name: 'string.quoted.other.backtick.unclosed.sql'
           , patterns: 
              [ { match: '\\\\[\\\\\']'
                , name: 'constant.character.escape.php'
                }
              ]
           }
         , { begin: '"(?=[^"]*?\')'
           , comment: 'Unclosed strings must be captured to avoid them eating the remainder of the PHP script\n\t\t\t\t\tSample case: $sql = "SELECT * FROM bar WHERE foo = \'" . $variable . "\'"'
           , end: '(?=\')'
           , name: 'string.quoted.double.unclosed.sql'
           , patterns: 
              [ { match: '\\\\[\\\\\']'
                , name: 'constant.character.escape.php'
                }
              ]
           }
         , { begin: '\\\\\''
           , captures: { '0': { name: 'constant.character.escape.php' } }
           , end: '\\\\\''
           , name: 'string.quoted.single.sql'
           }
         , { match: '\\\\[\\\\\']'
           , name: 'constant.character.escape.php'
           }
         , { include: 'source.sql' }
         ]
      }
   , 'string-backtick': 
      { begin: '`'
      , beginCaptures: { '0': { name: 'punctuation.definition.string.begin.php' } }
      , end: '`'
      , endCaptures: { '0': { name: 'punctuation.definition.string.end.php' } }
      , name: 'string.interpolated.php'
      , patterns: 
         [ { match: '\\\\.'
           , name: 'constant.character.escape.php'
           }
         , { include: '#interpolation' }
         ]
      }
   , 'string-double-quoted': 
      { begin: '"'
      , beginCaptures: { '0': { name: 'punctuation.definition.string.begin.php' } }
      , comment: 'This contentName is just to allow the usage of \u201cselect scope\u201d to select the string contents first, then the string with quotes'
      , contentName: 'meta.string-contents.quoted.double.php'
      , end: '"'
      , endCaptures: { '0': { name: 'punctuation.definition.string.end.php' } }
      , name: 'string.quoted.double.php'
      , patterns: [ { include: '#interpolation' } ]
      }
   , 'string-single-quoted': 
      { begin: '\''
      , beginCaptures: { '0': { name: 'punctuation.definition.string.begin.php' } }
      , contentName: 'meta.string-contents.quoted.single.php'
      , end: '\''
      , endCaptures: { '0': { name: 'punctuation.definition.string.end.php' } }
      , name: 'string.quoted.single.php'
      , patterns: 
         [ { match: '\\\\[\\\\\']'
           , name: 'constant.character.escape.php'
           }
         ]
      }
   , strings: 
      { patterns: 
         [ { include: '#regex-double-quoted' }
         , { include: '#sql-string-double-quoted' }
         , { include: '#string-double-quoted' }
         , { include: '#regex-single-quoted' }
         , { include: '#sql-string-single-quoted' }
         , { include: '#string-single-quoted' }
         ]
      }
   , support: 
      { patterns: 
         [ { begin: '(array)(\\()'
           , beginCaptures: 
              { '1': { name: 'support.function.construct.php' }
              , '2': { name: 'punctuation.definition.array.begin.php' }
              }
           , end: '\\)'
           , endCaptures: { '0': { name: 'punctuation.definition.array.end.php' } }
           , name: 'meta.array.php'
           , patterns: [ { include: '#language' } ]
           }
         , { match: '(?i)\\b(s(huffle|ort)|n(ext|at(sort|casesort))|c(o(unt|mpact)|urrent)|in_array|u(sort|ksort|asort)|prev|e(nd|xtract)|k(sort|ey|rsort)|a(sort|r(sort|ray_(s(hift|um|plice|earch|lice)|c(h(unk|ange_key_case)|o(unt_values|mbine))|intersect(_(u(key|assoc)|key|assoc))?|diff(_(u(key|assoc)|key|assoc))?|u(n(shift|ique)|intersect(_(uassoc|assoc))?|diff(_(uassoc|assoc))?)|p(op|ush|ad|roduct)|values|key(s|_exists)|f(il(ter|l(_keys)?)|lip)|walk(_recursive)?|r(e(duce|verse)|and)|m(ultisort|erge(_recursive)?|ap))))|r(sort|eset|ange)|m(in|ax))(?=\\s*\\()'
           , name: 'support.function.array.php'
           }
         , { match: '(?i)\\bassert(_options)?(?=\\s*\\()'
           , name: 'support.function.assert.php'
           }
         , { match: '(?i)\\bdom_attr_is_id(?=\\s*\\()'
           , name: 'support.function.attr.php'
           }
         , { match: '(?i)\\bbase64_(decode|encode)(?=\\s*\\()'
           , name: 'support.function.base64.php'
           }
         , { match: '(?i)\\b(highlight_(string|file)|s(ys_getloadavg|et_(include_path|magic_quotes_runtime)|leep)|c(on(stant|nection_(status|aborted))|all_user_(func(_array)?|method(_array)?))|time_(sleep_until|nanosleep)|i(s_uploaded_file|n(i_(set|restore|get(_all)?)|et_(ntop|pton))|p2long|gnore_user_abort|mport_request_variables)|u(sleep|nregister_tick_function)|error_(log|get_last)|p(hp_strip_whitespace|utenv|arse_ini_file|rint_r)|flush|long2ip|re(store_include_path|gister_(shutdown_function|tick_function))|get(servby(name|port)|opt|_(c(urrent_user|fg_var)|include_path|magic_quotes_(gpc|runtime))|protobyn(umber|ame)|env)|move_uploaded_file)(?=\\s*\\()'
           , name: 'support.function.basic_functions.php'
           }
         , { match: '(?i)\\bbc(s(cale|ub|qrt)|comp|div|pow(mod)?|add|m(od|ul))(?=\\s*\\()'
           , name: 'support.function.bcmath.php'
           }
         , { match: '(?i)\\bbirdstep_(c(o(nnect|mmit)|lose)|off_autocommit|exec|f(ieldn(um|ame)|etch|reeresult)|autocommit|r(ollback|esult))(?=\\s*\\()'
           , name: 'support.function.birdstep.php'
           }
         , { match: '(?i)\\bget_browser(?=\\s*\\()'
           , name: 'support.function.browscap.php'
           }
         , { match: '(?i)\\b(s(tr(nc(asecmp|mp)|c(asecmp|mp)|len)|et_e(rror_handler|xception_handler))|c(lass_exists|reate_function)|trigger_error|i(s_(subclass_of|a)|nterface_exists)|de(fine(d)?|bug_(print_backtrace|backtrace))|zend_version|property_exists|e(ach|rror_reporting|xtension_loaded)|func(tion_exists|_(num_args|get_arg(s)?))|leak|restore_e(rror_handler|xception_handler)|get_(class(_(vars|methods))?|included_files|de(clared_(classes|interfaces)|fined_(constants|vars|functions))|object_vars|extension_funcs|parent_class|loaded_extensions|resource_type)|method_exists)(?=\\s*\\()'
           , name: 'support.function.builtin_functions.php'
           }
         , { match: '(?i)\\bbz(compress|decompress|open|err(str|no|or)|read)(?=\\s*\\()'
           , name: 'support.function.bz2.php'
           }
         , { match: '(?i)\\b(jdtounix|unixtojd)(?=\\s*\\()'
           , name: 'support.function.cal_unix.php'
           }
         , { match: '(?i)\\b(cal_(to_jd|info|days_in_month|from_jd)|j(d(to(j(ulian|ewish)|french|gregorian)|dayofweek|monthname)|uliantojd|ewishtojd)|frenchtojd|gregoriantojd)(?=\\s*\\()'
           , name: 'support.function.calendar.php'
           }
         , { match: '(?i)\\bdom_characterdata_(substring_data|insert_data|delete_data|append_data|replace_data)(?=\\s*\\()'
           , name: 'support.function.characterdata.php'
           }
         , { match: '(?i)\\bcom_(create_guid|print_typeinfo|event_sink|load_typelib|get_active_object|message_pump)(?=\\s*\\()'
           , name: 'support.function.com_com.php'
           }
         , { match: '(?i)\\bvariant_(s(ub|et(_type)?)|n(ot|eg)|c(a(st|t)|mp)|i(nt|div|mp)|or|d(iv|ate_(to_timestamp|from_timestamp))|pow|eqv|fix|a(nd|dd|bs)|get_type|round|xor|m(od|ul))(?=\\s*\\()'
           , name: 'support.function.com_variant.php'
           }
         , { match: '(?i)\\bcrc32(?=\\s*\\()'
           , name: 'support.function.crc32.php'
           }
         , { match: '(?i)\\bcrypt(?=\\s*\\()'
           , name: 'support.function.crypt.php'
           }
         , { match: '(?i)\\bctype_(space|cntrl|digit|upper|p(unct|rint)|lower|al(num|pha)|graph|xdigit)(?=\\s*\\()'
           , name: 'support.function.ctype.php'
           }
         , { match: '(?i)\\bconvert_cyr_string(?=\\s*\\()'
           , name: 'support.function.cyr_convert.php'
           }
         , { match: '(?i)\\bstrptime(?=\\s*\\()'
           , name: 'support.function.datetime.php'
           }
         , { match: '(?i)\\bdba_(handlers|sync|nextkey|close|insert|delete|op(timize|en)|exists|popen|key_split|f(irstkey|etch)|list|replace)(?=\\s*\\()'
           , name: 'support.function.dba.php'
           }
         , { match: '(?i)\\bdbase_(num(fields|records)|c(lose|reate)|delete_record|open|pack|add_record|get_(header_info|record(_with_names)?)|replace_record)(?=\\s*\\()'
           , name: 'support.function.dbase.php'
           }
         , { match: '(?i)\\b(scandir|c(h(dir|root)|losedir)|dir|opendir|re(addir|winddir)|g(etcwd|lob))(?=\\s*\\()'
           , name: 'support.function.dir.php'
           }
         , { match: '(?i)\\bdl(?=\\s*\\()'
           , name: 'support.function.dl.php'
           }
         , { match: '(?i)\\b(dns_(check_record|get_(record|mx))|gethostby(name(l)?|addr))(?=\\s*\\()'
           , name: 'support.function.dns.php'
           }
         , { match: '(?i)\\bdom_document_(s(chema_validate(_file)?|ave(_html(_file)?|xml)?)|normalize_document|create_(c(datasection|omment)|text_node|document_fragment|processing_instruction|e(ntity_reference|lement(_ns)?)|attribute(_ns)?)|import_node|validate|load(_html(_file)?|xml)?|adopt_node|re(name_node|laxNG_validate_(file|xml))|get_element(s_by_tag_name(_ns)?|_by_id)|xinclude)(?=\\s*\\()'
           , name: 'support.function.document.php'
           }
         , { match: '(?i)\\bdom_domconfiguration_(set_parameter|can_set_parameter|get_parameter)(?=\\s*\\()'
           , name: 'support.function.domconfiguration.php'
           }
         , { match: '(?i)\\bdom_domerrorhandler_handle_error(?=\\s*\\()'
           , name: 'support.function.domerrorhandler.php'
           }
         , { match: '(?i)\\bdom_domimplementation_(has_feature|create_document(_type)?|get_feature)(?=\\s*\\()'
           , name: 'support.function.domimplementation.php'
           }
         , { match: '(?i)\\bdom_domimplementationlist_item(?=\\s*\\()'
           , name: 'support.function.domimplementationlist.php'
           }
         , { match: '(?i)\\bdom_domimplementationsource_get_domimplementation(s)?(?=\\s*\\()'
           , name: 'support.function.domimplementationsource.php'
           }
         , { match: '(?i)\\bdom_domstringlist_item(?=\\s*\\()'
           , name: 'support.function.domstringlist.php'
           }
         , { match: '(?i)\\beaster_da(ys|te)(?=\\s*\\()'
           , name: 'support.function.easter.php'
           }
         , { match: '(?i)\\bdom_element_(has_attribute(_ns)?|set_(id_attribute(_n(s|ode))?|attribute(_n(s|ode(_ns)?))?)|remove_attribute(_n(s|ode))?|get_(elements_by_tag_name(_ns)?|attribute(_n(s|ode(_ns)?))?))(?=\\s*\\()'
           , name: 'support.function.element.php'
           }
         , { match: '(?i)\\b(s(hell_exec|ystem)|p(assthru|roc_nice)|e(scapeshell(cmd|arg)|xec))(?=\\s*\\()'
           , name: 'support.function.exec.php'
           }
         , { match: '(?i)\\bexif_(imagetype|t(humbnail|agname)|read_data)(?=\\s*\\()'
           , name: 'support.function.exif.php'
           }
         , { match: '(?i)\\bfdf_(header|s(et_(s(tatus|ubmit_form_action)|target_frame|o(n_import_javascript|pt)|javascript_action|encoding|v(ersion|alue)|f(ile|lags)|ap)|ave(_string)?)|next_field_name|c(lose|reate)|open(_string)?|e(num_values|rr(no|or))|add_(template|doc_javascript)|remove_item|get_(status|opt|encoding|v(ersion|alue)|f(ile|lags)|a(ttachment|p)))(?=\\s*\\()'
           , name: 'support.function.fdf.php'
           }
         , { match: '(?i)\\b(sys_get_temp_dir|copy|t(empnam|mpfile)|u(nlink|mask)|p(close|open)|f(s(canf|tat|eek)|nmatch|close|t(ell|runcate)|ile(_(put_contents|get_contents))?|open|p(utcsv|assthru)|eof|flush|write|lock|read|get(s(s)?|c(sv)?))|r(e(name|a(dfile|lpath)|wind)|mdir)|get_meta_tags|mkdir)(?=\\s*\\()'
           , name: 'support.function.file.php'
           }
         , { match: '(?i)\\b(stat|c(h(own|grp|mod)|learstatcache)|is_(dir|executable|file|link|writable|readable)|touch|disk_(total_space|free_space)|file(size|ctime|type|inode|owner|_exists|perms|atime|group|mtime)|l(stat|chgrp))(?=\\s*\\()'
           , name: 'support.function.filestat.php'
           }
         , { match: '(?i)\\bfilter_(has_var|input(_array)?|var(_array)?)(?=\\s*\\()'
           , name: 'support.function.filter.php'
           }
         , { match: '(?i)\\b(sprintf|printf|v(sprintf|printf|fprintf)|fprintf)(?=\\s*\\()'
           , name: 'support.function.formatted_print.php'
           }
         , { match: '(?i)\\b(pfsockopen|fsockopen)(?=\\s*\\()'
           , name: 'support.function.fsock.php'
           }
         , { match: '(?i)\\bftok(?=\\s*\\()'
           , name: 'support.function.ftok.php'
           }
         , { match: '(?i)\\b(image(s(y|tring(up)?|et(style|t(hickness|ile)|pixel|brush)|avealpha|x)|c(har(up)?|o(nvolution|py(res(ized|ampled)|merge(gray)?)?|lor(s(total|et|forindex)|closest(hwb|alpha)?|transparent|deallocate|exact(alpha)?|a(t|llocate(alpha)?)|resolve(alpha)?|match))|reate(truecolor|from(string|jpeg|png|wbmp|g(if|d(2(part)?)?)|x(pm|bm)))?)|2wbmp|t(ypes|tf(text|bbox)|ruecolortopalette)|i(struecolor|nterlace)|d(estroy|ashedline)|jpeg|ellipse|p(s(slantfont|copyfont|text|e(ncodefont|xtendfont)|freefont|loadfont|bbox)|ng|olygon|alettecopy)|f(t(text|bbox)|il(ter|l(toborder|ed(polygon|ellipse|arc|rectangle))?)|ont(height|width))|wbmp|a(ntialias|lphablending|rc)|l(ine|oadfont|ayereffect)|r(otate|ectangle)|g(if|d(2)?|ammacorrect|rab(screen|window))|xbm)|jpeg2wbmp|png2wbmp|gd_info)(?=\\s*\\()'
           , name: 'support.function.gd.php'
           }
         , { match: '(?i)\\b(ngettext|textdomain|d(ngettext|c(ngettext|gettext)|gettext)|gettext|bind(textdomain|_textdomain_codeset))(?=\\s*\\()'
           , name: 'support.function.gettext.php'
           }
         , { match: '(?i)\\bgmp_(hamdist|s(can(1|0)|ign|trval|ub|etbit|qrt(rem)?)|c(om|lrbit|mp)|ne(g|xtprime)|in(tval|it|vert)|or|div(_(q(r)?|r)|exact)|jacobi|p(o(pcount|w(m)?)|erfect_square|rob_prime)|fact|legendre|a(nd|dd|bs)|random|gcd(ext)?|xor|m(od|ul))(?=\\s*\\()'
           , name: 'support.function.gmp.php'
           }
         , { match: '(?i)\\bhash(_(hmac(_file)?|init|update(_(stream|file))?|fi(nal|le)|algos))?(?=\\s*\\()'
           , name: 'support.function.hash.php'
           }
         , { match: '(?i)\\bmd5(_file)?(?=\\s*\\()'
           , name: 'support.function.hash_md.php'
           }
         , { match: '(?i)\\bsha1(_file)?(?=\\s*\\()'
           , name: 'support.function.hash_sha.php'
           }
         , { match: '(?i)\\b(set(cookie|rawcookie)|header(s_(sent|list))?)(?=\\s*\\()'
           , name: 'support.function.head.php'
           }
         , { match: '(?i)\\b(html(specialchars(_decode)?|_entity_decode|entities)|get_html_translation_table)(?=\\s*\\()'
           , name: 'support.function.html.php'
           }
         , { match: '(?i)\\bhttp_build_query(?=\\s*\\()'
           , name: 'support.function.http.php'
           }
         , { match: '(?i)\\bibase_blob_(c(ancel|lose|reate)|i(nfo|mport)|open|echo|add|get)(?=\\s*\\()'
           , name: 'support.function.ibase_blobs.php'
           }
         , { match: '(?i)\\bibase_(set_event_handler|free_event_handler|wait_event)(?=\\s*\\()'
           , name: 'support.function.ibase_events.php'
           }
         , { match: '(?i)\\bibase_(n(um_(params|fields|rows)|ame_result)|execute|p(aram_info|repare)|f(ield_info|etch_(object|assoc|row)|ree_(query|result))|query|affected_rows)(?=\\s*\\()'
           , name: 'support.function.ibase_query.php'
           }
         , { match: '(?i)\\bibase_(serv(ice_(detach|attach)|er_info)|d(elete_user|b_info)|add_user|restore|backup|m(odify_user|aintain_db))(?=\\s*\\()'
           , name: 'support.function.ibase_service.php'
           }
         , { match: '(?i)\\b(iconv(_(s(tr(pos|len|rpos)|ubstr|et_encoding)|get_encoding|mime_(decode(_headers)?|encode)))?|ob_iconv_handler)(?=\\s*\\()'
           , name: 'support.function.iconv.php'
           }
         , { match: '(?i)\\b(image_type_to_(extension|mime_type)|getimagesize)(?=\\s*\\()'
           , name: 'support.function.image.php'
           }
         , { match: '(?i)\\b(zend_logo_guid|php(credits|info|_(sapi_name|ini_scanned_files|uname|egg_logo_guid|logo_guid|real_logo_guid)|version))(?=\\s*\\()'
           , name: 'support.function.info.php'
           }
         , { match: '(?i)\\bibase_(c(o(nnect|mmit(_ret)?)|lose)|trans|drop_db|pconnect|err(code|msg)|gen_id|rollback(_ret)?)(?=\\s*\\()'
           , name: 'support.function.interbase.php'
           }
         , { match: '(?i)\\bcurl_(setopt(_array)?|c(opy_handle|lose)|init|e(rr(no|or)|xec)|version|getinfo)(?=\\s*\\()'
           , name: 'support.function.interface.php'
           }
         , { match: '(?i)\\biptc(parse|embed)(?=\\s*\\()'
           , name: 'support.function.iptc.php'
           }
         , { match: '(?i)\\bjson_(decode|encode)(?=\\s*\\()'
           , name: 'support.function.json.php'
           }
         , { match: '(?i)\\blcg_value(?=\\s*\\()'
           , name: 'support.function.lcg.php'
           }
         , { match: '(?i)\\bldap_(s(tart_tls|ort|e(t_(option|rebind_proc)|arch)|asl_bind)|next_(entry|attribute|reference)|co(nnect|unt_entries|mpare)|t61_to_8859|8859_to_t61|d(n2ufn|elete)|unbind|parse_re(sult|ference)|e(rr(no|2str|or)|xplode_dn)|f(irst_(entry|attribute|reference)|ree_result)|add|list|get_(option|dn|entries|values_len|attributes)|re(name|ad)|mod_(del|add|replace)|bind)(?=\\s*\\()'
           , name: 'support.function.ldap.php'
           }
         , { match: '(?i)\\blevenshtein(?=\\s*\\()'
           , name: 'support.function.levenshtein.php'
           }
         , { match: '(?i)\\blibxml_(set_streams_context|clear_errors|use_internal_errors|get_(errors|last_error))(?=\\s*\\()'
           , name: 'support.function.libxml.php'
           }
         , { match: '(?i)\\b(symlink|link(info)?|readlink)(?=\\s*\\()'
           , name: 'support.function.link.php'
           }
         , { match: '(?i)\\b(ezmlm_hash|mail)(?=\\s*\\()'
           , name: 'support.function.mail.php'
           }
         , { match: '(?i)\\bset_time_limit(?=\\s*\\()'
           , name: 'support.function.main.php'
           }
         , { match: '(?i)\\b(h(ypot|exdec)|s(in(h)?|qrt)|number_format|c(os(h)?|eil)|is_(nan|infinite|finite)|tan(h)?|octdec|de(c(hex|oct|bin)|g2rad)|exp(m1)?|p(i|ow)|f(loor|mod)|log(1(p|0))?|a(sin(h)?|cos(h)?|tan(h|2)?|bs)|r(ound|ad2deg)|b(indec|ase_convert))(?=\\s*\\()'
           , name: 'support.function.math.php'
           }
         , { match: '(?i)\\bmb_(s(tr(str|cut|to(upper|lower)|i(str|pos|mwidth)|pos|width|len|r(chr|i(chr|pos)|pos))|ubst(itute_character|r(_count)?)|end_mail)|http_(input|output)|c(heck_encoding|onvert_(case|encoding|variables|kana))|internal_encoding|output_handler|de(code_(numericentity|mimeheader)|tect_(order|encoding))|encode_(numericentity|mimeheader)|p(arse_str|referred_mime_name)|l(ist_(encodings(_alias_names)?|mime_names)|anguage)|get_info)(?=\\s*\\()'
           , name: 'support.function.mbstring.php'
           }
         , { match: '(?i)\\bm(crypt_(c(fb|reate_iv|bc)|ofb|decrypt|e(cb|nc(_(self_test|is_block_(algorithm(_mode)?|mode)|get_(supported_key_sizes|iv_size|key_size|algorithms_name|modes_name|block_size))|rypt))|list_(algorithms|modes)|ge(neric(_(init|deinit))?|t_(cipher_name|iv_size|key_size|block_size))|module_(self_test|close|is_block_(algorithm(_mode)?|mode)|open|get_(supported_key_sizes|algo_(key_size|block_size))))|decrypt_generic)(?=\\s*\\()'
           , name: 'support.function.mcrypt.php'
           }
         , { match: '(?i)\\bmd5(_file)?(?=\\s*\\()'
           , name: 'support.function.md5.php'
           }
         , { match: '(?i)\\bmetaphone(?=\\s*\\()'
           , name: 'support.function.metaphone.php'
           }
         , { match: '(?i)\\bmhash(_(count|keygen_s2k|get_(hash_name|block_size)))?(?=\\s*\\()'
           , name: 'support.function.mhash.php'
           }
         , { match: '(?i)\\b(get(timeofday|rusage)|microtime)(?=\\s*\\()'
           , name: 'support.function.microtime.php'
           }
         , { match: '(?i)\\bmime_content_type(?=\\s*\\()'
           , name: 'support.function.mime_magic.php'
           }
         , { match: '(?i)\\b(swf(prebuiltclip_init|videostream_init)|ming_(set(scale|cubicthreshold)|use(swfversion|constants)|keypress))(?=\\s*\\()'
           , name: 'support.function.ming.php'
           }
         , { match: '(?i)\\bcurl_multi_(select|close|in(it|fo_read)|exec|add_handle|getcontent|remove_handle)(?=\\s*\\()'
           , name: 'support.function.multi.php'
           }
         , { match: '(?i)\\bmysqli_(s(sl_set|t(ore_result|at|mt_(s(tore_result|end_long_data|qlstate)|num_rows|close|in(sert_id|it)|data_seek|p(aram_count|repare)|e(rr(no|or)|xecute)|f(ield_count|etch|ree_result)|a(ttr_(set|get)|ffected_rows)|res(ult_metadata|et)|bind_(param|result)))|e(t_local_infile_(handler|default)|lect_db)|qlstate)|n(um_(fields|rows)|ext_result)|c(ha(nge_user|racter_set_name)|ommit|lose)|thread_(safe|id)|in(sert_id|it|fo)|options|d(ump_debug_info|ebug|ata_seek)|use_result|p(ing|repare)|err(no|or)|kill|f(ield_(seek|count|tell)|etch_(field(s|_direct)?|lengths|row)|ree_result)|warning_count|a(utocommit|ffected_rows)|r(ollback|eal_(connect|escape_string|query))|get_(server_(info|version)|host_info|client_(info|version)|proto_info)|more_results)(?=\\s*\\()'
           , name: 'support.function.mysqli_api.php'
           }
         , { match: '(?i)\\bmysqli_embedded_server_(start|end)(?=\\s*\\()'
           , name: 'support.function.mysqli_embedded.php'
           }
         , { match: '(?i)\\bmysqli_(s(tmt_get_warnings|et_charset)|connect(_err(no|or))?|query|fetch_(object|a(ssoc|rray))|get_(charset|warnings)|multi_query)(?=\\s*\\()'
           , name: 'support.function.mysqli_nonapi.php'
           }
         , { match: '(?i)\\bmysqli_(s(end_query|lave_query)|disable_r(pl_parse|eads_from_master)|enable_r(pl_parse|eads_from_master)|rpl_(p(arse_enabled|robe)|query_type)|master_query)(?=\\s*\\()'
           , name: 'support.function.mysqli_repl.php'
           }
         , { match: '(?i)\\bmysqli_report(?=\\s*\\()'
           , name: 'support.function.mysqli_report.php'
           }
         , { match: '(?i)\\bdom_namednodemap_(set_named_item(_ns)?|item|remove_named_item(_ns)?|get_named_item(_ns)?)(?=\\s*\\()'
           , name: 'support.function.namednodemap.php'
           }
         , { match: '(?i)\\bdom_namelist_get_name(space_uri)?(?=\\s*\\()'
           , name: 'support.function.namelist.php'
           }
         , { match: '(?i)\\bncurses_(s(how_panel|cr(_(set|init|dump|restore)|l)|ta(nd(out|end)|rt_color)|lk_(set|noutrefresh|c(olor|lear)|init|touch|attr(set|o(n|ff))?|re(store|fresh))|avetty)|h(ide_panel|line|a(s_(colors|i(c|l)|key)|lfdelay))|n(o(nl|cbreak|echo|qiflush|raw)|ew(_panel|pad|win)|apms|l)|c(olor_(set|content)|urs_set|l(ear|rto(eol|bot))|an_change_color|break)|t(ypeahead|imeout|op_panel|erm(name|attrs))|i(sendwin|n(s(str|ch|tr|delln|ertln)|ch|it(_(color|pair))?))|d(oupdate|e(f(ine_key|_(shell_mode|prog_mode))|l(ch|_panel|eteln|ay_output|win)))|u(se_(default_colors|e(nv|xtended_names))|nget(ch|mouse)|pdate_panels)|p(noutrefresh|utp|a(nel_(window|above|below)|ir_content)|refresh)|e(cho(char)?|nd|rase(char)?)|v(idattr|line)|k(illchar|ey(ok|pad))|qiflush|f(ilter|l(ushinp|ash))|longname|w(stand(out|end)|hline|noutrefresh|c(olor_set|lear)|erase|vline|a(ttr(set|o(n|ff))|dd(str|ch))|getch|refresh|mo(use_trafo|ve)|border)|a(ssume_default_colors|ttr(set|o(n|ff))|dd(str|nstr|ch(str|nstr)?))|r(e(set(ty|_(shell_mode|prog_mode))|place_panel|fresh)|aw)|get(yx|ch|m(ouse|axyx))|b(o(ttom_panel|rder)|eep|kgd(set)?|audrate)|m(o(use(interval|_trafo|mask)|ve(_panel)?)|eta|v(hline|cur|inch|delch|vline|waddstr|add(str|nstr|ch(str|nstr)?)|getch)))(?=\\s*\\()'
           , name: 'support.function.ncurses_functions.php'
           }
         , { match: '(?i)\\bdom_node_(set_user_data|has_(child_nodes|attributes)|normalize|c(ompare_document_position|lone_node)|i(s_(s(upported|ame_node)|default_namespace|equal_node)|nsert_before)|lookup_(namespace_uri|prefix)|append_child|get_(user_data|feature)|re(place_child|move_child))(?=\\s*\\()'
           , name: 'support.function.node.php'
           }
         , { match: '(?i)\\bdom_nodelist_item(?=\\s*\\()'
           , name: 'support.function.nodelist.php'
           }
         , { match: '(?i)\\bnsapi_(virtual|re(sponse_headers|quest_headers))(?=\\s*\\()'
           , name: 'support.function.nsapi.php'
           }
         , { match: '(?i)\\boci(setbufferinglob|_(s(tatement_type|e(t_prefetch|rver_version))|c(o(nnect|llection_(size|trim|element_(assign|get)|a(ssign|ppend)|max)|mmit)|lose|ancel)|n(um_(fields|rows)|ew_(c(o(nnect|llection)|ursor)|descriptor))|internal_debug|define_by_name|p(connect|a(ssword_change|rse))|e(rror|xecute)|f(ield_(s(cale|ize)|name|is_null|type(_raw)?|precision)|etch(_(object|a(ssoc|ll|rray)|row))?|ree_(statement|collection|descriptor))|lob_(s(ize|eek|ave)|c(opy|lose)|t(ell|runcate)|i(s_equal|mport)|e(of|rase|xport)|flush|append|write(_temporary)?|load|re(wind|ad))|r(ollback|esult)|bind_(array_by_name|by_name))|fetchinto|getbufferinglob)(?=\\s*\\()'
           , name: 'support.function.oci8_interface.php'
           }
         , { match: '(?i)\\bopenssl_(s(ign|eal)|csr_(sign|new|export(_to_file)?|get_(subject|public_key))|open|error_string|p(ublic_(decrypt|encrypt)|k(cs(12_(export(_to_file)?|read)|7_(sign|decrypt|encrypt|verify))|ey_(new|export(_to_file)?|free|get_(details|p(ublic|rivate))))|rivate_(decrypt|encrypt))|verify|x509_(check(_private_key|purpose)|parse|export(_to_file)?|free|read))(?=\\s*\\()'
           , name: 'support.function.openssl.php'
           }
         , { match: '(?i)\\bo(utput_(add_rewrite_var|reset_rewrite_vars)|b_(start|clean|implicit_flush|end_(clean|flush)|flush|list_handlers|get_(status|c(ontents|lean)|flush|le(ngth|vel))))(?=\\s*\\()'
           , name: 'support.function.output.php'
           }
         , { match: '(?i)\\b(unpack|pack)(?=\\s*\\()'
           , name: 'support.function.pack.php'
           }
         , { match: '(?i)\\bget(lastmod|my(inode|uid|pid|gid))(?=\\s*\\()'
           , name: 'support.function.pageinfo.php'
           }
         , { match: '(?i)\\bpcntl_(s(ignal|etpriority)|exec|fork|w(stopsig|termsig|if(s(ignaled|topped)|exited)|exitstatus|ait(pid)?)|alarm|getpriority)(?=\\s*\\()'
           , name: 'support.function.pcntl.php'
           }
         , { match: '(?i)\\bpdo_drivers(?=\\s*\\()'
           , name: 'support.function.pdo.php'
           }
         , { match: '(?i)\\bpdo_drivers(?=\\s*\\()'
           , name: 'support.function.pdo_dbh.php'
           }
         , { match: '(?i)\\bpg_(se(nd_(execute|prepare|query(_params)?)|t_(client_encoding|error_verbosity)|lect)|host|num_(fields|rows)|c(o(n(nect(ion_(status|reset|busy))?|vert)|py_(to|from))|ancel_query|l(ient_encoding|ose))|insert|t(ty|ra(nsaction_status|ce))|options|d(elete|bname)|u(n(trace|escape_bytea)|pdate)|e(scape_(string|bytea)|nd_copy|xecute)|p(connect|ing|ort|ut_line|arameter_status|repare)|version|f(ield_(size|n(um|ame)|is_null|t(ype(_oid)?|able)|prtlen)|etch_(object|a(ssoc|ll(_columns)?|rray)|r(ow|esult))|ree_result)|query(_params)?|affected_rows|l(o_(seek|c(lose|reate)|tell|import|open|unlink|export|write|read(_all)?)|ast_(notice|oid|error))|get_(notify|pid|result)|result_(s(tatus|eek)|error(_field)?)|meta_data)(?=\\s*\\()'
           , name: 'support.function.pgsql.php'
           }
         , { match: '(?i)\\b(virtual|apache_(setenv|note|child_terminate|lookup_uri|get_(version|modules)|re(s(et_timeout|ponse_headers)|quest_(s(ome_auth_required|ub_req_(lookup_(uri|file)|method_uri)|e(t_(etag|last_modified)|rver_port)|atisfies)|headers(_(in|out))?|is_initial_req|discard_request_body|update_mtime|err_headers_out|log_error|auth_(name|type)|r(un|emote_host)|meets_conditions)))|getallheaders)(?=\\s*\\()'
           , name: 'support.function.php_apache.php'
           }
         , { match: '(?i)\\b(str(totime|ftime)|checkdate|time(zone_(name_(from_abbr|get)|identifiers_list|transitions_get|o(pen|ffset_get)|abbreviations_list))?|idate|date(_(sun(set|_info|rise)|create|isodate_set|time(zone_(set|get)|_set)|d(efault_timezone_(set|get)|ate_set)|offset_get|parse|format|modify))?|localtime|g(etdate|m(strftime|date|mktime))|mktime)(?=\\s*\\()'
           , name: 'support.function.php_date.php'
           }
         , { match: '(?i)\\bdom_import_simplexml(?=\\s*\\()'
           , name: 'support.function.php_dom.php'
           }
         , { match: '(?i)\\bfbsql_(hostname|s(t(op_db|art_db)|e(t_(characterset|transaction|password|lob_mode)|lect_db))|n(um_(fields|rows)|ext_result)|c(hange_user|o(nnect|mmit)|lo(se|b_size)|reate_(clob|db|blob))|table_name|insert_id|d(ata(_seek|base(_password)?)|rop_db|b_(status|query))|username|err(no|or)|p(connect|assword)|f(ield_(seek|name|t(ype|able)|flags|len)|etch_(object|field|lengths|a(ssoc|rray)|row)|ree_result)|query|warnings|list_(tables|dbs|fields)|a(utocommit|ffected_rows)|get_autostart_info|r(o(ws_fetched|llback)|e(sult|ad_(clob|blob)))|blob_size)(?=\\s*\\()'
           , name: 'support.function.php_fbsql.php'
           }
         , { match: '(?i)\\bftp_(s(sl_connect|ystype|i(te|ze)|et_option)|n(list|b_(continue|put|f(put|get)|get))|c(h(dir|mod)|dup|onnect|lose)|delete|exec|p(ut|asv|wd)|f(put|get)|alloc|login|get(_option)?|r(ename|aw(list)?|mdir)|m(dtm|kdir))(?=\\s*\\()'
           , name: 'support.function.php_ftp.php'
           }
         , { match: '(?i)\\b(virtual|apache_(setenv|note|get(_(version|modules)|env)|response_headers)|getallheaders)(?=\\s*\\()'
           , name: 'support.function.php_functions.php'
           }
         , { match: '(?i)\\bimap_(header(s|info)|s(can|tatus|ort|ubscribe|e(t(_quota|flag_full|acl)|arch)|avebody)|c(heck|l(ose|earflag_full)|reatemailbox)|num_(recent|msg)|t(hread|imeout)|8bit|delete(mailbox)?|open|u(n(subscribe|delete)|id|tf(7_(decode|encode)|8))|e(rrors|xpunge)|ping|qprint|fetch(header|structure|_overview|body)|l(sub|ist|ast_error)|a(ppend|lerts)|get(subscribed|_quota(root)?|acl|mailboxes)|r(e(namemailbox|open)|fc822_(parse_(headers|adrlist)|write_address))|m(sgno|ime_header_decode|ail(_(co(py|mpose)|move)|boxmsginfo)?)|b(inary|ody(struct)?|ase64))(?=\\s*\\()'
           , name: 'support.function.php_imap.php'
           }
         , { match: '(?i)\\bmb_(split|ereg(i(_replace)?|_(search(_(setpos|init|pos|get(pos|regs)|regs))?|replace|match))?|regex_(set_options|encoding))(?=\\s*\\()'
           , name: 'support.function.php_mbregex.php'
           }
         , { match: '(?i)\\bsmfi_(set(timeout|flags|reply)|chgheader|delrcpt|add(header|rcpt)|replacebody|getsymval)(?=\\s*\\()'
           , name: 'support.function.php_milter.php'
           }
         , { match: '(?i)\\bmsql_(select_db|num_(fields|rows)|c(onnect|lose|reate_db)|d(ata_seek|rop_db|b_query)|error|pconnect|f(ield_(seek|name|t(ype|able)|flags|len)|etch_(object|field|array|row)|ree_result)|query|affected_rows|list_(tables|dbs|fields)|result)(?=\\s*\\()'
           , name: 'support.function.php_msql.php'
           }
         , { match: '(?i)\\bmssql_(select_db|n(um_(fields|rows)|ext_result)|c(onnect|lose)|init|data_seek|execute|pconnect|query|f(ield_(seek|name|type|length)|etch_(object|field|a(ssoc|rray)|row|batch)|ree_(statement|result))|g(uid_string|et_last_message)|r(ows_affected|esult)|bind|min_(error_severity|message_severity))(?=\\s*\\()'
           , name: 'support.function.php_mssql.php'
           }
         , { match: '(?i)\\bmysql_(s(tat|e(t_charset|lect_db))|num_(fields|rows)|c(onnect|l(ient_encoding|ose)|reate_db)|thread_id|in(sert_id|fo)|d(ata_seek|rop_db|b_query)|unbuffered_query|e(scape_string|rr(no|or))|p(connect|ing)|f(ield_(seek|name|t(ype|able)|flags|len)|etch_(object|field|lengths|a(ssoc|rray)|row)|ree_result)|query|affected_rows|list_(tables|dbs|processes|fields)|re(sult|al_escape_string)|get_(server_info|host_info|client_info|proto_info))(?=\\s*\\()'
           , name: 'support.function.php_mysql.php'
           }
         , { match: '(?i)\\b(solid_fetch_prev|odbc_(s(tatistics|pecialcolumns|etoption)|n(um_(fields|rows)|ext_result)|c(o(nnect|lumn(s|privileges)|mmit)|ursor|lose(_all)?)|table(s|privileges)|data_source|e(rror(msg)?|xec(ute)?)|p(connect|r(imarykeys|ocedure(s|columns)|epare))|f(ield_(scale|n(um|ame)|type|len)|oreignkeys|etch_(into|object|array|row)|ree_result)|autocommit|longreadlen|gettypeinfo|r(ollback|esult(_all)?)|binmode))(?=\\s*\\()'
           , name: 'support.function.php_odbc.php'
           }
         , { match: '(?i)\\bpreg_(split|quote|last_error|grep|replace(_callback)?|match(_all)?)(?=\\s*\\()'
           , name: 'support.function.php_pcre.php'
           }
         , { match: '(?i)\\b(spl_(classes|object_hash|autoload(_(call|unregister|extensions|functions|register))?)|class_(implements|parents))(?=\\s*\\()'
           , name: 'support.function.php_spl.php'
           }
         , { match: '(?i)\\bsybase_(se(t_message_handler|lect_db)|num_(fields|rows)|c(onnect|lose)|d(eadlock_retry_count|ata_seek)|unbuffered_query|pconnect|f(ield_seek|etch_(object|field|a(ssoc|rray)|row)|ree_result)|query|affected_rows|result|get_last_message|min_(server_severity|client_severity))(?=\\s*\\()'
           , name: 'support.function.php_sybase_ct.php'
           }
         , { match: '(?i)\\bsybase_(select_db|num_(fields|rows)|c(onnect|lose)|data_seek|pconnect|f(ield_seek|etch_(object|field|array|row)|ree_result)|query|affected_rows|result|get_last_message|min_(error_severity|message_severity))(?=\\s*\\()'
           , name: 'support.function.php_sybase_db.php'
           }
         , { match: '(?i)\\bxmlwriter_(s(tart_(c(omment|data)|d(td(_(e(ntity|lement)|attlist))?|ocument)|pi|element(_ns)?|attribute(_ns)?)|et_indent(_string)?)|text|o(utput_memory|pen_(uri|memory))|end_(c(omment|data)|d(td(_(e(ntity|lement)|attlist))?|ocument)|pi|element|attribute)|f(ull_end_element|lush)|write_(c(omment|data)|dtd(_(e(ntity|lement)|attlist))?|pi|element(_ns)?|attribute(_ns)?|raw))(?=\\s*\\()'
           , name: 'support.function.php_xmlwriter.php'
           }
         , { match: '(?i)\\b(s(tat(Name|Index)|et(Comment(Name|Index)|ArchiveComment))|c(lose|reateEmptyDir)|delete(Name|Index)|open|zip_(close|open|entry_(name|c(ompress(ionmethod|edsize)|lose)|open|filesize|read)|read)|unchange(Name|Index|All)|locateName|addF(ile|romString)|rename(Name|Index)|get(Stream|Comment(Name|Index)|NameIndex|From(Name|Index)|ArchiveComment))(?=\\s*\\()'
           , name: 'support.function.php_zip.php'
           }
         , { match: '(?i)\\bposix_(s(trerror|et(sid|uid|pgid|e(uid|gid)|gid))|ctermid|i(satty|nitgroups)|t(tyname|imes)|uname|kill|access|get(sid|cwd|_last_error|uid|e(uid|gid)|p(id|pid|w(nam|uid)|g(id|rp))|login|rlimit|g(id|r(nam|oups|gid)))|mk(nod|fifo))(?=\\s*\\()'
           , name: 'support.function.posix.php'
           }
         , { match: '(?i)\\bproc_(close|terminate|open|get_status)(?=\\s*\\()'
           , name: 'support.function.proc_open.php'
           }
         , { match: '(?i)\\bpspell_(s(tore_replacement|uggest|ave_wordlist)|c(heck|onfig_(save_repl|create|ignore|d(ict_dir|ata_dir)|personal|r(untogether|epl)|mode)|lear_session)|new(_(config|personal))?|add_to_(session|personal))(?=\\s*\\()'
           , name: 'support.function.pspell.php'
           }
         , { match: '(?i)\\bquoted_printable_decode(?=\\s*\\()'
           , name: 'support.function.quot_print.php'
           }
         , { match: '(?i)\\b(srand|getrandmax|rand|mt_(srand|getrandmax|rand))(?=\\s*\\()'
           , name: 'support.function.rand.php'
           }
         , { match: '(?i)\\breadline(_(c(ompletion_function|allback_(handler_(install|remove)|read_char)|lear_history)|info|on_new_line|write_history|list_history|add_history|re(display|ad_history)))?(?=\\s*\\()'
           , name: 'support.function.readline.php'
           }
         , { match: '(?i)\\brecode_(string|file)(?=\\s*\\()'
           , name: 'support.function.recode.php'
           }
         , { match: '(?i)\\b(s(plit(i)?|ql_regcase)|ereg(i(_replace)?|_replace)?)(?=\\s*\\()'
           , name: 'support.function.reg.php'
           }
         , { match: '(?i)\\bsession_(s(tart|et_(save_handler|cookie_params)|ave_path)|cache_(expire|limiter)|name|i(s_registered|d)|de(stroy|code)|un(set|register)|encode|write_close|reg(ister|enerate_id)|get_cookie_params|module_name)(?=\\s*\\()'
           , name: 'support.function.session.php'
           }
         , { match: '(?i)\\bsha1(_file)?(?=\\s*\\()'
           , name: 'support.function.sha1.php'
           }
         , { match: '(?i)\\bshmop_(size|close|delete|open|write|read)(?=\\s*\\()'
           , name: 'support.function.shmop.php'
           }
         , { match: '(?i)\\bsimplexml_(import_dom|load_(string|file))(?=\\s*\\()'
           , name: 'support.function.simplexml.php'
           }
         , { match: '(?i)\\bconfirm_extname_compiled(?=\\s*\\()'
           , name: 'support.function.skeleton.php'
           }
         , { match: '(?i)\\b(snmp(set|2_(set|walk|real_walk|get(next)?)|3_(set|walk|real_walk|get(next)?)|_(set_(oid_output_format|enum_print|valueretrieval|quick_print)|read_mib|get_(valueretrieval|quick_print))|walk|realwalk|get(next)?)|php_snmpv3)(?=\\s*\\()'
           , name: 'support.function.snmp.php'
           }
         , { match: '(?i)\\bsocket_(s(hutdown|trerror|e(nd(to)?|t_(nonblock|option|block)|lect))|c(onnect|l(ose|ear_error)|reate(_(pair|listen))?)|write|l(isten|ast_error)|accept|get(sockname|_option|peername)|re(cv(from)?|ad)|bind)(?=\\s*\\()'
           , name: 'support.function.sockets.php'
           }
         , { match: '(?i)\\bsoundex(?=\\s*\\()'
           , name: 'support.function.soundex.php'
           }
         , { match: '(?i)\\biterator_(count|to_array|apply)(?=\\s*\\()'
           , name: 'support.function.spl_iterators.php'
           }
         , { match: '(?i)\\bsqlite_(has_prev|s(ingle_query|eek)|n(um_(fields|rows)|ext)|c(hanges|olumn|urrent|lose|reate_(function|aggregate))|open|u(nbuffered_query|df_(decode_binary|encode_binary))|e(scape_string|rror_string|xec)|p(open|rev)|key|valid|query|f(ield_name|etch_(single|column_types|object|a(ll|rray))|actory)|l(ib(encoding|version)|ast_(insert_rowid|error))|array_query|rewind|busy_timeout)(?=\\s*\\()'
           , name: 'support.function.sqlite.php'
           }
         , { match: '(?i)\\bstream_(s(ocket_(s(hutdown|e(ndto|rver))|client|enable_crypto|pair|accept|recvfrom|get_name)|e(t_(timeout|write_buffer|blocking)|lect))|co(ntext_(set_(option|params)|create|get_(default|options))|py_to_stream)|filter_(prepend|append|remove)|get_(contents|transports|line|wrappers|meta_data))(?=\\s*\\()'
           , name: 'support.function.streamsfuncs.php'
           }
         , { match: '(?i)\\b(hebrev(c)?|s(scanf|imilar_text|tr(s(tr|pn)|natc(asecmp|mp)|c(hr|spn|oll)|i(str|p(slashes|cslashes|os|_tags))|t(o(upper|k|lower)|r)|_(s(huffle|plit)|ireplace|pad|word_count|r(ot13|ep(eat|lace)))|p(os|brk)|r(chr|ipos|ev|pos))|ubstr(_(co(unt|mpare)|replace))?|etlocale)|c(h(unk_split|r)|ount_chars)|nl(2br|_langinfo)|implode|trim|ord|dirname|uc(first|words)|join|pa(thinfo|rse_str)|explode|quotemeta|add(slashes|cslashes)|wordwrap|l(trim|ocaleconv)|rtrim|money_format|b(in2hex|asename))(?=\\s*\\()'
           , name: 'support.function.string.php'
           }
         , { match: '(?i)\\bdom_string_extend_find_offset(16|32)(?=\\s*\\()'
           , name: 'support.function.string_extend.php'
           }
         , { match: '(?i)\\b(syslog|closelog|openlog|define_syslog_variables)(?=\\s*\\()'
           , name: 'support.function.syslog.php'
           }
         , { match: '(?i)\\bmsg_(s(tat_queue|e(nd|t_queue))|re(ceive|move_queue)|get_queue)(?=\\s*\\()'
           , name: 'support.function.sysvmsg.php'
           }
         , { match: '(?i)\\bsem_(acquire|re(lease|move)|get)(?=\\s*\\()'
           , name: 'support.function.sysvsem.php'
           }
         , { match: '(?i)\\bshm_(detach|put_var|attach|get_var|remove(_var)?)(?=\\s*\\()'
           , name: 'support.function.sysvshm.php'
           }
         , { match: '(?i)\\bdom_text_(split_text|is_whitespace_in_element_content|replace_whole_text)(?=\\s*\\()'
           , name: 'support.function.text.php'
           }
         , { match: '(?i)\\btidy_(c(onfig_count|lean_repair)|is_x(html|ml)|diagnose|error_count|parse_(string|file)|access_count|warning_count|repair_(string|file)|get(opt|_(h(tml(_ver)?|ead)|status|config|o(utput|pt_doc)|error_buffer|r(oot|elease)|body)))(?=\\s*\\()'
           , name: 'support.function.tidy.php'
           }
         , { match: '(?i)\\btoken_(name|get_all)(?=\\s*\\()'
           , name: 'support.function.tokenizer.php'
           }
         , { match: '(?i)\\b(s(trval|ettype)|i(s_(s(calar|tring)|callable|nu(ll|meric)|object|float|array|long|resource|bool)|ntval)|floatval|gettype)(?=\\s*\\()'
           , name: 'support.function.type.php'
           }
         , { match: '(?i)\\buniqid(?=\\s*\\()'
           , name: 'support.function.uniqid.php'
           }
         , { match: '(?i)\\b(url(decode|encode)|parse_url|get_headers|rawurl(decode|encode))(?=\\s*\\()'
           , name: 'support.function.url.php'
           }
         , { match: '(?i)\\bstream_(filter_register|get_filters|bucket_(new|prepend|append|make_writeable))(?=\\s*\\()'
           , name: 'support.function.user_filters.php'
           }
         , { match: '(?i)\\bdom_userdatahandler_handle(?=\\s*\\()'
           , name: 'support.function.userdatahandler.php'
           }
         , { match: '(?i)\\bstream_wrapper_(unregister|re(store|gister))(?=\\s*\\()'
           , name: 'support.function.userspace.php'
           }
         , { match: '(?i)\\bconvert_uu(decode|encode)(?=\\s*\\()'
           , name: 'support.function.uuencode.php'
           }
         , { match: '(?i)\\b(serialize|debug_zval_dump|unserialize|var_(dump|export)|memory_get_(usage|peak_usage))(?=\\s*\\()'
           , name: 'support.function.var.php'
           }
         , { match: '(?i)\\bversion_compare(?=\\s*\\()'
           , name: 'support.function.versioning.php'
           }
         , { match: '(?i)\\bwddx_(serialize_va(lue|rs)|deserialize|packet_(start|end)|add_vars)(?=\\s*\\()'
           , name: 'support.function.wddx.php'
           }
         , { match: '(?i)\\b(utf8_(decode|encode)|xml_(set_(start_namespace_decl_handler|notation_decl_handler|character_data_handler|default_handler|object|unparsed_entity_decl_handler|processing_instruction_handler|e(nd_namespace_decl_handler|lement_handler|xternal_entity_ref_handler))|error_string|parse(_into_struct|r_(set_option|create(_ns)?|free|get_option))?|get_(current_(column_number|line_number|byte_index)|error_code)))(?=\\s*\\()'
           , name: 'support.function.xml.php'
           }
         , { match: '(?i)\\bxmlrpc_(se(t_type|rver_(c(all_method|reate)|destroy|add_introspection_data|register_(introspection_callback|method)))|is_fault|decode(_request)?|parse_method_descriptions|encode(_request)?|get_type)(?=\\s*\\()'
           , name: 'support.function.xmlrpc-epi-php.php'
           }
         , { match: '(?i)\\bdom_xpath_(evaluate|query|register_ns)(?=\\s*\\()'
           , name: 'support.function.xpath.php'
           }
         , { match: '(?i)\\bxsl_xsltprocessor_(has_exslt_support|set_parameter|transform_to_(doc|uri|xml)|import_stylesheet|re(gister_php_functions|move_parameter)|get_parameter)(?=\\s*\\()'
           , name: 'support.function.xsltprocessor.php'
           }
         , { match: '(?i)\\b(ob_gzhandler|zlib_get_coding_type|readgzfile|gz(compress|inflate|deflate|open|uncompress|encode|file))(?=\\s*\\()'
           , name: 'support.function.zlib.php'
           }
         , { match: '(?i)\\bis_int(eger)?(?=\\s*\\()'
           , name: 'support.function.alias.php'
           }
         , { match: '(?i)\\b(Re(cursive(RegexIterator|CachingIterator|IteratorIterator|DirectoryIterator|FilterIterator|ArrayIterator)|flection(Method|Class|Object|Extension|P(arameter|roperty)|Function)?|gexIterator)|s(tdClass|wf(s(hape|ound|prite)|text(field)?|displayitem|f(ill|ont(cha(r)?)?)|action|gradient|mo(vie|rph)|b(itmap|utton)))|XMLReader|tidyNode|S(impleXML(Iterator|Element)|oap(Server|Header|Client|Param|Var|Fault)|pl(TempFileObject|ObjectStorage|File(Info|Object)))|NoRewindIterator|C(OMPersistHelper|achingIterator)|I(nfiniteIterator|teratorIterator)|D(irectoryIterator|OM(XPath|Node|C(omment|dataSection)|Text|Document(Fragment)?|ProcessingInstruction|E(ntityReference|lement)|Attr))|P(DO(Statement)?|arentIterator)|E(rrorException|mptyIterator|xception)|FilterIterator|LimitIterator|A(p(pendIterator|acheRequest)|rray(Iterator|Object)))(?=\\s*\\()'
           , name: 'support.class.builtin.php'
           }
         , { match: '(?i)\\b((print|echo)\\b|(isset|unset|e(val|mpty)|list)(?=\\s*\\())'
           , name: 'support.function.construct.php'
           }
         ]
      }
   , var_basic: 
      { captures: { '1': { name: 'punctuation.definition.variable.php' } }
      , match: '(?x)(\\$+)[a-zA-Z_\\x{7f}-\\x{ff}][a-zA-Z0-9_\\x{7f}-\\x{ff}]*?\\b'
      , name: 'variable.other.php'
      }
   , var_global: 
      { captures: { '1': { name: 'punctuation.definition.variable.php' } }
      , match: '(\\$)(_(COOKIE|FILES|GET|POST|REQUEST))\\b'
      , name: 'variable.other.global.php'
      }
   , var_global_safer: 
      { captures: { '2': { name: 'punctuation.definition.variable.php' } }
      , match: '((\\$)(GLOBALS|_(ENV|SERVER|SESSION)))|\\b(global)\\b'
      , name: 'variable.other.global.safer.php'
      }
   , variables: 
      { patterns: 
         [ { include: '#var_global' }
         , { include: '#var_global_safer' }
         , { include: '#var_basic' }
         ]
      }
   }
, scopeName: 'source.php'
, uuid: '22986475-8CA5-11D9-AEDD-000D93C8BE28'
}

});