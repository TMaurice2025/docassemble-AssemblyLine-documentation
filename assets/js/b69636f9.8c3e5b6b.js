"use strict";(self.webpackChunkdocassemble_assembly_line_documentation=self.webpackChunkdocassemble_assembly_line_documentation||[]).push([[2869],{4137:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=u(n),c=o,f=m["".concat(s,".").concat(c)]||m[c]||p[c]||r;return n?a.createElement(f,i(i({ref:t},d),{},{components:n})):a.createElement(f,i({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6749:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var a=n(7462),o=(n(7294),n(4137));const r={id:"plan_interview",title:"Planning your interview",sidebar_label:"Planning your interview",slug:"/planning"},i=void 0,l={unversionedId:"plan_interview",id:"plan_interview",title:"Planning your interview",description:"Planning and automating your first interview with the Assembly Line Framework",source:"@site/docs/plan_interview.md",sourceDirName:".",slug:"/planning",permalink:"/docassemble-AssemblyLine-documentation/docs/planning",draft:!1,editUrl:"https://github.com/SuffolkLITLab/docassemble-AssemblyLine-documentation/edit/main/docs/plan_interview.md",tags:[],version:"current",frontMatter:{id:"plan_interview",title:"Planning your interview",sidebar_label:"Planning your interview",slug:"/planning"},sidebar:"someSidebar",previous:{title:"Installation",permalink:"/docassemble-AssemblyLine-documentation/docs/installation"},next:{title:"Working with PDF files",permalink:"/docassemble-AssemblyLine-documentation/docs/pdfs"}},s={},u=[{value:"Planning and automating your first interview with the Assembly Line Framework",id:"planning-and-automating-your-first-interview-with-the-assembly-line-framework",level:2},{value:"Selecting your template file",id:"selecting-your-template-file",level:2},{value:"Do some advance work to draft questions and a question order",id:"do-some-advance-work-to-draft-questions-and-a-question-order",level:2},{value:"Preparing your template for automation",id:"preparing-your-template-for-automation",level:2}],d={toc:u};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"planning-and-automating-your-first-interview-with-the-assembly-line-framework"},"Planning and automating your first interview with the Assembly Line Framework"),(0,o.kt)("p",null,"To automate a form using the Assembly Line framework, you must:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"research and understand the context of your form"),(0,o.kt)("li",{parentName:"ol"},"identify the template that you will use: either a PDF or DOCX template"),(0,o.kt)("li",{parentName:"ol"},"add digital ",(0,o.kt)("strong",{parentName:"li"},"field labels")," where the information the user provides will go"),(0,o.kt)("li",{parentName:"ol"},"run the labeled template through the Assembly Line Weaver"),(0,o.kt)("li",{parentName:"ol"},'download the "weaved" form and refine in your Docassemble playground'),(0,o.kt)("li",{parentName:"ol"},"test, respond to feedback, and iterate"),(0,o.kt)("li",{parentName:"ol"},"deploy to a production server and add links on your public website")),(0,o.kt)("p",null,"For more information about the process of researching and planning your completed\ninterview, refer to ",(0,o.kt)("a",{parentName:"p",href:"https://suffolklitlab.org/legal-tech-class/docs/interview-structure/building-an-app-outline"},"Planning and building your first expert system"),"."),(0,o.kt)("h2",{id:"selecting-your-template-file"},"Selecting your template file"),(0,o.kt)("p",null,"In many cases, you will be provided a template that you need to automate.\nUltimately, your form should be either a PDF document or a Word DOCX file."),(0,o.kt)("p",null,"If your document is a PDF already, consider whether to switch to a DOCX template\nfile."),(0,o.kt)("p",null,"Reasons to use PDF files:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"PDF files may be the best choice if you are automating an approved court form\nthat already exists as a PDF"),(0,o.kt)("li",{parentName:"ul"},"PDF files are good for heavily formatted content that includes columns and multiple\nfields on a single line")),(0,o.kt)("p",null,"Reasons to avoid PDF files:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"PDF files are rigid, and may not contain enough room for real-world\ninformation"),(0,o.kt)("li",{parentName:"ul"},"conditional logic must be appplied field by field"),(0,o.kt)("li",{parentName:"ul"},"lists and repeated data must be labeled one at a time for each field")),(0,o.kt)("p",null,"Reasons to use DOCX files:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"DOCX files will grow or shrink to accomodate as much or as little information\nas the user has to provide"),(0,o.kt)("li",{parentName:"ul"},"DOCX files allow you to use lists and repeated groups naturally and with\nlittle extra effort after labeling the first item"),(0,o.kt)("li",{parentName:"ul"},"DOCX files allow you to easily make whole sections of a document contingent"),(0,o.kt)("li",{parentName:"ul"},"DOCX files work well with linear content that is read by scanning down the\npage, not across.")),(0,o.kt)("p",null,"Reasons to avoid DOCX files:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"DOCX files work less well for content formatted into columns or that require\nprecise layout"),(0,o.kt)("li",{parentName:"ul"},"DOCX files can be formatted, but content may flow unexpectedly if it is longer\nthan expected")),(0,o.kt)("h2",{id:"do-some-advance-work-to-draft-questions-and-a-question-order"},"Do some advance work to draft questions and a question order"),(0,o.kt)("p",null,"The automation process will go better if you have planned out a basic\nstructure for your interview, as well as thought through the information\nthat you need to gather. Focus on a rough sketch of the process that your\nform enables as well as the questions that you will ask to fill it in."),(0,o.kt)("h2",{id:"preparing-your-template-for-automation"},"Preparing your template for automation"),(0,o.kt)("p",null,"Once you have decided on the template file that you will use, you need to add\nlabels to each empty space on the form that will be filled in to match the\nuser's specific situation."))}m.isMDXComponent=!0}}]);