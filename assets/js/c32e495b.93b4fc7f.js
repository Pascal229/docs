"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[29982],{96213:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"end-user-flows/mfa/authenticator-app-otp","title":"Authenticator app OTP","description":"Concepts","source":"@site/docs/end-user-flows/mfa/authenticator-app-otp.md","sourceDirName":"end-user-flows/mfa","slug":"/end-user-flows/mfa/authenticator-app-otp","permalink":"/end-user-flows/mfa/authenticator-app-otp","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/docs/end-user-flows/mfa/authenticator-app-otp.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"docsSidebar","previous":{"title":"Configure MFA","permalink":"/end-user-flows/mfa/configure-mfa"},"next":{"title":"WebAuthn (Passkeys)","permalink":"/end-user-flows/mfa/webauthn"}}');var o=s(86070),i=s(15658);const r={sidebar_position:2},a="Authenticator app OTP",c={},l=[{value:"Concepts",id:"concepts",level:2},{value:"Auth flows",id:"auth-flows",level:2}];function d(e){const t={h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"authenticator-app-otp",children:"Authenticator app OTP"})}),"\n",(0,o.jsx)(t.h2,{id:"concepts",children:"Concepts"}),"\n",(0,o.jsx)(t.p,{children:"The Authenticator app, also referred to as the Software Token, is one of the most widely adopted MFA methods. It generates temporary, one-time passwords (OTP) to enhance the security of online service authentication. Unlike physical hardware tokens, software tokens are typically applications or plugins that users install on their devices, be it a smartphone or a computer browser. Software tokens can operate locally on a single device or synchronize across various devices, depending on the authenticator's capabilities and individual user settings."}),"\n",(0,o.jsx)(t.p,{children:"Popular examples of software tokens include Google Authenticator, Microsoft Authenticator, Duo, 1Password, Authy, and more."}),"\n",(0,o.jsx)(t.h2,{id:"auth-flows",children:"Auth flows"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Setup Flows"})}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"QR Code or Secret Key"}),": Users receive a QR code or a secret key from your service."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Add account"}),": Using their authenticator app, users scan the QR code or manually enter the secret key to add their account."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Dynamic one-time password"}),": The authenticator app displays a six-digit code that refreshes every 1-2 minutes for the added account."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Complete MFA setup"}),": Users enter this code within its validity into the MFA setup page, completing the setup of Authenticator App OTP for MFA."]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"OTP set up flow",src:s(38378).A+"",width:"3986",height:"1520"})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Verification flows"})}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Login attempt"}),": During login, users are prompted for MFA."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Retrieve OTP"}),": Open their authenticator app to retrieve the OTP for the respective account."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Enter OTP"}),": Users enter the OTP displayed in the app within its validity into the 2-step verification page."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Authentication"}),": The system verifies the OTP, granting access upon successful validation."]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"OTP verification flow",src:s(69387).A+"",width:"2704",height:"1238"})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},38378:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/otp-set-up-flow-319422c85e18b488db62887822ac7ced.png"},69387:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/otp-verification-flow-bc38cff7ce857aab7927c975d80928b8.png"},15658:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>a});var n=s(30758);const o={},i=n.createContext(o);function r(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);