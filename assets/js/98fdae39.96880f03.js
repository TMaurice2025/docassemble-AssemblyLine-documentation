"use strict";(self.webpackChunkdocassemble_assembly_line_documentation=self.webpackChunkdocassemble_assembly_line_documentation||[]).push([[5985],{4137:function(e,t,n){n.d(t,{Zo:function(){return g},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},g=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,g=i(e,["components","mdxType","originalType","parentName"]),p=c(n),f=a,d=p["".concat(u,".").concat(f)]||p[f]||s[f]||l;return n?r.createElement(d,o(o({ref:t},g),{},{components:n})):r.createElement(d,o({ref:t},g))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},395:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return g},default:function(){return p}});var r=n(7462),a=n(3366),l=(n(7294),n(4137)),o=["components"],i={sidebar_label:"language",title:"language"},u=void 0,c={unversionedId:"reference/language",id:"reference/language",title:"language",description:"get\\_tuples",source:"@site/docs/reference/language.md",sourceDirName:"reference",slug:"/reference/language",permalink:"/docassemble-AssemblyLine-documentation/docs/reference/language",editUrl:"https://github.com/SuffolkLITLab/docassemble-AssemblyLine-documentation/edit/main/docs/reference/language.md",tags:[],version:"current",frontMatter:{sidebar_label:"language",title:"language"}},g=[{value:"get_tuples",id:"get_tuples",children:[],level:4},{value:"get_language_list",id:"get_language_list",children:[],level:4},{value:"get_language_list_item",id:"get_language_list_item",children:[],level:4}],s={toc:g};function p(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h4",{id:"get_tuples"},"get","_","tuples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def get_tuples(lang_codes)\n")),(0,l.kt)("p",null,"Returns a list of tuples representing the language name, followed by language ISO 639-1 code.\nRight now only lists languages in use by Massachusetts Defense for Eviction (MADE)."),(0,l.kt)("h4",{id:"get_language_list"},"get","_","language","_","list"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'def get_language_list(languages, current="")\n')),(0,l.kt)("p",null,"given a list of ordered tuples with (Description, language_code), returns\nan Bootstrap-formatted unordered inline list. The current language will not be a link."),(0,l.kt)("h4",{id:"get_language_list_item"},"get","_","language","_","list","_","item"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def get_language_list_item(language, link=True)\n")),(0,l.kt)("p",null,"Given an ordered tuple, returns a link to the current interview with lang=language code and the link title\ngiven in the first part of the tuple."))}p.isMDXComponent=!0}}]);