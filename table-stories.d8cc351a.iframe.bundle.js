"use strict";(self.webpackChunkdesign_system=self.webpackChunkdesign_system||[]).push([[5977],{"./stories/table.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BasicExample:()=>BasicExample,__namedExportsOrder:()=>__namedExportsOrder,default:()=>table_stories});var jsx_runtime=__webpack_require__("./node_modules/.pnpm/next@15.0.1_@babel+core@7.26.0_react-dom@19.0.0-rc-69d4b800-20241021_react@19.0.0-rc-69d4b800_czvog4bm5hmxkqeypv6dkprgyq/node_modules/next/dist/compiled/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/.pnpm/next@15.0.1_@babel+core@7.26.0_react-dom@19.0.0-rc-69d4b800-20241021_react@19.0.0-rc-69d4b800_czvog4bm5hmxkqeypv6dkprgyq/node_modules/next/dist/compiled/react/index.js"),Table=__webpack_require__("./node_modules/.pnpm/react-aria-components@1.4.1_react-dom@19.0.0-rc-69d4b800-20241021_react@19.0.0-rc-69d4b800-20_lzfgk4i222ma4rx6xt7oeewigi/node_modules/react-aria-components/dist/Table.mjs"),utils=__webpack_require__("./node_modules/.pnpm/react-aria-components@1.4.1_react-dom@19.0.0-rc-69d4b800-20241021_react@19.0.0-rc-69d4b800-20_lzfgk4i222ma4rx6xt7oeewigi/node_modules/react-aria-components/dist/utils.mjs"),Group=__webpack_require__("./node_modules/.pnpm/react-aria-components@1.4.1_react-dom@19.0.0-rc-69d4b800-20241021_react@19.0.0-rc-69d4b800-20_lzfgk4i222ma4rx6xt7oeewigi/node_modules/react-aria-components/dist/Group.mjs"),CollectionBuilder=__webpack_require__("./node_modules/.pnpm/@react-aria+collections@3.0.0-alpha.5_react-dom@19.0.0-rc-69d4b800-20241021_react@19.0.0-rc-6_qdq3vc3si7gwjgjzv2s5mignae/node_modules/@react-aria/collections/dist/CollectionBuilder.mjs"),Button=__webpack_require__("./node_modules/.pnpm/react-aria-components@1.4.1_react-dom@19.0.0-rc-69d4b800-20241021_react@19.0.0-rc-69d4b800-20_lzfgk4i222ma4rx6xt7oeewigi/node_modules/react-aria-components/dist/Button.mjs"),bundle_mjs=__webpack_require__("./node_modules/.pnpm/tailwind-merge@2.5.4/node_modules/tailwind-merge/dist/bundle-mjs.mjs"),components_checkbox=__webpack_require__("./src/components/checkbox.tsx"),icons=__webpack_require__("./src/components/icons.tsx"),components_utils=__webpack_require__("./src/components/utils.ts");function table_Table(props){return(0,jsx_runtime.jsx)(Table.tk,{className:"relative max-h-[280px] w-[550px] scroll-pt-[2.281rem] overflow-auto rounded-lg border",children:(0,jsx_runtime.jsx)(Table.XI,{...props,className:"border-separate border-spacing-0"})})}function Column(props){const{className,children,width}=props;return(0,jsx_runtime.jsx)(Table.VP,{...props,className:(0,components_utils.p7)(className,"cursor-default border-b text-start text-sm font-semibold [&:focus-within]:z-20 [&:hover]:z-20"),children:(0,utils.HW)(children,((renderChildren,{allowsSorting,sortDirection})=>(0,jsx_runtime.jsxs)("div",{className:"flex items-center",children:[(0,jsx_runtime.jsxs)(Group.Y,{role:"presentation",tabIndex:-1,className:(0,bundle_mjs.QP)("outline-none",components_utils.mZ,"flex h-5 flex-1 items-center gap-1 overflow-hidden px-2"),children:[(0,jsx_runtime.jsx)("span",{className:"truncate",children:renderChildren}),allowsSorting&&(0,jsx_runtime.jsx)("span",{className:"flex size-4 items-center justify-center transition "+("descending"===sortDirection?"rotate-180":""),children:sortDirection&&(0,jsx_runtime.jsx)(icons.Mt,{className:"size-4 text-muted"})})]}),!width&&(0,jsx_runtime.jsx)(Table.h9,{className:(0,bundle_mjs.QP)("outline-none",components_utils.Ms,"box-content h-5 w-[1.5px] translate-x-[8px] cursor-col-resize rounded bg-border bg-clip-content px-[8px] py-1 -outline-offset-2 resizing:w-[2px] resizing:bg-accent resizing:pl-[7px] forced-colors:bg-[ButtonBorder] forced-colors:resizing:bg-[Highlight]")})]})))})}function TableHeader(props){const{className,columns,children}=props,{selectionBehavior,selectionMode,allowsDragging:canDrag}=(0,Table.mz)();return(0,jsx_runtime.jsxs)(Table.A0,{...props,className:(0,components_utils.p7)(className,["sticky top-0 z-10 rounded-t-lg  backdrop-blur-md","after:content-['']","after:flex-1"]),children:[canDrag&&(0,jsx_runtime.jsx)(Column,{}),"toggle"===selectionBehavior&&(0,jsx_runtime.jsx)(Table.VP,{width:36,minWidth:36,className:"cursor-default border-b p-2 text-start text-sm font-semibold",children:"multiple"===selectionMode&&(0,jsx_runtime.jsx)(components_checkbox.Sc,{slot:"selection"})}),(0,jsx_runtime.jsx)(CollectionBuilder.pM,{items:columns,children})]})}function Cell(props){return(0,jsx_runtime.jsx)(Table.fh,{...props,className:(0,bundle_mjs.QP)("outline-none",components_utils.s$,"focus-visible:rounded","focus-visible:-outline-offset-2","truncate border-b p-2 group-last/row:border-b-0")})}function Row({id,columns,children,...otherProps}){const{selectionBehavior,allowsDragging:canDrag}=(0,Table.mz)();return(0,jsx_runtime.jsxs)(Table.fI,{id,...otherProps,className:(0,bundle_mjs.QP)(components_utils.s$,"focus-visible:outline-none","focus-visible:rounded","focus-visible:-outline-offset-2","group/row relative cursor-default select-none text-sm  disabled:text-muted","hover:bg-zinc-100","hover:selected:bg-zinc-100","selected:bg-accent/5"),children:[canDrag&&(0,jsx_runtime.jsx)(Cell,{children:(0,jsx_runtime.jsx)(Button.$,{slot:"drag",children:"≡"})}),"toggle"===selectionBehavior&&(0,jsx_runtime.jsx)(Cell,{children:(0,jsx_runtime.jsx)(components_checkbox.Sc,{slot:"selection"})}),(0,jsx_runtime.jsx)(CollectionBuilder.pM,{items:columns,children})]})}table_Table.__docgenInfo={description:"",methods:[],displayName:"Table"},Column.__docgenInfo={description:"",methods:[],displayName:"Column"},TableHeader.__docgenInfo={description:"",methods:[],displayName:"TableHeader"},Cell.__docgenInfo={description:"",methods:[],displayName:"Cell"},Row.__docgenInfo={description:"",methods:[],displayName:"Row"};const table_stories={component:table_Table,title:"Components/Table",parameters:{layout:"centered",docs:{description:{component:'A <a href="https://react-spectrum.adobe.com/react-aria/Table.html" target="_blank">`table`</a> displays data in rows and columns and enables a user to navigate its contents via directional navigation keys, and optionally supports row selection and sorting.'},...__webpack_require__("./.storybook/docs.ts").m}},tags:["autodocs"]},rows=[{id:1,name:"Games",date:"6/7/2020",type:"File folder"},{id:2,name:"Program Files",date:"4/7/2021",type:"File folder"},{id:3,name:"bootmgr",date:"11/20/2010",type:"System file"},{id:4,name:"log.txt",date:"1/18/2016",type:"Text Document"},{id:5,name:"Proposal.ppt",date:"6/18/2022",type:"PowerPoint file"},{id:6,name:"Taxes.pdf",date:"12/6/2023",type:"PDF Document"},{id:7,name:"Photos",date:"8/2/2021",type:"File folder"},{id:8,name:"Documents",date:"3/18/2023",type:"File folder"},{id:9,name:"Budget.xls",date:"1/6/2024",type:"Excel file"}];function BasicExample(){const[sortDescriptor,setSortDescriptor]=react.useState({column:"name",direction:"ascending"}),items=react.useMemo((()=>{const items=[...rows].sort(((a,b)=>{const column=sortDescriptor.column;return String(a[column]).localeCompare(String(b[column]))}));return"descending"===sortDescriptor.direction&&items.reverse(),items}),[sortDescriptor]);return(0,jsx_runtime.jsxs)(table_Table,{"aria-label":"Files",selectionMode:"multiple",sortDescriptor,onSortChange:setSortDescriptor,children:[(0,jsx_runtime.jsxs)(TableHeader,{children:[(0,jsx_runtime.jsx)(Column,{id:"name",isRowHeader:!0,allowsSorting:!0,children:"Name"}),(0,jsx_runtime.jsx)(Column,{id:"type",allowsSorting:!0,children:"Type"}),(0,jsx_runtime.jsx)(Column,{id:"date",allowsSorting:!0,children:"Date Modified"})]}),(0,jsx_runtime.jsx)(Table.BF,{items,children:row=>(0,jsx_runtime.jsxs)(Row,{children:[(0,jsx_runtime.jsx)(Cell,{children:row.name}),(0,jsx_runtime.jsx)(Cell,{children:row.type}),(0,jsx_runtime.jsx)(Cell,{children:row.date})]})})]})}const __namedExportsOrder=["BasicExample"];BasicExample.parameters={...BasicExample.parameters,docs:{...BasicExample.parameters?.docs,source:{originalSource:'function BasicExample() {\n  const [sortDescriptor, setSortDescriptor] = React.useState<SortDescriptor>({\n    column: "name",\n    direction: "ascending"\n  });\n  const items = React.useMemo(() => {\n    const items = [...rows].sort((a, b) => {\n      const column = sortDescriptor.column as keyof (typeof rows)[number];\n      return String(a[column]).localeCompare(String(b[column]));\n    });\n    if (sortDescriptor.direction === "descending") {\n      items.reverse();\n    }\n    return items;\n  }, [sortDescriptor]);\n  return <Table aria-label="Files" selectionMode="multiple" sortDescriptor={sortDescriptor} onSortChange={setSortDescriptor}>\n      <TableHeader>\n        <Column id="name" isRowHeader allowsSorting>\n          Name\n        </Column>\n        <Column id="type" allowsSorting>\n          Type\n        </Column>\n        <Column id="date" allowsSorting>\n          Date Modified\n        </Column>\n      </TableHeader>\n      <TableBody items={items}>\n        {row => <Row>\n            <Cell>{row.name}</Cell>\n            <Cell>{row.type}</Cell>\n            <Cell>{row.date}</Cell>\n          </Row>}\n      </TableBody>\n    </Table>;\n}',...BasicExample.parameters?.docs?.source}}}},"./src/components/checkbox.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$Q:()=>CheckboxGroup,Sc:()=>Checkbox,Yh:()=>CheckboxField,q_:()=>Checkboxes});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@15.0.1_@babel+core@7.26.0_react-dom@19.0.0-rc-69d4b800-20241021_react@19.0.0-rc-69d4b800_czvog4bm5hmxkqeypv6dkprgyq/node_modules/next/dist/compiled/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/next@15.0.1_@babel+core@7.26.0_react-dom@19.0.0-rc-69d4b800-20241021_react@19.0.0-rc-69d4b800_czvog4bm5hmxkqeypv6dkprgyq/node_modules/next/dist/compiled/react/index.js"),react_aria_components__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/.pnpm/react-aria-components@1.4.1_react-dom@19.0.0-rc-69d4b800-20241021_react@19.0.0-rc-69d4b800-20_lzfgk4i222ma4rx6xt7oeewigi/node_modules/react-aria-components/dist/Checkbox.mjs"),tailwind_merge__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/.pnpm/tailwind-merge@2.5.4/node_modules/tailwind-merge/dist/bundle-mjs.mjs"),_field__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/field.tsx"),_icons__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/icons.tsx"),_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/utils.ts");function CheckboxGroup({orientation="vertical",...props}){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_aria_components__WEBPACK_IMPORTED_MODULE_5__.$Q,{...props,"data-orientation":orientation,className:(0,_utils__WEBPACK_IMPORTED_MODULE_4__.p7)(props.className,_utils__WEBPACK_IMPORTED_MODULE_4__.e1)})}function Checkboxes({className,...props}){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{"data-ui":"box",className:(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_6__.QP)("flex flex-col group-data-[orientation=horizontal]:flex-row group-data-[orientation=horizontal]:flex-wrap","[&_label]:has-[[data-ui=description]]:font-medium",className),...props})}function CheckboxField({className,...props}){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_field__WEBPACK_IMPORTED_MODULE_2__.OK,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{...props,"data-ui":"field",className:(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_6__.QP)("group flex flex-col gap-y-1","[&_[data-ui=description]:not([class*=pe-])]:has-[label[data-position=left]]:pe-7","[&_[data-ui=description]:not([class*=ps-])]:has-[label[data-position=right]]:ps-7","[&_label]:has-[[data-ui=description]]:font-medium","[&_[data-ui=description]]:has-[label[data-disabled]]:opacity-50",className)})})}function Checkbox({labelPosition="right",children,...props}){const descriptionContext=react__WEBPACK_IMPORTED_MODULE_1__.useContext(_field__WEBPACK_IMPORTED_MODULE_2__.gN);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_aria_components__WEBPACK_IMPORTED_MODULE_5__.Sc,{...props,"aria-describedby":null==descriptionContext?void 0:descriptionContext["aria-describedby"],"data-position":labelPosition,className:(0,_utils__WEBPACK_IMPORTED_MODULE_4__.p7)(props.className,["group flex items-center gap-x-3","group-data-[orientation=horizontal]:text-nowrap","data-[position=left]:flex-row-reverse","data-[position=left]:justify-between","text-base/6 sm:text-sm/6","disabled:opacity-50 cursor-pointer disabled:cursor-auto read-only:cursor-auto"]),children:renderProps=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_6__.QP)(["flex flex-shrink-0 items-center justify-center","size-[1.125rem] rounded shadow-sm sm:size-4","border border-zinc-400/75","group-invalid:border-destructive","group-invalid:","group-selected:border","group-selected:border-accent","group-selected:bg-accent","group-selected:","group-selected:","group-selected:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]","group-indeterminate:border","group-indeterminate:border-accent","group-indeterminate:bg-accent","group-indeterminate:","group-indeterminate:","group-indeterminate:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]",_utils__WEBPACK_IMPORTED_MODULE_4__.rb]),children:renderProps.isIndeterminate?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_icons__WEBPACK_IMPORTED_MODULE_3__.QG,{className:"size-4 text-white sm:size-3.5"}):renderProps.isSelected?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_icons__WEBPACK_IMPORTED_MODULE_3__.Sr,{className:"size-4 text-white sm:size-3.5"}):null}),"function"==typeof children?children(renderProps):children]})})}CheckboxGroup.__docgenInfo={description:"",methods:[],displayName:"CheckboxGroup",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},orientation:{required:!1,tsType:{name:"union",raw:'"vertical" | "horizontal"',elements:[{name:"literal",value:'"vertical"'},{name:"literal",value:'"horizontal"'}]},description:"",defaultValue:{value:'"vertical"',computed:!1}}}},Checkboxes.__docgenInfo={description:"",methods:[],displayName:"Checkboxes"},CheckboxField.__docgenInfo={description:"",methods:[],displayName:"CheckboxField"},Checkbox.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{labelPosition:{required:!1,tsType:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:"",defaultValue:{value:'"right"',computed:!1}}}}},"./src/components/field.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A_:()=>TextField,HM:()=>LabeledGroup,JU:()=>Label,OK:()=>DescriptionProvider,VY:()=>Description,bg:()=>FieldError,fs:()=>TextArea,gN:()=>DescriptionContext,pd:()=>Input});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@15.0.1_@babel+core@7.26.0_react-dom@19.0.0-rc-69d4b800-20241021_react@19.0.0-rc-69d4b800_czvog4bm5hmxkqeypv6dkprgyq/node_modules/next/dist/compiled/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/next@15.0.1_@babel+core@7.26.0_react-dom@19.0.0-rc-69d4b800-20241021_react@19.0.0-rc-69d4b800_czvog4bm5hmxkqeypv6dkprgyq/node_modules/next/dist/compiled/react/index.js"),react_aria_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/.pnpm/react-aria-components@1.4.1_react-dom@19.0.0-rc-69d4b800-20241021_react@19.0.0-rc-69d4b800-20_lzfgk4i222ma4rx6xt7oeewigi/node_modules/react-aria-components/dist/Label.mjs"),react_aria_components__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/.pnpm/react-aria-components@1.4.1_react-dom@19.0.0-rc-69d4b800-20241021_react@19.0.0-rc-69d4b800-20_lzfgk4i222ma4rx6xt7oeewigi/node_modules/react-aria-components/dist/Group.mjs"),react_aria_components__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/.pnpm/react-aria-components@1.4.1_react-dom@19.0.0-rc-69d4b800-20241021_react@19.0.0-rc-69d4b800-20_lzfgk4i222ma4rx6xt7oeewigi/node_modules/react-aria-components/dist/Text.mjs"),react_aria_components__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/.pnpm/react-aria-components@1.4.1_react-dom@19.0.0-rc-69d4b800-20241021_react@19.0.0-rc-69d4b800-20_lzfgk4i222ma4rx6xt7oeewigi/node_modules/react-aria-components/dist/TextField.mjs"),react_aria_components__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/.pnpm/react-aria-components@1.4.1_react-dom@19.0.0-rc-69d4b800-20241021_react@19.0.0-rc-69d4b800-20_lzfgk4i222ma4rx6xt7oeewigi/node_modules/react-aria-components/dist/FieldError.mjs"),react_aria_components__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/.pnpm/react-aria-components@1.4.1_react-dom@19.0.0-rc-69d4b800-20241021_react@19.0.0-rc-69d4b800-20_lzfgk4i222ma4rx6xt7oeewigi/node_modules/react-aria-components/dist/Input.mjs"),react_aria_components__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./node_modules/.pnpm/react-aria-components@1.4.1_react-dom@19.0.0-rc-69d4b800-20241021_react@19.0.0-rc-69d4b800-20_lzfgk4i222ma4rx6xt7oeewigi/node_modules/react-aria-components/dist/TextArea.mjs"),tailwind_merge__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/.pnpm/tailwind-merge@2.5.4/node_modules/tailwind-merge/dist/bundle-mjs.mjs"),_text__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/text.tsx"),_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/utils.ts");function LabeledGroup({className,children}){const labelId=react__WEBPACK_IMPORTED_MODULE_1__.useId();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_aria_components__WEBPACK_IMPORTED_MODULE_4__.I.Provider,{value:{id:labelId,elementType:"span"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_aria_components__WEBPACK_IMPORTED_MODULE_5__.t.Provider,{value:{"aria-labelledby":labelId},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_6__.QP)(["[&>[data-ui=label]:first-of-type:not([class*=mb])]:mb-2"],className),children})})})}function Label({requiredHint,displayLevel=3,...props}){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_aria_components__WEBPACK_IMPORTED_MODULE_4__.J,{...props,"data-ui":"label",className:(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_6__.QP)("inline-block min-w-max text-pretty","group-disabled:opacity-50",_utils__WEBPACK_IMPORTED_MODULE_3__.Qo[displayLevel],requiredHint&&"after:ms-0.5 after:text-destructive after:content-['*']",props.className)})}const DescriptionContext=react__WEBPACK_IMPORTED_MODULE_1__.createContext(null);function DescriptionProvider({children}){const descriptionId=react__WEBPACK_IMPORTED_MODULE_1__.useId(),[isDescriptionRendered,setIsDescriptionRendered]=react__WEBPACK_IMPORTED_MODULE_1__.useState(!0);return react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect((()=>{document.getElementById(descriptionId)||setIsDescriptionRendered(!1)}),[descriptionId]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(DescriptionContext.Provider,{value:{"aria-describedby":isDescriptionRendered?descriptionId:void 0},children})}function Description({className,...props}){var _React_useContext;const describedby=null===(_React_useContext=react__WEBPACK_IMPORTED_MODULE_1__.useContext(DescriptionContext))||void 0===_React_useContext?void 0:_React_useContext["aria-describedby"];return describedby?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_text__WEBPACK_IMPORTED_MODULE_2__.EY,{...props,id:describedby,"data-ui":"description",className:(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_6__.QP)("block group-disabled:opacity-50",className)}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_aria_components__WEBPACK_IMPORTED_MODULE_7__.E,{...props,"data-ui":"description",slot:"description",className:(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_6__.QP)("block text-pretty text-base/6 text-muted sm:text-sm/6","group-disabled:opacity-50",className)})}function TextField(props){const{className}=props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_aria_components__WEBPACK_IMPORTED_MODULE_8__.A,{...props,"data-ui":"text-field",className:(0,_utils__WEBPACK_IMPORTED_MODULE_3__.p7)(className,_utils__WEBPACK_IMPORTED_MODULE_3__._T)})}function FieldError(props){const{className}=props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_aria_components__WEBPACK_IMPORTED_MODULE_9__.b,{...props,"data-ui":"errorMessage",className:(0,_utils__WEBPACK_IMPORTED_MODULE_3__.p7)(className,"block text-base/6 text-destructive sm:text-sm/6")})}const Input=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(((props,ref)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_aria_components__WEBPACK_IMPORTED_MODULE_10__.p,{...props,ref,className:(0,_utils__WEBPACK_IMPORTED_MODULE_3__.p7)(props.className,["w-full rounded-lg border bg-inherit shadow-sm outline-none","px-2.5 py-[calc(theme(spacing[2.5])-1px)] sm:py-[calc(theme(spacing[1.5])-1px)]","text-base/6 placeholder:text-muted sm:text-sm/6","invalid:border-destructive","disabled:opacity-50",_utils__WEBPACK_IMPORTED_MODULE_3__.Ms])})));function TextArea(props){const{className}=props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_aria_components__WEBPACK_IMPORTED_MODULE_11__.f,{...props,className:(0,_utils__WEBPACK_IMPORTED_MODULE_3__.p7)(className,["w-full rounded-lg border bg-inherit px-2.5 py-1 outline-none","text-base/6 placeholder:text-muted sm:text-sm/6 ","disabled:opacity-50","invalid:border-destructive",_utils__WEBPACK_IMPORTED_MODULE_3__.Ms])})}Input.displayName="Input",LabeledGroup.__docgenInfo={description:"",methods:[],displayName:"LabeledGroup",props:{className:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}},Label.__docgenInfo={description:"",methods:[],displayName:"Label",props:{requiredHint:{required:!1,tsType:{name:"boolean"},description:""},displayLevel:{required:!1,tsType:{name:"union",raw:"keyof typeof displayLevels",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"}]},description:"",defaultValue:{value:"3",computed:!1}}}},DescriptionProvider.__docgenInfo={description:"",methods:[],displayName:"DescriptionProvider",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}},Description.__docgenInfo={description:'Aria will auto associate <AriaText slot="description"/> with TextField/NumberField/RadioGroup/CheckboxGroup/DatePicker etc,\nbut not for Switch/Checkbox/Radio and our custom components. We use follow pattern to associate description for\nSwitch/Checkbox/Radio https://react-spectrum.adobe.com/react-aria/Switch.html#advanced-customization',methods:[],displayName:"Description"},TextField.__docgenInfo={description:"",methods:[],displayName:"TextField"},FieldError.__docgenInfo={description:"",methods:[],displayName:"FieldError"},Input.__docgenInfo={description:"",methods:[],displayName:"Input"},TextArea.__docgenInfo={description:"",methods:[],displayName:"TextArea"}},"./src/components/link.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>Link});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@15.0.1_@babel+core@7.26.0_react-dom@19.0.0-rc-69d4b800-20241021_react@19.0.0-rc-69d4b800_czvog4bm5hmxkqeypv6dkprgyq/node_modules/next/dist/compiled/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/next@15.0.1_@babel+core@7.26.0_react-dom@19.0.0-rc-69d4b800-20241021_react@19.0.0-rc-69d4b800_czvog4bm5hmxkqeypv6dkprgyq/node_modules/next/dist/compiled/react/index.js"),react_aria_components__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/.pnpm/react-aria-components@1.4.1_react-dom@19.0.0-rc-69d4b800-20241021_react@19.0.0-rc-69d4b800-20_lzfgk4i222ma4rx6xt7oeewigi/node_modules/react-aria-components/dist/Link.mjs"),tailwind_merge__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/.pnpm/tailwind-merge@2.5.4/node_modules/tailwind-merge/dist/bundle-mjs.mjs"),_slot__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/slot.tsx"),_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/utils.ts");const linkStyle=["relative inline-flex cursor-pointer items-center gap-1 rounded-lg outline-none hover:underline","text-base/6 sm:text-sm/6","disabled:no-underline disabled:opacity-50 disabled:cursor-default","[&.border]:hover:no-underline"].join(" "),Link=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(((props,ref)=>{const{asChild:isAsChild,...rest}=props;return isAsChild?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_slot__WEBPACK_IMPORTED_MODULE_2__.D,{className:(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_4__.QP)(linkStyle),children:props.children}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_aria_components__WEBPACK_IMPORTED_MODULE_5__.N,{...rest,ref,className:(0,_utils__WEBPACK_IMPORTED_MODULE_3__.p7)(props.className,[linkStyle,_utils__WEBPACK_IMPORTED_MODULE_3__.s$])})}));Link.displayName="Link",Link.__docgenInfo={description:"",methods:[],displayName:"Link"}},"./src/components/text.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{EY:()=>Text,OH:()=>Strong,Oc:()=>Small,Yq:()=>TextLink});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@15.0.1_@babel+core@7.26.0_react-dom@19.0.0-rc-69d4b800-20241021_react@19.0.0-rc-69d4b800_czvog4bm5hmxkqeypv6dkprgyq/node_modules/next/dist/compiled/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/next@15.0.1_@babel+core@7.26.0_react-dom@19.0.0-rc-69d4b800-20241021_react@19.0.0-rc-69d4b800_czvog4bm5hmxkqeypv6dkprgyq/node_modules/next/dist/compiled/react/index.js"),tailwind_merge__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/.pnpm/tailwind-merge@2.5.4/node_modules/tailwind-merge/dist/bundle-mjs.mjs"),_link__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/link.tsx"),_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/utils.ts");function Text({className,elementType,children,...props}){return react__WEBPACK_IMPORTED_MODULE_1__.createElement(null!=elementType?elementType:"p",{...props,className:(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_4__.QP)("text-pretty text-base/6 text-muted sm:text-sm/6",className)},children)}function Strong({className,...props}){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Text,{...props,elementType:"strong",className:(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_4__.QP)("font-medium text-foreground",className)})}function Small({className,...props}){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Text,{...props,elementType:"small",className:(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_4__.QP)("text-sm sm:text-xs",className)})}function TextLink(props){const{className}=props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_link__WEBPACK_IMPORTED_MODULE_2__.N,{...props,className:(0,_utils__WEBPACK_IMPORTED_MODULE_3__.p7)(className,"underline underline-offset-4")})}Text.__docgenInfo={description:"",methods:[],displayName:"Text"},Strong.__docgenInfo={description:"",methods:[],displayName:"Strong"},Small.__docgenInfo={description:"",methods:[],displayName:"Small"},TextLink.__docgenInfo={description:"",methods:[],displayName:"TextLink"}}}]);