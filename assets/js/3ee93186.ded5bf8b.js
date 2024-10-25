"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[26503],{49289:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>d,metadata:()=>c,toc:()=>a});var t=i(86070),r=i(15658),s=i(8003);const d={slug:"/integrations/sendgrid-email",sidebar_label:"SendGrid Email",sidebar_custom_props:{description:"SendGrid is a communication platform for transactional and marketing email.",logoFilename:"sendgrid.svg"}},o="SendGrid email connector",c={id:"integrations/email/sendgrid-email/README",title:"README",description:"The official Logto connector for SendGrid email service.",source:"@site/docs/integrations/email/sendgrid-email/README.mdx",sourceDirName:"integrations/email/sendgrid-email",slug:"/integrations/sendgrid-email",permalink:"/integrations/sendgrid-email",draft:!1,unlisted:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/integrations/email/sendgrid-email/README.mdx",tags:[],version:"current",frontMatter:{slug:"/integrations/sendgrid-email",sidebar_label:"SendGrid Email",sidebar_custom_props:{description:"SendGrid is a communication platform for transactional and marketing email.",logoFilename:"sendgrid.svg"}},sidebar:"integrationsSidebar",previous:{title:"Mailgun",permalink:"/integrations/mailgun"},next:{title:"SMTP",permalink:"/integrations/smtp"}},l={},a=[...s.RM,{value:"Get started",id:"get-started",level:2},{value:"Register SendGrid account",id:"register-sendgrid-account",level:2},{value:"Verify senders",id:"verify-senders",level:2},{value:"Create API keys",id:"create-api-keys",level:2},{value:"Configure your connector",id:"configure-your-connector",level:2},{value:"Test SendGrid email connector",id:"test-sendgrid-email-connector",level:3},{value:"Config types",id:"config-types",level:3}];function h(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.Ay,{}),"\n",(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"sendgrid-email-connector",children:"SendGrid email connector"})}),"\n",(0,t.jsx)(n.p,{children:"The official Logto connector for SendGrid email service."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Table of contents"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#sendgrid-email-connector",children:"SendGrid email connector"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#get-started",children:"Get started"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#register-sendgrid-account",children:"Register SendGrid account"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#verify-senders",children:"Verify senders"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#create-api-keys",children:"Create API keys"})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#configure-your-connector",children:"Configure your connector"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#test-sendgrid-email-connector",children:"Test SendGrid email connector"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#config-types",children:"Config types"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"get-started",children:"Get started"}),"\n",(0,t.jsxs)(n.p,{children:["SendGrid (i.e. Twilio SendGrid) is a customer communication platform for transactional and marketing email. We can use its email sending function to send a ",(0,t.jsx)(n.em,{children:"verification code"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"register-sendgrid-account",children:"Register SendGrid account"}),"\n",(0,t.jsxs)(n.p,{children:["Create a new account at ",(0,t.jsx)(n.a,{href:"https://app.sendgrid.com/",children:"SendGrid website"}),". You may skip this step if you've already got an account."]}),"\n",(0,t.jsx)(n.h2,{id:"verify-senders",children:"Verify senders"}),"\n",(0,t.jsxs)(n.p,{children:["Go to the ",(0,t.jsx)(n.a,{href:"https://app.sendgrid.com/",children:"SendGrid console page"})," and sign in with your SendGrid account."]}),"\n",(0,t.jsx)(n.p,{children:"Senders indicate the addresses our verification code email will be sent from. In order to send emails via the SendGrid mail server, you need to verify at least one sender."}),"\n",(0,t.jsxs)(n.p,{children:["Starting from the ",(0,t.jsx)(n.a,{href:"https://app.sendgrid.com/",children:"SendGrid console page"}),', go to "Settings" -> "Sender Authentication" from the sidebar.']}),"\n",(0,t.jsx)(n.p,{children:'Domain Authentication is recommended but not obligatory. You can click "Get started" in "Authenticate Your Domain" card and follow the upcoming guide to link and verify a sender to SendGrid.'}),"\n",(0,t.jsx)(n.p,{children:'By clicking the "Verify a Single Sender" button in the panel, you are now focusing on a form requiring some critical information to create a sender. Follow the guide, fill out all these fields, and hit the "Create" button.'}),"\n",(0,t.jsx)(n.p,{children:"After the single sender is created, an email with a verification link should be sent to your sender's email address. Go to your mailbox, find the verification mail and finish verifying the single sender by clicking the link given in the email. You can now send emails via SendGrid connector using the sender you've just verified."}),"\n",(0,t.jsx)(n.h2,{id:"create-api-keys",children:"Create API keys"}),"\n",(0,t.jsxs)(n.p,{children:["Let's start from the ",(0,t.jsx)(n.a,{href:"https://app.sendgrid.com/",children:"SendGrid console page"}),', go to "Settings" -> "API Keys" from the sidebar.']}),"\n",(0,t.jsxs)(n.p,{children:['Click the "Create API Key" in the top-right corner of the API Keys page. Type in the name of the API key and customize "API Key Permission" per your use case. A global ',(0,t.jsx)(n.code,{children:"Full Access"})," or ",(0,t.jsx)(n.code,{children:"Restricted Access"})," with full access to Mail Send is required before sending emails with this API key."]}),"\n",(0,t.jsxs)(n.p,{children:["The API Key is presented to you on the screen as soon as you finished the ",(0,t.jsx)(n.em,{children:"Create API Key"})," process. You should save this API Key somewhere safe because this is the only chance that you can see it."]}),"\n",(0,t.jsx)(n.h2,{id:"configure-your-connector",children:"Configure your connector"}),"\n",(0,t.jsxs)(n.p,{children:["Fill out the ",(0,t.jsx)(n.code,{children:"apiKey"}),' field with the API Key created in "Create API keys" section.']}),"\n",(0,t.jsxs)(n.p,{children:["Fill out the ",(0,t.jsx)(n.code,{children:"fromEmail"})," and ",(0,t.jsx)(n.code,{children:"fromName"})," fields with the senders' ",(0,t.jsx)(n.em,{children:"From Address"})," and ",(0,t.jsx)(n.em,{children:"Nickname"}),". You can find the sender's details on the ",(0,t.jsx)(n.a,{href:"https://mc.sendgrid.com/senders",children:'"Sender Management" page'}),". ",(0,t.jsx)(n.code,{children:"fromName"})," is OPTIONAL, so you can skip filling it."]}),"\n",(0,t.jsx)(n.p,{children:"You can add multiple SendGrid mail connector templates for different cases. Here is an example of adding a single template:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Fill out the ",(0,t.jsx)(n.code,{children:"subject"})," field, which works as the title of emails."]}),"\n",(0,t.jsxs)(n.li,{children:["Fill out the ",(0,t.jsx)(n.code,{children:"content"})," field with arbitrary string-typed contents. Do not forget to leave the ",(0,t.jsx)(n.code,{children:"{{code}}"})," placeholder for the random verification code."]}),"\n",(0,t.jsxs)(n.li,{children:["Fill out ",(0,t.jsx)(n.code,{children:"usageType"})," field with either ",(0,t.jsx)(n.code,{children:"Register"}),", ",(0,t.jsx)(n.code,{children:"SignIn"}),", ",(0,t.jsx)(n.code,{children:"ForgotPassword"}),", ",(0,t.jsx)(n.code,{children:"Generic"})," for different use cases."]}),"\n",(0,t.jsxs)(n.li,{children:["Fill out ",(0,t.jsx)(n.code,{children:"type"})," field with either ",(0,t.jsx)(n.code,{children:"text/plain"})," or ",(0,t.jsx)(n.code,{children:"text/html"})," for different types of content."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["In order to enable full user flows, templates with usageType ",(0,t.jsx)(n.code,{children:"Register"}),", ",(0,t.jsx)(n.code,{children:"SignIn"}),", ",(0,t.jsx)(n.code,{children:"ForgotPassword"})," and ",(0,t.jsx)(n.code,{children:"Generic"})," are required."]}),"\n",(0,t.jsx)(n.p,{children:"Here is an example of SendGrid connector template JSON."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsonc",children:'[\n  {\n    "subject": "<register-template-subject>",\n    "content": "<Logto: Your verification code is {{code}}. (register template)>",\n    "usageType": "Register",\n    "type": "text/plain",\n  },\n  {\n    "subject": "<sign-in-template-subject>",\n    "content": "<Logto: Your verification code is {{code}}. (sign-in template)>",\n    "usageType": "SignIn",\n    "type": "text/plain",\n  },\n  {\n    "subject": "<forgot-password-template-subject>",\n    "content": "<Logto: Your verification code is {{code}}. (forgot-password template)>",\n    "usageType": "ForgotPassword",\n    "type": "text/plain",\n  },\n  {\n    "subject": "<generic-template-subject>",\n    "content": "<Logto: Your verification code is {{code}}. (generic template)>",\n    "usageType": "Generic",\n    "type": "text/plain",\n  },\n]\n'})}),"\n",(0,t.jsx)(n.h3,{id:"test-sendgrid-email-connector",children:"Test SendGrid email connector"}),"\n",(0,t.jsx)(n.p,{children:'You can type in an email address and click on "Send" to see whether the settings can work before "Save and Done".'}),"\n",(0,t.jsxs)(n.p,{children:["That's it. Don't forget to ",(0,t.jsx)(n.a,{href:"https://docs.logto.io/docs/recipes/configure-connectors/email-connector/enable-email-sign-in/",children:"Enable connector in sign-in experience"})]}),"\n",(0,t.jsx)(n.h3,{id:"config-types",children:"Config types"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Name"}),(0,t.jsx)(n.th,{children:"Type"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"apiKey"}),(0,t.jsx)(n.td,{children:"string"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"fromEmail"}),(0,t.jsx)(n.td,{children:"string"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"fromName"}),(0,t.jsx)(n.td,{children:"string (OPTIONAL)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"templates"}),(0,t.jsx)(n.td,{children:"Template[]"})]})]})]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Template Properties"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Enum values"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"subject"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"N/A"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"content"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"N/A"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"usageType"}),(0,t.jsx)(n.td,{children:"enum string"}),(0,t.jsx)(n.td,{children:"'Register' | 'SignIn' | 'ForgotPassword' | 'Generic'"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"type"}),(0,t.jsx)(n.td,{children:"enum string"}),(0,t.jsx)(n.td,{children:"'text/plain' | 'text/html'"})]})]})]})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},8003:(e,n,i)=>{i.d(n,{Ay:()=>o,RM:()=>s});var t=i(86070),r=i(15658);const s=[];function d(e){const n={a:"a",admonition:"admonition",li:"li",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["In this guide, we assume you have basic knowledge of Logto Connectors. If you don't, check out the ",(0,t.jsx)(n.a,{href:"/docs/recipes/configure-connectors/",children:"Configure connectors"})," guide to get started."]}),"\n"]})})}function o(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},15658:(e,n,i)=>{i.d(n,{R:()=>d,x:()=>o});var t=i(30758);const r={},s=t.createContext(r);function d(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);