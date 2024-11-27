"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[43455],{47957:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"integrations/email/postmark/README","title":"Set up email verification with Postmark email service","description":"Logto connector for Postmark email service.","source":"@site/docs/integrations/email/postmark/README.mdx","sourceDirName":"integrations/email/postmark","slug":"/integrations/postmark","permalink":"/integrations/postmark","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/docs/integrations/email/postmark/README.mdx","tags":[],"version":"current","frontMatter":{"slug":"/integrations/postmark","sidebar_label":"Postmark","sidebar_custom_props":{"description":"Postmark is a mail sending platform."}},"sidebar":"integrationsSidebar","previous":{"title":"Mailgun","permalink":"/integrations/mailgun"},"next":{"title":"SendGrid Email","permalink":"/integrations/sendgrid-email"}}');var s=n(86070),i=n(15658),o=n(66017);const a={slug:"/integrations/postmark",sidebar_label:"Postmark",sidebar_custom_props:{description:"Postmark is a mail sending platform."}},c="Set up email verification with Postmark email service",l={},d=[...o.RM,{value:"Get started",id:"get-started",level:2},{value:"Register Postmark account",id:"register-postmark-account",level:2},{value:"Configure your connector",id:"configure-your-connector",level:2},{value:"Test Postmark email connector",id:"test-postmark-email-connector",level:2},{value:"Config types",id:"config-types",level:2}];function h(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"set-up-email-verification-with-postmark-email-service",children:"Set up email verification with Postmark email service"})}),"\n",(0,s.jsx)(t.p,{children:"Logto connector for Postmark email service."}),"\n",(0,s.jsx)(o.Ay,{}),"\n",(0,s.jsx)(t.h2,{id:"get-started",children:"Get started"}),"\n",(0,s.jsxs)(t.p,{children:["Postmark is a mail platform for transactional and marketing email. We can use its email sending function to send a ",(0,s.jsx)(t.em,{children:"verification code"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"register-postmark-account",children:"Register Postmark account"}),"\n",(0,s.jsxs)(t.p,{children:["Create a new account at ",(0,s.jsx)(t.a,{href:"https://postmark.com/",children:"Postmark website"}),". You may skip this step if you've already got an account."]}),"\n",(0,s.jsx)(t.h2,{id:"configure-your-connector",children:"Configure your connector"}),"\n",(0,s.jsxs)(t.p,{children:["Fill out the ",(0,s.jsx)(t.code,{children:"serverToken"})," field with the Server Token you find under settings for your\nserver in Postmark."]}),"\n",(0,s.jsxs)(t.p,{children:["Fill out the ",(0,s.jsx)(t.code,{children:"fromEmail"})," field with the senders' ",(0,s.jsx)(t.em,{children:"From Address"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["In order to enable full user flows, templates with usageType ",(0,s.jsx)(t.code,{children:"Register"}),", ",(0,s.jsx)(t.code,{children:"SignIn"}),", ",(0,s.jsx)(t.code,{children:"ForgotPassword"})," and ",(0,s.jsx)(t.code,{children:"Generic"})," are required"]}),"\n",(0,s.jsx)(t.p,{children:"Here is an example of Postmark connector template JSON."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-jsonc",children:'[\n  {\n    "usageType": "Register",\n    "templateAlias": "logto-register",\n  },\n  {\n    "usageType": "SignIn",\n    "templateAlias": "logto-sign-in",\n  },\n  {\n    "usageType": "ForgotPassword",\n    "templateAlias": "logto-forgot-password",\n  },\n  {\n    "usageType": "Generic",\n    "templateAlias": "logto-generic",\n  },\n]\n'})}),"\n",(0,s.jsx)(t.h2,{id:"test-postmark-email-connector",children:"Test Postmark email connector"}),"\n",(0,s.jsx)(t.p,{children:'You can type in an email address and click on "Send" to see whether the settings can work before "Save and Done".'}),"\n",(0,s.jsxs)(t.p,{children:["That's it. Don't forget to ",(0,s.jsx)(t.a,{href:"/connectors/email-connectors/#enable-email-sign-up-or-sign-in",children:"Enable connector in sign-in experience"})]}),"\n",(0,s.jsx)(t.h2,{id:"config-types",children:"Config types"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"serverToken"}),(0,s.jsx)(t.td,{children:"string"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"fromEmail"}),(0,s.jsx)(t.td,{children:"string"})]})]})]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Template Properties"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Enum values"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"usageType"}),(0,s.jsx)(t.td,{children:"enum string"}),(0,s.jsx)(t.td,{children:"'Register' | 'SignIn' | 'ForgotPassword' | 'Generic'"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"templateAlias"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"N/A"})]})]})]})]})}function m(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},66017:(e,t,n)=>{n.d(t,{Ay:()=>a,RM:()=>i});var r=n(86070),s=n(15658);const i=[];function o(e){const t={a:"a",admonition:"admonition",p:"p",...(0,s.R)(),...e.components};return(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:["In this guide, we assume you have basic knowledge of Logto Connectors. If you don't, check out the ",(0,r.jsx)(t.a,{href:"/connectors",children:"Configure connectors"})," guide to get started."]})})}function a(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},15658:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var r=n(30758);const s={},i=r.createContext(s);function o(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);