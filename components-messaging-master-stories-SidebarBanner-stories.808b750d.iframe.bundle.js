"use strict";(self.webpackChunkairmessage_react=self.webpackChunkairmessage_react||[]).push([[4376],{"./node_modules/@mui/icons-material/esm/Contacts.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mui/material/esm/utils/createSvgIcon.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__=(0,_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__.Z)((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M20 0H4v2h16V0zM4 24h16v-2H4v2zM20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 2.75c1.24 0 2.25 1.01 2.25 2.25s-1.01 2.25-2.25 2.25S9.75 10.24 9.75 9 10.76 6.75 12 6.75zM17 17H7v-1.5c0-1.67 3.33-2.5 5-2.5s5 .83 5 2.5V17z"}),"Contacts")},"./node_modules/@mui/material/esm/Box/Box.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Box_Box});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),styled_engine=__webpack_require__("./node_modules/@mui/styled-engine/index.js"),styleFunctionSx_styleFunctionSx=__webpack_require__("./node_modules/@mui/system/esm/styleFunctionSx/styleFunctionSx.js"),extendSxProp=__webpack_require__("./node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js"),useTheme=__webpack_require__("./node_modules/@mui/system/esm/useTheme.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["className","component"];var ClassNameGenerator=__webpack_require__("./node_modules/@mui/utils/esm/ClassNameGenerator/ClassNameGenerator.js");const Box=function createBox(options={}){const{defaultTheme,defaultClassName="MuiBox-root",generateClassName,styleFunctionSx=styleFunctionSx_styleFunctionSx.Z}=options,BoxRoot=(0,styled_engine.ZP)("div",{shouldForwardProp:prop=>"theme"!==prop&&"sx"!==prop&&"as"!==prop})(styleFunctionSx);return react.forwardRef((function Box(inProps,ref){const theme=(0,useTheme.Z)(defaultTheme),_extendSxProp=(0,extendSxProp.Z)(inProps),{className,component="div"}=_extendSxProp,other=(0,objectWithoutPropertiesLoose.Z)(_extendSxProp,_excluded);return(0,jsx_runtime.jsx)(BoxRoot,(0,esm_extends.Z)({as:component,ref,className:(0,clsx_m.Z)(className,generateClassName?generateClassName(defaultClassName):defaultClassName),theme},other))}))}({defaultTheme:(0,__webpack_require__("./node_modules/@mui/material/esm/styles/createTheme.js").Z)(),defaultClassName:"MuiBox-root",generateClassName:ClassNameGenerator.Z.generate}),Box_Box=Box},"./node_modules/@mui/material/esm/Paper/Paper.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Paper_Paper});var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),colorManipulator=__webpack_require__("./node_modules/@mui/system/esm/colorManipulator.js"),styled=__webpack_require__("./node_modules/@mui/material/esm/styles/styled.js"),useThemeProps=__webpack_require__("./node_modules/@mui/material/esm/styles/useThemeProps.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getPaperUtilityClass(slot){return(0,generateUtilityClass.Z)("MuiPaper",slot)}(0,__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js").Z)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["className","component","elevation","square","variant"],getOverlayAlpha=elevation=>{let alphaValue;return alphaValue=elevation<1?5.11916*elevation**2:4.5*Math.log(elevation+1)+2,(alphaValue/100).toFixed(2)},PaperRoot=(0,styled.ZP)("div",{name:"MuiPaper",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,styles[ownerState.variant],!ownerState.square&&styles.rounded,"elevation"===ownerState.variant&&styles[`elevation${ownerState.elevation}`]]}})((({theme,ownerState})=>{var _theme$vars$overlays;return(0,esm_extends.Z)({backgroundColor:(theme.vars||theme).palette.background.paper,color:(theme.vars||theme).palette.text.primary,transition:theme.transitions.create("box-shadow")},!ownerState.square&&{borderRadius:theme.shape.borderRadius},"outlined"===ownerState.variant&&{border:`1px solid ${(theme.vars||theme).palette.divider}`},"elevation"===ownerState.variant&&(0,esm_extends.Z)({boxShadow:(theme.vars||theme).shadows[ownerState.elevation]},!theme.vars&&"dark"===theme.palette.mode&&{backgroundImage:`linear-gradient(${(0,colorManipulator.Fq)("#fff",getOverlayAlpha(ownerState.elevation))}, ${(0,colorManipulator.Fq)("#fff",getOverlayAlpha(ownerState.elevation))})`},theme.vars&&{backgroundImage:null==(_theme$vars$overlays=theme.vars.overlays)?void 0:_theme$vars$overlays[ownerState.elevation]}))})),Paper_Paper=react.forwardRef((function Paper(inProps,ref){const props=(0,useThemeProps.Z)({props:inProps,name:"MuiPaper"}),{className,component="div",elevation=1,square=!1,variant="elevation"}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded),ownerState=(0,esm_extends.Z)({},props,{component,elevation,square,variant}),classes=(ownerState=>{const{square,elevation,variant,classes}=ownerState,slots={root:["root",variant,!square&&"rounded","elevation"===variant&&`elevation${elevation}`]};return(0,composeClasses.Z)(slots,getPaperUtilityClass,classes)})(ownerState);return(0,jsx_runtime.jsx)(PaperRoot,(0,esm_extends.Z)({as:component,ownerState,className:(0,clsx_m.Z)(classes.root,className),ref},other))}))},"./node_modules/@mui/material/esm/Stack/Stack.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_mui_system__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/system/esm/breakpoints.js"),_mui_system__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/system/esm/spacing.js"),_mui_system__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js"),_mui_utils__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/utils/esm/deepmerge.js"),_styles_styled__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mui/material/esm/styles/styled.js"),_styles_useThemeProps__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@mui/material/esm/styles/useThemeProps.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["component","direction","spacing","divider","children"];function joinChildren(children,separator){const childrenArray=react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children).filter(Boolean);return childrenArray.reduce(((output,child,index)=>(output.push(child),index<childrenArray.length-1&&output.push(react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(separator,{key:`separator-${index}`})),output)),[])}const StackRoot=(0,_styles_styled__WEBPACK_IMPORTED_MODULE_6__.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:(props,styles)=>[styles.root]})((({ownerState,theme})=>{let styles=(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__.Z)({display:"flex",flexDirection:"column"},(0,_mui_system__WEBPACK_IMPORTED_MODULE_3__.k9)({theme},(0,_mui_system__WEBPACK_IMPORTED_MODULE_3__.P$)({values:ownerState.direction,breakpoints:theme.breakpoints.values}),(propValue=>({flexDirection:propValue}))));if(ownerState.spacing){const transformer=(0,_mui_system__WEBPACK_IMPORTED_MODULE_4__.hB)(theme),base=Object.keys(theme.breakpoints.values).reduce(((acc,breakpoint)=>(("object"==typeof ownerState.spacing&&null!=ownerState.spacing[breakpoint]||"object"==typeof ownerState.direction&&null!=ownerState.direction[breakpoint])&&(acc[breakpoint]=!0),acc)),{}),directionValues=(0,_mui_system__WEBPACK_IMPORTED_MODULE_3__.P$)({values:ownerState.direction,base}),spacingValues=(0,_mui_system__WEBPACK_IMPORTED_MODULE_3__.P$)({values:ownerState.spacing,base});"object"==typeof directionValues&&Object.keys(directionValues).forEach(((breakpoint,index,breakpoints)=>{if(!directionValues[breakpoint]){const previousDirectionValue=index>0?directionValues[breakpoints[index-1]]:"column";directionValues[breakpoint]=previousDirectionValue}}));const styleFromPropValue=(propValue,breakpoint)=>{return{"& > :not(style) + :not(style)":{margin:0,[`margin${direction=breakpoint?directionValues[breakpoint]:ownerState.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[direction]}`]:(0,_mui_system__WEBPACK_IMPORTED_MODULE_4__.NA)(transformer,propValue)}};var direction};styles=(0,_mui_utils__WEBPACK_IMPORTED_MODULE_5__.Z)(styles,(0,_mui_system__WEBPACK_IMPORTED_MODULE_3__.k9)({theme},spacingValues,styleFromPropValue))}return styles=(0,_mui_system__WEBPACK_IMPORTED_MODULE_3__.dt)(theme.breakpoints,styles),styles})),__WEBPACK_DEFAULT_EXPORT__=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function Stack(inProps,ref){const themeProps=(0,_styles_useThemeProps__WEBPACK_IMPORTED_MODULE_7__.Z)({props:inProps,name:"MuiStack"}),props=(0,_mui_system__WEBPACK_IMPORTED_MODULE_8__.Z)(themeProps),{component="div",direction="column",spacing=0,divider,children}=props,other=(0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_9__.Z)(props,_excluded),ownerState={direction,spacing};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(StackRoot,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__.Z)({as:component,ownerState,ref},other,{children:divider?joinChildren(children,divider):children}))}))},"./node_modules/@mui/material/esm/Typography/Typography.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Typography_Typography});var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),extendSxProp=__webpack_require__("./node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),styled=__webpack_require__("./node_modules/@mui/material/esm/styles/styled.js"),useThemeProps=__webpack_require__("./node_modules/@mui/material/esm/styles/useThemeProps.js"),capitalize=__webpack_require__("./node_modules/@mui/material/esm/utils/capitalize.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getTypographyUtilityClass(slot){return(0,generateUtilityClass.Z)("MuiTypography",slot)}(0,__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js").Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],TypographyRoot=(0,styled.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,ownerState.variant&&styles[ownerState.variant],"inherit"!==ownerState.align&&styles[`align${(0,capitalize.Z)(ownerState.align)}`],ownerState.noWrap&&styles.noWrap,ownerState.gutterBottom&&styles.gutterBottom,ownerState.paragraph&&styles.paragraph]}})((({theme,ownerState})=>(0,esm_extends.Z)({margin:0},ownerState.variant&&theme.typography[ownerState.variant],"inherit"!==ownerState.align&&{textAlign:ownerState.align},ownerState.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},ownerState.gutterBottom&&{marginBottom:"0.35em"},ownerState.paragraph&&{marginBottom:16}))),defaultVariantMapping={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},colorTransformations={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},Typography_Typography=react.forwardRef((function Typography(inProps,ref){const themeProps=(0,useThemeProps.Z)({props:inProps,name:"MuiTypography"}),color=(color=>colorTransformations[color]||color)(themeProps.color),props=(0,extendSxProp.Z)((0,esm_extends.Z)({},themeProps,{color})),{align="inherit",className,component,gutterBottom=!1,noWrap=!1,paragraph=!1,variant="body1",variantMapping=defaultVariantMapping}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded),ownerState=(0,esm_extends.Z)({},props,{align,color,className,component,gutterBottom,noWrap,paragraph,variant,variantMapping}),Component=component||(paragraph?"p":variantMapping[variant]||defaultVariantMapping[variant])||"span",classes=(ownerState=>{const{align,gutterBottom,noWrap,paragraph,variant,classes}=ownerState,slots={root:["root",variant,"inherit"!==ownerState.align&&`align${(0,capitalize.Z)(align)}`,gutterBottom&&"gutterBottom",noWrap&&"noWrap",paragraph&&"paragraph"]};return(0,composeClasses.Z)(slots,getTypographyUtilityClass,classes)})(ownerState);return(0,jsx_runtime.jsx)(TypographyRoot,(0,esm_extends.Z)({as:Component,ref,ownerState,className:(0,clsx_m.Z)(classes.root,className)},other))}))},"./node_modules/@mui/material/esm/utils/createSvgIcon.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>createSvgIcon});var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_SvgIcon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/material/esm/SvgIcon/SvgIcon.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function createSvgIcon(path,displayName){const Component=(props,ref)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__.Z,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__.Z)({"data-testid":`${displayName}Icon`,ref},props,{children:path}));return Component.muiName=_SvgIcon__WEBPACK_IMPORTED_MODULE_2__.Z.muiName,react__WEBPACK_IMPORTED_MODULE_0__.memo(react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(Component))}},"./node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>extendSxProp});var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),_mui_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/utils/esm/deepmerge.js"),_getThemeValue__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@mui/system/esm/getThemeValue.js");const _excluded=["sx"];function extendSxProp(props){const{sx:inSx}=props,other=(0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__.Z)(props,_excluded),{systemProps,otherProps}=(props=>{const result={systemProps:{},otherProps:{}};return Object.keys(props).forEach((prop=>{_getThemeValue__WEBPACK_IMPORTED_MODULE_0__.Gc[prop]?result.systemProps[prop]=props[prop]:result.otherProps[prop]=props[prop]})),result})(other);let finalSx;return finalSx=Array.isArray(inSx)?[systemProps,...inSx]:"function"==typeof inSx?(...args)=>{const result=inSx(...args);return(0,_mui_utils__WEBPACK_IMPORTED_MODULE_2__.P)(result)?(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__.Z)({},systemProps,result):systemProps}:(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__.Z)({},systemProps,inSx),(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__.Z)({},otherProps,{sx:finalSx})}},"./src/components/messaging/master/stories/SidebarBanner.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{SidebarBanner:()=>SidebarBanner,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _SidebarBanner__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/messaging/master/SidebarBanner.tsx"),_mui_icons_material__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/icons-material/esm/Contacts.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"components/messaging/master",component:_SidebarBanner__WEBPACK_IMPORTED_MODULE_2__.Z},SidebarBanner={args:{message:"Banner message",icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_icons_material__WEBPACK_IMPORTED_MODULE_3__.Z,{}),button:"Go!"}};SidebarBanner.parameters={...SidebarBanner.parameters,docs:{...SidebarBanner.parameters?.docs,source:{originalSource:'{\n  args: {\n    message: "Banner message",\n    icon: <Contacts />,\n    button: "Go!"\n  }\n}',...SidebarBanner.parameters?.docs?.source}}};const __namedExportsOrder=["SidebarBanner"]},"./src/components/messaging/master/SidebarBanner.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>SidebarBanner});__webpack_require__("./node_modules/react/index.js");var _mui_material__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/material/esm/Paper/Paper.js"),_mui_material__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/material/esm/Box/Box.js"),_mui_material__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/material/esm/Stack/Stack.js"),_mui_material__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/material/esm/Typography/Typography.js"),_mui_material__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mui/material/esm/Button/Button.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function SidebarBanner(props){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Z,{sx:{display:"flex",flexDirection:"row",margin:1,paddingX:1,paddingTop:2,paddingBottom:props.button?1:2},variant:"outlined",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Z,{marginLeft:1,marginRight:2,children:props.icon}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Z,{flexGrow:1,gap:1,direction:"column",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Z,{display:"inline",children:props.message}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Z,{direction:"row",gap:2,justifyContent:"end",children:[void 0!==props.secondaryButton&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Z,{color:"primary",onClick:props.onClickSecondaryButton,children:props.secondaryButton}),void 0!==props.button&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Z,{color:"primary",variant:void 0===props.secondaryButton?"text":"contained",onClick:props.onClickButton,children:props.button})]})]})]})}SidebarBanner.displayName="SidebarBanner";try{SidebarBanner.displayName="SidebarBanner",SidebarBanner.__docgenInfo={description:"A banner element that has an icon, a message,\nand an optional button",displayName:"SidebarBanner",props:{icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"ReactNode"}},message:{defaultValue:null,description:"",name:"message",required:!0,type:{name:"string"}},button:{defaultValue:null,description:"",name:"button",required:!1,type:{name:"string"}},onClickButton:{defaultValue:null,description:"",name:"onClickButton",required:!1,type:{name:"VoidFunction"}},secondaryButton:{defaultValue:null,description:"",name:"secondaryButton",required:!1,type:{name:"string"}},onClickSecondaryButton:{defaultValue:null,description:"",name:"onClickSecondaryButton",required:!1,type:{name:"VoidFunction"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/messaging/master/SidebarBanner.tsx#SidebarBanner"]={docgenInfo:SidebarBanner.__docgenInfo,name:"SidebarBanner",path:"src/components/messaging/master/SidebarBanner.tsx#SidebarBanner"})}catch(__react_docgen_typescript_loader_error){}}}]);