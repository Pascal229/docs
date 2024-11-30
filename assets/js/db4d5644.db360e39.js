"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[11676],{31027:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});const o=JSON.parse('{"id":"organizations/organization-management","title":"Manage organization","description":"This section covers how developers manage their organizations via Logto Console or Logto Management API, not how organization admins self-serve managing their members within your app. To learn more about how to develop your orgnaization experience, please check this guide.","source":"@site/docs/organizations/organization-management.mdx","sourceDirName":"organizations","slug":"/organizations/organization-management","permalink":"/organizations/organization-management","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/docs/organizations/organization-management.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"docsSidebar","previous":{"title":"Organization data structure","permalink":"/organizations/organization-data"},"next":{"title":"Just-in-Time provisioning","permalink":"/organizations/just-in-time-provisioning"}}');var a=i(86070),t=i(15658);const r={sidebar_position:3},s="Manage organization",l={},c=[{value:"Manage via Logto Console",id:"manage-via-logto-console",level:2},{value:"Create an organization",id:"create-an-organization",level:3},{value:"Basic settings",id:"basic-settings",level:3},{value:"Require MFA for organization members",id:"require-mfa-for-organization-members",level:3},{value:"Just-in-Time provisioning",id:"just-in-time-provisioning",level:3},{value:"Manage organization members",id:"manage-organization-members",level:3},{value:"Manage organization M2M applications",id:"manage-organization-m2m-applications",level:3},{value:"Manage via Logto Management API",id:"manage-via-logto-management-api",level:2}];function g(e){const n={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",ul:"ul",...(0,t.R)(),...e.components},{CloudLink:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("CloudLink",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"manage-organization",children:"Manage organization"})}),"\n",(0,a.jsxs)(n.p,{children:["This section covers how developers manage their organizations via Logto Console or Logto Management API, not how organization admins self-serve managing their members within your app. To learn more about how to develop your orgnaization experience, please check ",(0,a.jsx)(n.a,{href:"/end-user-flows/organization-experience/organization-management",children:"this guide"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"manage-via-logto-console",children:"Manage via Logto Console"}),"\n",(0,a.jsx)(n.h3,{id:"create-an-organization",children:"Create an organization"}),"\n",(0,a.jsxs)(n.p,{children:["Navigate to ",(0,a.jsx)(i,{to:"/organizations",children:"Console > Organizations"}),' and click the "Create organization" button.']}),"\n",(0,a.jsx)(n.h3,{id:"basic-settings",children:"Basic settings"}),"\n",(0,a.jsx)(n.p,{children:"You can configure the basic attributes of the organization like name, description, logo, etc."}),"\n",(0,a.jsx)(n.h3,{id:"require-mfa-for-organization-members",children:"Require MFA for organization members"}),"\n",(0,a.jsx)(n.p,{children:"You can require all members of an organization to enable MFA. This is a security measure to ensure that all members have an extra layer of protection when accessing the organization's resources."}),"\n",(0,a.jsx)(n.p,{children:'To enable this feature, go to the organization details page and turn on the "Multi-factor authentication (MFA)" toggle switch.'}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["You'll need to ",(0,a.jsx)(n.a,{href:"/end-user-flows/mfa",children:"enable at least one MFA method"})," in order to make this feature work properly."]})}),"\n",(0,a.jsxs)(n.p,{children:["Once enabled, members without MFA configured will not be able to exchange ",(0,a.jsx)(n.a,{href:"/authorization/organization-template/protect-organization-resources#step-2-fetch-organization-token",children:"organization access tokens"})," until they set up MFA."]}),"\n",(0,a.jsx)(n.p,{children:"Please note that:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"This feature only checks if the user has MFA configured. It does not force users to use MFA when exchanging access tokens."}),"\n",(0,a.jsx)(n.li,{children:"This feature does not limit what MFA methods users can use."}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"just-in-time-provisioning",children:"Just-in-Time provisioning"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://auth.wiki/jit-provisioning",children:"Just-in-Time provisioning"})," automatically adds users to an organization when they first sign in to the app. In Logto, this is supported for ",(0,a.jsx)(n.a,{href:"/end-user-flows/enterprise-sso",children:"Enterprise SSO"})," and email domain-based provisioning. When users meet specific criteria, like signing in through a specific enterprise IdP or using an email with a certain domain, they are automatically added to the organization."]}),"\n",(0,a.jsx)(n.p,{children:"You can also set default organization roles for members when they first join the organization."}),"\n",(0,a.jsxs)(n.p,{children:["For more details on Just-in-Time provisioning and how to set it up, refer to ",(0,a.jsx)(n.a,{href:"/organizations/just-in-time-provisioning",children:"this section"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"manage-organization-members",children:"Manage organization members"}),"\n",(0,a.jsx)(n.p,{children:"Users can hold one or more roles. When adding members to an organization, you have the option to assign roles to multiple users at once. If you leave this assignment blank, the added users will not receive any roles."}),"\n",(0,a.jsxs)(n.p,{children:["In the ",(0,a.jsx)(i,{to:"/users",children:" Console > User management > User details page"})," , you can see which organizations the user belongs to and what organization roles they have."]}),"\n",(0,a.jsx)(n.h3,{id:"manage-organization-m2m-applications",children:"Manage organization M2M applications"}),"\n",(0,a.jsxs)(n.p,{children:["Machine-to-machine applications can also be added to organizations. You can ",(0,a.jsx)(n.a,{href:"/organizations/understand-how-organizations-work#organization-m2m-application",children:"assign roles to machine-to-machine applications"})," like you assign roles to users."]}),"\n",(0,a.jsxs)(n.p,{children:["In the ",(0,a.jsx)(i,{to:"/applications",children:" Console > Applications > Application details page"}),", you can see which organizations the application associates with and what organization roles it has."]}),"\n",(0,a.jsx)(n.h2,{id:"manage-via-logto-management-api",children:"Manage via Logto Management API"}),"\n",(0,a.jsxs)(n.p,{children:["Everything you can do in Logto Console can also be done through ",(0,a.jsx)(n.a,{href:"/integrate-logto/interact-with-management-api",children:"Management API"}),". This includes, but is not limited to:"]}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Create, delete, or edit an organization."}),"\n",(0,a.jsx)(n.li,{children:"Manage organization template: create, delete, or edit organization permissions and roles."}),"\n",(0,a.jsx)(n.li,{children:"Add members to, or remove members from an organization."}),"\n",(0,a.jsx)(n.li,{children:"Assign or remove the user's organization roles."}),"\n",(0,a.jsx)(n.li,{children:"Add machine-to-machine applications to, or remove machine-to-machine applications from an organization."}),"\n",(0,a.jsx)(n.li,{children:"Assign or remove machine-to-machine application's organization roles."}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["You can also check out this section for using Management API to enable more organization-level experience and management. ",(0,a.jsx)(n.a,{href:"/end-user-flows/organization-experience",children:"Learn more"})]}),"\n",(0,a.jsxs)(n.p,{children:["For a complete list of capabilities, please refer to our ",(0,a.jsx)(n.a,{href:"https://openapi.logto.io/group/endpoint-organizations",children:"API references"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(g,{...e})}):g(e)}},15658:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>s});var o=i(30758);const a={},t=o.createContext(a);function r(e){const n=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);