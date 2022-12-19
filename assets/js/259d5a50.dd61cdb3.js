"use strict";(self.webpackChunkdocassemble_assembly_line_documentation=self.webpackChunkdocassemble_assembly_line_documentation||[]).push([[4222],{4137:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),p=o,h=d["".concat(s,".").concat(p)]||d[p]||m[p]||a;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4474:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(7462),o=(n(7294),n(4137));const a={id:"error_actions",title:"Helping users recover from developer errors\n",sidebar_label:"Helping users recover from developer errors\n",slug:"/framework/error_actions"},i=void 0,l={unversionedId:"framework/error_actions",id:"framework/error_actions",title:"Helping users recover from developer errors\n",description:"Overview",source:"@site/docs/framework/error_actions.md",sourceDirName:"framework",slug:"/framework/error_actions",permalink:"/docassemble-AssemblyLine-documentation/docs/framework/error_actions",draft:!1,editUrl:"https://github.com/SuffolkLITLab/docassemble-AssemblyLine-documentation/edit/main/docs/framework/error_actions.md",tags:[],version:"current",frontMatter:{id:"error_actions",title:"Helping users recover from developer errors\n",sidebar_label:"Helping users recover from developer errors\n",slug:"/framework/error_actions"},sidebar:"someSidebar",previous:{title:"Using Answer Sets to capture and re-use client information\n",permalink:"/docassemble-AssemblyLine-documentation/docs/framework/answer_set_intakes"},next:{title:"Reserved variable names that you cannot use",permalink:"/docassemble-AssemblyLine-documentation/docs/framework/reserved_keywords"}},s={},c=[{value:"Overview",id:"overview",level:2},{value:"Turning custom error pages on or off",id:"turning-custom-error-pages-on-or-off",level:2},{value:"Replacing the Assembly Line error page",id:"replacing-the-assembly-line-error-page",level:2},{value:"Customizing the Assembly Line error page",id:"customizing-the-assembly-line-error-page",level:2},{value:"Downloading incomplete documents",id:"downloading-incomplete-documents",level:3},{value:"Problem with earlier version of the Weaver",id:"problem-with-earlier-version-of-the-weaver",level:4}],u={toc:c};function d(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"If you would like to replace the stock Docassemble error page,\nwhich is a bit unfriendly, you can configure that both system-wide\nand on an interview-by-interview basis with the Assembly Line framework."),(0,o.kt)("h2",{id:"turning-custom-error-pages-on-or-off"},"Turning custom error pages on or off"),(0,o.kt)("p",null,"The default Assembly Line configuration turns on a custom error handling page as of version\n",(0,o.kt)("inlineCode",{parentName:"p"},"2.20.0"),"."),(0,o.kt)("p",null,"If you would like to turn the custom error page off, you can disable it like\nthis:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"---\nmetadata:\n  error action: None\n")),(0,o.kt)("h2",{id:"replacing-the-assembly-line-error-page"},"Replacing the Assembly Line error page"),(0,o.kt)("p",null,"You can override the custom error page by adding an event with the name ",(0,o.kt)("inlineCode",{parentName:"p"},"al_custom_error_action"),"."),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"https://docassemble.org/docs/initial.html#metadata"},"https://docassemble.org/docs/initial.html#metadata")," to read the docassemble documentation about\nwhat this event can do."),(0,o.kt)("h2",{id:"customizing-the-assembly-line-error-page"},"Customizing the Assembly Line error page"),(0,o.kt)("p",null,"By default the Assembly Line error page looks like this:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(1197).Z,width:"1058",height:"998"})),(0,o.kt)("p",null,"It always includes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'The instruction to try clicking "back" and trying again'),(0,o.kt)("li",{parentName:"ul"},"A link to the page defined as ",(0,o.kt)("inlineCode",{parentName:"li"},"AL_ORGANIZATION_HOMEPAGE")),(0,o.kt)("li",{parentName:"ul"},"Technical information (the exact Python error) in an expandable element")),(0,o.kt)("p",null,"If it is defined, it will include a link to download the original blank form as specified in  ",(0,o.kt)("inlineCode",{parentName:"p"},'interview_metadata[]["original_form"]'),' (it will look in the "main_interview_key" if defined, and fall back to the first key in ',(0,o.kt)("inlineCode",{parentName:"p"},"interview_metadata")," otherwise). This metadata key will be treated as a URL."),(0,o.kt)("p",null,"You can customize these optional links:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A link to download the in-progress forms"),(0,o.kt)("li",{parentName:"ul"},"A link to email the server administrator"),(0,o.kt)("li",{parentName:"ul"},"A link to submit feedback using the GitHub feedback form"),(0,o.kt)("li",{parentName:"ul"},"A list of additional instructions.")),(0,o.kt)("p",null,"The optional links have a two-step configuration. You can turn them\non or off globally in the system-wide configuration, or override the\nsystem-wide configuration on a per-interview basis."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"assembly line:\n  enable incomplete downloads: True\n  show email to user on errors: True\n  enable error action feedback link: True\n  custom error actions:\n    - Call the trial court help line at 833-91COURT\n")),(0,o.kt)("p",null,"Note that these settings all default to ",(0,o.kt)("inlineCode",{parentName:"p"},"False")," if you have not added this section to\nyour global configuration."),(0,o.kt)("p",null,"Or configure at the interview level like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'---\ncode: |\n  al_show_email_to_user_on_errors = False\n---\ncode: |\n  al_enable_incomplete_downloads = False\n---\ncode: |\n  al_enable_error_action_feedback_link = False\n---\ncode: |\n  al_custom_error_options = [\n    "Send an email to [the helpline](mailto:help@example.com),\n    "Call us at 1-800-GET-HELP",\n  ]\n')),(0,o.kt)("p",null,"The custom error options can include Markdown-formatted text or HTML, like the links in the example."),(0,o.kt)("h3",{id:"downloading-incomplete-documents"},"Downloading incomplete documents"),(0,o.kt)("p",null,"The custom error page will allow downloading of incomplete documents if\nthe global configuration option ",(0,o.kt)("inlineCode",{parentName:"p"},"assembly line: enable incomplete downloads")," is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"True"),"."),(0,o.kt)("p",null,"Turning this setting on will also add a menu item in the interview that allows the user\nto download the incomplete document at any time."),(0,o.kt)("p",null,"This feature relies on the setting ",(0,o.kt)("inlineCode",{parentName:"p"},"skip undefined: True")," in your document's attachment blocks.\nIt also depends on the documents being part of a bundle named ",(0,o.kt)("inlineCode",{parentName:"p"},"al_user_bundle"),"."),(0,o.kt)("p",null,"The download page may sometimes trigger additional screens if the ",(0,o.kt)("inlineCode",{parentName:"p"},"skip undefined")," setting is not\nturned on for your attachment block, and it currently doesn't have any special error handling\nother than the safety provided by ",(0,o.kt)("inlineCode",{parentName:"p"},"skip undefined"),". That means on occasion, the custom error\ndownload screen may timeout. You may want to customize this page further on your own by creating\na custom event named ",(0,o.kt)("inlineCode",{parentName:"p"},"al_error_action_download_screen"),"."),(0,o.kt)("p",null,"This is what the page may look like:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(1688).Z,width:"1046",height:"901"})),(0,o.kt)("p",null,"It includes this text:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Warning: these documents may not be complete. Look each document over carefully and enter any information that is missing once you have downloaded the documents.\n\nIt is possible that the missing information may make this document unenforceable.\n\nHere is your current progress on the \u201cFax cover sheet\u201d documents you started:\n")),(0,o.kt)("p",null,"As well as a link to download the draft version of each document in ",(0,o.kt)("inlineCode",{parentName:"p"},"al_user_bundle"),',\na "Leave" button which takes the user to ',(0,o.kt)("inlineCode",{parentName:"p"},"AL_ORGANIZATION_HOMEPAGE"),' and a "Start over"\nbutton which starts the interview from the beginning.'),(0,o.kt)("h4",{id:"problem-with-earlier-version-of-the-weaver"},"Problem with earlier version of the Weaver"),(0,o.kt)("p",null,"Early versions of the Weaver that include user instructions may place the instructions attachment\nin the same attachment block as the primary documents of the interview. But the instructions\ndo not have ",(0,o.kt)("inlineCode",{parentName:"p"},"skip undefined")," turned on."),(0,o.kt)("p",null,"You should ensure that the ",(0,o.kt)("inlineCode",{parentName:"p"},"skip undefined")," option is turned on for all attachments in your\ninterview if you want the full benefit of the custom error action page."))}d.isMDXComponent=!0},1688:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/error_action_download_screen-1e0d6effbcc5ed7f4efd49e4e6c4c6ea.png"},1197:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/error_action_example-5c89894a578a0efec8df6ea9ee519669.png"}}]);