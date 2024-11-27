"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[63973],{54721:(e,n,i)=>{i.d(n,{Ay:()=>a,RM:()=>s});var t=i(86070),o=i(15658);const s=[{value:"Enable Sign in with Apple for your app",id:"enable-sign-in-with-apple-for-your-app",level:3},{value:"Create an identifier",id:"create-an-identifier",level:3},{value:"Enable Sign in with Apple for your identifier",id:"enable-sign-in-with-apple-for-your-identifier",level:3},{value:"Compose the connector JSON",id:"compose-the-connector-json",level:3}];function r(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["\u2139\ufe0f ",(0,t.jsx)(n.strong,{children:"Note"})]}),"\n",(0,t.jsx)(n.p,{children:"Apple sign-in is required for AppStore if you have other social sign-in methods in your app.\nHaving Apple sign-in on Android devices is great if you also provide an Android app."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["You need to enroll ",(0,t.jsx)(n.a,{href:"https://developer.apple.com/programs/",children:"Apple Developer Program"})," before continuing."]}),"\n",(0,t.jsx)(n.h3,{id:"enable-sign-in-with-apple-for-your-app",children:"Enable Sign in with Apple for your app"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["\u26a0\ufe0f ",(0,t.jsx)(n.strong,{children:"Caution"})]}),"\n",(0,t.jsx)(n.p,{children:"Even if you want to implement Sign in with Apple on a web app only, you still need to have an existing app that embraces the AppStore ecosystem (i.e., have a valid App ID)."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["You can do it via Xcode -> Project settings -> Signing & Capabilities, or visit ",(0,t.jsx)(n.a,{href:"https://developer.apple.com/account/resources/identifiers/list/bundleId",children:"Certificates, Identifiers & Profiles"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Enable Sign in with Apple",src:i(6016).A+"",width:"1220",height:"398"})}),"\n",(0,t.jsxs)(n.p,{children:['See the "Enable an App ID" section in ',(0,t.jsx)(n.a,{href:"https://developer.apple.com/documentation/sign_in_with_apple/configuring_your_environment_for_sign_in_with_apple",children:"Apple official docs"})," for more info."]}),"\n",(0,t.jsx)(n.h3,{id:"create-an-identifier",children:"Create an identifier"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Visit ",(0,t.jsx)(n.a,{href:"https://developer.apple.com/account/resources/identifiers/list/serviceId",children:"Certificates, Identifiers & Profiles"}),', then click the "+" button next to "Identifier".']}),"\n",(0,t.jsx)(n.li,{children:'In the "Register a new identifier" page, choose "Services IDs" and click "Continue".'}),"\n",(0,t.jsxs)(n.li,{children:['Fill out "Description" and "Identifier" (E.g., ',(0,t.jsx)(n.code,{children:"Logto Test"})," and ",(0,t.jsx)(n.code,{children:"io.logto.test"}),'), then click "Continue".']}),"\n",(0,t.jsx)(n.li,{children:'Double-check the info and click "Register".'}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"enable-sign-in-with-apple-for-your-identifier",children:"Enable Sign in with Apple for your identifier"}),"\n",(0,t.jsx)(n.p,{children:'Click the identifier you just created. Check "Sign in with Apple" on the details page and click "Configure".'}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Enable Sign in with Apple",src:i(70758).A+"",width:"1170",height:"186"})}),"\n",(0,t.jsx)(n.p,{children:"In the opening modal, select the App ID you just enabled Sign in with Apple."}),"\n",(0,t.jsxs)(n.p,{children:["Enter the domain of your Logto instance without protocol and port, e.g., ",(0,t.jsx)(n.code,{children:"your.logto.domain"}),'; then enter the "Return URL" (i.e., Redirect URI), which is the Logto URL with ',(0,t.jsx)(n.code,{children:"/callback/${connector_id}"}),", e.g., ",(0,t.jsx)(n.code,{children:"https://your.logto.domain/callback/apple-universal"}),". You can get the randomly generated ",(0,t.jsx)(n.code,{children:"connector_id"})," after creating Apple connector in Admin Console."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"domain-and-url",src:i(80745).A+"",width:"988",height:"668"})}),"\n",(0,t.jsx)(n.p,{children:'Click "Next" then "Done" to close the modal. Click "Continue" on the top-right corner, then click "Save" to save your configuration.'}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["\u26a0\ufe0f ",(0,t.jsx)(n.strong,{children:"Caution"})]}),"\n",(0,t.jsxs)(n.p,{children:["Apple does NOT allow Return URLs with HTTP protocol and ",(0,t.jsx)(n.code,{children:"localhost"})," domain."]}),"\n",(0,t.jsxs)(n.p,{children:["If you want to test locally, you need to edit ",(0,t.jsx)(n.code,{children:"/etc/hosts"})," file to map localhost to a custom domain and set up a local HTTPS environment. ",(0,t.jsx)(n.a,{href:"https://github.com/FiloSottile/mkcert",children:"mkcert"})," can help you for setting up local HTTPS."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"compose-the-connector-json",children:"Compose the connector JSON"}),"\n",(0,t.jsxs)(n.p,{children:["You need to use the identifier that fills in the ",(0,t.jsx)(n.a,{href:"#create-an-identifier",children:"Create an identifier"})," section to compose the JSON:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "clientId": "io.logto.test"\n}\n'})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["\u2139\ufe0f ",(0,t.jsx)(n.strong,{children:"Note"})]}),"\n",(0,t.jsxs)(n.p,{children:["This connector doesn't support customizing ",(0,t.jsx)(n.code,{children:"scope"})," (e.g., name, email) yet since Apple requires ",(0,t.jsx)(n.code,{children:"form_post"})," response mode when ",(0,t.jsx)(n.code,{children:"scope"})," is not empty, which is incompatible with the current connector design."]}),"\n",(0,t.jsx)(n.p,{children:"We'll figure out this later."}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}},719:(e,n,i)=>{i.d(n,{Ay:()=>p,RM:()=>l});var t=i(86070),o=i(15658),s=i(93210),r=i(41124),a=i(1826),c=i(41440);const l=[{value:"Add Logto SDK as a dependency",id:"add-logto-sdk-as-a-dependency",level:3},...s.RM,{value:"Init LogtoClient",id:"init-logtoclient",level:3},...a.RM,{value:"Sign in",id:"sign-in",level:3},...r.RM,...c.RM];function d(e){const n={h3:"h3",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h3,{id:"add-logto-sdk-as-a-dependency",children:"Add Logto SDK as a dependency"}),"\n",(0,t.jsx)(s.Ay,{}),"\n",(0,t.jsx)(n.h3,{id:"init-logtoclient",children:"Init LogtoClient"}),"\n",(0,t.jsx)(a.Ay,{}),"\n",(0,t.jsx)(n.h3,{id:"sign-in",children:"Sign in"}),"\n",(0,t.jsx)(r.Ay,{}),"\n",(0,t.jsx)(c.Ay,{sdk:"iOS"})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},20516:(e,n,i)=>{i.d(n,{Ay:()=>a,RM:()=>s});var t=i(86070),o=i(15658);const s=[];function r(e){const n={img:"img",p:"p",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:'To add a social connector, go to the "Connector" tab in the Admin Console, then click on "Social connectors". From there, click "Add social connector".'}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Connector tab",src:i(28084).A+"",width:"3352",height:"1226"})}),"\n",(0,t.jsxs)("p",{children:['In the openning modal, select "',e.connector,'" and click "Next".']}),"\n",(0,t.jsx)(n.p,{children:"On the next page, you will see a two-column layout with the README content on the left and configuration on the right."}),"\n",(0,t.jsx)(n.p,{children:"Feel free to follow the README file in place or read the following section to complete the configuration process. If you follow the in-place guide, you can skip the next section."})]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}},2297:(e,n,i)=>{i.d(n,{Ay:()=>c,RM:()=>r});var t=i(86070),o=i(15658);const s=i.p+"assets/images/create-application-modal-136b6119e66a20d765a416417aeeefda.png",r=[{value:"Choose your application type",id:"choose-your-application-type",level:3},{value:"Enter application name",id:"enter-application-name",level:3}];function a(e){const n={code:"code",h3:"h3",img:"img",p:"p",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"In you browser, open a new tab and enter the link of Logto Admin Console."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Get Started",src:i(13885).A+"",width:"2354",height:"588"})}),"\n",(0,t.jsxs)(n.p,{children:['Once the page is loaded, in the "Get Started" section click the ',(0,t.jsx)(n.code,{children:"View all"})," link to open the application framework list page."]}),"\n",(0,t.jsx)(n.h3,{id:"choose-your-application-type",children:"Choose your application type"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Framework List",src:i(81684).A+"",width:"3626",height:"2804"})}),"\n",(0,t.jsx)("p",{children:(0,t.jsxs)(n.p,{children:['In the opening modal, scroll to the "',e.type,'" section or filter all the available "\n',e.type,'" frameworks using the quick filter checkboxes on the left.']})}),"\n",(0,t.jsx)("p",{children:(0,t.jsxs)(n.p,{children:["Click the"," ","\n",e.framework.split("/").map((e=>`"${e.trim()}"`)).join(" / ")," ","\nframework card to start creating your application."]})}),"\n",(0,t.jsx)(n.h3,{id:"enter-application-name",children:"Enter application name"}),"\n",(0,t.jsx)("center",{children:(0,t.jsx)("img",{src:s,alt:"Create Application modal",width:"700"})}),"\n",(0,t.jsx)(n.p,{children:'Enter the application name, e.g., "Bookstore," and click "Create application."'}),"\n",(0,t.jsx)(n.p,{children:"\ud83c\udf89 Ta-da! You just created your first application in Logto. You'll see a congrats page which includes a detailed integration guide. Follow the guide to see what the experience will be in your application."})]})}function c(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},57452:(e,n,i)=>{i.d(n,{Ay:()=>a,RM:()=>s});var t=i(86070),o=i(15658);const s=[];function r(e){const n={admonition:"admonition",img:"img",p:"p",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:'Switch to the "Sign-in experience" tab, then click the "Sign-up and sign-in" tab.'}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"If it's the first time you enter the tab, you will see a quick introduction about Sign-in Experience and its basic configuration."})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Sign-in Experience tab",src:i(16906).A+"",width:"3502",height:"1794"})}),"\n",(0,t.jsx)("p",{children:(0,t.jsxs)(n.p,{children:['Select "None" for the "Sign-up identifier" to provide minimum sign-up effort for ',e.connector," ","\nsign-in, which may increase your conversion rate."]})}),"\n",(0,t.jsx)("p",{children:(0,t.jsxs)(n.p,{children:['In the "Social sign-in" section, add "Add Social Connector" and choose "',e.connector,'". Then\nyou should be able to see a button with text "Continue with ',e.connector,'" in the preview\nsection.']})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Save changes",src:i(3466).A+"",width:"2474",height:"188"})}),"\n",(0,t.jsx)(n.p,{children:'Finally, click "Save changes" on the bottom right corner.'})]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}},65159:(e,n,i)=>{i.d(n,{Ay:()=>a,RM:()=>s});var t=i(86070),o=i(15658);const s=[];function r(e){const n={a:"a",admonition:"admonition",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:["\n","\n",(0,t.jsx)(n.admonition,{title:"For our new friends",type:"info",children:(0,t.jsxs)(n.p,{children:["Every app needs authentication and authorization. ",(0,t.jsx)(n.a,{href:"https://logto.io",children:"Logto"})," is an Auth0 alternative designed for modern apps and SaaS products."]})}),"\n",(0,t.jsx)("p",{children:(0,t.jsxs)(n.p,{children:["In this article, we will go through the steps to quickly build the ",e.connector," sign-in\nexperience (user authentication) with ",(0,t.jsx)("a",{href:e.link,target:"_blank",rel:"noopener",children:e.sdk})," and\xa0\n",(0,t.jsx)("a",{href:"https://logto.io",target:"_blank",rel:"noopener",children:"Logto"}),"."]})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Prerequisites"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["A running Logto instance. Check out the ",(0,t.jsx)(n.a,{href:"/introduction",children:"introduction page"})," to get started."]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)("span",{children:["Basic knowledge of ",(0,t.jsx)("a",{href:e.link,target:"_blank",rel:"noopener",children:e.sdk}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)("span",{children:["A usable ",e.connector," account."]}),"\n"]}),"\n"]}),"\n"]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}},93857:(e,n,i)=>{i.d(n,{Ay:()=>a,RM:()=>s});var t=i(86070),o=i(15658);const s=[];function r(e){const n={p:"p",...(0,o.R)(),...e.components};return(0,t.jsx)("p",{children:(0,t.jsxs)(n.p,{children:['Double check you have filled out necessary values in the Logto connector configuration area. Click\n"Save and Done" (or "Save changes") and the ',e.connector," connector should be available now."]})})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}},41440:(e,n,i)=>{i.d(n,{Ay:()=>a,RM:()=>s});var t=i(86070),o=i(15658);const s=[];function r(e){const n={admonition:"admonition",p:"p",...(0,o.R)(),...e.components};return(0,t.jsx)(n.admonition,{title:"Test your integration",type:"info",children:(0,t.jsxs)(n.p,{children:["Open your ",e.sdk,' app to test if the integration works. When you click the "Sign In" button,\nthe page should be redirected to a Logto sign-in page, and you should be able to create a new\naccount by entering username and password and complete the sign-in process.']})})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}},35317:(e,n,i)=>{i.d(n,{Ay:()=>a,RM:()=>s});var t=i(86070),o=i(15658);const s=[];function r(e){const n={p:"p",...(0,o.R)(),...e.components};return(0,t.jsx)("p",{children:(0,t.jsxs)(n.p,{children:["Return to your ",e.sdk," app. You should now be able to sign in with ",e.connector,". Enjoy!"]})})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}},45965:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>x,connector:()=>f,contentTitle:()=>j,default:()=>w,frontMatter:()=>g,metadata:()=>t,toc:()=>m});var t=i(1813),o=i(86070),s=i(15658),r=i(65159),a=i(2297),c=i(20516),l=i(93857),d=i(57452),p=i(35317),h=i(719),u=i(54721);const g={slug:"how-to-build-apple-sign-in-with-ios-swift-and-logto",authors:"logto",tags:["authentication","apple","ios-swift","swift","social-sign-in","sign-in","login"],title:"How to build Apple sign-in with iOS Swift and Logto"},j=void 0,x={authorsImageUrls:[void 0]},f="Apple",m=[...r.RM,{value:"Create an application in Logto",id:"create-an-application-in-logto",level:2},...a.RM,{value:"Integrate Logto SDK",id:"integrate-logto-sdk",level:2},...h.RM,{value:"Add Apple connector",id:"add-apple-connector",level:2},...c.RM,{value:"Set up Apple Sign-in",id:"set-up-apple-sign-in",level:2},...u.RM,{value:"Save your configuration",id:"save-your-configuration",level:2},...l.RM,{value:"Enable Apple connector in Sign-in Experience",id:"enable-apple-connector-in-sign-in-experience",level:2},...d.RM,{value:"Testing and Validation",id:"testing-and-validation",level:2},...p.RM,{value:"Further readings",id:"further-readings",level:2}];function A(e){const n={a:"a",h2:"h2",p:"p",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:["\n","\n","\n","\n",(0,o.jsx)(r.Ay,{connector:f,sdk:"iOS Swift",link:"https://developer.apple.com/ios/ "}),"\n",(0,o.jsx)(n.h2,{id:"create-an-application-in-logto",children:"Create an application in Logto"}),"\n",(0,o.jsx)(a.Ay,{type:"Native app",framework:"iOS(Swift)"}),"\n",(0,o.jsx)(n.h2,{id:"integrate-logto-sdk",children:"Integrate Logto SDK"}),"\n",(0,o.jsx)(h.Ay,{}),"\n",(0,o.jsx)(n.h2,{id:"add-apple-connector",children:"Add Apple connector"}),"\n",(0,o.jsx)(c.Ay,{connector:f}),"\n",(0,o.jsx)(n.h2,{id:"set-up-apple-sign-in",children:"Set up Apple Sign-in"}),"\n",(0,o.jsx)(u.Ay,{}),"\n",(0,o.jsx)(n.h2,{id:"save-your-configuration",children:"Save your configuration"}),"\n",(0,o.jsx)(l.Ay,{connector:f}),"\n",(0,o.jsx)(n.h2,{id:"enable-apple-connector-in-sign-in-experience",children:"Enable Apple connector in Sign-in Experience"}),"\n",(0,o.jsx)(d.Ay,{connector:f}),"\n",(0,o.jsx)(n.h2,{id:"testing-and-validation",children:"Testing and Validation"}),"\n",(0,o.jsx)(p.Ay,{connector:f,sdk:"iOS Swift"}),"\n",(0,o.jsx)(n.h2,{id:"further-readings",children:"Further readings"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/authorization/api-resources/protect-your-api",children:"Protect your API"})," For native and single page apps, you'll need to call one or more API endpoints to retrieve and update data.",(0,o.jsx)("br",{}),"\nLearn more about identifying who's who and keeping your API secure."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/user-management",children:"User management"})," We know you care about user management and activities, as we also do.",(0,o.jsx)("br",{}),"\nLearn more about how to know your users and see the figures like DAU and MAU graphically."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/customization/localized-languages",children:"Localization"})," From one regional business to a global corporate, the willingness to offer the best user experience won't change.",(0,o.jsx)("br",{}),"\nYou can change current language phrases or add a new language without friction."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/blog/tags/ciam",children:"Customer IAM series"})," Our serial blog posts about Customer (or Consumer) Identity and Access Management, from 101 to advanced topics and beyond."]})]})}function w(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(A,{...e})}):A(e)}},96097:(e,n,i)=>{i.d(n,{Ay:()=>a,RM:()=>s});var t=i(86070),o=i(15658);const s=[];function r(e){const n={p:"p",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Let's switch to the Application details page of Logto Console. Add a Redirect URI ",(0,t.jsx)("code",{children:e.redirectUri}),' and click "Save changes".']}),"\n",(0,t.jsx)("img",{alt:"Redirect URI in Logto Console",src:e.figureSrc,width:"600px"})]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}},76073:(e,n,i)=>{i.d(n,{Ay:()=>a,RM:()=>s});var t=i(86070),o=i(15658);const s=[];function r(e){const n={a:"a",li:"li",ol:"ol",p:"p",...(0,o.R)(),...e.components},{Details:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(i,{children:[(0,t.jsx)("summary",{children:"Regarding redirect-based sign-in"}),(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["This authentication process follows the ",(0,t.jsx)(n.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html",children:"OpenID Connect (OIDC)"})," protocol, and Logto enforces strict security measures to protect user sign-in."]}),"\n",(0,t.jsx)(n.li,{children:"If you have multiple apps, you can use the same identity provider (Logto). Once the user signs in to one app, Logto will automatically complete the sign-in process when the user accesses another app."}),"\n"]}),(0,t.jsxs)(n.p,{children:["To learn more about the rationale and benefits of redirect-based sign-in, see ",(0,t.jsx)(n.a,{href:"/concepts/sign-in-experience",children:"Logto sign-in experience explained"}),"."]})]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}},25299:(e,n,i)=>{i.d(n,{Ay:()=>a,RM:()=>s});var t=i(86070),o=i(15658);const s=[];function r(e){const n={admonition:"admonition",p:"p",...(0,o.R)(),...e.components};return(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["Before calling ",(0,t.jsx)("code",{children:e.calling}),", make sure you have correctly configured Redirect URI\nin Admin Console."]})})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}},50259:(e,n,i)=>{i.d(n,{Ay:()=>c,RM:()=>r});var t=i(86070),o=i(15658),s=i(76073);const r=[...s.RM];function a(e){const n={hr:"hr",li:"li",mermaid:"mermaid",ol:"ol",p:"p",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Before we dive into the details, here's a quick overview of the end-user experience. The sign-in process can be simplified as follows:"}),"\n",(0,t.jsx)(n.mermaid,{value:"graph LR\n    A(Your app) --\x3e|1. Invoke sign-in| B(Logto)\n    B --\x3e|2. Finish sign-in| A"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Your app invokes the sign-in method."}),"\n",(0,t.jsx)(n.li,{children:"The user is redirected to the Logto sign-in page. For native apps, the system browser is opened."}),"\n",(0,t.jsx)(n.li,{children:"The user signs in and is redirected back to your app (configured as the redirect URI)."}),"\n"]}),"\n",(0,t.jsx)(s.Ay,{}),"\n",(0,t.jsx)(n.hr,{})]})}function c(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},93210:(e,n,i)=>{i.d(n,{Ay:()=>a,RM:()=>s});var t=i(86070),o=i(15658);const s=[];function r(e){const n={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components},{Details:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Use the following URL to add Logto SDK as a dependency in Swift Package Manager."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"https://github.com/logto-io/swift.git\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Since Xcode 11, you can ",(0,t.jsx)(n.a,{href:"https://developer.apple.com/documentation/swift_packages/adding_package_dependencies_to_your_app",children:"directly import a Swift package"})," w/o any additional tool."]}),"\n",(0,t.jsxs)(n.p,{children:["We do not support ",(0,t.jsx)(n.strong,{children:"Carthage"})," and ",(0,t.jsx)(n.strong,{children:"CocoaPods"})," at the time due to some technical issues."]}),"\n",(0,t.jsxs)(i,{children:[(0,t.jsx)("summary",{children:"Carthage"}),(0,t.jsxs)(n.p,{children:["Carthage ",(0,t.jsxs)(n.a,{href:"https://github.com/Carthage/Carthage/issues/1226#issuecomment-290931385",children:["needs a ",(0,t.jsx)(n.code,{children:"xcodeproj"})," file to build"]}),", but ",(0,t.jsx)(n.code,{children:"swift package generate-xcodeproj"})," will report a failure since we are using binary targets\nfor native social plugins. We will try to find a workaround later."]})]}),"\n",(0,t.jsxs)(i,{children:[(0,t.jsx)("summary",{children:"CocoaPods"}),(0,t.jsxs)(n.p,{children:["CocoaPods ",(0,t.jsx)(n.a,{href:"https://github.com/CocoaPods/CocoaPods/issues/3276",children:"does not support local dependency"})," and monorepo, thus it's hard to create a ",(0,t.jsx)(n.code,{children:".podspec"})," for this repo."]})]})]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}},41124:(e,n,i)=>{i.d(n,{Ay:()=>p,RM:()=>l});var t=i(86070),o=i(15658),s=i(55039),r=i(96097),a=i(25299),c=i(50259);const l=[...c.RM,{value:"Configure redirect URI",id:"configure-redirect-uri",level:4},...r.RM,{value:"Sign-in and sign-out",id:"sign-in-and-sign-out",level:4},...a.RM];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.Ay,{}),"\n",(0,t.jsx)(n.h4,{id:"configure-redirect-uri",children:"Configure redirect URI"}),"\n",(0,t.jsx)(r.Ay,{figureSrc:s.A,redirectUri:"io.logto://callback"}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["The Redirect URI in iOS SDK is only for internal use. There's ",(0,t.jsx)(n.em,{children:"NO NEED"})," to add a ",(0,t.jsx)(n.a,{href:"https://developer.apple.com/documentation/xcode/defining-a-custom-url-scheme-for-your-app",children:"Custom URL Scheme"})," until a connector asks."]})}),"\n",(0,t.jsx)(n.h4,{id:"sign-in-and-sign-out",children:"Sign-in and sign-out"}),"\n",(0,t.jsx)(a.Ay,{calling:".signInWithBrowser(redirectUri:)"}),"\n",(0,t.jsxs)(n.p,{children:["You can use ",(0,t.jsx)(n.code,{children:"client.signInWithBrowser(redirectUri:)"})," to sign in the user and ",(0,t.jsx)(n.code,{children:"client.signOut()"})," to sign out the user."]}),"\n",(0,t.jsx)(n.p,{children:"For example, in a SwiftUI app:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-swift",metastring:'title="ContentView.swift"',children:'struct ContentView: View {\n  @State var isAuthenticated: Bool\n\n  init() {\n    isAuthenticated = client.isAuthenticated\n  }\n\n  var body: some View {\n    VStack {\n      if isAuthenticated {\n        Button("Sign Out") {\n          Task { [self] in\n            await client.signOut()\n            isAuthenticated = false\n          }\n        }\n      } else {\n        Button("Sign In") {\n          Task { [self] in\n            do {\n              try await client.signInWithBrowser(redirectUri: "${\n                props.redirectUris[0] ?? \'io.logto://callback\'\n              }")\n              isAuthenticated = true\n            } catch let error as LogtoClientErrors.SignIn {\n              // error occured during sign in\n            } catch {\n              // other errors\n            }\n          }\n        }\n      }\n    }\n  }\n}\n'})})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1826:(e,n,i)=>{i.d(n,{Ay:()=>a,RM:()=>s});var t=i(86070),o=i(15658);const s=[];function r(e){const n={admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Initialize the client by creating a ",(0,t.jsx)(n.code,{children:"LogtoClient"})," instance with a ",(0,t.jsx)(n.code,{children:"LogtoConfig"})," object."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-swift",metastring:'title="ContentView.swift"',children:'import Logto\nimport LogtoClient\n\nlet config = try? LogtoConfig(\n  endpoint: "<your-logto-endpoint>", // E.g. http://localhost:3001\n  appId: "<your-app-id>"\n)\nlet client = LogtoClient(useConfig: config)\n'})}),"\n",(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsx)(n.p,{children:"By default, we store credentials like ID Token and Refresh Token in the Keychain. Thus the user doesn't need to sign in again when he returns."}),(0,t.jsxs)(n.p,{children:["To turn off this behavior, set ",(0,t.jsx)(n.code,{children:"usingPersistStorage"})," to ",(0,t.jsx)(n.code,{children:"false"}),":"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-swift",children:"let config = try? LogtoConfig(\n  // ...\n  usingPersistStorage: false\n)\n"})})]})]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}},55039:(e,n,i)=>{i.d(n,{A:()=>t});const t="data:image/png;base64,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"},28084:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/connector-tab-social-4e3d582ddc28ceeee3bc3abcb30d4ec0.png"},80745:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/domain-and-url-f8f432e8a15c2c1cdf9e59b1a2b72049.png"},6016:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/enable-sign-in-with-apple-in-xcode-26680889a51468c3671f3011fd44b5f1.png"},70758:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/enable-sign-in-with-apple-42664e79db1a8966b1fc626a4bb67269.png"},81684:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/framework-list-fa8640804a64dea54236744f3287635b.png"},13885:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/get-started-82fd0b8e277e116b01ce1ccaa1b04c8d.png"},3466:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/save-changes-cc32c907e69d5d865b13ee0449e34822.png"},16906:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/sie-tab-12b63a01ce248b8eb8edd1cfd796cb1b.png"},15658:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>a});var t=i(30758);const o={},s=t.createContext(o);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(s.Provider,{value:n},e.children)}},1813:e=>{e.exports=JSON.parse('{"permalink":"/tutorial/how-to-build-apple-sign-in-with-ios-swift-and-logto","source":"@site/tutorial/build-with-logto/generated-ios-swift-apple.mdx","title":"How to build Apple sign-in with iOS Swift and Logto","description":"{/*","date":"2024-11-27T03:44:13.000Z","tags":[{"inline":true,"label":"authentication","permalink":"/tutorial/tags/authentication"},{"inline":true,"label":"apple","permalink":"/tutorial/tags/apple"},{"inline":true,"label":"ios-swift","permalink":"/tutorial/tags/ios-swift"},{"inline":true,"label":"swift","permalink":"/tutorial/tags/swift"},{"inline":true,"label":"social-sign-in","permalink":"/tutorial/tags/social-sign-in"},{"inline":true,"label":"sign-in","permalink":"/tutorial/tags/sign-in"},{"inline":true,"label":"login","permalink":"/tutorial/tags/login"}],"readingTime":1.275,"hasTruncateMarker":true,"authors":[{"name":"Logto team","title":"The better identity infrastructure for developers","url":"https://logto.io","imageURL":"https://github.com/logto-io.png","key":"logto","page":null}],"frontMatter":{"slug":"how-to-build-apple-sign-in-with-ios-swift-and-logto","authors":"logto","tags":["authentication","apple","ios-swift","swift","social-sign-in","sign-in","login"],"title":"How to build Apple sign-in with iOS Swift and Logto"},"unlisted":false,"prevItem":{"title":"How to build Twilio SMS passwordless sign-in with Go and Logto","permalink":"/tutorial/how-to-build-twilio-sign-in-with-go-and-logto"},"nextItem":{"title":"How to build AWS SES Email passwordless sign-in with iOS Swift and Logto","permalink":"/tutorial/how-to-build-aws-ses-sign-in-with-ios-swift-and-logto"}}')}}]);