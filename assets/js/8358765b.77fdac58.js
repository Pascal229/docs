"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[82041],{10842:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"docs/recipes/manage-users/personal-access-token","title":"Personal access token","description":"Personal access tokens (PATs) provide a secure way for users to grant access tokens without using their credentials and interactive sign-in. This is useful for CI/CD, scripts, or applications that need to access resources programmatically.","source":"@site/docs/docs/recipes/manage-users/personal-access-token.mdx","sourceDirName":"docs/recipes/manage-users","slug":"/docs/recipes/manage-users/personal-access-token","permalink":"/docs/recipes/manage-users/personal-access-token","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/docs/docs/recipes/manage-users/personal-access-token.mdx","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4},"sidebar":"docsSidebar","previous":{"title":"Advanced user search","permalink":"/docs/recipes/manage-users/advanced-user-search"},"next":{"title":"Common practice: you don\'t need a user table","permalink":"/docs/recipes/manage-users/you-dont-need-a-user-table"}}');var o=n(86070),a=n(15658),c=n(56412);const i={sidebar_position:4},r="Personal access token",l={},d=[{value:"Managing personal access tokens",id:"managing-personal-access-tokens",level:2},{value:"Using Console",id:"using-console",level:3},{value:"Using Management API",id:"using-management-api",level:3},{value:"Use PATs to grant access tokens",id:"use-pats-to-grant-access-tokens",level:2},{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3},{value:"Example token exchange",id:"example-token-exchange",level:3}];function h(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.header,{children:(0,o.jsx)(s.h1,{id:"personal-access-token",children:"Personal access token"})}),"\n",(0,o.jsx)(c.A,{cloud:!0,oss:{major:1,minor:20}}),"\n",(0,o.jsx)(s.p,{children:"Personal access tokens (PATs) provide a secure way for users to grant access tokens without using their credentials and interactive sign-in. This is useful for CI/CD, scripts, or applications that need to access resources programmatically."}),"\n",(0,o.jsx)(s.h2,{id:"managing-personal-access-tokens",children:"Managing personal access tokens"}),"\n",(0,o.jsx)(s.h3,{id:"using-console",children:"Using Console"}),"\n",(0,o.jsx)(s.p,{children:'You can manage personal access tokens in the User Details page of the Console. In the card "Authentication", you can see the list of personal access tokens and create new ones.'}),"\n",(0,o.jsx)(s.h3,{id:"using-management-api",children:"Using Management API"}),"\n",(0,o.jsxs)(s.p,{children:["After setting up the ",(0,o.jsx)(s.a,{href:"/docs/recipes/interact-with-management-api/",children:"Management API"}),", you can use the ",(0,o.jsx)(s.a,{href:"https://openapi.logto.io/operation/operation-listuserpersonalaccesstokens",children:"API endpoints"})," to create, list, and delete personal access tokens."]}),"\n",(0,o.jsx)(s.h2,{id:"use-pats-to-grant-access-tokens",children:"Use PATs to grant access tokens"}),"\n",(0,o.jsx)(s.p,{children:"After creating a PAT, you can use it to grant access tokens to your application by using the token exchange endpoint."}),"\n",(0,o.jsx)(s.h3,{id:"request",children:"Request"}),"\n",(0,o.jsxs)(s.p,{children:["The application makes a token exchange request to the tenant's token endpoint with a special grant type using the HTTP POST method. The following parameters are included in the HTTP request entity-body using the ",(0,o.jsx)(s.code,{children:"application/x-www-form-urlencoded"})," format."]}),"\n",(0,o.jsxs)(s.ol,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.code,{children:"client_id"}),": REQUIRED. The client ID of the application."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.code,{children:"grant_type"}),": REQUIRED. The value of this parameter must be ",(0,o.jsx)(s.code,{children:"urn:ietf:params:oauth:grant-type:token-exchange"})," indicates that a token exchange is being performed."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.code,{children:"resource"}),": OPTIONAL. The resource indicator, the same as other token requests."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.code,{children:"scope"}),": OPTIONAL. The requested scopes, the same as other token requests."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.code,{children:"subject_token"}),": REQUIRED. The user's PAT."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.code,{children:"subject_token_type"}),": REQUIRED. The type of the security token provided in the ",(0,o.jsx)(s.code,{children:"subject_token"})," parameter. The value of this parameter must be ",(0,o.jsx)(s.code,{children:"urn:logto:token-type:personal_access_token"}),"."]}),"\n"]}),"\n",(0,o.jsx)(s.h3,{id:"response",children:"Response"}),"\n",(0,o.jsxs)(s.p,{children:["If the token exchange request is successful, the tenant's token endpoint returns an access token that represents the identity of the user. The response includes the following parameters in the HTTP response entity-body using the ",(0,o.jsx)(s.code,{children:"application/json"})," format."]}),"\n",(0,o.jsxs)(s.ol,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.code,{children:"access_token"}),": REQUIRED. The access token of the user, which is the same as other token requests like ",(0,o.jsx)(s.code,{children:"authorization_code"})," or ",(0,o.jsx)(s.code,{children:"refresh_token"}),"."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.code,{children:"issued_token_type"}),": REQUIRED. The type of the issued token. The value of this parameter must be ",(0,o.jsx)(s.code,{children:"urn:ietf:params:oauth:token-type:access_token"}),"."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.code,{children:"token_type"}),": REQUIRED. The type of the token. The value of this parameter must be ",(0,o.jsx)(s.code,{children:"Bearer"}),"."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.code,{children:"expires_in"}),": REQUIRED. The lifetime in seconds of the access token."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.code,{children:"scope"}),": OPTIONAL. The scopes of the access token."]}),"\n"]}),"\n",(0,o.jsx)(s.h3,{id:"example-token-exchange",children:"Example token exchange"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-http",children:"POST /oidc/token HTTP/1.1\nHost: tenant.logto.app\nContent-Type: application/x-www-form-urlencoded\nAuthorization: Basic <base64(client-id:client-secret)>\n\ngrant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Atoken-exchange\n&scope=profile\n&subject_token=pat_W51arOqe7nynW75nWhvYogyc\n&subject_token_type=urn%3Alogto%3Atoken-type%3Apersonal_access_token\n"})}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-http",children:'HTTP/1.1 200 OK\nContent-Type: application/json\n\n{\n  "access_token": "eyJhbGci...zg",\n  "issued_token_type": "urn:ietf:params:oauth:token-type:access_token",\n  "token_type": "Bearer",\n  "expires_in": 3600,\n  "scope": "profile"\n}\n'})}),"\n",(0,o.jsx)(s.p,{children:"The example access token payload:"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-json",children:'{\n  "jti": "iFtbZBeh2M1cTTBuKbHk4",\n  "sub": "123",\n  "iss": "https://tenant.logto.app/oidc",\n  "exp": 1672531200,\n  "iat": 1672527600,\n  "scope": "profile",\n  "client_id": "client-id"\n}\n'})})]})}function p(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},56412:(e,s,n)=>{n.d(s,{A:()=>c});const t="availability_kRMk";var o=n(86070);const a=e=>"comingSoon"===e?"coming soon-blue":"boolean"==typeof e?e?"\u2713 available-4EA254":"not applicable-78767F":`since v${e.major}.${e.minor}-4EA254`,c=e=>{let{cloud:s,oss:n}=e;return(0,o.jsxs)("div",{className:t,children:[(0,o.jsx)("img",{alt:"Cloud availability",src:`https://img.shields.io/badge/Cloud-${a(s)}`}),(0,o.jsx)("img",{alt:"OSS availability",src:`https://img.shields.io/badge/OSS-${a(n)}`})]})}},15658:(e,s,n)=>{n.d(s,{R:()=>c,x:()=>i});var t=n(30758);const o={},a=t.createContext(o);function c(e){const s=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),t.createElement(a.Provider,{value:s},e.children)}}}]);