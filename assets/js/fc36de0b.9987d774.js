"use strict";(self.webpackChunkdocassemble_assembly_line_documentation=self.webpackChunkdocassemble_assembly_line_documentation||[]).push([[4842],{4137:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>p});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function _(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),l=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(o.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,c=_(e,["components","mdxType","originalType","parentName"]),d=l(t),m=a,p=d["".concat(o,".").concat(m)]||d[m]||u[m]||s;return t?r.createElement(p,i(i({ref:n},c),{},{components:t})):r.createElement(p,i({ref:n},c))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,i=new Array(s);i[0]=m;var _={};for(var o in n)hasOwnProperty.call(n,o)&&(_[o]=n[o]);_.originalType=e,_[d]="string"==typeof e?e:a,i[1]=_;for(var l=2;l<s;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6549:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>_,toc:()=>l});var r=t(7462),a=(t(7294),t(4137));const s={id:"reserved_keywords",title:"Reserved variable names you cannot use in Assembly Line interviews\n",sidebar_label:"Reserved variable names that you cannot use",slug:"/framework/reserved_keywords"},i=void 0,_={unversionedId:"framework/reserved_keywords",id:"framework/reserved_keywords",title:"Reserved variable names you cannot use in Assembly Line interviews\n",description:'What is a "reserved" name?',source:"@site/docs/framework/reserved_keywords.md",sourceDirName:"framework",slug:"/framework/reserved_keywords",permalink:"/docassemble-AssemblyLine-documentation/docs/framework/reserved_keywords",draft:!1,editUrl:"https://github.com/SuffolkLITLab/docassemble-AssemblyLine-documentation/edit/main/docs/framework/reserved_keywords.md",tags:[],version:"current",frontMatter:{id:"reserved_keywords",title:"Reserved variable names you cannot use in Assembly Line interviews\n",sidebar_label:"Reserved variable names that you cannot use",slug:"/framework/reserved_keywords"},sidebar:"someSidebar",previous:{title:"Helping users recover from developer errors\n",permalink:"/docassemble-AssemblyLine-documentation/docs/framework/error_actions"},next:{title:"ALIncome: Python Classes to gather financial information\n",permalink:"/docassemble-AssemblyLine-documentation/docs/alincome/overview"}},o={},l=[{value:"What is a &quot;reserved&quot; name?",id:"what-is-a-reserved-name",level:2},{value:"Full list of reserved variable names",id:"full-list-of-reserved-variable-names",level:2},{value:"Further reference",id:"further-reference",level:2}],c={toc:l};function d(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"what-is-a-reserved-name"},'What is a "reserved" name?'),(0,a.kt)("p",null,"A reserved variable name is a variable name that already has a\npredefined meaning. Using a reserved variable name can lead to unexpected\nresults or a hard to understand error in your interview."),(0,a.kt)("p",null,"In the AssemblyLine framework, we have tried to choose variable names that you\nare unlikely to use by accident. However, some very common English-language\nterms are reserved because they are used in Python, Docassemble, or the\nAssemblyLine framework. Use the list of terms below as a guide."),(0,a.kt)("h2",{id:"full-list-of-reserved-variable-names"},"Full list of reserved variable names"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ALAddendumField\nALAddendumFieldDict\nALAddress\nALAddressList\nALDocument\nALDocumentBundle\nALDocumentUpload\nALExhibit\nALExhibitDocument\nALExhibitList\nALIndividual\nALPeopleList\nALStaticDocument\nALTableDocument\nALUntransformedDocument\nAbuser\nAddress\nAddressList\nApplicant\nAsset\nChildList\nCity\nDA\nDABreadCrumbs\nDACloudStorage\nDAContext\nDADict\nDAEmail\nDAEmailRecipient\nDAEmailRecipientList\nDAEmpty\nDAFile\nDAFileCollection\nDAFileList\nDAGlobal\nDAGoogleAPI\nDALink\nDAList\nDAOAuth\nDAObject\nDAOrderedDict\nDARedis\nDASet\nDAStaticFile\nDAStore\nDATemplate\nDAValidationError\nDAWeb\nDAWebError\nEvent\nExpense\nFalse\nFinancialList\nHousingAuthority\nIncome\nIndividual\nIndividualName\nLandlord\nLatitudeLongitude\nMachineLearningEntry\nName\nNone\nOfficeList\nOrganization\nPeopleList\nPeriodicFinancialList\nPeriodicValue\nPerson\nRandomForestMachineLearner\nRelationshipTree\nRoleChangeTracker\nSTOP_RENDERING\nSVMMachineLearner\nSimpleTextMachineLearner\nSurvivor\nTenant\nThing\nTrue\nVCIndividual\nValue\n__class__\n__contains__\n__delattr__\n__delitem__\n__dir__\n__doc__\n__eq__\n__format__\n__ge__\n__getattribute__\n__getitem__\n__gt__\n__hash__\n__init__\n__init_subclass__\n__iter__\n__le__\n__len__\n__lt__\n__ne__\n__new__\n__reduce__\n__reduce_ex__\n__repr__\n__reversed__\n__setattr__\n__setitem__\n__sizeof__\n__str__\n__subclasshook__\n_attachment_email_address\n_attachment_include_editable\n_back_one\n_checkboxes\n_datatypes\n_email_attachments\n_files\n_internal\n_question_name\n_question_number\n_save_as\n_success\n_the_image\n_track_location\n_tracker\n_varnames\naction_argument\naction_arguments\naction_button_html\naction_menu_item\nadd_records\nadd_separators\nall_variables\nallow_cron\nalpha\nand\nas\nas_datetime\nassemble_docx\nassert\nasync\nawait\nbackground_action\nbackground_error_action\nbackground_response\nbackground_response_action\nbold\nbreak\ncaller\ncapitalize\nchain\nchat_partners_available\nclass\nclear\nclear_explanations\ncollapse_template\ncomma_and_list\ncomma_list\ncommand\ncontinue\ncopy\ncountries_list\ncountry_name\ncreate_session\ncreate_user\ncron_daily\ncron_hourly\ncron_monthly\ncron_weekly\ncurrency\ncurrency_symbol\ncurrent_datetime\ndate_difference\ndate_interval\nday_of\ndecode_name\ndef\ndefine\ndefined\ndel\ndelete_interview_sessions\ndelete_record\ndevice\ndevice_local\ndispatch\ndocx_concatenate\ndow_of\nelif\nelse\nencode_name\nexcept\nexplain\nexport_interview_variables\nfa_icon\nfinally\nfix_punctuation\nfor\nforce_ask\nforce_gather\nforget_result_of\nformat_date\nformat_datetime\nformat_time\nfrom\nfrom_b64_json\nfromkeys\nget\nget_chat_log\nget_config\nget_country\nget_default_timezone\nget_dialect\nget_emails\nget_filtered_session_variables\nget_filtered_session_variables_string\nget_info\nget_interview_metadata\nget_language\nget_language_list\nget_language_list_item\nget_locale\nget_progress\nget_question_data\nget_saved_interview_list\nget_session_variables\nget_sms_session\nget_status\nget_tuples\nget_user_info\nget_user_list\nget_user_secret\ngithub_modified_date\nglobal\ngo_back_in_session\ni\nif\nimport\nin\ninclude_docx_template\nincoming_email\nindefinite_article\nindent\ninitiate_sms_session\ninterface\ninterview_email\ninterview_list\ninterview_list_html\ninterview_menu\ninterview_url\ninterview_url_action\ninterview_url_action_as_qr\ninterview_url_as_qr\ninvalidate\nis\nis_file_like\nis_phone_or_email\nis_valid_json\niso_country\nitalic\nitem_label\nitems\nj\njson\njson_response\nk\nkey\nkeys\nl\nlabel\nlambda\nlanguage_from_browser\nlanguage_name\nlast_access_days\nlast_access_delta\nlast_access_hours\nlast_access_minutes\nlast_access_time\nload_interview_answers\nload_interview_json\nlocation_known\nlocation_returned\nlog\nlogic_explanation\nloop\nm\nmanage_privileges\nmap_of\nmark_task_as_performed\nmenu_items\nmessage\nmonth_of\nmulti_user\nn\nname_suffix\nnav\nneed\nnice_number\nnonlocal\nnot\nnoun_plural\nnoun_singular\nnoyes\nnumber_to_letter\nobjects_from_file\nocr_file\nocr_file_in_background\nor\nordinal\nordinal_number\noutput_checkbox\noverlay_pdf\npass\npath_and_mimetype\npdf_concatenate\nperiod_list\nphone_number_formatted\nphone_number_in_e164\nphone_number_is_valid\nphone_number_part\nplain\npop\npopitem\nprevent_going_back\nprocess_action\nqr_code\nquantity_noun\nquote_paragraphs\nraise\nraw\nre\nre_run_logic\nread_qr\nread_records\nreconsider\nredact\nreferring_url\nrename_interview_answers\nresponse\nretrieve_stashed_data\nreturn\nreturning_user\nrole\nrole_event\nrole_needed\nroman\nrow_index\nrow_item\nrun_action_in_session\nrun_python_module\nsafe_subdivision_type\nsafeattr\nsave_interview_answers\nsection_links\nselections\nself\nsend_email\nsend_fax\nsend_sms\nserver_capabilities\nsession_list_html\nsession_local\nsession_tags\nset_country\nset_info\nset_interview_metadata\nset_language\nset_live_help_status\nset_locale\nset_parts\nset_progress\nset_save_status\nset_session_variables\nset_status\nset_task_counter\nset_title\nset_user_info\nset_variables\nsetdefault\nshortenMe\nshowif\nshowifdef\nsingle_paragraph\nsingle_to_double_newlines\nspace\nspace_to_underscore\nspeak_text\nsplit\nstart_time\nstash_data\nstate_name\nstates_list\nstatic_image\nstore_variables_snapshot\nsubdivision_type\nsum_if_defined\ntabbed_templates_html\ntask_not_yet_performed\ntask_performed\ntel\nterminate_sms_session\nthousands\ntimes_task_performed\ntimezone_list\ntitle_case\ntoday\ntrack_location\ntry\nundefine\nunpack_dafilelist\nupdate\nupdate_terms\nurl_action\nurl_args\nurl_ask\nurl_of\nus\nuser_dict\nuser_has_privilege\nuser_info\nuser_lat_lon\nuser_local\nuser_logged_in\nuser_privileges\nvalidation_error\nvalue\nvalues\nvariables_as_json\nverb_past\nverb_present\nverbatim\nwhile\nwill_send_to_real_court\nwith\nword\nwrite_record\nx\nyear_of\nyes_no_unknown\nyesno\nyield\nzip_file\n")),(0,a.kt)("h2",{id:"further-reference"},"Further reference"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.python.org/3.10/reference/lexical_analysis.html#keywords"},"List of Python keywords")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/functions.html"},"List of Python builtins")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docassemble.org/docs/special.html#reserved"},"List of Docassemble reserved names"))))}d.isMDXComponent=!0}}]);