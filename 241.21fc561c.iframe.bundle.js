"use strict";(self.webpackChunkairmessage_react=self.webpackChunkairmessage_react||[]).push([[241],{"./node_modules/@mui/icons-material/esm/ArrowBack.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mui/material/esm/utils/createSvgIcon.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__=(0,_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__.Z)((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}),"ArrowBack")},"./node_modules/@mui/icons-material/esm/GetAppRounded.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mui/material/esm/utils/createSvgIcon.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__=(0,_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__.Z)((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M16.59 9H15V4c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v5H7.41c-.89 0-1.34 1.08-.71 1.71l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59c.63-.63.19-1.71-.7-1.71zM5 19c0 .55.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1 .45-1 1z"}),"GetAppRounded")},"./node_modules/@mui/icons-material/esm/SaveAlt.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mui/material/esm/utils/createSvgIcon.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__=(0,_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__.Z)((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M19 12v7H5v-7H3v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zm-6 .67 2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2z"}),"SaveAlt")},"./node_modules/@mui/material/esm/DialogActions/DialogActions.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>DialogActions_DialogActions});var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),styled=__webpack_require__("./node_modules/@mui/material/esm/styles/styled.js"),useThemeProps=__webpack_require__("./node_modules/@mui/material/esm/styles/useThemeProps.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getDialogActionsUtilityClass(slot){return(0,generateUtilityClass.Z)("MuiDialogActions",slot)}(0,__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js").Z)("MuiDialogActions",["root","spacing"]);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["className","disableSpacing"],DialogActionsRoot=(0,styled.ZP)("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,!ownerState.disableSpacing&&styles.spacing]}})((({ownerState})=>(0,esm_extends.Z)({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!ownerState.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}}))),DialogActions_DialogActions=react.forwardRef((function DialogActions(inProps,ref){const props=(0,useThemeProps.Z)({props:inProps,name:"MuiDialogActions"}),{className,disableSpacing=!1}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded),ownerState=(0,esm_extends.Z)({},props,{disableSpacing}),classes=(ownerState=>{const{classes,disableSpacing}=ownerState,slots={root:["root",!disableSpacing&&"spacing"]};return(0,composeClasses.Z)(slots,getDialogActionsUtilityClass,classes)})(ownerState);return(0,jsx_runtime.jsx)(DialogActionsRoot,(0,esm_extends.Z)({className:(0,clsx_m.Z)(classes.root,className),ownerState,ref},other))}))},"./src/components/control/SnackbarProvider.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{S:()=>SnackbarContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_mui_material__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/material/esm/Snackbar/Snackbar.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const SnackbarContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext((()=>console.error("No snackbar function provided")));function SnackbarProvider(props){const[open,setOpen]=react__WEBPACK_IMPORTED_MODULE_0__.useState(!1),[data,setData]=react__WEBPACK_IMPORTED_MODULE_0__.useState();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(SnackbarContext.Provider,{value:function displaySnackbar(data){setOpen(!0),setData(data)},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Z,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open,autoHideDuration:6e3,onClose:function handleClose(event,reason){"clickaway"!==reason&&setOpen(!1)},message:data?.message,action:data?.action}),props.children]})}SnackbarProvider.displayName="SnackbarProvider";try{SnackbarProvider.displayName="SnackbarProvider",SnackbarProvider.__docgenInfo={description:"",displayName:"SnackbarProvider",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/control/SnackbarProvider.tsx#SnackbarProvider"]={docgenInfo:SnackbarProvider.__docgenInfo,name:"SnackbarProvider",path:"src/components/control/SnackbarProvider.tsx#SnackbarProvider"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/messaging/thread/item/Message.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Message});var react=__webpack_require__("./node_modules/react/index.js"),styled=__webpack_require__("./node_modules/@mui/material/esm/styles/styled.js"),Stack=__webpack_require__("./node_modules/@mui/material/esm/Stack/Stack.js"),Typography=__webpack_require__("./node_modules/@mui/material/esm/Typography/Typography.js"),Avatar=__webpack_require__("./node_modules/@mui/material/esm/Avatar/Avatar.js"),CircularProgress=__webpack_require__("./node_modules/@mui/material/esm/CircularProgress/CircularProgress.js"),IconButton=__webpack_require__("./node_modules/@mui/material/esm/IconButton/IconButton.js"),Dialog=__webpack_require__("./node_modules/@mui/material/esm/Dialog/Dialog.js"),DialogTitle=__webpack_require__("./node_modules/@mui/material/esm/DialogTitle/DialogTitle.js"),DialogContent=__webpack_require__("./node_modules/@mui/material/esm/DialogContent/DialogContent.js"),DialogContentText=__webpack_require__("./node_modules/@mui/material/esm/DialogContentText/DialogContentText.js"),DialogActions=__webpack_require__("./node_modules/@mui/material/esm/DialogActions/DialogActions.js"),Button=__webpack_require__("./node_modules/@mui/material/esm/Button/Button.js"),dateUtils=__webpack_require__("./src/util/dateUtils.ts"),createSvgIcon=__webpack_require__("./node_modules/@mui/material/esm/utils/createSvgIcon.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const ErrorRounded=(0,createSvgIcon.Z)((0,jsx_runtime.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 11c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm1 4h-2v-2h2v2z"}),"ErrorRounded");var avatarUtils=__webpack_require__("./src/util/avatarUtils.ts"),hookUtils=__webpack_require__("./src/util/hookUtils.ts"),stateCodes=__webpack_require__("./src/data/stateCodes.ts"),MessageBubbleText=__webpack_require__("./src/components/messaging/thread/item/bubble/MessageBubbleText.tsx"),appleConstants=__webpack_require__("./src/data/appleConstants.ts"),browserUtils=__webpack_require__("./src/util/browserUtils.ts"),messageFlow=__webpack_require__("./src/util/messageFlow.ts"),MessageBubbleImage=__webpack_require__("./src/components/messaging/thread/item/bubble/MessageBubbleImage.tsx"),MessageBubbleDownloadable=__webpack_require__("./src/components/messaging/thread/item/bubble/MessageBubbleDownloadable.tsx"),languageUtils=__webpack_require__("./src/util/languageUtils.ts"),arrayUtils=__webpack_require__("./src/util/arrayUtils.ts"),MessageDialog=function(MessageDialog){return MessageDialog[MessageDialog.Error=0]="Error",MessageDialog[MessageDialog.RawError=1]="RawError",MessageDialog}(MessageDialog||{});const MessageStack=(0,styled.ZP)(Stack.Z,{shouldForwardProp:prop=>"amLinked"!==prop})((({amLinked,theme})=>({width:"100%",marginTop:theme.spacing((0,messageFlow.ez)(amLinked))})));function Message(props){const[dialogState,setDialogState]=(0,react.useState)(void 0),closeDialog=(0,react.useCallback)((()=>setDialogState(void 0)),[setDialogState]),openDialogError=(0,react.useCallback)((()=>setDialogState(MessageDialog.Error)),[setDialogState]),openDialogRawError=(0,react.useCallback)((()=>setDialogState(MessageDialog.RawError)),[setDialogState]),copyRawErrorAndClose=(0,react.useCallback)((async()=>{const errorDetail=props.message.error?.detail;void 0!==errorDetail&&await navigator.clipboard.writeText(errorDetail),closeDialog()}),[props.message,closeDialog]),[attachmentDataMap,setAttachmentDataMap]=(0,react.useState)(new Map),isOutgoing=void 0===props.message.sender,displayAvatar=!isOutgoing&&!props.flow.anchorTop,displaySender=props.isGroupChat&&displayAvatar,isUnconfirmed=props.message.status===stateCodes.Bu.Unconfirmed,handleAttachmentData=(0,react.useCallback)(((attachmentIndex,shouldDownload,result)=>{if(shouldDownload){const attachment=props.message.attachments[attachmentIndex];(0,browserUtils.l)(result.data,result.downloadType??attachment.type,result.downloadName??attachment.name)}else setAttachmentDataMap((attachmentDataMap=>new Map(attachmentDataMap).set(attachmentIndex,result)))}),[props.message.attachments,setAttachmentDataMap]),downloadAttachmentFile=(0,react.useCallback)(((attachmentIndex,data)=>{const attachment=props.message.attachments[attachmentIndex];(0,browserUtils.l)(data,attachment.type,attachment.name)}),[props.message.attachments]),getComputedFileData=(0,react.useCallback)((attachmentIndex=>{const attachment=props.message.attachments[attachmentIndex],downloadData=attachmentDataMap.get(attachmentIndex);return{data:downloadData?.data??attachment.data,name:downloadData?.downloadName??attachment.name,type:downloadData?.downloadType??attachment.type}}),[props.message.attachments,attachmentDataMap]),personData=(0,hookUtils.q3)(props.message.sender);let colorPalette;colorPalette=isOutgoing?props.service===appleConstants.YC?"messageOutgoing":"messageOutgoingTextMessage":"messageIncoming";const stickerGroups=(0,react.useMemo)((()=>(0,arrayUtils.l)(props.message.stickers,(sticker=>sticker.messageIndex))),[props.message.stickers]),tapbackGroups=(0,react.useMemo)((()=>(0,arrayUtils.l)(props.message.tapbacks,(tapback=>tapback.messageIndex))),[props.message.tapbacks]),messagePartsArray=[];return props.message.text&&messagePartsArray.push((0,jsx_runtime.jsx)(MessageBubbleText.Z,{flow:{isOutgoing,isUnconfirmed,color:`${colorPalette}.contrastText`,backgroundColor:`${colorPalette}.main`,anchorTop:props.flow.anchorTop,anchorBottom:props.flow.anchorBottom||props.message.attachments.length>0},text:props.message.text,stickers:stickerGroups.get(0)??[],tapbacks:tapbackGroups.get(0)??[]},"messagetext")),messagePartsArray.push(props.message.attachments.map(((attachment,i,attachmentArray)=>{const componentKey=attachment.guid??attachment.localID,messagePartIndex=props.message.text?i+1:i,stickers=stickerGroups.get(messagePartIndex)??[],tapbacks=tapbackGroups.get(messagePartIndex)??[],attachmentData=getComputedFileData(i),flow={isOutgoing,isUnconfirmed,color:`${colorPalette}.contrastText`,backgroundColor:`${colorPalette}.main`,anchorTop:!!props.message.text||props.flow.anchorTop||i>0,anchorBottom:props.flow.anchorBottom||i+1<attachmentArray.length};return void 0!==attachmentData.data&&isAttachmentPreviewable(attachmentData.type)?(0,jsx_runtime.jsx)(MessageBubbleImage.Z,{flow,data:attachmentData.data,name:attachmentData.name,type:attachmentData.type,stickers,tapbacks},componentKey):(0,jsx_runtime.jsx)(MessageBubbleDownloadable.Z,{flow,data:attachmentData.data,name:attachmentData.name,type:attachmentData.type,size:attachment.size,guid:attachment.guid,onDataAvailable:data=>handleAttachmentData(i,!isAttachmentPreviewable(attachmentData.type),data),onDataClicked:data=>downloadAttachmentFile(i,data),stickers,tapbacks},componentKey)}))),(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(MessageStack,{direction:"column",amLinked:props.flow.anchorTop,children:[props.flow.showDivider&&(0,jsx_runtime.jsx)(Typography.Z,{paddingTop:6,paddingBottom:1,paddingX:1,textAlign:"center",variant:"body2",color:"textSecondary",children:(0,dateUtils.Be)(props.message.date)}),displaySender&&(0,jsx_runtime.jsx)(Typography.Z,{marginBottom:.2,marginLeft:"40px",variant:"caption",color:"textSecondary",children:personData?.name??props.message.sender}),(0,jsx_runtime.jsxs)(Stack.Z,{direction:"row",alignItems:"flex-start",flexShrink:0,children:[(0,jsx_runtime.jsx)(Avatar.Z,{sx:{width:32,height:32,fontSize:14},style:{backgroundColor:(0,avatarUtils._)(props.message.sender??""),visibility:displayAvatar?void 0:"hidden"},src:personData?.avatar}),(0,jsx_runtime.jsx)(Stack.Z,{sx:{marginLeft:1},gap:(0,messageFlow.ez)(!1),flexGrow:1,direction:"column",alignItems:isOutgoing?"end":"start",children:messagePartsArray}),void 0!==props.message.progress&&void 0===props.message.error&&(0,jsx_runtime.jsx)(CircularProgress.Z,{sx:{marginX:1,marginY:"1px"},size:24,variant:-1===props.message.progress?"indeterminate":"determinate",value:props.message.progress}),void 0!==props.message.error&&(0,jsx_runtime.jsx)(IconButton.Z,{sx:{margin:"1px"},color:"error",size:"small",onClick:openDialogError,children:(0,jsx_runtime.jsx)(ErrorRounded,{})})]}),props.showStatus&&(0,jsx_runtime.jsx)(Typography.Z,{marginTop:.5,textAlign:"end",variant:"caption",color:"textSecondary",children:getStatusString(props.message)})]}),(0,jsx_runtime.jsxs)(Dialog.Z,{open:dialogState===MessageDialog.Error,onClose:closeDialog,children:[(0,jsx_runtime.jsx)(DialogTitle.Z,{children:"Your message could not be sent"}),void 0!==props.message.error&&(0,jsx_runtime.jsxs)(react.Fragment,{children:[(0,jsx_runtime.jsx)(DialogContent.Z,{children:(0,jsx_runtime.jsx)(DialogContentText.Z,{children:(0,languageUtils.OW)(props.message.error.code)})}),(0,jsx_runtime.jsxs)(DialogActions.Z,{children:[void 0!==props.message.error.detail&&(0,jsx_runtime.jsx)(Button.Z,{onClick:openDialogRawError,color:"primary",children:"Error details"}),(0,jsx_runtime.jsx)(Button.Z,{onClick:closeDialog,color:"primary",autoFocus:!0,children:"Dismiss"})]})]})]}),(0,jsx_runtime.jsxs)(Dialog.Z,{open:dialogState===MessageDialog.RawError,onClose:closeDialog,children:[(0,jsx_runtime.jsx)(DialogTitle.Z,{children:"Error details"}),void 0!==props.message.error&&(0,jsx_runtime.jsxs)(react.Fragment,{children:[(0,jsx_runtime.jsx)(DialogContent.Z,{children:(0,jsx_runtime.jsx)(DialogContentText.Z,{fontFamily:"monospace",children:props.message.error.detail})}),(0,jsx_runtime.jsxs)(DialogActions.Z,{children:[(0,jsx_runtime.jsx)(Button.Z,{onClick:copyRawErrorAndClose,color:"primary",children:"Copy to clipboard"}),(0,jsx_runtime.jsx)(Button.Z,{onClick:closeDialog,color:"primary",autoFocus:!0,children:"Dismiss"})]})]})]})]})}function getStatusString(message){return message.status===stateCodes.Bu.Delivered?"Delivered":message.status===stateCodes.Bu.Read?message.statusDate?"Read • "+(0,dateUtils.rO)(message.statusDate):"Read":void 0}function isAttachmentPreviewable(mimeType){return mimeType.startsWith("image/")}try{Message.displayName="Message",Message.__docgenInfo={description:"",displayName:"Message",props:{message:{defaultValue:null,description:"",name:"message",required:!0,type:{name:"MessageItem"}},isGroupChat:{defaultValue:null,description:"",name:"isGroupChat",required:!0,type:{name:"boolean"}},service:{defaultValue:null,description:"",name:"service",required:!0,type:{name:"string"}},flow:{defaultValue:null,description:"",name:"flow",required:!0,type:{name:"MessageFlow"}},showStatus:{defaultValue:null,description:"",name:"showStatus",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/messaging/thread/item/Message.tsx#Message"]={docgenInfo:Message.__docgenInfo,name:"Message",path:"src/components/messaging/thread/item/Message.tsx#Message"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/messaging/thread/item/bubble/MessageBubbleDownloadable.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>MessageBubbleDownloadable});var react=__webpack_require__("./node_modules/react/index.js"),MessageBubbleWrapper=__webpack_require__("./src/components/messaging/thread/item/bubble/MessageBubbleWrapper.tsx"),styled=__webpack_require__("./node_modules/@mui/material/esm/styles/styled.js"),ButtonBase=__webpack_require__("./node_modules/@mui/material/esm/ButtonBase/ButtonBase.js"),Box=__webpack_require__("./node_modules/@mui/material/esm/Box/Box.js"),CircularProgress=__webpack_require__("./node_modules/@mui/material/esm/CircularProgress/CircularProgress.js"),Stack=__webpack_require__("./node_modules/@mui/material/esm/Stack/Stack.js"),Typography=__webpack_require__("./node_modules/@mui/material/esm/Typography/Typography.js"),messageFlow=__webpack_require__("./src/util/messageFlow.ts"),SnackbarProvider=__webpack_require__("./src/components/control/SnackbarProvider.tsx"),conversationUtils=__webpack_require__("./src/util/conversationUtils.ts"),GetAppRounded=__webpack_require__("./node_modules/@mui/icons-material/esm/GetAppRounded.js"),connectionManager=__webpack_require__("./src/connection/connectionManager.ts"),hookUtils=__webpack_require__("./src/util/hookUtils.ts"),cancellablePromise=__webpack_require__("./src/util/cancellablePromise.ts"),languageUtils=__webpack_require__("./src/util/languageUtils.ts");function accessPaletteColor(palette,specifier){const specifierSplit=specifier.split(".",2);return palette[specifierSplit[0]][specifierSplit[1]]}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const DownloadableButton=(0,styled.ZP)(ButtonBase.Z,{shouldForwardProp:prop=>"string"!=typeof prop||!["amColor","amBackgroundColor","amBorderRadius"].includes(prop)})((({amColor,amBackgroundColor,theme})=>({color:accessPaletteColor(theme.palette,amColor),backgroundColor:accessPaletteColor(theme.palette,amBackgroundColor),paddingLeft:theme.spacing(1.5),paddingRight:theme.spacing(1.5),paddingTop:theme.spacing(.75),paddingBottom:theme.spacing(.75),overflowWrap:"break-word",wordBreak:"break-word",hyphens:"auto",display:"flex",flexDirection:"row",alignItems:"center"}))),DownloadableIcon=(0,styled.ZP)(Box.Z)({flexShrink:0,width:36,height:36,display:"flex",alignItems:"center",justifyContent:"center"});function MessageBubbleDownloadable(props){const{data:fileData,onDataClicked,onDataAvailable}=props,[isDownloading,setIsDownloading]=(0,react.useState)(!1),[sizeAvailable,setSizeAvailable]=(0,react.useState)(props.size),[sizeDownloaded,setSizeDownloaded]=(0,react.useState)(void 0),displaySnackbar=(0,react.useContext)(SnackbarProvider.S);(0,react.useEffect)((()=>{setIsDownloading(!1),setSizeAvailable(props.size),setSizeDownloaded(void 0)}),[props.guid,props.size,setIsDownloading,setSizeAvailable,setSizeDownloaded]);const nameDisplay=props.name??(0,conversationUtils.mJ)(props.type),attachmentSubscriptionContainer=(0,hookUtils.b8)([props.guid]),onClick=(0,react.useCallback)((()=>{if(void 0!==fileData)return void onDataClicked(fileData);setIsDownloading(!0);const downloadProgress=connectionManager.ce(props.guid);downloadProgress.emitter.subscribe((progressEvent=>{"size"===progressEvent.type?setSizeAvailable(progressEvent.value):setSizeDownloaded(progressEvent.value)}),attachmentSubscriptionContainer),(0,cancellablePromise.e)(downloadProgress.promise,attachmentSubscriptionContainer).then((fileData=>{onDataAvailable(fileData)})).catch((error=>{displaySnackbar({message:"Failed to download attachment: "+(0,languageUtils.LF)(error)})})).finally((()=>{setIsDownloading(!1),setSizeDownloaded(void 0)}))}),[props.guid,fileData,onDataClicked,onDataAvailable,setIsDownloading,setSizeAvailable,setSizeDownloaded,displaySnackbar,attachmentSubscriptionContainer]);return(0,jsx_runtime.jsx)(MessageBubbleWrapper.Z,{flow:props.flow,stickers:props.stickers,tapbacks:props.tapbacks,maxWidth:"60%",children:(0,jsx_runtime.jsxs)(DownloadableButton,{style:{borderRadius:(0,messageFlow.yh)(props.flow)},amColor:props.flow.color,amBackgroundColor:props.flow.backgroundColor,disabled:isDownloading,onClick,children:[(0,jsx_runtime.jsx)(DownloadableIcon,{children:isDownloading?(0,jsx_runtime.jsx)(CircularProgress.Z,{sx:{color:props.flow.color},size:24,variant:void 0===sizeDownloaded?"indeterminate":"determinate",value:(sizeDownloaded??0)/sizeAvailable*100}):(0,jsx_runtime.jsx)(GetAppRounded.Z,{})}),(0,jsx_runtime.jsxs)(Stack.Z,{alignItems:"start",marginLeft:1.5,children:[(0,jsx_runtime.jsx)(Typography.Z,{variant:"body2",textAlign:"start",children:nameDisplay}),(0,jsx_runtime.jsx)(Typography.Z,{sx:{opacity:.8},variant:"body2",textAlign:"start",children:isDownloading?`${(0,languageUtils.sS)(sizeDownloaded??0)} of ${(0,languageUtils.sS)(sizeAvailable)}`:`${(0,languageUtils.sS)(sizeAvailable)} • Click to download`})]})]})})}MessageBubbleDownloadable.displayName="MessageBubbleDownloadable";try{MessageBubbleDownloadable.displayName="MessageBubbleDownloadable",MessageBubbleDownloadable.__docgenInfo={description:"A message bubble that allows the user to\ndownload an attachment file",displayName:"MessageBubbleDownloadable",props:{flow:{defaultValue:null,description:"",name:"flow",required:!0,type:{name:"MessagePartFlow"}},data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"Blob | undefined"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string | undefined"}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"number"}},guid:{defaultValue:null,description:"",name:"guid",required:!0,type:{name:"string"}},onDataAvailable:{defaultValue:null,description:"",name:"onDataAvailable",required:!0,type:{name:"(result: FileDownloadResult) => void"}},onDataClicked:{defaultValue:null,description:"",name:"onDataClicked",required:!0,type:{name:"(data: Blob) => void"}},stickers:{defaultValue:null,description:"",name:"stickers",required:!0,type:{name:"StickerItem[]"}},tapbacks:{defaultValue:null,description:"",name:"tapbacks",required:!0,type:{name:"TapbackItem[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/messaging/thread/item/bubble/MessageBubbleDownloadable.tsx#MessageBubbleDownloadable"]={docgenInfo:MessageBubbleDownloadable.__docgenInfo,name:"MessageBubbleDownloadable",path:"src/components/messaging/thread/item/bubble/MessageBubbleDownloadable.tsx#MessageBubbleDownloadable"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/messaging/thread/item/bubble/MessageBubbleImage.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>MessageBubbleImage});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),shared_components_messaging_thread_item_bubble_MessageBubbleWrapper__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__("./src/components/messaging/thread/item/bubble/MessageBubbleWrapper.tsx"),_mui_material__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/material/esm/styles/styled.js"),_mui_material__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@mui/material/esm/Backdrop/Backdrop.js"),_mui_material__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@mui/material/esm/Toolbar/Toolbar.js"),_mui_material__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/@mui/material/esm/IconButton/IconButton.js"),_mui_material__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./node_modules/@mui/material/esm/Typography/Typography.js"),_mui_material__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./node_modules/@mui/material/esm/Tooltip/Tooltip.js"),_mui_material__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("./node_modules/@mui/material/esm/Box/Box.js"),_mui_material__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__("./node_modules/@mui/material/esm/ButtonBase/ButtonBase.js"),shared_util_messageFlow__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/util/messageFlow.ts"),shared_util_hookUtils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/util/hookUtils.ts"),_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/material/esm/styles/createTheme.js"),_mui_material_styles__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@mui/system/esm/ThemeProvider/ThemeProvider.js"),shared_util_browserUtils__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/util/browserUtils.ts"),_mui_icons_material__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./node_modules/@mui/icons-material/esm/ArrowBack.js"),_mui_icons_material__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("./node_modules/@mui/icons-material/esm/SaveAlt.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const ImagePreview=(0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.ZP)("img")((({theme})=>({backgroundColor:theme.palette.background.sidebar,maxWidth:"100%"}))),lightboxTheme=(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.Z)({palette:{mode:"dark",messageIncoming:void 0,messageOutgoing:void 0,messageOutgoingTextMessage:void 0}});function MessageBubbleImage(props){const imageURL=(0,shared_util_hookUtils__WEBPACK_IMPORTED_MODULE_4__.vf)(props.data),[previewOpen,setPreviewOpen]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),downloadAttachmentFile=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((event=>{event.stopPropagation(),void 0!==imageURL&&(0,shared_util_browserUtils__WEBPACK_IMPORTED_MODULE_5__.U)(imageURL,props.type,props.name)}),[imageURL,props.type,props.name]),borderRadius=(0,shared_util_messageFlow__WEBPACK_IMPORTED_MODULE_6__.yh)(props.flow);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material_styles__WEBPACK_IMPORTED_MODULE_7__.Z,{theme:lightboxTheme,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Z,{sx:{zIndex:theme=>theme.zIndex.modal,flexDirection:"column",alignItems:"stretch",backgroundColor:"rgba(0, 0, 0, 0.9)"},open:previewOpen,onClick:()=>setPreviewOpen(!1),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Z,{sx:{flexShrink:0},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Z,{edge:"start",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_icons_material__WEBPACK_IMPORTED_MODULE_11__.Z,{})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_12__.Z,{flexGrow:1,variant:"h6",color:"textPrimary",children:props.name}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_13__.Z,{title:"Save",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Z,{onClick:downloadAttachmentFile,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_icons_material__WEBPACK_IMPORTED_MODULE_14__.Z,{})})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_15__.Z,{flexGrow:1,paddingLeft:8,paddingRight:8,paddingBottom:8,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_15__.Z,{sx:{width:"100%",height:"100%",backgroundImage:`url("${imageURL}")`,backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"contain"}})})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(shared_components_messaging_thread_item_bubble_MessageBubbleWrapper__WEBPACK_IMPORTED_MODULE_16__.Z,{flow:props.flow,stickers:props.stickers,tapbacks:props.tapbacks,maxWidth:400,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_17__.Z,{style:{borderRadius},onClick:()=>setPreviewOpen(!0),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(ImagePreview,{style:{borderRadius},src:imageURL,alt:""})})})]})}try{MessageBubbleImage.displayName="MessageBubbleImage",MessageBubbleImage.__docgenInfo={description:"A message bubble that displays an image thumbnail,\nand allows the user to enlarge the image by\nclicking on it",displayName:"MessageBubbleImage",props:{flow:{defaultValue:null,description:"",name:"flow",required:!0,type:{name:"MessagePartFlow"}},data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"ArrayBuffer | Blob"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"string"}},stickers:{defaultValue:null,description:"",name:"stickers",required:!0,type:{name:"StickerItem[]"}},tapbacks:{defaultValue:null,description:"",name:"tapbacks",required:!0,type:{name:"TapbackItem[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/messaging/thread/item/bubble/MessageBubbleImage.tsx#MessageBubbleImage"]={docgenInfo:MessageBubbleImage.__docgenInfo,name:"MessageBubbleImage",path:"src/components/messaging/thread/item/bubble/MessageBubbleImage.tsx#MessageBubbleImage"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/messaging/thread/item/bubble/MessageBubbleText.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>MessageBubbleText});__webpack_require__("./node_modules/react/index.js");var linkify_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/linkify-react/dist/linkify-react.es.js"),shared_components_messaging_thread_item_bubble_MessageBubbleWrapper__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/messaging/thread/item/bubble/MessageBubbleWrapper.tsx"),_mui_material__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/material/esm/styles/styled.js"),_mui_material__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/material/esm/Typography/Typography.js"),shared_util_messageFlow__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/util/messageFlow.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const MessageBubbleTypography=(0,_mui_material__WEBPACK_IMPORTED_MODULE_3__.ZP)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Z)((({theme})=>({paddingLeft:theme.spacing(1.5),paddingRight:theme.spacing(1.5),paddingTop:theme.spacing(.75),paddingBottom:theme.spacing(.75),overflowWrap:"break-word",wordBreak:"break-word",hyphens:"auto",whiteSpace:"break-spaces","& a":{color:"inherit"}})));function MessageBubbleText(props){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(shared_components_messaging_thread_item_bubble_MessageBubbleWrapper__WEBPACK_IMPORTED_MODULE_5__.Z,{flow:props.flow,stickers:props.stickers,tapbacks:props.tapbacks,maxWidth:"60%",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(MessageBubbleTypography,{color:props.flow.color,bgcolor:props.flow.backgroundColor,borderRadius:(0,shared_util_messageFlow__WEBPACK_IMPORTED_MODULE_6__.yh)(props.flow),variant:"body2",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(linkify_react__WEBPACK_IMPORTED_MODULE_1__.Z,{options:{target:"_blank"},children:props.text})})})}MessageBubbleText.displayName="MessageBubbleText";try{MessageBubbleText.displayName="MessageBubbleText",MessageBubbleText.__docgenInfo={description:"A message bubble that displays text content",displayName:"MessageBubbleText",props:{flow:{defaultValue:null,description:"",name:"flow",required:!0,type:{name:"MessagePartFlow"}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},stickers:{defaultValue:null,description:"",name:"stickers",required:!0,type:{name:"StickerItem[]"}},tapbacks:{defaultValue:null,description:"",name:"tapbacks",required:!0,type:{name:"TapbackItem[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/messaging/thread/item/bubble/MessageBubbleText.tsx#MessageBubbleText"]={docgenInfo:MessageBubbleText.__docgenInfo,name:"MessageBubbleText",path:"src/components/messaging/thread/item/bubble/MessageBubbleText.tsx#MessageBubbleText"})}catch(__react_docgen_typescript_loader_error){}},"./src/util/arrayUtils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function groupArray(array,keyExtractor){return array.reduce(((accumulator,item)=>{const key=keyExtractor(item),itemArray=accumulator.get(key);return void 0!==itemArray?itemArray.push(item):accumulator.set(key,[item]),accumulator}),new Map)}__webpack_require__.d(__webpack_exports__,{l:()=>groupArray})},"./src/util/avatarUtils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>colorFromContact});const colors=["#FF1744","#F50057","#B317CF","#703BE3","#3D5AFE","#2979FF","#00B0FF","#00B8D4","#00BFA5","#00C853","#5DD016","#99CC00","#F2CC0D","#FFC400","#FF9100","#FF3D00"];function colorFromContact(contact){return colors[Math.abs(function hashString(input){let hash=0;for(let i=0;i<input.length;i++)hash=(hash<<5)-hash+input.charCodeAt(i),hash|=0;return hash}(contact))%colors.length]}},"./src/util/browserUtils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function downloadBlob(data,type,name){const blobURL=URL.createObjectURL(data);downloadURL(blobURL,type,name),URL.revokeObjectURL(blobURL)}function downloadURL(url,type,name){const link=document.createElement("a");link.download=name,link.href=url,link.click(),link.remove()}__webpack_require__.d(__webpack_exports__,{U:()=>downloadURL,l:()=>downloadBlob})},"./src/util/cancellablePromise.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function installCancellablePromise(promise,unsubscribeConsumer){const[wrappedPromise,unsubscribeCallback]=function makeCancellablePromise(promise){let isCancelled=!1;return[new Promise(((resolve,reject)=>{promise.then((val=>{isCancelled||resolve(val)})).catch((error=>{isCancelled||reject(error)}))})),()=>{isCancelled=!0}]}(promise);return unsubscribeConsumer(unsubscribeCallback),wrappedPromise}__webpack_require__.d(__webpack_exports__,{e:()=>installCancellablePromise})},"./src/util/dateUtils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Be:()=>getTimeDivider,rO:()=>getDeliveryStatusTime,xs:()=>getLastUpdateStatusTime});var luxon__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/luxon/src/luxon.js");function getLastUpdateStatusTime(date){const dateNow=new Date,timeDiff=dateNow.getTime()-date.getTime();if(timeDiff<6e4)return"Just now";if(timeDiff<36e5){return`${Math.floor(timeDiff/6e4)} min`}if(checkSameDay(date,dateNow))return luxon__WEBPACK_IMPORTED_MODULE_0__.ou.fromJSDate(date).toLocaleString(luxon__WEBPACK_IMPORTED_MODULE_0__.ou.TIME_SIMPLE);if(compareDates(date,new Date(dateNow.getFullYear(),dateNow.getMonth(),dateNow.getDate()-7))>0)return luxon__WEBPACK_IMPORTED_MODULE_0__.ou.fromJSDate(date).toFormat("ccc");if(compareDates(date,new Date(dateNow.getFullYear()-1,dateNow.getMonth(),dateNow.getDate()))>0)return luxon__WEBPACK_IMPORTED_MODULE_0__.ou.fromJSDate(date).toFormat("LLL d");return luxon__WEBPACK_IMPORTED_MODULE_0__.ou.fromJSDate(date).toFormat("LLL yyyy")}function getTimeDivider(date){const dateNow=new Date,luxon=luxon__WEBPACK_IMPORTED_MODULE_0__.ou.fromJSDate(date),formattedTime=luxon.toLocaleString(luxon__WEBPACK_IMPORTED_MODULE_0__.ou.TIME_SIMPLE);if(checkSameDay(date,dateNow))return formattedTime;if(checkSameDay(date,new Date(dateNow.getFullYear(),dateNow.getMonth(),dateNow.getDate()-1)))return"Yesterday • "+formattedTime;if(compareDates(date,new Date(dateNow.getFullYear(),dateNow.getMonth(),dateNow.getDate()-7))>0)return luxon.toFormat("cccc")+" • "+formattedTime;if(compareDates(date,new Date(dateNow.getFullYear()-1,dateNow.getMonth(),dateNow.getDate()))>0)return luxon.toFormat("cccc, LLLL d")+" • "+formattedTime;return luxon.toFormat("LLLL d, yyyy")+" • "+formattedTime}function getDeliveryStatusTime(date){const dateNow=new Date,luxon=luxon__WEBPACK_IMPORTED_MODULE_0__.ou.fromJSDate(date),formattedTime=luxon.toLocaleString(luxon__WEBPACK_IMPORTED_MODULE_0__.ou.TIME_SIMPLE);if(checkSameDay(date,dateNow))return formattedTime;if(checkSameDay(date,new Date(dateNow.getFullYear(),dateNow.getMonth(),dateNow.getDate()-1)))return"Yesterday";if(compareDates(date,new Date(dateNow.getFullYear(),dateNow.getMonth(),dateNow.getDate()-7))>0)return luxon.toFormat("cccc");if(compareDates(date,new Date(dateNow.getFullYear()-1,dateNow.getMonth(),dateNow.getDate()))>0)return luxon.toFormat("LLL d");return luxon.toFormat("LLL d, yyyy")+" • "+formattedTime}function checkSameDay(date1,date2){return date1.getFullYear()===date2.getFullYear()&&date1.getMonth()===date2.getMonth()&&date1.getDate()===date2.getDate()}function compareDates(date1,date2){return date1.getFullYear()<date2.getFullYear()?-1:date1.getFullYear()>date2.getFullYear()?1:date1.getMonth()<date2.getMonth()?-1:date1.getMonth()>date2.getMonth()?1:date1.getDate()<date2.getDate()?-1:date1.getDate()>date2.getDate()?1:0}}}]);