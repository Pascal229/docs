"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[82497],{22811:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>d,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"end-user-flows/sign-up-and-sign-in/sign-in","title":"Email / phone / username sign-in","description":"Configure the identifier sign-in flow","source":"@site/docs/end-user-flows/sign-up-and-sign-in/sign-in.mdx","sourceDirName":"end-user-flows/sign-up-and-sign-in","slug":"/end-user-flows/sign-up-and-sign-in/sign-in","permalink":"/end-user-flows/sign-up-and-sign-in/sign-in","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/docs/end-user-flows/sign-up-and-sign-in/sign-in.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"docsSidebar","previous":{"title":"Email / phone / username sign-up","permalink":"/end-user-flows/sign-up-and-sign-in/sign-up"},"next":{"title":"Social sign-in","permalink":"/end-user-flows/sign-up-and-sign-in/social-sign-in"}}');var t=n(86070),r=n(15658);const o={sidebar_position:2},a="Email / phone / username sign-in",d={},l=[{value:"Configure the identifier sign-in flow",id:"configure-the-identifier-sign-in-flow",level:2},{value:"Set up the identifier and authentication settings",id:"set-up-the-identifier-and-authentication-settings",level:2},{value:"1. Set the supported sign-in identifiers",id:"1-set-the-supported-sign-in-identifiers",level:3},{value:"2. Set the authentication settings",id:"2-set-the-authentication-settings",level:3},{value:"Identifier sign-in flow user experience",id:"identifier-sign-in-flow-user-experience",level:2},{value:"Examples",id:"examples",level:3},{value:"Collect additional user profile on sign-in",id:"collect-additional-user-profile-on-sign-in",level:2},{value:"FAQs",id:"faqs",level:2},{value:"Related resources",id:"related-resources",level:2}];function h(e){const i={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",mermaid:"mermaid",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components},{Details:s,Url:o}=i;return s||u("Details",!0),o||u("Url",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.header,{children:(0,t.jsx)(i.h1,{id:"email--phone--username-sign-in",children:"Email / phone / username sign-in"})}),"\n",(0,t.jsx)(i.h2,{id:"configure-the-identifier-sign-in-flow",children:"Configure the identifier sign-in flow"}),"\n",(0,t.jsxs)(i.p,{children:["As previously stated, various identifier types may be collected from users throughout the ",(0,t.jsx)(i.a,{href:"/end-user-flows/sign-up-and-sign-in/sign-up",children:"sign-up flow"})," or ",(0,t.jsx)(i.a,{href:"/user-management/manage-users#add-users",children:"direct account creation in Logto"}),". In addition, users may enter and complete additional information as they explore and utilize the product. Those identifiers can be used to uniquely identify users in Logto's system and allow them to be authenticated and sign in to the applications that are integrated with Logto."]}),"\n",(0,t.jsxs)(i.p,{children:["Whether you choose to use the pre-build sign-in page hosted by Logto or planing ",(0,t.jsx)(i.a,{href:"/customization#custom-ui",children:"build your own custom sign-in UI"}),", you will need to configure the available sign-in methods and verification settings for your end-users."]}),"\n",(0,t.jsx)(i.h2,{id:"set-up-the-identifier-and-authentication-settings",children:"Set up the identifier and authentication settings"}),"\n",(0,t.jsx)(i.h3,{id:"1-set-the-supported-sign-in-identifiers",children:"1. Set the supported sign-in identifiers"}),"\n",(0,t.jsx)(i.p,{children:"You can add multiple supported identifiers from the drop-down list as enabled sign-in methods for end users. The available options are:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.strong,{children:"Username"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.strong,{children:"Email address"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.strong,{children:"Phone number"})}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"Reordering the identifiers will change the order in which they are displayed on the sign-in page. The first identifier will be the primary sign-in method for users."}),"\n",(0,t.jsx)(i.h3,{id:"2-set-the-authentication-settings",children:"2. Set the authentication settings"}),"\n",(0,t.jsx)(i.p,{children:"For each sign-in identifier, you will need to configure at least one effective verification factor to verify the user's identity. There are two factors you can choose from:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Password"}),": Available for all types of sign-in identifiers. Once enabled, users must provide a password to complete the sign-in process."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Verification code"}),": Available for ",(0,t.jsx)(i.strong,{children:"Email address"})," and ",(0,t.jsx)(i.strong,{children:"Phone number"})," identifiers only. Once enabled, users must enter a verification code sent to their email or phone number to complete the sign-in process."]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"If both factors are enabled, users can choose either method to complete the sign-in process. You can also reorder the factors to change the order in which they are displayed on the sign-in page. The first factor will be used as the primary verification method for users and the second one will be displayed as an alternative link."}),"\n",(0,t.jsx)(i.h2,{id:"identifier-sign-in-flow-user-experience",children:"Identifier sign-in flow user experience"}),"\n",(0,t.jsx)(i.p,{children:"The sign-in experience adapts based on the chosen identifier and available authentication factors."}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Smart input for multiple identifiers:"}),"\nIf more than one identifier sign-in method is enabled, Logto build-in sign-in page will automatically detect the type of identifier entered by the user and display the corresponding verification options. For example, if both ",(0,t.jsx)(i.strong,{children:"Email address"})," and ",(0,t.jsx)(i.strong,{children:"Phone number"})," are enabled, the sign-in page will automatically detect the type of identifier entered by the user and display the corresponding verification options. It switches to a phone number format with region code if numbers are entered consecutively or an email format when a \u201c@\u201d symbol is used."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Enabled verification factors:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Password only:"})," Both identifier and password fields will be displayed on the first screen."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Verification code only:"})," The identifier field appears on the first screen, followed by the verification code field on the second screen."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Password and verification code:"})," The identifier field is entered initially on the first screen, followed by steps to enter the password or verification code on the second screen based on the verification order. A switch link is provided to allow users to switch between the two verification methods."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"examples",children:"Examples"}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"Example 1: Email address with password verification"}),(0,t.jsxs)(i.p,{children:["Add the ",(0,t.jsx)(i.strong,{children:"Email address"})," as the sign-in identifier and enable the ",(0,t.jsx)(i.strong,{children:"Password"})," factor for verification."]}),(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Email address with password verification",src:n(28693).A+"",width:"1584",height:"1376"})})]}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"Example 2: Email/Phone with password(primary) and verification code (alternative) verification enabled"}),(0,t.jsxs)(i.p,{children:["Add both ",(0,t.jsx)(i.strong,{children:"Email address"})," and ",(0,t.jsx)(i.strong,{children:"Phone number"})," as the sign-in identifiers.\nEnable the ",(0,t.jsx)(i.strong,{children:"Password"})," and ",(0,t.jsx)(i.strong,{children:"Verification code"})," factors for both identifiers."]}),(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Email/Phone with password and verification code verification",src:n(91997).A+"",width:"2884",height:"2392"})})]}),"\n",(0,t.jsx)(i.h2,{id:"collect-additional-user-profile-on-sign-in",children:"Collect additional user profile on sign-in"}),"\n",(0,t.jsx)(i.p,{children:"In Logto\u2019s sign-in flow, a profile fulfillment process may be triggered if the sign-up identifier settings are updated. This ensures that all users, including existing ones, provide any newly required identifiers."}),"\n",(0,t.jsx)(i.p,{children:"When a developer adds a new identifier (such as an email address), it becomes mandatory for all users. If a returning user signs in with an existing identifier (like a username), they will be prompted to supply and verify the new identifier if it is missing from their profile. Only after completing this step can they access the application, ensuring a smooth and consistent transition to the updated requirements."}),"\n",(0,t.jsx)(i.p,{children:"Breaking down the process:"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Username"})," was previously set as the sign-up identifier with ",(0,t.jsx)(i.strong,{children:"Create your password"})," setting auto-enabled."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Email address"})," is later set as the sign-up identifier. The ",(0,t.jsx)(i.strong,{children:"Email address"})," identifier is automatically added as an enabled sign-in option."]}),"\n",(0,t.jsx)(i.li,{children:"A returning user signs in with their username and password."}),"\n",(0,t.jsx)(i.li,{children:"The user is prompted to provide and verify an email address after their initial sign-in step."}),"\n"]}),"\n",(0,t.jsx)(i.mermaid,{value:"flowchart TD\n    A[Visit sign-in page] --\x3e B[Enter username and password]\n    B -.-> C{{Email address required and missing?}}\n    C --\x3e|Yes| D[Enter email address]\n    D --\x3e E[Enter verification code]\n    E --\x3e F[Successful sign-in]\n    C --\x3e |No| F"}),"\n",(0,t.jsxs)(i.p,{children:["The same process applies to the ",(0,t.jsx)(i.strong,{children:"Create your password"})," sign-up settings as well. If the ",(0,t.jsx)(i.strong,{children:"Create your password"})," settings in newly enabled in the sign-up flow, the ",(0,t.jsx)(i.strong,{children:"Password"})," factor will be automatically enabled for all the sign-in identifiers you choose. All the returning users without a password will be prompted to create one during the sign-in process."]}),"\n",(0,t.jsx)(i.admonition,{type:"note",children:(0,t.jsxs)(i.p,{children:["Note: For a custom sign-in flows, refer to the feature of ",(0,t.jsx)(i.a,{href:"/customization/bring-your-ui/",children:"Bring your UI"}),"."]})}),"\n",(0,t.jsx)(i.h2,{id:"faqs",children:"FAQs"}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"Self-hosted sign-in experience (embedded sign-in)"}),(0,t.jsxs)(i.p,{children:["Logto does not currently support headless API for sign-in and sign-up. However, you can use our ",(0,t.jsx)(i.a,{href:"/customization/bring-your-ui/",children:"Bring your UI"})," feature to upload your custom sign-in form to Logto. We also support multiple sign-in parameters you can use to pre-fill the sign-in form with user identifier collected from your application or directly sign-in with a third-party social or enterprise SSO provider. Learn more at ",(0,t.jsx)(i.a,{href:"/end-user-flows/authentication-parameters/",children:"Authentication parameters"}),"."]})]}),"\n",(0,t.jsx)(i.h2,{id:"related-resources",children:"Related resources"}),"\n",(0,t.jsx)(o,{href:"https://www.youtube.com/watch?v=64rBXpWbScc",children:"Email sign-up and sign-in experience"}),"\n",(0,t.jsx)(o,{href:"https://www.youtube.com/watch?v=chQxCJX6e6w",children:(0,t.jsx)(i.p,{children:"Username sign-up and sign-in experience"})})]})}function c(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}function u(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},28693:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/sign-in-email-password-f46692ab8842ed7b51eaf6f7549631d4.png"},91997:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/sign-in-email-phone-password-verification-code-8d9738789fae36f432fb40b4831de0ce.png"},15658:(e,i,n)=>{n.d(i,{R:()=>o,x:()=>a});var s=n(30758);const t={},r=s.createContext(t);function o(e){const i=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(r.Provider,{value:i},e.children)}}}]);