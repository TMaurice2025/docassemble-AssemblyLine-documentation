"use strict";(self.webpackChunkdocassemble_assembly_line_documentation=self.webpackChunkdocassemble_assembly_line_documentation||[]).push([[8324],{4137:function(e,t,o){o.d(t,{Zo:function(){return c},kt:function(){return d}});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(o),d=a,h=p["".concat(l,".").concat(d)]||p[d]||m[d]||i;return o?n.createElement(h,r(r({ref:t},c),{},{components:o})):n.createElement(h,r({ref:t},c))}));function d(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=o.length,r=new Array(i);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var u=2;u<i;u++)r[u]=o[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}p.displayName="MDXCreateElement"},4925:function(e,t,o){o.r(t),o.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return m}});var n=o(7462),a=o(3366),i=(o(7294),o(4137)),r=["components"],s={id:"customization_overview",title:"Customization and theming",sidebar_label:"Customization and theming",slug:"/customization/overview"},l=void 0,u={unversionedId:"customization/customization_overview",id:"customization/customization_overview",title:"Customization and theming",description:"Visual customization",source:"@site/docs/customization/customization_overview.md",sourceDirName:"customization",slug:"/customization/overview",permalink:"/docassemble-AssemblyLine-documentation/docs/customization/overview",draft:!1,editUrl:"https://github.com/SuffolkLITLab/docassemble-AssemblyLine-documentation/edit/main/docs/customization/customization_overview.md",tags:[],version:"current",frontMatter:{id:"customization_overview",title:"Customization and theming",sidebar_label:"Customization and theming",slug:"/customization/overview"},sidebar:"someSidebar",previous:{title:"AL Project Architecture",permalink:"/docassemble-AssemblyLine-documentation/docs/al_project_architecture"},next:{title:"Planning your interview",permalink:"/docassemble-AssemblyLine-documentation/docs/planning"}},c={},m=[{value:"Visual customization",id:"visual-customization",level:2},{value:"Customizing the logo and title for Assembly Line interviews",id:"customizing-the-logo-and-title-for-assembly-line-interviews",level:3},{value:"Creating a custom CSS theme with Bootstrap.build",id:"creating-a-custom-css-theme-with-bootstrapbuild",level:3},{value:"Creating a custom theme from source instead of with a theme generator",id:"creating-a-custom-theme-from-source-instead-of-with-a-theme-generator",level:3},{value:"Using custom fonts",id:"using-custom-fonts",level:3}],p={toc:m};function d(e){var t=e.components,o=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"visual-customization"},"Visual customization"),(0,i.kt)("p",null,"You can customize Docassemble, and Assembly Line interviews, with a Bootstrap 5 theme."),(0,i.kt)("h3",{id:"customizing-the-logo-and-title-for-assembly-line-interviews"},"Customizing the logo and title for Assembly Line interviews"),(0,i.kt)("p",null,"You should also customize the:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docassemble-AssemblyLine-documentation/docs/framework/magic_variables#al_organization_title"},"Title")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docassemble-AssemblyLine-documentation/docs/framework/magic_variables#al_organization_homepage"},"Home page")),(0,i.kt)("li",{parentName:"ul"},"and ",(0,i.kt)("a",{parentName:"li",href:"/docassemble-AssemblyLine-documentation/docs/framework/magic_variables#al_logo"},"logo"))),(0,i.kt)("h3",{id:"creating-a-custom-css-theme-with-bootstrapbuild"},"Creating a custom CSS theme with Bootstrap.build"),(0,i.kt)("p",null,"If you want to build a custom theme, encompassing colors, fonts, button styles and other\noptions that are configurable with css, you can:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"build one from Bootstrap 5 source"),(0,i.kt)("li",{parentName:"ol"},"start with a theme generator tool like ",(0,i.kt)("a",{parentName:"li",href:"https://bootstrap.build/"},"bootstrap.build"),"\nand in some cases, add some custom CSS to make it work with Docassemble.")),(0,i.kt)("p",null,"Using bootstrap.build is the simplest option for most authors."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Visit the ",(0,i.kt)("a",{parentName:"li",href:"https://bootstrap.build/"},"bootstrap.build")," website."),(0,i.kt)("li",{parentName:"ol"},"Click the button to open the Builder"),(0,i.kt)("li",{parentName:"ol"},"Customize the options that you want to customize. Typically those will include:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Under color system, the $gray/$blue/etc. colors, if you use a matching color in your theme"),(0,i.kt)("li",{parentName:"ul"},"Under color system, almost always the variables ",(0,i.kt)("inlineCode",{parentName:"li"},"primary"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"secondary"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"success"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"info"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"warning"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"danger"),",\n",(0,i.kt)("inlineCode",{parentName:"li"},"light")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"dark")),(0,i.kt)("li",{parentName:"ul"},"Under Typography, customize any fonts that you wish to use"),(0,i.kt)("li",{parentName:"ul"},"Under forms, you may want to customize button size and rounded edges"))),(0,i.kt)("li",{parentName:"ol"},'Click the "export theme" button (it may be hidden behind a banner at the top of the page) and choose the\n"bootstrap.min.css" option. Rename this theme to be more specific. Optionally, download the ',(0,i.kt)("inlineCode",{parentName:"li"},"_variables.scss")," file\nso that you can easily load and adjust your settings in future.")),(0,i.kt)("p",null,"Add this theme to your Docassemble playground using the Folders | Static menu."),(0,i.kt)("p",null,"Next, you will need to make a small adjustment to the theme generated by bootstrap.build.\nCopy and paste the code below into the ",(0,i.kt)("inlineCode",{parentName:"p"},"bootstrap.min.css")," file (or your new file name)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},".visually-hidden {\n    clip: rect(0 0 0 0);\n    clip-path: inset(50%);\n    height: 1px;\n    overflow: hidden;\n    position: absolute;\n    white-space: nowrap;\n    width: 1px;\n}\n  \n.bg-dark {\n  background-color: #1a73e8!important;  /* replace with your desired nav bar color */\n}\n")),(0,i.kt)("h3",{id:"creating-a-custom-theme-from-source-instead-of-with-a-theme-generator"},"Creating a custom theme from source instead of with a theme generator"),(0,i.kt)("p",null,"The Bootstrap documentation ",(0,i.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.1/getting-started/download/"},"covers the details of theming"),"."),(0,i.kt)("p",null,"While the above instructions to use bootstrap.build can work well in most\ncircumstances, you may run into small interface bugs introduced by the theme\ngenerator. If you prefer more control over building the theme, first,\n",(0,i.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.1/getting-started/download/"},"download")," the\nBootstrap source. As of this writing, the latest version you should use is 5.1.3."),(0,i.kt)("p",null,"Use a computer with a current version of Node. The instructions on this page\nassume you are using an Ubuntu Linux computer with Node installed, but they\nshould be the same on any workstation. They were tested on a machine running\nWindows 11 with Ubuntu running under Windows Subsystem for Linux (WSL)."),(0,i.kt)("p",null,"It also assumes that you have VS Code installed, but you can use any text\neditor of your choice."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://github.com/twbs/bootstrap/releases/download/v5.1.3/bootstrap-5.1.3-dist.zip\nunzip bootstrap-5.1.3-dist.zip\ncd bootstrap-5.1.3\nnpm install\n")),(0,i.kt)("p",null,"Now, create a new ",(0,i.kt)("inlineCode",{parentName:"p"},"custom.scss")," file inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"scss")," subfolder in the\n",(0,i.kt)("inlineCode",{parentName:"p"},"bootstrap-5.1.3")," folder. Detailed instructions on what this file can contain\nare in the ",(0,i.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.1/customize/sass/#importing"},"Bootstrap\ndocumentation"),"."),(0,i.kt)("p",null,"You can use a ",(0,i.kt)("a",{parentName:"p",href:"https://huemint.com/bootstrap-basic/"},"color theme generator")," like\n",(0,i.kt)("a",{parentName:"p",href:"https://huemint.com/bootstrap-basic/"},"Huemint.com")," to make sure that you have a\nconsistent set of all 9 Bootstrap variables. When you use the color theme\ngenerator, at the bottom of the page, you will see a small snippet of code that\nyou can copy into the customs.scss file."),(0,i.kt)("p",null,"For example, your new custom.scss might look like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scss"},'// Custom.scss\n// Option A: Include all of Bootstrap\n\n// Include any default variable overrides here (though functions won\'t be available)\n\n$white: #ffffff;\n\n$theme-colors: (\n    "light":      #d8e2a5,\n    "dark":       #1b1b1b,\n    "primary":    #25dec6,\n    "secondary":  #375b5a,\n    "info":       #d74d72,\n    "success":    #0cb545,\n    "warning":    #f4ca0b,\n    "danger":     #fa043c,\n);\n\n// Note: we placed our custom.scss file in the bootstrap path for simplicity,\n// so we use a different path than in the bootstrap documentation\n// @import "../node_modules/bootstrap/scss/bootstrap";\n@import "bootstrap";\n\n// Then add additional custom code here\n')),(0,i.kt)("p",null,"Now, use ",(0,i.kt)("inlineCode",{parentName:"p"},"npm")," to compile the theme file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd ~/bootstrap-5.1.3\nnpm run css-compile\n")),(0,i.kt)("p",null,"Your new ",(0,i.kt)("inlineCode",{parentName:"p"},"custom.css")," file is in the\n~/bootstrap-5.1.3/dist/css",(0,i.kt)("inlineCode",{parentName:"p"},"directory. Copy this file to your Docassemble"),"static",(0,i.kt)("inlineCode",{parentName:"p"},"folder and reference it as a"),"bootstrap theme`."),(0,i.kt)("h3",{id:"using-custom-fonts"},"Using custom fonts"),(0,i.kt)("p",null,"You can use custom webfonts with Docassemble, just like you can with any other web\nproduct."),(0,i.kt)("p",null,"This ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Web_fonts"},"Mozilla guide about web\nfonts"),"\nis a good place to start."),(0,i.kt)("p",null,"If you do not already have a .woff or .woff2 file but you do have a TrueType\n(TTF) or OpenType (OTF) file that you are licensed to distribute, you can create\none with a ",(0,i.kt)("a",{parentName:"p",href:"https://www.fontsquirrel.com/tools/webfont-generator"},"free online web font\ntool"),"."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Once you have a .woff file, upload it to the /static folder of a Docassemble playground."),(0,i.kt)("li",{parentName:"ol"},"Add an ",(0,i.kt)("inlineCode",{parentName:"li"},"@font-face")," directive to your bootstrap.css file (or a separate CSS file that you\nreference in the ",(0,i.kt)("inlineCode",{parentName:"li"},"features")," block of your interview)")),(0,i.kt)("p",null,"You cannot include Mako tags in your CSS file, so in order to use the new font face, you should\nadd it to a Docassemble package and then install the package on your server. "),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},"@font-face {\n    font-family: 'my_font';\n    src: url('/packagestatic/docassemble.MyTheme/my_font.woff2') format('woff2'),\n         url('/packagestatic/docassemble.MyTheme/my_font.woff') format('woff');\n    font-weight: normal;\n    font-style: normal;\n}\n")),(0,i.kt)("p",null,"In the example above, MyTheme is a Docassemble package that is installed\nserver-wide. my_font is both the name of a web font and the name of the WOFF file."))}d.isMDXComponent=!0}}]);