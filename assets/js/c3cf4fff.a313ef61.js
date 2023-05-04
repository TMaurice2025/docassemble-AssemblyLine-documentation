"use strict";(self.webpackChunkdocassemble_assembly_line_documentation=self.webpackChunkdocassemble_assembly_line_documentation||[]).push([[8599],{4137:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},g="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),g=u(n),p=r,h=g["".concat(s,".").concat(p)]||g[p]||d[p]||o;return n?a.createElement(h,l(l({ref:t},c),{},{components:n})):a.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[g]="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},425:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),r=n(6010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:n},t)}},3992:(e,t,n)=>{n.d(t,{Z:()=>_});var a=n(7462),r=n(7294),o=n(6010),l=n(2957),i=n(6775),s=n(5238),u=n(3609),c=n(2560);function g(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??g(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=d(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,u]=h({queryString:n,groupId:a}),[g,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),b=(()=>{const e=s??g;return p({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{b&&i(b)}),[b]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),m(e)}),[u,m,o]),tabValues:o}}var b=n(1048);const f="tabList__CuJ",y="tabItem_LNqP";function v(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:g}=(0,l.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==i&&(g(t),s(a))},p=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:p,onClick:d},l,{className:(0,o.Z)("tabs__item",y,l?.className,{"tabs__item--active":i===t})}),n??t)})))}function w(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function k(e){const t=m(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",f)},r.createElement(v,(0,a.Z)({},e,t)),r.createElement(w,(0,a.Z)({},e,t)))}function _(e){const t=(0,b.Z)();return r.createElement(k,(0,a.Z)({key:String(t)},e))}},6730:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>u,toc:()=>g});var a=n(7462),r=(n(7294),n(4137)),o=n(3992),l=n(425);const i={id:"ql_language",title:"language",sidebar_label:"Language",slug:"/question_library/language"},s=void 0,u={unversionedId:"question_library/ql_language",id:"question_library/ql_language",title:"language",description:"The information on this page describes an input that allows the user to",source:"@site/docs/question_library/language.md",sourceDirName:"question_library",slug:"/question_library/language",permalink:"/docassemble-AssemblyLine-documentation/docs/question_library/language",draft:!1,editUrl:"https://github.com/SuffolkLITLab/docassemble-AssemblyLine-documentation/edit/main/docs/question_library/language.md",tags:[],version:"current",frontMatter:{id:"ql_language",title:"language",sidebar_label:"Language",slug:"/question_library/language"},sidebar:"mainSidebar",previous:{title:"Gender",permalink:"/docassemble-AssemblyLine-documentation/docs/question_library/gender"},next:{title:"Terms of Use",permalink:"/docassemble-AssemblyLine-documentation/docs/question_library/terms_of_use"}},c={},g=[{value:"Provide language choices that match your region&#39;s most spoken languages",id:"provide-language-choices-that-match-your-regions-most-spoken-languages",level:2},{value:"Sort in alphabetical order, excluding the two most popular languages",id:"sort-in-alphabetical-order-excluding-the-two-most-popular-languages",level:3},{value:"Avoid using a drop-down menu for language",id:"avoid-using-a-drop-down-menu-for-language",level:2},{value:"When possible, store the language name using the ISO 2 or 3 letter code",id:"when-possible-store-the-language-name-using-the-iso-2-or-3-letter-code",level:2},{value:"Do not use the native language version of the language name in ordinary circumstances",id:"do-not-use-the-native-language-version-of-the-language-name-in-ordinary-circumstances",level:2},{value:"Adding language fields in Docassemble",id:"adding-language-fields-in-docassemble",level:3}],d={toc:g};function p(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The information on this page describes an input that allows the user to\nreport the language spoken by that user or a different participant in the\ncase to the court or tribunal."),(0,r.kt)("h2",{id:"provide-language-choices-that-match-your-regions-most-spoken-languages"},"Provide language choices that match your region's most spoken languages"),(0,r.kt)("p",null,"It can be hard for a user to interact with a long list of language choices.\nAbout 7 is ideal. For Massachusetts forms, we default to 9 options, giving\nspace for both Mandarin and Cantonese, to reflect the heterogeneity of\nimmigrant single-language populations in Eastern Massachusetts."),(0,r.kt)("h3",{id:"sort-in-alphabetical-order-excluding-the-two-most-popular-languages"},"Sort in alphabetical order, excluding the two most popular languages"),(0,r.kt)("p",null,"Ordinarily, your list of languages should be alphabetized, leaving room for the\ntwo most dominant languages in your region at the top, outside of the\nalphabetized sort. Any other order will cause your user extra effort to read. If\nthe second most popular language is very uncommon, we recommend placing it in\nits alphabetical sort rather than as the second option."),(0,r.kt)("p",null,'Put the "other" option at the end of the list.'),(0,r.kt)("h2",{id:"avoid-using-a-drop-down-menu-for-language"},"Avoid using a drop-down menu for language"),(0,r.kt)("p",null,"You can safely provide about 7 choices using a radio button input. This style of\ninput is much easier to interact with, especially on a mobile device, and lets\nthe user identify the appropriate option at a glance."),(0,r.kt)("h2",{id:"when-possible-store-the-language-name-using-the-iso-2-or-3-letter-code"},"When possible, store the language name using the ISO 2 or 3 letter code"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"language_name()")," function will translate the ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes"},"ISO 639-1\n")," or ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/ISO_639-3"},"ISO\n639-3")," code back into its full written\nform. It is best to avoid translation issues by storing the code rather than a\nhuman-readable version of the name."),(0,r.kt)("h2",{id:"do-not-use-the-native-language-version-of-the-language-name-in-ordinary-circumstances"},"Do not use the native language version of the language name in ordinary circumstances"),(0,r.kt)("p",null,"Your language picker may be used by an advocate or attorney, or it may be used\nby the litigant to report the language spoken by someone else. Therefore, you\nshould default to displaying the language name in the language that the\ninterview is currently being used in, rather than in its native version."),(0,r.kt)("p",null,"However, in some circumstances you may know that the litigant and not an\nadvocate will be reporting their ",(0,r.kt)("em",{parentName:"p"},"own")," spoken language. In that case, you can\ndisplay the language's name in the person's native language."),(0,r.kt)("p",null,"This advice does not apply to a selector that allows the user to choose the\nlanguage that they will answer questions in the guided interview with. When\nallowing the user to change the guided interview's language, use the native\nlanguage name."),(0,r.kt)("h3",{id:"adding-language-fields-in-docassemble"},"Adding language fields in Docassemble"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Assembly Line Example",label:"Assembly Line Example",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"sets:\n  - person.language\nid: language\nquestion: |\n  What language does ${ person } prefer to speak?\nfields:\n  - code: |\n      person.language_fields()\n"))),(0,r.kt)(l.Z,{value:"Vanilla Docassemble",label:"Vanilla Docassemble",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"sets:\n  - person.language\nid: language\nquestion: |\n  What language does ${ person } prefer to speak?\nfields:\n  - Language: person.language\n    datatype: radio\n    choices:\n      - English: en\n      - Spanish: es\n      - Arabic: ar\n      - Cape Verdean: kea\n      - Chinese (Cantonese): yue\n      - Chinese (Mandarin): cmn\n      - French: fr\n      - Haitian: ht\n      - Portuguese: pt\n      - Other: other\n  - Other language: person.language_other\n    show if: \n      variable: person.language\n      is: other\n"))),(0,r.kt)(l.Z,{value:"preview",label:"Preview",mdxType:"TabItem"},(0,r.kt)("p",null,"  ",(0,r.kt)("img",{src:n(3201).Z,width:"907",height:"777"})))))}p.isMDXComponent=!0},3201:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/example-al-language-68d9c4b7dbca50cd3eb08fe48a6c3e3b.png"}}]);