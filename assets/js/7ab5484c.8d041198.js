"use strict";(self.webpackChunkdocassemble_assembly_line_documentation=self.webpackChunkdocassemble_assembly_line_documentation||[]).push([[1645],{4137:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,f=p["".concat(i,".").concat(m)]||p[m]||c[m]||s;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<s;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3897:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(7294),a=n(6010),s="tabItem_hM7Q";function o(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(s,o),hidden:n},t)}},7164:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(7462),a=n(7294),s=n(1048),o=n(1548),l=n(9615),i=n(3850),u=n(6010),d="tabList_fixb",c="tabItem_tAz6";function p(e){var t,n,s,p=e.lazy,m=e.block,f=e.defaultValue,b=e.values,y=e.groupId,v=e.className,h=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=b?b:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,o.l)(k,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var w=null===f?f:null!=(t=null!=f?f:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(s=h[0])?void 0:s.props.value;if(null!==w&&!k.some((function(e){return e.value===w})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var T=(0,l.U)(),_=T.tabGroupChoices,x=T.setTabGroupChoices,O=(0,a.useState)(w),q=O[0],E=O[1],N=[],A=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=y){var Z=_[y];null!=Z&&Z!==q&&k.some((function(e){return e.value===Z}))&&E(Z)}var C=function(e){var t=e.currentTarget,n=N.indexOf(t),r=k[n].value;r!==q&&(A(t),E(r),null!=y&&x(y,r))},j=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=N.indexOf(e.currentTarget)+1;n=N[r]||N[0];break;case"ArrowLeft":var a=N.indexOf(e.currentTarget)-1;n=N[a]||N[N.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,u.Z)("tabs-container",d)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":m},v)},k.map((function(e){var t=e.value,n=e.label,s=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:q===t?0:-1,"aria-selected":q===t,key:t,ref:function(e){return N.push(e)},onKeyDown:j,onFocus:C,onClick:C},s,{className:(0,u.Z)("tabs__item",c,null==s?void 0:s.className,{"tabs__item--active":q===t})}),null!=n?n:t)}))),p?(0,a.cloneElement)(h.filter((function(e){return e.props.value===q}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},h.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==q})}))))}function m(e){var t=(0,s.Z)();return a.createElement(p,(0,r.Z)({key:String(t)},e))}},3488:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return d},default:function(){return b},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return m}});var r=n(7462),a=n(3366),s=(n(7294),n(4137)),o=n(7164),l=n(3897),i=["components"],u={id:"ql_addresses",title:"Addresses",sidebar_label:"Addresses",slug:"/question_library/addresses"},d=void 0,c={unversionedId:"question_library/ql_addresses",id:"question_library/ql_addresses",title:"Addresses",description:"Ask for addresses in parts",source:"@site/docs/question_library/addresses.md",sourceDirName:"question_library",slug:"/question_library/addresses",permalink:"/docassemble-AssemblyLine-documentation/docs/question_library/addresses",draft:!1,editUrl:"https://github.com/SuffolkLITLab/docassemble-AssemblyLine-documentation/edit/main/docs/question_library/addresses.md",tags:[],version:"current",frontMatter:{id:"ql_addresses",title:"Addresses",sidebar_label:"Addresses",slug:"/question_library/addresses"},sidebar:"someSidebar",previous:{title:"Names",permalink:"/docassemble-AssemblyLine-documentation/docs/question_library/names"},next:{title:"Gender",permalink:"/docassemble-AssemblyLine-documentation/docs/question_library/gender"}},p={},m=[{value:"Ask for addresses in parts",id:"ask-for-addresses-in-parts",level:2},{value:"Allow user to specify country if appropriate",id:"allow-user-to-specify-country-if-appropriate",level:3},{value:"Not all users have an address",id:"not-all-users-have-an-address",level:3},{value:"Consider a fall back of a completely open text field",id:"consider-a-fall-back-of-a-completely-open-text-field",level:3}],f={toc:m};function b(e){var t=e.components,n=(0,a.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"ask-for-addresses-in-parts"},"Ask for addresses in parts"),(0,s.kt)(o.Z,{mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"Assembly Line Example",label:"Assembly Line Example",default:!0,mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"id: person's address\nsets:\n  - person.address.address\n  - person.address.city\nquestion: |\n  Person's Address\nfields:\n  - code: |\n      person.address_fields()\n"))),(0,s.kt)(l.Z,{value:"Vanilla Docassemble",label:"Vanilla Docassemble",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"---\nid: your address\nquestion: |\n  What is your address?\nsubquestion: |\n  What address should the court use to mail papers to you?\nfields:\n  - Street address: users[0].address.address\n    address autocomplete: True\n  - Unit: users[0].address.unit\n    required: False\n  - City: users[0].address.city\n  - State: users[0].address.state\n    code: |\n      states_list()\n    default: MA      \n  - Zip: users[0].address.zip\n    required: False\n")))),(0,s.kt)("h3",{id:"allow-user-to-specify-country-if-appropriate"},"Allow user to specify country if appropriate"),(0,s.kt)("p",null,"If your users commonly may provide addresses from a different country,\nshow a country dropdown. Store the country with the ISO country code."),(0,s.kt)("p",null,"Ideally, update fields to match at least the most common countries, by\nupdating labels like ",(0,s.kt)("inlineCode",{parentName:"p"},"Zip code")," to ",(0,s.kt)("inlineCode",{parentName:"p"},"Postal code")," and replacing\n",(0,s.kt)("inlineCode",{parentName:"p"},"State")," with the appropriate label for that country."),(0,s.kt)(o.Z,{mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"Assembly Line Example",label:"Assembly Line Example",default:!0,mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"id: person's address\nsets:\n  - person.address.address\n  - person.address.city\nquestion: |\n  Person's Address\nfields:\n  - code: |\n      person.address_fields(show_country=True, country_code=\"US\")\n"))),(0,s.kt)(l.Z,{value:"Vanilla Docassemble",label:"Vanilla Docassemble",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"---\nid: your address\nquestion: |\n  What is your address?\nsubquestion: |\n  What address should the court use to mail papers to you?\nfields:\n  - Street address: person.address.address\n    address autocomplete: True\n  - Unit: person.address.unit\n    required: False\n  - City: person.address.city\n  - State: person.address.state\n    code: |\n      states_list()\n    default: MA      \n  - Zip: person.address.zip\n    required: False\n  - Country: person.address.country\n    code: |\n      countries_list()\n")))),(0,s.kt)("h3",{id:"not-all-users-have-an-address"},"Not all users have an address"),(0,s.kt)("p",null,"Some users may be unhomed. Consider fallback solutions that gracefully handle\nsomeone without a home."),(0,s.kt)("h3",{id:"consider-a-fall-back-of-a-completely-open-text-field"},"Consider a fall back of a completely open text field"),(0,s.kt)("p",null,"The most flexible input of all for an address is a wide-open text field. This\nmay be appropriate to show as an alternative, even if your user is able to\nselect the country, to handle countries with address formats that you may not\nknow in advance."),(0,s.kt)("p",null,"Keep in mind that this may not be a very good user experience for most users.\nYour default address question should be more standardized."))}b.isMDXComponent=!0}}]);