"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[7074],{49613:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(59496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,a(a({ref:t},l),{},{components:n})):r.createElement(f,a({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1037:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return d}});var r=n(665),o=n(40151),i=(n(59496),n(49613)),a=n.p+"assets/images/basic-concepts-ce505e9fedabc27597cb4efe7846b52e.png",s=["components"],c={sidebar_position:1,slug:"/"},u="\ud83d\udc81 Introduction",l={unversionedId:"docs/README",id:"docs/README",title:"\ud83d\udc81 Introduction",description:"Logto offers a comprehensive identity solution covering both the front and backend, complete with pre-built infrastructure and enterprise-grade solutions. Its main features include:",source:"@site/docs/docs/README.mdx",sourceDirName:"docs",slug:"/",permalink:"/",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/docs/README.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/"},sidebar:"docsSidebar",next:{title:"\u26a1 Get started",permalink:"/docs/tutorials/get-started/"}},p={},d=[{value:"Basic concepts",id:"basic-concepts",level:2}],m={toc:d};function f(e){var t=e.components,n=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"-introduction"},"\ud83d\udc81 Introduction"),(0,i.kt)("p",null,"Logto offers a comprehensive identity solution covering both the front and backend, complete with pre-built infrastructure and enterprise-grade solutions. Its main features include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"An OIDC-based identity service"),(0,i.kt)("li",{parentName:"ul"},"User-friendly sign-in experience with customizable CSS"),(0,i.kt)("li",{parentName:"ul"},"Various sign-in options, such as social, email, phone number, and username, including passwordless authentication"),(0,i.kt)("li",{parentName:"ul"},"The management API that is ready to use and can serve as your authentication provider"),(0,i.kt)("li",{parentName:"ul"},"SDKs that can integrate your apps with Logto quickly"),(0,i.kt)("li",{parentName:"ul"},"Flexible connectors that can be scaled with community contributions and customized with SMAL, OAuth, and OIDC protocols"),(0,i.kt)("li",{parentName:"ul"},"RBAC for scalable role authorization to control your resources for diverse use cases"),(0,i.kt)("li",{parentName:"ul"},"User management and audit logs help you understand user identity-related information and keep your security on track.")),(0,i.kt)("p",null,'Our problem space is commonly referred to as "',(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Customer_identity_access_management"},"customer identity access management"),'" (CIAM) or "customer identity solution." While these terms may not be the most exciting, they accurately describe the focus of our work.'),(0,i.kt)("h2",{id:"basic-concepts"},"Basic concepts"),(0,i.kt)("p",null,"To better understand how Logto works, it can be divided into four parts: Admin Console, Sign-in Experience, Core Service, and SDKs."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"Admin Console")," is a web app that allows you to manage your resources and sign-in experience."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"Sign-in Experience")," is the user interface that your end-users interact with, including signing in and creating an account etc."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"Core Service")," is the foundation of Logto and provides essential APIs to support all other features."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"SDKs")," serve as bridges between your application and Logto.")),(0,i.kt)("img",{src:a,alt:"Basic concepts",width:"600px"}),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Admin Console is the easiest way to customize and manage Sign-in Experience and Core Service, and we'll use it across the tutorial. And it is available in both Logto Cloud and Logto Opensource.:::")))}f.isMDXComponent=!0}}]);