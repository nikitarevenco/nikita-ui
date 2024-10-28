"use strict";(self.webpackChunkdesign_system=self.webpackChunkdesign_system||[]).push([[6832],{"./stories/toast.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BasicExample:()=>BasicExample,__namedExportsOrder:()=>__namedExportsOrder,default:()=>toast_stories});var jsx_runtime=__webpack_require__("./node_modules/.pnpm/next@15.0.1_@babel+core@7.26.0_react-dom@19.0.0-rc-69d4b800-20241021_react@19.0.0-rc-69d4b800_czvog4bm5hmxkqeypv6dkprgyq/node_modules/next/dist/compiled/react/jsx-runtime.js"),components_button=__webpack_require__("./src/components/button.tsx"),useToastState=__webpack_require__("./node_modules/.pnpm/@react-stately+toast@3.0.0-beta.6_react@19.0.0-rc-69d4b800-20241021/node_modules/@react-stately/toast/dist/useToastState.mjs");const toast=new useToastState.Vv({maxVisibleToasts:5});var react=__webpack_require__("./node_modules/.pnpm/next@15.0.1_@babel+core@7.26.0_react-dom@19.0.0-rc-69d4b800-20241021_react@19.0.0-rc-69d4b800_czvog4bm5hmxkqeypv6dkprgyq/node_modules/next/dist/compiled/react/index.js"),react_dom=__webpack_require__("./node_modules/.pnpm/next@15.0.1_@babel+core@7.26.0_react-dom@19.0.0-rc-69d4b800-20241021_react@19.0.0-rc-69d4b800_czvog4bm5hmxkqeypv6dkprgyq/node_modules/next/dist/compiled/react-dom/index.js"),useToastRegion=__webpack_require__("./node_modules/.pnpm/@react-aria+toast@3.0.0-beta.17_react@19.0.0-rc-69d4b800-20241021/node_modules/@react-aria/toast/dist/useToastRegion.mjs"),useToast=__webpack_require__("./node_modules/.pnpm/@react-aria+toast@3.0.0-beta.17_react@19.0.0-rc-69d4b800-20241021/node_modules/@react-aria/toast/dist/useToast.mjs"),bundle_mjs=__webpack_require__("./node_modules/.pnpm/tailwind-merge@2.5.4/node_modules/tailwind-merge/dist/bundle-mjs.mjs"),icons=__webpack_require__("./src/components/icons.tsx");function ToastRegion({state,...props}){const ref=react.useRef(null),{regionProps}=(0,useToastRegion.J)(props,state,ref);var _state_visibleToasts__content_position;let className="bottom-6 right-6 anim ";switch(null!==(_state_visibleToasts__content_position=state.visibleToasts[state.visibleToasts.length-1].content.position)&&void 0!==_state_visibleToasts__content_position?_state_visibleToasts__content_position:"bottom-right"){case"bottom-left":className="bottom-6 left-6";break;case"bottom-center":className="bottom-6 left-1/2 -translate-x-1/2";break;case"top-left":className="top-6 left-6 ";break;case"top-center":className="top-6 left-1/2 -translate-x-1/2";break;case"top-right":className="top-6 right-6"}return(0,jsx_runtime.jsx)("div",{...regionProps,ref,className:(0,bundle_mjs.QP)("toast-region fixed isolate z-20 flex flex-col gap-2 outline-none",className),children:state.visibleToasts.map((toast=>(0,jsx_runtime.jsx)(Toast,{toast,state},toast.key)))})}function GlobalToastRegion(props){const state=(0,useToastState.oS)(toast);return state.visibleToasts.length>0?(0,react_dom.createPortal)((0,jsx_runtime.jsx)(ToastRegion,{...props,state}),document.body):null}function Toast({state,...props}){const ref=react.useRef(null),{toastProps,titleProps,closeButtonProps,descriptionProps}=(0,useToast.d)(props,state,ref);let enteringClassName="";var _props_toast_content_position;switch(null!==(_props_toast_content_position=props.toast.content.position)&&void 0!==_props_toast_content_position?_props_toast_content_position:"bottom-right"){case"bottom-right":case"top-right":enteringClassName="entering"===props.toast.animation?"duration-200 slide-in-from-right animate-in ease-out":"";break;case"bottom-left":case"top-left":enteringClassName="entering"===props.toast.animation?"duration-200 slide-in-from-left animate-in ease-out":"";break;case"bottom-center":case"top-center":enteringClassName="entering"===props.toast.animation?"duration-200 slide-in-from-top animate-in ease-out":""}const type=props.toast.content.type;return(0,jsx_runtime.jsx)("div",{...toastProps,ref,className:"flex flex-1 rounded-lg bg-background outline-none",children:(0,jsx_runtime.jsxs)("div",{className:(0,bundle_mjs.QP)("toast flex w-[min(85vw,360px)] gap-1 rounded-lg border px-3 py-2 shadow-sm transition",void 0===type&&!props.toast.content.render&&"border-border/50 bg-background","error"===type&&"border-destructive1 bg-destructive0","warning"===type&&"border-warning1 bg-warning0","success"===type&&"border-success1 bg-success0",enteringClassName),children:[props.toast.content.render?props.toast.content.render():(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsxs)("div",{className:"flex flex-1 items-center gap-2 self-center",children:["error"===type&&(0,jsx_runtime.jsxs)("svg",{"aria-hidden":!0,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"mt-1 flex size-5 self-start text-destructive",children:[(0,jsx_runtime.jsx)("path",{d:"M12 16h.01"}),(0,jsx_runtime.jsx)("path",{d:"M12 8v4"}),(0,jsx_runtime.jsx)("path",{d:"M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z"})]}),"warning"===type&&(0,jsx_runtime.jsxs)("svg",{"aria-hidden":!0,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"mt-1 flex size-5 self-start text-warning",children:[(0,jsx_runtime.jsx)("path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}),(0,jsx_runtime.jsx)("path",{d:"M12 9v4"}),(0,jsx_runtime.jsx)("path",{d:"M12 17h.01"})]}),"success"===type&&(0,jsx_runtime.jsxs)("svg",{"aria-hidden":!0,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"mt-1 flex size-5 self-start text-success",children:[(0,jsx_runtime.jsx)("circle",{cx:"12",cy:"12",r:"10"}),(0,jsx_runtime.jsx)("path",{d:"m9 12 2 2 4-4"})]}),(0,jsx_runtime.jsxs)("div",{className:"flex flex-1 flex-col gap-1 text-sm/6",children:[props.toast.content.title?(0,jsx_runtime.jsx)("div",{...titleProps,className:(0,bundle_mjs.QP)(props.toast.content.description&&"font-medium"),children:props.toast.content.title}):null,props.toast.content.description?(0,jsx_runtime.jsx)("div",{...descriptionProps,children:props.toast.content.description}):null]})]})}),(0,jsx_runtime.jsx)(components_button.$n,{variant:"plain",size:"sm",isIconOnly:!0,...closeButtonProps,className:(0,bundle_mjs.QP)("rounded","hover:bg-transparent"),children:(0,jsx_runtime.jsx)(icons.uv,{"aria-label":"Close",className:"text-muted/75 group-hover:text-foreground"})})]})})}const toast_stories={title:"Components/Toast",parameters:{layout:"center",docs:{description:{component:'<a href="https://react-spectrum.adobe.com/react-aria/useToast.html#usetoast" target="_blank">`Toasts`</a> display brief, temporary notifications of actions, errors, or other events in an application.'},...__webpack_require__("./.storybook/docs.ts").m,controls:{exclude:RegExp(".*","gv")}}},tags:["autodocs"]};function BasicExample(){return(0,jsx_runtime.jsxs)("div",{className:"flex flex-col items-center gap-4 p-12",children:[(0,jsx_runtime.jsx)(components_button.$n,{variant:"outline",onPress:()=>{toast.add({title:"Components/Templates unavailable",description:"Issue template and forms are current unavailable. Please try again later."})},children:"Default"}),(0,jsx_runtime.jsx)(components_button.$n,{variant:"outline",onPress:()=>{toast.add({description:"Issue template and forms are current unavailable. Please try again later."})},children:"Description only"}),(0,jsx_runtime.jsx)(components_button.$n,{variant:"outline",onPress:()=>{toast.add({type:"error",title:"Components/Templates unavailable",description:"Issue template and forms are current unavailable. Please try again later."})},children:"Error"}),(0,jsx_runtime.jsx)(components_button.$n,{variant:"outline",onPress:()=>{toast.add({type:"warning",title:"Components/Templates unavailable",description:"Issue template and forms are current unavailable. Please try again later."})},children:"Warning"}),(0,jsx_runtime.jsx)(components_button.$n,{variant:"outline",onPress:()=>{toast.add({title:"Components/Payment details saved",description:"Your payment details have been save successfully.",type:"success"})},children:"Success"}),(0,jsx_runtime.jsx)(GlobalToastRegion,{"aria-label":"notification"})]})}const __namedExportsOrder=["BasicExample"];BasicExample.parameters={...BasicExample.parameters,docs:{...BasicExample.parameters?.docs,source:{originalSource:'function BasicExample() {\n  return <div className="flex flex-col items-center gap-4 p-12">\n      <Button variant="outline" onPress={() => {\n      toast.add({\n        title: "Components/Templates unavailable",\n        description: "Issue template and forms are current unavailable. Please try again later."\n      });\n    }}>\n        Default\n      </Button>\n\n      <Button variant="outline" onPress={() => {\n      toast.add({\n        description: "Issue template and forms are current unavailable. Please try again later."\n      });\n    }}>\n        Description only\n      </Button>\n\n      <Button variant="outline" onPress={() => {\n      toast.add({\n        type: "error",\n        title: "Components/Templates unavailable",\n        description: "Issue template and forms are current unavailable. Please try again later."\n      });\n    }}>\n        Error\n      </Button>\n\n      <Button variant="outline" onPress={() => {\n      toast.add({\n        type: "warning",\n        title: "Components/Templates unavailable",\n        description: "Issue template and forms are current unavailable. Please try again later."\n      });\n    }}>\n        Warning\n      </Button>\n\n      <Button variant="outline" onPress={() => {\n      toast.add({\n        title: "Components/Payment details saved",\n        description: "Your payment details have been save successfully.",\n        type: "success"\n      });\n    }}>\n        Success\n      </Button>\n\n      <GlobalToastRegion aria-label="notification" />\n    </div>;\n}',...BasicExample.parameters?.docs?.source}}}},"./src/components/button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$n:()=>Button,e2:()=>ButtonGroup,ff:()=>ToggleButton});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@15.0.1_@babel+core@7.26.0_react-dom@19.0.0-rc-69d4b800-20241021_react@19.0.0-rc-69d4b800_czvog4bm5hmxkqeypv6dkprgyq/node_modules/next/dist/compiled/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/next@15.0.1_@babel+core@7.26.0_react-dom@19.0.0-rc-69d4b800-20241021_react@19.0.0-rc-69d4b800_czvog4bm5hmxkqeypv6dkprgyq/node_modules/next/dist/compiled/react/index.js"),react_aria_components__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/.pnpm/react-aria-components@1.4.1_react-dom@19.0.0-rc-69d4b800-20241021_react@19.0.0-rc-69d4b800-20_lzfgk4i222ma4rx6xt7oeewigi/node_modules/react-aria-components/dist/Button.mjs"),react_aria_components__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/.pnpm/react-aria-components@1.4.1_react-dom@19.0.0-rc-69d4b800-20241021_react@19.0.0-rc-69d4b800-20_lzfgk4i222ma4rx6xt7oeewigi/node_modules/react-aria-components/dist/ToggleButton.mjs"),tailwind_merge__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/.pnpm/tailwind-merge@2.5.4/node_modules/tailwind-merge/dist/bundle-mjs.mjs"),_icons__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/icons.tsx"),_slot__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/slot.tsx"),_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/utils.ts");const buttonVariants={base:["group relative inline-flex gap-x-2 justify-center items-center","font-semibold text-base/6 sm:text-sm/6 whitespace-nowrap outline-none rounded-lg"],solid:["border border-[var(--btn-bg)]","bg-[var(--btn-bg)] hover:bg-[var(--btn-bg-hover)] pressed:bg-[var(--btn-bg-hover)]","shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]","text-white"],outline:["border border-border","hover:bg-highlighted pressed:bg-highlighted","shadow-sm","text-[var(--btn-color)]"],plain:["[--border-with:0px]","hover:bg-zinc-100","text-[var(--btn-color)]"]},buttonSizes={sm:{button:["h-8 sm:h-7 px-2 text-sm/6 sm:text-xs/6 rounded-md","[&_svg:not([class*=size-])]:size-3"],iconOnly:["size-8 sm:size-7 rounded-md","[&_svg:not([class*=size-])]:size-5","sm:[&_svg:not([class*=size-])]:size-4"]},md:{button:["px-3 py-[calc(theme(spacing[2.5])-var(--border-with,1px))]","sm:py-[calc(theme(spacing[1.5])-var(--border-with,1px))]","[&_svg:not([class*=size-])]:size-5","sm:[&_svg:not([class*=size-])]:size-4"],iconOnly:["p-[calc(theme(spacing[2.5])-var(--border-with,1px))]","sm:p-[calc(theme(spacing[1.5])-var(--border-with,1px))]","[&_svg:not([class*=size-])]:size-5","[&_svg]:m-0.5","sm:[&_svg:not([class*=size-])]:size-4","sm:[&_svg]:m-1"]},lg:{button:["px-4 py-[calc(theme(spacing[2.5])-var(--border-with,1px))]","[&_svg:not([class*=size-])]:size-5"],iconOnly:["p-[calc(theme(spacing[2.5])-var(--border-with,1px))]","[&_svg:not([class*=size-])]:size-5","[&_svg]:m-0.5"]}};function buttonStyle({size,color,isIconOnly,variant="solid"}){if("unstyle"===variant)return"relative outline-none rounded-lg";const buttonSize=null!=size?size:"md",buttonType=isIconOnly?"iconOnly":"button";return[buttonVariants.base,buttonVariants[variant],"solid"===variant?[{accent:["[--btn-bg:theme(colors.accent)]","[--btn-bg-hover:theme(colors.accent/90%)]"],destructive:["[--btn-bg:theme(colors.destructive)]","[--btn-bg-hover:theme(colors.destructive/90%)]"],success:["[--btn-bg:theme(colors.success)]","[--btn-bg-hover:theme(colors.success/90%)]"]}[null!=color?color:"accent"]]:[{foreground:"[--btn-color:theme(colors.foreground)]",accent:"[--btn-color:theme(colors.accent)]",destructive:"[--btn-color:theme(colors.destructive)]",success:"[--btn-color:theme(colors.success)]"}[null!=color?color:"foreground"]],buttonSizes[buttonSize][buttonType]]}const Button=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(((props,ref)=>{const{asChild:isAsChild,children,isCustomPending,pendingLabel,size,color,variant="solid",isIconOnly,...buttonProps}=props;return isAsChild?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_slot__WEBPACK_IMPORTED_MODULE_3__.D,{className:(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_5__.QP)(buttonStyle(props)),children}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_aria_components__WEBPACK_IMPORTED_MODULE_6__.$,{...buttonProps,ref,"data-variant":variant,className:(0,_utils__WEBPACK_IMPORTED_MODULE_4__.p7)(props.className,[buttonStyle({size,color,isIconOnly,variant}),_utils__WEBPACK_IMPORTED_MODULE_4__.s$,"disabled:opacity-50","data-[pending]:opacity-75",!isCustomPending&&"data-[pending]:text-transparent"]),children:renderProps=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[renderProps.isPending&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_icons__WEBPACK_IMPORTED_MODULE_2__.Nl,{"aria-label":pendingLabel,className:(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_5__.QP)("absolute","text-foreground","group-data-[variant=solid]:text-border",isCustomPending?"group-data-[pending]:sr-only":"group-data-[pending]:flex")}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"contents",...renderProps.isPending&&{"aria-hidden":!0},children:"function"==typeof children?children(renderProps):children}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"absolute left-1/2 top-1/2 size-[max(100%,2.75rem)] -translate-x-1/2 -translate-y-1/2 [@media(pointer:fine)]:hidden","aria-hidden":"true"})]})})}));function ToggleButton(props){const{className}=props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_aria_components__WEBPACK_IMPORTED_MODULE_7__.f,{...props,className:(0,_utils__WEBPACK_IMPORTED_MODULE_4__.p7)(className,[buttonStyle(props),_utils__WEBPACK_IMPORTED_MODULE_4__.s$])})}function ButtonGroup({className,blend,orientation="horizontal",...props}){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{...props,"data-ui":"button-group",className:(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_5__.QP)("group flex w-max items-center","horizontal"===orientation?["[&>button:first-of-type]:rounded-e-none","[&>button:last-of-type]:rounded-s-none","[&>button:not(:last-of-type)]:border-e-0",blend&&"shadow-sm [&>button:not(:first-of-type)]:border-s-0 [&>button]:shadow-none"]:["flex-col","[&>button:first-of-type]:rounded-b-none","[&>button:last-of-type]:rounded-t-none","[&>button:not(:last-of-type)]:border-b-0",blend&&"shadow-sm [&>button:not(:first-of-type)]:border-t-0 [&>button]:shadow-none"],"[&>button:not(:first-of-type):not(:last-of-type)]:rounded-none","","","[&>button[data-variant=solid]:not(:first-of-type)]:border-s-black/15",className)})}Button.displayName="Button",Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{color:{required:!1,tsType:{name:"union",raw:'"accent" | "success" | "destructive"',elements:[{name:"literal",value:'"accent"'},{name:"literal",value:'"success"'},{name:"literal",value:'"destructive"'}]},description:""},size:{required:!1,tsType:{name:"union",raw:'"sm" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"lg"'}]},description:""},isCustomPending:{required:!1,tsType:{name:"boolean"},description:""},isIconOnly:{required:!1,tsType:{name:"boolean"},description:""},pendingLabel:{required:!1,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"solid" | "outline" | "plain" | "unstyle"',elements:[{name:"literal",value:'"solid"'},{name:"literal",value:'"outline"'},{name:"literal",value:'"plain"'},{name:"literal",value:'"unstyle"'}]},description:""}}},ToggleButton.__docgenInfo={description:"",methods:[],displayName:"ToggleButton",props:{color:{required:!1,tsType:{name:"union",raw:'"accent" | "success" | "destructive"',elements:[{name:"literal",value:'"accent"'},{name:"literal",value:'"success"'},{name:"literal",value:'"destructive"'}]},description:""},size:{required:!1,tsType:{name:"union",raw:'"sm" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"lg"'}]},description:""},isCustomPending:{required:!1,tsType:{name:"boolean"},description:""},isIconOnly:{required:!1,tsType:{name:"boolean"},description:""},pendingLabel:{required:!1,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"solid" | "outline" | "plain" | "unstyle"',elements:[{name:"literal",value:'"solid"'},{name:"literal",value:'"outline"'},{name:"literal",value:'"plain"'},{name:"literal",value:'"unstyle"'}]},description:""}}},ButtonGroup.__docgenInfo={description:"",methods:[],displayName:"ButtonGroup",props:{blend:{required:!1,tsType:{name:"boolean"},description:""},orientation:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:"",defaultValue:{value:'"horizontal"',computed:!1}}}}}}]);