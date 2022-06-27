"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[5416],{9613:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return h}});var r=t(9496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(t),h=a,g=d["".concat(l,".").concat(h)]||d[h]||u[h]||o;return t?r.createElement(g,s(s({ref:n},p),{},{components:t})):r.createElement(g,s({ref:n},p))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8661:function(e,n,t){t.d(n,{Z:function(){return s}});var r=t(9496),a=t(1626),o="tabItem_ZZXe";function s(e){var n=e.children,t=e.hidden,s=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,s),hidden:t},n)}},2418:function(e,n,t){t.d(n,{Z:function(){return h}});var r=t(5443),a=t(9496),o=t(1626),s=t(5874),i=t(2103),l=t(3299),c=t(2821),p="tabList_kQjL",u="tabItem_wrqk";function d(e){var n,t,s=e.lazy,d=e.block,h=e.defaultValue,g=e.values,m=e.groupId,k=e.className,f=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=g?g:f.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),b=(0,i.l)(v,(function(e,n){return e.value===n.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===h?h:null!=(n=null!=h?h:null==(t=f.find((function(e){return e.props.default})))?void 0:t.props.value)?n:f[0].props.value;if(null!==y&&!v.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,l.U)(),w=N.tabGroupChoices,x=N.setTabGroupChoices,T=(0,a.useState)(y),C=T[0],I=T[1],j=[],q=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var S=w[m];null!=S&&S!==C&&v.some((function(e){return e.value===S}))&&I(S)}var E=function(e){var n=e.currentTarget,t=j.indexOf(n),r=v[t].value;r!==C&&(q(n),I(r),null!=m&&x(m,String(r)))},O=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r,a=j.indexOf(e.currentTarget)+1;t=null!=(r=j[a])?r:j[0];break;case"ArrowLeft":var o,s=j.indexOf(e.currentTarget)-1;t=null!=(o=j[s])?o:j[j.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},k)},v.map((function(e){var n=e.value,t=e.label,s=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:C===n?0:-1,"aria-selected":C===n,key:n,ref:function(e){return j.push(e)},onKeyDown:O,onFocus:E,onClick:E},s,{className:(0,o.Z)("tabs__item",u,null==s?void 0:s.className,{"tabs__item--active":C===n})}),null!=t?t:n)}))),s?(0,a.cloneElement)(f.filter((function(e){return e.props.value===C}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},f.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==C})}))))}function h(e){var n=(0,s.Z)();return a.createElement(d,(0,r.Z)({key:String(n)},e))}},1430:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return h},default:function(){return v},frontMatter:function(){return d},metadata:function(){return g},toc:function(){return k}});var r=t(5443),a=t(3010),o=(t(9496),t(9613)),s=t(2418),i=t(8661),l=["components"],c={toc:[]};function p(e){var n=e.components,t=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",null,'This tutorial assumes you have created an Application of type "',t.type,'" in Admin Console. If you are not ready,'," ",(0,o.kt)("a",{href:"../../tutorials/get-started/create-and-integrate-the-first-app"},"read this")," one before continuing."))))}p.isMDXComponent=!0;var u=["components"],d={sidebar_label:"Traditional Web"},h="Traditional Web: Integrate with Logto",g={unversionedId:"docs/recipes/integrate-logto/traditional",id:"docs/recipes/integrate-logto/traditional",title:"Traditional Web: Integrate with Logto",description:"Your app may run on the server-side instead of the browser, using frameworks like Django, Express, Laravel, NextJS, etc. That is called a Traditional Web App. For now, you need to integrate Logto manually. This article guides you on how to finish it step by step. And we take Express in Node.js as an example.",source:"@site/docs/docs/recipes/integrate-logto/traditional.mdx",sourceDirName:"docs/recipes/integrate-logto",slug:"/docs/recipes/integrate-logto/traditional",permalink:"/zh-cn/docs/recipes/integrate-logto/traditional",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/docs/recipes/integrate-logto/traditional.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Traditional Web"},sidebar:"docsSidebar",previous:{title:"React",permalink:"/zh-cn/docs/recipes/integrate-logto/react"},next:{title:"Vanilla JS",permalink:"/zh-cn/docs/recipes/integrate-logto/vanilla-js"}},m={},k=[{value:"Start an Express project",id:"start-an-express-project",level:2},{value:"Install dependencies",id:"install-dependencies",level:2},{value:"Use session",id:"use-session",level:2},{value:"Prepare functions to authenticate users",id:"prepare-functions-to-authenticate-users",level:2},{value:"Sign in",id:"sign-in",level:2},{value:"Sign out",id:"sign-out",level:2},{value:"Protect resource",id:"protect-resource",level:2},{value:"Get source code",id:"get-source-code",level:2},{value:"Further readings",id:"further-readings",level:2}],f={toc:k};function v(e){var n=e.components,t=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"traditional-web-integrate-with-logto"},"Traditional Web: Integrate with Logto"),(0,o.kt)(p,{type:"Traditional Web",mdxType:"AppNote"}),(0,o.kt)("p",null,"Your app may run on the server-side instead of the browser, using frameworks like Django, Express, Laravel, NextJS, etc. That is called a Traditional Web App. For now, you need to integrate Logto manually. This article guides you on how to finish it step by step. And we take Express in Node.js as an example."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This article is not just for Express, and if you are using other frameworks or even other languages, you can replace ",(0,o.kt)("inlineCode",{parentName:"p"},"@logto/js")," with other language's core SDK and then adjust some of the steps."))),(0,o.kt)("h2",{id:"start-an-express-project"},"Start an Express project"),(0,o.kt)("p",null,"With ",(0,o.kt)("inlineCode",{parentName:"p"},"express-generator"),", you can quickly start an Express project."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir express-logto\ncd express-logto\nnpx express-generator\n")),(0,o.kt)("h2",{id:"install-dependencies"},"Install dependencies"),(0,o.kt)("p",null,"The demo app will need three dependencies:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"@logto/js"),": Logto's core SDK for JavaScript."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"node-fetch"),": Minimal code for a ",(0,o.kt)("inlineCode",{parentName:"li"},"window.fetch")," compatible API on Node.js runtime."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"express-session"),": A session middleware, we'll use the session to store user tokens."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"js-base64"),": Yet another Base64 transcoder.")),(0,o.kt)(s.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"npm",label:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @logto/js node-fetch@v2 express-session js-base64\n"))),(0,o.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @logto/js node-fetch@v2 express-session js-base64\n"))),(0,o.kt)(i.Z,{value:"pnpm",label:"pnpm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm add @logto/js node-fetch@v2 express-session js-base64\n")))),(0,o.kt)("h2",{id:"use-session"},"Use session"),(0,o.kt)("p",null,"When a user is signed in, it will get a set of tokens (access token, id token, refresh token) and interaction data, and the session is an excellent place to store them."),(0,o.kt)("p",null,"We have installed ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/expressjs/session"},"express-session")," in the previous step, now setup for it by adding some code to ",(0,o.kt)("inlineCode",{parentName:"p"},"app.js"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const session = require('express-session');\n\napp.use(\n  session({\n    secret: 'keyboard cat', // Change to your own secret key\n    cookie: { maxAge: 86400 },\n  })\n);\n")),(0,o.kt)("h2",{id:"prepare-functions-to-authenticate-users"},"Prepare functions to authenticate users"),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"We assume the application runs on ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:3000")," in the following code snippets."))),(0,o.kt)("p",null,"In this step, we will create several functions, and they will help the authentication process:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"getSignInUrl"),": builds and returns a complete URL of the Logto Authorization Server to which users will be redirected."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"handleSignIn"),": parses the callback URL after the authentication process completes, gets the code query parameter, and then fetches tokens (an access token, the refresh token, and an ID token) to complete the sign in process."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"refreshTokens"),": exchanges a new access token using the refresh token.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// logto.js\n\nconst {\n  withReservedScopes,\n  fetchOidcConfig,\n  discoveryPath,\n  createRequester,\n  generateSignInUri,\n  verifyAndParseCodeFromCallbackUri,\n  fetchTokenByAuthorizationCode,\n  fetchTokenByRefreshToken,\n} = require('@logto/js');\nconst fetch = require('node-fetch');\nconst { randomFillSync, createHash } = require('crypto');\nconst { fromUint8Array } = require('js-base64');\n\nconst config = {\n  endpoint: 'https://logto.dev',\n  appId: 'foo',\n  redirectUri: 'http://localhost:3000/callback', // You may need to replace it with your app's production address\n  scopes: withReservedScopes().split(' '),\n};\n\nconst requester = createRequester(fetch);\n\nconst generateRandomString = (length = 64) => {\n  return fromUint8Array(randomFillSync(new Uint8Array(length)), true);\n};\n\nconst generateCodeChallenge = async (codeVerifier) => {\n  const encodedCodeVerifier = new TextEncoder().encode(codeVerifier);\n  const hash = createHash('sha256');\n  hash.update(encodedCodeVerifier);\n  const codeChallenge = hash.digest();\n  return fromUint8Array(codeChallenge, true);\n};\n\nconst getOidcConfig = async () => {\n  return fetchOidcConfig(new URL(discoveryPath, config.endpoint).toString(), requester);\n};\n\nexports.getSignInUrl = async () => {\n  const { authorizationEndpoint } = await getOidcConfig();\n  const codeVerifier = generateRandomString();\n  const codeChallenge = await generateCodeChallenge(codeVerifier);\n  const state = generateRandomString();\n\n  const { redirectUri, scopes, appId: clientId } = config;\n\n  const signInUri = generateSignInUri({\n    authorizationEndpoint,\n    clientId,\n    redirectUri: redirectUri,\n    codeChallenge,\n    state,\n    scopes,\n  });\n\n  return { redirectUri, codeVerifier, state, signInUri };\n};\n\nexports.handleSignIn = async (signInSession, callbackUri) => {\n  const { redirectUri, state, codeVerifier } = signInSession;\n  const code = verifyAndParseCodeFromCallbackUri(callbackUri, redirectUri, state);\n\n  const { appId: clientId } = config;\n  const { tokenEndpoint } = await getOidcConfig();\n  const codeTokenResponse = await fetchTokenByAuthorizationCode(\n    {\n      clientId,\n      tokenEndpoint,\n      redirectUri,\n      codeVerifier,\n      code,\n    },\n    requester\n  );\n\n  return codeTokenResponse;\n};\n\nexports.refreshTokens = async (refreshToken) => {\n  const { appId: clientId, scopes } = config;\n  const { tokenEndpoint } = await getOidcConfig();\n  const tokenResponse = await fetchTokenByRefreshToken(\n    {\n      clientId,\n      tokenEndpoint,\n      refreshToken,\n      scopes,\n    },\n    requester\n  );\n\n  return tokenResponse;\n};\n")),(0,o.kt)("h2",{id:"sign-in"},"Sign in"),(0,o.kt)("p",null,"Create a route in Express to sign in:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const { getSignInUrl } = require('./logto');\n\napp.get('/sign-in', async (req, res) => {\n  const { redirectUri, codeVerifier, state, signInUri } = await getSignInUrl();\n  req.session.signIn = { codeVerifier, state, redirectUri };\n  res.redirect(signInUri);\n});\n")),(0,o.kt)("p",null,"and a route to handle callback:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"app.get('/callback', async (req, res) => {\n  if (!req.session.signIn) {\n    res.send('Bad request.');\n    return;\n  }\n\n  const response = await handleSignIn(\n    req.session.signIn,\n    `${req.protocol}://${req.get('host')}${req.originalUrl}`\n  );\n  req.session.tokens = {\n    ...response,\n    exipresAt: response.expiresIn + Date.now(),\n    idToken: decodeIdToken(response.idToken),\n  };\n  req.session.signIn = null;\n\n  res.redirect('/');\n});\n")),(0,o.kt)("h2",{id:"sign-out"},"Sign out"),(0,o.kt)("p",null,'TODO: link to the "session & cookies" chapter in users reference.'),(0,o.kt)("p",null,'You can clear tokens in session to sign out a user from this application. And check this link to read more about "sign out".'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"app.get('/sign-out', (req, res) => {\n  req.session.tokens = null;\n  res.send('Sign out successful');\n});\n")),(0,o.kt)("h2",{id:"protect-resource"},"Protect resource"),(0,o.kt)("p",null,"Create a middleware named ",(0,o.kt)("inlineCode",{parentName:"p"},"withAuth")," to attach an ",(0,o.kt)("inlineCode",{parentName:"p"},"auth")," object to ",(0,o.kt)("inlineCode",{parentName:"p"},"req"),", and verify if a user is signed in."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// auth.js\n\nconst { decodeIdToken } = require('@logto/js');\nconst { refreshTokens } = require('./logto');\n\nconst withAuth =\n  ({ requireAuth } = { requireAuth: true }) =>\n  async (req, res, next) => {\n    if (requireAuth && !req.session.tokens) {\n      res.redirect('/sign-in');\n      return;\n    }\n\n    if (req.session.tokens) {\n      if (req.session.tokens.expiresAt >= Date.now()) {\n        // Access token expired, refresh for new tokens\n        try {\n          const response = await refreshTokens(req.session.tokens.refreshToken);\n          req.session.tokens = {\n            ...response,\n            exipresAt: response.expiresIn + Date.now(),\n            idToken: decodeIdToken(response.idToken),\n          };\n        } catch {\n          // Exchange failed, redirect to sign in\n          res.redirect('/sign-in');\n          return;\n        }\n      }\n\n      req.auth = req.session.tokens.idToken.sub;\n    }\n\n    next();\n  };\n\nmodule.exports = withAuth;\n")),(0,o.kt)("p",null,"create ",(0,o.kt)("inlineCode",{parentName:"p"},"index")," page, show a sign-in link for guests, and a go-to-profile link for users that already signed in:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"router.get('/', withAuth({ requireAuth: false }), function (req, res, next) {\n  res.render('index', { auth: Boolean(req.auth) });\n});\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jade"},'extends layout\n\nblock content\n  h1 Hello logto\n  if auth\n    p: a(href="/user") Go to profile\n  else\n    p: a(href="/sign-in") Click here to sign in\n')),(0,o.kt)("p",null,"create ",(0,o.kt)("inlineCode",{parentName:"p"},"user")," page, to display ",(0,o.kt)("inlineCode",{parentName:"p"},"userId")," (",(0,o.kt)("inlineCode",{parentName:"p"},"subject"),"):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"app.get('/user', withAuth(), (req, res, next) => {\n  res.render('user', { userId: req.auth });\n});\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jade"},"extends layout\n\nblock content\n  h1 Hello logto\n  p userId: #{userId}\n")),(0,o.kt)("h2",{id:"get-source-code"},"Get source code"),(0,o.kt)("p",null,"You can go to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/logto-io/express-example"},"GitHub")," to get the final code for this tutorial."),(0,o.kt)("h2",{id:"further-readings"},"Further readings"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://link-url-here.org"},"SDK Documentation")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://link-url-here.org"},"OIDC Documentation")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://link-url-here.org"},"Calling API to fetch accessToken"))))}v.isMDXComponent=!0}}]);