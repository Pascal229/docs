"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[77492],{34990:function(e,n,t){t.d(n,{ZP:function(){return i}});var r=t(11527),o=t(17279);function s(e){const n={admonition:"admonition",p:"p",...(0,o.a)(),...e.components};return(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)("p",{children:(0,r.jsxs)(n.p,{children:['This tutorial assumes you have created an Application of type "',e.type,'" in Admin\nConsole.']})})})}function i(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(s,{...e})}):s(e)}},21942:function(e,n,t){t.d(n,{ZP:function(){return i}});var r=t(11527),o=t(17279);function s(e){const n={a:"a",admonition:"admonition",code:"code",p:"p",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["With the user's authorization status, a ",(0,r.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/rfc7519",children:"JWT"})," format ",(0,r.jsx)(n.code,{children:"access_token"})," will be granted and issued by Logto, specifically for the requested API resource. Encrypted and audience-restricted with an expiration time. The token carries all the necessary info to represent the authority of this request."]}),"\n",(0,r.jsxs)(n.p,{children:["Put the token in the ",(0,r.jsx)(n.code,{children:"Authorization"})," field of HTTP headers with the Bearer format (",(0,r.jsx)(n.code,{children:"Bearer YOUR_TOKEN"}),"), and you are good to go."]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["The Bearer Token's integration flow may vary based on the framework or requester you are using. Choose your own way to apply the request ",(0,r.jsx)(n.code,{children:"Authorization"})," header."]})})]})}function i(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(s,{...e})}):s(e)}},13060:function(e,n,t){t.d(n,{ZP:function(){return i}});var r=t(11527),o=t(17279);function s(e){const n={a:"a",p:"p",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("p",{children:(0,r.jsxs)(n.p,{children:["Let's switch to the Application details page of Admin Console in this section. Add a Redirect\nURI ",(0,r.jsx)("code",{children:e.redirectUri}),' and click "Save Changes".']})}),"\n",(0,r.jsx)("img",{alt:"Redirect URI in Admin Console",src:e.figureSrc,width:"600px"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://www.oauth.com/oauth2-servers/redirect-uris/",children:"Redirect URI"})," is an OAuth 2.0 concept which implies the location should redirect after authentication."]})]})}function i(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(s,{...e})}):s(e)}},95273:function(e,n,t){t.d(n,{ZP:function(){return i}});var r=t(11527),o=t(17279);function s(e){const n={a:"a",li:"li",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/recipes/customize-sie/",children:"Customize sign-in experience"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/recipes/configure-connectors/",children:"Configure connectors"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/recipes/rbac/protect-resource/#client",children:"Configure client to use RBAC"})}),"\n"]})}function i(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(s,{...e})}):s(e)}},62318:function(e,n,t){t.d(n,{ZP:function(){return c}});var r=t(11527),o=t(17279),s=t.p+"assets/images/app-secret-2b2c12ae8557fbcf3b283bf86f3ac6db.png";function i(e){const n={admonition:"admonition",...(0,o.a)(),...e.components};return(0,r.jsxs)(n.admonition,{type:"tip",children:[(0,r.jsx)("p",{children:'You can find and copy "App Secret" from application details page in Admin Console:'}),(0,r.jsx)("img",{alt:"App Secret",src:s,width:"586px"}),(0,r.jsx)(n.admonition,{type:"tip"})]})}function c(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}},23221:function(e,n,t){t.d(n,{ZP:function(){return i}});var r=t(11527),o=t(17279);function s(e){const n={a:"a",admonition:"admonition",p:"p",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["Logto also helps you apply authorization to your backend APIs . Please check our ",(0,r.jsx)(n.a,{href:"/docs/recipes/protect-your-api/",children:"Protect your API"})," see how to integrate Logto with your backend applications."]}),"\n",(0,r.jsx)(n.p,{children:"You can claim an authorization token for a protected API Resource request easily through Logto SDK."}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["In order to grant an audience restricted authorization token for your request, make sure the requested API Resource is ",(0,r.jsx)(n.a,{href:"/docs/recipes/protect-your-api/#register-the-api-resources-using-logto-admin-console",children:"registered in the Logto Admin Console"}),"."]})})]})}function i(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(s,{...e})}):s(e)}},76496:function(e,n,t){t.d(n,{ZP:function(){return i}});var r=t(11527),o=t(17279);function s(e){const n={code:"code",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["The user information response will vary based on the scopes used in the ",(0,r.jsx)(n.code,{children:"LogtoConfig"})," while initializing the ",(0,r.jsx)(n.code,{children:"LogtoClient"}),"; and the following table lists the relations between user information and scopes:"]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Field Name"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Required Scope"}),(0,r.jsx)(n.th,{children:"Notes"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"sub"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"openid"})}),(0,r.jsxs)(n.td,{children:["The ",(0,r.jsx)(n.code,{children:"openid"})," scope is added by default."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"name"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"profile"})}),(0,r.jsxs)(n.td,{children:["The ",(0,r.jsx)(n.code,{children:"profile"})," scope is added by default."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"username"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"profile"})}),(0,r.jsxs)(n.td,{children:["The ",(0,r.jsx)(n.code,{children:"profile"})," scope is added by default."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"picture"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"profile"})}),(0,r.jsxs)(n.td,{children:["The ",(0,r.jsx)(n.code,{children:"profile"})," scope is added by default."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"email"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"email"})}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"email_verified"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"boolean"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"email"})}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"phone_number"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"phone"})}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"phone_number_verified"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"boolean"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"phone"})}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"custom_data"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"object"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"custom_data"})}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"identities"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"object"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"identities"})}),(0,r.jsx)(n.td,{})]})]})]})]})}function i(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(s,{...e})}):s(e)}},20017:function(e,n,t){t.d(n,{ZP:function(){return i}});var r=t(11527),o=t(17279);function s(e){const n={admonition:"admonition",code:"code",p:"p",...(0,o.a)(),...e.components};return(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["In the following code snippets, we assume your app is running on ",(0,r.jsx)(n.code,{children:"http://localhost:3000"}),"."]})})}function i(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(s,{...e})}):s(e)}},56986:function(e,n,t){t.d(n,{ZP:function(){return c}});var r=t(11527),o=t(17279),s="data:image/png;base64,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";function i(e){const n={p:"p",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"The sign-in flow can be simplified as:"}),"\n",(0,r.jsx)("img",{alt:"Web sign-in flow",src:s,width:"700pt"})]})}function c(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}},13750:function(e,n,t){t.r(n),t.d(n,{assets:function(){return P},contentTitle:function(){return I},default:function(){return C},frontMatter:function(){return v},metadata:function(){return w},toc:function(){return y}});var r=t(11527),o=t(17279),s=t(34990),i=t(21942),c=t(95273),a=t(23221),l=t(76496),d=t(29152),u=t(82598),h=t(13060),p=t(56986);function g(e){const n={a:"a",code:"code",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(p.ZP,{}),"\n",(0,r.jsx)(n.h3,{id:"configure-sign-in-redirect-uri",children:"Configure sign-in redirect URI"}),"\n",(0,r.jsx)(h.ZP,{figureSrc:u.Z,redirectUri:"http://localhost:3000/api/logto/sign-in-callback"}),"\n",(0,r.jsx)(n.h3,{id:"prepare-api-routes",children:"Prepare API routes"}),"\n",(0,r.jsxs)(n.p,{children:["Prepare ",(0,r.jsx)(n.a,{href:"https://nextjs.org/docs/api-routes/introduction",children:"API routes"})," to connect with Logto."]}),"\n",(0,r.jsx)(n.p,{children:"Go back to your IDE/editor, use the following code to implement the API routes first:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"// pages/api/logto/[action].ts\nimport { logtoClient } from '../../../libraries/logto';\n\nexport default logtoClient.handleAuthRoutes();\n"})}),"\n",(0,r.jsx)(n.p,{children:"This will create 4 routes automatically:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"/api/logto/sign-in"}),": Sign in with Logto."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"/api/logto/sign-in-callback"}),": Handle sign-in callback."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"/api/logto/sign-out"}),": Sign out with Logto."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"/api/logto/user"}),": Check if user is authenticated with Logto. If yes, return user info."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"implement-sign-in-button",children:"Implement sign-in button"}),"\n",(0,r.jsx)(n.p,{children:"We're almost there! In the last step, we will create a sign-in button:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"<button onClick={() => window.location.assign('/api/logto/sign-in')}>Sign In</button>\n"})}),"\n",(0,r.jsx)(n.p,{children:"Now you will be navigated to Logto sign-in page when you click the button."})]})}function x(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(g,{...e})}):g(e)}var j=t(21278),f=t(62318),A=t(20017);function m(e){const n={code:"code",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(A.ZP,{}),"\n",(0,r.jsx)(f.ZP,{}),"\n",(0,r.jsx)(n.p,{children:"Import and initialize LogtoClient:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"// libraries/logto.ts\nimport LogtoClient from '@logto/next';\n\nexport const logtoClient = new LogtoClient({\n  appId: '<your-application-id>',\n  appSecret: '<your-app-secret-copied-from-console>',\n  endpoint: '<your-logto-endpoint>', // E.g. http://localhost:3001\n  baseUrl: '<your-nextjs-app-base-url>', // E.g. http://localhost:3000\n  cookieSecret: 'complex_password_at_least_32_characters_long',\n  cookieSecure: process.env.NODE_ENV === 'production',\n});\n"})})]})}function b(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}const v={sidebar_label:"Next.js"},I="Next.js: Integrate @logto/next",w={id:"docs/recipes/integrate-logto/next-js",title:"Next.js: Integrate @logto/next",description:"Add Logto SDK as a dependency",source:"@site/versioned_docs/version-1.x/docs/recipes/integrate-logto/next-js.mdx",sourceDirName:"docs/recipes/integrate-logto",slug:"/docs/recipes/integrate-logto/next-js",permalink:"/docs/recipes/integrate-logto/next-js",draft:!1,unlisted:!1,editUrl:"https://github.com/logto-io/docs/tree/master/versioned_docs/version-1.x/docs/recipes/integrate-logto/next-js.mdx",tags:[],version:"1.x",frontMatter:{sidebar_label:"Next.js"},sidebar:"docsSidebar",previous:{title:"Next.js 13 App Router",permalink:"/docs/recipes/integrate-logto/next-js-13/"},next:{title:"React",permalink:"/docs/recipes/integrate-logto/react/"}},P={},y=[{value:"Add Logto SDK as a dependency",id:"add-logto-sdk-as-a-dependency",level:2},{value:"Init LogtoClient",id:"init-logtoclient",level:2},{value:"Sign in",id:"sign-in",level:2},{value:"Get user profile",id:"get-user-profile",level:2},{value:"Through API request in front-end",id:"through-api-request-in-front-end",level:3},{value:"Through <code>getServerSideProps</code>",id:"through-getserversideprops",level:3},{value:"Fetch user info",id:"fetch-user-info",level:3},{value:"Protect API and pages",id:"protect-api-and-pages",level:2},{value:"Protect API routes",id:"protect-api-routes",level:3},{value:"Protect pages",id:"protect-pages",level:3},{value:"Sign out",id:"sign-out",level:2},{value:"Backend API authorization",id:"backend-api-authorization",level:2},{value:"Edge runtime",id:"edge-runtime",level:2},{value:"Further readings",id:"further-readings",level:2}];function S(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"nextjs-integrate-logtonext",children:["Next.js: Integrate ",(0,r.jsx)(n.code,{children:"@logto/next"})]}),"\n",(0,r.jsx)(s.ZP,{type:"Traditional Web"}),"\n",(0,r.jsx)(n.h2,{id:"add-logto-sdk-as-a-dependency",children:"Add Logto SDK as a dependency"}),"\n",(0,r.jsx)(d.ZP,{}),"\n",(0,r.jsx)(n.h2,{id:"init-logtoclient",children:"Init LogtoClient"}),"\n",(0,r.jsx)(b,{}),"\n",(0,r.jsx)(n.h2,{id:"sign-in",children:"Sign in"}),"\n",(0,r.jsx)(x,{}),"\n",(0,r.jsx)(n.h2,{id:"get-user-profile",children:"Get user profile"}),"\n",(0,r.jsx)(n.p,{children:"There are two ways to get user profile."}),"\n",(0,r.jsx)(n.h3,{id:"through-api-request-in-front-end",children:"Through API request in front-end"}),"\n",(0,r.jsxs)(n.p,{children:["You can fetch user info by calling ",(0,r.jsx)(n.code,{children:"/api/logto/user"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { LogtoContext } from '@logto/next';\nimport useSWR from 'swr';\n\nconst Home = () => {\n  const { data } = useSWR<LogtoContext>('/api/logto/user');\n\n  return <div>userId: {data?.claims?.sub}</div>;\n};\n\nexport default Home;\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Check ",(0,r.jsx)(n.a,{href:"https://swr.vercel.app/docs/getting-started",children:"this guide"})," to learn more about ",(0,r.jsx)(n.code,{children:"useSWR"}),"."]}),"\n",(0,r.jsxs)(n.h3,{id:"through-getserversideprops",children:["Through ",(0,r.jsx)(n.code,{children:"getServerSideProps"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { LogtoContext } from '@logto/next';\nimport { logtoClient } from '../libraries/logto';\n\ntype Props = {\n  user: LogtoContext;\n};\n\nconst Profile = ({ user }: Props) => {\n  return <div>User ID: {user.claims?.sub}</div>;\n};\n\nexport default Profile;\n\nexport const getServerSideProps = logtoClient.withLogtoSsr(async function ({ request }) {\n  const { user } = request;\n\n  return {\n    props: { user },\n  };\n});\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Check ",(0,r.jsx)(n.a,{href:"https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props",children:"Next.js documentation"})," for more details on ",(0,r.jsx)(n.code,{children:"getServerSideProps"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"fetch-user-info",children:"Fetch user info"}),"\n",(0,r.jsxs)(n.p,{children:["For most cases, it is recommended to use ",(0,r.jsx)(n.code,{children:"claims"}),", this can be fast because ",(0,r.jsx)(n.code,{children:"claims"})," is cached when tokens are granted. If you need more accurate user info, set ",(0,r.jsx)(n.code,{children:"config.fetchUserInfo"})," to ",(0,r.jsx)(n.code,{children:"true"}),", to tell the SDK to fetch the user information from the OIDC ",(0,r.jsx)(n.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html#UserInfo",children:"UserInfo Endpoint"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"// pages/api/logto/user-info.ts\nimport { logtoClient } from '../../../libraries/logto';\n\nexport default logtoClient.handleAuthRoutes({ fetchUserInfo: true });\n"})}),"\n",(0,r.jsx)(l.ZP,{}),"\n",(0,r.jsx)(n.h2,{id:"protect-api-and-pages",children:"Protect API and pages"}),"\n",(0,r.jsx)(n.h3,{id:"protect-api-routes",children:"Protect API routes"}),"\n",(0,r.jsxs)(n.p,{children:["Wrap your handler with ",(0,r.jsx)(n.code,{children:"logtoClient.withLogtoApiRoute"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"// pages/api/protected-resource.ts\nimport { logtoClient } from '../../libraries/logto';\n\nexport default logtoClient.withLogtoApiRoute((request, response) => {\n  if (!request.user.isAuthenticated) {\n    response.status(401).json({ message: 'Unauthorized' });\n\n    return;\n  }\n\n  response.json({\n    data: 'this_is_protected_resource',\n  });\n});\n"})}),"\n",(0,r.jsx)(n.h3,{id:"protect-pages",children:"Protect pages"}),"\n",(0,r.jsxs)(n.p,{children:["If you don't want anonymous users to access a page, use ",(0,r.jsx)(n.code,{children:"logtoClient.withLogtoSsr"})," to get auth state, and redirect to sign-in route if not authenticated."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"export const getServerSideProps = logtoClient.withLogtoSsr(async function ({ req, res }) {\n  const { user } = req;\n\n  if (!user.isAuthenticated) {\n    res.setHeader('location', '/api/logto/sign-in');\n    res.statusCode = 302;\n    res.end();\n  }\n\n  return {\n    props: { user },\n  };\n});\n"})}),"\n",(0,r.jsx)(n.h2,{id:"sign-out",children:"Sign out"}),"\n",(0,r.jsx)(j.ZP,{}),"\n",(0,r.jsx)(n.h2,{id:"backend-api-authorization",children:"Backend API authorization"}),"\n",(0,r.jsx)(a.ZP,{}),"\n",(0,r.jsx)(n.p,{children:"Add your API resource indicators to the Logto SDK configs:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"// libraries/logto.ts\nimport LogtoClient from '@logto/next';\n\nexport const logtoClient = new LogtoClient({\n  appId: '<your-application-id>',\n  appSecret: '<your-app-secret-copied-from-console>',\n  endpoint: '<your-logto-endpoint>', // E.g. http://localhost:3001\n  baseUrl: '<your-nextjs-app-base-url>', // E.g. http://localhost:3000\n  cookieSecret: 'complex_password_at_least_32_characters_long',\n  cookieSecure: process.env.NODE_ENV === 'production',\n  resources: ['<your-api-resource>'],\n});\n"})}),"\n",(0,r.jsx)(n.p,{children:"Specify the resource when creating the API routes:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"// pages/api/logto/[action].ts\nimport { logtoClient } from '../../../libraries/logto';\n\nexport default logtoClient.handleAuthRoutes({ resource: '<your-target-api-resource>' });\n"})}),"\n",(0,r.jsx)(n.p,{children:"Claim an authorization token from inside wrapper withLogtoApiRoute:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"// pages/api/protected-resource.ts\nimport { logtoClient } from '../../libraries/logto';\n\nexport default logtoClient.withLogtoApiRoute(\n  (request, response) => {\n    if (!request.user.isAuthenticated) {\n      response.status(401).json({ message: 'Unauthorized' });\n\n      return;\n    }\n\n    // Access token can be obtained from request.user.accessToken\n\n    response.json({\n      data: 'this_is_protected_resource',\n    });\n  },\n  { getAccessToken: true, resource: '<your-target-api-resource>' }\n);\n"})}),"\n",(0,r.jsx)(n.p,{children:"You can also get the access token from inside getServerSideProps:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { LogtoContext } from '@logto/next';\nimport { logtoClient } from '../libraries/logto';\n\ntype Props = {\n  user: LogtoContext;\n};\n\nconst Profile = ({ user }: Props) => {\n  return <div>User ID: {user.claims?.sub}</div>;\n};\n\nexport default Profile;\n\nexport const getServerSideProps = logtoClient.withLogtoSsr(\n  async function ({ req }) {\n    const { user } = req;\n\n    // Access token can be obtained from user.accessToken\n\n    return {\n      props: { user },\n    };\n  },\n  { getAccessToken: true, resource: '<your-target-api-resource>' }\n);\n"})}),"\n",(0,r.jsx)(i.ZP,{}),"\n",(0,r.jsx)(n.h2,{id:"edge-runtime",children:"Edge runtime"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.em,{children:["Added in ",(0,r.jsx)(n.code,{children:"@logto/next@2.1.0"})]})}),"\n",(0,r.jsxs)(n.p,{children:["If you want to use the ",(0,r.jsx)(n.a,{href:"https://nextjs.org/docs/app/building-your-application/rendering/edge-and-nodejs-runtimes",children:"edge runtime"})," API routes, you need to use the sub package ",(0,r.jsx)(n.code,{children:"@logto/next/edge"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"// libraries/logto-edge.ts\nimport LogtoClient from '@logto/next/edge';\n\nexport const logtoClient = new LogtoClient({\n  appId: '<your-application-id>',\n  appSecret: '<your-app-secret-copied-from-console>',\n  endpoint: '<your-logto-endpoint>', // E.g. http://localhost:3001\n  baseUrl: '<your-nextjs-app-base-url>', // E.g. http://localhost:3000\n  cookieSecret: 'complex_password_at_least_32_characters_long',\n  cookieSecure: process.env.NODE_ENV === 'production',\n  resources: ['<your-api-resource>'],\n});\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Then set the runtime to ",(0,r.jsx)(n.code,{children:"experimental-edge"})," or ",(0,r.jsx)(n.code,{children:"edge"})," in the API route."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import { logtoClient } from '../../../libraries/logto-edge';\n\nexport default logtoClient.handleSignIn();\n\nexport const config = {\n  runtime: 'experimental-edge',\n};\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["Check the ",(0,r.jsx)(n.a,{href:"https://github.com/logto-io/js/tree/master/packages/next-sample",children:"next-sample"})," to see full example."]})}),"\n",(0,r.jsx)(n.h2,{id:"further-readings",children:"Further readings"}),"\n",(0,r.jsx)(c.ZP,{})]})}function C(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(S,{...e})}):S(e)}},29152:function(e,n,t){t.d(n,{ZP:function(){return a}});var r=t(11527),o=t(17279),s=t(75268),i=t(67234);function c(e){const n={code:"code",pre:"pre",...(0,o.a)(),...e.components};return(0,r.jsxs)(i.Z,{children:[(0,r.jsx)(s.Z,{value:"npm",label:"npm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm i @logto/next\n"})})}),(0,r.jsx)(s.Z,{value:"yarn",label:"Yarn",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"yarn add @logto/next\n"})})}),(0,r.jsx)(s.Z,{value:"pnpm",label:"pnpm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"pnpm add @logto/next\n"})})})]})}function a(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},21278:function(e,n,t){t.d(n,{ZP:function(){return i}});var r=t(11527),o=t(17279);function s(e){const n={code:"code",h3:"h3",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["Calling ",(0,r.jsx)(n.code,{children:"/api/logto/sign-out"})," will clear all the Logto data in memory and cookies if they exist."]}),"\n",(0,r.jsxs)(n.p,{children:["After signing out, it'll be great to redirect your user back to your website. Let's add ",(0,r.jsx)(n.code,{children:"http://localhost:3000"})," as one of the Post Sign-out URIs in Admin Console (shows under Redirect URIs)."]}),"\n",(0,r.jsx)(n.h3,{id:"implement-a-sign-out-button",children:"Implement a sign-out button"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"<button onClick={() => window.location.assign('/api/logto/sign-out')}>Sign Out</button>\n"})})]})}function i(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(s,{...e})}):s(e)}},75268:function(e,n,t){t.d(n,{Z:function(){return i}});t(50959);var r=t(45924),o={tabItem:"tabItem_zBCg"},s=t(11527);function i(e){let{children:n,hidden:t,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,i),hidden:t,children:n})}},67234:function(e,n,t){t.d(n,{Z:function(){return I}});var r=t(50959),o=t(45924),s=t(58748),i=t(28903),c=t(88137),a=t(70670),l=t(91391),d=t(47841);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:o}}=e;return{value:n,label:t,attributes:r,default:o}}))}(t);return function(e){const n=(0,l.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const o=(0,i.k6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,a._X)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(o.location.search);n.set(s,e),o.replace({...o.location,search:n.toString()})}),[s,o])]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:o}=e,s=h(e),[i,a]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[l,u]=g({queryString:t,groupId:o}),[x,j]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,s]=(0,d.Nk)(t);return[o,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:o}),f=(()=>{const e=l??x;return p({value:e,tabValues:s})?e:null})();(0,c.Z)((()=>{f&&a(f)}),[f]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);a(e),u(e),j(e)}),[u,j,s]),tabValues:s}}var j=t(77691),f={tabList:"tabList_nHxI",tabItem:"tabItem_BSGW"},A=t(11527);function m(e){let{className:n,block:t,selectedValue:r,selectValue:i,tabValues:c}=e;const a=[],{blockElementScrollPositionUntilNextRender:l}=(0,s.o5)(),d=e=>{const n=e.currentTarget,t=a.indexOf(n),o=c[t].value;o!==r&&(l(n),i(o))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=a.indexOf(e.currentTarget)+1;n=a[t]??a[0];break}case"ArrowLeft":{const t=a.indexOf(e.currentTarget)-1;n=a[t]??a[a.length-1];break}}n?.focus()};return(0,A.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},n),children:c.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,A.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>a.push(e),onKeyDown:u,onClick:d,...s,className:(0,o.Z)("tabs__item",f.tabItem,s?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function b(e){let{lazy:n,children:t,selectedValue:o}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,A.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function v(e){const n=x(e);return(0,A.jsxs)("div",{className:(0,o.Z)("tabs-container",f.tabList),children:[(0,A.jsx)(m,{...e,...n}),(0,A.jsx)(b,{...e,...n})]})}function I(e){const n=(0,j.Z)();return(0,A.jsx)(v,{...e,children:u(e.children)},String(n))}},82598:function(e,n,t){n.Z=t.p+"assets/images/next-redirect-uri-3200717bb327c2d84cfe6173c9d8aef5.png"},17279:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return i}});var r=t(50959);const o={},s=r.createContext(o);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);