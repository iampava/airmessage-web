"use strict";(self.webpackChunkairmessage_react=self.webpackChunkairmessage_react||[]).push([[3863],{"./node_modules/@mui/material/esm/Box/Box.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Box_Box});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),styled_engine=__webpack_require__("./node_modules/@mui/styled-engine/index.js"),styleFunctionSx_styleFunctionSx=__webpack_require__("./node_modules/@mui/system/esm/styleFunctionSx/styleFunctionSx.js"),extendSxProp=__webpack_require__("./node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js"),useTheme=__webpack_require__("./node_modules/@mui/system/esm/useTheme.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["className","component"];var ClassNameGenerator=__webpack_require__("./node_modules/@mui/utils/esm/ClassNameGenerator/ClassNameGenerator.js");const Box=function createBox(options={}){const{defaultTheme,defaultClassName="MuiBox-root",generateClassName,styleFunctionSx=styleFunctionSx_styleFunctionSx.Z}=options,BoxRoot=(0,styled_engine.ZP)("div",{shouldForwardProp:prop=>"theme"!==prop&&"sx"!==prop&&"as"!==prop})(styleFunctionSx);return react.forwardRef((function Box(inProps,ref){const theme=(0,useTheme.Z)(defaultTheme),_extendSxProp=(0,extendSxProp.Z)(inProps),{className,component="div"}=_extendSxProp,other=(0,objectWithoutPropertiesLoose.Z)(_extendSxProp,_excluded);return(0,jsx_runtime.jsx)(BoxRoot,(0,esm_extends.Z)({as:component,ref,className:(0,clsx_m.Z)(className,generateClassName?generateClassName(defaultClassName):defaultClassName),theme},other))}))}({defaultTheme:(0,__webpack_require__("./node_modules/@mui/material/esm/styles/createTheme.js").Z)(),defaultClassName:"MuiBox-root",generateClassName:ClassNameGenerator.Z.generate}),Box_Box=Box},"./src/components/messaging/thread/item/bubble/stories/StickerStack.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{StickerStack:()=>StickerStack,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_StickerStack__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/messaging/thread/item/bubble/StickerStack.tsx"),shared_data_stateCodes__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/data/stateCodes.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"components/messaging/bubble",component:_StickerStack__WEBPACK_IMPORTED_MODULE_2__.Z},Template=args=>{const[arrayBuffer,setArrayBuffer]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{fetch("https://picsum.photos/25/25").then((resp=>resp.blob())).then((respBlob=>respBlob.arrayBuffer())).then((arrayBuffer=>setArrayBuffer(arrayBuffer)))}),[]),arrayBuffer?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_StickerStack__WEBPACK_IMPORTED_MODULE_2__.Z,{...args,stickers:[{data:arrayBuffer,dataType:"jpg",date:new Date,messageGuid:"guid",messageIndex:0,sender:"Joe",type:shared_data_stateCodes__WEBPACK_IMPORTED_MODULE_3__.KI.Sticker},{data:arrayBuffer,dataType:"jpg",date:new Date(Date.now()-864e5),messageGuid:"guid",messageIndex:0,sender:"Doe",type:shared_data_stateCodes__WEBPACK_IMPORTED_MODULE_3__.KI.Tapback}]}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:" loading "})};Template.displayName="Template";const StickerStack=Template.bind({});StickerStack.args={peek:!0},StickerStack.parameters={...StickerStack.parameters,docs:{...StickerStack.parameters?.docs,source:{originalSource:'args => {\n  const [arrayBuffer, setArrayBuffer] = useState<ArrayBuffer | null>(null);\n  useEffect(() => {\n    fetch("https://picsum.photos/25/25").then(resp => resp.blob()).then((respBlob: Blob) => respBlob.arrayBuffer()).then(arrayBuffer => setArrayBuffer(arrayBuffer));\n  }, []);\n  if (!arrayBuffer) {\n    return <> loading </>;\n  }\n  return <StickerStackComponent {...args} stickers={[{\n    data: arrayBuffer,\n    dataType: "jpg",\n    date: new Date(),\n    messageGuid: "guid",\n    messageIndex: 0,\n    sender: "Joe",\n    type: MessageModifierType.Sticker\n  }, {\n    data: arrayBuffer,\n    dataType: "jpg",\n    date: new Date(Date.now() - 24 * 60 * 60 * 1000),\n    messageGuid: "guid",\n    messageIndex: 0,\n    sender: "Doe",\n    type: MessageModifierType.Tapback\n  }]} />;\n}',...StickerStack.parameters?.docs?.source}}};const __namedExportsOrder=["StickerStack"]},"./src/components/messaging/thread/item/bubble/StickerStack.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>StickerStack});__webpack_require__("./node_modules/react/index.js");var _mui_material__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/material/esm/styles/styled.js"),_mui_material__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/material/esm/Box/Box.js"),shared_util_hookUtils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/util/hookUtils.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const BoxStackContainer=(0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.ZP)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Z,{shouldForwardProp:prop=>"peek"!==prop})((({peek,theme})=>({zIndex:2,position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",pointerEvents:"none",transition:theme.transitions.create(["opacity"]),opacity:peek?.05:1}))),BoxStackEntry=(0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.ZP)("img")({position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",maxWidth:100,maxHeight:100});function StickerStack(props){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(BoxStackContainer,{peek:!!props.peek,children:props.stickers.map(((sticker,index)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(StickerStackEntry,{sticker},index)))})}function StickerStackEntry(props){const imageURL=(0,shared_util_hookUtils__WEBPACK_IMPORTED_MODULE_4__.vf)(props.sticker.data,props.sticker.dataType);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(BoxStackEntry,{src:imageURL,alt:""})}StickerStack.displayName="StickerStack",StickerStackEntry.displayName="StickerStackEntry";try{StickerStack.displayName="StickerStack",StickerStack.__docgenInfo={description:"A stack of stickers to be overlayed on\ntop of a message bubble",displayName:"StickerStack",props:{stickers:{defaultValue:null,description:"",name:"stickers",required:!0,type:{name:"StickerItem[]"}},peek:{defaultValue:null,description:"",name:"peek",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/messaging/thread/item/bubble/StickerStack.tsx#StickerStack"]={docgenInfo:StickerStack.__docgenInfo,name:"StickerStack",path:"src/components/messaging/thread/item/bubble/StickerStack.tsx#StickerStack"})}catch(__react_docgen_typescript_loader_error){}},"./src/interface/people/peopleUtils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>AddressType,b:()=>PeopleNoPermissionError});let AddressType=function(AddressType){return AddressType.Email="email",AddressType.Phone="phone",AddressType}({});class PeopleNoPermissionError extends Error{}},"./src/state/peopleState.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>PeopleContext});var shared_interface_people_peopleUtils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/interface/people/peopleUtils.ts"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),shared_util_conversationUtils__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/util/conversationUtils.ts"),libphonenumber_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/libphonenumber-js/min/exports/parsePhoneNumberFromString.js"),shared_util_hookUtils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/util/hookUtils.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const PeopleContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({needsPermission:!1,getPerson:()=>{},allPeople:void 0});function PeopleContextProvider(props){const[needsPermission,setNeedsPermission]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),[peopleData,setPeopleData]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(void 0),ready=props.ready;(0,shared_util_hookUtils__WEBPACK_IMPORTED_MODULE_2__.Ev)((addPromise=>{ready&&addPromise(async function gapiLoadPeople(){const personArray=[],contactMap=new Map;let nextPageToken,requestIndex=0;do{requestIndex>0&&requestIndex%2==0&&await new Promise((r=>setTimeout(r,1e3)));const parameters={resourceName:"people/me",personFields:"names,photos,emailAddresses,phoneNumbers",pageToken:nextPageToken,pageSize:1e3,sortOrder:"FIRST_NAME_ASCENDING",sources:["READ_SOURCE_TYPE_CONTACT"]};let response;try{response=await gapi.client.people.people.connections.list(parameters)}catch(error){const response=error;throw 401===response.status||403===response.status?new shared_interface_people_peopleUtils__WEBPACK_IMPORTED_MODULE_3__.b:new GAPIPeopleError(response)}if(!response.result.connections)break;for(const person of response.result.connections){const personData=googlePersonToPersonData(person);personArray.push(personData);for(const address of personData.addresses)contactMap.has(address.value)||contactMap.set(address.value,personData)}nextPageToken=response.result.nextPageToken,console.log("Loaded contacts request index "+requestIndex+" / "+nextPageToken),requestIndex++}while(nextPageToken);return{personArray,personMap:contactMap}}()).then(setPeopleData).catch((error=>{error instanceof shared_interface_people_peopleUtils__WEBPACK_IMPORTED_MODULE_3__.b?setNeedsPermission(!0):console.warn(`Failed to load people: ${error}`)}))}),[ready,setPeopleData]);const getPerson=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((address=>{if(void 0===peopleData)return;let formattedAddress=address;if(!address.includes("@")){const phone=(0,libphonenumber_js__WEBPACK_IMPORTED_MODULE_4__._)(address);void 0!==phone&&(formattedAddress=phone.number.toString())}return peopleData.personMap.get(formattedAddress)}),[peopleData]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(PeopleContext.Provider,{value:{needsPermission,getPerson,allPeople:peopleData?.personArray},children:props.children})}PeopleContextProvider.displayName="PeopleContextProvider";class GAPIPeopleError extends Error{constructor(response){super(response.body),this.response=response}}function googlePersonToPersonData(person){const id=person.resourceName,name=person.names?.[0].displayName,avatar=person.photos?.[0]?.url;return{id,name,avatar,addresses:[...person.emailAddresses?.reduce(((accumulator,address)=>(void 0!==address.value&&accumulator.push({value:address.value,displayValue:address.value,label:address.formattedType,type:shared_interface_people_peopleUtils__WEBPACK_IMPORTED_MODULE_3__.D.Email}),accumulator)),[])??[],...person.phoneNumbers?.reduce(((accumulator,address)=>(void 0!==address.canonicalForm&&accumulator.push({value:address.canonicalForm,displayValue:(0,shared_util_conversationUtils__WEBPACK_IMPORTED_MODULE_5__.Tg)(address.canonicalForm),label:address.formattedType,type:shared_interface_people_peopleUtils__WEBPACK_IMPORTED_MODULE_3__.D.Phone}),accumulator)),[])??[]]}}try{PeopleContextProvider.displayName="PeopleContextProvider",PeopleContextProvider.__docgenInfo={description:"",displayName:"PeopleContextProvider",props:{ready:{defaultValue:null,description:"",name:"ready",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/state/peopleState.tsx#PeopleContextProvider"]={docgenInfo:PeopleContextProvider.__docgenInfo,name:"PeopleContextProvider",path:"src/state/peopleState.tsx#PeopleContextProvider"})}catch(__react_docgen_typescript_loader_error){}},"./src/util/hookUtils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ev:()=>useCancellableEffect,ZM:()=>useIsFaceTimeSupported,b8:()=>useUnsubscribeContainer,em:()=>usePersonName,fu:()=>useNonNullableCacheState,q3:()=>usePersonData,vU:()=>useConversationTitle,vf:()=>useBlobURL});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),shared_connection_connectionManager__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/connection/connectionManager.ts"),_conversationUtils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/util/conversationUtils.ts"),shared_state_peopleState__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/state/peopleState.tsx");function useBlobURL(data,type){const[imageURL,setImageURL]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(void 0);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const imageURL=URL.createObjectURL(new Blob([data],{type}));return setImageURL(imageURL),()=>{URL.revokeObjectURL(imageURL),setImageURL(void 0)}}),[data,type,setImageURL]),imageURL}function useNonNullableCacheState(...args){const initialState=args[0];let initialCacheState;initialCacheState=1===args.length?args[0]:args[1];const[value,setValue]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialState),[cacheValue,setCacheValue]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialCacheState),deferredValue=(0,react__WEBPACK_IMPORTED_MODULE_0__.useDeferredValue)(value);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{deferredValue&&setCacheValue(deferredValue)}),[deferredValue,setCacheValue]),[value,cacheValue,setValue]}function useCancellableEffect(effect,deps){(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{let isCancelled=!1;const cleanup=effect((promise=>new Promise(((resolve,reject)=>{promise.then((val=>!isCancelled&&resolve(val))).catch((error=>!isCancelled&&reject(error)))}))));return()=>{isCancelled=!0,cleanup?.()}}),deps)}function useUnsubscribeContainer(deps){const callbackCollection=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(new Set).current;return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>()=>{for(const unsubscribe of callbackCollection)unsubscribe();callbackCollection.clear()}),deps),callback=>{callbackCollection.add(callback)}}function useIsFaceTimeSupported(){const[isFaceTimeSupported,setIsFaceTimeSupported]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>(shared_connection_connectionManager__WEBPACK_IMPORTED_MODULE_1__.UB.subscribe(setIsFaceTimeSupported),()=>shared_connection_connectionManager__WEBPACK_IMPORTED_MODULE_1__.UB.unsubscribe(setIsFaceTimeSupported))),[setIsFaceTimeSupported]),isFaceTimeSupported}function useConversationTitle(conversation){const peopleState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(shared_state_peopleState__WEBPACK_IMPORTED_MODULE_2__.A);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>void 0!==conversation.name&&conversation.name.length>0?conversation.name:(0,_conversationUtils__WEBPACK_IMPORTED_MODULE_3__.As)(conversation.members,peopleState)),[conversation,peopleState])}function usePersonData(address){const peopleState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(shared_state_peopleState__WEBPACK_IMPORTED_MODULE_2__.A);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>{if(void 0!==address)return peopleState.getPerson(address)}),[address,peopleState])}function usePersonName(address){return usePersonData(address)?.name??address}}}]);