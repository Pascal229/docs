"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[66131],{57467:(e,n,t)=>{t.d(n,{Ay:()=>a,RM:()=>r});var i=t(86070),o=t(15658);const r=[{value:"Sign in with Hugging Face account",id:"sign-in-with-hugging-face-account",level:2},{value:"Create an OAuth app in the Hugging Face",id:"create-an-oauth-app-in-the-hugging-face",level:2},{value:"Managing Hugging Face OAuth apps",id:"managing-hugging-face-oauth-apps",level:2},{value:"Configure your connector",id:"configure-your-connector",level:2},{value:"Config types",id:"config-types",level:3}];function s(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"sign-in-with-hugging-face-account",children:"Sign in with Hugging Face account"}),"\n",(0,i.jsxs)(n.p,{children:["Go to the ",(0,i.jsx)(n.a,{href:"https://huggingface.co/",children:"Hugging Face website"})," and sign in with your Hugging Face account. You may register a new account if you don't have one."]}),"\n",(0,i.jsx)(n.h2,{id:"create-an-oauth-app-in-the-hugging-face",children:"Create an OAuth app in the Hugging Face"}),"\n",(0,i.jsxs)(n.p,{children:["Follow the ",(0,i.jsx)(n.a,{href:"https://huggingface.co/docs/hub/en/oauth#creating-an-oauth-app",children:"Creating an oauth app"})," guide, and register a new application."]}),"\n",(0,i.jsx)(n.p,{children:"In the creation process, you will need to provide the following information:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Application Name"}),": The name of your application."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Homepage URL"}),": The URL of your application's homepage or landing page."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Logo URL"}),": The URL of your application's logo."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Scopes"}),": The scopes allowed for the OAuth app. For Hugging Face connector, usually use ",(0,i.jsx)(n.code,{children:"profile"})," to get the user's profile information and ",(0,i.jsx)(n.code,{children:"email"})," to get the user's email address. Ensure these scopes are allowed in your Hugging Face OAuth app if you want to use them."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Redirect URI"}),": The URL to redirect the user to after they have authenticated. You can find the redirect URI in the Logto Admin Console when you're creating a Hugging Face connector or in the created Hugging Face connector details page."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"managing-hugging-face-oauth-apps",children:"Managing Hugging Face OAuth apps"}),"\n",(0,i.jsxs)(n.p,{children:["Go to the ",(0,i.jsx)(n.a,{href:"https://huggingface.co/settings/connected-applications",children:"Connected Applications"})," page, you can add, edit or delete existing OAuth apps.\nYou can also find ",(0,i.jsx)(n.code,{children:"Client ID"})," and generate ",(0,i.jsx)(n.code,{children:"App secrets"})," in corresponding OAuth app settings pages."]}),"\n",(0,i.jsx)(n.h2,{id:"configure-your-connector",children:"Configure your connector"}),"\n",(0,i.jsxs)(n.p,{children:["Go back to Logto Admin Console And Fill out the ",(0,i.jsx)(n.code,{children:"clientId"})," and ",(0,i.jsx)(n.code,{children:"clientSecret"})," field with ",(0,i.jsx)(n.em,{children:"Client ID"})," and ",(0,i.jsx)(n.em,{children:"App Secret"})," you've got from OAuth app detail pages mentioned in the previous section."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"scope"})," is a space-delimited list of ",(0,i.jsx)(n.a,{href:"https://huggingface.co/docs/hub/en/oauth#currently-supported-scopes",children:"Hugging Face supported scopes"}),". If not provided, scope defaults to be ",(0,i.jsx)(n.code,{children:"profile"}),". For Hugging Face connector, the scope you may want to use is ",(0,i.jsx)(n.code,{children:"profile"})," and ",(0,i.jsx)(n.code,{children:"email"}),". ",(0,i.jsx)(n.code,{children:"profile"})," scope is required to get the user's profile information, and ",(0,i.jsx)(n.code,{children:"email"})," scope is required to get the user's email address. Ensure you have allowed these scopes in your Hugging Face OAuth app (configured in ",(0,i.jsx)(n.a,{href:"#create-an-oauth-app-in-the-hugging-face",children:"Create an OAuth app in the Hugging Face"})," section)."]}),"\n",(0,i.jsx)(n.h3,{id:"config-types",children:"Config types"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Type"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"clientId"}),(0,i.jsx)(n.td,{children:"string"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"clientSecret"}),(0,i.jsx)(n.td,{children:"string"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"scope"}),(0,i.jsx)(n.td,{children:"string"})]})]})]})]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},52086:(e,n,t)=>{t.d(n,{Ay:()=>j,RM:()=>p});var i=t(86070),o=t(15658),r=t(59404),s=t(47289),a=t(26335),c=t(59946),l=t(43141),d=t(35254),h=t(98420),g=t(53178),u=t(92409);const p=[...d.RM,{value:"Installation",id:"installation",level:3},...h.RM,{value:"Add Logto authentication",id:"add-logto-authentication",level:3},...c.RM,{value:"Sign-in and sign-out flows",id:"sign-in-and-sign-out-flows",level:3},...g.RM,{value:"Configure redirect URIs",id:"configure-redirect-uris",level:3},...l.RM,{value:"Add routes",id:"add-routes",level:3},...r.RM,{value:"Implement sign-in/sign-out buttons",id:"implement-sign-insign-out-buttons",level:3},...a.RM,{value:"The <code>&lt;AuthorizeView /&gt;</code> component",id:"the-authorizeview--component",level:3},...s.RM,...u.RM];function x(e){const n={code:"code",h3:"h3",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(d.Ay,{}),"\n",(0,i.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,i.jsx)(h.Ay,{}),"\n",(0,i.jsx)(n.h3,{id:"add-logto-authentication",children:"Add Logto authentication"}),"\n",(0,i.jsx)(c.Ay,{}),"\n",(0,i.jsx)(n.h3,{id:"sign-in-and-sign-out-flows",children:"Sign-in and sign-out flows"}),"\n",(0,i.jsx)(g.Ay,{}),"\n",(0,i.jsx)(n.h3,{id:"configure-redirect-uris",children:"Configure redirect URIs"}),"\n",(0,i.jsx)(l.Ay,{}),"\n",(0,i.jsx)(n.h3,{id:"add-routes",children:"Add routes"}),"\n",(0,i.jsx)(r.Ay,{}),"\n",(0,i.jsx)(n.h3,{id:"implement-sign-insign-out-buttons",children:"Implement sign-in/sign-out buttons"}),"\n",(0,i.jsx)(a.Ay,{}),"\n",(0,i.jsxs)(n.h3,{id:"the-authorizeview--component",children:["The ",(0,i.jsx)(n.code,{children:"<AuthorizeView />"})," component"]}),"\n",(0,i.jsx)(s.Ay,{}),"\n",(0,i.jsx)(u.Ay,{sdk:".NET Core (Blazor Server)"})]})}function j(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}},37391:(e,n,t)=>{t.d(n,{Ay:()=>a,RM:()=>r});var i=t(86070),o=t(15658);const r=[];function s(e){const n={img:"img",p:"p",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:'To add a social connector, go to the "Connector" tab in the Admin Console, then click on "Social connectors". From there, click "Add social connector".'}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Connector tab",src:t(28084).A+"",width:"3352",height:"1226"})}),"\n",(0,i.jsxs)("p",{children:['In the openning modal, select "',e.connector,'" and click "Next".']}),"\n",(0,i.jsx)(n.p,{children:"On the next page, you will see a two-column layout with the README content on the left and configuration on the right."}),"\n",(0,i.jsx)(n.p,{children:"Feel free to follow the README file in place or read the following section to complete the configuration process. If you follow the in-place guide, you can skip the next section."})]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},23471:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>s});var i=t(86070),o=t(15658);const r=t.p+"assets/images/create-application-modal-136b6119e66a20d765a416417aeeefda.png",s=[{value:"Choose your application type",id:"choose-your-application-type",level:3},{value:"Enter application name",id:"enter-application-name",level:3}];function a(e){const n={code:"code",h3:"h3",img:"img",p:"p",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"In you browser, open a new tab and enter the link of Logto Admin Console."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Get Started",src:t(13885).A+"",width:"2354",height:"588"})}),"\n",(0,i.jsxs)(n.p,{children:['Once the page is loaded, in the "Get Started" section click the ',(0,i.jsx)(n.code,{children:"View all"})," link to open the application framework list page."]}),"\n",(0,i.jsx)(n.h3,{id:"choose-your-application-type",children:"Choose your application type"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Framework List",src:t(81684).A+"",width:"3626",height:"2804"})}),"\n",(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:['In the opening modal, scroll to the "',e.type,'" section or filter all the available "\n',e.type,'" frameworks using the quick filter checkboxes on the left.']})}),"\n",(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:["Click the"," ","\n",e.framework.split("/").map((e=>`"${e.trim()}"`)).join(" / ")," ","\nframework card to start creating your application."]})}),"\n",(0,i.jsx)(n.h3,{id:"enter-application-name",children:"Enter application name"}),"\n",(0,i.jsx)("center",{children:(0,i.jsx)("img",{src:r,alt:"Create Application modal",width:"700"})}),"\n",(0,i.jsx)(n.p,{children:'Enter the application name, e.g., "Bookstore," and click "Create application."'}),"\n",(0,i.jsx)(n.p,{children:"\ud83c\udf89 Ta-da! You just created your first application in Logto. You'll see a congrats page which includes a detailed integration guide. Follow the guide to see what the experience will be in your application."})]})}function c(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},42969:(e,n,t)=>{t.d(n,{Ay:()=>a,RM:()=>r});var i=t(86070),o=t(15658);const r=[];function s(e){const n={admonition:"admonition",img:"img",p:"p",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:'Switch to the "Sign-in experience" tab, then click the "Sign-up and sign-in" tab.'}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"If it's the first time you enter the tab, you will see a quick introduction about Sign-in Experience and its basic configuration."})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Sign-in Experience tab",src:t(16906).A+"",width:"3502",height:"1794"})}),"\n",(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:['Select "None" for the "Sign-up identifier" to provide minimum sign-up effort for ',e.connector," ","\nsign-in, which may increase your conversion rate."]})}),"\n",(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:['In the "Social sign-in" section, add "Add Social Connector" and choose "',e.connector,'". Then\nyou should be able to see a button with text "Continue with ',e.connector,'" in the preview\nsection.']})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Save changes",src:t(3466).A+"",width:"2474",height:"188"})}),"\n",(0,i.jsx)(n.p,{children:'Finally, click "Save changes" on the bottom right corner.'})]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},4914:(e,n,t)=>{t.d(n,{Ay:()=>a,RM:()=>r});var i=t(86070),o=t(15658);const r=[];function s(e){const n={a:"a",admonition:"admonition",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:["\n","\n",(0,i.jsx)(n.admonition,{title:"For our new friends",type:"info",children:(0,i.jsxs)(n.p,{children:["Every app needs authentication and authorization. ",(0,i.jsx)(n.a,{href:"https://logto.io",children:"Logto"})," is an Auth0 alternative designed for modern apps and SaaS products."]})}),"\n",(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:["In this article, we will go through the steps to quickly build the ",e.connector," sign-in\nexperience (user authentication) with ",(0,i.jsx)("a",{href:e.link,target:"_blank",rel:"noopener",children:e.sdk})," and\xa0\n",(0,i.jsx)("a",{href:"https://logto.io",target:"_blank",rel:"noopener",children:"Logto"}),"."]})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Prerequisites"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["A running Logto instance. Check out the ",(0,i.jsx)(n.a,{href:"/introduction",children:"introduction page"})," to get started."]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)("span",{children:["Basic knowledge of ",(0,i.jsx)("a",{href:e.link,target:"_blank",rel:"noopener",children:e.sdk}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)("span",{children:["A usable ",e.connector," account."]}),"\n"]}),"\n"]}),"\n"]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},37448:(e,n,t)=>{t.d(n,{Ay:()=>a,RM:()=>r});var i=t(86070),o=t(15658);const r=[];function s(e){const n={p:"p",...(0,o.R)(),...e.components};return(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:['Double check you have filled out necessary values in the Logto connector configuration area. Click\n"Save and Done" (or "Save changes") and the ',e.connector," connector should be available now."]})})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},92409:(e,n,t)=>{t.d(n,{Ay:()=>a,RM:()=>r});var i=t(86070),o=t(15658);const r=[];function s(e){const n={admonition:"admonition",p:"p",...(0,o.R)(),...e.components};return(0,i.jsx)(n.admonition,{title:"Test your integration",type:"info",children:(0,i.jsxs)(n.p,{children:["Open your ",e.sdk,' app to test if the integration works. When you click the "Sign In" button,\nthe page should be redirected to a Logto sign-in page, and you should be able to create a new\naccount by entering username and password and complete the sign-in process.']})})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},52878:(e,n,t)=>{t.d(n,{Ay:()=>a,RM:()=>r});var i=t(86070),o=t(15658);const r=[];function s(e){const n={p:"p",...(0,o.R)(),...e.components};return(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:["Return to your ",e.sdk," app. You should now be able to sign in with ",e.connector,". Enjoy!"]})})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},768:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>j,connector:()=>m,contentTitle:()=>x,default:()=>y,frontMatter:()=>p,metadata:()=>i,toc:()=>f});var i=t(44611),o=t(86070),r=t(15658),s=t(4914),a=t(23471),c=t(37391),l=t(37448),d=t(42969),h=t(52878),g=t(52086),u=t(57467);const p={slug:"how-to-build-hugging-face-sign-in-with-dotnet-core-blazor-server-and-logto",authors:"logto",tags:["authentication","hugging-face","dotnet-core-blazor-server","c#","social-sign-in","sign-in","login"],title:"How to build Hugging Face sign-in with .NET Core (Blazor Server) and Logto"},x=void 0,j={authorsImageUrls:[void 0]},m="Hugging Face",f=[...s.RM,{value:"Create an application in Logto",id:"create-an-application-in-logto",level:2},...a.RM,{value:"Integrate Logto SDK",id:"integrate-logto-sdk",level:2},...g.RM,{value:"Add Hugging Face connector",id:"add-hugging-face-connector",level:2},...c.RM,{value:"Set up Hugging Face OAuth app",id:"set-up-hugging-face-oauth-app",level:2},...u.RM,{value:"Save your configuration",id:"save-your-configuration",level:2},...l.RM,{value:"Enable Hugging Face connector in Sign-in Experience",id:"enable-hugging-face-connector-in-sign-in-experience",level:2},...d.RM,{value:"Testing and Validation",id:"testing-and-validation",level:2},...h.RM,{value:"Further readings",id:"further-readings",level:2}];function w(e){const n={a:"a",h2:"h2",p:"p",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:["\n","\n","\n","\n",(0,o.jsx)(s.Ay,{connector:m,sdk:".NET Core (Blazor Server)",link:"https://learn.microsoft.com/en-us/aspnet/core/blazor/hosting-models#blazor-server"}),"\n",(0,o.jsx)(n.h2,{id:"create-an-application-in-logto",children:"Create an application in Logto"}),"\n",(0,o.jsx)(a.Ay,{type:"Traditional web",framework:".NET Core (Blazor Server)"}),"\n",(0,o.jsx)(n.h2,{id:"integrate-logto-sdk",children:"Integrate Logto SDK"}),"\n",(0,o.jsx)(g.Ay,{}),"\n",(0,o.jsx)(n.h2,{id:"add-hugging-face-connector",children:"Add Hugging Face connector"}),"\n",(0,o.jsx)(c.Ay,{connector:m}),"\n",(0,o.jsx)(n.h2,{id:"set-up-hugging-face-oauth-app",children:"Set up Hugging Face OAuth app"}),"\n",(0,o.jsx)(u.Ay,{}),"\n",(0,o.jsx)(n.h2,{id:"save-your-configuration",children:"Save your configuration"}),"\n",(0,o.jsx)(l.Ay,{connector:m}),"\n",(0,o.jsx)(n.h2,{id:"enable-hugging-face-connector-in-sign-in-experience",children:"Enable Hugging Face connector in Sign-in Experience"}),"\n",(0,o.jsx)(d.Ay,{connector:m}),"\n",(0,o.jsx)(n.h2,{id:"testing-and-validation",children:"Testing and Validation"}),"\n",(0,o.jsx)(h.Ay,{connector:m,sdk:".NET Core (Blazor Server)"}),"\n",(0,o.jsx)(n.h2,{id:"further-readings",children:"Further readings"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/authorization/api-resources/protect-your-api",children:"Protect your API"})," For native and single page apps, you'll need to call one or more API endpoints to retrieve and update data.",(0,o.jsx)("br",{}),"\nLearn more about identifying who's who and keeping your API secure."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/user-management",children:"User management"})," We know you care about user management and activities, as we also do.",(0,o.jsx)("br",{}),"\nLearn more about how to know your users and see the figures like DAU and MAU graphically."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/customization/localized-languages",children:"Localization"})," From one regional business to a global corporate, the willingness to offer the best user experience won't change.",(0,o.jsx)("br",{}),"\nYou can change current language phrases or add a new language without friction."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://blog.logto.io/ciam-101-intro-authn-sso",children:"Customer IAM series"})," Our serial blog posts about Customer (or Consumer) Identity and Access Management, from 101 to advanced topics and beyond."]})]})}function y(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(w,{...e})}):w(e)}},68347:(e,n,t)=>{t.d(n,{Ay:()=>a,RM:()=>r});var i=t(86070),o=t(15658);const r=[];function s(e){const n={a:"a",li:"li",ol:"ol",p:"p",...(0,o.R)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(t,{children:[(0,i.jsx)("summary",{children:"Regarding redirect-based sign-in"}),(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["This authentication process follows the ",(0,i.jsx)(n.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html",children:"OpenID Connect (OIDC)"})," protocol, and Logto enforces strict security measures to protect user sign-in."]}),"\n",(0,i.jsx)(n.li,{children:"If you have multiple apps, you can use the same identity provider (Logto). Once the user signs in to one app, Logto will automatically complete the sign-in process when the user accesses another app."}),"\n"]}),(0,i.jsxs)(n.p,{children:["To learn more about the rationale and benefits of redirect-based sign-in, see ",(0,i.jsx)(n.a,{href:"/concepts/sign-in-experience",children:"Logto sign-in experience explained"}),"."]})]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},36083:(e,n,t)=>{t.d(n,{Ay:()=>c,Ip:()=>r,RM:()=>s});var i=t(86070),o=t(15658);const r="http://localhost:3000/",s=[];function a(e){const n={admonition:"admonition",p:"p",...(0,o.R)(),...e.components};return(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["In the following code snippets, we assume your app is running on ",(0,i.jsx)("code",{children:r}),"."]})})}function c(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},59404:(e,n,t)=>{t.d(n,{Ay:()=>a,RM:()=>r});var i=t(86070),o=t(15658);const r=[];function s(e){const n={code:"code",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Since Blazor Server uses SignalR to communicate between the server and the client, this means methods that directly manipulate the HTTP context (like issuing challenges or redirects) don't work as expected when called from a Blazor component."}),"\n",(0,i.jsx)(n.p,{children:"To make it right, we need to explicitly add two endpoints for sign-in and sign-out redirects:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",metastring:'title="Program.cs"',children:'app.MapGet("/SignIn", async context =>\n{\n    if (!(context.User?.Identity?.IsAuthenticated ?? false))\n    {\n        await context.ChallengeAsync(new AuthenticationProperties { RedirectUri = "/" });\n    } else {\n        context.Response.Redirect("/");\n    }\n});\n\napp.MapGet("/SignOut", async context =>\n{\n    if (context.User?.Identity?.IsAuthenticated ?? false)\n    {\n        await context.SignOutAsync(new AuthenticationProperties { RedirectUri = "/" });\n    } else {\n        context.Response.Redirect("/");\n    }\n});\n'})}),"\n",(0,i.jsx)(n.p,{children:"Now we can redirect to these endpoints to trigger sign-in and sign-out."})]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},47289:(e,n,t)=>{t.d(n,{Ay:()=>a,RM:()=>r});var i=t(86070),o=t(15658);const r=[];function s(e){const n={code:"code",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Alternatively, you can use the ",(0,i.jsx)(n.code,{children:"AuthorizeView"})," component to conditionally render content based on the user's authentication state. This component is useful when you want to show different content to authenticated and unauthenticated users."]}),"\n",(0,i.jsx)(n.p,{children:"In your Razor component, add the following code:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cshtml",metastring:'title="Components/Pages/Index.razor"',children:"@using Microsoft.AspNetCore.Components.Authorization\n\n@* ... *@\n\n<AuthorizeView>\n    <Authorized>\n        <p>Name: @User?.Identity?.Name</p>\n        @* Content for authenticated users *@\n    </Authorized>\n    <NotAuthorized>\n        @* Content for unauthenticated users *@\n    </NotAuthorized>\n</AuthorizeView>\n\n@* ... *@\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"AuthorizeView"})," component requires a cascading parameter of type ",(0,i.jsx)(n.code,{children:"Task<AuthenticationState>"}),". A direct way to get this parameter is to add the ",(0,i.jsx)(n.code,{children:"<CascadingAuthenticationState>"})," component. However, due to the nature of Blazor Server, we cannot simply add the component to the layout or the root component (it may not work as expected). Instead, we can add the following code to the builder (",(0,i.jsx)(n.code,{children:"Program.cs"})," or ",(0,i.jsx)(n.code,{children:"Startup.cs"}),") to provide the cascading parameter:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",metastring:'title="Program.cs"',children:"builder.Services.AddCascadingAuthenticationState();\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Then you can use the ",(0,i.jsx)(n.code,{children:"AuthorizeView"})," component in every component that needs it."]})]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},26335:(e,n,t)=>{t.d(n,{Ay:()=>a,RM:()=>r});var i=t(86070),o=t(15658);const r=[];function s(e){const n={code:"code",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"In the Razor component, add the following code:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cshtml",metastring:'title="Components/Pages/Index.razor"',children:'@using Microsoft.AspNetCore.Components.Authorization\n@using System.Security.Claims\n@inject AuthenticationStateProvider AuthenticationStateProvider\n@inject NavigationManager NavigationManager\n\n@* ... *@\n\n<p>Is authenticated: @User.Identity?.IsAuthenticated</p>\n@if (User.Identity?.IsAuthenticated == true)\n{\n    <button @onclick="SignOut">Sign out</button>\n}\nelse\n{\n    <button @onclick="SignIn">Sign in</button>\n}\n\n@* ... *@\n\n@code {\n    private ClaimsPrincipal? User { get; set; }\n\n    protected override async Task OnInitializedAsync()\n    {\n        var authState = await AuthenticationStateProvider.GetAuthenticationStateAsync();\n        User = authState.User;\n    }\n\n    private void SignIn()\n    {\n        NavigationManager.NavigateTo("/SignIn", forceLoad: true);\n    }\n\n    private void SignOut()\n    {\n        NavigationManager.NavigateTo("/SignOut", forceLoad: true);\n    }\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Explanation"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The injected ",(0,i.jsx)(n.code,{children:"AuthenticationStateProvider"})," is used to get the current user's authentication state, and populate the ",(0,i.jsx)(n.code,{children:"User"})," property."]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"SignIn"})," and ",(0,i.jsx)(n.code,{children:"SignOut"})," methods are used to redirect the user to the sign-in and sign-out endpoints respectively. Since the nature of Blazor Server, we need to use ",(0,i.jsx)(n.code,{children:"NavigationManager"})," with force load to trigger the redirection."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:'The page will show the "Sign in" button if the user is not authenticated, and show the "Sign out" button if the user is authenticated.'})]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},59946:(e,n,t)=>{t.d(n,{Ay:()=>a,RM:()=>r});var i=t(86070),o=t(15658);const r=[];function s(e){const n={code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Open ",(0,i.jsx)(n.code,{children:"Startup.cs"})," (or ",(0,i.jsx)(n.code,{children:"Program.cs"}),") and add the following code to register Logto authentication services:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",metastring:'title="Program.cs"',children:'using Logto.AspNetCore.Authentication;\n\nvar builder = WebApplication.CreateBuilder(args);\n\nbuilder.Services.AddLogtoAuthentication(options =>\n{\n  options.Endpoint = builder.Configuration["Logto:Endpoint"]!;\n  options.AppId = builder.Configuration["Logto:AppId"]!;\n  options.AppSecret = builder.Configuration["Logto:AppSecret"];\n});\n'})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"AddLogtoAuthentication"})," method will do the following things:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Set the default authentication scheme to ",(0,i.jsx)(n.code,{children:"LogtoDefaults.CookieScheme"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Set the default challenge scheme to ",(0,i.jsx)(n.code,{children:"LogtoDefaults.AuthenticationScheme"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Set the default sign-out scheme to ",(0,i.jsx)(n.code,{children:"LogtoDefaults.AuthenticationScheme"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"Add cookie and OpenID Connect authentication handlers to the authentication scheme."}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},43141:(e,n,t)=>{t.d(n,{Ay:()=>l,RM:()=>a});var i=t(86070),o=t(15658),r=t(8899),s=t(36083);const a=[...s.RM,{value:"Change the default paths",id:"change-the-default-paths",level:4}];function c(e){const n={code:"code",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.Ay,{}),"\n",(0,i.jsxs)(n.p,{children:["First, let's configure the ",(0,i.jsx)(n.strong,{children:"Logto redirect URI"}),'. Add the following URI to the "Redirect URIs" list in the Logto application details page:']}),"\n",(0,i.jsx)(r.A,{children:`http://${s.Ip}/Callback`}),"\n",(0,i.jsxs)(n.p,{children:["To configure the ",(0,i.jsx)(n.strong,{children:"Logto post sign-out redirect URI"}),', add the following URI to the "Post sign-out redirect URIs" list in the Logto application details page:']}),"\n",(0,i.jsx)(r.A,{children:`http://${s.Ip}/SignedOutCallback`}),"\n",(0,i.jsx)(n.h4,{id:"change-the-default-paths",children:"Change the default paths"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"Logto redirect URI"})," has a default path of ",(0,i.jsx)(n.code,{children:"/Callback"}),", and the ",(0,i.jsx)(n.strong,{children:"Logto post sign-out redirect URI"})," has a default path of ",(0,i.jsx)(n.code,{children:"/SignedOutCallback"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["You can leave them as are if there's no special requirement. If you want to change it, you can set the ",(0,i.jsx)(n.code,{children:"CallbackPath"})," and ",(0,i.jsx)(n.code,{children:"SignedOutCallbackPath"})," property for ",(0,i.jsx)(n.code,{children:"LogtoOptions"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",metastring:'title="Program.cs"',children:'builder.Services.AddLogtoAuthentication(options =>\n{\n  // Other configurations...\n  // highlight-start\n  options.CallbackPath = "/Foo";\n  options.SignedOutCallbackPath = "/Bar";\n  // highlight-end\n});\n'})}),"\n",(0,i.jsx)(n.p,{children:"Remember to update the value in the Logto application details page accordingly."})]})}function l(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},35254:(e,n,t)=>{t.d(n,{Ay:()=>a,RM:()=>r});var i=t(86070),o=t(15658);const r=[];function s(e){const n={a:"a",admonition:"admonition",li:"li",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The following demonstration is built on .NET Core 8.0. The SDK is compatible with .NET 6.0 or higher."}),"\n",(0,i.jsxs)(n.li,{children:["The .NET Core sample projects are available in the ",(0,i.jsx)(n.a,{href:"https://github.com/logto-io/csharp",children:"GitHub repository"}),"."]}),"\n"]})})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},98420:(e,n,t)=>{t.d(n,{Ay:()=>a,RM:()=>r});var i=t(86070),o=t(15658);const r=[];function s(e){const n={code:"code",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Add the NuGet package to your project:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"dotnet add package Logto.AspNetCore.Authentication\n"})})]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},53178:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>s});var i=t(86070),o=t(15658),r=t(68347);const s=[...r.RM];function a(e){const n={li:"li",mermaid:"mermaid",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Before we proceed, there are two confusing terms in the .NET Core authentication middleware that we need to clarify:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"CallbackPath"}),': The URI that Logto will redirect the user back to after the user has signed in (the "redirect URI" in Logto)']}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"RedirectUri"}),": The URI that will be redirected to after necessary actions have been taken in the Logto authentication middleware."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The sign-in process can be illustrated as follows:"}),"\n",(0,i.jsx)(n.mermaid,{value:"graph LR\n  subgraph Your app\n    A\n    C\n    D\n  end\n  subgraph Logto\n    B\n  end\n  A(Sign-in path) --\x3e|Redirect to| B(Logto)\n  B --\x3e|Redirect to| C(CallbackPath)\n  C --\x3e|Redirect to| D(RedirectUri)"}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsxs)(n.p,{children:["Similarly, .NET Core also has ",(0,i.jsx)(n.strong,{children:"SignedOutCallbackPath"})," and ",(0,i.jsx)(n.strong,{children:"RedirectUri"})," for the sign-out flow."]}),"\n",(0,i.jsx)(n.p,{children:"For the sack of clarity, we'll refer them as follows:"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Term we use"}),(0,i.jsx)(n.th,{children:".NET Core term"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Logto redirect URI"}),(0,i.jsx)(n.td,{children:"CallbackPath"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Logto post sign-out redirect URI"}),(0,i.jsx)(n.td,{children:"SignedOutCallbackPath"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Application redirect URI"}),(0,i.jsx)(n.td,{children:"RedirectUri"})]})]})]}),"\n",(0,i.jsx)(r.Ay,{})]})}function c(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},28084:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/connector-tab-social-4e3d582ddc28ceeee3bc3abcb30d4ec0.png"},81684:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/framework-list-fa8640804a64dea54236744f3287635b.png"},13885:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/get-started-82fd0b8e277e116b01ce1ccaa1b04c8d.png"},3466:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/save-changes-cc32c907e69d5d865b13ee0449e34822.png"},16906:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/sie-tab-12b63a01ce248b8eb8edd1cfd796cb1b.png"},44611:e=>{e.exports=JSON.parse('{"permalink":"/tutorial/how-to-build-hugging-face-sign-in-with-dotnet-core-blazor-server-and-logto","source":"@site/tutorial/build-with-logto/generated-dotnet-core-blazor-server-hugging-face.mdx","title":"How to build Hugging Face sign-in with .NET Core (Blazor Server) and Logto","description":"{/*","date":"2024-11-29T04:09:31.000Z","tags":[{"inline":true,"label":"authentication","permalink":"/tutorial/tags/authentication"},{"inline":true,"label":"hugging-face","permalink":"/tutorial/tags/hugging-face"},{"inline":true,"label":"dotnet-core-blazor-server","permalink":"/tutorial/tags/dotnet-core-blazor-server"},{"inline":true,"label":"c#","permalink":"/tutorial/tags/c"},{"inline":true,"label":"social-sign-in","permalink":"/tutorial/tags/social-sign-in"},{"inline":true,"label":"sign-in","permalink":"/tutorial/tags/sign-in"},{"inline":true,"label":"login","permalink":"/tutorial/tags/login"}],"readingTime":1.33,"hasTruncateMarker":true,"authors":[{"name":"Logto team","title":"The better identity infrastructure for developers","url":"https://logto.io","imageURL":"https://github.com/logto-io.png","key":"logto","page":null}],"frontMatter":{"slug":"how-to-build-hugging-face-sign-in-with-dotnet-core-blazor-server-and-logto","authors":"logto","tags":["authentication","hugging-face","dotnet-core-blazor-server","c#","social-sign-in","sign-in","login"],"title":"How to build Hugging Face sign-in with .NET Core (Blazor Server) and Logto"},"unlisted":false,"prevItem":{"title":"How to build Google sign-in with .NET Core (Blazor Server) and Logto","permalink":"/tutorial/how-to-build-google-sign-in-with-dotnet-core-blazor-server-and-logto"},"nextItem":{"title":"How to build Kakao sign-in with .NET Core (Blazor Server) and Logto","permalink":"/tutorial/how-to-build-kakao-sign-in-with-dotnet-core-blazor-server-and-logto"}}')}}]);