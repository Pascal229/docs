"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[83919],{47468:(e,n,t)=>{t.d(n,{Ay:()=>a,RM:()=>r});var i=t(86070),o=t(15658);const r=[{value:"Register SendGrid account",id:"register-sendgrid-account",level:3},{value:"Verify senders",id:"verify-senders",level:3},{value:"Create API keys",id:"create-api-keys",level:3},{value:"Configure your connector",id:"configure-your-connector",level:3},{value:"Test SendGrid Email connector",id:"test-sendgrid-email-connector",level:4},{value:"Config types",id:"config-types",level:4}];function s(e){const n={a:"a",code:"code",em:"em",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h3,{id:"register-sendgrid-account",children:"Register SendGrid account"}),"\n",(0,i.jsxs)(n.p,{children:["Create a new account at ",(0,i.jsx)(n.a,{href:"https://app.sendgrid.com/",children:"SendGrid website"}),". You may skip this step if you've already registered an account."]}),"\n",(0,i.jsx)(n.h3,{id:"verify-senders",children:"Verify senders"}),"\n",(0,i.jsxs)(n.p,{children:["Go to the ",(0,i.jsx)(n.a,{href:"https://app.sendgrid.com/",children:"SendGrid console page"})," and sign in with your SendGrid account."]}),"\n",(0,i.jsx)(n.p,{children:"Senders indicate the addresses our verification code email will be sent from. In order to send emails via the SendGrid mail server, you need to verify at least one sender."}),"\n",(0,i.jsxs)(n.p,{children:["Starting from the ",(0,i.jsx)(n.a,{href:"https://app.sendgrid.com/",children:"SendGrid console page"}),', go to "Settings" -> "Sender Authentication" from the sidebar.']}),"\n",(0,i.jsx)(n.p,{children:'Domain Authentication is recommended but not obligatory. You can click "Get Started" in "Authenticate Your Domain" card and follow the upcoming guide to link and verify a sender to SendGrid.'}),"\n",(0,i.jsx)(n.p,{children:'By clicking the "Verify a Single Sender" button in the panel, you are now focusing on a form requiring some critical information to create a sender. Follow the guide, fill out all these fields, and hit the "Create" button.'}),"\n",(0,i.jsx)(n.p,{children:"After the single sender is created, an email with a verification link should be sent to your sender's email address. Go to your mailbox, find the verification mail and finish verifying the single sender by clicking the link given in the email. You can now send emails via SendGrid connector using the sender you've just verified."}),"\n",(0,i.jsx)(n.h3,{id:"create-api-keys",children:"Create API keys"}),"\n",(0,i.jsxs)(n.p,{children:["Let's start from the ",(0,i.jsx)(n.a,{href:"https://app.sendgrid.com/",children:"SendGrid console page"}),', go to "Settings" -> "API Keys" from the sidebar.']}),"\n",(0,i.jsxs)(n.p,{children:['Click the "Create API Key" in the top-right corner of the API Keys page. Type in the name of the API key and customize "API Key Permission" per your use case. A global ',(0,i.jsx)(n.code,{children:"Full Access"})," or ",(0,i.jsx)(n.code,{children:"Restricted Access"})," with full access to Mail Send is required before sending emails with this API key."]}),"\n",(0,i.jsxs)(n.p,{children:["The API Key is presented to you on the screen as soon as you finished the ",(0,i.jsx)(n.em,{children:"Create API Key"})," process. You should save this API Key somewhere safe because this is the only chance that you can see it."]}),"\n",(0,i.jsx)(n.h3,{id:"configure-your-connector",children:"Configure your connector"}),"\n",(0,i.jsxs)(n.p,{children:["Fill out the ",(0,i.jsx)(n.code,{children:"apiKey"}),' field with the API Key created in "Create API keys" section.']}),"\n",(0,i.jsxs)(n.p,{children:["Fill out the ",(0,i.jsx)(n.code,{children:"fromEmail"})," and ",(0,i.jsx)(n.code,{children:"fromName"})," fields with the senders' ",(0,i.jsx)(n.em,{children:"From Address"})," and ",(0,i.jsx)(n.em,{children:"Nickname"}),". You can find the sender's details on the ",(0,i.jsx)(n.a,{href:"https://mc.sendgrid.com/senders",children:'"Sender Management" page'}),". ",(0,i.jsx)(n.code,{children:"fromName"})," is OPTIONAL, so you can skip filling it."]}),"\n",(0,i.jsx)(n.p,{children:"You can add multiple SendGrid mail connector templates for different cases. Here is an example of adding a single template:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Fill out the ",(0,i.jsx)(n.code,{children:"subject"})," field, which works as the title of emails."]}),"\n",(0,i.jsxs)(n.li,{children:["Fill out the ",(0,i.jsx)(n.code,{children:"content"})," field with arbitrary string-typed contents. Do not forget to leave the ",(0,i.jsx)(n.code,{children:"{{code}}"})," placeholder for the random verification code."]}),"\n",(0,i.jsxs)(n.li,{children:["Fill out ",(0,i.jsx)(n.code,{children:"usageType"})," field with either ",(0,i.jsx)(n.code,{children:"Register"}),", ",(0,i.jsx)(n.code,{children:"SignIn"}),", ",(0,i.jsx)(n.code,{children:"ForgotPassword"}),", ",(0,i.jsx)(n.code,{children:"Generic"})," for different use cases."]}),"\n",(0,i.jsxs)(n.li,{children:["Fill out ",(0,i.jsx)(n.code,{children:"type"})," field with either ",(0,i.jsx)(n.code,{children:"text/plain"})," or ",(0,i.jsx)(n.code,{children:"text/html"})," for different types of content."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["In order to enable full user flows, templates with usageType ",(0,i.jsx)(n.code,{children:"Register"}),", ",(0,i.jsx)(n.code,{children:"SignIn"}),", ",(0,i.jsx)(n.code,{children:"ForgotPassword"})," and ",(0,i.jsx)(n.code,{children:"Generic"})," are required."]}),"\n",(0,i.jsx)(n.p,{children:"Here is an example of SendGrid connector template JSON."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsonc",children:'[\n  {\n    "subject": "<register-template-subject>",\n    "content": "<Logto: Your verification code is {{code}}. (register template)>",\n    "usageType": "Register",\n    "type": "text/plain",\n  },\n  {\n    "subject": "<sign-in-template-subject>",\n    "content": "<Logto: Your verification code is {{code}}. (sign-in template)>",\n    "usageType": "SignIn",\n    "type": "text/plain",\n  },\n  {\n    "subject": "<forgot-password-template-subject>",\n    "content": "<Logto: Your verification code is {{code}}. (forgot-password template)>",\n    "usageType": "ForgotPassword",\n    "type": "text/plain",\n  },\n  {\n    "subject": "<generic-template-subject>",\n    "content": "<Logto: Your verification code is {{code}}. (generic template)>",\n    "usageType": "Generic",\n    "type": "text/plain",\n  },\n]\n'})}),"\n",(0,i.jsx)(n.h4,{id:"test-sendgrid-email-connector",children:"Test SendGrid Email connector"}),"\n",(0,i.jsx)(n.p,{children:'You can type in an email address and click on "Send" to see whether the settings can work before "Save and Done".'}),"\n",(0,i.jsx)(n.p,{children:"That's it. Don't forget to enable connector in sign-in experience."}),"\n",(0,i.jsx)(n.h4,{id:"config-types",children:"Config types"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Type"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"apiKey"}),(0,i.jsx)(n.td,{children:"string"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"fromEmail"}),(0,i.jsx)(n.td,{children:"string"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"fromName"}),(0,i.jsx)(n.td,{children:"string (OPTIONAL)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"templates"}),(0,i.jsx)(n.td,{children:"Template[]"})]})]})]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Template Properties"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Enum values"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"subject"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"N/A"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"content"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"N/A"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"usageType"}),(0,i.jsx)(n.td,{children:"enum string"}),(0,i.jsx)(n.td,{children:"'Register' | 'SignIn' | 'ForgotPassword' | 'Generic'"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"type"}),(0,i.jsx)(n.td,{children:"enum string"}),(0,i.jsx)(n.td,{children:"'text/plain' | 'text/html'"})]})]})]})]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},63576:(e,n,t)=>{t.d(n,{Ay:()=>y,RM:()=>j});var i=t(86070),o=t(15658);function r(e){const n={a:"a",admonition:"admonition",li:"li",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The following demonstration is built on Expo ~50.0.6."}),"\n",(0,i.jsxs)(n.li,{children:["The sample project is available on our ",(0,i.jsx)(n.a,{href:"https://github.com/logto-io/react-native/tree/master/packages/rn-sample",children:"SDK repository"}),"."]}),"\n"]})})}function s(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}var a=t(78551),c=t(77501);function l(e){const n={a:"a",admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Install Logto SDK and peer dependencies via your favorite package manager:"}),"\n",(0,i.jsxs)(c.A,{children:[(0,i.jsx)(a.A,{value:"npm",label:"npm",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm i @logto/rn\nnpm i expo-crypto expo-secure-store expo-web-browser @react-native-async-storage/async-storage\n"})})}),(0,i.jsx)(a.A,{value:"yarn",label:"Yarn",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"yarn add @logto/rn\nyarn add expo-crypto expo-secure-store expo-web-browser @react-native-async-storage/async-storage\n"})})}),(0,i.jsx)(a.A,{value:"pnpm",label:"pnpm",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"pnpm add @logto/rn\npnpm add expo-crypto expo-secure-store expo-web-browser @react-native-async-storage/async-storage\n"})})})]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"@logto/rn"})," package is the SDK for Logto. The remaining packages are its peer dependencies. They couldn't be listed as direct dependencies because the Expo CLI requires that all dependencies for native modules be installed directly within the root project's ",(0,i.jsx)(n.code,{children:"package.json"}),"."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["If you're installing this in a ",(0,i.jsx)(n.a,{href:"https://docs.expo.dev/bare/overview",children:"bare React Native app"}),", you should also follow these ",(0,i.jsx)(n.a,{href:"https://docs.expo.dev/bare/installing-expo-modules/",children:"additional installation instructions"}),"."]})})]})}function d(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}var h=t(29177),p=t(87585);const u=[{value:"Init Logto provider",id:"init-logto-provider",level:3},{value:"Implement sign-in and sign-out",id:"implement-sign-in-and-sign-out",level:3},...p.RM,...h.RM];function g(e){const n={code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h3,{id:"init-logto-provider",children:"Init Logto provider"}),"\n",(0,i.jsxs)(n.p,{children:["Import and use ",(0,i.jsx)(n.code,{children:"LogtoProvider"})," to provide a Logto context:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",metastring:'title="App.tsx"',children:"import { LogtoProvider, LogtoConfig } from '@logto/rn';\n\nconst config: LogtoConfig = {\n  endpoint: '<your-logto-endpoint>',\n  appId: '<your-application-id>',\n};\n\nconst App = () => (\n  <LogtoProvider config={config}>\n    <YourAppContent />\n  </LogtoProvider>\n);\n"})}),"\n",(0,i.jsx)(n.h3,{id:"implement-sign-in-and-sign-out",children:"Implement sign-in and sign-out"}),"\n",(0,i.jsx)(p.Ay,{}),"\n",(0,i.jsxs)(n.p,{children:["Switch to the application details page of Logto Console. Add a native redirect URI (for example, ",(0,i.jsx)(n.code,{children:"io.logto://callback"}),'), then click "Save".']}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["For iOS, the redirect URI scheme does not really matter since the ",(0,i.jsx)(n.code,{children:"ASWebAuthenticationSession"})," class will listen to the redirect URI regardless of if it's registered."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["For Android, the redirect URI scheme must be filled in Expo's ",(0,i.jsx)(n.code,{children:"app.json"})," file, for example:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",metastring:'title="app.json"',children:'{\n  "expo": {\n    "scheme": "io.logto"\n  }\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Now back to your app, you can use ",(0,i.jsx)(n.code,{children:"useLogto"})," hook to sign in and sign out:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",metastring:'title="App.tsx"',children:"import { useLogto } from '@logto/rn';\nimport { Button } from 'react-native';\n\nconst Content = () => {\n  const { signIn, signOut, isAuthenticated } = useLogto();\n\n  return (\n    <div>\n      {isAuthenticated ? (\n        <Button title=\"Sign out\" onPress={async () => signOut()} />\n      ) : (\n        // Replace the redirect URI with your own\n        <Button title=\"Sign in\" onPress={async () => signIn('io.logto://callback')} />\n      )}\n    </div>\n  );\n};\n"})}),"\n",(0,i.jsx)(h.Ay,{})]})}function x(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(g,{...e})}):g(e)}var m=t(92409);const j=[{value:"Installation",id:"installation",level:3},...u,...m.RM];function f(e){const n={h3:"h3",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s,{}),"\n",(0,i.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,i.jsx)(d,{}),"\n",(0,i.jsx)(x,{}),"\n",(0,i.jsx)(m.Ay,{sdk:"Expo (React Native)"})]})}function y(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(f,{...e})}):f(e)}},55158:(e,n,t)=>{t.d(n,{Ay:()=>a,RM:()=>r});var i=t(86070),o=t(15658);const r=[];function s(e){const n={img:"img",p:"p",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:["To add or change ",e.connectorType,' connector, go to the "Connector" tab in the Admin Console,\nthen click on "Email and SMS connectors". From there, click "Set up" or go to detail page and\nclick "Change ',e.connectorType,' connector".']})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Connector tab",src:t(73977).A+"",width:"4164",height:"1290"})}),"\n",(0,i.jsxs)("p",{children:['In the openning modal, select "',e.connector,'" and click "Next".']}),"\n",(0,i.jsx)(n.p,{children:"On the next page, you will see a two-column layout with the README content on the left and configuration on the right."}),"\n",(0,i.jsx)(n.p,{children:"Feel free to follow the README file in place or read the following section to complete the configuration process. If you follow the in-place guide, you can skip the next section."})]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},23471:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>s});var i=t(86070),o=t(15658);const r=t.p+"assets/images/create-application-modal-136b6119e66a20d765a416417aeeefda.png",s=[{value:"Choose your application type",id:"choose-your-application-type",level:3},{value:"Enter application name",id:"enter-application-name",level:3}];function a(e){const n={code:"code",h3:"h3",img:"img",p:"p",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"In you browser, open a new tab and enter the link of Logto Admin Console."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Get Started",src:t(13885).A+"",width:"2354",height:"588"})}),"\n",(0,i.jsxs)(n.p,{children:['Once the page is loaded, in the "Get Started" section click the ',(0,i.jsx)(n.code,{children:"View all"})," link to open the application framework list page."]}),"\n",(0,i.jsx)(n.h3,{id:"choose-your-application-type",children:"Choose your application type"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Framework List",src:t(81684).A+"",width:"3626",height:"2804"})}),"\n",(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:['In the opening modal, scroll to the "',e.type,'" section or filter all the available "\n',e.type,'" frameworks using the quick filter checkboxes on the left.']})}),"\n",(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:["Click the"," ","\n",e.framework.split("/").map((e=>`"${e.trim()}"`)).join(" / ")," ","\nframework card to start creating your application."]})}),"\n",(0,i.jsx)(n.h3,{id:"enter-application-name",children:"Enter application name"}),"\n",(0,i.jsx)("center",{children:(0,i.jsx)("img",{src:r,alt:"Create Application modal",width:"700"})}),"\n",(0,i.jsx)(n.p,{children:'Enter the application name, e.g., "Bookstore," and click "Create application."'}),"\n",(0,i.jsx)(n.p,{children:"\ud83c\udf89 Ta-da! You just created your first application in Logto. You'll see a congrats page which includes a detailed integration guide. Follow the guide to see what the experience will be in your application."})]})}function c(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},7968:(e,n,t)=>{t.d(n,{Ay:()=>a,RM:()=>r});var i=t(86070),o=t(15658);const r=[];function s(e){const n={admonition:"admonition",img:"img",p:"p",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:'Switch to the "Sign-in experience" tab, then click the "Sign-up and sign-in" tab.'}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"If it's the first time you enter the tab, you will see a quick introduction about Sign-in Experience and its basic configuration."})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Sign-in Experience tab",src:t(16906).A+"",width:"3502",height:"1794"})}),"\n",(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:['Select "',e.passwordlessSignUpIdentifier,'" or "Email address or phone number" for the "Sign-up\nidentifier" to provide sign-up for ',e.connectorType," passwordless sign-in, which may increase\nyour conversion rate."]})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Save changes",src:t(3466).A+"",width:"2474",height:"188"})}),"\n",(0,i.jsx)(n.p,{children:'Finally, click "Save changes" on the bottom right corner.'})]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},4914:(e,n,t)=>{t.d(n,{Ay:()=>a,RM:()=>r});var i=t(86070),o=t(15658);const r=[];function s(e){const n={a:"a",admonition:"admonition",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:["\n","\n",(0,i.jsx)(n.admonition,{title:"For our new friends",type:"info",children:(0,i.jsxs)(n.p,{children:["Every app needs authentication and authorization. ",(0,i.jsx)(n.a,{href:"https://logto.io",children:"Logto"})," is an Auth0 alternative designed for modern apps and SaaS products."]})}),"\n",(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:["In this article, we will go through the steps to quickly build the ",e.connector," sign-in\nexperience (user authentication) with ",(0,i.jsx)("a",{href:e.link,target:"_blank",rel:"noopener",children:e.sdk})," and\xa0\n",(0,i.jsx)("a",{href:"https://logto.io",target:"_blank",rel:"noopener",children:"Logto"}),"."]})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Prerequisites"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["A running Logto instance. Check out the ",(0,i.jsx)(n.a,{href:"/introduction",children:"introduction page"})," to get started."]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)("span",{children:["Basic knowledge of ",(0,i.jsx)("a",{href:e.link,target:"_blank",rel:"noopener",children:e.sdk}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)("span",{children:["A usable ",e.connector," account."]}),"\n"]}),"\n"]}),"\n"]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},37448:(e,n,t)=>{t.d(n,{Ay:()=>a,RM:()=>r});var i=t(86070),o=t(15658);const r=[];function s(e){const n={p:"p",...(0,o.R)(),...e.components};return(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:['Double check you have filled out necessary values in the Logto connector configuration area. Click\n"Save and Done" (or "Save changes") and the ',e.connector," connector should be available now."]})})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},92409:(e,n,t)=>{t.d(n,{Ay:()=>a,RM:()=>r});var i=t(86070),o=t(15658);const r=[];function s(e){const n={admonition:"admonition",p:"p",...(0,o.R)(),...e.components};return(0,i.jsx)(n.admonition,{title:"Test your integration",type:"info",children:(0,i.jsxs)(n.p,{children:["Open your ",e.sdk,' app to test if the integration works. When you click the "Sign In" button,\nthe page should be redirected to a Logto sign-in page, and you should be able to create a new\naccount by entering username and password and complete the sign-in process.']})})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},52878:(e,n,t)=>{t.d(n,{Ay:()=>a,RM:()=>r});var i=t(86070),o=t(15658);const r=[];function s(e){const n={p:"p",...(0,o.R)(),...e.components};return(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:["Return to your ",e.sdk," app. You should now be able to sign in with ",e.connector,". Enjoy!"]})})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},91506:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,connector:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var i=t(19710),o=t(86070),r=t(15658);t(4914),t(23471),t(55158),t(37448),t(7968),t(52878),t(63576),t(47468);const s={slug:"how-to-build-sendgrid-sign-in-with-expo-react-native-and-logto",authors:"logto",tags:["authentication","sendgrid","expo-react-native","js","passwordless-sign-in","sign-in","login"],title:"How to build SendGrid Email passwordless sign-in with Expo (React Native) and Logto"},a=void 0,c={authorsImageUrls:[void 0]},l="SendGrid",d=[];function h(e){return(0,o.jsx)(o.Fragment,{})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h()}},29177:(e,n,t)=>{t.d(n,{Ay:()=>a,RM:()=>r});var i=t(86070),o=t(15658);const r=[{value:"Checkpoint: Test your application",id:"checkpoint-test-your-application",level:3}];function s(e){const n={h3:"h3",li:"li",ol:"ol",p:"p",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h3,{id:"checkpoint-test-your-application",children:"Checkpoint: Test your application"}),"\n",(0,i.jsx)(n.p,{children:"Now, you can test your application:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Run your application, you will see the sign-in button."}),"\n",(0,i.jsx)(n.li,{children:"Click the sign-in button, the SDK will init the sign-in process and redirect you to the Logto sign-in page."}),"\n",(0,i.jsx)(n.li,{children:"After you signed in, you will be redirected back to your application and see the sign-out button."}),"\n",(0,i.jsx)(n.li,{children:"Click the sign-out button to clear local storage and sign out."}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},68347:(e,n,t)=>{t.d(n,{Ay:()=>a,RM:()=>r});var i=t(86070),o=t(15658);const r=[];function s(e){const n={a:"a",li:"li",ol:"ol",p:"p",...(0,o.R)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(t,{children:[(0,i.jsx)("summary",{children:"Regarding redirect-based sign-in"}),(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["This authentication process follows the ",(0,i.jsx)(n.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html",children:"OpenID Connect (OIDC)"})," protocol, and Logto enforces strict security measures to protect user sign-in."]}),"\n",(0,i.jsx)(n.li,{children:"If you have multiple apps, you can use the same identity provider (Logto). Once the user signs in to one app, Logto will automatically complete the sign-in process when the user accesses another app."}),"\n"]}),(0,i.jsxs)(n.p,{children:["To learn more about the rationale and benefits of redirect-based sign-in, see ",(0,i.jsx)(n.a,{href:"/concepts/sign-in-experience",children:"Logto sign-in experience explained"}),"."]})]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},87585:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>s});var i=t(86070),o=t(15658),r=t(68347);const s=[...r.RM];function a(e){const n={hr:"hr",li:"li",mermaid:"mermaid",ol:"ol",p:"p",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Before we dive into the details, here's a quick overview of the end-user experience. The sign-in process can be simplified as follows:"}),"\n",(0,i.jsx)(n.mermaid,{value:"graph LR\n    A(Your app) --\x3e|1. Invoke sign-in| B(Logto)\n    B --\x3e|2. Finish sign-in| A"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Your app invokes the sign-in method."}),"\n",(0,i.jsx)(n.li,{children:"The user is redirected to the Logto sign-in page. For native apps, the system browser is opened."}),"\n",(0,i.jsx)(n.li,{children:"The user signs in and is redirected back to your app (configured as the redirect URI)."}),"\n"]}),"\n",(0,i.jsx)(r.Ay,{}),"\n",(0,i.jsx)(n.hr,{})]})}function c(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},78551:(e,n,t)=>{t.d(n,{A:()=>s});t(30758);var i=t(13526);const o={tabItem:"tabItem_PGP0"};var r=t(86070);function s(e){let{children:n,hidden:t,className:s}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,i.A)(o.tabItem,s),hidden:t,children:n})}},77501:(e,n,t)=>{t.d(n,{A:()=>w});var i=t(30758),o=t(13526),r=t(65052),s=t(25557),a=t(77469),c=t(50873),l=t(62230),d=t(60196);function h(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,i.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:t,attributes:i,default:o}}=e;return{value:n,label:t,attributes:i,default:o}}))}(t);return function(e){const n=(0,l.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function u(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const o=(0,s.W6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c.aZ)(r),(0,i.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(o.location.search);n.set(r,e),o.replace({...o.location,search:n.toString()})}),[r,o])]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:o}=e,r=p(e),[s,c]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!u({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=t.find((e=>e.default))??t[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:r}))),[l,h]=g({queryString:t,groupId:o}),[x,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,r]=(0,d.Dv)(t);return[o,(0,i.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:o}),j=(()=>{const e=l??x;return u({value:e,tabValues:r})?e:null})();(0,a.A)((()=>{j&&c(j)}),[j]);return{selectedValue:s,selectValue:(0,i.useCallback)((e=>{if(!u({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);c(e),h(e),m(e)}),[h,m,r]),tabValues:r}}var m=t(13887);const j={tabList:"tabList_CGfx",tabItem:"tabItem_JX1E"};var f=t(86070);function y(e){let{className:n,block:t,selectedValue:i,selectValue:s,tabValues:a}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,r.a_)(),d=e=>{const n=e.currentTarget,t=c.indexOf(n),o=a[t].value;o!==i&&(l(n),s(o))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":t},n),children:a.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>c.push(e),onKeyDown:h,onClick:d,...r,className:(0,o.A)("tabs__item",j.tabItem,r?.className,{"tabs__item--active":i===n}),children:t??n},n)}))})}function b(e){let{lazy:n,children:t,selectedValue:r}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===r));return e?(0,i.cloneElement)(e,{className:(0,o.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function v(e){const n=x(e);return(0,f.jsxs)("div",{className:(0,o.A)("tabs-container",j.tabList),children:[(0,f.jsx)(y,{...n,...e}),(0,f.jsx)(b,{...n,...e})]})}function w(e){const n=(0,m.A)();return(0,f.jsx)(v,{...e,children:h(e.children)},String(n))}},73977:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/connector-tab-passwordless-9939bc0a0a5bbf8821d700cf9a25b825.png"},81684:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/framework-list-fa8640804a64dea54236744f3287635b.png"},13885:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/get-started-82fd0b8e277e116b01ce1ccaa1b04c8d.png"},3466:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/save-changes-cc32c907e69d5d865b13ee0449e34822.png"},16906:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/sie-tab-12b63a01ce248b8eb8edd1cfd796cb1b.png"},15658:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var i=t(30758);const o={},r=i.createContext(o);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:n},e.children)}},19710:e=>{e.exports=JSON.parse('{"permalink":"/pt-BR/tutorial/how-to-build-sendgrid-sign-in-with-expo-react-native-and-logto","source":"@site/tutorial/build-with-logto/generated-expo-react-native-sendgrid.mdx","title":"How to build SendGrid Email passwordless sign-in with Expo (React Native) and Logto","description":"{/*","date":"2024-12-01T01:38:57.000Z","tags":[{"inline":true,"label":"authentication","permalink":"/pt-BR/tutorial/tags/authentication"},{"inline":true,"label":"sendgrid","permalink":"/pt-BR/tutorial/tags/sendgrid"},{"inline":true,"label":"expo-react-native","permalink":"/pt-BR/tutorial/tags/expo-react-native"},{"inline":true,"label":"js","permalink":"/pt-BR/tutorial/tags/js"},{"inline":true,"label":"passwordless-sign-in","permalink":"/pt-BR/tutorial/tags/passwordless-sign-in"},{"inline":true,"label":"sign-in","permalink":"/pt-BR/tutorial/tags/sign-in"},{"inline":true,"label":"login","permalink":"/pt-BR/tutorial/tags/login"}],"readingTime":1.3,"hasTruncateMarker":true,"authors":[{"name":"Logto team","title":"The better identity infrastructure for developers","url":"https://logto.io","imageURL":"https://github.com/logto-io.png","key":"logto","page":null}],"frontMatter":{"slug":"how-to-build-sendgrid-sign-in-with-expo-react-native-and-logto","authors":"logto","tags":["authentication","sendgrid","expo-react-native","js","passwordless-sign-in","sign-in","login"],"title":"How to build SendGrid Email passwordless sign-in with Expo (React Native) and Logto"},"unlisted":false,"prevItem":{"title":"How to build SAML sign-in with Expo (React Native) and Logto","permalink":"/pt-BR/tutorial/how-to-build-saml-sign-in-with-expo-react-native-and-logto"},"nextItem":{"title":"How to build Twilio SMS passwordless sign-in with Expo (React Native) and Logto","permalink":"/pt-BR/tutorial/how-to-build-twilio-sign-in-with-expo-react-native-and-logto"}}')}}]);