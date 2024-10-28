"use strict";(self.webpackChunkdesign_system=self.webpackChunkdesign_system||[]).push([[9229],{"./node_modules/.pnpm/@react-stately+toggle@3.7.8_react@19.0.0-rc-69d4b800-20241021/node_modules/@react-stately/toggle/dist/useToggleState.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>$3017fa7ffdddec74$export$8042c6c013fd5226});var _react_stately_utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/@react-stately+utils@3.10.4_react@19.0.0-rc-69d4b800-20241021/node_modules/@react-stately/utils/dist/useControlledState.mjs");function $3017fa7ffdddec74$export$8042c6c013fd5226(props={}){let{isReadOnly}=props,[isSelected,setSelected]=(0,_react_stately_utils__WEBPACK_IMPORTED_MODULE_0__.P)(props.isSelected,props.defaultSelected||!1,props.onChange);return{isSelected,setSelected:function updateSelected(value){isReadOnly||setSelected(value)},toggle:function toggleState(){isReadOnly||setSelected(!isSelected)}}}},"./stories/textarea.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BasicExample:()=>BasicExample,WithDescription:()=>WithDescription,WithDescriptionHidden:()=>WithDescriptionHidden,WithDisabled:()=>WithDisabled,WithErrorMessage:()=>WithErrorMessage,WithReadonly:()=>WithReadonly,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@15.0.1_@babel+core@7.26.0_react-dom@19.0.0-rc-69d4b800-20241021_react@19.0.0-rc-69d4b800_czvog4bm5hmxkqeypv6dkprgyq/node_modules/next/dist/compiled/react/jsx-runtime.js"),_components_button__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/button.tsx"),_components_field__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/field.tsx"),_components_form__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/form.tsx"),_storybook_docs__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./.storybook/docs.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Textarea",component:_components_field__WEBPACK_IMPORTED_MODULE_2__.A_,parameters:{layout:"centered",docs:{description:{component:'<a href="https://react-spectrum.adobe.com/react-spectrum/TextArea.html#textarea" target="_blank">`TextAreas`</a> are multiline text inputs, useful for cases where users have a sizable amount of text to enter. They allow for all customizations that are available to text fields.'},..._storybook_docs__WEBPACK_IMPORTED_MODULE_4__.m,controls:{exclude:RegExp(".*","gv")}}},tags:["autodocs"]};function BasicExample(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_field__WEBPACK_IMPORTED_MODULE_2__.A_,{className:"sm:w-80",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_field__WEBPACK_IMPORTED_MODULE_2__.JU,{children:"Bio"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_field__WEBPACK_IMPORTED_MODULE_2__.fs,{placeholder:"Tell us a little bit about yourself"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_field__WEBPACK_IMPORTED_MODULE_2__.bg,{})]})}function WithDescription(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_field__WEBPACK_IMPORTED_MODULE_2__.A_,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_field__WEBPACK_IMPORTED_MODULE_2__.JU,{children:"Bio"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_field__WEBPACK_IMPORTED_MODULE_2__.VY,{children:["You can ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"text-foreground",children:"@mention"})," other users and organizations to link to them."]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_field__WEBPACK_IMPORTED_MODULE_2__.fs,{placeholder:"Tell us a little bit about yourself"})]})}function WithDescriptionHidden(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_field__WEBPACK_IMPORTED_MODULE_2__.A_,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_field__WEBPACK_IMPORTED_MODULE_2__.JU,{children:"Bio"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_field__WEBPACK_IMPORTED_MODULE_2__.fs,{placeholder:"Tell us a little bit about yourself"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_field__WEBPACK_IMPORTED_MODULE_2__.VY,{children:["You can ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"text-foreground",children:"@mention"})," other users and organizations to link to them."]})]})}function WithDisabled(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_field__WEBPACK_IMPORTED_MODULE_2__.A_,{isDisabled:!0,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_field__WEBPACK_IMPORTED_MODULE_2__.JU,{children:"Bio"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_field__WEBPACK_IMPORTED_MODULE_2__.VY,{children:["You can ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"text-foreground",children:"@mention"})," other users and organizations to link to them."]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_field__WEBPACK_IMPORTED_MODULE_2__.fs,{placeholder:"Tell us a little bit about yourself"})]})}function WithReadonly(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_field__WEBPACK_IMPORTED_MODULE_2__.A_,{isReadOnly:!0,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_field__WEBPACK_IMPORTED_MODULE_2__.JU,{children:"Bio"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_field__WEBPACK_IMPORTED_MODULE_2__.VY,{children:["You can ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"text-foreground",children:"@mention"})," other users and organizations to link to them."]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_field__WEBPACK_IMPORTED_MODULE_2__.fs,{placeholder:"Tell us a little bit about yourself"})]})}function WithErrorMessage(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_form__WEBPACK_IMPORTED_MODULE_3__.l,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_field__WEBPACK_IMPORTED_MODULE_2__.A_,{isRequired:!0,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_field__WEBPACK_IMPORTED_MODULE_2__.JU,{children:"Bio"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_field__WEBPACK_IMPORTED_MODULE_2__.VY,{children:["You can ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"text-foreground",children:"@mention"})," other users and organizations to link to them."]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_field__WEBPACK_IMPORTED_MODULE_2__.fs,{placeholder:"Tell us a little bit about yourself"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_field__WEBPACK_IMPORTED_MODULE_2__.bg,{})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_button__WEBPACK_IMPORTED_MODULE_1__.$n,{type:"submit",children:"Submit"})]})}const __namedExportsOrder=["BasicExample","WithDescription","WithDescriptionHidden","WithDisabled","WithReadonly","WithErrorMessage"];BasicExample.parameters={...BasicExample.parameters,docs:{...BasicExample.parameters?.docs,source:{originalSource:'function BasicExample() {\n  return <TextField className="sm:w-80">\n      <Label>Bio</Label>\n      <TextArea placeholder="Tell us a little bit about yourself" />\n      <FieldError />\n    </TextField>;\n}',...BasicExample.parameters?.docs?.source}}},WithDescription.parameters={...WithDescription.parameters,docs:{...WithDescription.parameters?.docs,source:{originalSource:'function WithDescription() {\n  return <TextField>\n      <Label>Bio</Label>\n      <Description>\n        You can <span className="text-foreground">@mention</span> other users\n        and organizations to link to them.\n      </Description>\n      <TextArea placeholder="Tell us a little bit about yourself" />\n    </TextField>;\n}',...WithDescription.parameters?.docs?.source}}},WithDescriptionHidden.parameters={...WithDescriptionHidden.parameters,docs:{...WithDescriptionHidden.parameters?.docs,source:{originalSource:'function WithDescriptionHidden() {\n  return <TextField>\n      <Label>Bio</Label>\n      <TextArea placeholder="Tell us a little bit about yourself" />\n      <Description>\n        You can <span className="text-foreground">@mention</span> other users\n        and organizations to link to them.\n      </Description>\n    </TextField>;\n}',...WithDescriptionHidden.parameters?.docs?.source}}},WithDisabled.parameters={...WithDisabled.parameters,docs:{...WithDisabled.parameters?.docs,source:{originalSource:'function WithDisabled() {\n  return <TextField isDisabled>\n      <Label>Bio</Label>\n      <Description>\n        You can <span className="text-foreground">@mention</span> other users\n        and organizations to link to them.\n      </Description>\n      <TextArea placeholder="Tell us a little bit about yourself" />\n    </TextField>;\n}',...WithDisabled.parameters?.docs?.source}}},WithReadonly.parameters={...WithReadonly.parameters,docs:{...WithReadonly.parameters?.docs,source:{originalSource:'function WithReadonly() {\n  return <TextField isReadOnly>\n      <Label>Bio</Label>\n      <Description>\n        You can <span className="text-foreground">@mention</span> other users\n        and organizations to link to them.\n      </Description>\n      <TextArea placeholder="Tell us a little bit about yourself" />\n    </TextField>;\n}',...WithReadonly.parameters?.docs?.source}}},WithErrorMessage.parameters={...WithErrorMessage.parameters,docs:{...WithErrorMessage.parameters?.docs,source:{originalSource:'function WithErrorMessage() {\n  return <Form>\n      <TextField isRequired>\n        <Label>Bio</Label>\n        <Description>\n          You can <span className="text-foreground">@mention</span> other users\n          and organizations to link to them.\n        </Description>\n        <TextArea placeholder="Tell us a little bit about yourself" />\n        <FieldError />\n      </TextField>\n      <Button type="submit">Submit</Button>\n    </Form>;\n}',...WithErrorMessage.parameters?.docs?.source}}}},"./node_modules/.pnpm/react-aria-components@1.4.1_react-dom@19.0.0-rc-69d4b800-20241021_react@19.0.0-rc-69d4b800-20_lzfgk4i222ma4rx6xt7oeewigi/node_modules/react-aria-components/dist/ToggleButton.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{f:()=>$efde0372d7a700fe$export$d2b052e7b4be1756});var utils=__webpack_require__("./node_modules/.pnpm/react-aria-components@1.4.1_react-dom@19.0.0-rc-69d4b800-20241021_react@19.0.0-rc-69d4b800-20_lzfgk4i222ma4rx6xt7oeewigi/node_modules/react-aria-components/dist/utils.mjs"),useButton=__webpack_require__("./node_modules/.pnpm/@react-aria+button@3.10.1_react@19.0.0-rc-69d4b800-20241021/node_modules/@react-aria/button/dist/useButton.mjs"),chain=__webpack_require__("./node_modules/.pnpm/@react-aria+utils@3.25.3_react@19.0.0-rc-69d4b800-20241021/node_modules/@react-aria/utils/dist/chain.mjs"),mergeProps=__webpack_require__("./node_modules/.pnpm/@react-aria+utils@3.25.3_react@19.0.0-rc-69d4b800-20241021/node_modules/@react-aria/utils/dist/mergeProps.mjs");function $55f54f7887471b58$export$51e84d46ca0bc451(props,state,ref){const{isSelected}=state,{isPressed,buttonProps}=(0,useButton.s)({...props,onPress:(0,chain.c)(state.toggle,props.onPress)},ref);return{isPressed,buttonProps:(0,mergeProps.v)(buttonProps,{"aria-pressed":isSelected})}}var useFocusRing=__webpack_require__("./node_modules/.pnpm/@react-aria+focus@3.18.4_react@19.0.0-rc-69d4b800-20241021/node_modules/@react-aria/focus/dist/useFocusRing.mjs"),useHover=__webpack_require__("./node_modules/.pnpm/@react-aria+interactions@3.22.4_react@19.0.0-rc-69d4b800-20241021/node_modules/@react-aria/interactions/dist/useHover.mjs"),react=__webpack_require__("./node_modules/.pnpm/next@15.0.1_@babel+core@7.26.0_react-dom@19.0.0-rc-69d4b800-20241021_react@19.0.0-rc-69d4b800_czvog4bm5hmxkqeypv6dkprgyq/node_modules/next/dist/compiled/react/index.js"),useToggleState=__webpack_require__("./node_modules/.pnpm/@react-stately+toggle@3.7.8_react@19.0.0-rc-69d4b800-20241021/node_modules/@react-stately/toggle/dist/useToggleState.mjs");const $efde0372d7a700fe$export$43506d75ebd2e218=(0,react.createContext)({});function $efde0372d7a700fe$var$ToggleButton(props,ref){[props,ref]=(0,utils.JT)(props,ref,$efde0372d7a700fe$export$43506d75ebd2e218);let state=(0,useToggleState.H)(props),{buttonProps,isPressed}=$55f54f7887471b58$export$51e84d46ca0bc451(props,state,ref),{focusProps,isFocused,isFocusVisible}=(0,useFocusRing.o)(props),{hoverProps,isHovered}=(0,useHover.M)(props),renderProps=(0,utils.Sl)({...props,values:{isHovered,isPressed,isFocused,isSelected:state.isSelected,isFocusVisible,isDisabled:props.isDisabled||!1,state},defaultClassName:"react-aria-ToggleButton"});return react.createElement("button",{...(0,mergeProps.v)(buttonProps,focusProps,hoverProps),...renderProps,ref,slot:props.slot||void 0,"data-focused":isFocused||void 0,"data-disabled":props.isDisabled||void 0,"data-pressed":isPressed||void 0,"data-selected":state.isSelected||void 0,"data-hovered":isHovered||void 0,"data-focus-visible":isFocusVisible||void 0})}const $efde0372d7a700fe$export$d2b052e7b4be1756=(0,react.forwardRef)($efde0372d7a700fe$var$ToggleButton)}}]);