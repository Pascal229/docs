"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[83312],{14524:(e,n,t)=>{t.d(n,{Ay:()=>a,RM:()=>r});var i=t(86070),o=t(15658);const r=[{value:"Enable Sign in with Apple for your app",id:"enable-sign-in-with-apple-for-your-app",level:3},{value:"Create an identifier",id:"create-an-identifier",level:3},{value:"Enable Sign in with Apple for your identifier",id:"enable-sign-in-with-apple-for-your-identifier",level:3},{value:"Compose the connector JSON",id:"compose-the-connector-json",level:3}];function s(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["\u2139\ufe0f ",(0,i.jsx)(n.strong,{children:"Note"})]}),"\n",(0,i.jsx)(n.p,{children:"Apple sign-in is required for AppStore if you have other social sign-in methods in your app.\nHaving Apple sign-in on Android devices is great if you also provide an Android app."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["You need to enroll ",(0,i.jsx)(n.a,{href:"https://developer.apple.com/programs/",children:"Apple Developer Program"})," before continuing."]}),"\n",(0,i.jsx)(n.h3,{id:"enable-sign-in-with-apple-for-your-app",children:"Enable Sign in with Apple for your app"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["\u26a0\ufe0f ",(0,i.jsx)(n.strong,{children:"Caution"})]}),"\n",(0,i.jsx)(n.p,{children:"Even if you want to implement Sign in with Apple on a web app only, you still need to have an existing app that embraces the AppStore ecosystem (i.e., have a valid App ID)."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["You can do it via Xcode -> Project settings -> Signing & Capabilities, or visit ",(0,i.jsx)(n.a,{href:"https://developer.apple.com/account/resources/identifiers/list/bundleId",children:"Certificates, Identifiers & Profiles"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Enable Sign in with Apple",src:t(6016).A+"",width:"1220",height:"398"})}),"\n",(0,i.jsxs)(n.p,{children:['See the "Enable an App ID" section in ',(0,i.jsx)(n.a,{href:"https://developer.apple.com/documentation/sign_in_with_apple/configuring_your_environment_for_sign_in_with_apple",children:"Apple official docs"})," for more info."]}),"\n",(0,i.jsx)(n.h3,{id:"create-an-identifier",children:"Create an identifier"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Visit ",(0,i.jsx)(n.a,{href:"https://developer.apple.com/account/resources/identifiers/list/serviceId",children:"Certificates, Identifiers & Profiles"}),', then click the "+" button next to "Identifier".']}),"\n",(0,i.jsx)(n.li,{children:'In the "Register a new identifier" page, choose "Services IDs" and click "Continue".'}),"\n",(0,i.jsxs)(n.li,{children:['Fill out "Description" and "Identifier" (E.g., ',(0,i.jsx)(n.code,{children:"Logto Test"})," and ",(0,i.jsx)(n.code,{children:"io.logto.test"}),'), then click "Continue".']}),"\n",(0,i.jsx)(n.li,{children:'Double-check the info and click "Register".'}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"enable-sign-in-with-apple-for-your-identifier",children:"Enable Sign in with Apple for your identifier"}),"\n",(0,i.jsx)(n.p,{children:'Click the identifier you just created. Check "Sign in with Apple" on the details page and click "Configure".'}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Enable Sign in with Apple",src:t(70758).A+"",width:"1170",height:"186"})}),"\n",(0,i.jsx)(n.p,{children:"In the opening modal, select the App ID you just enabled Sign in with Apple."}),"\n",(0,i.jsxs)(n.p,{children:["Enter the domain of your Logto instance without protocol and port, e.g., ",(0,i.jsx)(n.code,{children:"your.logto.domain"}),'; then enter the "Return URL" (i.e., Redirect URI), which is the Logto URL with ',(0,i.jsx)(n.code,{children:"/callback/${connector_id}"}),", e.g., ",(0,i.jsx)(n.code,{children:"https://your.logto.domain/callback/apple-universal"}),". You can get the randomly generated ",(0,i.jsx)(n.code,{children:"connector_id"})," after creating Apple connector in Admin Console."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"domain-and-url",src:t(80745).A+"",width:"988",height:"668"})}),"\n",(0,i.jsx)(n.p,{children:'Click "Next" then "Done" to close the modal. Click "Continue" on the top-right corner, then click "Save" to save your configuration.'}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["\u26a0\ufe0f ",(0,i.jsx)(n.strong,{children:"Caution"})]}),"\n",(0,i.jsxs)(n.p,{children:["Apple does NOT allow Return URLs with HTTP protocol and ",(0,i.jsx)(n.code,{children:"localhost"})," domain."]}),"\n",(0,i.jsxs)(n.p,{children:["If you want to test locally, you need to edit ",(0,i.jsx)(n.code,{children:"/etc/hosts"})," file to map localhost to a custom domain and set up a local HTTPS environment. ",(0,i.jsx)(n.a,{href:"https://github.com/FiloSottile/mkcert",children:"mkcert"})," can help you for setting up local HTTPS."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"compose-the-connector-json",children:"Compose the connector JSON"}),"\n",(0,i.jsxs)(n.p,{children:["You need to use the identifier that fills in the ",(0,i.jsx)(n.a,{href:"#create-an-identifier",children:"Create an identifier"})," section to compose the JSON:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "clientId": "io.logto.test"\n}\n'})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["\u2139\ufe0f ",(0,i.jsx)(n.strong,{children:"Note"})]}),"\n",(0,i.jsxs)(n.p,{children:["This connector doesn't support customizing ",(0,i.jsx)(n.code,{children:"scope"})," (e.g., name, email) yet since Apple requires ",(0,i.jsx)(n.code,{children:"form_post"})," response mode when ",(0,i.jsx)(n.code,{children:"scope"})," is not empty, which is incompatible with the current connector design."]}),"\n",(0,i.jsx)(n.p,{children:"We'll figure out this later."}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},89909:(e,n,t)=>{t.d(n,{Ay:()=>p,RM:()=>c});var i=t(86070),o=t(15658),r=t(74995),s=t(71129),a=t(36515),l=t(92409);const c=[...r.RM,{value:"Installation",id:"installation",level:3},...s.RM,...a.RM,...l.RM];function d(e){const n={h3:"h3",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.Ay,{}),"\n",(0,i.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,i.jsx)(s.Ay,{}),"\n",(0,i.jsx)(a.Ay,{}),"\n",(0,i.jsx)(l.Ay,{sdk:"Expo (React Native)"})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},37391:(e,n,t)=>{t.d(n,{Ay:()=>a,RM:()=>r});var i=t(86070),o=t(15658);const r=[];function s(e){const n={img:"img",p:"p",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:'To add a social connector, go to the "Connector" tab in the Admin Console, then click on "Social connectors". From there, click "Add social connector".'}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Connector tab",src:t(28084).A+"",width:"3352",height:"1226"})}),"\n",(0,i.jsxs)("p",{children:['In the openning modal, select "',e.connector,'" and click "Next".']}),"\n",(0,i.jsx)(n.p,{children:"On the next page, you will see a two-column layout with the README content on the left and configuration on the right."}),"\n",(0,i.jsx)(n.p,{children:"Feel free to follow the README file in place or read the following section to complete the configuration process. If you follow the in-place guide, you can skip the next section."})]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},23471:(e,n,t)=>{t.d(n,{Ay:()=>l,RM:()=>s});var i=t(86070),o=t(15658);const r=t.p+"assets/images/create-application-modal-136b6119e66a20d765a416417aeeefda.png",s=[{value:"Choose your application type",id:"choose-your-application-type",level:3},{value:"Enter application name",id:"enter-application-name",level:3}];function a(e){const n={code:"code",h3:"h3",img:"img",p:"p",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"In you browser, open a new tab and enter the link of Logto Admin Console."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Get Started",src:t(13885).A+"",width:"2354",height:"588"})}),"\n",(0,i.jsxs)(n.p,{children:['Once the page is loaded, in the "Get Started" section click the ',(0,i.jsx)(n.code,{children:"View all"})," link to open the application framework list page."]}),"\n",(0,i.jsx)(n.h3,{id:"choose-your-application-type",children:"Choose your application type"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Framework List",src:t(81684).A+"",width:"3626",height:"2804"})}),"\n",(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:['In the opening modal, scroll to the "',e.type,'" section or filter all the available "\n',e.type,'" frameworks using the quick filter checkboxes on the left.']})}),"\n",(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:["Click the"," ","\n",e.framework.split("/").map((e=>`"${e.trim()}"`)).join(" / ")," ","\nframework card to start creating your application."]})}),"\n",(0,i.jsx)(n.h3,{id:"enter-application-name",children:"Enter application name"}),"\n",(0,i.jsx)("center",{children:(0,i.jsx)("img",{src:r,alt:"Create Application modal",width:"700"})}),"\n",(0,i.jsx)(n.p,{children:'Enter the application name, e.g., "Bookstore," and click "Create application."'}),"\n",(0,i.jsx)(n.p,{children:"\ud83c\udf89 Ta-da! You just created your first application in Logto. You'll see a congrats page which includes a detailed integration guide. Follow the guide to see what the experience will be in your application."})]})}function l(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},42969:(e,n,t)=>{t.d(n,{Ay:()=>a,RM:()=>r});var i=t(86070),o=t(15658);const r=[];function s(e){const n={admonition:"admonition",img:"img",p:"p",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:'Switch to the "Sign-in experience" tab, then click the "Sign-up and sign-in" tab.'}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"If it's the first time you enter the tab, you will see a quick introduction about Sign-in Experience and its basic configuration."})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Sign-in Experience tab",src:t(16906).A+"",width:"3502",height:"1794"})}),"\n",(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:['Select "None" for the "Sign-up identifier" to provide minimum sign-up effort for ',e.connector," ","\nsign-in, which may increase your conversion rate."]})}),"\n",(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:['In the "Social sign-in" section, add "Add Social Connector" and choose "',e.connector,'". Then\nyou should be able to see a button with text "Continue with ',e.connector,'" in the preview\nsection.']})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Save changes",src:t(3466).A+"",width:"2474",height:"188"})}),"\n",(0,i.jsx)(n.p,{children:'Finally, click "Save changes" on the bottom right corner.'})]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},4914:(e,n,t)=>{t.d(n,{Ay:()=>a,RM:()=>r});var i=t(86070),o=t(15658);const r=[];function s(e){const n={a:"a",admonition:"admonition",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:["\n","\n",(0,i.jsx)(n.admonition,{title:"For our new friends",type:"info",children:(0,i.jsxs)(n.p,{children:["Every app needs authentication and authorization. ",(0,i.jsx)(n.a,{href:"https://logto.io",children:"Logto"})," is an Auth0 alternative designed for modern apps and SaaS products."]})}),"\n",(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:["In this article, we will go through the steps to quickly build the ",e.connector," sign-in\nexperience (user authentication) with ",(0,i.jsx)("a",{href:e.link,target:"_blank",rel:"noopener",children:e.sdk})," and\xa0\n",(0,i.jsx)("a",{href:"https://logto.io",target:"_blank",rel:"noopener",children:"Logto"}),"."]})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Prerequisites"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["A running Logto instance. Check out the ",(0,i.jsx)(n.a,{href:"/introduction",children:"introduction page"})," to get started."]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)("span",{children:["Basic knowledge of ",(0,i.jsx)("a",{href:e.link,target:"_blank",rel:"noopener",children:e.sdk}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)("span",{children:["A usable ",e.connector," account."]}),"\n"]}),"\n"]}),"\n"]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},37448:(e,n,t)=>{t.d(n,{Ay:()=>a,RM:()=>r});var i=t(86070),o=t(15658);const r=[];function s(e){const n={p:"p",...(0,o.R)(),...e.components};return(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:['Double check you have filled out necessary values in the Logto connector configuration area. Click\n"Save and Done" (or "Save changes") and the ',e.connector," connector should be available now."]})})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},92409:(e,n,t)=>{t.d(n,{Ay:()=>a,RM:()=>r});var i=t(86070),o=t(15658);const r=[];function s(e){const n={admonition:"admonition",p:"p",...(0,o.R)(),...e.components};return(0,i.jsx)(n.admonition,{title:"Test your integration",type:"info",children:(0,i.jsxs)(n.p,{children:["Open your ",e.sdk,' app to test if the integration works. When you click the "Sign In" button,\nthe page should be redirected to a Logto sign-in page, and you should be able to create a new\naccount by entering username and password and complete the sign-in process.']})})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},52878:(e,n,t)=>{t.d(n,{Ay:()=>a,RM:()=>r});var i=t(86070),o=t(15658);const r=[];function s(e){const n={p:"p",...(0,o.R)(),...e.components};return(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:["Return to your ",e.sdk," app. You should now be able to sign in with ",e.connector,". Enjoy!"]})})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},75790:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,connector:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var i=t(98798),o=t(86070),r=t(15658);t(4914),t(23471),t(37391),t(37448),t(42969),t(52878),t(89909),t(14524);const s={slug:"how-to-build-apple-sign-in-with-expo-react-native-and-logto",authors:"logto",tags:["authentication","apple","expo-react-native","js","social-sign-in","sign-in","login"],title:"How to build Apple sign-in with Expo (React Native) and Logto"},a=void 0,l={authorsImageUrls:[void 0]},c="Apple",d=[];function p(e){return(0,o.jsx)(o.Fragment,{})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p()}},29177:(e,n,t)=>{t.d(n,{Ay:()=>a,RM:()=>r});var i=t(86070),o=t(15658);const r=[{value:"Checkpoint: Test your application",id:"checkpoint-test-your-application",level:3}];function s(e){const n={h3:"h3",li:"li",ol:"ol",p:"p",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h3,{id:"checkpoint-test-your-application",children:"Checkpoint: Test your application"}),"\n",(0,i.jsx)(n.p,{children:"Now, you can test your application:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Run your application, you will see the sign-in button."}),"\n",(0,i.jsx)(n.li,{children:"Click the sign-in button, the SDK will init the sign-in process and redirect you to the Logto sign-in page."}),"\n",(0,i.jsx)(n.li,{children:"After you signed in, you will be redirected back to your application and see the sign-out button."}),"\n",(0,i.jsx)(n.li,{children:"Click the sign-out button to clear local storage and sign out."}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},68347:(e,n,t)=>{t.d(n,{Ay:()=>a,RM:()=>r});var i=t(86070),o=t(15658);const r=[];function s(e){const n={a:"a",li:"li",ol:"ol",p:"p",...(0,o.R)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(t,{children:[(0,i.jsx)("summary",{children:"Regarding redirect-based sign-in"}),(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["This authentication process follows the ",(0,i.jsx)(n.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html",children:"OpenID Connect (OIDC)"})," protocol, and Logto enforces strict security measures to protect user sign-in."]}),"\n",(0,i.jsx)(n.li,{children:"If you have multiple apps, you can use the same identity provider (Logto). Once the user signs in to one app, Logto will automatically complete the sign-in process when the user accesses another app."}),"\n"]}),(0,i.jsxs)(n.p,{children:["To learn more about the rationale and benefits of redirect-based sign-in, see ",(0,i.jsx)(n.a,{href:"/concepts/sign-in-experience",children:"Logto sign-in experience explained"}),"."]})]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},87585:(e,n,t)=>{t.d(n,{Ay:()=>l,RM:()=>s});var i=t(86070),o=t(15658),r=t(68347);const s=[...r.RM];function a(e){const n={hr:"hr",li:"li",mermaid:"mermaid",ol:"ol",p:"p",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Before we dive into the details, here's a quick overview of the end-user experience. The sign-in process can be simplified as follows:"}),"\n",(0,i.jsx)(n.mermaid,{value:"graph LR\n    A(Your app) --\x3e|1. Invoke sign-in| B(Logto)\n    B --\x3e|2. Finish sign-in| A"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Your app invokes the sign-in method."}),"\n",(0,i.jsx)(n.li,{children:"The user is redirected to the Logto sign-in page. For native apps, the system browser is opened."}),"\n",(0,i.jsx)(n.li,{children:"The user signs in and is redirected back to your app (configured as the redirect URI)."}),"\n"]}),"\n",(0,i.jsx)(r.Ay,{}),"\n",(0,i.jsx)(n.hr,{})]})}function l(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},74995:(e,n,t)=>{t.d(n,{Ay:()=>a,RM:()=>r});var i=t(86070),o=t(15658);const r=[];function s(e){const n={a:"a",admonition:"admonition",li:"li",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The following demonstration is built on Expo ~50.0.6."}),"\n",(0,i.jsxs)(n.li,{children:["The sample project is available on our ",(0,i.jsx)(n.a,{href:"https://github.com/logto-io/react-native/tree/master/packages/rn-sample",children:"SDK repository"}),"."]}),"\n"]})})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},71129:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>a});var i=t(86070),o=t(15658),r=t(78551),s=t(77501);const a=[];function l(e){const n={a:"a",admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Install Logto SDK and peer dependencies via your favorite package manager:"}),"\n",(0,i.jsxs)(s.A,{children:[(0,i.jsx)(r.A,{value:"npm",label:"npm",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm i @logto/rn\nnpm i expo-crypto expo-secure-store expo-web-browser @react-native-async-storage/async-storage\n"})})}),(0,i.jsx)(r.A,{value:"yarn",label:"Yarn",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"yarn add @logto/rn\nyarn add expo-crypto expo-secure-store expo-web-browser @react-native-async-storage/async-storage\n"})})}),(0,i.jsx)(r.A,{value:"pnpm",label:"pnpm",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"pnpm add @logto/rn\npnpm add expo-crypto expo-secure-store expo-web-browser @react-native-async-storage/async-storage\n"})})})]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"@logto/rn"})," package is the SDK for Logto. The remaining packages are its peer dependencies. They couldn't be listed as direct dependencies because the Expo CLI requires that all dependencies for native modules be installed directly within the root project's ",(0,i.jsx)(n.code,{children:"package.json"}),"."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["If you're installing this in a ",(0,i.jsx)(n.a,{href:"https://docs.expo.dev/bare/overview",children:"bare React Native app"}),", you should also follow these ",(0,i.jsx)(n.a,{href:"https://docs.expo.dev/bare/installing-expo-modules/",children:"additional installation instructions"}),"."]})})]})}function c(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},36515:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>a});var i=t(86070),o=t(15658),r=t(29177),s=t(87585);const a=[{value:"Init Logto provider",id:"init-logto-provider",level:3},{value:"Implement sign-in and sign-out",id:"implement-sign-in-and-sign-out",level:3},...s.RM,...r.RM];function l(e){const n={code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h3,{id:"init-logto-provider",children:"Init Logto provider"}),"\n",(0,i.jsxs)(n.p,{children:["Import and use ",(0,i.jsx)(n.code,{children:"LogtoProvider"})," to provide a Logto context:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",metastring:'title="App.tsx"',children:"import { LogtoProvider, LogtoConfig } from '@logto/rn';\n\nconst config: LogtoConfig = {\n  endpoint: '<your-logto-endpoint>',\n  appId: '<your-application-id>',\n};\n\nconst App = () => (\n  <LogtoProvider config={config}>\n    <YourAppContent />\n  </LogtoProvider>\n);\n"})}),"\n",(0,i.jsx)(n.h3,{id:"implement-sign-in-and-sign-out",children:"Implement sign-in and sign-out"}),"\n",(0,i.jsx)(s.Ay,{}),"\n",(0,i.jsxs)(n.p,{children:["Switch to the application details page of Logto Console. Add a native redirect URI (for example, ",(0,i.jsx)(n.code,{children:"io.logto://callback"}),'), then click "Save".']}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["For iOS, the redirect URI scheme does not really matter since the ",(0,i.jsx)(n.code,{children:"ASWebAuthenticationSession"})," class will listen to the redirect URI regardless of if it's registered."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["For Android, the redirect URI scheme must be filled in Expo's ",(0,i.jsx)(n.code,{children:"app.json"})," file, for example:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",metastring:'title="app.json"',children:'{\n  "expo": {\n    "scheme": "io.logto"\n  }\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Now back to your app, you can use ",(0,i.jsx)(n.code,{children:"useLogto"})," hook to sign in and sign out:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",metastring:'title="App.tsx"',children:"import { useLogto } from '@logto/rn';\nimport { Button } from 'react-native';\n\nconst Content = () => {\n  const { signIn, signOut, isAuthenticated } = useLogto();\n\n  return (\n    <div>\n      {isAuthenticated ? (\n        <Button title=\"Sign out\" onPress={async () => signOut()} />\n      ) : (\n        // Replace the redirect URI with your own\n        <Button title=\"Sign in\" onPress={async () => signIn('io.logto://callback')} />\n      )}\n    </div>\n  );\n};\n"})}),"\n",(0,i.jsx)(r.Ay,{})]})}function c(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},78551:(e,n,t)=>{t.d(n,{A:()=>s});t(30758);var i=t(13526);const o={tabItem:"tabItem_PGP0"};var r=t(86070);function s(e){let{children:n,hidden:t,className:s}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,i.A)(o.tabItem,s),hidden:t,children:n})}},77501:(e,n,t)=>{t.d(n,{A:()=>w});var i=t(30758),o=t(13526),r=t(65052),s=t(25557),a=t(77469),l=t(50873),c=t(62230),d=t(60196);function p(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,i.useMemo)((()=>{const e=n??function(e){return p(e).map((e=>{let{props:{value:n,label:t,attributes:i,default:o}}=e;return{value:n,label:t,attributes:i,default:o}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function u(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const o=(0,s.W6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(r),(0,i.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(o.location.search);n.set(r,e),o.replace({...o.location,search:n.toString()})}),[r,o])]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:o}=e,r=h(e),[s,l]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!u({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=t.find((e=>e.default))??t[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:r}))),[c,p]=g({queryString:t,groupId:o}),[x,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,r]=(0,d.Dv)(t);return[o,(0,i.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:o}),j=(()=>{const e=c??x;return u({value:e,tabValues:r})?e:null})();(0,a.A)((()=>{j&&l(j)}),[j]);return{selectedValue:s,selectValue:(0,i.useCallback)((e=>{if(!u({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),p(e),m(e)}),[p,m,r]),tabValues:r}}var m=t(13887);const j={tabList:"tabList_CGfx",tabItem:"tabItem_JX1E"};var f=t(86070);function b(e){let{className:n,block:t,selectedValue:i,selectValue:s,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),o=a[t].value;o!==i&&(c(n),s(o))},p=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":t},n),children:a.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>l.push(e),onKeyDown:p,onClick:d,...r,className:(0,o.A)("tabs__item",j.tabItem,r?.className,{"tabs__item--active":i===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:r}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===r));return e?(0,i.cloneElement)(e,{className:(0,o.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function y(e){const n=x(e);return(0,f.jsxs)("div",{className:(0,o.A)("tabs-container",j.tabList),children:[(0,f.jsx)(b,{...n,...e}),(0,f.jsx)(v,{...n,...e})]})}function w(e){const n=(0,m.A)();return(0,f.jsx)(y,{...e,children:p(e.children)},String(n))}},28084:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/connector-tab-social-4e3d582ddc28ceeee3bc3abcb30d4ec0.png"},80745:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/domain-and-url-f8f432e8a15c2c1cdf9e59b1a2b72049.png"},6016:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/enable-sign-in-with-apple-in-xcode-26680889a51468c3671f3011fd44b5f1.png"},70758:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/enable-sign-in-with-apple-42664e79db1a8966b1fc626a4bb67269.png"},81684:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/framework-list-fa8640804a64dea54236744f3287635b.png"},13885:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/get-started-82fd0b8e277e116b01ce1ccaa1b04c8d.png"},3466:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/save-changes-cc32c907e69d5d865b13ee0449e34822.png"},16906:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/sie-tab-12b63a01ce248b8eb8edd1cfd796cb1b.png"},15658:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var i=t(30758);const o={},r=i.createContext(o);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:n},e.children)}},98798:e=>{e.exports=JSON.parse('{"permalink":"/tutorial/how-to-build-apple-sign-in-with-expo-react-native-and-logto","source":"@site/tutorial/build-with-logto/generated-expo-react-native-apple.mdx","title":"How to build Apple sign-in with Expo (React Native) and Logto","description":"{/*","date":"2024-11-27T06:25:57.000Z","tags":[{"inline":true,"label":"authentication","permalink":"/tutorial/tags/authentication"},{"inline":true,"label":"apple","permalink":"/tutorial/tags/apple"},{"inline":true,"label":"expo-react-native","permalink":"/tutorial/tags/expo-react-native"},{"inline":true,"label":"js","permalink":"/tutorial/tags/js"},{"inline":true,"label":"social-sign-in","permalink":"/tutorial/tags/social-sign-in"},{"inline":true,"label":"sign-in","permalink":"/tutorial/tags/sign-in"},{"inline":true,"label":"login","permalink":"/tutorial/tags/login"}],"readingTime":1.28,"hasTruncateMarker":true,"authors":[{"name":"Logto team","title":"The better identity infrastructure for developers","url":"https://logto.io","imageURL":"https://github.com/logto-io.png","key":"logto","page":null}],"frontMatter":{"slug":"how-to-build-apple-sign-in-with-expo-react-native-and-logto","authors":"logto","tags":["authentication","apple","expo-react-native","js","social-sign-in","sign-in","login"],"title":"How to build Apple sign-in with Expo (React Native) and Logto"},"unlisted":false,"prevItem":{"title":"How to build Twilio SMS passwordless sign-in with .NET Core (Razor Pages) and Logto","permalink":"/tutorial/how-to-build-twilio-sign-in-with-dotnet-core-razor-pages-and-logto"},"nextItem":{"title":"How to build AWS SES Email passwordless sign-in with Expo (React Native) and Logto","permalink":"/tutorial/how-to-build-aws-ses-sign-in-with-expo-react-native-and-logto"}}')}}]);