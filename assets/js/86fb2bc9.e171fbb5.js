"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[5213],{89231:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>x,frontMatter:()=>c,metadata:()=>l,toc:()=>a});var t=i(86070),s=i(15658),r=i(8003);const c={slug:"/integrations/aws-ses",sidebar_label:"AWS Direct Mail",sidebar_custom_props:{description:"Amazon SES is a cloud email service provider that can integrate into any application for bulk email sending.",logoFilename:"aws.svg"}},o="AWS direct mail connector",l={id:"integrations/email/aws-ses/README",title:"README",description:"The official Logto connector for AWS connector for direct mail service.",source:"@site/docs/integrations/email/aws-ses/README.mdx",sourceDirName:"integrations/email/aws-ses",slug:"/integrations/aws-ses",permalink:"/integrations/aws-ses",draft:!1,unlisted:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/integrations/email/aws-ses/README.mdx",tags:[],version:"current",frontMatter:{slug:"/integrations/aws-ses",sidebar_label:"AWS Direct Mail",sidebar_custom_props:{description:"Amazon SES is a cloud email service provider that can integrate into any application for bulk email sending.",logoFilename:"aws.svg"}},sidebar:"integrationsSidebar",previous:{title:"Aliyun Direct Mail",permalink:"/integrations/aliyun-dm"},next:{title:"Mailgun",permalink:"/integrations/mailgun"}},d={},a=[...r.RM,{value:"Get started",id:"get-started",level:2},{value:"Configure a mail service in the AWS service console",id:"configure-a-mail-service-in-the-aws-service-console",level:2},{value:"Register AWS account",id:"register-aws-account",level:3},{value:"Create a identity",id:"create-a-identity",level:3},{value:"Configuration of the connector",id:"configuration-of-the-connector",level:3},{value:"Test the Amazon SES connector",id:"test-the-amazon-ses-connector",level:3},{value:"Configure types",id:"configure-types",level:3}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.Ay,{}),"\n",(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"aws-direct-mail-connector",children:"AWS direct mail connector"})}),"\n",(0,t.jsx)(n.p,{children:"The official Logto connector for AWS connector for direct mail service."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#aws-direct-mail-connector",children:"AWS direct mail connector"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#get-started",children:"Get started"})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#configure-a-mail-service-in-the-aws-service-console",children:"Configure a mail service in the AWS service console"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#register-aws-account",children:"Register AWS account"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#create-a-identity",children:"Create a identity"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#configuration-of-the-connector",children:"Configuration of the connector"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#test-the-amazon-ses-connector",children:"Test the Amazon SES connector"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#configure-types",children:"Configure types"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"get-started",children:"Get started"}),"\n",(0,t.jsx)(n.p,{children:"Amazon SES is a cloud email service provider that can integrate into any application for bulk email sending."}),"\n",(0,t.jsx)(n.p,{children:"Logto team to call the Amazon Simple Email Service APIs, with the help of which Logto end-users can register and sign in to their Logto account via mail verification code."}),"\n",(0,t.jsx)(n.h2,{id:"configure-a-mail-service-in-the-aws-service-console",children:"Configure a mail service in the AWS service console"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["\ud83d\udca1 ",(0,t.jsx)(n.strong,{children:"Tip"})]}),"\n",(0,t.jsx)(n.p,{children:"You can skip some sections if you have already finished."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"register-aws-account",children:"Register AWS account"}),"\n",(0,t.jsxs)(n.p,{children:["Go to ",(0,t.jsx)(n.a,{href:"https://aws.amazon.com/",children:"AWS"})," and register an account."]}),"\n",(0,t.jsx)(n.h3,{id:"create-a-identity",children:"Create a identity"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Go to ",(0,t.jsx)(n.code,{children:"Amazon Simple Email Service"})," Console"]}),"\n",(0,t.jsxs)(n.li,{children:["Create an identity, choose one of the following options","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Create an domain"}),"\n",(0,t.jsx)(n.li,{children:"Create an email address"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"configuration-of-the-connector",children:"Configuration of the connector"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Click your username in the upper right corner of the Amazon console to enter ",(0,t.jsx)(n.code,{children:"Security Credentials"}),". If you don't have one, create an ",(0,t.jsx)(n.code,{children:"AccessKey"})," and save it carefully."]}),"\n",(0,t.jsxs)(n.li,{children:["Complete the settings of the ",(0,t.jsx)(n.code,{children:"Amazon Simple Email Service"})," connector:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Use the ",(0,t.jsx)(n.code,{children:"AccessKey ID"})," and ",(0,t.jsx)(n.code,{children:"AccessKey Secret"})," obtained in step 1 to fill in ",(0,t.jsx)(n.code,{children:"accessKeyId"})," and ",(0,t.jsx)(n.code,{children:"accessKeySecret"})," respectively."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"region"}),": Fill in the ",(0,t.jsx)(n.code,{children:"region"})," field with the region of the identity you use to send mail."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"emailAddress"}),": The email address you use to send mail, in the format of ",(0,t.jsx)(n.code,{children:"Logto\\<noreply@logto.io>"})," or ",(0,t.jsx)(n.code,{children:"\\<noreply@logto.io>"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["the following parameters are optional; parameters description can be found in the ",(0,t.jsx)(n.a,{href:"https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_SendEmail.html",children:"AWS SES API documentation"}),"."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"feedbackForwardingEmailAddress"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"feedbackForwardingEmailAddressIdentityArn"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"configurationSetName"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"test-the-amazon-ses-connector",children:"Test the Amazon SES connector"}),"\n",(0,t.jsx)(n.p,{children:'You can type in an email address and click on "Send" to see whether the settings work before "Save and Done".'}),"\n",(0,t.jsxs)(n.p,{children:["That's it. Don't forget to ",(0,t.jsx)(n.a,{href:"https://docs.logto.io/docs/recipes/configure-connectors/email-connector/enable-email-sign-in/",children:"Enable connector in sign-in experience"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"configure-types",children:"Configure types"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Name"}),(0,t.jsx)(n.th,{children:"Type"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"accessKeyId"}),(0,t.jsx)(n.td,{children:"string"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"accessKeySecret"}),(0,t.jsx)(n.td,{children:"string"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"region"}),(0,t.jsx)(n.td,{children:"string"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"emailAddress"}),(0,t.jsx)(n.td,{children:"string (OPTIONAL)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"emailAddressIdentityArn"}),(0,t.jsx)(n.td,{children:"string (OPTIONAL)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"feedbackForwardingEmailAddress"}),(0,t.jsx)(n.td,{children:"string (OPTIONAL)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"feedbackForwardingEmailAddressIdentityArn"}),(0,t.jsx)(n.td,{children:"string (OPTIONAL)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"configurationSetName"}),(0,t.jsx)(n.td,{children:"string (OPTIONAL)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"templates"}),(0,t.jsx)(n.td,{children:"Template[]"})]})]})]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Template Properties"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Enum values"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"subject"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"N/A"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"content"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"N/A"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"usageType"}),(0,t.jsx)(n.td,{children:"enum string"}),(0,t.jsx)(n.td,{children:"'Register' | 'SignIn' | 'ForgotPassword' | 'Generic'"})]})]})]})]})}function x(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},8003:(e,n,i)=>{i.d(n,{Ay:()=>o,RM:()=>r});var t=i(86070),s=i(15658);const r=[];function c(e){const n={a:"a",admonition:"admonition",li:"li",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["In this guide, we assume you have basic knowledge of Logto Connectors. If you don't, check out the ",(0,t.jsx)(n.a,{href:"/docs/recipes/configure-connectors/",children:"Configure connectors"})," guide to get started."]}),"\n"]})})}function o(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},15658:(e,n,i)=>{i.d(n,{R:()=>c,x:()=>o});var t=i(30758);const s={},r=t.createContext(s);function c(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);