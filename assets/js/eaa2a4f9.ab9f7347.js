"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[38244],{4804:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"connectors/email-connectors/built-in-email-service","title":"Logto built-in email service","description":"Logto provides built-in email services for your convenience in the following scenarios:","source":"@site/docs/connectors/email-connectors/built-in-email-service.mdx","sourceDirName":"connectors/email-connectors","slug":"/connectors/email-connectors/built-in-email-service","permalink":"/connectors/email-connectors/built-in-email-service","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/docs/connectors/email-connectors/built-in-email-service.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"id":"built-in-email-service","title":"Logto built-in email service","sidebar_label":"Logto built-in email service","sidebar_position":2},"sidebar":"docsSidebar","previous":{"title":"Email connectors","permalink":"/connectors/email-connectors/"},"next":{"title":"Email templates","permalink":"/connectors/email-connectors/email-templates"}}');var s=n(86070),o=n(15658);const r={id:"built-in-email-service",title:"Logto built-in email service",sidebar_label:"Logto built-in email service",sidebar_position:2},a=void 0,l={},c=[{value:"Configuration steps",id:"configuration-steps",level:2},{value:"Unified email templates",id:"unified-email-templates",level:2},{value:"FAQs",id:"faqs",level:2}];function d(e){const i={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components},{CloudLink:t,Details:r}=i;return t||m("CloudLink",!0),r||m("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.p,{children:"Logto provides built-in email services for your convenience in the following scenarios:"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsx)(i.li,{children:"Quickly explore or test Logto's email login experience."}),"\n",(0,s.jsxs)(i.li,{children:["Use it directly for your online products. It's primarily for new startups that are comfortable using ",(0,s.jsx)(i.code,{children:"logto.email"})," as their sender email domain."]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"The characteristics of the Logto email service:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Free to use:"})," It's completely free without any daily email usage limits, saving your cost."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Effortless:"})," No configuration with any third-party email service providers is required. Simply customize the basic branding information for your email template. If you don't have your own branding information yet, you can choose to start using it with few clicks."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Ensured delivery:"})," Based on Logto's email service, you can get stable service and reliable email delivery, ensuring users can access your product."]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"However, while convenient, there are some limitations to be aware of \u2014 you cannot customize the sender's email address, domain, or the specific email content."}),"\n",(0,s.jsx)(i.p,{children:"Depending on your evolving business needs, you can choose to use other email service providers later. We offer a range of out-of-the-box email service connectors, and also support SMTP and WebHook triggers for sending emails, so you'll always find a way that suits you."}),"\n",(0,s.jsx)(i.admonition,{type:"note",children:(0,s.jsx)(i.p,{children:"Logto built-in free email service is currently only available for Cloud users. For users of the Open-source service, you have the flexibility to configure your email service provider for email login."})}),"\n",(0,s.jsx)(i.h2,{id:"configuration-steps",children:"Configuration steps"}),"\n",(0,s.jsx)(i.p,{children:"Follow these steps to configure the Logto email service:"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:["Go to ",(0,s.jsx)(t,{to:"/connectors/passwordless",children:"Connector > Email and SMS connectors"}),"."]}),"\n",(0,s.jsxs)(i.li,{children:['To add a new Email connector, click the "',(0,s.jsx)(i.strong,{children:"Set up"}),'" button and select the "',(0,s.jsx)(i.strong,{children:"Logto email service"}),'" connector.']}),"\n",(0,s.jsx)(i.li,{children:'Once the "Logto email service" connector is successfully created, you can customize the basic branding information displayed in the email templates.'}),"\n",(0,s.jsx)(i.li,{children:"After making these changes, remember to send a test email template to your email address before saving changes."}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"Customization Options:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"From email:"})," The sender email is set to ",(0,s.jsx)(i.code,{children:"no-reply@logto.email"})," and cannot be modified."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Sender name:"})," Set your brand name as the sender name to ensure user recognition."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Company information:"})," Display your company name, address, or zip code to enhance user trust and meet compliance requirements. ",(0,s.jsx)(i.em,{children:"Note that URLs are not allowed."})]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"App logo:"})," Upload your app's brand logo so that the app's brand value can be showcased in emails received by users."]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"unified-email-templates",children:"Unified email templates"}),"\n",(0,s.jsx)(i.p,{children:"Logto email service uses unified email templates tailored for specific authentication scenarios:"}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"Usage"}),(0,s.jsx)(i.th,{children:"Scenario"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Register"}),(0,s.jsx)(i.td,{children:"Users create an account using their email and verify it by entering a verification code sent by Logto to their email."})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"SignIn"}),(0,s.jsx)(i.td,{children:"Users sign in using their email and verify by entering verification code instead of entering a password."})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"ForgotPassword"}),(0,s.jsx)(i.td,{children:"If users forget their password during login, they can choose to verify their identity using the email they've already verified with Logto."})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Generic"}),(0,s.jsx)(i.td,{children:"This template can be used as a general backup option for various scenarios, including testing connector configurations and so on."})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"OrganizationInvitation"}),(0,s.jsx)(i.td,{children:"Use this template to send users an invitation link to join the organization."})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{}),(0,s.jsx)(i.td,{})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"UserPermissionValidation"}),(0,s.jsxs)(i.td,{children:["During app usage, there may be some high-risk operations or operations with a relatively high risk level that require additional user verification, such as bank transfers, deleting resources in use, and canceling memberships. The ",(0,s.jsx)(i.code,{children:"UserPermissionValidation"})," template can be used to define the content of the email verification code users receive in these situations."]})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"BindNewIdentifier"}),(0,s.jsxs)(i.td,{children:["When a user modifies their profile, they may bind an email address to their current account. In this case, the ",(0,s.jsx)(i.code,{children:"BindNewIdentifier"})," template can be used to customize the content of the verification email."]})]})]})]}),"\n",(0,s.jsx)(i.p,{children:'An example of email templates for the "Register" usage type with custom brand information:'}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Logto built-in email service sample",src:n(28109).A+"",width:"1844",height:"1664"})}),"\n",(0,s.jsx)(i.p,{children:"If no custom brand information is provided, the email template can still be used with a default display and layout:"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Logto built-in email service sample without branding",src:n(69464).A+"",width:"1844",height:"1310"})}),"\n",(0,s.jsx)(i.h2,{id:"faqs",children:"FAQs"}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:"Is it possible to add custom CSS or HTML to Logto email service?"}),(0,s.jsxs)(i.p,{children:["Logto's built-in email service doesn't support custom CSS or HTML. You can only modify generic branding elements. This restriction is in place to maintain built-in email service stability, as all tenants share the same IP address and sender address. For more details, please refer to \"",(0,s.jsx)(i.a,{href:"https://blog.logto.io/verification-email-delivery#factors-to-improve-email-delivery",children:"Factors to improve email delivery"}),'".']}),(0,s.jsx)(i.p,{children:"To customize email templates, we recommend using another email connector, such as AWS Direct Mail, SendGrid, Mailgun, Postmark, or SMTP."})]})]})}function h(e={}){const{wrapper:i}={...(0,o.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}function m(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},69464:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/logto-email-service-template-sample-without-branding-65b81dae5847185a9bdf78be321513bf.png"},28109:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/logto-email-service-template-sample-ef27bb82030604132e36ec5753355730.png"},15658:(e,i,n)=>{n.d(i,{R:()=>r,x:()=>a});var t=n(30758);const s={},o=t.createContext(s);function r(e){const i=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(o.Provider,{value:i},e.children)}}}]);