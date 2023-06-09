"use strict";(self.webpackChunkdocassemble_assembly_line_documentation=self.webpackChunkdocassemble_assembly_line_documentation||[]).push([[8234],{4137:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var a=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=a.createContext({}),d=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=d(e.components);return a.createElement(o.Provider,{value:n},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},_=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,s=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=d(t),_=l,m=p["".concat(o,".").concat(_)]||p[_]||c[_]||s;return t?a.createElement(m,r(r({ref:n},u),{},{components:t})):a.createElement(m,r({ref:n},u))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var s=t.length,r=new Array(s);r[0]=_;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i[p]="string"==typeof e?e:l,r[1]=i;for(var d=2;d<s;d++)r[d]=t[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}_.displayName="MDXCreateElement"},4171:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var a=t(7462),l=(t(7294),t(4137));const s={sidebar_label:"al_general",title:"AssemblyLine.al_general"},r=void 0,i={unversionedId:"reference/AssemblyLine/al_general",id:"reference/AssemblyLine/al_general",title:"AssemblyLine.al_general",description:"ALAddress Objects",source:"@site/docs/reference/AssemblyLine/al_general.md",sourceDirName:"reference/AssemblyLine",slug:"/reference/AssemblyLine/al_general",permalink:"/docassemble-AssemblyLine-documentation/docs/reference/AssemblyLine/al_general",draft:!1,editUrl:"https://github.com/SuffolkLITLab/docassemble-AssemblyLine-documentation/edit/main/docs/reference/AssemblyLine/al_general.md",tags:[],version:"current",frontMatter:{sidebar_label:"al_general",title:"AssemblyLine.al_general"},sidebar:"api",previous:{title:"al_document",permalink:"/docassemble-AssemblyLine-documentation/docs/reference/AssemblyLine/al_document"},next:{title:"language",permalink:"/docassemble-AssemblyLine-documentation/docs/reference/AssemblyLine/language"}},o={},d=[{value:"ALAddress Objects",id:"aladdress-objects",level:2},{value:"address_fields",id:"address_fields",level:4},{value:"formatted_unit",id:"formatted_unit",level:4},{value:"block",id:"block",level:4},{value:"line_one",id:"line_one",level:4},{value:"line_two",id:"line_two",level:4},{value:"on_one_line",id:"on_one_line",level:4},{value:"normalized_address",id:"normalized_address",level:4},{value:"state_name",id:"state_name",level:4},{value:"ALAddressList Objects",id:"aladdresslist-objects",level:2},{value:"ALNameList Objects",id:"alnamelist-objects",level:2},{value:"ALPeopleList Objects",id:"alpeoplelist-objects",level:2},{value:"names_and_addresses_on_one_line",id:"names_and_addresses_on_one_line",level:4},{value:"short_list",id:"short_list",level:4},{value:"full_names",id:"full_names",level:4},{value:"ALIndividual Objects",id:"alindividual-objects",level:2},{value:"contact_methods",id:"contact_methods",level:4},{value:"merge_letters",id:"merge_letters",level:4},{value:"name_fields",id:"name_fields",level:4},{value:"address_fields",id:"address_fields-1",level:4},{value:"gender_fields",id:"gender_fields",level:4},{value:"pronoun_fields",id:"pronoun_fields",level:4},{value:"get_pronouns",id:"get_pronouns",level:4},{value:"language_fields",id:"language_fields",level:4},{value:"language_name",id:"language_name",level:4},{value:"gender_male",id:"gender_male",level:4},{value:"gender_female",id:"gender_female",level:4},{value:"gender_other",id:"gender_other",level:4},{value:"gender_nonbinary",id:"gender_nonbinary",level:4},{value:"gender_unknown",id:"gender_unknown",level:4},{value:"gender_undisclosed",id:"gender_undisclosed",level:4},{value:"gender_self_described",id:"gender_self_described",level:4},{value:"contact_fields",id:"contact_fields",level:4},{value:"initials",id:"initials",level:4},{value:"address_block",id:"address_block",level:4},{value:"section_links",id:"section_links",level:4},{value:"will_send_to_real_court",id:"will_send_to_real_court",level:4},{value:"filter_letters",id:"filter_letters",level:4},{value:"fa_icon",id:"fa_icon",level:4},{value:"is_phone_or_email",id:"is_phone_or_email",level:4},{value:"github_modified_date",id:"github_modified_date",level:4},{value:"language_name",id:"language_name-1",level:4},{value:"safe_states_list",id:"safe_states_list",level:4}],u={toc:d};function p(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"aladdress-objects"},"ALAddress Objects"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"class ALAddress(Address)\n")),(0,l.kt)("h4",{id:"address_fields"},"address","_","fields"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def address_fields(country_code: Optional[str] = None,\n                   default_state: Optional[str] = None,\n                   show_country: bool = False,\n                   show_county: bool = False,\n                   show_if: Union[str, Dict[str, str], None] = None,\n                   allow_no_address: bool = False)\n")),(0,l.kt)("p",null,"Return a YAML structure representing the list of fields for the object","'","s address.\nOptionally, allow the user to specify they do not have an address.\nNOTE: if you set allow_no_address to True, you must make sure to trigger\nthe question with ",(0,l.kt)("inlineCode",{parentName:"p"},"users[0].address.has_no_address")," rather than\n",(0,l.kt)("inlineCode",{parentName:"p"},"users[0].address.address"),".\nOptionally, add a ",(0,l.kt)("inlineCode",{parentName:"p"},"show if")," modifier to each field. The ",(0,l.kt)("inlineCode",{parentName:"p"},"show if")," modifier\nwill not be used if the ",(0,l.kt)("inlineCode",{parentName:"p"},"allow_no_address")," modifier is used.\n",(0,l.kt)("inlineCode",{parentName:"p"},"country_code")," should be an ISO-3166-1 alpha-2 code (",(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements"},"https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements"),")"),(0,l.kt)("p",null,"NOTE: address_fields() is stateful if you:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Use the ",(0,l.kt)("inlineCode",{parentName:"li"},"country_code")," parameter and;"),(0,l.kt)("li",{parentName:"ol"},"Do not use the ",(0,l.kt)("inlineCode",{parentName:"li"},"show_country")," parameter, and"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"country_code")," has a different value than ",(0,l.kt)("inlineCode",{parentName:"li"},"get_country()"),".")),(0,l.kt)("p",null,"Under these circumstances, address_fields() will set the ",(0,l.kt)("inlineCode",{parentName:"p"},"country")," attribute of the Address\nto ",(0,l.kt)("inlineCode",{parentName:"p"},"country_code"),"."),(0,l.kt)("h4",{id:"formatted_unit"},"formatted","_","unit"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def formatted_unit(language=None, require=False, bare=False)\n")),(0,l.kt)("p",null,"Returns the unit, formatted appropriately"),(0,l.kt)("h4",{id:"block"},"block"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def block(language=None,\n          international=False,\n          show_country=None,\n          bare=False,\n          long_state=False)\n")),(0,l.kt)("p",null,"Returns the address formatted as a block, as in a mailing."),(0,l.kt)("h4",{id:"line_one"},"line","_","one"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def line_one(language=None, bare=False)\n")),(0,l.kt)("p",null,"Returns the first line of the address, including the unit\nnumber if there is one."),(0,l.kt)("h4",{id:"line_two"},"line","_","two"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def line_two(language=None, long_state=False)\n")),(0,l.kt)("p",null,"Returns the second line of the address, including the city,\nstate and zip code."),(0,l.kt)("h4",{id:"on_one_line"},"on","_","one","_","line"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def on_one_line(include_unit=True,\n                omit_default_country=True,\n                language=None,\n                show_country=None,\n                bare=False,\n                long_state=False)\n")),(0,l.kt)("p",null,"Returns a one-line address.  Primarily used internally for geocoding."),(0,l.kt)("h4",{id:"normalized_address"},"normalized","_","address"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'def normalized_address() -> Union[Address, "ALAddress"]\n')),(0,l.kt)("p",null,"Try geocoding the address, and if it succeeds, return the ",'"',"long",'"'," normalized version of\nthe address. All methods are still available, such as my_address.normalized_address().block(), etc.,\nbut note that this will be a standard Address object, not an ALAddress object."),(0,l.kt)("p",null,"If geocoding fails, return the version of the address as entered by the user instead."),(0,l.kt)("h4",{id:"state_name"},"state","_","name"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def state_name(country_code=None)\n")),(0,l.kt)("p",null,"Return the full state name associated with the Address object","'","s state abbreviation."),(0,l.kt)("p",null,"If provided, the ",(0,l.kt)("inlineCode",{parentName:"p"},"country_code")," parameter will override the country attribute of the\nAddress object. If omitted, it will use in order:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"The country code associated with the Address object, and then"),(0,l.kt)("li",{parentName:"ol"},"The country set in the global config for the server")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"country_code")," should be an ISO-3166-1 alpha-2 code\n(",(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements"},"https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements"),")"),(0,l.kt)("h2",{id:"aladdresslist-objects"},"ALAddressList Objects"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"class ALAddressList(DAList)\n")),(0,l.kt)("p",null,"Store a list of Address objects"),(0,l.kt)("h2",{id:"alnamelist-objects"},"ALNameList Objects"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"class ALNameList(DAList)\n")),(0,l.kt)("p",null,"Store a list of IndividualNames"),(0,l.kt)("h2",{id:"alpeoplelist-objects"},"ALPeopleList Objects"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"class ALPeopleList(DAList)\n")),(0,l.kt)("p",null,"Used to represent a list of people. E.g., defendants, plaintiffs, children"),(0,l.kt)("h4",{id:"names_and_addresses_on_one_line"},"names","_","and","_","addresses","_","on","_","one","_","line"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'def names_and_addresses_on_one_line(comma_string: str = "; ",\n                                    bare=False) -> str\n')),(0,l.kt)("p",null,"Returns the name of each person followed by their address, separated by a semicolon"),(0,l.kt)("h4",{id:"short_list"},"short","_","list"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'def short_list(limit: int, truncate_string: str = ", et. al.")\n')),(0,l.kt)("p",null,"Return a subset of the list, as as string with a comma separating items, followed by ","'","et. al.","'"," if the list exceeds the provided limit.\nOtherwise just return the items in the list."),(0,l.kt)("h4",{id:"full_names"},"full","_","names"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'def full_names(comma_string=", ", and_string=word("and"))\n')),(0,l.kt)("p",null,"Return a formatted list of names in the PeopleList, without shortening middle name to an initial.\nOptional parameters ",(0,l.kt)("inlineCode",{parentName:"p"},"comma_string")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"and_string")," will be passed to ",(0,l.kt)("inlineCode",{parentName:"p"},"comma_and_list")," and allow\nyou to change the list separator and the word before the final list item, respectively."),(0,l.kt)("h2",{id:"alindividual-objects"},"ALIndividual Objects"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"class ALIndividual(Individual)\n")),(0,l.kt)("p",null,"Used to represent an Individual on the assembly line project.\nTwo custom attributes are objects and so we need to initialize: ",(0,l.kt)("inlineCode",{parentName:"p"},"previous_addresses"),"\nand ",(0,l.kt)("inlineCode",{parentName:"p"},"other_addresses")),(0,l.kt)("h4",{id:"contact_methods"},"contact","_","methods"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def contact_methods() -> str\n")),(0,l.kt)("p",null,"Method to return a formatted string with all provided contact methods of the individual:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Phone number(s)"),(0,l.kt)("li",{parentName:"ul"},"Email"),(0,l.kt)("li",{parentName:"ul"},"other method")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"str")," - Formatted string")),(0,l.kt)("h4",{id:"merge_letters"},"merge","_","letters"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def merge_letters(new_letters: str)\n")),(0,l.kt)("p",null,"If the Individual has a child_letters attribute, add the new letters to the existing list"),(0,l.kt)("h4",{id:"name_fields"},"name","_","fields"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'def name_fields(\n        person_or_business: str = "person",\n        show_suffix: bool = True,\n        show_if: Union[str, Dict[str, str],\n                       None] = None) -> List[Dict[str, str]]\n')),(0,l.kt)("p",null,"Return suitable field prompts for a name. If ",(0,l.kt)("inlineCode",{parentName:"p"},"person_or_business")," is None, adds the\nproper ",'"',"show ifs",'"'," and uses both the parts and the single entry"),(0,l.kt)("h4",{id:"address_fields-1"},"address","_","fields"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'def address_fields(country_code: str = "US",\n                   default_state: Optional[str] = None,\n                   show_country: bool = False,\n                   show_county: bool = False,\n                   show_if: Union[str, Dict[str, str], None] = None,\n                   allow_no_address: bool = False) -> List[Dict[str, str]]\n')),(0,l.kt)("p",null,"Return field prompts for address."),(0,l.kt)("h4",{id:"gender_fields"},"gender","_","fields"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def gender_fields(show_help=False,\n                  show_if: Union[str, Dict[str, str], None] = None)\n")),(0,l.kt)("p",null,"Return a standard gender input with ",'"',"self described",'"'," option."),(0,l.kt)("h4",{id:"pronoun_fields"},"pronoun","_","fields"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def pronoun_fields(show_help=False,\n                   show_if: Union[str, Dict[str, str], None] = None,\n                   required: bool = False,\n                   shuffle: bool = True)\n")),(0,l.kt)("p",null,"Return a standard multiple choice checkbox pronouns input with a ",'"',"self described",'"'," option."),(0,l.kt)("p",null,"Options are shuffled by default."),(0,l.kt)("h4",{id:"get_pronouns"},"get","_","pronouns"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def get_pronouns() -> set\n")),(0,l.kt)("p",null,"Return a set of the individual","'","s pronouns. If the individual","'","s\npronouns include self-described pronouns, display those in place of the word ",'"',"self-described",'"',"."),(0,l.kt)("p",null,"The set can be displayed in the interview or in a template. For example:"),(0,l.kt)("p",null,"Pronouns: {{ users","[0]",".get_pronouns() | comma_and_list }}"),(0,l.kt)("h4",{id:"language_fields"},"language","_","fields"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'def language_fields(choices: Optional[List[Dict[str, str]]] = None,\n                    style: str = "radio",\n                    show_if: Union[str, Dict[str, str], None] = None)\n')),(0,l.kt)("p",null,"Return a standard language picker with an ",'"',"other",'"'," input. Language should be specified as ISO 639-2 or -3 codes so it is compatible with the language_name() function."),(0,l.kt)("h4",{id:"language_name"},"language","_","name"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def language_name()\n")),(0,l.kt)("p",null,"Return the human-readable version of the individual","'","s language, handling the ",'"',"other",'"'," option."),(0,l.kt)("h4",{id:"gender_male"},"gender","_","male"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"@property\ndef gender_male()\n")),(0,l.kt)("p",null,"Provide True/False for ","'","male","'"," gender to assist with checkbox filling\nin PDFs with ",'"',"skip undefined",'"'," turned on."),(0,l.kt)("h4",{id:"gender_female"},"gender","_","female"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"@property\ndef gender_female()\n")),(0,l.kt)("p",null,"Provide True/False for ","'","female","'"," gender to assist with checkbox filling\nin PDFs with ",'"',"skip undefined",'"'," turned on."),(0,l.kt)("h4",{id:"gender_other"},"gender","_","other"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"@property\ndef gender_other()\n")),(0,l.kt)("p",null,"Provide True/False for ","'","other","'"," gender to assist with checkbox filling\nin PDFs with ",'"',"skip undefined",'"'," turned on for forms without more inclusive options."),(0,l.kt)("h4",{id:"gender_nonbinary"},"gender","_","nonbinary"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"@property\ndef gender_nonbinary()\n")),(0,l.kt)("p",null,"Provide True/False for ","'","nonbinary","'"," gender to assist with checkbox filling\nin PDFs with ",'"',"skip undefined",'"'," turned on."),(0,l.kt)("h4",{id:"gender_unknown"},"gender","_","unknown"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"@property\ndef gender_unknown()\n")),(0,l.kt)("p",null,"Provide True/False for ","'","unknown","'"," gender to assist with checkbox filling\nin PDFs with ",'"',"skip undefined",'"'," turned on."),(0,l.kt)("h4",{id:"gender_undisclosed"},"gender","_","undisclosed"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"@property\ndef gender_undisclosed()\n")),(0,l.kt)("p",null,"Provide True/False for ","'","prefer-not-to-say","'"," gender to assist with checkbox filling\nin PDFs with ",'"',"skip undefined",'"'," turned on."),(0,l.kt)("h4",{id:"gender_self_described"},"gender","_","self","_","described"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"@property\ndef gender_self_described()\n")),(0,l.kt)("p",null,"Provide True/False for ","'","self-described","'"," gender to assist with checkbox filling\nin PDFs with ",'"',"skip undefined",'"'," turned on."),(0,l.kt)("h4",{id:"contact_fields"},"contact","_","fields"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def contact_fields()\n")),(0,l.kt)("p",null,"Return field prompts for other contact info"),(0,l.kt)("h4",{id:"initials"},"initials"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"@property\ndef initials()\n")),(0,l.kt)("p",null,"Return the individual","'","s initials, like QKS for Quinten K Steenhuis"),(0,l.kt)("h4",{id:"address_block"},"address","_","block"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def address_block(language=None,\n                  international=False,\n                  show_country=False,\n                  bare=False)\n")),(0,l.kt)("p",null,"Returns the person name address as a block, for use in mailings."),(0,l.kt)("h4",{id:"section_links"},"section","_","links"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def section_links(nav) -> List[str]\n")),(0,l.kt)("p",null,"Returns a list of clickable navigation links without animation."),(0,l.kt)("h4",{id:"will_send_to_real_court"},"will","_","send","_","to","_","real","_","court"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def will_send_to_real_court() -> bool\n")),(0,l.kt)("p",null,"Dev or root needs to be in the URL root: can change in the config file"),(0,l.kt)("h4",{id:"filter_letters"},"filter","_","letters"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def filter_letters(letter_strings: Union[List[str], str]) -> str\n")),(0,l.kt)("p",null,"Used to take a list of letters like ",'["',"A",'"',",",'"',"ABC",'"',",",'"',"AB",'"]'," and filter out any duplicate letters."),(0,l.kt)("h4",{id:"fa_icon"},"fa","_","icon"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'def fa_icon(icon: str,\n            color: str = "primary",\n            color_css: Optional[str] = None,\n            size: str = "sm")\n')),(0,l.kt)("p",null,"Return HTML for a font-awesome icon of the specified size and color. You can reference\na CSS variable (such as Bootstrap theme color) or a true CSS color reference, such as ","'","blue","'"," or\n","'",(0,l.kt)("inlineCode",{parentName:"p"},"DDDDDD"),"'",". Defaults to Bootstrap theme color ",'"',"primary",'"',"."),(0,l.kt)("h4",{id:"is_phone_or_email"},"is","_","phone","_","or","_","email"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def is_phone_or_email(text: str) -> bool\n")),(0,l.kt)("p",null,"Returns True if the string is either a valid phone number or a valid email address.\nEmail validation is extremely minimal--just checks for an @ sign between two non-zero length\nstrings."),(0,l.kt)("h4",{id:"github_modified_date"},"github","_","modified","_","date"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def github_modified_date(github_user: str,\n                         github_repo_name: str,\n                         auth=None) -> Union[DADateTime, None]\n")),(0,l.kt)("p",null,"Returns the date that the given GitHub repository was modified or None if API call fails."),(0,l.kt)("p",null,"Will check for the presence of credentials in the configuration labeled ",'"',"github issues",'"',"\nin this format:"),(0,l.kt)("p",null,"github issues:\nusername: YOUR_GITHUB_USERNAME\ntoken: YOUR_GITHUB_PRIVATE_TOKEN"),(0,l.kt)("p",null,"If those credentials aren","'","t found, it will then search for credentials in this format (deprecated):"),(0,l.kt)("p",null,"github readonly:\nusername: YOUR_GITHUB_USERNAME\npassword: YOUR_GITHUB_PRIVATE_TOKEN\ntype: basic"),(0,l.kt)("p",null,"If no valid auth information is in the configuration, it will fall back to anonymous authentication.\nThe GitHub API is rate-limited to 60 anonymous API queries/hour."),(0,l.kt)("h4",{id:"language_name-1"},"language","_","name"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def language_name(language_code: str) -> str\n")),(0,l.kt)("p",null,"Given a 2 digit language code abbreviation, returns the full\nname of the language. The language name will be passed through the ",(0,l.kt)("inlineCode",{parentName:"p"},"word()"),"\nfunction."),(0,l.kt)("h4",{id:"safe_states_list"},"safe","_","states","_","list"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def safe_states_list(country_code: str) -> List[Dict[str, str]]\n")),(0,l.kt)("p",null,"Wrapper around states_list that doesn","'","t error if passed\nan invalid country_code (e.g., a country name spelled out)"))}p.isMDXComponent=!0}}]);