"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[15490],{87233:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>x,contentTitle:()=>m,default:()=>A,frontMatter:()=>g,metadata:()=>o,toc:()=>j});const o=JSON.parse('{"id":"integrate-logto/interact-with-management-api/README","title":"\u4e0e Management API \u4ea4\u4e92","description":"\u4ec0\u4e48\u662f Logto Management API\uff1f","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/integrate-logto/interact-with-management-api/README.md","sourceDirName":"integrate-logto/interact-with-management-api","slug":"/integrate-logto/interact-with-management-api/","permalink":"/zh-CN/integrate-logto/interact-with-management-api/","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/zh-CN/docusaurus-plugin-content-docs/current/integrate-logto/interact-with-management-api/README.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4},"sidebar":"docsSidebar","previous":{"title":"\u7528\u6237\u6388\u6743\u9875\u9762\u54c1\u724c","permalink":"/zh-CN/integrate-logto/third-party-applications/oidc-oauth-third-party-applications/consent-screen-branding"},"next":{"title":"\u5e94\u7528\u7a0b\u5e8f\u6570\u636e\u7ed3\u6784","permalink":"/zh-CN/integrate-logto/application-data-structure"}}');var a=t(86070),r=t(15658);const i=t.p+"assets/images/logto-management-api-resource-14162a031698ad36ac0f8c04ff683ba2.webp",s=t.p+"assets/images/logto-management-api-details-4994334ef32791d9ebc6c9aa298c9ecd.webp";var l=t(55115),c=t(92414),d=t(42562),p=t(22473),u=t(13849),h=t(4458);const g={sidebar_position:4},m="\u4e0e Management API \u4ea4\u4e92",x={},j=[{value:"\u4ec0\u4e48\u662f Logto Management API\uff1f",id:"\u4ec0\u4e48\u662f-logto-management-api",level:2},{value:"\u5982\u4f55\u8bbf\u95ee Logto Management API",id:"\u5982\u4f55\u8bbf\u95ee-logto-management-api",level:2},{value:"\u521b\u5efa\u4e00\u4e2a M2M \u5e94\u7528",id:"\u521b\u5efa\u4e00\u4e2a-m2m-\u5e94\u7528",level:3},...h.RM,{value:"\u83b7\u53d6\u8bbf\u95ee\u4ee4\u724c",id:"\u83b7\u53d6\u8bbf\u95ee\u4ee4\u724c",level:3},{value:"\u5173\u4e8e\u8bbf\u95ee\u4ee4\u724c\u8bf7\u6c42\u7684\u57fa\u7840\u77e5\u8bc6",id:"\u5173\u4e8e\u8bbf\u95ee\u4ee4\u724c\u8bf7\u6c42\u7684\u57fa\u7840\u77e5\u8bc6",level:4},...l.RM,{value:"\u83b7\u53d6 Logto Management API \u7684\u8bbf\u95ee\u4ee4\u724c",id:"\u83b7\u53d6-logto-management-api-\u7684\u8bbf\u95ee\u4ee4\u724c",level:4},...c.RM,{value:"\u8bbf\u95ee\u4ee4\u724c\u54cd\u5e94",id:"\u8bbf\u95ee\u4ee4\u724c\u54cd\u5e94",level:4},...u.RM,{value:"\u4f7f\u7528\u8bbf\u95ee\u4ee4\u724c\u8bbf\u95ee Logto Management API",id:"\u4f7f\u7528\u8bbf\u95ee\u4ee4\u724c\u8bbf\u95ee-logto-management-api",level:3},...d.RM,...p.RM,{value:"\u4f7f\u7528 Logto Management API \u7684\u5178\u578b\u573a\u666f",id:"\u4f7f\u7528-logto-management-api-\u7684\u5178\u578b\u573a\u666f",level:2},{value:"\u81ea\u884c\u5b9e\u73b0\u7528\u6237\u914d\u7f6e\u6587\u4ef6",id:"\u81ea\u884c\u5b9e\u73b0\u7528\u6237\u914d\u7f6e\u6587\u4ef6",level:3},{value:"\u9ad8\u7ea7\u7528\u6237\u641c\u7d22",id:"\u9ad8\u7ea7\u7528\u6237\u641c\u7d22",level:3},{value:"\u81ea\u884c\u5b9e\u73b0\u7ec4\u7ec7\u7ba1\u7406",id:"\u81ea\u884c\u5b9e\u73b0\u7ec4\u7ec7\u7ba1\u7406",level:3},{value:"\u4f7f\u7528 Logto Management API \u7684\u63d0\u793a",id:"\u4f7f\u7528-logto-management-api-\u7684\u63d0\u793a",level:2},{value:"\u7ba1\u7406\u5206\u9875 API \u54cd\u5e94",id:"\u7ba1\u7406\u5206\u9875-api-\u54cd\u5e94",level:3},{value:"\u4f7f\u7528\u94fe\u63a5\u5934",id:"\u4f7f\u7528\u94fe\u63a5\u5934",level:4},{value:"\u4f7f\u7528\u603b\u6570\u5934",id:"\u4f7f\u7528\u603b\u6570\u5934",level:4},{value:"\u66f4\u6539\u9875\u7801\u548c\u9875\u9762\u5927\u5c0f",id:"\u66f4\u6539\u9875\u7801\u548c\u9875\u9762\u5927\u5c0f",level:4},{value:"\u901f\u7387\u9650\u5236",id:"\u901f\u7387\u9650\u5236",level:3}];function f(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components},{CloudLink:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("CloudLink",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"\u4e0e-management-api-\u4ea4\u4e92",children:"\u4e0e Management API \u4ea4\u4e92"})}),"\n",(0,a.jsx)(n.h2,{id:"\u4ec0\u4e48\u662f-logto-management-api",children:"\u4ec0\u4e48\u662f Logto Management API\uff1f"}),"\n",(0,a.jsxs)(n.p,{children:["Logto Management API \u662f\u4e00\u5957\u5168\u9762\u7684 API\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u901a\u8fc7\u5b83\u4eec\u5b8c\u5168\u63a7\u5236\u5b9e\u73b0\uff0c\u4ee5\u6ee1\u8db3\u4ea7\u54c1\u9700\u6c42\u548c\u6280\u672f\u6808\u3002\u5b83\u662f\u9884\u6784\u5efa\u7684\uff0c\u5217\u5728 ",(0,a.jsx)(t,{to:"/api-resources",children:"\u63a7\u5236\u53f0 > API \u8d44\u6e90 > Logto Management API"})," \u4e2d\uff0c\u65e0\u6cd5\u5220\u9664\u6216\u4fee\u6539\u3002"]}),"\n",(0,a.jsxs)(n.p,{children:["\u5176\u6807\u8bc6\u7b26\u7684\u683c\u5f0f\u4e3a ",(0,a.jsx)(n.code,{children:"https://[tenant-id].logto.app/api"})]}),"\n",(0,a.jsx)("img",{alt:"Logto Management API \u8d44\u6e90",src:i}),"\n",(0,a.jsx)("img",{alt:"Logto Management API \u8be6\u60c5",src:s}),"\n",(0,a.jsx)(n.p,{children:"\u901a\u8fc7 Logto Management API\uff0c\u4f60\u53ef\u4ee5\u8bbf\u95ee Logto \u5f3a\u5927\u7684\u540e\u7aef\u670d\u52a1\uff0c\u8fd9\u4e9b\u670d\u52a1\u5177\u6709\u9ad8\u5ea6\u7684\u53ef\u6269\u5c55\u6027\uff0c\u53ef\u4ee5\u5728\u591a\u79cd\u573a\u666f\u4e2d\u4f7f\u7528\u3002\u5b83\u8d85\u8d8a\u4e86\u7ba1\u7406\u63a7\u5236\u53f0\u7684\u4f4e\u4ee3\u7801\u80fd\u529b\u3002"}),"\n",(0,a.jsx)(n.p,{children:"\u4ee5\u4e0b\u662f\u4e00\u4e9b\u5e38\u7528\u7684 API\uff1a"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://openapi.logto.io/operation/operation-getuser",children:"\u7528\u6237"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://openapi.logto.io/operation/operation-listapplications",children:"\u5e94\u7528\u7a0b\u5e8f"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://openapi.logto.io/operation/operation-listlogs",children:"\u5ba1\u8ba1\u65e5\u5fd7"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://openapi.logto.io/operation/operation-listroles",children:"\u89d2\u8272 (Roles)"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://openapi.logto.io/operation/operation-listresources",children:"\u8d44\u6e90 (Resources)"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://openapi.logto.io/operation/operation-listconnectors",children:"\u8fde\u63a5\u5668 (Connectors)"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://openapi.logto.io/operation/operation-listorganizations",children:"\u7ec4\u7ec7 (Organizations)"})}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["\u8981\u4e86\u89e3\u66f4\u591a\u53ef\u7528\u7684 API\uff0c\u8bf7\u8bbf\u95ee ",(0,a.jsx)(n.a,{href:"https://openapi.logto.io/%E3%80%82",children:"https://openapi.logto.io/\u3002"})]}),"\n",(0,a.jsx)(n.h2,{id:"\u5982\u4f55\u8bbf\u95ee-logto-management-api",children:"\u5982\u4f55\u8bbf\u95ee Logto Management API"}),"\n",(0,a.jsx)(n.h3,{id:"\u521b\u5efa\u4e00\u4e2a-m2m-\u5e94\u7528",children:"\u521b\u5efa\u4e00\u4e2a M2M \u5e94\u7528"}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u4e0d\u719f\u6089 M2M\uff08\u673a\u5668\u5bf9\u673a\u5668\uff09\u8ba4\u8bc1 (Authentication) \u6d41\u7a0b\uff0c\u6211\u4eec\u5efa\u8bae\u5148\u9605\u8bfb ",(0,a.jsx)(n.a,{href:"/integrate-logto/integrate-logto-into-your-application/understand-authentication-flow/#machine-to-machine-authentication-flow",children:"\u7406\u89e3\u8ba4\u8bc1 (Authentication) \u6d41\u7a0b"})," \u4ee5\u4e86\u89e3\u57fa\u672c\u6982\u5ff5\u3002"]})}),"\n",(0,a.jsxs)(n.p,{children:["\u524d\u5f80 ",(0,a.jsx)(t,{to:"/applications",children:"\u63a7\u5236\u53f0 > \u5e94\u7528\u7a0b\u5e8f"}),"\uff0c\u9009\u62e9\u201c\u673a\u5668\u5bf9\u673a\u5668\u201d\u5e94\u7528\u7a0b\u5e8f\u7c7b\u578b\u5e76\u5f00\u59cb\u521b\u5efa\u8fc7\u7a0b\u3002"]}),"\n",(0,a.jsx)(h.Ay,{}),"\n",(0,a.jsx)(n.p,{children:"\u5728\u89d2\u8272\u5206\u914d\u6a21\u5757\u4e2d\uff0c\u4f60\u53ef\u4ee5\u770b\u5230\u6240\u6709 M2M \u89d2\u8272\u90fd\u5305\u542b\u5728\u5185\uff0c\u5e26\u6709 Logto \u56fe\u6807\u7684\u89d2\u8272\u8868\u793a\u8fd9\u4e9b\u89d2\u8272\u5305\u542b Logto Management API \u6743\u9650\u3002"}),"\n",(0,a.jsx)(n.p,{children:"\u73b0\u5728\u4e3a\u4f60\u7684 M2M \u5e94\u7528\u5206\u914d\u5305\u542b Logto Management API \u6743\u9650\u7684 M2M \u89d2\u8272\u3002"}),"\n",(0,a.jsx)(n.h3,{id:"\u83b7\u53d6\u8bbf\u95ee\u4ee4\u724c",children:"\u83b7\u53d6\u8bbf\u95ee\u4ee4\u724c"}),"\n",(0,a.jsx)(n.h4,{id:"\u5173\u4e8e\u8bbf\u95ee\u4ee4\u724c\u8bf7\u6c42\u7684\u57fa\u7840\u77e5\u8bc6",children:"\u5173\u4e8e\u8bbf\u95ee\u4ee4\u724c\u8bf7\u6c42\u7684\u57fa\u7840\u77e5\u8bc6"}),"\n",(0,a.jsx)(l.Ay,{}),"\n",(0,a.jsx)(n.h4,{id:"\u83b7\u53d6-logto-management-api-\u7684\u8bbf\u95ee\u4ee4\u724c",children:"\u83b7\u53d6 Logto Management API \u7684\u8bbf\u95ee\u4ee4\u724c"}),"\n",(0,a.jsx)(c.Ay,{}),"\n",(0,a.jsx)(n.h4,{id:"\u8bbf\u95ee\u4ee4\u724c\u54cd\u5e94",children:"\u8bbf\u95ee\u4ee4\u724c\u54cd\u5e94"}),"\n",(0,a.jsx)(n.p,{children:"\u6210\u529f\u7684\u8bbf\u95ee\u54cd\u5e94\u4f53\u5982\u4e0b\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "access_token": "eyJhbG...2g", // \u4f7f\u7528\u6b64\u4ee4\u724c\u8bbf\u95ee Logto Management API\n  "expires_in": 3600, // \u4ee4\u724c\u8fc7\u671f\u65f6\u95f4\uff08\u79d2\uff09\n  "token_type": "Bearer", // \u4f7f\u7528\u8bbf\u95ee\u4ee4\u724c\u65f6\u8bf7\u6c42\u7684\u8ba4\u8bc1\u7c7b\u578b\n  "scope": "all" // Logto Management API \u7684\u6743\u9650 `all`\n}\n'})}),"\n",(0,a.jsx)(u.Ay,{}),"\n",(0,a.jsx)(n.h3,{id:"\u4f7f\u7528\u8bbf\u95ee\u4ee4\u724c\u8bbf\u95ee-logto-management-api",children:"\u4f7f\u7528\u8bbf\u95ee\u4ee4\u724c\u8bbf\u95ee Logto Management API"}),"\n",(0,a.jsx)(d.Ay,{}),"\n",(0,a.jsx)(p.Ay,{}),"\n",(0,a.jsx)(n.h2,{id:"\u4f7f\u7528-logto-management-api-\u7684\u5178\u578b\u573a\u666f",children:"\u4f7f\u7528 Logto Management API \u7684\u5178\u578b\u573a\u666f"}),"\n",(0,a.jsx)(n.p,{children:"\u6211\u4eec\u7684\u5f00\u53d1\u8005\u5df2\u7ecf\u4f7f\u7528 Logto Management API \u5b9e\u73b0\u4e86\u8bb8\u591a\u9644\u52a0\u529f\u80fd\u3002\u6211\u4eec\u76f8\u4fe1\u6211\u4eec\u7684 API \u5177\u6709\u9ad8\u5ea6\u7684\u53ef\u6269\u5c55\u6027\uff0c\u53ef\u4ee5\u652f\u6301\u4f60\u7684\u5e7f\u6cdb\u9700\u6c42\u3002\u4ee5\u4e0b\u662f\u4e00\u4e9b\u65e0\u6cd5\u901a\u8fc7 Logto \u7ba1\u7406\u63a7\u5236\u53f0\u5b9e\u73b0\u4f46\u53ef\u4ee5\u901a\u8fc7 Logto Management API \u5b9e\u73b0\u7684\u573a\u666f\u793a\u4f8b\u3002"}),"\n",(0,a.jsx)(n.h3,{id:"\u81ea\u884c\u5b9e\u73b0\u7528\u6237\u914d\u7f6e\u6587\u4ef6",children:"\u81ea\u884c\u5b9e\u73b0\u7528\u6237\u914d\u7f6e\u6587\u4ef6"}),"\n",(0,a.jsx)(n.p,{children:"Logto \u76ee\u524d\u4e0d\u63d0\u4f9b\u7528\u6237\u914d\u7f6e\u6587\u4ef6\u7684\u9884\u6784\u5efa UI \u89e3\u51b3\u65b9\u6848\u3002\u6211\u4eec\u8ba4\u8bc6\u5230\u7528\u6237\u914d\u7f6e\u6587\u4ef6\u4e0e\u4e1a\u52a1\u548c\u4ea7\u54c1\u5c5e\u6027\u5bc6\u5207\u76f8\u5173\u3002\u5728\u6211\u4eec\u52aa\u529b\u786e\u5b9a\u6700\u4f73\u65b9\u6cd5\u7684\u540c\u65f6\uff0c\u6211\u4eec\u5efa\u8bae\u4f7f\u7528\u6211\u4eec\u7684 API \u521b\u5efa\u4f60\u81ea\u5df1\u7684\u89e3\u51b3\u65b9\u6848\u3002\u4f8b\u5982\uff0c\u4f60\u53ef\u4ee5\u5229\u7528\u6211\u4eec\u7684\u4ea4\u4e92 API\u3001\u914d\u7f6e\u6587\u4ef6 API \u548c\u9a8c\u8bc1\u7801 API \u6765\u5f00\u53d1\u6ee1\u8db3\u4f60\u9700\u6c42\u7684\u81ea\u5b9a\u4e49\u89e3\u51b3\u65b9\u6848\u3002"}),"\n",(0,a.jsx)(n.h3,{id:"\u9ad8\u7ea7\u7528\u6237\u641c\u7d22",children:"\u9ad8\u7ea7\u7528\u6237\u641c\u7d22"}),"\n",(0,a.jsxs)(n.p,{children:["Logto \u7ba1\u7406\u63a7\u5236\u53f0\u652f\u6301\u57fa\u672c\u7684\u641c\u7d22\u548c\u8fc7\u6ee4\u529f\u80fd\u3002\u5bf9\u4e8e\u6a21\u7cca\u641c\u7d22\u3001\u7cbe\u786e\u5339\u914d\u548c\u533a\u5206\u5927\u5c0f\u5199\u7b49\u9ad8\u7ea7\u641c\u7d22\u9009\u9879\uff0c\u8bf7\u67e5\u770b\u6211\u4eec\u7684 ",(0,a.jsx)(n.a,{href:"/user-management/advanced-user-search",children:"\u9ad8\u7ea7\u7528\u6237\u641c\u7d22"})," \u6559\u7a0b\u548c\u6307\u5357\u3002"]}),"\n",(0,a.jsx)(n.h3,{id:"\u81ea\u884c\u5b9e\u73b0\u7ec4\u7ec7\u7ba1\u7406",children:"\u81ea\u884c\u5b9e\u73b0\u7ec4\u7ec7\u7ba1\u7406"}),"\n",(0,a.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u6b63\u5728\u4f7f\u7528 ",(0,a.jsx)(n.a,{href:"/organizations",children:"\u7ec4\u7ec7 (Organizations)"})," \u529f\u80fd\u6784\u5efa\u591a\u79df\u6237\u5e94\u7528\u7a0b\u5e8f\uff0c\u4f60\u53ef\u80fd\u9700\u8981 Logto Management API \u6765\u6267\u884c\u7ec4\u7ec7\u9080\u8bf7\u548c\u6210\u5458\u7ba1\u7406\u7b49\u4efb\u52a1\u3002\u5bf9\u4e8e\u4f60\u7684 SaaS \u4ea7\u54c1\uff0c\u5176\u4e2d\u79df\u6237\u4e2d\u6709\u7ba1\u7406\u5458\u548c\u6210\u5458\uff0cLogto Management API \u53ef\u4ee5\u5e2e\u52a9\u4f60\u521b\u5efa\u4e00\u4e2a\u5b9a\u5236\u7684\u7ba1\u7406\u5458\u95e8\u6237\uff0c\u4ee5\u6ee1\u8db3\u4f60\u7684\u4e1a\u52a1\u9700\u6c42\u3002\u67e5\u770b ",(0,a.jsx)(n.a,{href:"/end-user-flows/organization-experience/",children:"\u6b64\u5904"})," \u4e86\u89e3\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\u3002"]}),"\n",(0,a.jsx)(n.h2,{id:"\u4f7f\u7528-logto-management-api-\u7684\u63d0\u793a",children:"\u4f7f\u7528 Logto Management API \u7684\u63d0\u793a"}),"\n",(0,a.jsx)(n.h3,{id:"\u7ba1\u7406\u5206\u9875-api-\u54cd\u5e94",children:"\u7ba1\u7406\u5206\u9875 API \u54cd\u5e94"}),"\n",(0,a.jsx)(n.p,{children:"\u67d0\u4e9b API \u54cd\u5e94\u53ef\u80fd\u5305\u542b\u8bb8\u591a\u7ed3\u679c\uff0c\u7ed3\u679c\u5c06\u88ab\u5206\u9875\u3002Logto \u63d0\u4f9b\u4e86\u4e24\u79cd\u5206\u9875\u4fe1\u606f\u3002"}),"\n",(0,a.jsx)(n.h4,{id:"\u4f7f\u7528\u94fe\u63a5\u5934",children:"\u4f7f\u7528\u94fe\u63a5\u5934"}),"\n",(0,a.jsx)(n.p,{children:"\u5206\u9875\u54cd\u5e94\u5934\u5982\u4e0b\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'Link: <https://logto.dev/users?page=1&page_size=20>; rel="first"\n'})}),"\n",(0,a.jsx)(n.p,{children:"\u94fe\u63a5\u5934\u63d0\u4f9b\u4e86\u524d\u4e00\u9875\u3001\u4e0b\u4e00\u9875\u3001\u7b2c\u4e00\u9875\u548c\u6700\u540e\u4e00\u9875\u7ed3\u679c\u7684 URL\uff1a"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:'\u524d\u4e00\u9875\u7684 URL \u540e\u8ddf rel="prev"\u3002'}),"\n",(0,a.jsx)(n.li,{children:'\u4e0b\u4e00\u9875\u7684 URL \u540e\u8ddf rel="next"\u3002'}),"\n",(0,a.jsx)(n.li,{children:'\u6700\u540e\u4e00\u9875\u7684 URL \u540e\u8ddf rel="last"\u3002'}),"\n",(0,a.jsx)(n.li,{children:'\u7b2c\u4e00\u9875\u7684 URL \u540e\u8ddf rel="first"\u3002'}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"\u4f7f\u7528\u603b\u6570\u5934",children:"\u4f7f\u7528\u603b\u6570\u5934"}),"\n",(0,a.jsxs)(n.p,{children:["\u9664\u4e86\u6807\u51c6\u7684\u94fe\u63a5\u5934\uff0cLogto \u8fd8\u4f1a\u6dfb\u52a0\u4e00\u4e2a ",(0,a.jsx)(n.code,{children:"Total-Number"})," \u5934\uff1a"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"Total-Number: 216\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u8fd9\u5c06\u975e\u5e38\u65b9\u4fbf\u548c\u6709\u7528\uff0c\u4ee5\u663e\u793a\u9875\u7801\u3002"}),"\n",(0,a.jsx)(n.h4,{id:"\u66f4\u6539\u9875\u7801\u548c\u9875\u9762\u5927\u5c0f",children:"\u66f4\u6539\u9875\u7801\u548c\u9875\u9762\u5927\u5c0f"}),"\n",(0,a.jsx)(n.p,{children:"\u6709\u4e24\u4e2a\u53ef\u9009\u7684\u67e5\u8be2\u53c2\u6570\uff1a"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"page"}),"\uff1a\u8868\u793a\u9875\u7801\uff0c\u4ece 1 \u5f00\u59cb\uff0c\u9ed8\u8ba4\u503c\u4e3a 1\u3002"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"page_size"}),"\uff1a\u8868\u793a\u6bcf\u9875\u7684\u9879\u76ee\u6570\uff0c\u9ed8\u8ba4\u503c\u4e3a 20\u3002"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"\u901f\u7387\u9650\u5236",children:"\u901f\u7387\u9650\u5236"}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsx)(n.p,{children:"\u8fd9\u4ec5\u9002\u7528\u4e8e Logto Cloud\u3002"})}),"\n",(0,a.jsx)(n.p,{children:"\u4e3a\u4e86\u786e\u4fdd\u6211\u4eec\u670d\u52a1\u5bf9\u6240\u6709\u7528\u6237\u7684\u53ef\u9760\u6027\u548c\u5b89\u5168\u6027\uff0c\u6211\u4eec\u91c7\u7528\u4e86\u4e00\u822c\u9632\u706b\u5899\u6765\u76d1\u63a7\u548c\u7ba1\u7406\u6211\u4eec\u7f51\u7ad9\u7684\u6d41\u91cf\u3002\u867d\u7136\u6211\u4eec\u4e0d\u5f3a\u5236\u6267\u884c\u4e25\u683c\u7684\u901f\u7387\u9650\u5236\uff0c\u4f46\u6211\u4eec\u5efa\u8bae\u7528\u6237\u5c06\u6d3b\u52a8\u9650\u5236\u5728\u5927\u7ea6\u6bcf 10 \u79d2 200 \u4e2a\u8bf7\u6c42\u4ee5\u5185\uff0c\u4ee5\u907f\u514d\u89e6\u53d1\u6211\u4eec\u7684\u4fdd\u62a4\u63aa\u65bd\u3002"})]})}function A(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(f,{...e})}):f(e)}},22473:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>s});var o=t(86070),a=t(15658),r=t(78551),i=t(77501);const s=[];function l(e){const n={code:"code",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["\u4f7f\u7528\u8bf7\u6c42\u7684\u8bbf\u95ee\u4ee4\u724c (Access token) \u548c\u5185\u7f6e\u7684 Logto Management API \u8d44\u6e90 ",(0,o.jsx)(n.code,{children:"https://[your-tenant-id].logto.app/api"})," \u6765\u83b7\u53d6 Logto \u4e2d\u7684\u6240\u6709\u5e94\u7528\uff1a"]}),"\n",(0,o.jsxs)(i.A,{children:[(0,o.jsx)(r.A,{value:"Node.js",label:"Node.js",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"const logtoEndpoint = 'https://your.logto.endpoint'; // Replace with your Logto endpoint\nconst accessToken = 'eyJhb...2g'; // Access Token\n\nconst fetchLogtoApplications = async () => {\n  return await fetch(`${logtoEndpoint}/api/applications`, {\n    method: 'GET',\n    headers: {\n      Authorization: `Bearer ${accessToken}`,\n    },\n  });\n};\n"})})}),(0,o.jsxs)(r.A,{value:"cURL",label:"cURL",children:[(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"curl --location \\\n  --request GET 'https://your.logto.endpoint/api/applications' \\\n  --header 'Authorization: Bearer eyJhbG...2g'\n"})}),(0,o.jsxs)(n.p,{children:["\u8bb0\u5f97\u7528\u4f60\u81ea\u5df1\u7684\u5b9e\u9645\u503c\u66ff\u6362\u3002",(0,o.jsx)(n.code,{children:"Bearer"})," \u540e\u7684\u503c\u5e94\u8be5\u662f\u4f60\u6536\u5230\u7684\u8bbf\u95ee\u4ee4\u724c (JWT)\u3002"]})]})]})]})}function c(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},42562:(e,n,t)=>{t.d(n,{Ay:()=>s,RM:()=>r});var o=t(86070),a=t(15658);const r=[];function i(e){const n={code:"code",p:"p",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["\u4f60\u53ef\u80fd\u4f1a\u6ce8\u610f\u5230\u4ee4\u724c\u54cd\u5e94\u4e2d\u6709\u4e00\u4e2a ",(0,o.jsx)(n.code,{children:"token_type"})," \u5b57\u6bb5\uff0c\u5b83\u56fa\u5b9a\u4e3a ",(0,o.jsx)(n.code,{children:"Bearer"}),"\u3002"]}),"\n",(0,o.jsxs)(n.p,{children:["\u56e0\u6b64\uff0c\u5f53\u4f60\u4e0e API \u8d44\u6e90 (API resource) \u670d\u52a1\u5668\u4ea4\u4e92\u65f6\uff0c\u5e94\u8be5\u5c06\u8bbf\u95ee\u4ee4\u724c (access token) \u4ee5 Bearer \u683c\u5f0f\uff08",(0,o.jsx)(n.code,{children:"Bearer YOUR_TOKEN"}),"\uff09\u653e\u5728 HTTP \u5934\u7684 ",(0,o.jsx)(n.code,{children:"Authorization"})," \u5b57\u6bb5\u4e2d\u3002"]})]})}function s(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(i,{...e})}):i(e)}},55115:(e,n,t)=>{t.d(n,{Ay:()=>l,RM:()=>i});var o=t(86070),a=t(15658);const r=t.p+"assets/images/app-id-secret-af29845d7768be05909995293bef45d9.png",i=[];function s(e){const n={a:"a",code:"code",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["M2M \u5e94\u7528\u901a\u8fc7\u5411\u4ee4\u724c\u8bf7\u6c42\u7aef\u70b9\u53d1\u9001 ",(0,o.jsx)(n.code,{children:"POST"})," \u8bf7\u6c42\u6765\u83b7\u53d6\u8bbf\u95ee\u4ee4\u724c (Access token)\uff0c\u5728 HTTP \u8bf7\u6c42\u5b9e\u4f53\u4e3b\u4f53\u4e2d\u4f7f\u7528 ",(0,o.jsx)(n.code,{children:"application/x-www-form-urlencoded"})," \u683c\u5f0f\u6dfb\u52a0\u4ee5\u4e0b\u53c2\u6570\uff1a"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"grant_type"}),"\uff1a\u5fc5\u987b\u8bbe\u7f6e\u4e3a ",(0,o.jsx)(n.code,{children:"client_credentials"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"resource"}),"\uff1a\u4f60\u60f3\u8981\u8bbf\u95ee\u7684\u8d44\u6e90"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"scope"}),"\uff1a\u8bbf\u95ee\u8bf7\u6c42\u7684\u6743\u9650 (Scope)"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"\u4f60\u8fd8\u9700\u8981\u5728\u8bf7\u6c42\u5934\u4e2d\u5305\u542b M2M \u5e94\u7528\u7684\u51ed\u636e\uff0c\u4ee5\u4fbf\u4ee4\u724c\u8bf7\u6c42\u7aef\u70b9\u8ba4\u8bc1 (Authentication) \u4f60\u7684 M2M \u5e94\u7528\u3002"}),"\n",(0,o.jsxs)(n.p,{children:["\u8fd9\u662f\u901a\u8fc7\u5728\u8bf7\u6c42\u7684 ",(0,o.jsx)(n.code,{children:"Authorization"})," \u5934\u4e2d\u4ee5 ",(0,o.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization#basic_authentication",children:"\u57fa\u672c\u8ba4\u8bc1 (Basic authentication)"})," \u5f62\u5f0f\u5305\u542b\u5e94\u7528\u7684\u51ed\u636e\u6765\u5b9e\u73b0\u7684\uff0c\u5176\u4e2d\u7528\u6237\u540d\u662f App ID\uff0c\u5bc6\u7801\u662f App Secret\u3002"]}),"\n",(0,o.jsx)(n.p,{children:"\u4f60\u53ef\u4ee5\u5728 M2M \u5e94\u7528\u7684\u8be6\u7ec6\u4fe1\u606f\u9875\u9762\u627e\u5230 App ID \u548c App Secret\uff1a"}),"\n",(0,o.jsx)("img",{alt:"App ID and App Secret",src:r,width:"600px"})]})}function l(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(s,{...e})}):s(e)}},92414:(e,n,t)=>{t.d(n,{Ay:()=>d,RM:()=>l});var o=t(86070),a=t(15658),r=t(78551),i=t(77501);const s=t.p+"assets/images/logto-management-api-4994334ef32791d9ebc6c9aa298c9ecd.png",l=[];function c(e){const n={admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["Logto \u63d0\u4f9b\u4e86\u4e00\u4e2a\u5185\u7f6e\u7684 \u201c\u65e5\u5fd7\u7ba1\u7406 API (Logto Management API)\u201d \u8d44\u6e90\uff0c\u5b83\u662f\u4e00\u4e2a\u53ea\u8bfb\u8d44\u6e90\uff0c\u5177\u6709\u8bbf\u95ee\u65e5\u5fd7\u7ba1\u7406 API (Logto Management API) \u7684 ",(0,o.jsx)(n.code,{children:"all"})," \u6743\u9650\uff0c\u4f60\u53ef\u4ee5\u5728\u4f60\u7684 API \u8d44\u6e90\u5217\u8868\u4e2d\u770b\u5230\u5b83\u3002\u8d44\u6e90 API \u6307\u793a\u5668\u7684\u6a21\u5f0f\u662f ",(0,o.jsx)(n.code,{children:"https://{your-tenant-id}.logto.app/api"})," \uff0c\u8fd9\u5c06\u662f\u4f60\u5728\u8bbf\u95ee\u4ee4\u724c\u8bf7\u6c42\u6b63\u6587\u4e2d\u4f7f\u7528\u7684\u8d44\u6e90\u503c\u3002"]}),"\n",(0,o.jsx)("img",{alt:"Logto Management API details",src:s,width:"600px"}),"\n",(0,o.jsxs)(n.p,{children:["\u5728\u8bbf\u95ee\u65e5\u5fd7\u7ba1\u7406 API (Logto Management API) \u4e4b\u524d\uff0c\u786e\u4fdd\u4f60\u7684 M2M \u5e94\u7528\u5df2\u88ab\u5206\u914d\u4e86\u5305\u542b\u6b64\u5185\u7f6e \u201c\u65e5\u5fd7\u7ba1\u7406 API (Logto Management API)\u201d \u8d44\u6e90\u7684 ",(0,o.jsx)(n.code,{children:"all"})," \u6743\u9650\u7684 M2M \u89d2\u8272\u3002"]}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsx)(n.p,{children:"Logto \u8fd8\u4e3a\u65b0\u521b\u5efa\u7684\u79df\u6237\u63d0\u4f9b\u4e86\u4e00\u4e2a\u9884\u914d\u7f6e\u7684 \u201c\u65e5\u5fd7\u7ba1\u7406 API (Logto Management API) \u8bbf\u95ee\u201d M2M \u89d2\u8272\uff0c\u8be5\u89d2\u8272\u5df2\u7ecf\u5206\u914d\u4e86\u65e5\u5fd7\u7ba1\u7406 API (Logto Management API) \u8d44\u6e90\u7684\u6240\u6709\u6743\u9650\u3002\u4f60\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u5b83\uff0c\u800c\u65e0\u9700\u624b\u52a8\u8bbe\u7f6e\u6743\u9650\u3002\u8fd9\u4e2a\u9884\u914d\u7f6e\u7684\u89d2\u8272\u4e5f\u53ef\u4ee5\u6839\u636e\u9700\u8981\u8fdb\u884c\u7f16\u8f91\u548c\u5220\u9664\u3002"})}),"\n",(0,o.jsx)(n.p,{children:"\u73b0\u5728\uff0c\u7ec4\u5408\u6211\u4eec\u6240\u6709\u7684\u5185\u5bb9\u5e76\u53d1\u9001\u8bf7\u6c42\uff1a"}),"\n",(0,o.jsxs)(i.A,{children:[(0,o.jsx)(r.A,{value:"Node.js",label:"Node.js",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"const logtoEndpoint = 'https://your.logto.endpoint'; // \u7528\u4f60\u7684 Logto \u7aef\u70b9\u66ff\u6362\nconst tokenEndpoint = `${logtoEndpoint}/oidc/token`;\nconst applicationId = 'your-application-id';\nconst applicationSecret = 'your-application-secret';\nconst tenantId = 'your-tenant-id';\n\nconst fetchAccessToken = async () => {\n  return await fetch(tokenEndpoint, {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/x-www-form-urlencoded',\n      Authorization: `Basic ${Buffer.from(`${applicationId}:${applicationSecret}`).toString(\n        'base64'\n      )}`,\n    },\n    body: new URLSearchParams({\n      grant_type: 'client_credentials',\n      resource: `https://${tenantId}.logto.app/api`,\n      scope: 'all',\n    }).toString(),\n  });\n};\n"})})}),(0,o.jsxs)(r.A,{value:"cURL",label:"cURL",children:[(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"curl --location \\\n  --request POST 'https://your.logto.endpoint' \\\n  --header 'Authorization: Basic ${your_auth_string}' \\\n  --header 'Content-Type: application/x-www-form-urlencoded' \\\n  --data-urlencode 'grant_type=client_credentials' \\\n  --data-urlencode 'resource=https://${tenantId}.logto.app/api' \\\n  --data-urlencode 'scope=all'\n"})}),(0,o.jsx)(n.p,{children:"\u8bb0\u5f97\u7528\u4f60\u81ea\u5df1\u7684\u5b9e\u9645\u503c\u66ff\u6362\u3002"})]})]}),"\n",(0,o.jsx)(n.admonition,{type:"caution",children:(0,o.jsxs)(n.p,{children:["\u5bf9\u4e8e\u65e5\u5fd7\u4e91 (Logto Cloud) \u7528\u6237\uff1a\u5f53\u4f60\u4e0e\u65e5\u5fd7\u7ba1\u7406 API (Logto Management API) \u4ea4\u4e92\u65f6\uff0c\u4e0d\u80fd\u4f7f\u7528\u81ea\u5b9a\u4e49\u57df\u540d\uff0c\u8bf7\u4f7f\u7528\u9ed8\u8ba4\u7684 Logto \u7aef\u70b9 ",(0,o.jsx)(n.code,{children:"https://{your_tenant_id}.logto.app/oidc/token"})," \u6765\u6388\u4e88\u8bbf\u95ee\u4ee4\u724c\u3002"]})})]})}function d(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},13849:(e,n,t)=>{t.d(n,{Ay:()=>s,RM:()=>r});var o=t(86070),a=t(15658);const r=[];function i(e){const n={admonition:"admonition",code:"code",p:"p",...(0,a.R)(),...e.components};return(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["Logto \u76ee\u524d\u4e0d\u652f\u6301 M2M \u5e94\u7528\u8868\u793a\u7528\u6237\u3002\u8bbf\u95ee\u4ee4\u724c (Access token) \u8d1f\u8f7d\u4e2d\u7684 ",(0,o.jsx)(n.code,{children:"sub"})," \u5c06\u662f\u5e94\u7528 ID\u3002"]})})}function s(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(i,{...e})}):i(e)}},4458:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>s});var o=t(86070),a=t(15658);const r=t.p+"assets/images/assign-m2m-roles-modal-f4f833eaf1c4b2c59509c918d3985eee.png",i=t.p+"assets/images/assign-m2m-roles-page-6084df6c23aec9c3f331738031f197b2.png",s=[];function l(e){const n={a:"a",p:"p",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["\u5728\u521b\u5efa M2M \u5e94\u7528\u7a0b\u5e8f\u7684\u8fc7\u7a0b\u4e2d\uff0c\u4f60\u5c06\u88ab\u5f15\u5bfc\u5230\u4e00\u4e2a\u9875\u9762\uff0c\u5728\u90a3\u91cc\u4f60\u53ef\u4ee5\u4e3a\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f\u5206\u914d ",(0,o.jsx)(n.a,{href:"/authorization/role-based-access-control/configure-roles#define-role-type",children:"M2M \u89d2\u8272"}),"\uff1a"]}),"\n",(0,o.jsx)("img",{alt:"\u5206\u914d M2M \u89d2\u8272\u6a21\u5f0f",src:r,width:"600px"}),"\n",(0,o.jsx)(n.p,{children:"\u6216\u8005\uff0c\u5f53\u4f60\u5df2\u7ecf\u521b\u5efa\u4e86\u4e00\u4e2a M2M \u5e94\u7528\u7a0b\u5e8f\u65f6\uff0c\u4f60\u4e5f\u53ef\u4ee5\u5728 M2M \u5e94\u7528\u7a0b\u5e8f\u8be6\u60c5\u9875\u9762\u4e0a\u5206\u914d\u8fd9\u4e9b\u89d2\u8272\uff1a"}),"\n",(0,o.jsx)("img",{alt:"\u5206\u914d M2M \u89d2\u8272\u9875\u9762",src:i,width:"600px"})]})}function c(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},78551:(e,n,t)=>{t.d(n,{A:()=>i});t(30758);var o=t(13526);const a={tabItem:"tabItem_PGP0"};var r=t(86070);function i(e){let{children:n,hidden:t,className:i}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,o.A)(a.tabItem,i),hidden:t,children:n})}},77501:(e,n,t)=>{t.d(n,{A:()=>M});var o=t(30758),a=t(13526),r=t(65052),i=t(25557),s=t(77469),l=t(50873),c=t(62230),d=t(60196);function p(e){return o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:t}=e;return(0,o.useMemo)((()=>{const e=n??function(e){return p(e).map((e=>{let{props:{value:n,label:t,attributes:o,default:a}}=e;return{value:n,label:t,attributes:o,default:a}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const a=(0,i.W6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(r),(0,o.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(a.location.search);n.set(r,e),a.replace({...a.location,search:n.toString()})}),[r,a])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,r=u(e),[i,l]=(0,o.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const o=t.find((e=>e.default))??t[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:n,tabValues:r}))),[c,p]=g({queryString:t,groupId:a}),[m,x]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,r]=(0,d.Dv)(t);return[a,(0,o.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:a}),j=(()=>{const e=c??m;return h({value:e,tabValues:r})?e:null})();(0,s.A)((()=>{j&&l(j)}),[j]);return{selectedValue:i,selectValue:(0,o.useCallback)((e=>{if(!h({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),p(e),x(e)}),[p,x,r]),tabValues:r}}var x=t(13887);const j={tabList:"tabList_CGfx",tabItem:"tabItem_JX1E"};var f=t(86070);function A(e){let{className:n,block:t,selectedValue:o,selectValue:i,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),a=s[t].value;a!==o&&(c(n),i(a))},p=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:o===n?0:-1,"aria-selected":o===n,ref:e=>l.push(e),onKeyDown:p,onClick:d,...r,className:(0,a.A)("tabs__item",j.tabItem,r?.className,{"tabs__item--active":o===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:r}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===r));return e?(0,o.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function b(e){const n=m(e);return(0,f.jsxs)("div",{className:(0,a.A)("tabs-container",j.tabList),children:[(0,f.jsx)(A,{...n,...e}),(0,f.jsx)(v,{...n,...e})]})}function M(e){const n=(0,x.A)();return(0,f.jsx)(b,{...e,children:p(e.children)},String(n))}},15658:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>s});var o=t(30758);const a={},r=o.createContext(a);function i(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);