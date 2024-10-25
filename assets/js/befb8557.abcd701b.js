"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[86921],{86242:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>y,frontMatter:()=>j,metadata:()=>a,toc:()=>u});var r=s(86070),d=s(15658);function i(e){const n={code:"code",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:"fetchOidcConfig"}),(0,r.jsxs)(n.p,{children:["Return ",(0,r.jsx)(n.code,{children:"OidcConfigResponse"})," by requesting to ",(0,r.jsx)(n.code,{children:"/oidc/.well-known/openid-configuration"}),"."]}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Parameters"})}),(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Notes"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"endpoint"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"The OIDC service endpoint"})]})})]}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Return Type"})}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"OidcConfigResponse"})}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Throws"})}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Fetch failed"}),"\n"]})]}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:"generateSignInUri"}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Parameters"})}),(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Required"}),(0,r.jsx)(n.th,{children:"Notes"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"authorizationEndpoint"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"\u2705"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"clientId"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"\u2705"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"redirectUri"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"\u2705"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"codeChallenge"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"\u2705"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"state"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"\u2705"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"scopes"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string[]"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"The implementation may vary according to language specifications."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"resources"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string[]"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"The implementation may vary according to language specifications."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"prompt"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{}),(0,r.jsxs)(n.td,{children:["Default: ",(0,r.jsx)(n.code,{children:"consent"}),"."]})]})]})]}),(0,r.jsxs)(n.p,{children:["The URL will be generated based on ",(0,r.jsx)(n.code,{children:"authorizationEndpoint"})," and contains the following query params:"]}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Sign-In Url Query Parameters"})}),(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Query Key"}),(0,r.jsx)(n.th,{children:"Required"}),(0,r.jsx)(n.th,{children:"Notes"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"client_id"}),(0,r.jsx)(n.td,{children:"\u2705"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"redirect_uri"}),(0,r.jsx)(n.td,{children:"\u2705"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"code_challenge"}),(0,r.jsx)(n.td,{children:"\u2705"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"code_challenge_method"}),(0,r.jsx)(n.td,{children:"\u2705"}),(0,r.jsx)(n.td,{children:"Hardcoded as S256."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"state"}),(0,r.jsx)(n.td,{children:"\u2705"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"scope"}),(0,r.jsx)(n.td,{children:"\u2705"}),(0,r.jsx)(n.td,{children:"scope always contains openid and offline_access, even the input scope provides a null or empty scope value."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"resource"}),(0,r.jsx)(n.td,{}),(0,r.jsxs)(n.td,{children:["We can add resource to uri more than once, the backend will convert them as a list. e.g. ",(0,r.jsx)(n.code,{children:"resource=a&resource=b"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"response_type"}),(0,r.jsx)(n.td,{children:"\u2705"}),(0,r.jsx)(n.td,{children:"Hardcoded as code."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"prompt"}),(0,r.jsx)(n.td,{children:"\u2705"}),(0,r.jsx)(n.td,{})]})]})]}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Return Type"})}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"string"})})]}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:"generateSignOutUri"}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Parameters"})}),(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Required"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"endSessionEndpoint"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"\u2705"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"idToken"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"\u2705"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"postLogoutRedirectUri"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{})]})]})]}),(0,r.jsxs)(n.p,{children:["The URL to be generated will be based on ",(0,r.jsx)(n.code,{children:"endSessionEndpoint"})," and contain the following query parameters:"]}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Sign-Out Url Query Parameters"})}),(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Query Key"}),(0,r.jsx)(n.th,{children:"Required"}),(0,r.jsx)(n.th,{children:"Notes"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"id_token_hint"}),(0,r.jsx)(n.td,{children:"\u2705"}),(0,r.jsxs)(n.td,{children:["the inputed ",(0,r.jsx)(n.code,{children:"idToken"})," parameter"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"post_logout_redirect_uri"}),(0,r.jsx)(n.td,{}),(0,r.jsxs)(n.td,{children:["the inputed ",(0,r.jsx)(n.code,{children:"postLogoutRedirectUri"})," parameter"]})]})]})]}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Return Type"})}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"string"})})]}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:"fetchTokenByAuthorizationCode"}),(0,r.jsxs)(n.p,{children:["Fetch a token (",(0,r.jsx)(n.code,{children:"CodeTokenResponse"}),") by requesting to ",(0,r.jsx)(n.code,{children:"/oidc/token"})," (by authorization code)."]}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Parameters"})}),(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Required"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"tokenEndpoint"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"\u2705"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"code"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"\u2705"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"codeVerifier"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"\u2705"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"clientId"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"\u2705"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"redirectUri"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"\u2705"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"resource"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{})]})]})]}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"HTTP Request"})}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Endpoint: ",(0,r.jsx)(n.code,{children:"/oidc/token"})]}),"\n",(0,r.jsxs)(n.li,{children:["Method: ",(0,r.jsx)(n.code,{children:"POST"})]}),"\n",(0,r.jsxs)(n.li,{children:["Content-Type: ",(0,r.jsx)(n.code,{children:"application/x-www-form-urlencoded"})]}),"\n",(0,r.jsx)(n.li,{children:"Payload:"}),"\n"]}),(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Query Key"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Required"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"grant_type"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string: 'authorization_code'"})}),(0,r.jsx)(n.td,{children:"\u2705"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"code"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"\u2705"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"code_verifier"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"\u2705"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"client_id"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"\u2705"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"redirect_uri"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"\u2705"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"resource"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{})]})]})]}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Return Type"})}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"CodeTokenResponse"})}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Throws"})}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Fetch failed"}),"\n"]})]}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:"fetchTokenByRefreshToken"}),(0,r.jsxs)(n.p,{children:["Fetch a token (",(0,r.jsx)(n.code,{children:"RefreshTokenTokenResponse"}),") via ",(0,r.jsx)(n.code,{children:"/oidc/token"})," (by refresh token)."]}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Parameters"})}),(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Required"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"tokenEndpoint"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"\u2705"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"clientId"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"\u2705"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"refreshToken"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"\u2705"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"resource"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"scopes"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string[]"})}),(0,r.jsx)(n.td,{})]})]})]}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"HTTP Request"})}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Endpoint: ",(0,r.jsx)(n.code,{children:"/oidc/token"})]}),"\n",(0,r.jsxs)(n.li,{children:["Method: ",(0,r.jsx)(n.code,{children:"POST"})]}),"\n",(0,r.jsxs)(n.li,{children:["Content-Type: ",(0,r.jsx)(n.code,{children:"application/x-www-form-urlencoded"})]}),"\n",(0,r.jsx)(n.li,{children:"Payload:"}),"\n"]}),(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Query Key"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Required"}),(0,r.jsx)(n.th,{children:"Notes"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"grant_type"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string: 'refresh_token'"})}),(0,r.jsx)(n.td,{children:"\u2705"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"refresh_token"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"\u2705"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"client_id"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"\u2705"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"resource"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"scope"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{}),(0,r.jsxs)(n.td,{children:["we join the ",(0,r.jsx)(n.code,{children:"scopes"})," values with space to construct this ",(0,r.jsx)(n.code,{children:"scope"})," string"]})]})]})]}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Return Type"})}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"RefreshTokenTokenResponse"})}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Throws"})}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Fetch failed"}),"\n"]})]}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:"revoke"}),(0,r.jsxs)(n.p,{children:["Request to ",(0,r.jsx)(n.code,{children:"/oidc/token/revocation"})," API to notify the authorization server that a previously obtained refresh or access token is no longer needed."]}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Parameters"})}),(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Notes"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"revocationEndpoint"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"clientId"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"token"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"token to be revoked"})]})]})]}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"HTTP Request"})}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Endpoint: ",(0,r.jsx)(n.code,{children:"/oidc/token/revocation"})]}),"\n",(0,r.jsxs)(n.li,{children:["Method: ",(0,r.jsx)(n.code,{children:"POST"})]}),"\n",(0,r.jsxs)(n.li,{children:["Content-Type: ",(0,r.jsx)(n.code,{children:"application/x-www-form-urlencoded"})]}),"\n",(0,r.jsx)(n.li,{children:"Payload:"}),"\n"]}),(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Query Key"}),(0,r.jsx)(n.th,{children:"Type"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"client_id"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"token"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})})]})]})]}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Return Type"})}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"void"})}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Throws"})}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Revoke failed"}),"\n"]})]})]})}function c(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}function t(e){const n={code:"code",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:"OidcConfigResponse"}),(0,r.jsxs)(n.p,{children:["The configuration of the identity provider, which can be retrieved via ",(0,r.jsx)(n.code,{children:"/oidc/.well-known/openid-configuration"})," API."]}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Properties"})}),(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Type"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"authorizationEndpoint"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"tokenEndpoint"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"endSessionEndpoint"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"revocationEndpoint"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"jwksUri"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"issuer"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})})]})]})]})]}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:"CodeTokenResponse"}),(0,r.jsxs)(n.p,{children:["The response data of ",(0,r.jsx)(n.code,{children:"/oidc/token"})," (by authorization code)."]}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Properties"})}),(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Required"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"accessToken"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"\u2705"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"refreshToken"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"idToken"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"\u2705"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"scope"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"\u2705"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"expiresIn"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"number"})}),(0,r.jsx)(n.td,{children:"\u2705"})]})]})]})]}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:"RefreshTokenResponse"}),(0,r.jsxs)(n.p,{children:["The response data of ",(0,r.jsx)(n.code,{children:"/oidc/token"})," (by refresh token) when refreshing tokens by a refresh token."]}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Properties"})}),(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Required"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"accessToken"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"\u2705"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"refreshToken"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"\u2705"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"idToken"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"scope"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"\u2705"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"expiresIn"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"number"})}),(0,r.jsx)(n.td,{children:"\u2705"})]})]})]})]}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:"IdTokenClaims"}),(0,r.jsx)(n.p,{children:"Claims carried by the id token."}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Properties"})}),(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Required"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"sub"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"\u2705"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"aud"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"\u2705"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"exp"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"number"})}),(0,r.jsx)(n.td,{children:"\u2705"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"iat"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"number"})}),(0,r.jsx)(n.td,{children:"\u2705"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"iss"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"\u2705"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"atHash"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"username"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"name"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"avatar"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{})]})]})]})]})]})}function l(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(t,{...e})}):t(e)}function h(e){const n={a:"a",br:"br",code:"code",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:"generateCodeVerifier"}),(0,r.jsxs)(n.p,{children:["Generate a code verifier.",(0,r.jsx)(n.br,{}),"\n","The length of the code verifier is hardcoded as 64.",(0,r.jsx)(n.br,{}),"\n","The return value MUST be encrypted to an URL-safe base64 format string."]}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Reference"})}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://oauth.net/2/pkce/",children:"PKCE"})}),"\n"]}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Parameters"})}),(0,r.jsx)(n.p,{children:"None."}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Return Type"})}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"string"})})]}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:"generateCodeChallenge"}),(0,r.jsxs)(n.p,{children:["Generate a code challenge based on a code verifier.",(0,r.jsx)(n.br,{}),"\n","This method encrypts the code verifier and returns the result in a URL-safe Base64 format.",(0,r.jsx)(n.br,{}),"\n","We hardcode the encryption algorithm as ",(0,r.jsx)(n.code,{children:"SHA-256"})," in Logto V1."]}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Reference"})}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://oauth.net/2/pkce/",children:"PKCE"})}),"\n"]}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Parameters"})}),(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Notes"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"codeVerifier"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsxs)(n.td,{children:["Generated by ",(0,r.jsx)(n.a,{href:"#generatecodeverifier",children:"generateCodeVerifier"})]})]})})]}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Return Type"})}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"string"})})]}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:"generateState"}),(0,r.jsxs)(n.p,{children:['"State" is used to prevent the CSRF attack.',(0,r.jsx)(n.br,{}),"\n",'The length of the "state" is hardcoded as 64.',(0,r.jsx)(n.br,{}),"\n","The result string to be returned MUST be encrypted to an URL-safe base64 format string."]}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Reference"})}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/rfc6749#section-10.12",children:"CSRF"})}),"\n"]}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Parameters"})}),(0,r.jsx)(n.p,{children:"None."}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Return Type"})}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"string"})})]}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:"decodeIdToken"}),(0,r.jsxs)(n.p,{children:["Decode an ID Token without secret verification.",(0,r.jsx)(n.br,{}),"\n","Return an ",(0,r.jsx)(n.code,{children:"IdTokenClaims"})," which carries all the token claims in the payload section."]}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Parameters"})}),(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Type"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"token"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})})]})})]}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Return Type"})}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"IdTokenClaims"})}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Throws"})}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.code,{children:"token"})," is not a valid JWT."]}),"\n"]})]}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:"verifyIdToken"}),(0,r.jsx)(n.p,{children:"Verify if an ID Token is legal."}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Verify Signing Key"})}),(0,r.jsxs)(n.p,{children:["OIDC supported the JSON Web Key Set.\nThis function accepts a ",(0,r.jsx)(n.code,{children:"JsonWebKeySet"})," object from a 3rd-party library (jose) for verification."]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'// JsonWebKeySet example\n{\n  "keys": [\n    {\n      "kty": "RSA",\n      "use": "sig",\n      "kid": "xxxx",\n      "e": "xxxx",\n      "n": "xxxx"\n    }\n  ]\n}\n'})}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Verify Claims"})}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Verify the ",(0,r.jsx)(n.code,{children:"iss"})," in the ID Token matches the issuer of this token."]}),"\n",(0,r.jsxs)(n.li,{children:["Verify the ",(0,r.jsx)(n.code,{children:"aud"})," (audience) Claim is equal to the client ID."]}),"\n",(0,r.jsx)(n.li,{children:"Verify that the current time is before the expiry time."}),"\n",(0,r.jsxs)(n.li,{children:["Verify that the issued at time (",(0,r.jsx)(n.code,{children:"iat"}),") is not more than +/- 1 minute on the current time."]}),"\n"]}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Reference"})}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html#IDTokenValidation",children:"OpenID connect core - ID Token Validation"})}),"\n"]}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Parameters"})}),(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Type"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"idToken"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"clientId"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"issuer"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"jwks"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"JsonWebKeySet"})})]})]})]}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Return Type"})}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"void"})}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Throws"})}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Verify signing key failed"}),"\n",(0,r.jsx)(n.li,{children:"Verify claims failed"}),"\n"]})]}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:"verifyAndParseCodeFromCallbackUri"}),(0,r.jsxs)(n.p,{children:["Verify the sign-in callbackUri is legal and return the ",(0,r.jsx)(n.code,{children:"code"})," extracted from callbackUri."]}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Verify Callback URI"})}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Verify the ",(0,r.jsx)(n.code,{children:"callbackUri"})," should start with ",(0,r.jsx)(n.code,{children:"redirectUri"})]}),"\n",(0,r.jsxs)(n.li,{children:["Verify there is no ",(0,r.jsx)(n.code,{children:"error"})," in the ",(0,r.jsx)(n.code,{children:"callbackUri"})," (Refer to ",(0,r.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/rfc6749#section-4.1.2.1",children:"Error Response"})," in redirect URI)."]}),"\n",(0,r.jsxs)(n.li,{children:["Verify the ",(0,r.jsx)(n.code,{children:"callbackUri"})," contains ",(0,r.jsx)(n.code,{children:"state"}),", which should equal to the ",(0,r.jsx)(n.code,{children:"state"})," value you specified in ",(0,r.jsx)(n.code,{children:"generateSignInUri"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Verify the ",(0,r.jsx)(n.code,{children:"callbackUri"})," contains the parameter value ",(0,r.jsx)(n.code,{children:"code"}),", which you will use when requesting to ",(0,r.jsx)(n.code,{children:"/oidc/token"})," (by refresh token)."]}),"\n"]}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Parameters"})}),(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Type"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"callbackUri"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"redirectUri"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"state"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})})]})]})]}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Return Type"})}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Throws"})}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Verifications failed"}),"\n"]})]})]})}function x(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}const j={sidebar_position:1.2},o="Core",a={id:"docs/references/sdk-convention/core-sdk-convention",title:"Core",description:"Basic conventions",source:"@site/docs/docs/references/sdk-convention/core-sdk-convention.mdx",sourceDirName:"docs/references/sdk-convention",slug:"/docs/references/sdk-convention/core-sdk-convention",permalink:"/docs/references/sdk-convention/core-sdk-convention",draft:!1,unlisted:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/docs/references/sdk-convention/core-sdk-convention.mdx",tags:[],version:"current",sidebarPosition:1.2,frontMatter:{sidebar_position:1.2},sidebar:"docsSidebar",previous:{title:"Design strategy",permalink:"/docs/references/sdk-convention/design-strategy"},next:{title:"Platform SDK",permalink:"/docs/references/sdk-convention/platform-sdk-convention"}},p={},u=[{value:"Basic conventions",id:"basic-conventions",level:2},{value:"Basic requirements",id:"basic-requirements",level:2},{value:"Types",id:"types",level:3},{value:"Utility functions",id:"utility-functions",level:3},{value:"Core functions",id:"core-functions",level:3}];function g(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",ul:"ul",...(0,d.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"core",children:"Core"})}),"\n",(0,r.jsx)(n.h2,{id:"basic-conventions",children:"Basic conventions"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The core should contain platform-independent functions only."}),"\n",(0,r.jsxs)(n.li,{children:["The core should be named as ",(0,r.jsx)(n.code,{children:"{$language}"})," and under the repository root directory. E.g., ",(0,r.jsx)(n.code,{children:"logto/js/js"}),", ",(0,r.jsx)(n.code,{children:"logto/kotlin/kotlin"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["The core package should be named as ",(0,r.jsx)(n.code,{children:"{$language}"})," under Logto scope. E.g., ",(0,r.jsx)(n.code,{children:"@logto/js"}),", ",(0,r.jsx)(n.code,{children:"io.logto.sdk:kotlin"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"basic-requirements",children:"Basic requirements"}),"\n",(0,r.jsx)(n.p,{children:"Any core SDK should contain:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Types"}),"\n",(0,r.jsx)(n.li,{children:"Utility functions"}),"\n",(0,r.jsx)(n.li,{children:"Core functions"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"types",children:"Types"}),"\n",(0,r.jsx)(l,{}),"\n",(0,r.jsx)(n.h3,{id:"utility-functions",children:"Utility functions"}),"\n",(0,r.jsx)(x,{}),"\n",(0,r.jsx)(n.h3,{id:"core-functions",children:"Core functions"}),"\n",(0,r.jsx)(c,{})]})}function y(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(g,{...e})}):g(e)}},15658:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>t});var r=s(30758);const d={},i=r.createContext(d);function c(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:c(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);