"use strict";(self.webpackChunkairmessage_react=self.webpackChunkairmessage_react||[]).push([[5268],{"./src/components/messaging/thread/item/bubble/stories/MessageBubbleDownloadable.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{MessageBubbleDownloadable:()=>MessageBubbleDownloadable,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _MessageBubbleDownloadable__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/messaging/thread/item/bubble/MessageBubbleDownloadable.tsx"),shared_data_stateCodes__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/data/stateCodes.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"components/messaging/bubble",component:_MessageBubbleDownloadable__WEBPACK_IMPORTED_MODULE_0__.Z},MessageBubbleDownloadable={args:{flow:{anchorBottom:!0,backgroundColor:"action.light",color:"action.main",isOutgoing:!1,isUnconfirmed:!0,anchorTop:!1},data:new Blob(["data"]),size:912112,name:"Data",tapbacks:[{isAddition:!0,sender:"Jon",type:shared_data_stateCodes__WEBPACK_IMPORTED_MODULE_1__.KI.Sticker,messageIndex:0,messageGuid:"guid",tapbackType:shared_data_stateCodes__WEBPACK_IMPORTED_MODULE_1__.cM.Laugh}],stickers:[]}};MessageBubbleDownloadable.parameters={...MessageBubbleDownloadable.parameters,docs:{...MessageBubbleDownloadable.parameters?.docs,source:{originalSource:'{\n  args: {\n    flow: {\n      anchorBottom: true,\n      backgroundColor: "action.light",\n      color: "action.main",\n      isOutgoing: false,\n      isUnconfirmed: true,\n      anchorTop: false\n    },\n    data: new Blob(["data"]),\n    size: 912112,\n    name: "Data",\n    tapbacks: [{\n      isAddition: true,\n      sender: "Jon",\n      type: MessageModifierType.Sticker,\n      messageIndex: 0,\n      messageGuid: "guid",\n      tapbackType: TapbackType.Laugh\n    }],\n    stickers: []\n  }\n}',...MessageBubbleDownloadable.parameters?.docs?.source}}};const __namedExportsOrder=["MessageBubbleDownloadable"]},"./src/components/control/SnackbarProvider.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{S:()=>SnackbarContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_mui_material__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/material/esm/Snackbar/Snackbar.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const SnackbarContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext((()=>console.error("No snackbar function provided")));function SnackbarProvider(props){const[open,setOpen]=react__WEBPACK_IMPORTED_MODULE_0__.useState(!1),[data,setData]=react__WEBPACK_IMPORTED_MODULE_0__.useState();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(SnackbarContext.Provider,{value:function displaySnackbar(data){setOpen(!0),setData(data)},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Z,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open,autoHideDuration:6e3,onClose:function handleClose(event,reason){"clickaway"!==reason&&setOpen(!1)},message:data?.message,action:data?.action}),props.children]})}SnackbarProvider.displayName="SnackbarProvider";try{SnackbarProvider.displayName="SnackbarProvider",SnackbarProvider.__docgenInfo={description:"",displayName:"SnackbarProvider",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/control/SnackbarProvider.tsx#SnackbarProvider"]={docgenInfo:SnackbarProvider.__docgenInfo,name:"SnackbarProvider",path:"src/components/control/SnackbarProvider.tsx#SnackbarProvider"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/messaging/thread/item/bubble/MessageBubbleDownloadable.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>MessageBubbleDownloadable});var react=__webpack_require__("./node_modules/react/index.js"),MessageBubbleWrapper=__webpack_require__("./src/components/messaging/thread/item/bubble/MessageBubbleWrapper.tsx"),styled=__webpack_require__("./node_modules/@mui/material/esm/styles/styled.js"),ButtonBase=__webpack_require__("./node_modules/@mui/material/esm/ButtonBase/ButtonBase.js"),Box=__webpack_require__("./node_modules/@mui/material/esm/Box/Box.js"),CircularProgress=__webpack_require__("./node_modules/@mui/material/esm/CircularProgress/CircularProgress.js"),Stack=__webpack_require__("./node_modules/@mui/material/esm/Stack/Stack.js"),Typography=__webpack_require__("./node_modules/@mui/material/esm/Typography/Typography.js"),messageFlow=__webpack_require__("./src/util/messageFlow.ts"),SnackbarProvider=__webpack_require__("./src/components/control/SnackbarProvider.tsx"),conversationUtils=__webpack_require__("./src/util/conversationUtils.ts"),GetAppRounded=__webpack_require__("./node_modules/@mui/icons-material/esm/GetAppRounded.js"),connectionManager=__webpack_require__("./src/connection/connectionManager.ts"),hookUtils=__webpack_require__("./src/util/hookUtils.ts"),cancellablePromise=__webpack_require__("./src/util/cancellablePromise.ts"),languageUtils=__webpack_require__("./src/util/languageUtils.ts");function accessPaletteColor(palette,specifier){const specifierSplit=specifier.split(".",2);return palette[specifierSplit[0]][specifierSplit[1]]}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const DownloadableButton=(0,styled.ZP)(ButtonBase.Z,{shouldForwardProp:prop=>"string"!=typeof prop||!["amColor","amBackgroundColor","amBorderRadius"].includes(prop)})((({amColor,amBackgroundColor,theme})=>({color:accessPaletteColor(theme.palette,amColor),backgroundColor:accessPaletteColor(theme.palette,amBackgroundColor),paddingLeft:theme.spacing(1.5),paddingRight:theme.spacing(1.5),paddingTop:theme.spacing(.75),paddingBottom:theme.spacing(.75),overflowWrap:"break-word",wordBreak:"break-word",hyphens:"auto",display:"flex",flexDirection:"row",alignItems:"center"}))),DownloadableIcon=(0,styled.ZP)(Box.Z)({flexShrink:0,width:36,height:36,display:"flex",alignItems:"center",justifyContent:"center"});function MessageBubbleDownloadable(props){const{data:fileData,onDataClicked,onDataAvailable}=props,[isDownloading,setIsDownloading]=(0,react.useState)(!1),[sizeAvailable,setSizeAvailable]=(0,react.useState)(props.size),[sizeDownloaded,setSizeDownloaded]=(0,react.useState)(void 0),displaySnackbar=(0,react.useContext)(SnackbarProvider.S);(0,react.useEffect)((()=>{setIsDownloading(!1),setSizeAvailable(props.size),setSizeDownloaded(void 0)}),[props.guid,props.size,setIsDownloading,setSizeAvailable,setSizeDownloaded]);const nameDisplay=props.name??(0,conversationUtils.mJ)(props.type),attachmentSubscriptionContainer=(0,hookUtils.b8)([props.guid]),onClick=(0,react.useCallback)((()=>{if(void 0!==fileData)return void onDataClicked(fileData);setIsDownloading(!0);const downloadProgress=connectionManager.ce(props.guid);downloadProgress.emitter.subscribe((progressEvent=>{"size"===progressEvent.type?setSizeAvailable(progressEvent.value):setSizeDownloaded(progressEvent.value)}),attachmentSubscriptionContainer),(0,cancellablePromise.e)(downloadProgress.promise,attachmentSubscriptionContainer).then((fileData=>{onDataAvailable(fileData)})).catch((error=>{displaySnackbar({message:"Failed to download attachment: "+(0,languageUtils.LF)(error)})})).finally((()=>{setIsDownloading(!1),setSizeDownloaded(void 0)}))}),[props.guid,fileData,onDataClicked,onDataAvailable,setIsDownloading,setSizeAvailable,setSizeDownloaded,displaySnackbar,attachmentSubscriptionContainer]);return(0,jsx_runtime.jsx)(MessageBubbleWrapper.Z,{flow:props.flow,stickers:props.stickers,tapbacks:props.tapbacks,maxWidth:"60%",children:(0,jsx_runtime.jsxs)(DownloadableButton,{style:{borderRadius:(0,messageFlow.yh)(props.flow)},amColor:props.flow.color,amBackgroundColor:props.flow.backgroundColor,disabled:isDownloading,onClick,children:[(0,jsx_runtime.jsx)(DownloadableIcon,{children:isDownloading?(0,jsx_runtime.jsx)(CircularProgress.Z,{sx:{color:props.flow.color},size:24,variant:void 0===sizeDownloaded?"indeterminate":"determinate",value:(sizeDownloaded??0)/sizeAvailable*100}):(0,jsx_runtime.jsx)(GetAppRounded.Z,{})}),(0,jsx_runtime.jsxs)(Stack.Z,{alignItems:"start",marginLeft:1.5,children:[(0,jsx_runtime.jsx)(Typography.Z,{variant:"body2",textAlign:"start",children:nameDisplay}),(0,jsx_runtime.jsx)(Typography.Z,{sx:{opacity:.8},variant:"body2",textAlign:"start",children:isDownloading?`${(0,languageUtils.sS)(sizeDownloaded??0)} of ${(0,languageUtils.sS)(sizeAvailable)}`:`${(0,languageUtils.sS)(sizeAvailable)} • Click to download`})]})]})})}MessageBubbleDownloadable.displayName="MessageBubbleDownloadable";try{MessageBubbleDownloadable.displayName="MessageBubbleDownloadable",MessageBubbleDownloadable.__docgenInfo={description:"A message bubble that allows the user to\ndownload an attachment file",displayName:"MessageBubbleDownloadable",props:{flow:{defaultValue:null,description:"",name:"flow",required:!0,type:{name:"MessagePartFlow"}},data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"Blob | undefined"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string | undefined"}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"number"}},guid:{defaultValue:null,description:"",name:"guid",required:!0,type:{name:"string"}},onDataAvailable:{defaultValue:null,description:"",name:"onDataAvailable",required:!0,type:{name:"(result: FileDownloadResult) => void"}},onDataClicked:{defaultValue:null,description:"",name:"onDataClicked",required:!0,type:{name:"(data: Blob) => void"}},stickers:{defaultValue:null,description:"",name:"stickers",required:!0,type:{name:"StickerItem[]"}},tapbacks:{defaultValue:null,description:"",name:"tapbacks",required:!0,type:{name:"TapbackItem[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/messaging/thread/item/bubble/MessageBubbleDownloadable.tsx#MessageBubbleDownloadable"]={docgenInfo:MessageBubbleDownloadable.__docgenInfo,name:"MessageBubbleDownloadable",path:"src/components/messaging/thread/item/bubble/MessageBubbleDownloadable.tsx#MessageBubbleDownloadable"})}catch(__react_docgen_typescript_loader_error){}},"./src/util/cancellablePromise.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function installCancellablePromise(promise,unsubscribeConsumer){const[wrappedPromise,unsubscribeCallback]=function makeCancellablePromise(promise){let isCancelled=!1;return[new Promise(((resolve,reject)=>{promise.then((val=>{isCancelled||resolve(val)})).catch((error=>{isCancelled||reject(error)}))})),()=>{isCancelled=!0}]}(promise);return unsubscribeConsumer(unsubscribeCallback),wrappedPromise}__webpack_require__.d(__webpack_exports__,{e:()=>installCancellablePromise})}}]);