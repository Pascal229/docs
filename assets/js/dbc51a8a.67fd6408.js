"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[3300],{51341:(e,n,t)=>{t.d(n,{ZP:()=>a,d$:()=>s});var o=t(11527),i=t(17279);const s=[{value:"Set up Azure AD in the Azure Portal",id:"set-up-azure-ad-in-the-azure-portal",level:3},{value:"Configure your client secret",id:"configure-your-client-secret",level:3},{value:"Compose the connector JSON",id:"compose-the-connector-json",level:3},{value:"Config types",id:"config-types",level:4},{value:"References",id:"references",level:3}];function r(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h3,{id:"set-up-azure-ad-in-the-azure-portal",children:"Set up Azure AD in the Azure Portal"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Visit the ",(0,o.jsx)(n.a,{href:"https://portal.azure.com/#home",children:"Azure Portal"})," and sign in with your Azure account. You need to have an active subscription to access Azure AD."]}),"\n",(0,o.jsxs)(n.li,{children:["Click the ",(0,o.jsx)(n.strong,{children:"Azure Active Directory"})," from the services they offer, and click the ",(0,o.jsx)(n.strong,{children:"App Registrations"})," from the left menu."]}),"\n",(0,o.jsxs)(n.li,{children:["Click ",(0,o.jsx)(n.strong,{children:"New Registration"})," at the top and enter a description, select your ",(0,o.jsx)(n.strong,{children:"access type"})," and add your ",(0,o.jsx)(n.strong,{children:"Redirect URI"}),", which redirect the user to the application after logging in. In our case, this will be ",(0,o.jsx)(n.code,{children:"${your_logto_origin}/callback/${connector_id}"}),". e.g. ",(0,o.jsx)(n.code,{children:"https://logto.dev/callback/${connector_id}"}),". You need to select Web as Platform. The ",(0,o.jsx)(n.code,{children:"connector_id"})," can be found on the top bar of the Logto Admin Console connector details page."]}),"\n",(0,o.jsxs)(n.li,{children:["If you select ",(0,o.jsx)(n.strong,{children:"Single Tenant"})," for access type then you need to enter ",(0,o.jsx)(n.strong,{children:"TenantID"}),", else you need to enter ",(0,o.jsx)(n.code,{children:"common"})," as Tenant ID."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"configure-your-client-secret",children:"Configure your client secret"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["In your newly created project, click the ",(0,o.jsx)(n.strong,{children:"Certificates & Secrets"})," to get a client secret, and click the ",(0,o.jsx)(n.strong,{children:"New client secret"})," from the top."]}),"\n",(0,o.jsx)(n.li,{children:"Enter a description and an expiration."}),"\n",(0,o.jsxs)(n.li,{children:["This will only show your client secret once. Save the ",(0,o.jsx)(n.strong,{children:"value"})," to a secure location."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"compose-the-connector-json",children:"Compose the connector JSON"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Add your App Registration's ",(0,o.jsx)(n.strong,{children:"Client ID"})," into logto json."]}),"\n",(0,o.jsxs)(n.li,{children:["Add your ",(0,o.jsx)(n.strong,{children:"Client Secret"})," into logto json."]}),"\n",(0,o.jsxs)(n.li,{children:["Add your App Registration's ",(0,o.jsx)(n.strong,{children:"Tenant ID"})," into logto json."]}),"\n",(0,o.jsxs)(n.li,{children:["Add your Microsoft ",(0,o.jsx)(n.strong,{children:"Login Url"}),' into logto json. This defaults to "',(0,o.jsx)(n.a,{href:"https://login.microsoftonline.com/",children:"https://login.microsoftonline.com/"}),"\" for many applications, but you can set your custom domain if you have one. (Don't forget the trailing slash)"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsonc",children:'{\n  "clientId": "<client-id>",\n  "clientSecret": "<client-secret>",\n  "tenantId": "<tenant-id>", // use "common" if you did\'t select **Single Tenant**\n  "cloudInstance": "https://login.microsoftonline.com/",\n}\n'})}),"\n",(0,o.jsx)(n.h4,{id:"config-types",children:"Config types"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Name"}),(0,o.jsx)(n.th,{children:"Type"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"clientId"}),(0,o.jsx)(n.td,{children:"string"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"clientSecret"}),(0,o.jsx)(n.td,{children:"string"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"tenantId"}),(0,o.jsx)(n.td,{children:"string"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"cloudInstance"}),(0,o.jsx)(n.td,{children:"string"})]})]})]}),"\n",(0,o.jsx)(n.h3,{id:"references",children:"References"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/azure/active-directory/develop/scenario-web-app-sign-user-overview?tabs=nodejs",children:"Web app that signs in users"})})]})}function a(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(r,{...e})}):r(e)}},43236:(e,n,t)=>{t.d(n,{ZP:()=>g,d$:()=>u});var o=t(11527),i=t(17279),s=t(45965),r=t(16331),a=t(33266),c=t(99009),l=t(39542),d=t(13197),h=t(94842);const u=[...s.d$,{value:"Installation",id:"installation",level:3},...d.d$,{value:"Init LogtoClient",id:"init-logtoclient",level:3},...l.d$,{value:"Implement sign-in",id:"implement-sign-in",level:3},...a.d$,{value:"Implement sign-out",id:"implement-sign-out",level:3},...c.d$,{value:"Handle authentication status",id:"handle-authentication-status",level:3},...r.d$,...h.d$];function p(e){const n={h3:"h3",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.ZP,{}),"\n",(0,o.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,o.jsx)(d.ZP,{}),"\n",(0,o.jsx)(n.h3,{id:"init-logtoclient",children:"Init LogtoClient"}),"\n",(0,o.jsx)(l.ZP,{}),"\n",(0,o.jsx)(n.h3,{id:"implement-sign-in",children:"Implement sign-in"}),"\n",(0,o.jsx)(a.ZP,{}),"\n",(0,o.jsx)(n.h3,{id:"implement-sign-out",children:"Implement sign-out"}),"\n",(0,o.jsx)(c.ZP,{}),"\n",(0,o.jsx)(n.h3,{id:"handle-authentication-status",children:"Handle authentication status"}),"\n",(0,o.jsx)(r.ZP,{}),"\n",(0,o.jsx)(h.ZP,{sdk:"Express"})]})}function g(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},12665:(e,n,t)=>{t.d(n,{ZP:()=>a,d$:()=>s});var o=t(11527),i=t(17279);const s=[];function r(e){const n={img:"img",p:"p",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:'To add a social connector, go to the "Connector" tab in the Admin Console, then click on "Social Connectors". From there, click "Add Social Connector".'}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Connector tab",src:t(88065).Z+"",width:"3352",height:"1226"})}),"\n",(0,o.jsxs)("p",{children:['In the openning modal, select "',e.connector,'" and click "Next".']}),"\n",(0,o.jsx)(n.p,{children:"On the next page, you will see a two-column layout with the README content on the left and configuration on the right."}),"\n",(0,o.jsx)(n.p,{children:"Feel free to follow the README file in place or read the following section to complete the configuration process. If you follow the in-place guide, you can skip the next section."})]})}function a(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(r,{...e})}):r(e)}},80710:(e,n,t)=>{t.d(n,{ZP:()=>c,d$:()=>r});var o=t(11527),i=t(17279);const s=t.p+"assets/images/create-application-modal-136b6119e66a20d765a416417aeeefda.png",r=[{value:"Choose your application type",id:"choose-your-application-type",level:3},{value:"Enter application name",id:"enter-application-name",level:3}];function a(e){const n={code:"code",h3:"h3",img:"img",p:"p",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"In you browser, open a new tab and enter the link of Logto Admin Console."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Get Started",src:t(57794).Z+"",width:"2354",height:"588"})}),"\n",(0,o.jsxs)(n.p,{children:['Once the page is loaded, in the "Get Started" section click the ',(0,o.jsx)(n.code,{children:"View all"})," link to open the application framework list page."]}),"\n",(0,o.jsx)(n.h3,{id:"choose-your-application-type",children:"Choose your application type"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Framework List",src:t(43477).Z+"",width:"3626",height:"2804"})}),"\n",(0,o.jsx)("p",{children:(0,o.jsxs)(n.p,{children:['In the opening modal, scroll to the "',e.type,'" section or filter all the available "\n',e.type,'" frameworks using the quick filter checkboxes on the left.']})}),"\n",(0,o.jsx)("p",{children:(0,o.jsxs)(n.p,{children:["Click the"," ","\n",e.framework.split("/").map((e=>`"${e.trim()}"`)).join(" / ")," ","\nframework card to start creating your application."]})}),"\n",(0,o.jsx)(n.h3,{id:"enter-application-name",children:"Enter application name"}),"\n",(0,o.jsx)("center",{children:(0,o.jsx)("img",{src:s,alt:"Create Application modal",width:"700"})}),"\n",(0,o.jsx)(n.p,{children:'Enter the application name, e.g., "Bookstore," and click "Create Application."'}),"\n",(0,o.jsx)(n.p,{children:"\ud83c\udf89 Ta-da! You just created your first application in Logto. You'll see a congrats page which includes a detailed integration guide. Follow the guide to see what the experience will be in your application."})]})}function c(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},31877:(e,n,t)=>{t.d(n,{ZP:()=>a,d$:()=>s});var o=t(11527),i=t(17279);const s=[];function r(e){const n={admonition:"admonition",img:"img",p:"p",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:'Switch to the "Sign-in Experience" tab, then click the "Sign-up and Sign-in" tab.'}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:"If it's the first time you enter the tab, you will see a quick introduction about Sign-in Experience and its basic configuration."})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Sign-in Experience tab",src:t(68150).Z+"",width:"3502",height:"1794"})}),"\n",(0,o.jsx)("p",{children:(0,o.jsxs)(n.p,{children:['Select "None" for the "Sign-up identifier" to provide minimum sign-up effort for ',e.connector," ","\nsign-in, which may increase your conversion rate."]})}),"\n",(0,o.jsx)("p",{children:(0,o.jsxs)(n.p,{children:['In the "Social sign-in" section, add "Add Social Connector" and choose "',e.connector,'". Then\nyou should be able to see a button with text "Continue with ',e.connector,'" in the preview\nsection.']})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Save changes",src:t(75877).Z+"",width:"2474",height:"188"})}),"\n",(0,o.jsx)(n.p,{children:'Finally, click "Save Changes" on the bottom right corner.'})]})}function a(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(r,{...e})}):r(e)}},87593:(e,n,t)=>{t.d(n,{ZP:()=>a,d$:()=>s});var o=t(11527),i=t(17279);const s=[];function r(e){const n={a:"a",admonition:"admonition",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:["\n","\n",(0,o.jsx)(n.admonition,{title:"For our new friends",type:"info",children:(0,o.jsxs)(n.p,{children:["Every app needs authentication and authorization. ",(0,o.jsx)(n.a,{href:"https://logto.io",children:"Logto"})," is an Auth0 alternative designed for modern apps and SaaS products."]})}),"\n",(0,o.jsx)("p",{children:(0,o.jsxs)(n.p,{children:["In this article, we will go through the steps to quickly build the ",e.connector," sign-in\nexperience (user authentication) with ",(0,o.jsx)("a",{href:e.link,target:"_blank",rel:"noopener",children:e.sdk})," and\xa0\n",(0,o.jsx)("a",{href:"https://logto.io",target:"_blank",rel:"noopener",children:"Logto"}),"."]})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Prerequisites"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["A running Logto instance. Check out the ",(0,o.jsx)(n.a,{href:"/docs/tutorials/get-started/",children:"get started page"})," if you don't have one."]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)("span",{children:["Basic knowledge of ",(0,o.jsx)("a",{href:e.link,target:"_blank",rel:"noopener",children:e.sdk}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)("span",{children:["A usable ",e.connector," account."]}),"\n"]}),"\n"]}),"\n"]})}function a(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(r,{...e})}):r(e)}},80386:(e,n,t)=>{t.d(n,{ZP:()=>a,d$:()=>s});var o=t(11527),i=t(17279);const s=[];function r(e){const n={p:"p",...(0,i.a)(),...e.components};return(0,o.jsx)("p",{children:(0,o.jsxs)(n.p,{children:['Double check you have filled out necessary values in the Logto connector configuration area. Click\n"Save and Done" (or "Save Changes") and the ',e.connector," connector should be available now."]})})}function a(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(r,{...e})}):r(e)}},94842:(e,n,t)=>{t.d(n,{ZP:()=>a,d$:()=>s});var o=t(11527),i=t(17279);const s=[];function r(e){const n={admonition:"admonition",p:"p",...(0,i.a)(),...e.components};return(0,o.jsx)(n.admonition,{title:"Test your integration",type:"info",children:(0,o.jsxs)(n.p,{children:["Open your ",e.sdk,' app to test if the integration works. When you click the "Sign In" button,\nthe page should be redirected to a Logto sign-in page, and you should be able to create a new\naccount by entering username and password and complete the sign-in process.']})})}function a(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(r,{...e})}):r(e)}},23095:(e,n,t)=>{t.d(n,{ZP:()=>a,d$:()=>s});var o=t(11527),i=t(17279);const s=[];function r(e){const n={p:"p",...(0,i.a)(),...e.components};return(0,o.jsx)("p",{children:(0,o.jsxs)(n.p,{children:["Return to your ",e.sdk," app. You should now be able to sign in with ",e.connector,". Enjoy!"]})})}function a(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(r,{...e})}):r(e)}},31006:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,connector:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var o=t(11527),i=t(17279);t(87593),t(80710),t(12665),t(80386),t(31877),t(23095),t(43236),t(51341);const s={slug:"how-to-build-azure-ad-sign-in-with-express-and-logto",authors:"logto",tags:["authentication","azure-ad","express","js","social-sign-in","sign-in","login"],title:"How to build Azure AD sign-in with Express and Logto"},r=void 0,a={permalink:"/tutorial/how-to-build-azure-ad-sign-in-with-express-and-logto",source:"@site/tutorial/build-with-logto/generated-express-azure-ad.mdx",title:"How to build Azure AD sign-in with Express and Logto",description:"\x3c!--",date:"2024-06-28T03:39:27.000Z",tags:[{inline:!0,label:"authentication",permalink:"/tutorial/tags/authentication"},{inline:!0,label:"azure-ad",permalink:"/tutorial/tags/azure-ad"},{inline:!0,label:"express",permalink:"/tutorial/tags/express"},{inline:!0,label:"js",permalink:"/tutorial/tags/js"},{inline:!0,label:"social-sign-in",permalink:"/tutorial/tags/social-sign-in"},{inline:!0,label:"sign-in",permalink:"/tutorial/tags/sign-in"},{inline:!0,label:"login",permalink:"/tutorial/tags/login"}],readingTime:1.295,hasTruncateMarker:!0,authors:[{name:"Logto team",title:"The better identity infrastructure for developers",url:"https://logto.io",imageURL:"https://github.com/logto-io.png",key:"logto"}],frontMatter:{slug:"how-to-build-azure-ad-sign-in-with-express-and-logto",authors:"logto",tags:["authentication","azure-ad","express","js","social-sign-in","sign-in","login"],title:"How to build Azure AD sign-in with Express and Logto"},unlisted:!1,prevItem:{title:"How to build AWS SES Email passwordless sign-in with Express and Logto",permalink:"/tutorial/how-to-build-aws-ses-sign-in-with-express-and-logto"},nextItem:{title:"How to build Discord sign-in with Express and Logto",permalink:"/tutorial/how-to-build-discord-sign-in-with-express-and-logto"}},c={authorsImageUrls:[void 0]},l="Azure AD",d=[];function h(e){return(0,o.jsx)(o.Fragment,{})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h()}},75848:(e,n,t)=>{t.d(n,{ZP:()=>a,d$:()=>s});var o=t(11527),i=t(17279);const s=[];function r(e){const n={p:"p",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("p",{children:(0,o.jsxs)(n.p,{children:["Let's switch to the Application details page of Logto Console. Add a Redirect URI"," ","\n",(0,o.jsx)("code",{children:e.redirectUri}),' and click "Save Changes".']})}),"\n",(0,o.jsx)("img",{alt:"Redirect URI in Logto Console",src:e.figureSrc,width:"600px"})]})}function a(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(r,{...e})}):r(e)}},10637:(e,n,t)=>{t.d(n,{ZP:()=>c,d$:()=>r});var o=t(11527),i=t(17279);const s=t.p+"assets/images/app-secret-2b2c12ae8557fbcf3b283bf86f3ac6db.png",r=[];function a(e){const n={admonition:"admonition",...(0,i.a)(),...e.components};return(0,o.jsxs)(n.admonition,{type:"tip",children:[(0,o.jsx)("p",{children:'You can find and copy "App Secret" from application details page in Admin Console:'}),(0,o.jsx)("img",{alt:"App Secret",src:s,width:"586px"})]})}function c(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},51187:(e,n,t)=>{t.d(n,{ZP:()=>a,d$:()=>s});var o=t(11527),i=t(17279);const s=[];function r(e){const n={admonition:"admonition",code:"code",p:"p",...(0,i.a)(),...e.components};return(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["In the following code snippets, we assume your app is running on ",(0,o.jsx)(n.code,{children:"http://localhost:3000"}),"."]})})}function a(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(r,{...e})}):r(e)}},55556:(e,n,t)=>{t.d(n,{ZP:()=>a,d$:()=>s});var o=t(11527),i=t(17279);const s=[];function r(e){const n={a:"a",hr:"hr",li:"li",mermaid:"mermaid",ol:"ol",p:"p",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"Before we dive into the details, here's a quick overview of the end-user experience. The sign-in process can be simplified as follows:"}),"\n",(0,o.jsx)(n.mermaid,{value:"graph LR\n    A(Your app) --\x3e|1. Invoke sign-in| B(Logto)\n    B --\x3e|2. Finish sign-in| A"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Your app invokes the sign-in method."}),"\n",(0,o.jsx)(n.li,{children:"The user is redirected to the Logto sign-in page. For native apps, the system browser is opened."}),"\n",(0,o.jsx)(n.li,{children:"The user signs in and is redirected back to your app (configured as the redirect URI)."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Regarding redirect-based sign-in:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["This authentication process follows the ",(0,o.jsx)(n.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html",children:"OpenID Connect (OIDC)"})," protocol, and Logto enforces strict security measures to protect user sign-in."]}),"\n",(0,o.jsx)(n.li,{children:"If you have multiple apps, you can use the same identity provider (Logto). Once the user signs in to one app, Logto will automatically complete the sign-in process when the user accesses another app."}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["To learn more about the rationale and benefits of redirect-based sign-in, see ",(0,o.jsx)(n.a,{href:"/docs/tutorials/get-started/sign-in-experience",children:"Logto sign-in experience explained"}),"."]}),"\n",(0,o.jsx)(n.hr,{})]})}function a(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(r,{...e})}):r(e)}},45965:(e,n,t)=>{t.d(n,{ZP:()=>a,d$:()=>s});var o=t(11527),i=t(17279);const s=[];function r(e){const n={a:"a",admonition:"admonition",li:"li",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["The sample project is available on our ",(0,o.jsx)(n.a,{href:"https://github.com/logto-io/js/tree/master/packages/express-sample",children:"SDK repository"}),"."]}),"\n"]})})}function a(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(r,{...e})}):r(e)}},16331:(e,n,t)=>{t.d(n,{ZP:()=>a,d$:()=>s});var o=t(11527),i=t(17279);const s=[{value:"Fetch user info",id:"fetch-user-info",level:4}];function r(e){const n={a:"a",code:"code",h4:"h4",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["In Logto SDK, you can use the ",(0,o.jsx)(n.code,{children:"withLogto"})," middleware to get ",(0,o.jsx)(n.code,{children:"req.user.isAuthenticated"})," to check the authentication status, if the user is signed in, the value will be ",(0,o.jsx)(n.code,{children:"true"}),", otherwise, the value will be ",(0,o.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"import { withLogto } from '@logto/express';\n\napp.use(withLogto(config));\n"})}),"\n",(0,o.jsx)(n.p,{children:"No, let's use this value to protect routes by creating a simple middleware:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"const requireAuth = async (req: Request, res: Response, next: NextFunction) => {\n  if (!req.user.isAuthenticated) {\n    res.redirect('/logto/sign-in');\n  }\n\n  next();\n};\n"})}),"\n",(0,o.jsx)(n.p,{children:"And then use it in the route handler:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"app.get('/protected', requireAuth, (req, res) => {\n  res.end('protected resource');\n});\n"})}),"\n",(0,o.jsx)(n.h4,{id:"fetch-user-info",children:"Fetch user info"}),"\n",(0,o.jsxs)(n.p,{children:["For most cases, it is recommended to use ",(0,o.jsx)(n.code,{children:"claims"})," in ",(0,o.jsx)(n.code,{children:"req.user"}),' as "user info", this can be fast because ',(0,o.jsx)(n.code,{children:"claims"})," is cached when tokens are granted. If you need more accurate user info, set ",(0,o.jsx)(n.code,{children:"config.fetchUserInfo"})," to ",(0,o.jsx)(n.code,{children:"true"}),", to tell the SDK to fetch the user information from the OIDC ",(0,o.jsx)(n.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html#UserInfo",children:"UserInfo Endpoint"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"app.get('/user', withLogto({ ...config, fetchUserInfo: true }), (req, res) => {\n  res.json(req.user.userInfo);\n});\n"})})]})}function a(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(r,{...e})}):r(e)}},33266:(e,n,t)=>{t.d(n,{ZP:()=>d,d$:()=>c});var o=t(11527),i=t(17279),s=t(19573),r=t(75848),a=t(55556);const c=[...a.d$,{value:"Configure sign-in redirect URI",id:"configure-sign-in-redirect-uri",level:4},...r.d$,{value:"Prepare logto routes",id:"prepare-logto-routes",level:4},{value:"Sign in",id:"sign-in",level:4}];function l(e){const n={code:"code",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.ZP,{}),"\n",(0,o.jsx)(n.h4,{id:"configure-sign-in-redirect-uri",children:"Configure sign-in redirect URI"}),"\n",(0,o.jsx)(r.ZP,{figureSrc:s.Z,redirectUri:"http://localhost:3000/logto/sign-in-callback"}),"\n",(0,o.jsx)(n.h4,{id:"prepare-logto-routes",children:"Prepare logto routes"}),"\n",(0,o.jsx)(n.p,{children:"Prepare routes to connect with Logto."}),"\n",(0,o.jsx)(n.p,{children:"Go back to your IDE/editor, use the following code to implement the API routes first:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"import { handleAuthRoutes } from '@logto/express';\n\napp.use(handleAuthRoutes(config));\n"})}),"\n",(0,o.jsx)(n.p,{children:"This will create 3 routes automatically:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"/logto/sign-in"}),": Sign in with Logto."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"/logto/sign-in-callback"}),": Handle sign-in callback."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"/logto/sign-out"}),": Sign out from Logto."]}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"sign-in",children:"Sign in"}),"\n",(0,o.jsx)(n.p,{children:"We're almost there! Now, create a sign-in button to redirect to the sign-in route on user click."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"app.get('/', (req, res) => {\n  res.setHeader('content-type', 'text/html');\n  res.end(`<div><a href=\"/logto/sign-in\">Sign In</a></div>`);\n});\n"})})]})}function d(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},99009:(e,n,t)=>{t.d(n,{ZP:()=>a,d$:()=>s});var o=t(11527),i=t(17279);const s=[];function r(e){const n={code:"code",p:"p",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["Calling ",(0,o.jsx)(n.code,{children:"/logto/sign-out"})," will clear all the Logto data in memory and cookies if they exist."]}),"\n",(0,o.jsxs)(n.p,{children:["After signing out, it'll be great to redirect your user back to your website. Let's add ",(0,o.jsx)(n.code,{children:"http://localhost:3000"})," as one of the Post Sign-out URIs in Admin Console (shows under Redirect URIs)."]})]})}function a(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(r,{...e})}):r(e)}},39542:(e,n,t)=>{t.d(n,{ZP:()=>l,d$:()=>a});var o=t(11527),i=t(17279),s=t(10637),r=t(51187);const a=[...r.d$,...s.d$,{value:"Prepare required middlewares",id:"prepare-required-middlewares",level:3}];function c(e){const n={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.ZP,{}),"\n",(0,o.jsx)(s.ZP,{}),"\n",(0,o.jsx)(n.p,{children:"Import and initialize LogtoClient:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"import { LogtoExpressConfig } from '@logto/express';\n\nconst config: LogtoExpressConfig = {\n  appId: '<your-application-id>',\n  appSecret: '<your-application-secret>',\n  endpoint: '<your-logto-endpoint>', // E.g. http://localhost:3001\n  baseUrl: '<your-express-app-base-url>', // E.g. http://localhost:3000\n};\n"})}),"\n",(0,o.jsx)(n.h3,{id:"prepare-required-middlewares",children:"Prepare required middlewares"}),"\n",(0,o.jsxs)(n.p,{children:["The SDK requires ",(0,o.jsx)(n.a,{href:"https://www.npmjs.com/package/express-session",children:"express-session"})," to be configured in prior."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"import cookieParser from 'cookie-parser';\nimport session from 'express-session';\n\napp.use(cookieParser());\napp.use(\n  session({\n    secret: 'random_session_key',\n    cookie: { maxAge: 14 * 24 * 60 * 60 * 1000 }, // In miliseconds\n  })\n);\n"})})]})}function l(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},13197:(e,n,t)=>{t.d(n,{ZP:()=>l,d$:()=>a});var o=t(11527),i=t(17279),s=t(75696),r=t(78407);const a=[];function c(e){const n={code:"code",pre:"pre",...(0,i.a)(),...e.components};return(0,o.jsxs)(r.Z,{children:[(0,o.jsx)(s.Z,{value:"npm",label:"npm",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"npm i @logto/express cookie-parser express-session\n"})})}),(0,o.jsx)(s.Z,{value:"yarn",label:"Yarn",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"yarn add @logto/express cookie-parser express-session\n"})})}),(0,o.jsx)(s.Z,{value:"pnpm",label:"pnpm",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"pnpm add @logto/express cookie-parser express-session\n"})})})]})}function l(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},75696:(e,n,t)=>{t.d(n,{Z:()=>r});t(50959);var o=t(5341);const i={tabItem:"tabItem_YHvg"};var s=t(11527);function r(e){let{children:n,hidden:t,className:r}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,o.Z)(i.tabItem,r),hidden:t,children:n})}},78407:(e,n,t)=>{t.d(n,{Z:()=>y});var o=t(50959),i=t(5341),s=t(18387),r=t(28903),a=t(15885),c=t(35927),l=t(38894),d=t(70148);function h(e){return o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:t}=e;return(0,o.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:t,attributes:o,default:i}}=e;return{value:n,label:t,attributes:o,default:i}}))}(t);return function(e){const n=(0,l.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const i=(0,r.k6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c._X)(s),(0,o.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(i.location.search);n.set(s,e),i.replace({...i.location,search:n.toString()})}),[s,i])]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,s=u(e),[r,c]=(0,o.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const o=t.find((e=>e.default))??t[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:n,tabValues:s}))),[l,h]=g({queryString:t,groupId:i}),[x,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,s]=(0,d.Nk)(t);return[i,(0,o.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:i}),j=(()=>{const e=l??x;return p({value:e,tabValues:s})?e:null})();(0,a.Z)((()=>{j&&c(j)}),[j]);return{selectedValue:r,selectValue:(0,o.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);c(e),h(e),m(e)}),[h,m,s]),tabValues:s}}var m=t(20619);const j={tabList:"tabList_bI1r",tabItem:"tabItem_PIQj"};var f=t(11527);function b(e){let{className:n,block:t,selectedValue:o,selectValue:r,tabValues:a}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,s.o5)(),d=e=>{const n=e.currentTarget,t=c.indexOf(n),i=a[t].value;i!==o&&(l(n),r(i))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},n),children:a.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:o===n?0:-1,"aria-selected":o===n,ref:e=>c.push(e),onKeyDown:h,onClick:d,...s,className:(0,i.Z)("tabs__item",j.tabItem,s?.className,{"tabs__item--active":o===n}),children:t??n},n)}))})}function w(e){let{lazy:n,children:t,selectedValue:i}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===i));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function v(e){const n=x(e);return(0,f.jsxs)("div",{className:(0,i.Z)("tabs-container",j.tabList),children:[(0,f.jsx)(b,{...n,...e}),(0,f.jsx)(w,{...n,...e})]})}function y(e){const n=(0,m.Z)();return(0,f.jsx)(v,{...e,children:h(e.children)},String(n))}},19573:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/next-redirect-uri-3200717bb327c2d84cfe6173c9d8aef5.png"},88065:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/connector-tab-social-4e3d582ddc28ceeee3bc3abcb30d4ec0.png"},43477:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/framework-list-fa8640804a64dea54236744f3287635b.png"},57794:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/get-started-82fd0b8e277e116b01ce1ccaa1b04c8d.png"},75877:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/save-changes-cc32c907e69d5d865b13ee0449e34822.png"},68150:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/sie-tab-12b63a01ce248b8eb8edd1cfd796cb1b.png"},17279:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>r});var o=t(50959);const i={},s=o.createContext(i);function r(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);