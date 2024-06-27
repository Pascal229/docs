"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[92278],{99186:(e,n,t)=>{t.d(n,{ZP:()=>a,d$:()=>r});var i=t(11527),o=t(17279);const r=[{value:"Register SendGrid account",id:"register-sendgrid-account",level:3},{value:"Verify senders",id:"verify-senders",level:3},{value:"Create API keys",id:"create-api-keys",level:3},{value:"Configure your connector",id:"configure-your-connector",level:3},{value:"Test SendGrid Email connector",id:"test-sendgrid-email-connector",level:4},{value:"Config types",id:"config-types",level:4}];function s(e){const n={a:"a",code:"code",em:"em",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h3,{id:"register-sendgrid-account",children:"Register SendGrid account"}),"\n",(0,i.jsxs)(n.p,{children:["Create a new account at ",(0,i.jsx)(n.a,{href:"https://app.sendgrid.com/",children:"SendGrid website"}),". You may skip this step if you've already registered an account."]}),"\n",(0,i.jsx)(n.h3,{id:"verify-senders",children:"Verify senders"}),"\n",(0,i.jsxs)(n.p,{children:["Go to the ",(0,i.jsx)(n.a,{href:"https://app.sendgrid.com/",children:"SendGrid console page"})," and sign in with your SendGrid account."]}),"\n",(0,i.jsx)(n.p,{children:"Senders indicate the addresses our verification code email will be sent from. In order to send emails via the SendGrid mail server, you need to verify at least one sender."}),"\n",(0,i.jsxs)(n.p,{children:["Starting from the ",(0,i.jsx)(n.a,{href:"https://app.sendgrid.com/",children:"SendGrid console page"}),', go to "Settings" -> "Sender Authentication" from the sidebar.']}),"\n",(0,i.jsx)(n.p,{children:'Domain Authentication is recommended but not obligatory. You can click "Get Started" in "Authenticate Your Domain" card and follow the upcoming guide to link and verify a sender to SendGrid.'}),"\n",(0,i.jsx)(n.p,{children:'By clicking the "Verify a Single Sender" button in the panel, you are now focusing on a form requiring some critical information to create a sender. Follow the guide, fill out all these fields, and hit the "Create" button.'}),"\n",(0,i.jsx)(n.p,{children:"After the single sender is created, an email with a verification link should be sent to your sender's email address. Go to your mailbox, find the verification mail and finish verifying the single sender by clicking the link given in the email. You can now send emails via SendGrid connector using the sender you've just verified."}),"\n",(0,i.jsx)(n.h3,{id:"create-api-keys",children:"Create API keys"}),"\n",(0,i.jsxs)(n.p,{children:["Let's start from the ",(0,i.jsx)(n.a,{href:"https://app.sendgrid.com/",children:"SendGrid console page"}),', go to "Settings" -> "API Keys" from the sidebar.']}),"\n",(0,i.jsxs)(n.p,{children:['Click the "Create API Key" in the top-right corner of the API Keys page. Type in the name of the API key and customize "API Key Permission" per your use case. A global ',(0,i.jsx)(n.code,{children:"Full Access"})," or ",(0,i.jsx)(n.code,{children:"Restricted Access"})," with full access to Mail Send is required before sending emails with this API key."]}),"\n",(0,i.jsxs)(n.p,{children:["The API Key is presented to you on the screen as soon as you finished the ",(0,i.jsx)(n.em,{children:"Create API Key"})," process. You should save this API Key somewhere safe because this is the only chance that you can see it."]}),"\n",(0,i.jsx)(n.h3,{id:"configure-your-connector",children:"Configure your connector"}),"\n",(0,i.jsxs)(n.p,{children:["Fill out the ",(0,i.jsx)(n.code,{children:"apiKey"}),' field with the API Key created in "Create API keys" section.']}),"\n",(0,i.jsxs)(n.p,{children:["Fill out the ",(0,i.jsx)(n.code,{children:"fromEmail"})," and ",(0,i.jsx)(n.code,{children:"fromName"})," fields with the senders' ",(0,i.jsx)(n.em,{children:"From Address"})," and ",(0,i.jsx)(n.em,{children:"Nickname"}),". You can find the sender's details on the ",(0,i.jsx)(n.a,{href:"https://mc.sendgrid.com/senders",children:'"Sender Management" page'}),". ",(0,i.jsx)(n.code,{children:"fromName"})," is OPTIONAL, so you can skip filling it."]}),"\n",(0,i.jsx)(n.p,{children:"You can add multiple SendGrid mail connector templates for different cases. Here is an example of adding a single template:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Fill out the ",(0,i.jsx)(n.code,{children:"subject"})," field, which works as the title of emails."]}),"\n",(0,i.jsxs)(n.li,{children:["Fill out the ",(0,i.jsx)(n.code,{children:"content"})," field with arbitrary string-typed contents. Do not forget to leave the ",(0,i.jsx)(n.code,{children:"{{code}}"})," placeholder for the random verification code."]}),"\n",(0,i.jsxs)(n.li,{children:["Fill out ",(0,i.jsx)(n.code,{children:"usageType"})," field with either ",(0,i.jsx)(n.code,{children:"Register"}),", ",(0,i.jsx)(n.code,{children:"SignIn"}),", ",(0,i.jsx)(n.code,{children:"ForgotPassword"}),", ",(0,i.jsx)(n.code,{children:"Generic"})," for different use cases."]}),"\n",(0,i.jsxs)(n.li,{children:["Fill out ",(0,i.jsx)(n.code,{children:"type"})," field with either ",(0,i.jsx)(n.code,{children:"text/plain"})," or ",(0,i.jsx)(n.code,{children:"text/html"})," for different types of content."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["In order to enable full user flows, templates with usageType ",(0,i.jsx)(n.code,{children:"Register"}),", ",(0,i.jsx)(n.code,{children:"SignIn"}),", ",(0,i.jsx)(n.code,{children:"ForgotPassword"})," and ",(0,i.jsx)(n.code,{children:"Generic"})," are required."]}),"\n",(0,i.jsx)(n.p,{children:"Here is an example of SendGrid connector template JSON."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsonc",children:'[\n  {\n    "subject": "<register-template-subject>",\n    "content": "<Logto: Your verification code is {{code}}. (register template)>",\n    "usageType": "Register",\n    "type": "text/plain",\n  },\n  {\n    "subject": "<sign-in-template-subject>",\n    "content": "<Logto: Your verification code is {{code}}. (sign-in template)>",\n    "usageType": "SignIn",\n    "type": "text/plain",\n  },\n  {\n    "subject": "<forgot-password-template-subject>",\n    "content": "<Logto: Your verification code is {{code}}. (forgot-password template)>",\n    "usageType": "ForgotPassword",\n    "type": "text/plain",\n  },\n  {\n    "subject": "<generic-template-subject>",\n    "content": "<Logto: Your verification code is {{code}}. (generic template)>",\n    "usageType": "Generic",\n    "type": "text/plain",\n  },\n]\n'})}),"\n",(0,i.jsx)(n.h4,{id:"test-sendgrid-email-connector",children:"Test SendGrid Email connector"}),"\n",(0,i.jsx)(n.p,{children:'You can type in an email address and click on "Send" to see whether the settings can work before "Save and Done".'}),"\n",(0,i.jsx)(n.p,{children:"That's it. Don't forget to enable connector in sign-in experience."}),"\n",(0,i.jsx)(n.h4,{id:"config-types",children:"Config types"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Type"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"apiKey"}),(0,i.jsx)(n.td,{children:"string"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"fromEmail"}),(0,i.jsx)(n.td,{children:"string"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"fromName"}),(0,i.jsx)(n.td,{children:"string (OPTIONAL)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"templates"}),(0,i.jsx)(n.td,{children:"Template[]"})]})]})]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Template Properties"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Enum values"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"subject"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"N/A"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"content"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"N/A"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"usageType"}),(0,i.jsx)(n.td,{children:"enum string"}),(0,i.jsx)(n.td,{children:"'Register' | 'SignIn' | 'ForgotPassword' | 'Generic'"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"type"}),(0,i.jsx)(n.td,{children:"enum string"}),(0,i.jsx)(n.td,{children:"'text/plain' | 'text/html'"})]})]})]})]})}function a(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},25531:(e,n,t)=>{t.d(n,{ZP:()=>g,d$:()=>u});var i=t(11527),o=t(17279),r=t(81213),s=t(63878),a=t(28866),l=t(43819),c=t(81035),d=t(36523),h=t(94842);const u=[...r.d$,{value:"Installation",id:"installation",level:3},...d.d$,{value:"Init LogtoClient",id:"init-logtoclient",level:3},...c.d$,{value:"Implement sign-in",id:"implement-sign-in",level:3},...a.d$,{value:"Implement sign-out",id:"implement-sign-out",level:3},...l.d$,{value:"Handle authentication status",id:"handle-authentication-status",level:3},...s.d$,...h.d$];function p(e){const n={h3:"h3",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.ZP,{}),"\n",(0,i.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,i.jsx)(d.ZP,{}),"\n",(0,i.jsx)(n.h3,{id:"init-logtoclient",children:"Init LogtoClient"}),"\n",(0,i.jsx)(c.ZP,{}),"\n",(0,i.jsx)(n.h3,{id:"implement-sign-in",children:"Implement sign-in"}),"\n",(0,i.jsx)(a.ZP,{}),"\n",(0,i.jsx)(n.h3,{id:"implement-sign-out",children:"Implement sign-out"}),"\n",(0,i.jsx)(l.ZP,{}),"\n",(0,i.jsx)(n.h3,{id:"handle-authentication-status",children:"Handle authentication status"}),"\n",(0,i.jsx)(s.ZP,{}),"\n",(0,i.jsx)(h.ZP,{sdk:"Next"})]})}function g(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},53136:(e,n,t)=>{t.d(n,{ZP:()=>a,d$:()=>r});var i=t(11527),o=t(17279);const r=[];function s(e){const n={img:"img",p:"p",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:["To add or change ",e.connectorType,' connector, go to the "Connector" tab in the Admin Console,\nthen click on "Email and SMS connectors". From there, click "Set up" or go to detail page and\nclick "Change ',e.connectorType,' connector".']})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Connector tab",src:t(64897).Z+"",width:"4164",height:"1290"})}),"\n",(0,i.jsxs)("p",{children:['In the openning modal, select "',e.connector,'" and click "Next".']}),"\n",(0,i.jsx)(n.p,{children:"On the next page, you will see a two-column layout with the README content on the left and configuration on the right."}),"\n",(0,i.jsx)(n.p,{children:"Feel free to follow the README file in place or read the following section to complete the configuration process. If you follow the in-place guide, you can skip the next section."})]})}function a(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},80710:(e,n,t)=>{t.d(n,{ZP:()=>l,d$:()=>s});var i=t(11527),o=t(17279);const r=t.p+"assets/images/create-application-modal-136b6119e66a20d765a416417aeeefda.png",s=[{value:"Choose your application type",id:"choose-your-application-type",level:3},{value:"Enter application name",id:"enter-application-name",level:3}];function a(e){const n={code:"code",h3:"h3",img:"img",p:"p",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"In you browser, open a new tab and enter the link of Logto Admin Console."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Get Started",src:t(57794).Z+"",width:"2354",height:"588"})}),"\n",(0,i.jsxs)(n.p,{children:['Once the page is loaded, in the "Get Started" section click the ',(0,i.jsx)(n.code,{children:"View all"})," link to open the application framework list page."]}),"\n",(0,i.jsx)(n.h3,{id:"choose-your-application-type",children:"Choose your application type"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Framework List",src:t(43477).Z+"",width:"3626",height:"2804"})}),"\n",(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:['In the opening modal, scroll to the "',e.type,'" section or filter all the available "\n',e.type,'" frameworks using the quick filter checkboxes on the left.']})}),"\n",(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:["Click the"," ","\n",e.framework.split("/").map((e=>`"${e.trim()}"`)).join(" / ")," ","\nframework card to start creating your application."]})}),"\n",(0,i.jsx)(n.h3,{id:"enter-application-name",children:"Enter application name"}),"\n",(0,i.jsx)("center",{children:(0,i.jsx)("img",{src:r,alt:"Create Application modal",width:"700"})}),"\n",(0,i.jsx)(n.p,{children:'Enter the application name, e.g., "Bookstore," and click "Create Application."'}),"\n",(0,i.jsx)(n.p,{children:"\ud83c\udf89 Ta-da! You just created your first application in Logto. You'll see a congrats page which includes a detailed integration guide. Follow the guide to see what the experience will be in your application."})]})}function l(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},59885:(e,n,t)=>{t.d(n,{ZP:()=>a,d$:()=>r});var i=t(11527),o=t(17279);const r=[];function s(e){const n={admonition:"admonition",img:"img",p:"p",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:'Switch to the "Sign-in Experience" tab, then click the "Sign-up and Sign-in" tab.'}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"If it's the first time you enter the tab, you will see a quick introduction about Sign-in Experience and its basic configuration."})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Sign-in Experience tab",src:t(68150).Z+"",width:"3502",height:"1794"})}),"\n",(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:['Select "',e.passwordlessSignUpIdentifier,'" or "Email address or phone number" for the "Sign-up\nidentifier" to provide sign-up for ',e.connectorType," passwordless sign-in, which may increase\nyour conversion rate."]})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Save changes",src:t(75877).Z+"",width:"2474",height:"188"})}),"\n",(0,i.jsx)(n.p,{children:'Finally, click "Save Changes" on the bottom right corner.'})]})}function a(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},87593:(e,n,t)=>{t.d(n,{ZP:()=>a,d$:()=>r});var i=t(11527),o=t(17279);const r=[];function s(e){const n={a:"a",admonition:"admonition",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:["\n","\n",(0,i.jsx)(n.admonition,{title:"For our new friends",type:"info",children:(0,i.jsxs)(n.p,{children:["Every app needs authentication and authorization. ",(0,i.jsx)(n.a,{href:"https://logto.io",children:"Logto"})," is an Auth0 alternative designed for modern apps and SaaS products."]})}),"\n",(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:["In this article, we will go through the steps to quickly build the ",e.connector," sign-in\nexperience (user authentication) with ",(0,i.jsx)("a",{href:e.link,target:"_blank",rel:"noopener",children:e.sdk})," and\xa0\n",(0,i.jsx)("a",{href:"https://logto.io",target:"_blank",rel:"noopener",children:"Logto"}),"."]})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Prerequisites"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["A running Logto instance. Check out the ",(0,i.jsx)(n.a,{href:"/docs/tutorials/get-started/",children:"get started page"})," if you don't have one."]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)("span",{children:["Basic knowledge of ",(0,i.jsx)("a",{href:e.link,target:"_blank",rel:"noopener",children:e.sdk}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)("span",{children:["A usable ",e.connector," account."]}),"\n"]}),"\n"]}),"\n"]})}function a(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},80386:(e,n,t)=>{t.d(n,{ZP:()=>a,d$:()=>r});var i=t(11527),o=t(17279);const r=[];function s(e){const n={p:"p",...(0,o.a)(),...e.components};return(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:['Double check you have filled out necessary values in the Logto connector configuration area. Click\n"Save and Done" (or "Save Changes") and the ',e.connector," connector should be available now."]})})}function a(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},94842:(e,n,t)=>{t.d(n,{ZP:()=>a,d$:()=>r});var i=t(11527),o=t(17279);const r=[];function s(e){const n={admonition:"admonition",p:"p",...(0,o.a)(),...e.components};return(0,i.jsx)(n.admonition,{title:"Test your integration",type:"info",children:(0,i.jsxs)(n.p,{children:["Open your ",e.sdk,' app to test if the integration works. When you click the "Sign In" button,\nthe page should be redirected to a Logto sign-in page, and you should be able to create a new\naccount by entering username and password and complete the sign-in process.']})})}function a(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},23095:(e,n,t)=>{t.d(n,{ZP:()=>a,d$:()=>r});var i=t(11527),o=t(17279);const r=[];function s(e){const n={p:"p",...(0,o.a)(),...e.components};return(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:["Return to your ",e.sdk," app. You should now be able to sign in with ",e.connector,". Enjoy!"]})})}function a(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},70108:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,connector:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var i=t(11527),o=t(17279);t(87593),t(80710),t(53136),t(80386),t(59885),t(23095),t(25531),t(99186);const r={slug:"how-to-build-sendgrid-sign-in-with-next-and-logto",authors:"logto",tags:["authentication","sendgrid","next","js","passwordless-sign-in","sign-in","login"],title:"How to build SendGrid Email passwordless sign-in with Next and Logto"},s=void 0,a={permalink:"/tutorial/how-to-build-sendgrid-sign-in-with-next-and-logto",source:"@site/tutorial/build-with-logto/generated-next-sendgrid.mdx",title:"How to build SendGrid Email passwordless sign-in with Next and Logto",description:"\x3c!--",date:"2024-06-27T06:01:11.000Z",tags:[{inline:!0,label:"authentication",permalink:"/tutorial/tags/authentication"},{inline:!0,label:"sendgrid",permalink:"/tutorial/tags/sendgrid"},{inline:!0,label:"next",permalink:"/tutorial/tags/next"},{inline:!0,label:"js",permalink:"/tutorial/tags/js"},{inline:!0,label:"passwordless-sign-in",permalink:"/tutorial/tags/passwordless-sign-in"},{inline:!0,label:"sign-in",permalink:"/tutorial/tags/sign-in"},{inline:!0,label:"login",permalink:"/tutorial/tags/login"}],readingTime:1.3,hasTruncateMarker:!0,authors:[{name:"Logto team",title:"The better identity infrastructure for developers",url:"https://logto.io",imageURL:"https://github.com/logto-io.png",key:"logto"}],frontMatter:{slug:"how-to-build-sendgrid-sign-in-with-next-and-logto",authors:"logto",tags:["authentication","sendgrid","next","js","passwordless-sign-in","sign-in","login"],title:"How to build SendGrid Email passwordless sign-in with Next and Logto"},unlisted:!1,prevItem:{title:"How to build SAML sign-in with Next and Logto",permalink:"/tutorial/how-to-build-saml-sign-in-with-next-and-logto"},nextItem:{title:"How to build Twilio SMS passwordless sign-in with Next and Logto",permalink:"/tutorial/how-to-build-twilio-sign-in-with-next-and-logto"}},l={authorsImageUrls:[void 0]},c="SendGrid",d=[];function h(e){return(0,i.jsx)(i.Fragment,{})}function u(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h()}},75848:(e,n,t)=>{t.d(n,{ZP:()=>a,d$:()=>r});var i=t(11527),o=t(17279);const r=[];function s(e){const n={a:"a",p:"p",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:["Let's switch to the Application details page of Logto Console. Add a Redirect URI"," ","\n",(0,i.jsx)("code",{children:e.redirectUri}),' and click "Save Changes".']})}),"\n",(0,i.jsx)("img",{alt:"Redirect URI in Logto Console",src:e.figureSrc,width:"600px"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://www.oauth.com/oauth2-servers/redirect-uris/",children:"Redirect URI"})," is an OAuth 2.0 concept which implies the location should redirect after authentication."]})]})}function a(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},10637:(e,n,t)=>{t.d(n,{ZP:()=>l,d$:()=>s});var i=t(11527),o=t(17279);const r=t.p+"assets/images/app-secret-2b2c12ae8557fbcf3b283bf86f3ac6db.png",s=[];function a(e){const n={admonition:"admonition",...(0,o.a)(),...e.components};return(0,i.jsxs)(n.admonition,{type:"tip",children:[(0,i.jsx)("p",{children:'You can find and copy "App Secret" from application details page in Admin Console:'}),(0,i.jsx)("img",{alt:"App Secret",src:r,width:"586px"})]})}function l(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},51187:(e,n,t)=>{t.d(n,{ZP:()=>a,d$:()=>r});var i=t(11527),o=t(17279);const r=[];function s(e){const n={admonition:"admonition",code:"code",p:"p",...(0,o.a)(),...e.components};return(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["In the following code snippets, we assume your app is running on ",(0,i.jsx)(n.code,{children:"http://localhost:3000"}),"."]})})}function a(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},55556:(e,n,t)=>{t.d(n,{ZP:()=>a,d$:()=>r});var i=t(11527),o=t(17279);const r=[];function s(e){const n={a:"a",hr:"hr",li:"li",mermaid:"mermaid",ol:"ol",p:"p",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Before we dive into the details, here's a quick overview of the end-user experience. The sign-in process can be simplified as follows:"}),"\n",(0,i.jsx)(n.mermaid,{value:"graph LR\n    A(Your app) --\x3e|1. Invoke sign-in| B(Logto)\n    B --\x3e|2. Finish sign-in| A"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Your app invokes the sign-in method."}),"\n",(0,i.jsx)(n.li,{children:"The user is redirected to the Logto sign-in page. For native apps, the system browser is opened."}),"\n",(0,i.jsx)(n.li,{children:"The user signs in and is redirected back to your app (configured as the redirect URI)."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Regarding redirect-based sign-in:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["This authentication process follows the ",(0,i.jsx)(n.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html",children:"OpenID Connect (OIDC)"})," protocol, and Logto enforces strict security measures to protect user sign-in."]}),"\n",(0,i.jsx)(n.li,{children:"If you have multiple apps, you can use the same identity provider (Logto). Once the user signs in to one app, Logto will automatically complete the sign-in process when the user accesses another app."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["To learn more about the rationale and benefits of redirect-based sign-in, see ",(0,i.jsx)(n.a,{href:"/docs/tutorials/get-started/sign-in-experience",children:"Logto sign-in experience explained"}),"."]}),"\n",(0,i.jsx)(n.hr,{})]})}function a(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},81213:(e,n,t)=>{t.d(n,{ZP:()=>a,d$:()=>r});var i=t(11527),o=t(17279);const r=[];function s(e){const n={a:"a",admonition:"admonition",li:"li",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The sample project is available on our ",(0,i.jsx)(n.a,{href:"https://github.com/logto-io/js/tree/master/packages/next-sample",children:"SDK repository"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["The example is based on Next.js ",(0,i.jsx)(n.a,{href:"https://nextjs.org/docs/pages",children:"pages router"}),"."]}),"\n"]})})}function a(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},63878:(e,n,t)=>{t.d(n,{ZP:()=>a,d$:()=>r});var i=t(11527),o=t(17279);const r=[{value:"Through API request in front-end",id:"through-api-request-in-front-end",level:4},{value:"Through <code>getServerSideProps</code>",id:"through-getserversideprops",level:4},{value:"In API routes",id:"in-api-routes",level:4}];function s(e){const n={a:"a",code:"code",h4:"h4",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"There are 3 ways to get authentication status and other context."}),"\n",(0,i.jsx)(n.h4,{id:"through-api-request-in-front-end",children:"Through API request in front-end"}),"\n",(0,i.jsxs)(n.p,{children:["You can fetch logto context by calling ",(0,i.jsx)(n.code,{children:"/api/logto/user"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"import { LogtoContext } from '@logto/next';\nimport useSWR from 'swr';\n\nconst Home = () => {\n  const { data } = useSWR<LogtoContext>('/api/logto/user');\n\n  if (!data) {\n    return <div>Loading...</div>;\n  }\n\n  if (data.isAuthenticated) {\n    return (\n      <div>\n        Hi, {data.claims?.sub},{' '}\n        <button onClick={() => window.location.assign('/api/logto/sign-out')}>Sign Out</button>\n      </div>\n    );\n  }\n\n  return (\n    <div>\n      Not authenticated,{' '}\n      <button onClick={() => window.location.assign('/api/logto/sign-in')}>Sign In</button>\n    </div>\n  );\n};\n\nexport default Home;\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Check ",(0,i.jsx)(n.a,{href:"https://swr.vercel.app/docs/getting-started",children:"this guide"})," to learn more about ",(0,i.jsx)(n.code,{children:"useSWR"}),"."]}),"\n",(0,i.jsxs)(n.h4,{id:"through-getserversideprops",children:["Through ",(0,i.jsx)(n.code,{children:"getServerSideProps"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"import { LogtoContext } from '@logto/next';\nimport { logtoClient } from '../../libraries/logto';\n\ntype Props = {\n  user: LogtoContext;\n};\n\nconst Profile = ({ user }: Props) => {\n  if (user.isAuthenticated) {\n    return <div>Hi, {user.claims?.sub}</div>;\n  }\n\n  return <div>Not authenticated</div>;\n};\n\nexport default Profile;\n\nexport const getServerSideProps = logtoClient.withLogtoSsr(async function ({ request }) {\n  const { user } = request;\n\n  return {\n    props: { user },\n  };\n});\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Check ",(0,i.jsx)(n.a,{href:"https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props",children:"Next.js documentation"})," for more details on ",(0,i.jsx)(n.code,{children:"getServerSideProps"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"in-api-routes",children:"In API routes"}),"\n",(0,i.jsxs)(n.p,{children:["Wrap your handler with ",(0,i.jsx)(n.code,{children:"logtoClient.withLogtoApiRoute"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import { logtoClient } from '../../../libraries/logto';\n\nexport default logtoClient.withLogtoApiRoute((request, response) => {\n  if (!request.user.isAuthenticated) {\n    response.status(401).json({ message: 'Unauthorized' });\n\n    return;\n  }\n\n  response.json({\n    data: 'this_is_protected_resource',\n  });\n});\n"})})]})}function a(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},28866:(e,n,t)=>{t.d(n,{ZP:()=>d,d$:()=>l});var i=t(11527),o=t(17279),r=t(19573),s=t(75848),a=t(55556);const l=[...a.d$,{value:"Configure sign-in redirect URI",id:"configure-sign-in-redirect-uri",level:4},...s.d$,{value:"Prepare API routes",id:"prepare-api-routes",level:4},{value:"Implement sign-in button",id:"implement-sign-in-button",level:4}];function c(e){const n={a:"a",code:"code",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.ZP,{}),"\n",(0,i.jsx)(n.h4,{id:"configure-sign-in-redirect-uri",children:"Configure sign-in redirect URI"}),"\n",(0,i.jsx)(s.ZP,{figureSrc:r.Z,redirectUri:"http://localhost:3000/api/logto/sign-in-callback"}),"\n",(0,i.jsx)(n.h4,{id:"prepare-api-routes",children:"Prepare API routes"}),"\n",(0,i.jsxs)(n.p,{children:["Prepare ",(0,i.jsx)(n.a,{href:"https://nextjs.org/docs/api-routes/introduction",children:"API routes"})," to connect with Logto."]}),"\n",(0,i.jsx)(n.p,{children:"Go back to your IDE/editor, use the following code to implement the API routes first:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"// pages/api/logto/[action].ts\nimport { logtoClient } from '../../../../libraries/logto';\n\nexport default logtoClient.handleAuthRoutes();\n"})}),"\n",(0,i.jsx)(n.p,{children:"This will create 4 routes automatically:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"/api/logto/sign-in"}),": Sign in with Logto."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"/api/logto/sign-in-callback"}),": Handle sign-in callback."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"/api/logto/sign-out"}),": Sign out with Logto."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"/api/logto/user"}),": Check if user is authenticated with Logto. If yes, return user info."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"implement-sign-in-button",children:"Implement sign-in button"}),"\n",(0,i.jsx)(n.p,{children:"We're almost there! In the last step, we will create a sign-in button:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"<button onClick={() => window.location.assign('/api/logto/sign-in')}>Sign In</button>\n"})}),"\n",(0,i.jsx)(n.p,{children:"Now you will be navigated to Logto sign-in page when you click the button."})]})}function d(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},43819:(e,n,t)=>{t.d(n,{ZP:()=>a,d$:()=>r});var i=t(11527),o=t(17279);const r=[{value:"Implement a sign-out button",id:"implement-a-sign-out-button",level:4}];function s(e){const n={code:"code",h4:"h4",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Calling ",(0,i.jsx)(n.code,{children:"/api/logto/sign-out"})," will clear all the Logto data in memory and cookies if they exist."]}),"\n",(0,i.jsxs)(n.p,{children:["After signing out, it'll be great to redirect your user back to your website. Let's add ",(0,i.jsx)(n.code,{children:"http://localhost:3000"})," as one of the Post Sign-out URIs in Admin Console (shows under Redirect URIs)."]}),"\n",(0,i.jsx)(n.h4,{id:"implement-a-sign-out-button",children:"Implement a sign-out button"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"<button onClick={() => window.location.assign('/api/logto/sign-out')}>Sign Out</button>\n"})})]})}function a(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},81035:(e,n,t)=>{t.d(n,{ZP:()=>c,d$:()=>a});var i=t(11527),o=t(17279),r=t(10637),s=t(51187);const a=[...s.d$,...r.d$];function l(e){const n={code:"code",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.ZP,{}),"\n",(0,i.jsx)(r.ZP,{}),"\n",(0,i.jsx)(n.p,{children:"Import and initialize LogtoClient:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"// libraries/logto.ts\nimport LogtoClient from '@logto/next';\n\nexport const logtoClient = new LogtoClient({\n  appId: '<your-application-id>',\n  appSecret: '<your-app-secret-copied-from-console>',\n  endpoint: '<your-logto-endpoint>', // E.g. http://localhost:3001\n  baseUrl: 'http://localhost:3000',\n  cookieSecret: 'complex_password_at_least_32_characters_long',\n  cookieSecure: process.env.NODE_ENV === 'production',\n});\n"})})]})}function c(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},36523:(e,n,t)=>{t.d(n,{ZP:()=>c,d$:()=>a});var i=t(11527),o=t(17279),r=t(75696),s=t(78407);const a=[];function l(e){const n={code:"code",pre:"pre",...(0,o.a)(),...e.components};return(0,i.jsxs)(s.Z,{children:[(0,i.jsx)(r.Z,{value:"npm",label:"npm",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm i @logto/next\n"})})}),(0,i.jsx)(r.Z,{value:"yarn",label:"Yarn",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"yarn add @logto/next\n"})})}),(0,i.jsx)(r.Z,{value:"pnpm",label:"pnpm",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"pnpm add @logto/next\n"})})})]})}function c(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},75696:(e,n,t)=>{t.d(n,{Z:()=>s});t(50959);var i=t(5341);const o={tabItem:"tabItem_YHvg"};var r=t(11527);function s(e){let{children:n,hidden:t,className:s}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,i.Z)(o.tabItem,s),hidden:t,children:n})}},78407:(e,n,t)=>{t.d(n,{Z:()=>y});var i=t(50959),o=t(5341),r=t(18387),s=t(28903),a=t(15885),l=t(35927),c=t(38894),d=t(70148);function h(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:t}=e;return(0,i.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:t,attributes:i,default:o}}=e;return{value:n,label:t,attributes:i,default:o}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const o=(0,s.k6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l._X)(r),(0,i.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(o.location.search);n.set(r,e),o.replace({...o.location,search:n.toString()})}),[r,o])]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:o}=e,r=u(e),[s,l]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=t.find((e=>e.default))??t[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:r}))),[c,h]=g({queryString:t,groupId:o}),[x,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,r]=(0,d.Nk)(t);return[o,(0,i.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:o}),j=(()=>{const e=c??x;return p({value:e,tabValues:r})?e:null})();(0,a.Z)((()=>{j&&l(j)}),[j]);return{selectedValue:s,selectValue:(0,i.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),m(e)}),[h,m,r]),tabValues:r}}var m=t(20619);const j={tabList:"tabList_bI1r",tabItem:"tabItem_PIQj"};var f=t(11527);function b(e){let{className:n,block:t,selectedValue:i,selectValue:s,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.o5)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),o=a[t].value;o!==i&&(c(n),s(o))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},n),children:a.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>l.push(e),onKeyDown:h,onClick:d,...r,className:(0,o.Z)("tabs__item",j.tabItem,r?.className,{"tabs__item--active":i===n}),children:t??n},n)}))})}function w(e){let{lazy:n,children:t,selectedValue:o}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===o));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function v(e){const n=x(e);return(0,f.jsxs)("div",{className:(0,o.Z)("tabs-container",j.tabList),children:[(0,f.jsx)(b,{...n,...e}),(0,f.jsx)(w,{...n,...e})]})}function y(e){const n=(0,m.Z)();return(0,f.jsx)(v,{...e,children:h(e.children)},String(n))}},19573:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/next-redirect-uri-3200717bb327c2d84cfe6173c9d8aef5.png"},64897:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/connector-tab-passwordless-9939bc0a0a5bbf8821d700cf9a25b825.png"},43477:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/framework-list-fa8640804a64dea54236744f3287635b.png"},57794:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/get-started-82fd0b8e277e116b01ce1ccaa1b04c8d.png"},75877:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/save-changes-cc32c907e69d5d865b13ee0449e34822.png"},68150:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/sie-tab-12b63a01ce248b8eb8edd1cfd796cb1b.png"},17279:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>s});var i=t(50959);const o={},r=i.createContext(o);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);