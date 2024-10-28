"use strict";(self.webpackChunkdesign_system=self.webpackChunkdesign_system||[]).push([[7416],{"./node_modules/.pnpm/@react-aria+overlays@3.23.4_react-dom@19.0.0-rc-69d4b800-20241021_react@19.0.0-rc-69d4b800-20_thir4y2lkvdh5hhvbx3rmlir2q/node_modules/@react-aria/overlays/dist/useCloseOnScroll.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>$dd149f63282afbbf$export$f6211563215e3b37,o:()=>$dd149f63282afbbf$export$18fc8428861184da});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@15.0.1_@babel+core@7.26.0_react-dom@19.0.0-rc-69d4b800-20241021_react@19.0.0-rc-69d4b800_czvog4bm5hmxkqeypv6dkprgyq/node_modules/next/dist/compiled/react/index.js");const $dd149f63282afbbf$export$f6211563215e3b37=new WeakMap;function $dd149f63282afbbf$export$18fc8428861184da(opts){let{triggerRef,isOpen,onClose}=opts;(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{if(!isOpen||null===onClose)return;let onScroll=e=>{let target=e.target;if(!triggerRef.current||target instanceof Node&&!target.contains(triggerRef.current))return;if(e.target instanceof HTMLInputElement||e.target instanceof HTMLTextAreaElement)return;let onCloseHandler=onClose||$dd149f63282afbbf$export$f6211563215e3b37.get(triggerRef.current);onCloseHandler&&onCloseHandler()};return window.addEventListener("scroll",onScroll,!0),()=>{window.removeEventListener("scroll",onScroll,!0)}}),[isOpen,onClose,triggerRef])}},"./node_modules/.pnpm/@react-aria+overlays@3.23.4_react-dom@19.0.0-rc-69d4b800-20241021_react@19.0.0-rc-69d4b800-20_thir4y2lkvdh5hhvbx3rmlir2q/node_modules/@react-aria/overlays/dist/useOverlayPosition.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{v:()=>$2a41e45df1593e64$export$d39e1813b3bdd0e1});var platform=__webpack_require__("./node_modules/.pnpm/@react-aria+utils@3.25.3_react@19.0.0-rc-69d4b800-20241021/node_modules/@react-aria/utils/dist/platform.mjs"),number=__webpack_require__("./node_modules/.pnpm/@react-stately+utils@3.10.4_react@19.0.0-rc-69d4b800-20241021/node_modules/@react-stately/utils/dist/number.mjs");const $edcf132a9284368a$var$AXIS={top:"top",bottom:"top",left:"left",right:"left"},$edcf132a9284368a$var$FLIPPED_DIRECTION={top:"bottom",bottom:"top",left:"right",right:"left"},$edcf132a9284368a$var$CROSS_AXIS={top:"left",left:"top"},$edcf132a9284368a$var$AXIS_SIZE={top:"height",left:"width"},$edcf132a9284368a$var$TOTAL_SIZE={width:"totalWidth",height:"totalHeight"},$edcf132a9284368a$var$PARSED_PLACEMENT_CACHE={};let $edcf132a9284368a$var$visualViewport="undefined"!=typeof document&&window.visualViewport;function $edcf132a9284368a$var$getContainerDimensions(containerNode){let width=0,height=0,totalWidth=0,totalHeight=0,top=0,left=0,scroll={},isPinchZoomedIn=(null==$edcf132a9284368a$var$visualViewport?void 0:$edcf132a9284368a$var$visualViewport.scale)>1;if("BODY"===containerNode.tagName){let documentElement=document.documentElement;var _visualViewport_width,_visualViewport_height;totalWidth=documentElement.clientWidth,totalHeight=documentElement.clientHeight,width=null!==(_visualViewport_width=null==$edcf132a9284368a$var$visualViewport?void 0:$edcf132a9284368a$var$visualViewport.width)&&void 0!==_visualViewport_width?_visualViewport_width:totalWidth,height=null!==(_visualViewport_height=null==$edcf132a9284368a$var$visualViewport?void 0:$edcf132a9284368a$var$visualViewport.height)&&void 0!==_visualViewport_height?_visualViewport_height:totalHeight,scroll.top=documentElement.scrollTop||containerNode.scrollTop,scroll.left=documentElement.scrollLeft||containerNode.scrollLeft,$edcf132a9284368a$var$visualViewport&&(top=$edcf132a9284368a$var$visualViewport.offsetTop,left=$edcf132a9284368a$var$visualViewport.offsetLeft)}else({width,height,top,left}=$edcf132a9284368a$var$getOffset(containerNode)),scroll.top=containerNode.scrollTop,scroll.left=containerNode.scrollLeft,totalWidth=width,totalHeight=height;return(0,platform.Tc)()&&("BODY"===containerNode.tagName||"HTML"===containerNode.tagName)&&isPinchZoomedIn&&(scroll.top=0,scroll.left=0,top=$edcf132a9284368a$var$visualViewport.pageTop,left=$edcf132a9284368a$var$visualViewport.pageLeft),{width,height,totalWidth,totalHeight,scroll,top,left}}function $edcf132a9284368a$var$getDelta(axis,offset,size,boundaryDimensions,containerDimensions,padding,containerOffsetWithBoundary){let containerScroll=containerDimensions.scroll[axis],boundarySize=boundaryDimensions[$edcf132a9284368a$var$AXIS_SIZE[axis]],boundaryStartEdge=boundaryDimensions.scroll[$edcf132a9284368a$var$AXIS[axis]]+padding,boundaryEndEdge=boundarySize+boundaryDimensions.scroll[$edcf132a9284368a$var$AXIS[axis]]-padding,startEdgeOffset=offset-containerScroll+containerOffsetWithBoundary[axis]-boundaryDimensions[$edcf132a9284368a$var$AXIS[axis]],endEdgeOffset=offset-containerScroll+size+containerOffsetWithBoundary[axis]-boundaryDimensions[$edcf132a9284368a$var$AXIS[axis]];return startEdgeOffset<boundaryStartEdge?boundaryStartEdge-startEdgeOffset:endEdgeOffset>boundaryEndEdge?Math.max(boundaryEndEdge-endEdgeOffset,boundaryStartEdge-startEdgeOffset):0}function $edcf132a9284368a$var$parsePlacement(input){if($edcf132a9284368a$var$PARSED_PLACEMENT_CACHE[input])return $edcf132a9284368a$var$PARSED_PLACEMENT_CACHE[input];let[placement,crossPlacement]=input.split(" "),axis=$edcf132a9284368a$var$AXIS[placement]||"right",crossAxis=$edcf132a9284368a$var$CROSS_AXIS[axis];$edcf132a9284368a$var$AXIS[crossPlacement]||(crossPlacement="center");let size=$edcf132a9284368a$var$AXIS_SIZE[axis],crossSize=$edcf132a9284368a$var$AXIS_SIZE[crossAxis];return $edcf132a9284368a$var$PARSED_PLACEMENT_CACHE[input]={placement,crossPlacement,axis,crossAxis,size,crossSize},$edcf132a9284368a$var$PARSED_PLACEMENT_CACHE[input]}function $edcf132a9284368a$var$computePosition(childOffset,boundaryDimensions,overlaySize,placementInfo,offset,crossOffset,containerOffsetWithBoundary,isContainerPositioned,arrowSize,arrowBoundaryOffset){let{placement,crossPlacement,axis,crossAxis,size,crossSize}=placementInfo,position={};position[crossAxis]=childOffset[crossAxis],"center"===crossPlacement?position[crossAxis]+=(childOffset[crossSize]-overlaySize[crossSize])/2:crossPlacement!==crossAxis&&(position[crossAxis]+=childOffset[crossSize]-overlaySize[crossSize]),position[crossAxis]+=crossOffset;const minPosition=childOffset[crossAxis]-overlaySize[crossSize]+arrowSize+arrowBoundaryOffset,maxPosition=childOffset[crossAxis]+childOffset[crossSize]-arrowSize-arrowBoundaryOffset;if(position[crossAxis]=(0,number.qE)(position[crossAxis],minPosition,maxPosition),placement===axis){const containerHeight=isContainerPositioned?containerOffsetWithBoundary[size]:boundaryDimensions[$edcf132a9284368a$var$TOTAL_SIZE[size]];position[$edcf132a9284368a$var$FLIPPED_DIRECTION[axis]]=Math.floor(containerHeight-childOffset[axis]+offset)}else position[axis]=Math.floor(childOffset[axis]+childOffset[size]+offset);return position}function $edcf132a9284368a$var$getAvailableSpace(boundaryDimensions,containerOffsetWithBoundary,childOffset,margins,padding,placementInfo){let{placement,axis,size}=placementInfo;return placement===axis?Math.max(0,childOffset[axis]-boundaryDimensions[axis]-boundaryDimensions.scroll[axis]+containerOffsetWithBoundary[axis]-margins[axis]-margins[$edcf132a9284368a$var$FLIPPED_DIRECTION[axis]]-padding):Math.max(0,boundaryDimensions[size]+boundaryDimensions[axis]+boundaryDimensions.scroll[axis]-containerOffsetWithBoundary[axis]-childOffset[axis]-childOffset[size]-margins[axis]-margins[$edcf132a9284368a$var$FLIPPED_DIRECTION[axis]]-padding)}function $edcf132a9284368a$export$6839422d1f33cee9(placementInput,childOffset,overlaySize,scrollSize,margins,padding,flip,boundaryDimensions,containerDimensions,containerOffsetWithBoundary,offset,crossOffset,isContainerPositioned,userSetMaxHeight,arrowSize,arrowBoundaryOffset){let placementInfo=$edcf132a9284368a$var$parsePlacement(placementInput),{size,crossAxis,crossSize,placement,crossPlacement}=placementInfo,position=$edcf132a9284368a$var$computePosition(childOffset,boundaryDimensions,overlaySize,placementInfo,offset,crossOffset,containerOffsetWithBoundary,isContainerPositioned,arrowSize,arrowBoundaryOffset),normalizedOffset=offset,space=$edcf132a9284368a$var$getAvailableSpace(boundaryDimensions,containerOffsetWithBoundary,childOffset,margins,padding+offset,placementInfo);if(flip&&scrollSize[size]>space){let flippedPlacementInfo=$edcf132a9284368a$var$parsePlacement(`${$edcf132a9284368a$var$FLIPPED_DIRECTION[placement]} ${crossPlacement}`),flippedPosition=$edcf132a9284368a$var$computePosition(childOffset,boundaryDimensions,overlaySize,flippedPlacementInfo,offset,crossOffset,containerOffsetWithBoundary,isContainerPositioned,arrowSize,arrowBoundaryOffset);$edcf132a9284368a$var$getAvailableSpace(boundaryDimensions,containerOffsetWithBoundary,childOffset,margins,padding+offset,flippedPlacementInfo)>space&&(placementInfo=flippedPlacementInfo,position=flippedPosition,normalizedOffset=offset)}let heightGrowthDirection="bottom";"top"===placementInfo.axis?"top"===placementInfo.placement?heightGrowthDirection="top":"bottom"===placementInfo.placement&&(heightGrowthDirection="bottom"):"top"===placementInfo.crossAxis&&("top"===placementInfo.crossPlacement?heightGrowthDirection="bottom":"bottom"===placementInfo.crossPlacement&&(heightGrowthDirection="top"));let delta=$edcf132a9284368a$var$getDelta(crossAxis,position[crossAxis],overlaySize[crossSize],boundaryDimensions,containerDimensions,padding,containerOffsetWithBoundary);position[crossAxis]+=delta;let maxHeight=function $edcf132a9284368a$var$getMaxHeight(position,boundaryDimensions,containerOffsetWithBoundary,isContainerPositioned,margins,padding,overlayHeight,heightGrowthDirection){const containerHeight=isContainerPositioned?containerOffsetWithBoundary.height:boundaryDimensions[$edcf132a9284368a$var$TOTAL_SIZE.height];let overlayTop=null!=position.top?containerOffsetWithBoundary.top+position.top:containerOffsetWithBoundary.top+(containerHeight-position.bottom-overlayHeight),maxHeight="top"!==heightGrowthDirection?Math.max(0,boundaryDimensions.height+boundaryDimensions.top+boundaryDimensions.scroll.top-overlayTop-(margins.top+margins.bottom+padding)):Math.max(0,overlayTop+overlayHeight-(boundaryDimensions.top+boundaryDimensions.scroll.top)-(margins.top+margins.bottom+padding));return Math.min(boundaryDimensions.height-2*padding,maxHeight)}(position,boundaryDimensions,containerOffsetWithBoundary,isContainerPositioned,margins,padding,overlaySize.height,heightGrowthDirection);userSetMaxHeight&&userSetMaxHeight<maxHeight&&(maxHeight=userSetMaxHeight),overlaySize.height=Math.min(overlaySize.height,maxHeight),position=$edcf132a9284368a$var$computePosition(childOffset,boundaryDimensions,overlaySize,placementInfo,normalizedOffset,crossOffset,containerOffsetWithBoundary,isContainerPositioned,arrowSize,arrowBoundaryOffset),delta=$edcf132a9284368a$var$getDelta(crossAxis,position[crossAxis],overlaySize[crossSize],boundaryDimensions,containerDimensions,padding,containerOffsetWithBoundary),position[crossAxis]+=delta;let arrowPosition={},preferredArrowPosition=childOffset[crossAxis]+.5*childOffset[crossSize]-position[crossAxis]-margins[$edcf132a9284368a$var$AXIS[crossAxis]];const arrowMinPosition=arrowSize/2+arrowBoundaryOffset,overlayMargin="left"===$edcf132a9284368a$var$AXIS[crossAxis]?margins.left+margins.right:margins.top+margins.bottom,arrowMaxPosition=overlaySize[crossSize]-overlayMargin-arrowSize/2-arrowBoundaryOffset,arrowOverlappingChildMinEdge=childOffset[crossAxis]+arrowSize/2-(position[crossAxis]+margins[$edcf132a9284368a$var$AXIS[crossAxis]]),arrowOverlappingChildMaxEdge=childOffset[crossAxis]+childOffset[crossSize]-arrowSize/2-(position[crossAxis]+margins[$edcf132a9284368a$var$AXIS[crossAxis]]),arrowPositionOverlappingChild=(0,number.qE)(preferredArrowPosition,arrowOverlappingChildMinEdge,arrowOverlappingChildMaxEdge);return arrowPosition[crossAxis]=(0,number.qE)(arrowPositionOverlappingChild,arrowMinPosition,arrowMaxPosition),{position,maxHeight,arrowOffsetLeft:arrowPosition.left,arrowOffsetTop:arrowPosition.top,placement:placementInfo.placement}}function $edcf132a9284368a$export$b3ceb0cbf1056d98(opts){let{placement,targetNode,overlayNode,scrollNode,padding,shouldFlip,boundaryElement,offset,crossOffset,maxHeight,arrowSize=0,arrowBoundaryOffset=0}=opts,container=overlayNode instanceof HTMLElement?function $edcf132a9284368a$var$getContainingBlock(node){let offsetParent=node.offsetParent;offsetParent&&offsetParent===document.body&&"static"===window.getComputedStyle(offsetParent).position&&!$edcf132a9284368a$var$isContainingBlock(offsetParent)&&(offsetParent=document.documentElement);if(null==offsetParent)for(offsetParent=node.parentElement;offsetParent&&!$edcf132a9284368a$var$isContainingBlock(offsetParent);)offsetParent=offsetParent.parentElement;return offsetParent||document.documentElement}(overlayNode):document.documentElement,isViewportContainer=container===document.documentElement;const containerPositionStyle=window.getComputedStyle(container).position;let isContainerPositioned=!!containerPositionStyle&&"static"!==containerPositionStyle,childOffset=isViewportContainer?$edcf132a9284368a$var$getOffset(targetNode):$edcf132a9284368a$var$getPosition(targetNode,container);if(!isViewportContainer){let{marginTop,marginLeft}=window.getComputedStyle(targetNode);childOffset.top+=parseInt(marginTop,10)||0,childOffset.left+=parseInt(marginLeft,10)||0}let overlaySize=$edcf132a9284368a$var$getOffset(overlayNode),margins=function $edcf132a9284368a$var$getMargins(node){let style=window.getComputedStyle(node);return{top:parseInt(style.marginTop,10)||0,bottom:parseInt(style.marginBottom,10)||0,left:parseInt(style.marginLeft,10)||0,right:parseInt(style.marginRight,10)||0}}(overlayNode);overlaySize.width+=margins.left+margins.right,overlaySize.height+=margins.top+margins.bottom;let scrollSize=function $edcf132a9284368a$var$getScroll(node){return{top:node.scrollTop,left:node.scrollLeft,width:node.scrollWidth,height:node.scrollHeight}}(scrollNode),boundaryDimensions=$edcf132a9284368a$var$getContainerDimensions(boundaryElement),containerDimensions=$edcf132a9284368a$var$getContainerDimensions(container),containerOffsetWithBoundary="BODY"===boundaryElement.tagName?$edcf132a9284368a$var$getOffset(container):$edcf132a9284368a$var$getPosition(container,boundaryElement);return"HTML"===container.tagName&&"BODY"===boundaryElement.tagName&&(containerDimensions.scroll.top=0,containerDimensions.scroll.left=0),$edcf132a9284368a$export$6839422d1f33cee9(placement,childOffset,overlaySize,scrollSize,margins,padding,shouldFlip,boundaryDimensions,containerDimensions,containerOffsetWithBoundary,offset,crossOffset,isContainerPositioned,maxHeight,arrowSize,arrowBoundaryOffset)}function $edcf132a9284368a$var$getOffset(node){let{top,left,width,height}=node.getBoundingClientRect(),{scrollTop,scrollLeft,clientTop,clientLeft}=document.documentElement;return{top:top+scrollTop-clientTop,left:left+scrollLeft-clientLeft,width,height}}function $edcf132a9284368a$var$getPosition(node,parent){let offset,style=window.getComputedStyle(node);if("fixed"===style.position){let{top,left,width,height}=node.getBoundingClientRect();offset={top,left,width,height}}else{offset=$edcf132a9284368a$var$getOffset(node);let parentOffset=$edcf132a9284368a$var$getOffset(parent),parentStyle=window.getComputedStyle(parent);parentOffset.top+=(parseInt(parentStyle.borderTopWidth,10)||0)-parent.scrollTop,parentOffset.left+=(parseInt(parentStyle.borderLeftWidth,10)||0)-parent.scrollLeft,offset.top-=parentOffset.top,offset.left-=parentOffset.left}return offset.top-=parseInt(style.marginTop,10)||0,offset.left-=parseInt(style.marginLeft,10)||0,offset}function $edcf132a9284368a$var$isContainingBlock(node){let style=window.getComputedStyle(node);return"none"!==style.transform||/transform|perspective/.test(style.willChange)||"none"!==style.filter||"paint"===style.contain||"backdropFilter"in style&&"none"!==style.backdropFilter||"WebkitBackdropFilter"in style&&"none"!==style.WebkitBackdropFilter}var useCloseOnScroll=__webpack_require__("./node_modules/.pnpm/@react-aria+overlays@3.23.4_react-dom@19.0.0-rc-69d4b800-20241021_react@19.0.0-rc-69d4b800-20_thir4y2lkvdh5hhvbx3rmlir2q/node_modules/@react-aria/overlays/dist/useCloseOnScroll.mjs"),react=__webpack_require__("./node_modules/.pnpm/next@15.0.1_@babel+core@7.26.0_react-dom@19.0.0-rc-69d4b800-20241021_react@19.0.0-rc-69d4b800_czvog4bm5hmxkqeypv6dkprgyq/node_modules/next/dist/compiled/react/index.js"),useLayoutEffect=__webpack_require__("./node_modules/.pnpm/@react-aria+utils@3.25.3_react@19.0.0-rc-69d4b800-20241021/node_modules/@react-aria/utils/dist/useLayoutEffect.mjs"),useResizeObserver=__webpack_require__("./node_modules/.pnpm/@react-aria+utils@3.25.3_react@19.0.0-rc-69d4b800-20241021/node_modules/@react-aria/utils/dist/useResizeObserver.mjs"),context=__webpack_require__("./node_modules/.pnpm/@react-aria+i18n@3.12.3_react@19.0.0-rc-69d4b800-20241021/node_modules/@react-aria/i18n/dist/context.mjs");let $2a41e45df1593e64$var$visualViewport="undefined"!=typeof document&&window.visualViewport;function $2a41e45df1593e64$export$d39e1813b3bdd0e1(props){let{direction}=(0,context.Y)(),{arrowSize=0,targetRef,overlayRef,scrollRef=overlayRef,placement="bottom",containerPadding=12,shouldFlip=!0,boundaryElement="undefined"!=typeof document?document.body:null,offset=0,crossOffset=0,shouldUpdatePosition=!0,isOpen=!0,onClose,maxHeight,arrowBoundaryOffset=0}=props,[position,setPosition]=(0,react.useState)({position:{},arrowOffsetLeft:void 0,arrowOffsetTop:void 0,maxHeight:void 0,placement:void 0}),deps=[shouldUpdatePosition,placement,overlayRef.current,targetRef.current,scrollRef.current,containerPadding,shouldFlip,boundaryElement,offset,crossOffset,isOpen,direction,maxHeight,arrowBoundaryOffset,arrowSize],lastScale=(0,react.useRef)(null==$2a41e45df1593e64$var$visualViewport?void 0:$2a41e45df1593e64$var$visualViewport.scale);(0,react.useEffect)((()=>{isOpen&&(lastScale.current=null==$2a41e45df1593e64$var$visualViewport?void 0:$2a41e45df1593e64$var$visualViewport.scale)}),[isOpen]);let updatePosition=(0,react.useCallback)((()=>{if(!(!1!==shouldUpdatePosition&&isOpen&&overlayRef.current&&targetRef.current&&boundaryElement))return;if((null==$2a41e45df1593e64$var$visualViewport?void 0:$2a41e45df1593e64$var$visualViewport.scale)!==lastScale.current)return;let anchor=null;if(scrollRef.current&&scrollRef.current.contains(document.activeElement)){let anchorRect=document.activeElement.getBoundingClientRect(),scrollRect=scrollRef.current.getBoundingClientRect();anchor={type:"top",offset:anchorRect.top-scrollRect.top},anchor.offset>scrollRect.height/2&&(anchor.type="bottom",anchor.offset=anchorRect.bottom-scrollRect.bottom)}let overlay=overlayRef.current;var _window_visualViewport,_window_visualViewport_height;!maxHeight&&overlayRef.current&&(overlay.style.top="0px",overlay.style.bottom="",overlay.style.maxHeight=(null!==(_window_visualViewport_height=null===(_window_visualViewport=window.visualViewport)||void 0===_window_visualViewport?void 0:_window_visualViewport.height)&&void 0!==_window_visualViewport_height?_window_visualViewport_height:window.innerHeight)+"px");let position=$edcf132a9284368a$export$b3ceb0cbf1056d98({placement:$2a41e45df1593e64$var$translateRTL(placement,direction),overlayNode:overlayRef.current,targetNode:targetRef.current,scrollNode:scrollRef.current||overlayRef.current,padding:containerPadding,shouldFlip,boundaryElement,offset,crossOffset,maxHeight,arrowSize,arrowBoundaryOffset});if(overlay.style.top="",overlay.style.bottom="",overlay.style.left="",overlay.style.right="",Object.keys(position.position).forEach((key=>overlay.style[key]=position.position[key]+"px")),overlay.style.maxHeight=null!=position.maxHeight?position.maxHeight+"px":void 0,anchor){let anchorRect=document.activeElement.getBoundingClientRect(),scrollRect=scrollRef.current.getBoundingClientRect(),newOffset=anchorRect[anchor.type]-scrollRect[anchor.type];scrollRef.current.scrollTop+=newOffset-anchor.offset}setPosition(position)}),deps);(0,useLayoutEffect.N)(updatePosition,deps),function $2a41e45df1593e64$var$useResize(onResize){(0,useLayoutEffect.N)((()=>(window.addEventListener("resize",onResize,!1),()=>{window.removeEventListener("resize",onResize,!1)})),[onResize])}(updatePosition),(0,useResizeObserver.w)({ref:overlayRef,onResize:updatePosition}),(0,useResizeObserver.w)({ref:targetRef,onResize:updatePosition});let isResizing=(0,react.useRef)(!1);(0,useLayoutEffect.N)((()=>{let timeout,onResize=()=>{isResizing.current=!0,clearTimeout(timeout),timeout=setTimeout((()=>{isResizing.current=!1}),500),updatePosition()},onScroll=()=>{isResizing.current&&onResize()};return null==$2a41e45df1593e64$var$visualViewport||$2a41e45df1593e64$var$visualViewport.addEventListener("resize",onResize),null==$2a41e45df1593e64$var$visualViewport||$2a41e45df1593e64$var$visualViewport.addEventListener("scroll",onScroll),()=>{null==$2a41e45df1593e64$var$visualViewport||$2a41e45df1593e64$var$visualViewport.removeEventListener("resize",onResize),null==$2a41e45df1593e64$var$visualViewport||$2a41e45df1593e64$var$visualViewport.removeEventListener("scroll",onScroll)}}),[updatePosition]);let close=(0,react.useCallback)((()=>{isResizing.current||onClose()}),[onClose,isResizing]);var _position_maxHeight;return(0,useCloseOnScroll.o)({triggerRef:targetRef,isOpen,onClose:onClose&&close}),{overlayProps:{style:{position:"absolute",zIndex:1e5,...position.position,maxHeight:null!==(_position_maxHeight=position.maxHeight)&&void 0!==_position_maxHeight?_position_maxHeight:"100vh"}},placement:position.placement,arrowProps:{"aria-hidden":"true",role:"presentation",style:{left:position.arrowOffsetLeft,top:position.arrowOffsetTop}},updatePosition}}function $2a41e45df1593e64$var$translateRTL(position,direction){return"rtl"===direction?position.replace("start","right").replace("end","left"):position.replace("start","left").replace("end","right")}},"./node_modules/.pnpm/@react-aria+utils@3.25.3_react@19.0.0-rc-69d4b800-20241021/node_modules/@react-aria/utils/dist/useResizeObserver.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{w:()=>$9daab02d461809db$export$683480f191c0e3ea});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@15.0.1_@babel+core@7.26.0_react-dom@19.0.0-rc-69d4b800-20241021_react@19.0.0-rc-69d4b800_czvog4bm5hmxkqeypv6dkprgyq/node_modules/next/dist/compiled/react/index.js");function $9daab02d461809db$export$683480f191c0e3ea(options){const{ref,box,onResize}=options;(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{let element=null==ref?void 0:ref.current;if(element){if(function $9daab02d461809db$var$hasResizeObserver(){return void 0!==window.ResizeObserver}()){const resizeObserverInstance=new window.ResizeObserver((entries=>{entries.length&&onResize()}));return resizeObserverInstance.observe(element,{box}),()=>{element&&resizeObserverInstance.unobserve(element)}}return window.addEventListener("resize",onResize,!1),()=>{window.removeEventListener("resize",onResize,!1)}}}),[onResize,ref,box])}},"./node_modules/.pnpm/@react-stately+overlays@3.6.11_react@19.0.0-rc-69d4b800-20241021/node_modules/@react-stately/overlays/dist/useOverlayTriggerState.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>$fc909762b330b746$export$61c6a8c84e605fb6});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@15.0.1_@babel+core@7.26.0_react-dom@19.0.0-rc-69d4b800-20241021_react@19.0.0-rc-69d4b800_czvog4bm5hmxkqeypv6dkprgyq/node_modules/next/dist/compiled/react/index.js"),_react_stately_utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@react-stately+utils@3.10.4_react@19.0.0-rc-69d4b800-20241021/node_modules/@react-stately/utils/dist/useControlledState.mjs");function $fc909762b330b746$export$61c6a8c84e605fb6(props){let[isOpen,setOpen]=(0,_react_stately_utils__WEBPACK_IMPORTED_MODULE_1__.P)(props.isOpen,props.defaultOpen||!1,props.onOpenChange);const open=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((()=>{setOpen(!0)}),[setOpen]),close=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((()=>{setOpen(!1)}),[setOpen]),toggle=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((()=>{setOpen(!isOpen)}),[setOpen,isOpen]);return{isOpen,setOpen,open,close,toggle}}},"./node_modules/.pnpm/@react-stately+toggle@3.7.8_react@19.0.0-rc-69d4b800-20241021/node_modules/@react-stately/toggle/dist/useToggleState.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>$3017fa7ffdddec74$export$8042c6c013fd5226});var _react_stately_utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/@react-stately+utils@3.10.4_react@19.0.0-rc-69d4b800-20241021/node_modules/@react-stately/utils/dist/useControlledState.mjs");function $3017fa7ffdddec74$export$8042c6c013fd5226(props={}){let{isReadOnly}=props,[isSelected,setSelected]=(0,_react_stately_utils__WEBPACK_IMPORTED_MODULE_0__.P)(props.isSelected,props.defaultSelected||!1,props.onChange);return{isSelected,setSelected:function updateSelected(value){isReadOnly||setSelected(value)},toggle:function toggleState(){isReadOnly||setSelected(!isSelected)}}}},"./node_modules/.pnpm/react-aria-components@1.4.1_react-dom@19.0.0-rc-69d4b800-20241021_react@19.0.0-rc-69d4b800-20_lzfgk4i222ma4rx6xt7oeewigi/node_modules/react-aria-components/dist/OverlayArrow.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>$44f671af83e7d9e0$export$2de4954e8ae13b9f,k:()=>$44f671af83e7d9e0$export$746d02f47f4d381});var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/react-aria-components@1.4.1_react-dom@19.0.0-rc-69d4b800-20241021_react@19.0.0-rc-69d4b800-20_lzfgk4i222ma4rx6xt7oeewigi/node_modules/react-aria-components/dist/utils.mjs"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@15.0.1_@babel+core@7.26.0_react-dom@19.0.0-rc-69d4b800-20241021_react@19.0.0-rc-69d4b800_czvog4bm5hmxkqeypv6dkprgyq/node_modules/next/dist/compiled/react/index.js");const $44f671af83e7d9e0$export$2de4954e8ae13b9f=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({placement:"bottom"});function $44f671af83e7d9e0$var$OverlayArrow(props,ref){[props,ref]=(0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.JT)(props,ref,$44f671af83e7d9e0$export$2de4954e8ae13b9f);let placement=props.placement,style={position:"absolute",[placement]:"100%",transform:"top"===placement||"bottom"===placement?"translateX(-50%)":"translateY(-50%)"},renderProps=(0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.Sl)({...props,defaultClassName:"react-aria-OverlayArrow",values:{placement}});return renderProps.style&&Object.keys(renderProps.style).forEach((key=>void 0===renderProps.style[key]&&delete renderProps.style[key])),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{...props,...renderProps,style:{...style,...renderProps.style},ref,"data-placement":placement})}const $44f671af83e7d9e0$export$746d02f47f4d381=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)($44f671af83e7d9e0$var$OverlayArrow)},"./node_modules/.pnpm/react-aria-components@1.4.1_react-dom@19.0.0-rc-69d4b800-20241021_react@19.0.0-rc-69d4b800-20_lzfgk4i222ma4rx6xt7oeewigi/node_modules/react-aria-components/dist/ToggleButton.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{f:()=>$efde0372d7a700fe$export$d2b052e7b4be1756});var utils=__webpack_require__("./node_modules/.pnpm/react-aria-components@1.4.1_react-dom@19.0.0-rc-69d4b800-20241021_react@19.0.0-rc-69d4b800-20_lzfgk4i222ma4rx6xt7oeewigi/node_modules/react-aria-components/dist/utils.mjs"),useButton=__webpack_require__("./node_modules/.pnpm/@react-aria+button@3.10.1_react@19.0.0-rc-69d4b800-20241021/node_modules/@react-aria/button/dist/useButton.mjs"),chain=__webpack_require__("./node_modules/.pnpm/@react-aria+utils@3.25.3_react@19.0.0-rc-69d4b800-20241021/node_modules/@react-aria/utils/dist/chain.mjs"),mergeProps=__webpack_require__("./node_modules/.pnpm/@react-aria+utils@3.25.3_react@19.0.0-rc-69d4b800-20241021/node_modules/@react-aria/utils/dist/mergeProps.mjs");function $55f54f7887471b58$export$51e84d46ca0bc451(props,state,ref){const{isSelected}=state,{isPressed,buttonProps}=(0,useButton.s)({...props,onPress:(0,chain.c)(state.toggle,props.onPress)},ref);return{isPressed,buttonProps:(0,mergeProps.v)(buttonProps,{"aria-pressed":isSelected})}}var useFocusRing=__webpack_require__("./node_modules/.pnpm/@react-aria+focus@3.18.4_react@19.0.0-rc-69d4b800-20241021/node_modules/@react-aria/focus/dist/useFocusRing.mjs"),useHover=__webpack_require__("./node_modules/.pnpm/@react-aria+interactions@3.22.4_react@19.0.0-rc-69d4b800-20241021/node_modules/@react-aria/interactions/dist/useHover.mjs"),react=__webpack_require__("./node_modules/.pnpm/next@15.0.1_@babel+core@7.26.0_react-dom@19.0.0-rc-69d4b800-20241021_react@19.0.0-rc-69d4b800_czvog4bm5hmxkqeypv6dkprgyq/node_modules/next/dist/compiled/react/index.js"),useToggleState=__webpack_require__("./node_modules/.pnpm/@react-stately+toggle@3.7.8_react@19.0.0-rc-69d4b800-20241021/node_modules/@react-stately/toggle/dist/useToggleState.mjs");const $efde0372d7a700fe$export$43506d75ebd2e218=(0,react.createContext)({});function $efde0372d7a700fe$var$ToggleButton(props,ref){[props,ref]=(0,utils.JT)(props,ref,$efde0372d7a700fe$export$43506d75ebd2e218);let state=(0,useToggleState.H)(props),{buttonProps,isPressed}=$55f54f7887471b58$export$51e84d46ca0bc451(props,state,ref),{focusProps,isFocused,isFocusVisible}=(0,useFocusRing.o)(props),{hoverProps,isHovered}=(0,useHover.M)(props),renderProps=(0,utils.Sl)({...props,values:{isHovered,isPressed,isFocused,isSelected:state.isSelected,isFocusVisible,isDisabled:props.isDisabled||!1,state},defaultClassName:"react-aria-ToggleButton"});return react.createElement("button",{...(0,mergeProps.v)(buttonProps,focusProps,hoverProps),...renderProps,ref,slot:props.slot||void 0,"data-focused":isFocused||void 0,"data-disabled":props.isDisabled||void 0,"data-pressed":isPressed||void 0,"data-selected":state.isSelected||void 0,"data-hovered":isHovered||void 0,"data-focus-visible":isFocusVisible||void 0})}const $efde0372d7a700fe$export$d2b052e7b4be1756=(0,react.forwardRef)($efde0372d7a700fe$var$ToggleButton)}}]);