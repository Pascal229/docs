"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[72377],{18090:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>u,contentTitle:()=>h,default:()=>y,frontMatter:()=>p,metadata:()=>A,toc:()=>g});var n=i(86070),s=i(25710),a=i(6251),o=i(91214),r=i(18768),d=i(81122),l=i(14308),c=i(74877);const p={sidebar_position:7.2},h="\ud83c\udf10 Logto as an Identity Provider (IdP)",A={id:"docs/recipes/logto-as-idp/README",title:"\ud83c\udf10 Logto as an Identity Provider (IdP)",description:"Under the hood, Logto follows the OpenID Connect (OIDC) protocol to authenticate users. This means that you can use Logto as an universal Identity Provider (IdP) to authenticate users for any third-party applications that support OIDC. This guide will walk you through the steps to set up Logto as an IdP for third-party applications.",source:"@site/docs/docs/recipes/logto-as-idp/README.mdx",sourceDirName:"docs/recipes/logto-as-idp",slug:"/docs/recipes/logto-as-idp/",permalink:"/docs/recipes/logto-as-idp/",draft:!1,unlisted:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/docs/recipes/logto-as-idp/README.mdx",tags:[],version:"current",sidebarPosition:7.2,frontMatter:{sidebar_position:7.2},sidebar:"docsSidebar",previous:{title:"\ud83d\udcdc Inspect audit logs",permalink:"/docs/recipes/inspect-audit-logs/"},next:{title:"Consent page branding",permalink:"/docs/recipes/logto-as-idp/branding-customization"}},u={},g=[{value:"What is an Identity Provider (IdP)?",id:"what-is-an-identity-provider-idp",level:2},{value:"Concepts of applications",id:"concepts-of-applications",level:2},{value:"Consent page",id:"consent-page",level:2},{value:"Create an third-party OIDC application in Logto",id:"create-an-third-party-oidc-application-in-logto",level:2},{value:"Setup the OIDC configurations",id:"setup-the-oidc-configurations",level:2},{value:"Manage your third-party applications",id:"manage-your-third-party-applications",level:2},{value:"Continue with",id:"continue-with",level:2}];function m(e){const t={a:"a",admonition:"admonition",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"-logto-as-an-identity-provider-idp",children:"\ud83c\udf10 Logto as an Identity Provider (IdP)"}),"\n",(0,n.jsx)(a.A,{cloud:"comingSoon",oss:"comingSoon"}),"\n",(0,n.jsxs)(t.p,{children:["Under the hood, Logto follows the ",(0,n.jsx)(t.a,{href:"https://openid.net/connect/",children:"OpenID Connect (OIDC)"})," protocol to authenticate users. This means that you can use Logto as an universal Identity Provider (IdP) to authenticate users for any third-party applications that support OIDC. This guide will walk you through the steps to set up Logto as an IdP for third-party applications."]}),"\n",(0,n.jsx)(t.h2,{id:"what-is-an-identity-provider-idp",children:"What is an Identity Provider (IdP)?"}),"\n",(0,n.jsx)(t.p,{children:"An Identity Provider (IdP) is a service that verifies user identities and manages their login credentials. After confirming a user's identity, the IdP generates authentication tokens or assertions and allows the user to access various applications or services without needing to log in again. Essentially, it's the go-to system for managing employee identities and permissions in your enterprise."}),"\n",(0,n.jsx)(t.h2,{id:"concepts-of-applications",children:"Concepts of applications"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"First-party applications"}),": These apps are developed and managed by the identity provider itself, ensuring higher security and trust. They provide a unified sign-in experience within the same domain, using consistent user credentials. Read \u201c",(0,n.jsx)(t.a,{href:"https://logto.io/solutions/multi-app-product",children:"Build multi-app products"}),"\u201d to learn more about Logto omni sign-in."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Third-party applications"}),": External or partner services not directly affiliated with an Identity Provider (IdP) are considered third-party apps, acting as Relying Parties (RPs) or Service Providers (SPs). These apps integrate with the IdP using protocols like OAuth, OIDC, and SAML, facilitating user login and authorization through the IdP's accounts. e.g. Slack, Figma, Dropbox, etc. all support Google Workspace as an IdP."]}),"\n",(0,n.jsx)(t.h2,{id:"consent-page",children:"Consent page"}),"\n",(0,n.jsxs)(t.p,{children:["Unlike first-party applications's auto consent. For security reasons, all the third-party applications will be redirected to a consent page for user authorization after they are authenticated by Logto. All the third-party requested user profile permissions, API resource scopes, and organization membership information will be displayed on the consent page. These requested permissions will be granted to the third-party applications only after the user clicks on the ",(0,n.jsx)(t.strong,{children:"Authorize"})," button."]}),"\n",(0,n.jsx)("center",{children:(0,n.jsx)("img",{src:r.A,alt:"consent page",width:500})}),"\n",(0,n.jsx)(t.h2,{id:"create-an-third-party-oidc-application-in-logto",children:"Create an third-party OIDC application in Logto"}),"\n",(0,n.jsx)(t.p,{children:"Just like how you create a first-party application in Logto, you can also create an application for third-party services that support OIDC. This application will act as an IdP for your third-party applications."}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Go to the ",(0,n.jsx)(t.strong,{children:"Logto Console"})," and navigate to the ",(0,n.jsx)(t.strong,{children:"Applications"})," page."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:'Select "Third-party app -> OIDC" as the application type.'}),"\n",(0,n.jsxs)(t.p,{children:["If this is the first time you create an application, click on the ",(0,n.jsx)(t.strong,{children:"view all"})," link to see all application types.\n",(0,n.jsx)(t.img,{alt:"application list",src:i(767).A+"",width:"3590",height:"1912"})]}),"\n",(0,n.jsxs)(t.p,{children:["Otherwise, click on the ",(0,n.jsx)(t.strong,{children:"create application"}),' button on the top right corner of the page and select "Third-party app -> OIDC" as the application type.\n',(0,n.jsx)(t.img,{alt:"create application",src:i(87085).A+"",width:"3586",height:"1760"})]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Just like creating a Logto first-party application, enter a ",(0,n.jsx)(t.strong,{children:"name"})," and ",(0,n.jsx)(t.strong,{children:"description"})," for your application and click on the ",(0,n.jsx)(t.strong,{children:"create"})," button. A new third-party OIDC application will be created."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"application details",src:i(56455).A+"",width:"3588",height:"1914"})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"setup-the-oidc-configurations",children:"Setup the OIDC configurations"}),"\n",(0,n.jsx)(t.p,{children:"In order to set up Logto as an IdP for your third-party applications, you need to configure the OIDC settings under the application details page."}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Provide the ",(0,n.jsx)(t.strong,{children:"redirect URI"})," of your third-party application. This is the URL that the third-party application will redirect users to after they are authenticated by Logto. You can usually find this information in the third-party application's IdP connection settings page."]}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["Logto supports multiple redirect URIs. You can add more redirect URIs by clicking on the ",(0,n.jsx)(t.strong,{children:"Add another"})," button."]})}),"\n",(0,n.jsx)("img",{src:c.A,alt:"redirect uri",width:500}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Retrieve the ",(0,n.jsx)(t.strong,{children:"client ID"})," and ",(0,n.jsx)(t.strong,{children:"client secret"})," from Logto application details page and enter them into your service provider's IdP connection settings page."]}),"\n",(0,n.jsx)("img",{src:o.A,alt:"client credentials",width:500}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Retrieve the ",(0,n.jsx)(t.strong,{children:"authorization endpoint"})," and ",(0,n.jsx)(t.strong,{children:"token endpoint"})," from Logto application details page and provide them to your service provider."]}),"\n",(0,n.jsxs)(t.p,{children:["If your service provider supports OIDC discovery, you can simply copy the ",(0,n.jsx)(t.strong,{children:"discovery endpoint"})," from Logto application details page and provide it to your service provider. The service provider will be able to retrieve all the up to date OIDC authentication information from the discovery endpoint automatically."]}),"\n",(0,n.jsx)("img",{src:d.A,alt:"discovery endpoint",width:500}),"\n",(0,n.jsxs)(t.p,{children:["Otherwise, click on the ",(0,n.jsx)(t.strong,{children:"show endpoint details"})," button to view all the OIDC authentication endpoints."]}),"\n",(0,n.jsx)("img",{src:l.A,alt:"endpoint details",width:500}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"manage-your-third-party-applications",children:"Manage your third-party applications"}),"\n",(0,n.jsxs)(t.p,{children:["All third-party applications will be catalogued on the ",(0,n.jsx)(t.strong,{children:"Applications"})," page, specifically under the ",(0,n.jsx)(t.strong,{children:"Third-party apps"})," tab. This arrangement distinguishes them from first-party applications for you, ensuring easy management."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"third-party apps",src:i(15285).A+"",width:"3590",height:"1762"})}),"\n",(0,n.jsx)(t.h2,{id:"continue-with",children:"Continue with"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"./branding-customization",children:"branding customization"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"./permissions-management",children:"permission management"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"../../references/applications/",children:"application reference"})}),"\n"]})]})}function y(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},6251:(e,t,i)=>{i.d(t,{A:()=>o});const n="availability_kRMk";var s=i(86070);const a=e=>"comingSoon"===e?"coming soon-blue":"boolean"==typeof e?e?"\u2713 available-4EA254":"not applicable-78767F":`since v${e.major}.${e.minor}-4EA254`,o=e=>{let{cloud:t,oss:i}=e;return(0,s.jsxs)("div",{className:n,children:[(0,s.jsx)("img",{alt:"Cloud availability",src:`https://img.shields.io/badge/Cloud-${a(t)}`}),(0,s.jsx)("img",{alt:"OSS availability",src:`https://img.shields.io/badge/OSS-${a(i)}`})]})}},91214:(e,t,i)=>{i.d(t,{A:()=>n});const n="data:image/webp;base64,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"},18768:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/consent-page-e9e6a45ff7e783ed62224f48307046a1.webp"},81122:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/discovery-endpoint-9334eb1732472ec7944f951a1304a669.webp"},14308:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/endpoint-details-f64e49b29420e67c8eaec077c3f6ca3e.webp"},74877:(e,t,i)=>{i.d(t,{A:()=>n});const n="data:image/webp;base64,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"},56455:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/application-details-ed7efa32cf0701450d7ec033ae1e4cf0.webp"},767:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/application-list-1354cc324f61f748ed7e32eb6a744835.webp"},87085:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/create-application-229cc888e95379e7e2babf26ec242915.webp"},15285:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/third-party-apps-24ce5262e5f9a01e08f7f849707411b2.webp"},25710:(e,t,i)=>{i.d(t,{R:()=>o,x:()=>r});var n=i(30758);const s={},a=n.createContext(s);function o(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);