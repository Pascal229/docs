"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[6227],{4790:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var o=s(11527),r=s(17279),n=s(17843);const a={sidebar_position:14},i="\ud83d\udd04 Migrate to Logto",l={id:"docs/recipes/migrations/README",title:"\ud83d\udd04 Migrate to Logto",description:"Logto supports manual migration of existing users from another platform, this guide will show you how to import existing users via Management API and talk about things that you should consider before migrating.",source:"@site/docs/docs/recipes/migrations/README.mdx",sourceDirName:"docs/recipes/migrations",slug:"/docs/recipes/migrations/",permalink:"/docs/recipes/migrations/",draft:!1,unlisted:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/docs/recipes/migrations/README.mdx",tags:[],version:"current",sidebarPosition:14,frontMatter:{sidebar_position:14},sidebar:"docsSidebar",previous:{title:"\ud83d\uddc4\ufe0f Enable central cache",permalink:"/docs/recipes/enable-central-cache/"},next:{title:"\ud83c\udfad User impersonation",permalink:"/docs/recipes/impersonation/"}},c={},d=[{value:"User schema",id:"user-schema",level:2},{value:"Password hashing",id:"password-hashing",level:2},{value:"Steps to migrate",id:"steps-to-migrate",level:2},{value:"1. Prepare the user data",id:"1-prepare-the-user-data",level:3},{value:"2. Create a Logto tenant",id:"2-create-a-logto-tenant",level:3},{value:"3. Setup the connection of Management API",id:"3-setup-the-connection-of-management-api",level:3},{value:"4. Import the user data",id:"4-import-the-user-data",level:3}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"-migrate-to-logto",children:"\ud83d\udd04 Migrate to Logto"}),"\n",(0,o.jsx)(n.Z,{cloud:!0,oss:!0}),"\n",(0,o.jsx)(t.p,{children:"Logto supports manual migration of existing users from another platform, this guide will show you how to import existing users via Management API and talk about things that you should consider before migrating."}),"\n",(0,o.jsx)(t.h2,{id:"user-schema",children:"User schema"}),"\n",(0,o.jsxs)(t.p,{children:["Before we start, let's take a look at the ",(0,o.jsx)(t.a,{href:"../../references/users/#profile",children:"user schema"})," in Logto. There are 3 parts of the user schema that you should be aware of:"]}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Basic data"}),": is the basic info from the user profile, you can match the data from your existing user profile."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Custom data"}),": stores additional user info, you can use this to store files that are unable to match the basic data."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Social identities"}),": stores the user info retrieved from social sign-in."]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["You can create a map to match the user info from your existing user profile to ",(0,o.jsx)(t.strong,{children:"basic data"})," and ",(0,o.jsx)(t.strong,{children:"custom data"}),". For social sign in, you'll need additional steps to import the social identities, please refer to the API of ",(0,o.jsx)(t.a,{href:"https://openapi.logto.io/operation/operation-post-api-users-parameter-identities",children:"Link social identity to user"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"password-hashing",children:"Password hashing"}),"\n",(0,o.jsxs)(t.p,{children:["Logto uses ",(0,o.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Argon2",children:"Argon2"})," to hash the user's password, and also supports other algorithms like ",(0,o.jsx)(t.code,{children:"MD5"}),", ",(0,o.jsx)(t.code,{children:"SHA1"}),", ",(0,o.jsx)(t.code,{children:"SHA256"})," and ",(0,o.jsx)(t.code,{children:"Bcrypt"})," for the convenience of migration. Those algorithms are considered insecure, the corrosponding password hashes will be migrated to Argon2 upon the user's first successful sign in."]}),"\n",(0,o.jsxs)(t.p,{children:["If you need support for any particular hashing algorithm, ",(0,o.jsx)(t.a,{href:"https://logto.io/contact",children:"please let us know"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"steps-to-migrate",children:"Steps to migrate"}),"\n",(0,o.jsx)(t.h3,{id:"1-prepare-the-user-data",children:"1. Prepare the user data"}),"\n",(0,o.jsx)(t.p,{children:"You should first export the user data from your existing platform, and then map the user info to the Logto user schema. We recommend you to prepare the mapped data in a JSON format. Here is an example of the user data:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-json",children:'[\n  {\n    "username": "user1",\n    "passwordDigest": "password-encrypted",\n    "passwordAlgorithm": "SHA256"\n  },\n  {\n    "username": "user2",\n    "passwordDigest": "password-encrypted",\n    "passwordAlgorithm": "SHA256"\n  }\n]\n'})}),"\n",(0,o.jsx)(t.h3,{id:"2-create-a-logto-tenant",children:"2. Create a Logto tenant"}),"\n",(0,o.jsxs)(t.p,{children:["You'll need to setup a tenant in Logto. You can use either Logto Cloud or Logto OSS. If you haven't done this yet, please refer to the ",(0,o.jsx)(t.a,{href:"../../get-started/",children:"Get started"})," guide."]}),"\n",(0,o.jsx)(t.h3,{id:"3-setup-the-connection-of-management-api",children:"3. Setup the connection of Management API"}),"\n",(0,o.jsxs)(t.p,{children:["We'll use the Management API to import the user data, you can refer to the ",(0,o.jsx)(t.a,{href:"../../recipes/interact-with-management-api/",children:"Management API"})," to learn how to setup the connection in your development environment."]}),"\n",(0,o.jsx)(t.h3,{id:"4-import-the-user-data",children:"4. Import the user data"}),"\n",(0,o.jsxs)(t.p,{children:["It is recommended to prepare a script to import the user data one by one, we'll call ",(0,o.jsx)(t.a,{href:"https://openapi.logto.io/operation/operation-post-api-users",children:"create user"})," API to import the user data. Here is an example of the script:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-javascript",children:"const users = require('./users.json');\n\nconst importUsers = async () => {\n  for (const user of users) {\n    try {\n      await fetch('https://[tenant_id].logto.app/api/users', {\n        method: 'POST',\n        headers: {\n          'Content-Type': 'application/json',\n          Authorization: 'Bearer [your-access-token]',\n        },\n        body: JSON.stringify(user),\n      });\n      // Sleep for a while to avoid rate limit\n      await new Promise((resolve) => setTimeout(resolve, 200));\n    } catch (error) {\n      console.error(`Failed to import user ${user.username}: ${error.message}`);\n    }\n  }\n};\n\nimportUsers();\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Please noted that the API point is rate limited, you should add a sleep between each request to avoid the rate limit. Please review our ",(0,o.jsx)(t.a,{href:"../interact-with-management-api/#rate-limit",children:"Rate Limits"})," page for details."]}),"\n",(0,o.jsxs)(t.p,{children:["If you have a large amount of user data (100k+ users), you can ",(0,o.jsx)(t.a,{href:"https://logto.io/contact",children:"reach out to us"})," to increase the rate limit."]})]})}function p(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},17843:(e,t,s)=>{s.d(t,{Z:()=>a});const o="availability_kRMk";var r=s(11527);const n=e=>"comingSoon"===e?"coming soon-blue":"boolean"==typeof e?e?"\u2713 available-4EA254":"not applicable-78767F":`since v${e.major}.${e.minor}-4EA254`,a=e=>{let{cloud:t,oss:s}=e;return(0,r.jsxs)("div",{className:o,children:[(0,r.jsx)("img",{alt:"Cloud availability",src:`https://img.shields.io/badge/Cloud-${n(t)}`}),(0,r.jsx)("img",{alt:"OSS availability",src:`https://img.shields.io/badge/OSS-${n(s)}`})]})}},17279:(e,t,s)=>{s.d(t,{Z:()=>i,a:()=>a});var o=s(50959);const r={},n=o.createContext(r);function a(e){const t=o.useContext(n);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),o.createElement(n.Provider,{value:t},e.children)}}}]);