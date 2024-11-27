"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[64756],{52499:(e,t,n)=>{n.d(t,{Ay:()=>a,RM:()=>s});var i=n(86070),o=n(15658);const s=[];function r(e){const t={a:"a",admonition:"admonition",p:"p",...(0,o.R)(),...e.components};return(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsxs)(t.p,{children:["For more information about SSO and how to configure SSO in Logto, please check out the ",(0,i.jsx)(t.a,{href:"/connectors/enterprise-connectors",children:"Enterprise SSO (SAML & OIDC)"})," documentation to get started."]})})}function a(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},81873:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"integrations/sso/saml/README","title":"Set up Single Sign-On with SAML","description":"With minimal configuration efforts, this connector allows integration with any SAML-based Identity Provider (IdP).","source":"@site/docs/integrations/sso/saml/README.mdx","sourceDirName":"integrations/sso/saml","slug":"/integrations/saml-sso","permalink":"/integrations/saml-sso","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/docs/integrations/sso/saml/README.mdx","tags":[],"version":"current","frontMatter":{"slug":"/integrations/saml-sso","sidebar_label":"SAML (Enterprise)","sidebar_custom_props":{"description":"XML-based open standard for web single sign-on and identity federation.","logoFilename":"saml.svg"}},"sidebar":"integrationsSidebar","previous":{"title":"Okta","permalink":"/integrations/okta"}}');var o=n(86070),s=n(15658),r=n(52499);const a={slug:"/integrations/saml-sso",sidebar_label:"SAML (Enterprise)",sidebar_custom_props:{description:"XML-based open standard for web single sign-on and identity federation.",logoFilename:"saml.svg"}},d="Set up Single Sign-On with SAML",l={},c=[...r.RM,{value:"Step 1: Create a SAML SSO application on your IdP",id:"step-1-create-a-saml-sso-application-on-your-idp",level:2},{value:"Step 2: Configure SAML SSO on Logto",id:"step-2-configure-saml-sso-on-logto",level:2},{value:"Step 3: Configure user attributes mapping",id:"step-3-configure-user-attributes-mapping",level:2},{value:"Step4: Set email domains and enable the SSO connector",id:"step4-set-email-domains-and-enable-the-sso-connector",level:2}];function h(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"set-up-single-sign-on-with-saml",children:"Set up Single Sign-On with SAML"})}),"\n",(0,o.jsx)(t.p,{children:"With minimal configuration efforts, this connector allows integration with any SAML-based Identity Provider (IdP)."}),"\n",(0,o.jsx)(r.Ay,{}),"\n",(0,o.jsx)(t.h2,{id:"step-1-create-a-saml-sso-application-on-your-idp",children:"Step 1: Create a SAML SSO application on your IdP"}),"\n",(0,o.jsx)(t.p,{children:"Initiate the SAML SSO integration by creating an application on the IdP side. Obtain the following configurations from Logto, representing your Service Provider (SP):"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Audience URI(SP Entity ID)"}),": It represents as a globally unique identifier for your Logto service, functioning as the EntityId for SP during authentication requests to the IdP. This identifier is pivotal for the secure exchange of SAML assertions and other authentication-related data between the IdP and Logto."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"ACS URL"}),": The Assertion Consumer Service (ACS) URL is the location where the SAML assertion is sent with a POST request. This URL is used by the IdP to send the SAML assertion to Logto. It acts as a callback URL where Logto expects to receive and consume the SAML response containing the user's identity information."]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"Fill in the Audience URI and ACS URL configurations in your IdP SAML application and continue to retrieve the following configurations from your IdP."}),"\n",(0,o.jsx)(t.h2,{id:"step-2-configure-saml-sso-on-logto",children:"Step 2: Configure SAML SSO on Logto"}),"\n",(0,o.jsx)(t.p,{children:"To make the SAML SSO integration work, you will need to provide the IdP metadata to Logto. The IdP metadata is an XML document that contains all the information required for Logto to establish the trust with the IdP."}),"\n",(0,o.jsxs)(t.p,{children:["Navigate to the ",(0,o.jsx)(t.code,{children:"Connection"})," tab. Logto provides three different ways to configure the IdP metadata:"]}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Metadata URL"}),": Provide the URL of the IdP metadata XML document. Logto will fetch the metadata from the URL and configure the SAML SSO integration automatically."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Upload Metadata"}),": Upload the IdP metadata XML document. Logto will parse the XML document and configure the SAML SSO integration automatically."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Manual Configuration"}),": Manually configure the IdP metadata."]}),"\n"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"IdP entity ID: The Entity ID of the IdP."}),"\n",(0,o.jsx)(t.li,{children:"Single sign-on URL: The URL of the IdP Single Sign-On Service."}),"\n",(0,o.jsx)(t.li,{children:"Signing certificate: The x509 certificate is used to verify the signature of the SAML response from the IdP."}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"With either of the above configurations, Logto will parse the IdP metadata and configure the SAML SSO integration accordingly."}),"\n",(0,o.jsx)(t.h2,{id:"step-3-configure-user-attributes-mapping",children:"Step 3: Configure user attributes mapping"}),"\n",(0,o.jsx)(t.p,{children:"The user attributes returned from IdP may vary depending on the IdP configuration. Logto provides a flexible way to map the user attributes returned from IdP to the user attributes in Logto. You can configure the user attributes mapping in the SAML SSO integration experience tab."}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["id: The unique identifier of the user. Logto will read the ",(0,o.jsx)(t.code,{children:"nameId"})," claim from the SAML response as the user SSO identity id."]}),"\n",(0,o.jsx)(t.li,{children:"email: The email address of the user."}),"\n",(0,o.jsx)(t.li,{children:"name: The name of the user."}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"step4-set-email-domains-and-enable-the-sso-connector",children:"Step4: Set email domains and enable the SSO connector"}),"\n",(0,o.jsxs)(t.p,{children:["Provide the ",(0,o.jsx)(t.code,{children:"email domains"})," of your organization in Logto\u2019s connector ",(0,o.jsx)(t.code,{children:"SSO experience"})," tab. This will enable the SSO connector as an authentication method for those users."]}),"\n",(0,o.jsx)(t.p,{children:"Users with email addresses in the specified domains will be redirected to use the SAML SSO connector as their only authentication method."})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},15658:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var i=n(30758);const o={},s=i.createContext(o);function r(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);