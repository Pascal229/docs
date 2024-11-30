"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[19194],{95809:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>c});const o=JSON.parse('{"id":"end-user-flows/organization-experience/organization-management","title":"Organization management","description":"When developing a multi-tenant app, a common scenario is to have a platform for your organization members to self-manage their organization resources.","source":"@site/docs/end-user-flows/organization-experience/organization-management.mdx","sourceDirName":"end-user-flows/organization-experience","slug":"/end-user-flows/organization-experience/organization-management","permalink":"/end-user-flows/organization-experience/organization-management","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/docs/end-user-flows/organization-experience/organization-management.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"docsSidebar","previous":{"title":"Invite organization members","permalink":"/end-user-flows/organization-experience/invite-organization-members"},"next":{"title":"Connectors","permalink":"/connectors/"}}');var t=i(86070),a=i(15658);const r=i.p+"assets/images/organization-template-dda57e12975fce661806e6050125b576.webp",s={sidebar_position:3},l="Organization management",d={},c=[{value:"Examples of user self-manage their own organizations",id:"examples-of-user-self-manage-their-own-organizations",level:2},{value:"Let everyone invite members:",id:"let-everyone-invite-members",level:3},{value:"Admin can modify member roles:",id:"admin-can-modify-member-roles",level:3},{value:"Add bots to organization",id:"add-bots-to-organization",level:3},{value:"Unlock more possibilities with Management API",id:"unlock-more-possibilities-with-management-api",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components},{Url:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Url",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"organization-management",children:"Organization management"})}),"\n",(0,t.jsxs)(n.p,{children:["When developing a ",(0,t.jsx)(n.a,{href:"https://auth.wiki/multi-tenancy",children:"multi-tenant app"}),", a common scenario is to have a platform for your organization members to self-manage their organization resources."]}),"\n",(0,t.jsx)(n.p,{children:"Let\u2019s still take the basic organization setup that contains both an admin role and normal member role as an example."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Role"}),(0,t.jsx)(n.th,{children:"Permissions"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Admin"}),(0,t.jsxs)(n.td,{children:["Manage organization members in the organization, e.g. invite, update member role, delete member, etc.",(0,t.jsx)("br",{}),"Manage organization info, e.g., update organization name and custom data, delete organization, etc."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Member"}),(0,t.jsx)(n.td,{children:"Only able to invite users to the organization."})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["So we can define the following ",(0,t.jsx)(n.a,{href:"/authorization/organization-template",children:"organization template"}),":"]}),"\n",(0,t.jsx)("center",{children:(0,t.jsx)("img",{src:r,width:"100%",alt:"Organization template"})}),"\n",(0,t.jsx)(n.p,{children:"After organization template is set, you may also create a bunch of APIs in your service that call Management API under the hood to perform management actions in a specific organization. The APIs in your service should validate the organization token to ensure the user has the required permissions."}),"\n",(0,t.jsx)(n.h2,{id:"examples-of-user-self-manage-their-own-organizations",children:"Examples of user self-manage their own organizations"}),"\n",(0,t.jsx)(n.p,{children:"Here are a list of things you can let your users do in your multi-organization app:"}),"\n",(0,t.jsx)(n.h3,{id:"let-everyone-invite-members",children:"Let everyone invite members:"}),"\n",(0,t.jsxs)(n.p,{children:["You can have both the admin and member users to invite others into the organization. Check ",(0,t.jsx)(n.a,{href:"/end-user-flows/organization-experience/invite-organization-members",children:"this documentation"})," for details about inviting member."]}),"\n",(0,t.jsx)(n.h3,{id:"admin-can-modify-member-roles",children:"Admin can modify member roles:"}),"\n",(0,t.jsx)(n.p,{children:"The admin can have the privilege to modify other members\u2019 roles. And admin can create more specific roles for the organization, such as department lead, project manager, coordinator, etc. This can be implemented with these Management APIs:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'curl \\\n -X POST https://[tenant_id].logto.app/api/organizations/{id}/users/{userId}/roles \\\n -H "Authorization: Bearer $ACCESS_TOKEN" \\\n -H "Content-Type: application/json" \\\n -d \'{"organizationRoleIds":["admin"]}\'\n'})}),"\n",(0,t.jsx)(n.p,{children:"Or in a bulk way:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'curl \\\n -X POST https://[tenant_id].logto.app/api/organizations/{id}/users/roles \\\n -H "Authorization: Bearer $ACCESS_TOKEN" \\\n -H "Content-Type: application/json" \\\n -d \'{"userIds":["userId1", "userId2"],"organizationRoleIds":["admin"]}\'\n'})}),"\n",(0,t.jsx)(n.h3,{id:"add-bots-to-organization",children:"Add bots to organization"}),"\n",(0,t.jsx)(n.p,{children:"You can also implement the feature to allow admin users to add bots to a specific organization. This can be done by creating Machine-to-Machine (M2M) apps first, and then adding these M2M apps to organizations as bots."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'curl \\\n -X POST https://[tenant_id].logto.app/api/organizations/{id}/applications \\\n -H "Authorization: Bearer $ACCESS_TOKEN" \\\n -H "Content-Type: application/json" \\\n -d \'{"applicationIds":["botAppId"]}\'\n'})}),"\n",(0,t.jsx)(n.p,{children:"Then you can also assign organization roles to these bots."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'curl \\\n -X POST https://[tenant_id].logto.app/api/organizations/{id}/applications/roles \\\n -H "Authorization: Bearer $ACCESS_TOKEN" \\\n -H "Content-Type: application/json" \\\n -d \'{"applicationIds":["botApp1"],"organizationRoleIds":["botRoleId"]}\'\n'})}),"\n",(0,t.jsx)(n.h2,{id:"unlock-more-possibilities-with-management-api",children:"Unlock more possibilities with Management API"}),"\n",(0,t.jsx)(n.p,{children:"The examples above are just a few of the many possibilities you can achieve with Management API. Check out the full list of Logto Management API endpoints and see what else you can do with them:"}),"\n",(0,t.jsx)(i,{href:"https://openapi.logto.io/operation/operation-listorganizations",children:"Fetch organizations"}),"\n",(0,t.jsx)(i,{href:"https://openapi.logto.io/operation/operation-listorganizationscopes",children:(0,t.jsx)(n.p,{children:"Fetch organization scopes"})}),"\n",(0,t.jsx)(i,{href:"https://openapi.logto.io/operation/operation-getorganizationrole",children:(0,t.jsx)(n.p,{children:"Fetch organization role"})}),"\n",(0,t.jsx)(i,{href:"https://openapi.logto.io/operation/operation-getorganizationinvitation",children:(0,t.jsx)(n.p,{children:"Fetch organization invitations"})})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},15658:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>s});var o=i(30758);const t={},a=o.createContext(t);function r(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);