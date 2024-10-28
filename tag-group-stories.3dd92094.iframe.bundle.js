"use strict";(self.webpackChunkdesign_system=self.webpackChunkdesign_system||[]).push([[1803],{"./node_modules/.pnpm/@internationalized+string@3.2.4/node_modules/@internationalized/string/dist/LocalizedStringDictionary.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B:()=>$5b160d28a433310d$export$c17fa47878dc55b6});const $5b160d28a433310d$var$localeSymbol=Symbol.for("react-aria.i18n.locale"),$5b160d28a433310d$var$stringsSymbol=Symbol.for("react-aria.i18n.strings");let $5b160d28a433310d$var$cachedGlobalStrings;class $5b160d28a433310d$export$c17fa47878dc55b6{getStringForLocale(key,locale){let string=this.getStringsForLocale(locale)[key];if(!string)throw new Error(`Could not find intl message ${key} in ${locale} locale`);return string}getStringsForLocale(locale){let strings=this.strings[locale];return strings||(strings=function $5b160d28a433310d$var$getStringsForLocale(locale,strings,defaultLocale="en-US"){if(strings[locale])return strings[locale];let language=function $5b160d28a433310d$var$getLanguage(locale){return Intl.Locale?new Intl.Locale(locale).language:locale.split("-")[0]}(locale);if(strings[language])return strings[language];for(let key in strings)if(key.startsWith(language+"-"))return strings[key];return strings[defaultLocale]}(locale,this.strings,this.defaultLocale),this.strings[locale]=strings),strings}static getGlobalDictionaryForPackage(packageName){if("undefined"==typeof window)return null;let locale=window[$5b160d28a433310d$var$localeSymbol];if(void 0===$5b160d28a433310d$var$cachedGlobalStrings){let globalStrings=window[$5b160d28a433310d$var$stringsSymbol];if(!globalStrings)return null;$5b160d28a433310d$var$cachedGlobalStrings={};for(let pkg in globalStrings)$5b160d28a433310d$var$cachedGlobalStrings[pkg]=new $5b160d28a433310d$export$c17fa47878dc55b6({[locale]:globalStrings[pkg]},locale)}let dictionary=null==$5b160d28a433310d$var$cachedGlobalStrings?void 0:$5b160d28a433310d$var$cachedGlobalStrings[packageName];if(!dictionary)throw new Error(`Strings for package "${packageName}" were not included by LocalizedStringProvider. Please add it to the list passed to createLocalizedStringDictionary.`);return dictionary}constructor(messages,defaultLocale="en-US"){this.strings=Object.fromEntries(Object.entries(messages).filter((([,v])=>v))),this.defaultLocale=defaultLocale}}},"./node_modules/.pnpm/@internationalized+string@3.2.4/node_modules/@internationalized/string/dist/LocalizedStringFormatter.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>$6db58dc88e78b024$export$2f817fcdc4b89ae0});const $6db58dc88e78b024$var$pluralRulesCache=new Map,$6db58dc88e78b024$var$numberFormatCache=new Map;class $6db58dc88e78b024$export$2f817fcdc4b89ae0{format(key,variables){let message=this.strings.getStringForLocale(key,this.locale);return"function"==typeof message?message(variables,this):message}plural(count,options,type="cardinal"){let opt=options["="+count];if(opt)return"function"==typeof opt?opt():opt;let key=this.locale+":"+type,pluralRules=$6db58dc88e78b024$var$pluralRulesCache.get(key);return pluralRules||(pluralRules=new Intl.PluralRules(this.locale,{type}),$6db58dc88e78b024$var$pluralRulesCache.set(key,pluralRules)),opt=options[pluralRules.select(count)]||options.other,"function"==typeof opt?opt():opt}number(value){let numberFormat=$6db58dc88e78b024$var$numberFormatCache.get(this.locale);return numberFormat||(numberFormat=new Intl.NumberFormat(this.locale),$6db58dc88e78b024$var$numberFormatCache.set(this.locale,numberFormat)),numberFormat.format(value)}select(options,value){let opt=options[value]||options.other;return"function"==typeof opt?opt():opt}constructor(locale,strings){this.locale=locale,this.strings=strings}}},"./node_modules/.pnpm/@react-aria+i18n@3.12.3_react@19.0.0-rc-69d4b800-20241021/node_modules/@react-aria/i18n/dist/useLocalizedStringFormatter.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e:()=>$fca6afa0e843324b$export$87b761675e8eaa10,o:()=>$fca6afa0e843324b$export$f12b703ca79dfbb1});var _context_mjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/@react-aria+i18n@3.12.3_react@19.0.0-rc-69d4b800-20241021/node_modules/@react-aria/i18n/dist/context.mjs"),_internationalized_string__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@internationalized+string@3.2.4/node_modules/@internationalized/string/dist/LocalizedStringDictionary.mjs"),_internationalized_string__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/.pnpm/@internationalized+string@3.2.4/node_modules/@internationalized/string/dist/LocalizedStringFormatter.mjs"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@15.0.1_@babel+core@7.26.0_react-dom@19.0.0-rc-69d4b800-20241021_react@19.0.0-rc-69d4b800_czvog4bm5hmxkqeypv6dkprgyq/node_modules/next/dist/compiled/react/index.js");const $fca6afa0e843324b$var$cache=new WeakMap;function $fca6afa0e843324b$export$87b761675e8eaa10(strings,packageName){return packageName&&_internationalized_string__WEBPACK_IMPORTED_MODULE_1__.B.getGlobalDictionaryForPackage(packageName)||function $fca6afa0e843324b$var$getCachedDictionary(strings){let dictionary=$fca6afa0e843324b$var$cache.get(strings);return dictionary||(dictionary=new(0,_internationalized_string__WEBPACK_IMPORTED_MODULE_1__.B)(strings),$fca6afa0e843324b$var$cache.set(strings,dictionary)),dictionary}(strings)}function $fca6afa0e843324b$export$f12b703ca79dfbb1(strings,packageName){let{locale}=(0,_context_mjs__WEBPACK_IMPORTED_MODULE_2__.Y)(),dictionary=$fca6afa0e843324b$export$87b761675e8eaa10(strings,packageName);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>new(0,_internationalized_string__WEBPACK_IMPORTED_MODULE_3__.J)(locale,dictionary)),[locale,dictionary])}},"./node_modules/.pnpm/@react-aria+utils@3.25.3_react@19.0.0-rc-69d4b800-20241021/node_modules/@react-aria/utils/dist/getScrollParent.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{m:()=>$62d8ded9296f3872$export$cfa2225e87938781});var _isScrollable_mjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/@react-aria+utils@3.25.3_react@19.0.0-rc-69d4b800-20241021/node_modules/@react-aria/utils/dist/isScrollable.mjs");function $62d8ded9296f3872$export$cfa2225e87938781(node,checkForOverflow){let scrollableNode=node;for((0,_isScrollable_mjs__WEBPACK_IMPORTED_MODULE_0__.o)(scrollableNode,checkForOverflow)&&(scrollableNode=scrollableNode.parentElement);scrollableNode&&!(0,_isScrollable_mjs__WEBPACK_IMPORTED_MODULE_0__.o)(scrollableNode,checkForOverflow);)scrollableNode=scrollableNode.parentElement;return scrollableNode||document.scrollingElement||document.documentElement}},"./stories/tag-group.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BasicExample:()=>BasicExample,Destructive:()=>Destructive,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@15.0.1_@babel+core@7.26.0_react-dom@19.0.0-rc-69d4b800-20241021_react@19.0.0-rc-69d4b800_czvog4bm5hmxkqeypv6dkprgyq/node_modules/next/dist/compiled/react/jsx-runtime.js"),_components_field__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/field.tsx"),_components_tag_group__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/tag-group.tsx"),_storybook_docs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./.storybook/docs.ts");const __WEBPACK_DEFAULT_EXPORT__={component:_components_tag_group__WEBPACK_IMPORTED_MODULE_2__.CR,title:"Components/Tag group",parameters:{layout:"centered",docs:{description:{component:'A <a href="https://react-spectrum.adobe.com/react-aria/Button.html" target="_blank">`button`</a> allows a user to perform an action, with mouse, touch, and keyboard interactions.'},..._storybook_docs__WEBPACK_IMPORTED_MODULE_3__.m,controls:{exclude:RegExp(".*","gv")}}},tags:["autodocs"]};function BasicExample(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_tag_group__WEBPACK_IMPORTED_MODULE_2__.CR,{...args,defaultSelectedKeys:["strawberry"],selectionMode:"single",onRemove:()=>{},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_field__WEBPACK_IMPORTED_MODULE_1__.JU,{children:"Ice cream flavor"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_tag_group__WEBPACK_IMPORTED_MODULE_2__.LY,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_tag_group__WEBPACK_IMPORTED_MODULE_2__.vw,{isDisabled:!0,id:"chocolate",children:"Chocolate"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_tag_group__WEBPACK_IMPORTED_MODULE_2__.vw,{id:"mint",children:"Mint"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_tag_group__WEBPACK_IMPORTED_MODULE_2__.vw,{id:"strawberry",children:"Strawberry"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_tag_group__WEBPACK_IMPORTED_MODULE_2__.vw,{id:"vanilla",children:"Vanilla"})]})]})}function Destructive(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_tag_group__WEBPACK_IMPORTED_MODULE_2__.CR,{color:"destructive",...args,defaultSelectedKeys:["strawberry"],selectionMode:"single",onRemove:()=>{},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_field__WEBPACK_IMPORTED_MODULE_1__.JU,{children:"Ice cream flavor"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_tag_group__WEBPACK_IMPORTED_MODULE_2__.LY,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_tag_group__WEBPACK_IMPORTED_MODULE_2__.vw,{isDisabled:!0,id:"chocolate",children:"Chocolate"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_tag_group__WEBPACK_IMPORTED_MODULE_2__.vw,{id:"mint",children:"Mint"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_tag_group__WEBPACK_IMPORTED_MODULE_2__.vw,{id:"strawberry",children:"Strawberry"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_tag_group__WEBPACK_IMPORTED_MODULE_2__.vw,{id:"vanilla",children:"Vanilla"})]})]})}const __namedExportsOrder=["BasicExample","Destructive"];BasicExample.parameters={...BasicExample.parameters,docs:{...BasicExample.parameters?.docs,source:{originalSource:'function BasicExample(args: object) {\n  return <TagGroup {...args} defaultSelectedKeys={["strawberry"]} selectionMode="single" onRemove={() => {\n    //\n  }}>\n      <Label>Ice cream flavor</Label>\n      <TagList>\n        <Tag isDisabled id="chocolate">\n          Chocolate\n        </Tag>\n        <Tag id="mint">Mint</Tag>\n        <Tag id="strawberry">Strawberry</Tag>\n        <Tag id="vanilla">Vanilla</Tag>\n      </TagList>\n    </TagGroup>;\n}',...BasicExample.parameters?.docs?.source}}},Destructive.parameters={...Destructive.parameters,docs:{...Destructive.parameters?.docs,source:{originalSource:'function Destructive(args: object) {\n  return <TagGroup color="destructive" {...args} defaultSelectedKeys={["strawberry"]} selectionMode="single" onRemove={() => {\n    //\n  }}>\n      <Label>Ice cream flavor</Label>\n      <TagList>\n        <Tag isDisabled id="chocolate">\n          Chocolate\n        </Tag>\n        <Tag id="mint">Mint</Tag>\n        <Tag id="strawberry">Strawberry</Tag>\n        <Tag id="vanilla">Vanilla</Tag>\n      </TagList>\n    </TagGroup>;\n}',...Destructive.parameters?.docs?.source}}}},"./src/components/field.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A_:()=>TextField,HM:()=>LabeledGroup,JU:()=>Label,OK:()=>DescriptionProvider,VY:()=>Description,bg:()=>FieldError,fs:()=>TextArea,gN:()=>DescriptionContext,pd:()=>Input});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@15.0.1_@babel+core@7.26.0_react-dom@19.0.0-rc-69d4b800-20241021_react@19.0.0-rc-69d4b800_czvog4bm5hmxkqeypv6dkprgyq/node_modules/next/dist/compiled/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/next@15.0.1_@babel+core@7.26.0_react-dom@19.0.0-rc-69d4b800-20241021_react@19.0.0-rc-69d4b800_czvog4bm5hmxkqeypv6dkprgyq/node_modules/next/dist/compiled/react/index.js"),react_aria_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/.pnpm/react-aria-components@1.4.1_react-dom@19.0.0-rc-69d4b800-20241021_react@19.0.0-rc-69d4b800-20_lzfgk4i222ma4rx6xt7oeewigi/node_modules/react-aria-components/dist/Label.mjs"),react_aria_components__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/.pnpm/react-aria-components@1.4.1_react-dom@19.0.0-rc-69d4b800-20241021_react@19.0.0-rc-69d4b800-20_lzfgk4i222ma4rx6xt7oeewigi/node_modules/react-aria-components/dist/Group.mjs"),react_aria_components__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/.pnpm/react-aria-components@1.4.1_react-dom@19.0.0-rc-69d4b800-20241021_react@19.0.0-rc-69d4b800-20_lzfgk4i222ma4rx6xt7oeewigi/node_modules/react-aria-components/dist/Text.mjs"),react_aria_components__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/.pnpm/react-aria-components@1.4.1_react-dom@19.0.0-rc-69d4b800-20241021_react@19.0.0-rc-69d4b800-20_lzfgk4i222ma4rx6xt7oeewigi/node_modules/react-aria-components/dist/TextField.mjs"),react_aria_components__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/.pnpm/react-aria-components@1.4.1_react-dom@19.0.0-rc-69d4b800-20241021_react@19.0.0-rc-69d4b800-20_lzfgk4i222ma4rx6xt7oeewigi/node_modules/react-aria-components/dist/FieldError.mjs"),react_aria_components__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/.pnpm/react-aria-components@1.4.1_react-dom@19.0.0-rc-69d4b800-20241021_react@19.0.0-rc-69d4b800-20_lzfgk4i222ma4rx6xt7oeewigi/node_modules/react-aria-components/dist/Input.mjs"),react_aria_components__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./node_modules/.pnpm/react-aria-components@1.4.1_react-dom@19.0.0-rc-69d4b800-20241021_react@19.0.0-rc-69d4b800-20_lzfgk4i222ma4rx6xt7oeewigi/node_modules/react-aria-components/dist/TextArea.mjs"),tailwind_merge__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/.pnpm/tailwind-merge@2.5.4/node_modules/tailwind-merge/dist/bundle-mjs.mjs"),_text__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/text.tsx"),_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/utils.ts");function LabeledGroup({className,children}){const labelId=react__WEBPACK_IMPORTED_MODULE_1__.useId();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_aria_components__WEBPACK_IMPORTED_MODULE_4__.I.Provider,{value:{id:labelId,elementType:"span"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_aria_components__WEBPACK_IMPORTED_MODULE_5__.t.Provider,{value:{"aria-labelledby":labelId},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_6__.QP)(["[&>[data-ui=label]:first-of-type:not([class*=mb])]:mb-2"],className),children})})})}function Label({requiredHint,displayLevel=3,...props}){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_aria_components__WEBPACK_IMPORTED_MODULE_4__.J,{...props,"data-ui":"label",className:(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_6__.QP)("inline-block min-w-max text-pretty","group-disabled:opacity-50",_utils__WEBPACK_IMPORTED_MODULE_3__.Qo[displayLevel],requiredHint&&"after:ms-0.5 after:text-destructive after:content-['*']",props.className)})}const DescriptionContext=react__WEBPACK_IMPORTED_MODULE_1__.createContext(null);function DescriptionProvider({children}){const descriptionId=react__WEBPACK_IMPORTED_MODULE_1__.useId(),[isDescriptionRendered,setIsDescriptionRendered]=react__WEBPACK_IMPORTED_MODULE_1__.useState(!0);return react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect((()=>{document.getElementById(descriptionId)||setIsDescriptionRendered(!1)}),[descriptionId]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(DescriptionContext.Provider,{value:{"aria-describedby":isDescriptionRendered?descriptionId:void 0},children})}function Description({className,...props}){var _React_useContext;const describedby=null===(_React_useContext=react__WEBPACK_IMPORTED_MODULE_1__.useContext(DescriptionContext))||void 0===_React_useContext?void 0:_React_useContext["aria-describedby"];return describedby?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_text__WEBPACK_IMPORTED_MODULE_2__.EY,{...props,id:describedby,"data-ui":"description",className:(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_6__.QP)("block group-disabled:opacity-50",className)}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_aria_components__WEBPACK_IMPORTED_MODULE_7__.E,{...props,"data-ui":"description",slot:"description",className:(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_6__.QP)("block text-pretty text-base/6 text-muted sm:text-sm/6","group-disabled:opacity-50",className)})}function TextField(props){const{className}=props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_aria_components__WEBPACK_IMPORTED_MODULE_8__.A,{...props,"data-ui":"text-field",className:(0,_utils__WEBPACK_IMPORTED_MODULE_3__.p7)(className,_utils__WEBPACK_IMPORTED_MODULE_3__._T)})}function FieldError(props){const{className}=props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_aria_components__WEBPACK_IMPORTED_MODULE_9__.b,{...props,"data-ui":"errorMessage",className:(0,_utils__WEBPACK_IMPORTED_MODULE_3__.p7)(className,"block text-base/6 text-destructive sm:text-sm/6")})}const Input=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(((props,ref)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_aria_components__WEBPACK_IMPORTED_MODULE_10__.p,{...props,ref,className:(0,_utils__WEBPACK_IMPORTED_MODULE_3__.p7)(props.className,["w-full rounded-lg border bg-inherit shadow-sm outline-none","px-2.5 py-[calc(theme(spacing[2.5])-1px)] sm:py-[calc(theme(spacing[1.5])-1px)]","text-base/6 placeholder:text-muted sm:text-sm/6","invalid:border-destructive","disabled:opacity-50",_utils__WEBPACK_IMPORTED_MODULE_3__.Ms])})));function TextArea(props){const{className}=props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_aria_components__WEBPACK_IMPORTED_MODULE_11__.f,{...props,className:(0,_utils__WEBPACK_IMPORTED_MODULE_3__.p7)(className,["w-full rounded-lg border bg-inherit px-2.5 py-1 outline-none","text-base/6 placeholder:text-muted sm:text-sm/6 ","disabled:opacity-50","invalid:border-destructive",_utils__WEBPACK_IMPORTED_MODULE_3__.Ms])})}Input.displayName="Input",LabeledGroup.__docgenInfo={description:"",methods:[],displayName:"LabeledGroup",props:{className:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}},Label.__docgenInfo={description:"",methods:[],displayName:"Label",props:{requiredHint:{required:!1,tsType:{name:"boolean"},description:""},displayLevel:{required:!1,tsType:{name:"union",raw:"keyof typeof displayLevels",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"}]},description:"",defaultValue:{value:"3",computed:!1}}}},DescriptionProvider.__docgenInfo={description:"",methods:[],displayName:"DescriptionProvider",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}},Description.__docgenInfo={description:'Aria will auto associate <AriaText slot="description"/> with TextField/NumberField/RadioGroup/CheckboxGroup/DatePicker etc,\nbut not for Switch/Checkbox/Radio and our custom components. We use follow pattern to associate description for\nSwitch/Checkbox/Radio https://react-spectrum.adobe.com/react-aria/Switch.html#advanced-customization',methods:[],displayName:"Description"},TextField.__docgenInfo={description:"",methods:[],displayName:"TextField"},FieldError.__docgenInfo={description:"",methods:[],displayName:"FieldError"},Input.__docgenInfo={description:"",methods:[],displayName:"Input"},TextArea.__docgenInfo={description:"",methods:[],displayName:"TextArea"}},"./src/components/link.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>Link});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@15.0.1_@babel+core@7.26.0_react-dom@19.0.0-rc-69d4b800-20241021_react@19.0.0-rc-69d4b800_czvog4bm5hmxkqeypv6dkprgyq/node_modules/next/dist/compiled/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/next@15.0.1_@babel+core@7.26.0_react-dom@19.0.0-rc-69d4b800-20241021_react@19.0.0-rc-69d4b800_czvog4bm5hmxkqeypv6dkprgyq/node_modules/next/dist/compiled/react/index.js"),react_aria_components__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/.pnpm/react-aria-components@1.4.1_react-dom@19.0.0-rc-69d4b800-20241021_react@19.0.0-rc-69d4b800-20_lzfgk4i222ma4rx6xt7oeewigi/node_modules/react-aria-components/dist/Link.mjs"),tailwind_merge__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/.pnpm/tailwind-merge@2.5.4/node_modules/tailwind-merge/dist/bundle-mjs.mjs"),_slot__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/slot.tsx"),_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/utils.ts");const linkStyle=["relative inline-flex cursor-pointer items-center gap-1 rounded-lg outline-none hover:underline","text-base/6 sm:text-sm/6","disabled:no-underline disabled:opacity-50 disabled:cursor-default","[&.border]:hover:no-underline"].join(" "),Link=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(((props,ref)=>{const{asChild:isAsChild,...rest}=props;return isAsChild?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_slot__WEBPACK_IMPORTED_MODULE_2__.D,{className:(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_4__.QP)(linkStyle),children:props.children}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_aria_components__WEBPACK_IMPORTED_MODULE_5__.N,{...rest,ref,className:(0,_utils__WEBPACK_IMPORTED_MODULE_3__.p7)(props.className,[linkStyle,_utils__WEBPACK_IMPORTED_MODULE_3__.s$])})}));Link.displayName="Link",Link.__docgenInfo={description:"",methods:[],displayName:"Link"}},"./src/components/tag-group.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{CR:()=>TagGroup,LY:()=>TagList,vw:()=>Tag});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@15.0.1_@babel+core@7.26.0_react-dom@19.0.0-rc-69d4b800-20241021_react@19.0.0-rc-69d4b800_czvog4bm5hmxkqeypv6dkprgyq/node_modules/next/dist/compiled/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/next@15.0.1_@babel+core@7.26.0_react-dom@19.0.0-rc-69d4b800-20241021_react@19.0.0-rc-69d4b800_czvog4bm5hmxkqeypv6dkprgyq/node_modules/next/dist/compiled/react/index.js"),react_aria_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/.pnpm/react-aria-components@1.4.1_react-dom@19.0.0-rc-69d4b800-20241021_react@19.0.0-rc-69d4b800-20_lzfgk4i222ma4rx6xt7oeewigi/node_modules/react-aria-components/dist/TagGroup.mjs"),react_aria_components__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/.pnpm/react-aria-components@1.4.1_react-dom@19.0.0-rc-69d4b800-20241021_react@19.0.0-rc-69d4b800-20_lzfgk4i222ma4rx6xt7oeewigi/node_modules/react-aria-components/dist/Button.mjs"),tailwind_merge__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/.pnpm/tailwind-merge@2.5.4/node_modules/tailwind-merge/dist/bundle-mjs.mjs"),_icons__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/icons.tsx"),_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/utils.ts");const colors={default:["selected:border-accent","selected:bg-accent","selected:text-white","selected:outline-0"],success:["bg-success/10","border-success1","","","selected:bg-success","selected:border-success","selected:","selected:text-white"],warning:["bg-warning/10","border-warning1","","","selected:bg-warning","selected:border-warning","selected:","selected:text-white"],destructive:["bg-destructive/10","border-destructive1","","","selected:bg-destructive","selected:border-destructive","selected:","selected:text-white"]},ColorContext=react__WEBPACK_IMPORTED_MODULE_1__.createContext("default");function TagGroup({children,...props}){var _props_color;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_aria_components__WEBPACK_IMPORTED_MODULE_4__.CR,{...props,className:(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_5__.QP)("flex flex-col gap-1",props.className),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ColorContext.Provider,{value:null!==(_props_color=props.color)&&void 0!==_props_color?_props_color:"default",children})})}function TagList(props){const{className}=props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_aria_components__WEBPACK_IMPORTED_MODULE_4__.LY,{...props,className:(0,_utils__WEBPACK_IMPORTED_MODULE_3__.p7)(className,"flex flex-wrap gap-1")})}function Tag({children,color,...props}){const textValue="string"==typeof children?children:void 0,groupColor=react__WEBPACK_IMPORTED_MODULE_1__.useContext(ColorContext);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_aria_components__WEBPACK_IMPORTED_MODULE_4__.vw,{textValue,...props,className:(0,_utils__WEBPACK_IMPORTED_MODULE_3__.p7)(props.className,["flex max-w-fit cursor-default items-center gap-1 rounded-md border px-1 py-0.5 text-xs transition",colors[null!=color?color:groupColor],_utils__WEBPACK_IMPORTED_MODULE_3__.s$,"focus-visible:outline-offset-1","disabled:opacity-50"]),children:({allowsRemoving})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[children,allowsRemoving&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_aria_components__WEBPACK_IMPORTED_MODULE_6__.$,{slot:"remove",className:(0,_utils__WEBPACK_IMPORTED_MODULE_3__.p7)("",["flex cursor-default items-center justify-center rounded-full p-0.5 outline-0 transition-[background-color] hover:bg-black/10 pressed:bg-black/20",_utils__WEBPACK_IMPORTED_MODULE_3__.s$]),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_icons__WEBPACK_IMPORTED_MODULE_2__.uv,{className:"size-3"})})]})})}TagGroup.__docgenInfo={description:"",methods:[],displayName:"TagGroup",props:{color:{required:!1,tsType:{name:"union",raw:"keyof typeof colors",elements:[{name:"literal",value:"default"},{name:"literal",value:"success"},{name:"literal",value:"warning"},{name:"literal",value:"destructive"}]},description:""}}},TagList.__docgenInfo={description:"",methods:[],displayName:"TagList"},Tag.__docgenInfo={description:"",methods:[],displayName:"Tag",props:{color:{required:!1,tsType:{name:"union",raw:"keyof typeof colors",elements:[{name:"literal",value:"default"},{name:"literal",value:"success"},{name:"literal",value:"warning"},{name:"literal",value:"destructive"}]},description:""}}}},"./src/components/text.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{EY:()=>Text,OH:()=>Strong,Oc:()=>Small,Yq:()=>TextLink});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@15.0.1_@babel+core@7.26.0_react-dom@19.0.0-rc-69d4b800-20241021_react@19.0.0-rc-69d4b800_czvog4bm5hmxkqeypv6dkprgyq/node_modules/next/dist/compiled/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/next@15.0.1_@babel+core@7.26.0_react-dom@19.0.0-rc-69d4b800-20241021_react@19.0.0-rc-69d4b800_czvog4bm5hmxkqeypv6dkprgyq/node_modules/next/dist/compiled/react/index.js"),tailwind_merge__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/.pnpm/tailwind-merge@2.5.4/node_modules/tailwind-merge/dist/bundle-mjs.mjs"),_link__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/link.tsx"),_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/utils.ts");function Text({className,elementType,children,...props}){return react__WEBPACK_IMPORTED_MODULE_1__.createElement(null!=elementType?elementType:"p",{...props,className:(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_4__.QP)("text-pretty text-base/6 text-muted sm:text-sm/6",className)},children)}function Strong({className,...props}){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Text,{...props,elementType:"strong",className:(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_4__.QP)("font-medium text-foreground",className)})}function Small({className,...props}){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Text,{...props,elementType:"small",className:(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_4__.QP)("text-sm sm:text-xs",className)})}function TextLink(props){const{className}=props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_link__WEBPACK_IMPORTED_MODULE_2__.N,{...props,className:(0,_utils__WEBPACK_IMPORTED_MODULE_3__.p7)(className,"underline underline-offset-4")})}Text.__docgenInfo={description:"",methods:[],displayName:"Text"},Strong.__docgenInfo={description:"",methods:[],displayName:"Strong"},Small.__docgenInfo={description:"",methods:[],displayName:"Small"},TextLink.__docgenInfo={description:"",methods:[],displayName:"TextLink"}}}]);