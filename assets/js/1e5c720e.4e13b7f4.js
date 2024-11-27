"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[4331],{47395:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>d,contentTitle:()=>a,default:()=>l,frontMatter:()=>r,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"developers/webhooks/README","title":"Webhooks","description":"Logto Webhooks provide real-time notifications for various events, including changes to user account, role, permission, organization, organization role, organization permission, and user interaction.","source":"@site/docs/developers/webhooks/README.mdx","sourceDirName":"developers/webhooks","slug":"/developers/webhooks/","permalink":"/developers/webhooks/","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/docs/developers/webhooks/README.mdx","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"sidebar_position":5},"sidebar":"docsSidebar","previous":{"title":"Signing keys","permalink":"/developers/signing-keys"},"next":{"title":"Configure Webhooks","permalink":"/developers/webhooks/configure-webhooks"}}');var t=n(86070),i=n(15658);const r={sidebar_position:5},a="Webhooks",d={},c=[{value:"Why use Webhook?",id:"why-use-webhook",level:2},{value:"Terms",id:"terms",level:2},{value:"FAQs",id:"faqs",level:2}];function h(e){const o={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",mermaid:"mermaid",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components},{Details:n,Url:s}=o;return n||u("Details",!0),s||u("Url",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.header,{children:(0,t.jsx)(o.h1,{id:"webhooks",children:"Webhooks"})}),"\n",(0,t.jsx)(o.p,{children:"Logto Webhooks provide real-time notifications for various events, including changes to user account, role, permission, organization, organization role, organization permission, and user interaction."}),"\n",(0,t.jsxs)(o.p,{children:["When an event is triggered, Logto sends an HTTP request to the Endpoint URL you provide, containing detailed information about the event, such as user ID, username, email, and other relevant details (for more about the data included in the payload and header, refer to ",(0,t.jsx)(o.a,{href:"/developers/webhooks/webhooks-request",children:"Webhook request"}),"). Your application can process this request and take customized actions, like sending an email or updating data in database."]}),"\n",(0,t.jsx)(o.p,{children:"We continuously add more events based on user needs. If you have specific requirements for your business, please let us know."}),"\n",(0,t.jsx)(o.h2,{id:"why-use-webhook",children:"Why use Webhook?"}),"\n",(0,t.jsx)(o.p,{children:"Webhooks offer real-time communication between applications, eliminating the need for polling and enabling immediate data updates. They simplify application integration and workflow automation without complex code or proprietary APIs."}),"\n",(0,t.jsx)(o.p,{children:"Here are some examples of common Webhook use cases for CIAM:"}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.strong,{children:"Send emails:"})," Configure a Webhook to send a welcome email to new users upon registration or notify administrators when a user signs in from a new device or location."]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.strong,{children:"Send notifications:"})," Configure a Webhook to trigger a virtual assistant with your CRM system to provide real-time customer support when users sign up."]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.strong,{children:"Perform additional API calls"}),": Configure a Webhook to verify user access by checking their email domain or IP address and then use the Logto Management API to assign appropriate roles with resource permissions."]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.strong,{children:"Data synchronization:"})," Configure Webhook to keep the application updated about changes such as user account suspensions or deletions."]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.strong,{children:"Generate reports"}),": Set up a Webhook to receive user login activity data and leverage it to create reports on user engagement or usage patterns."]}),"\n"]}),"\n",(0,t.jsx)(o.h2,{id:"terms",children:"Terms"}),"\n",(0,t.jsxs)(o.table,{children:[(0,t.jsx)(o.thead,{children:(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.th,{children:"Item"}),(0,t.jsx)(o.th,{children:"Description"})]})}),(0,t.jsxs)(o.tbody,{children:[(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"Event"}),(0,t.jsx)(o.td,{children:"When a specific action is done, it will trigger a hook event with a specific type. E.g., Logto will emit a PostRegister hook event when the user finished the sign-up process and created a new account."})]}),(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"Hook"}),(0,t.jsx)(o.td,{children:"A single or series of actions that hook to a specific event. Action can be calling API, executing code snippets, etc."})]}),(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"Webhook"}),(0,t.jsx)(o.td,{children:"A subtype of hook that indicates calling an API with the event payload."})]}),(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"Say a developer wants to send a notification when user signs in via a new device, the developer can add a webhook that calls his security service API to the PostSignIn event."}),(0,t.jsx)(o.td,{})]})]})]}),"\n",(0,t.jsxs)(o.p,{children:["Here's an example of enabling two web hooks for ",(0,t.jsx)(o.code,{children:"PostSignIn"})," event in Logto:"]}),"\n",(0,t.jsx)(o.mermaid,{value:"graph LR\n  subgraph Logto\n    SF(Sign-in finished)\n    PS(Post sign-in)\n    WH2(Web hook 2)\n    WH1(Web hook 1)\n  end\n\n  subgraph Service 2\n    E2(Endpoint)\n  end\n\n  subgraph Service 1\n    E1(Endpoint)\n  end\n\n  SF --\x3e|Trigger| PS\n  PS --\x3e WH1\n  PS --\x3e WH2\n  WH1 ---\x3e|POST API call| E1\n  WH2 ---\x3e|POST API call| E2\n"}),"\n",(0,t.jsx)(o.h2,{id:"faqs",children:"FAQs"}),"\n",(0,t.jsxs)(n,{children:[(0,t.jsx)("summary",{children:"Does Logto support synced webhooks?"}),(0,t.jsx)(o.p,{children:"Although synced webhooks would make the user sign-in flow smoother, we don't support them yet (we will in the future). Therefore, scenarios that rely on synced webhooks currently all require different workarounds. If you have any questions, don't hesitate to contact us."})]}),"\n",(0,t.jsxs)(n,{children:[(0,t.jsx)("summary",{children:"How to deal with user permission change?"}),(0,t.jsxs)(o.p,{children:["See ",(0,t.jsx)(s,{type:"inline",href:"/authorization/role-based-access-control/protect-api-resources-with-rbac/#optional-handle-user-permission-change",children:"Manage user permission change"})," guide."]})]}),"\n",(0,t.jsxs)(n,{children:[(0,t.jsx)("summary",{children:"How to debug webhook timeout?"}),(0,t.jsx)(o.p,{children:"For the endpoint receiving Webhooks, it should return a 2xx response as quickly as possible to tell Logto that the Webhook has been successfully received. Since different users have vastly different processing logic for Webhooks, excessively complex tasks might take several seconds, causing the Logto Webhook to time out. Best practice is to maintain your own event queue; upon receiving the Logto Webhook, insert the event into the queue and return a 2xx response to Logto. Then let your own worker process the tasks in the queue step by step. If the worker encounters an error, handle it on your own server."})]}),"\n",(0,t.jsxs)(n,{children:[(0,t.jsxs)("summary",{children:["Can I get the client IP address from ",(0,t.jsx)(o.code,{children:"PostSignIn"})," webhooks?"]}),(0,t.jsx)(o.p,{children:"Yes, you can get IP address, user agents, etc in Webhook payload. If you need information that is not currently supported, you can create feature requests on GitHub issues, or contact us."})]})]})}function l(e={}){const{wrapper:o}={...(0,i.R)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}function u(e,o){throw new Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},15658:(e,o,n)=>{n.d(o,{R:()=>r,x:()=>a});var s=n(30758);const t={},i=s.createContext(t);function r(e){const o=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(i.Provider,{value:o},e.children)}}}]);