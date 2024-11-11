"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[56995],{58180:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>p,frontMatter:()=>a,metadata:()=>n,toc:()=>h});const n=JSON.parse('{"id":"docs/references/resources/README","title":"\ud83d\udcc1 API Resource","description":"Introduction","source":"@site/docs/docs/references/resources/README.md","sourceDirName":"docs/references/resources","slug":"/docs/references/resources/","permalink":"/docs/references/resources/","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/docs/docs/references/resources/README.md","tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"sidebar_position":7},"sidebar":"docsSidebar","previous":{"title":"Configuration","permalink":"/docs/references/core/configuration"},"next":{"title":"\ud83d\udcc3 SDK convention","permalink":"/docs/references/sdk-convention/"}}');var r=s(86070),i=s(15658);function o(e){const t={admonition:"admonition",p:"p",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("strong",{children:"Property Name"})}),(0,r.jsx)("td",{children:(0,r.jsx)("strong",{children:"Property Description"})}),(0,r.jsx)("td",{children:(0,r.jsx)("strong",{children:"Required"})})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"API Name"}),(0,r.jsx)("td",{children:"A user friendly name that can help you to identify the API resource."}),(0,r.jsx)("td",{children:"true"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"API Identifier"}),(0,r.jsxs)("td",{children:[(0,r.jsxs)(t.p,{children:["The unique ",(0,r.jsx)("a",{href:"https://www.rfc-editor.org/rfc/rfc8707.html",children:"API Resource Indicator"})," ","\nvalue, with restrictions listed above."]}),(0,r.jsx)("br",{}),(0,r.jsx)(t.p,{children:"Logto will use it to identify the requested API resource and grant the authorization tokens\naccordingly."})]}),(0,r.jsx)("td",{children:"true"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsxs)(t.p,{children:["Token expiration time ",(0,r.jsx)("i",{children:"(in seconds)"})]})}),(0,r.jsx)("td",{children:(0,r.jsxs)(t.p,{children:["The expiration time set for ",(0,r.jsx)("strong",{children:"access_token"}),". The default expiration value is"," ","\n",(0,r.jsx)("strong",{children:"3600"}),"."]})}),(0,r.jsx)("td",{children:"false"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Default API"}),(0,r.jsxs)("td",{children:[(0,r.jsx)(t.p,{children:"Only zero or one default API can be set per tenant."}),(0,r.jsx)("br",{}),(0,r.jsx)(t.p,{children:"When a default API is designated, the resource parameter can be omitted in the auth request.\nSubsequent token exchanges will use that API as the audience by default, resulting in the\nissuance of JWTs."})]}),(0,r.jsx)("td",{children:"false"})]})]})]}),"\n",(0,r.jsx)(t.admonition,{type:"caution",children:(0,r.jsxs)(t.p,{children:["Requests with a expired ",(0,r.jsx)("strong",{children:"access_token"})," should be restricted.\nThis is implemented to protect your API from a abused token.\nThe larger value is set, the longer will a issued ",(0,r.jsx)("strong",{children:"access_token"})," survive, and the more vulnerable your API will be."]})})]})}function c(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}const a={sidebar_position:7},d="\ud83d\udcc1 API Resource",l={},h=[{value:"Introduction",id:"introduction",level:2},{value:"What is an API Resource?",id:"what-is-an-api-resource",level:3},{value:"Why is API Resource needed?",id:"why-is-api-resource-needed",level:3},{value:"Definitions",id:"definitions",level:2},{value:"Resource Indicator",id:"resource-indicator",level:3},{value:"Logto API Resource Schema",id:"logto-api-resource-schema",level:3},{value:"Default API",id:"default-api",level:3},{value:"Permissions and Role-based access control",id:"permissions-and-role-based-access-control",level:3},{value:"How does it work",id:"how-does-it-work",level:2},{value:"1. Authentication request",id:"1-authentication-request",level:3},{value:"2. Token request",id:"2-token-request",level:3},{value:"3. Request to the API Resource",id:"3-request-to-the-api-resource",level:3}];function u(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"-api-resource",children:"\ud83d\udcc1 API Resource"})}),"\n",(0,r.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,r.jsx)(t.h3,{id:"what-is-an-api-resource",children:"What is an API Resource?"}),"\n",(0,r.jsxs)(t.p,{children:["API Resources, a.k.a. ",(0,r.jsx)(t.a,{href:"https://www.rfc-editor.org/rfc/rfc8707.html",children:"Resource Indicators"}),", indicate the target services or resources to be requested, usually, a URI format variable representing the resource's identity."]}),"\n",(0,r.jsx)(t.h3,{id:"why-is-api-resource-needed",children:"Why is API Resource needed?"}),"\n",(0,r.jsx)(t.p,{children:"Logto, as an authorization server, is designed to serve a large number of services and APIs. By indicating which API Resource an end-user intends to access, Logto can issue a private encrypted authorization token and apply audience restrictions accordingly."}),"\n",(0,r.jsx)(t.p,{children:"A guarded request with an authorization token provided will help you protect your private resources from being accessed and attacked by anonymous identities."}),"\n",(0,r.jsx)(t.h2,{id:"definitions",children:"Definitions"}),"\n",(0,r.jsx)(t.h3,{id:"resource-indicator",children:"Resource Indicator"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"A resource value indicates the target service or resource to which access is being requested."}),"\n",(0,r.jsxs)(t.li,{children:["Its value ",(0,r.jsx)(t.strong,{children:"MUST"})," be an absolute URI."]}),"\n",(0,r.jsxs)(t.li,{children:["The URI ",(0,r.jsx)(t.strong,{children:"MUST NOT"})," include a fragment component."]}),"\n",(0,r.jsxs)(t.li,{children:["It ",(0,r.jsx)(t.strong,{children:"SHOULD NOT"})," include a query component."]}),"\n",(0,r.jsxs)(t.li,{children:["You ",(0,r.jsx)(t.strong,{children:"SHOULD"})," provide the most specific URI it can for the complete API or set of resources it intends to access."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"In practice, a client may know a base URI or the application or resource to interact with. It would be appropriate to use it as the value of the resource parameter."}),"\n",(0,r.jsx)(t.p,{children:"E.g., Logto Management API base URI."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"https://tenantId.logto.app/api\n"})}),"\n",(0,r.jsx)(t.p,{children:"By default, this API Resource is pre-registered to your Logto service. All the Management APIs under this URI are protected by Logto."}),"\n",(0,r.jsx)(t.h3,{id:"logto-api-resource-schema",children:"Logto API Resource Schema"}),"\n",(0,r.jsx)(c,{}),"\n",(0,r.jsx)(t.h3,{id:"default-api",children:"Default API"}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsx)(t.p,{children:"This feature is mainly intended for applications that does NOT support OIDC resource indicators, E.g., ChatGPT plugins."})}),"\n",(0,r.jsxs)(t.p,{children:["Logto leverages ",(0,r.jsx)(t.a,{href:"https://www.rfc-editor.org/rfc/rfc8707",children:"RFC 8707: Resource Indicators for OAuth 2.0"})," to implement Role-based access control (RBAC). While it is one of the features of OAuth 2.0, it is not yet widely supported."]}),"\n",(0,r.jsxs)(t.p,{children:["In Logto's implementation, every user-defined permission (scope) must be associated with an API Resource. Otherwise, it will be treated as an OpenID Connect (or OAuth) permission. Generally, this doesn't affect your authorization process. However, when integrating with third-party apps that lack support for RFC 8707 (e.g., ChatGPT plugins), it can pose challenges since the initial authorization request may not include a ",(0,r.jsx)(t.code,{children:"resource"})," parameter. Consequently, Logto will always issue Opaque Access Tokens."]}),"\n",(0,r.jsx)(t.p,{children:"To address this issue, you can designate an API Resource as the tenant-level default resource. Once it is done:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Logto will use the default API Resource when no ",(0,r.jsx)(t.code,{children:"resource"})," parameter is present in the ",(0,r.jsx)(t.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html#AuthRequest",children:"Authentication Request"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["If the ",(0,r.jsx)(t.code,{children:"openid"})," scope is included, an Opaque Access Token for the ",(0,r.jsx)(t.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html#UserInfo",children:"Userinfo Endpoint"})," will be issued when no ",(0,r.jsx)(t.code,{children:"resource"})," parameter is present in subsequent ",(0,r.jsx)(t.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html#TokenRequest",children:"Token Requests"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["If the ",(0,r.jsx)(t.code,{children:"openid"})," scope is not included, a JWT Access Token for the default API Resource will be issued when no ",(0,r.jsx)(t.code,{children:"resource"})," parameter is present in subsequent ",(0,r.jsx)(t.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html#TokenRequest",children:"Token Requests"}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"By designating a default API Resource, you can ensure smooth integration with apps lacking RFC 8707 support while maintaining the appropriate access controls."}),"\n",(0,r.jsx)(t.h3,{id:"permissions-and-role-based-access-control",children:"Permissions and Role-based access control"}),"\n",(0,r.jsxs)(t.p,{children:["See ",(0,r.jsx)(t.a,{href:"/docs/recipes/rbac",children:"\ud83d\udd10 Role-based access control (RBAC)"})," for details."]}),"\n",(0,r.jsx)(t.h2,{id:"how-does-it-work",children:"How does it work"}),"\n",(0,r.jsx)(t.h3,{id:"1-authentication-request",children:"1. Authentication request"}),"\n",(0,r.jsxs)(t.p,{children:["Provide a list of resource indicator parameters in an ",(0,r.jsx)(t.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html#AuthRequest",children:"Authentication Request"}),". It will indicate all the protected resource(s) that the user may request."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"GET http://localhost:3001/oidc/auth?response_type=code\n    &client_id=s6BhdRkqt3\n    &state=tNwzQ87pC6llebpmac_IDeeq-mCR2wLDYljHUZUAWuI\n    &redirect_uri=https%3A%2F%2Fclient.example.org%2Fcb\n    &resource=https%3A%2F%2Flogto.dev%2Fapi%2Fapplications\n    &resource=https%3A%2F%2Flogto.dev%2Fapi%2Fusers\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Logto will validate and store these resource indicators. An ",(0,r.jsx)(t.code,{children:"authorization_code"})," will be granted and returned with scopes restricted to these specified resources."]}),"\n",(0,r.jsx)(t.h3,{id:"2-token-request",children:"2. Token request"}),"\n",(0,r.jsxs)(t.p,{children:["When the resource parameter is present on a ",(0,r.jsx)(t.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html#TokenRequest",children:"Token Request"})," along with the ",(0,r.jsx)(t.code,{children:"authorization_code"})," granted above, it will specify the target API Resource audience of the access token is requested."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"POST http://localhost:3001/oidc/token HTTP/1.1\n\n    grant_type=authorization_code\n    redirect_uri=https%3A%2F%2Fclient.example.org%2Fcb\n    code=10esc29BWC2qZB0acc9v8zAv9ltc2pko105tQauZ\n    resource=https%3A%2F%2Flogto.test.dev%2Fusers\n"})}),"\n",(0,r.jsx)(t.p,{children:"An encrypted access token with the audience restricted to this requested resource will be granted by Logto. The token carries all the data you will need to represent the authorization status of the request. E.g., the request user's identity and role, the token's audience and expiration time."}),"\n",(0,r.jsx)(t.h3,{id:"3-request-to-the-api-resource",children:"3. Request to the API Resource"}),"\n",(0,r.jsxs)(t.p,{children:["The client user sent a request to the API Resource by presenting the given ",(0,r.jsx)(t.code,{children:"access_token"})," in the Authorization header."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"GET http://localhost:3001/api/users\n\nAuthorization: Bearer eyJhbGciOiJIUz...\n"})}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:["Please follow our ",(0,r.jsx)(t.a,{href:"/docs/recipes/protect-your-api/",children:"\u2694\ufe0f Protect Your API"})," guide to implement the token validation on your server-side APIs and make your resources well protected."]})}),"\n",(0,r.jsxs)(t.p,{children:["Logto follows the standard token-based authorization protocol to protect your API Resources. To learn more about OAuth 2.0, please refer to OAuth 2.0's ",(0,r.jsx)(t.a,{href:"https://datatracker.ietf.org/doc/html/rfc6749#section-1.3.1",children:"official document"}),"."]})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},15658:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>c});var n=s(30758);const r={},i=n.createContext(r);function o(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);