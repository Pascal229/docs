"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[33927],{62206:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>h,contentTitle:()=>c,default:()=>u,frontMatter:()=>d,metadata:()=>o,toc:()=>p});const o=JSON.parse('{"id":"authorization/organization-template/README","title":"Organization template","description":"An organization template is an access control design for multi-tenant apps. It builds on the basics of RBAC (Role-Based Access Control) but is adapted for multi-tenant environments, where organizations represent businesses, groups, or users.","source":"@site/docs/authorization/organization-template/README.mdx","sourceDirName":"authorization/organization-template","slug":"/authorization/organization-template/","permalink":"/authorization/organization-template/","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/docs/authorization/organization-template/README.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"docsSidebar","previous":{"title":"Protect API resources with RBAC","permalink":"/authorization/role-based-access-control/protect-api-resources-with-rbac"},"next":{"title":"Configure organization template","permalink":"/authorization/organization-template/configure-organization-template"}}');var t=i(86070),a=i(15658);const s=i.p+"assets/images/organization-example-afa2da085d6afd66d90ecece13bedd5c.webp",r="data:image/webp;base64,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",l=i.p+"assets/images/organization-role-ae60e0000282d30a23f9c694c4074d5f.webp",d={sidebar_position:3},c="Organization template",h={},p=[{value:"Organization permission",id:"organization-permission",level:3},{value:"Organization role",id:"organization-role",level:3},{value:"Organization template",id:"organization-template-1",level:2}];function g(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components},{CloudLink:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("CloudLink",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"organization-template",children:"Organization template"})}),"\n",(0,t.jsxs)(n.p,{children:["An ",(0,t.jsx)(n.strong,{children:"organization template"})," is an access control design for multi-tenant apps. It builds on the basics of ",(0,t.jsx)(n.a,{href:"/authorization/role-based-access-control",children:"RBAC (Role-Based Access Control)"})," but is adapted for multi-tenant environments, where organizations represent businesses, groups, or users."]}),"\n",(0,t.jsx)(n.p,{children:"At the organization level, access control is needed to manage permissions for resources."}),"\n",(0,t.jsxs)(n.p,{children:["Here\u2019s an example using Notion, a popular collaboration tool, and a typical ",(0,t.jsx)(n.a,{href:"https://auth.wiki/multi-tenancy",children:"multi-tenant app"}),". It supports various features for ",(0,t.jsx)(n.a,{href:"https://auth.wiki/authentication",children:"authentication"})," and ",(0,t.jsx)(n.a,{href:"https://auth.wiki/authorization",children:"authorization"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"You can create and join multiple workspaces with one account, instead of needing separate accounts for each workspace."}),"\n",(0,t.jsxs)(n.li,{children:["Notion uses the ",(0,t.jsx)(n.strong,{children:"same set"}),' of access levels, like "Workspace owner" and "Member," across all workspaces, even though you might expect different access levels for each one.']}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"In this chapter, we\u2019ll focus on the organization template, which refers to the authorization design at the organization level."}),"\n",(0,t.jsxs)(n.p,{children:["To set it up properly, you need to understand ",(0,t.jsx)(n.a,{href:"/organizations/understand-how-organizations-work",children:"how organizations work"})," and the different entities involved. If you haven\u2019t reviewed that yet, be sure to read those chapters."]}),"\n",(0,t.jsx)(n.h1,{id:"understand-organization-template",children:"Understand organization template"}),"\n",(0,t.jsx)(n.h3,{id:"organization-permission",children:"Organization permission"}),"\n",(0,t.jsx)(n.p,{children:"Organization permission refers to the authorization to perform an action in the context of organization. An organization permission should be represented as a meaningful string, also serving as the name and unique identifier."}),"\n",(0,t.jsx)("img",{src:r,width:"100%",alt:"Organization Permissions"}),"\n",(0,t.jsxs)(n.p,{children:["For example, ",(0,t.jsx)(n.code,{children:"edit:resource"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Organization permissions are not meaningful without the context of an organization. For example, ",(0,t.jsx)(n.code,{children:"edit:resource"})," in the context of organization ",(0,t.jsx)(n.code,{children:"org1"})," is different from ",(0,t.jsx)(n.code,{children:"edit:resource"})," in the context of organization ",(0,t.jsx)(n.code,{children:"org2"})," because they\u2019re pointing to different resources (",(0,t.jsx)(n.code,{children:"org 1"})," vs ",(0,t.jsx)(n.code,{children:"org 2"}),")."]}),"\n",(0,t.jsx)(n.h3,{id:"organization-role",children:"Organization role"}),"\n",(0,t.jsxs)(n.p,{children:["An organization role is a collection of ",(0,t.jsx)(n.a,{href:"#organization-permission",children:"organization permissions"})," or ",(0,t.jsx)(n.a,{href:"/authorization/role-based-access-control/configure-permissions",children:"API permissions"})," (API permissions directly defined in ",(0,t.jsx)(i,{to:"/api-resources",children:"API resources in Logto Console"}),") that can be assigned to users."]}),"\n",(0,t.jsx)("img",{src:l,width:"100%",alt:"Organization Roles"}),"\n",(0,t.jsxs)(n.p,{children:["Organization roles are not meaningful without the context of an organization. For example, ",(0,t.jsx)(n.code,{children:"admin"})," in the context of organization ",(0,t.jsx)(n.code,{children:"org1"})," is different from ",(0,t.jsx)(n.code,{children:"admin"})," in the context of organization ",(0,t.jsx)(n.code,{children:"org2"}),"."]}),"\n",(0,t.jsxs)(n.admonition,{type:"note",children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Can I assign permissions defined at the API resource level to organization roles?"})}),(0,t.jsxs)(n.p,{children:["Yes, you can assign ",(0,t.jsx)(n.a,{href:"/authorization/role-based-access-control#permissionsscopes",children:"API permissions"})," to organization roles, not just ",(0,t.jsx)(n.a,{href:"/authorization/organization-template#organization-permission",children:"organization-level permissions"}),"."]}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/authorization/api-resources",children:"API resources"})," in Logto Cloud mainly protect user/system-level resources, but when systems and organizations share endpoints, Logto lets you assign API permissions to organization roles for flexibility."]})]}),"\n",(0,t.jsx)(n.h2,{id:"organization-template-1",children:"Organization template"}),"\n",(0,t.jsxs)(n.p,{children:["Organization template refers to a collection of organization permissions and roles that apply to every ",(0,t.jsx)(n.a,{href:"/organizations",children:"organization."})," It is considered as organization-level Role-based access control."]}),"\n",(0,t.jsx)(n.p,{children:'Think of a typical collaboration app, and they naturally share the same access control \u201ctemplate\u201d that defines access levels and what users can do in the organization. We call it "organization template\u201d in Logto.'}),"\n",(0,t.jsx)(n.p,{children:"Let\u2019s take an example to understand how everything connects:"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"John"}),", ",(0,t.jsx)(n.strong,{children:"Sarah"})," are in different organizations with different roles in the context of different organizations."]}),"\n",(0,t.jsx)("img",{src:s,width:"100%",alt:"Organization Template"}),"\n",(0,t.jsx)(n.p,{children:"From this diagram, here are some info you need to know:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"John"})," is affiliated with two organizations, using the email ",(0,t.jsx)(n.code,{children:"john@email.com"})," as his unique identifier. He holds the position of ",(0,t.jsx)(n.code,{children:"admin"})," in ",(0,t.jsx)(n.code,{children:"Organization A"})," and is a ",(0,t.jsx)(n.code,{children:"guest"})," in ",(0,t.jsx)(n.code,{children:"Organization B"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Sarah"})," is associated with a single organization and uses the email ",(0,t.jsx)(n.code,{children:"sarah@email.com"})," as her unique identifier. She is the ",(0,t.jsx)(n.code,{children:"admin"})," of ",(0,t.jsx)(n.code,{children:"Organization B"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["The roles of ",(0,t.jsx)(n.code,{children:"Admin"}),", ",(0,t.jsx)(n.code,{children:"Member"}),", and ",(0,t.jsx)(n.code,{children:"Guest"})," are designated within organizations and these roles are consistent across various organizations."]}),"\n",(0,t.jsx)(n.li,{children:"Additional roles can be created within the organization template settings. These newly created roles will be applied and shared across all organizations."}),"\n"]}),"\n",(0,t.jsxs)(n.admonition,{type:"note",children:[(0,t.jsx)(n.p,{children:"In Logto, the organization template is an access control model designed specifically for organizations. While it\u2019s based on Role-Based Access Control (RBAC), it\u2019s meant for different scenarios."}),(0,t.jsx)(n.p,{children:"Use the organization template when you need to set up roles and permissions for an organization."}),(0,t.jsx)(n.p,{children:"For a simple B2C app without an organization level, use user/system-level RBAC instead."}),(0,t.jsxs)(n.p,{children:["You can use both ",(0,t.jsx)(n.a,{href:"/authorization/organization-template",children:"organization template"})," and ",(0,t.jsx)(n.a,{href:"/authorization/role-based-access-control/",children:"user/system-level RBAC"})," in Logto, allowing a more robust approach to meet your specific business and product requirements."]})]})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(g,{...e})}):g(e)}},15658:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>r});var o=i(30758);const t={},a=o.createContext(t);function s(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);