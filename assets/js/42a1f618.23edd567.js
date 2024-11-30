"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[27836],{73389:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"end-user-flows/enterprise-sso/README","title":"Enterprise SSO","description":"Single sign-on (SSO) allows users to sign in to multiple applications with a single set of credentials. It streamlines the authentication process for enterprise users, especially for todays\'s workforce SaaS platforms.","source":"@site/docs/end-user-flows/enterprise-sso/README.mdx","sourceDirName":"end-user-flows/enterprise-sso","slug":"/end-user-flows/enterprise-sso/","permalink":"/end-user-flows/enterprise-sso/","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/docs/end-user-flows/enterprise-sso/README.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"docsSidebar","previous":{"title":"Disable user registration","permalink":"/end-user-flows/sign-up-and-sign-in/disable-user-registration"},"next":{"title":"SP-initiated SSO","permalink":"/end-user-flows/enterprise-sso/sp-initiated-sso"}}');var n=i(86070),r=i(15658);const o={sidebar_position:2},a="Enterprise SSO",l={},d=[{value:"Key components of enterprise SSO",id:"key-components-of-enterprise-sso",level:2},{value:"Supported SSO workflow",id:"supported-sso-workflow",level:2},{value:"Supported SSO protocols",id:"supported-sso-protocols",level:2},{value:"FAQs",id:"faqs",level:2},{value:"Related resources",id:"related-resources",level:2}];function c(e){const s={a:"a",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components},{Details:t,Url:o}=s;return t||h("Details",!0),o||h("Url",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.header,{children:(0,n.jsx)(s.h1,{id:"enterprise-sso",children:"Enterprise SSO"})}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"https://auth.wiki/single-sign-on",children:"Single sign-on (SSO)"})," allows users to sign in to multiple applications with a single set of credentials. It streamlines the authentication process for enterprise users, especially for todays's workforce SaaS platforms."]}),"\n",(0,n.jsxs)(s.p,{children:["Logto enhances the SSO experience by providing a wide range of enterprise SSO connectors that you can easily set up and integrate with your applications, for example, ",(0,n.jsx)(s.a,{href:"/integrations/google-workspace",children:"Google Workspace"}),", ",(0,n.jsx)(s.a,{href:"/integrations/entra-id-saml",children:"Microsoft Azure AD"}),", ",(0,n.jsx)(s.a,{href:"/integrations/okta",children:"Okta"}),", and more."]}),"\n",(0,n.jsx)(s.h2,{id:"key-components-of-enterprise-sso",children:"Key components of enterprise SSO"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Identity provider (IdP)"}),": A service that verifies user identities and manages their login credentials. After confirming a user's identity, the IdP generates authentication tokens or assertions and allows the user to access various applications or services without needing to log in again. Essentially, it's the go-to system for managing employee identities and permissions in your enterprise. Examples: Okta, Azure AD, Google Workspace, LastPass, OneLogin, Ping Identity, Cyberark, etc. ",(0,n.jsx)(s.a,{href:"https://auth.wiki/identity-provider",children:"Learn more about IdP"}),"."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Service provider (SP)"}),": A system or application that requires user authentication and relies on the Identity Provider (IdP) for authentication. The SP receives authentication tokens or assertions from the IdP, granting access to its resources without requiring separate login credentials. Examples: Slack, Shopify, Dropbox, Figma, Notion, etc\u2026and your service. ",(0,n.jsx)(s.a,{href:"https://auth.wiki/service-provider",children:"Learn more about SP"}),"."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Enterprise identity"}),": Typically identified by their use of a company email domain for login. This enterprise email account finally belongs to the company."]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"supported-sso-workflow",children:"Supported SSO workflow"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"/end-user-flows/enterprise-sso/idp-initiated-sso",children:(0,n.jsx)(s.strong,{children:"IdP-Initiated SSO"})}),": In IdP-initiated SSO, the Identity Provider (IdP) primarily controls the single sign-on process. This process begins when a user logs into the IdP's platform, such as a company portal or a centralized identity dashboard. Once authenticated, the IdP generates an authentication token or assertion, which is then used to seamlessly grant the user access to multiple connected services or applications (SPs) without requiring additional logins.\n",(0,n.jsx)(s.img,{alt:"IdP-initiated SSO",src:i(17859).A+"",width:"2704",height:"560"})]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"/end-user-flows/enterprise-sso/sp-initiated-sso",children:(0,n.jsx)(s.strong,{children:"SP-Initiated SSO"})}),": In SP-initiated SSO, the Service Provider (SP) takes the lead in initiating and managing the single sign-on process, often preferred in B2B scenarios. This scenario occurs when a user attempts to access a specific service or application (the SP) and is redirected to their IdP for authentication. Upon successful login at the IdP, an authentication token is sent back to the SP, granting the user access. Logto supports SP-initiated SSO for your B2B services.\n",(0,n.jsx)(s.img,{alt:"SP-initiated SSO",src:i(54017).A+"",width:"2704",height:"560"})]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"supported-sso-protocols",children:"Supported SSO protocols"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"/integrations/saml-sso",children:(0,n.jsx)(s.strong,{children:"SAML"})}),": ",(0,n.jsx)(s.a,{href:"https://auth.wiki/saml",children:"Security Assertion Markup Language (SAML)"})," is an XML-based open standard for exchanging authentication and authorization data between an IdP and SP. his protocol is particularly adept at handling complex enterprise-level security requirements."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"/integrations/oidc-sso",children:(0,n.jsx)(s.strong,{children:"OIDC"})}),": ",(0,n.jsx)(s.a,{href:"https://auth.wiki/openid-connect",children:"OpenID Connect (OIDC)"})," is a simple identity layer built on top of the OAuth 2.0 protocol. It employs JSON/REST for communication, making it more lightweight and better suited for modern application architectures, including mobile and single-page applications (SPAs)."]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"faqs",children:"FAQs"}),"\n",(0,n.jsxs)(t,{children:[(0,n.jsx)("summary",{children:"How to add SSO connector buttons and directly sign in with SSO provider on my website?"}),(0,n.jsxs)(s.p,{children:["Logto allows you to add social login buttons to your website and initiate the SSO sign-in process directly without showing the default sign-in form. Check out our ",(0,n.jsx)(s.a,{href:"/end-user-flows/authentication-parameters/direct-sign-in/",children:"Direct sign-in"})," guide for detailed instructions."]})]}),"\n",(0,n.jsx)(s.h2,{id:"related-resources",children:"Related resources"}),"\n",(0,n.jsx)(o,{href:"https://www.youtube.com/watch?v=-mD8Sfab7sI&t=12s",children:" Enterprise SSO experience"})]})}function p(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}function h(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},17859:(e,s,i)=>{i.d(s,{A:()=>t});const t=i.p+"assets/images/idp-initiated-sso-fa28df4b9ccb0be62e3a5de9d8ee08bc.png"},54017:(e,s,i)=>{i.d(s,{A:()=>t});const t=i.p+"assets/images/sp-initiated-sso-8314b0882ae25cc5d39ba6beb466a367.png"},15658:(e,s,i)=>{i.d(s,{R:()=>o,x:()=>a});var t=i(30758);const n={},r=t.createContext(n);function o(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);