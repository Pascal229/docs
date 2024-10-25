"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[21200],{86029:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var a=i(86070),s=i(15658);const o={date:new Date("2023-02-02T00:00:00.000Z"),authors:"gao",tags:["release"]},t="Logto 2023 February Update",r={permalink:"/blog/releases/2023-feb",source:"@site/blog/releases/2023-feb.md",title:"Logto 2023 February Update",description:"Please welcome our first release candidate! Logto is just a few steps away from general availability.",date:"2023-02-02T00:00:00.000Z",tags:[{inline:!0,label:"release",permalink:"/blog/tags/release"}],readingTime:2.62,hasTruncateMarker:!0,authors:[{name:"Gao",title:"Founder of Silverhand",url:"https://github.com/gao-sun",imageURL:"https://github.com/gao-sun.png",key:"gao",page:null}],frontMatter:{date:"2023-02-02T00:00:00.000Z",authors:"gao",tags:["release"]},unlisted:!1,prevItem:{title:"CIAM 102: Authorization & Role-based Access Control",permalink:"/blog/ciam-102-authz-and-rbac"},nextItem:{title:"Logto 2023 New Year Update",permalink:"/blog/releases/2023-jan"}},l={authorsImageUrls:[void 0]},c=[{value:"\ud83d\udca5 Breaking changes \ud83d\udca5",id:"-breaking-changes-",level:2},{value:"\ud83d\udd12 Role-based access control",id:"-role-based-access-control",level:2},{value:"\ud83c\udfc4 Streamlined social sign-in flow",id:"-streamlined-social-sign-in-flow",level:2},{value:"\ud83d\udd22 Send and verify verification codes via Management API",id:"-send-and-verify-verification-codes-via-management-api",level:2},{value:"\u21a9\ufe0f Rollback database alteration state",id:"\ufe0f-rollback-database-alteration-state",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsx)(n.p,{children:"Please welcome our first release candidate! Logto is just a few steps away from general availability."})}),"\n","\n",(0,a.jsx)(n.h2,{id:"-breaking-changes-",children:"\ud83d\udca5 Breaking changes \ud83d\udca5"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["core: remove ",(0,a.jsx)(n.code,{children:"GET /settings"})," and ",(0,a.jsx)(n.code,{children:"PATCH /settings"})," API"]}),"\n",(0,a.jsxs)(n.li,{children:["core: add ",(0,a.jsx)(n.code,{children:"GET /configs/admin-console"})," and ",(0,a.jsx)(n.code,{children:"PATCH /configs/admin-console"})," API","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"/configs/*"})," APIs are config/key-specific now. they may have different logic per key."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["core: officially remove all deprecated ",(0,a.jsx)(n.code,{children:"/session"})," APIs"]}),"\n",(0,a.jsx)(n.li,{children:"core: use HTTP/2 to serve TLS (HTTPS) connections"}),"\n",(0,a.jsxs)(n.li,{children:["cli: change valid ",(0,a.jsx)(n.code,{children:"logto db config"})," keys by removing ",(0,a.jsx)(n.code,{children:"alterationState"})," and adding ",(0,a.jsx)(n.code,{children:"adminConsole"})," since:","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:'OIDC configs and admin console configs are tenant-level configs (the concept of "tenant" can be ignored until we officially announce it)'}),"\n",(0,a.jsx)(n.li,{children:"alteration state is still a system-wide config"}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["for admin access of machine-to-machine applications, now it's required to add scope ",(0,a.jsx)(n.code,{children:"all"})," for client configs to fetch proper Access Token","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["see ",(0,a.jsx)(n.a,{href:"https://docs.logto.io/docs/recipes/interact-with-management-api/",children:"\ud83d\ude9d Interact with Management API"})," for details"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"-role-based-access-control",children:"\ud83d\udd12 Role-based access control"}),"\n",(0,a.jsx)(n.p,{children:"We are excited to introduce our latest addition to our product, Role-based access control (RBAC). This powerful feature gives administrators the ability to assign specific roles and permissions to users, ensuring they only have access to the resources and functions they need to do their job."}),"\n",(0,a.jsx)(n.p,{children:"With RBAC, administrators can:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Define permissions across APIs"}),"\n",(0,a.jsx)(n.li,{children:"Create custom roles with specific permissions"}),"\n",(0,a.jsx)(n.li,{children:"Assign roles to users and manage their roles"}),"\n",(0,a.jsx)(n.li,{children:"Easily manage and update permissions"}),"\n",(0,a.jsx)(n.li,{children:"Securely validate permissions to protect APIs"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Logto takes a major step forward in security and control with easy access management and authorization of sensitive info, ensuring only authorized users have the right to access. This aligns with our vision to provide an open-source identity solution with features for authentication and authorization, and packed with all the features you need."}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsx)(n.p,{children:"If you are using Logto SDKs, please upgrade to the latest version to take advantage of RBAC."})}),"\n",(0,a.jsxs)(n.p,{children:["Check out our ",(0,a.jsx)(n.a,{href:"https://docs.logto.io/docs/recipes/rbac/",children:"RBAC recipe"})," for a step-by-step guide. Give it a try and let us know what you think!"]}),"\n",(0,a.jsx)(n.h2,{id:"-streamlined-social-sign-in-flow",children:"\ud83c\udfc4 Streamlined social sign-in flow"}),"\n",(0,a.jsx)(n.p,{children:"\ud83d\udca1 Logto now detects a trusted email (or phone number) from the social account during social sign-in."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"If the email (or phone number) has been registered: Automatically connect the social identity to the existing user account with a single click."}),"\n",(0,a.jsx)(n.li,{children:"If the email (or phone number) is not registered: Automatically sync the user profile with the social-provided email (or phone number) if and only if it is marked as a required user profile."}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"-send-and-verify-verification-codes-via-management-api",children:"\ud83d\udd22 Send and verify verification codes via Management API"}),"\n",(0,a.jsx)(n.p,{children:"The new Management APIs allow you to reuse connectors to dynamically send and verify verification codes for various purposes, such as validating identity before a user updates their profile or performs a dangerous action."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Call ",(0,a.jsx)(n.code,{children:"/api/verification-code"})," to send verification code to a given email or phone"]}),"\n",(0,a.jsxs)(n.li,{children:["Call ",(0,a.jsx)(n.code,{children:"/api/verification-code/verify"})," to verify the code against a given email or phone"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"\ufe0f-rollback-database-alteration-state",children:"\u21a9\ufe0f Rollback database alteration state"}),"\n",(0,a.jsxs)(n.p,{children:["In case of any issues with the database, you can now use the ",(0,a.jsx)(n.code,{children:"logto db alteration rollback [target]"})," command to roll back all database schemas to a previous version, for example ",(0,a.jsx)(n.code,{children:"logto db alteration rollback v1.0.0-beta.19"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},15658:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>r});var a=i(30758);const s={},o=a.createContext(s);function t(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);