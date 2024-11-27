"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[16914],{61425:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>s,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"end-user-flows/security-verification/by-management-api","title":"Implement security verification by Management API","description":"Password verification","source":"@site/docs/end-user-flows/security-verification/by-management-api.mdx","sourceDirName":"end-user-flows/security-verification","slug":"/end-user-flows/security-verification/by-management-api","permalink":"/end-user-flows/security-verification/by-management-api","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/docs/end-user-flows/security-verification/by-management-api.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"docsSidebar","previous":{"title":"Security verification","permalink":"/end-user-flows/security-verification/"},"next":{"title":"Organization experience","permalink":"/end-user-flows/organization-experience/"}}');var r=t(86070),o=t(15658);const s={sidebar_position:1},a="Implement security verification by Management API",c={},d=[{value:"Password verification",id:"password-verification",level:2},{value:"Email/SMS one-time code verification",id:"emailsms-one-time-code-verification",level:2}];function h(e){const i={a:"a",h1:"h1",h2:"h2",header:"header",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.header,{children:(0,r.jsx)(i.h1,{id:"implement-security-verification-by-management-api",children:"Implement security verification by Management API"})}),"\n",(0,r.jsx)(i.h2,{id:"password-verification",children:"Password verification"}),"\n",(0,r.jsx)(i.p,{children:"When users attempt to change their password, the system should prompt them to re-enter their current password to verify their identity. This step ensures that only the authorized account holder can change the password, preventing unauthorized access to the account."}),"\n",(0,r.jsxs)(i.table,{children:[(0,r.jsx)(i.thead,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.th,{children:"method"}),(0,r.jsx)(i.th,{children:"path"}),(0,r.jsx)(i.th,{children:"description"})]})}),(0,r.jsx)(i.tbody,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"POST"}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.a,{href:"https://openapi.logto.io/operation/operation-verifyuserpassword",children:"/api/users/{userId}/password/verify"})}),(0,r.jsx)(i.td,{children:"Verify current user password by user ID."})]})})]}),"\n",(0,r.jsx)(i.h2,{id:"emailsms-one-time-code-verification",children:"Email/SMS one-time code verification"}),"\n",(0,r.jsx)(i.p,{children:"Send a verification code to the user\u2019s email or phone number and prompt them to enter the code to confirm their identity. These endpoints can be used to verify a user\u2019s identity or to confirm ownership of a specific email or phone number. This verification step is highly recommended when a user attempts to link a new email address or phone number to their account, ensuring the authenticity of the information provided."}),"\n",(0,r.jsxs)(i.table,{children:[(0,r.jsx)(i.thead,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.th,{children:"method"}),(0,r.jsx)(i.th,{children:"path"}),(0,r.jsx)(i.th,{children:"description"})]})}),(0,r.jsxs)(i.tbody,{children:[(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"POST"}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.a,{href:"https://openapi.logto.io/operation/operation-createverificationcode",children:"/api/verification/verification-codes"})}),(0,r.jsx)(i.td,{children:"Send email or phone number verification code."})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"POST"}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.a,{href:"https://openapi.logto.io/operation/operation-verifyverificationcode",children:"/api/verification/verification-codes/verify"})}),(0,r.jsx)(i.td,{children:"Verify email or phone number by verification code."})]})]})]})]})}function l(e={}){const{wrapper:i}={...(0,o.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},15658:(e,i,t)=>{t.d(i,{R:()=>s,x:()=>a});var n=t(30758);const r={},o=n.createContext(r);function s(e){const i=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(o.Provider,{value:i},e.children)}}}]);