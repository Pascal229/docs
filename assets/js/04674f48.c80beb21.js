"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[16644],{66017:(e,t,i)=>{i.d(t,{Ay:()=>d,RM:()=>r});var n=i(86070),s=i(15658);const r=[];function o(e){const t={a:"a",admonition:"admonition",p:"p",...(0,s.R)(),...e.components};return(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:["In this guide, we assume you have basic knowledge of Logto Connectors. If you don't, check out the ",(0,n.jsx)(t.a,{href:"/connectors",children:"Configure connectors"})," guide to get started."]})})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},65127:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>h,contentTitle:()=>c,default:()=>u,frontMatter:()=>d,metadata:()=>n,toc:()=>a});const n=JSON.parse('{"id":"integrations/social/oidc/README","title":"Set up social login with OpenID Connect (OIDC)","description":"The official Logto connector for OpenID Connect (OIDC) protocol.","source":"@site/docs/integrations/social/oidc/README.mdx","sourceDirName":"integrations/social/oidc","slug":"/integrations/oidc","permalink":"/integrations/oidc","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/docs/integrations/social/oidc/README.mdx","tags":[],"version":"current","frontMatter":{"slug":"/integrations/oidc","sidebar_label":"OIDC (Social)","sidebar_custom_props":{"description":"OpenID Connect 1.0 is a simple identity layer on top of the OAuth 2.0 protocol."}},"sidebar":"integrationsSidebar","previous":{"title":"OAuth 2.0 (Social)","permalink":"/integrations/oauth2"},"next":{"title":"WeChat (Native)","permalink":"/integrations/wechat-native"}}');var s=i(86070),r=i(15658),o=i(66017);const d={slug:"/integrations/oidc",sidebar_label:"OIDC (Social)",sidebar_custom_props:{description:"OpenID Connect 1.0 is a simple identity layer on top of the OAuth 2.0 protocol."}},c="Set up social login with OpenID Connect (OIDC)",h={},a=[...o.RM,{value:"Get started",id:"get-started",level:2},{value:"Create your OIDC app",id:"create-your-oidc-app",level:2},{value:"Configure your connector",id:"configure-your-connector",level:2},{value:"Config types",id:"config-types",level:2}];function l(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"set-up-social-login-with-openid-connect-oidc",children:"Set up social login with OpenID Connect (OIDC)"})}),"\n",(0,s.jsx)(t.p,{children:"The official Logto connector for OpenID Connect (OIDC) protocol."}),"\n",(0,s.jsx)(o.Ay,{}),"\n",(0,s.jsx)(t.h2,{id:"get-started",children:"Get started"}),"\n",(0,s.jsx)(t.p,{children:"The OIDC connector enables Logto's connection to an arbitrary social identity provider that supports OIDC protocol."}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["\u2139\ufe0f ",(0,s.jsx)(t.strong,{children:"Note"})]}),"\n",(0,s.jsx)(t.p,{children:"OIDC connector is a special kind of connector in Logto, you can add a few OIDC-based connector."}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"create-your-oidc-app",children:"Create your OIDC app"}),"\n",(0,s.jsx)(t.p,{children:"When you open this page, we believe you already know which social identity provider you want to connect to. The first thing to do is to confirm that the identity provider supports the OIDC protocol, which is a prerequisite for configuring a valid connector. Then, follow the identity provider's instructions to register and create the relevant app for OIDC authorization."}),"\n",(0,s.jsx)(t.h2,{id:"configure-your-connector",children:"Configure your connector"}),"\n",(0,s.jsx)(t.p,{children:'We ONLY support "Authorization Code" grant type for security consideration and it can perfectly fit Logto\'s scenario.'}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"clientId"})," and ",(0,s.jsx)(t.code,{children:"clientSecret"})," can be found at your OIDC apps details page."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.em,{children:"clientId"}),": The client ID is a unique identifier that identifies the client application during registration with the authorization server. This ID is used by the authorization server to verify the identity of the client application and to associate any authorized access tokens with that specific client application."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.em,{children:"clientSecret"}),": The client secret is a confidential key that is issued to the client application by the authorization server during registration. The client application uses this secret key to authenticate itself with the authorization server when requesting access tokens. The client secret is considered confidential information and should be kept secure at all times."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.em,{children:"tokenEndpointAuthMethod"}),": The token endpoint authentication method is used by the client application to authenticate itself with the authorization server when requesting access tokens. To discover supported methods, consult the ",(0,s.jsx)(t.code,{children:"token_endpoint_auth_methods_supported"})," field available at the OAuth 2.0 service provider\u2019s OpenID Connect discovery endpoint, or refer to the relevant documentation provided by the OAuth 2.0 service provider."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.em,{children:"clientSecretJwtSigningAlgorithm (Optional)"}),": Only required when ",(0,s.jsx)(t.code,{children:"tokenEndpointAuthMethod"})," is ",(0,s.jsx)(t.code,{children:"client_secret_jwt"}),". The client secret JWT signing algorithm is used by the client application to sign the JWT that is sent to the authorization server during the token request."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.em,{children:"scope"}),': The scope parameter is used to specify the set of resources and permissions that the client application is requesting access to. The scope parameter is typically defined as a space-separated list of values that represent specific permissions. For example, a scope value of "read write" might indicate that the client application is requesting read and write access to a user\'s data.']}),"\n",(0,s.jsxs)(t.p,{children:["You are expected to find ",(0,s.jsx)(t.code,{children:"authorizationEndpoint"}),", ",(0,s.jsx)(t.code,{children:"tokenEndpoint"}),", ",(0,s.jsx)(t.code,{children:"jwksUri"})," and ",(0,s.jsx)(t.code,{children:"issuer"})," as OpenID Provider's configuration information. They should be available in social vendor's documentation."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.em,{children:"authenticationEndpoint"}),": This endpoint is used to initiate the authentication process. The authentication process typically involves the user logging in and granting authorization for the client application to access their resources."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.em,{children:"tokenEndpoint"}),": This endpoint is used by the client application to obtain an id token that can be used to access the requested resources. The client application typically sends a request to the token endpoint with a grant type and authorization code to receive an id token."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.em,{children:"jwksUri"}),": This is the URL endpoint where the JSON Web Key Set (JWKS) of the social identity provider (IdP for short) can be obtained. The JWKS is a set of cryptographic keys that the IdP uses to sign and verify JSON Web Tokens (JWTs) that are issued during the authentication process. The ",(0,s.jsx)(t.code,{children:"jwksUri"})," is used by the relying party (RP) to obtain the public keys used by the IdP to sign the JWTs, so the RP can verify the authenticity and integrity of the JWTs received from the IdP."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.em,{children:"issuer"}),": This is the unique identifier of the IdP that is used by the RP to verify the JWTs received from the IdP. It is included in the JWTs as the ",(0,s.jsx)(t.code,{children:"iss"})," ",(0,s.jsx)(t.a,{href:"https://www.rfc-editor.org/rfc/rfc7519#section-4",children:"claim"})," (Id token is always a JWT). The issuer value should match the URL of the IdP's authorization server, and it should be a URI that the RP trusts. When the RP receives a JWT, it checks the ",(0,s.jsx)(t.code,{children:"iss"})," claim to ensure that it was issued by a trusted IdP, and that the JWT is intended for use with the RP."]}),"\n",(0,s.jsxs)(t.p,{children:["Together, ",(0,s.jsx)(t.code,{children:"jwksUri"})," and ",(0,s.jsx)(t.code,{children:"issuer"})," provide a secure mechanism for the RP to verify the identity of the end-user during the authentication process. By using the public keys obtained from the ",(0,s.jsx)(t.code,{children:"jwksUri"}),", the RP can verify the authenticity and integrity of the JWTs issued by the IdP. The issuer value ensures that the RP only accepts JWTs that were issued by a trusted IdP, and that the JWTs are intended for use with the RP."]}),"\n",(0,s.jsxs)(t.p,{children:["Since an authentication request is always required, an ",(0,s.jsx)(t.code,{children:"authRequestOptionalConfig"})," is provided to wrap all optional configs, you can find details on ",(0,s.jsx)(t.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html#AuthRequest",children:"OIDC Authentication Request"}),". You may also find that ",(0,s.jsx)(t.code,{children:"nonce"})," is missing in this config. Since ",(0,s.jsx)(t.code,{children:"nonce"})," should identical for each request, we put the generation of ",(0,s.jsx)(t.code,{children:"nonce"})," in code implementation. So do not worry about it! Previously mentioned ",(0,s.jsx)(t.code,{children:"jwksUri"})," and ",(0,s.jsx)(t.code,{children:"issuer"})," are also included in ",(0,s.jsx)(t.code,{children:"idTokenVerificationConfig"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"You may be curious as to why a standard OIDC protocol supports both the implicit and hybrid flows, yet the Logto connector only supports the authorization flow. It has been determined that the implicit and hybrid flows are less secure than the authorization flow. Due to Logto's focus on security, it only supports the authorization flow for the highest level of security for its users, despite its slightly less convenient nature."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"responseType"})," and ",(0,s.jsx)(t.code,{children:"grantType"}),' can ONLY be FIXED values with "Authorization Code" flow, so we make them optional and default values will be automatically filled.']}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["\u2139\ufe0f ",(0,s.jsx)(t.strong,{children:"Note"})]}),"\n",(0,s.jsxs)(t.p,{children:["For all flow types, we provided an OPTIONAL ",(0,s.jsx)(t.code,{children:"customConfig"})," key to put your customize parameters.\nEach social identity provider could have their own variant on OIDC standard protocol. If your desired social identity provider strictly stick to OIDC standard protocol, the you do not need to care about ",(0,s.jsx)(t.code,{children:"customConfig"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"config-types",children:"Config types"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Required"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"scope"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"clientId"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"clientSecret"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"authorizationEndpoint"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"tokenEndpoint"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"idTokenVerificationConfig"}),(0,s.jsx)(t.td,{children:"IdTokenVerificationConfig"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"authRequestOptionalConfig"}),(0,s.jsx)(t.td,{children:"AuthRequestOptionalConfig"}),(0,s.jsx)(t.td,{children:"False"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"customConfig"}),(0,s.jsx)(t.td,{children:"Record<string, string>"}),(0,s.jsx)(t.td,{children:"False"})]})]})]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"AuthRequestOptionalConfig properties"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Required"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"responseType"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"False"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"tokenEndpoint"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"False"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"responseMode"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"False"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"display"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"False"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"prompt"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"False"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"maxAge"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"False"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"uiLocales"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"False"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"idTokenHint"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"False"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"loginHint"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"False"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"acrValues"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"False"})]})]})]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"IdTokenVerificationConfig properties"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Required"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"jwksUri"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"issuer"}),(0,s.jsx)(t.td,{children:"string | string[]"}),(0,s.jsx)(t.td,{children:"False"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"audience"}),(0,s.jsx)(t.td,{children:"string | string[]"}),(0,s.jsx)(t.td,{children:"False"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"algorithms"}),(0,s.jsx)(t.td,{children:"string[]"}),(0,s.jsx)(t.td,{children:"False"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"clockTolerance"}),(0,s.jsx)(t.td,{children:"string | number"}),(0,s.jsx)(t.td,{children:"False"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"crit"}),(0,s.jsx)(t.td,{children:"Record<string, string | boolean>"}),(0,s.jsx)(t.td,{children:"False"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"currentDate"}),(0,s.jsx)(t.td,{children:"Date"}),(0,s.jsx)(t.td,{children:"False"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"maxTokenAge"}),(0,s.jsx)(t.td,{children:"string | number"}),(0,s.jsx)(t.td,{children:"False"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"subject"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"False"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"typ"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"False"})]})]})]}),"\n",(0,s.jsxs)(t.p,{children:["See ",(0,s.jsx)(t.a,{href:"https://github.com/panva/jose/blob/main/docs/interfaces/jwt_verify.JWTVerifyOptions.md",children:"here"})," to find more details about ",(0,s.jsx)(t.code,{children:"IdTokenVerificationConfig"}),"."]})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},15658:(e,t,i)=>{i.d(t,{R:()=>o,x:()=>d});var n=i(30758);const s={},r=n.createContext(s);function o(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);