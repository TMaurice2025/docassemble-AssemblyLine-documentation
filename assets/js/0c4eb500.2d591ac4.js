"use strict";(self.webpackChunkdocassemble_assembly_line_documentation=self.webpackChunkdocassemble_assembly_line_documentation||[]).push([[2601],{4137:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>p});var a=t(7294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,s=function(e,n){if(null==e)return{};var t,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},w=a.forwardRef((function(e,n){var t=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=c(t),w=s,p=u["".concat(l,".").concat(w)]||u[w]||m[w]||r;return t?a.createElement(p,i(i({ref:n},d),{},{components:t})):a.createElement(p,i({ref:n},d))}));function p(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var r=t.length,i=new Array(r);i[0]=w;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[u]="string"==typeof e?e:s,i[1]=o;for(var c=2;c<r;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}w.displayName="MDXCreateElement"},5275:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=t(7462),s=(t(7294),t(4137));const r={id:"answer_set_intakes",title:"Using Answer Sets to capture and re-use client information\n",sidebar_label:"Using Answer Sets to capture and re-use client information\n",slug:"/framework/answer_set_intakes"},i=void 0,o={unversionedId:"framework/answer_set_intakes",id:"framework/answer_set_intakes",title:"Using Answer Sets to capture and re-use client information\n",description:"Overview",source:"@site/docs/framework/answer_set_intakes.md",sourceDirName:"framework",slug:"/framework/answer_set_intakes",permalink:"/docassemble-AssemblyLine-documentation/docs/framework/answer_set_intakes",draft:!1,editUrl:"https://github.com/SuffolkLITLab/docassemble-AssemblyLine-documentation/edit/main/docs/framework/answer_set_intakes.md",tags:[],version:"current",frontMatter:{id:"answer_set_intakes",title:"Using Answer Sets to capture and re-use client information\n",sidebar_label:"Using Answer Sets to capture and re-use client information\n",slug:"/framework/answer_set_intakes"},sidebar:"mainSidebar",previous:{title:"Answer Sets: save and reuse answers across interviews\n",permalink:"/docassemble-AssemblyLine-documentation/docs/framework/answer_sets"},next:{title:"Helping users recover from developer errors\n",permalink:"/docassemble-AssemblyLine-documentation/docs/framework/error_actions"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"Creating the intake interview",id:"creating-the-intake-interview",level:2},{value:"Making use of the saved answers",id:"making-use-of-the-saved-answers",level:2},{value:"Download the example",id:"download-the-example",level:2}],d={toc:c};function u(e){let{components:n,...t}=e;return(0,s.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"overview"},"Overview"),(0,s.kt)("p",null,"You can use the Answer Set feature to set up a simple client intake workflow.\nWhen a client uses the intake interview, you can save their answers. Then you can\nsetup a second interview that retrieves the same answers and reuses them in new template."),(0,s.kt)("p",null,"You can combine this with Docassemble's ",(0,s.kt)("a",{parentName:"p",href:"https://docassemble.org/docs/fields.html#catchall"},(0,s.kt)("inlineCode",{parentName:"a"},"DACatchAll")),"\nfeature to create a general purpose system that allows you to use client information in\none-off letters and simple documents."),(0,s.kt)("h2",{id:"creating-the-intake-interview"},"Creating the intake interview"),(0,s.kt)("p",null,"The interview below leverages the Assembly Line shared question library to create a\nvery simple new client questionnaire:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'---\ninclude:\n  - docassemble.AssemblyLine:assembly_line.yml\n---\nmetadata:\n  title: |\n    New client questionnaire\n---\nmandatory: True\ncode: |\n  why_want_to_meet\n  users[0].name.first\n  users[0].address.address\n  children.gather()\n  answers_saved\n  outro_message\n---\ncode: |\n  # The user\'s answers are saved to the "saved session" area\n  save_interview_answers(filename="docassemble.AssemblyLine:al_saved_sessions_store.yml", metadata = {"title": str(users) } )\n  answers_saved = True\n---\nid: welcome\nquestion: |\n  New client questionnaire\nsubquestion: |\n  Tell us a little about yourself before our first meeting.\nfields:\n  - What do you want to meet with us about?: why_want_to_meet\n    datatype: area\n---\nevent: outro_message\nquestion: |\n  Thanks, we will be in touch!\n')),(0,s.kt)("p",null,"At line 20, the interview answers are saved to the system-wide location for\nanswer sets. You may want to customize this location if you have several\ninterviews on your server."),(0,s.kt)("h2",{id:"making-use-of-the-saved-answers"},"Making use of the saved answers"),(0,s.kt)("p",null,"The interview below allows a user to:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Upload a template that uses Jinja2 syntax"),(0,s.kt)("li",{parentName:"ol"},"Select from a list of answer sets on the server"),(0,s.kt)("li",{parentName:"ol"},"Fills in any answers that are contained in the answer set"),(0,s.kt)("li",{parentName:"ol"},"Lets the interview user answer any questions that still remain.")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"---\ninclude:\n  - docassemble.AssemblyLine:assembly_line.yml\n---\nmetadata:\n  title: |\n    Fill in the blanks\n---\nfeatures:\n  use catchall: True\n---\nmandatory: True\ncode: |\n  template_to_fill  \n  if not start_fresh:\n    load_existing_answers\n  download_template\n---\nid: upload template\nquestion: |\n  Upload a template to fill in\nsubquestion: |\n  You can select an existing set of answers, like from an intake interview, to use \n  to complete the template. If you add new fields to the template,\n  you will get a very basic chance to provide an answer to the new field.\nfields:\n  - Upload a DOCX template file: template_to_fill\n    datatype: file\n    accept: |\n      \"application/vnd.openxmlformats-officedocument.wordprocessingml.document\"\n---\nid: choose an answer set\nquestion: |\n  Choose an answer set\nfields:\n  - Start fresh: start_fresh\n    datatype: yesno\n    disable others: True\n  - Select one: selected_answers\n    datatype: combobox\n    code: |\n      [{idx: answer.title} for idx, answer in enumerate(all_answer_sets)]\n    required: False      \n---\nid: download template\nevent: download_template\nquestion: |\n  Your template is ready\nattachment: \n  docx template file:\n    code: |\n      template_to_fill[0]\n---\ncode: |\n  if user_has_privilege(['developer', 'admin']):\n    all_answer_sets = get_saved_interview_list(filename=\"docassemble.AssemblyLine:al_saved_sessions_store.yml\", user_id=\"all\", exclude_newly_started_sessions=False)\n  else:\n    all_answer_sets = get_saved_interview_list(filename=\"docassemble.AssemblyLine:al_saved_sessions_store.yml\", exclude_newly_started_sessions=False)\n---\ncode: |\n  load_interview_answers(all_answer_sets[int(selected_answers)].filename, all_answer_sets[int(selected_answers)].key) \n  load_existing_answers = True\n---\n###################### Catchall questions ###########################################\n---\ngeneric object: DACatchAll\nquestion: |\n  What is ${ x.object_name() }?\nfields:\n  - no label: x.value\nvalidation code: |\n  define(x.instanceName, x.value)\n---\nif: |\n  x.context == 'float'\ngeneric object: DACatchAll\nquestion: |\n  How much is ${ x.object_name() }?\nfields:\n  - Amount: x.value\n    datatype: currency\nvalidation code: |\n  define(x.instanceName, x.value)\n---\nif: |\n  x.data_type_guess() == 'bool'\ngeneric object: DACatchAll\nquestion: |\n  ${x.object_name()}?\nyesno: x.value\nvalidation code: |\n  define(x.instanceName, x.value)\n---\nif: |\n  x.object_name().endswith('date')\ngeneric object: DACatchAll\nquestion: |\n  ${x.object_name()}?\nfields:\n  - Date: x.value\n    datatype: date\nvalidation code: |\n  define(x.instanceName, x.value)\n")),(0,s.kt)("p",null,"At line 56, the interview gets a list of all answer sets on the server.\nIf the user is an administrator or developer, it includes all answer sets.\nIf the user is not privileged, it will only include answer sets created by the\ninterview's user."),(0,s.kt)("p",null,"At line 61, the selected answers are actually loaded into the interview."),(0,s.kt)("h2",{id:"download-the-example"},"Download the example"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/LemmaLegalConsulting/docassemble-IntakeAndReuse"},"Demonstration repository")))}u.isMDXComponent=!0}}]);