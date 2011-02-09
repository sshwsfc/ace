define(function(require, exports, module) {
exports.hash = 

{ fileTypes: [ 'applescript', 'script editor' ]
, firstLineMatch: '^#!.*(osascript)'
, foldingStartMarker: '(?x)\n\t\t^\\s*\n\t\t(\n\t\t tell \\s+ (?! .* \\b(to)\\b) .*\n\t\t|tell\\b.*?\\bto\\ tell \\s+ (?! .* \\b(to)\\b) .*\n\t\t|using \\s+ terms \\s+ from \\s+ .*\n\t\t|if\\b .* \\bthen\\b\n\t\t|repeat\\b .*\n\t\t|( on | to )\\b (?!\\s+ error) .*\n\t\t|try\n\t\t|with \\s+ timeout .*\n\t\t|script\\b .*\n\t\t|( considering | ignoring )\\b .*\n\t\t)\\s*(--.*?)?$\n\t'
, foldingStopMarker: '^\\s*end\\b.*$'
, keyEquivalent: '^~A'
, name: 'AppleScript'
, patterns: [ { include: '#blocks' }, { include: '#inline' } ]
, repository: 
   { blocks: 
      { patterns: 
         [ { begin: '^\\s*(script)\\s+(\\w+)'
           , captures: 
              { '1': { name: 'keyword.control.script.applescript' }
              , '2': { name: 'entity.name.type.script-object.applescript' }
              }
           , end: '^\\s*(endscript)'
           , name: 'meta.script.applescript'
           , patterns: [ { include: '$self' } ]
           }
         , { begin: '^(?x)\\s*(to|on)\\s+([A-Za-z][A-Za-z0-9_]*)(\\()(?:(\\w+(?:\\s*,\\s*\\w+)*))?(\\))'
           , captures: 
              { '1': { name: 'keyword.control.on.applescript' }
              , '2': { name: 'entity.name.function.handler.applescript' }
              , '3': { name: 'punctuation.definition.parameters.applescript' }
              , '4': { name: 'variable.parameter.handler.applescript' }
              , '5': { name: 'punctuation.definition.parameters.applescript' }
              }
           , comment: '\n\t\t\t\t\t\tThis is not a very well-designed rule.  For now,\n\t\t\t\t\t\twe can leave it like this though, as it sorta works.\n\t\t\t\t\t'
           , end: '^\\s*(end)(?:(\\2))?\\s*$'
           , name: 'meta.function.with-parentheses.applescript'
           , patterns: [ { include: '$self' } ]
           }
         , { begin: '^\\s*(on)\\s+(\\w+)(?=\\s+(above|against|apartfrom|around|asidefrom|at|below|beneath|beside|between|by|for|from|insteadof|into|on|onto|outof|over|thru|under)\\s+)'
           , captures: 
              { '1': { name: 'keyword.control.on.applescript' }
              , '2': { name: 'entity.name.function.handler.applescript' }
              }
           , end: '^\\s*(end)(?:(\\2))?\\s*$'
           , name: 'meta.function.prepositional.applescript'
           , patterns: 
              [ { captures: 
                   { '1': { name: 'keyword.control.preposition.applescript' }
                   , '2': { name: 'variable.parameter.handler.applescript' }
                   }
                , match: '\\b(above|against|apartfrom|around|asidefrom|at|below|beneath|beside|between|by|for|from|insteadof|into|on|onto|outof|over|thru|under)\\s+(\\w+)\\b'
                }
              , { include: '$self' }
              ]
           }
         , { include: '#tell-blocks' }
         ]
      }
   , 'built-in': 
      { patterns: 
         [ { match: '\u00ac'
           , name: 'punctuation.separator.continuation.line.applescript'
           }
         , { match: '\\b((a)?(ref(to)|referenceto)|(doesnot|doesn\'t)(come(before|after)|contain|equal)|(start|begin)s?with|comes(before|after)|is(n\'t|not)?((in|containedby|(lessthan|greaterthan)(orequal(to)?)?|equal(to)?))?|ends?with|contains?|equals?|than|and|div|mod|not|or|as)\\b|(\u2260|\u2265|\u2264|>=|<=|\u00f7|&|=|>|<|\\*|\\+|-|/|\\^)'
           , name: 'keyword.operator.applescript'
           }
         , { captures: { '1': { name: 'keyword.control.applescript' } }
           , comment: 'make sure that "return", "property", and other keywords are not preceded by something else, to disambiguate'
           , match: '(?<=^|then|to)\\s*\\b(return|prop(erty)?)\\b'
           }
         , { comment: 'the : in property assignments'
           , match: ':'
           , name: 'punctuation.separator.key-value.property.applescript'
           }
         , { comment: 'the parentheses in groups'
           , match: '[()]'
           , name: 'punctuation.section.group.applescript'
           }
         , { match: '\\b(onerror|try|to|on|tell|if|then|elseif|else|repeat((while|until|with))?|usingtermsfrom|from|through|thru|withtimeout|times|end(tell|repeat|if|timeout|usingtermsfrom|error|try)|end|my|where|whose|considering|ignoring|global|local|exit|continue|returning|set|copy|put)\\b'
           , name: 'keyword.control.applescript'
           }
         , { match: '\\b(every|some|index|named|from|to|through|thru|before|(in)?frontof|afterreceiving|after|(in)?backof|beginningof|endof|in|of|first|second|third|fourth|fifth|sixth|seventh|eighth|ninth|tenth|\\d+(st|nd|rd|th)|last|front|back|middle)\\b'
           , name: 'keyword.control.reference.applescript'
           }
         , { match: '\\b(all(caps|lowercase)|bold|condensed|expanded|hidden|italic|outline|plain|shadow|smallcaps|strikethrough|(sub|super)script|underline)\\b'
           , name: 'constant.other.text-styles.applescript'
           }
         , { comment: 'yes/no can\u2019t always be used as booleans, e.g. in an if() expression. But they work e.g. for boolean arguments.'
           , match: '\\b(?i:true|false|yes|no)\\b'
           , name: 'constant.language.boolean.applescript'
           }
         , { match: '\\b(null)\\b'
           , name: 'constant.language.null.applescript'
           }
         , { match: '\\b(Jan(uary)?|Feb(ruary)?|Mar(ch)?|Apr(il)?|May|Jun(e)?|Jul(y)?|Aug(ust)?|Sep(tember)?|Oct(ober)?|Nov(ember)?|Dec(ember)?|weekdays?|Sunday|Monday|Tuesday|Wednesday|Thursday|Friday|Saturday)\\b'
           , name: 'constant.other.date-time.applescript'
           }
         , { comment: 'these are used in considering/ignoring statements'
           , match: '\\b(?<=considering|ignoring)(applicationresponses|currentapplication|case|diacriticals|expansion|hyphens|punctuation|whitespace)\\b'
           , name: 'constant.other.considering-ignoring-attributes.applescript'
           }
         , { match: '\\b(space|return|tab)\\b'
           , name: 'constant.other.characters.applescript'
           }
         , { match: '\\b(currentapplication|it|me|version|result|pi|AppleScript)\\b'
           , name: 'constant.other.miscellaneous.applescript'
           }
         , { match: '\\b(textitemdelimiters|printlength|printdepth)\\b'
           , name: 'variable.language.applescript'
           }
         , { match: '\\b(count(each|every)|numberof|error|get|run)\\b'
           , name: 'support.function.built-in.applescript'
           }
         , { match: '\\b(booleans?|integers?|reals?|numbers?|(linked)?lists?|vectors?|records?|items?|scripts?|events?|propert(y|ies)|constants?|prepositions?|referenceforms?|handlers?|data|characters?|writingcode(infos?)?|missingvalues?|references?|anything|missingvalue|uppercase|app(lications?)?|textitems?|((international|styled(Clipboard|Unicode)?|Unicode))?text|(C|encoded|Pascal)?strings?|(type)?class(es)?|RGBcolors?|pictures?|sounds?|versions?|filespecifications?|alias(es)?|machines?|zones?|keystrokes?|seconds|dates?|months?|(cubic|square|cubiccenti|squarekilo|centi|kilo)met(er|re)s|(square|cubic)?(yards|feet)|(square)?miles|(cubic)?inches|lit(re|er)s|gallons|quarts|(kilo)?grams|ounces|pounds|degrees(Celsius|Fahrenheit|Kelvin))\\b'
           , name: 'support.class.built-in.applescript'
           }
         , { match: '\\b\\d+((\\.(\\d+\\b)?)?(?i:e\\+?\\d*\\b)?|\\b)'
           , name: 'constant.numeric.applescript'
           }
         , { captures: { '1': { name: 'variable.other.applescript' } }
           , match: '(?<=set[\\t])\\s*([_a-zA-Z][_a-zA-Z0-9]*)\\s*(?=[\\t]+to)'
           }
         ]
      }
   , comments: 
      { patterns: 
         [ { captures: { '1': { name: 'punctuation.definition.comment.applescript' } }
           , match: '(--).*$\\n?'
           , name: 'comment.line.double-dash.applescript'
           }
         , { begin: '\\(\\*'
           , captures: { '0': { name: 'punctuation.definition.comment.applescript' } }
           , end: '\\*\\)'
           , name: 'comment.block.applescript'
           }
         ]
      }
   , 'data-structures': 
      { patterns: 
         [ { begin: '(\\{)'
           , captures: { '1': { name: 'punctuation.section.array.applescript' } }
           , comment: '\n\t\t\t\t\t\twe cannot necessarily distinguish "records" from\n\t\t\t\t\t\t"arrays", and so this could be either\n\t\t\t\t\t'
           , end: '(\\})'
           , name: 'meta.data.array.applescript'
           , patterns: 
              [ { captures: 
                   { '1': { name: 'constant.other.key.applescript' }
                   , '2': { name: 'meta.identifier.applescript' }
                   , '3': { name: 'punctuation.definition.identifier.applescript' }
                   , '4': { name: 'punctuation.definition.identifier.applescript' }
                   , '5': { name: 'punctuation.separator.key-value.applescript' }
                   }
                , match: '([A-Za-z]+|((\\|)[^|\\n]*(\\|)))\\s*(:)'
                }
              , { match: ':'
                , name: 'punctuation.separator.key-value.applescript'
                }
              , { match: ','
                , name: 'punctuation.separator.array.applescript'
                }
              , { include: '#inline' }
              ]
           }
         , { begin: '((?<=application)"|(?<=app)")'
           , captures: { '1': { name: 'punctuation.definition.string.applescript' } }
           , end: '(")'
           , name: 'string.quoted.double.application-name.applescript'
           , patterns: 
              [ { match: '\\\\.'
                , name: 'constant.character.escape.applescript'
                }
              ]
           }
         , { begin: '(")'
           , captures: { '1': { name: 'punctuation.definition.string.applescript' } }
           , end: '(")'
           , name: 'string.quoted.double.applescript'
           , patterns: 
              [ { match: '\\\\.'
                , name: 'constant.character.escape.applescript'
                }
              ]
           }
         , { captures: 
              { '1': { name: 'punctuation.definition.identifier.applescript' }
              , '2': { name: 'punctuation.definition.identifier.applescript' }
              }
           , match: '(\\|)[^|\\n]*(\\|)'
           , name: 'meta.identifier.applescript'
           }
         , { captures: 
              { '1': { name: 'punctuation.definition.data.applescript' }
              , '2': { name: 'support.class.built-in.applescript' }
              , '3': { name: 'storage.type.utxt.applescript' }
              , '4': { name: 'string.unquoted.data.applescript' }
              , '5': { name: 'punctuation.definition.data.applescript' }
              , '6': { name: 'keyword.operator.applescript' }
              , '7': { name: 'support.class.built-in.applescript' }
              }
           , match: '(\u00ab)(data)(utxt|utf8)([0-9A-Fa-f]*)(\u00bb)(?:(as)(Unicodetext))?'
           , name: 'meta.data.applescript'
           }
         ]
      }
   , finder: 
      { patterns: 
         [ { match: '\\b(item|container|(computer|disk|trash)-object|disk|folder|((alias|application|document|internetlocation))?file|clipping|package)s?\\b'
           , name: 'support.class.finder.items.applescript'
           }
         , { match: '\\b((Finder|desktop|information|preferences|clipping))windows?\\b'
           , name: 'support.class.finder.window-classes.applescript'
           }
         , { match: '\\b(preferences|(icon|column|list)viewoptions|(label|column|aliaslist)s?)\\b'
           , name: 'support.class.finder.type-definitions.applescript'
           }
         , { match: '\\b(copy|find|sort|cleanup|eject|empty(trash)|erase|reveal|update)\\b'
           , name: 'support.function.finder.items.applescript'
           }
         , { match: '\\b(insertionlocation|productversion|startupdisk|desktop|trash|home|computercontainer|finderpreferences)\\b'
           , name: 'support.constant.finder.applescript'
           }
         , { match: '\\b(visible)\\b'
           , name: 'support.variable.finder.applescript'
           }
         ]
      }
   , inline: 
      { patterns: 
         [ { include: '#comments' }
         , { include: '#data-structures' }
         , { include: '#built-in' }
         , { include: '#standardadditions' }
         ]
      }
   , itunes: 
      { patterns: 
         [ { match: '\\b(artwork|application|encoder|EQpreset|item|source|visual|(EQ|browser)?window|((audioCD|device|shared|URL|file))?track|playlistwindow|((audioCD|device|radiotuner|library|folder|user))?playlist)s?\\b'
           , name: 'support.class.itunes.applescript'
           }
         , { match: '\\b(add|backtrack|convert|fastforward|(next|previous)track|pause|play(pause)?|refresh|resume|rewind|search|stop|update|eject|subscribe|update(Podcast|AllPodcasts)|download)\\b'
           , name: 'support.function.itunes.applescript'
           }
         , { match: '\\b(current(playlist|stream(title|URL)|track)|playerstate)\\b'
           , name: 'support.constant.itunes.applescript'
           }
         , { match: '\\b(current(encoder|EQpreset|visual)|EQenabled|fixedindexing|fullscreen|mute|playerposition|soundvolume|visualsenabled|visualsize)\\b'
           , name: 'support.variable.itunes.applescript'
           }
         ]
      }
   , 'standard-suite': 
      { patterns: 
         [ { match: '\\b(colors?|documents?|items?|windows?)\\b'
           , name: 'support.class.standard-suite.applescript'
           }
         , { match: '\\b(close|count|delete|duplicate|exists|make|move|open|print|quit|save|activate|select|datasize)\\b'
           , name: 'support.function.standard-suite.applescript'
           }
         , { match: '\\b(name|frontmost|version)\\b'
           , name: 'support.constant.standard-suite.applescript'
           }
         , { match: '\\b(selection)\\b'
           , name: 'support.variable.standard-suite.applescript'
           }
         , { match: '\\b(attachments?|attributeruns?|characters?|paragraphs?|texts?|words?)\\b'
           , name: 'support.class.text-suite.applescript'
           }
         ]
      }
   , standardadditions: 
      { patterns: 
         [ { match: '\\b((alert|dialog)reply)\\b'
           , name: 'support.class.standardadditions.user-interaction.applescript'
           }
         , { match: '\\b(fileinformation)\\b'
           , name: 'support.class.standardadditions.file.applescript'
           }
         , { match: '\\b(POSIXfiles?|systeminformation|volumesettings)\\b'
           , name: 'support.class.standardadditions.miscellaneous.applescript'
           }
         , { match: '\\b(URLs?|internetaddress(es)?|webpages?|FTPitems?)\\b'
           , name: 'support.class.standardadditions.internet.applescript'
           }
         , { match: '\\b(infofor|list(disks|folder)|mountvolume|pathto(resource)?)\\b'
           , name: 'support.function.standardadditions.file.applescript'
           }
         , { match: '\\b(beep|choose(application|color|file(name)?|folder|fromlist|remoteapplication|URL)|delay|display(alert|dialog)|say)\\b'
           , name: 'support.function.standardadditions.user-interaction.applescript'
           }
         , { match: '\\b(ASCII(character|number)|localizedstring|offset|summarize)\\b'
           , name: 'support.function.standardadditions.string.applescript'
           }
         , { match: '\\b(settheclipboardto|theclipboard|clipboardinfo)\\b'
           , name: 'support.function.standardadditions.clipboard.applescript'
           }
         , { match: '\\b(openforaccess|closeaccess|read|write|geteof|seteof)\\b'
           , name: 'support.function.standardadditions.file-i-o.applescript'
           }
         , { match: '\\b((load|store|run)script|scriptingcomponents)\\b'
           , name: 'support.function.standardadditions.scripting.applescript'
           }
         , { match: '\\b(currentdate|doshellscript|getvolumesettings|randomnumber|round|setvolume|systemattribute|systeminfo|timetoGMT)\\b'
           , name: 'support.function.standardadditions.miscellaneous.applescript'
           }
         , { match: '\\b(openingfolder|(closing|moving)folderwindowfor|addingfolderitemsto|removingfolderitemsfrom)\\b'
           , name: 'support.function.standardadditions.folder-actions.applescript'
           }
         , { match: '\\b(openlocation|handleCGIrequest)\\b'
           , name: 'support.function.standardadditions.internet.applescript'
           }
         ]
      }
   , 'system-events': 
      { patterns: 
         [ { match: '\\b(audio(data|file))\\b'
           , name: 'support.class.system-events.audio-file.applescript'
           }
         , { match: '\\b(alias(es)?|(Classic|local|network|system|user)domainobjects?|disk(item)?s?|domains?|file(package)?s?|folders?|items?)\\b'
           , name: 'support.class.system-events.disk-folder-file.applescript'
           }
         , { match: '\\b(delete|open|move)\\b'
           , name: 'support.function.system-events.disk-folder-file.applescript'
           }
         , { match: '\\b(folderactions?|scripts?)\\b'
           , name: 'support.class.system-events.folder-actions.applescript'
           }
         , { match: '\\b(attachactionto|attachedscripts|editactionof|removeactionfrom)\\b'
           , name: 'support.function.system-events.folder-actions.applescript'
           }
         , { match: '\\b(moviedata|moviefile)\\b'
           , name: 'support.class.system-events.movie-file.applescript'
           }
         , { match: '\\b(logout|restart|shutdown|sleep)\\b'
           , name: 'support.function.system-events.power.applescript'
           }
         , { match: '\\b(((application|deskaccessory)?process|(check|combo)?box)(es)?|(action|attribute|browser|(busy|progress|relevance)indicator|colorwell|column|drawer|group|growarea|image|incrementor|list|menu(bar)?(item)?|(menu|popup|radio)?button|outline|(radio|tab|splitter)group|row|scroll(area|bar)|sheet|slider|splitter|statictext|table|text(area|field)|toolbar|UIelement|window)s?)\\b'
           , name: 'support.class.system-events.processes.applescript'
           }
         , { match: '\\b(click|keycode|keystroke|perform|select)\\b'
           , name: 'support.function.system-events.processes.applescript'
           }
         , { match: '\\b(propertylist(file|item))\\b'
           , name: 'support.class.system-events.property-list.applescript'
           }
         , { match: '\\b(annotation|QuickTime(data|file)|track)s?\\b'
           , name: 'support.class.system-events.quicktime-file.applescript'
           }
         , { match: '\\b((abort|begin|end)transaction)\\b'
           , name: 'support.function.system-events.system-events.applescript'
           }
         , { match: '\\b(XML(attribute|data|element|file)s?)\\b'
           , name: 'support.class.system-events.xml.applescript'
           }
         , { match: '\\b(printsettings|users?|loginitems?)\\b'
           , name: 'support.class.sytem-events.other.applescript'
           }
         ]
      }
   , 'tell-blocks': 
      { patterns: 
         [ { begin: '^\\s*(tell)\\s+(?=app(lication)?\\s+"(?i:textmate)")(?!.*\\bto\\b)'
           , captures: { '1': { name: 'keyword.control.applescript' } }
           , comment: 'tell Textmate'
           , end: '^\\s*(endtell)'
           , name: 'meta.tell-block.application.textmate.applescript'
           , patterns: 
              [ { include: '#textmate' }
              , { include: '#standard-suite' }
              , { include: '$self' }
              ]
           }
         , { begin: '^\\s*(tell)\\s+(?=app(lication)?\\s+"(?i:finder)")(?!.*\\bto\\b)'
           , captures: { '1': { name: 'keyword.control.applescript' } }
           , comment: 'tell Finder'
           , end: '^\\s*(endtell)'
           , name: 'meta.tell-block.application.finder.applescript'
           , patterns: 
              [ { include: '#finder' }
              , { include: '#standard-suite' }
              , { include: '$self' }
              ]
           }
         , { begin: '^\\s*(tell)\\s+(?=app(lication)?\\s+"(?i:systemevents)")(?!.*\\bto\\b)'
           , captures: { '1': { name: 'keyword.control.applescript' } }
           , comment: 'tell System Events'
           , end: '^\\s*(endtell)'
           , name: 'meta.tell-block.application.system-events.applescript'
           , patterns: 
              [ { include: '#system-events' }
              , { include: '#standard-suite' }
              , { include: '$self' }
              ]
           }
         , { begin: '^\\s*(tell)\\s+(?=app(lication)?\\s+"(?i:itunes)")(?!.*\\bto\\b)'
           , captures: { '1': { name: 'keyword.control.applescript' } }
           , comment: 'tell iTunes'
           , end: '^\\s*(endtell)'
           , name: 'meta.tell-block.application.itunes.applescript'
           , patterns: 
              [ { include: '#itunes' }
              , { include: '#standard-suite' }
              , { include: '$self' }
              ]
           }
         , { begin: '^\\s*(tell)\\s+(?=app(lication)?\\b)(?!.*\\bto\\b)'
           , captures: { '1': { name: 'keyword.control.applescript' } }
           , comment: 'tell generic application'
           , end: '^\\s*(endtell)'
           , name: 'meta.tell-block.application.generic.applescript'
           , patterns: 
              [ { include: '#standard-suite' }
              , { include: '$self' }
              ]
           }
         , { begin: '^\\s*(tell)\\s+(?=app(lication)?\\b)(?=.*?totell\\s*(?!.*\\bto\\b))'
           , captures: { '1': { name: 'keyword.control.applescript' } }
           , comment: 'tell ... to tell generic application'
           , end: '^\\s*(endtell)'
           , name: 'meta.tell-block.application.generic.applescript'
           , patterns: 
              [ { include: '#standard-suite' }
              , { include: '$self' }
              ]
           }
         , { begin: '^\\s*(tell)\\s+.*?(totell)\\s*(?!.*\\bto\\b)'
           , captures: 
              { '1': { name: 'keyword.control.applescript' }
              , '2': { name: 'keyword.control.applescript' }
              }
           , comment: 'generic tell ... to tell block'
           , end: '^\\s*(endtell)'
           , name: 'meta.tell-block.generic.applescript'
           , patterns: [ { include: '$self' } ]
           }
         , { begin: '^\\s*(tell)\\s+(?!.*\\bto\\b)'
           , captures: { '1': { name: 'keyword.control.applescript' } }
           , comment: 'generic tell block'
           , end: '^\\s*(endtell)'
           , name: 'meta.tell-block.generic.applescript'
           , patterns: [ { include: '$self' } ]
           }
         ]
      }
   , textmate: 
      { patterns: 
         [ { match: '\\b(printsettings)\\b'
           , name: 'support.class.textmate.applescript'
           }
         , { match: '\\b(geturl|insert|reloadbundles)\\b'
           , name: 'support.function.textmate.applescript'
           }
         ]
      }
   }
, scopeName: 'source.applescript'
, uuid: '777CF925-14B9-428E-B07B-17FAAB8FA27E'
}

});
