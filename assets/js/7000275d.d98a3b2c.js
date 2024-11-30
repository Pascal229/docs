"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[28804],{90828:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"authorization/api-resources/protect-your-api","title":"Protect your API","description":"If you don\u2019t need flexible, granular access control policies, you can simply protect your API directly. We\u2019ll walk you through a sequence diagram and the necessary step show how to integrate access control into your app.","source":"@site/docs/authorization/api-resources/protect-your-api.mdx","sourceDirName":"authorization/api-resources","slug":"/authorization/api-resources/protect-your-api","permalink":"/authorization/api-resources/protect-your-api","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/docs/authorization/api-resources/protect-your-api.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"docsSidebar","previous":{"title":"API resources","permalink":"/authorization/api-resources/"},"next":{"title":"Guide: Python","permalink":"/authorization/api-resources/python"}}');var o=r(86070),i=r(15658);const s={sidebar_position:1},a="Protect your API",c={},d=[{value:"Authentication request",id:"authentication-request",level:2},{value:"Token request",id:"token-request",level:2},{value:"Request to the API resource",id:"request-to-the-api-resource",level:2},{value:"Validate authorization tokens for API requests",id:"validate-authorization-tokens-for-api-requests",level:2},{value:"Understanding JWS token",id:"understanding-jws-token",level:4},{value:"Validate the authorization token",id:"validate-the-authorization-token",level:4},{value:"Reference",id:"reference",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h4:"h4",header:"header",li:"li",mermaid:"mermaid",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"protect-your-api",children:"Protect your API"})}),"\n",(0,o.jsx)(t.p,{children:"If you don\u2019t need flexible, granular access control policies, you can simply protect your API directly. We\u2019ll walk you through a sequence diagram and the necessary step show how to integrate access control into your app."}),"\n",(0,o.jsx)(t.mermaid,{value:"sequenceDiagram\n    participant Client\n    participant Logto\n    participant API\n\n    Note over Client,API: 1. Authentication Request\n    Client->>Logto: GET /oidc/auth\n    Note right of Client: with resource=https://resource-server.com/api<br/>and optional scope=read write\n    Logto--\x3e>Client: Returns authorization_code\n\n    Note over Client,API: 2. Token Request\n    Client->>Logto: POST /oidc/token\n    Note right of Client: with authorization_code<br/>resource=https://resource-server.com/api<br/>and optional scope=read write\n    Logto--\x3e>Client: Returns JWT access token\n    Note left of Logto: Token contains:<br/>- Audience restricted to resource<br/>- Granted scopes (if any)\n\n    Note over Client,API: 3. API Request\n    Client->>API: Request with Bearer token\n    Note over API: Validate JWT token:\n    Note over API: - Check signature<br/>- Verify issuer<br/>- Check audience<br/>- Verify expiration<br/>- Check scopes (if RBAC enabled)\n    alt Token Valid\n        API--\x3e>Client: Protected Resource\n    else Token Invalid\n        API--\x3e>Client: 401 Unauthorized\n    end"}),"\n",(0,o.jsx)(t.p,{children:"In this tutorial"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["Logto endpoint: ",(0,o.jsx)(t.code,{children:"https://tenant-id.logto.app"})]}),"\n",(0,o.jsxs)(t.li,{children:["Client application: ",(0,o.jsx)(t.code,{children:"https://client.example.org"})]}),"\n",(0,o.jsxs)(t.li,{children:["API Resource server: ",(0,o.jsx)(t.code,{children:"https://resource-server.com/api"})]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"You should replace these with your actual endpoints when implementing."}),"\n",(0,o.jsx)(t.h2,{id:"authentication-request",children:"Authentication request"}),"\n",(0,o.jsxs)(t.p,{children:["Provide a list of resource indicator parameters in an ",(0,o.jsx)(t.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html#AuthRequest",children:"Authentication Request"}),". It will indicate all the protected resource(s) that the user may request."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"GET https://tenant-id.logto.app/oidc/auth?response_type=code\n    &client_id=s6BhdRkqt3\n    &state=tNwzQ87pC6llebpmac_IDeeq-mCR2wLDYljHUZUAWuI\n    &redirect_uri=https%3A%2F%2Fclient.example.org%2Fcb\n    &resource=https%3A%2F%2Fresource-server.com%2Fapi\n    &scope=read%20write\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Logto will validate and store these resource indicators. An ",(0,o.jsx)(t.code,{children:"authorization_code"})," will be granted and returned with scopes restricted to these specified resources."]}),"\n",(0,o.jsx)(t.p,{children:"Example configuration of Logto SDK:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"const config: LogtoConfig = {\n  // ...other configs\n  resources: ['https://resource-server.com/api'],\n  scopes: ['read', 'write'],\n};\n"})}),"\n",(0,o.jsx)(t.h2,{id:"token-request",children:"Token request"}),"\n",(0,o.jsxs)(t.p,{children:["When the resource parameter is present on a ",(0,o.jsx)(t.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html#TokenRequest",children:"Token Request"})," along with the ",(0,o.jsx)(t.code,{children:"authorization_code"})," granted above, it will specify the target API Resource audience of the access token is requested."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"POST https://tenant-id.logto.app/oidc/token HTTP/1.1\nContent-Type: application/x-www-form-urlencoded\n\ngrant_type=authorization_code&redirect_uri=https%3A%2F%2Fclient.example.org%2Fcb&code=10esc29BWC2qZB0acc9v8zAv9ltc2pko105tQauZ&resource=https%3A%2F%2Fresource-server.com%2Fapi\n"})}),"\n",(0,o.jsx)(t.p,{children:"An encrypted access token with the audience restricted to this requested resource will be granted by Logto. The token carries all the data you will need to represent the authorization status of the request. E.g., the request user's identity and role, the token's audience and expiration time."}),"\n",(0,o.jsx)(t.p,{children:"Example code of Logto SDK:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"const accessToken = await logtoClient.getAccessToken('https://resource-server.com/api');\n"})}),"\n",(0,o.jsx)(t.p,{children:"The accessToken\u2019s payload will contain:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"{\n  iss: '<your-logto-endpoint>/oidc',\n  aud: 'https://resource-server.com/api',\n  scope: 'read write'\n}\n"})}),"\n",(0,o.jsx)(t.h2,{id:"request-to-the-api-resource",children:"Request to the API resource"}),"\n",(0,o.jsxs)(t.p,{children:["The client user sent a request to the API Resource by presenting the given ",(0,o.jsx)(t.code,{children:"access_token"})," in the Authorization header."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"GET https://resource-server.com/api/users\nAuthorization: Bearer eyJhbGciOiJIUz...\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Logto follows the standard token-based authorization protocol to protect your API Resources. To learn more about OAuth 2.0, please refer to OAuth 2.0's ",(0,o.jsx)(t.a,{href:"https://datatracker.ietf.org/doc/html/rfc6749#section-1.3.1",children:"official document"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"validate-authorization-tokens-for-api-requests",children:"Validate authorization tokens for API requests"}),"\n",(0,o.jsxs)(t.p,{children:["Logto issues a standard ",(0,o.jsx)(t.a,{href:"https://datatracker.ietf.org/doc/html/rfc7519",children:"JWT"})," format authorization token for each authorized API request. The token is encrypted and signed as a ",(0,o.jsx)(t.a,{href:"https://datatracker.ietf.org/doc/html/rfc7515",children:"JWS"})," token."]}),"\n",(0,o.jsx)(t.h4,{id:"understanding-jws-token",children:"Understanding JWS token"}),"\n",(0,o.jsxs)(t.p,{children:["An encoded ",(0,o.jsx)(t.a,{href:"https://datatracker.ietf.org/doc/html/rfc7515",children:"JWS"})," token is constructed with three parts:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"JOSE Header: Declares the code type and encoding algorithm"}),"\n",(0,o.jsx)(t.li,{children:"JWS Payload: Includes all the token's claims"}),"\n",(0,o.jsxs)(t.li,{children:["JWS Signature: Signature signed with ",(0,o.jsx)(t.a,{href:"https://datatracker.ietf.org/doc/html/rfc7517",children:"JWK"})]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"A standard schema of Logto issued JWS Payload: (claims may vary, based on your custom OIDC config)"}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"key"}),(0,o.jsx)(t.th,{children:"description"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"jti"}),(0,o.jsx)(t.td,{children:"unique JWT ID"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"sub"}),(0,o.jsx)(t.td,{children:"subject, usually user-id"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"iat"}),(0,o.jsx)(t.td,{children:"timestamp token issues at"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"exp"}),(0,o.jsx)(t.td,{children:"timestamp token expires at"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"client_id"}),(0,o.jsx)(t.td,{children:"application id"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"iss"}),(0,o.jsx)(t.td,{children:"token issuer identity"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"aud"}),(0,o.jsx)(t.td,{children:"audience of the token"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"scope"}),(0,o.jsx)(t.td,{children:"scopes (permissions) of the token"})]})]})]}),"\n",(0,o.jsx)(t.admonition,{type:"note",children:(0,o.jsxs)(t.p,{children:["For development, to visually inspect a JWT token, you could visit a ",(0,o.jsx)(t.a,{href:"https://www.jstoolset.com/jwt",children:"JWT Decoder tool"})," to decode and check the tokens you received. Be careful with or never use the tokens from a production environment. As this is a third party provided public online service, your token may be exposed."]})}),"\n",(0,o.jsx)(t.h4,{id:"validate-the-authorization-token",children:"Validate the authorization token"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"https://datatracker.ietf.org/doc/html/rfc7519#section-7.2",children:"Validating a JWT"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"https://datatracker.ietf.org/doc/html/rfc7515#section-5.2",children:"Validating the JWS signature"})}),"\n",(0,o.jsxs)(t.li,{children:["The token's issuer is ",(0,o.jsx)(t.code,{children:"https://<your-logto-domain>/oidc"})," (issued by your Logto auth server)"]}),"\n",(0,o.jsx)(t.li,{children:"The token's audience is equal to the current receiver's resource indicator registered in Logto Admin Console"}),"\n",(0,o.jsx)(t.li,{children:"The token is within its expiration time"}),"\n",(0,o.jsxs)(t.li,{children:["(",(0,o.jsx)(t.a,{href:"/authorization/role-based-access-control/protect-api-resources-with-rbac",children:"RBAC"})," only) The token has the desired ",(0,o.jsx)(t.code,{children:"scope"})]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"There are various open-source libraries and packages that can help you to validate and decode a JWT token easily. You may pick one and integrate with your backend application based on the language and framework you are using. Please check some of the examples we have:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"/authorization/api-resources/node-express",children:"Node (Express)"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"/authorization/api-resources/spring-boot",children:"Spring Boot"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"/authorization/api-resources/python",children:"Python"})}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"reference",children:"Reference"}),"\n",(0,o.jsxs)(t.p,{children:["Logto uses the code-based OAuth 2.0 Authorization Protocol to make your API request safe. If you are interested in the strategy behind it, refer to OAuth 2.0's ",(0,o.jsx)(t.a,{href:"https://datatracker.ietf.org/doc/html/rfc6749#section-1.3.1",children:"specification"})," for more details."]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},15658:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>a});var n=r(30758);const o={},i=n.createContext(o);function s(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);