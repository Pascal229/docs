"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[14076],{97176:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var o=t(11527),s=t(17279);const i={sidebar_label:"Custom CSS",sidebar_position:3},a="Custom CSS",c={id:"docs/recipes/customize-sie/custom-css",title:"Custom CSS",description:"Logto continually enhances the user sign-in experience and has added a brand color option to the UI. However, we know that fine-tuning UI requirements can be unpredictable. While Logto is still exploring the best options for customization, we want to provide a programmatic method to unblock your development.",source:"@site/docs/docs/recipes/customize-sie/custom-css.md",sourceDirName:"docs/recipes/customize-sie",slug:"/docs/recipes/customize-sie/custom-css",permalink:"/docs/recipes/customize-sie/custom-css",draft:!1,unlisted:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/docs/recipes/customize-sie/custom-css.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"Custom CSS",sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Match your brand",permalink:"/docs/recipes/customize-sie/match-your-brand"},next:{title:"Set your terms",permalink:"/docs/recipes/customize-sie/set-you-terms"}},r={},l=[{value:"Custom CSS in Logto Console",id:"custom-css-in-logto-console",level:2},{value:"Examples",id:"examples",level:2},{value:"Custom CSS by Management API",id:"custom-css-by-management-api",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"custom-css",children:"Custom CSS"}),"\n",(0,o.jsx)(n.p,{children:"Logto continually enhances the user sign-in experience and has added a brand color option to the UI. However, we know that fine-tuning UI requirements can be unpredictable. While Logto is still exploring the best options for customization, we want to provide a programmatic method to unblock your development."}),"\n",(0,o.jsx)(n.h2,{id:"custom-css-in-logto-console",children:"Custom CSS in Logto Console"}),"\n",(0,o.jsx)(n.p,{children:'Go to "Sign-in Experience > Branding > Custom CSS" in the Logto Console.'}),"\n",(0,o.jsx)(n.p,{children:"Editing CSS code in the left editor, it will render lively in the right preview modal immediately. Please note, the code editor only supports the CSS code so far. Not HTML or Javascript."}),"\n",(0,o.jsx)(n.p,{children:"After saving changes, don\u2019t forget to click the \u201cLive Preview\u201d button to check the changes on all pages."}),"\n",(0,o.jsxs)(n.p,{children:["To view the componentized interface design for Logto, you can either navigate to ",(0,o.jsx)(n.a,{href:"https://github.com/logto-io/logto/tree/master/packages/experience/src",children:"Logto/packages/experience/src"}),' on GitHub or open the browser\u2019s "Inspect Elements" tool on the Logto Live preview page.']}),"\n",(0,o.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,o.jsxs)(n.p,{children:["For instance, if you want to give your sign-in page a feel of the ",(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.em,{children:"Night City"})})," for web view, try this CSS:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-css",children:"@font-face {\n  font-family: 'Rock Salt';\n  font-style: normal;\n  font-weight: normal;\n  font-display: swap;\n  src: url('https://fonts.gstatic.com/s/rocksalt/v18/MwQ0bhv11fWD6QsAVOZrt0M6p7NGrQ.woff2') format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F,\n    U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n@font-face {\n  font-family: 'Share Tech';\n  font-style: normal;\n  font-weight: normal;\n  font-display: swap;\n  src: url('https://fonts.gstatic.com/s/sharetech/v17/7cHtv4Uyi5K0OeZ7bohU8H0JmBUhfrE.woff2') format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F,\n    U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n\n#app * {\n  font-family: 'Share Tech';\n  letter-spacing: 0.5px;\n}\n\n#app > div[class$='viewBox'] {\n  background-image: url('https://silverhand.io/assets/v-in-nc.jpg');\n  background-size: cover;\n}\n\n#app main[class$='main'] {\n  background-image: url('https://silverhand.io/assets/gentle-universe.png');\n  background-size: cover;\n  opacity: 98%;\n  min-height: initial;\n  padding: 24px;\n  padding-bottom: 72px;\n  border-radius: 12px;\n}\n\n#app main[class$='main'] img[class$='logo'] {\n  content: url('https://silverhand.io/assets/cyberpunk-2077.png');\n  margin: -20px 0 -12px;\n  height: 160px;\n}\n\n#app main[class$='main'] div[class$='headline'] {\n  visibility: hidden;\n  height: 60px;\n}\n\n#app main[class$='main'] div[class$='headline']::before {\n  content: 'Welcome to Night City';\n  visibility: visible;\n  display: block;\n  font-family: 'Rock Salt';\n  font-style: italic;\n  line-height: 60px;\n  font-size: 20px;\n  color: rgba(245, 250, 255, 60%);\n  padding: 0 20px;\n}\n\n#app form div[class$='inputField'] > div {\n  outline: none;\n  border: none;\n  border-radius: 4px;\n}\n\n#app form div[class$='inputField'] > div > input,\n#app form div[class$='inputField'] div[class$='countryCodeSelector'] {\n  background: initial;\n  background-color: #453f67;\n  font-family: 'Share Tech';\n  letter-spacing: 0.5px;\n  font-size: 16px;\n  font-weight: 600;\n}\n\n#app button {\n  font-weight: 600;\n  font-size: 16px;\n  border-radius: 4px;\n}\n\n#app button[type='submit'] {\n  background: linear-gradient(270.84deg, #2fd6fb -24.55%, #6369fc 44.33%, #a741eb 119.2%), #5d34f2;\n}\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"SIE Custom CSS example",src:t(89538).Z+"",width:"2560",height:"1600"})}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["Since Logto uses CSS Modules, you may see a hash value in the ",(0,o.jsx)(n.code,{children:"class"})," property of DOM elements (e.g., a ",(0,o.jsx)(n.code,{children:"<div>"})," with ",(0,o.jsx)(n.code,{children:"vUugRG_container"}),"). To override these, you can use the ",(0,o.jsx)(n.code,{children:"$="})," CSS selector to match elements that end with a specified value. In this case, it should be ",(0,o.jsx)(n.code,{children:"div[class$=container]"}),"."]})}),"\n",(0,o.jsx)(n.h2,{id:"custom-css-by-management-api",children:"Custom CSS by Management API"}),"\n",(0,o.jsxs)(n.p,{children:["You also can use the Management API ",(0,o.jsx)(n.code,{children:"PATCH /api/sign-in-exp"})," with body ",(0,o.jsx)(n.code,{children:'{ "customCss": "arbitrary string" }'})," to set customized CSS for the sign-in experience. You should see the value of ",(0,o.jsx)(n.code,{children:"customCss"})," attached after ",(0,o.jsx)(n.code,{children:"<title>"})," of the page. If the style has a higher priority, it should be able to override."]})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},89538:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/sie-custom-css-example-b3cada0841752b34d590232de2fec42d.jpeg"},17279:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>a});var o=t(50959);const s={},i=o.createContext(s);function a(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);