"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[77306],{78047:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>s});var o=t(86070),i=t(15658);const s=[{value:"Set up a project in the Google API Console",id:"set-up-a-project-in-the-google-api-console",level:3},{value:"Configure your consent screen",id:"configure-your-consent-screen",level:3},{value:"Config OAuth consent screen",id:"config-oauth-consent-screen",level:3},{value:"Config scopes",id:"config-scopes",level:3},{value:"Add test users (External user type only)",id:"add-test-users-external-user-type-only",level:3},{value:"Obtain OAuth 2.0 credentials",id:"obtain-oauth-20-credentials",level:3},{value:"References",id:"references",level:3},{value:"Config types",id:"config-types",level:4},{value:"Google developer docs",id:"google-developer-docs",level:4}];function r(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h3,{id:"set-up-a-project-in-the-google-api-console",children:"Set up a project in the Google API Console"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Visit the ",(0,o.jsx)(n.a,{href:"https://console.developers.google.com",children:"Google API Console"})," and sign in with your Google account."]}),"\n",(0,o.jsxs)(n.li,{children:["Click the ",(0,o.jsx)(n.strong,{children:"Select a project"})," button on the top menu bar, and click the ",(0,o.jsx)(n.strong,{children:"New Project"})," button to create a project."]}),"\n",(0,o.jsxs)(n.li,{children:["In your newly created project, click the ",(0,o.jsx)(n.strong,{children:"APIs & Services"})," to enter the ",(0,o.jsx)(n.strong,{children:"APIs & Services"})," menu."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"configure-your-consent-screen",children:"Configure your consent screen"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["On the left ",(0,o.jsx)(n.strong,{children:"APIs & Services"})," menu, click the ",(0,o.jsx)(n.strong,{children:"OAuth consent screen"})," button."]}),"\n",(0,o.jsxs)(n.li,{children:["Choose the ",(0,o.jsx)(n.strong,{children:"User Type"})," you want, and click the ",(0,o.jsx)(n.strong,{children:"Create"})," button. (Note: If you select ",(0,o.jsx)(n.strong,{children:"External"})," as your ",(0,o.jsx)(n.strong,{children:"User Type"}),", you will need to add test users later.)"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Now you will be on the ",(0,o.jsx)(n.strong,{children:"Edit app registration"})," page."]}),"\n",(0,o.jsx)(n.h3,{id:"config-oauth-consent-screen",children:"Config OAuth consent screen"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Follow the instructions to fill out the ",(0,o.jsx)(n.strong,{children:"OAuth consent screen"})," form."]}),"\n",(0,o.jsxs)(n.li,{children:["Click ",(0,o.jsx)(n.strong,{children:"SAVE AND CONTINUE"})," to continue."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"config-scopes",children:"Config scopes"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Click ",(0,o.jsx)(n.strong,{children:"ADD OR REMOVE SCOPES"})," and select ",(0,o.jsx)(n.code,{children:"../auth/userinfo.email"}),", ",(0,o.jsx)(n.code,{children:"../auth/userinfo.profile"})," and ",(0,o.jsx)(n.code,{children:"openid"})," in the popup drawer, and click ",(0,o.jsx)(n.strong,{children:"UPDATE"})," to finish."]}),"\n",(0,o.jsx)(n.li,{children:"Fill out the form as you need."}),"\n",(0,o.jsxs)(n.li,{children:["Click ",(0,o.jsx)(n.strong,{children:"SAVE AND CONTINUE"})," to continue."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"add-test-users-external-user-type-only",children:"Add test users (External user type only)"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Click ",(0,o.jsx)(n.strong,{children:"ADD USERS"})," and add test users to allow these users to access your application while testing."]}),"\n",(0,o.jsxs)(n.li,{children:["Click ",(0,o.jsx)(n.strong,{children:"SAVE AND CONTINUE"})," to continue."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Now you should have the Google OAuth 2.0 consent screen configured."}),"\n",(0,o.jsx)(n.h3,{id:"obtain-oauth-20-credentials",children:"Obtain OAuth 2.0 credentials"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["On the left ",(0,o.jsx)(n.strong,{children:"APIs & Services"})," menu, click the ",(0,o.jsx)(n.strong,{children:"Credentials"})," button."]}),"\n",(0,o.jsxs)(n.li,{children:["On the ",(0,o.jsx)(n.strong,{children:"Credentials"})," page, click the ",(0,o.jsx)(n.strong,{children:"+ CREATE CREDENTIALS"})," button on the top menu bar, and select ",(0,o.jsx)(n.strong,{children:"OAuth client ID"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["On the ",(0,o.jsx)(n.strong,{children:"Create OAuth client ID"})," page, select ",(0,o.jsx)(n.strong,{children:"Web application"})," as the application type."]}),"\n",(0,o.jsx)(n.li,{children:"Fill out the basic information for your application."}),"\n",(0,o.jsxs)(n.li,{children:["Click ",(0,o.jsx)(n.strong,{children:"+ Add URI"})," to add an authorized domain to the ",(0,o.jsx)(n.strong,{children:"Authorized JavaScript origins"})," section. This is the domain that your logto authorization page will be served from. In our case, this will be ",(0,o.jsx)(n.code,{children:"${your_logto_origin}"}),". e.g.",(0,o.jsx)(n.code,{children:"https://logto.dev"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Click ",(0,o.jsx)(n.strong,{children:"+ Add URI"})," in the *",(0,o.jsx)(n.strong,{children:"*Authorized redirect URIs**"})," section to set up the *",(0,o.jsx)(n.strong,{children:"*Authorized redirect URIs**"}),", which redirect the user to the application after logging in. In our case, this will be ",(0,o.jsx)(n.code,{children:"${your_logto_endpoint}/callback/${connector_id}"}),". e.g. ",(0,o.jsx)(n.code,{children:"https://logto.dev/callback/${connector_id}"}),". The ",(0,o.jsx)(n.code,{children:"connector_id"})," can be found on the top bar of the Logto Admin Console connector details page."]}),"\n",(0,o.jsxs)(n.li,{children:["Click ",(0,o.jsx)(n.strong,{children:"Create"})," to finish and then you will get the ",(0,o.jsx)(n.strong,{children:"Client ID"})," and ",(0,o.jsx)(n.strong,{children:"Client Secret"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"references",children:"References"}),"\n",(0,o.jsx)(n.h4,{id:"config-types",children:"Config types"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Name"}),(0,o.jsx)(n.th,{children:"Type"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"clientId"}),(0,o.jsx)(n.td,{children:"string"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"clientSecret"}),(0,o.jsx)(n.td,{children:"string"})]})]})]}),"\n",(0,o.jsx)(n.h4,{id:"google-developer-docs",children:"Google developer docs"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://developers.google.com/identity/protocols/oauth2/openid-connect#appsetup",children:"Google Identity: Setting up OAuth 2.0"})})]})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(r,{...e})}):r(e)}},39958:(e,n,t)=>{t.d(n,{Ay:()=>E,RM:()=>P});var o=t(86070),i=t(15658),s=t(36083),r=t(12654),c=t(87585);function l(e){const n={a:"a",admonition:"admonition",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"This guide will show you how to integrate Logto into your PHP web application."}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["The ",(0,o.jsx)(n.a,{href:"https://github.com/logto-io/php/blob/master/samples/index.php",children:"example"})," uses Laravel, but the concepts are the same for other frameworks."]}),"\n"]})})]})}function a(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}function d(e){const n={code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["In Logto SDK, we can use ",(0,o.jsx)(n.code,{children:"$client->isAuthenticated()"})," to check the authentication status, if the user is signed in, the value will be true, otherwise, the value will be false."]}),"\n",(0,o.jsx)(n.p,{children:"We also need to implement a home page for demonstration:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"If the user is not signed in, show a sign-in button;"}),"\n",(0,o.jsx)(n.li,{children:"If the user is signed in, show a sign-out button."}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-php",children:"Route::get('/', function () {\n  if ($client->isAuthenticated() === false) {\n    return \"Not authenticated <a href='/sign-in'>Sign in</a>\";\n  }\n\n  return \"<a href='/sign-out'>Sign out</a>\";\n});\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}function p(e){const n={code:"code",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["After the user signs in, Logto will redirect the user to the callback URL you set in the Logto Console. In this example, we use ",(0,o.jsx)(n.code,{children:"/callback"})," as the callback URL:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-php",children:"Route::get('/callback', function () {\n  try {\n    $client->handleSignInCallback(); // Handle a lot of stuff\n  } catch (\\Throwable $exception) {\n    return $exception; // Change this to your error handling logic\n  }\n  return redirect('/'); // Redirect the user to the home page after a successful sign-in\n});\n"})})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}var g=t(8899);function x(e){const n={blockquote:"blockquote",code:"code",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"In your web application, add a route to properly handle the sign-in request from users. For example:"}),"\n",(0,o.jsx)(g.A,{language:"php",children:`Route::get('/sign-in', function () {\nreturn redirect($client->signIn('${r.YF}'));\n});`}),"\n",(0,o.jsxs)(n.p,{children:["Replace ",(0,o.jsx)("code",{children:r.YF})," with the callback URL you set in your Logto Console for this application."]}),"\n",(0,o.jsxs)(n.p,{children:["If you want to show the sign-up page on the first screen, you can set ",(0,o.jsx)(n.code,{children:"interactionMode"})," to ",(0,o.jsx)(n.code,{children:"signUp"}),":"]}),"\n",(0,o.jsx)(g.A,{language:"php",children:`Route::get('/sign-in', function () {\nreturn redirect($client->signIn('${r.YF}', InteractionMode::signUp));\n});`}),"\n",(0,o.jsxs)(n.p,{children:["Now, whenever your users visit ",(0,o.jsxs)("code",{children:[r.Ip,"sign-in"]}),", it will start a new sign-in attempt and redirect the user to the Logto sign-in page."]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Note"}),"\nCreating a sign-in route isn't the only way to start a sign-in attempt. You can always use the ",(0,o.jsx)(n.code,{children:"signIn"})," method to get the sign-in URL and redirect the user to it."]}),"\n"]})]})}function j(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(x,{...e})}):x(e)}function m(e){const n={a:"a",blockquote:"blockquote",code:"code",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"postLogoutRedirectUri"})," is optional, and if not provided, the user will be redirected to a Logto default page after a successful sign-out (without redirecting back to your application)."]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Note"}),"\nThe name ",(0,o.jsx)(n.code,{children:"postLogoutRedirectUri"})," is from the ",(0,o.jsx)(n.a,{href:"https://openid.net/specs/openid-connect-rpinitiated-1_0.html",children:"OpenID Connect RP-Initiated Logout"}),' specification. Although Logto uses "sign-out" instead of "logout", the concept is the same.']}),"\n"]})]})}function f(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}const A=[];function b(e){const n={p:"p",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"After the user makes a signing-out request, Logto will clear all user authentication information in the session."}),"\n",(0,o.jsx)(n.p,{children:"To clean up the PHP session and Logto session, a sign-out route can be implemented as follows:"}),"\n",(0,o.jsx)(g.A,{language:"php",children:`Route::get('/sign-out', function () {\nreturn redirect(\n  // Redirect the user to the home page after a successful sign-out\n  $client->signOut('${r.Ip}')\n);\n});`}),"\n",(0,o.jsx)(f,{})]})}function w(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(b,{...e})}):b(e)}var v=t(8670);const y=[...v.RM];function k(e){const n={a:"a",code:"code",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"First, create a Logto config:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-php",metastring:'title="index.php"',children:'use Logto\\Sdk\\LogtoClient;\nuse Logto\\Sdk\\LogtoConfig;\n\n$client = new LogtoClient(\n  new LogtoConfig(\n    endpoint: "https://you-logto-endpoint.app",\n    appId: "replace-with-your-app-id",\n    appSecret: "replace-with-your-app-secret",\n  ),\n);\n'})}),"\n",(0,o.jsx)(v.Ay,{}),"\n",(0,o.jsx)(n.p,{children:"By default, the SDK uses the built-in PHP session to store the Logto data. If you want to use other storage, you can pass a custom storage object as the second parameter:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-php",metastring:'title="index.php"',children:"$client = new LogtoClient(\n  new LogtoConfig(\n    // ...\n  ),\n  new YourCustomStorage(),\n);\n"})}),"\n",(0,o.jsxs)(n.p,{children:["See ",(0,o.jsx)(n.a,{href:"https://github.com/logto-io/php/blob/master/docs/api/classes/Logto/Sdk/Storage/Storage.md",children:"Storage"})," for more details."]})]})}function R(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(k,{...e})}):k(e)}function I(e){const n={code:"code",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"composer require logto/sdk\n"})})}function C(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(I,{...e})}):I(e)}var S=t(92409);const P=[{value:"Installation",id:"installation",level:3},{value:"Init LogtoClient",id:"init-logtoclient",level:3},...y,{value:"Configure redirect URIs",id:"configure-redirect-uris",level:3},...c.RM,...s.RM,...r.RM,{value:"Handle callback",id:"handle-callback",level:3},{value:"Implement sign-in route",id:"implement-sign-in-route",level:3},{value:"Implement sign-out route",id:"implement-sign-out-route",level:3},...A,{value:"Handle authentication status",id:"handle-authentication-status",level:3},...S.RM];function L(e){const n={h3:"h3",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a,{}),"\n",(0,o.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,o.jsx)(C,{}),"\n",(0,o.jsx)(n.h3,{id:"init-logtoclient",children:"Init LogtoClient"}),"\n",(0,o.jsx)(R,{}),"\n",(0,o.jsx)(n.h3,{id:"configure-redirect-uris",children:"Configure redirect URIs"}),"\n",(0,o.jsx)(c.Ay,{}),"\n",(0,o.jsx)(s.Ay,{}),"\n",(0,o.jsx)(r.Ay,{}),"\n",(0,o.jsx)(n.h3,{id:"handle-callback",children:"Handle callback"}),"\n",(0,o.jsx)(u,{}),"\n",(0,o.jsx)(n.h3,{id:"implement-sign-in-route",children:"Implement sign-in route"}),"\n",(0,o.jsx)(j,{}),"\n",(0,o.jsx)(n.h3,{id:"implement-sign-out-route",children:"Implement sign-out route"}),"\n",(0,o.jsx)(w,{}),"\n",(0,o.jsx)(n.h3,{id:"handle-authentication-status",children:"Handle authentication status"}),"\n",(0,o.jsx)(h,{}),"\n",(0,o.jsx)(S.Ay,{sdk:"PHP"})]})}function E(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(L,{...e})}):L(e)}},37391:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>s});var o=t(86070),i=t(15658);const s=[];function r(e){const n={img:"img",p:"p",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:'To add a social connector, go to the "Connector" tab in the Admin Console, then click on "Social connectors". From there, click "Add social connector".'}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Connector tab",src:t(28084).A+"",width:"3352",height:"1226"})}),"\n",(0,o.jsxs)("p",{children:['In the openning modal, select "',e.connector,'" and click "Next".']}),"\n",(0,o.jsx)(n.p,{children:"On the next page, you will see a two-column layout with the README content on the left and configuration on the right."}),"\n",(0,o.jsx)(n.p,{children:"Feel free to follow the README file in place or read the following section to complete the configuration process. If you follow the in-place guide, you can skip the next section."})]})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(r,{...e})}):r(e)}},23471:(e,n,t)=>{t.d(n,{Ay:()=>l,RM:()=>r});var o=t(86070),i=t(15658);const s=t.p+"assets/images/create-application-modal-136b6119e66a20d765a416417aeeefda.png",r=[{value:"Choose your application type",id:"choose-your-application-type",level:3},{value:"Enter application name",id:"enter-application-name",level:3}];function c(e){const n={code:"code",h3:"h3",img:"img",p:"p",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"In you browser, open a new tab and enter the link of Logto Admin Console."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Get Started",src:t(13885).A+"",width:"2354",height:"588"})}),"\n",(0,o.jsxs)(n.p,{children:['Once the page is loaded, in the "Get Started" section click the ',(0,o.jsx)(n.code,{children:"View all"})," link to open the application framework list page."]}),"\n",(0,o.jsx)(n.h3,{id:"choose-your-application-type",children:"Choose your application type"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Framework List",src:t(81684).A+"",width:"3626",height:"2804"})}),"\n",(0,o.jsx)("p",{children:(0,o.jsxs)(n.p,{children:['In the opening modal, scroll to the "',e.type,'" section or filter all the available "\n',e.type,'" frameworks using the quick filter checkboxes on the left.']})}),"\n",(0,o.jsx)("p",{children:(0,o.jsxs)(n.p,{children:["Click the"," ","\n",e.framework.split("/").map((e=>`"${e.trim()}"`)).join(" / ")," ","\nframework card to start creating your application."]})}),"\n",(0,o.jsx)(n.h3,{id:"enter-application-name",children:"Enter application name"}),"\n",(0,o.jsx)("center",{children:(0,o.jsx)("img",{src:s,alt:"Create Application modal",width:"700"})}),"\n",(0,o.jsx)(n.p,{children:'Enter the application name, e.g., "Bookstore," and click "Create application."'}),"\n",(0,o.jsx)(n.p,{children:"\ud83c\udf89 Ta-da! You just created your first application in Logto. You'll see a congrats page which includes a detailed integration guide. Follow the guide to see what the experience will be in your application."})]})}function l(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},42969:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>s});var o=t(86070),i=t(15658);const s=[];function r(e){const n={admonition:"admonition",img:"img",p:"p",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:'Switch to the "Sign-in experience" tab, then click the "Sign-up and sign-in" tab.'}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:"If it's the first time you enter the tab, you will see a quick introduction about Sign-in Experience and its basic configuration."})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Sign-in Experience tab",src:t(16906).A+"",width:"3502",height:"1794"})}),"\n",(0,o.jsx)("p",{children:(0,o.jsxs)(n.p,{children:['Select "None" for the "Sign-up identifier" to provide minimum sign-up effort for ',e.connector," ","\nsign-in, which may increase your conversion rate."]})}),"\n",(0,o.jsx)("p",{children:(0,o.jsxs)(n.p,{children:['In the "Social sign-in" section, add "Add Social Connector" and choose "',e.connector,'". Then\nyou should be able to see a button with text "Continue with ',e.connector,'" in the preview\nsection.']})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Save changes",src:t(3466).A+"",width:"2474",height:"188"})}),"\n",(0,o.jsx)(n.p,{children:'Finally, click "Save changes" on the bottom right corner.'})]})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(r,{...e})}):r(e)}},4914:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>s});var o=t(86070),i=t(15658);const s=[];function r(e){const n={a:"a",admonition:"admonition",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:["\n","\n",(0,o.jsx)(n.admonition,{title:"For our new friends",type:"info",children:(0,o.jsxs)(n.p,{children:["Every app needs authentication and authorization. ",(0,o.jsx)(n.a,{href:"https://logto.io",children:"Logto"})," is an Auth0 alternative designed for modern apps and SaaS products."]})}),"\n",(0,o.jsx)("p",{children:(0,o.jsxs)(n.p,{children:["In this article, we will go through the steps to quickly build the ",e.connector," sign-in\nexperience (user authentication) with ",(0,o.jsx)("a",{href:e.link,target:"_blank",rel:"noopener",children:e.sdk})," and\xa0\n",(0,o.jsx)("a",{href:"https://logto.io",target:"_blank",rel:"noopener",children:"Logto"}),"."]})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Prerequisites"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["A running Logto instance. Check out the ",(0,o.jsx)(n.a,{href:"/introduction",children:"introduction page"})," to get started."]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)("span",{children:["Basic knowledge of ",(0,o.jsx)("a",{href:e.link,target:"_blank",rel:"noopener",children:e.sdk}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)("span",{children:["A usable ",e.connector," account."]}),"\n"]}),"\n"]}),"\n"]})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(r,{...e})}):r(e)}},37448:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>s});var o=t(86070),i=t(15658);const s=[];function r(e){const n={p:"p",...(0,i.R)(),...e.components};return(0,o.jsx)("p",{children:(0,o.jsxs)(n.p,{children:['Double check you have filled out necessary values in the Logto connector configuration area. Click\n"Save and Done" (or "Save changes") and the ',e.connector," connector should be available now."]})})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(r,{...e})}):r(e)}},92409:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>s});var o=t(86070),i=t(15658);const s=[];function r(e){const n={admonition:"admonition",p:"p",...(0,i.R)(),...e.components};return(0,o.jsx)(n.admonition,{title:"Test your integration",type:"info",children:(0,o.jsxs)(n.p,{children:["Open your ",e.sdk,' app to test if the integration works. When you click the "Sign In" button,\nthe page should be redirected to a Logto sign-in page, and you should be able to create a new\naccount by entering username and password and complete the sign-in process.']})})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(r,{...e})}):r(e)}},52878:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>s});var o=t(86070),i=t(15658);const s=[];function r(e){const n={p:"p",...(0,i.R)(),...e.components};return(0,o.jsx)("p",{children:(0,o.jsxs)(n.p,{children:["Return to your ",e.sdk," app. You should now be able to sign in with ",e.connector,". Enjoy!"]})})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(r,{...e})}):r(e)}},45117:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,connector:()=>a,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var o=t(13201),i=t(86070),s=t(15658);t(4914),t(23471),t(37391),t(37448),t(42969),t(52878),t(39958),t(78047);const r={slug:"how-to-build-google-sign-in-with-php-and-logto",authors:"logto",tags:["authentication","google","php","php","social-sign-in","sign-in","login"],title:"How to build Google sign-in with PHP and Logto"},c=void 0,l={authorsImageUrls:[void 0]},a="Google",d=[];function h(e){return(0,i.jsx)(i.Fragment,{})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h()}},8670:(e,n,t)=>{t.d(n,{Ay:()=>l,RM:()=>r});var o=t(86070),i=t(15658);const s=t.p+"assets/images/app-secret-2b2c12ae8557fbcf3b283bf86f3ac6db.png",r=[];function c(e){const n={admonition:"admonition",...(0,i.R)(),...e.components};return(0,o.jsxs)(n.admonition,{type:"tip",children:[(0,o.jsx)("p",{children:'You can find and copy "App Secret" from application details page in Admin Console:'}),(0,o.jsx)("img",{alt:"App Secret",src:s,width:"586px"})]})}function l(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},68347:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>s});var o=t(86070),i=t(15658);const s=[];function r(e){const n={a:"a",li:"li",ol:"ol",p:"p",...(0,i.R)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,o.jsxs)(t,{children:[(0,o.jsx)("summary",{children:"Regarding redirect-based sign-in"}),(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["This authentication process follows the ",(0,o.jsx)(n.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html",children:"OpenID Connect (OIDC)"})," protocol, and Logto enforces strict security measures to protect user sign-in."]}),"\n",(0,o.jsx)(n.li,{children:"If you have multiple apps, you can use the same identity provider (Logto). Once the user signs in to one app, Logto will automatically complete the sign-in process when the user accesses another app."}),"\n"]}),(0,o.jsxs)(n.p,{children:["To learn more about the rationale and benefits of redirect-based sign-in, see ",(0,o.jsx)(n.a,{href:"/concepts/sign-in-experience",children:"Logto sign-in experience explained"}),"."]})]})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(r,{...e})}):r(e)}},36083:(e,n,t)=>{t.d(n,{Ay:()=>l,Ip:()=>s,RM:()=>r});var o=t(86070),i=t(15658);const s="http://localhost:3000/",r=[];function c(e){const n={admonition:"admonition",p:"p",...(0,i.R)(),...e.components};return(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["In the following code snippets, we assume your app is running on ",(0,o.jsx)("code",{children:s}),"."]})})}function l(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},12654:(e,n,t)=>{t.d(n,{Ay:()=>d,Ip:()=>r,YF:()=>c,RM:()=>l});var o=t(86070),i=t(15658);const s="data:image/png;base64,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",r="http://localhost:3000/",c=`${r}callback`,l=[{value:"Configure redirect URIs",id:"configure-redirect-uris",level:4}];function a(e){const n={h4:"h4",p:"p",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:["\n","\n","\n",(0,o.jsx)(n.h4,{id:"configure-redirect-uris",children:"Configure redirect URIs"}),"\n",(0,o.jsxs)(n.p,{children:["Switch to the application details page of Logto Console. Add a redirect URI ",(0,o.jsx)("code",{children:e.redirectUri??"http://localhost:3000/callback"}),"."]}),"\n",(0,o.jsx)("img",{alt:"Redirect URI in Logto Console",src:s,width:"600px"}),"\n",(0,o.jsxs)(n.p,{children:["Just like signing in, users should be redirected to Logto for signing out of the shared session. Once finished, it would be great to redirect the user back to your website. For example, add ",(0,o.jsx)("code",{children:r})," as the post sign-out redirect URI section."]}),"\n",(0,o.jsx)(n.p,{children:'Then click "Save" to save the changes.'})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},87585:(e,n,t)=>{t.d(n,{Ay:()=>l,RM:()=>r});var o=t(86070),i=t(15658),s=t(68347);const r=[...s.RM];function c(e){const n={hr:"hr",li:"li",mermaid:"mermaid",ol:"ol",p:"p",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"Before we dive into the details, here's a quick overview of the end-user experience. The sign-in process can be simplified as follows:"}),"\n",(0,o.jsx)(n.mermaid,{value:"graph LR\n    A(Your app) --\x3e|1. Invoke sign-in| B(Logto)\n    B --\x3e|2. Finish sign-in| A"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Your app invokes the sign-in method."}),"\n",(0,o.jsx)(n.li,{children:"The user is redirected to the Logto sign-in page. For native apps, the system browser is opened."}),"\n",(0,o.jsx)(n.li,{children:"The user signs in and is redirected back to your app (configured as the redirect URI)."}),"\n"]}),"\n",(0,o.jsx)(s.Ay,{}),"\n",(0,o.jsx)(n.hr,{})]})}function l(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},28084:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/connector-tab-social-4e3d582ddc28ceeee3bc3abcb30d4ec0.png"},81684:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/framework-list-fa8640804a64dea54236744f3287635b.png"},13885:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/get-started-82fd0b8e277e116b01ce1ccaa1b04c8d.png"},3466:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/save-changes-cc32c907e69d5d865b13ee0449e34822.png"},16906:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/sie-tab-12b63a01ce248b8eb8edd1cfd796cb1b.png"},13201:e=>{e.exports=JSON.parse('{"permalink":"/zh-CN/tutorial/how-to-build-google-sign-in-with-php-and-logto","source":"@site/tutorial/build-with-logto/generated-php-google.mdx","title":"How to build Google sign-in with PHP and Logto","description":"{/*","date":"2024-11-30T06:41:50.000Z","tags":[{"inline":true,"label":"authentication","permalink":"/zh-CN/tutorial/tags/authentication"},{"inline":true,"label":"google","permalink":"/zh-CN/tutorial/tags/google"},{"inline":true,"label":"php","permalink":"/zh-CN/tutorial/tags/php"},{"inline":true,"label":"php","permalink":"/zh-CN/tutorial/tags/php"},{"inline":true,"label":"social-sign-in","permalink":"/zh-CN/tutorial/tags/social-sign-in"},{"inline":true,"label":"sign-in","permalink":"/zh-CN/tutorial/tags/sign-in"},{"inline":true,"label":"login","permalink":"/zh-CN/tutorial/tags/login"}],"readingTime":1.265,"hasTruncateMarker":true,"authors":[{"name":"Logto team","title":"The better identity infrastructure for developers","url":"https://logto.io","imageURL":"https://github.com/logto-io.png","key":"logto","page":null}],"frontMatter":{"slug":"how-to-build-google-sign-in-with-php-and-logto","authors":"logto","tags":["authentication","google","php","php","social-sign-in","sign-in","login"],"title":"How to build Google sign-in with PHP and Logto"},"unlisted":false,"prevItem":{"title":"How to build GitHub sign-in with PHP and Logto","permalink":"/zh-CN/tutorial/how-to-build-github-sign-in-with-php-and-logto"},"nextItem":{"title":"How to build Hugging Face sign-in with PHP and Logto","permalink":"/zh-CN/tutorial/how-to-build-hugging-face-sign-in-with-php-and-logto"}}')}}]);