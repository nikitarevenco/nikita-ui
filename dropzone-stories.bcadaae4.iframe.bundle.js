"use strict";(self.webpackChunkdesign_system=self.webpackChunkdesign_system||[]).push([[6454],{"./stories/dropzone.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BasicExample:()=>BasicExample,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@15.0.1_@babel+core@7.26.0_react-dom@19.0.0-rc-69d4b800-20241021_react@19.0.0-rc-69d4b800_czvog4bm5hmxkqeypv6dkprgyq/node_modules/next/dist/compiled/react/jsx-runtime.js"),_barrel_optimize_names_Image_lucide_react__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/.pnpm/lucide-react@0.453.0_react@19.0.0-rc-69d4b800-20241021/node_modules/lucide-react/dist/esm/icons/image.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/next@15.0.1_@babel+core@7.26.0_react-dom@19.0.0-rc-69d4b800-20241021_react@19.0.0-rc-69d4b800_czvog4bm5hmxkqeypv6dkprgyq/node_modules/next/dist/compiled/react/index.js"),react_aria_components__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/.pnpm/@react-aria+dnd@3.7.4_react-dom@19.0.0-rc-69d4b800-20241021_react@19.0.0-rc-69d4b800-20241021_fvmvclx4pr5y3lkhmzxvlc7m7i/node_modules/@react-aria/dnd/dist/utils.mjs"),react_aria_components__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/.pnpm/react-aria-components@1.4.1_react-dom@19.0.0-rc-69d4b800-20241021_react@19.0.0-rc-69d4b800-20_lzfgk4i222ma4rx6xt7oeewigi/node_modules/react-aria-components/dist/FileTrigger.mjs"),_components_accessible_icon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/accessible-icon.tsx"),_components_button__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/button.tsx"),_components_dropzone__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/dropzone.tsx"),_components_text__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/text.tsx"),_storybook_docs__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./.storybook/docs.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Dropzone",component:_components_dropzone__WEBPACK_IMPORTED_MODULE_4__.w,parameters:{layout:"centered",docs:{description:{component:'A <a href="https://react-spectrum.adobe.com/react-aria/DropZone.html#dropzone" target="_blank">`drop zone`</a> is an area into which one or multiple objects can be dragged and dropped.'},..._storybook_docs__WEBPACK_IMPORTED_MODULE_6__.m,controls:{exclude:RegExp(".*","gv")}}},tags:["autodocs"]};function BasicExample(){const[droppedImage,setDroppedImage]=react__WEBPACK_IMPORTED_MODULE_1__.useState();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_dropzone__WEBPACK_IMPORTED_MODULE_4__.w,{getDropOperation:types=>types.has("image/jpeg")||types.has("image/png")?"copy":"cancel",onDrop:async e=>{const item=e.items.filter(react_aria_components__WEBPACK_IMPORTED_MODULE_7__.nH).find((item=>"image/jpeg"===item.type||"image/png"===item.type));item&&setDroppedImage(URL.createObjectURL(await item.getFile()))},children:[droppedImage?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img",{alt:"",src:droppedImage,className:"aspect-square size-full object-contain"}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"flex flex-1 flex-col gap-2 py-6",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"flex flex-1 justify-center",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_accessible_icon__WEBPACK_IMPORTED_MODULE_2__.S,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Image_lucide_react__WEBPACK_IMPORTED_MODULE_8__.A,{})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"flex flex-1",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_aria_components__WEBPACK_IMPORTED_MODULE_9__.F,{acceptedFileTypes:["image/png","image/jpeg"],allowsMultiple:!1,onSelect:async e=>{if(e){const item=[...e].at(0);item&&setDroppedImage(URL.createObjectURL(item))}},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_button__WEBPACK_IMPORTED_MODULE_3__.$n,{variant:"unstyle",className:"text-nowrap text-base/6 font-medium text-accent sm:text-sm/6",children:"Upload a file"})})," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_text__WEBPACK_IMPORTED_MODULE_5__.EY,{children:"or drag and drop"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"flex flex-1 justify-center",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_text__WEBPACK_IMPORTED_MODULE_5__.EY,{children:"PNG, JPG, GIF up to 10MB"})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input",{type:"hidden",name:"image",value:droppedImage})]})}const __namedExportsOrder=["BasicExample"];BasicExample.parameters={...BasicExample.parameters,docs:{...BasicExample.parameters?.docs,source:{originalSource:'function BasicExample() {\n  const [droppedImage, setDroppedImage] = React.useState<string | undefined>();\n  return <DropZone getDropOperation={types => types.has("image/jpeg") || types.has("image/png") ? "copy" : "cancel"} onDrop={async e => {\n    const item = e.items.filter(isFileDropItem).find(item => item.type === "image/jpeg" || item.type === "image/png");\n    if (item) {\n      setDroppedImage(URL.createObjectURL(await item.getFile()));\n    }\n  }}>\n      {droppedImage ? <img alt="" src={droppedImage} className="aspect-square size-full object-contain" /> : <div className="flex flex-1 flex-col gap-2 py-6">\n          <div className="flex flex-1 justify-center">\n            <AccessibleIcon>\n              <Image />\n            </AccessibleIcon>\n          </div>\n          <div className="flex flex-1">\n            <FileTrigger acceptedFileTypes={["image/png", "image/jpeg"]} allowsMultiple={false} onSelect={async e => {\n          if (e) {\n            const files = [...e];\n            const item = files.at(0);\n            if (item) {\n              setDroppedImage(URL.createObjectURL(item));\n            }\n          }\n        }}>\n              <Button variant="unstyle" className="text-nowrap text-base/6 font-medium text-accent sm:text-sm/6">\n                Upload a file\n              </Button>\n            </FileTrigger>\n            &nbsp;\n            <Text>or drag and drop</Text>\n          </div>\n          <div className="flex flex-1 justify-center">\n            <Text>PNG, JPG, GIF up to 10MB</Text>\n          </div>\n        </div>}\n\n      <input type="hidden" name="image" value={droppedImage} />\n    </DropZone>;\n}',...BasicExample.parameters?.docs?.source}}}},"./src/components/button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$n:()=>Button,e2:()=>ButtonGroup,ff:()=>ToggleButton});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@15.0.1_@babel+core@7.26.0_react-dom@19.0.0-rc-69d4b800-20241021_react@19.0.0-rc-69d4b800_czvog4bm5hmxkqeypv6dkprgyq/node_modules/next/dist/compiled/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/next@15.0.1_@babel+core@7.26.0_react-dom@19.0.0-rc-69d4b800-20241021_react@19.0.0-rc-69d4b800_czvog4bm5hmxkqeypv6dkprgyq/node_modules/next/dist/compiled/react/index.js"),react_aria_components__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/.pnpm/react-aria-components@1.4.1_react-dom@19.0.0-rc-69d4b800-20241021_react@19.0.0-rc-69d4b800-20_lzfgk4i222ma4rx6xt7oeewigi/node_modules/react-aria-components/dist/Button.mjs"),react_aria_components__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/.pnpm/react-aria-components@1.4.1_react-dom@19.0.0-rc-69d4b800-20241021_react@19.0.0-rc-69d4b800-20_lzfgk4i222ma4rx6xt7oeewigi/node_modules/react-aria-components/dist/ToggleButton.mjs"),tailwind_merge__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/.pnpm/tailwind-merge@2.5.4/node_modules/tailwind-merge/dist/bundle-mjs.mjs"),_icons__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/icons.tsx"),_slot__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/slot.tsx"),_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/utils.ts");const buttonVariants={base:["group relative inline-flex gap-x-2 justify-center items-center","font-semibold text-base/6 sm:text-sm/6 whitespace-nowrap outline-none rounded-lg"],solid:["border border-[var(--btn-bg)]","bg-[var(--btn-bg)] hover:bg-[var(--btn-bg-hover)] pressed:bg-[var(--btn-bg-hover)]","shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]","text-white"],outline:["border border-border","hover:bg-highlighted pressed:bg-highlighted","shadow-sm","text-[var(--btn-color)]"],plain:["[--border-with:0px]","hover:bg-zinc-100","text-[var(--btn-color)]"]},buttonSizes={sm:{button:["h-8 sm:h-7 px-2 text-sm/6 sm:text-xs/6 rounded-md","[&_svg:not([class*=size-])]:size-3"],iconOnly:["size-8 sm:size-7 rounded-md","[&_svg:not([class*=size-])]:size-5","sm:[&_svg:not([class*=size-])]:size-4"]},md:{button:["px-3 py-[calc(theme(spacing[2.5])-var(--border-with,1px))]","sm:py-[calc(theme(spacing[1.5])-var(--border-with,1px))]","[&_svg:not([class*=size-])]:size-5","sm:[&_svg:not([class*=size-])]:size-4"],iconOnly:["p-[calc(theme(spacing[2.5])-var(--border-with,1px))]","sm:p-[calc(theme(spacing[1.5])-var(--border-with,1px))]","[&_svg:not([class*=size-])]:size-5","[&_svg]:m-0.5","sm:[&_svg:not([class*=size-])]:size-4","sm:[&_svg]:m-1"]},lg:{button:["px-4 py-[calc(theme(spacing[2.5])-var(--border-with,1px))]","[&_svg:not([class*=size-])]:size-5"],iconOnly:["p-[calc(theme(spacing[2.5])-var(--border-with,1px))]","[&_svg:not([class*=size-])]:size-5","[&_svg]:m-0.5"]}};function buttonStyle({size,color,isIconOnly,variant="solid"}){if("unstyle"===variant)return"relative outline-none rounded-lg";const buttonSize=null!=size?size:"md",buttonType=isIconOnly?"iconOnly":"button";return[buttonVariants.base,buttonVariants[variant],"solid"===variant?[{accent:["[--btn-bg:theme(colors.accent)]","[--btn-bg-hover:theme(colors.accent/90%)]"],destructive:["[--btn-bg:theme(colors.destructive)]","[--btn-bg-hover:theme(colors.destructive/90%)]"],success:["[--btn-bg:theme(colors.success)]","[--btn-bg-hover:theme(colors.success/90%)]"]}[null!=color?color:"accent"]]:[{foreground:"[--btn-color:theme(colors.foreground)]",accent:"[--btn-color:theme(colors.accent)]",destructive:"[--btn-color:theme(colors.destructive)]",success:"[--btn-color:theme(colors.success)]"}[null!=color?color:"foreground"]],buttonSizes[buttonSize][buttonType]]}const Button=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(((props,ref)=>{const{asChild:isAsChild,children,isCustomPending,pendingLabel,size,color,variant="solid",isIconOnly,...buttonProps}=props;return isAsChild?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_slot__WEBPACK_IMPORTED_MODULE_3__.D,{className:(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_5__.QP)(buttonStyle(props)),children}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_aria_components__WEBPACK_IMPORTED_MODULE_6__.$,{...buttonProps,ref,"data-variant":variant,className:(0,_utils__WEBPACK_IMPORTED_MODULE_4__.p7)(props.className,[buttonStyle({size,color,isIconOnly,variant}),_utils__WEBPACK_IMPORTED_MODULE_4__.s$,"disabled:opacity-50","data-[pending]:opacity-75",!isCustomPending&&"data-[pending]:text-transparent"]),children:renderProps=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[renderProps.isPending&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_icons__WEBPACK_IMPORTED_MODULE_2__.Nl,{"aria-label":pendingLabel,className:(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_5__.QP)("absolute","text-foreground","group-data-[variant=solid]:text-border",isCustomPending?"group-data-[pending]:sr-only":"group-data-[pending]:flex")}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"contents",...renderProps.isPending&&{"aria-hidden":!0},children:"function"==typeof children?children(renderProps):children}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"absolute left-1/2 top-1/2 size-[max(100%,2.75rem)] -translate-x-1/2 -translate-y-1/2 [@media(pointer:fine)]:hidden","aria-hidden":"true"})]})})}));function ToggleButton(props){const{className}=props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_aria_components__WEBPACK_IMPORTED_MODULE_7__.f,{...props,className:(0,_utils__WEBPACK_IMPORTED_MODULE_4__.p7)(className,[buttonStyle(props),_utils__WEBPACK_IMPORTED_MODULE_4__.s$])})}function ButtonGroup({className,blend,orientation="horizontal",...props}){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{...props,"data-ui":"button-group",className:(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_5__.QP)("group flex w-max items-center","horizontal"===orientation?["[&>button:first-of-type]:rounded-e-none","[&>button:last-of-type]:rounded-s-none","[&>button:not(:last-of-type)]:border-e-0",blend&&"shadow-sm [&>button:not(:first-of-type)]:border-s-0 [&>button]:shadow-none"]:["flex-col","[&>button:first-of-type]:rounded-b-none","[&>button:last-of-type]:rounded-t-none","[&>button:not(:last-of-type)]:border-b-0",blend&&"shadow-sm [&>button:not(:first-of-type)]:border-t-0 [&>button]:shadow-none"],"[&>button:not(:first-of-type):not(:last-of-type)]:rounded-none","","","[&>button[data-variant=solid]:not(:first-of-type)]:border-s-black/15",className)})}Button.displayName="Button",Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{color:{required:!1,tsType:{name:"union",raw:'"accent" | "success" | "destructive"',elements:[{name:"literal",value:'"accent"'},{name:"literal",value:'"success"'},{name:"literal",value:'"destructive"'}]},description:""},size:{required:!1,tsType:{name:"union",raw:'"sm" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"lg"'}]},description:""},isCustomPending:{required:!1,tsType:{name:"boolean"},description:""},isIconOnly:{required:!1,tsType:{name:"boolean"},description:""},pendingLabel:{required:!1,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"solid" | "outline" | "plain" | "unstyle"',elements:[{name:"literal",value:'"solid"'},{name:"literal",value:'"outline"'},{name:"literal",value:'"plain"'},{name:"literal",value:'"unstyle"'}]},description:""}}},ToggleButton.__docgenInfo={description:"",methods:[],displayName:"ToggleButton",props:{color:{required:!1,tsType:{name:"union",raw:'"accent" | "success" | "destructive"',elements:[{name:"literal",value:'"accent"'},{name:"literal",value:'"success"'},{name:"literal",value:'"destructive"'}]},description:""},size:{required:!1,tsType:{name:"union",raw:'"sm" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"lg"'}]},description:""},isCustomPending:{required:!1,tsType:{name:"boolean"},description:""},isIconOnly:{required:!1,tsType:{name:"boolean"},description:""},pendingLabel:{required:!1,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"solid" | "outline" | "plain" | "unstyle"',elements:[{name:"literal",value:'"solid"'},{name:"literal",value:'"outline"'},{name:"literal",value:'"plain"'},{name:"literal",value:'"unstyle"'}]},description:""}}},ButtonGroup.__docgenInfo={description:"",methods:[],displayName:"ButtonGroup",props:{blend:{required:!1,tsType:{name:"boolean"},description:""},orientation:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:"",defaultValue:{value:'"horizontal"',computed:!1}}}}},"./src/components/dropzone.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{w:()=>DropZone});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@15.0.1_@babel+core@7.26.0_react-dom@19.0.0-rc-69d4b800-20241021_react@19.0.0-rc-69d4b800_czvog4bm5hmxkqeypv6dkprgyq/node_modules/next/dist/compiled/react/jsx-runtime.js"),react_aria_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/react-aria-components@1.4.1_react-dom@19.0.0-rc-69d4b800-20241021_react@19.0.0-rc-69d4b800-20_lzfgk4i222ma4rx6xt7oeewigi/node_modules/react-aria-components/dist/DropZone.mjs"),_utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/utils.ts");function DropZone(props){const{className}=props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_aria_components__WEBPACK_IMPORTED_MODULE_2__.w,{...props,className:(0,_utils__WEBPACK_IMPORTED_MODULE_1__.p7)(className,["sm:min-w-96","flex flex-shrink-0 flex-col items-center justify-center rounded-xl","border border-dashed p-2",_utils__WEBPACK_IMPORTED_MODULE_1__.s$,"drop-target:border-solid","drop-target:bg-accent/20 drop-target:",_utils__WEBPACK_IMPORTED_MODULE_1__._P])})}DropZone.__docgenInfo={description:"",methods:[],displayName:"DropZone"}},"./src/components/link.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>Link});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@15.0.1_@babel+core@7.26.0_react-dom@19.0.0-rc-69d4b800-20241021_react@19.0.0-rc-69d4b800_czvog4bm5hmxkqeypv6dkprgyq/node_modules/next/dist/compiled/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/next@15.0.1_@babel+core@7.26.0_react-dom@19.0.0-rc-69d4b800-20241021_react@19.0.0-rc-69d4b800_czvog4bm5hmxkqeypv6dkprgyq/node_modules/next/dist/compiled/react/index.js"),react_aria_components__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/.pnpm/react-aria-components@1.4.1_react-dom@19.0.0-rc-69d4b800-20241021_react@19.0.0-rc-69d4b800-20_lzfgk4i222ma4rx6xt7oeewigi/node_modules/react-aria-components/dist/Link.mjs"),tailwind_merge__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/.pnpm/tailwind-merge@2.5.4/node_modules/tailwind-merge/dist/bundle-mjs.mjs"),_slot__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/slot.tsx"),_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/utils.ts");const linkStyle=["relative inline-flex cursor-pointer items-center gap-1 rounded-lg outline-none hover:underline","text-base/6 sm:text-sm/6","disabled:no-underline disabled:opacity-50 disabled:cursor-default","[&.border]:hover:no-underline"].join(" "),Link=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(((props,ref)=>{const{asChild:isAsChild,...rest}=props;return isAsChild?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_slot__WEBPACK_IMPORTED_MODULE_2__.D,{className:(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_4__.QP)(linkStyle),children:props.children}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_aria_components__WEBPACK_IMPORTED_MODULE_5__.N,{...rest,ref,className:(0,_utils__WEBPACK_IMPORTED_MODULE_3__.p7)(props.className,[linkStyle,_utils__WEBPACK_IMPORTED_MODULE_3__.s$])})}));Link.displayName="Link",Link.__docgenInfo={description:"",methods:[],displayName:"Link"}},"./src/components/text.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{EY:()=>Text,OH:()=>Strong,Oc:()=>Small,Yq:()=>TextLink});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@15.0.1_@babel+core@7.26.0_react-dom@19.0.0-rc-69d4b800-20241021_react@19.0.0-rc-69d4b800_czvog4bm5hmxkqeypv6dkprgyq/node_modules/next/dist/compiled/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/next@15.0.1_@babel+core@7.26.0_react-dom@19.0.0-rc-69d4b800-20241021_react@19.0.0-rc-69d4b800_czvog4bm5hmxkqeypv6dkprgyq/node_modules/next/dist/compiled/react/index.js"),tailwind_merge__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/.pnpm/tailwind-merge@2.5.4/node_modules/tailwind-merge/dist/bundle-mjs.mjs"),_link__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/link.tsx"),_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/utils.ts");function Text({className,elementType,children,...props}){return react__WEBPACK_IMPORTED_MODULE_1__.createElement(null!=elementType?elementType:"p",{...props,className:(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_4__.QP)("text-pretty text-base/6 text-muted sm:text-sm/6",className)},children)}function Strong({className,...props}){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Text,{...props,elementType:"strong",className:(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_4__.QP)("font-medium text-foreground",className)})}function Small({className,...props}){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Text,{...props,elementType:"small",className:(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_4__.QP)("text-sm sm:text-xs",className)})}function TextLink(props){const{className}=props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_link__WEBPACK_IMPORTED_MODULE_2__.N,{...props,className:(0,_utils__WEBPACK_IMPORTED_MODULE_3__.p7)(className,"underline underline-offset-4")})}Text.__docgenInfo={description:"",methods:[],displayName:"Text"},Strong.__docgenInfo={description:"",methods:[],displayName:"Strong"},Small.__docgenInfo={description:"",methods:[],displayName:"Small"},TextLink.__docgenInfo={description:"",methods:[],displayName:"TextLink"}}}]);