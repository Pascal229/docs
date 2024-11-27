"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[96372],{15921:(e,o,i)=>{i.r(o),i.d(o,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"authorization/role-based-access-control/configure-roles","title":"Configure roles","description":"Configure via Logto Console","source":"@site/docs/authorization/role-based-access-control/configure-roles.mdx","sourceDirName":"authorization/role-based-access-control","slug":"/authorization/role-based-access-control/configure-roles","permalink":"/authorization/role-based-access-control/configure-roles","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/docs/authorization/role-based-access-control/configure-roles.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"docsSidebar","previous":{"title":"Configure permissions","permalink":"/authorization/role-based-access-control/configure-permissions"},"next":{"title":"Protect API resources with RBAC","permalink":"/authorization/role-based-access-control/protect-api-resources-with-rbac"}}');var t=i(86070),r=i(15658);const s={sidebar_position:2},a="Configure roles",l={},d=[{value:"Configure via Logto Console",id:"configure-via-logto-console",level:2},{value:"Define role type",id:"define-role-type",level:3},{value:"Create and define a new role",id:"create-and-define-a-new-role",level:3},{value:"View or update a role",id:"view-or-update-a-role",level:3},{value:"Manage users or machine-to-machine apps in roles",id:"manage-users-or-machine-to-machine-apps-in-roles",level:3},{value:"Manage permissions in roles",id:"manage-permissions-in-roles",level:3},{value:"Manage roles assigned to a machine-to-machine app or user",id:"manage-roles-assigned-to-a-machine-to-machine-app-or-user",level:3},{value:"Configure via Logto Management API",id:"configure-via-logto-management-api",level:2}];function c(e){const o={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components},{CloudLink:i}=o;return i||function(e,o){throw new Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("CloudLink",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.header,{children:(0,t.jsx)(o.h1,{id:"configure-roles",children:"Configure roles"})}),"\n",(0,t.jsx)(o.h2,{id:"configure-via-logto-console",children:"Configure via Logto Console"}),"\n",(0,t.jsx)(o.h3,{id:"define-role-type",children:"Define role type"}),"\n",(0,t.jsx)(o.p,{children:'In Logto, there are two types of roles based on the entity it can be applied "User role" or "Machine-to-machine app role".'}),"\n",(0,t.jsxs)(o.ol,{children:["\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.strong,{children:"User role"}),": User role is a type of role only assignable to users. It can include permissions from your own API resources."]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.strong,{children:"Machine-to-machine role"}),": M2M role is a type of role only assignable to machine-to-machine apps. It can include both your own API permissions and Logto Management API permissions. Machine-to-machine role is usually used to protect your machine-to-machine authentication. Such as accessing Logto Management API or your own API resources."]}),"\n"]}),"\n",(0,t.jsx)(o.p,{children:"After creating a role, you cannot modify its type."}),"\n",(0,t.jsx)(o.h3,{id:"create-and-define-a-new-role",children:"Create and define a new role"}),"\n",(0,t.jsxs)(o.p,{children:["A role is a group of permissions. Navigate to ",(0,t.jsx)(i,{to:"/roles",children:"Console > Roles "}),", and you'll see a list of roles you've defined."]}),"\n",(0,t.jsxs)(o.ol,{children:["\n",(0,t.jsxs)(o.li,{children:["Keep in mind that while it is technically possible to create a role ",(0,t.jsx)(o.em,{children:"without"})," permissions or users assigned, it is not recommended to create too many empty roles. This will disrupt the harmony of role management and render the RBAC system ineffective."]}),"\n",(0,t.jsx)(o.li,{children:"Permissions are grouped by API in the selector, allowing you to add them in bulk or select them individually."}),"\n"]}),"\n",(0,t.jsx)(o.admonition,{type:"note",children:(0,t.jsxs)(o.p,{children:["Role-based access control (RBAC) is used across the entire Logto infrastructure, both at the system/user-level and the organization level. This chapter focuses on system/user-level RBAC. If you need to implement RBAC at the organization level, refer to the ",(0,t.jsx)(o.a,{href:"/authorization/organization-template",children:"organization template"}),"."]})}),"\n",(0,t.jsx)(o.h3,{id:"view-or-update-a-role",children:"View or update a role"}),"\n",(0,t.jsx)(o.p,{children:"You can also edit the role name and description, and inspect and manage the permissions and users assigned to the role at any time."}),"\n",(0,t.jsx)(o.admonition,{type:"warning",children:(0,t.jsx)(o.p,{children:"Deleting the role will eliminate all the permissions linked to it for the impacted users and delete the connection between roles, users or apps, and permissions."})}),"\n",(0,t.jsx)(o.h3,{id:"manage-users-or-machine-to-machine-apps-in-roles",children:"Manage users or machine-to-machine apps in roles"}),"\n",(0,t.jsx)(o.p,{children:"Depending on the type of role you choose, you will be able to assign or remove users or machine-to-machine applications on the role details page."}),"\n",(0,t.jsx)(o.p,{children:'Click the "Users" or "Machine-to-machine apps" tab to view the users or apps assigned to the role. To continue adding user(s) or app(s) to the role, click the "Assign users" or "Assign applications" button in the top right corner.'}),"\n",(0,t.jsx)(o.h3,{id:"manage-permissions-in-roles",children:"Manage permissions in roles"}),"\n",(0,t.jsx)(o.p,{children:"If you need to change the capabilities of a role, you can easily do so by assigning or removing permissions."}),"\n",(0,t.jsx)(o.admonition,{type:"note",children:(0,t.jsx)(o.p,{children:"If a permission is deleted, users or apps with this role will lose the access granted by this permission."})}),"\n",(0,t.jsx)(o.h3,{id:"manage-roles-assigned-to-a-machine-to-machine-app-or-user",children:"Manage roles assigned to a machine-to-machine app or user"}),"\n",(0,t.jsx)(o.p,{children:'You can find a "Roles" tab on the details page of a user or an app. Click the tab to view and manage the roles assigned to the user or machine-to-machine apps.'}),"\n",(0,t.jsx)(o.p,{children:"If the configuration in Logto Cloud is not enough for you, you can leverage Management API to perform this management task programmatically."}),"\n",(0,t.jsx)(o.h2,{id:"configure-via-logto-management-api",children:"Configure via Logto Management API"}),"\n",(0,t.jsxs)(o.p,{children:["Manage using the Logto Management API. Make a call to the relative end point. Check out this ",(0,t.jsx)(o.a,{href:"https://openapi.logto.io/operation/operation-listresourcescopes",children:"reference"}),"."]}),"\n",(0,t.jsxs)(o.table,{children:[(0,t.jsx)(o.thead,{children:(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.th,{children:"method"}),(0,t.jsx)(o.th,{children:"path"}),(0,t.jsx)(o.th,{children:"description"})]})}),(0,t.jsxs)(o.tbody,{children:[(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"GET"}),(0,t.jsx)(o.td,{children:(0,t.jsx)(o.a,{href:"https://openapi.logto.io/operation/operation-listroles",children:"/api/roles"})}),(0,t.jsx)(o.td,{children:"Get roles with filters and pagination."})]}),(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"POST"}),(0,t.jsx)(o.td,{children:(0,t.jsx)(o.a,{href:"https://openapi.logto.io/operation/operation-createrole",children:"/api/roles"})}),(0,t.jsx)(o.td,{children:"Create a new role with the given data."})]}),(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"GET"}),(0,t.jsx)(o.td,{children:(0,t.jsx)(o.a,{href:"https://openapi.logto.io/operation/operation-getrole",children:"/api/roles/{Id}"})}),(0,t.jsx)(o.td,{children:"Get role details by ID."})]}),(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"DELETE"}),(0,t.jsx)(o.td,{children:(0,t.jsx)(o.a,{href:"https://openapi.logto.io/operation/operation-deleterole",children:"/api/roles/{Id}"})}),(0,t.jsx)(o.td,{children:"Delete a role with the given ID."})]}),(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"PATCH"}),(0,t.jsx)(o.td,{children:(0,t.jsx)(o.a,{href:"https://openapi.logto.io/operation/operation-updaterole",children:"/api/roles/{Id}"})}),(0,t.jsx)(o.td,{children:"Update role details. This method performs a partial update."})]}),(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"GET"}),(0,t.jsx)(o.td,{children:(0,t.jsx)(o.a,{href:"https://openapi.logto.io/operation/operation-listroleusers",children:"/api/roles/{Id}/users"})}),(0,t.jsx)(o.td,{children:"Get users who have the role assigned with pagination."})]}),(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"POST"}),(0,t.jsx)(o.td,{children:(0,t.jsx)(o.a,{href:"https://openapi.logto.io/operation/operation-createroleuser",children:"/api/roles/{Id}/users"})}),(0,t.jsxs)(o.td,{children:["Assign a role to a list of users. The role must have the type ",(0,t.jsx)(o.code,{children:"User"}),"."]})]}),(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"DELETE"}),(0,t.jsx)(o.td,{children:(0,t.jsx)(o.a,{href:"https://openapi.logto.io/operation/operation-deleteroleuser",children:"/api/roles/{Id}/users/{userId}"})}),(0,t.jsx)(o.td,{children:"Remove a role from a user with the given ID."})]}),(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"GET"}),(0,t.jsx)(o.td,{children:(0,t.jsx)(o.a,{href:"https://openapi.logto.io/operation/operation-listroleapplications",children:"/api/roles/{Id}/applications"})}),(0,t.jsx)(o.td,{children:"Get applications that have the role assigned with pagination."})]}),(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"POST"}),(0,t.jsx)(o.td,{children:(0,t.jsx)(o.a,{href:"https://openapi.logto.io/operation/operation-createroleapplication",children:"/api/roles/{Id}/applications"})}),(0,t.jsxs)(o.td,{children:["Assign a role to a list of applications. The role must have the type ",(0,t.jsx)(o.code,{children:"Application"}),"."]})]}),(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"DELETE"}),(0,t.jsx)(o.td,{children:(0,t.jsx)(o.a,{href:"https://openapi.logto.io/operation/operation-deleteroleapplication",children:"/api/roles/{Id}/applications/{applicationId}"})}),(0,t.jsx)(o.td,{children:"Remove the role from an application with the given ID."})]}),(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"GET"}),(0,t.jsx)(o.td,{children:(0,t.jsx)(o.a,{href:"https://openapi.logto.io/operation/operation-listrolescopes",children:"/api/roles/{Id}/scopes"})}),(0,t.jsx)(o.td,{children:"Get API resource scopes (permissions) linked with a role."})]}),(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"POST"}),(0,t.jsx)(o.td,{children:(0,t.jsx)(o.a,{href:"https://openapi.logto.io/operation/operation-createrolescope",children:"/api/roles/{Id}/scopes"})}),(0,t.jsx)(o.td,{children:"Link a list of API resource scopes (permissions) to a role. The original linked scopes will be kept."})]}),(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"DELETE"}),(0,t.jsx)(o.td,{children:(0,t.jsx)(o.a,{href:"https://openapi.logto.io/operation/operation-deleterolescope",children:"/api/roles/{Id}/scopes/{scopeId}"})}),(0,t.jsx)(o.td,{children:"Unlink an API resource scope (permission) from a role with the given ID."})]})]})]}),"\n",(0,t.jsx)(o.h1,{id:"default-roles",children:"Default roles"}),"\n",(0,t.jsx)(o.p,{children:"Default roles are the automatically assigned roles when the users are created, either for the self-sign-up or created through Management API. You can enable this toggle by going to roles-role detail-general."})]})}function h(e={}){const{wrapper:o}={...(0,r.R)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},15658:(e,o,i)=>{i.d(o,{R:()=>s,x:()=>a});var n=i(30758);const t={},r=n.createContext(t);function s(e){const o=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),n.createElement(r.Provider,{value:o},e.children)}}}]);