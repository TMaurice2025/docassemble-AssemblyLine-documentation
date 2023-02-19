"use strict";(self.webpackChunkdocassemble_assembly_line_documentation=self.webpackChunkdocassemble_assembly_line_documentation||[]).push([[5520],{4137:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),p=o,h=d["".concat(i,".").concat(p)]||d[p]||m[p]||a;return n?r.createElement(h,s(s({ref:t},u),{},{components:n})):r.createElement(h,s({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[d]="string"==typeof e?e:o,s[1]=l;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6523:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(7462),o=(n(7294),n(4137));const a={sidebar_label:"al_courts",title:"AssemblyLine.al_courts"},s=void 0,l={unversionedId:"reference/AssemblyLine/al_courts",id:"reference/AssemblyLine/al_courts",title:"AssemblyLine.al_courts",description:"Package for a very simple / MVP list of courts that is mostly signature compatible w/ MACourts for now",source:"@site/docs/reference/AssemblyLine/al_courts.md",sourceDirName:"reference/AssemblyLine",slug:"/reference/AssemblyLine/al_courts",permalink:"/docassemble-AssemblyLine-documentation/docs/reference/AssemblyLine/al_courts",draft:!1,editUrl:"https://github.com/SuffolkLITLab/docassemble-AssemblyLine-documentation/edit/main/docs/reference/AssemblyLine/al_courts.md",tags:[],version:"current",frontMatter:{sidebar_label:"al_courts",title:"AssemblyLine.al_courts"},sidebar:"api",previous:{title:"save_input_data",permalink:"/docassemble-AssemblyLine-documentation/docs/reference/ALToolbox/save_input_data"},next:{title:"al_document",permalink:"/docassemble-AssemblyLine-documentation/docs/reference/AssemblyLine/al_document"}},i={},c=[{value:"ALCourt Objects",id:"alcourt-objects",level:2},{value:"short_label",id:"short_label",level:4},{value:"short_label_and_address",id:"short_label_and_address",level:4},{value:"short_description",id:"short_description",level:4},{value:"from_row",id:"from_row",level:4},{value:"ALCourtLoader Objects",id:"alcourtloader-objects",level:2},{value:"all_courts",id:"all_courts",level:4},{value:"unique_column_values",id:"unique_column_values",level:4},{value:"county_list",id:"county_list",level:4},{value:"county_has_one_court",id:"county_has_one_court",level:4},{value:"county_court",id:"county_court",level:4},{value:"matching_courts_in_county",id:"matching_courts_in_county",level:4},{value:"filter_courts",id:"filter_courts",level:4},{value:"as_court",id:"as_court",level:4}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Package for a very simple / MVP list of courts that is mostly signature compatible w/ MACourts for now"),(0,o.kt)("h2",{id:"alcourt-objects"},"ALCourt Objects"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class ALCourt(Court)\n")),(0,o.kt)("p",null,"Object representing a court in Massachusetts.\nTODO: it could be interesting to store a jurisdiction on a court. But this is non-trivial. Should it be geo boundaries?\nA list of cities? A list of counties? Instead, we use a function on the CourtList object that filters courts by\naddress and can use any of those three features of the court to do the filtering."),(0,o.kt)("h4",{id:"short_label"},"short","_","label"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def short_label() -> str\n")),(0,o.kt)("p",null,"Returns a string that represents a nice, disambiguated label for the court.\nThis may not match the court","'","s name. If the name omits city, we\nappend city name to the court name. This is good for a drop-down selection\nlist."),(0,o.kt)("h4",{id:"short_label_and_address"},"short","_","label","_","and","_","address"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def short_label_and_address() -> str\n")),(0,o.kt)("p",null,"Returns a markdown formatted string with the name and address of the court.\nMore concise version without description; suitable for a responsive case."),(0,o.kt)("h4",{id:"short_description"},"short","_","description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def short_description() -> str\n")),(0,o.kt)("p",null,"Returns a Markdown formatted string that includes the disambiguated name and\nthe description of the court, for inclusion in the results page with radio\nbuttons."),(0,o.kt)("h4",{id:"from_row"},"from","_","row"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def from_row(df_row, ensure_lat_long=True) -> None\n")),(0,o.kt)("p",null,"Loads data from a single Pandas Dataframe into a court object.\nNote: It will try to convert column names that don","'","t make valid\nattributes. Best practice is to use good attribute names (no spaces) that don","'","t interfere\nwith existing attributes or methods of DAObject"),(0,o.kt)("h2",{id:"alcourtloader-objects"},"ALCourtLoader Objects"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class ALCourtLoader(DAObject)\n")),(0,o.kt)("p",null,"Object to hold some methods surrounding loading/filtering courts."),(0,o.kt)("p",null,"Built around Pandas dataframe."),(0,o.kt)("h4",{id:"all_courts"},"all","_","courts"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def all_courts() -> list\n")),(0,o.kt)("p",null,"Return all courts without any filtering"),(0,o.kt)("h4",{id:"unique_column_values"},"unique","_","column","_","values"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def unique_column_values(column_name) -> Set[str]\n")),(0,o.kt)("p",null,"get a list of all unique values in the given column"),(0,o.kt)("h4",{id:"county_list"},"county","_","list"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'def county_list(column_name: str = "address_county")\n')),(0,o.kt)("p",null,"Get a list of all unique county names in the given spreadsheet"),(0,o.kt)("h4",{id:"county_has_one_court"},"county","_","has","_","one","_","court"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'def county_has_one_court(county_name: str,\n                         county_column: str = "address_county") -> bool\n')),(0,o.kt)("p",null,"Returns True if there is only one court associated with the specified county"),(0,o.kt)("h4",{id:"county_court"},"county","_","court"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'def county_court(intrinsicName: str,\n                 county_name: str,\n                 county_column: str = "address_county") -> ALCourt\n')),(0,o.kt)("p",null,"Return the first court matching the county name. Should only be used\nwhen you know there is exactly one match"),(0,o.kt)("h4",{id:"matching_courts_in_county"},"matching","_","courts","_","in","_","county"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'def matching_courts_in_county(\n        county_name: str,\n        county_column: str = "address_county",\n        display_column: str = "name",\n        search_string: Optional[str] = None,\n        search_columns: Optional[Union[List[str], str]] = None) -> List[dict]\n')),(0,o.kt)("p",null,"Get a list of all courts in the provided county, suitable for displaying\nas a drop-down or radio button list in Docassemble. The results will be a\ndictionary where the key is the index in the dataframe, to be used to\nretrieve the court","'","s full details later with the as_court() method."),(0,o.kt)("p",null,":param county_name: str name of a county\n:param county_column: str column heading which contains county name. Defaults to ",'"',"address_county",'"',"\n:param display_column: str column heading which will be used for display in drop down\n:param search_string: str, optional a keyword that will be checked in the filtered list of results\n:param search_columns: str or List","[str]",", optional columns to aggregate and then do case-insensitive search across with the search_string"),(0,o.kt)("h4",{id:"filter_courts"},"filter","_","courts"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'def filter_courts(\n        court_types: Optional[Union[List[str], str]],\n        column: str = "department",\n        display_column: str = "name",\n        search_string: Optional[str] = None,\n        search_columns: Optional[Union[List[str], str]] = None) -> List[dict]\n')),(0,o.kt)("p",null,"Return a subset of courts as a list of dictionaries, like:\nindex: name"),(0,o.kt)("p",null,":param court_types: List","[str]"," or str, exact string match","[es]"," you want to use to filter results (inclusive). E.g., ",'"',"District",'"'," or ",'["',"Municipal",'"',",",'"',"Superior",'"]',"\n:param column: str column heading which you want to search. Defaults to ",'"',"department",'"',"\n:param display_column: str column heading which will be used for display in drop down\n:param search_string: str, optional a keyword that will be checked in the filtered list of results\n:param search_columns: str or List","[str]",", optional columns to aggregate and then do case-insensitive search across with the search_string"),(0,o.kt)("h4",{id:"as_court"},"as","_","court"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def as_court(intrinsicName, index, ensure_lat_long=True)\n")),(0,o.kt)("p",null,"Return the court at the specified index as an ALCourt object"))}d.isMDXComponent=!0}}]);