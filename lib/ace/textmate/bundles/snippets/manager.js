define(function(require, exports, module) {

var snippets_hash = { 'source.apache-config': 
   { tab: 
      [ { content: 'AllowOverride ${1:${2:AuthConfig }${3:FileInfo }${4:Indexes }${5:Limit }${6:Options}}'
        , name: 'Allow Override'
        , scope: 'source.apache-config'
        , tabTrigger: 'allow'
        , uuid: 'C6256A3A-BC6E-4587-8D3C-6588AD5F89F5'
        }
      , { content: '<Directory ${1:/Library/WebServer/${2:example/}}>\n\t$0\n</Directory>\n'
        , name: 'Directory'
        , scope: 'source.apache-config'
        , tabTrigger: 'dir'
        , uuid: '894AF995-B54F-43CC-8810-2A0CCD56B168'
        }
      , { content: 'Options ${1:${2:All }${3:ExecCGI }${4:FollowSymLinks }${5:Includes }${6:IncludesNOEXEC }${7:Indexes }${8:MultiViews }${9:SymLinksIfOwnerMatch}}'
        , name: 'Options'
        , scope: 'source.apache-config'
        , tabTrigger: 'opt'
        , uuid: '230ED58C-E1B9-4BA6-A034-6F5629B6F46C'
        }
      , { content: '<VirtualHost ${1:example.org}>\n\tServerAdmin webmaster@$1\n\tDocumentRoot /www/vhosts/$1\n\tServerName $1\n\tErrorLog logs/$1-error_log\n\tCustomLog logs/$1-access_log common\n</VirtualHost>'
        , name: 'Virtual Host'
        , scope: 'source.apache-config'
        , tabTrigger: 'vhost'
        , uuid: '12F1DA22-C375-4DF5-B0C5-87BA2AA38AB0'
        }
      ]
   , key: []
   }
, 'source.applescript': 
   { tab: 
      [ { content: '${1:set the_application to }choose application with prompt "${2:Choose an application:}"${3: \u00ac\n\twith multiple selections allowed}\n$0'
        , name: 'Application(s)'
        , scope: 'source.applescript'
        , tabTrigger: 'choose'
        , uuid: '61FA9A41-E511-488F-AA30-4216C9154BE7'
        }
      , { content: 'set oldDelims to AppleScript\'s text item delimiters\nset AppleScript\'s text item delimiters to {"${1:,}"}\n${0:-- insert actions here}\nset AppleScript\'s text item delimiters to oldDelims'
        , name: 'change text item delimiters'
        , scope: 'source.applescript'
        , tabTrigger: 'delim'
        , uuid: '016BF4B7-53D3-49E0-A8DB-033917FAD031'
        }
      , { content: 'set the_choice to choose from list ${1:{"${2:choices}"\\}}\n$0 '
        , name: 'Item From List'
        , scope: 'source.applescript'
        , tabTrigger: 'choose'
        , uuid: '1D418F08-770F-4407-AE6A-3CCF2CD9FA6E'
        }
      , { content: '${1:set the_color to }choose color default color ${2:{65536, 65536, 65536\\}}\n$0'
        , name: 'Color'
        , scope: 'source.applescript'
        , tabTrigger: 'choose'
        , uuid: 'C8B17E74-0D0F-4FC9-B53C-B2CD2BBE4EA4'
        }
      , { content: 'considering ${1:case}\n\t${0:-- insert actions here}\nend considering'
        , name: 'considering \u2026 end considering'
        , scope: 'source.applescript'
        , tabTrigger: 'con'
        , uuid: 'F6401A3A-7BDB-41E0-8628-3C2F24C3D5FC'
        }
      , { content: 'display alert "${1:alert text}" \u00ac\n\t${2:message "${3:message text}" \u00ac\n\t}${4:as warning}'
        , name: 'Display Alert'
        , scope: 'source.applescript'
        , tabTrigger: 'alert'
        , uuid: '36586BF4-F77B-42B6-ADEF-AD2B65298602'
        }
      , { content: '${1:set shell_stdout to }do shell script ${3:\u00ac\n\t"${2:#script}"} \u00ac\n\twithout altering line endings\n$0'
        , name: 'do shell script \u2026'
        , scope: 'source.applescript'
        , tabTrigger: 'shell'
        , uuid: 'A26CF48B-F79C-4AEC-B2DC-9063DA264DDB'
        }
      , { content: '${1:set the_file to }choose file with prompt "${2:Pick a file:}"${3: \u00ac\n\tdefault location path to home folder}${4: \u00ac\n\twith invisibles}${5: \u00ac\n\twith multiple selections allowed}${6: \u00ac\n\twith showing package contents}\n$0'
        , name: 'File(s)'
        , scope: 'source.applescript'
        , tabTrigger: 'choose'
        , uuid: '5C6AB1CA-170D-42A9-8E3C-961FE1054934'
        }
      , { content: '${1:set the_folder to }choose folder with prompt "${2:Pick a folder:}"${3: \u00ac\n\tdefault location path to home folder}${4: \u00ac\n\twith invisibles}${5: \u00ac\n\twith multiple selections allowed}${6: \u00ac\n\twith showing package contents}\n$0'
        , name: 'Folder(s)'
        , scope: 'source.applescript'
        , tabTrigger: 'choose'
        , uuid: 'CDEB7EDE-7171-4801-AE12-258ED3F7A2BA'
        }
      , { content: 'if ${1:true} then\n\t${0:-- insert actions here}\nend if'
        , name: 'if \u2026 end'
        , scope: 'source.applescript'
        , tabTrigger: 'if'
        , uuid: '301C492A-03BE-4EFF-87A9-2FD276376B9B'
        }
      , { content: 'ignoring ${1:application responses}\n\t${0:-- insert actions here}\nend ignoring'
        , name: 'ignoring \u2026 end ignoring'
        , scope: 'source.applescript'
        , tabTrigger: 'ign'
        , uuid: 'AFC90003-4B8B-4661-8958-81F47D5E8277'
        }
      , { content: '${1:set the_filename to }choose file name with prompt "${2:Name this file:}" \u00ac\n\tdefault name "${3:untitled}" default location ${4:path to home folder}\n$0'
        , name: 'New File'
        , scope: 'source.applescript'
        , tabTrigger: 'choose'
        , uuid: 'DE1A37AA-FB0F-480F-99DC-3D79B35A49C1'
        }
      , { content: 'display dialog "${1:text}" \u00ac\n\t${2:with icon ${3:1} \u00ac\n\t}buttons {"${4:OK}"} default button 1\n$0'
        , name: 'OK'
        , scope: 'source.applescript'
        , tabTrigger: 'dialog'
        , uuid: '244EC5B2-5821-4364-8585-A2B241A57590'
        }
      , { content: 'display dialog "${1:text}" \u00ac\n\t${2:with icon ${3:1} \u00ac\n\t}buttons {"${5:Cancel}", "${4:OK}"} \u00ac\n\tdefault button "$4"\nset button_pressed to button returned of result\nif button_pressed is "$4" then\n\t${6:-- action for default button button goes here}\nelse\n\t-- action for cancel button goes here\nend if'
        , name: 'OK/Cancel'
        , scope: 'source.applescript'
        , tabTrigger: 'dialog'
        , uuid: '3495D4D5-E454-4A90-9288-8E7D34094544'
        }
      , { content: 'display dialog "${1:text}" \u00ac\n\t${2:with icon ${3:1} \u00ac\n\t}buttons {"${5:Cancel}", "${6:Other Choice}", "${4:OK}"} \u00ac\n\tdefault button "$4"\nset button_pressed to button returned of result\nif button_pressed is "$4" then\n\t${7:-- action for default button button goes here}\nelse if button_pressed is "$5" then\n\t-- action for cancel button goes here\nelse\n\t-- action for other button goes here\nend if'
        , name: 'OK/Cancel/Other'
        , scope: 'source.applescript'
        , tabTrigger: 'dialog'
        , uuid: '7DD1F1C1-3E7B-4157-951E-58B22BA00AB9'
        }
      , { content: 'on ${1:functionName}(${2:arguments})\n\t${3:-- function actions}\nend $1'
        , name: 'on function \u2026 end'
        , scope: 'source.applescript'
        , tabTrigger: 'on'
        , uuid: 'AD6C0DB7-E3A9-44A0-A9AC-225BBAF49554'
        }
      , { content: 'prop parent : app "${1:TextMate}"'
        , name: 'prop parent \u2026'
        , scope: 'source.applescript'
        , tabTrigger: 'parent'
        , uuid: '26A11710-54A2-4AB1-AE52-213869C21314'
        }
      , { content: 'repeat while ${1:condition}\n\t$0\nend repeat'
        , name: 'repeat while ...'
        , scope: 'source.applescript'
        , tabTrigger: 'rep'
        , uuid: '82EE8D3B-B2EE-457C-8412-F098DD5827FA'
        }
      , { content: 'repeat with $1 in $2\n\t$0\nend repeat'
        , name: 'repeat with ... in ...'
        , scope: 'source.applescript'
        , tabTrigger: 'rep'
        , uuid: '1E31B99C-B436-4BA6-A754-E8EE5A73680D'
        }
      , { content: 'repeat ${1:${2:number} times}\n\t${0:-- insert actions here}\nend repeat'
        , name: 'repeat \u2026 end'
        , scope: 'source.applescript'
        , tabTrigger: 'rep'
        , uuid: '4FFDA694-2B17-41AF-B92A-2172612CC82D'
        }
      , { content: 'script ${1:new_object}\n\ton run\n\t\t${0:-- do something interesting}\n\tend run\nend script'
        , name: 'script \u2026 end'
        , scope: 'source.applescript'
        , tabTrigger: 'script'
        , uuid: '27E30615-B821-4998-AC39-B503B75699DB'
        }
      , { content: 'tell ${2:app "${1:TextMate}"}\n\t${0:-- insert actions here}\nend tell'
        , name: 'tell [app] \u2026 end'
        , scope: 'source.applescript'
        , tabTrigger: 'tell'
        , uuid: '3E62DF03-32E3-40B6-978F-CD3DD86F8494'
        }
      , { content: 'set the_result to display dialog "${1:text}" \u00ac\n\tdefault answer "${2:type here}" \u00ac\n\t${3:with icon ${4:1} \u00ac\n\t}buttons {"${6:Cancel}", "${5:OK}"} \u00ac\n\tdefault button "$5"\nset button_pressed to button returned of the_result\nset text_typed to text returned of the_result\nif button_pressed is "$5" then\n\t${7:-- action for default button button goes here}\nelse\n\t-- action for cancel button goes here\nend if'
        , name: 'Text Field'
        , scope: 'source.applescript'
        , tabTrigger: 'dialog'
        , uuid: 'E4CD6ED0-73A9-48A5-95F1-74794A93401F'
        }
      , { content: 'try\n\t${0:-- actions to try}\non error\n\t-- error handling\nend try'
        , name: 'try \u2026 on error \u2026 end'
        , scope: 'source.applescript'
        , tabTrigger: 'try'
        , uuid: 'A7169FD9-63FB-46EB-974F-6B31FFF4C52B'
        }
      , { content: '${1:set the_url to }choose URL showing ${2:Web} servers with editable URL\n$0'
        , name: 'URL'
        , scope: 'source.applescript'
        , tabTrigger: 'choose'
        , uuid: '5100F3C7-EC8E-43C3-B844-2F384FCEC6C4'
        }
      , { content: 'using terms from ${1:app "${2:Finder}"}\n\t${0:-- insert actions here}\nend using terms from'
        , name: 'using terms from [app] \u2026 end'
        , scope: 'source.applescript'
        , tabTrigger: 'terms'
        , uuid: '9E5E9C0B-471D-41FE-83CF-6BC51783B27F'
        }
      , { content: 'with timeout ${1:number} seconds\n\t${0:-- insert actions here}\nend timeout'
        , name: 'with timeout \u2026 end'
        , scope: 'source.applescript'
        , tabTrigger: 'timeout'
        , uuid: '9C5B660B-94B9-44DD-AA84-F212AAE0065A'
        }
      ]
   , key: []
   }
, 'text.blog': 
   { tab: 
      [ { content: 'Comments: On'
        , name: 'Comments'
        , scope: 'text.blog'
        , tabTrigger: 'comments'
        , uuid: '6CEE1440-987D-4E37-BA50-9AD23784D2E5'
        }
      , { content: '\u2702------\u2702------\u2702------\u2702------\u2702------\u2702------\u2702------\u2702------\u2702------\u2702------\n'
        , name: 'Cut'
        , scope: 'text.blog'
        , tabTrigger: 'cut'
        , uuid: '6F1CF327-E4C8-49D8-BD30-FD6F987AE23A'
        }
      , { content: 'Date: `date +"%Y-%m-%d %H:%M:%S"`'
        , name: 'Date'
        , scope: 'text.blog'
        , tabTrigger: 'date'
        , uuid: 'B55BA9A1-0F22-45F4-B7C8-B216BF038AF9'
        }
      , { content: 'Keywords: '
        , name: 'Keywords'
        , scope: 'text.blog'
        , tabTrigger: 'keyw'
        , uuid: '5CCBC664-2477-4C8C-8B8B-7B57DB15DB23'
        }
      , { content: 'Ping: ${1:http://www.example.com/post/ping/}\n'
        , name: 'Ping'
        , scope: 'text.blog'
        , tabTrigger: 'ping'
        , uuid: '853BB979-1DA2-4D78-B50D-092B80A1877F'
        }
      , { content: 'Pings: On'
        , name: 'Pings'
        , scope: 'text.blog'
        , tabTrigger: 'pings'
        , uuid: '2238B6A6-0961-4DC6-917D-477F776CAF9D'
        }
      , { content: 'Tags: '
        , name: 'Tags'
        , scope: 'text.blog'
        , tabTrigger: 'tags'
        , uuid: 'D947660B-DD37-44C3-B4A5-7003B90CD0DD'
        }
      , { content: 'Title: '
        , name: 'Title'
        , scope: 'text.blog'
        , tabTrigger: 'title'
        , uuid: '5C0A6073-6592-4841-83A0-C03D742074E5'
        }
      ]
   , key: []
   }
, 'source.plist.tm-grammar': 
   { tab: 
      [ { content: 'beginCaptures = {\n\t1 = { name = \'$1\'; };\n};'
        , name: 'Begin Captures'
        , scope: 'source.plist.tm-grammar'
        , tabTrigger: 'begcap'
        , uuid: '3E5051E7-18CF-4BD4-89A5-045416831972'
        }
      , { content: 'captures = {\n\t1 = { name = \'$1\'; };\n};'
        , name: 'Captures'
        , scope: 'source.plist.tm-grammar'
        , tabTrigger: 'cap'
        , uuid: '8C3D6E62-E865-4655-9B20-E3B95F07F9B6'
        }
      , { content: 'comment = \'$0\';'
        , name: 'Comment'
        , scope: 'source.plist.tm-grammar'
        , tabTrigger: 'com'
        , uuid: '1CB08CB5-7CBE-4A5D-A69B-DC04244838C4'
        }
      , { content: 'contentName = \'$1\';'
        , name: 'Content Name'
        , scope: 'source.plist.tm-grammar'
        , tabTrigger: 'connam'
        , uuid: 'D738436A-B700-4299-A7D7-A242BDDF3A67'
        }
      , { content: 'disabled = 1;'
        , name: 'Disable'
        , scope: 'source.plist.tm-grammar'
        , tabTrigger: 'dis'
        , uuid: '7534A315-9A3D-449B-9AD0-DE603A77C356'
        }
      , { content: 'endCaptures = {\n\t1 = { name = \'$1\'; };\n};'
        , name: 'End Captures'
        , scope: 'source.plist.tm-grammar'
        , tabTrigger: 'endcap'
        , uuid: '36B66AAB-42A5-4366-B7C1-790A749181D4'
        }
      , { content: '{\tinclude = \'$1\'; },'
        , name: 'Rule \u2014 Include'
        , scope: 'source.plist.tm-grammar'
        , tabTrigger: 'inc'
        , uuid: 'D5BA7FE7-543F-47FC-BECD-750200B81762'
        }
      , { content: 'name = \'$1\';'
        , name: 'Name'
        , scope: 'source.plist.tm-grammar'
        , tabTrigger: 'nam'
        , uuid: 'EF6B4C87-F1A9-4D06-8712-587857CC3D5E'
        }
      , { content: 'patterns = (\n\t$0\n);'
        , name: 'Patterns'
        , scope: 'source.plist.tm-grammar'
        , tabTrigger: 'pat'
        , uuid: '4AB06A04-02CF-4E7B-9E7E-07747A68160C'
        }
      , { content: 'repository = {\n\t${1:rule_name} = {\n\t\t$0\n\t};\n};'
        , name: 'Repository'
        , scope: 'source.plist.tm-grammar'
        , tabTrigger: 'rep'
        , uuid: 'A9191F2E-8FAC-41B9-B729-9663E42452DD'
        }
      ]
   , key: []
   }
, 'source.ruby': 
   { tab: 
      [ { content: 'ENV[\'TM_${1:S}${1/^(S)|(B)$|.*/(?1:UPPORT_PATH:(?2:UNDLE_SUPPORT))/}\']'
        , name: 'ENV[\'TM_\u2026\']'
        , scope: 'source.ruby'
        , tabTrigger: 'env'
        , uuid: '19C1DA95-E682-4FE1-973F-00994065C520'
        }
      , { content: 'require ENV[\'TM_${1:S}${1/^(S)|(B)$|.*/(?1:UPPORT_PATH:(?2:UNDLE_SUPPORT))/}\'] + \'/lib/$2\''
        , name: 'Require \'Support/lib/\u2026\''
        , scope: 'source.ruby'
        , tabTrigger: 'sup'
        , uuid: '526FEEF9-9C52-4165-B814-7DAB441084D5'
        }
      , { content: 'if ${1:condition}\n\t$2\nelse\n\t$3\nend'
        , name: 'if \u2026 else \u2026 end'
        , scope: 'source.ruby'
        , tabTrigger: 'ife'
        , uuid: '667082E6-62C3-11D9-B8CF-000D93589AF6'
        }
      , { content: 'if ${1:condition}\n\t$0\nend'
        , name: 'if \u2026 end'
        , scope: 'source.ruby'
        , tabTrigger: 'if'
        , uuid: '6670835F-62C3-11D9-B8CF-000D93589AF6'
        }
      , { content: 'case ${1:object}\nwhen ${2:condition}\n\t$0\nend'
        , name: 'case \u2026 end'
        , scope: 'source.ruby'
        , tabTrigger: 'case'
        , uuid: '667083EE-62C3-11D9-B8CF-000D93589AF6'
        }
      , { content: '__END__\n'
        , name: '__END__'
        , scope: 'source.ruby'
        , tabTrigger: 'end'
        , uuid: '451A0596-1F72-4AFB-AF2F-45900FABB0F7'
        }
      , { content: 'alias_method :${1:new_name}, :${0:old_name}'
        , name: 'alias_method ..'
        , scope: 'source.ruby'
        , tabTrigger: 'am'
        , uuid: '988C8AEF-FC71-4455-9C4F-9338C05685A4'
        }
      , { content: 'if __FILE__ == \\$PROGRAM_NAME\n\t$0\nend'
        , name: 'application { .. }'
        , scope: 'source.ruby'
        , tabTrigger: 'app'
        , uuid: 'E16D24D2-CC7E-4786-BE0B-1725FC865D78'
        }
      , { content: 'assert`snippet_paren.rb`${1:test}, "${0:Failure message.}"`snippet_paren.rb end`'
        , name: 'assert(..)'
        , scope: 'source.ruby'
        , tabTrigger: 'as'
        , uuid: 'B32C147D-44A6-478A-9D5D-189D7831E9A7'
        }
      , { content: 'assert_equal`snippet_paren.rb`${1:expected}, ${0:actual}`snippet_paren.rb end`'
        , name: 'assert_equal(..)'
        , scope: 'source.ruby'
        , tabTrigger: 'ase'
        , uuid: '43A61A22-6BEE-4997-961C-1CDE739C05FE'
        }
      , { content: 'assert_in_delta`snippet_paren.rb`${1:expected_float}, ${2:actual_float}, ${0:2 ** -20}`snippet_paren.rb end`'
        , name: 'assert_in_delta(..)'
        , scope: 'source.ruby'
        , tabTrigger: 'asid'
        , uuid: '429D0EF5-580D-4166-8F79-713DE96B77F1'
        }
      , { content: 'assert_instance_of`snippet_paren.rb`${1:ExpectedClass}, ${0:actual_instance}`snippet_paren.rb end`'
        , name: 'assert_instance_of(..)'
        , scope: 'source.ruby'
        , tabTrigger: 'asio'
        , uuid: '0E831E03-67E1-4357-8323-C60685C23C4F'
        }
      , { content: 'assert_kind_of`snippet_paren.rb`${1:ExpectedKind}, ${0:actual_instance}`snippet_paren.rb end`'
        , name: 'assert_kind_of(..)'
        , scope: 'source.ruby'
        , tabTrigger: 'asko'
        , uuid: '671F05E2-D9CC-485E-BB1B-B13EF20FAC65'
        }
      , { content: 'assert_match`snippet_paren.rb`/${1:expected_pattern}/, ${0:actual_string}`snippet_paren.rb end`'
        , name: 'assert_match(..)'
        , scope: 'source.ruby'
        , tabTrigger: 'asm'
        , uuid: '711ED6C3-0F18-41FB-9A7D-3094BB319A85'
        }
      , { content: 'assert_nil`snippet_paren.rb`${0:instance}`snippet_paren.rb end`'
        , name: 'assert_nil(..)'
        , scope: 'source.ruby'
        , tabTrigger: 'asn'
        , uuid: '4C79256C-480A-459C-BDE8-BB0D972811DB'
        }
      , { content: 'assert_no_match`snippet_paren.rb`/${1:unexpected_pattern}/, ${0:actual_string}`snippet_paren.rb end`'
        , name: 'assert_no_match(..)'
        , scope: 'source.ruby'
        , tabTrigger: 'asnm'
        , uuid: 'A072BB1E-1DD1-45D3-9346-8CA3BA21B364'
        }
      , { content: 'assert_not_equal`snippet_paren.rb`${1:unexpected}, ${0:actual}`snippet_paren.rb end`'
        , name: 'assert_not_equal(..)'
        , scope: 'source.ruby'
        , tabTrigger: 'asne'
        , uuid: 'A243E96F-DC21-4AA0-B340-13A7674F6AFF'
        }
      , { content: 'assert_not_nil`snippet_paren.rb`${0:instance}`snippet_paren.rb end`'
        , name: 'assert_not_nil(..)'
        , scope: 'source.ruby'
        , tabTrigger: 'asnn'
        , uuid: '79FEC3CC-2A40-4611-9A85-ECDB22FE0701'
        }
      , { content: 'assert_not_same`snippet_paren.rb`${1:unexpected}, ${0:actual}`snippet_paren.rb end`'
        , name: 'assert_not_same(..)'
        , scope: 'source.ruby'
        , tabTrigger: 'asns'
        , uuid: 'F91C25EC-EC76-498B-BFB5-FDA8F57C5875'
        }
      , { content: 'assert_nothing_raised(${1:Exception}) { $0 }'
        , name: 'assert_nothing_raised(..) { .. }'
        , scope: 'source.ruby'
        , tabTrigger: 'asnr'
        , uuid: '82F8EEE0-2452-411E-8102-7BFDDBCA2E72'
        }
      , { content: 'assert_nothing_thrown { $0 }'
        , name: 'assert_nothing_thrown { .. }'
        , scope: 'source.ruby'
        , tabTrigger: 'asnt'
        , uuid: '33639D7A-BD8C-4396-9C44-307B8AC87C9E'
        }
      , { content: 'assert_operator`snippet_paren.rb`${1:left}, :${2:operator}, ${0:right}`snippet_paren.rb end`'
        , name: 'assert_operator(..)'
        , scope: 'source.ruby'
        , tabTrigger: 'aso'
        , uuid: '1B925A4D-8EE4-442B-9254-293599F5717F'
        }
      , { content: 'assert_raise(${1:Exception}) { $0 }'
        , name: 'assert_raise(..) { .. }'
        , scope: 'source.ruby'
        , tabTrigger: 'asr'
        , uuid: '68B21F6F-5D89-41FA-A19C-F29C2F912B4E'
        }
      , { content: 'assert_respond_to`snippet_paren.rb`${1:object}, :${0:method}`snippet_paren.rb end`'
        , name: 'assert_respond_to(..)'
        , scope: 'source.ruby'
        , tabTrigger: 'asrt'
        , uuid: '09A11FDA-49FC-4466-8787-8D1D5D111A89'
        }
      , { content: 'assert_same`snippet_paren.rb`${1:expected}, ${0:actual}`snippet_paren.rb end`'
        , name: 'assert_same(..)'
        , scope: 'source.ruby'
        , tabTrigger: 'ass'
        , uuid: '29340695-E426-4F77-8CF7-C59360A549F4'
        }
      , { content: 'assert_send`snippet_paren.rb`[${1:object}, :${2:message}, ${0:args}]`snippet_paren.rb end`'
        , name: 'assert_send(..)'
        , scope: 'source.ruby'
        , tabTrigger: 'ass'
        , uuid: '7850AD5C-A90D-4E2C-A931-EADFF8D3D9A3'
        }
      , { content: 'assert_throws(:${1:expected}) { $0 }'
        , name: 'assert_throws(..) { .. }'
        , scope: 'source.ruby'
        , tabTrigger: 'ast'
        , uuid: '05655BD8-23C6-445F-BFD1-420BF25C3030'
        }
      , { content: 'attr_accessor :${0:attr_names}'
        , name: 'attr_accessor ..'
        , scope: 'source.ruby'
        , tabTrigger: 'rw'
        , uuid: 'D7A7D3C9-1714-4C50-8CC0-D83A03883E8F'
        }
      , { content: 'attr_reader :${0:attr_names}'
        , name: 'attr_reader ..'
        , scope: 'source.ruby'
        , tabTrigger: 'r'
        , uuid: 'A150C2D8-25B3-4339-BC92-8A0160A70486'
        }
      , { content: 'attr_writer :${0:attr_names}'
        , name: 'attr_writer ..'
        , scope: 'source.ruby'
        , tabTrigger: 'w'
        , uuid: '3D383096-A03F-4EF8-9060-3C727045AB34'
        }
      , { content: 'TESTS = ${1:10_000}\nBenchmark.bmbm do |results|\n  $0\nend'
        , name: 'Benchmark.bmbm do .. end'
        , scope: 'source.ruby'
        , tabTrigger: 'bm-'
        , uuid: '942F20E2-C40A-44B8-A3F2-99AAC68CB534'
        }
      , { content: 'class ${1:${TM_FILENAME/(?:\\A|_)([A-Za-z0-9]+)(?:\\.rb)?/(?2::\\u$1)/g}}\n\t$0\nend'
        , name: 'class .. end'
        , scope: 'source.ruby'
        , tabTrigger: 'cla'
        , uuid: 'BF487539-8085-4FF4-8601-1AD20FABAEDC'
        }
      , { content: 'class ${1:${TM_FILENAME/(?:\\A|_)([A-Za-z0-9]+)(?:\\.rb)?/(?2::\\u$1)/g}}\n\tdef initialize${2/(^.*?\\S.*)|.*/(?1:\\()/}${2:args}${2/(^.*?\\S.*)|.*/(?1:\\))/}\n\t\t$0\n\tend\n\t\n\t\nend'
        , name: 'class .. initialize .. end'
        , scope: 'source.ruby'
        , tabTrigger: 'cla'
        , uuid: '83EED068-8C1C-4BAF-9893-902DC00616AB'
        }
      , { content: 'class ${1:BlankSlate}\n\tinstance_methods.each { |meth| undef_method(meth) unless meth =~ /\\A__/ }\n\t\n\tdef initialize${2/(^.*?\\S.*)|.*/(?1:\\()/}${2:args}${2/(^.*?\\S.*)|.*/(?1:\\))/}\n\t\t@${3:delegate} = ${4:delegate_object}\n\t\t\n\t\t$0\n\tend\n\t\n\tdef method_missing(meth, *args, &block)\n\t\t@${3:delegate}.send(meth, *args, &block)\n\tend\n\t\n\t\nend'
        , name: 'class BlankSlate .. initialize .. end'
        , scope: 'source.ruby'
        , tabTrigger: 'cla'
        , uuid: 'E98FB8F9-7302-431D-8BF2-275A68A6126C'
        }
      , { content: 'split("::").inject(Object) { |par, const| par.const_get(const) }'
        , name: 'class_from_name()'
        , scope: 'source.ruby'
        , tabTrigger: 'clafn'
        , uuid: '2DBEE50B-3097-4A57-AB48-3586CF392D8B'
        }
      , { content: 'Marshal.load(Marshal.dump(${0:obj_to_copy}))'
        , name: 'deep_copy(..)'
        , scope: 'source.ruby'
        , tabTrigger: 'deec'
        , uuid: '0BA2B2F1-E767-4A03-9791-0AC0183251F1'
        }
      , { content: 'def ${1:method_name}\n\t$0\nend'
        , name: 'def \u2026 end'
        , scope: 'source.ruby'
        , tabTrigger: 'def'
        , uuid: '4E9A7A73-875C-11D9-897C-000393CBCE2E'
        }
      , { content: 'def method_missing(meth, *args, &blk)\n\t$0\nend'
        , name: 'def method_missing .. end'
        , scope: 'source.ruby'
        , tabTrigger: 'defmm'
        , uuid: '87D5F8AD-8DA6-4AED-A0D8-B51CAC980445'
        }
      , { content: 'def self.${1:class_method_name}\n\t$0\nend'
        , name: 'def self .. end'
        , scope: 'source.ruby'
        , tabTrigger: 'defs'
        , uuid: '7C6E88FA-CA0E-4110-8C75-A94E54286A75'
        }
      , { content: 'def test_${1:case_name}\n\t$0\nend'
        , name: 'def test_ .. end'
        , scope: 'source.ruby'
        , tabTrigger: 'deft'
        , uuid: '00F66D41-25AF-4597-B67D-E540965A5222'
        }
      , { content: 'def_delegator :${1:@del_obj}, :${2:del_meth}, :${3:new_name}'
        , name: 'def_delegator ..'
        , scope: 'source.ruby'
        , tabTrigger: 'defd'
        , uuid: 'C44ED391-614F-4BA2-BB0F-87668EEA9954'
        }
      , { content: 'def_delegators :${1:@del_obj}, :${0:del_methods}'
        , name: 'def_delegators ..'
        , scope: 'source.ruby'
        , tabTrigger: 'defds'
        , uuid: '4A6EFD6B-88E2-4822-AD48-03460EDBC796'
        }
      , { content: 'File.dirname(__FILE__)'
        , name: 'directory()'
        , scope: 'source.ruby'
        , tabTrigger: 'dir'
        , uuid: '678BDB83-FBBD-4E8E-BE0B-E1A98AECB247'
        }
      , { content: 'elsif ${1:condition}\n\t$0'
        , name: 'elsif ...'
        , scope: 'source.ruby'
        , tabTrigger: 'elsif'
        , uuid: 'CD1609FA-47DA-4EE4-9C5B-5C56D953F5B1'
        }
      , { content: 'extend Forwardable'
        , name: 'extend Forwardable'
        , scope: 'source.ruby'
        , tabTrigger: 'Forw-'
        , uuid: '7F46C90A-595B-4B83-A4F7-058F63CE4218'
        }
      , { content: 'inject(Array.new) { |${1:arr}, ${2:a}| ${1:arr}.push(*${2:a}) }'
        , name: 'flatten_once()'
        , scope: 'source.ruby'
        , tabTrigger: 'flao'
        , uuid: '3DDB99C4-486D-4C11-A217-5680FDD8EC19'
        }
      , { content: 'flunk`snippet_paren.rb`"${0:Failure message.}"`snippet_paren.rb end`'
        , name: 'flunk(..)'
        , scope: 'source.ruby'
        , tabTrigger: 'fl'
        , uuid: 'DB457094-1AC9-4856-AEFC-43A9576B6775'
        }
      , { content: ':${1:key} => ${2:"${3:value}"}${4:, }'
        , name: 'Hash Pair \u2014 :key => "value"'
        , scope: 'source.ruby'
        , tabTrigger: ':'
        , uuid: '840B9C4C-7037-4C3B-9028-EB9DC75EDB3E'
        }
      , { content: 'include Comparable\n\ndef <=>(other)\n\t$0\nend'
        , name: 'include Comparable ..'
        , scope: 'source.ruby'
        , tabTrigger: 'Comp'
        , uuid: '6C9D6B3D-D8E9-4606-9534-577C8D21FFF6'
        }
      , { content: 'include Enumerable\n\ndef each(&block)\n\t$0\nend'
        , name: 'include Enumerable ..'
        , scope: 'source.ruby'
        , tabTrigger: 'Enum'
        , uuid: 'AAD5D511-6BE7-41DA-8F2B-1593A48FBB08'
        }
      , { content: 'loop { $0 }'
        , name: 'loop { .. }'
        , scope: 'source.ruby'
        , tabTrigger: 'loo'
        , uuid: '567E3D18-BF2B-4379-8927-2777EC9F495E'
        }
      , { content: 'File.open(${1:"${2:path/to/file}.dump"}, "wb") { |${3:file}| Marshal.dump(${4:obj}, ${3:file}) }'
        , name: 'Marshal.dump(.., file)'
        , scope: 'source.ruby'
        , tabTrigger: 'Md'
        , uuid: '0CB48BCA-3F6E-4AE0-85BC-08A1D2508216'
        }
      , { content: 'File.open(${1:"${2:path/to/file}.dump"}, "rb") { |${3:file}| Marshal.load(${3:file}) }'
        , name: 'Marshal.load(obj)'
        , scope: 'source.ruby'
        , tabTrigger: 'Ml'
        , uuid: '20AAD0BC-075D-4EC0-9057-E3E5E62C4125'
        }
      , { content: 'module ${1:${TM_FILENAME/(?:\\A|_)([A-Za-z0-9]+)(?:\\.rb)?/(?2::\\u$1)/g}}\n\tmodule ClassMethods\n\t\t$0\n\tend\n\t\n\tmodule InstanceMethods\n\t\t\n\tend\n\t\n\tdef self.included(receiver)\n\t\treceiver.extend         ClassMethods\n\t\treceiver.send :include, InstanceMethods\n\tend\nend'
        , name: 'module .. ClassMethods .. end'
        , scope: 'source.ruby'
        , tabTrigger: 'mod'
        , uuid: 'A71A18CF-2D71-4BFF-AA0C-D9B8C59BC4EB'
        }
      , { content: 'module ${1:${TM_FILENAME/(?:\\A|_)([A-Za-z0-9]+)(?:\\.rb)?/(?2::\\u$1)/g}}\n\t$0\nend'
        , name: 'module .. end'
        , scope: 'source.ruby'
        , tabTrigger: 'mod'
        , uuid: '2B73EC5F-06D2-460C-A14F-6FA05AFCF0CC'
        }
      , { content: 'module ${1:${TM_FILENAME/(?:\\A|_)([A-Za-z0-9]+)(?:\\.rb)?/(?2::\\u$1)/g}}\n\tmodule_function\n\t\n\t$0\nend'
        , name: 'module .. module_function .. end'
        , scope: 'source.ruby'
        , tabTrigger: 'mod'
        , uuid: '0E85EC81-2FAB-4648-B590-119CC1BB6E41'
        }
      , { content: 'namespace :${1:${TM_FILENAME/\\.\\w+//}} do\n\t$0\nend'
        , name: 'namespace :.. do .. end'
        , scope: 'source.ruby'
        , tabTrigger: 'nam'
        , uuid: '05EE1046-5ED7-48F5-8693-1F066163B2F4'
        }
      , { content: 'require "optparse"\n\noptions = {${1::default => "args"}}\n\nARGV.options do |opts|\n\topts.banner = "Usage:  #{File.basename(\\$PROGRAM_NAME)} [OPTIONS]${2/^\\s*$|(.*\\S.*)/(?1: )/}${2:OTHER_ARGS}"\n\t\n\topts.separator ""\n\topts.separator "Specific Options:"\n\t\n\t$0\n\t\n\topts.separator "Common Options:"\n\t\n\topts.on( "-h", "--help",\n\t         "Show this message." ) do\n\t\tputs opts\n\t\texit\n\tend\n\t\n\tbegin\n\t\topts.parse!\n\trescue\n\t\tputs opts\n\t\texit\n\tend\nend\n'
        , name: 'option_parse { .. }'
        , scope: 'source.ruby'
        , tabTrigger: 'optp'
        , uuid: 'C3C48948-4F49-484E-A8DE-DEB44723099E'
        }
      , { content: 'File.join(File.dirname(__FILE__), *%w[${1:rel path here}])'
        , name: 'path_from_here( .. )'
        , scope: 'source.ruby'
        , tabTrigger: 'patfh'
        , uuid: 'A4E89D97-D5ED-48BB-B5FF-1BFB79211FCD'
        }
      , { content: 'PStore.new(${1:"${2:file_name.pstore}"})'
        , name: 'PStore.new( .. )'
        , scope: 'source.ruby'
        , tabTrigger: 'Pn-'
        , uuid: '5B46ECFD-23A4-4F0C-9951-F64C19C72C2B'
        }
      , { content: 'sort_by { rand }'
        , name: 'randomize()'
        , scope: 'source.ruby'
        , tabTrigger: 'ran'
        , uuid: 'B0CE57EC-FB2E-4482-8CCE-448DC2588715'
        }
      , { content: 'results.report("${1:name}:") { TESTS.times { $0 } }'
        , name: 'results.report(..) { .. }'
        , scope: 'source.ruby'
        , tabTrigger: 'rep'
        , uuid: '1C60D589-DD46-4109-90CA-6B34AEA2F298'
        }
      , { content: 'class << self; self end'
        , name: 'singleton_class()'
        , scope: 'source.ruby'
        , tabTrigger: 'sinc'
        , uuid: 'B46D35B8-5DEB-4C10-A110-BA1965A2EB9C'
        }
      , { content: 'transaction${1/(^.*?\\S.*)|.*/(?1:\\()/}${1:true}${1/(^.*?\\S.*)|.*/(?1:\\))/} { $0 }'
        , name: 'transaction( .. ) { .. }'
        , scope: 'source.ruby'
        , tabTrigger: 'tra'
        , uuid: '46BF99AD-E172-4D49-BCF7-072F4730E1D9'
        }
      , { content: 'ARGF.each_line$1 do |${2:line}|\n\t$0\nend'
        , name: 'unix_filter { .. }'
        , scope: 'source.ruby'
        , tabTrigger: 'unif'
        , uuid: '8CEF9711-88D5-4202-AFB9-29EF4EFD25C1'
        }
      , { content: 'unless ${1:condition}\n\t$0\nend'
        , name: 'unless \u2026 end'
        , scope: 'source.ruby'
        , tabTrigger: 'unless'
        , uuid: 'F53E098D-D08E-4CE2-990A-B0BD70E60614'
        }
      , { content: 'until ${1:condition}\n\t$0\nend'
        , name: 'until ... end'
        , scope: 'source.ruby'
        , tabTrigger: 'until'
        , uuid: '488B387C-50C0-4B2D-9260-5A7E7EAF9B42'
        }
      , { content: 'opts.on( "-${1:o}", "--${2:long-option-name}"${3/^\\s*$|(.*\\S.*)/(?1:, )/}${3:String},\n         "${4:Option description.}" ) do |${6:opt}|\n\t$0\nend'
        , name: 'option(..)'
        , scope: 'source.ruby'
        , tabTrigger: 'opt'
        , uuid: '209D5D73-7A77-4931-A158-3FB6D5B48A88'
        }
      , { content: 'if ARGV.$1\n\tabort "Usage:  #{\\$PROGRAM_NAME} ${2:ARGS_GO_HERE}"\nend'
        , name: 'usage_if()'
        , scope: 'source.ruby'
        , tabTrigger: 'usai'
        , uuid: '21C0D711-F32A-4665-AA0D-B136F9DD3945'
        }
      , { content: 'unless ARGV.$1\n\tabort "Usage:  #{\\$PROGRAM_NAME} ${2:ARGS_GO_HERE}"\nend'
        , name: 'usage_unless()'
        , scope: 'source.ruby'
        , tabTrigger: 'usau'
        , uuid: '49D69DEC-6991-49F4-8D9B-BA60BFDD3D17'
        }
      , { content: 'when ${1:condition}\n\t$0'
        , name: 'when \u2026'
        , scope: 'source.ruby'
        , tabTrigger: 'when'
        , uuid: '48D8E498-C9A5-4B1B-9A18-71A5860276FB'
        }
      , { content: 'while ${1:condition}\n\t$0\nend'
        , name: 'while ... end'
        , scope: 'source.ruby'
        , tabTrigger: 'while'
        , uuid: 'D121FC61-96A4-4B8F-8709-280EDA876FF3'
        }
      , { content: 'REXML::Document.new(File.read(${1:"${2:path/to/file}"}))'
        , name: 'xmlread(..)'
        , scope: 'source.ruby'
        , tabTrigger: 'xml-'
        , uuid: 'B904D4AA-D15D-48A4-8EB2-563BAF489332'
        }
      , { content: 'elements.each(${1:"${2://XPath}"}) do |${3:node}|\n\t$0\nend'
        , name: 'xpath(..) { .. }'
        , scope: 'source.ruby'
        , tabTrigger: 'xpa'
        , uuid: 'CC300D44-6C3F-4F6C-A8AB-86F5A2DC57CF'
        }
      , { content: 'File.open(${1:"${2:path/to/file}.yaml"}, "w") { |${3:file}| YAML.dump(${4:obj}, ${3:file}) }'
        , name: 'YAML.dump(.., file)'
        , scope: 'source.ruby'
        , tabTrigger: 'Yd-'
        , uuid: '3BA6762A-BB6B-489E-8006-F30F386AEF48'
        }
      , { content: 'File.open(${1:"${2:path/to/file}.yaml"}) { |${3:file}| YAML.load(${3:file}) }'
        , name: 'YAML.load(file)'
        , scope: 'source.ruby'
        , tabTrigger: 'Yl-'
        , uuid: '8343ACF4-EEB7-44B5-B835-94826466D4D5'
        }
      , { content: 'assert(${1:var} = assigns(:${1}), "Cannot find @${1}")\n$0'
        , name: 'assert(var = assigns(:var))'
        , scope: 'source.ruby'
        , tabTrigger: 'asg'
        , uuid: 'FE9C4B4E-860D-49F0-AAF7-5582B98F5F54'
        }
      , { content: 'assert_difference "${1:Model}.${2:count}", ${3:1} do\n  $0\nend'
        , name: 'assert_difference'
        , scope: 'source.ruby'
        , tabTrigger: 'asd'
        , uuid: '30BEA6FB-301C-4460-93EC-FA3404688962'
        }
      , { content: 'assert_no_difference "${1:Model}.${2:count}" do\n  $0\nend'
        , name: 'assert_no_difference'
        , scope: 'source.ruby'
        , tabTrigger: 'asnd'
        , uuid: '5C6F4462-70E6-40B4-B3F2-F371656E7784'
        }
      , { content: 'class ${1:Model}Controller < ApplicationController\n\tbefore_filter :find_${2:model}\n\n\t$0\n\n\tprivate\n\tdef find_${2}\n\t\t@$2 = ${3:$1}.find(params[:id]) if params[:id]\n\tend\nend'
        , name: 'Create controller class'
        , scope: 'source.ruby'
        , tabTrigger: 'cla'
        , uuid: '4B3F798E-E3B6-48C8-8C2F-CB8631011638'
        }
      , { content: 'require File.dirname(__FILE__) + \'/../test_helper\'\n\nclass ${1:Model}ControllerTest < ActionController::TestCase\n\tdeft$0\nend\n'
        , name: 'Create functional test class'
        , scope: 'source.ruby'
        , tabTrigger: 'cla'
        , uuid: 'F60D0630-CBF5-4283-9D20-FA46C787A88D'
        }
      ]
   , key: 
      [ { content: ' => '
        , keyEquivalent: '^l'
        , name: 'Hash Pointer \u2014 =>'
        , scope: 'source.ruby'
        , uuid: 'B9E3A6DF-875D-11D9-897C-000393CBCE2E'
        }
      ]
   }
, 'source.plist.tm-grammar string.quoted.single, source.plist.tm-grammar string.regexp.oniguruma.single': 
   { tab: []
   , key: 
      [ { content: '\'\''
        , keyEquivalent: '\''
        , name: 'Grammar - Single Quotes'
        , scope: 'source.plist.tm-grammar string.quoted.single, source.plist.tm-grammar string.regexp.oniguruma.single'
        , uuid: '012C6C9B-07CC-40B8-A10B-B95B253A94A1'
        }
      ]
   }
, 'source.plist.tm-grammar meta.array.patterns': 
   { tab: 
      [ { content: '{\tname = \'${1:name}\';\n\tmatch = \'${2:pattern}\';\n},'
        , name: 'Rule \u2014 Match'
        , scope: 'source.plist.tm-grammar meta.array.patterns'
        , tabTrigger: 'mat'
        , uuid: 'D9B7683F-308C-4A42-92FB-6DFC06240A92'
        }
      , { content: '{\tname = \'${1:name}\';\n\tbegin = \'$2\';\n\tend = \'$3\';\n},'
        , name: 'Rule \u2014 Begin / End'
        , scope: 'source.plist.tm-grammar meta.array.patterns'
        , tabTrigger: 'beg'
        , uuid: '0D8A14ED-0701-4AD8-8A9C-15AD1BA60D8D'
        }
      ]
   , key: []
   }
, 'source.plist.tm-grammar meta.dictionary.repository -meta.value-pair.repository-item': 
   { tab: 
      [ { content: '${1:rule_name} = {\n\tpatterns = (\n\t\t$0\n\t);\n};'
        , name: 'Patterns (Repository)'
        , scope: 'source.plist.tm-grammar meta.dictionary.repository -meta.value-pair.repository-item'
        , tabTrigger: 'pat'
        , uuid: 'D07ABF67-A3E1-4454-BAEE-FF5C349CB049'
        }
      , { content: '${1:rule_name} = {\n\tname = \'${2:name}\';\n\tbegin = \'$3\';\n\tend = \'$4\';\n};'
        , name: 'Rule \u2014 Begin / End (Repository)'
        , scope: 'source.plist.tm-grammar meta.dictionary.repository -meta.value-pair.repository-item'
        , tabTrigger: 'beg'
        , uuid: 'A611946B-D67F-4B16-ABC7-ECBBCC0F6331'
        }
      , { content: '${1:rule_name} = {\n\tname = \'${2:name}\';\n\tmatch = \'${3:pattern}\';\n};'
        , name: 'Rule \u2014 Match (Repository)'
        , scope: 'source.plist.tm-grammar meta.dictionary.repository -meta.value-pair.repository-item'
        , tabTrigger: 'mat'
        , uuid: 'FD59E166-A9BD-40FD-821F-E8AFEA5175A0'
        }
      ]
   , key: []
   }
, 'source.plist.tm-grammar meta.dictionary.rule': 
   { tab: 
      [ { content: 'begin = \'$1\';\nend = \'$2\';'
        , name: 'Rule \u2014 Begin / End (Inside Rule)'
        , scope: 'source.plist.tm-grammar meta.dictionary.rule'
        , tabTrigger: 'beg'
        , uuid: '1473BF02-466B-4F5F-B694-81703E4B6E76'
        }
      , { content: 'match = \'${1:pattern}\';'
        , name: 'Rule \u2014 Match (Inside Rule)'
        , scope: 'source.plist.tm-grammar meta.dictionary.rule'
        , tabTrigger: 'mat'
        , uuid: 'C145B244-D9A6-43C6-9011-B84D00F7FE96'
        }
      ]
   , key: []
   }
, 'source.c, source.c++, source.objc, source.objc++, (source.c | source.c++ | source.objc | source.objc++) & comment.block.preprocessor': 
   { tab: []
   , key: 
      [ { content: '#endif\n'
        , keyEquivalent: '~@.'
        , name: '#endif'
        , scope: 'source.c, source.c++, source.objc, source.objc++, (source.c | source.c++ | source.objc | source.objc++) & comment.block.preprocessor'
        , uuid: '5039DA0E-538B-48E2-A45A-E5A27787E765'
        }
      ]
   }
, 'source.c, source.c++, source.objc, source.objc++': 
   { tab: 
      [ { content: '#ifndef ${1/([A-Za-z0-9_]+).*/$1/}\n#define ${1:SYMBOL} ${2:value}\n#endif'
        , name: '#ifndef \u2026 #define \u2026 #endif'
        , scope: 'source.c, source.c++, source.objc, source.objc++'
        , tabTrigger: 'def'
        , uuid: '680358EA-B24B-4662-8DDA-AD42288795E4'
        }
      ]
   , key: []
   }
, 'source.c, source.objc, source.c++, source.objc++': 
   { tab: 
      [ { content: '#if 0\n${1:#pragma mark -\n}#pragma mark $2\n#endif\n\n$0'
        , name: '#pragma mark'
        , scope: 'source.c, source.objc, source.c++, source.objc++'
        , tabTrigger: 'mark'
        , uuid: 'ADD104E9-830A-4AC4-AAF4-DB6D3B0B7506'
        }
      , { content: 'int main (int argc, char const${TM_C_POINTER: *}argv[])\n{\n\t${0:/* code */}\n\treturn 0;\n}'
        , name: 'main()'
        , scope: 'source.c, source.objc, source.c++, source.objc++'
        , tabTrigger: 'main'
        , uuid: 'BC8B81AB-5F16-11D9-B9C3-000D93589AF6'
        }
      , { content: 'for(size_t ${2:i} = 0; $2 < ${1:count}; ${3:++$2})\n{\n\t${0:/* code */}\n}'
        , name: 'For Loop'
        , scope: 'source.c, source.objc, source.c++, source.objc++'
        , tabTrigger: 'for'
        , uuid: '78EF7134-0859-4475-89C3-30927865E855'
        }
      , { content: 'do {\n\t${0:/* code */}\n} while(${1:/* condition */});'
        , name: 'Do While Loop'
        , scope: 'source.c, source.objc, source.c++, source.objc++'
        , tabTrigger: 'do'
        , uuid: 'D1F5A25E-A70F-11D9-A11A-000A95A89C98'
        }
      , { content: 'fprintf(${1:stderr}, "${2:%s}\\\\n"${2/([^%]|%%)*(%.)?.*/(?2:, :\\);)/}$3${2/([^%]|%%)*(%.)?.*/(?2:\\);)/}'
        , name: 'fprintf \u2026'
        , scope: 'source.c, source.objc, source.c++, source.objc++'
        , tabTrigger: 'fprintf'
        , uuid: 'FE378349-BD63-4390-9A3B-516F7FF7F413'
        }
      , { content: 'if(${1:/* condition */})\n{\n\t${0:/* code */}\n}'
        , name: 'If Condition'
        , scope: 'source.c, source.objc, source.c++, source.objc++'
        , tabTrigger: 'if'
        , uuid: 'F060AC09-C289-11D9-8CEF-000D93589AF6'
        }
      , { content: '#ifndef ${1:`#!/usr/bin/env ruby -wKU -riconv\nname = ENV["TM_FILENAME"] || "untitled"\nname = Iconv.iconv("ASCII//TRANSLIT", "UTF-8", name).first\nname = name.gsub(/[^a-z0-9]+/i, "_")\nuuid = (rand * 2821109907455).round.to_s(36)\nprint "#{name}_#{uuid}".tr("[a-z]", "[A-Z]")\n`}\n#define $1\n\n$0\n\n#endif /* end of include guard: $1 */\n'
        , name: 'Header Include-Guard'
        , scope: 'source.c, source.objc, source.c++, source.objc++'
        , tabTrigger: 'once'
        , uuid: '74AF5E38-994C-4641-96F0-EB98A2183F60'
        }
      , { content: 'printf("${1:%s}\\\\n"${1/([^%]|%%)*(%.)?.*/(?2:, :\\);)/}$2${1/([^%]|%%)*(%.)?.*/(?2:\\);)/}'
        , name: 'printf \u2026'
        , scope: 'source.c, source.objc, source.c++, source.objc++'
        , tabTrigger: 'printf'
        , uuid: '5A086BE2-BCF6-11D9-82A9-000D93589AF6'
        }
      , { content: 'struct ${1:${TM_FILENAME/(.+)\\..+|.*/(?1:\\L$1_t:name)/}}\n{\n\t${0:/* data */}\n};'
        , name: 'Struct'
        , scope: 'source.c, source.objc, source.c++, source.objc++'
        , tabTrigger: 'st'
        , uuid: '1D14B92E-8819-11D9-8661-000D93589AF6'
        }
      , { content: 'typedef ${1:int} ${2:MyCustomType};'
        , name: 'Typedef'
        , scope: 'source.c, source.objc, source.c++, source.objc++'
        , tabTrigger: 'td'
        , uuid: '08E16CAE-DBD8-4570-B778-9E0E0EFFF80C'
        }
      ]
   , key: []
   }
, 'source.c++, source.objc++': 
   { tab: 
      [ { content: 'class ${1:${TM_FILENAME/(.+)\\..+|.*/(?1:\\L$1_t:name)/}}\n{\npublic:\n\t${1/(\\w+).*/$1/} (${2:arguments});\n\tvirtual ~${1/(\\w+).*/$1/} ();\n\nprivate:\n\t${0:/* data */}\n};'
        , name: 'Class'
        , scope: 'source.c++, source.objc++'
        , tabTrigger: 'cl'
        , uuid: '523B30D4-C28A-11D9-8CEF-000D93589AF6'
        }
      , { content: 'namespace${1/.+/ /m}${1:${TM_FILENAME/^((.*?)\\..*)?$/(?1:\\L$2:my)/}}\n{\n\t$0\n}${1/.+/ \\/* /m}$1${1/.+/ *\\/ /m}\n'
        , name: 'Namespace'
        , scope: 'source.c++, source.objc++'
        , tabTrigger: 'ns'
        , uuid: 'CEE5F928-47A2-4648-96F0-99FF5C2A7419'
        }
      , { content: 'std::vector<char> v;\nif(FILE${TM_C_POINTER: *}fp = fopen(${1:"filename"}, "r"))\n{\n\tchar buf[1024];\n\twhile(size_t len = fread(buf, 1, sizeof(buf), fp))\n\t\tv.insert(v.end(), buf, buf + len);\n\tfclose(fp);\n}'
        , name: 'Read File Into Vector'
        , scope: 'source.c++, source.objc++'
        , tabTrigger: 'readfile'
        , uuid: 'E8C3B596-9045-11D9-AB38-000D93589AF6'
        }
      , { content: 'std::map<${1:key}, ${2:value}> map$0;'
        , name: 'std::map'
        , scope: 'source.c++, source.objc++'
        , tabTrigger: 'map'
        , uuid: 'A295A902-ACAF-11D9-987D-000D93589AF6'
        }
      , { content: 'std::vector<${1:char}> v$0;'
        , name: 'std::vector'
        , scope: 'source.c++, source.objc++'
        , tabTrigger: 'vector'
        , uuid: '5E468268-ACAF-11D9-987D-000D93589AF6'
        }
      ]
   , key: []
   }
, 'source.css': 
   { tab: 
      [ { content: '${1:!important}'
        , keyEquivalent: ''
        , name: '!important CSS'
        , scope: 'source.css'
        , tabTrigger: '!'
        , uuid: 'EF1F2D38-A71A-4D1D-9B07-B1CBB6D84B81'
        }
      , { content: 'background-attachment: ${1:scroll/fixed};$0'
        , name: 'background-attachment: scroll/fixed'
        , scope: 'source.css'
        , tabTrigger: 'background'
        , uuid: '9E194D74-B73B-4D2B-A89F-51F7468A3E97'
        }
      , { content: 'background-color: #${1:DDD};$0'
        , name: 'background-color: hex'
        , scope: 'source.css'
        , tabTrigger: 'background'
        , uuid: '32B7B151-17CB-4DA4-AC0B-7D02BC606403'
        }
      , { content: 'background-color: ${1:red};$0'
        , name: 'background-color: name'
        , scope: 'source.css'
        , tabTrigger: 'background'
        , uuid: '913410E0-623A-43F0-B71F-2E8FB9D5EBC8'
        }
      , { content: 'background-color: rgb(${1:255},${2:255},${3:255});$0'
        , name: 'background-color: rgb'
        , scope: 'source.css'
        , tabTrigger: 'background'
        , uuid: '12241B4B-197C-41AF-ACC2-6B9A7AEC7039'
        }
      , { content: 'background-color: transparent;$0'
        , name: 'background-color: transparent'
        , scope: 'source.css'
        , tabTrigger: 'background'
        , uuid: 'C71B1388-2815-4CAE-8652-CD159095AEAD'
        }
      , { content: 'background-image: none;$0'
        , name: 'background-image: none'
        , scope: 'source.css'
        , tabTrigger: 'background'
        , uuid: '7D71DF8B-492E-493D-BD94-1A4AFCCDCBBF'
        }
      , { content: 'background-image: url($1);$0'
        , name: 'background-image: url'
        , scope: 'source.css'
        , tabTrigger: 'background'
        , uuid: '978CBFF6-62D6-45B1-93F7-5644E1C6262B'
        }
      , { content: 'background-position: ${1:top left/top center/top right/center left/center center/center right/bottom left/bottom center/bottom right/x-% y-%/x-pos y-pos};$0'
        , name: 'background-position: position'
        , scope: 'source.css'
        , tabTrigger: 'background'
        , uuid: 'E198D2D5-6B52-42FD-BCBC-01B0A7E5E80E'
        }
      , { content: 'background-repeat: ${1:repeat/repeat-x/repeat-y/no-repeat};$0'
        , name: 'background-repeat: r/r-x/r-y/n-r'
        , scope: 'source.css'
        , tabTrigger: 'background'
        , uuid: '4EE66583-26BE-4DBA-BD18-8DAF593835F9'
        }
      , { content: 'background:${6: #${1:DDD}} url($2) ${3:repeat/repeat-x/repeat-y/no-repeat} ${4:scroll/fixed} ${5:top left/top center/top right/center left/center center/center right/bottom left/bottom center/bottom right/x-% y-%/x-pos y-pos};$0'
        , name: 'background: color image repeat attachment position'
        , scope: 'source.css'
        , tabTrigger: 'background'
        , uuid: 'D09967B1-2215-4B10-A331-7A372281DDA6'
        }
      , { content: 'border-bottom-color: #${1:999};$0'
        , name: 'border-bottom-color: color'
        , scope: 'source.css'
        , tabTrigger: 'border'
        , uuid: '05AFB9EB-F4AB-4F86-8170-535CF508176C'
        }
      , { content: 'border-bottom-style: ${1:none/hidden/dotted/dashed/solid/double/groove/ridge/inset/outset};$0'
        , name: 'border-bottom-style: style'
        , scope: 'source.css'
        , tabTrigger: 'border'
        , uuid: '39FA441C-3A8F-49D4-BBFE-270B4C962782'
        }
      , { content: 'border-bottom-width: ${1:1}px ${2:solid} #${3:999};$0'
        , name: 'border-bottom-width: size'
        , scope: 'source.css'
        , tabTrigger: 'border'
        , uuid: '6F1126A9-5916-4E6F-8812-AB82C4638B6B'
        }
      , { content: 'border-bottom: ${1:1}px ${2:solid} #${3:999};$0'
        , name: 'border-bottom: size style color'
        , scope: 'source.css'
        , tabTrigger: 'border'
        , uuid: '1998EF7F-D855-4EAF-8CE0-D76CE8C905A4'
        }
      , { content: 'border-color: ${1:999};$0'
        , name: 'border-color: color'
        , scope: 'source.css'
        , tabTrigger: 'border'
        , uuid: 'AB0759F4-4243-4807-B297-2902459EBE02'
        }
      , { content: 'border-right-color: #${1:999};$0'
        , name: 'border-left-color: color'
        , scope: 'source.css'
        , tabTrigger: 'border'
        , uuid: '189DD463-0331-4B99-8CA2-ADEEF7CC078D'
        }
      , { content: 'border-left-style: ${1:none/hidden/dotted/dashed/solid/double/groove/ridge/inset/outset};$0'
        , name: 'border-left-style: style'
        , scope: 'source.css'
        , tabTrigger: 'border'
        , uuid: '8AD77320-0E31-48B9-94A9-982FD8DD1885'
        }
      , { content: 'border-left-width: ${1:1}px'
        , name: 'border-left-width: size'
        , scope: 'source.css'
        , tabTrigger: 'border'
        , uuid: '1A667AFE-208F-4697-AD44-3FA1A23AA4C7'
        }
      , { content: 'border-left: ${1:1}px ${2:solid} #${3:999};$0'
        , name: 'border-left: size style color'
        , scope: 'source.css'
        , tabTrigger: 'border'
        , uuid: 'BDA03041-39C6-461C-A6F3-F6145D99AB5E'
        }
      , { content: 'border-right-color: #${1:999};$0'
        , name: 'border-right-color: color'
        , scope: 'source.css'
        , tabTrigger: 'border'
        , uuid: '321FFAF7-5699-45E6-8696-DE84AD607690'
        }
      , { content: 'border-right-style: ${1:none/hidden/dotted/dashed/solid/double/groove/ridge/inset/outset};$0'
        , name: 'border-right-style: style'
        , scope: 'source.css'
        , tabTrigger: 'border'
        , uuid: '6AE8DB39-F8E2-4DC9-ADBA-460E952439D8'
        }
      , { content: 'border-right-width: ${1:1}px'
        , name: 'border-right-width: size'
        , scope: 'source.css'
        , tabTrigger: 'border'
        , uuid: '8B059A97-7F2C-48CD-8422-0ECAB678E8AE'
        }
      , { content: 'border-right: ${1:1}px ${2:solid} #${3:999};$0'
        , name: 'border-right: size style color'
        , scope: 'source.css'
        , tabTrigger: 'border'
        , uuid: '5FFC4EDE-9AEE-4854-BA78-34BD98BE7FBE'
        }
      , { content: 'border-style: ${1:none/hidden/dotted/dashed/solid/double/groove/ridge/inset/outset};$0'
        , name: 'border-style: style'
        , scope: 'source.css'
        , tabTrigger: 'border'
        , uuid: 'E4BD9171-E053-4EEF-8631-CFC74F1DCB97'
        }
      , { content: 'border-top-color: #${1:999};$0'
        , name: 'border-top-color: color'
        , scope: 'source.css'
        , tabTrigger: 'border'
        , uuid: 'DAF7114F-B5DC-4E70-A7CD-66FF028F93B1'
        }
      , { content: 'border-top-style: ${1:none/hidden/dotted/dashed/solid/double/groove/ridge/inset/outset};$0'
        , name: 'border-top-style: style'
        , scope: 'source.css'
        , tabTrigger: 'border'
        , uuid: 'C5039010-E264-4D3D-A12E-02C2DB7DC4BF'
        }
      , { content: 'border-top-width: ${1:1}px'
        , name: 'border-top-width: size'
        , scope: 'source.css'
        , tabTrigger: 'border'
        , uuid: 'EE19367C-6634-4854-910D-90C6F5752A46'
        }
      , { content: 'border-top: ${1:1}px ${2:solid} #${3:999};$0'
        , name: 'border-top: size style color'
        , scope: 'source.css'
        , tabTrigger: 'border'
        , uuid: '0FEBF51B-77B0-4D38-9CDB-276744CAF455'
        }
      , { content: 'border-width: ${1:1px};$0'
        , name: 'border-width: size'
        , scope: 'source.css'
        , tabTrigger: 'border'
        , uuid: '979C3D46-E8B1-484D-9DBB-E3B1FCD3BCF9'
        }
      , { content: 'border: ${1:1px} ${2:solid} #${3:999};$0'
        , name: 'border: size style color'
        , scope: 'source.css'
        , tabTrigger: 'border'
        , uuid: 'A2EA7266-AE50-4987-A86B-E3C4DFA5B643'
        }
      , { content: 'clear: ${1:left/right/both/none};$0'
        , name: 'clear: value'
        , scope: 'source.css'
        , tabTrigger: 'clear'
        , uuid: '8E9366D7-BB0B-456C-B9F3-0CE8072A10C3'
        }
      , { content: 'color: #${1:DDD};$0'
        , name: 'color: hex'
        , scope: 'source.css'
        , tabTrigger: 'color'
        , uuid: 'D69E7EB0-07E2-48A3-AD32-A7C3E6CAFBBC'
        }
      , { content: 'color: ${1:red};$0'
        , name: 'color: name'
        , scope: 'source.css'
        , tabTrigger: 'color'
        , uuid: '45D80BAF-0B0A-4334-AFBC-3601B5903707'
        }
      , { content: 'color: rgb(${1:255},${2:255},${3:255});$0'
        , name: 'color: rgb'
        , scope: 'source.css'
        , tabTrigger: 'color'
        , uuid: 'FBA1210B-33DB-49D0-B026-FF31DBC41FD6'
        }
      , { content: 'cursor: ${1:default/auto/crosshair/pointer/move/*-resize/text/wait/help};$0'
        , name: 'cursor: type'
        , scope: 'source.css'
        , tabTrigger: 'cursor'
        , uuid: '5EDCDB17-5DB0-459A-A61D-29984DD3A3B8'
        }
      , { content: 'cursor: url($1);$0'
        , name: 'cursor: url'
        , scope: 'source.css'
        , tabTrigger: 'cursor'
        , uuid: '5C9011B1-B8A8-4FD3-8EA8-848AF6509ADF'
        }
      , { content: 'display: block;$0'
        , name: 'display: block'
        , scope: 'source.css'
        , tabTrigger: 'display'
        , uuid: '2FC3C35E-88A6-4DA0-808D-3034A96E7794'
        }
      , { content: 'display: ${1:none/inline/block/list-item/run-in/compact/marker};$0'
        , name: 'display: common-types'
        , scope: 'source.css'
        , tabTrigger: 'display'
        , uuid: '56940467-7D99-4F31-83C2-1554638F552A'
        }
      , { content: 'display: inline;$0'
        , name: 'display: inline'
        , scope: 'source.css'
        , tabTrigger: 'display'
        , uuid: 'CA506D09-9EAE-445D-AE1E-7058937304B7'
        }
      , { content: 'display: ${1:table/inline-table/table-row-group/table-header-group/table-footer-group/table-row/table-column-group/table-column/table-cell/table-caption};$0'
        , name: 'display: table-types'
        , scope: 'source.css'
        , tabTrigger: 'display'
        , uuid: '98BE34AD-3CB1-4FB9-98A0-5E5A4BA63286'
        }
      , { content: '${3:background-image: none;\n}filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\'${1:${TM_SELECTED_TEXT:/images/transparent.png}}\', sizingMethod=\'${2:image/scale/crop}\');'
        , keyEquivalent: ''
        , name: 'filter: AlphaImageLoader [for IE PNGs]'
        , scope: 'source.css'
        , tabTrigger: 'background'
        , uuid: '81CCEB84-6241-4E4F-BB26-54BAAFA3FF2E'
        }
      , { content: 'float: ${1:left/right/none};$0'
        , name: 'float: left/right/none'
        , scope: 'source.css'
        , tabTrigger: 'float'
        , uuid: '39244453-6D06-4265-9894-14D7FC0B277F'
        }
      , { content: 'font-family: ${1:Arial, "MS Trebuchet"}, ${2:sans-}serif;$0'
        , name: 'font-family: family'
        , scope: 'source.css'
        , tabTrigger: 'font'
        , uuid: '25388EC7-EA59-4C87-9F11-52870ADBF1AB'
        }
      , { content: 'font-size: ${1:100%};$0'
        , name: 'font-size: size'
        , scope: 'source.css'
        , tabTrigger: 'font'
        , uuid: 'CD8E3F13-2B14-401D-9646-E309FB04B678'
        }
      , { content: 'font-style: ${1:normal/italic/oblique};$0'
        , name: 'font-style: normal/italic/oblique'
        , scope: 'source.css'
        , tabTrigger: 'font'
        , uuid: '128D7494-86EA-4615-87F4-C4D45E8C04AA'
        }
      , { content: 'font-variant: ${1:normal/small-caps};$0'
        , name: 'font-variant: normal/small-caps'
        , scope: 'source.css'
        , tabTrigger: 'font'
        , uuid: 'B6C9A8F9-2942-4592-B73F-2833B9F648E5'
        }
      , { content: 'font-weight: ${1:normal/bold};$0'
        , name: 'font-weight: weight'
        , scope: 'source.css'
        , tabTrigger: 'font'
        , uuid: 'F2DC92D8-43D4-4044-9D85-D96F734FF81E'
        }
      , { content: 'font: ${1:normal/italic/oblique} ${2:normal/small-caps} ${3:normal/bold} ${4:1em/1.5em} ${5:Arial}, ${6:sans-}serif;$0'
        , name: 'font: style variant weight size/line-height font-family'
        , scope: 'source.css'
        , tabTrigger: 'font'
        , uuid: '30C6CFA2-C00A-4F2A-8770-096A49C3F95F'
        }
      , { content: 'font: ${1:75%} ${2:"Lucida Grande", "Trebuchet MS", Verdana,} ${3:sans-}serif;$0'
        , name: 'font: size font'
        , scope: 'source.css'
        , tabTrigger: 'font'
        , uuid: 'F5EDF655-440B-4E1B-908F-4291F3A0A3A8'
        }
      , { content: 'letter-spacing: $1em;$0'
        , name: 'letter-spacing: em'
        , scope: 'source.css'
        , tabTrigger: 'letter'
        , uuid: 'D612A3B7-7C49-4447-9AAF-CCCFDE4408FF'
        }
      , { content: 'letter-spacing: $1px;$0'
        , name: 'letter-spacing: px'
        , scope: 'source.css'
        , tabTrigger: 'letter'
        , uuid: '17BBB1F1-1F83-4386-97B8-23144EB2441A'
        }
      , { content: 'list-style-image: url($1);$0'
        , name: 'list-style-image: url'
        , scope: 'source.css'
        , tabTrigger: 'list'
        , uuid: 'BDEF3B0F-6414-4B1A-8841-864702B51EC6'
        }
      , { content: 'list-style-position: ${1:inside/outside};$0'
        , name: 'list-style-position: pos'
        , scope: 'source.css'
        , tabTrigger: 'list'
        , uuid: '9B10C768-5DA7-4570-98E4-70A36261C823'
        }
      , { content: 'list-style-type: ${1:cjk-ideographic/hiragana/katakana/hiragana-iroha/katakana-iroha};$0'
        , name: 'list-style-type: asian'
        , scope: 'source.css'
        , tabTrigger: 'list'
        , uuid: 'E024086F-94B8-401F-A903-7F0CDA8E0B8A'
        }
      , { content: 'list-style-type: ${1:none/disc/circle/square};$0'
        , name: 'list-style-type: marker'
        , scope: 'source.css'
        , tabTrigger: 'list'
        , uuid: 'C5CE7E29-9EB1-4A63-8173-190D12E4E4E4'
        }
      , { content: 'list-style-type: ${1:decimal/decimal-leading-zero/zero};$0'
        , name: 'list-style-type: numeric'
        , scope: 'source.css'
        , tabTrigger: 'list'
        , uuid: '24436F96-2383-48AB-844F-AE791DEAF080'
        }
      , { content: 'list-style-type: ${1:hebrew/armenian/georgian};$0'
        , name: 'list-style-type: other'
        , scope: 'source.css'
        , tabTrigger: 'list'
        , uuid: 'B8E9019D-3419-4CC3-87BB-DC54098CBFD0'
        }
      , { content: 'list-style-type: ${1:lower-roman/upper-roman/lower-alpha/upper-alpha/lower-greek/lower-latin/upper-latin};$0'
        , name: 'list-style-type: roman-alpha-greek'
        , scope: 'source.css'
        , tabTrigger: 'list'
        , uuid: '97A55488-5DD9-4347-B5F1-722F580715E4'
        }
      , { content: 'list-style: ${1:none/disc/circle/square/decimal/zero} ${2:inside/outside} url($3);$0'
        , name: 'list-style: type position image'
        , scope: 'source.css'
        , tabTrigger: 'list'
        , uuid: '1C7E0430-2A67-4CEF-9D68-4ED6315A8567'
        }
      , { content: 'margin-bottom: ${1:20px};$0'
        , name: 'margin-bottom: length'
        , scope: 'source.css'
        , tabTrigger: 'margin'
        , uuid: '6354F6AC-74E2-42CF-96B0-7EE2733B9B34'
        }
      , { content: 'margin-left: ${1:20px};$0'
        , name: 'margin-left: length'
        , scope: 'source.css'
        , tabTrigger: 'margin'
        , uuid: 'C19985FF-A12C-49B9-9BA3-EDC726E919A0'
        }
      , { content: 'margin-right: ${1:20px};$0'
        , name: 'margin-right: length'
        , scope: 'source.css'
        , tabTrigger: 'margin'
        , uuid: '1FDAB8C2-7A0D-4C0A-97FF-77AD2CC86083'
        }
      , { content: 'margin-top: ${1:20px};$0'
        , name: 'margin-top: length'
        , scope: 'source.css'
        , tabTrigger: 'margin'
        , uuid: '412AA532-762F-4270-961A-54BF6014996D'
        }
      , { content: 'margin: ${1:20px};$0'
        , name: 'margin: all'
        , scope: 'source.css'
        , tabTrigger: 'margin'
        , uuid: 'FA3D9F50-C5F6-4193-81D2-98A3E8FFBB2F'
        }
      , { content: 'margin: ${1:20px} ${2:0px} ${3:40px} ${4:0px};$0'
        , name: 'margin: T R B L'
        , scope: 'source.css'
        , tabTrigger: 'margin'
        , uuid: '68A3178C-A024-48BD-ABA6-0A03A69BD82E'
        }
      , { content: 'margin: ${1:20px} ${2:0px};$0'
        , name: 'margin: V H'
        , scope: 'source.css'
        , tabTrigger: 'margin'
        , uuid: '99315B12-6A41-4D8F-8477-F38DE0EBBEF8'
        }
      , { content: 'marker-offset: auto;$0'
        , name: 'marker-offset: auto'
        , scope: 'source.css'
        , tabTrigger: 'marker'
        , uuid: 'E10366F8-CA83-4447-89D3-B36AFD1EAECD'
        }
      , { content: 'marker-offset: ${1:10px};$0'
        , name: 'marker-offset: length'
        , scope: 'source.css'
        , tabTrigger: 'marker'
        , uuid: '5FDD30D8-7EF8-41E9-8A44-DC3C22EFD75D'
        }
      , { content: 'opacity: ${1:0.5};${100:\n}-moz-opacity: ${1:0.5};${100:\n}filter:alpha(opacity=${2:${1/(1?)0?\\.(.*)/$1$2/}${1/^\\d*\\.\\d\\d+$|^\\d*$|(^\\d\\.\\d$)/(?1:0)/}});$0'
        , name: 'opacity: [for Safari, FF & IE]'
        , scope: 'source.css'
        , tabTrigger: 'opacity'
        , uuid: '50C748B6-C8B6-447F-A9EE-DD41CF1CD707'
        }
      , { content: 'overflow: ${1:visible/hidden/scroll/auto};$0'
        , name: 'overflow: type'
        , scope: 'source.css'
        , tabTrigger: 'overflow'
        , uuid: '6523B6C5-8741-4766-98D6-1B1DE2E6A5F3'
        }
      , { content: 'padding-bottom: ${1:20px};$0'
        , name: 'padding-bottom: length'
        , scope: 'source.css'
        , tabTrigger: 'padding'
        , uuid: '1644E167-7A29-46A7-A100-7BD6C7EFA2F3'
        }
      , { content: 'padding-left: ${1:20px};$0'
        , name: 'padding-left: length'
        , scope: 'source.css'
        , tabTrigger: 'padding'
        , uuid: '772DD28C-80C2-4C9B-8023-1E71A974E1C4'
        }
      , { content: 'padding-right: ${1:20px};$0'
        , name: 'padding-right: length'
        , scope: 'source.css'
        , tabTrigger: 'padding'
        , uuid: 'C1667E5D-3A50-42F8-8129-6C3EEB43D7C2'
        }
      , { content: 'padding-top: ${1:20px};$0'
        , name: 'padding-top: length'
        , scope: 'source.css'
        , tabTrigger: 'padding'
        , uuid: 'E5B92C27-8602-4E50-9DF7-DE476E63BA1A'
        }
      , { content: 'padding: ${1:20px};$0'
        , name: 'padding: all'
        , scope: 'source.css'
        , tabTrigger: 'padding'
        , uuid: '6E64EA4A-A10E-49B3-AC9C-D53DBF9ED14A'
        }
      , { content: 'padding: ${1:20px} ${2:0px} ${3:40px} ${4:0px};$0'
        , name: 'padding: T R B L'
        , scope: 'source.css'
        , tabTrigger: 'padding'
        , uuid: 'DD5BB93D-4F99-4A41-8864-85A557B922C7'
        }
      , { content: 'padding: ${1:20px} ${2:0px};$0'
        , name: 'padding: V H'
        , scope: 'source.css'
        , tabTrigger: 'padding'
        , uuid: '4602BFF3-C7F1-4CF5-93CE-125EC8ABC7C8'
        }
      , { content: 'position: ${1:static/relative/absolute/fixed};$0'
        , name: 'position: type'
        , scope: 'source.css'
        , tabTrigger: 'position'
        , uuid: '1398502F-D4FD-437B-9033-49E254159BDE'
        }
      , { content: '{\n\t/* $1 */\n\t$0\n'
        , name: 'properties { } ( } )'
        , scope: 'source.css'
        , tabTrigger: '{'
        , uuid: '0975B58C-C7A1-441E-90E4-C7C413975D42'
        }
      , { content: 'text-align: ${1:left/right/center/justify};$0'
        , name: 'text-align: left/center/right'
        , scope: 'source.css'
        , tabTrigger: 'text'
        , uuid: 'F6CB9433-601A-4F95-A6B9-27D76B50DEE3'
        }
      , { content: 'text-decoration: ${1:none/underline/overline/line-through/blink};$0'
        , name: 'text-decoration: none/underline/overline/line-through/blink'
        , scope: 'source.css'
        , tabTrigger: 'text'
        , uuid: 'B1916E73-D417-42C2-A5C1-E95428DA6C45'
        }
      , { content: 'text-indent: ${1:10}px;$0'
        , name: 'text-indent: length'
        , scope: 'source.css'
        , tabTrigger: 'text'
        , uuid: '2CFA68DC-947B-4C43-872C-FB4DC0704D27'
        }
      , { content: 'text-shadow: #${1:DDD} ${2:10px} ${3:10px} ${4:2px};$0'
        , name: 'text-shadow: color-hex x y blur'
        , scope: 'source.css'
        , tabTrigger: 'text'
        , uuid: '77EF6A55-9814-492C-B8E2-EFF0FFAC272E'
        }
      , { content: 'text-shadow: rgb(${1:255},${2:255},${3:255}) ${4:10px} ${5:10px} ${6:2px};$0'
        , name: 'text-shadow: color-rgb x y blur'
        , scope: 'source.css'
        , tabTrigger: 'text'
        , uuid: '005905FF-544A-434C-803E-B51689332034'
        }
      , { content: 'text-shadow: none;$0'
        , name: 'text-shadow: none'
        , scope: 'source.css'
        , tabTrigger: 'text'
        , uuid: '1A6AD6F4-E0F7-406B-B28B-06EC54660650'
        }
      , { content: 'text-transform: ${1:capitalize/uppercase/lowercase};$0'
        , name: 'text-transform: capitalize/upper/lower'
        , scope: 'source.css'
        , tabTrigger: 'text'
        , uuid: '32CD0FA8-7BE7-4D58-A28A-7388F4CF6F9A'
        }
      , { content: 'text-transform: none;$0'
        , name: 'text-transform: none'
        , scope: 'source.css'
        , tabTrigger: 'text'
        , uuid: '2FF51006-7E07-4296-B89D-5ADF7B9B4232'
        }
      , { content: 'vertical-align: ${1:baseline/sub/super/top/text-top/middle/bottom/text-bottom/length/%};$0'
        , name: 'vertical-align: type'
        , scope: 'source.css'
        , tabTrigger: 'vertical'
        , uuid: '0C94F6A6-8AFB-47BC-8448-2383CF0D6C5B'
        }
      , { content: 'visibility: ${1:visible/hidden/collapse};$0'
        , name: 'visibility: type'
        , scope: 'source.css'
        , tabTrigger: 'visibility'
        , uuid: 'DE6D5C37-AC74-467E-9029-9844D8F4153A'
        }
      , { content: 'white-space: ${1:normal/pre/nowrap};$0'
        , name: 'white-space: normal/pre/nowrap'
        , scope: 'source.css'
        , tabTrigger: 'white'
        , uuid: 'A7D10908-72FE-4502-A267-42C5B03F0D66'
        }
      , { content: 'word-spacing: ${1:10px};$0'
        , name: 'word-spacing: length'
        , scope: 'source.css'
        , tabTrigger: 'word'
        , uuid: 'B121F84A-CE4A-491D-BF3D-35ED51C82554'
        }
      , { content: 'word-spacing: normal;$0'
        , name: 'word-spacing: normal'
        , scope: 'source.css'
        , tabTrigger: 'word'
        , uuid: 'DA7DF131-7351-4F3B-B680-57159E50E6DE'
        }
      , { content: 'z-index: $1;$0'
        , name: 'z-index: index'
        , scope: 'source.css'
        , tabTrigger: 'z'
        , uuid: '2EED405C-FBAF-4AEB-9B30-ED8EB2252378'
        }
      ]
   , key: []
   }
, 'source.css meta.property-list': 
   { tab: 
      [ { content: '${2:bottom: auto;}top: expression(eval(document.documentElement.scrollTop+document.documentElement.clientHeight-${1:THE HEIGHT OF THIS THING IN PIXELS}));\n${3:left: expression(eval(document.documentElement.scrollLeft));\n}${4:width: expression(eval(document.documentElement.clientWidth));}$0'
        , name: 'Fixed Position Bottom 100% wide IE6'
        , scope: 'source.css meta.property-list'
        , tabTrigger: 'fixed'
        , uuid: 'FCDDB549-681A-436F-894E-1A408C0E114C'
        }
      , { content: 'scrollbar-base-color:       ${1:#CCCCCC};${2:\nscrollbar-arrow-color:      ${3:#000000};\nscrollbar-track-color:      ${4:#999999};\nscrollbar-3dlight-color:    ${5:#EEEEEE};\nscrollbar-highlight-color:  ${6:#FFFFFF};\nscrollbar-face-color:       ${7:#CCCCCC};\nscrollbar-shadow-color:     ${9:#999999};\nscrollbar-darkshadow-color: ${8:#666666};}'
        , name: 'scrollbar'
        , scope: 'source.css meta.property-list'
        , tabTrigger: 'scrollbar'
        , uuid: '749295F4-F139-422A-80A0-EA11364396E3'
        }
      ]
   , key: []
   }
, 'source.css -meta.property-list': 
   { tab: 
      [ { content: '$1::-moz-selection,\n$1::selection {\n\tcolor: ${2:inherit};\n\tbackground: ${3:inherit};\n}'
        , name: 'selection'
        , scope: 'source.css -meta.property-list'
        , tabTrigger: 'selection'
        , uuid: '1B042CEF-7C82-472D-92A2-FF555BFD6927'
        }
      ]
   , key: []
   }
, 'text.html': 
   { tab: 
      [ { content: '&#x2192;'
        , name: '\u2192'
        , scope: 'text.html'
        , tabTrigger: 'arrow'
        , uuid: 'AC15621A-8A16-40DD-A671-EA4C37637215'
        }
      , { content: '&#x232B;'
        , name: '\u232b'
        , scope: 'text.html'
        , tabTrigger: 'backspace'
        , uuid: '38E50882-27AF-4246-A039-355C3E1A699E'
        }
      , { content: '&#x21E4;'
        , name: '\u21e4'
        , scope: 'text.html'
        , tabTrigger: 'backtab'
        , uuid: '7F102705-27D8-4029-BF61-2F042FB61E06'
        }
      , { content: '&#x2318;'
        , name: '\u2318'
        , scope: 'text.html'
        , tabTrigger: 'command'
        , uuid: '7214ACD1-93D9-4D3F-A428-8A7302E0A35E'
        }
      , { content: '&#x2303;'
        , name: '\u2303'
        , scope: 'text.html'
        , tabTrigger: 'control'
        , uuid: 'B4987DA5-9C2F-4D2D-AC14-678115079205'
        }
      , { content: '&#x2326;'
        , name: '\u2326'
        , scope: 'text.html'
        , tabTrigger: 'delete'
        , uuid: '44E448B6-37CE-4BFE-8611-C5113593B74B'
        }
      , { content: '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"\n\t"http://www.w3.org/TR/html4/strict.dtd">\n'
        , name: 'HTML \u2014 4.01 Strict'
        , scope: 'text.html'
        , tabTrigger: 'doctype'
        , uuid: '944F1410-188C-4D70-8340-CECAA56FC7F2'
        }
      , { content: '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN"\n\t"http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd">\n'
        , name: 'XHTML \u2014 1.0 Frameset'
        , scope: 'text.html'
        , tabTrigger: 'doctype'
        , uuid: '9ED6ABBE-A802-11D9-BFC8-000D93C8BE28'
        }
      , { content: '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"\n\t"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">\n'
        , name: 'XHTML \u2014 1.0 Strict'
        , scope: 'text.html'
        , tabTrigger: 'doctype'
        , uuid: 'C8B83564-A802-11D9-BFC8-000D93C8BE28'
        }
      , { content: '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"\n\t"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n'
        , name: 'XHTML \u2014 1.0 Transitional'
        , scope: 'text.html'
        , tabTrigger: 'doctype'
        , uuid: '7D8C2F74-A802-11D9-BFC8-000D93C8BE28'
        }
      , { content: '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN"\n\t"http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">\n'
        , name: 'XHTML \u2014 1.1'
        , scope: 'text.html'
        , tabTrigger: 'doctype'
        , uuid: '5CE8FC6E-A802-11D9-BFC8-000D93C8BE28'
        }
      , { content: '&#x2193;'
        , name: '\u2193'
        , scope: 'text.html'
        , tabTrigger: 'down'
        , uuid: '35654B4E-2D76-4CD3-8FBB-2DA1F314BA19'
        }
      , { content: '<object width="$2" height="$3" classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab">\n\t<param name="src" value="$1"${TM_XHTML}>\n\t<param name="controller" value="$4"${TM_XHTML}>\n\t<param name="autoplay" value="$5"${TM_XHTML}>\n\t<embed src="${1:movie.mov}"\n\t\twidth="${2:320}" height="${3:240}"\n\t\tcontroller="${4:true}" autoplay="${5:true}"\n\t\tscale="tofit" cache="true"\n\t\tpluginspage="http://www.apple.com/quicktime/download/"\n\t${TM_XHTML}>\n</object>'
        , name: 'Embed QT Movie'
        , scope: 'text.html'
        , tabTrigger: 'movie'
        , uuid: '42F15753-9B6D-4DD8-984C-807B94363277'
        }
      , { content: '&#x2305;'
        , name: '\u2305'
        , scope: 'text.html'
        , tabTrigger: 'enter'
        , uuid: '7062316B-4236-4793-AD35-05E4A6577393'
        }
      , { content: '&#x238B;'
        , name: '\u238b'
        , scope: 'text.html'
        , tabTrigger: 'escape'
        , uuid: 'D7CC7C7C-CD01-4357-AF91-AEFFD914DF98'
        }
      , { bundleUUID: '4676FC6D-6227-11D9-BFB1-000D93589AF6'
        , content: '<fieldset id="${1/[[:alpha:]]+|( )/(?1:_:\\L$0)/g}" ${2:class="${3:}"}>\n\t<legend>${1:$TM_SELECTED_TEXT}</legend>\n\t\n\t$0\n</fieldset>'
        , name: 'Fieldset'
        , scope: 'text.html'
        , tabTrigger: 'fieldset'
        , uuid: '9BD2BE01-A854-4D55-B584-725D04C075C0'
        }
      , { content: '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"\n\t"http://www.w3.org/TR/html4/loose.dtd">\n'
        , name: 'HTML \u2014 4.01 Transitional'
        , scope: 'text.html'
        , tabTrigger: 'doctype'
        , uuid: 'B2AAEE56-42D8-42C3-8F67-865473F50E8D'
        }
      , { content: '<!--[if IE 5.0]>${1:${TM_SELECTED_TEXT:   IE Conditional Comment: Internet Explorer 5.0 only }}<![endif]-->$0'
        , name: 'IE Conditional Comment: Internet Explorer 5.0 only'
        , scope: 'text.html'
        , tabTrigger: '!'
        , uuid: '3A517A94-001E-464D-8184-1FE56D0D0D70'
        }
      , { content: '<!--[if IE 5.5000]>${1:${TM_SELECTED_TEXT:   IE Conditional Comment: Internet Explorer 5.5 only }}<![endif]-->$0'
        , name: 'IE Conditional Comment: Internet Explorer 5.5 only'
        , scope: 'text.html'
        , tabTrigger: '!'
        , uuid: 'E3F8984E-7269-4981-9D30-967AB56A6ACE'
        }
      , { content: '<!--[if lt IE 6]>${1:${TM_SELECTED_TEXT:  IE Conditional Comment: Internet Explorer 5.x      }}<![endif]-->$0'
        , name: 'IE Conditional Comment: Internet Explorer 5.x'
        , scope: 'text.html'
        , tabTrigger: '!'
        , uuid: 'F3512848-7889-45DA-993B-0547976C8E6D'
        }
      , { content: '<!--[if lte IE 6]>${1:${TM_SELECTED_TEXT: IE Conditional Comment: Internet Explorer 6 and below }}<![endif]-->$0'
        , name: 'IE Conditional Comment: Internet Explorer 6 and below'
        , scope: 'text.html'
        , tabTrigger: '!'
        , uuid: '32BBB9AB-8732-4F91-A587-354941A27B69'
        }
      , { content: '<!--[if IE 6]>${1:${TM_SELECTED_TEXT:     IE Conditional Comment: Internet Explorer 6 only   }}<![endif]-->$0'
        , name: 'IE Conditional Comment: Internet Explorer 6 only'
        , scope: 'text.html'
        , tabTrigger: '!'
        , uuid: '48DF7485-52EA-49B3-88AF-3A41F933F325'
        }
      , { content: '<!--[if gte IE 7]>${1:${TM_SELECTED_TEXT: IE Conditional Comment: Internet Explorer 7 and above }}<![endif]-->$0'
        , name: 'IE Conditional Comment: Internet Explorer 7 and above'
        , scope: 'text.html'
        , tabTrigger: '!'
        , uuid: 'CBC24AF4-88E0-498B-BE50-934B9CF29EC7'
        }
      , { content: '<!--[if IE]>${1:${TM_SELECTED_TEXT:       IE Conditional Comment: Internet Explorer          }}<![endif]-->$0'
        , name: 'IE Conditional Comment: Internet Explorer'
        , scope: 'text.html'
        , tabTrigger: '!'
        , uuid: '0ED6DA73-F38F-4A65-B18F-3379D2BA9387'
        }
      , { content: '<!--[if !IE]><!-->${1:${TM_SELECTED_TEXT:  IE Conditional Comment: NOT Internet Explorer      }}<!-- <![endif]-->$0'
        , name: 'IE Conditional Comment: NOT Internet Explorer'
        , scope: 'text.html'
        , tabTrigger: '!'
        , uuid: 'F00170EE-4A82-413F-A88B-85293E69A88B'
        }
      , { bundleUUID: '4676FC6D-6227-11D9-BFB1-000D93589AF6'
        , content: '<label for="${2:${1/[[:alpha:]]+|( )/(?1:_:\\L$0)/g}}">$1</label><input type="${3:text/submit/hidden/button}" name="${4:$2}" value="$5"${6: id="${7:$2}"}${TM_XHTML}>\n'
        , name: 'Input with Label'
        , scope: 'text.html'
        , tabTrigger: 'input'
        , uuid: 'D8DCCC81-749A-4E2A-B4BC-D109D5799CAA'
        }
      , { content: '&#x2190;'
        , name: '\u2190'
        , scope: 'text.html'
        , tabTrigger: 'left'
        , uuid: 'C0418A4A-7E42-4D49-8F86-6E339296CB84'
        }
      , { content: '&#x2325;'
        , name: '\u2325'
        , scope: 'text.html'
        , tabTrigger: 'option'
        , uuid: '980A8D39-CA8B-4EC2-9739-DC36A262F28E'
        }
      , { bundleUUID: '4676FC6D-6227-11D9-BFB1-000D93589AF6'
        , content: '<option${1: value="${2:option}"}>${3:$2}</option>'
        , name: 'Option'
        , scope: 'text.html'
        , tabTrigger: 'opt'
        , uuid: '5820372E-A093-4F38-B25C-B0CCC50A0FC4'
        }
      , { content: '&#x21A9;'
        , name: '\u21a9'
        , scope: 'text.html'
        , tabTrigger: 'return'
        , uuid: '9B216475-D73D-4518-851F-CACD0066A909'
        }
      , { content: '&#x2192;'
        , name: '\u2192'
        , scope: 'text.html'
        , tabTrigger: 'right'
        , uuid: 'C70BB693-0954-4440-AEB4-F2ADD6D923F0'
        }
      , { bundleUUID: '4676FC6D-6227-11D9-BFB1-000D93589AF6'
        , content: '<select name="${1:some_name}" id="${2:$1}"${3:${4: multiple}${5: onchange="${6:}"}${7: size="${8:1}"}}>\n\t<option${9: value="${10:option1}"}>${11:$10}</option>\n\t<option${12: value="${13:option2}"}>${14:$13}</option>${15:}\n\t$0\n</select>'
        , name: 'Select Box'
        , scope: 'text.html'
        , tabTrigger: 'select'
        , uuid: '26023CFF-C73F-4EF5-9803-E4DBA2CBEADD'
        }
      , { content: '&#x21E7;'
        , name: '\u21e7'
        , scope: 'text.html'
        , tabTrigger: 'shift'
        , uuid: '1B8D58B9-D9DB-484C-AACD-5D5DF5385308'
        }
      , { content: '&#x21E5;'
        , name: '\u21e5'
        , scope: 'text.html'
        , tabTrigger: 'tab'
        , uuid: 'ADC78A82-40C2-4AAC-8968-93AF0ED98DF0'
        }
      , { content: '&#x2191;'
        , name: '\u2191'
        , scope: 'text.html'
        , tabTrigger: 'up'
        , uuid: '0E2F4A47-EADE-4A05-931E-FC874FA28FC3'
        }
      , { content: '`cat "$TM_BUNDLE_SUPPORT/textmate_error_handler.html" | grep -E -v \'^[ \\t\\s]*\\/\\/\' | sed \'s/\\(.*\\)[ \\t]*--.*/\\1/\' | tr -s \' \\n\\t\' \' \' | sed \'s/.\\{80\\}[{};]/&\\\n/g\'`'
        , name: 'PHP Error Catching JavaScript'
        , scope: 'text.html'
        , tabTrigger: 'phperr'
        , uuid: '9C891C7B-CFA8-4860-B76F-4E3AD60B0E13'
        }
      ]
   , key: 
      [ { content: '${0:${TM_SELECTED_TEXT/\\A<em>(.*)<\\/em>\\z|.*/(?1:$1:<em>$0<\\/em>)/m}}'
        , keyEquivalent: '@i'
        , name: 'Emphasize'
        , scope: 'text.html'
        , uuid: 'EBB98620-3292-4621-BA38-D8A9A65D9551'
        }
      , { content: '${0:${TM_SELECTED_TEXT/\\A<strong>(.*)<\\/strong>\\z|.*/(?1:$1:<strong>$0<\\/strong>)/m}}'
        , keyEquivalent: '@b'
        , name: 'Strong'
        , scope: 'text.html'
        , uuid: '4117D930-B6FA-4022-97E7-ECCAF4E70F63'
        }
      ]
   }
, 'meta.scope.between-tag-pair': 
   { tab: []
   , key: 
      [ { content: '\n\t$0\n'
        , keyEquivalent: '\n'
        , name: 'Special: Return Inside Empty Open/Close Tags'
        , scope: 'meta.scope.between-tag-pair'
        , uuid: '3C44EABE-8D6F-4B1B-AB91-F419FAD1A0AD'
        }
      ]
   }
, 'text.html,': 
   { tab: []
   , key: 
      [ { content: '<${1:p}>$TM_SELECTED_TEXT</${1/\\s.*//}>'
        , keyEquivalent: '^W'
        , name: 'Wrap Selection in Open/Close Tag'
        , scope: 'text.html,'
        , uuid: 'BC8B8AE2-5F16-11D9-B9C3-000D93589AF6'
        }
      ]
   }
, 'source.java': 
   { tab: 
      [ { content: 'abstract '
        , name: 'abstract'
        , scope: 'source.java'
        , tabTrigger: 'ab'
        , uuid: 'E54D7A3C-107A-426E-91E8-D066A978BC5E'
        }
      , { content: 'assert ${1:test}${2/(.+)/(?1: \\: ")/}${2:Failure message}${2/(.+)/(?1:")/};$0'
        , name: 'assert'
        , scope: 'source.java'
        , tabTrigger: 'as'
        , uuid: 'A30E90E6-FFBF-4899-AB97-7CAA00D0B824'
        }
      , { content: 'break;\n'
        , name: 'break'
        , scope: 'source.java'
        , tabTrigger: 'br'
        , uuid: 'E4DACBFB-F029-4EC3-BB0D-BEF0D5369DA7'
        }
      , { content: 'case $1:\n\t$2\n$0'
        , name: 'case'
        , scope: 'source.java'
        , tabTrigger: 'cs'
        , uuid: '7396532C-3567-4BDA-9C10-51454A2F2F6D'
        }
      , { content: 'catch (${1:Exception} ${2:e}) $0'
        , name: 'catch'
        , scope: 'source.java'
        , tabTrigger: 'ca'
        , uuid: 'CE3059F1-EBFE-426B-A98A-7D935580F915'
        }
      , { content: 'class ${1:${TM_FILENAME/(.*?)(\\..+)?/(?2:$1:untitled)/}} ${2:extends ${3:Parent} }${4:implements ${5:Interface} }$0'
        , name: 'class'
        , scope: 'source.java'
        , tabTrigger: 'cl'
        , uuid: 'E9ED01EA-E83B-4322-BD9D-39C88FB8C237'
        }
      , { content: 'static public final String ${1:var} = "$2";$0'
        , name: 'constant string'
        , scope: 'source.java'
        , tabTrigger: 'cos'
        , uuid: '4876099F-502E-471F-9D0D-916C7EF2E353'
        }
      , { content: 'static public final ${1:String} ${2:var} = $3;$0'
        , name: 'constant'
        , scope: 'source.java'
        , tabTrigger: 'co'
        , uuid: '8CD02FE6-B5EE-4335-AFDF-7CC02C969563'
        }
      , { content: 'default:\n\t$0'
        , name: 'default'
        , scope: 'source.java'
        , tabTrigger: 'de'
        , uuid: 'F050CAEB-56AB-40A7-846B-E5DB70FA0A90'
        }
      , { content: 'else if ($1) $0'
        , name: 'else if'
        , scope: 'source.java'
        , tabTrigger: 'elif'
        , uuid: '4C07C9CB-4306-417B-B152-653E93C987B5'
        }
      , { content: 'else $0'
        , name: 'else'
        , scope: 'source.java'
        , tabTrigger: 'el'
        , uuid: '5A7786EE-5F23-422E-A6EC-69778ED7C8FC'
        }
      , { content: 'final '
        , name: 'final'
        , scope: 'source.java'
        , tabTrigger: 'fi'
        , uuid: 'F53E8BF9-4911-4131-B31F-8B4DEE47E421'
        }
      , { content: 'for ($1 : $2) $0'
        , name: 'for (each)'
        , scope: 'source.java'
        , tabTrigger: 'fore'
        , uuid: '8B84EAD3-F93D-407A-8BB1-4FEF8B0C71D7'
        }
      , { content: 'for ($1; $2; $3) $0'
        , name: 'for'
        , scope: 'source.java'
        , tabTrigger: 'for'
        , uuid: 'BC9380F7-43F1-4304-91CD-4C490B0A6037'
        }
      , { content: 'if ($1) $0'
        , name: 'if'
        , scope: 'source.java'
        , tabTrigger: 'if'
        , uuid: '476E26EB-5A53-45B3-A497-B22B12815C7F'
        }
      , { content: 'import '
        , name: 'import'
        , scope: 'source.java'
        , tabTrigger: 'im'
        , uuid: '097F4236-D7A4-412F-A078-11ABFCAFC7BA'
        }
      , { content: 'interface ${1:${TM_FILENAME/(.*?)(\\..+)/$1/}} ${2:extends ${3:Parent} }$0'
        , name: 'interface'
        , scope: 'source.java'
        , tabTrigger: 'in'
        , uuid: 'B8E49466-FCBE-4053-AEC3-4ABBE0FF2FEF'
        }
      , { content: 'java.beans.'
        , name: 'java.beans.'
        , scope: 'source.java'
        , tabTrigger: 'j.b'
        , uuid: '5EEDE297-9489-41C8-A7AF-BDB5EABEF41F'
        }
      , { content: 'java.io.'
        , name: 'java.io.'
        , scope: 'source.java'
        , tabTrigger: 'j.i'
        , uuid: '2887D1D3-A714-41B6-9211-4DEC12417889'
        }
      , { content: 'java.math.'
        , name: 'java.math.'
        , scope: 'source.java'
        , tabTrigger: 'j.m'
        , uuid: '592F2823-7A2B-4881-99A4-7A18D3623902'
        }
      , { content: 'java.net.'
        , name: 'java.net.'
        , scope: 'source.java'
        , tabTrigger: 'j.n'
        , uuid: '94C09B88-AC93-4045-86D1-206639D582D0'
        }
      , { content: 'java.util.'
        , name: 'java.util.'
        , scope: 'source.java'
        , tabTrigger: 'j.u'
        , uuid: '97DC6637-998E-493C-9765-C8CFB29AC18C'
        }
      , { content: '${1:void} ${2:method}($3) ${4:throws $5}\n'
        , name: 'method'
        , scope: 'source.java'
        , tabTrigger: 'm'
        , uuid: '16D51B5E-56BC-4ED0-84FB-FCC68479BE8E'
        }
      , { content: 'System.out.print($1);$0'
        , name: 'print'
        , scope: 'source.java'
        , tabTrigger: 'p'
        , uuid: '5F390B93-6A28-4EED-B04A-D213640B9DAF'
        }
      , { content: 'System.out.println($1);$0'
        , name: 'println'
        , scope: 'source.java'
        , tabTrigger: 'pl'
        , uuid: 'DFD7AE0D-D5CC-4FFF-B37D-EA7ACC8E34DF'
        }
      , { content: 'private '
        , name: 'private'
        , scope: 'source.java'
        , tabTrigger: 'pr'
        , uuid: '8E765795-CC9D-46D7-8602-7E2DBB7026B2'
        }
      , { content: 'protected '
        , name: 'protected'
        , scope: 'source.java'
        , tabTrigger: 'po'
        , uuid: '56C938B4-22B8-45F4-8E09-5BB4DE4633B0'
        }
      , { content: 'public '
        , name: 'public'
        , scope: 'source.java'
        , tabTrigger: 'pu'
        , uuid: 'BD7A6DBE-0180-4E1A-A428-14D44BD88F88'
        }
      , { content: 'return '
        , name: 'return'
        , scope: 'source.java'
        , tabTrigger: 're'
        , uuid: 'BF745BD9-E345-4CFB-82B1-2CC2195BEFA8'
        }
      , { content: 'static '
        , name: 'static'
        , scope: 'source.java'
        , tabTrigger: 'st'
        , uuid: 'C0525A43-EEF4-4F59-AC09-84D263888433'
        }
      , { content: 'switch ($1) $0'
        , name: 'switch'
        , scope: 'source.java'
        , tabTrigger: 'sw'
        , uuid: '2D2F53B7-E41C-4AEE-8A5E-2A5BB7B42E65'
        }
      , { content: 'synchronized '
        , name: 'synchronized'
        , scope: 'source.java'
        , tabTrigger: 'sy'
        , uuid: '96251D07-2F30-4610-9F0F-65DE730CC0B5'
        }
      , { content: 'public class ${1:${TM_FILENAME/(.*?)(\\..+)/$1/}} extends ${2:TestCase} $0'
        , name: 'test case'
        , scope: 'source.java'
        , tabTrigger: 'tc'
        , uuid: 'D3D659F5-5318-4D0A-85E2-9A03902A1668'
        }
      , { content: 'public void test${1:Name}() throws Exception $0'
        , name: 'test'
        , scope: 'source.java'
        , tabTrigger: 't'
        , uuid: '8B285F69-5A6A-46B4-BB31-B5F10DCB5719'
        }
      , { content: 'throw $0'
        , name: 'throw'
        , scope: 'source.java'
        , tabTrigger: 'th'
        , uuid: 'F0C15D98-790E-4755-A04E-B8903D50F5C6'
        }
      , { content: '${1:String} ${2:var}${3: = ${0:null}};'
        , name: 'variable'
        , scope: 'source.java'
        , tabTrigger: 'v'
        , uuid: '3621828B-39DB-4B56-8300-DD5C76333868'
        }
      , { content: 'while ($1) $0'
        , name: 'while'
        , scope: 'source.java'
        , tabTrigger: 'wh'
        , uuid: '755B1EB0-934C-49C6-AD08-B461C2205C46'
        }
      ]
   , key: 
      [ { content: '\n{\n\t$0\n}'
        , keyEquivalent: '^['
        , name: 'next line {'
        , scope: 'source.java'
        , uuid: '3DF1A808-53F2-4F48-BD56-1F2D20A0BFE5'
        }
      , { content: '{\n\t$0\n}'
        , keyEquivalent: '^{'
        , name: 'same line {'
        , scope: 'source.java'
        , uuid: 'CE7A14F3-025B-4334-8F40-881CF820A9EE'
        }
      ]
   }
, 'source.java meta.class.java': 
   { tab: 
      [ { content: 'public static void main (String [] args)\n{\n\t${0:/* code */}\n}'
        , name: 'method (main)'
        , scope: 'source.java meta.class.java'
        , tabTrigger: 'main'
        , uuid: '90A0278A-56B2-465B-B629-A01DF6524FEA'
        }
      ]
   , key: []
   }
, 'source.js': 
   { tab: 
      [ { content: 'for (var ${20:i} = ${1:Things}.length - 1; ${20:i} >= 0; ${20:i}--){\n\t${100:${1:Things}[${20:i}]}$0\n};'
        , name: 'for (\u2026) {\u2026} (Improved Native For-Loop)'
        , scope: 'source.js'
        , tabTrigger: 'for'
        , uuid: 'C207B7C3-5597-4873-8AAD-C46FB8842AF2'
        }
      , { content: 'for (var ${20:i}=0; ${20:i} < ${1:Things}.length; ${20:i}++) {\n\t${100:${1:Things}[${20:i}]}$0\n};'
        , name: 'for (\u2026) {\u2026}'
        , scope: 'source.js'
        , tabTrigger: 'for'
        , uuid: '011C4681-FBEC-4891-9326-3DECFCDED6D6'
        }
      , { content: 'function ${1:function_name} (${2:argument}) {\n\t${0:// body...}\n}'
        , name: 'Function'
        , scope: 'source.js'
        , tabTrigger: 'fun'
        , uuid: 'F0E4FB6A-4878-48C6-A777-62438DF1E14F'
        }
      , { content: 'function($1) {${0:$TM_SELECTED_TEXT}};'
        , name: 'Anonymous Function'
        , scope: 'source.js'
        , tabTrigger: 'f'
        , uuid: '4C6EDB43-3E2E-411B-A016-13C135C59833'
        }
      , { content: 'getElement${1/(T)|.*/(?1:s)/}By${1:T}${1/(T)|(I)|.*/(?1:agName)(?2:d)/}(\'$2\')'
        , name: 'Get Elements'
        , scope: 'source.js'
        , tabTrigger: 'get'
        , uuid: '9E0E3BCC-7F20-4D6B-891D-A44D6EC56E31'
        }
      , { content: 'if (${1:true}) {${0:$TM_SELECTED_TEXT}} else{};'
        , name: 'if \u2026 else'
        , scope: 'source.js'
        , tabTrigger: 'ife'
        , uuid: '31964029-9D71-4ADC-8213-DFE5C4E222B3'
        }
      , { content: 'if (${1:true}) {${0:$TM_SELECTED_TEXT}};'
        , name: 'if'
        , scope: 'source.js'
        , tabTrigger: 'if'
        , uuid: 'F19F3732-39A7-48EC-A72B-A8F477A01795'
        }
      , { content: '\'${1:${2:#thing}:${3:click}}\': function(element){\n\t$0\n}${10:,}'
        , name: 'Object Method String'
        , scope: 'source.js'
        , tabTrigger: '\'\':f'
        , uuid: '7B9AEFCC-B450-416D-8527-430FE2A08568'
        }
      , { content: '${1:method_name}: function(${3:attribute}){\n\t$0\n}${10:,}'
        , name: 'Object Method'
        , scope: 'source.js'
        , tabTrigger: ':f'
        , uuid: '77065D69-742A-4FF0-9A41-AD211DFBE72F'
        }
      , { content: '${1:value_name}:${0:value},'
        , name: 'Object Value JS'
        , scope: 'source.js'
        , tabTrigger: ':,'
        , uuid: 'AD506BEC-B33C-4168-A900-0A4D386A4B05'
        }
      , { content: '${1:class_name}.prototype.${2:method_name} = function(${3:first_argument}) {\n\t${0:// body...}\n};\n'
        , name: 'Prototype'
        , scope: 'source.js'
        , tabTrigger: 'proto'
        , uuid: '2F96136B-0193-42F5-90FC-B6F456A3AD77'
        }
      , { content: 'setTimeout(function() {$0}${2:}, ${1:10});'
        , name: 'setTimeout function'
        , scope: 'source.js'
        , tabTrigger: 'timeout'
        , uuid: '009A3E6C-FE3F-4A18-8759-2DC31F17BBE2'
        }
      ]
   , key: []
   }
, 'text.tex.latex': 
   { tab: 
      [ { content: '\\begin{align`echo $TM_SCOPE|grep math|\nsed -e \'s/.*math.*/ed/\'`}\n\t$0\n\\end{align`echo $TM_SCOPE|grep math|\nsed -e \'s/.*math.*/ed/\'`}'
        , name: 'Align(ed)'
        , scope: 'text.tex.latex'
        , tabTrigger: 'ali'
        , uuid: 'EEAC1CE5-50DD-42B0-96D6-08EB81E58754'
        }
      , { content: '\\begin{cases}\n\t${1:equation}, &\\text{ if }${2:case}\\\\\\\\\n\t$0\n\\end{cases}'
        , name: 'Cases'
        , scope: 'text.tex.latex'
        , tabTrigger: 'cas'
        , uuid: 'EE7D14B5-9620-4A1B-866B-91E26FB481DB'
        }
      , { content: '\\chapter{${1:chapter name}} % (fold)\n\\label{cha:${2:${1/\\\\\\w+\\{(.*?)\\}|\\\\(.)|(\\w+)|([^\\w\\\\]+)/(?4:_:\\L$1$2$3)/g}}}\n${0:$TM_SELECTED_TEXT}\n% chapter $2 (end)'
        , name: 'Chapter'
        , scope: 'text.tex.latex'
        , tabTrigger: 'cha'
        , uuid: '47FA7321-6BDC-413B-9F59-63ACBB0E2080'
        }
      , { content: '\\\\begin{description}\n\t\\item[$1] $0\n\\\\end{description}'
        , name: 'Description'
        , scope: 'text.tex.latex'
        , tabTrigger: 'desc'
        , uuid: '2F926912-E5E6-4965-8E50-0603765DD0E6'
        }
      , { content: '\\\\begin{enumerate}\n\t\\item $0\n\\\\end{enumerate}'
        , name: 'Enumerate'
        , scope: 'text.tex.latex'
        , tabTrigger: 'enum'
        , uuid: '03F30619-2739-447F-953D-DB225185E4D2'
        }
      , { content: '\\begin{equation}\n\t$0\n\\end{equation}'
        , name: 'Equation'
        , scope: 'text.tex.latex'
        , tabTrigger: 'eq'
        , uuid: '23B04BBB-ACE7-44A7-B313-09DC4874B2C0'
        }
      , { content: '${1:Figure}~\\ref{${2:fig:}}$0'
        , name: 'Figure'
        , scope: 'text.tex.latex'
        , tabTrigger: 'figure'
        , uuid: 'C4288DF5-A4DA-4F35-9AB9-4062EE5B7E61'
        }
      , { content: '\\begin{gather`echo $TM_SCOPE|grep math|\nsed -e \'s/.*math.*/ed/\'`}\n\t$0\n\\end{gather`echo $TM_SCOPE|grep math|\nsed -e \'s/.*math.*/ed/\'`}'
        , name: 'Gather(ed)'
        , scope: 'text.tex.latex'
        , tabTrigger: 'gat'
        , uuid: 'BE56EE31-7C87-43A6-B0ED-7E5C31432C1C'
        }
      , { content: '\\\\begin{itemize}\n\t\\item $0\n\\\\end{itemize}'
        , name: 'Itemize'
        , scope: 'text.tex.latex'
        , tabTrigger: 'item'
        , uuid: 'CC9CC561-4BD2-4E50-A211-8C6141FFDE69'
        }
      , { content: '${1:Listing}~\\ref{${2:lst:}}$0\n'
        , name: 'Listing'
        , scope: 'text.tex.latex'
        , tabTrigger: 'listing'
        , uuid: '0F8A8F61-0AE1-44F8-B4FA-01D4F877E9EE'
        }
      , { content: '\\begin{${1:p/b/v/V/B/small}matrix}\n\t$0\n\\end{${1:p/b/v/V/B/small}matrix}'
        , name: 'Matrix'
        , scope: 'text.tex.latex'
        , tabTrigger: 'mat'
        , uuid: '66265AD6-3D2A-4888-9A9B-2B37860C79F3'
        }
      , { content: '${1:page}~\\pageref{$2}$0\n'
        , name: 'Page'
        , scope: 'text.tex.latex'
        , tabTrigger: 'page'
        , uuid: 'FD59489B-7437-48DD-A4EC-9AF3AB2FCF19'
        }
      , { content: '\\paragraph{${1:paragraph name}} % (fold)\n\\label{par:${2:${1/\\\\\\w+\\{(.*?)\\}|\\\\(.)|(\\w+)|([^\\w\\\\]+)/(?4:_:\\L$1$2$3)/g}}}\n${0:$TM_SELECTED_TEXT}\n% paragraph $2 (end)'
        , name: 'Paragraph'
        , scope: 'text.tex.latex'
        , tabTrigger: 'par'
        , uuid: '76987ABA-D716-4F75-ADC1-5FB767FC460E'
        }
      , { content: '\\part{${1:part name}} % (fold)\n\\label{prt:${2:${1/(\\w+)|\\W+/(?1:\\L$0:_)/g}}}\n${0:$TM_SELECTED_TEXT}\n% part $2 (end)'
        , name: 'Part'
        , scope: 'text.tex.latex'
        , tabTrigger: 'part'
        , uuid: 'A3F71E5B-C99E-488D-B1CB-39D588C28A8C'
        }
      , { content: '${1:Section}~\\ref{${2:sec:}}$0\n'
        , name: 'Section'
        , scope: 'text.tex.latex'
        , tabTrigger: 'section'
        , uuid: '5305AE18-1F7F-4284-A537-C0418119D078'
        }
      , { content: '\\begin{split}\n\t$0\n\\end{split}'
        , name: 'Split'
        , scope: 'text.tex.latex'
        , tabTrigger: 'spl'
        , uuid: '66B38313-2239-430C-8DE9-95023BA583C2'
        }
      , { content: '\\subparagraph{${1:subparagraph name}} % (fold)\n\\label{subp:${2:${1/\\\\\\w+\\{(.*?)\\}|\\\\(.)|(\\w+)|([^\\w\\\\]+)/(?4:_:\\L$1$2$3)/g}}}\n${0:$TM_SELECTED_TEXT}\n% subparagraph $2 (end)'
        , name: 'Sub Paragraph'
        , scope: 'text.tex.latex'
        , tabTrigger: 'subp'
        , uuid: '1475649F-2577-4BF0-A392-DD8D4B64DA91'
        }
      , { content: '${1:Table}~\\ref{${2:tab:}}$0'
        , name: 'Table'
        , scope: 'text.tex.latex'
        , tabTrigger: 'table'
        , uuid: '84216BD6-F6EB-4325-9485-1665E7364102'
        }
      , { content: '\\\\begin{${1:t}${1/(t)$|(a)$|(.*)/(?1:abular)(?2:rray)/}}{${2:c}}\n$0${2/((?<=.)c|l|r)|./(?1: & )/g}\n\\\\end{${1:t}${1/(t)$|(a)$|(.*)/(?1:abular)(?2:rray)/}}'
        , name: 'Tabular'
        , scope: 'text.tex.latex'
        , tabTrigger: 'tab'
        , uuid: '0E817E24-DC11-42A5-BBBD-EEF1FD282B2F'
        }
      ]
   , key: 
      [ { content: '\\\\${1:text${2:bf}}{$TM_SELECTED_TEXT}'
        , keyEquivalent: '^E'
        , name: 'Command \u2014 \\command{\u2026}'
        , scope: 'text.tex.latex'
        , uuid: '7D3548FA-AE80-11D9-8B45-000D93B6E43C'
        }
      , { content: '\\begin{${1:itemize}}\n${TM_SELECTED_TEXT/^(([^\\\\]*):\\s*)?(.+)$/\\n\\t\\item(?1: [ $2 ]) $3/g}\n\\end{${1:itemize}}\n'
        , keyEquivalent: '^L'
        , name: 'Itemize Lines in Selection'
        , scope: 'text.tex.latex'
        , uuid: 'A7B97D14-AE83-11D9-8B45-000D93B6E43C'
        }
      , { content: '\\\\[\n\t$0\n\\\\]'
        , keyEquivalent: '^['
        , name: 'Unnumbered Equation'
        , scope: 'text.tex.latex'
        , uuid: '7F7578B0-58F3-44B3-9278-1CBEA9C58208'
        }
      , { content: '\\`\\`$TM_SELECTED_TEXT\'\''
        , keyEquivalent: '^`'
        , name: 'Double Quotes'
        , scope: 'text.tex.latex'
        , uuid: '903B133A-B073-40C2-83DD-7B1E6D435A26'
        }
      , { content: '${TM_SELECTED_TEXT/(\\s*).*/$1/m}\\begin{${1:environment}}\n${TM_SELECTED_TEXT/(.+)|\\n\\z/(?1:\\t$0)/g}\n${TM_SELECTED_TEXT/(\\s*).*/$1/m}\\end{${1:environment}}\n'
        , keyEquivalent: '^@W'
        , name: 'Environment \u2014 \\begin{}\u2026\\end{}'
        , scope: 'text.tex.latex'
        , uuid: '2D7B6866-400B-4120-9EC1-0397E33169A1'
        }
      ]
   }
, 'text.tex.latex.beamer': 
   { tab: []
   , key: 
      [ { content: '<${1:+-}>'
        , keyEquivalent: '^<'
        , name: 'Beamer Overlay Specification'
        , scope: 'text.tex.latex.beamer'
        , uuid: 'BDA02D31-3097-4726-9A93-7AAA4576F676'
        }
      ]
   }
, 'text.tex.latex meta.function.environment.list': 
   { tab: 
      [ { content: '\\\\item[${1:description}] ${0:item}'
        , name: '\\item[description]'
        , scope: 'text.tex.latex meta.function.environment.list'
        , tabTrigger: 'itd'
        , uuid: 'BC8B98E2-5F16-11D9-B9C3-000D93589AF6'
        }
      ]
   , key: []
   }
, 'text.mail': 
   { tab: []
   , key: 
      [ { content: '[...]'
        , keyEquivalent: '^{'
        , name: 'Insert [...]'
        , scope: 'text.mail'
        , uuid: '40BDA523-6089-4705-9006-43EA2D17A0F1'
        }
      ]
   }
, 'text.html.markdown -meta.disable-markdown': 
   { tab: []
   , key: 
      [ { content: '  \n'
        , keyEquivalent: '^\n'
        , name: 'Hard Linebreak'
        , scope: 'text.html.markdown -meta.disable-markdown'
        , uuid: '4405912F-4AD5-40F8-93B3-A63394036ACA'
        }
      ]
   }
, 'source.objc, source.objc++ - meta.scope.implementation.objc': 
   { tab: 
      [ { content: '@interface ${1:${TM_FILENAME/\\...*$|(^$)/(?1:object)/}} : ${2:NSObject}\n{\n}\n@end\n\n@implementation $1\n- (id)init\n{\n\tif((self = [super init]))\n\t{$0\n\t}\n\treturn self;\n}\n@end'
        , name: 'Class'
        , scope: 'source.objc, source.objc++ - meta.scope.implementation.objc'
        , tabTrigger: 'cl'
        , uuid: 'BC8B9C24-5F16-11D9-B9C3-000D93589AF6'
        }
      ]
   , key: []
   }
, 'source.objc, source.objc++': 
   { tab: 
      [ { content: 'NSMutableArray${TM_C_POINTER: *}${1:array} = [NSMutableArray array];'
        , name: 'NSArray'
        , scope: 'source.objc, source.objc++'
        , tabTrigger: 'array'
        , uuid: 'BC8B9CAD-5F16-11D9-B9C3-000D93589AF6'
        }
      , { content: 'NSMutableDictionary${TM_C_POINTER: *}${1:dict} = [NSMutableDictionary dictionary];'
        , name: 'NSDictionary'
        , scope: 'source.objc, source.objc++'
        , tabTrigger: 'dict'
        , uuid: 'BC8B9D3A-5F16-11D9-B9C3-000D93589AF6'
        }
      , { content: 'unsigned int\t${1:object}Count = [${2:array} count];\n\nfor(unsigned int index = 0; index < ${1}Count; index += 1)\n{\n\t${3:id}\t${1} = [$2 objectAtIndex:index];\n\t$0\n}'
        , name: 'NSArray Loop'
        , scope: 'source.objc, source.objc++'
        , tabTrigger: 'forarray'
        , uuid: 'E0C97B6C-E546-4B73-9BEE-1207F6F920C3'
        }
      , { content: '@selector(${1:method}:)'
        , name: '@selector(\u2026)'
        , scope: 'source.objc, source.objc++'
        , tabTrigger: 'sel'
        , uuid: '7829F2EC-B8BA-11D9-AE51-000393A143CC'
        }
      , { content: '@interface ${1:${TM_FILENAME/.*?(\\w+).*|.*/(?1:$1:NSObject)/}} (${2:${TM_FILENAME/.*?\\w+\\W+(\\w+).*\\..+|.*/(?1:$1:Category)/}})\n@end\n\n@implementation $1 ($2)\n$0\n@end'
        , name: 'Category'
        , scope: 'source.objc, source.objc++'
        , tabTrigger: 'cat'
        , uuid: '27AC6270-9900-11D9-9BB8-000A95A89C98'
        }
      , { content: '@implementation ${1:${TM_FILENAME/.*?(\\w+).*|.*/(?1:$1:NSObject)/}} (${2:${TM_FILENAME/.*?\\w+\\W+(\\w+).*\\..+|.*/(?1:$1:Category)/}})\n$0\n@end'
        , name: 'Category Implementation'
        , scope: 'source.objc, source.objc++'
        , tabTrigger: 'catm'
        , uuid: '3E270C37-E7E2-4D1D-B28F-CEDD8DE0041C'
        }
      , { content: '@interface ${1:${TM_FILENAME/.*?(\\w+).*|.*/(?1:$1:NSObject)/}} (${2:${TM_FILENAME/.*?\\w+\\W+(\\w+).*\\..+|.*/(?1:$1:Category)/}})\n$0\n@end'
        , name: 'Category Interface'
        , scope: 'source.objc, source.objc++'
        , tabTrigger: 'cath'
        , uuid: '596B13EC-9900-11D9-9BB8-000A95A89C98'
        }
      , { content: '@implementation ${1:${TM_FILENAME/\\...*$|(^$)/(?1:object)/}}\n- (id)init\n{\n\tif((self = [super init]))\n\t{$0\n\t}\n\treturn self;\n}\n@end'
        , name: 'Class Implementation'
        , scope: 'source.objc, source.objc++'
        , tabTrigger: 'clm'
        , uuid: 'BE0B2832-D88E-40BF-93EE-281DDA93840B'
        }
      , { content: '@interface ${1:${TM_FILENAME/\\...*$|(^$)/(?1:object)/}} : ${2:NSObject}\n{$3\n}\n$0\n@end'
        , name: 'Class Interface'
        , scope: 'source.objc, source.objc++'
        , tabTrigger: 'clh'
        , uuid: '06F15373-9900-11D9-9BB8-000A95A89C98'
        }
      , { content: '- (${1:id})${2:attribute}\n{\n\t[self willAccessValueForKey:@"${2: attribute}"];\n\t${1:id} value = [self primitiveValueForKey:@"${2: attribute}"];\n\t[self didAccessValueForKey:@"${2: attribute}"];\n\treturn value;\n}\n\n- (void)set${2/./\\u$0/}:($1)aValue\n{\n\t[self willChangeValueForKey:@"${2: attribute}"];\n\t[self setPrimitiveValue:aValue forKey:@"${2: attribute}"];\n\t[self didChangeValueForKey:@"${2: attribute}"];\n}'
        , name: 'CoreData'
        , scope: 'source.objc, source.objc++'
        , tabTrigger: 'cdacc'
        , uuid: '563B2FDB-A163-46FE-9380-4178EFC1AD14'
        }
      , { content: 'if([${1:[self delegate]} respondsToSelector:@selector(${2:selfDidSomething:})])\n\t[$1 ${3:${2/((^\\s*([A-Za-z0-9_]*:)\\s*)|(:\\s*$)|(:\\s*))/(?2:$2self :\\:<>)(?4::)(?5: :)/g}}];\n'
        , name: 'Delegate Responds to Selector'
        , scope: 'source.objc, source.objc++'
        , tabTrigger: 'delegate'
        , uuid: '622842E6-11F7-4D7B-A322-F1B8A1FE8CE5'
        }
      , { content: '[NSThread detachNewThreadSelector:@selector(${1:method}:) toTarget:${2:aTarget} withObject:${3:anArgument}]'
        , name: 'Detach New NSThread'
        , scope: 'source.objc, source.objc++'
        , tabTrigger: 'thread'
        , uuid: '25AD69B4-905B-4EBC-A3B3-0BAB6D8BDD75'
        }
      , { content: 'IBOutlet ${1:NSSomeClass}${TM_C_POINTER: *}${2:${1/^[A-Z](?:[A-Z]+|[a-z]+)([A-Z]\\w*)/\\l$1/}};'
        , name: 'IBOutlet'
        , scope: 'source.objc, source.objc++'
        , tabTrigger: 'ibo'
        , uuid: '30C260A7-AFB1-11D9-9D48-000D93589AF6'
        }
      , { content: 'bind:@"${2:binding}" toObject:${3:observableController} withKeyPath:@"${4:keyPath}" options:${5:nil}'
        , name: 'Bind Property to Key Path of Object'
        , scope: 'source.objc, source.objc++'
        , tabTrigger: 'bind'
        , uuid: '59FC2842-A645-11D9-B2CB-000D93589AF6'
        }
      , { content: '[self lockFocus];\n$0\n[self unlockFocus];'
        , name: 'Lock Focus'
        , scope: 'source.objc, source.objc++'
        , tabTrigger: 'focus'
        , uuid: '3F57DB1B-9373-46A6-9B6E-19F2D25658DE'
        }
      , { content: 'NSAutoreleasePool${TM_C_POINTER: *}pool = [NSAutoreleasePool new];\n$0\n[pool release];'
        , name: 'NSAutoreleasePool'
        , scope: 'source.objc, source.objc++'
        , tabTrigger: 'pool'
        , uuid: 'D402B10A-149B-414D-9961-110880389A8E'
        }
      , { content: 'NSBezierPath${TM_C_POINTER: *}${1:path} = [NSBezierPath bezierPath];\n$0'
        , name: 'NSBezierPath'
        , scope: 'source.objc, source.objc++'
        , tabTrigger: 'bez'
        , uuid: '917BA9ED-9A62-11D9-9A65-000A95A89C98'
        }
      , { content: 'NSLog(@"$1"${1/[^%]*(%)?.*/(?1:, :\\);)/}$2${1/[^%]*(%)?.*/(?1:\\);)/}'
        , name: 'NSLog(\u2026)'
        , scope: 'source.objc, source.objc++'
        , tabTrigger: 'log'
        , uuid: '1251B7E8-6BF0-11D9-8384-000D93589AF6'
        }
      , { content: 'int choice = NSRunAlertPanel(@"${1:Something important!}", @"${2:Something important just happend, and now I need to ask you, do you want to continue?}", @"${3:Continue}", @"${4:Cancel}", nil);\nif(choice == NSAlertDefaultReturn) // "${3:Continue}"\n{\n\t$0;\n}\nelse if(choice == NSAlertAlternateReturn) // "${4:Cancel}"\n{\n\t\n}'
        , name: 'NSRunAlertPanel'
        , scope: 'source.objc, source.objc++'
        , tabTrigger: 'alert'
        , uuid: '9EF84198-BDAF-11D9-9140-000D93589AF6'
        }
      , { content: '[NSString stringWithFormat:@"$1", $2]$0'
        , name: 'NSString With Format'
        , scope: 'source.objc, source.objc++'
        , tabTrigger: 'format'
        , uuid: 'B07879C7-F1E0-4606-93F1-1A948965CD0E'
        }
      , { content: '[[NSUserDefaults standardUserDefaults] objectForKey:${1:key}];'
        , name: 'Read Defaults Value'
        , scope: 'source.objc, source.objc++'
        , tabTrigger: 'getprefs'
        , uuid: '3EF96A1F-B597-11D9-A114-000D93589AF6'
        }
      , { content: '${TM_COMMENT_START} ${4:Send $2 to $1, if $1 supports it}${TM_COMMENT_END}\nif ([${1:self} respondsToSelector:@selector(${2:someSelector:})])\n{\n    [$1 ${3:${2/((:\\s*$)|(:\\s*))/:<>(?3: )/g}}];\n}'
        , name: 'Responds to Selector'
        , scope: 'source.objc, source.objc++'
        , tabTrigger: 'responds'
        , uuid: '171FBCAE-0D6F-4D42-B24F-871E3BB6DFF0'
        }
      , { content: '[NSGraphicsContext saveGraphicsState];\n$0\n[NSGraphicsContext restoreGraphicsState];\n'
        , name: 'Save and Restore Graphics Context'
        , scope: 'source.objc, source.objc++'
        , tabTrigger: 'gsave'
        , uuid: 'F2D5B215-2C10-40BC-B973-0A859A3E3CBD'
        }
      , { content: '[[NSUserDefaults standardUserDefaults] setObject:${1:object} forKey:${2:key}];'
        , name: 'Write Defaults Value'
        , scope: 'source.objc, source.objc++'
        , tabTrigger: 'setprefs'
        , uuid: '53672612-B597-11D9-A114-000D93589AF6'
        }
      ]
   , key: []
   }
, '(source.objc | source.objc++) & meta.scope.implementation.objc - meta.function-with-body': 
   { tab: 
      [ { content: '- (${1:id})${2:${TM_SELECTED_TEXT:method}}${3::(${4:id})${5:${4/(NS([AEIOQUY])?(\\w+).*)|(.)?.*/(?1:a(?2:n$2)$3:(?4:anArgument))/}}}\n{$0${1/^(void|IBAction)$|(.*)/(?2:\n\treturn nil;)/}\n}'
        , keyEquivalent: '^M'
        , name: 'Method'
        , scope: '(source.objc | source.objc++) & meta.scope.implementation.objc - meta.function-with-body'
        , tabTrigger: 'm'
        , uuid: 'BC8B9DD7-5F16-11D9-B9C3-000D93589AF6'
        }
      , { content: '- (${1:id})${2:method}${3::(${4:id})${5:${4/(NS([AEIOQUY])?(\\w+).*)|(.)?.*/(?1:a(?2:n$2)$3:(?4:anArgument))/}}}\n{\n\t${1/^(void|IBAction)$|(.*)/(?2:$2 res = )/}[super ${2:method}${5/.+/:$0/}];$0${1/^(void|IBAction)$|(.*)/(?2:\n\treturn res;)/}\n}'
        , name: 'Sub-method (Call Super)'
        , scope: '(source.objc | source.objc++) & meta.scope.implementation.objc - meta.function-with-body'
        , tabTrigger: 'sm'
        , uuid: 'BC8B9E72-5F16-11D9-B9C3-000D93589AF6'
        }
      , { content: '- (${1:id})${2:thing}\n{\n\treturn $2;\n}\n\n- (void)set${2/./\\u$0/}:($1)aValue\n{\n\t$0${1/( \\*)?$/(?1:$1: )/}old${2/./\\u$0/} = $2;\n\t$2 = [aValue retain];\n\t[old${2/./\\u$0/} release];\n}'
        , name: 'Object'
        , scope: '(source.objc | source.objc++) & meta.scope.implementation.objc - meta.function-with-body'
        , tabTrigger: 'objacc'
        , uuid: '65844040-1D13-4F29-98CC-E742F151527F'
        }
      , { content: '+ (${1:id})${2:method}${3::(${4:id})${5:${4/(NS([AEIOQUY])?(\\w+).*)|(.)?.*/(?1:a(?2:n$2)$3:(?4:anArgument))/}}}\n{$0${1/^(void|IBAction)$|(.*)/(?2:\n\treturn nil;)/}\n}'
        , name: 'Class Method'
        , scope: '(source.objc | source.objc++) & meta.scope.implementation.objc - meta.function-with-body'
        , tabTrigger: 'M'
        , uuid: '1251B9E2-6BF0-11D9-8384-000D93589AF6'
        }
      , { content: '+ (void)initialize\n{\n\t[[NSUserDefaults standardUserDefaults] registerDefaults:[NSDictionary dictionaryWithObjectsAndKeys:\n\t\t$0@"value", @"key",\n\t\tnil]];\n}'
        , name: 'Method: Initialize'
        , scope: '(source.objc | source.objc++) & meta.scope.implementation.objc - meta.function-with-body'
        , tabTrigger: 'I'
        , uuid: '366DBAB0-554B-4A38-966E-793DFE13A1EC'
        }
      , { content: '- (void)add${1:Thing}:(${2:id})${3:a$1}\n{\n\t[${4:array} addObject:$3];\n}\n\n- (void)insert$1:($2)$3 atIndex:(unsigned int)i \n{\n\t[$4 insertObject:$3 atIndex:i];\n}\n\n- ($2)${1/./\\l$0/}AtIndex:(unsigned int)i\n{\n\treturn [$4 objectAtIndex:i];\n}\n\n- (unsigned int)indexOf$1:($2)$3\n{\n\treturn [$4 indexOfObject:$3];\n}\n\n- (void)remove$1AtIndex:(unsigned int)i\n{\n\t[$4 removeObjectAtIndex:i];\n}\n\n- (void)remove$1:($2)$3\n{\n\t[$4 removeObject:$3];\n}\n\n- (unsigned int)countOf$1s\n{\n\treturn [$4 count];\n}\n\n- (NSArray *)${1/./\\l$0/}s\n{\n\treturn $4;\n}\n\n- (void)set$1s:(NSArray *)new$1s\n{\n\t[$4 setArray:new$1s];\n}'
        , name: 'KVC Array'
        , scope: '(source.objc | source.objc++) & meta.scope.implementation.objc - meta.function-with-body'
        , tabTrigger: 'arracc'
        , uuid: 'DECC6BAC-94AF-429A-8609-D101C940D18D'
        }
      , { content: '- (${1:unsigned int})${2:thing}\n{\n\treturn ${3:$2};\n}\n\n- (void)set${2/./\\u$0/}:(${1:unsigned int})new${2/./\\u$0/}\n{\n\t$3 = new${2/./\\u$0/};\n}'
        , name: 'Primitive Type'
        , scope: '(source.objc | source.objc++) & meta.scope.implementation.objc - meta.function-with-body'
        , tabTrigger: 'acc'
        , uuid: 'DADC6C91-415F-463A-9C24-7A059BB5EE56'
        }
      , { content: '- (NSString${TM_C_POINTER/(^(.+?)\\s*$)?/(?1:$2: *)/})${1:thing}\n{\n\treturn ${2:$1};\n}\n\n- (void)set${1/.*/\\u$0/}:(NSString${TM_C_POINTER/(^(.+?)\\s*$)?/(?1:$2: *)/})${3:a${1/.*/\\u$0/}}\n{\n\t$3 = [$3 copy];\n\t[$2 release];\n\t$2 = $3;\n}'
        , name: 'String'
        , scope: '(source.objc | source.objc++) & meta.scope.implementation.objc - meta.function-with-body'
        , tabTrigger: 'stracc'
        , uuid: '5449EC50-98FE-11D9-9BB8-000A95A89C98'
        }
      , { content: '@synthesize ${1:property};'
        , name: 'Synthesize Property'
        , scope: '(source.objc | source.objc++) & meta.scope.implementation.objc - meta.function-with-body'
        , tabTrigger: 'syn'
        , uuid: 'C0B942C9-07CE-46B6-8FAE-CB8496F9F544'
        }
      ]
   , key: []
   }
, 'source.objc meta.scope.interface, source.objc++ meta.scope.interface': 
   { tab: 
      [ { content: '+ (${1:id})${0:method};'
        , name: 'Interface: Class Method'
        , scope: 'source.objc meta.scope.interface, source.objc++ meta.scope.interface'
        , tabTrigger: 'M'
        , uuid: '9D01148D-1073-40D2-936E-FFF67580D2B3'
        }
      , { content: '- (void)add${1:Thing}:(${2:id})${3:a$1};\n- (void)insert$1:($2)$3 atIndex:(unsigned int)i;\n- ($2)${1/./\\l$0/}AtIndex:(unsigned int)i;\n- (unsigned int)indexOf$1:($2)$3;\n- (void)remove$1AtIndex:(unsigned int)i;\n- (NSArray *)${1/./\\l$0/}s;\n- (void)set$1s:(NSArray *)new$1s;'
        , name: 'Interface: Accessors for KVC Array'
        , scope: 'source.objc meta.scope.interface, source.objc++ meta.scope.interface'
        , tabTrigger: 'arracc'
        , uuid: 'C125E6DB-7FB5-4B19-8648-0A5617B1B5BC'
        }
      , { content: '- (${1:id})${2:${TM_SELECTED_TEXT:method}}${3::(${4:id})${5:${4/(NS([AEIOQUY])?(\\w+).*)|(.)?.*/(?1:a(?2:n$2)$3:(?4:anArgument))/}}};'
        , keyEquivalent: '^M'
        , name: 'Interface: Method'
        , scope: 'source.objc meta.scope.interface, source.objc++ meta.scope.interface'
        , tabTrigger: 'm'
        , uuid: '325B0A2B-5939-4805-80A1-6DED5B373283'
        }
      , { content: '- (${1:id})${2:thing};\n- (void)set${2/./\\u$0/}:($1)aValue;'
        , name: 'Interface: Accessors for Object'
        , scope: 'source.objc meta.scope.interface, source.objc++ meta.scope.interface'
        , tabTrigger: 'objacc'
        , uuid: '013BFEBB-A744-46F1-94A5-F851635E00FA'
        }
      , { content: '@property (${1/^(e)$|.*/(?1:r)/}${1:r}${1/^(?:(r)|(e)|(c)|(a))$|.*/(?1:etain)(?2:adonly)(?3:opy)(?4:ssign)/}) ${2:NSSomeClass}${TM_C_POINTER: *}${3:${2/^[A-Z](?:[A-Z]+|[a-z]+)([A-Z]\\w*)/\\l$1/}};'
        , name: 'Property (Objective-C 2.0)'
        , scope: 'source.objc meta.scope.interface, source.objc++ meta.scope.interface'
        , tabTrigger: 'prop'
        , uuid: 'EE603767-8BA3-4F54-8DE5-0C9E64BE5DF7'
        }
      , { content: '- (${1:unsigned int})${2:thing};\n- (void)set${2/./\\u$0/}:($1)new${2/./\\u$0/};'
        , name: 'Interface: Accessors for Primitive Type'
        , scope: 'source.objc meta.scope.interface, source.objc++ meta.scope.interface'
        , tabTrigger: 'acc'
        , uuid: 'BA432891-294B-47A4-BECF-F3C95B3766C1'
        }
      , { content: '- (NSString${TM_C_POINTER/(^(.+?)\\s*$)?/(?1:$2: *)/})${1:thing};\n- (void)set${1/./\\u$0/}:(NSString${TM_C_POINTER/(^(.+?)\\s*$)?/(?1:$2: *)/})${2:a${1/.*/\\u$0/}};'
        , name: 'Interface: Accessors for String'
        , scope: 'source.objc meta.scope.interface, source.objc++ meta.scope.interface'
        , tabTrigger: 'stracc'
        , uuid: '35EB2F86-DEA0-443B-8DC2-4815F0478F67'
        }
      ]
   , key: []
   }
, 'source.objc meta.scope.implementation, source.objc++ meta.scope.implementation': 
   { tab: 
      [ { content: 'NSLog(@"%s$1", _cmd${1/[^%]*(%)?.*/(?1:, :\\);)/}$2${1/[^%]*(%)?.*/(?1:\\);)/}'
        , name: 'NSLog(.., _cmd)'
        , scope: 'source.objc meta.scope.implementation, source.objc++ meta.scope.implementation'
        , tabTrigger: 'log'
        , uuid: 'A3555C49-D367-4CF5-8032-13B291820CD3'
        }
      , { content: '[[NSNotificationCenter defaultCenter] addObserver:${1:self} selector:@selector(${3:${2/^([A-Z]{2})?(.+?)(Notification)?$/\\l$2/}}:) name:${2:NSWindowDidBecomeMainNotification} object:${4:nil}];'
        , name: 'Register for Notification'
        , scope: 'source.objc meta.scope.implementation, source.objc++ meta.scope.implementation'
        , tabTrigger: 'obs'
        , uuid: 'E8107901-70F1-45D9-8633-81BD5E57CC89'
        }
      ]
   , key: []
   }
, 'source.perl': 
   { tab: 
      [ { content: 'package ${1:ClassName};\n\n${2:use base qw(${3:ParentClass});\n\n}sub new {\n\tmy \\$class = shift;\n\t\\$class = ref \\$class if ref \\$class;\n\tmy \\$self = bless {}, \\$class;\n\t\\$self;\n}\n\n1;\n'
        , name: 'Package'
        , scope: 'source.perl'
        , tabTrigger: 'class'
        , uuid: '4FB403FC-F441-447F-9AAD-E2BE13AD49ED'
        }
      , { content: 'if ($1) {\n\t${2:# body...}\n} else {\n\t${3:# else...}\n}\n'
        , name: 'Conditional if..else'
        , scope: 'source.perl'
        , tabTrigger: 'ife'
        , uuid: 'A970FC46-17DA-4B20-A6F7-866319A3DD70'
        }
      , { content: 'if ($1) {\n\t${2:# body...}\n} elsif ($3) {\n\t${4:# elsif...}\n} else {\n\t${5:# else...}\n}\n'
        , name: 'Conditional if..elsif..else'
        , scope: 'source.perl'
        , tabTrigger: 'ifee'
        , uuid: '4EA1224E-2FBA-496D-87F4-9C92CEC2F86F'
        }
      , { content: '${1:expression} unless ${2:condition};\n'
        , name: 'Conditional One-line'
        , scope: 'source.perl'
        , tabTrigger: 'xunless'
        , uuid: '991A53EE-9471-45EC-9D78-1258AB1BC2AC'
        }
      , { content: '${1:expression} if ${2:condition};\n'
        , name: 'Conditional One-line'
        , scope: 'source.perl'
        , tabTrigger: 'xif'
        , uuid: 'EB212713-70FC-4948-AABD-C6E991060E93'
        }
      , { content: 'eval {\n\t${1:# do something risky...}\n};\nif (\\$@) {\n\t${2:# handle failure...}\n}\n'
        , name: 'Try/Except'
        , scope: 'source.perl'
        , tabTrigger: 'eval'
        , uuid: '3A524B0E-C793-429A-AC49-6FB8370D4B77'
        }
      , { content: 'for (my \\$${1:var} = 0; \\$$1 < ${2:expression}; \\$$1++) {\n\t${3:# body...}\n}\n'
        , name: 'Loop'
        , scope: 'source.perl'
        , tabTrigger: 'for'
        , uuid: 'B2A21D7E-F241-42D3-A6C4-5CA5470EC5C3'
        }
      , { content: 'foreach ${1:my \\$${2:x}} (@${3:array}) {\n\t${4:# body...}\n}\n'
        , name: 'Loop'
        , scope: 'source.perl'
        , tabTrigger: 'fore'
        , uuid: '92CEBA9A-D9C9-477B-9B34-931B0521EC79'
        }
      , { content: 'sub ${1:function_name} {\n\t${2:# body...}\n}\n'
        , name: 'Function'
        , scope: 'source.perl'
        , tabTrigger: 'sub'
        , uuid: '4734090D-F23D-4D6B-8581-AC1E1B776DCD'
        }
      , { content: 'if ($1) {\n\t${2:# body...}\n}\n'
        , name: 'Conditional'
        , scope: 'source.perl'
        , tabTrigger: 'if'
        , uuid: '07200FA1-0292-4B6B-853D-F35573A9C5C7'
        }
      , { content: '${1:expression} foreach @${2:array};\n'
        , name: 'Loop One-line'
        , scope: 'source.perl'
        , tabTrigger: 'xfore'
        , uuid: '0130788D-F714-4964-83A3-26EC0E01D3C9'
        }
      , { content: '${1:expression} while ${2:condition};\n'
        , name: 'Loop One-line'
        , scope: 'source.perl'
        , tabTrigger: 'xwhile'
        , uuid: '0154A96A-844C-4C8A-909E-A2ED822320EE'
        }
      , { content: 'my \\$${1:var};\n{ local \\$/ = undef; local *FILE; open FILE, "<${2:file}"; \\$$1 = <FILE>; close FILE }\n'
        , name: 'Read File'
        , scope: 'source.perl'
        , tabTrigger: 'slurp'
        , uuid: 'CEE866A5-FA4B-4C5D-A80C-137A620E825E'
        }
      , { content: '#!/usr/bin/perl -w\n\nuse strict;\nuse Test::More tests => ${1:1};\nuse ${2:ModuleName};\n\nok(${3:assertion});\n'
        , name: 'Test'
        , scope: 'source.perl'
        , tabTrigger: 'test'
        , uuid: '1B0FB64D-63C1-469E-B0B6-945477603B01'
        }
      , { content: 'unless ($1) {\n\t${2:# body...}\n}\n'
        , name: 'Conditional'
        , scope: 'source.perl'
        , tabTrigger: 'unless'
        , uuid: '7E294411-67C5-4886-856F-B45F0510974E'
        }
      , { content: 'while ($1) {\n\t${2:# body...}\n}\n'
        , name: 'Loop'
        , scope: 'source.perl'
        , tabTrigger: 'while'
        , uuid: '08C2210D-7F28-4FA6-93C6-D03D69A69EED'
        }
      ]
   , key: 
      [ { content: ' => '
        , keyEquivalent: '^l'
        , name: 'Hash Pointer'
        , scope: 'source.perl'
        , uuid: '4F1B9AE2-F90C-4A1B-B7D0-FE59D236B12B'
        }
      ]
   }
, 'source.php': 
   { tab: 
      [ { content: '/**\n* $1\n*/\nclass ${2:ClassName}${3: extends ${4:AnotherClass}}\n{\n\t$5\n\tfunction ${6:__construct}(${7:argument})\n\t{\n\t\t${0:# code...}\n\t}\n}\n'
        , name: 'class \u2026'
        , scope: 'source.php'
        , tabTrigger: 'class'
        , uuid: '0F39268F-8CD0-11D9-B507-000D93C8BE28'
        }
      , { content: 'function __construct(${1:\\$${2:foo}${3: = ${4:null}}}) {\n\t${2/.+/$this->$0 = \\$$0;/}$0\n}'
        , name: 'function __construct'
        , scope: 'source.php'
        , tabTrigger: 'con'
        , uuid: 'DF786227-F5C9-48A1-8C80-49306AE82B6A'
        }
      , { content: 'define(\'$1\', ${2:\'$3\'});\n$0'
        , name: 'define(\u2026, \u2026)'
        , scope: 'source.php'
        , tabTrigger: 'def'
        , uuid: '8AAEC70A-8CCF-11D9-B507-000D93C8BE28'
        }
      , { content: '$1defined(\'$2\')$0'
        , name: 'defined(\u2026)'
        , scope: 'source.php'
        , tabTrigger: 'def?'
        , uuid: 'A94E02E2-8CCF-11D9-B507-000D93C8BE28'
        }
      , { content: 'do {\n\t${0:# code...}\n} while (${1:$a <= 10});'
        , name: 'do \u2026 while \u2026'
        , scope: 'source.php'
        , tabTrigger: 'do'
        , uuid: '1C06D786-8CCF-11D9-B507-000D93C8BE28'
        }
      , { content: 'echo "${1:string}"${0};'
        , name: 'echo "\u2026"'
        , scope: 'source.php'
        , tabTrigger: 'echo'
        , uuid: '2B91DE5F-8CD0-11D9-B507-000D93C8BE28'
        }
      , { content: 'else {\n\t${0:# code...}\n}'
        , name: 'else \u2026'
        , scope: 'source.php'
        , tabTrigger: 'else'
        , uuid: '609FE8EB-B251-11D9-872D-000D93C8BE28'
        }
      , { content: 'elseif (${1:condition}) {\n\t${0:# code...}\n}'
        , name: 'elseif \u2026'
        , scope: 'source.php'
        , tabTrigger: 'elseif'
        , uuid: '61DCF7E4-8CCE-11D9-B507-000D93C8BE28'
        }
      , { content: 'for (\\$${1:i}=${2:0}; \\$${1:i} < $3; \\$${1:i}++) { \n\t${0:# code...}\n}'
        , name: 'for \u2026'
        , scope: 'source.php'
        , tabTrigger: 'for'
        , uuid: 'AC5561AA-8CCE-11D9-B507-000D93C8BE28'
        }
      , { content: 'foreach (\\$${1:variable} as \\$${2:key}${3: => \\$${4:value}}) {\n\t${0:# code...}\n}'
        , name: 'foreach \u2026'
        , scope: 'source.php'
        , tabTrigger: 'foreach'
        , uuid: 'C0229432-8CCE-11D9-B507-000D93C8BE28'
        }
      , { content: '${1:public }function ${2:FunctionName}(${3:\\$${4:value}${5:=\'\'}})\n{\n\t${0:# code...}\n}'
        , name: 'function \u2026'
        , scope: 'source.php'
        , tabTrigger: 'fun'
        , uuid: 'EC96DA26-8CCF-11D9-B507-000D93C8BE28'
        }
      , { content: 'if (${1:condition}) {\n\t${2:# code...}\n} else {\n\t${3:# code...}\n}\n$0'
        , name: 'if \u2026 else \u2026'
        , scope: 'source.php'
        , tabTrigger: 'ifelse'
        , uuid: '4B72EA1F-8CCE-11D9-B507-000D93C8BE28'
        }
      , { content: 'if (${1:condition}) {\n\t${0:# code...}\n}'
        , name: 'if \u2026'
        , scope: 'source.php'
        , tabTrigger: 'if'
        , uuid: '35F46C2E-8CCE-11D9-B507-000D93C8BE28'
        }
      , { content: '// === TextMate error handling ===\n`if [[ "$TM_BUNDLE_SUPPORT" == "$HOME"* ]]; then\n  echo "// NOTE: Your PHP bundle is checked out to your home directory."\n  echo "// If the webserver process does not have permission to access"\n  echo "// the included file, you can replace"\n  echo "// \u2018${TM_BUNDLE_SUPPORT%Bundles*}\u2019 with"\n  echo "// \u2018$(find_app TextMate.app)/Contents/SharedSupport/\u2019."\nfi`\n@include_once \'$TM_BUNDLE_SUPPORT/textmate.php\';\n'
        , name: 'Include TextMate Support Script'
        , scope: 'source.php'
        , tabTrigger: 'tmphp'
        , uuid: '6F3ABAC6-EEC9-4797-8D4A-6FD549094852'
        }
      , { content: 'include \'${1:file}\';$0'
        , name: 'include \u2026'
        , scope: 'source.php'
        , tabTrigger: 'incl'
        , uuid: '34E2C808-8CCF-11D9-B507-000D93C8BE28'
        }
      , { content: 'include_once \'${1:file}\';$0'
        , name: 'include_once \u2026'
        , scope: 'source.php'
        , tabTrigger: 'incl1'
        , uuid: '4833C612-8CCF-11D9-B507-000D93C8BE28'
        }
      , { content: '\\$${1:arrayName} = array(\'$2\' => $3${4:,} $0);'
        , name: '$\u2026 = array (\u2026)'
        , scope: 'source.php'
        , tabTrigger: 'array'
        , uuid: 'CBF8F204-8CCF-11D9-B507-000D93C8BE28'
        }
      , { bundlePath: '/Users/kumar/Library/Application Support/TextMate/Bundles/PHPDoc.tmbundle'
        , content: '/**\n * ${3:undocumented class variable}\n *\n * @var ${4:string}\n **/\n${1:var} \\$$2;$0'
        , name: 'Class Variable'
        , scope: 'source.php'
        , tabTrigger: 'doc_v'
        , uuid: '90879700-87E7-11D9-A6A3-000D93589AF6'
        }
      , { bundlePath: '/Users/kumar/Library/Application Support/TextMate/Bundles/PHPDoc.tmbundle'
        , content: '/**\n * ${3:undocumented class}\n *\n * @package ${4:default}\n * @author ${PHPDOC_AUTHOR:$TM_FULLNAME}\n **/\n$1class $2\n{$0\n} // END $1class $2'
        , name: 'Class'
        , scope: 'source.php'
        , tabTrigger: 'doc_c'
        , uuid: '9086BA3F-87E7-11D9-A6A3-000D93589AF6'
        }
      , { bundlePath: '/Users/kumar/Library/Application Support/TextMate/Bundles/PHPDoc.tmbundle'
        , content: '/**\n * ${3:undocumented constant}\n **/\ndefine($1, $2);$0'
        , name: 'Constant Definition'
        , scope: 'source.php'
        , tabTrigger: 'doc_d'
        , uuid: '9086E254-87E7-11D9-A6A3-000D93589AF6'
        }
      , { bundlePath: '/Users/kumar/Library/Application Support/TextMate/Bundles/PHPDoc.tmbundle'
        , content: '/**\n * ${4:undocumented function}\n *\n * @return ${5:void}\n * @author ${PHPDOC_AUTHOR:$TM_FULLNAME}$6\n **/\n$1function $2($3);$0'
        , keyEquivalent: ''
        , name: 'Function Signature'
        , scope: 'source.php'
        , tabTrigger: 'doc_s'
        , uuid: '908774B1-87E7-11D9-A6A3-000D93589AF6'
        }
      , { bundlePath: '/Users/kumar/Library/Application Support/TextMate/Bundles/PHPDoc.tmbundle'
        , content: '/**\n * ${4:undocumented function}\n *\n * @return ${5:void}\n * @author ${PHPDOC_AUTHOR:$TM_FULLNAME}$6\n **/\n$1function $2($3)\n{$0\n}'
        , name: 'Function'
        , scope: 'source.php'
        , tabTrigger: 'doc_f'
        , uuid: '9087051B-87E7-11D9-A6A3-000D93589AF6'
        }
      , { bundlePath: '/Users/kumar/Library/Application Support/TextMate/Bundles/PHPDoc.tmbundle'
        , content: '/**\n * $1\n *\n * @author ${PHPDOC_AUTHOR:$TM_FULLNAME}\n * @version \\$Id\\$\n * @copyright `echo $TM_ORGANIZATION_NAME`, `date +"%e %B, %Y" | sed \'s/^ //\'`\n * @package ${3:default}\n **/\n\n/**\n * Define DocBlock\n **/\n'
        , name: 'Header'
        , scope: 'source.php'
        , tabTrigger: 'doc_h'
        , uuid: '90872B90-87E7-11D9-A6A3-000D93589AF6'
        }
      , { bundlePath: '/Users/kumar/Library/Application Support/TextMate/Bundles/PHPDoc.tmbundle'
        , content: '/**\n * ${2:undocumented class}\n *\n * @package ${3:default}\n * @author ${PHPDOC_AUTHOR:$TM_FULLNAME}\n **/\ninterface $1\n{$0\n} // END interface $1'
        , name: 'Interface'
        , scope: 'source.php'
        , tabTrigger: 'doc_i'
        , uuid: '90874D6F-87E7-11D9-A6A3-000D93589AF6'
        }
      , { content: 'require \'${1:file}\';$0'
        , name: 'require \u2026'
        , scope: 'source.php'
        , tabTrigger: 'req'
        , uuid: '60129434-8CCF-11D9-B507-000D93C8BE28'
        }
      , { content: 'require_once \'${1:file}\';$0'
        , name: 'require_once \u2026'
        , scope: 'source.php'
        , tabTrigger: 'req1'
        , uuid: '6E25DCEF-8CCF-11D9-B507-000D93C8BE28'
        }
      , { content: '/**\n * $0\n */'
        , name: 'Start Docblock'
        , scope: 'source.php'
        , tabTrigger: '/**'
        , uuid: '775F7FCC-C43C-4C23-B935-9D5F6C25CF1D'
        }
      , { content: 'case \'${1:variable}\':\n\t${0:# code...}\n\tbreak;'
        , name: 'case \u2026'
        , scope: 'source.php'
        , tabTrigger: 'case'
        , uuid: 'F262B1FA-8CCE-11D9-B507-000D93C8BE28'
        }
      , { content: 'switch (${1:variable}) {\n\tcase \'${2:value}\':\n\t\t${3:# code...}\n\t\tbreak;\n\t$0\n\tdefault:\n\t\t${4:# code...}\n\t\tbreak;\n}'
        , name: 'switch \u2026'
        , scope: 'source.php'
        , tabTrigger: 'switch'
        , uuid: 'DA4B6728-8CCE-11D9-B507-000D93C8BE28'
        }
      , { content: 'throw new $1Exception(${2:"${3:Error Processing Request}"}${4:, ${5:1}});\n$0'
        , name: 'Throw Exception'
        , scope: 'source.php'
        , tabTrigger: 'throw'
        , uuid: 'FE39640E-A69C-48DF-9282-633672AAEFD2'
        }
      , { content: '${TM_SELECTED_TEXT/([\\t ]*).*/$1/m}try {\n\t${3:${TM_SELECTED_TEXT/(\\A.*)|(.+)|\\n\\z/(?1:$0:(?2:\\t$0))/g}}\n${TM_SELECTED_TEXT/([\\t ]*).*/$1/m}} catch (${1:Exception} ${2:\\$e}) {\n${TM_SELECTED_TEXT/([\\t ]*).*/$1/m}\t$0\n${TM_SELECTED_TEXT/([\\t ]*).*/$1/m}}'
        , keyEquivalent: '^@W'
        , name: 'Wrap in try { \u2026 } catch (\u2026) { \u2026 }\n'
        , scope: 'source.php'
        , tabTrigger: 'try'
        , uuid: 'F7751DAF-AC95-4D47-955F-FE2534FDE4F5'
        }
      , { content: 'while (${1:$a <= 10}) {\n\t${0:# code...}\n}'
        , name: 'while \u2026'
        , scope: 'source.php'
        , tabTrigger: 'while'
        , uuid: '0D955946-8CCF-11D9-B507-000D93C8BE28'
        }
      ]
   , key: []
   }
, 'meta.consecutive-tags.php': 
   { tab: []
   , key: 
      [ { content: '\n\t$0\n'
        , keyEquivalent: '\n'
        , name: 'Special: Return Between PHP Tags'
        , scope: 'meta.consecutive-tags.php'
        , uuid: '89385241-0117-42AE-BDAE-0471554CC3DF'
        }
      ]
   }
, 'text.xml.plist': 
   { tab: 
      [ { content: '<array>\n\t$0\n</array>'
        , name: 'array'
        , scope: 'text.xml.plist'
        , tabTrigger: 'array'
        , uuid: '8980A4DF-5255-4F70-8D4A-ED3BE0DAED0E'
        }
      , { content: '<data>\n\t$1\n</data>'
        , name: 'data'
        , scope: 'text.xml.plist'
        , tabTrigger: 'data'
        , uuid: '9D710F5B-7E88-4CA1-B866-E00C3E52AAFC'
        }
      , { content: '<date>${1:YYYY}${2/.+/-/}${2:MM}${3/.+/-/}${3:DD}${4/.+/T/}${4:hh}${5/.+/:/}${5:mm}${6/.+/:/}${6:ss}${4/.+/Z/}</date>'
        , name: 'date'
        , scope: 'text.xml.plist'
        , tabTrigger: 'date'
        , uuid: '87529322-785A-4446-840F-6E669BE03063'
        }
      , { content: '<dict>\n\t$0\n</dict>'
        , name: 'dict'
        , scope: 'text.xml.plist'
        , tabTrigger: 'dict'
        , uuid: '6F380BCA-86F8-411A-9570-8479727A40C6'
        }
      , { content: '<false/>'
        , name: 'false'
        , scope: 'text.xml.plist'
        , tabTrigger: 'f'
        , uuid: '46E6D569-E146-4116-AB4C-D74D6463F160'
        }
      , { content: '<integer>$1</integer>'
        , name: 'integer'
        , scope: 'text.xml.plist'
        , tabTrigger: 'int'
        , uuid: '9A9CF12C-A358-48E2-A79D-4BA484164B21'
        }
      , { content: '<key>$1</key>'
        , name: 'key'
        , scope: 'text.xml.plist'
        , tabTrigger: 'key'
        , uuid: 'CB054597-2636-45F7-B620-93E3E1CBE917'
        }
      , { content: '<?xml version="1.0" encoding="UTF-8"?>\n<!DOCTYPE plist PUBLIC "-//Apple Computer//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">\n<plist version="1.0">\n$0\n</plist>'
        , name: 'plist'
        , scope: 'text.xml.plist'
        , tabTrigger: 'plist'
        , uuid: '38A33B03-FD95-47C9-9525-423BCD737932'
        }
      , { content: '<real>$1</real>'
        , name: 'real'
        , scope: 'text.xml.plist'
        , tabTrigger: 'real'
        , uuid: 'E8DC4BC2-C315-4159-B0F7-24902F2C01BE'
        }
      , { content: '<string>$1</string>'
        , name: 'string'
        , scope: 'text.xml.plist'
        , tabTrigger: 'str'
        , uuid: 'B454B512-8514-4293-AF58-60CE3FFDB05A'
        }
      , { content: '<true/>'
        , name: 'true'
        , scope: 'text.xml.plist'
        , tabTrigger: 't'
        , uuid: '651313F5-EC36-48F2-A815-838D47B67BEF'
        }
      ]
   , key: []
   }
, 'source.python': 
   { tab: 
      [ { content: '__${1:init}__'
        , name: '__magic__'
        , scope: 'source.python'
        , tabTrigger: '__'
        , uuid: '2E4E82B5-7E7A-4E23-B095-799DDCDB8F75'
        }
      , { content: 'if __name__ == \'__main__\':\n\t${1:main()}$0'
        , name: 'if __name__ == \'__main__\''
        , scope: 'source.python'
        , tabTrigger: 'ifmain'
        , uuid: 'FD868CF0-FEF8-471B-BB6D-F2D7F54F71F3'
        }
      , { content: 'class ${1:ClassName}(${2:object}):\n\t${3/.+/"""/}${3:docstring for $1}${3/.+/"""\\n/}${3/.+/\\t/}def __init__(self${4/([^,])?(.*)/(?1:, )/}${4:arg}):\n\t\t${5:super($1, self).__init__()}\n${4/(\\A\\s*,\\s*\\Z)|,?\\s*([A-Za-z_][a-zA-Z0-9_]*)\\s*(=[^,]*)?(,\\s*|$)/(?2:\\t\\tself.$2 = $2\\n)/g}\t\t$0'
        , name: 'New Class'
        , scope: 'source.python'
        , tabTrigger: 'class'
        , uuid: '659D189C-EC3E-4C4E-9377-B7F5F5216CBD'
        }
      , { content: 'def ${1:fname}(${2:`if [ "$TM_CURRENT_LINE" != "" ]\n\t\t\t\t# poor man\'s way ... check if there is an indent or not\n\t\t\t\t# (cuz we would have lost the class scope by this point)\n\t\t\t\tthen\n\t\t\t\t\techo "self"\n\t\t\t\tfi`}):\n\t${3/.+/"""/}${3:docstring for $1}${3/.+/"""\\n/}${3/.+/\\t/}${0:pass}'
        , name: 'New Function'
        , scope: 'source.python'
        , tabTrigger: 'def'
        , uuid: '6499BB56-7BB5-11D9-8E83-000D93B6E43C'
        }
      , { content: 'def ${1:mname}(self${2/([^,])?.*/(?1:, )/}${2:arg}):\n\t${3:pass}'
        , name: 'New Method'
        , scope: 'source.python'
        , tabTrigger: 'defs'
        , uuid: '70E8843A-A8C0-44FC-ACF3-3DEAE48AE784'
        }
      , { content: 'def ${1:foo}():\n    doc = "${2:The $1 property.}"\n    def fget(self):\n        ${3:return self._$1}\n    def fset(self, value):\n        ${4:self._$1 = value}\n    def fdel(self):\n        ${5:del self._$1}\n    return locals()\n$1 = property(**$1())$0'
        , name: 'New Property'
        , scope: 'source.python'
        , tabTrigger: 'property'
        , uuid: '195B332F-4464-4539-9FB3-D89152C960DC'
        }
      , { content: 'self.'
        , name: 'self'
        , scope: 'source.python'
        , tabTrigger: '.'
        , uuid: 'E8128DB6-AF28-4ABA-A1EE-334584D19BE5'
        }
      , { content: 'try:\n\t${1:pass}\nexcept ${2:Exception}, ${3:e}:\n\t${4:raise $3}'
        , name: 'Try/Except'
        , scope: 'source.python'
        , tabTrigger: 'try'
        , uuid: '495317BD-13D7-46F9-8A2F-8D234653A3F0'
        }
      , { content: 'try:\n\t${1:pass}\nexcept ${2:Exception}, ${3:e}:\n\t${4:raise $3}\nelse:\n\t${5:pass}'
        , name: 'Try/Except/Else'
        , scope: 'source.python'
        , tabTrigger: 'try'
        , uuid: '4D382FF4-C740-4250-B4AE-7299DD6B4D3A'
        }
      , { content: 'try:\n\t${1:pass}\nexcept${2: ${3:Exception}, ${4:e}}:\n\t${5:raise}\nelse:\n\t${6:pass}\nfinally:\n\t${7:pass}'
        , name: 'Try/Except/Else/Finally'
        , scope: 'source.python'
        , tabTrigger: 'try'
        , uuid: '2FB8153A-1ABE-44A7-A760-763BA141724B'
        }
      , { content: 'try:\n\t${1:pass}\nexcept ${2:Exception}, ${3:e}:\n\t${4:raise $3}\nfinally:\n\t${5:pass}'
        , name: 'Try/Except/Finally'
        , scope: 'source.python'
        , tabTrigger: 'try'
        , uuid: 'EEFC5039-2CD4-4CAA-BCCC-41011864596E'
        }
      ]
   , key: []
   }
, 'source.python meta.class.python invalid.illegal.missing-inheritance.python': 
   { tab: []
   , key: 
      [ { content: '(${0:object}):'
        , keyEquivalent: '('
        , name: 'Inside Class Def: Insert (..):'
        , scope: 'source.python meta.class.python invalid.illegal.missing-inheritance.python'
        , uuid: '8CE4655C-3BAE-489F-BF42-89FB6B4C4119'
        }
      ]
   }
, 'source.python meta.function.python invalid.illegal.missing-parameters.python': 
   { tab: []
   , key: 
      [ { content: '($0):'
        , keyEquivalent: '('
        , name: 'Inside Function Def: Insert (..):'
        , scope: 'source.python meta.function.python invalid.illegal.missing-parameters.python'
        , uuid: '09C00F1F-859E-455D-BD1B-C8F48CEFB078'
        }
      ]
   }
, 'source.python string.quoted.single.single-line meta.empty-string.single': 
   { tab: []
   , key: 
      [ { content: '\'$0\''
        , keyEquivalent: '\''
        , name: 'Inside String: Insert \'\u2026\''
        , scope: 'source.python string.quoted.single.single-line meta.empty-string.single'
        , uuid: '1BAD838C-8B2A-45FD-9AD2-7F3DCA2DD388'
        }
      ]
   }
, 'source.ruby comment': 
   { tab: 
      [ { content: ' :yields: ${0:arguments}'
        , name: ':yields:'
        , scope: 'source.ruby comment'
        , tabTrigger: 'y'
        , uuid: 'ED6368FB-A11D-4622-9F42-7879481094F1'
        }
      ]
   , key: []
   }
, '(string.quoted.double.ruby|string.interpolated.ruby) - string source': 
   { tab: []
   , key: 
      [ { content: '#{${1:$TM_SELECTED_TEXT}}'
        , keyEquivalent: '#'
        , name: 'Embedded Code \u2014 #{\u2026}'
        , scope: '(string.quoted.double.ruby|string.interpolated.ruby) - string source'
        , uuid: 'EEE6D060-C5A0-400D-A2E0-0835013C5365'
        }
      ]
   }
, 'source.ruby - string - comment': 
   { tab: 
      [ { content: '{ ${1/(^(?<var>\\s*[a-z_][a-zA-Z0-9_]*\\s*)(,\\g<var>)*,?\\s*$)|.*/(?1:|)/}${1:variable}${1/(^(?<var>\\s*[a-z_][a-zA-Z0-9_]*\\s*)(,\\g<var>)*,?\\s*$)|.*/(?1:| )/}${2:$TM_SELECTED_TEXT} '
        , name: 'Insert { |variable| \u2026 }'
        , scope: 'source.ruby - string - comment'
        , tabTrigger: '{'
        , uuid: '855FC4EF-7B1E-48EE-AD4E-5ECB8ED79D1C'
        }
      ]
   , key: []
   }
, 'source.ruby - comment': 
   { tab: 
      [ { content: '${TM_SELECTED_TEXT/([\\t ]*).*/$1/m}begin\n\t${3:${TM_SELECTED_TEXT/(\\A.*)|(.+)|\\n\\z/(?1:$0:(?2:\\t$0))/g}}\n${TM_SELECTED_TEXT/([\\t ]*).*/$1/m}rescue ${1:Exception}${2/.+/ => /}${2:e}\n${TM_SELECTED_TEXT/([\\t ]*).*/$1/m}\t$0\n${TM_SELECTED_TEXT/([\\t ]*).*/$1/m}end\n'
        , keyEquivalent: '^W'
        , name: 'begin \u2026 rescue \u2026 end'
        , scope: 'source.ruby - comment'
        , tabTrigger: 'begin'
        , uuid: '0F940CBC-2173-49FF-B6FD-98A62863F8F2'
        }
      ]
   , key: []
   }
, 'source.yaml': 
   { tab: 
      [ { content: '${TM_RAILS_TEMPLATE_START_RUBY_EXPR}Fixtures.identify(:${1:name})${TM_RAILS_TEMPLATE_END_RUBY_EXPR}$0'
        , name: '<%= Fixtures.identify(:symbol) %>'
        , scope: 'source.yaml'
        , tabTrigger: 'fi'
        , uuid: '9671EB7A-89D6-4C23-914F-88CBEE0D177A'
        }
      ]
   , key: []
   }
, 'text.html.ruby, text.haml': 
   { tab: 
      [ { content: '${TM_RAILS_TEMPLATE_START_RUBY_INLINE}form_tag(${1::action => "${5:update}"}${6:, {:${8:class} => "${9:form}"\\}}) do${TM_RAILS_TEMPLATE_END_RUBY_EXPR}\n  $0\n${TM_RAILS_TEMPLATE_END_RUBY_BLOCK}'
        , name: 'form_tag'
        , scope: 'text.html.ruby, text.haml'
        , tabTrigger: 'ft'
        , uuid: 'F0F6DACA-6A0B-11D9-BDC2-000D932CD5BA'
        }
      , { content: '${TM_RAILS_TEMPLATE_START_RUBY_EXPR}f.check_box :${1:attribute}${TM_RAILS_TEMPLATE_END_RUBY_EXPR}'
        , name: 'form_for check_box'
        , scope: 'text.html.ruby, text.haml'
        , tabTrigger: 'ffcb'
        , uuid: 'F0DB6886-4FFE-45BA-907F-44326AD8142D'
        }
      , { content: '${TM_RAILS_TEMPLATE_START_RUBY_EXPR}f.check_box :${1:attribute}${TM_RAILS_TEMPLATE_END_RUBY_EXPR}'
        , name: 'f.check_box (ffcb)'
        , scope: 'text.html.ruby, text.haml'
        , tabTrigger: 'f.'
        , uuid: 'F579F9E7-E072-4BCC-BFF9-C8C5BAE7FFA5'
        }
      , { content: '${TM_RAILS_TEMPLATE_START_RUBY_EXPR}f.file_field :${1:attribute}${TM_RAILS_TEMPLATE_END_RUBY_EXPR}'
        , name: 'form_for file_field'
        , scope: 'text.html.ruby, text.haml'
        , tabTrigger: 'ffff'
        , uuid: 'C8BA285D-E12E-4AB8-A941-514C963E8226'
        }
      , { content: '${TM_RAILS_TEMPLATE_START_RUBY_EXPR}f.file_field :${1:attribute}${TM_RAILS_TEMPLATE_END_RUBY_EXPR}'
        , name: 'f.file_field (ffff)'
        , scope: 'text.html.ruby, text.haml'
        , tabTrigger: 'f.'
        , uuid: '79BC2303-3D9D-4E21-AF85-73B388B7B56D'
        }
      , { content: '${TM_RAILS_TEMPLATE_START_RUBY_EXPR}f.hidden_field :${1:attribute}${TM_RAILS_TEMPLATE_END_RUBY_EXPR}'
        , name: 'form_for hidden_field'
        , scope: 'text.html.ruby, text.haml'
        , tabTrigger: 'ffhf'
        , uuid: '99FEFD9B-5A07-46E3-950D-5C474E42B695'
        }
      , { content: '${TM_RAILS_TEMPLATE_START_RUBY_EXPR}f.hidden_field :${1:attribute}${TM_RAILS_TEMPLATE_END_RUBY_EXPR}'
        , name: 'f.hidden_field (ffhf)'
        , scope: 'text.html.ruby, text.haml'
        , tabTrigger: 'f.'
        , uuid: '5DBA8F72-DD6C-4CBF-83FD-76301E159BA9'
        }
      , { content: '${TM_RAILS_TEMPLATE_START_RUBY_EXPR}f.label :${1:attribute}${2:, "${3:${1/[[:alpha:]]+|(_)/(?1: :\\u$0)/g}}"}${TM_RAILS_TEMPLATE_END_RUBY_EXPR}'
        , name: 'form_for label'
        , scope: 'text.html.ruby, text.haml'
        , tabTrigger: 'ffl'
        , uuid: 'B31822D9-2048-4D16-B2AF-00E0B4E5C368'
        }
      , { content: '${TM_RAILS_TEMPLATE_START_RUBY_EXPR}f.label :${1:attribute}${2:, "${3:${1/[[:alpha:]]+|(_)/(?1: :\\u$0)/g}}"}${TM_RAILS_TEMPLATE_END_RUBY_EXPR}'
        , name: 'f.label (ffl)'
        , scope: 'text.html.ruby, text.haml'
        , tabTrigger: 'f.'
        , uuid: '402C251E-595B-4A58-8EB9-41989040F280'
        }
      , { content: '${TM_RAILS_TEMPLATE_START_RUBY_EXPR}f.password_field :${1:attribute}${TM_RAILS_TEMPLATE_END_RUBY_EXPR}'
        , name: 'form_for password_field'
        , scope: 'text.html.ruby, text.haml'
        , tabTrigger: 'ffpf'
        , uuid: '3379FB35-C664-4255-96C6-6E4B91F12759'
        }
      , { content: '${TM_RAILS_TEMPLATE_START_RUBY_EXPR}f.password_field :${1:attribute}${TM_RAILS_TEMPLATE_END_RUBY_EXPR}'
        , name: 'f.password_field (ffpf)'
        , scope: 'text.html.ruby, text.haml'
        , tabTrigger: 'f.'
        , uuid: '42289456-C8D1-498C-AE30-5206544B349F'
        }
      , { content: '${TM_RAILS_TEMPLATE_START_RUBY_EXPR}f.radio_box :${1:attribute}, :${2:tag_value}${TM_RAILS_TEMPLATE_END_RUBY_EXPR}'
        , name: 'form_for radio_box'
        , scope: 'text.html.ruby, text.haml'
        , tabTrigger: 'ffrb'
        , uuid: 'D4282CE1-4171-4B13-9220-3F2718BC2505'
        }
      , { content: '${TM_RAILS_TEMPLATE_START_RUBY_EXPR}f.radio_box :${1:attribute}, :${2:tag_value}${TM_RAILS_TEMPLATE_END_RUBY_EXPR}'
        , name: 'f.radio_box (ffrb)'
        , scope: 'text.html.ruby, text.haml'
        , tabTrigger: 'f.'
        , uuid: 'A95358D2-C68A-4894-8C36-062C9F45848A'
        }
      , { content: '${TM_RAILS_TEMPLATE_START_RUBY_EXPR}f.submit "${1:Submit}"${2:, :disable_with => \'${3:$1ing...}\'}${TM_RAILS_TEMPLATE_END_RUBY_EXPR}'
        , name: 'form_for submit'
        , scope: 'text.html.ruby, text.haml'
        , tabTrigger: 'ffs'
        , uuid: '3000E569-4E19-4566-B08E-A3FFFAAC9075'
        }
      , { content: '${TM_RAILS_TEMPLATE_START_RUBY_EXPR}f.submit "${1:Submit}"${2:, :disable_with => \'${3:$1ing...}\'}${TM_RAILS_TEMPLATE_END_RUBY_EXPR}'
        , name: 'f.submit (ffs)'
        , scope: 'text.html.ruby, text.haml'
        , tabTrigger: 'f.'
        , uuid: 'C315EC5D-A7F3-49CB-9795-21B78BB42FF4'
        }
      , { content: '${TM_RAILS_TEMPLATE_START_RUBY_EXPR}f.text_area :${1:attribute}${TM_RAILS_TEMPLATE_END_RUBY_EXPR}'
        , name: 'form_for text_area'
        , scope: 'text.html.ruby, text.haml'
        , tabTrigger: 'ffta'
        , uuid: '4C898FA8-D09C-4B28-BE42-14BB4EA4E2B1'
        }
      , { content: '${TM_RAILS_TEMPLATE_START_RUBY_EXPR}f.text_area :${1:attribute}${TM_RAILS_TEMPLATE_END_RUBY_EXPR}'
        , name: 'f.text_area (ffta)'
        , scope: 'text.html.ruby, text.haml'
        , tabTrigger: 'f.'
        , uuid: '06498926-F84D-466C-8736-B8A0AC586A94'
        }
      , { content: '${TM_RAILS_TEMPLATE_START_RUBY_EXPR}f.text_field :${1:attribute}${TM_RAILS_TEMPLATE_END_RUBY_EXPR}'
        , name: 'form_for text_field'
        , scope: 'text.html.ruby, text.haml'
        , tabTrigger: 'fftf'
        , uuid: 'F46EE8EE-239C-46D7-980B-3F861B7D9111'
        }
      , { content: '${TM_RAILS_TEMPLATE_START_RUBY_EXPR}f.text_field :${1:attribute}${TM_RAILS_TEMPLATE_END_RUBY_EXPR}'
        , name: 'f.text_field (fftf)'
        , scope: 'text.html.ruby, text.haml'
        , tabTrigger: 'f.'
        , uuid: 'CC1BCD1C-2479-4335-B511-17B880316A75'
        }
      , { content: '${TM_RAILS_TEMPLATE_START_RUBY_EXPR}error_messages_for :${1:model}${TM_RAILS_TEMPLATE_END_RUBY_EXPR}\n\n${TM_RAILS_TEMPLATE_START_RUBY_INLINE}form_for @${2:$1} do |f|${TM_RAILS_TEMPLATE_END_RUBY_INLINE}\n  $0\n${TM_RAILS_TEMPLATE_END_RUBY_BLOCK}'
        , name: 'form_for with errors'
        , scope: 'text.html.ruby, text.haml'
        , tabTrigger: 'ffe'
        , uuid: '15BDD7B6-5C15-4684-93C7-A05E3D2221AC'
        }
      , { content: '${TM_RAILS_TEMPLATE_START_RUBY_INLINE}form_for @${1:model} do |f|${TM_RAILS_TEMPLATE_END_RUBY_INLINE}\n  $0\n${TM_RAILS_TEMPLATE_END_RUBY_BLOCK}'
        , name: 'form_for'
        , scope: 'text.html.ruby, text.haml'
        , tabTrigger: 'ff'
        , uuid: '7D99041D-C3B7-4940-AE64-6B1758CDB47C'
        }
      , { content: '${TM_RAILS_TEMPLATE_START_RUBY_EXPR}image_submit_tag("${1:agree.png}"${2:${3:, :id => "${4:${1/^(\\w+)(\\.\\w*)?$/$1/}}"}${5:, :name => "${6:${1/^(\\w+)(\\.\\w*)?$/$1/}}"}${7:, :class => "${8:${1/^(\\w+)(\\.\\w*)?$/$1/}-button}"}${9:, :disabled => ${10:false}}})${TM_RAILS_TEMPLATE_END_RUBY_EXPR}'
        , name: 'image_submit_tag'
        , scope: 'text.html.ruby, text.haml'
        , tabTrigger: 'ist'
        , uuid: '9FB9848E-EA5A-11DC-9DE5-00112475D960'
        }
      , { content: '${TM_RAILS_TEMPLATE_START_RUBY_EXPR}link_to "${1:link text...}", :action => "${2:index}"${TM_RAILS_TEMPLATE_END_RUBY_EXPR}'
        , name: 'link_to (action)'
        , scope: 'text.html.ruby, text.haml'
        , tabTrigger: 'lia'
        , uuid: '9E2B42FE-7BC8-11D9-906A-000D932CD5BA'
        }
      , { content: '${TM_RAILS_TEMPLATE_START_RUBY_EXPR}link_to "${1:link text...}", :action => "${2:edit}", :id => ${3:@item}${TM_RAILS_TEMPLATE_END_RUBY_EXPR}'
        , name: 'link_to (action, id)'
        , scope: 'text.html.ruby, text.haml'
        , tabTrigger: 'liai'
        , uuid: 'B4F952F4-7BC8-11D9-906A-000D932CD5BA'
        }
      , { content: '${TM_RAILS_TEMPLATE_START_RUBY_EXPR}link_to "${1:link text...}", :controller => "${2:items}"${TM_RAILS_TEMPLATE_END_RUBY_EXPR}'
        , name: 'link_to (controller)'
        , scope: 'text.html.ruby, text.haml'
        , tabTrigger: 'lic'
        , uuid: '74590E16-7BCB-11D9-906A-000D932CD5BA'
        }
      , { content: '${TM_RAILS_TEMPLATE_START_RUBY_EXPR}link_to "${1:link text...}", :controller => "${2:items}", :action => "${3:index}"${TM_RAILS_TEMPLATE_END_RUBY_EXPR}'
        , name: 'link_to (controller, action)'
        , scope: 'text.html.ruby, text.haml'
        , tabTrigger: 'lica'
        , uuid: 'C11C0BF5-7BC8-11D9-906A-000D932CD5BA'
        }
      , { content: '${TM_RAILS_TEMPLATE_START_RUBY_EXPR}link_to "${1:link text...}", :controller => "${2:items}", :action => "${3:edit}", :id => ${4:@item}${TM_RAILS_TEMPLATE_END_RUBY_EXPR}'
        , name: 'link_to (controller, action, id)'
        , scope: 'text.html.ruby, text.haml'
        , tabTrigger: 'licai'
        , uuid: 'D21BE958-7BC8-11D9-906A-000D932CD5BA'
        }
      , { content: '${TM_RAILS_TEMPLATE_START_RUBY_EXPR}link_to ${1:"${2:link text...}"}, ${3:${10:parent}_${11:child}_path(${12:@}${13:${10}})}${TM_RAILS_TEMPLATE_END_RUBY_EXPR}'
        , name: 'link_to (nested path plural)'
        , scope: 'text.html.ruby, text.haml'
        , tabTrigger: 'linpp'
        , uuid: '866AAD87-E458-4F2D-9E7C-3CE73EFC047B'
        }
      , { content: '${TM_RAILS_TEMPLATE_START_RUBY_EXPR}link_to ${1:"${2:link text...}"}, ${3:${12:parent}_${13:child}_path(${14:@}${15:${12}}, ${16:@}${17:${13}})}${TM_RAILS_TEMPLATE_END_RUBY_EXPR}'
        , name: 'link_to (nested path)'
        , scope: 'text.html.ruby, text.haml'
        , tabTrigger: 'linp'
        , uuid: '750DEEF9-18A0-40FC-8E54-574CE5EE5565'
        }
      , { content: '${TM_RAILS_TEMPLATE_START_RUBY_EXPR}link_to ${1:"${2:link text...}"}, ${3:${4:model}s_path}${TM_RAILS_TEMPLATE_END_RUBY_EXPR}'
        , name: 'link_to (path plural)'
        , scope: 'text.html.ruby, text.haml'
        , tabTrigger: 'lipp'
        , uuid: '6BA737F0-63D1-4D82-9381-4331E18B12C5'
        }
      , { content: '${TM_RAILS_TEMPLATE_START_RUBY_EXPR}link_to ${1:"${2:link text...}"}, ${3:${12:model}_path(${13:@}${14:${12}})}${TM_RAILS_TEMPLATE_END_RUBY_EXPR}'
        , name: 'link_to (path)'
        , scope: 'text.html.ruby, text.haml'
        , tabTrigger: 'lip'
        , uuid: '326B57A7-B4A9-447B-A3D2-0EA74158E1E1'
        }
      , { content: '${TM_RAILS_TEMPLATE_START_RUBY_EXPR}link_to ${1:model}.${2:name}, ${3:${4:$1}_path(${14:$1})}${TM_RAILS_TEMPLATE_END_RUBY_EXPR}'
        , name: 'link_to model'
        , scope: 'text.html.ruby, text.haml'
        , tabTrigger: 'lim'
        , uuid: 'E5E08AA0-4EDD-4583-BF07-5D6C49E98410'
        }
      , { content: '${TM_RAILS_TEMPLATE_START_RUBY_EXPR}submit_tag "${1:Save changes}"${2:, :id => "${3:submit}"}${4:, :name => "${5:$3}"}${6:, :class => "${7:form_$3}"}${8:, :disabled => ${9:false}}${10:, :disable_with => "${11:Please wait...}"}${TM_RAILS_TEMPLATE_END_RUBY_EXPR}'
        , name: 'submit_tag'
        , scope: 'text.html.ruby, text.haml'
        , tabTrigger: 'st'
        , uuid: 'D0E29200-E910-11DC-A399-00112475D960'
        }
      ]
   , key: []
   }
, 'source.ruby.rails': 
   { tab: 
      [ { content: 'after_create '
        , name: 'after_create'
        , scope: 'source.ruby.rails'
        , tabTrigger: 'aftc'
        , uuid: '279D1981-B055-4693-B9AF-5B571A62A6AE'
        }
      , { content: 'after_destroy '
        , name: 'after_destroy'
        , scope: 'source.ruby.rails'
        , tabTrigger: 'aftd'
        , uuid: 'A2F3E8C1-4216-4890-8491-2F8C7534ED03'
        }
      , { content: 'after_save '
        , name: 'after_save'
        , scope: 'source.ruby.rails'
        , tabTrigger: 'afts'
        , uuid: '4D1787E3-1583-4CF3-8D99-CC45D7C35EED'
        }
      , { content: 'after_update '
        , name: 'after_update'
        , scope: 'source.ruby.rails'
        , tabTrigger: 'aftu'
        , uuid: '0C9EA1A1-66C5-4E1C-9C30-E1FFE8EC6EAE'
        }
      , { content: 'after_validation '
        , name: 'after_validation'
        , scope: 'source.ruby.rails'
        , tabTrigger: 'aftv'
        , uuid: '44FBD811-70A9-462B-AC56-F975ADAD62AF'
        }
      , { content: 'after_validation_on_create '
        , name: 'after_validation_on_create'
        , scope: 'source.ruby.rails'
        , tabTrigger: 'aftvoc'
        , uuid: 'BA0DE6C7-EAD3-42C9-8ABB-2B9A5F2FE225'
        }
      , { content: 'after_validation_on_update '
        , name: 'after_validation_on_update'
        , scope: 'source.ruby.rails'
        , tabTrigger: 'aftvou'
        , uuid: 'BCB25D36-2D3F-41E9-B2CF-37D6E883E8D1'
        }
      , { content: 'assert_redirected_to ${10:${2:parent}_${3:child}_path(${4:@}${5:${2}})}'
        , name: 'assert_redirected_to (nested path plural)'
        , scope: 'source.ruby.rails'
        , tabTrigger: 'artnpp'
        , uuid: '4C92C020-7337-4D6E-91EE-7ABF2BFC7F41'
        }
      , { content: 'assert_redirected_to ${2:${12:parent}_${13:child}_path(${14:@}${15:${12}}, ${16:@}${17:${13}})}'
        , name: 'assert_redirected_to (nested path)'
        , scope: 'source.ruby.rails'
        , tabTrigger: 'artnp'
        , uuid: '97021C0D-EB65-4046-B688-01F09B3B1615'
        }
      , { content: 'assert_redirected_to ${10:${2:model}s_path}'
        , name: 'assert_redirected_to (path plural)'
        , scope: 'source.ruby.rails'
        , tabTrigger: 'artpp'
        , uuid: '0249637E-0720-46DA-A8FD-E176A2CC458B'
        }
      , { content: 'assert_redirected_to ${2:${12:model}_path(${13:@}${14:${12}})}'
        , name: 'assert_redirected_to (path)'
        , scope: 'source.ruby.rails'
        , tabTrigger: 'artp'
        , uuid: 'D33EDCE7-F8AF-48D4-AA7A-852BBF03E31D'
        }
      , { content: 'assert_rjs :${1:replace}, ${2:"${3:dom id}"}'
        , name: 'assert_rjs'
        , scope: 'source.ruby.rails'
        , tabTrigger: 'asrj'
        , uuid: 'E0F281EC-5311-41F8-ADD9-2E2D059DA651'
        }
      , { content: 'assert_select \'${1:path}\'${2:, :${3:text} => ${4:\'${5:inner_html}\'}}${6: do\n\t$0\nend}'
        , name: 'assert_select'
        , scope: 'source.ruby.rails'
        , tabTrigger: 'ass'
        , uuid: 'DBE14FE8-B415-4DBC-A316-F8DA63FE9FD7'
        }
      , { content: 'before_create '
        , name: 'before_create'
        , scope: 'source.ruby.rails'
        , tabTrigger: 'befc'
        , uuid: 'D64D8863-DCB6-4397-B5B0-073E0AE04167'
        }
      , { content: 'before_destroy '
        , name: 'before_destroy'
        , scope: 'source.ruby.rails'
        , tabTrigger: 'befd'
        , uuid: '3F4B502B-5F68-4687-88E9-6EF3BDF9677D'
        }
      , { content: 'before_save '
        , name: 'before_save'
        , scope: 'source.ruby.rails'
        , tabTrigger: 'befs'
        , uuid: '523BE8A6-0845-493D-A9B6-532F73D21950'
        }
      , { content: 'before_update '
        , name: 'before_update'
        , scope: 'source.ruby.rails'
        , tabTrigger: 'befu'
        , uuid: '1C20EEBE-B4BA-48C8-9B33-7B5BB00D958C'
        }
      , { content: 'before_validation '
        , name: 'before_validation'
        , scope: 'source.ruby.rails'
        , tabTrigger: 'befv'
        , uuid: 'A1776279-5396-4FE9-9218-8BF2C88C5271'
        }
      , { content: 'before_validation_on_create '
        , name: 'before_validation_on_create'
        , scope: 'source.ruby.rails'
        , tabTrigger: 'befvoc'
        , uuid: 'E2CE2E3B-8A61-4866-9AF5-A12F44CF7233'
        }
      , { content: 'before_validation_on_update'
        , name: 'before_validation_on_update'
        , scope: 'source.ruby.rails'
        , tabTrigger: 'befvou'
        , uuid: '86CFB156-E72B-440F-9C7D-08A3375C3ADB'
        }
      , { content: 'belongs_to :${1:object}${2:, :class_name => "${3:${1/[[:alpha:]]+|(_)/(?1::\\u$0)/g}}", :foreign_key => "${4:${1}_id}"}'
        , name: 'belongs_to'
        , scope: 'source.ruby.rails'
        , tabTrigger: 'bt'
        , uuid: 'B8F08BD7-6160-482C-8A3D-CBC6BD2079A4'
        }
      , { content: 'cattr_accessor :${0:attr_names}'
        , name: 'cattr_accessor'
        , scope: 'source.ruby.rails'
        , tabTrigger: 'crw'
        , uuid: 'F57522B2-9F5F-4DF9-AE46-9478AF019C63'
        }
      , { content: 'find(:all${1:, :conditions => [\'${2:${3:field} = ?}\', ${5:true}]})'
        , name: 'find(:all)'
        , scope: 'source.ruby.rails'
        , tabTrigger: 'fina'
        , uuid: 'A017AB39-A875-40DC-8ACF-7E3551057CA0'
        }
      , { content: 'find(:first${1:, :conditions => [\'${2:${3:field} = ?}\', ${5:true}]})'
        , name: 'find(:first)'
        , scope: 'source.ruby.rails'
        , tabTrigger: 'finf'
        , uuid: 'FE430ECD-5D40-4D95-A73B-F064C73992DE'
        }
      , { content: 'find(${1:id})'
        , name: 'find(id)'
        , scope: 'source.ruby.rails'
        , tabTrigger: 'fini'
        , uuid: '59CD3A41-8164-4FB4-B462-D7ACE86BCDBF'
        }
      , { content: 'has_and_belongs_to_many :${1:object}${2:, :join_table => "${3:table_name}", :foreign_key => "${4:${1}_id}"}'
        , name: 'has_and_belongs_to_many'
        , scope: 'source.ruby.rails'
        , tabTrigger: 'habtm'
        , uuid: '2AC3AC1F-743B-4A33-863C-C37885073806'
        }
      , { content: 'has_many :${1:object}s${2:, :class_name => "${1}", :foreign_key => "${4:reference}_id"}'
        , name: 'has_many'
        , scope: 'source.ruby.rails'
        , tabTrigger: 'hm'
        , uuid: 'F396B7BD-8255-48B1-904A-06E7D7CC2741'
        }
      , { content: 'has_many :${1:objects}, :through => :${2:join_association}${3:, :source => :${4:${2}_table_foreign_key_to_${1}_table}}'
        , name: 'has_many (through)'
        , scope: 'source.ruby.rails'
        , tabTrigger: 'hmt'
        , uuid: '9D58B6C9-BA52-48B3-B639-D5CB894AF810'
        }
      , { content: 'has_one :${1:object}${2:, :class_name => "${3:${1/[[:alpha:]]+|(_)/(?1::\\u$0)/g}}", :foreign_key => "${4:${1}_id}"}'
        , name: 'has_one'
        , scope: 'source.ruby.rails'
        , tabTrigger: 'ho'
        , uuid: 'BD2E4045-54E6-450E-B31B-5E1865CFFBC9'
        }
      , { content: 'logger.debug { "${1:message}" }$0'
        , name: 'logger.debug'
        , scope: 'source.ruby.rails'
        , tabTrigger: 'logd'
        , uuid: 'D975E5C1-42C2-40F1-8960-0DA533B18113'
        }
      , { content: 'logger.error { "${1:message}" }$0'
        , name: 'logger.error'
        , scope: 'source.ruby.rails'
        , tabTrigger: 'loge'
        , uuid: '7053B86A-9B81-4154-AB3C-61B8035C5D33'
        }
      , { content: 'logger.fatal { "${1:message}" }$0'
        , name: 'logger.fatal'
        , scope: 'source.ruby.rails'
        , tabTrigger: 'logf'
        , uuid: '35E95C81-22F7-4C40-8297-ED21086DDA81'
        }
      , { content: 'logger.info { "${1:message}" }$0'
        , name: 'logger.info'
        , scope: 'source.ruby.rails'
        , tabTrigger: 'logi'
        , uuid: '36E2A3EE-E9CC-4B7F-A4CF-AFAF970B8699'
        }
      , { content: 'logger.warn { "${1:message}" }$0'
        , name: 'logger.warn'
        , scope: 'source.ruby.rails'
        , tabTrigger: 'logw'
        , uuid: '38D5CA05-E219-4399-A244-609AF40B1D0B'
        }
      , { content: 'mattr_accessor :${0:attr_names}'
        , name: 'mattr_accessor'
        , scope: 'source.ruby.rails'
        , tabTrigger: 'mrw'
        , uuid: 'B25B7560-FACB-4A9E-A226-B71C796BD1F3'
        }
      , { content: 'named_scope :name, lambda { |${1:param}| { :conditions => ${3:[\'${4:${5:field} = ?}\', ${6:$1}]} } }\n'
        , name: 'named_scope lambda'
        , scope: 'source.ruby.rails'
        , tabTrigger: 'ncl'
        , uuid: '4E286CB4-069E-474C-A970-95216FE7DE95'
        }
      , { content: 'named_scope :name${1:, :joins => :${2:table}}, :conditions => ${3:[\'${4:${5:field} = ?}\', ${6:true}]}\n'
        , name: 'named_scope'
        , scope: 'source.ruby.rails'
        , tabTrigger: 'nc'
        , uuid: '1CB65A0D-4FEC-4438-9B4F-8B0BD13FB875'
        }
      , { content: 'flash[:${1:notice}] = "${2:Successfully created...}"$0'
        , name: 'flash[\u2026]'
        , scope: 'source.ruby.rails'
        , tabTrigger: 'flash'
        , uuid: 'D864896E-8763-11D9-897C-000393CBCE2E'
        }
      , { content: 'RAILS_DEFAULT_LOGGER.debug "${1:message}"$0'
        , name: 'RAILS_DEFAULT_LOGGER.debug'
        , scope: 'source.ruby.rails'
        , tabTrigger: 'rdb'
        , uuid: '7B15B396-1F41-4529-9253-32761E94448C'
        }
      , { content: 'redirect_to :action => "${1:index}"'
        , name: 'redirect_to (action)'
        , scope: 'source.ruby.rails'
        , tabTrigger: 'rea'
        , uuid: 'F2F3167C-73B9-11D9-B752-000D932CD5BA'
        }
      , { content: 'redirect_to :action => "${1:show}", :id => ${0:@item}'
        , name: 'redirect_to (action, id)'
        , scope: 'source.ruby.rails'
        , tabTrigger: 'reai'
        , uuid: '2233B484-73BA-11D9-B752-000D932CD5BA'
        }
      , { content: 'redirect_to :controller => "${1:items}"'
        , name: 'redirect_to (controller)'
        , scope: 'source.ruby.rails'
        , tabTrigger: 'rec'
        , uuid: '053490FE-73BA-11D9-B752-000D932CD5BA'
        }
      , { content: 'redirect_to :controller => "${1:items}", :action => "${2:list}"'
        , name: 'redirect_to (controller, action)'
        , scope: 'source.ruby.rails'
        , tabTrigger: 'reca'
        , uuid: '0C137FBF-73BA-11D9-B752-000D932CD5BA'
        }
      , { content: 'redirect_to :controller => "${1:items}", :action => "${2:show}", :id => ${0:@item}'
        , name: 'redirect_to (controller, action, id)'
        , scope: 'source.ruby.rails'
        , tabTrigger: 'recai'
        , uuid: '18D3C1C3-73BA-11D9-B752-000D932CD5BA'
        }
      , { content: 'redirect_to(${2:${10:parent}_${11:child}_path(${12:@}${13:${10}})})'
        , name: 'redirect_to (nested path plural)'
        , scope: 'source.ruby.rails'
        , tabTrigger: 'renpp'
        , uuid: 'EF527A27-D1D4-4FD8-BD23-71397881C29A'
        }
      , { content: 'redirect_to(${2:${12:parent}_${13:child}_path(${14:@}${15:${12}}, ${16:@}${17:${13}})})'
        , name: 'redirect_to (nested path)'
        , scope: 'source.ruby.rails'
        , tabTrigger: 'renp'
        , uuid: '9D7228B3-A6ED-4598-B096-032B3600864F'
        }
      , { content: 'redirect_to(${2:${10:model}s_path})'
        , name: 'redirect_to (path plural)'
        , scope: 'source.ruby.rails'
        , tabTrigger: 'repp'
        , uuid: 'AFE06B67-CE98-42A6-93D1-8EC8E3B9F83C'
        }
      , { content: 'redirect_to(${2:${12:model}_path(${13:@}${14:${12}})})'
        , name: 'redirect_to (path)'
        , scope: 'source.ruby.rails'
        , tabTrigger: 'rep'
        , uuid: 'A909C4C3-8EFE-4E39-9D96-BA8F0ABE6085'
        }
      , { content: 'render :action => "${1:action}"'
        , name: 'render (action)'
        , scope: 'source.ruby.rails'
        , tabTrigger: 'ra'
        , uuid: '7B03D38B-7580-41AC-BC2B-3766AB074A43'
        }
      , { content: 'render :action => "${1:action}", :layout => "${2:layoutname}"'
        , name: 'render (action, layout)'
        , scope: 'source.ruby.rails'
        , tabTrigger: 'ral'
        , uuid: '053F1D6A-B413-43FF-B697-E3120FD0489F'
        }
      , { content: 'render :file => "${1:filepath}"'
        , name: 'render (file)'
        , scope: 'source.ruby.rails'
        , tabTrigger: 'rf'
        , uuid: '7D43B0EA-2C3C-499B-9346-A8E48CBF29CD'
        }
      , { content: 'render :file => "${1:filepath}", :use_full_path => ${2:false}'
        , name: 'render (file, use_full_path)'
        , scope: 'source.ruby.rails'
        , tabTrigger: 'rfu'
        , uuid: '2A8FBE48-E196-4019-AE76-BF3ED4B54F47'
        }
      , { content: 'render :inline => "${1:<%= \'hello\' %>}"'
        , name: 'render (inline)'
        , scope: 'source.ruby.rails'
        , tabTrigger: 'ri'
        , uuid: '64E93A71-6E62-48D9-9694-123080AE6723'
        }
      , { content: 'render :inline => "${1:<%= \'hello\' %>}", :locals => { ${2::name} => "${3:value}"$4 }'
        , name: 'render (inline, locals)'
        , scope: 'source.ruby.rails'
        , tabTrigger: 'ril'
        , uuid: '1E5DE984-510C-4992-8AD5-C5FA6D7F2A88'
        }
      , { content: 'render :inline => "${1:<%= \'hello\' %>}", :type => ${2::rxml}'
        , name: 'render (inline, type)'
        , scope: 'source.ruby.rails'
        , tabTrigger: 'rit'
        , uuid: 'A8AF8B90-94E8-42E1-8057-DDBA57809F6A'
        }
      , { content: 'render :layout => "${1:layoutname}"'
        , name: 'render (layout)'
        , scope: 'source.ruby.rails'
        , tabTrigger: 'rl'
        , uuid: '3F83272F-62D5-4BCB-BAA3-806083078829'
        }
      , { content: 'render :nothing => ${1:true}'
        , name: 'render (nothing)'
        , scope: 'source.ruby.rails'
        , tabTrigger: 'rn'
        , uuid: 'AC8A995F-0034-433C-905D-E5C1F29D6EFF'
        }
      , { content: 'render :nothing => ${1:true}, :status => ${2:401}'
        , name: 'render (nothing, status)'
        , scope: 'source.ruby.rails'
        , tabTrigger: 'rns'
        , uuid: '724A68C1-A727-46FF-AF59-288E26B09629'
        }
      , { content: 'render :partial => "${1:item}"'
        , name: 'render (partial)'
        , scope: 'source.ruby.rails'
        , tabTrigger: 'rp'
        , uuid: '498168A5-5AF8-4F59-8A2D-B517FAB98CDB'
        }
      , { content: 'render :partial => "${1:item}", :collection => ${2:@$1s}'
        , name: 'render (partial, collection)'
        , scope: 'source.ruby.rails'
        , tabTrigger: 'rpc'
        , uuid: '046FB1B6-9C65-4702-91EC-4AA9878CD949'
        }
      , { content: 'render :partial => "${1:item}", :locals => { :${2:$1} => ${3:@$1}$0 }'
        , name: 'render (partial, locals)'
        , scope: 'source.ruby.rails'
        , tabTrigger: 'rpl'
        , uuid: '6F41AFFD-B3A7-42D0-8A84-D6086C118D92'
        }
      , { content: 'render :partial => "${1:item}", :object => ${2:@$1}'
        , name: 'render (partial, object)'
        , scope: 'source.ruby.rails'
        , tabTrigger: 'rpo'
        , uuid: 'BFAAC8DA-A043-4684-967B-B3E5DAE08C62'
        }
      , { content: 'render :partial => "${1:item}", :status => ${2:500}'
        , name: 'render (partial, status)'
        , scope: 'source.ruby.rails'
        , tabTrigger: 'rps'
        , uuid: 'CBB06A4E-3A82-45F3-91AA-259F02314B9D'
        }
      , { content: 'render :text => "${1:text to render...}"'
        , name: 'render (text)'
        , scope: 'source.ruby.rails'
        , tabTrigger: 'rt'
        , uuid: '67C5082F-5011-434A-8EAA-6B8D3600935F'
        }
      , { content: 'render :text => "${1:text to render...}", :layout => "${2:layoutname}"'
        , name: 'render (text, layout)'
        , scope: 'source.ruby.rails'
        , tabTrigger: 'rtl'
        , uuid: 'A3B09AFE-40B5-4623-8B85-E9F369ECE22D'
        }
      , { content: 'render :text => "${1:text to render...}", :layout => ${2:true}'
        , name: 'render (text, layout => true)'
        , scope: 'source.ruby.rails'
        , tabTrigger: 'rtlt'
        , uuid: '97C0992D-715F-4322-A3E0-DD4D2B7E2FC2'
        }
      , { content: 'render :text => "${1:text to render...}", :status => ${2:401}'
        , name: 'render (text, status)'
        , scope: 'source.ruby.rails'
        , tabTrigger: 'rts'
        , uuid: '4F636977-F7A6-4BF5-B09B-7F087683C3B9'
        }
      , { content: 'render :update do |${2:page}|\n\t$2.$0\nend'
        , name: 'render (update)'
        , scope: 'source.ruby.rails'
        , tabTrigger: 'ru'
        , uuid: 'ECB10C0B-E8B7-4606-ABF5-4A2A26E5AB1A'
        }
      , { content: 'returning ${1:variable} do${2/(^(?<var>\\s*[a-z_][a-zA-Z0-9_]*\\s*)(,\\g<var>)*,?\\s*$)|.*/(?1: |)/}${2:v}${2/(^(?<var>\\s*[a-z_][a-zA-Z0-9_]*\\s*)(,\\g<var>)*,?\\s*$)|.*/(?1:|)/}\n\t$0\nend'
        , name: 'returning do |variable| \u2026 end'
        , scope: 'source.ruby.rails'
        , tabTrigger: 'returning'
        , uuid: 'D2783155-23F3-4B90-A317-5BD139471193'
        }
      , { content: 'assert_redirected_to ${2::action => "${1:index}"}'
        , name: 'assert_redirected_to'
        , scope: 'source.ruby.rails'
        , tabTrigger: 'art'
        , uuid: 'CD60F800-850D-47CF-BE32-3DE665DD5C68'
        }
      , { content: 'assert_response :${1:success}, @response.body$0'
        , name: 'assert_response'
        , scope: 'source.ruby.rails'
        , tabTrigger: 'asre'
        , uuid: '2BD82DCB-1F19-4C8F-BC70-C0BBB06A2138'
        }
      , { content: 'validates_acceptance_of :${1:terms}${2:${3:, :accept => "${4:1}"}${5:, :message => "${6:You must accept the terms of service}"}}, :if => proc { |obj| ${7:obj.condition?} }}'
        , name: 'validates_acceptance_of if'
        , scope: 'source.ruby.rails'
        , tabTrigger: 'vaoif'
        , uuid: 'A2477223-AD5A-4723-8052-943CE9BA634D'
        }
      , { content: 'validates_acceptance_of :${1:terms}${2:${3:, :accept => "${4:1}"}${5:, :message => "${6:You must accept the terms of service}"}}'
        , name: 'validates_acceptance_of'
        , scope: 'source.ruby.rails'
        , tabTrigger: 'vao'
        , uuid: '89198999-7E6D-4D97-A20E-45263E1CA993'
        }
      , { content: 'validates_associated :${1:attribute}${2:, :on => :${3:create}}'
        , name: 'validates_associated'
        , scope: 'source.ruby.rails'
        , tabTrigger: 'va'
        , uuid: '47944705-F605-4ED4-B4C0-9E823EE25138'
        }
      , { content: 'validates_associated :${1:attribute}${2:, :on => :${3:create}, :if => proc { |obj| ${5:obj.condition?} }}'
        , name: 'validates_associated if'
        , scope: 'source.ruby.rails'
        , tabTrigger: 'vaif'
        , uuid: '85E9264C-5414-4FA0-AC07-F305A798ED46'
        }
      , { content: 'validates_confirmation_of :${1:attribute}${2:, :on => :${3:create}, :message => "${4:should match confirmation}"}'
        , name: 'validates_confirmation_of'
        , scope: 'source.ruby.rails'
        , tabTrigger: 'vc'
        , uuid: 'B5893618-D07C-48F1-8867-736D0AAFF0E7'
        }
      , { content: 'validates_confirmation_of :${1:attribute}${2:, :on => :${3:create}, :message => "${4:should match confirmation}", :if => proc { |obj| ${5:obj.condition?} }}'
        , name: 'validates_confirmation_of if'
        , scope: 'source.ruby.rails'
        , tabTrigger: 'vcif'
        , uuid: '1354726C-DA64-4CA6-A099-26626A865D8D'
        }
      , { content: 'validates_exclusion_of :${1:attribute}${2:, :in => ${3:%w( ${4:mov avi} )}, :on => :${5:create}, :message => "${6:extension %s is not allowed}"}'
        , name: 'validates_exclusion_of'
        , scope: 'source.ruby.rails'
        , tabTrigger: 've'
        , uuid: '4CC98A56-B60B-4A89-80E0-400C5314A050'
        }
      , { content: 'validates_exclusion_of :${1:attribute}${2:, :in => ${3:%w( ${4:mov avi} )}, :on => :${5:create}, :message => "${6:extension %s is not allowed}"}, :if => proc { |obj| ${7:obj.condition?} }}'
        , name: 'validates_exclusion_of if'
        , scope: 'source.ruby.rails'
        , tabTrigger: 'veif'
        , uuid: '869AB0B7-12DD-440A-905A-BFB1E0E16E1C'
        }
      , { content: 'validates_format_of :${1:attribute}, :with => /${2:^[${3:\\w\\d}]+\\$}/${4:, :on => :${5:create}, :message => "${6:is invalid}"}, :if => proc { |obj| ${7:obj.condition?} }}'
        , name: 'validates_format_of if'
        , scope: 'source.ruby.rails'
        , tabTrigger: 'vfif'
        , uuid: '14BF0586-F2E8-4AB3-BB4B-E49099384403'
        }
      , { content: 'validates_format_of :${1:attribute}, :with => /${2:^[${3:\\w\\d}]+\\$}/${4:, :on => :${5:create}, :message => "${6:is invalid}"}'
        , name: 'validates_format_of'
        , scope: 'source.ruby.rails'
        , tabTrigger: 'vf'
        , uuid: 'EB47FBA1-AFB3-42F9-94A4-552D3175C17A'
        }
      , { content: 'validates_inclusion_of :${1:attribute}${2:, :in => ${3:%w( ${4:mov avi} )}, :on => :${5:create}, :message => "${6:extension %s is not included in the list}"}, :if => proc { |obj| ${7:obj.condition?} }}'
        , name: 'validates_inclusion_of if'
        , scope: 'source.ruby.rails'
        , tabTrigger: 'viif'
        , uuid: '47FF50AF-E9BF-11DC-8518-00112475D960'
        }
      , { content: 'validates_inclusion_of :${1:attribute}${2:, :in => ${3:%w( ${4:mov avi} )}, :on => :${5:create}, :message => "${6:extension %s is not included in the list}"}'
        , name: 'validates_inclusion_of'
        , scope: 'source.ruby.rails'
        , tabTrigger: 'vi'
        , uuid: '4611F02E-E9BF-11DC-8518-00112475D960'
        }
      , { content: 'validates_length_of :${1:attribute}, :within => ${2:3..20}${3:, :on => :${4:create}, :message => "${5:must be present}"}'
        , name: 'validates_length_of'
        , scope: 'source.ruby.rails'
        , tabTrigger: 'vl'
        , uuid: '5CE8838A-BF2C-497E-B87A-E90C3BC482E0'
        }
      , { content: 'validates_length_of :${1:attribute}, :within => ${2:3..20}${3:, :on => :${4:create}, :message => "${5:must be present}"}, :if => proc { |obj| ${6:obj.condition?} }}'
        , name: 'validates_length_of if'
        , scope: 'source.ruby.rails'
        , tabTrigger: 'vlif'
        , uuid: 'EC511A43-D3B7-11DC-BA49-00112475D960'
        }
      , { content: 'validates_numericality_of :${1:attribute}${2:, :on => :${3:create}, :message => "${4:is not a number}"}, :if => proc { |obj| ${5:obj.condition?} }}'
        , name: 'validates_numericality_of if'
        , scope: 'source.ruby.rails'
        , tabTrigger: 'vnif'
        , uuid: 'CF506019-E964-4172-A3DA-475AE3B65558'
        }
      , { content: 'validates_numericality_of :${1:attribute}${2:, :on => :${3:create}, :message => "${4:is not a number}"}'
        , name: 'validates_numericality_of'
        , scope: 'source.ruby.rails'
        , tabTrigger: 'vn'
        , uuid: 'B21BA16D-7C04-4912-8488-425CDCC332A8'
        }
      , { content: 'validates_presence_of :${1:attribute}${2:, :on => :${3:create}, :message => "${4:can\'t be blank}"}'
        , name: 'validates_presence_of'
        , scope: 'source.ruby.rails'
        , tabTrigger: 'vp'
        , uuid: '5DAC28A7-33C8-4DA7-9E85-56618D6BEC9F'
        }
      , { content: 'validates_presence_of :${1:attribute}${2:, :on => :${3:create}, :message => "${4:can\'t be blank}"}, :if => proc { |obj| ${5:obj.condition?} }}'
        , name: 'validates_presence_of if'
        , scope: 'source.ruby.rails'
        , tabTrigger: 'vpif'
        , uuid: 'F5CBBE16-F5CC-4EDA-8BC6-30281BD7D854'
        }
      , { content: 'validates_uniqueness_of :${1:attribute}${2:, :on => :${3:create}, :message => "${4:must be unique}"}'
        , name: 'validates_uniqueness_of'
        , scope: 'source.ruby.rails'
        , tabTrigger: 'vu'
        , uuid: 'F8316545-9AE4-4C7F-87ED-A2C00E6637FA'
        }
      , { content: 'validates_uniqueness_of :${1:attribute}${2:, :on => :${3:create}, :message => "${4:must be unique}", :if => proc { |obj| ${6:obj.condition?} }}'
        , name: 'validates_uniqueness_of if'
        , scope: 'source.ruby.rails'
        , tabTrigger: 'vuif'
        , uuid: '43680344-0818-42BF-95B4-58CD2D76545B'
        }
      , { bundlePath: '/Users/tobi/Library/Application Support/TextMate/Bundles/Custom.tmbundle'
        , content: 'verify :only => [:$1], :method => :post, :render => {:status => 500, :text => "use HTTP-POST"}\n'
        , name: 'verify \u2014 render'
        , scope: 'source.ruby.rails'
        , tabTrigger: 'verify'
        , uuid: '9ECBF20C-003E-41D9-A881-4BAC0656F9DC'
        }
      , { bundlePath: '/Users/tobi/Library/Application Support/TextMate/Bundles/Custom.tmbundle'
        , content: 'verify :only => [:$1], :session => :user, :params => :id, :redirect_to => {:action => \'${2:index}\'}\n'
        , name: 'verify \u2014 redirect'
        , scope: 'source.ruby.rails'
        , tabTrigger: 'verify'
        , uuid: '7BBD3F57-57A5-4CD0-8E79-B931021FC110'
        }
      , { content: 'xhr :delete, :${1:destroy}, :id => ${2:1}$0'
        , name: 'xhr delete'
        , scope: 'source.ruby.rails'
        , tabTrigger: 'xdelete'
        , uuid: 'F1BE0C3D-7203-43E9-BEFB-D1A99CDD31C1'
        }
      , { content: 'xhr :get, :${1:show}${2:, :id => ${3:1}}$0'
        , name: 'xhr get'
        , scope: 'source.ruby.rails'
        , tabTrigger: 'xget'
        , uuid: '78FCF992-D01B-404F-BC54-5EE7B91F999A'
        }
      , { content: 'xhr :post, :${1:create}, :${2:object} => { $3 }'
        , name: 'xhr post'
        , scope: 'source.ruby.rails'
        , tabTrigger: 'xpost'
        , uuid: '62C3838B-0790-4FC2-8425-F273A57F5D33'
        }
      , { content: 'xhr :put, :${1:update}, :id => ${2:1}, :${3:object} => { $4 }$0'
        , name: 'xhr put'
        , scope: 'source.ruby.rails'
        , tabTrigger: 'xput'
        , uuid: 'C12C98A5-74E5-4E70-9ADB-8783455D6539'
        }
      ]
   , key: 
      [ { content: 'params[:${1:id}]'
        , keyEquivalent: '^p'
        , name: 'params[\u2026]'
        , scope: 'source.ruby.rails'
        , uuid: 'AC8EDA3E-875B-11D9-897C-000393CBCE2E'
        }
      , { content: 'session[:${1:user}]'
        , keyEquivalent: '^j'
        , name: 'session[\u2026]'
        , scope: 'source.ruby.rails'
        , uuid: '7B02ABF8-8763-11D9-897C-000393CBCE2E'
        }
      ]
   }
, 'meta.rails.migration.create_table, meta.rails.migration.change_table': 
   { tab: 
      [ { content: 't.binary :${1:title}${2:, :limit => ${3:2}.megabytes}\n$0'
        , name: 'Table column binary'
        , scope: 'meta.rails.migration.create_table, meta.rails.migration.change_table'
        , tabTrigger: 'tcbi'
        , uuid: '5E9B8B0E-D532-11DC-BD8E-00112475D960'
        }
      , { content: 't.boolean :${1:title}\n$0'
        , name: 'Table column boolean'
        , scope: 'meta.rails.migration.create_table, meta.rails.migration.change_table'
        , tabTrigger: 'tcb'
        , uuid: '967093B4-D532-11DC-BD8E-00112475D960'
        }
      , { content: 't.date :${1:title}\n$0'
        , name: 'Table column date'
        , scope: 'meta.rails.migration.create_table, meta.rails.migration.change_table'
        , tabTrigger: 'tcda'
        , uuid: '56276686-D532-11DC-BD8E-00112475D960'
        }
      , { content: 't.datetime :${1:title}\n$0'
        , name: 'Table column datetime'
        , scope: 'meta.rails.migration.create_table, meta.rails.migration.change_table'
        , tabTrigger: 'tcdt'
        , uuid: 'D6CBCA96-D52F-11DC-BD8E-00112475D960'
        }
      , { content: 't.decimal :${1:title}${2:${3:, :precision => ${4:10}}${5:, :scale => ${6:2}}}\n$0'
        , name: 'Table column decimal'
        , scope: 'meta.rails.migration.create_table, meta.rails.migration.change_table'
        , tabTrigger: 'tcd'
        , uuid: '93A16768-D52E-11DC-BD8E-00112475D960'
        }
      , { content: 't.float :${1:title}\n$0'
        , name: 'Table column float'
        , scope: 'meta.rails.migration.create_table, meta.rails.migration.change_table'
        , tabTrigger: 'tcf'
        , uuid: '8AF989C4-D52E-11DC-BD8E-00112475D960'
        }
      , { content: 't.integer :${1:title}\n$0'
        , name: 'Table column integer'
        , scope: 'meta.rails.migration.create_table, meta.rails.migration.change_table'
        , tabTrigger: 'tci'
        , uuid: '729D559E-D52D-11DC-BD8E-00112475D960'
        }
      , { content: 't.integer :lock_version, :null => false, :default => 0\n$0'
        , name: 'Table column lock_version'
        , scope: 'meta.rails.migration.create_table, meta.rails.migration.change_table'
        , tabTrigger: 'tcl'
        , uuid: 'FC2523C1-D532-11DC-BD8E-00112475D960'
        }
      , { content: 't.references :${1:taggable}${2:, :polymorphic => ${3:{ :default => \'${4:Photo}\' \\}}}\n$0'
        , name: 'Table column(s) references'
        , scope: 'meta.rails.migration.create_table, meta.rails.migration.change_table'
        , tabTrigger: 'tcr'
        , uuid: 'EDA6568B-D533-11DC-BD8E-00112475D960'
        }
      , { content: 't.string :${1:title}\n$0'
        , name: 'Table column string'
        , scope: 'meta.rails.migration.create_table, meta.rails.migration.change_table'
        , tabTrigger: 'tcs'
        , uuid: '377BF814-D52D-11DC-BD8E-00112475D960'
        }
      , { content: 't.text :${1:title}\n$0'
        , name: 'Table column text'
        , scope: 'meta.rails.migration.create_table, meta.rails.migration.change_table'
        , tabTrigger: 'tct'
        , uuid: '6A9D4C30-D52D-11DC-BD8E-00112475D960'
        }
      , { content: 't.time :${1:title}\n$0'
        , name: 'Table column time'
        , scope: 'meta.rails.migration.create_table, meta.rails.migration.change_table'
        , tabTrigger: 'tcti'
        , uuid: '4F5DDD37-D532-11DC-BD8E-00112475D960'
        }
      , { content: 't.timestamp :${1:title}\n$0'
        , name: 'Table column timestamp'
        , scope: 'meta.rails.migration.create_table, meta.rails.migration.change_table'
        , tabTrigger: 'tcts'
        , uuid: '4600CE20-D532-11DC-BD8E-00112475D960'
        }
      , { content: 't.timestamps\n$0'
        , name: 'Table column timestamps'
        , scope: 'meta.rails.migration.create_table, meta.rails.migration.change_table'
        , tabTrigger: 'tctss'
        , uuid: 'E0C8FDC4-D532-11DC-BD8E-00112475D960'
        }
      , { content: 't.binary :${1:title}${2:, :limit => ${3:2}.megabytes}\nt.$0'
        , name: 't.binary (tcbi)'
        , scope: 'meta.rails.migration.create_table, meta.rails.migration.change_table'
        , tabTrigger: 't.'
        , uuid: '7CE57C6C-E4BE-11DC-A11A-00112475D960'
        }
      , { content: 't.boolean :${1:title}\nt.$0'
        , name: 't.boolean (tcb)'
        , scope: 'meta.rails.migration.create_table, meta.rails.migration.change_table'
        , tabTrigger: 't.'
        , uuid: '6BE6F315-E4BE-11DC-A11A-00112475D960'
        }
      , { content: 't.date :${1:title}\nt.$0'
        , name: 't.date (tcda)'
        , scope: 'meta.rails.migration.create_table, meta.rails.migration.change_table'
        , tabTrigger: 't.'
        , uuid: '61CF5B32-E4BE-11DC-A11A-00112475D960'
        }
      , { content: 't.datetime :${1:title}\nt.$0'
        , name: 't.datetime (tcdt)'
        , scope: 'meta.rails.migration.create_table, meta.rails.migration.change_table'
        , tabTrigger: 't.'
        , uuid: '3458B140-E4BE-11DC-A11A-00112475D960'
        }
      , { content: 't.decimal :${1:title}${2:${3:, :precision => ${4:10}}${5:, :scale => ${6:2}}}\nt.$0'
        , name: 't.decimal (tcd)'
        , scope: 'meta.rails.migration.create_table, meta.rails.migration.change_table'
        , tabTrigger: 't.'
        , uuid: '26C09807-E4BE-11DC-A11A-00112475D960'
        }
      , { content: 't.float :${1:title}\nt.$0'
        , name: 't.float (tcf)'
        , scope: 'meta.rails.migration.create_table, meta.rails.migration.change_table'
        , tabTrigger: 't.'
        , uuid: '1BDC463A-E4BE-11DC-A11A-00112475D960'
        }
      , { content: 't.integer :${1:title}\nt.$0'
        , name: 't.integer (tci)'
        , scope: 'meta.rails.migration.create_table, meta.rails.migration.change_table'
        , tabTrigger: 't.'
        , uuid: '0E63B7D5-E4BE-11DC-A11A-00112475D960'
        }
      , { content: 't.integer :lock_version, :null => false, :default => 0\nt.$0'
        , name: 't.lock_version (tcl)'
        , scope: 'meta.rails.migration.create_table, meta.rails.migration.change_table'
        , tabTrigger: 't.'
        , uuid: 'A677FFD4-E4BE-11DC-A11A-00112475D960'
        }
      , { content: 't.references :${1:taggable}${2:, :polymorphic => ${3:{ :default => \'${4:Photo}\' \\}}}\nt.$0'
        , name: 't.references (tcr)'
        , scope: 'meta.rails.migration.create_table, meta.rails.migration.change_table'
        , tabTrigger: 't.'
        , uuid: 'B6D9225C-E4BE-11DC-A11A-00112475D960'
        }
      , { content: 't.rename(:${1:old_column_name}, :${2:new_column_name})\nt.$0'
        , name: 't.rename (tre)'
        , scope: 'meta.rails.migration.create_table, meta.rails.migration.change_table'
        , tabTrigger: 't.'
        , uuid: '9D4E30E2-4A61-4941-B9F3-BEE97552747A'
        }
      , { content: 't.string :${1:title}\nt.$0'
        , name: 't.string (tcs)'
        , scope: 'meta.rails.migration.create_table, meta.rails.migration.change_table'
        , tabTrigger: 't.'
        , uuid: 'B757F7E5-E4BD-11DC-A11A-00112475D960'
        }
      , { content: 't.text :${1:title}\nt.$0'
        , name: 't.text (tct)'
        , scope: 'meta.rails.migration.create_table, meta.rails.migration.change_table'
        , tabTrigger: 't.'
        , uuid: 'FFE7B820-E4BD-11DC-A11A-00112475D960'
        }
      , { content: 't.time :${1:title}\nt.$0'
        , name: 't.time (tcti)'
        , scope: 'meta.rails.migration.create_table, meta.rails.migration.change_table'
        , tabTrigger: 't.'
        , uuid: '537BDD48-E4BE-11DC-A11A-00112475D960'
        }
      , { content: 't.timestamp :${1:title}\nt.$0'
        , name: 't.timestamp (tcts)'
        , scope: 'meta.rails.migration.create_table, meta.rails.migration.change_table'
        , tabTrigger: 't.'
        , uuid: '49643690-E4BE-11DC-A11A-00112475D960'
        }
      , { content: 't.timestamps\nt.$0'
        , name: 't.timestamps (tctss)'
        , scope: 'meta.rails.migration.create_table, meta.rails.migration.change_table'
        , tabTrigger: 't.'
        , uuid: '950B0BF2-E4BE-11DC-A11A-00112475D960'
        }
      , { content: 't.rename(:${1:old_column_name}, :${2:new_column_name})\n$0'
        , name: 'Table column(s) rename'
        , scope: 'meta.rails.migration.create_table, meta.rails.migration.change_table'
        , tabTrigger: 'tre'
        , uuid: 'DF30226E-1111-448A-B669-7CA34EE83909'
        }
      ]
   , key: []
   }
, 'meta.rails.controller': 
   { tab: 
      [ { content: 'def create\n\t@${1:model} = ${2:${1/[[:alpha:]]+|(_)/(?1::\\u$0)/g}}.new(params[:$1])\n\t$0\n\trespond_to do |wants|\n\t\tif @$1.save\n\t\t\tflash[:notice] = \'$2 was successfully created.\'\n\t\t\twants.html { redirect_to(@$1) }\n\t\t\twants.xml { render :xml => @$1, :status => :created, :location => @$1 }\n\t\telse\n\t\t\twants.html { render :action => "new" }\n\t\t\twants.xml { render :xml => @$1.errors, :status => :unprocessable_entity }\n\t\tend\n\tend\nend\n'
        , name: 'def create - resource'
        , scope: 'meta.rails.controller'
        , tabTrigger: 'defcreate'
        , uuid: '54F61419-001F-4B71-83AC-8DC633694AF0'
        }
      , { content: 'respond_to do |wants|\n\twants.${1:html}${2: { $0 \\}}\nend'
        , name: 'respond_to'
        , scope: 'meta.rails.controller'
        , tabTrigger: 'rest'
        , uuid: 'B41D3164-EA53-4DDC-850E-27B82B24061F'
        }
      , { content: 'wants.${1:js|xml|html}${2: { $0 \\}}'
        , name: 'wants.format'
        , scope: 'meta.rails.controller'
        , tabTrigger: 'wants'
        , uuid: '3F26FDB4-ACF9-4856-9312-6A4D78DC8564'
        }
      ]
   , key: 
      [ { content: 'respond_to do |wants|\n\twants.html do\n\t\t$TM_SELECTED_TEXT\n\tend\n\twants.${1:js} { $0 }\nend'
        , keyEquivalent: '@H'
        , name: 'respond_to (html)'
        , scope: 'meta.rails.controller'
        , uuid: '3BDD0D52-443E-4F5F-AE09-ABCC2ABE9A42'
        }
      ]
   }
, 'meta.rails.functional_test': 
   { tab: 
      [ { content: 'def test_should_get_${1:action}\n\t${2:@${3:model} = ${4:$3s}(:${5:fixture_name})\n\t}get :${1}${6:, :id => @$3.to_param}\n\tassert_response :success\n\t$0\nend'
        , name: 'def test_should_get_action'
        , scope: 'meta.rails.functional_test'
        , tabTrigger: 'deftg'
        , uuid: '1C491A76-751F-44EF-8DFB-0A585C7EEFF6'
        }
      , { content: 'def test_should_post_${1:action}\n\t${3:@$2 = ${4:$2s}(:${5:fixture_name})\n\t}post :${1}${6:, :id => @$2.to_param}, :${2:model} => { $0 }\n\tassert_response :redirect\n\nend'
        , name: 'def test_should_post_action'
        , scope: 'meta.rails.functional_test'
        , tabTrigger: 'deftp'
        , uuid: '8B9CD068-4338-4039-AA06-D839A6C7A9FF'
        }
      ]
   , key: []
   }
, 'text.html.ruby': 
   { tab: 
      [ { content: '<% end -%>'
        , name: 'end (ERB)'
        , scope: 'text.html.ruby'
        , tabTrigger: 'end'
        , uuid: 'AC385ABF-96CD-4FCB-80AD-BF37D6EE79D2'
        }
      , { content: '<% if !${1:list}.blank? %>\n  <% for ${2:item} in ${1} %>\n    $3\n  <% end %>\n<% else %>\n  $4\n<% end %>\n'
        , name: 'for loop in rhtml'
        , scope: 'text.html.ruby'
        , tabTrigger: 'for'
        , uuid: 'F7744F07-306C-4951-AB5A-3D69BA5516B7'
        }
      , { content: '${TM_RAILS_TEMPLATE_START_RUBY_EXPR}javascript_include_tag ${1::all}${2:, :cache => ${3:true}}${TM_RAILS_TEMPLATE_END_RUBY_EXPR}'
        , name: 'javascript_include_tag'
        , scope: 'text.html.ruby'
        , tabTrigger: 'jit'
        , uuid: 'FEF49C86-9386-405E-A191-684D1C963E3A'
        }
      , { content: '${TM_RAILS_TEMPLATE_START_RUBY_EXPR}stylesheet_link_tag {1::all}${2:, :cache => ${3:true}}${TM_RAILS_TEMPLATE_END_RUBY_EXPR}'
        , name: 'stylesheet_link_tag'
        , scope: 'text.html.ruby'
        , tabTrigger: 'slt'
        , uuid: '980C7667-9D60-49FF-AF74-A7B19B379F45'
        }
      ]
   , key: []
   }
, 'meta.rails.routes': 
   { tab: 
      [ { content: '${1:map}.catch_all "*${2:anything}", :controller => "${3:default}", :action => "${4:error}"\n'
        , name: 'map.catch_all'
        , scope: 'meta.rails.routes'
        , tabTrigger: 'mapca'
        , uuid: 'F3606586-F905-4A91-92CA-82319239221D'
        }
      , { content: '${1:map}.${2:connect} \'${3::controller/:action/:id}\''
        , name: 'map.named_route'
        , scope: 'meta.rails.routes'
        , tabTrigger: 'map'
        , uuid: '91C543BF-7BD8-4E3A-B493-AE572C5472A0'
        }
      , { content: '${1:map}.resource :${2:resource}${10: do |${11:$2}|\n  $0\nend}'
        , name: 'map.resource'
        , scope: 'meta.rails.routes'
        , tabTrigger: 'mapr'
        , uuid: '2183A9A9-17ED-4A4F-ABB6-668EDDD3A6E4'
        }
      , { content: '${1:map}.resources :${2:resource}${10: do |${11:$2}|\n  $0\nend}'
        , name: 'map.resources'
        , scope: 'meta.rails.routes'
        , tabTrigger: 'maprs'
        , uuid: '0FF86C46-0E01-4D03-8232-72CA5BD55706'
        }
      , { content: '${1:map}.with_options :${2:controller} => \'${3:thing}\' do |${4:$3}|\n\t$0\nend\n'
        , name: 'map.with_options'
        , scope: 'meta.rails.routes'
        , tabTrigger: 'mapwo'
        , uuid: 'BD4B90F7-2187-4E75-BFFB-77BE67CB8DAE'
        }
      ]
   , key: []
   }
, 'meta.rails.migration.create_table': 
   { tab: 
      [ { content: 't.column ${1:title}, :${2:string}\n$0'
        , name: 'Create Column in Table'
        , scope: 'meta.rails.migration.create_table'
        , tabTrigger: 'mcol'
        , uuid: '7592CA99-75D7-48B6-9133-00B9F148FF43'
        }
      , { content: 't.column ${1:title}, :${2:string}\nmccc$0'
        , name: 'Create Several Columns in Table'
        , scope: 'meta.rails.migration.create_table'
        , tabTrigger: 'mccc'
        , uuid: '67FD2F8F-5F25-45F2-A451-2F39977A9EDE'
        }
      ]
   , key: []
   }
, 'meta.rails.migration - meta.rails.migration.create_table - meta.rails.migration.change_table': 
   { tab: 
      [ { content: 'drop_table :${1:table}${2: [press tab twice to generate create_table]}'
        , name: 'Drop / Create Table'
        , scope: 'meta.rails.migration - meta.rails.migration.create_table - meta.rails.migration.change_table'
        , tabTrigger: 'mtab'
        , uuid: '20375601-B13F-4314-B8E4-362706566636'
        }
      , { content: 'remove_column :${1:table}, :${2:column}${3: [press tab twice to generate add_column]}'
        , name: 'Remove / Add Column'
        , scope: 'meta.rails.migration - meta.rails.migration.create_table - meta.rails.migration.change_table'
        , tabTrigger: 'mcol'
        , uuid: '16A705EB-10DC-42B5-9FF2-377E206421DC'
        }
      ]
   , key: []
   }
, 'source.ruby.rails.rjs': 
   { tab: 
      [ { content: 'page.hide ${1:"${2:id(s)}"}'
        , name: 'page.hide (*ids)'
        , scope: 'source.ruby.rails.rjs'
        , tabTrigger: 'hide'
        , uuid: '390A447F-0FA3-4F01-A10C-4F35675E0A43'
        }
      , { content: 'page.insert_html :${1:top}, ${2:"${3:id}"}, :${4:partial => "${5:template}"}'
        , name: 'page.insert_html (position, id, partial)'
        , scope: 'source.ruby.rails.rjs'
        , tabTrigger: 'ins'
        , uuid: '62BEA590-F4EF-4001-B661-764EDFB92811'
        }
      , { content: 'page.replace ${1:"${2:id}"}, :${3:partial => "${4:template}"}'
        , name: 'page.replace (id, partial)'
        , scope: 'source.ruby.rails.rjs'
        , tabTrigger: 'rep'
        , uuid: '273E5E76-8D13-4476-9C38-8AF87432CB96'
        }
      , { content: 'page.replace_html ${1:"${2:id}"}, :${3:partial => "${4:template}"}'
        , name: 'page.replace_html (id, partial)'
        , scope: 'source.ruby.rails.rjs'
        , tabTrigger: 'reph'
        , uuid: '8B914165-9C66-4FA3-9AD6-1DA41B25F8F1'
        }
      , { content: 'page.show ${1:"${2:id(s)}"}'
        , name: 'page.show (*ids)'
        , scope: 'source.ruby.rails.rjs'
        , tabTrigger: 'show'
        , uuid: '5ACBF49D-B5A5-495C-89D8-18AA740D9D02'
        }
      , { content: 'page.toggle ${1:"${2:id(s)}"}'
        , name: 'page.toggle (*ids)'
        , scope: 'source.ruby.rails.rjs'
        , tabTrigger: 'tog'
        , uuid: '028DA0A4-B310-4BEF-8643-2A22993C21C7'
        }
      , { content: 'page.visual_effect :${1:toggle_slide}, ${2:"${3:DOM ID}"}'
        , name: 'page.visual_effect (effect, id)'
        , scope: 'source.ruby.rails.rjs'
        , tabTrigger: 'vis'
        , uuid: 'CFDC27A3-58CF-4198-8F93-36360978F0D0'
        }
      ]
   , key: []
   }
, '': 
   { tab: 
      [ { content: '#!/usr/bin/env ${1:${TM_SCOPE/(?:source|.*)\\.(?:(shell)|(\\w+)).*/(?1:bash:$2)/}}\n'
        , name: '#!/usr/bin/env'
        , scope: ''
        , tabTrigger: '!env'
        , uuid: '7C0F8C08-8860-4DBB-AB24-652B53E63E13'
        }
      ]
   , key: []
   }
, 'source.shell': 
   { tab: 
      [ { content: 'case ${1:word} in\n\t${2:pattern} )\n\t\t$0;;\nesac'
        , name: 'case \u2026 esac'
        , scope: 'source.shell'
        , tabTrigger: 'case'
        , uuid: 'CA3AC214-9EB9-4018-AA1C-D3FF71B1FC72'
        }
      , { content: 'elif ${2:[[ ${1:condition} ]]}; then\n\t${0:#statements}'
        , name: 'elif \u2026'
        , scope: 'source.shell'
        , tabTrigger: 'elif'
        , uuid: 'A1E3D4D4-BFC6-11D9-BB97-000D93589AF6'
        }
      , { content: 'for (( i = 0; i < ${1:10}; i++ )); do\n\t${0:#statements}\ndone'
        , name: 'for \u2026 done'
        , scope: 'source.shell'
        , tabTrigger: 'for'
        , uuid: 'E7807C18-AA17-11D9-AB33-000D93589AF6'
        }
      , { content: 'for ${1:i}${2/.+/ in /}${2:words}; do\n\t${0:#statements}\ndone'
        , name: 'for \u2026 in \u2026 done'
        , scope: 'source.shell'
        , tabTrigger: 'forin'
        , uuid: '04CBE1A5-313E-4E2C-946B-255C461B8406'
        }
      , { content: '<<-${2:\'${1:TOKEN}\'}\n\t$0\n${1/[\'"`](.+)[\'"`]/$1/}'
        , name: 'Here Document'
        , scope: 'source.shell'
        , tabTrigger: 'here'
        , uuid: 'ED7D1DEB-B124-4428-9C87-D1D9F360D78C'
        }
      , { content: 'if ${2:[[ ${1:condition} ]]}; then\n\t${0:#statements}\nfi'
        , name: 'if \u2026 fi'
        , scope: 'source.shell'
        , tabTrigger: 'if'
        , uuid: 'B26A35EE-AA17-11D9-AB33-000D93589AF6'
        }
      , { content: '${1:TMPFILE}="$(mktemp -t ${2:`echo "${TM_FILENAME%.*}" | sed -e \'s/[^a-zA-Z]/_/g\' -e \'s/^$/untitled/\'`})"\n${3:${4/(.+)/trap "/}${4:rm -f \'\\$${1/.*\\s//}\'}${4/(.+)/" 0               # EXIT\n/}${5/(.+)/trap "/}${5:rm -f \'\\$${1/.*\\s//}\'; exit 1}${5/(.+)/" 2       # INT\n/}${6/(.+)/trap "/}${6:rm -f \'\\$${1/.*\\s//}\'; exit 1}${6/(.+)/" 1 15    # HUP TERM\n/}}\n'
        , name: 'Tempfile'
        , scope: 'source.shell'
        , tabTrigger: 'temp'
        , uuid: '23583387-4ACC-4A27-B6EC-58418A39EF30'
        }
      , { content: 'until ${2:[[ ${1:condition} ]]}; do\n\t${0:#statements}\ndone'
        , name: 'until \u2026 done'
        , scope: 'source.shell'
        , tabTrigger: 'until'
        , uuid: 'BD23B11F-D940-43D3-A784-17F3D3FABC38'
        }
      , { content: 'while ${2:[[ ${1:condition} ]]}; do\n\t${0:#statements}\ndone'
        , name: 'while \u2026 done'
        , scope: 'source.shell'
        , tabTrigger: 'while'
        , uuid: '2C961068-7683-4899-8569-DDA80ED33BC0'
        }
      ]
   , key: []
   }
, undefined: 
   { tab: 
      [ { content: '(c) Copyright `date +%Y` $TM_FULLNAME. All Rights Reserved. '
        , name: 'Copyright Notice'
        , tabTrigger: 'c)'
        , uuid: 'BC8B89E4-5F16-11D9-B9C3-000D93589AF6'
        }
      , { content: '`date +%Y-%m-%d`'
        , name: 'Current Date \u2014 YYYY-MM-DD'
        , tabTrigger: 'isoD'
        , uuid: 'C9CAF012-6E50-11D9-AA12-000D93589AF6'
        }
      , { content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        , name: 'Lorem ipsum'
        , tabTrigger: 'lorem'
        , uuid: 'BA9A2B17-DA89-49A5-809B-AC7510C24625'
        }
      ]
   , key: 
      [ { content: '${TM_COMMENT_START/\\s*$/ /}==${1/(.)|(?m:\\n.*)/(?1:=)/g}==${TM_COMMENT_END/^\\s*(.+)/ $1/}\n${TM_COMMENT_START/\\s*$/ /}= ${1:${TM_SELECTED_TEXT:Banner}} =${TM_COMMENT_END/\\s*(.+)/ $1/}\n${TM_COMMENT_START/\\s*$/ /}==${1/(.)|(?m:\\n.*)/(?1:=)/g}==${TM_COMMENT_END/\\s*(.+)/ $1/}'
        , keyEquivalent: '^B'
        , name: 'Insert Comment Banner'
        , uuid: '7DE18A58-37A7-4F6B-8059-4365DCF27E46'
        }
      ]
   }
, 'text.html.textile': 
   { tab: 
      [ { content: '${1:ABC}(${2:Always Be Closing})'
        , name: 'Acronym'
        , scope: 'text.html.textile'
        , tabTrigger: 'acr'
        , uuid: '8190AA36-B729-4B14-89CE-9259F106459F'
        }
      , { content: 'bq. ${1:A quote...}\n\n$0'
        , name: 'Block Quote'
        , scope: 'text.html.textile'
        , tabTrigger: 'bq'
        , uuid: '7D7529CF-11F4-43B4-8F8D-ACA66F64FCE7'
        }
      , { content: 'h1. ${1:Text...}\n\n$0'
        , name: 'Heading 1'
        , scope: 'text.html.textile'
        , tabTrigger: 'h1'
        , uuid: '114730E7-5F5F-4324-86B7-ED1982F2F27E'
        }
      , { content: 'h2. ${1:Text...}\n\n$0'
        , name: 'Heading 2'
        , scope: 'text.html.textile'
        , tabTrigger: 'h2'
        , uuid: 'F8EFA926-E0FC-4B6F-93C6-030F71F7912E'
        }
      , { content: 'h3. ${1:Text...}\n\n$0'
        , name: 'Heading 3'
        , scope: 'text.html.textile'
        , tabTrigger: 'h3'
        , uuid: '545B26C2-33F2-40C1-94A1-FCCA0EB9BCA6'
        }
      , { content: 'h4. ${1:Text...}\n\n$0'
        , name: 'Heading 4'
        , scope: 'text.html.textile'
        , tabTrigger: 'h4'
        , uuid: '425C93B8-5B1A-44E2-88AA-1E910AF6D5CD'
        }
      , { content: 'h5. ${1:Text...}\n\n$0'
        , name: 'Heading 5'
        , scope: 'text.html.textile'
        , tabTrigger: 'h5'
        , uuid: '1EFB0855-D4EB-49C0-8C44-4F35DD4DA5D2'
        }
      , { content: 'h6. ${1:Text...}\n\n$0'
        , name: 'Heading 6'
        , scope: 'text.html.textile'
        , tabTrigger: 'h6'
        , uuid: 'F4E856BE-6FCE-4933-8E6D-413B8835ABC5'
        }
      , { content: '!${1:http://site.com/image}(${2:Title})!'
        , name: 'Image'
        , scope: 'text.html.textile'
        , tabTrigger: 'img'
        , uuid: '0A8DF563-5218-4164-9409-48B6000C08EA'
        }
      , { content: '!${1:http://site.com/image}(${2:Title})!:${3:http://linkedsite.com}'
        , name: 'Linked Image'
        , scope: 'text.html.textile'
        , tabTrigger: 'linkimg'
        , uuid: '9166AEA1-E834-4C95-A638-5A3FE6963488'
        }
      ]
   , key: 
      [ { content: '*$TM_SELECTED_TEXT*'
        , keyEquivalent: '@b'
        , name: 'Bold'
        , scope: 'text.html.textile'
        , uuid: 'D446156B-1C02-43D0-8824-979FA7AC7C5D'
        }
      , { content: '??$TM_SELECTED_TEXT??'
        , keyEquivalent: '@\''
        , name: 'Citation'
        , scope: 'text.html.textile'
        , uuid: '877822B7-5DFF-41B5-9114-9DD3F3563D73'
        }
      , { content: '(${1:class}#${2:id})'
        , keyEquivalent: '^I'
        , name: 'Class and Id'
        , scope: 'text.html.textile'
        , uuid: '664A2E0F-7FB4-4FAA-8889-652FA47A817C'
        }
      , { content: '(${1:class_name})'
        , keyEquivalent: '^I'
        , name: 'Class'
        , scope: 'text.html.textile'
        , uuid: '866D5468-B364-4B66-9EF1-F4372E38CFE9'
        }
      , { content: '{color:${1:green}}'
        , keyEquivalent: '^I'
        , name: 'Color'
        , scope: 'text.html.textile'
        , uuid: 'BBE99165-35FD-472E-BC77-2BA707A08540'
        }
      , { content: '%{color:${1:green}}$TM_SELECTED_TEXT%'
        , keyEquivalent: '@k'
        , name: 'Color Selection'
        , scope: 'text.html.textile'
        , uuid: '11246CED-2010-411E-874B-5F6B60B3C7FE'
        }
      , { content: '[${1:1}]$0\n\nfn$1. $2'
        , keyEquivalent: '^~'
        , name: 'Footnote'
        , scope: 'text.html.textile'
        , uuid: 'CFF53A3D-4ADC-44F4-B60D-1DB5FAFD7317'
        }
      , { content: '(#${1:id_name})'
        , keyEquivalent: '^I'
        , name: 'Id'
        , scope: 'text.html.textile'
        , uuid: 'B4767B18-66F1-489A-8E43-9B1982368E03'
        }
      , { content: '_${TM_SELECTED_TEXT}_'
        , keyEquivalent: '@i'
        , name: 'Italic'
        , scope: 'text.html.textile'
        , uuid: '58E9370D-19C9-466E-A4E0-7D067A9A7C5A'
        }
      , { content: '[${1:en}]'
        , keyEquivalent: '^I'
        , name: 'Language'
        , scope: 'text.html.textile'
        , uuid: '2340F25E-B8AB-406C-8745-0B83690D816E'
        }
      , { content: '-$TM_SELECTED_TEXT-'
        , keyEquivalent: '@d'
        , name: 'Strikethrough'
        , scope: 'text.html.textile'
        , uuid: '8C3FDC27-98C9-4A15-B13A-22840DA8AE28'
        }
      , { content: '{${1:style}}'
        , keyEquivalent: '^I'
        , name: 'Style'
        , scope: 'text.html.textile'
        , uuid: 'C722F8F6-AB71-422A-A5B3-8C2C92EAE547'
        }
      , { content: '~$TM_SELECTED_TEXT~'
        , keyEquivalent: '^$\uf701'
        , name: 'Subscript'
        , scope: 'text.html.textile'
        , uuid: '2F490EA0-DE03-4A61-989E-D3E853CEAA4A'
        }
      , { content: '^$TM_SELECTED_TEXT^'
        , keyEquivalent: '^$\uf700'
        , name: 'Superscript'
        , scope: 'text.html.textile'
        , uuid: 'E6C4BEC8-A5D9-453A-A168-2EEBD50ECDE2'
        }
      , { content: '+$TM_SELECTED_TEXT+'
        , keyEquivalent: '@u'
        , name: 'Underline'
        , scope: 'text.html.textile'
        , uuid: 'AF1E916C-AF7F-417D-9776-A11FDF9668C8'
        }
      ]
   }
, 'text.xml': 
   { tab: 
      [ { content: '<![CDATA[$0]]>'
        , name: 'CDATA'
        , scope: 'text.xml'
        , tabTrigger: 'cdata'
        , uuid: 'D7194128-6995-4A8A-B10A-A68A13101AF8'
        }
      , { content: '<${1:name} ${2:attr="value"}>$0\n</${1:name}>'
        , name: 'Long Attribute Tag'
        , scope: 'text.xml'
        , tabTrigger: '<a'
        , uuid: 'F443A9C7-88A5-40EE-820E-A311B16D85C4'
        }
      , { content: '<${1:name}>$0</${1/([^ ]+).*/$1/}>'
        , name: 'Long Tag'
        , scope: 'text.xml'
        , tabTrigger: '<'
        , uuid: 'BC8B9FBD-5F16-11D9-B9C3-000D93589AF6'
        }
      , { content: '<${1:name} />'
        , name: 'Short Tag'
        , scope: 'text.xml'
        , tabTrigger: '>'
        , uuid: 'BC8BA078-5F16-11D9-B9C3-000D93589AF6'
        }
      , { content: '<?xml version="1.0" encoding="UTF-8"?>'
        , name: 'XML Processing Instruction'
        , scope: 'text.xml'
        , tabTrigger: 'xml'
        , uuid: '4F9C4923-6A89-4B49-BB22-8C446B86D12D'
        }
      ]
   , key: []
   }
, 'meta.scope.between-tag-pair.xml': 
   { tab: []
   , key: 
      [ { content: '\n\t$0\n'
        , keyEquivalent: '\n'
        , name: 'Special: Return Inside Empty Open/Close Tags'
        , scope: 'meta.scope.between-tag-pair.xml'
        , uuid: '121626EE-6774-4DFB-B7D5-6E5A8381F1D3'
        }
      ]
   }
, 'source.yaml - string': 
   { tab: []
   , key: 
      [ { content: '${1:key}: ${2:value}$0'
        , keyEquivalent: '^:'
        , name: 'key: value'
        , scope: 'source.yaml - string'
        , uuid: 'D9F46A3E-4F2A-11DA-AFF2-000A95AF0064'
        }
      ]
   }
};

var SnippetsManager = function(scope) {
    this.$snippets_hash = snippets_hash;
};

(function() {
	
	this.getTabSnippets = function(scope){
		return (this.$snippets_hash[scope] && this.$snippets_hash[scope]['tab']) || {};
	}

}).call(SnippetsManager.prototype);

exports.SnippetsManager = new SnippetsManager();
});
