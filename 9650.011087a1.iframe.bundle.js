/*! For license information please see 9650.011087a1.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkdesign_system=self.webpackChunkdesign_system||[]).push([[9650],{"./node_modules/.pnpm/@react-aria+i18n@3.12.3_react@19.0.0-rc-69d4b800-20241021/node_modules/@react-aria/i18n/dist/useFilter.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{U:()=>$bb77f239b46e8c72$export$3274cf84b703fff});var _useCollator_mjs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@react-aria+i18n@3.12.3_react@19.0.0-rc-69d4b800-20241021/node_modules/@react-aria/i18n/dist/useCollator.mjs"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@15.0.1_@babel+core@7.26.0_react-dom@19.0.0-rc-69d4b800-20241021_react@19.0.0-rc-69d4b800_czvog4bm5hmxkqeypv6dkprgyq/node_modules/next/dist/compiled/react/index.js");function $bb77f239b46e8c72$export$3274cf84b703fff(options){let collator=(0,_useCollator_mjs__WEBPACK_IMPORTED_MODULE_1__.Q)({usage:"search",...options}),startsWith=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(((string,substring)=>0===substring.length||(string=string.normalize("NFC"),substring=substring.normalize("NFC"),0===collator.compare(string.slice(0,substring.length),substring))),[collator]),endsWith=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(((string,substring)=>0===substring.length||(string=string.normalize("NFC"),substring=substring.normalize("NFC"),0===collator.compare(string.slice(-substring.length),substring))),[collator]),contains=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(((string,substring)=>{if(0===substring.length)return!0;string=string.normalize("NFC");let scan=0,sliceLen=(substring=substring.normalize("NFC")).length;for(;scan+sliceLen<=string.length;scan++){let slice=string.slice(scan,scan+sliceLen);if(0===collator.compare(substring,slice))return!0}return!1}),[collator]);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>({startsWith,endsWith,contains})),[startsWith,endsWith,contains])}},"./node_modules/.pnpm/lucide-react@0.453.0_react@19.0.0-rc-69d4b800-20241021/node_modules/lucide-react/dist/esm/createLucideIcon.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>createLucideIcon});var react=__webpack_require__("./node_modules/.pnpm/next@15.0.1_@babel+core@7.26.0_react-dom@19.0.0-rc-69d4b800-20241021_react@19.0.0-rc-69d4b800_czvog4bm5hmxkqeypv6dkprgyq/node_modules/next/dist/compiled/react/index.js");const mergeClasses=(...classes)=>classes.filter(((className,index,array)=>Boolean(className)&&array.indexOf(className)===index)).join(" ");var defaultAttributes={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const Icon=(0,react.forwardRef)((({color="currentColor",size=24,strokeWidth=2,absoluteStrokeWidth,className="",children,iconNode,...rest},ref)=>(0,react.createElement)("svg",{ref,...defaultAttributes,width:size,height:size,stroke:color,strokeWidth:absoluteStrokeWidth?24*Number(strokeWidth)/Number(size):strokeWidth,className:mergeClasses("lucide",className),...rest},[...iconNode.map((([tag,attrs])=>(0,react.createElement)(tag,attrs))),...Array.isArray(children)?children:[children]]))),createLucideIcon=(iconName,iconNode)=>{const Component=(0,react.forwardRef)((({className,...props},ref)=>{return(0,react.createElement)(Icon,{ref,iconNode,className:mergeClasses(`lucide-${string=iconName,string.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,className),...props});var string}));return Component.displayName=`${iconName}`,Component}},"./node_modules/.pnpm/lucide-react@0.453.0_react@19.0.0-rc-69d4b800-20241021/node_modules/lucide-react/dist/esm/icons/search.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Search});const Search=(0,__webpack_require__("./node_modules/.pnpm/lucide-react@0.453.0_react@19.0.0-rc-69d4b800-20241021/node_modules/lucide-react/dist/esm/createLucideIcon.js").A)("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]])},"./node_modules/.pnpm/react-aria-components@1.4.1_react-dom@19.0.0-rc-69d4b800-20241021_react@19.0.0-rc-69d4b800-20_lzfgk4i222ma4rx6xt7oeewigi/node_modules/react-aria-components/dist/Heading.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>$5cb03073d3f54797$export$a8a3e93435678ff9});var _RSPContexts_mjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/react-aria-components@1.4.1_react-dom@19.0.0-rc-69d4b800-20241021_react@19.0.0-rc-69d4b800-20_lzfgk4i222ma4rx6xt7oeewigi/node_modules/react-aria-components/dist/RSPContexts.mjs"),_utils_mjs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/react-aria-components@1.4.1_react-dom@19.0.0-rc-69d4b800-20241021_react@19.0.0-rc-69d4b800-20_lzfgk4i222ma4rx6xt7oeewigi/node_modules/react-aria-components/dist/utils.mjs"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@15.0.1_@babel+core@7.26.0_react-dom@19.0.0-rc-69d4b800-20241021_react@19.0.0-rc-69d4b800_czvog4bm5hmxkqeypv6dkprgyq/node_modules/next/dist/compiled/react/index.js");function $5cb03073d3f54797$var$Heading(props,ref){[props,ref]=(0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.JT)(props,ref,_RSPContexts_mjs__WEBPACK_IMPORTED_MODULE_2__.A3);let{children,level=3,className,...domProps}=props,Element=`h${level}`;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Element,{...domProps,ref,className:null!=className?className:"react-aria-Heading"},children)}const $5cb03073d3f54797$export$a8a3e93435678ff9=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)($5cb03073d3f54797$var$Heading)},"./node_modules/.pnpm/react-aria-components@1.4.1_react-dom@19.0.0-rc-69d4b800-20241021_react@19.0.0-rc-69d4b800-20_lzfgk4i222ma4rx6xt7oeewigi/node_modules/react-aria-components/dist/Keyboard.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>$63df2425e2108aa8$export$744d98a3b8a94e1c,s:()=>$63df2425e2108aa8$export$16e4d70cc375e707});var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/react-aria-components@1.4.1_react-dom@19.0.0-rc-69d4b800-20241021_react@19.0.0-rc-69d4b800-20_lzfgk4i222ma4rx6xt7oeewigi/node_modules/react-aria-components/dist/utils.mjs"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@15.0.1_@babel+core@7.26.0_react-dom@19.0.0-rc-69d4b800-20241021_react@19.0.0-rc-69d4b800_czvog4bm5hmxkqeypv6dkprgyq/node_modules/next/dist/compiled/react/index.js");const $63df2425e2108aa8$export$744d98a3b8a94e1c=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});function $63df2425e2108aa8$var$Keyboard(props,ref){return[props,ref]=(0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.JT)(props,ref,$63df2425e2108aa8$export$744d98a3b8a94e1c),react__WEBPACK_IMPORTED_MODULE_0__.createElement("kbd",{dir:"ltr",...props,ref})}const $63df2425e2108aa8$export$16e4d70cc375e707=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)($63df2425e2108aa8$var$Keyboard)},"./node_modules/.pnpm/react-aria-components@1.4.1_react-dom@19.0.0-rc-69d4b800-20241021_react@19.0.0-rc-69d4b800-20_lzfgk4i222ma4rx6xt7oeewigi/node_modules/react-aria-components/dist/Modal.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{aF:()=>$f3f84453ead64de5$export$2b77a92f1a5ad772,mH:()=>$f3f84453ead64de5$export$8948f78d83984c69});var utils=__webpack_require__("./node_modules/.pnpm/react-aria-components@1.4.1_react-dom@19.0.0-rc-69d4b800-20241021_react@19.0.0-rc-69d4b800-20_lzfgk4i222ma4rx6xt7oeewigi/node_modules/react-aria-components/dist/utils.mjs"),Dialog=__webpack_require__("./node_modules/.pnpm/react-aria-components@1.4.1_react-dom@19.0.0-rc-69d4b800-20241021_react@19.0.0-rc-69d4b800-20_lzfgk4i222ma4rx6xt7oeewigi/node_modules/react-aria-components/dist/Dialog.mjs"),SSRProvider=__webpack_require__("./node_modules/.pnpm/@react-aria+ssr@3.9.6_react@19.0.0-rc-69d4b800-20241021/node_modules/@react-aria/ssr/dist/SSRProvider.mjs"),ariaHideOutside=__webpack_require__("./node_modules/.pnpm/@react-aria+overlays@3.23.4_react-dom@19.0.0-rc-69d4b800-20241021_react@19.0.0-rc-69d4b800-20_thir4y2lkvdh5hhvbx3rmlir2q/node_modules/@react-aria/overlays/dist/ariaHideOutside.mjs"),useOverlay=__webpack_require__("./node_modules/.pnpm/@react-aria+overlays@3.23.4_react-dom@19.0.0-rc-69d4b800-20241021_react@19.0.0-rc-69d4b800-20_thir4y2lkvdh5hhvbx3rmlir2q/node_modules/@react-aria/overlays/dist/useOverlay.mjs"),Overlay=__webpack_require__("./node_modules/.pnpm/@react-aria+overlays@3.23.4_react-dom@19.0.0-rc-69d4b800-20241021_react@19.0.0-rc-69d4b800-20_thir4y2lkvdh5hhvbx3rmlir2q/node_modules/@react-aria/overlays/dist/Overlay.mjs"),usePreventScroll=__webpack_require__("./node_modules/.pnpm/@react-aria+overlays@3.23.4_react-dom@19.0.0-rc-69d4b800-20241021_react@19.0.0-rc-69d4b800-20_thir4y2lkvdh5hhvbx3rmlir2q/node_modules/@react-aria/overlays/dist/usePreventScroll.mjs"),mergeProps=__webpack_require__("./node_modules/.pnpm/@react-aria+utils@3.25.3_react@19.0.0-rc-69d4b800-20241021/node_modules/@react-aria/utils/dist/mergeProps.mjs"),react=__webpack_require__("./node_modules/.pnpm/next@15.0.1_@babel+core@7.26.0_react-dom@19.0.0-rc-69d4b800-20241021_react@19.0.0-rc-69d4b800_czvog4bm5hmxkqeypv6dkprgyq/node_modules/next/dist/compiled/react/index.js");function $8ac8429251c45e4b$export$dbc0f175b25fb0fb(props,state,ref){let{overlayProps,underlayProps}=(0,useOverlay.e)({...props,isOpen:state.isOpen,onClose:state.close},ref);return(0,usePreventScroll.H)({isDisabled:!state.isOpen}),(0,Overlay.Se)(),(0,react.useEffect)((()=>{if(state.isOpen)return(0,ariaHideOutside.h)([ref.current])}),[state.isOpen,ref]),{modalProps:(0,mergeProps.v)(overlayProps),underlayProps}}var DismissButton=__webpack_require__("./node_modules/.pnpm/@react-aria+overlays@3.23.4_react-dom@19.0.0-rc-69d4b800-20241021_react@19.0.0-rc-69d4b800-20_thir4y2lkvdh5hhvbx3rmlir2q/node_modules/@react-aria/overlays/dist/DismissButton.mjs"),useObjectRef=__webpack_require__("./node_modules/.pnpm/@react-aria+utils@3.25.3_react@19.0.0-rc-69d4b800-20241021/node_modules/@react-aria/utils/dist/useObjectRef.mjs");let $5df64b3807dc15ee$var$visualViewport="undefined"!=typeof document&&window.visualViewport;function $5df64b3807dc15ee$export$d699905dd57c73ca(){let isSSR=(0,SSRProvider.wR)(),[size,setSize]=(0,react.useState)((()=>isSSR?{width:0,height:0}:$5df64b3807dc15ee$var$getViewportSize()));return(0,react.useEffect)((()=>{let onResize=()=>{setSize((size=>{let newSize=$5df64b3807dc15ee$var$getViewportSize();return newSize.width===size.width&&newSize.height===size.height?size:newSize}))};return $5df64b3807dc15ee$var$visualViewport?$5df64b3807dc15ee$var$visualViewport.addEventListener("resize",onResize):window.addEventListener("resize",onResize),()=>{$5df64b3807dc15ee$var$visualViewport?$5df64b3807dc15ee$var$visualViewport.removeEventListener("resize",onResize):window.removeEventListener("resize",onResize)}}),[]),size}function $5df64b3807dc15ee$var$getViewportSize(){return{width:$5df64b3807dc15ee$var$visualViewport&&(null==$5df64b3807dc15ee$var$visualViewport?void 0:$5df64b3807dc15ee$var$visualViewport.width)||window.innerWidth,height:$5df64b3807dc15ee$var$visualViewport&&(null==$5df64b3807dc15ee$var$visualViewport?void 0:$5df64b3807dc15ee$var$visualViewport.height)||window.innerHeight}}var filterDOMProps=__webpack_require__("./node_modules/.pnpm/@react-aria+utils@3.25.3_react@19.0.0-rc-69d4b800-20241021/node_modules/@react-aria/utils/dist/filterDOMProps.mjs"),mergeRefs=__webpack_require__("./node_modules/.pnpm/@react-aria+utils@3.25.3_react@19.0.0-rc-69d4b800-20241021/node_modules/@react-aria/utils/dist/mergeRefs.mjs"),useOverlayTriggerState=__webpack_require__("./node_modules/.pnpm/@react-stately+overlays@3.6.11_react@19.0.0-rc-69d4b800-20241021/node_modules/@react-stately/overlays/dist/useOverlayTriggerState.mjs");const $f3f84453ead64de5$export$ab57792b9b6974a6=(0,react.createContext)(null),$f3f84453ead64de5$var$InternalModalContext=(0,react.createContext)(null);function $f3f84453ead64de5$var$Modal(props,ref){if((0,react.useContext)($f3f84453ead64de5$var$InternalModalContext))return react.createElement($f3f84453ead64de5$var$ModalContent,{...props,modalRef:ref},props.children);let{isDismissable,isKeyboardDismissDisabled,isOpen,defaultOpen,onOpenChange,children,isEntering,isExiting,UNSTABLE_portalContainer,shouldCloseOnInteractOutside,...otherProps}=props;return react.createElement($f3f84453ead64de5$export$8948f78d83984c69,{isDismissable,isKeyboardDismissDisabled,isOpen,defaultOpen,onOpenChange,isEntering,isExiting,UNSTABLE_portalContainer,shouldCloseOnInteractOutside},react.createElement($f3f84453ead64de5$var$ModalContent,{...otherProps,modalRef:ref},children))}const $f3f84453ead64de5$export$2b77a92f1a5ad772=(0,react.forwardRef)($f3f84453ead64de5$var$Modal);function $f3f84453ead64de5$var$ModalOverlayWithForwardRef(props,ref){[props,ref]=(0,utils.JT)(props,ref,$f3f84453ead64de5$export$ab57792b9b6974a6);let contextState=(0,react.useContext)(Dialog.RG),localState=(0,useOverlayTriggerState.T)(props),state=null==props.isOpen&&null==props.defaultOpen&&contextState?contextState:localState,objectRef=(0,useObjectRef.U)(ref),modalRef=(0,react.useRef)(null),isOverlayExiting=(0,utils.OD)(objectRef,state.isOpen),isModalExiting=(0,utils.OD)(modalRef,state.isOpen),isExiting=isOverlayExiting||isModalExiting||props.isExiting||!1,isSSR=(0,SSRProvider.wR)();return!state.isOpen&&!isExiting||isSSR?null:react.createElement($f3f84453ead64de5$var$ModalOverlayInner,{...props,state,isExiting,overlayRef:objectRef,modalRef})}const $f3f84453ead64de5$export$8948f78d83984c69=(0,react.forwardRef)($f3f84453ead64de5$var$ModalOverlayWithForwardRef);function $f3f84453ead64de5$var$ModalOverlayInner({UNSTABLE_portalContainer,...props}){let modalRef=props.modalRef,{state}=props,{modalProps,underlayProps}=$8ac8429251c45e4b$export$dbc0f175b25fb0fb(props,state,modalRef),entering=(0,utils._6)(props.overlayRef)||props.isEntering||!1,renderProps=(0,utils.Sl)({...props,defaultClassName:"react-aria-ModalOverlay",values:{isEntering:entering,isExiting:props.isExiting,state}}),viewport=$5df64b3807dc15ee$export$d699905dd57c73ca(),style={...renderProps.style,"--visual-viewport-height":viewport.height+"px"};return react.createElement(Overlay.hJ,{isExiting:props.isExiting,portalContainer:UNSTABLE_portalContainer},react.createElement("div",{...(0,mergeProps.v)((0,filterDOMProps.$)(props),underlayProps),...renderProps,style,ref:props.overlayRef,"data-entering":entering||void 0,"data-exiting":props.isExiting||void 0},react.createElement(utils.Kq,{values:[[$f3f84453ead64de5$var$InternalModalContext,{modalProps,modalRef,isExiting:props.isExiting,isDismissable:props.isDismissable}],[Dialog.RG,state]]},renderProps.children)))}function $f3f84453ead64de5$var$ModalContent(props){let{modalProps,modalRef,isExiting,isDismissable}=(0,react.useContext)($f3f84453ead64de5$var$InternalModalContext),state=(0,react.useContext)(Dialog.RG),mergedRefs=(0,react.useMemo)((()=>(0,mergeRefs.P)(props.modalRef,modalRef)),[props.modalRef,modalRef]),ref=(0,useObjectRef.U)(mergedRefs),entering=(0,utils._6)(ref),renderProps=(0,utils.Sl)({...props,defaultClassName:"react-aria-Modal",values:{isEntering:entering,isExiting,state}});return react.createElement("div",{...(0,mergeProps.v)((0,filterDOMProps.$)(props),modalProps),...renderProps,ref,"data-entering":entering||void 0,"data-exiting":isExiting||void 0},isDismissable&&react.createElement(DismissButton.R,{onDismiss:state.close}),renderProps.children)}}}]);