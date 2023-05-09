"use strict";(self.webpackChunkairmessage_react=self.webpackChunkairmessage_react||[]).push([[3257],{"./node_modules/@mui/material/esm/Box/Box.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Box_Box});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),styled_engine=__webpack_require__("./node_modules/@mui/styled-engine/index.js"),styleFunctionSx_styleFunctionSx=__webpack_require__("./node_modules/@mui/system/esm/styleFunctionSx/styleFunctionSx.js"),extendSxProp=__webpack_require__("./node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js"),useTheme=__webpack_require__("./node_modules/@mui/system/esm/useTheme.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["className","component"];var ClassNameGenerator=__webpack_require__("./node_modules/@mui/utils/esm/ClassNameGenerator/ClassNameGenerator.js");const Box=function createBox(options={}){const{defaultTheme,defaultClassName="MuiBox-root",generateClassName,styleFunctionSx=styleFunctionSx_styleFunctionSx.Z}=options,BoxRoot=(0,styled_engine.ZP)("div",{shouldForwardProp:prop=>"theme"!==prop&&"sx"!==prop&&"as"!==prop})(styleFunctionSx);return react.forwardRef((function Box(inProps,ref){const theme=(0,useTheme.Z)(defaultTheme),_extendSxProp=(0,extendSxProp.Z)(inProps),{className,component="div"}=_extendSxProp,other=(0,objectWithoutPropertiesLoose.Z)(_extendSxProp,_excluded);return(0,jsx_runtime.jsx)(BoxRoot,(0,esm_extends.Z)({as:component,ref,className:(0,clsx_m.Z)(className,generateClassName?generateClassName(defaultClassName):defaultClassName),theme},other))}))}({defaultTheme:(0,__webpack_require__("./node_modules/@mui/material/esm/styles/createTheme.js").Z)(),defaultClassName:"MuiBox-root",generateClassName:ClassNameGenerator.Z.generate}),Box_Box=Box},"./node_modules/@mui/material/esm/Snackbar/Snackbar.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Snackbar_Snackbar});var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),useForkRef=__webpack_require__("./node_modules/@mui/utils/esm/useForkRef.js"),useEventCallback=__webpack_require__("./node_modules/@mui/utils/esm/useEventCallback.js"),ownerDocument=__webpack_require__("./node_modules/@mui/utils/esm/ownerDocument.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function mapEventPropToEvent(eventProp){return eventProp.substring(2).toLowerCase()}const ClickAwayListener_ClickAwayListener=function ClickAwayListener(props){const{children,disableReactTree=!1,mouseEvent="onClick",onClickAway,touchEvent="onTouchEnd"}=props,movedRef=react.useRef(!1),nodeRef=react.useRef(null),activatedRef=react.useRef(!1),syntheticEventRef=react.useRef(!1);react.useEffect((()=>(setTimeout((()=>{activatedRef.current=!0}),0),()=>{activatedRef.current=!1})),[]);const handleRef=(0,useForkRef.Z)(children.ref,nodeRef),handleClickAway=(0,useEventCallback.Z)((event=>{const insideReactTree=syntheticEventRef.current;syntheticEventRef.current=!1;const doc=(0,ownerDocument.Z)(nodeRef.current);if(!activatedRef.current||!nodeRef.current||"clientX"in event&&function clickedRootScrollbar(event,doc){return doc.documentElement.clientWidth<event.clientX||doc.documentElement.clientHeight<event.clientY}(event,doc))return;if(movedRef.current)return void(movedRef.current=!1);let insideDOM;insideDOM=event.composedPath?event.composedPath().indexOf(nodeRef.current)>-1:!doc.documentElement.contains(event.target)||nodeRef.current.contains(event.target),insideDOM||!disableReactTree&&insideReactTree||onClickAway(event)})),createHandleSynthetic=handlerName=>event=>{syntheticEventRef.current=!0;const childrenPropsHandler=children.props[handlerName];childrenPropsHandler&&childrenPropsHandler(event)},childrenProps={ref:handleRef};return!1!==touchEvent&&(childrenProps[touchEvent]=createHandleSynthetic(touchEvent)),react.useEffect((()=>{if(!1!==touchEvent){const mappedTouchEvent=mapEventPropToEvent(touchEvent),doc=(0,ownerDocument.Z)(nodeRef.current),handleTouchMove=()=>{movedRef.current=!0};return doc.addEventListener(mappedTouchEvent,handleClickAway),doc.addEventListener("touchmove",handleTouchMove),()=>{doc.removeEventListener(mappedTouchEvent,handleClickAway),doc.removeEventListener("touchmove",handleTouchMove)}}}),[handleClickAway,touchEvent]),!1!==mouseEvent&&(childrenProps[mouseEvent]=createHandleSynthetic(mouseEvent)),react.useEffect((()=>{if(!1!==mouseEvent){const mappedMouseEvent=mapEventPropToEvent(mouseEvent),doc=(0,ownerDocument.Z)(nodeRef.current);return doc.addEventListener(mappedMouseEvent,handleClickAway),()=>{doc.removeEventListener(mappedMouseEvent,handleClickAway)}}}),[handleClickAway,mouseEvent]),(0,jsx_runtime.jsx)(react.Fragment,{children:react.cloneElement(children,childrenProps)})};var styled=__webpack_require__("./node_modules/@mui/material/esm/styles/styled.js"),useTheme=__webpack_require__("./node_modules/@mui/material/esm/styles/useTheme.js"),useThemeProps=__webpack_require__("./node_modules/@mui/material/esm/styles/useThemeProps.js"),utils_useEventCallback=__webpack_require__("./node_modules/@mui/material/esm/utils/useEventCallback.js"),capitalize=__webpack_require__("./node_modules/@mui/material/esm/utils/capitalize.js"),Grow=__webpack_require__("./node_modules/@mui/material/esm/Grow/Grow.js"),colorManipulator=__webpack_require__("./node_modules/@mui/system/esm/colorManipulator.js"),Paper=__webpack_require__("./node_modules/@mui/material/esm/Paper/Paper.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js"),generateUtilityClasses=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js");function getSnackbarContentUtilityClass(slot){return(0,generateUtilityClass.Z)("MuiSnackbarContent",slot)}(0,generateUtilityClasses.Z)("MuiSnackbarContent",["root","message","action"]);const _excluded=["action","className","message","role"],SnackbarContentRoot=(0,styled.ZP)(Paper.Z,{name:"MuiSnackbarContent",slot:"Root",overridesResolver:(props,styles)=>styles.root})((({theme})=>{const emphasis="light"===theme.palette.mode?.8:.98,backgroundColor=(0,colorManipulator._4)(theme.palette.background.default,emphasis);return(0,esm_extends.Z)({},theme.typography.body2,{color:theme.vars?theme.vars.palette.SnackbarContent.color:theme.palette.getContrastText(backgroundColor),backgroundColor:theme.vars?theme.vars.palette.SnackbarContent.bg:backgroundColor,display:"flex",alignItems:"center",flexWrap:"wrap",padding:"6px 16px",borderRadius:(theme.vars||theme).shape.borderRadius,flexGrow:1,[theme.breakpoints.up("sm")]:{flexGrow:"initial",minWidth:288}})})),SnackbarContentMessage=(0,styled.ZP)("div",{name:"MuiSnackbarContent",slot:"Message",overridesResolver:(props,styles)=>styles.message})({padding:"8px 0"}),SnackbarContentAction=(0,styled.ZP)("div",{name:"MuiSnackbarContent",slot:"Action",overridesResolver:(props,styles)=>styles.action})({display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}),SnackbarContent_SnackbarContent=react.forwardRef((function SnackbarContent(inProps,ref){const props=(0,useThemeProps.Z)({props:inProps,name:"MuiSnackbarContent"}),{action,className,message,role="alert"}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded),ownerState=props,classes=(ownerState=>{const{classes}=ownerState;return(0,composeClasses.Z)({root:["root"],action:["action"],message:["message"]},getSnackbarContentUtilityClass,classes)})(ownerState);return(0,jsx_runtime.jsxs)(SnackbarContentRoot,(0,esm_extends.Z)({role,square:!0,elevation:6,className:(0,clsx_m.Z)(classes.root,className),ownerState,ref},other,{children:[(0,jsx_runtime.jsx)(SnackbarContentMessage,{className:classes.message,ownerState,children:message}),action?(0,jsx_runtime.jsx)(SnackbarContentAction,{className:classes.action,ownerState,children:action}):null]}))}));function getSnackbarUtilityClass(slot){return(0,generateUtilityClass.Z)("MuiSnackbar",slot)}(0,generateUtilityClasses.Z)("MuiSnackbar",["root","anchorOriginTopCenter","anchorOriginBottomCenter","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft"]);const Snackbar_excluded=["onEnter","onExited"],_excluded2=["action","anchorOrigin","autoHideDuration","children","className","ClickAwayListenerProps","ContentProps","disableWindowBlurListener","message","onBlur","onClose","onFocus","onMouseEnter","onMouseLeave","open","resumeHideDuration","TransitionComponent","transitionDuration","TransitionProps"],SnackbarRoot=(0,styled.ZP)("div",{name:"MuiSnackbar",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,styles[`anchorOrigin${(0,capitalize.Z)(ownerState.anchorOrigin.vertical)}${(0,capitalize.Z)(ownerState.anchorOrigin.horizontal)}`]]}})((({theme,ownerState})=>(0,esm_extends.Z)({zIndex:(theme.vars||theme).zIndex.snackbar,position:"fixed",display:"flex",left:8,right:8,justifyContent:"center",alignItems:"center"},"top"===ownerState.anchorOrigin.vertical?{top:8}:{bottom:8},"left"===ownerState.anchorOrigin.horizontal&&{justifyContent:"flex-start"},"right"===ownerState.anchorOrigin.horizontal&&{justifyContent:"flex-end"},{[theme.breakpoints.up("sm")]:(0,esm_extends.Z)({},"top"===ownerState.anchorOrigin.vertical?{top:24}:{bottom:24},"center"===ownerState.anchorOrigin.horizontal&&{left:"50%",right:"auto",transform:"translateX(-50%)"},"left"===ownerState.anchorOrigin.horizontal&&{left:24,right:"auto"},"right"===ownerState.anchorOrigin.horizontal&&{right:24,left:"auto"})}))),Snackbar_Snackbar=react.forwardRef((function Snackbar(inProps,ref){const props=(0,useThemeProps.Z)({props:inProps,name:"MuiSnackbar"}),theme=(0,useTheme.Z)(),defaultTransitionDuration={enter:theme.transitions.duration.enteringScreen,exit:theme.transitions.duration.leavingScreen},{action,anchorOrigin:{vertical,horizontal}={vertical:"bottom",horizontal:"left"},autoHideDuration=null,children,className,ClickAwayListenerProps,ContentProps,disableWindowBlurListener=!1,message,onBlur,onClose,onFocus,onMouseEnter,onMouseLeave,open,resumeHideDuration,TransitionComponent=Grow.Z,transitionDuration=defaultTransitionDuration,TransitionProps:{onEnter,onExited}={}}=props,TransitionProps=(0,objectWithoutPropertiesLoose.Z)(props.TransitionProps,Snackbar_excluded),other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded2),ownerState=(0,esm_extends.Z)({},props,{anchorOrigin:{vertical,horizontal}}),classes=(ownerState=>{const{classes,anchorOrigin}=ownerState,slots={root:["root",`anchorOrigin${(0,capitalize.Z)(anchorOrigin.vertical)}${(0,capitalize.Z)(anchorOrigin.horizontal)}`]};return(0,composeClasses.Z)(slots,getSnackbarUtilityClass,classes)})(ownerState),timerAutoHide=react.useRef(),[exited,setExited]=react.useState(!0),handleClose=(0,utils_useEventCallback.Z)(((...args)=>{onClose&&onClose(...args)})),setAutoHideTimer=(0,utils_useEventCallback.Z)((autoHideDurationParam=>{onClose&&null!=autoHideDurationParam&&(clearTimeout(timerAutoHide.current),timerAutoHide.current=setTimeout((()=>{handleClose(null,"timeout")}),autoHideDurationParam))}));react.useEffect((()=>(open&&setAutoHideTimer(autoHideDuration),()=>{clearTimeout(timerAutoHide.current)})),[open,autoHideDuration,setAutoHideTimer]);const handlePause=()=>{clearTimeout(timerAutoHide.current)},handleResume=react.useCallback((()=>{null!=autoHideDuration&&setAutoHideTimer(null!=resumeHideDuration?resumeHideDuration:.5*autoHideDuration)}),[autoHideDuration,resumeHideDuration,setAutoHideTimer]);return react.useEffect((()=>{if(!disableWindowBlurListener&&open)return window.addEventListener("focus",handleResume),window.addEventListener("blur",handlePause),()=>{window.removeEventListener("focus",handleResume),window.removeEventListener("blur",handlePause)}}),[disableWindowBlurListener,handleResume,open]),react.useEffect((()=>{if(open)return document.addEventListener("keydown",handleKeyDown),()=>{document.removeEventListener("keydown",handleKeyDown)};function handleKeyDown(nativeEvent){nativeEvent.defaultPrevented||"Escape"!==nativeEvent.key&&"Esc"!==nativeEvent.key||onClose&&onClose(nativeEvent,"escapeKeyDown")}}),[exited,open,onClose]),!open&&exited?null:(0,jsx_runtime.jsx)(ClickAwayListener_ClickAwayListener,(0,esm_extends.Z)({onClickAway:event=>{onClose&&onClose(event,"clickaway")}},ClickAwayListenerProps,{children:(0,jsx_runtime.jsx)(SnackbarRoot,(0,esm_extends.Z)({className:(0,clsx_m.Z)(classes.root,className),onBlur:event=>{onBlur&&onBlur(event),handleResume()},onFocus:event=>{onFocus&&onFocus(event),handlePause()},onMouseEnter:event=>{onMouseEnter&&onMouseEnter(event),handlePause()},onMouseLeave:event=>{onMouseLeave&&onMouseLeave(event),handleResume()},ownerState,ref,role:"presentation"},other,{children:(0,jsx_runtime.jsx)(TransitionComponent,(0,esm_extends.Z)({appear:!0,in:open,timeout:transitionDuration,direction:"top"===vertical?"down":"up",onEnter:(node,isAppearing)=>{setExited(!1),onEnter&&onEnter(node,isAppearing)},onExited:node=>{setExited(!0),onExited&&onExited(node)}},TransitionProps,{children:children||(0,jsx_runtime.jsx)(SnackbarContent_SnackbarContent,(0,esm_extends.Z)({message,action},ContentProps))}))}))}))}))},"./node_modules/@mui/material/esm/Stack/Stack.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_mui_system__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/system/esm/breakpoints.js"),_mui_system__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/system/esm/spacing.js"),_mui_system__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js"),_mui_utils__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/utils/esm/deepmerge.js"),_styles_styled__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mui/material/esm/styles/styled.js"),_styles_useThemeProps__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@mui/material/esm/styles/useThemeProps.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["component","direction","spacing","divider","children"];function joinChildren(children,separator){const childrenArray=react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children).filter(Boolean);return childrenArray.reduce(((output,child,index)=>(output.push(child),index<childrenArray.length-1&&output.push(react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(separator,{key:`separator-${index}`})),output)),[])}const StackRoot=(0,_styles_styled__WEBPACK_IMPORTED_MODULE_6__.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:(props,styles)=>[styles.root]})((({ownerState,theme})=>{let styles=(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__.Z)({display:"flex",flexDirection:"column"},(0,_mui_system__WEBPACK_IMPORTED_MODULE_3__.k9)({theme},(0,_mui_system__WEBPACK_IMPORTED_MODULE_3__.P$)({values:ownerState.direction,breakpoints:theme.breakpoints.values}),(propValue=>({flexDirection:propValue}))));if(ownerState.spacing){const transformer=(0,_mui_system__WEBPACK_IMPORTED_MODULE_4__.hB)(theme),base=Object.keys(theme.breakpoints.values).reduce(((acc,breakpoint)=>(("object"==typeof ownerState.spacing&&null!=ownerState.spacing[breakpoint]||"object"==typeof ownerState.direction&&null!=ownerState.direction[breakpoint])&&(acc[breakpoint]=!0),acc)),{}),directionValues=(0,_mui_system__WEBPACK_IMPORTED_MODULE_3__.P$)({values:ownerState.direction,base}),spacingValues=(0,_mui_system__WEBPACK_IMPORTED_MODULE_3__.P$)({values:ownerState.spacing,base});"object"==typeof directionValues&&Object.keys(directionValues).forEach(((breakpoint,index,breakpoints)=>{if(!directionValues[breakpoint]){const previousDirectionValue=index>0?directionValues[breakpoints[index-1]]:"column";directionValues[breakpoint]=previousDirectionValue}}));const styleFromPropValue=(propValue,breakpoint)=>{return{"& > :not(style) + :not(style)":{margin:0,[`margin${direction=breakpoint?directionValues[breakpoint]:ownerState.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[direction]}`]:(0,_mui_system__WEBPACK_IMPORTED_MODULE_4__.NA)(transformer,propValue)}};var direction};styles=(0,_mui_utils__WEBPACK_IMPORTED_MODULE_5__.Z)(styles,(0,_mui_system__WEBPACK_IMPORTED_MODULE_3__.k9)({theme},spacingValues,styleFromPropValue))}return styles=(0,_mui_system__WEBPACK_IMPORTED_MODULE_3__.dt)(theme.breakpoints,styles),styles})),__WEBPACK_DEFAULT_EXPORT__=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function Stack(inProps,ref){const themeProps=(0,_styles_useThemeProps__WEBPACK_IMPORTED_MODULE_7__.Z)({props:inProps,name:"MuiStack"}),props=(0,_mui_system__WEBPACK_IMPORTED_MODULE_8__.Z)(themeProps),{component="div",direction="column",spacing=0,divider,children}=props,other=(0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_9__.Z)(props,_excluded),ownerState={direction,spacing};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(StackRoot,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__.Z)({as:component,ownerState,ref},other,{children:divider?joinChildren(children,divider):children}))}))},"./node_modules/@mui/material/esm/utils/createSvgIcon.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>createSvgIcon});var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_SvgIcon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/material/esm/SvgIcon/SvgIcon.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function createSvgIcon(path,displayName){const Component=(props,ref)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__.Z,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__.Z)({"data-testid":`${displayName}Icon`,ref},props,{children:path}));return Component.muiName=_SvgIcon__WEBPACK_IMPORTED_MODULE_2__.Z.muiName,react__WEBPACK_IMPORTED_MODULE_0__.memo(react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(Component))}}}]);