"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[45010],{54938:(e,n,t)=>{t.d(n,{Ay:()=>a,RM:()=>s});var i=t(86070),o=t(15658);const s=[{value:"Enable Sign in with Apple for your app",id:"enable-sign-in-with-apple-for-your-app",level:3},{value:"Create an identifier",id:"create-an-identifier",level:3},{value:"Enable Sign in with Apple for your identifier",id:"enable-sign-in-with-apple-for-your-identifier",level:3},{value:"Compose the connector JSON",id:"compose-the-connector-json",level:3}];function r(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["\u2139\ufe0f ",(0,i.jsx)(n.strong,{children:"Note"})]}),"\n",(0,i.jsx)(n.p,{children:"Apple sign-in is required for AppStore if you have other social sign-in methods in your app.\nHaving Apple sign-in on Android devices is great if you also provide an Android app."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["You need to enroll ",(0,i.jsx)(n.a,{href:"https://developer.apple.com/programs/",children:"Apple Developer Program"})," before continuing."]}),"\n",(0,i.jsx)(n.h3,{id:"enable-sign-in-with-apple-for-your-app",children:"Enable Sign in with Apple for your app"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["\u26a0\ufe0f ",(0,i.jsx)(n.strong,{children:"Caution"})]}),"\n",(0,i.jsx)(n.p,{children:"Even if you want to implement Sign in with Apple on a web app only, you still need to have an existing app that embraces the AppStore ecosystem (i.e., have a valid App ID)."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["You can do it via Xcode -> Project settings -> Signing & Capabilities, or visit ",(0,i.jsx)(n.a,{href:"https://developer.apple.com/account/resources/identifiers/list/bundleId",children:"Certificates, Identifiers & Profiles"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Enable Sign in with Apple",src:t(6016).A+"",width:"1220",height:"398"})}),"\n",(0,i.jsxs)(n.p,{children:['See the "Enable an App ID" section in ',(0,i.jsx)(n.a,{href:"https://developer.apple.com/documentation/sign_in_with_apple/configuring_your_environment_for_sign_in_with_apple",children:"Apple official docs"})," for more info."]}),"\n",(0,i.jsx)(n.h3,{id:"create-an-identifier",children:"Create an identifier"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Visit ",(0,i.jsx)(n.a,{href:"https://developer.apple.com/account/resources/identifiers/list/serviceId",children:"Certificates, Identifiers & Profiles"}),', then click the "+" button next to "Identifier".']}),"\n",(0,i.jsx)(n.li,{children:'In the "Register a new identifier" page, choose "Services IDs" and click "Continue".'}),"\n",(0,i.jsxs)(n.li,{children:['Fill out "Description" and "Identifier" (E.g., ',(0,i.jsx)(n.code,{children:"Logto Test"})," and ",(0,i.jsx)(n.code,{children:"io.logto.test"}),'), then click "Continue".']}),"\n",(0,i.jsx)(n.li,{children:'Double-check the info and click "Register".'}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"enable-sign-in-with-apple-for-your-identifier",children:"Enable Sign in with Apple for your identifier"}),"\n",(0,i.jsx)(n.p,{children:'Click the identifier you just created. Check "Sign in with Apple" on the details page and click "Configure".'}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Enable Sign in with Apple",src:t(70758).A+"",width:"1170",height:"186"})}),"\n",(0,i.jsx)(n.p,{children:"In the opening modal, select the App ID you just enabled Sign in with Apple."}),"\n",(0,i.jsxs)(n.p,{children:["Enter the domain of your Logto instance without protocol and port, e.g., ",(0,i.jsx)(n.code,{children:"your.logto.domain"}),'; then enter the "Return URL" (i.e., Redirect URI), which is the Logto URL with ',(0,i.jsx)(n.code,{children:"/callback/${connector_id}"}),", e.g., ",(0,i.jsx)(n.code,{children:"https://your.logto.domain/callback/apple-universal"}),". You can get the randomly generated ",(0,i.jsx)(n.code,{children:"connector_id"})," after creating Apple connector in Admin Console."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"domain-and-url",src:t(80745).A+"",width:"988",height:"668"})}),"\n",(0,i.jsx)(n.p,{children:'Click "Next" then "Done" to close the modal. Click "Continue" on the top-right corner, then click "Save" to save your configuration.'}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["\u26a0\ufe0f ",(0,i.jsx)(n.strong,{children:"Caution"})]}),"\n",(0,i.jsxs)(n.p,{children:["Apple does NOT allow Return URLs with HTTP protocol and ",(0,i.jsx)(n.code,{children:"localhost"})," domain."]}),"\n",(0,i.jsxs)(n.p,{children:["If you want to test locally, you need to edit ",(0,i.jsx)(n.code,{children:"/etc/hosts"})," file to map localhost to a custom domain and set up a local HTTPS environment. ",(0,i.jsx)(n.a,{href:"https://github.com/FiloSottile/mkcert",children:"mkcert"})," can help you for setting up local HTTPS."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"compose-the-connector-json",children:"Compose the connector JSON"}),"\n",(0,i.jsxs)(n.p,{children:["You need to use the identifier that fills in the ",(0,i.jsx)(n.a,{href:"#create-an-identifier",children:"Create an identifier"})," section to compose the JSON:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "clientId": "io.logto.test"\n}\n'})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["\u2139\ufe0f ",(0,i.jsx)(n.strong,{children:"Note"})]}),"\n",(0,i.jsxs)(n.p,{children:["This connector doesn't support customizing ",(0,i.jsx)(n.code,{children:"scope"})," (e.g., name, email) yet since Apple requires ",(0,i.jsx)(n.code,{children:"form_post"})," response mode when ",(0,i.jsx)(n.code,{children:"scope"})," is not empty, which is incompatible with the current connector design."]}),"\n",(0,i.jsx)(n.p,{children:"We'll figure out this later."}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},50195:(e,n,t)=>{t.d(n,{Ay:()=>u,RM:()=>p});var i=t(86070),o=t(15658),s=t(24382),r=t(69273),a=t(60650),c=t(80072),l=t(40486),d=t(39019),h=t(5723);const p=[...a.RM,{value:"Installation",id:"installation",level:3},...c.RM,{value:"Add Logto authentication",id:"add-logto-authentication",level:3},...s.RM,{value:"Sign-in and sign-out flows",id:"sign-in-and-sign-out-flows",level:3},...l.RM,{value:"Configure redirect URIs",id:"configure-redirect-uris",level:3},...r.RM,{value:"Implement sign-in/sign-out buttons",id:"implement-sign-insign-out-buttons",level:3},...d.RM,...h.RM];function g(e){const n={h3:"h3",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.Ay,{}),"\n",(0,i.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,i.jsx)(c.Ay,{}),"\n",(0,i.jsx)(n.h3,{id:"add-logto-authentication",children:"Add Logto authentication"}),"\n",(0,i.jsx)(s.Ay,{}),"\n",(0,i.jsx)(n.h3,{id:"sign-in-and-sign-out-flows",children:"Sign-in and sign-out flows"}),"\n",(0,i.jsx)(l.Ay,{}),"\n",(0,i.jsx)(n.h3,{id:"configure-redirect-uris",children:"Configure redirect URIs"}),"\n",(0,i.jsx)(r.Ay,{}),"\n",(0,i.jsx)(n.h3,{id:"implement-sign-insign-out-buttons",children:"Implement sign-in/sign-out buttons"}),"\n",(0,i.jsx)(d.Ay,{}),"\n",(0,i.jsx)(h.Ay,{sdk:".NET Core (Razor Pages)"})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(g,{...e})}):g(e)}},25733:(e,n,t)=>{t.d(n,{Ay:()=>a,RM:()=>s});var i=t(86070),o=t(15658);const s=[];function r(e){const n={img:"img",p:"p",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:'To add a social connector, go to the "Connector" tab in the Admin Console, then click on "Social connectors". From there, click "Add social connector".'}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Connector tab",src:t(28084).A+"",width:"3352",height:"1226"})}),"\n",(0,i.jsxs)("p",{children:['In the openning modal, select "',e.connector,'" and click "Next".']}),"\n",(0,i.jsx)(n.p,{children:"On the next page, you will see a two-column layout with the README content on the left and configuration on the right."}),"\n",(0,i.jsx)(n.p,{children:"Feel free to follow the README file in place or read the following section to complete the configuration process. If you follow the in-place guide, you can skip the next section."})]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},72816:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>r});var i=t(86070),o=t(15658);const s=t.p+"assets/images/create-application-modal-136b6119e66a20d765a416417aeeefda.png",r=[{value:"Choose your application type",id:"choose-your-application-type",level:3},{value:"Enter application name",id:"enter-application-name",level:3}];function a(e){const n={code:"code",h3:"h3",img:"img",p:"p",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"In you browser, open a new tab and enter the link of Logto Admin Console."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Get Started",src:t(13885).A+"",width:"2354",height:"588"})}),"\n",(0,i.jsxs)(n.p,{children:['Once the page is loaded, in the "Get Started" section click the ',(0,i.jsx)(n.code,{children:"View all"})," link to open the application framework list page."]}),"\n",(0,i.jsx)(n.h3,{id:"choose-your-application-type",children:"Choose your application type"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Framework List",src:t(81684).A+"",width:"3626",height:"2804"})}),"\n",(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:['In the opening modal, scroll to the "',e.type,'" section or filter all the available "\n',e.type,'" frameworks using the quick filter checkboxes on the left.']})}),"\n",(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:["Click the"," ","\n",e.framework.split("/").map((e=>`"${e.trim()}"`)).join(" / ")," ","\nframework card to start creating your application."]})}),"\n",(0,i.jsx)(n.h3,{id:"enter-application-name",children:"Enter application name"}),"\n",(0,i.jsx)("center",{children:(0,i.jsx)("img",{src:s,alt:"Create Application modal",width:"700"})}),"\n",(0,i.jsx)(n.p,{children:'Enter the application name, e.g., "Bookstore," and click "Create application."'}),"\n",(0,i.jsx)(n.p,{children:"\ud83c\udf89 Ta-da! You just created your first application in Logto. You'll see a congrats page which includes a detailed integration guide. Follow the guide to see what the experience will be in your application."})]})}function c(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},53683:(e,n,t)=>{t.d(n,{Ay:()=>a,RM:()=>s});var i=t(86070),o=t(15658);const s=[];function r(e){const n={admonition:"admonition",img:"img",p:"p",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:'Switch to the "Sign-in experience" tab, then click the "Sign-up and sign-in" tab.'}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"If it's the first time you enter the tab, you will see a quick introduction about Sign-in Experience and its basic configuration."})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Sign-in Experience tab",src:t(16906).A+"",width:"3502",height:"1794"})}),"\n",(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:['Select "None" for the "Sign-up identifier" to provide minimum sign-up effort for ',e.connector," ","\nsign-in, which may increase your conversion rate."]})}),"\n",(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:['In the "Social sign-in" section, add "Add Social Connector" and choose "',e.connector,'". Then\nyou should be able to see a button with text "Continue with ',e.connector,'" in the preview\nsection.']})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Save changes",src:t(3466).A+"",width:"2474",height:"188"})}),"\n",(0,i.jsx)(n.p,{children:'Finally, click "Save changes" on the bottom right corner.'})]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},4984:(e,n,t)=>{t.d(n,{Ay:()=>a,RM:()=>s});var i=t(86070),o=t(15658);const s=[];function r(e){const n={a:"a",admonition:"admonition",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:["\n","\n",(0,i.jsx)(n.admonition,{title:"For our new friends",type:"info",children:(0,i.jsxs)(n.p,{children:["Every app needs authentication and authorization. ",(0,i.jsx)(n.a,{href:"https://logto.io",children:"Logto"})," is an Auth0 alternative designed for modern apps and SaaS products."]})}),"\n",(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:["In this article, we will go through the steps to quickly build the ",e.connector," sign-in\nexperience (user authentication) with ",(0,i.jsx)("a",{href:e.link,target:"_blank",rel:"noopener",children:e.sdk})," and\xa0\n",(0,i.jsx)("a",{href:"https://logto.io",target:"_blank",rel:"noopener",children:"Logto"}),"."]})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Prerequisites"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["A running Logto instance. Check out the ",(0,i.jsx)(n.a,{href:"/docs/get-started/",children:"get started page"})," if you don't have one."]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)("span",{children:["Basic knowledge of ",(0,i.jsx)("a",{href:e.link,target:"_blank",rel:"noopener",children:e.sdk}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)("span",{children:["A usable ",e.connector," account."]}),"\n"]}),"\n"]}),"\n"]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},62186:(e,n,t)=>{t.d(n,{Ay:()=>a,RM:()=>s});var i=t(86070),o=t(15658);const s=[];function r(e){const n={p:"p",...(0,o.R)(),...e.components};return(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:['Double check you have filled out necessary values in the Logto connector configuration area. Click\n"Save and Done" (or "Save changes") and the ',e.connector," connector should be available now."]})})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},5723:(e,n,t)=>{t.d(n,{Ay:()=>a,RM:()=>s});var i=t(86070),o=t(15658);const s=[];function r(e){const n={admonition:"admonition",p:"p",...(0,o.R)(),...e.components};return(0,i.jsx)(n.admonition,{title:"Test your integration",type:"info",children:(0,i.jsxs)(n.p,{children:["Open your ",e.sdk,' app to test if the integration works. When you click the "Sign In" button,\nthe page should be redirected to a Logto sign-in page, and you should be able to create a new\naccount by entering username and password and complete the sign-in process.']})})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},94440:(e,n,t)=>{t.d(n,{Ay:()=>a,RM:()=>s});var i=t(86070),o=t(15658);const s=[];function r(e){const n={p:"p",...(0,o.R)(),...e.components};return(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:["Return to your ",e.sdk," app. You should now be able to sign in with ",e.connector,". Enjoy!"]})})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},35584:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>j,connector:()=>m,contentTitle:()=>u,default:()=>w,frontMatter:()=>g,metadata:()=>x,toc:()=>f});var i=t(86070),o=t(15658),s=t(4984),r=t(72816),a=t(25733),c=t(62186),l=t(53683),d=t(94440),h=t(50195),p=t(54938);const g={slug:"how-to-build-apple-sign-in-with-dotnet-core-razor-pages-and-logto",authors:"logto",tags:["authentication","apple","dotnet-core-razor-pages","c#","social-sign-in","sign-in","login"],title:"How to build Apple sign-in with .NET Core (Razor Pages) and Logto"},u=void 0,x={permalink:"/tutorial/how-to-build-apple-sign-in-with-dotnet-core-razor-pages-and-logto",source:"@site/tutorial/build-with-logto/generated-dotnet-core-razor-pages-apple.mdx",title:"How to build Apple sign-in with .NET Core (Razor Pages) and Logto",description:"{/*",date:"2024-10-25T07:29:45.000Z",tags:[{inline:!0,label:"authentication",permalink:"/tutorial/tags/authentication"},{inline:!0,label:"apple",permalink:"/tutorial/tags/apple"},{inline:!0,label:"dotnet-core-razor-pages",permalink:"/tutorial/tags/dotnet-core-razor-pages"},{inline:!0,label:"c#",permalink:"/tutorial/tags/c"},{inline:!0,label:"social-sign-in",permalink:"/tutorial/tags/social-sign-in"},{inline:!0,label:"sign-in",permalink:"/tutorial/tags/sign-in"},{inline:!0,label:"login",permalink:"/tutorial/tags/login"}],readingTime:1.325,hasTruncateMarker:!0,authors:[{name:"Logto team",title:"The better identity infrastructure for developers",url:"https://logto.io",imageURL:"https://github.com/logto-io.png",key:"logto",page:null}],frontMatter:{slug:"how-to-build-apple-sign-in-with-dotnet-core-razor-pages-and-logto",authors:"logto",tags:["authentication","apple","dotnet-core-razor-pages","c#","social-sign-in","sign-in","login"],title:"How to build Apple sign-in with .NET Core (Razor Pages) and Logto"},unlisted:!1,prevItem:{title:"How to build Twilio SMS passwordless sign-in with .NET Core (MVC) and Logto",permalink:"/tutorial/how-to-build-twilio-sign-in-with-dotnet-core-mvc-and-logto"},nextItem:{title:"How to build AWS SES Email passwordless sign-in with .NET Core (Razor Pages) and Logto",permalink:"/tutorial/how-to-build-aws-ses-sign-in-with-dotnet-core-razor-pages-and-logto"}},j={authorsImageUrls:[void 0]},m="Apple",f=[...s.RM,{value:"Create an application in Logto",id:"create-an-application-in-logto",level:2},...r.RM,{value:"Integrate Logto SDK",id:"integrate-logto-sdk",level:2},...h.RM,{value:"Add Apple connector",id:"add-apple-connector",level:2},...a.RM,{value:"Set up Apple Sign-in",id:"set-up-apple-sign-in",level:2},...p.RM,{value:"Save your configuration",id:"save-your-configuration",level:2},...c.RM,{value:"Enable Apple connector in Sign-in Experience",id:"enable-apple-connector-in-sign-in-experience",level:2},...l.RM,{value:"Testing and Validation",id:"testing-and-validation",level:2},...d.RM,{value:"Further readings",id:"further-readings",level:2}];function b(e){const n={a:"a",h2:"h2",p:"p",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:["\n","\n","\n","\n",(0,i.jsx)(s.Ay,{connector:m,sdk:".NET Core (Razor Pages)",link:"https://learn.microsoft.com/aspnet/core/razor-pages/"}),"\n",(0,i.jsx)(n.h2,{id:"create-an-application-in-logto",children:"Create an application in Logto"}),"\n",(0,i.jsx)(r.Ay,{type:"Traditional web",framework:".NET Core (Razor Pages)"}),"\n",(0,i.jsx)(n.h2,{id:"integrate-logto-sdk",children:"Integrate Logto SDK"}),"\n",(0,i.jsx)(h.Ay,{}),"\n",(0,i.jsx)(n.h2,{id:"add-apple-connector",children:"Add Apple connector"}),"\n",(0,i.jsx)(a.Ay,{connector:m}),"\n",(0,i.jsx)(n.h2,{id:"set-up-apple-sign-in",children:"Set up Apple Sign-in"}),"\n",(0,i.jsx)(p.Ay,{}),"\n",(0,i.jsx)(n.h2,{id:"save-your-configuration",children:"Save your configuration"}),"\n",(0,i.jsx)(c.Ay,{connector:m}),"\n",(0,i.jsx)(n.h2,{id:"enable-apple-connector-in-sign-in-experience",children:"Enable Apple connector in Sign-in Experience"}),"\n",(0,i.jsx)(l.Ay,{connector:m}),"\n",(0,i.jsx)(n.h2,{id:"testing-and-validation",children:"Testing and Validation"}),"\n",(0,i.jsx)(d.Ay,{connector:m,sdk:".NET Core (Razor Pages)"}),"\n",(0,i.jsx)(n.h2,{id:"further-readings",children:"Further readings"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/recipes/protect-your-api/",children:"\u2694\ufe0f Protect your API"})," For native and single page apps, you'll need to call one or more API endpoints to retrieve and update data.",(0,i.jsx)("br",{}),"\nLearn more about identifying who's who and keeping your API secure."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/recipes/manage-users/",children:"\ud83e\uddd1\u200d\ud83d\ude80 Manage users"})," We know you care about user management and activities, as we also do.",(0,i.jsx)("br",{}),"\nLearn more about how to know your users and see the figures like DAU and MAU graphically."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/recipes/customize-sie/localized-language",children:"\ud83c\udf10 Localization"})," From one regional business to a global corporate, the willingness to offer the best user experience won't change.",(0,i.jsx)("br",{}),"\nYou can change current language phrases or add a new language without friction."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/blog/tags/ciam",children:"\ud83e\uddd1\u200d\ud83c\udf93 Customer IAM series"})," Our serial blog posts about Customer (or Consumer) Identity and Access Management, from 101 to advanced topics and beyond."]})]})}function w(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(b,{...e})}):b(e)}},77999:(e,n,t)=>{t.d(n,{Ay:()=>a,RM:()=>s});var i=t(86070),o=t(15658);const s=[];function r(e){const n={a:"a",li:"li",ol:"ol",p:"p",...(0,o.R)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(t,{children:[(0,i.jsx)("summary",{children:"Regarding redirect-based sign-in"}),(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["This authentication process follows the ",(0,i.jsx)(n.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html",children:"OpenID Connect (OIDC)"})," protocol, and Logto enforces strict security measures to protect user sign-in."]}),"\n",(0,i.jsx)(n.li,{children:"If you have multiple apps, you can use the same identity provider (Logto). Once the user signs in to one app, Logto will automatically complete the sign-in process when the user accesses another app."}),"\n"]}),(0,i.jsxs)(n.p,{children:["To learn more about the rationale and benefits of redirect-based sign-in, see ",(0,i.jsx)(n.a,{href:"/docs/concepts/sign-in-experience",children:"Logto sign-in experience explained"}),"."]})]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},75207:(e,n,t)=>{t.d(n,{Ay:()=>c,Ip:()=>s,RM:()=>r});var i=t(86070),o=t(15658);const s="http://localhost:3000/",r=[];function a(e){const n={admonition:"admonition",p:"p",...(0,o.R)(),...e.components};return(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["In the following code snippets, we assume your app is running on ",(0,i.jsx)("code",{children:s}),"."]})})}function c(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},24382:(e,n,t)=>{t.d(n,{Ay:()=>a,RM:()=>s});var i=t(86070),o=t(15658);const s=[];function r(e){const n={code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Open ",(0,i.jsx)(n.code,{children:"Startup.cs"})," (or ",(0,i.jsx)(n.code,{children:"Program.cs"}),") and add the following code to register Logto authentication services:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",metastring:'title="Program.cs"',children:'using Logto.AspNetCore.Authentication;\n\nvar builder = WebApplication.CreateBuilder(args);\n\nbuilder.Services.AddLogtoAuthentication(options =>\n{\n  options.Endpoint = builder.Configuration["Logto:Endpoint"]!;\n  options.AppId = builder.Configuration["Logto:AppId"]!;\n  options.AppSecret = builder.Configuration["Logto:AppSecret"];\n});\n'})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"AddLogtoAuthentication"})," method will do the following things:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Set the default authentication scheme to ",(0,i.jsx)(n.code,{children:"LogtoDefaults.CookieScheme"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Set the default challenge scheme to ",(0,i.jsx)(n.code,{children:"LogtoDefaults.AuthenticationScheme"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Set the default sign-out scheme to ",(0,i.jsx)(n.code,{children:"LogtoDefaults.AuthenticationScheme"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"Add cookie and OpenID Connect authentication handlers to the authentication scheme."}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},69273:(e,n,t)=>{t.d(n,{Ay:()=>l,RM:()=>a});var i=t(86070),o=t(15658),s=t(33721),r=t(75207);const a=[...r.RM,{value:"Change the default paths",id:"change-the-default-paths",level:4}];function c(e){const n={code:"code",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.Ay,{}),"\n",(0,i.jsxs)(n.p,{children:["First, let's configure the ",(0,i.jsx)(n.strong,{children:"Logto redirect URI"}),'. Add the following URI to the "Redirect URIs" list in the Logto application details page:']}),"\n",(0,i.jsx)(s.A,{children:`http://${r.Ip}/Callback`}),"\n",(0,i.jsxs)(n.p,{children:["To configure the ",(0,i.jsx)(n.strong,{children:"Logto post sign-out redirect URI"}),', add the following URI to the "Post sign-out redirect URIs" list in the Logto application details page:']}),"\n",(0,i.jsx)(s.A,{children:`http://${r.Ip}/SignedOutCallback`}),"\n",(0,i.jsx)(n.h4,{id:"change-the-default-paths",children:"Change the default paths"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"Logto redirect URI"})," has a default path of ",(0,i.jsx)(n.code,{children:"/Callback"}),", and the ",(0,i.jsx)(n.strong,{children:"Logto post sign-out redirect URI"})," has a default path of ",(0,i.jsx)(n.code,{children:"/SignedOutCallback"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["You can leave them as are if there's no special requirement. If you want to change it, you can set the ",(0,i.jsx)(n.code,{children:"CallbackPath"})," and ",(0,i.jsx)(n.code,{children:"SignedOutCallbackPath"})," property for ",(0,i.jsx)(n.code,{children:"LogtoOptions"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",metastring:'title="Program.cs"',children:'builder.Services.AddLogtoAuthentication(options =>\n{\n  // Other configurations...\n  // highlight-start\n  options.CallbackPath = "/Foo";\n  options.SignedOutCallbackPath = "/Bar";\n  // highlight-end\n});\n'})}),"\n",(0,i.jsx)(n.p,{children:"Remember to update the value in the Logto application details page accordingly."})]})}function l(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},60650:(e,n,t)=>{t.d(n,{Ay:()=>a,RM:()=>s});var i=t(86070),o=t(15658);const s=[];function r(e){const n={a:"a",admonition:"admonition",li:"li",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The following demonstration is built on .NET Core 8.0. The SDK is compatible with .NET 6.0 or higher."}),"\n",(0,i.jsxs)(n.li,{children:["The .NET Core sample projects are available in the ",(0,i.jsx)(n.a,{href:"https://github.com/logto-io/csharp",children:"GitHub repository"}),"."]}),"\n"]})})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},80072:(e,n,t)=>{t.d(n,{Ay:()=>a,RM:()=>s});var i=t(86070),o=t(15658);const s=[];function r(e){const n={code:"code",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Add the NuGet package to your project:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"dotnet add package Logto.AspNetCore.Authentication\n"})})]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},40486:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>r});var i=t(86070),o=t(15658),s=t(77999);const r=[...s.RM];function a(e){const n={li:"li",mermaid:"mermaid",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Before we proceed, there are two confusing terms in the .NET Core authentication middleware that we need to clarify:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"CallbackPath"}),': The URI that Logto will redirect the user back to after the user has signed in (the "redirect URI" in Logto)']}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"RedirectUri"}),": The URI that will be redirected to after necessary actions have been taken in the Logto authentication middleware."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The sign-in process can be illustrated as follows:"}),"\n",(0,i.jsx)(n.mermaid,{value:"graph LR\n  subgraph Your app\n    A\n    C\n    D\n  end\n  subgraph Logto\n    B\n  end\n  A(Sign-in path) --\x3e|Redirect to| B(Logto)\n  B --\x3e|Redirect to| C(CallbackPath)\n  C --\x3e|Redirect to| D(RedirectUri)"}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsxs)(n.p,{children:["Similarly, .NET Core also has ",(0,i.jsx)(n.strong,{children:"SignedOutCallbackPath"})," and ",(0,i.jsx)(n.strong,{children:"RedirectUri"})," for the sign-out flow."]}),"\n",(0,i.jsx)(n.p,{children:"For the sack of clarity, we'll refer them as follows:"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Term we use"}),(0,i.jsx)(n.th,{children:".NET Core term"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Logto redirect URI"}),(0,i.jsx)(n.td,{children:"CallbackPath"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Logto post sign-out redirect URI"}),(0,i.jsx)(n.td,{children:"SignedOutCallbackPath"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Application redirect URI"}),(0,i.jsx)(n.td,{children:"RedirectUri"})]})]})]}),"\n",(0,i.jsx)(s.Ay,{})]})}function c(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},39019:(e,n,t)=>{t.d(n,{Ay:()=>a,RM:()=>s});var i=t(86070),o=t(15658);const s=[];function r(e){const n={code:"code",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["First, add the handler methods to your ",(0,i.jsx)(n.code,{children:"PageModel"}),", for example:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",metastring:'title="Pages/Index.cshtml.cs"',children:'public class IndexModel : PageModel\n{\n  public async Task OnPostSignInAsync()\n  {\n    await HttpContext.ChallengeAsync(new AuthenticationProperties\n    {\n      RedirectUri = "/"\n    });\n  }\n\n  public async Task OnPostSignOutAsync()\n  {\n    await HttpContext.SignOutAsync(new AuthenticationProperties\n    {\n      RedirectUri = "/"\n    });\n  }\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"Then, add the buttons to your Razor page:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cshtml",metastring:'title="Pages/Index.cshtml"',children:'<p>Is authenticated: @User.Identity?.IsAuthenticated</p>\n<form method="post">\n  @if (User.Identity?.IsAuthenticated == true) {\n    <button type="submit" asp-page-handler="SignOut">Sign out</button>\n  } else {\n    <button type="submit" asp-page-handler="SignIn">Sign in</button>\n  }\n</form>\n'})}),"\n",(0,i.jsx)(n.p,{children:'It will show the "Sign in" button if the user is not authenticated, and show the "Sign out" button if the user is authenticated.'})]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},28084:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/connector-tab-social-4e3d582ddc28ceeee3bc3abcb30d4ec0.png"},80745:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/domain-and-url-f8f432e8a15c2c1cdf9e59b1a2b72049.png"},6016:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/enable-sign-in-with-apple-in-xcode-26680889a51468c3671f3011fd44b5f1.png"},70758:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/enable-sign-in-with-apple-42664e79db1a8966b1fc626a4bb67269.png"},81684:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/framework-list-fa8640804a64dea54236744f3287635b.png"},13885:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/get-started-82fd0b8e277e116b01ce1ccaa1b04c8d.png"},3466:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/save-changes-cc32c907e69d5d865b13ee0449e34822.png"},16906:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/sie-tab-12b63a01ce248b8eb8edd1cfd796cb1b.png"}}]);