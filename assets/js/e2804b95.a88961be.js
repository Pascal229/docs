"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[29911],{49613:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=l(n),d=a,m=f["".concat(s,".").concat(d)]||f[d]||u[d]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},69460:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u}});var r=n(665),a=n(40151),o=(n(59496),n(49613)),i=["components"],c={},s=void 0,l={unversionedId:"sdk/JavaScript/js/functions/function.withDefaultScopes",id:"sdk/JavaScript/js/functions/function.withDefaultScopes",title:"function.withDefaultScopes",description:"withDefaultScopes(originalScopes?): string",source:"@site/docs/sdk/JavaScript/js/functions/function.withDefaultScopes.md",sourceDirName:"sdk/JavaScript/js/functions",slug:"/sdk/JavaScript/js/functions/function.withDefaultScopes",permalink:"/next/sdk/JavaScript/js/functions/function.withDefaultScopes",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/sdk/JavaScript/js/functions/function.withDefaultScopes.md",tags:[],version:"current",frontMatter:{},sidebar:"sdkSidebar",previous:{title:"function.verifyIdToken",permalink:"/next/sdk/JavaScript/js/functions/function.verifyIdToken"},next:{title:"type-alias.AccessTokenClaims",permalink:"/next/sdk/JavaScript/js/type-aliases/type-alias.AccessTokenClaims"}},p={},u=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Source",id:"source",level:2}],f={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"withDefaultScopes"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"originalScopes"),"?): ",(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"originalScopes"),"?"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"string"),"[]"),(0,o.kt)("td",{parentName:"tr",align:"left"})))),(0,o.kt)("h2",{id:"returns"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("p",null,"scopes should contain all default scopes (",(0,o.kt)("inlineCode",{parentName:"p"},"openid"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"offline_access")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"profile"),")"),(0,o.kt)("h2",{id:"source"},"Source"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/logto-io/js/blob/d2c2dce/packages/js/src/utils/scopes.ts#L7"},"src/utils/scopes.ts:7")))}d.isMDXComponent=!0}}]);