"use strict";(self.webpackChunkdocassemble_assembly_line_documentation=self.webpackChunkdocassemble_assembly_line_documentation||[]).push([[9378],{4137:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(r),u=o,f=m["".concat(l,".").concat(u)]||m[u]||d[u]||a;return r?n.createElement(f,s(s({ref:t},p),{},{components:r})):n.createElement(f,s({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},1061:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=r(7462),o=(r(7294),r(4137));const a={id:"alrecipes",title:"ALRecipes\n",sidebar_label:"ALRecipes",slug:"/framework/alrecipes"},s=void 0,i={unversionedId:"framework/alrecipes",id:"framework/alrecipes",title:"ALRecipes\n",description:"This repository includes two groups of recipes, one group contains examples for the Document Assembly Line project, the other group contains generic docassemble interviews addressing specific needs.",source:"@site/docs/framework/alrecipes.md",sourceDirName:"framework",slug:"/framework/alrecipes",permalink:"/docassemble-AssemblyLine-documentation/docs/framework/alrecipes",draft:!1,editUrl:"https://github.com/SuffolkLITLab/docassemble-AssemblyLine-documentation/edit/main/docs/framework/alrecipes.md",tags:[],version:"current",frontMatter:{id:"alrecipes",title:"ALRecipes\n",sidebar_label:"ALRecipes",slug:"/framework/alrecipes"},sidebar:"someSidebar",previous:{title:"ALToolbox functions and components",permalink:"/docassemble-AssemblyLine-documentation/docs/framework/altoolbox"},next:{title:"Automated testing",permalink:"/docassemble-AssemblyLine-documentation/docs/automated_integrated_testing"}},l={},c=[{value:"Live demos",id:"live-demos",level:2},{value:"Generic docassemble recipes",id:"generic-docassemble-recipes",level:2},{value:"AssemblyLine examples",id:"assemblyline-examples",level:2},{value:"Add AssemblyLine examples to your Playground",id:"add-assemblyline-examples-to-your-playground",level:2}],p={toc:c};function m(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This repository includes two groups of recipes, one group contains examples for the Document Assembly Line project, the other group contains generic docassemble interviews addressing specific needs."),(0,o.kt)("h2",{id:"live-demos"},"Live demos"),(0,o.kt)("p",null,"To get a hands-on experience on any of these recipes, you can go to ",(0,o.kt)("a",{parentName:"p",href:"https://apps-dev.suffolklitlab.org/start/ALRecipes/Introduction"},"ALRecipes' introduction page")," to run the demo recipes you are interested in."),(0,o.kt)("p",null,"The introduction page also provides instructions for those who want to contribute to ALRecipes."),(0,o.kt)("h2",{id:"generic-docassemble-recipes"},"Generic docassemble recipes"),(0,o.kt)("p",null,"These examples are created to handle scenarios that are currently unavailable in the docassemble recipes. For example, recipe ",(0,o.kt)("strong",{parentName:"p"},"Multi-user signatures - require login")," differs from the docassemble original recipe in that it lets one party preview a form filled with the other party\u2019s input; recipe ",(0,o.kt)("strong",{parentName:"p"},"Web Data Extraction")," shows you how to extract a piece of data from an external web, then display it in your own interview. "),(0,o.kt)("h2",{id:"assemblyline-examples"},"AssemblyLine examples"),(0,o.kt)("p",null,"These recipes are ready to be inserted into your interview. You can access them either from the live demo page, or more conveniently from your Playground's ",(0,o.kt)("strong",{parentName:"p"},"Example blocks")," area. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Example blocks",src:r(6781).Z,width:"1399",height:"570"})),(0,o.kt)("h2",{id:"add-assemblyline-examples-to-your-playground"},"Add AssemblyLine examples to your Playground"),(0,o.kt)("p",null,"docassemble allows you to add customized examples to the Playground's ",(0,o.kt)("strong",{parentName:"p"},"Example blocks")," area, see ",(0,o.kt)("a",{parentName:"p",href:"https://docassemble.org/docs/config.html#playground%20examples"},"List of examples in the Playground"),". "),(0,o.kt)("p",null,"In order to add our examples to your playground, you need to install ALRecipes and add the following in the config file on your server:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"playground examples:\n  - docassemble.ALRecipes:data/questions/examples.yml\n  - docassemble.base:data/questions/example-list.yml  \n")))}m.isMDXComponent=!0},6781:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/alrecipes-examples-37e158521e5e575fae21726522eefb9c.png"}}]);