"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[54758],{49613:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return k}});var a=r(59496);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(r),k=n,m=u["".concat(s,".").concat(k)]||u[k]||d[k]||o;return r?a.createElement(m,l(l({ref:t},p),{},{components:r})):a.createElement(m,l({ref:t},p))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},6972:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return d}});var a=r(665),n=r(40151),o=(r(59496),r(49613)),l=["components"],i={},s=void 0,c={unversionedId:"sdk/JavaScript/js/classes/class.LogtoRequestError",id:"version-1.x/sdk/JavaScript/js/classes/class.LogtoRequestError",title:"class.LogtoRequestError",description:"Extends",source:"@site/versioned_docs/version-1.x/sdk/JavaScript/js/classes/class.LogtoRequestError.md",sourceDirName:"sdk/JavaScript/js/classes",slug:"/sdk/JavaScript/js/classes/class.LogtoRequestError",permalink:"/sdk/JavaScript/js/classes/class.LogtoRequestError",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/versioned_docs/version-1.x/sdk/JavaScript/js/classes/class.LogtoRequestError.md",tags:[],version:"1.x",frontMatter:{},sidebar:"sdkSidebar",previous:{title:"class.LogtoError",permalink:"/sdk/JavaScript/js/classes/class.LogtoError"},next:{title:"class.OidcError",permalink:"/sdk/JavaScript/js/classes/class.OidcError"}},p={},d=[{value:"Extends",id:"extends",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor()",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Overrides",id:"overrides",level:4},{value:"Source",id:"source",level:4},{value:"Properties",id:"properties",level:2},{value:"cause",id:"cause",level:3},{value:"Source",id:"source-1",level:4},{value:"Inherited from",id:"inherited-from",level:4},{value:"code",id:"code",level:3},{value:"Source",id:"source-2",level:4},{value:"message",id:"message",level:3},{value:"Source",id:"source-3",level:4},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"name",id:"name",level:3},{value:"Source",id:"source-4",level:4},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"stack",id:"stack",level:3},{value:"Source",id:"source-5",level:4},{value:"Inherited from",id:"inherited-from-3",level:4},{value:"prepareStackTrace",id:"preparestacktrace",level:3},{value:"See",id:"see",level:4},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Source",id:"source-6",level:4},{value:"Inherited from",id:"inherited-from-4",level:4},{value:"stackTraceLimit",id:"stacktracelimit",level:3},{value:"Source",id:"source-7",level:4},{value:"Inherited from",id:"inherited-from-5",level:4},{value:"Methods",id:"methods",level:2},{value:"captureStackTrace()",id:"capturestacktrace",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Inherited from",id:"inherited-from-6",level:4},{value:"Source",id:"source-8",level:4}],u={toc:d};function k(e){var t=e.components,r=(0,n.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"extends"},"Extends"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Error"))),(0,o.kt)("h2",{id:"constructors"},"Constructors"),(0,o.kt)("h3",{id:"constructor"},"constructor()"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"new LogtoRequestError"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"code"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"message"),"): ",(0,o.kt)("a",{parentName:"p",href:"/sdk/JavaScript/js/classes/class.LogtoRequestError"},(0,o.kt)("inlineCode",{parentName:"a"},"LogtoRequestError")))),(0,o.kt)("h4",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"code")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"string"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"message")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"string"))))),(0,o.kt)("h4",{id:"returns"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/sdk/JavaScript/js/classes/class.LogtoRequestError"},(0,o.kt)("inlineCode",{parentName:"a"},"LogtoRequestError"))),(0,o.kt)("h4",{id:"overrides"},"Overrides"),(0,o.kt)("p",null,"Error.constructor"),(0,o.kt)("h4",{id:"source"},"Source"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/logto-io/js/blob/d2c2dce/packages/js/src/utils/errors.ts#L40"},"src/utils/errors.ts:40")),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"cause"},"cause"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"optional")," ",(0,o.kt)("strong",{parentName:"p"},"cause"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"unknown"))),(0,o.kt)("h4",{id:"source-1"},"Source"),(0,o.kt)("p",null,"node_modules/typescript/lib/lib.es2022.error.d.ts:24"),(0,o.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,o.kt)("p",null,"Error.cause"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"code"},"code"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"code"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string"))),(0,o.kt)("h4",{id:"source-2"},"Source"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/logto-io/js/blob/d2c2dce/packages/js/src/utils/errors.ts#L38"},"src/utils/errors.ts:38")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"message"},"message"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"message"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string"))),(0,o.kt)("h4",{id:"source-3"},"Source"),(0,o.kt)("p",null,"node_modules/typescript/lib/lib.es5.d.ts:1068"),(0,o.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,o.kt)("p",null,"Error.message"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"name"},"name"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"name"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string"))),(0,o.kt)("h4",{id:"source-4"},"Source"),(0,o.kt)("p",null,"node_modules/typescript/lib/lib.es5.d.ts:1067"),(0,o.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,o.kt)("p",null,"Error.name"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"stack"},"stack"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"optional")," ",(0,o.kt)("strong",{parentName:"p"},"stack"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string"))),(0,o.kt)("h4",{id:"source-5"},"Source"),(0,o.kt)("p",null,"node_modules/typescript/lib/lib.es5.d.ts:1069"),(0,o.kt)("h4",{id:"inherited-from-3"},"Inherited from"),(0,o.kt)("p",null,"Error.stack"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"preparestacktrace"},"prepareStackTrace"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"static")," ",(0,o.kt)("inlineCode",{parentName:"p"},"optional")," ",(0,o.kt)("strong",{parentName:"p"},"prepareStackTrace"),": (",(0,o.kt)("inlineCode",{parentName:"p"},"err"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"stackTraces"),") => ",(0,o.kt)("inlineCode",{parentName:"p"},"any"))),(0,o.kt)("p",null,"Optional override for formatting stack traces"),(0,o.kt)("h4",{id:"see"},"See"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://v8.dev/docs/stack-trace-api#customizing-stack-traces"},"https://v8.dev/docs/stack-trace-api#customizing-stack-traces")),(0,o.kt)("h4",{id:"parameters-1"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"err")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"Error"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"stackTraces")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"CallSite"),"[]")))),(0,o.kt)("h4",{id:"returns-1"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"any")),(0,o.kt)("h4",{id:"source-6"},"Source"),(0,o.kt)("p",null,"node_modules/@types/node/globals.d.ts:11"),(0,o.kt)("h4",{id:"inherited-from-4"},"Inherited from"),(0,o.kt)("p",null,"Error.prepareStackTrace"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"stacktracelimit"},"stackTraceLimit"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"static")," ",(0,o.kt)("strong",{parentName:"p"},"stackTraceLimit"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"number"))),(0,o.kt)("h4",{id:"source-7"},"Source"),(0,o.kt)("p",null,"node_modules/@types/node/globals.d.ts:13"),(0,o.kt)("h4",{id:"inherited-from-5"},"Inherited from"),(0,o.kt)("p",null,"Error.stackTraceLimit"),(0,o.kt)("h2",{id:"methods"},"Methods"),(0,o.kt)("h3",{id:"capturestacktrace"},"captureStackTrace()"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"static")," ",(0,o.kt)("strong",{parentName:"p"},"captureStackTrace"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"targetObject"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"constructorOpt"),"?): ",(0,o.kt)("inlineCode",{parentName:"p"},"void"))),(0,o.kt)("p",null,"Create .stack property on a target object"),(0,o.kt)("h4",{id:"parameters-2"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"targetObject")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"object"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"constructorOpt"),"?"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"Function"))))),(0,o.kt)("h4",{id:"returns-2"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"void")),(0,o.kt)("h4",{id:"inherited-from-6"},"Inherited from"),(0,o.kt)("p",null,"Error.captureStackTrace"),(0,o.kt)("h4",{id:"source-8"},"Source"),(0,o.kt)("p",null,"node_modules/@types/node/globals.d.ts:4"))}k.isMDXComponent=!0}}]);