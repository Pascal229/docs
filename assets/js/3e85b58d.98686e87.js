"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[5733],{95206:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"end-user-flows/sign-up-and-sign-in/reset-password","title":"Reset password","description":"The password recovery feature will be automatically enabled to you when you have a valid Email connector or SMS connector configured. User can reset their password by providing their registered email address or phone number.","source":"@site/docs/end-user-flows/sign-up-and-sign-in/reset-password.mdx","sourceDirName":"end-user-flows/sign-up-and-sign-in","slug":"/end-user-flows/sign-up-and-sign-in/reset-password","permalink":"/end-user-flows/sign-up-and-sign-in/reset-password","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/docs/end-user-flows/sign-up-and-sign-in/reset-password.mdx","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4},"sidebar":"docsSidebar","previous":{"title":"Social sign-in","permalink":"/end-user-flows/sign-up-and-sign-in/social-sign-in"},"next":{"title":"Terms and privacy","permalink":"/end-user-flows/sign-up-and-sign-in/terms-and-privacy"}}');var t=r(86070),i=r(15658);const o={sidebar_position:4},a="Reset password",d={},c=[{value:"Password reset flow",id:"password-reset-flow",level:2},{value:"Update password for authenticate users",id:"update-password-for-authenticate-users",level:2},{value:"Set up password policy",id:"set-up-password-policy",level:2},{value:"FAQs",id:"faqs",level:2}];function l(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,i.R)(),...e.components},{CloudLink:n,Details:o}=s;return n||p("CloudLink",!0),o||p("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.header,{children:(0,t.jsx)(s.h1,{id:"reset-password",children:"Reset password"})}),"\n",(0,t.jsxs)(s.p,{children:["The password recovery feature will be automatically enabled to you when you have a valid ",(0,t.jsx)(s.a,{href:"/connectors/email-connectors",children:"Email connector"})," or ",(0,t.jsx)(s.a,{href:"/connectors/sms-connectors",children:"SMS connector"})," configured. User can reset their password by providing their registered email address or phone number."]}),"\n",(0,t.jsx)(s.h2,{id:"password-reset-flow",children:"Password reset flow"}),"\n",(0,t.jsx)(s.p,{children:'Once the reset password feature is enabled, a "Forgot password" link button will be displayed under the sign-in form. Users can click the "Forgot password" link to initiate a password reset process.'}),"\n",(0,t.jsx)(s.admonition,{type:"note",children:(0,t.jsxs)(s.p,{children:['Not seeing the "Forgot password" link? Make sure you have a valid ',(0,t.jsx)(s.strong,{children:"Email"})," or ",(0,t.jsx)(s.strong,{children:"SMS"})," connector configured."]})}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Visit sign-in page"}),": User visits the sign-in page."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Click on Forgot password link"}),': User clicks on the "Forgot password" link.']}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Enter email/phone"}),': After clicking on the "Forgot password" link, user will be redirected to a new page where they can enter their registered email address or phone number.']}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Send verification code"}),": Logto will send a verification code to the user provided email address or phone number and redirect to the code verification page."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Enter verification code"}),": User enters the verification code received in their email or phone. Logto will verify the code and identity of the user associated with the email address or phone number."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Enter new password"}),": User will be prompted to enter a new password once the verification code is successfully verified"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Successful password reset:"})," If the provided password meets the password policy requirements, the password will be updated successfully."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Redirect to sign-in page"}),": User will be redirected to the sign-in page to sign in with the new password"]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Reset password flow",src:r(20883).A+"",width:"3592",height:"2450"})}),"\n",(0,t.jsx)(s.h2,{id:"update-password-for-authenticate-users",children:"Update password for authenticate users"}),"\n",(0,t.jsxs)(s.p,{children:["For authenticated users, they can update their password by visiting the account settings page. Check the ",(0,t.jsx)(s.a,{href:"/end-user-flows/account-settings/",children:"account settings"})," to learn more about implementing a user account settings page."]}),"\n",(0,t.jsx)(s.h2,{id:"set-up-password-policy",children:"Set up password policy"}),"\n",(0,t.jsxs)(s.p,{children:["For new users or users who are updating their password, you can set a password policy to enforce password strength requirements. Visit the ",(0,t.jsx)(n,{to:"/sign-in-experience/password-policy",children:" Console > Sign-in experience > Password policy"})," to configure the password policy settings."]}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Minimum password length"}),": Set the minimum number of characters required for the password. (NIST suggests using at least 8 ",(0,t.jsx)(s.a,{href:"https://pages.nist.gov/800-63-3/sp800-63b.html#sec5",children:"characters"}),")"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Minimum required character types"}),": Set the minimum number of character types required for the password. The available character types are:","\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["Uppercase letters: ",(0,t.jsx)(s.code,{children:"(A-Z)"})]}),"\n",(0,t.jsxs)(s.li,{children:["Lowercase letters: ",(0,t.jsx)(s.code,{children:"(a-z)"})]}),"\n",(0,t.jsxs)(s.li,{children:["Numbers: ",(0,t.jsx)(s.code,{children:"(0-9)"})]}),"\n",(0,t.jsxs)(s.li,{children:["Special characters: ",(0,t.jsx)(s.code,{children:"(!\"#$%&'()\\*+,-./:;<>=?@[]^\\_`|{}~ )"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Breach history check"}),": Enable this setting to reject passwords that have been previously exposed in data breaches. (Powered by ",(0,t.jsx)(s.a,{href:"https://haveibeenpwned.com/Passwords",children:"Have I Been Pwned"}),")"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Repetition check"}),': Enable this setting to reject passwords that contain repetitive characters. (e.g., "11111111" or "password123")']}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"User information check"}),": Enable this setting to reject passwords that contain user information such as username, email address, or phone number."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Custom words"}),": Provide a list of custom words (case-insensitive) that you want to reject in the password."]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"faqs",children:"FAQs"}),"\n",(0,t.jsxs)(o,{children:[(0,t.jsx)("summary",{children:" How to sign-out a user after a successful password reset?"}),(0,t.jsxs)(s.p,{children:["Subscribe to the ",(0,t.jsx)(s.code,{children:"PostResetPassword"})," ",(0,t.jsx)(s.a,{href:"/developers/webhooks/webhooks-events#user-interaction-hook-events",children:"webhook event"})," to receive a notification when a user successfully resets their password. You can then trigger a ",(0,t.jsx)(s.a,{href:"/end-user-flows/sign-out",children:"sign-out"})," action to invalidate the user's current session and redirect them to the sign-in page."]})]}),"\n",(0,t.jsxs)(o,{children:[(0,t.jsx)("summary",{children:" How to implement the password reset flow on my custom UI?"}),(0,t.jsxs)(s.p,{children:["You can implement your own password reset flow by using the Logto's ",(0,t.jsx)(s.strong,{children:"Management API"})," and ",(0,t.jsx)(s.strong,{children:"Account API"}),". Checkout ",(0,t.jsx)(s.a,{href:"/end-user-flows/account-settings/",children:"account settings"})," for more details."]})]}),"\n",(0,t.jsxs)(o,{children:[(0,t.jsx)("summary",{children:" How can I send a password reset link to the user's email?"}),(0,t.jsxs)(s.p,{children:["You can create a self-hosted password reset endpoint and utilize the Logto SDK to initiate a sign-in request with ",(0,t.jsx)(s.a,{href:"/end-user-flows/authentication-parameters/first-screen",children:(0,t.jsx)(s.code,{children:"first_screen"})})," set to ",(0,t.jsx)(s.code,{children:"reset-password"}),". This will seamlessly redirect the user to the password reset page."]})]})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}function p(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},20883:(e,s,r)=>{r.d(s,{A:()=>n});const n=r.p+"assets/images/reset-password-ca66119e9b89f48a2ded97c28a35ca35.png"},15658:(e,s,r)=>{r.d(s,{R:()=>o,x:()=>a});var n=r(30758);const t={},i=n.createContext(t);function o(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);