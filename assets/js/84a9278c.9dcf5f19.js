"use strict";(self.webpackChunkdocassemble_assembly_line_documentation=self.webpackChunkdocassemble_assembly_line_documentation||[]).push([[3473],{4137:(e,t,n)=>{n.d(t,{Zo:()=>_,kt:()=>p});var s=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,s,a=function(e,t){if(null==e)return{};var n,s,a={},i=Object.keys(e);for(s=0;s<i.length;s++)n=i[s],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)n=i[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=s.createContext({}),d=function(e){var t=s.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},_=function(e){var t=d(e.components);return s.createElement(o.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},m=s.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,_=l(e,["components","mdxType","originalType","parentName"]),c=d(n),m=a,p=c["".concat(o,".").concat(m)]||c[m]||u[m]||i;return n?s.createElement(p,r(r({ref:t},_),{},{components:n})):s.createElement(p,r({ref:t},_))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[c]="string"==typeof e?e:a,r[1]=l;for(var d=2;d<i;d++)r[d]=n[d];return s.createElement.apply(null,r)}return s.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9619:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var s=n(7462),a=(n(7294),n(4137));const i={sidebar_label:"sessions",title:"sessions"},r=void 0,l={unversionedId:"reference/sessions",id:"reference/sessions",title:"sessions",description:"set\\interview\\metadata",source:"@site/docs/reference/sessions.md",sourceDirName:"reference",slug:"/reference/sessions",permalink:"/docassemble-AssemblyLine-documentation/docs/reference/sessions",draft:!1,editUrl:"https://github.com/SuffolkLITLab/docassemble-AssemblyLine-documentation/edit/main/docs/reference/sessions.md",tags:[],version:"current",frontMatter:{sidebar_label:"sessions",title:"sessions"},sidebar:"someSidebar",previous:{title:"language",permalink:"/docassemble-AssemblyLine-documentation/docs/reference/language"}},o={},d=[{value:"set_interview_metadata",id:"set_interview_metadata",level:4},{value:"get_interview_metadata",id:"get_interview_metadata",level:4},{value:"get_saved_interview_list",id:"get_saved_interview_list",level:4},{value:"delete_interview_sessions",id:"delete_interview_sessions",level:4},{value:"interview_list_html",id:"interview_list_html",level:4},{value:"nice_interview_title",id:"nice_interview_title",level:4},{value:"pascal_to_zwspace",id:"pascal_to_zwspace",level:4},{value:"nice_interview_subtitle",id:"nice_interview_subtitle",level:4},{value:"radial_progress",id:"radial_progress",level:4},{value:"session_list_html",id:"session_list_html",level:4},{value:"rename_interview_answers",id:"rename_interview_answers",level:4},{value:"set_current_session_metadata",id:"set_current_session_metadata",level:4},{value:"rename_current_session",id:"rename_current_session",level:4},{value:"save_interview_answers",id:"save_interview_answers",level:4},{value:"get_filtered_session_variables",id:"get_filtered_session_variables",level:4},{value:"get_filtered_session_variables_string",id:"get_filtered_session_variables_string",level:4},{value:"load_interview_answers",id:"load_interview_answers",level:4},{value:"load_interview_json",id:"load_interview_json",level:4},{value:"export_interview_variables",id:"export_interview_variables",level:4}],_={toc:d};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,s.Z)({},_,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"set_interview_metadata"},"set","_","interview","_","metadata"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'def set_interview_metadata(filename: str,\n                           session_id: int,\n                           data: Dict,\n                           metadata_key_name="metadata") -> None\n')),(0,a.kt)("p",null,"Add searchable interview metadata for the specified filename and session ID.\nIntended to be used to add an interview title, etc.\nStandardized metadata dictionary:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"title"),(0,a.kt)("li",{parentName:"ul"},"subtitle"),(0,a.kt)("li",{parentName:"ul"},"original_interview_filename"),(0,a.kt)("li",{parentName:"ul"},"variable_count")),(0,a.kt)("h4",{id:"get_interview_metadata"},"get","_","interview","_","metadata"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'def get_interview_metadata(filename: str,\n                           session_id: int,\n                           metadata_key_name: str = "metadata") -> Dict\n')),(0,a.kt)("p",null,"Retrieve the unencrypted metadata associated with an interview.\nWe implement this with the docassemble jsonstorage table and a dedicated ",(0,a.kt)("inlineCode",{parentName:"p"},"tag")," which defaults to ",(0,a.kt)("inlineCode",{parentName:"p"},"metadata"),"."),(0,a.kt)("h4",{id:"get_saved_interview_list"},"get","_","saved","_","interview","_","list"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'def get_saved_interview_list(\n        filename: Optional[str] = al_session_store_default_filename,\n        user_id: Union[int, str, None] = None,\n        metadata_key_name: str = "metadata",\n        limit: int = 50,\n        offset: int = 0,\n        filename_to_exclude: str = "",\n        exclude_current_filename: bool = True,\n        exclude_filenames: Optional[List[str]] = None,\n        exclude_newly_started_sessions: bool = False) -> List[Dict]\n')),(0,a.kt)("p",null,"Get a list of saved sessions for the specified filename. If the save_interview_answers function was used\nto add metadata, the result list will include columns containing the metadata.\nIf the user is a developer or administrator, setting user_id = None will list all interviews on the server. Otherwise,\nthe user is limited to their own sessions."),(0,a.kt)("p",null,"Setting ",(0,a.kt)("inlineCode",{parentName:"p"},"exclude_newly_started_sessions")," to True will exclude any results from the list that are still on\n",'"',"step 1",'"',". Note that while this may be useful to filter out interviews that were accidentally started\nand likely do not need to be resumed, it will also have the side effect of excluding all answer sets from the\nresults. Answer sets generally have exactly one ",'"',"step",'"',", which is the step where information was copied from\nan existing interview to the answer set."),(0,a.kt)("h4",{id:"delete_interview_sessions"},"delete","_","interview","_","sessions"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def delete_interview_sessions(\n        user_id: Optional[int] = None,\n        filename_to_exclude: str = al_session_store_default_filename,\n        exclude_current_filename: bool = True) -> None\n")),(0,a.kt)("p",null,"Delete all sessions for the specified user, excluding the current filename\nand by default, the intentionally saved ",'"',"answer sets",'"',". Created because\ninterview_list(action=",'"',"delete_all",'"',") is both quite slow and because it deletes answer sets."),(0,a.kt)("h4",{id:"interview_list_html"},"interview","_","list","_","html"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'def interview_list_html(filename: str = al_session_store_default_filename,\n                        user_id: Union[int, str, None] = None,\n                        metadata_key_name: str = "metadata",\n                        exclude_newly_started_sessions=False,\n                        date_label: str = word("Date"),\n                        details_label: str = word("Details"),\n                        actions_label: str = word("Actions"),\n                        delete_label: str = word("Delete"),\n                        view_label: str = word("View"),\n                        load_action: str = "al_sessions_fast_forward_session",\n                        delete_action: str = "al_sessions_delete_session",\n                        view_only: bool = False,\n                        limit: int = 50,\n                        offset: int = 0) -> str\n')),(0,a.kt)("p",null,"Return a string containing an HTML-formatted table with the list of saved answers\nassociated with the specified filename."),(0,a.kt)("p",null,"Designed to return a list of ",'"',"answer sets",'"'," and by default clicking a title will\ntrigger an action to load the answers into the current session. This only works as\ndesigned when inside an AssemblyLine line interview."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"exclude_newly_started_sessions")," should almost always be set to False, because most answer sets\nare on ",'"',"page 1",'"'," (exactly 1 step was taken to copy the answers and the user isn","'","t able to interact with the answer set\nitself in a way that adds additional steps)"),(0,a.kt)("h4",{id:"nice_interview_title"},"nice","_","interview","_","title"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def nice_interview_title(answer: Dict[str, str]) -> str\n")),(0,a.kt)("p",null,"Return a human readable version of the interview name. Will try several strategies\nin descending priority order."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Try looking up the interview title from the ",(0,a.kt)("inlineCode",{parentName:"li"},"dispatch")," directive"),(0,a.kt)("li",{parentName:"ol"},"Try removing the package and path from the filename and replace _ with spaces."),(0,a.kt)("li",{parentName:"ol"},"Finally, return ",'"',"Untitled interview",'"'," or translated phrase from system-wide words.yml")),(0,a.kt)("h4",{id:"pascal_to_zwspace"},"pascal","_","to","_","zwspace"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def pascal_to_zwspace(text: str) -> str\n")),(0,a.kt)("p",null,"Insert a zero-width space into words that are PascalCased to help\nwith word breaks on small viewports."),(0,a.kt)("h4",{id:"nice_interview_subtitle"},"nice","_","interview","_","subtitle"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def nice_interview_subtitle(answer: Dict[str, str], exclude_identical=True)\n")),(0,a.kt)("p",null,"Return first defined of the ",'"',"title",'"'," metadata, the ",'"',"auto_title",'"'," metadata, or empty string."),(0,a.kt)("p",null,"If exclude_identical, return empty string when title is the same as the subtitle."),(0,a.kt)("h4",{id:"radial_progress"},"radial","_","progress"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def radial_progress(answer: Dict[str, Union[str, int]])\n")),(0,a.kt)("p",null,"Return HTML for a radial progress bar, or the number of steps if progress isn","'","t available in the metadata."),(0,a.kt)("h4",{id:"session_list_html"},"session","_","list","_","html"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'def session_list_html(\n        filename: Optional[str] = None,\n        user_id: Union[int, str, None] = None,\n        metadata_key_name: str = "metadata",\n        filename_to_exclude: str = al_session_store_default_filename,\n        exclude_current_filename: bool = True,\n        exclude_filenames: Optional[List[str]] = None,\n        exclude_newly_started_sessions: bool = False,\n        name_label: str = word("Title"),\n        date_label: str = word("Date modified"),\n        details_label: str = word("Progress"),\n        actions_label: str = word("Actions"),\n        delete_label: str = word("Delete"),\n        rename_label: str = word("Rename"),\n        rename_action: str = "interview_list_rename_action",\n        delete_action: str = "interview_list_delete_session",\n        copy_action: str = "interview_list_copy_action",\n        clone_label: str = word("Copy as answer set"),\n        show_title: bool = True,\n        limit: int = 50,\n        offset: int = 0) -> str\n')),(0,a.kt)("p",null,"Return a string containing an HTML-formatted table with the list of user sessions.\nWhile interview_list_html() is for answer sets, this feature is for standard\nuser sessions. The results exclude the answer set filename by default."),(0,a.kt)("h4",{id:"rename_interview_answers"},"rename","_","interview","_","answers"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'def rename_interview_answers(filename: str,\n                             session_id: int,\n                             new_name: str,\n                             metadata_key_name: str = "metadata") -> None\n')),(0,a.kt)("p",null,"Update the ","'","title","'"," metadata of an interview, as stored in the dedicated ",(0,a.kt)("inlineCode",{parentName:"p"},"metadata")," column, without touching other\nmetadata that may be present."),(0,a.kt)("h4",{id:"set_current_session_metadata"},"set","_","current","_","session","_","metadata"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'def set_current_session_metadata(data: Dict[str, Any],\n                                 metadata_key_name: str = "metadata") -> None\n')),(0,a.kt)("p",null,"Set metadata for the current session, such as the title, in an unencrypted database entry.\nThis may be helpful for faster SQL queries and reports, such as listing interview answers."),(0,a.kt)("h4",{id:"rename_current_session"},"rename","_","current","_","session"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'def rename_current_session(new_name: str,\n                           metadata_key_name: str = "metadata") -> None\n')),(0,a.kt)("p",null,"Update the ",'"',"title",'"'," metadata entry for the current session without changing any other\nmetadata that might be present."),(0,a.kt)("h4",{id:"save_interview_answers"},"save","_","interview","_","answers"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'def save_interview_answers(filename: str = al_session_store_default_filename,\n                           variables_to_filter: Union[Set[str], List[str],\n                                                      None] = None,\n                           metadata: Optional[Dict] = None,\n                           metadata_key_name: str = "metadata",\n                           original_interview_filename=None,\n                           source_filename=None,\n                           source_session=None) -> str\n')),(0,a.kt)("p",null,"Copy the answers from the specified session into a new session with the given\ninterview filename. Typically used to create an answer set."),(0,a.kt)("h4",{id:"get_filtered_session_variables"},"get","_","filtered","_","session","_","variables"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def get_filtered_session_variables(\n    filename: Optional[str] = None,\n    session_id: Optional[int] = None,\n    variables_to_filter: Union[Set[str], List[str], None] = None\n) -> Dict[str, Any]\n")),(0,a.kt)("p",null,"Get a filtered subset of the variables from the specified interview filename and session."),(0,a.kt)("p",null,"If no filename and session ID are specified, return filtered list of variables from the current interview."),(0,a.kt)("h4",{id:"get_filtered_session_variables_string"},"get","_","filtered","_","session","_","variables","_","string"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def get_filtered_session_variables_string(\n        filename: Optional[str] = None,\n        session_id: Optional[int] = None,\n        variables_to_filter: Union[Set[str], List[str], None] = None) -> str\n")),(0,a.kt)("p",null,"Get a JSON string representing the filtered contents of the specified filename and session_id. If no filename and session_id\nare provided, the output will contain the variables from the current session."),(0,a.kt)("h4",{id:"load_interview_answers"},"load","_","interview","_","answers"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def load_interview_answers(\n        old_interview_filename: str,\n        old_session_id: int,\n        new_session: bool = False,\n        new_interview_filename: Optional[str] = None,\n        variables_to_filter: Optional[List[str]] = None) -> Optional[int]\n")),(0,a.kt)("p",null,"Load answers from the specified session. If the parameter new_session = True, create a new session of\nthe specified or current interview filename. Otherwise, load the answers into the active session.\nReturns the ID of the newly created session\nCreate a new session with the variables from the specified session ID. Returns the ID of the newly\ncreated and ",'"',"filled",'"'," session."),(0,a.kt)("h4",{id:"load_interview_json"},"load","_","interview","_","json"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def load_interview_json(\n        json_string: str,\n        new_session: bool = False,\n        new_interview_filename: Optional[str] = None,\n        variables_to_filter: Optional[List[str]] = None) -> Optional[int]\n")),(0,a.kt)("p",null,"Provided a JSON string, load the specified variables into a Docassemble session. JSON with annotated class names\nwill be processed into Docassemble objects."),(0,a.kt)("p",null,"If new_session is not provided, the JSON answers will be loaded into the current interview."),(0,a.kt)("h4",{id:"export_interview_variables"},"export","_","interview","_","variables"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def export_interview_variables(filename: Optional[str] = None,\n                               session_id: Optional[int] = None,\n                               variables_to_filter: Union[Set, List[str],\n                                                          None] = None,\n                               output: DAFile = None) -> DAFile\n")),(0,a.kt)("p",null,"Get a DAFile with the JSON representation of the specified session","'","s interview answers. The output is compatible with\nset_session_variables(process_objects=True) and set_variables(process_objects=True)"))}c.isMDXComponent=!0}}]);