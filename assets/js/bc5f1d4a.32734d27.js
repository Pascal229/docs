"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[96665],{37841:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var o=i(86070),s=i(15658),n=i(84271);const r={sidebar_position:3.1},a="\ud83d\udee1\ufe0f Multi-factor authentication",c={id:"docs/recipes/multi-factor-auth/README",title:"\ud83d\udee1\ufe0f Multi-factor authentication",description:"Logto offers a minimal-effort configuration process, allowing you to enable MFA with a single click. Our comprehensive MFA flows prioritize security and balance user experience.",source:"@site/docs/docs/recipes/multi-factor-auth/README.mdx",sourceDirName:"docs/recipes/multi-factor-auth",slug:"/docs/recipes/multi-factor-auth/",permalink:"/docs/recipes/multi-factor-auth/",draft:!1,unlisted:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/docs/recipes/multi-factor-auth/README.mdx",tags:[],version:"current",sidebarPosition:3.1,frontMatter:{sidebar_position:3.1},sidebar:"docsSidebar",previous:{title:"Check out the live preview",permalink:"/docs/recipes/customize-sie/check-out-the-live-preview"},next:{title:"Configure MFA",permalink:"/docs/recipes/multi-factor-auth/configure-mfa"}},l={},d=[{value:"What is MFA?",id:"what-is-mfa",level:2},{value:"Why do we need MFA?",id:"why-do-we-need-mfa",level:2},{value:"Logto support",id:"logto-support",level:2}];function h(e){const t={a:"a",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"\ufe0f-multi-factor-authentication",children:"\ud83d\udee1\ufe0f Multi-factor authentication"})}),"\n",(0,o.jsx)(n.A,{cloud:!0,oss:{major:1,minor:11}}),"\n",(0,o.jsx)(t.p,{children:"Logto offers a minimal-effort configuration process, allowing you to enable MFA with a single click. Our comprehensive MFA flows prioritize security and balance user experience."}),"\n",(0,o.jsx)(t.h2,{id:"what-is-mfa",children:"What is MFA?"}),"\n",(0,o.jsx)(t.p,{children:"MFA, or Multi-Factor Authentication, is a security method that adds an extra layer of protection during the login process. It requires users to provide multiple credentials to establish their digital identity. There are two primary types of authentication:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"SFA/1FA (Single-Factor Authentication)"}),": This is the initial login method, typically requiring a username/email/phone and password."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"MFA/2FA (Multi-Factor Authentication/Two-Factor Authentication)"}),": MFA mandates at least two different verification methods for accessing your account, effectively strengthening your defense against unauthorized access."]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"Authentication factors are the moves that prove you're really you. There are lots of factors divided by attributes to choose from:"}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Types"}),(0,o.jsx)(t.th,{children:"What it means"}),(0,o.jsx)(t.th,{children:"Verification factors (Logto supported)"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"Knowledge"}),(0,o.jsx)(t.td,{children:"Something you know"}),(0,o.jsx)(t.td,{children:"Password, Email verification code, Backup codes"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"Possession"}),(0,o.jsx)(t.td,{children:"Something you have"}),(0,o.jsx)(t.td,{children:"SMS verification code, Authenticator app OTP, Hardware OTP (Security key)"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"Inherence"}),(0,o.jsx)(t.td,{children:"Something you are"}),(0,o.jsx)(t.td,{children:"Biometrics like fingerprints, face ID"})]})]})]}),"\n",(0,o.jsx)(t.p,{children:'In an MFA flow, it\'s essential that the second authentication step uses a different attribute type (Knowledge/Possession/Inherence) from the first. For instance, combining "Password (Knowledge)" as the 1FA and "Authenticator app OTP (Possession)" as the 2FA can effectively thwart various attack vectors.'}),"\n",(0,o.jsx)(t.h2,{id:"why-do-we-need-mfa",children:"Why do we need MFA?"}),"\n",(0,o.jsx)(t.p,{children:"MFA is a vital security measure, particularly for B2B and B2E services, and it's recommended for B2C applications as well. Here's why it's crucial:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Account Hacking"}),": Unauthorized access to accounts is a prevalent security concern, but MFA provides robust protection, blocking 99.9% of account hacks (especially for password breaches). It's a cost-effective way to enhance security, complemented by options like passwordless logins, password policies, password managers, and attack protection measures."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"SaaS Adoption"}),": A significant number of enterprises are adopting MFA to safeguard their employees and protect sensitive company data and assets. A survey by LastPass revealed that 57% of global businesses now use MFA, marking a 12% increase from the previous year."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Regulatory Compliance"}),": MFA helps organizations stay compliant with data protection regulations such as GDPR and NIST, ensuring the security of user data."]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"logto-support",children:"Logto support"}),"\n",(0,o.jsxs)(t.p,{children:["Logto simplifies the process of enabling MFA by offering a one-click toggle, requiring no complex configurations. Get started with our quick guide on how to ",(0,o.jsx)(t.a,{href:"./configure-mfa",children:"Enable Verification Factors"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["We also provide support for two MFA policies: User-Controlled and Mandatory MFA, with Adaptive MFA on the horizon. Learn more about configuring these policies in our guide on ",(0,o.jsx)(t.a,{href:"./configure-mfa",children:"Setting MFA Policies"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["Additionally, you have the flexibility to customize your User Account Settings and Profile pages through our ",(0,o.jsx)(t.a,{href:"/docs/recipes/interact-with-management-api/",children:"Management API"}),". This functionality includes the ability to manage the Authenticator app OTP and Backup codess, with WebAuthn support coming soon."]}),"\n",(0,o.jsxs)(t.p,{children:["Learn more about the usage and user flow for each verification factor, including ",(0,o.jsx)(t.a,{href:"./authenticator-app-otp",children:"Authenticator app OTP"}),", ",(0,o.jsx)(t.a,{href:"./webauthn",children:"WebAuthn (Passkeys)"}),", and ",(0,o.jsx)(t.a,{href:"./backup-codes",children:"Backup codess"})," in our dedicated resources."]})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},84271:(e,t,i)=>{i.d(t,{A:()=>r});const o="availability_kRMk";var s=i(86070);const n=e=>"comingSoon"===e?"coming soon-blue":"boolean"==typeof e?e?"\u2713 available-4EA254":"not applicable-78767F":`since v${e.major}.${e.minor}-4EA254`,r=e=>{let{cloud:t,oss:i}=e;return(0,s.jsxs)("div",{className:o,children:[(0,s.jsx)("img",{alt:"Cloud availability",src:`https://img.shields.io/badge/Cloud-${n(t)}`}),(0,s.jsx)("img",{alt:"OSS availability",src:`https://img.shields.io/badge/OSS-${n(i)}`})]})}},15658:(e,t,i)=>{i.d(t,{R:()=>r,x:()=>a});var o=i(30758);const s={},n=o.createContext(s);function r(e){const t=o.useContext(n);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(n.Provider,{value:t},e.children)}}}]);