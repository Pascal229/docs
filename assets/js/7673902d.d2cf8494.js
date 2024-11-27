"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[88127],{55693:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"end-user-flows/authentication-parameters/first-screen","title":"First screen parameters","description":"A set to custom authentication parameters that allow you to tailor the desired first screen experience for the end users.","source":"@site/docs/end-user-flows/authentication-parameters/first-screen.mdx","sourceDirName":"end-user-flows/authentication-parameters","slug":"/end-user-flows/authentication-parameters/first-screen","permalink":"/end-user-flows/authentication-parameters/first-screen","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/docs/end-user-flows/authentication-parameters/first-screen.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"docsSidebar","previous":{"title":"Authentication parameters","permalink":"/end-user-flows/authentication-parameters/"},"next":{"title":"Direct sign-in","permalink":"/end-user-flows/authentication-parameters/direct-sign-in"}}');var t=n(86070),r=n(15658);const o={sidebar_position:1},a="First screen parameters",d={},l=[{value:"first_screen",id:"first_screen",level:2},{value:"identifier",id:"identifier",level:2},{value:"login_hint",id:"login_hint",level:2},{value:"SDK support",id:"sdk-support",level:2}];function c(e){const i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.header,{children:(0,t.jsx)(i.h1,{id:"first-screen-parameters",children:"First screen parameters"})}),"\n",(0,t.jsx)(i.p,{children:"A set to custom authentication parameters that allow you to tailor the desired first screen experience for the end users."}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"first_screen"}),": Specifies the first screen that the user will see."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"identifier"}),": Specifies the identifier types that the sign-in or sign-up form will accept."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"login_hint"}),": Populates the identifier field with the user's email address or username. (This is a OIDC standard parameter)"]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"first_screen",children:"first_screen"}),"\n",(0,t.jsxs)(i.p,{children:["The ",(0,t.jsx)(i.code,{children:"first_screen"})," parameter is the key parameter that determines the first screen that the users will see when they redirect to the Logto's sign-in page. By default, the universal sign-in form will be displayed. Use this parameter to customize the first screen based on your application's requirements. Supported values are:"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"sign_in"}),": Displays the sign-in form. (Default)"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"register"}),": Displays the sign-up form."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"reset_password"}),": Displays the password reset form."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"single_sign_on"}),": Displays the enterprise SSO sign-in form. (A email address will be asked to determine the enabled SSO providers)"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"identifier:sign-in"}),": Displays a identifier specific sign-in form. The identifier type can be specified using the ",(0,t.jsx)(i.code,{children:"identifier"})," parameter. This is useful when you have multiple identifier sign-in methods enabled."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"identifier:register"}),": Displays a identifier specific sign-up form. The identifier type can be specified using the ",(0,t.jsx)(i.code,{children:"identifier"})," parameter. This is useful when you have multiple identifier sign-up methods enabled."]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"First screen parameter",src:n(64423).A+"",width:"3708",height:"3104"})}),"\n",(0,t.jsx)(i.p,{children:"For example, sending users directly to the enterprise SSO sign-in form:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-sh",children:"curl --location \\\n--request GET 'https://<your-tenant>.logto.app/oidc/auth?client_id=<client_id>&...&first_screen=single_sign_on'\n"})}),"\n",(0,t.jsx)(i.h2,{id:"identifier",children:"identifier"}),"\n",(0,t.jsxs)(i.p,{children:["The ",(0,t.jsx)(i.code,{children:"identifier"})," parameter is used to specify the identifier types that the sign-in or sign-up form will take. This parameter is only applicable when the ",(0,t.jsx)(i.code,{children:"first_screen"})," parameter is set to ",(0,t.jsx)(i.code,{children:"identifier:sign-in"}),", ",(0,t.jsx)(i.code,{children:"identifier:register"}),", or ",(0,t.jsx)(i.code,{children:"reset_password"}),". Supported values are: ",(0,t.jsx)(i.code,{children:"username"}),", ",(0,t.jsx)(i.code,{children:"email"}),", and ",(0,t.jsx)(i.code,{children:"phone"}),". Separate multiple values with a empty space to allow multiple identifier types."]}),"\n",(0,t.jsx)(i.p,{children:"For example, sending users directly to the email or phone number sign-up page:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-sh",children:"curl --location \\\n--request GET 'https://<your-tenant>.logto.app/oidc/auth?client_id=<client_id>&...&first_screen=identifier:register&identifier=email phone'\n"})}),"\n",(0,t.jsx)(i.p,{children:"All the identifier types specified in this parameter must be enabled in your sign-in or sign-up settings in the Logto Console."}),"\n",(0,t.jsx)(i.p,{children:"Any unsupported or disabled identifier types will be ignored. If all specified identifiers are unsupported, the default sign-in experience configuration will be used."}),"\n",(0,t.jsx)(i.h2,{id:"login_hint",children:"login_hint"}),"\n",(0,t.jsxs)(i.p,{children:["The ",(0,t.jsx)(i.code,{children:"login_hint"})," parameter, defined in the standard ",(0,t.jsx)(i.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html#AuthorizationEndpoint",children:"OpenID Connect specification"}),", is used to pre-populate the sign-in form with the user's identifier (such as an email, a phone number or username). With Logto, it can be combined with other sign-in screen parameters to enhance the user experience. This parameter is especially useful if you have a custom pre-authentication form that collects the user's identifier in advance, allowing them to skip re-entering it during sign-in."]}),"\n",(0,t.jsx)(i.p,{children:"For example, pre-populating the collected email address in the sign-in form:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-sh",children:"curl --location \\\n--request GET 'https://<your-tenant>.logto.app/oidc/auth?client_id=<client_id>&...&first_screen=identifier:sign_in&identifier=email&login_hint=example@logto.io\n"})}),"\n",(0,t.jsx)(i.h2,{id:"sdk-support",children:"SDK support"}),"\n",(0,t.jsxs)(i.p,{children:["In supported Logto SDKs, you can set the parameters when calling the ",(0,t.jsx)(i.code,{children:"signIn"})," method:"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-javascript",children:"logtoClient.signIn({\n  redirectUri: 'https://your-app.com/callback',\n  firstScreen: 'identifier:register',\n  identifier: ['email', 'phone'],\n  loginHint: 'example@logto.io',\n});\n"})}),"\n",(0,t.jsx)(i.admonition,{type:"note",children:(0,t.jsxs)(i.p,{children:["We are gradually adding support for the ",(0,t.jsx)(i.code,{children:"first_screen"}),", ",(0,t.jsx)(i.code,{children:"identifier"}),", and ",(0,t.jsx)(i.code,{children:"login_hint"})," parameters to all Logto SDKs. If you don't see them in your SDK, please open an issue or contact us."]})}),"\n",(0,t.jsx)(i.admonition,{type:"note",children:(0,t.jsx)(i.p,{children:"For Logto OSS users, theses parameters are supported since version 1.15.0. If you are using an older version, please upgrade to the latest version."})})]})}function h(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},64423:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/first-screen-parameter-13bd87e8ba0235b1f5092d04faa17239.png"},15658:(e,i,n)=>{n.d(i,{R:()=>o,x:()=>a});var s=n(30758);const t={},r=s.createContext(t);function o(e){const i=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(r.Provider,{value:i},e.children)}}}]);