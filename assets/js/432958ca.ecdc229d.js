"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[77656],{36774:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>r,contentTitle:()=>i,default:()=>d,frontMatter:()=>c,metadata:()=>o,toc:()=>l});const o=JSON.parse('{"id":"developers/custom-token-claims/common-use-cases","title":"Common use cases","description":"In this section, we will provide some examples to help you understand some scenarios where custom token claims can be useful, offering you some references. This way, when you encounter difficulties in access management, you can assess whether custom token claims can bring you convenience.","source":"@site/docs/developers/custom-token-claims/common-use-cases.mdx","sourceDirName":"developers/custom-token-claims","slug":"/developers/custom-token-claims/common-use-cases","permalink":"/developers/custom-token-claims/common-use-cases","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/docs/developers/custom-token-claims/common-use-cases.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"id":"common-use-cases","title":"Common use cases","sidebar_label":"Common use cases","sidebar_position":2},"sidebar":"docsSidebar","previous":{"title":"Custom token claims","permalink":"/developers/custom-token-claims/"},"next":{"title":"Create a custom token claims script","permalink":"/developers/custom-token-claims/create-script"}}');var n=t(86070),a=t(15658);const c={id:"common-use-cases",title:"Common use cases",sidebar_label:"Common use cases",sidebar_position:2},i="Common use cases",r={},l=[{value:"Make attribute-based access control (ABAC) possible",id:"make-attribute-based-access-control-abac-possible",level:2},{value:"Manually block token issuance",id:"manually-block-token-issuance",level:2}];function u(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.header,{children:(0,n.jsx)(s.h1,{id:"common-use-cases",children:"Common use cases"})}),"\n",(0,n.jsxs)(s.p,{children:["In this section, we will provide some examples to help you understand some scenarios where ",(0,n.jsx)(s.a,{href:"/developers/custom-token-claims",children:"custom token claims"})," can be useful, offering you some references. This way, when you encounter difficulties in access management, you can assess whether custom token claims can bring you convenience."]}),"\n",(0,n.jsx)(s.h2,{id:"make-attribute-based-access-control-abac-possible",children:"Make attribute-based access control (ABAC) possible"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"https://auth.wiki/abac",children:"Attribute-based access control (ABAC)"})," is an access control model that uses attributes (such as user roles, resource properties, and environmental conditions) to make access control decisions. It is a flexible and dynamic way to manage access to protected resources."]}),"\n",(0,n.jsx)(s.p,{children:"Suppose you are building an app, and the app's release is divided into two phases: public beta and official launch. Even after the app officially launches, you want old users who participated in the public beta to continue using the paid features."}),"\n",(0,n.jsxs)(s.p,{children:["After the app officially launches, you use Logto's ",(0,n.jsx)(s.a,{href:"/authorization/role-based-access-control",children:"role-baed access control (RBAC)"})," feature to implement access control for the use of paid features. To easily check whether a user was already using the app during the public beta phase, you can use the ",(0,n.jsx)(s.code,{children:"getCustomJwtClaims()"})," method to add a claim ",(0,n.jsx)(s.code,{children:"createdAt"})," in the token payload."]}),"\n",(0,n.jsx)(s.p,{children:"Then, when doing access control in your protected APIs, you need to allow access tokens that meet either of the following conditions:"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsx)(s.li,{children:"With the RBAC context, having the scope for accessing paid resources."}),"\n",(0,n.jsxs)(s.li,{children:["The ",(0,n.jsx)(s.code,{children:"createdAt"})," is earlier than the end time of the public beta phase."]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["If there is no custom token claims feature, when verifying permissions for ",(0,n.jsx)(s.a,{href:"/authorization/api-resources",children:"protected API resources"}),", it is necessary to call the Logto Management API to check whether the user with the current access token has the permissions corresponding to the role required by a certain API resource."]}),"\n",(0,n.jsxs)(s.p,{children:["In a similar scenario, suppose your app displays birthday wishes on the login page if the user's birthday is approaching. You can use custom token claims to add a birthday field to the ",(0,n.jsx)(s.a,{href:"/user-management/personal-access-token#example-token-exchange",children:"token payload"}),", which can be used to determine whether to display a specific message."]}),"\n",(0,n.jsx)(s.h2,{id:"manually-block-token-issuance",children:"Manually block token issuance"}),"\n",(0,n.jsxs)(s.p,{children:["Suppose Joe is running an online game and uses Logto as an ",(0,n.jsx)(s.a,{href:"https://auth.wiki/iam",children:"identity and access management (IAM)"})," system."]}),"\n",(0,n.jsx)(s.p,{children:"Assume this game requires top-ups to purchase game time. Joe records each user's balance in his game service and continuously deducts from the balance as game time accumulates. Joe wants to force players to log out when their account balance is depleted to encourage them to recharge."}),"\n",(0,n.jsx)(s.p,{children:"At this point, Joe can also use the custom token claims feature provided by Logto to achieve this:"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["In the script, an external API call ",(0,n.jsx)(s.a,{href:"/developers/custom-token-claims/create-script/#step-3-fetch-external-data",children:"fetch external data"})," can be used to retrieve the current player's balance from Joe's game server."]}),"\n",(0,n.jsxs)(s.li,{children:["If the balance is less than or equal to 0, the ",(0,n.jsx)(s.a,{href:"/developers/custom-token-claims/create-script/#api",children:(0,n.jsx)(s.code,{children:"api.denyAccess()"})})," method can be used to block token issuance."]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"At this time, since a new valid access token cannot be obtained, the player will be forcibly logged out of the game."})]})}function d(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},15658:(e,s,t)=>{t.d(s,{R:()=>c,x:()=>i});var o=t(30758);const n={},a=o.createContext(n);function c(e){const s=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),o.createElement(a.Provider,{value:s},e.children)}}}]);