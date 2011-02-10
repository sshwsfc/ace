define(function(require, exports, module) {
exports.hash = 

{ comment: '\n\tTODO: unresolved issues\n\n\ttext:\n\t"p << end\n\tprint me!\n\tend"\n\tsymptoms:\n\tnot recognized as a heredoc\n\tsolution:\n\tthere is no way to distinguish perfectly between the << operator and the start\n\tof a heredoc. Currently, we require assignment to recognize a heredoc. More\n\trefinement is possible.\n\t\u2022 Heredocs with indented terminators (<<-) are always distinguishable, however.\n\t\u2022 Nested heredocs are not really supportable at present\n\n\ttext:\n\tprint <<-\'THERE\' \n\tThis is single quoted. \n\tThe above used #{Time.now} \n\tTHERE \n\tsymtoms:\n\tFrom Programming Ruby p306; should be a non-interpolated heredoc.\n\t\n\ttext:\n\t"a\\332a"\n\tsymptoms:\n\t\'\\332\' is not recognized as slash3.. which should be octal 332.\n\tsolution:\n\tplain regexp.. should be easy.\n\n    text:\n    val?(a):p(b)\n    val?\'a\':\'b\'\n    symptoms:\n    \':p\' is recognized as a symbol.. its 2 things \':\' and \'p\'.\n    :\'b\' has same problem.\n    solution:\n    ternary operator rule, precedence stuff, symbol rule.\n    but also consider \'a.b?(:c)\' ??\n'
, fileTypes: 
   [ 'rb'
   , 'rbx'
   , 'rjs'
   , 'Rakefile'
   , 'rake'
   , 'cgi'
   , 'fcgi'
   , 'gemspec'
   , 'irbrc'
   , 'capfile'
   ]
, firstLineMatch: '^#!/.*\\bruby\\b'
, foldingStartMarker: '(?x)^\n\t    (\\s*+\n\t        (module|class|def(?!.*\\bend\\s*$)\n\t        |unless|if\n\t        |case\n\t        |begin\n\t        |for|while|until\n\t         |^=begin\n\t        |(  "(\\\\.|[^"])*+"          # eat a double quoted string\n\t         | \'(\\\\.|[^\'])*+\'        # eat a single quoted string\n\t         |   [^#"\']                # eat all but comments and strings\n\t         )*\n\t         (                        \\s   (do|begin|case)\n\t         | (?<!\\$)[-+=&|*/~%^<>~] \\s*+ (if|unless)\n\t         )\n\t        )\\b\n\t        (?! [^;]*+ ; .*? \\bend\\b )\n\t    |(  "(\\\\.|[^"])*+"              # eat a double quoted string\n\t     | \'(\\\\.|[^\'])*+\'            # eat a single quoted string\n\t     |   [^#"\']                    # eat all but comments and strings\n\t     )*\n\t     ( \\{ (?!  [^}]*+ \\} )\n\t     | \\[ (?! [^\\]]*+ \\] )\n\t     )\n\t    ).*$\n\t|   [#] .*? \\(fold\\) \\s*+ $         # Sune\u2019s special marker\n\t'
, foldingStopMarker: '(?x)\n\t\t(   (^|;) \\s*+ end   \\s*+ ([#].*)? $\n\t\t|   (^|;) \\s*+ end \\. .* $\n\t\t|   ^     \\s*+ [}\\]] ,? \\s*+ ([#].*)? $\n\t\t|   [#] .*? \\(end\\) \\s*+ $    # Sune\u2019s special marker\n\t\t|   ^=end\n\t\t)'
, keyEquivalent: '^~R'
, name: 'Ruby'
, patterns: 
   [ { captures: 
        { '1': { name: 'keyword.control.class.ruby' }
        , '2': { name: 'entity.name.type.class.ruby' }
        , '4': { name: 'entity.other.inherited-class.ruby' }
        , '5': { name: 'punctuation.separator.inheritance.ruby' }
        , '6': { name: 'variable.other.object.ruby' }
        , '7': { name: 'punctuation.definition.variable.ruby' }
        }
     , match: '^\\s*(class)\\s+(([.a-zA-Z0-9_:]+(\\s*(<)\\s*[.a-zA-Z0-9_:]+)?)|((<<)\\s*[.a-zA-Z0-9_:]+))'
     , name: 'meta.class.ruby'
     }
   , { captures: 
        { '1': { name: 'keyword.control.module.ruby' }
        , '2': { name: 'entity.name.type.module.ruby' }
        , '3': { name: 'entity.other.inherited-class.module.first.ruby' }
        , '4': { name: 'punctuation.separator.inheritance.ruby' }
        , '5': { name: 'entity.other.inherited-class.module.second.ruby' }
        , '6': { name: 'punctuation.separator.inheritance.ruby' }
        , '7': { name: 'entity.other.inherited-class.module.third.ruby' }
        , '8': { name: 'punctuation.separator.inheritance.ruby' }
        }
     , match: '^\\s*(module)\\s+(([A-Z]\\w*(::))?([A-Z]\\w*(::))?([A-Z]\\w*(::))*[A-Z]\\w*)'
     , name: 'meta.module.ruby'
     }
   , { comment: 'else if is a common mistake carried over from other languages. it works if you put in a second end, but it\u2019s never what you want.'
     , match: '(?<!\\.)\\belse(\\s)+if\\b'
     , name: 'invalid.deprecated.ruby'
     }
   , { comment: 'everything being a reserved word, not a value and needing a \'end\' is a..'
     , match: '(?<!\\.)\\b(BEGIN|begin|case|class|else|elsif|END|end|ensure|for|if|in|module|rescue|then|unless|until|when|while)\\b(?![?!])'
     , name: 'keyword.control.ruby'
     }
   , { comment: 'contextual smart pair support for block parameters'
     , match: '(?<!\\.)\\bdo\\b\\s*'
     , name: 'keyword.control.start-block.ruby'
     }
   , { comment: 'contextual smart pair support'
     , match: '(?<=\\{)(\\s+)'
     , name: 'meta.syntax.ruby.start-block'
     }
   , { comment: ' as above, just doesn\'t need a \'end\' and does a logic operation'
     , match: '(?<!\\.)\\b(and|not|or)\\b'
     , name: 'keyword.operator.logical.ruby'
     }
   , { comment: ' just as above but being not a logical operation'
     , match: '(?<!\\.)\\b(alias|alias_method|break|next|redo|retry|return|super|undef|yield)\\b(?![?!])|\\bdefined\\?|\\bblock_given\\?'
     , name: 'keyword.control.pseudo-method.ruby'
     }
   , { match: '\\b(nil|true|false)\\b(?![?!])'
     , name: 'constant.language.ruby'
     }
   , { match: '\\b(__(FILE|LINE)__|self)\\b(?![?!])'
     , name: 'variable.language.ruby'
     }
   , { comment: ' everything being a method but having a special function is a..'
     , match: '\\b(initialize|new|loop|include|extend|raise|attr_reader|attr_writer|attr_accessor|attr|catch|throw|private|module_function|public|protected)\\b(?![?!])'
     , name: 'keyword.other.special-method.ruby'
     }
   , { begin: '\\b(require|gem)\\b'
     , captures: { '1': { name: 'keyword.other.special-method.ruby' } }
     , end: '$|(?=#)'
     , name: 'meta.require.ruby'
     , patterns: [ { include: '$self' } ]
     }
   , { captures: { '1': { name: 'punctuation.definition.variable.ruby' } }
     , match: '(@)[a-zA-Z_]\\w*'
     , name: 'variable.other.readwrite.instance.ruby'
     }
   , { captures: { '1': { name: 'punctuation.definition.variable.ruby' } }
     , match: '(@@)[a-zA-Z_]\\w*'
     , name: 'variable.other.readwrite.class.ruby'
     }
   , { captures: { '1': { name: 'punctuation.definition.variable.ruby' } }
     , match: '(\\$)[a-zA-Z_]\\w*'
     , name: 'variable.other.readwrite.global.ruby'
     }
   , { captures: { '1': { name: 'punctuation.definition.variable.ruby' } }
     , match: '(\\$)(!|@|&|`|\'|\\+|\\d+|~|=|/|\\\\|,|;|\\.|<|>|_|\\*|\\$|\\?|:|"|-[0adFiIlpv])'
     , name: 'variable.other.readwrite.global.pre-defined.ruby'
     }
   , { begin: '\\b(ENV)\\['
     , beginCaptures: { '1': { name: 'variable.other.constant.ruby' } }
     , end: '\\]'
     , name: 'meta.environment-variable.ruby'
     , patterns: [ { include: '$self' } ]
     }
   , { match: '\\b[A-Z]\\w*(?=((\\.|::)[A-Za-z]|\\[))'
     , name: 'support.class.ruby'
     }
   , { match: '\\b[A-Z]\\w*\\b'
     , name: 'variable.other.constant.ruby'
     }
   , { begin: '(?x)(?=def\\b)(?<=^|\\s)(def)\\s+((?>[a-zA-Z_]\\w*(?>\\.|::))?(?>[a-zA-Z_]\\w*(?>[?!]|=(?!>))?|===?|>[>=]?|<=>|<[<=]?|[%&`/\\|]|\\*\\*?|=?~|[-+]@?|\\[\\]=?))\\s*(\\()'
     , beginCaptures: 
        { '1': { name: 'keyword.control.def.ruby' }
        , '2': { name: 'entity.name.function.ruby' }
        , '3': { name: 'punctuation.definition.parameters.ruby' }
        }
     , comment: 'the method pattern comes from the symbol pattern, see there for a explaination'
     , contentName: 'variable.parameter.function.ruby'
     , end: '\\)'
     , endCaptures: { '0': { name: 'punctuation.definition.parameters.ruby' } }
     , name: 'meta.function.method.with-arguments.ruby'
     , patterns: [ { include: '$self' } ]
     }
   , { begin: '(?x)(?=def\\b)(?<=^|\\s)(def)\\s+((?>[a-zA-Z_]\\w*(?>\\.|::))?(?>[a-zA-Z_]\\w*(?>[?!]|=(?!>))?|===?|>[>=]?|<=>|<[<=]?|[%&`/\\|]|\\*\\*?|=?~|[-+]@?|\\[\\]=?))[\\t](?=[\\t]*[^\\s'
     , beginCaptures: 
        { '1': { name: 'keyword.control.def.ruby' }
        , '2': { name: 'entity.name.function.ruby' }
        }
     , comment: 'same as the previous rule, but without parentheses around the arguments'
     , contentName: 'variable.parameter.function.ruby'
     , end: '$'
     , name: 'meta.function.method.with-arguments.ruby'
     , patterns: [ { include: '$self' } ]
     }
   , { captures: 
        { '1': { name: 'keyword.control.def.ruby' }
        , '3': { name: 'entity.name.function.ruby' }
        }
     , comment: ' the optional name is just to catch the def also without a method-name'
     , match: '(?x)(?=def\\b)(?<=^|\\s)(def)\\b(\\s+((?>[a-zA-Z_]\\w*(?>\\.|::))?(?>[a-zA-Z_]\\w*(?>[?!]|=(?!>))?|===?|>[>=]?|<=>|<[<=]?|[%&`/\\|]|\\*\\*?|=?~|[-+]@?|\\[\\]=?)))?'
     , name: 'meta.function.method.without-arguments.ruby'
     }
   , { match: '\\b(0[xX]\\h(?>_?\\h)*|\\d(?>_?\\d)*(\\.(?![^[:space:][:digit:]])(?>_?\\d)*)?([eE][-+]?\\d(?>_?\\d)*)?|0[bB][01]+)\\b'
     , name: 'constant.numeric.ruby'
     }
   , { begin: ':\''
     , captures: { '0': { name: 'punctuation.definition.constant.ruby' } }
     , end: '\''
     , name: 'constant.other.symbol.single-quoted.ruby'
     , patterns: 
        [ { match: '\\\\[\'\\\\]'
          , name: 'constant.character.escape.ruby'
          }
        ]
     }
   , { begin: ':"'
     , captures: { '0': { name: 'punctuation.definition.constant.ruby' } }
     , end: '"'
     , name: 'constant.other.symbol.double-quoted.ruby'
     , patterns: 
        [ { include: '#interpolated_ruby' }
        , { include: '#escaped_char' }
        ]
     }
   , { comment: 'Needs higher precidence than regular expressions.'
     , match: '/='
     , name: 'keyword.operator.assignment.augmented.ruby'
     }
   , { begin: '\''
     , beginCaptures: { '0': { name: 'punctuation.definition.string.begin.ruby' } }
     , comment: 'single quoted string (does not allow interpolation)'
     , end: '\''
     , endCaptures: { '0': { name: 'punctuation.definition.string.end.ruby' } }
     , name: 'string.quoted.single.ruby'
     , patterns: 
        [ { match: '\\\\\'|\\\\\\\\'
          , name: 'constant.character.escape.ruby'
          }
        ]
     }
   , { begin: '"'
     , beginCaptures: { '0': { name: 'punctuation.definition.string.begin.ruby' } }
     , comment: 'double quoted string (allows for interpolation)'
     , end: '"'
     , endCaptures: { '0': { name: 'punctuation.definition.string.end.ruby' } }
     , name: 'string.quoted.double.ruby'
     , patterns: 
        [ { include: '#interpolated_ruby' }
        , { include: '#escaped_char' }
        ]
     }
   , { begin: '`'
     , beginCaptures: { '0': { name: 'punctuation.definition.string.begin.ruby' } }
     , comment: 'execute string (allows for interpolation)'
     , end: '`'
     , endCaptures: { '0': { name: 'punctuation.definition.string.end.ruby' } }
     , name: 'string.interpolated.ruby'
     , patterns: 
        [ { include: '#interpolated_ruby' }
        , { include: '#escaped_char' }
        ]
     }
   , { begin: '%x\\{'
     , beginCaptures: { '0': { name: 'punctuation.definition.string.begin.ruby' } }
     , comment: 'execute string (allow for interpolation)'
     , end: '\\}'
     , endCaptures: { '0': { name: 'punctuation.definition.string.end.ruby' } }
     , name: 'string.interpolated.ruby'
     , patterns: 
        [ { include: '#interpolated_ruby' }
        , { include: '#escaped_char' }
        , { include: '#nest_curly_i' }
        ]
     }
   , { begin: '%x\\['
     , beginCaptures: { '0': { name: 'punctuation.definition.string.begin.ruby' } }
     , comment: 'execute string (allow for interpolation)'
     , end: '\\]'
     , endCaptures: { '0': { name: 'punctuation.definition.string.end.ruby' } }
     , name: 'string.interpolated.ruby'
     , patterns: 
        [ { include: '#interpolated_ruby' }
        , { include: '#escaped_char' }
        , { include: '#nest_brackets_i' }
        ]
     }
   , { begin: '%x\\<'
     , beginCaptures: { '0': { name: 'punctuation.definition.string.begin.ruby' } }
     , comment: 'execute string (allow for interpolation)'
     , end: '\\>'
     , endCaptures: { '0': { name: 'punctuation.definition.string.end.ruby' } }
     , name: 'string.interpolated.ruby'
     , patterns: 
        [ { include: '#interpolated_ruby' }
        , { include: '#escaped_char' }
        , { include: '#nest_ltgt_i' }
        ]
     }
   , { begin: '%x\\('
     , beginCaptures: { '0': { name: 'punctuation.definition.string.begin.ruby' } }
     , comment: 'execute string (allow for interpolation)'
     , end: '\\)'
     , endCaptures: { '0': { name: 'punctuation.definition.string.end.ruby' } }
     , name: 'string.interpolated.ruby'
     , patterns: 
        [ { include: '#interpolated_ruby' }
        , { include: '#escaped_char' }
        , { include: '#nest_parens_i' }
        ]
     }
   , { begin: '%x([^\\w])'
     , beginCaptures: { '0': { name: 'punctuation.definition.string.begin.ruby' } }
     , comment: 'execute string (allow for interpolation)'
     , end: '\\1'
     , endCaptures: { '0': { name: 'punctuation.definition.string.end.ruby' } }
     , name: 'string.interpolated.ruby'
     , patterns: 
        [ { include: '#interpolated_ruby' }
        , { include: '#escaped_char' }
        ]
     }
   , { begin: '(?x)(?:^|(?<=[=>~(?:\\[,|&;]|[\\s;]if\\s|[\\s;]elsif\\s|[\\s;]while\\s|[\\s;]unless\\s|[\\s;]when\\s|[\\s;]assert_match\\s|[\\s;]or\\s|[\\s;]and\\s|[\\s;]not\\s|[\\s.]index\\s|[\\s.]scan\\s|[\\s.]sub\\s|[\\s.]sub!\\s|[\\s.]gsub\\s|[\\s.]gsub!\\s|[\\s.]match\\s)|(?<=^when\\s|^if\\s|^elsif\\s|^while\\s|^unless\\s))\\s*((/))(?![*+{}?])'
     , captures: 
        { '1': { name: 'string.regexp.classic.ruby' }
        , '2': { name: 'punctuation.definition.string.ruby' }
        }
     , comment: 'regular expressions (normal)\n\t\t\twe only start a regexp if the character before it (excluding whitespace)\n\t\t\tis what we think is before a regexp\n\t\t\t'
     , contentName: 'string.regexp.classic.ruby'
     , end: '((/[eimnosux]*))'
     , patterns: [ { include: '#regex_sub' } ]
     }
   , { begin: '%r\\{'
     , beginCaptures: { '0': { name: 'punctuation.definition.string.begin.ruby' } }
     , comment: 'regular expressions (literal)'
     , end: '\\}[eimnosux]*'
     , endCaptures: { '0': { name: 'punctuation.definition.string.end.ruby' } }
     , name: 'string.regexp.mod-r.ruby'
     , patterns: 
        [ { include: '#regex_sub' }
        , { include: '#nest_curly_r' }
        ]
     }
   , { begin: '%r\\['
     , beginCaptures: { '0': { name: 'punctuation.definition.string.begin.ruby' } }
     , comment: 'regular expressions (literal)'
     , end: '\\][eimnosux]*'
     , endCaptures: { '0': { name: 'punctuation.definition.string.end.ruby' } }
     , name: 'string.regexp.mod-r.ruby'
     , patterns: 
        [ { include: '#regex_sub' }
        , { include: '#nest_brackets_r' }
        ]
     }
   , { begin: '%r\\('
     , beginCaptures: { '0': { name: 'punctuation.definition.string.begin.ruby' } }
     , comment: 'regular expressions (literal)'
     , end: '\\)[eimnosux]*'
     , endCaptures: { '0': { name: 'punctuation.definition.string.end.ruby' } }
     , name: 'string.regexp.mod-r.ruby'
     , patterns: 
        [ { include: '#regex_sub' }
        , { include: '#nest_parens_r' }
        ]
     }
   , { begin: '%r\\<'
     , beginCaptures: { '0': { name: 'punctuation.definition.string.begin.ruby' } }
     , comment: 'regular expressions (literal)'
     , end: '\\>[eimnosux]*'
     , endCaptures: { '0': { name: 'punctuation.definition.string.end.ruby' } }
     , name: 'string.regexp.mod-r.ruby'
     , patterns: 
        [ { include: '#regex_sub' }
        , { include: '#nest_ltgt_r' }
        ]
     }
   , { begin: '%r([^\\w])'
     , beginCaptures: { '0': { name: 'punctuation.definition.string.begin.ruby' } }
     , comment: 'regular expressions (literal)'
     , end: '\\1[eimnosux]*'
     , endCaptures: { '0': { name: 'punctuation.definition.string.end.ruby' } }
     , name: 'string.regexp.mod-r.ruby'
     , patterns: [ { include: '#regex_sub' } ]
     }
   , { begin: '%[QWSR]?\\('
     , beginCaptures: { '0': { name: 'punctuation.definition.string.begin.ruby' } }
     , comment: 'literal capable of interpolation ()'
     , end: '\\)'
     , endCaptures: { '0': { name: 'punctuation.definition.string.end.ruby' } }
     , name: 'string.quoted.other.literal.upper.ruby'
     , patterns: 
        [ { include: '#interpolated_ruby' }
        , { include: '#escaped_char' }
        , { include: '#nest_parens_i' }
        ]
     }
   , { begin: '%[QWSR]?\\['
     , beginCaptures: { '0': { name: 'punctuation.definition.string.begin.ruby' } }
     , comment: 'literal capable of interpolation []'
     , end: '\\]'
     , endCaptures: { '0': { name: 'punctuation.definition.string.end.ruby' } }
     , name: 'string.quoted.other.literal.upper.ruby'
     , patterns: 
        [ { include: '#interpolated_ruby' }
        , { include: '#escaped_char' }
        , { include: '#nest_brackets_i' }
        ]
     }
   , { begin: '%[QWSR]?\\<'
     , beginCaptures: { '0': { name: 'punctuation.definition.string.begin.ruby' } }
     , comment: 'literal capable of interpolation <>'
     , end: '\\>'
     , endCaptures: { '0': { name: 'punctuation.definition.string.end.ruby' } }
     , name: 'string.quoted.other.literal.upper.ruby'
     , patterns: 
        [ { include: '#interpolated_ruby' }
        , { include: '#escaped_char' }
        , { include: '#nest_ltgt_i' }
        ]
     }
   , { begin: '%[QWSR]?\\{'
     , beginCaptures: { '0': { name: 'punctuation.definition.string.begin.ruby' } }
     , comment: 'literal capable of interpolation -- {}'
     , end: '\\}'
     , endCaptures: { '0': { name: 'punctuation.definition.string.end.ruby' } }
     , name: 'string.quoted.double.ruby.mod'
     , patterns: 
        [ { include: '#interpolated_ruby' }
        , { include: '#escaped_char' }
        , { include: '#nest_curly_i' }
        ]
     }
   , { begin: '%[QWSR]([^\\w])'
     , beginCaptures: { '0': { name: 'punctuation.definition.string.begin.ruby' } }
     , comment: 'literal capable of interpolation -- wildcard'
     , end: '\\1'
     , endCaptures: { '0': { name: 'punctuation.definition.string.end.ruby' } }
     , name: 'string.quoted.other.literal.upper.ruby'
     , patterns: 
        [ { include: '#interpolated_ruby' }
        , { include: '#escaped_char' }
        ]
     }
   , { begin: '%([^\\w\\s=])'
     , beginCaptures: { '0': { name: 'punctuation.definition.string.begin.ruby' } }
     , comment: 'literal capable of interpolation -- wildcard'
     , end: '\\1'
     , endCaptures: { '0': { name: 'punctuation.definition.string.end.ruby' } }
     , name: 'string.quoted.other.literal.other.ruby'
     , patterns: 
        [ { include: '#interpolated_ruby' }
        , { include: '#escaped_char' }
        ]
     }
   , { begin: '%[qws]\\('
     , beginCaptures: { '0': { name: 'punctuation.definition.string.begin.ruby' } }
     , comment: 'literal incapable of interpolation -- ()'
     , end: '\\)'
     , endCaptures: { '0': { name: 'punctuation.definition.string.end.ruby' } }
     , name: 'string.quoted.other.literal.lower.ruby'
     , patterns: 
        [ { match: '\\\\\\)|\\\\\\\\'
          , name: 'constant.character.escape.ruby'
          }
        , { include: '#nest_parens' }
        ]
     }
   , { begin: '%[qws]\\<'
     , beginCaptures: { '0': { name: 'punctuation.definition.string.begin.ruby' } }
     , comment: 'literal incapable of interpolation -- <>'
     , end: '\\>'
     , endCaptures: { '0': { name: 'punctuation.definition.string.end.ruby' } }
     , name: 'string.quoted.other.literal.lower.ruby'
     , patterns: 
        [ { match: '\\\\\\>|\\\\\\\\'
          , name: 'constant.character.escape.ruby'
          }
        , { include: '#nest_ltgt' }
        ]
     }
   , { begin: '%[qws]\\['
     , beginCaptures: { '0': { name: 'punctuation.definition.string.begin.ruby' } }
     , comment: 'literal incapable of interpolation -- []'
     , end: '\\]'
     , endCaptures: { '0': { name: 'punctuation.definition.string.end.ruby' } }
     , name: 'string.quoted.other.literal.lower.ruby'
     , patterns: 
        [ { match: '\\\\\\]|\\\\\\\\'
          , name: 'constant.character.escape.ruby'
          }
        , { include: '#nest_brackets' }
        ]
     }
   , { begin: '%[qws]\\{'
     , beginCaptures: { '0': { name: 'punctuation.definition.string.begin.ruby' } }
     , comment: 'literal incapable of interpolation -- {}'
     , end: '\\}'
     , endCaptures: { '0': { name: 'punctuation.definition.string.end.ruby' } }
     , name: 'string.quoted.other.literal.lower.ruby'
     , patterns: 
        [ { match: '\\\\\\}|\\\\\\\\'
          , name: 'constant.character.escape.ruby'
          }
        , { include: '#nest_curly' }
        ]
     }
   , { begin: '%[qws]([^\\w])'
     , beginCaptures: { '0': { name: 'punctuation.definition.string.begin.ruby' } }
     , comment: 'literal incapable of interpolation -- wildcard'
     , end: '\\1'
     , endCaptures: { '0': { name: 'punctuation.definition.string.end.ruby' } }
     , name: 'string.quoted.other.literal.lower.ruby'
     , patterns: 
        [ { comment: 'Cant be named because its not neccesarily an escape.'
          , match: '\\\\.'
          }
        ]
     }
   , { captures: { '1': { name: 'punctuation.definition.constant.ruby' } }
     , comment: 'symbols'
     , match: '(?<!:)(:)(?>[a-zA-Z_]\\w*(?>[?!]|=(?![>=]))?|===?|>[>=]?|<[<=]?|<=>|[%&`/\\|]|\\*\\*?|=?~|[-+]@?|\\[\\]=?|@@?[a-zA-Z_]\\w*)'
     , name: 'constant.other.symbol.ruby'
     }
   , { captures: { '1': { name: 'punctuation.definition.constant.ruby' } }
     , comment: 'symbols'
     , match: '(?>[a-zA-Z_]\\w*(?>[?!]|=(?![>=]))?|===?|>[>=]?|<[<=]?|<=>|[%`/\\|]|\\*\\*?|=?~|[-+]@?|\\[\\]=?|@@?[a-zA-Z_]\\w*)(:)(?!:)'
     , name: 'constant.other.symbol.ruby.19syntax'
     }
   , { begin: '^=begin'
     , captures: { '0': { name: 'punctuation.definition.comment.ruby' } }
     , comment: 'multiline comments'
     , end: '^=end'
     , name: 'comment.block.documentation.ruby'
     }
   , { captures: { '1': { name: 'punctuation.definition.comment.ruby' } }
     , match: '(?:^[\\t]+)?(#).*$\\n?'
     , name: 'comment.line.number-sign.ruby'
     }
   , { comment: '\n\t\t\tmatches questionmark-letters.\n\n\t\t\texamples (1st alternation = hex):\n\t\t\t?\\x1     ?\\x61\n\n\t\t\texamples (2nd alternation = octal):\n\t\t\t?\\0      ?\\07     ?\\017\n\n\t\t\texamples (3rd alternation = escaped):\n\t\t\t?\\n      ?\\b\n\n\t\t\texamples (4th alternation = meta-ctrl):\n\t\t\t?\\C-a    ?\\M-a    ?\\C-\\M-\\C-\\M-a\n\n\t\t\texamples (4th alternation = normal):\n\t\t\t?a       ?A       ?0 \n\t\t\t?*       ?"       ?( \n\t\t\t?.       ?#\n\t\t\t\n\t\t\t\n\t\t\tthe negative lookbehind prevents against matching\n\t\t\tp(42.tainted?)\n\t\t\t'
     , match: '(?<!\\w)\\?(\\\\(x\\h{1,2}(?!\\h)\\b|0[0-7]{0,2}(?![0-7])\\b|[^x0MC])|(\\\\[MC]-)+\\w|[^\\s\\\\])'
     , name: 'constant.numeric.ruby'
     }
   , { begin: '^__END__\\n'
     , captures: { '0': { name: 'string.unquoted.program-block.ruby' } }
     , comment: '__END__ marker'
     , contentName: 'text.plain'
     , end: '(?=not)impossible'
     , patterns: 
        [ { begin: '(?=<?xml|<(?i:html\\b)|!DOCTYPE(?i:html\\b))'
          , end: '(?=not)impossible'
          , name: 'text.html.embedded.ruby'
          , patterns: [ { include: 'text.html.basic' } ]
          }
        ]
     }
   , { begin: '(?>\\=\\s*<<(\\w+))(?!\\s+#\\s*([Cc]|sh|[Jj]ava))'
     , beginCaptures: { '0': { name: 'punctuation.definition.string.begin.ruby' } }
     , end: '^\\1$'
     , endCaptures: { '0': { name: 'punctuation.definition.string.end.ruby' } }
     , name: 'string.unquoted.heredoc.ruby'
     , patterns: 
        [ { include: '#heredoc' }
        , { include: '#interpolated_ruby' }
        , { include: '#escaped_char' }
        ]
     }
   , { begin: '(?><<-HTML\\b)'
     , beginCaptures: { '0': { name: 'punctuation.definition.string.begin.ruby' } }
     , comment: 'heredoc with embedded HTML and indented terminator'
     , contentName: 'text.html.embedded.ruby'
     , end: '\\s*HTML$'
     , endCaptures: { '0': { name: 'punctuation.definition.string.end.ruby' } }
     , name: 'string.unquoted.embedded.html.ruby'
     , patterns: 
        [ { include: '#heredoc' }
        , { include: 'text.html.basic' }
        , { include: '#interpolated_ruby' }
        , { include: '#escaped_char' }
        ]
     }
   , { begin: '(?><<-SQL\\b)'
     , beginCaptures: { '0': { name: 'punctuation.definition.string.begin.ruby' } }
     , comment: 'heredoc with embedded SQL and indented terminator'
     , contentName: 'text.sql.embedded.ruby'
     , end: '\\s*SQL$'
     , endCaptures: { '0': { name: 'punctuation.definition.string.end.ruby' } }
     , name: 'string.unquoted.embedded.sql.ruby'
     , patterns: 
        [ { include: '#heredoc' }
        , { include: 'source.sql' }
        , { include: '#interpolated_ruby' }
        , { include: '#escaped_char' }
        ]
     }
   , { begin: '(?><<-(["\\\\\']?)(\\w+_(?i:eval))\\1)'
     , beginCaptures: { '0': { name: 'punctuation.definition.string.begin.ruby' } }
     , comment: 'ruby code in heredoc, interpolated'
     , end: '\\s*\\2$'
     , endCaptures: { '0': { name: 'punctuation.definition.string.end.ruby' } }
     , name: 'string.unquoted.embedded.ruby.ruby'
     , patterns: 
        [ { include: '#heredoc' }
        , { include: '#interpolated_ruby' }
        , { include: 'source.ruby' }
        , { include: '#escaped_char' }
        ]
     }
   , { begin: '(?><<-(\\w+))'
     , beginCaptures: { '0': { name: 'punctuation.definition.string.begin.ruby' } }
     , comment: 'heredoc with indented terminator'
     , end: '\\s*\\1$'
     , endCaptures: { '0': { name: 'punctuation.definition.string.end.ruby' } }
     , name: 'string.unquoted.heredoc.ruby'
     , patterns: 
        [ { include: '#heredoc' }
        , { include: '#interpolated_ruby' }
        , { include: '#escaped_char' }
        ]
     }
   , { begin: '(?>\\=\\s*<<(\\w+))(?=\\s+#\\s*[Cc](?!(\\+\\+|[Ss][Ss])))'
     , beginCaptures: { '0': { name: 'punctuation.definition.string.begin.ruby' } }
     , end: '^\\1$'
     , endCaptures: { '0': { name: 'punctuation.definition.string.end.ruby' } }
     , name: 'string.unquoted.embedded.c.ruby'
     , patterns: 
        [ { include: '#heredoc' }
        , { include: 'source.c' }
        , { include: '#interpolated_ruby' }
        , { include: '#escaped_char' }
        ]
     }
   , { begin: '(?>\\=\\s*<<(\\w+))(?=\\s+#\\s*[Cc]\\+\\+)'
     , beginCaptures: { '0': { name: 'punctuation.definition.string.begin.ruby' } }
     , end: '^\\1$'
     , endCaptures: { '0': { name: 'punctuation.definition.string.end.ruby' } }
     , name: 'string.unquoted.embedded.cplusplus.ruby'
     , patterns: 
        [ { include: '#heredoc' }
        , { include: 'source.c++' }
        , { include: '#interpolated_ruby' }
        , { include: '#escaped_char' }
        ]
     }
   , { begin: '(?>\\=\\s*<<(\\w+))(?=\\s+#\\s*[Cc][Ss][Ss])'
     , beginCaptures: { '0': { name: 'punctuation.definition.string.begin.ruby' } }
     , end: '^\\1$'
     , endCaptures: { '0': { name: 'punctuation.definition.string.end.ruby' } }
     , name: 'string.unquoted.embedded.css.ruby'
     , patterns: 
        [ { include: '#heredoc' }
        , { include: 'source.css' }
        , { include: '#interpolated_ruby' }
        , { include: '#escaped_char' }
        ]
     }
   , { begin: '(?>\\=\\s*<<(\\w+))(?=\\s+#\\s*[Jj]ava[Ss]cript)'
     , beginCaptures: { '0': { name: 'punctuation.definition.string.begin.ruby' } }
     , end: '^\\1$'
     , endCaptures: { '0': { name: 'punctuation.definition.string.end.ruby' } }
     , name: 'string.unquoted.embedded.js.ruby'
     , patterns: 
        [ { include: '#heredoc' }
        , { include: 'source.js' }
        , { include: '#interpolated_ruby' }
        , { include: '#escaped_char' }
        ]
     }
   , { begin: '(?>\\=\\s*<<(\\w+))(?=\\s+#\\s*sh)'
     , beginCaptures: { '0': { name: 'punctuation.definition.string.begin.ruby' } }
     , end: '^\\1$'
     , endCaptures: { '0': { name: 'punctuation.definition.string.end.ruby' } }
     , name: 'string.unquoted.embedded.shell.ruby'
     , patterns: 
        [ { include: '#heredoc' }
        , { include: 'source.shell' }
        , { include: '#interpolated_ruby' }
        , { include: '#escaped_char' }
        ]
     }
   , { begin: '(?<=\\{|do|\\{\\s|do\\s)(\\|)'
     , captures: { '1': { name: 'punctuation.separator.variable.ruby' } }
     , end: '(\\|)'
     , patterns: 
        [ { match: '[_a-zA-Z][_a-zA-Z0-9]*'
          , name: 'variable.other.block.ruby'
          }
        , { match: ','
          , name: 'punctuation.separator.variable.ruby'
          }
        ]
     }
   , { match: '=>'
     , name: 'punctuation.separator.key-value'
     }
   , { match: '<<=|%=|&=|\\*=|\\*\\*=|\\+=|\\-=|\\^=|\\|{1,2}=|<<'
     , name: 'keyword.operator.assignment.augmented.ruby'
     }
   , { match: '<=>|<(?!<|=)|>(?!<|=|>)|<=|>=|===|==|=~|!=|!~|(?<=[\\t])\\?'
     , name: 'keyword.operator.comparison.ruby'
     }
   , { match: '(?<=[\\t])!+|\\bnot\\b|&&|\\band\\b|\\|\\||\\bor\\b|\\^'
     , name: 'keyword.operator.logical.ruby'
     }
   , { match: '(%|&|\\*\\*|\\*|\\+|\\-|/)'
     , name: 'keyword.operator.arithmetic.ruby'
     }
   , { match: '='
     , name: 'keyword.operator.assignment.ruby'
     }
   , { match: '\\||~|>>'
     , name: 'keyword.operator.other.ruby'
     }
   , { match: ':'
     , name: 'punctuation.separator.other.ruby'
     }
   , { match: '\\;'
     , name: 'punctuation.separator.statement.ruby'
     }
   , { match: ','
     , name: 'punctuation.separator.object.ruby'
     }
   , { match: '\\.|::'
     , name: 'punctuation.separator.method.ruby'
     }
   , { match: '\\{|\\}'
     , name: 'punctuation.section.scope.ruby'
     }
   , { match: '\\[|\\]'
     , name: 'punctuation.section.array.ruby'
     }
   , { match: '\\(|\\)'
     , name: 'punctuation.section.function.ruby'
     }
   ]
, repository: 
   { escaped_char: 
      { match: '\\\\(?:[0-7]{1,3}|x[\\da-fA-F]{1,2}|.)'
      , name: 'constant.character.escape.ruby'
      }
   , heredoc: 
      { begin: '^<<-?\\w+'
      , end: '$'
      , patterns: [ { include: '$self' } ]
      }
   , interpolated_ruby: 
      { patterns: 
         [ { captures: 
              { '0': { name: 'punctuation.section.embedded.ruby' }
              , '1': { name: 'source.ruby.embedded.source.empty' }
              }
           , match: '#\\{(\\})'
           , name: 'source.ruby.embedded.source'
           }
         , { begin: '#\\{'
           , captures: { '0': { name: 'punctuation.section.embedded.ruby' } }
           , end: '\\}'
           , name: 'source.ruby.embedded.source'
           , patterns: 
              [ { include: '#nest_curly_and_self' }
              , { include: '$self' }
              ]
           }
         , { captures: { '1': { name: 'punctuation.definition.variable.ruby' } }
           , match: '(#@)[a-zA-Z_]\\w*'
           , name: 'variable.other.readwrite.instance.ruby'
           }
         , { captures: { '1': { name: 'punctuation.definition.variable.ruby' } }
           , match: '(#@@)[a-zA-Z_]\\w*'
           , name: 'variable.other.readwrite.class.ruby'
           }
         , { captures: { '1': { name: 'punctuation.definition.variable.ruby' } }
           , match: '(#\\$)[a-zA-Z_]\\w*'
           , name: 'variable.other.readwrite.global.ruby'
           }
         ]
      }
   , nest_brackets: 
      { begin: '\\['
      , captures: { '0': { name: 'punctuation.section.scope.ruby' } }
      , end: '\\]'
      , patterns: [ { include: '#nest_brackets' } ]
      }
   , nest_brackets_i: 
      { begin: '\\['
      , captures: { '0': { name: 'punctuation.section.scope.ruby' } }
      , end: '\\]'
      , patterns: 
         [ { include: '#interpolated_ruby' }
         , { include: '#escaped_char' }
         , { include: '#nest_brackets_i' }
         ]
      }
   , nest_brackets_r: 
      { begin: '\\['
      , captures: { '0': { name: 'punctuation.section.scope.ruby' } }
      , end: '\\]'
      , patterns: 
         [ { include: '#regex_sub' }
         , { include: '#nest_brackets_r' }
         ]
      }
   , nest_curly: 
      { begin: '\\{'
      , captures: { '0': { name: 'punctuation.section.scope.ruby' } }
      , end: '\\}'
      , patterns: [ { include: '#nest_curly' } ]
      }
   , nest_curly_and_self: 
      { patterns: 
         [ { begin: '\\{'
           , captures: { '0': { name: 'punctuation.section.scope.ruby' } }
           , end: '\\}'
           , patterns: [ { include: '#nest_curly_and_self' } ]
           }
         , { include: '$self' }
         ]
      }
   , nest_curly_i: 
      { begin: '\\{'
      , captures: { '0': { name: 'punctuation.section.scope.ruby' } }
      , end: '\\}'
      , patterns: 
         [ { include: '#interpolated_ruby' }
         , { include: '#escaped_char' }
         , { include: '#nest_curly_i' }
         ]
      }
   , nest_curly_r: 
      { begin: '\\{'
      , captures: { '0': { name: 'punctuation.section.scope.ruby' } }
      , end: '\\}'
      , patterns: 
         [ { include: '#regex_sub' }
         , { include: '#nest_curly_r' }
         ]
      }
   , nest_ltgt: 
      { begin: '\\<'
      , captures: { '0': { name: 'punctuation.section.scope.ruby' } }
      , end: '\\>'
      , patterns: [ { include: '#nest_ltgt' } ]
      }
   , nest_ltgt_i: 
      { begin: '\\<'
      , captures: { '0': { name: 'punctuation.section.scope.ruby' } }
      , end: '\\>'
      , patterns: 
         [ { include: '#interpolated_ruby' }
         , { include: '#escaped_char' }
         , { include: '#nest_ltgt_i' }
         ]
      }
   , nest_ltgt_r: 
      { begin: '\\<'
      , captures: { '0': { name: 'punctuation.section.scope.ruby' } }
      , end: '\\>'
      , patterns: 
         [ { include: '#regex_sub' }
         , { include: '#nest_ltgt_r' }
         ]
      }
   , nest_parens: 
      { begin: '\\('
      , captures: { '0': { name: 'punctuation.section.scope.ruby' } }
      , end: '\\)'
      , patterns: [ { include: '#nest_parens' } ]
      }
   , nest_parens_i: 
      { begin: '\\('
      , captures: { '0': { name: 'punctuation.section.scope.ruby' } }
      , end: '\\)'
      , patterns: 
         [ { include: '#interpolated_ruby' }
         , { include: '#escaped_char' }
         , { include: '#nest_parens_i' }
         ]
      }
   , nest_parens_r: 
      { begin: '\\('
      , captures: { '0': { name: 'punctuation.section.scope.ruby' } }
      , end: '\\)'
      , patterns: 
         [ { include: '#regex_sub' }
         , { include: '#nest_parens_r' }
         ]
      }
   , regex_sub: 
      { patterns: 
         [ { include: '#interpolated_ruby' }
         , { include: '#escaped_char' }
         , { captures: 
              { '1': { name: 'punctuation.definition.arbitrary-repitition.ruby' }
              , '3': { name: 'punctuation.definition.arbitrary-repitition.ruby' }
              }
           , match: '(\\{)\\d+(,\\d+)?(\\})'
           , name: 'string.regexp.arbitrary-repitition.ruby'
           }
         , { begin: '\\[(?:\\^?\\])?'
           , captures: { '0': { name: 'punctuation.definition.character-class.ruby' } }
           , end: '\\]'
           , name: 'string.regexp.character-class.ruby'
           , patterns: [ { include: '#escaped_char' } ]
           }
         , { begin: '\\('
           , captures: { '0': { name: 'punctuation.definition.group.ruby' } }
           , end: '\\)'
           , name: 'string.regexp.group.ruby'
           , patterns: [ { include: '#regex_sub' } ]
           }
         , { captures: { '1': { name: 'punctuation.definition.comment.ruby' } }
           , comment: 'We are restrictive in what we allow to go after the comment character to avoid false positives, since the availability of comments depend on regexp flags.'
           , match: '(?<=^|\\s)(#)\\s[[a-zA-Z0-9,.\\t?!-][^\\x{00}-\\x{7F}]]*$'
           , name: 'comment.line.number-sign.ruby'
           }
         ]
      }
   }
, scopeName: 'source.ruby'
, uuid: 'E00B62AC-6B1C-11D9-9B1F-000D93589AF6'
}

});