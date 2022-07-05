"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[9124],{9613:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=o,f=m["".concat(p,".").concat(d)]||m[d]||l[d]||c;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,a=new Array(c);a[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var s=2;s<c;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6916:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return l}});var r=n(5443),o=n(3010),c=(n(9496),n(9613)),a=["components"],i={sidebar_position:5},p="\ud83e\ude9b \u914d\u7f6e\u8fde\u63a5\u5668",s={unversionedId:"docs/recipes/configure-connectors/README",id:"docs/recipes/configure-connectors/README",title:"\ud83e\ude9b \u914d\u7f6e\u8fde\u63a5\u5668",description:"\u8fde\u63a5\u5668 \u662f Logto \u548c\u90a3\u4e9b\u63d0\u4f9b\u77ed\u4fe1\u90ae\u4ef6\u7684\u670d\u52a1\u5546\u4ee5\u53ca\u63d0\u4f9b\u7528\u6237\u4fe1\u606f\u7684\u793e\u4ea4\u5e73\u53f0\u4e4b\u95f4\u7684\u6865\u6881\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/docs/recipes/configure-connectors/README.md",sourceDirName:"docs/recipes/configure-connectors",slug:"/docs/recipes/configure-connectors/",permalink:"/zh-cn/docs/recipes/configure-connectors/",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/i18n/zh-cn/docusaurus-plugin-content-docs/current/docs/recipes/configure-connectors/README.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docsSidebar",previous:{title:"\u642d\u5efa\u8fde\u63a5\u5668\u6307\u5357",permalink:"/zh-cn/docs/recipes/create-your-connector/connector-implementation-guide"},next:{title:"\u8bbe\u7f6e\u8fde\u63a5\u5668\u5c0f\u8d34\u58eb",permalink:"/zh-cn/docs/recipes/configure-connectors/connector-setup-tips"}},u={},l=[{value:"\u231a \u5f00\u59cb\u4e0a\u624b \u26a1",id:"-\u5f00\u59cb\u4e0a\u624b-",level:2}],m={toc:l};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,c.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"-\u914d\u7f6e\u8fde\u63a5\u5668"},"\ud83e\ude9b \u914d\u7f6e\u8fde\u63a5\u5668"),(0,c.kt)("p",null,(0,c.kt)("em",{parentName:"p"},"\u8fde\u63a5\u5668")," \u662f Logto \u548c\u90a3\u4e9b\u63d0\u4f9b\u77ed\u4fe1\u90ae\u4ef6\u7684\u670d\u52a1\u5546\u4ee5\u53ca\u63d0\u4f9b\u7528\u6237\u4fe1\u606f\u7684\u793e\u4ea4\u5e73\u53f0\u4e4b\u95f4\u7684\u6865\u6881\u3002"),(0,c.kt)("p",null,"Logto \u63d0\u4f9b\u4e86\u5f88\u591a\u80fd\u8ba9\u7528\u6237\u53ef\u4ee5\u8bbf\u95ee\u4e09\u65b9\u670d\u52a1\u63d0\u4f9b\u5546\u7684\u8fde\u63a5\u5668\uff0c\u5305\u62ec\u4e86 Google\uff0cGitHub\uff0cFacebook\uff0cSendGrid \u7b49\u7b49\u3002"),(0,c.kt)("p",null,"\u5f53\u4f60\u60f3\u8981\u4f7f\u7528 ",(0,c.kt)("em",{parentName:"p"},"\u8fde\u63a5\u5668")," \u7684\u65f6\u5019\u53ef\u80fd\u4f1a\u611f\u5230\u8ff7\u832b\uff0c\u6bd5\u7adf\u4ed6\u662f\u4e00\u4e2a\u5168\u65b0\u7684\u6982\u5ff5\u3002\ud83d\ude2d"),(0,c.kt)("p",null,"\u4f46\u662f\u4e0d\u8981\u60b2\u4f24\u4e0d\u8981\u5fc3\u6025\uff0c\u770b\u5b8c\u8fd9\u7bc7\u6587\u6863\u53ef\u4ee5\u8ba9\u4f60\u8f7b\u677e\u62ff\u634f\uff01\ud83e\udd0f"),(0,c.kt)("h2",{id:"-\u5f00\u59cb\u4e0a\u624b-"},"\u231a \u5f00\u59cb\u4e0a\u624b \u26a1"),(0,c.kt)("p",null,"\u8ba9\u6211\u4eec\u5148\u4ece\u300c\u7ba1\u7406\u63a7\u5236\u53f0\u300d\u5f00\u59cb\u5427\uff01"),(0,c.kt)("p",null,"\u9996\u5148\u9700\u8981\u767b\u5f55 Logto \u5e10\u53f7\uff08\u8fd9\u9700\u8981\u4f60\u7684\u8d26\u53f7\u6709\u7ba1\u7406\u5458\u6743\u9650\uff09\u3002\u5982\u679c\u6ca1\u6709\u8d26\u53f7\u6216\u8005\u6ca1\u6709\u7ba1\u7406\u5458\u6743\u9650\u7684\u8bdd\uff0c\u4f60\u9700\u8981\u5148\u521b\u5efa\u4e00\u4e2a\uff0c\u8be6\u89c1 ",(0,c.kt)("a",{parentName:"p",href:"/zh-cn/docs/tutorials/get-started/#%E5%88%9B%E5%BB%BA%E4%B8%80%E4%B8%AA%E7%AE%A1%E7%90%86%E5%91%98%E8%B4%A6%E6%88%B7"},"\u521b\u5efa\u4e00\u4e2a\u7ba1\u7406\u5458\u8d26\u6237"),"\u3002"),(0,c.kt)("p",null,"\u70b9\u6309\u5de6\u4fa7\u4fa7\u8fb9\u680f\u4e2d\u7684\u300c\u8fde\u63a5\u5668\u300d\u6309\u94ae \ud83d\ude10"),(0,c.kt)("p",null,"\ud83d\udc7b ",(0,c.kt)("strong",{parentName:"p"},"\u6b22\u8fce\u6765\u5230 ",(0,c.kt)("em",{parentName:"strong"},"\u8fde\u63a5\u5668")," \u7684\u4e16\u754c")," \ud83d\udc7b"),(0,c.kt)("p",null,"\u5728\u8fd9\u91cc\uff0c\u4f60\u53ef\u4ee5\u968f\u5fc3\u6240\u6b32\u5730\u6dfb\u52a0\u3001\u5220\u9664\u3001\u6539\u53d8\u8fde\u63a5\u5668\u7684\u914d\u7f6e\uff01"),(0,c.kt)("p",null,(0,c.kt)("em",{parentName:"p"},"\u8fde\u63a5\u5668")," \u53ef\u4ee5\u5206\u4e3a\u4e09\u7c7b\uff1a",(0,c.kt)("em",{parentName:"p"},"\u77ed\u4fe1\u8fde\u63a5\u5668"),"\uff0c",(0,c.kt)("em",{parentName:"p"},"\u90ae\u4ef6\u8fde\u63a5\u5668")," \u548c ",(0,c.kt)("em",{parentName:"p"},"\u793e\u4ea4\u8fde\u63a5\u5668"),"\u3002\u70b9\u6309\u300c",(0,c.kt)("a",{parentName:"p",href:"../../references/connectors"},"\u8fde\u63a5\u5668"),"\u300d\u67e5\u770b\u66f4\u591a\u5173\u4e8e\u8fde\u63a5\u5668\u7c7b\u578b\u7684\u9610\u8ff0\u3002"),(0,c.kt)("p",null,"\u5728\u8fd9\u4e2a\u9875\u9762\uff0c\u4f60\u53ef\u4ee5\u7ee7\u7eed\u53bb\u8bbe\u7f6e ",(0,c.kt)("em",{parentName:"p"},"\u90ae\u4ef6\u8fde\u63a5\u5668")," \u6216 ",(0,c.kt)("em",{parentName:"p"},"\u77ed\u4fe1\u8fde\u63a5\u5668"),"\u3002\u540c\u65f6\uff0c\u4f60\u4e5f\u53ef\u4ee5\u53bb\u5230\u300c\u793e\u4ea4\u8fde\u63a5\u5668\u300d\u6807\u7b7e\uff0c\u7136\u540e\u5f00\u59cb\u300c\u6dfb\u52a0\u793e\u4ea4\u8fde\u63a5\u5668\u300d\u3002"),(0,c.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,c.kt)("div",{parentName:"div",className:"admonition-heading"},(0,c.kt)("h5",{parentName:"div"},(0,c.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,c.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,c.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,c.kt)("div",{parentName:"div",className:"admonition-content"},(0,c.kt)("p",{parentName:"div"},"\u63a5\u4e0b\u6765\u6211\u4eec\u79fb\u6b65\u300c",(0,c.kt)("a",{parentName:"p",href:"./connector-setup-tips"},"\u8bbe\u7f6e\u8fde\u63a5\u5668\u5c0f\u8d34\u58eb"),"\u300d\u6765\u67e5\u770b\u4e0d\u540c\u7c7b\u578b\u8fde\u63a5\u5668\u7684\u914d\u7f6e\u3002"))))}d.isMDXComponent=!0}}]);