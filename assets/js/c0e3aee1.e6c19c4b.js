"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[5214],{9613:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,g=d["".concat(c,".").concat(m)]||d[m]||p[m]||r;return n?a.createElement(g,i(i({ref:t},u),{},{components:n})):a.createElement(g,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8661:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(9496),o=n(1626),r="tabItem_ZZXe";function i(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,i),hidden:n},t)}},2418:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(5443),o=n(9496),r=n(1626),i=n(5874),l=n(2103),c=n(3299),s=n(2821),u="tabList_kQjL",p="tabItem_wrqk";function d(e){var t,n,i=e.lazy,d=e.block,m=e.defaultValue,g=e.values,f=e.groupId,h=e.className,v=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=g?g:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,l.l)(k,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===m?m:null!=(t=null!=m?m:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:v[0].props.value;if(null!==y&&!k.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,c.U)(),w=N.tabGroupChoices,C=N.setTabGroupChoices,x=(0,o.useState)(y),Z=x[0],T=x[1],I=[],O=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var S=w[f];null!=S&&S!==Z&&k.some((function(e){return e.value===S}))&&T(S)}var P=function(e){var t=e.currentTarget,n=I.indexOf(t),a=k[n].value;a!==Z&&(O(t),T(a),null!=f&&C(f,String(a)))},L=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,o=I.indexOf(e.currentTarget)+1;n=null!=(a=I[o])?a:I[0];break;case"ArrowLeft":var r,i=I.indexOf(e.currentTarget)-1;n=null!=(r=I[i])?r:I[I.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,r.Z)("tabs-container",u)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":d},h)},k.map((function(e){var t=e.value,n=e.label,i=e.attributes;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:Z===t?0:-1,"aria-selected":Z===t,key:t,ref:function(e){return I.push(e)},onKeyDown:L,onFocus:P,onClick:P},i,{className:(0,r.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":Z===t})}),null!=n?n:t)}))),i?(0,o.cloneElement)(v.filter((function(e){return e.props.value===Z}))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},v.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==Z})}))))}function m(e){var t=(0,i.Z)();return o.createElement(d,(0,a.Z)({key:String(t)},e))}},1280:function(e,t,n){n.d(t,{ZP:function(){return c}});var a=n(5443),o=n(3010),r=(n(9496),n(9613)),i=["components"],l={toc:[]};function c(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",null,'This tutorial assumes you have created an Application of type "',n.type,'" in Admin Console. If you are not ready,'," ",(0,r.kt)("a",{href:"../../tutorials/get-started/create-and-integrate-the-first-app"},"read this")," one before continuing."))))}c.isMDXComponent=!0},9046:function(e,t,n){n.d(t,{ZP:function(){return c}});var a=n(5443),o=n(3010),r=(n(9496),n(9613)),i=["components"],l={toc:[]};function c(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Let's switch to the Application details page of Admin Console in this section. Add a Redirect URI ",(0,r.kt)("code",null,n.redirectUri),' and click "Save Changes".'),(0,r.kt)("img",{alt:"Redirect URI in Admin Console",src:n.figureSrc,width:"50%"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.oauth.com/oauth2-servers/redirect-uris/"},"Redirect URI")," is an OAuth 2.0 concept which implies the location should redirect after authentication."))}c.isMDXComponent=!0},1482:function(e,t,n){n.d(t,{ZP:function(){return c}});var a=n(5443),o=n(3010),r=(n(9496),n(9613)),i=["components"],l={toc:[]};function c(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/recipes/customize-sie/"},"Customize sign-in experience")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/tutorials/get-started/enable-passcode-sign-in"},"Enable SMS or email passcode sign-in")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/tutorials/get-started/enable-social-sign-in"},"Enable social sign-in")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/recipes/protect-your-api/"},"Protect your API"))))}c.isMDXComponent=!0},6301:function(e,t,n){n.d(t,{ZP:function(){return c}});var a=n(5443),o=n(3010),r=(n(9496),n(9613)),i=["components"],l={toc:[]};function c(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",null,"Before calling ",(0,r.kt)("code",null,n.calling),", make sure you have correctly configured Redirect URI in Admin Console."))))}c.isMDXComponent=!0},1904:function(e,t,n){n.d(t,{ZP:function(){return c}});var a=n(5443),o=n(3010),r=(n(9496),n(9613)),i=["components"],l={toc:[]};function c(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"In the following code snippets, we assume your app runs on ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:1234"),"."))))}c.isMDXComponent=!0},9593:function(e,t,n){n.d(t,{ZP:function(){return s}});var a=n(5443),o=n(3010),r=(n(9496),n(9613)),i=n.p+"assets/images/web-sign-in-flow-e0b056d8128741cf51bb6921ce76a564.png",l=["components"],c={toc:[]};function s(e){var t=e.components,n=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The sign-in flow can be simplied as:"),(0,r.kt)("center",null,(0,r.kt)("img",{alt:"Web sign-in flow",src:i,width:"80%"})))}s.isMDXComponent=!0},7985:function(e,t,n){n.d(t,{ZP:function(){return c}});var a=n(5443),o=n(3010),r=(n(9496),n(9613)),i=["components"],l={toc:[]};function c(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Calling ",(0,r.kt)("inlineCode",{parentName:"p"},".signOut()")," will clear all the Logto data in memory and localStorage if they exist."),(0,r.kt)("p",null,"After signing out, it'll be great to redirect your user back to your website. Let's add ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:1234")," as one of the Post Sign-out URIs in Admin Console (shows under Redirect URIs), and use the URL as the parameter when calling ",(0,r.kt)("inlineCode",{parentName:"p"},".signOut()"),"."))}c.isMDXComponent=!0},5802:function(e,t,n){n.r(t),n.d(t,{assets:function(){return y},contentTitle:function(){return k},default:function(){return C},frontMatter:function(){return v},metadata:function(){return b},toc:function(){return N}});var a=n(5443),o=n(3010),r=(n(9496),n(9613)),i=n(2418),l=n(8661),c=n(1280),s=n(6301),u=n(7985),p=n(9593),d=n(9046),m=n(3937),g=n(1904),f=n(1482),h=["components"],v={sidebar_label:"React"},k="React: Integrate `@logto/react`",b={unversionedId:"docs/recipes/integrate-logto/react",id:"docs/recipes/integrate-logto/react",title:"React: Integrate `@logto/react`",description:"Add Logto SDK as a dependency",source:"@site/docs/docs/recipes/integrate-logto/react.mdx",sourceDirName:"docs/recipes/integrate-logto",slug:"/docs/recipes/integrate-logto/react",permalink:"/docs/recipes/integrate-logto/react",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/docs/recipes/integrate-logto/react.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"React"},sidebar:"docsSidebar",previous:{title:"iOS",permalink:"/docs/recipes/integrate-logto/ios"},next:{title:"Traditional Web",permalink:"/docs/recipes/integrate-logto/traditional"}},y={},N=[{value:"Add Logto SDK as a dependency",id:"add-logto-sdk-as-a-dependency",level:2},{value:"Init LogtoClient",id:"init-logtoclient",level:2},{value:"Sign in",id:"sign-in",level:2},{value:"Configure Redirect URI",id:"configure-redirect-uri",level:3},{value:"Implement a sign-in button",id:"implement-a-sign-in-button",level:3},{value:"Handle redirect",id:"handle-redirect",level:3},{value:"Sign out",id:"sign-out",level:2},{value:"Further readings",id:"further-readings",level:2}],w={toc:N};function C(e){var t=e.components,n=(0,o.Z)(e,h);return(0,r.kt)("wrapper",(0,a.Z)({},w,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"react-integrate-logtoreact"},"React: Integrate ",(0,r.kt)("inlineCode",{parentName:"h1"},"@logto/react")),(0,r.kt)(c.ZP,{type:"Single Page App",mdxType:"AppNote"}),(0,r.kt)("h2",{id:"add-logto-sdk-as-a-dependency"},"Add Logto SDK as a dependency"),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"npm",label:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @logto/react\n"))),(0,r.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @logto/react\n"))),(0,r.kt)(l.Z,{value:"pnpm",label:"pnpm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm add @logto/react\n")))),(0,r.kt)("h2",{id:"init-logtoclient"},"Init LogtoClient"),(0,r.kt)("p",null,"Import and use ",(0,r.kt)("inlineCode",{parentName:"p"},"LogtoProvider")," to provide a Logto context:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { LogtoProvider, LogtoConfig } from '@logto/react';\n\nconst config: LogtoConfig = {\n  endpoint: '<your-logto-endpoint>', // E.g. http://localhost:3001\n  appId: '<your-application-id>',\n};\n\nconst App = () => (\n  <LogtoProvider config={config}>\n    <YourAppContent />\n  </LogtoProvider>\n);\n")),(0,r.kt)(g.ZP,{mdxType:"AssumingUrl"}),(0,r.kt)("h2",{id:"sign-in"},"Sign in"),(0,r.kt)(p.ZP,{mdxType:"SignInFlowSummary"}),(0,r.kt)("h3",{id:"configure-redirect-uri"},"Configure Redirect URI"),(0,r.kt)(d.ZP,{figureSrc:m.Z,redirectUri:"http://localhost:1234/callback",mdxType:"ConfigureRedirectUri"}),(0,r.kt)("h3",{id:"implement-a-sign-in-button"},"Implement a sign-in button"),(0,r.kt)("p",null,"We provide two hooks ",(0,r.kt)("inlineCode",{parentName:"p"},"useHandleSignInCallback()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"useLogto()")," which can help you easily manage the authentication flow."),(0,r.kt)(s.ZP,{calling:".signIn()",mdxType:"SignInNote"}),(0,r.kt)("p",null,"Go back to your IDE/editor, use the following code to implement the sign-in button:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useLogto } from '@logto/react';\n\nconst SignIn = () => {\n  const { signIn, isAuthenticated } = useLogto();\n\n  if (isAuthenticated) {\n    return <div>Signed in</div>;\n  }\n\n  return <button onClick={() => signIn('http://localhost:1234/callback')}>Sign In</button>;\n};\n")),(0,r.kt)("h3",{id:"handle-redirect"},"Handle redirect"),(0,r.kt)("p",null,"We're almost there! In the last step, we use ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:1234/callback")," as the Redirect URI, and now we need to handle it properly."),(0,r.kt)("p",null,"First let's create a callback component:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useHandleSignInCallback } from '@logto/react';\n\nconst Callback = () => {\n  const navigate = useNavigate();\n  const { isLoading } = useHandleSignInCallback(() => {\n    // Navigate to root path when finished\n  });\n\n  // When it's working in progress\n  if (isLoading) {\n    return <div>Redirecting...</div>;\n  }\n};\n")),(0,r.kt)("p",null,"Finally insert the code below in your ",(0,r.kt)("inlineCode",{parentName:"p"},"/callback")," route which does NOT require authentication:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'// react-router\n<Route path="/callback" element={<Callback />} />\n')),(0,r.kt)("h2",{id:"sign-out"},"Sign out"),(0,r.kt)(u.ZP,{mdxType:"SignOutNote"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const SignOut = () => {\n  const { signOut } = useLogto();\n\n  return <button onClick={() => signOut('http://localhost:1234')}>Sign out</button>;\n};\n")),(0,r.kt)("h2",{id:"further-readings"},"Further readings"),(0,r.kt)(f.ZP,{mdxType:"FurtherReadings"}))}C.isMDXComponent=!0},3937:function(e,t,n){t.Z=n.p+"assets/images/web-redirect-uri-b4992589015d65ea3dc15b8b8131cd26.png"}}]);