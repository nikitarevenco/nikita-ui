/*! For license information please see 603.836b6f0b.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkdesign_system=self.webpackChunkdesign_system||[]).push([[603],{"./node_modules/.pnpm/@react-aria+utils@3.25.3_react@19.0.0-rc-69d4b800-20241021/node_modules/@react-aria/utils/dist/useEvent.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>$e9faafb641e167db$export$90fc3a17d93f704c});var _useEffectEvent_mjs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@react-aria+utils@3.25.3_react@19.0.0-rc-69d4b800-20241021/node_modules/@react-aria/utils/dist/useEffectEvent.mjs"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@15.0.1_@babel+core@7.26.0_react-dom@19.0.0-rc-69d4b800-20241021_react@19.0.0-rc-69d4b800_czvog4bm5hmxkqeypv6dkprgyq/node_modules/next/dist/compiled/react/index.js");function $e9faafb641e167db$export$90fc3a17d93f704c(ref,event,handler,options){let handleEvent=(0,_useEffectEvent_mjs__WEBPACK_IMPORTED_MODULE_1__.J)(handler),isDisabled=null==handler;(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{if(isDisabled||!ref.current)return;let element=ref.current;return element.addEventListener(event,handleEvent,options),()=>{element.removeEventListener(event,handleEvent,options)}}),[ref,event,options,isDisabled,handleEvent])}},"./node_modules/.pnpm/lucide-react@0.453.0_react@19.0.0-rc-69d4b800-20241021/node_modules/lucide-react/dist/esm/createLucideIcon.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>createLucideIcon});var react=__webpack_require__("./node_modules/.pnpm/next@15.0.1_@babel+core@7.26.0_react-dom@19.0.0-rc-69d4b800-20241021_react@19.0.0-rc-69d4b800_czvog4bm5hmxkqeypv6dkprgyq/node_modules/next/dist/compiled/react/index.js");const mergeClasses=(...classes)=>classes.filter(((className,index,array)=>Boolean(className)&&array.indexOf(className)===index)).join(" ");var defaultAttributes={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const Icon=(0,react.forwardRef)((({color="currentColor",size=24,strokeWidth=2,absoluteStrokeWidth,className="",children,iconNode,...rest},ref)=>(0,react.createElement)("svg",{ref,...defaultAttributes,width:size,height:size,stroke:color,strokeWidth:absoluteStrokeWidth?24*Number(strokeWidth)/Number(size):strokeWidth,className:mergeClasses("lucide",className),...rest},[...iconNode.map((([tag,attrs])=>(0,react.createElement)(tag,attrs))),...Array.isArray(children)?children:[children]]))),createLucideIcon=(iconName,iconNode)=>{const Component=(0,react.forwardRef)((({className,...props},ref)=>{return(0,react.createElement)(Icon,{ref,iconNode,className:mergeClasses(`lucide-${string=iconName,string.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,className),...props});var string}));return Component.displayName=`${iconName}`,Component}},"./node_modules/.pnpm/lucide-react@0.453.0_react@19.0.0-rc-69d4b800-20241021/node_modules/lucide-react/dist/esm/icons/chevron-down.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>ChevronDown});const ChevronDown=(0,__webpack_require__("./node_modules/.pnpm/lucide-react@0.453.0_react@19.0.0-rc-69d4b800-20241021/node_modules/lucide-react/dist/esm/createLucideIcon.js").A)("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]])},"./node_modules/.pnpm/react-aria-components@1.4.1_react-dom@19.0.0-rc-69d4b800-20241021_react@19.0.0-rc-69d4b800-20_lzfgk4i222ma4rx6xt7oeewigi/node_modules/react-aria-components/dist/Disclosure.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{EN:()=>$28f4fd908f0de97f$export$74a362b31437ec83,Tw:()=>$28f4fd908f0de97f$export$944aceb4f8c89f10,kS:()=>$28f4fd908f0de97f$export$feabaa331e1d464c});var Button=__webpack_require__("./node_modules/.pnpm/react-aria-components@1.4.1_react-dom@19.0.0-rc-69d4b800-20241021_react@19.0.0-rc-69d4b800-20_lzfgk4i222ma4rx6xt7oeewigi/node_modules/react-aria-components/dist/Button.mjs"),utils=__webpack_require__("./node_modules/.pnpm/react-aria-components@1.4.1_react-dom@19.0.0-rc-69d4b800-20241021_react@19.0.0-rc-69d4b800-20_lzfgk4i222ma4rx6xt7oeewigi/node_modules/react-aria-components/dist/utils.mjs"),react=__webpack_require__("./node_modules/.pnpm/next@15.0.1_@babel+core@7.26.0_react-dom@19.0.0-rc-69d4b800-20241021_react@19.0.0-rc-69d4b800_czvog4bm5hmxkqeypv6dkprgyq/node_modules/next/dist/compiled/react/index.js"),useId=__webpack_require__("./node_modules/.pnpm/@react-aria+utils@3.25.3_react@19.0.0-rc-69d4b800-20241021/node_modules/@react-aria/utils/dist/useId.mjs"),useEvent=__webpack_require__("./node_modules/.pnpm/@react-aria+utils@3.25.3_react@19.0.0-rc-69d4b800-20241021/node_modules/@react-aria/utils/dist/useEvent.mjs"),SSRProvider=__webpack_require__("./node_modules/.pnpm/@react-aria+ssr@3.9.6_react@19.0.0-rc-69d4b800-20241021/node_modules/@react-aria/ssr/dist/SSRProvider.mjs");function $5e910fae8e128ead$export$6e3e27031a30522f(props,state,ref){let{isDisabled}=props,triggerId=(0,useId.Bi)(),contentId=(0,useId.Bi)(),isControlled=void 0!==props.isExpanded,supportsBeforeMatch=!(0,SSRProvider.wR)()&&"onbeforematch"in document.body;return(0,useEvent._)(ref,"beforematch",supportsBeforeMatch&&!isControlled?()=>state.expand():null),(0,react.useEffect)((()=>{supportsBeforeMatch&&(null==ref?void 0:ref.current)&&!isControlled&&!isDisabled&&(state.isExpanded?ref.current.removeAttribute("hidden"):ref.current.setAttribute("hidden","until-found"))}),[isControlled,ref,props.isExpanded,state,supportsBeforeMatch,isDisabled]),{buttonProps:{id:triggerId,"aria-expanded":state.isExpanded,"aria-controls":contentId,onPress:e=>{isDisabled||"keyboard"===e.pointerType||state.toggle()},isDisabled,onKeyDown(e){isDisabled||"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),state.toggle())}},panelProps:{id:contentId,role:"group","aria-labelledby":triggerId,hidden:!(!supportsBeforeMatch||isControlled)||!state.isExpanded}}}var useControlledState=__webpack_require__("./node_modules/.pnpm/@react-stately+utils@3.10.4_react@19.0.0-rc-69d4b800-20241021/node_modules/@react-stately/utils/dist/useControlledState.mjs");function $9385b3affbdec831$export$f36461af0ef4707d(props){let{allowsMultipleExpanded=!1,isDisabled=!1}=props,[expandedKeys,setExpandedKeys]=(0,useControlledState.P)((0,react.useMemo)((()=>props.expandedKeys?new Set(props.expandedKeys):void 0),[props.expandedKeys]),(0,react.useMemo)((()=>props.defaultExpandedKeys?new Set(props.defaultExpandedKeys):new Set),[props.defaultExpandedKeys]),props.onExpandedChange);return(0,react.useEffect)((()=>{!allowsMultipleExpanded&&expandedKeys.size>1&&setExpandedKeys(new Set([expandedKeys.values().next().value]))})),{allowsMultipleExpanded,isDisabled,expandedKeys,setExpandedKeys,toggleKey(key){let keys;allowsMultipleExpanded?(keys=new Set(expandedKeys),keys.has(key)?keys.delete(key):keys.add(key)):keys=new Set(expandedKeys.has(key)?[]:[key]),setExpandedKeys(keys)}}}function $bf996d45f4a36925$export$3fcbf6e4407997e0(props){let[isExpanded,setExpanded]=(0,useControlledState.P)(props.isExpanded,props.defaultExpanded||!1,props.onExpandedChange);const expand=(0,react.useCallback)((()=>{setExpanded(!0)}),[setExpanded]),collapse=(0,react.useCallback)((()=>{setExpanded(!1)}),[setExpanded]),toggle=(0,react.useCallback)((()=>{setExpanded(!isExpanded)}),[setExpanded,isExpanded]);return{isExpanded,setExpanded,expand,collapse,toggle}}var filterDOMProps=__webpack_require__("./node_modules/.pnpm/@react-aria+utils@3.25.3_react@19.0.0-rc-69d4b800-20241021/node_modules/@react-aria/utils/dist/filterDOMProps.mjs"),mergeRefs=__webpack_require__("./node_modules/.pnpm/@react-aria+utils@3.25.3_react@19.0.0-rc-69d4b800-20241021/node_modules/@react-aria/utils/dist/mergeRefs.mjs"),mergeProps=__webpack_require__("./node_modules/.pnpm/@react-aria+utils@3.25.3_react@19.0.0-rc-69d4b800-20241021/node_modules/@react-aria/utils/dist/mergeProps.mjs"),useFocusRing=__webpack_require__("./node_modules/.pnpm/@react-aria+focus@3.18.4_react@19.0.0-rc-69d4b800-20241021/node_modules/@react-aria/focus/dist/useFocusRing.mjs");const $28f4fd908f0de97f$export$1d40e3e0cc4d5de=(0,react.createContext)(null);function $28f4fd908f0de97f$var$DisclosureGroup(props,ref){let state=$9385b3affbdec831$export$f36461af0ef4707d(props),renderProps=(0,utils.Sl)({...props,defaultClassName:"react-aria-DisclosureGroup",values:{isDisabled:state.isDisabled,state}}),domProps=(0,filterDOMProps.$)(props);return react.createElement("div",{...domProps,...renderProps,ref,"data-disabled":props.isDisabled||void 0},react.createElement($28f4fd908f0de97f$export$1d40e3e0cc4d5de.Provider,{value:state},renderProps.children))}const $28f4fd908f0de97f$export$944aceb4f8c89f10=(0,react.forwardRef)($28f4fd908f0de97f$var$DisclosureGroup),$28f4fd908f0de97f$export$d665dd135a51b28a=(0,react.createContext)(null),$28f4fd908f0de97f$export$dab3ea4a6ef094da=(0,react.createContext)(null),$28f4fd908f0de97f$var$InternalDisclosureContext=(0,react.createContext)(null);function $28f4fd908f0de97f$var$Disclosure(props,ref){[props,ref]=(0,utils.JT)(props,ref,$28f4fd908f0de97f$export$d665dd135a51b28a);let groupState=(0,react.useContext)($28f4fd908f0de97f$export$1d40e3e0cc4d5de),{id,...otherProps}=props,defaultId=(0,useId.Bi)();id||(id=defaultId);let isExpanded=groupState?groupState.expandedKeys.has(id):props.isExpanded,state=$bf996d45f4a36925$export$3fcbf6e4407997e0({...props,isExpanded,onExpandedChange(isExpanded){var _props_onExpandedChange;groupState&&groupState.toggleKey(id),null===(_props_onExpandedChange=props.onExpandedChange)||void 0===_props_onExpandedChange||_props_onExpandedChange.call(props,isExpanded)}}),panelRef=react.useRef(null),isDisabled=props.isDisabled||(null==groupState?void 0:groupState.isDisabled)||!1,{buttonProps,panelProps}=$5e910fae8e128ead$export$6e3e27031a30522f({...props,isExpanded,isDisabled},state,panelRef),{isFocusVisible:isFocusVisibleWithin,focusProps:focusWithinProps}=(0,useFocusRing.o)({within:!0}),renderProps=(0,utils.Sl)({...props,id:void 0,defaultClassName:"react-aria-Disclosure",values:{isExpanded:state.isExpanded,isDisabled,isFocusVisibleWithin,state}}),domProps=(0,filterDOMProps.$)(otherProps);return react.createElement(utils.Kq,{values:[[Button.k,{slots:{[utils.P_]:{},trigger:buttonProps}}],[$28f4fd908f0de97f$var$InternalDisclosureContext,{panelProps,panelRef}],[$28f4fd908f0de97f$export$dab3ea4a6ef094da,state]]},react.createElement("div",{ref,"data-expanded":state.isExpanded||void 0,"data-disabled":isDisabled||void 0,"data-focus-visible-within":isFocusVisibleWithin||void 0,...domProps,...focusWithinProps,...renderProps},renderProps.children))}function $28f4fd908f0de97f$var$DisclosurePanel(props,ref){let{role="group"}=props,{panelProps,panelRef}=(0,react.useContext)($28f4fd908f0de97f$var$InternalDisclosureContext),{isFocusVisible:isFocusVisibleWithin,focusProps:focusWithinProps}=(0,useFocusRing.o)({within:!0}),renderProps=(0,utils.Sl)({...props,defaultClassName:"react-aria-DisclosurePanel",values:{isFocusVisibleWithin}});return react.createElement("div",{ref:(0,mergeRefs.P)(ref,panelRef),...(0,mergeProps.v)(panelProps,focusWithinProps),...renderProps,role,"data-focus-visible-within":isFocusVisibleWithin||void 0},react.createElement(utils.Kq,{values:[[Button.k,null]]},props.children))}const $28f4fd908f0de97f$export$74a362b31437ec83=(0,react.forwardRef)($28f4fd908f0de97f$var$Disclosure),$28f4fd908f0de97f$export$feabaa331e1d464c=(0,react.forwardRef)($28f4fd908f0de97f$var$DisclosurePanel)},"./node_modules/.pnpm/react-aria-components@1.4.1_react-dom@19.0.0-rc-69d4b800-20241021_react@19.0.0-rc-69d4b800-20_lzfgk4i222ma4rx6xt7oeewigi/node_modules/react-aria-components/dist/Heading.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>$5cb03073d3f54797$export$a8a3e93435678ff9});var _RSPContexts_mjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/react-aria-components@1.4.1_react-dom@19.0.0-rc-69d4b800-20241021_react@19.0.0-rc-69d4b800-20_lzfgk4i222ma4rx6xt7oeewigi/node_modules/react-aria-components/dist/RSPContexts.mjs"),_utils_mjs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/react-aria-components@1.4.1_react-dom@19.0.0-rc-69d4b800-20241021_react@19.0.0-rc-69d4b800-20_lzfgk4i222ma4rx6xt7oeewigi/node_modules/react-aria-components/dist/utils.mjs"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@15.0.1_@babel+core@7.26.0_react-dom@19.0.0-rc-69d4b800-20241021_react@19.0.0-rc-69d4b800_czvog4bm5hmxkqeypv6dkprgyq/node_modules/next/dist/compiled/react/index.js");function $5cb03073d3f54797$var$Heading(props,ref){[props,ref]=(0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.JT)(props,ref,_RSPContexts_mjs__WEBPACK_IMPORTED_MODULE_2__.A3);let{children,level=3,className,...domProps}=props,Element=`h${level}`;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Element,{...domProps,ref,className:null!=className?className:"react-aria-Heading"},children)}const $5cb03073d3f54797$export$a8a3e93435678ff9=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)($5cb03073d3f54797$var$Heading)},"./node_modules/.pnpm/react-aria-components@1.4.1_react-dom@19.0.0-rc-69d4b800-20241021_react@19.0.0-rc-69d4b800-20_lzfgk4i222ma4rx6xt7oeewigi/node_modules/react-aria-components/dist/Link.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>$4f118338184dc1d9$export$a6c7ac8248d6e38a,s:()=>$4f118338184dc1d9$export$e2509388b49734e7});var utils=__webpack_require__("./node_modules/.pnpm/react-aria-components@1.4.1_react-dom@19.0.0-rc-69d4b800-20241021_react@19.0.0-rc-69d4b800-20_lzfgk4i222ma4rx6xt7oeewigi/node_modules/react-aria-components/dist/utils.mjs"),filterDOMProps=__webpack_require__("./node_modules/.pnpm/@react-aria+utils@3.25.3_react@19.0.0-rc-69d4b800-20241021/node_modules/@react-aria/utils/dist/filterDOMProps.mjs"),mergeProps=__webpack_require__("./node_modules/.pnpm/@react-aria+utils@3.25.3_react@19.0.0-rc-69d4b800-20241021/node_modules/@react-aria/utils/dist/mergeProps.mjs"),openLink=__webpack_require__("./node_modules/.pnpm/@react-aria+utils@3.25.3_react@19.0.0-rc-69d4b800-20241021/node_modules/@react-aria/utils/dist/openLink.mjs"),useFocusable=__webpack_require__("./node_modules/.pnpm/@react-aria+focus@3.18.4_react@19.0.0-rc-69d4b800-20241021/node_modules/@react-aria/focus/dist/useFocusable.mjs"),usePress=__webpack_require__("./node_modules/.pnpm/@react-aria+interactions@3.22.4_react@19.0.0-rc-69d4b800-20241021/node_modules/@react-aria/interactions/dist/usePress.mjs"),console=__webpack_require__("./node_modules/.pnpm/console-browserify@1.2.0/node_modules/console-browserify/index.js");function $298d61e98472621b$export$dcf14c9974fe2767(props,ref){let{elementType="a",onPress,onPressStart,onPressEnd,onClick:deprecatedOnClick,isDisabled,...otherProps}=props,linkProps={};"a"!==elementType&&(linkProps={role:"link",tabIndex:isDisabled?void 0:0});let{focusableProps}=(0,useFocusable.W)(props,ref),{pressProps,isPressed}=(0,usePress.d)({onPress,onPressStart,onPressEnd,isDisabled,ref}),domProps=(0,filterDOMProps.$)(otherProps,{labelable:!0}),interactionHandlers=(0,mergeProps.v)(focusableProps,pressProps),router=(0,openLink.rd)(),routerLinkProps=(0,openLink._h)(props);return{isPressed,linkProps:(0,mergeProps.v)(domProps,routerLinkProps,{...interactionHandlers,...linkProps,"aria-disabled":isDisabled||void 0,"aria-current":props["aria-current"],onClick:e=>{var _pressProps_onClick;null===(_pressProps_onClick=pressProps.onClick)||void 0===_pressProps_onClick||_pressProps_onClick.call(pressProps,e),deprecatedOnClick&&(deprecatedOnClick(e),console.warn("onClick is deprecated, please use onPress")),!router.isNative&&e.currentTarget instanceof HTMLAnchorElement&&e.currentTarget.href&&!e.isDefaultPrevented()&&(0,openLink.sU)(e.currentTarget,e)&&props.href&&(e.preventDefault(),router.open(e.currentTarget,e,props.href,props.routerOptions))}})}}var useHover=__webpack_require__("./node_modules/.pnpm/@react-aria+interactions@3.22.4_react@19.0.0-rc-69d4b800-20241021/node_modules/@react-aria/interactions/dist/useHover.mjs"),useFocusRing=__webpack_require__("./node_modules/.pnpm/@react-aria+focus@3.18.4_react@19.0.0-rc-69d4b800-20241021/node_modules/@react-aria/focus/dist/useFocusRing.mjs"),react=__webpack_require__("./node_modules/.pnpm/next@15.0.1_@babel+core@7.26.0_react-dom@19.0.0-rc-69d4b800-20241021_react@19.0.0-rc-69d4b800_czvog4bm5hmxkqeypv6dkprgyq/node_modules/next/dist/compiled/react/index.js");const $4f118338184dc1d9$export$e2509388b49734e7=(0,react.createContext)(null);function $4f118338184dc1d9$var$Link(props,ref){[props,ref]=(0,utils.JT)(props,ref,$4f118338184dc1d9$export$e2509388b49734e7);let ElementType=props.href&&!props.isDisabled?"a":"span",{linkProps,isPressed}=$298d61e98472621b$export$dcf14c9974fe2767({...props,elementType:ElementType},ref),{hoverProps,isHovered}=(0,useHover.M)(props),{focusProps,isFocused,isFocusVisible}=(0,useFocusRing.o)(),renderProps=(0,utils.Sl)({...props,defaultClassName:"react-aria-Link",values:{isCurrent:!!props["aria-current"],isDisabled:props.isDisabled||!1,isPressed,isHovered,isFocused,isFocusVisible}});return react.createElement(ElementType,{ref,slot:props.slot||void 0,...(0,mergeProps.v)(renderProps,linkProps,hoverProps,focusProps),"data-focused":isFocused||void 0,"data-hovered":isHovered||void 0,"data-pressed":isPressed||void 0,"data-focus-visible":isFocusVisible||void 0,"data-current":!!props["aria-current"]||void 0,"data-disabled":props.isDisabled||void 0},renderProps.children)}const $4f118338184dc1d9$export$a6c7ac8248d6e38a=(0,react.forwardRef)($4f118338184dc1d9$var$Link)},"./node_modules/.pnpm/react-aria-components@1.4.1_react-dom@19.0.0-rc-69d4b800-20241021_react@19.0.0-rc-69d4b800-20_lzfgk4i222ma4rx6xt7oeewigi/node_modules/react-aria-components/dist/RSPContexts.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A3:()=>$4e85f108e88277b8$export$d688439359537581,BP:()=>$4e85f108e88277b8$export$b085522c77523c51});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@15.0.1_@babel+core@7.26.0_react-dom@19.0.0-rc-69d4b800-20241021_react@19.0.0-rc-69d4b800_czvog4bm5hmxkqeypv6dkprgyq/node_modules/next/dist/compiled/react/index.js");const $4e85f108e88277b8$export$b085522c77523c51=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null),$4e85f108e88277b8$export$d688439359537581=((0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null),(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null),(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null),(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null),(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({}))}}]);