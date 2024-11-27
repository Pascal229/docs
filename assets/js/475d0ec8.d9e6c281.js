"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[2399],{34039:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>a,contentTitle:()=>c,default:()=>d,frontMatter:()=>r,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"end-user-flows/mfa/configure-mfa","title":"Configure MFA","description":"Configure MFA settings in Logto","source":"@site/docs/end-user-flows/mfa/configure-mfa.mdx","sourceDirName":"end-user-flows/mfa","slug":"/end-user-flows/mfa/configure-mfa","permalink":"/end-user-flows/mfa/configure-mfa","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/docs/end-user-flows/mfa/configure-mfa.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"docsSidebar","previous":{"title":"Multi-factor authentication","permalink":"/end-user-flows/mfa/"},"next":{"title":"Authenticator app OTP","permalink":"/end-user-flows/mfa/authenticator-app-otp"}}');var i=t(86070),o=t(15658);const r={sidebar_position:1},c="Configure MFA",a={},l=[{value:"Configure MFA settings in Logto",id:"configure-mfa-settings-in-logto",level:2},{value:"MFA user flow",id:"mfa-user-flow",level:2},{value:"MFA set-up flow",id:"mfa-set-up-flow",level:3},{value:"MFA verification flow",id:"mfa-verification-flow",level:3}];function u(e){const s={a:"a",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components},{CloudLink:n}=s;return n||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("CloudLink",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.header,{children:(0,i.jsx)(s.h1,{id:"configure-mfa",children:"Configure MFA"})}),"\n",(0,i.jsx)(s.h2,{id:"configure-mfa-settings-in-logto",children:"Configure MFA settings in Logto"}),"\n",(0,i.jsx)(s.p,{children:"Follow these steps to enable MFAs in users\u2019 Logto sign-in flow:"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["Navigate to: ",(0,i.jsx)(n,{to:"/mfa",children:"Console > Multi-factor auth"}),"."]}),"\n",(0,i.jsxs)(s.li,{children:["Enable the supported verification factors for your users.","\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["Primary factors:","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"/end-user-flows/mfa/authenticator-app-otp",children:"Authenticator App OTP"}),": The most common and widely accepted method. Use a time-based one-time password (TOTP) generated by an authenticator app like Google Authenticator or Authy."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"/end-user-flows/mfa/webauthn",children:"Passkeys (WebAuthn)"}),": A high-security option suitable for web products supporting device biometrics or security keys, etc., ensuring robust protection."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["Backup factors:","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"/end-user-flows/mfa/backup-codes",children:"Backup codes"}),": This serves as a backup option when users can't verify any of the primary factors mentioned above. Enabling this option reduces friction for users' access successfully."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["Select the MFA policy settings for the users:","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"User-controlled MFA"}),": Users can skip the MFA setup process during sign-up flow. They may choose to set up MFA later through your self-service account settings page or Logto hosted account settings page (coming soon). ",(0,i.jsx)(s.a,{href:"/end-user-flows/account-settings/",children:"Learn more"})," about implementing a user account settings page."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Admin-enforced MFA"}),": You can enforce MFA for all users. Users will be prompted to set up MFA during the sign-in process which cannot be skipped. If the user fails to set up MFA or deletes their MFA settings, they will be locked out of their account until they set up MFA again."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"MFA settings",src:t(95072).A+"",width:"3010",height:"1456"})}),"\n",(0,i.jsx)(s.h2,{id:"mfa-user-flow",children:"MFA user flow"}),"\n",(0,i.jsx)(s.h3,{id:"mfa-set-up-flow",children:"MFA set-up flow"}),"\n",(0,i.jsx)(s.p,{children:"Once the MFA is enabled, users will be prompted to set up MFA during the sign-in and sign-up process. Users can choose to skip this setup process if and only if the \u201cUser-controlled MFA\u201c policy is enabled."}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Visit sign-in or sign-up page"}),": The user navigates to the sign-in or sign-up page."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Completes sign-in or sign-up"}),": The user completes the identity verification process within the sign-in or sign-up flow."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Set up MFA primary factor"}),': The user is prompted to set up their primary MFA factor (either Authenticator app OTP or WebAuthn). If multiple primary factors are enabled, they can choose their preferred option. If the \u201cUser-controlled MFA\u201d policy is enabled, they can also skip this step by selecting the "Skip" button.']}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Set up MFA backup factor"}),": If ",(0,i.jsx)(s.strong,{children:"Backup codes"})," are enabled, the user is prompted to set up backup codes after successfully configuring their primary authentication factor. Auto generated backup codes will be displayed to the user, which they can download and store securely. User must manually confirm the backup codes to complete the MFA setup process."]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"MFA set-up flow",src:t(83048).A+"",width:"4078",height:"3018"})}),"\n",(0,i.jsx)(s.h3,{id:"mfa-verification-flow",children:"MFA verification flow"}),"\n",(0,i.jsx)(s.p,{children:"Users who have set up MFA will be prompted to verify their identity using their configured MFA factors during sign-in. The verification factor will depend on the MFA configuration in Logto and the user settings."}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"If a user has set up only one factor, they will verify it directly."}),"\n",(0,i.jsx)(s.li,{children:"If a user has set up multiple factors as 2FA, they will need to choose one to verify."}),"\n",(0,i.jsx)(s.li,{children:"If all the enabled primary factors are not available to the user, and backup code is enabled, they can use the one-time backup code to verify their identity."}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"MFA verification flow",src:t(17187).A+"",width:"4078",height:"2546"})})]})}function d(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},95072:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/configure-mfa-7f11afc1548e87be48fbcaa6ad860ce0.png"},83048:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/link-mfa-a10bd109dc541ef000772876e93592c0.png"},17187:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/verify-mfa-94de5b783c0710259bef96f2f0e64b07.png"},15658:(e,s,t)=>{t.d(s,{R:()=>r,x:()=>c});var n=t(30758);const i={},o=n.createContext(i);function r(e){const s=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(o.Provider,{value:s},e.children)}}}]);