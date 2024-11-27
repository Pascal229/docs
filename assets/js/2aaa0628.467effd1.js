"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[89534],{4577:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"authorization/api-resources/README","title":"API resources","description":"API resources, a.k.a. Resource Indicators, indicate the target services or resources to be requested, usually, a URI format variable representing the resource\'s identity.","source":"@site/docs/authorization/api-resources/README.mdx","sourceDirName":"authorization/api-resources","slug":"/authorization/api-resources/","permalink":"/authorization/api-resources/","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/docs/authorization/api-resources/README.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"docsSidebar","previous":{"title":"Authorization","permalink":"/authorization/"},"next":{"title":"Protect your API","permalink":"/authorization/api-resources/protect-your-api"}}');var n=s(86070),i=s(15658);const o={sidebar_position:1},c="API resources",a={},d=[{value:"Resource indicator",id:"resource-indicator",level:2},{value:"Logto API resource schema",id:"logto-api-resource-schema",level:2},{value:"Default API",id:"default-api",level:2},{value:"Register the API resources in Logto",id:"register-the-api-resources-in-logto",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components},{CloudLink:s}=t;return s||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("CloudLink",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"api-resources",children:"API resources"})}),"\n",(0,n.jsxs)(t.p,{children:["API resources, a.k.a. ",(0,n.jsx)(t.a,{href:"https://www.rfc-editor.org/rfc/rfc8707.html",children:"Resource Indicators"}),", indicate the target services or resources to be requested, usually, a URI format variable representing the resource's identity.\nThis is a key concept in the Logto authorization system, as it defines the endpoint the authorization policy is designed to protect."]}),"\n",(0,n.jsx)(t.h2,{id:"resource-indicator",children:"Resource indicator"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"A resource value indicates the target service or resource to which access is being requested."}),"\n",(0,n.jsxs)(t.li,{children:["Its value ",(0,n.jsx)(t.strong,{children:"MUST"})," be an absolute URI."]}),"\n",(0,n.jsxs)(t.li,{children:["The URI ",(0,n.jsx)(t.strong,{children:"MUST NOT"})," include a fragment component."]}),"\n",(0,n.jsxs)(t.li,{children:["It ",(0,n.jsx)(t.strong,{children:"SHOULD NOT"})," include a query component."]}),"\n",(0,n.jsxs)(t.li,{children:["You ",(0,n.jsx)(t.strong,{children:"SHOULD"})," provide the most specific URI it can for the complete API or set of resources it intends to access."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"In practice, a client may know a base URI or the application or resource to interact with. It would be appropriate to use it as the value of the resource parameter."}),"\n",(0,n.jsx)(t.p,{children:"E.g., Logto Management API base URI."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"https://tenantId.logto.app/api\n"})}),"\n",(0,n.jsx)(t.p,{children:"By default, this API resource is pre-registered to your Logto service. All the Management APIs under this URI are protected by Logto."}),"\n",(0,n.jsx)(t.h2,{id:"logto-api-resource-schema",children:"Logto API resource schema"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:(0,n.jsx)(t.strong,{children:"Property name"})}),(0,n.jsx)(t.th,{children:(0,n.jsx)(t.strong,{children:"Property description"})}),(0,n.jsx)(t.th,{children:(0,n.jsx)(t.strong,{children:"Required"})})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"API Name"}),(0,n.jsx)(t.td,{children:"A user friendly name that can help you to identify the API resource."}),(0,n.jsx)(t.td,{children:"true"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"API Identifier"}),(0,n.jsxs)(t.td,{children:["The unique API ",(0,n.jsx)(t.a,{href:"https://www.rfc-editor.org/rfc/rfc8707.html",children:"Resource Indicator"})," value, with restrictions listed above."]}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Logto will use it to identify the requested API resource and grant the authorization tokens accordingly."}),(0,n.jsx)(t.td,{children:"true"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:["Token expiration time ",(0,n.jsx)(t.em,{children:"(in seconds)"})]}),(0,n.jsxs)(t.td,{children:["The expiration time set for ",(0,n.jsx)(t.code,{children:"access token"}),". The default expiration value is ",(0,n.jsx)(t.strong,{children:"3600"}),"."]}),(0,n.jsx)(t.td,{children:"false"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Default API"}),(0,n.jsx)(t.td,{children:"Only zero or one default API can be set per tenant."}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"When a default API is designated, the resource parameter can be omitted in the auth request. Subsequent token exchanges will use that API as the audience by default, resulting in the issuance of JWTs."}),(0,n.jsx)(t.td,{children:"false"}),(0,n.jsx)(t.td,{})]})]})]}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["Requests with a expired ",(0,n.jsx)(t.code,{children:"access token"})," should be restricted. This is implemented to protect your API from a abused token. The larger value is set, the longer will a issued ",(0,n.jsx)(t.code,{children:"access token"})," survive, and the more vulnerable your API will be."]})}),"\n",(0,n.jsx)(t.h2,{id:"default-api",children:"Default API"}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(t.p,{children:"This feature is mainly intended for applications that does NOT support OIDC resource indicators, E.g., ChatGPT plugins."})}),"\n",(0,n.jsxs)(t.p,{children:["Logto leverages ",(0,n.jsx)(t.a,{href:"https://www.rfc-editor.org/rfc/rfc8707",children:"RFC 8707: Resource Indicators for OAuth 2.0"})," to implement role-based access control (RBAC). While it is one of the features of OAuth 2.0, it is not yet widely supported."]}),"\n",(0,n.jsxs)(t.p,{children:["In Logto's implementation, every user-defined permission (scope) must be associated with an API Resource. Otherwise, it will be treated as an OpenID Connect (or OAuth) permission. Generally, this doesn't affect your authorization process. However, when integrating with third-party apps that lack support for ",(0,n.jsx)(t.a,{href:"https://www.rfc-editor.org/rfc/rfc8707.html",children:"RFC 8707"})," (e.g., ChatGPT plugins), it can pose challenges since the initial authorization request may not include a ",(0,n.jsx)(t.code,{children:"resource"})," parameter. Consequently, Logto will always issue Opaque Access Tokens."]}),"\n",(0,n.jsx)(t.p,{children:"To address this issue, you can designate an API Resource as the tenant-level default resource. Once it is done:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Logto will use the default API Resource when no ",(0,n.jsx)(t.code,{children:"resource"})," parameter is present in the ",(0,n.jsx)(t.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html#AuthRequest",children:"Authentication Request"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["If the ",(0,n.jsx)(t.code,{children:"openid"})," scope is included, an Opaque Access Token for the ",(0,n.jsx)(t.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html#UserInfo",children:"Userinfo Endpoint"})," will be issued when no ",(0,n.jsx)(t.code,{children:"resource"})," parameter is present in subsequent ",(0,n.jsx)(t.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html#TokenRequest",children:"Token Requests"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["If the ",(0,n.jsx)(t.code,{children:"openid"})," scope is not included, a JWT Access Token for the default API Resource will be issued when no ",(0,n.jsx)(t.code,{children:"resource"})," parameter is present in subsequent ",(0,n.jsx)(t.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html#TokenRequest",children:"Token Requests"}),"."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"By designating a default API Resource, you can ensure smooth integration with apps lacking RFC 8707 support while maintaining the appropriate access controls."}),"\n",(0,n.jsx)(t.h2,{id:"register-the-api-resources-in-logto",children:"Register the API resources in Logto"}),"\n",(0,n.jsxs)(t.p,{children:["To obtain an audience-restricted ",(0,n.jsx)(t.code,{children:"access token"})," from Logto, first, register your backend APIs to enable Logto\u2019s audience-restricted access tokens. When an authorization request is received, Logto will identify the registered API resources and grant access accordingly."]}),"\n",(0,n.jsxs)(t.p,{children:["To register your APIs, navigate to ",(0,n.jsx)(s,{to:"/api-resources",children:"Console > API resources "})," You will see a built-in resource with the API identifier displayed as ",(0,n.jsx)(t.code,{children:"https://[your-tenant-id].logto.app/api"}),". This resource encompasses all the Management APIs of Logto and ensures that they are protected and accessible only to authorized users of Logto."]}),"\n",(0,n.jsxs)(t.p,{children:["Click on the ",(0,n.jsx)(t.strong,{children:"Create API resource"})," button and follow the interactive form to create your own API resources:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["A human-readable ",(0,n.jsx)(t.strong,{children:"API name"})," that may better help you to identify this entity."]}),"\n",(0,n.jsxs)(t.li,{children:["A unique ",(0,n.jsx)(t.strong,{children:"API identifier"})," in URI format. It represents the identity of the API resource."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"The new API will show up on the list once created. You may manage or delete it at the API details page by clicking on the entity."})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},15658:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>c});var r=s(30758);const n={},i=r.createContext(n);function o(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);