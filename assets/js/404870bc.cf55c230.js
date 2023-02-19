"use strict";(self.webpackChunkdocassemble_assembly_line_documentation=self.webpackChunkdocassemble_assembly_line_documentation||[]).push([[8898],{4137:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),g=u(n),m=a,d=g["".concat(o,".").concat(m)]||g[m]||p[m]||l;return n?r.createElement(d,s(s({ref:t},c),{},{components:n})):r.createElement(d,s({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,s=new Array(l);s[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[g]="string"==typeof e?e:a,s[1]=i;for(var u=2;u<l;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7020:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var r=n(7462),a=(n(7294),n(4137));const l={sidebar_label:"language",title:"AssemblyLine.language"},s=void 0,i={unversionedId:"reference/AssemblyLine/language",id:"reference/AssemblyLine/language",title:"AssemblyLine.language",description:"get\\_tuples",source:"@site/docs/reference/AssemblyLine/language.md",sourceDirName:"reference/AssemblyLine",slug:"/reference/AssemblyLine/language",permalink:"/docassemble-AssemblyLine-documentation/docs/reference/AssemblyLine/language",draft:!1,editUrl:"https://github.com/SuffolkLITLab/docassemble-AssemblyLine-documentation/edit/main/docs/reference/AssemblyLine/language.md",tags:[],version:"current",frontMatter:{sidebar_label:"language",title:"AssemblyLine.language"},sidebar:"api",previous:{title:"al_general",permalink:"/docassemble-AssemblyLine-documentation/docs/reference/AssemblyLine/al_general"},next:{title:"sessions",permalink:"/docassemble-AssemblyLine-documentation/docs/reference/AssemblyLine/sessions"}},o={},u=[{value:"get_tuples",id:"get_tuples",level:4},{value:"get_language_list",id:"get_language_list",level:4},{value:"get_language_list_item",id:"get_language_list_item",level:4}],c={toc:u};function g(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"get_tuples"},"get","_","tuples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def get_tuples(lang_codes)\n")),(0,a.kt)("p",null,"Returns a list of tuples representing the language name, followed by language ISO 639-1 code.\nRight now only lists languages in use by Massachusetts Defense for Eviction (MADE)."),(0,a.kt)("h4",{id:"get_language_list"},"get","_","language","_","list"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'def get_language_list(languages, current="")\n')),(0,a.kt)("p",null,"given a list of ordered tuples with (Description, language_code), returns\nan Bootstrap-formatted unordered inline list. The current language will not be a link."),(0,a.kt)("h4",{id:"get_language_list_item"},"get","_","language","_","list","_","item"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def get_language_list_item(language, link=True)\n")),(0,a.kt)("p",null,"Given an ordered tuple, returns a link to the current interview with lang=language code and the link title\ngiven in the first part of the tuple."))}g.isMDXComponent=!0}}]);