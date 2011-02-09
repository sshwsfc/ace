define(function(require, exports, module) {
exports.hash = 

{ fileTypes: [ 'tmReleaseNotes' ]
, name: 'Release Notes'
, patterns: 
   [ { captures: 
        { '1': { name: 'punctuation.definition.separator.release-notes' }
        , '2': { name: 'meta.toc-list.release-notes' }
        , '3': { name: 'punctuation.definition.separator.release-notes' }
        }
     , match: '^(\\[)(?:[\\d-]+:)?(REVISION(\\d+|v[\\d.b]+))(\\])$\\n'
     , name: 'meta.separator.release-notes'
     }
   , { begin: '^([\\t]*)(?=\\S)'
     , contentName: 'meta.paragraph.release-notes'
     , end: '^(?!\\1(?=\\S))'
     , patterns: 
        [ { match: '(https?|ftp|mailto):\\S+?(?=[)>,.\':;"]*(\\s|$)|$)'
          , name: 'markup.underline.link.release-notes'
          }
        , { captures: 
             { '1': { name: 'keyword.other.release-notes' }
             , '2': { name: 'punctuation.definition.keyword.release-notes' }
             , '3': { name: 'punctuation.definition.keyword.release-notes' }
             , '4': { name: 'constant.other.bundle-name.release-notes' }
             }
          , match: '((\\[)(?:NEW|FIXED|CHANGED|REMOVED|INFO)(\\]))(?:(.+?bundle):)?'
          }
        , { captures: 
             { '1': { name: 'storage.type.ticket.release-notes' }
             , '2': { name: 'constant.numeric.ticket.release-notes' }
             }
          , match: '([Tt]icket)([0-9A-F]{8})\\b'
          , name: 'meta.ticket.release-notes'
          }
        , { comment: 'I do not want spell checking for CamelCase words. Since this is generally when quoting various API\u2019s, I have deliberately used A-Z and a-z (ASCII) -- Allan'
          , match: '\\b[A-Z]*[a-z]+[A-Z]\\w*\\b'
          , name: 'meta.word.camel-case.release-notes'
          }
        , { captures: { '1': { name: 'constant.other.committer-name.release-notes' } }
          , match: '\\((G(erdKnops|a(vinKistner|rrettJ.Woodworth)|ra(ntHollingworth|emeRocher))|R(yanMcCuaig|ichBarton|o(ssHarmes|gerBraunstein|b(ertRainthorpe|(Rix|Bevan))))|M(i(cha(ilPishchagin|elSheets)|tchChapman|etekB\u0105k|k(eMellor|aelS\u00e4ker))|a(t(sPersson|t(hewGilbert|eoSpinelli|Pelletier))|r(tinStr\u00f6m|kGrimes)|xWilliams))|B(illDuenskie|obFleck|en(oitGagnon|jaminJackson|Perry)|arrettClark|r(ian(Donovan|Lalor)|ettTerpstra|ad(Miller|Choate)))|H(enrikNyh|adleyWickham)|S(t(ephenSkubik-Peplaski|\u00e9phanePayrard|anleyRost)|imon(Gregory|Strandgaard)|u(neFoldager|daraWilliams)|ebastianGr\u00e4\u00dfl|amDeVore)|NathanYoungman|C(h(a(ndlerMcWilliams|rilaosSkiadas)|ris(topherForsythe|(Thomas|Jenkins)))|iar\u00e1nWalsh)|T(homasAylott|o(rstenBecker|mLazar|biasLuetke)|akaakiKato|royMcilvena)|Ian(Joyner|White)|OllivierRobert|D(om(iniquePeretti|enicoCarbotta)|uaneJohnson|a(n(ielHarple|Kelley)|vid(Glasser|Bonnet|Hansson|Powers|Wikler))|rewColthorp)|J(iunWeiChia|o(shuaEmmons|nathan(Ragan-Kelley|Chaffer)|eMaller|achimM\u00e5rtensson)|ustinFrench|eroenvanderHam|a(cobRus|ySoffian|kubNe\u0161et\u0159il|m(isBuck|es(EdwardGrayII|A.Baker))))|Paul(oJorgeLopesdeMoura|Bissex)|EricHsu|K(umarMcMillan|evinBallard)|F(ergusBremner|abienPOTENCIER|lorentPillet|r(\u00e9d\u00e9ricBall\u00e9riaux|ankBrault))|Wil(sonMiner|liam(D.Neumann|Prater))|A(n(thonyUnderwood|d(yHerbert|ersThid|rewHenson))|damSanderson|urelioMarinhoJargas|parajitaFishman|l(e(Mu\u00f1oz|xand(erJohnRoss|reGirard))|anSchussman|lanOdgaard)|mroNasr))\\)$'
          }
        ]
     }
   ]
, scopeName: 'text.plain.release-notes'
, uuid: '8926CAFE-1CF3-4CF9-A056-4FF90F596E9A'
}

});
