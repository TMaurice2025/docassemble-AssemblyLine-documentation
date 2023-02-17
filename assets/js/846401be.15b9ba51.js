"use strict";(self.webpackChunkdocassemble_assembly_line_documentation=self.webpackChunkdocassemble_assembly_line_documentation||[]).push([[5464],{4137:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var r=i.createContext({}),d=function(e){var t=i.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return i.createElement(r.Provider,{value:t},e.children)},f="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},_=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,r=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=d(n),_=o,u=f["".concat(r,".").concat(_)]||f[_]||c[_]||a;return n?i.createElement(u,l(l({ref:t},p),{},{components:n})):i.createElement(u,l({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=_;var s={};for(var r in t)hasOwnProperty.call(t,r)&&(s[r]=t[r]);s.originalType=e,s[f]="string"==typeof e?e:o,l[1]=s;for(var d=2;d<a;d++)l[d]=n[d];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}_.displayName="MDXCreateElement"},9185:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>f,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var i=n(7462),o=(n(7294),n(4137));const a={sidebar_label:"pdf_wrangling",title:"formfyxer.pdf_wrangling"},l=void 0,s={unversionedId:"reference/formfyxer/pdf_wrangling",id:"reference/formfyxer/pdf_wrangling",title:"formfyxer.pdf_wrangling",description:"FormField Objects",source:"@site/docs/reference/formfyxer/pdf_wrangling.md",sourceDirName:"reference/formfyxer",slug:"/reference/formfyxer/pdf_wrangling",permalink:"/docassemble-AssemblyLine-documentation/docs/reference/formfyxer/pdf_wrangling",draft:!1,editUrl:"https://github.com/SuffolkLITLab/docassemble-AssemblyLine-documentation/edit/main/docs/reference/formfyxer/pdf_wrangling.md",tags:[],version:"current",frontMatter:{sidebar_label:"pdf_wrangling",title:"formfyxer.pdf_wrangling"},sidebar:"someSidebar",previous:{title:"lit_explorer",permalink:"/docassemble-AssemblyLine-documentation/docs/reference/formfyxer/lit_explorer"},next:{title:"al_courts",permalink:"/docassemble-AssemblyLine-documentation/docs/reference/al_courts"}},r={},d=[{value:"FormField Objects",id:"formfield-objects",level:2},{value:"__init__",id:"__init__",level:4},{value:"set_fields",id:"set_fields",level:4},{value:"rename_pdf_fields",id:"rename_pdf_fields",level:4},{value:"unlock_pdf_in_place",id:"unlock_pdf_in_place",level:4},{value:"get_existing_pdf_fields",id:"get_existing_pdf_fields",level:4},{value:"swap_pdf_page",id:"swap_pdf_page",level:4},{value:"copy_pdf_fields",id:"copy_pdf_fields",level:4},{value:"get_textboxes_in_pdf",id:"get_textboxes_in_pdf",level:4},{value:"get_bracket_chars_in_pdf",id:"get_bracket_chars_in_pdf",level:4},{value:"intersect_bbox",id:"intersect_bbox",level:4},{value:"intersect_bboxs",id:"intersect_bboxs",level:4},{value:"contain_boxes",id:"contain_boxes",level:4},{value:"get_dist_sq",id:"get_dist_sq",level:4},{value:"get_dist",id:"get_dist",level:4},{value:"get_connected_edges",id:"get_connected_edges",level:4},{value:"bbox_distance",id:"bbox_distance",level:4},{value:"get_possible_checkboxes",id:"get_possible_checkboxes",level:4},{value:"get_possible_radios",id:"get_possible_radios",level:4},{value:"get_possible_text_fields",id:"get_possible_text_fields",level:4},{value:"auto_add_fields",id:"auto_add_fields",level:4}],p={toc:d};function f(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"formfield-objects"},"FormField Objects"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class FormField()\n")),(0,o.kt)("p",null,"A data holding class, used to easily specify how a PDF form field should be created."),(0,o.kt)("h4",{id:"__init__"},"_","_","init","_","_"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'def __init__(field_name: str,\n             type_name: Union[FieldType, str],\n             x: int,\n             y: int,\n             font_size: Optional[int] = None,\n             tooltip: str = "",\n             configs: Optional[Dict[str, Any]] = None)\n')),(0,o.kt)("p",null,"Constructor"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"x")," - the x position of the lower left corner of the field. Should be in X,Y coordinates,\nwhere (0, 0) is the lower left of the page, x goes to the right, and units are in\npoints (1/72th of an inch)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"y")," - the y position of the lower left corner of the field. Should be in X,Y coordinates,\nwhere (0, 0) is the lower left of the page, y goes up, and units are in points\n(1/72th of an inch)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"config")," - a dictionary containing any keyword argument to the reportlab field functions,\nwhich will vary depending on what type of field this is. See section 4.7 of the\n",(0,o.kt)("a",{parentName:"li",href:"https://www.reportlab.com/docs/reportlab-userguide.pdf"},"reportlab User Guide")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"field_name")," - the name of the field, exposed to via most APIs. Not the tooltip, but ",(0,o.kt)("inlineCode",{parentName:"li"},"users1_name__0"))),(0,o.kt)("h4",{id:"set_fields"},"set","_","fields"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def set_fields(in_file: Union[str, Path, BinaryIO],\n               out_file: Union[str, Path, BinaryIO],\n               fields_per_page: Iterable[Iterable[FormField]],\n               *,\n               overwrite=False)\n")),(0,o.kt)("p",null,"Adds fields per page to the in_file PDF, writing the new PDF to out_file."),(0,o.kt)("p",null,"Example usage:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"set_fields(&#x27;no_fields.pdf&#x27;, &#x27;four_fields_on_second_page.pdf&#x27;,\n  [\n    [],  # nothing on the first page\n    [ # Second page\n      FormField(&#x27;new_field&#x27;, &#x27;text&#x27;, 110, 105, configs={&#x27;width&#x27;: 200, &#x27;height&#x27;: 30}),\n      # Choice needs value to be one of the possible options, and options to be a list of strings or tuples\n      FormField(&#x27;new_choices&#x27;, &#x27;choice&#x27;, 110, 400, configs={&#x27;value&#x27;: &#x27;Option 1&#x27;, &#x27;options&#x27;: [&#x27;Option 1&#x27;, &#x27;Option 2&#x27;]}),\n      # Radios need to have the same name, with different values\n      FormField(&#x27;new_radio1&#x27;, &#x27;radio&#x27;, 110, 600, configs={&#x27;value&#x27;: &#x27;option a&#x27;}),\n      FormField(&#x27;new_radio1&#x27;, &#x27;radio&#x27;, 110, 500, configs={&#x27;value&#x27;: &#x27;option b&#x27;})\n    ]\n  ]\n)\n")),(0,o.kt)("h4",{id:"rename_pdf_fields"},"rename","_","pdf","_","fields"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def rename_pdf_fields(in_file: Union[str, Path, BinaryIO],\n                      out_file: Union[str, Path, BinaryIO],\n                      mapping: Mapping[str, str]) -> None\n")),(0,o.kt)("p",null,"Given a dictionary that maps old to new field names, rename the AcroForm\nfield with a matching key to the specified value"),(0,o.kt)("h4",{id:"unlock_pdf_in_place"},"unlock","_","pdf","_","in","_","place"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def unlock_pdf_in_place(in_file: Union[str, Path, BinaryIO]) -> None\n")),(0,o.kt)("p",null,"Try using pikePDF to unlock the PDF it it is locked. This won","'","t work if it has a non-zero length password."),(0,o.kt)("h4",{id:"get_existing_pdf_fields"},"get","_","existing","_","pdf","_","fields"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def get_existing_pdf_fields(\n        in_file: Union[str, Path, BinaryIO, Pdf]) -> List[List[FormField]]\n")),(0,o.kt)("p",null,"Use PikePDF to get fields from the PDF"),(0,o.kt)("h4",{id:"swap_pdf_page"},"swap","_","pdf","_","page"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def swap_pdf_page(*,\n                  source_pdf: Union[str, Path, Pdf],\n                  destination_pdf: Union[str, Path, Pdf],\n                  source_offset: int = 0,\n                  destination_offset: int = 0,\n                  append_fields: bool = False) -> Pdf\n")),(0,o.kt)("p",null,"(DEPRECATED: use copy_pdf_fields) Copies the AcroForm fields from one PDF to another blank PDF form. Optionally, choose a starting page for both\nthe source and destination PDFs. By default, it will remove any existing annotations (which include form fields)\nin the destination PDF. If you wish to append annotations instead, specify ",(0,o.kt)("inlineCode",{parentName:"p"},"append_fields = True")),(0,o.kt)("h4",{id:"copy_pdf_fields"},"copy","_","pdf","_","fields"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def copy_pdf_fields(*,\n                    source_pdf: Union[str, Path, Pdf],\n                    destination_pdf: Union[str, Path, Pdf],\n                    source_offset: int = 0,\n                    destination_offset: int = 0,\n                    append_fields: bool = False) -> Pdf\n")),(0,o.kt)("p",null,"Copies the AcroForm fields from one PDF to another blank PDF form. Optionally, choose a starting page for both\nthe source and destination PDFs. By default, it will remove any existing annotations (which include form fields)\nin the destination PDF. If you wish to append annotations instead, specify ",(0,o.kt)("inlineCode",{parentName:"p"},"append_fields = True")),(0,o.kt)("h4",{id:"get_textboxes_in_pdf"},"get","_","textboxes","_","in","_","pdf"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def get_textboxes_in_pdf(in_file: Union[str, Path, BinaryIO],\n                         line_margin=0.02,\n                         char_margin=2.0) -> List[List[Textbox]]\n")),(0,o.kt)("p",null,"Gets all of the text boxes found by pdfminer in a PDF, as well as their bounding boxes"),(0,o.kt)("h4",{id:"get_bracket_chars_in_pdf"},"get","_","bracket","_","chars","_","in","_","pdf"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def get_bracket_chars_in_pdf(in_file: Union[str, Path, BinaryIO],\n                             line_margin=0.02,\n                             char_margin=0.0) -> List\n")),(0,o.kt)("p",null,"Gets all of the bracket characters (","'","['"," and ","']","'",") found by pdfminer in a PDF, as well as their bounding boxes\nTODO: Will eventually be used to find ","[ ]"," as checkboxes, but right now we can","'","t tell the difference between ","[ ]"," and ","[i]",".\nThis simply gets all of the brackets, and the characters of ","[hi]"," in a PDF and ","[ ]"," are the exact same distance apart.\nCurrently going with just ",'"',"[hi]",'"'," doesn","'","t happen, let","'","s hope that assumption holds."),(0,o.kt)("h4",{id:"intersect_bbox"},"intersect","_","bbox"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def intersect_bbox(bbox_a, bbox_b, vert_dilation=2, horiz_dilation=2) -> bool\n")),(0,o.kt)("p",null,"bboxes are ","[left edge, bottom edge, horizontal length, vertical length]"),(0,o.kt)("h4",{id:"intersect_bboxs"},"intersect","_","bboxs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def intersect_bboxs(bbox_a,\n                    bboxes,\n                    vert_dilation=2,\n                    horiz_dilation=2) -> Iterable[bool]\n")),(0,o.kt)("p",null,"Returns an iterable of booleans, one of each of the input bboxes, true if it collides with bbox_a"),(0,o.kt)("h4",{id:"contain_boxes"},"contain","_","boxes"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def contain_boxes(bbox_a: BoundingBoxF, bbox_b: BoundingBoxF) -> BoundingBoxF\n")),(0,o.kt)("p",null,"Given two bounding boxes, return a single bounding box that contains both of them."),(0,o.kt)("h4",{id:"get_dist_sq"},"get","_","dist","_","sq"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def get_dist_sq(point_a: XYPair, point_b: XYPair) -> float\n")),(0,o.kt)("p",null,"returns the distance squared between two points. Faster than the true euclidean dist"),(0,o.kt)("h4",{id:"get_dist"},"get","_","dist"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def get_dist(point_a: XYPair, point_b: XYPair) -> float\n")),(0,o.kt)("p",null,"euclidean (L^2 norm) distance between two points"),(0,o.kt)("h4",{id:"get_connected_edges"},"get","_","connected","_","edges"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def get_connected_edges(point: XYPair, point_list: Sequence)\n")),(0,o.kt)("p",null,"point list is always ordered clockwise from the bottom left,\ni.e. bottom left, top left, top right, bottom right"),(0,o.kt)("h4",{id:"bbox_distance"},"bbox","_","distance"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def bbox_distance(\n    bbox_a: BoundingBoxF, bbox_b: BoundingBoxF\n) -> Tuple[float, Tuple[XYPair, XYPair], Tuple[XYPair, XYPair]]\n")),(0,o.kt)("p",null,"Gets our specific ",'"',"distance measure",'"'," between two different bounding boxes.\nThis distance is roughly the sum of the horizontal and vertical difference in alignment of\nthe closest shared field-bounding box edge. We are trying to find which, given a list of text boxes\naround a field, is the most likely to be the actual text label for the PDF field."),(0,o.kt)("p",null,"bboxes are 4 floats, x, y, width and height"),(0,o.kt)("h4",{id:"get_possible_checkboxes"},"get","_","possible","_","checkboxes"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def get_possible_checkboxes(img: Union[str, cv2.Mat],\n                            find_small=False) -> Union[np.ndarray, List]\n")),(0,o.kt)("p",null,"Uses boxdetect library to determine if there are checkboxes on an image of a PDF page.\nAssumes the checkbox is square."),(0,o.kt)("p",null,"find_small: if true, finds smaller checkboxes. Sometimes will ",'"',"find",'"'," a checkbox in letters,\nlike O and D, if the font is too small"),(0,o.kt)("h4",{id:"get_possible_radios"},"get","_","possible","_","radios"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def get_possible_radios(img: Union[str, BinaryIO, cv2.Mat])\n")),(0,o.kt)("p",null,"Even though it","'","s called ",'"',"radios",'"',", it just gets things shaped like circles, not\ndoing any semantic analysis yet."),(0,o.kt)("h4",{id:"get_possible_text_fields"},"get","_","possible","_","text","_","fields"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def get_possible_text_fields(\n        img: Union[str, BinaryIO, cv2.Mat],\n        text_lines: List[Textbox],\n        default_line_height: int = 44) -> List[Tuple[BoundingBox, int]]\n")),(0,o.kt)("p",null,"Uses openCV to attempt to find places where a PDF could expect an input text field."),(0,o.kt)("p",null,"Caveats so far: only considers straight, normal horizonal lines that don","'","t touch any vertical lines as fields\nWon","'","t find field inputs as boxes"),(0,o.kt)("p",null,"default_line_height: the default height (16 pt), in pixels (at 200 dpi), which is 45"),(0,o.kt)("h4",{id:"auto_add_fields"},"auto","_","add","_","fields"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def auto_add_fields(in_pdf_file: Union[str, Path], out_pdf_file: Union[str,\n                                                                       Path])\n")),(0,o.kt)("p",null,"Uses ",(0,o.kt)("inlineCode",{parentName:"p"},"get_possible_fields")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"set_fields")," to automatically add new fields\nto an input PDF."))}f.isMDXComponent=!0}}]);