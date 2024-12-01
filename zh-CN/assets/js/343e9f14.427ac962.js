"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[54152],{85002:(t,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>e,toc:()=>c});const e=JSON.parse('{"id":"integrate-logto/integrate-logto-into-your-application/README","title":"\u5c06 Logto \u96c6\u6210\u5230\u4f60\u7684\u5e94\u7528\u4e2d","description":"\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\uff0c\u5c06\u8ba4\u8bc1 (Authentication) \u6dfb\u52a0\u5230\u4f60\u7684\u5e94\u7528\u4e2d\uff0c\u65e0\u8bba\u662f\u9762\u5411\u7528\u6237\u7684\u5e94\u7528\u8fd8\u662f\u673a\u5668\u5bf9\u673a\u5668\u7684\u670d\u52a1\uff1a","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/integrate-logto/integrate-logto-into-your-application/README.mdx","sourceDirName":"integrate-logto/integrate-logto-into-your-application","slug":"/integrate-logto/integrate-logto-into-your-application/","permalink":"/zh-CN/integrate-logto/integrate-logto-into-your-application/","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/zh-CN/docusaurus-plugin-content-docs/current/integrate-logto/integrate-logto-into-your-application/README.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"docsSidebar","previous":{"title":"\u96c6\u6210 Logto","permalink":"/zh-CN/integrate-logto/"},"next":{"title":"\u7406\u89e3\u8ba4\u8bc1 (Authentication) \u6d41\u7a0b","permalink":"/zh-CN/integrate-logto/integrate-logto-into-your-application/understand-authentication-flow"}}');var i=o(86070),r=o(15658);const s={sidebar_position:1},a="\u5c06 Logto \u96c6\u6210\u5230\u4f60\u7684\u5e94\u7528\u4e2d",l={},c=[];function d(t){const n={a:"a",admonition:"admonition",h1:"h1",header:"header",li:"li",ol:"ol",p:"p",...(0,r.R)(),...t.components},{CloudLink:o,Url:e}=n;return o||u("CloudLink",!0),e||u("Url",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"\u5c06-logto-\u96c6\u6210\u5230\u4f60\u7684\u5e94\u7528\u4e2d",children:"\u5c06 Logto \u96c6\u6210\u5230\u4f60\u7684\u5e94\u7528\u4e2d"})}),"\n",(0,i.jsx)(n.p,{children:"\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\uff0c\u5c06\u8ba4\u8bc1 (Authentication) \u6dfb\u52a0\u5230\u4f60\u7684\u5e94\u7528\u4e2d\uff0c\u65e0\u8bba\u662f\u9762\u5411\u7528\u6237\u7684\u5e94\u7528\u8fd8\u662f\u673a\u5668\u5bf9\u673a\u5668\u7684\u670d\u52a1\uff1a"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u5bfc\u822a\u5230 ",(0,i.jsx)(o,{to:"/applications",children:"Console > Applications"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u70b9\u51fb\u201c\u521b\u5efa\u5e94\u7528\u201d\u4ee5\u6dfb\u52a0\u65b0\u5e94\u7528"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u9009\u62e9\u4f60\u7684\u5e94\u7528\u6846\u67b6\u5f00\u59cb\u3002\u5982\u679c\u627e\u4e0d\u5230\u4f60\u7684\u6846\u67b6\uff0c\u8bf7\u70b9\u51fb\u5e94\u7528\u521b\u5efa\u9875\u9762\u53f3\u4e0b\u89d2\u7684\u201c\u521b\u5efa\u65e0\u6846\u67b6\u5e94\u7528\u201d\u6309\u94ae\uff0c\u901a\u8fc7\u9009\u62e9 ",(0,i.jsx)(n.a,{href:"/integrate-logto/application-data-structure/#application-types",children:"\u5e94\u7528\u7c7b\u578b"})," \u6765\u521b\u5efa\u5e94\u7528\uff0c\u6216\u8005\u6309\u7167\u6211\u4eec\u7684 ",(0,i.jsx)(n.a,{href:"/developers/sdk-conventions",children:"SDK \u7ea6\u5b9a"})," \u63d0\u4ea4\u529f\u80fd\u8bf7\u6c42\u6216\u8d21\u732e SDK\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u9009\u62e9\u6846\u67b6\u540e\uff0c\u4f60\u5c06\u770b\u5230\u8be5\u6846\u67b6 SDK \u7684\u5feb\u901f\u5165\u95e8\u6307\u5357\u3002\u6309\u7167\u6b65\u9aa4\u914d\u7f6e\u548c\u96c6\u6210\u4f60\u7684\u5e94\u7528\u3002\u5982\u679c\u4f60\u9700\u8981\u5e2e\u52a9\u7406\u89e3\u96c6\u6210\u8fc7\u7a0b\u4e2d\u6d89\u53ca\u7684\u6982\u5ff5\uff0c\u53ef\u4ee5\u53c2\u8003 ",(0,i.jsx)(n.a,{href:"/integrate-logto/integrate-logto-into-your-application/understand-authentication-flow/",children:"\u7406\u89e3 Logto \u8ba4\u8bc1 (Authentication) \u6d41\u7a0b"})," \u4ee5\u66f4\u6df1\u5165\u5730\u4e86\u89e3\u96c6\u6210\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["\u63a7\u5236\u53f0\u4e2d\u7684\u6307\u5357\u4ec5\u7528\u4e8e\u4f7f\u7528\u6211\u4eec\u7684 SDK \u5feb\u901f\u5f00\u59cb Logto\u3002\u6709\u5173\u5b8c\u6574\u7684\u96c6\u6210\u6307\u5357\uff0c\u5305\u62ec\u9ad8\u7ea7 SDK \u7528\u6cd5\uff0c\u8bf7\u67e5\u770b ",(0,i.jsx)(n.a,{href:"/quick-starts",children:"\u5feb\u901f\u5165\u95e8"})," \u90e8\u5206\u3002"]})}),"\n",(0,i.jsxs)(n.ol,{start:"5",children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u5b8c\u6210\u540e\uff0c\u4f60\u53ef\u4ee5\u63a2\u7d22\u66f4\u591a\u5173\u4e8e Logto \u7684\u5185\u5bb9\uff1a"}),"\n",(0,i.jsx)(e,{href:"/end-user-flows",children:"\u7ec8\u7aef\u7528\u6237\u6d41\u7a0b"}),"\n",(0,i.jsx)(e,{href:"/authorization",children:"\u6388\u6743 (Authorization)"}),"\n",(0,i.jsx)(e,{href:"/organizations",children:"\u7ec4\u7ec7 (Organizations)"}),"\n"]}),"\n"]})]})}function p(t={}){const{wrapper:n}={...(0,r.R)(),...t.components};return n?(0,i.jsx)(n,{...t,children:(0,i.jsx)(d,{...t})}):d(t)}function u(t,n){throw new Error("Expected "+(n?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}},15658:(t,n,o)=>{o.d(n,{R:()=>s,x:()=>a});var e=o(30758);const i={},r=e.createContext(i);function s(t){const n=e.useContext(r);return e.useMemo((function(){return"function"==typeof t?t(n):{...n,...t}}),[n,t])}function a(t){let n;return n=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:s(t.components),e.createElement(r.Provider,{value:n},t.children)}}}]);