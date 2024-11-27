"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[79180],{6305:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>d,contentTitle:()=>p,default:()=>u,frontMatter:()=>c,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"integrate-logto/third-party-applications/oidc-oauth-third-party-applications/permission-management","title":"Permission management","description":"Third-party applications, not owned by your service, are integrated with Logto as identity providers to authenticate users. These apps, typically from external service providers, require careful permission management to protect user data.","source":"@site/docs/integrate-logto/third-party-applications/oidc-oauth-third-party-applications/permission-management.mdx","sourceDirName":"integrate-logto/third-party-applications/oidc-oauth-third-party-applications","slug":"/integrate-logto/third-party-applications/oidc-oauth-third-party-applications/permission-management","permalink":"/integrate-logto/third-party-applications/oidc-oauth-third-party-applications/permission-management","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/docs/integrate-logto/third-party-applications/oidc-oauth-third-party-applications/permission-management.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"docsSidebar","previous":{"title":"OIDC/OAuth third-party applications","permalink":"/integrate-logto/third-party-applications/oidc-oauth-third-party-applications/"},"next":{"title":"Consent screen branding","permalink":"/integrate-logto/third-party-applications/oidc-oauth-third-party-applications/consent-screen-branding"}}');var o=i(86070),n=i(15658);const a=i.p+"assets/images/grant-permissions-of-organization-data-f95d12ea1b21642e833e8214480f4e3a.webp",t=i.p+"assets/images/grant-permissions-of-user-data-c91e7739d488c66f8553f60d74ce012f.webp",c={sidebar_position:1},p="Permission management",d={},l=[{value:"Manage the permissions of your OIDC third-party applications",id:"manage-the-permissions-of-your-oidc-third-party-applications",level:2},{value:"Grant permissions of user data",id:"grant-permissions-of-user-data",level:3},{value:"Grant permissions of organization data",id:"grant-permissions-of-organization-data",level:3},{value:"Permissions types",id:"permissions-types",level:2},{value:"User permissions (User profile scopes)",id:"user-permissions-user-profile-scopes",level:3},{value:"API resource permissions (API resource scopes)",id:"api-resource-permissions-api-resource-scopes",level:3},{value:"Organization permissions (Organization scopes)",id:"organization-permissions-organization-scopes",level:3}];function h(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.R)(),...e.components},{CloudLink:i}=s;return i||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("CloudLink",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.header,{children:(0,o.jsx)(s.h1,{id:"permission-management",children:"Permission management"})}),"\n",(0,o.jsx)(s.p,{children:"Third-party applications, not owned by your service, are integrated with Logto as identity providers to authenticate users. These apps, typically from external service providers, require careful permission management to protect user data."}),"\n",(0,o.jsx)(s.p,{children:"Logto empowers you to control the specific permissions granted to third-party applications. This includes managing user profile, API resource, and organization scopes. Unlike first-party apps, third-party apps requesting unauthorized scopes will be denied access."}),"\n",(0,o.jsx)(s.p,{children:"By enabling specific scopes, you determine which user information third-party apps can access. Users will review and approve these permissions on the consent screen before granting access."}),"\n",(0,o.jsx)(s.h2,{id:"manage-the-permissions-of-your-oidc-third-party-applications",children:"Manage the permissions of your OIDC third-party applications"}),"\n",(0,o.jsxs)(s.p,{children:["Go to the ",(0,o.jsx)(s.strong,{children:"Application details"})," page of your OIDC third-party application and navigate to the ",(0,o.jsx)(s.strong,{children:"Permissions"})," tab and click on the ",(0,o.jsx)(s.strong,{children:"Add permissions"})," button to manage the permissions of your third-party applications."]}),"\n",(0,o.jsx)(s.p,{children:"Basic user data is always required for third-party app requests. Additionally, Logto supports assigning organization resources, making it ideal for B2B services."}),"\n",(0,o.jsx)(s.h3,{id:"grant-permissions-of-user-data",children:"Grant permissions of user data"}),"\n",(0,o.jsxs)(s.p,{children:["Assign user-level permissions, including ",(0,o.jsx)(s.a,{href:"#user-permissions-user-profile-scopes",children:"user profile permissions"})," (e.g., email, name, and avatar) and ",(0,o.jsx)(s.a,{href:"#api-resource-permissions-api-resource-scopes",children:"API resources permissions"})," (e.g., read or write access to specific resources)."]}),"\n",(0,o.jsx)(s.p,{children:"The names of the requested resources (e.g., Personal user data, API name) and specific permission descriptions (e.g., Your email address) will appear on the consent screen for users to review."}),"\n",(0,o.jsxs)(s.p,{children:["By clicking the ",(0,o.jsx)(s.strong,{children:"Authorize"})," button, users agree to grant the specified permissions to the third-party application."]}),"\n",(0,o.jsx)("center",{children:(0,o.jsx)("img",{src:t,alt:"grant permissions of user data"})}),"\n",(0,o.jsx)(s.h3,{id:"grant-permissions-of-organization-data",children:"Grant permissions of organization data"}),"\n",(0,o.jsxs)(s.p,{children:["Assign organization-level permissions, including ",(0,o.jsx)(s.a,{href:"#organization-permissions-organization-scopes",children:"organization permissions"})," and ",(0,o.jsx)(s.a,{href:"#api-resource-permissions-api-resource-scopes",children:"API resources permissions"}),". Logto allows API resources to be assigned to specific organization roles."]}),"\n",(0,o.jsx)(s.p,{children:"On the consent screen, organization data is displayed separately from user data. During the authorization flow, user must select a specific organization to grant access. Users can switch between organizations before confirming. The third-party application will only receive access to the selected organization's data and associated permissions."}),"\n",(0,o.jsx)("center",{children:(0,o.jsx)("img",{src:a,alt:"grant permissions of organization data"})}),"\n",(0,o.jsx)(s.h2,{id:"permissions-types",children:"Permissions types"}),"\n",(0,o.jsx)(s.h3,{id:"user-permissions-user-profile-scopes",children:"User permissions (User profile scopes)"}),"\n",(0,o.jsx)(s.p,{children:"Those permissions are OIDC standard and Logto's essential user profile scopes used for accessing user claims. User claims will be returned in the ID token and userinfo endpoint accordingly."}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.code,{children:"profile"}),": OIDC standard scope, used for accessing user name and avatar."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.code,{children:"email"}),": OIDC standard scope, used for accessing user email."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.code,{children:"phone"}),": OIDC standard scope, used for accessing user phone number."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.code,{children:"custom_data"}),": Logto user profile scope, used for accessing ",(0,o.jsx)(s.a,{href:"/user-management/user-data/#custom-data",children:"user custom data"}),"."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.code,{children:"identity"}),": Logto user profile scope, used for accessing user linked ",(0,o.jsx)(s.a,{href:"/user-management/user-data/#social-identities",children:"social identities"})," information."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.code,{children:"role"}),": Logto user profile scope, used for accessing user ",(0,o.jsx)(s.a,{href:"/authorization/role-based-access-control/#roles",children:"role"})," information."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.code,{children:"urn:logto:scope:organizations"}),": Logto user organization scope, used for accessing user organizations information. If enabled and requested by a third-party application, an organization selector will be displayed on the consent screen. This allows users to review and choose the organization they wish to grant access to. See ",(0,o.jsx)(s.a,{href:"/organizations",children:"organizations"})," for more details."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.code,{children:"urn:logto:scope:organization_roles"}),": Logto user organization scope, used for accessing user organization roles information."]}),"\n"]}),"\n",(0,o.jsx)(s.admonition,{type:"warning",children:(0,o.jsx)(s.p,{children:"Requesting a non-enabled user profile scope in the authorization request will result in an error."})}),"\n",(0,o.jsx)(s.h3,{id:"api-resource-permissions-api-resource-scopes",children:"API resource permissions (API resource scopes)"}),"\n",(0,o.jsxs)(s.p,{children:["Logto provides role-base access control (RBAC) for API resources. API resources are the resources that are owned by your service and are protected by Logto. You may assign self-define API scopes to the third-party applications to access your API resources. Please refer to ",(0,o.jsx)(s.a,{href:"/authorization/role-based-access-control",children:"RBAC"}),", Organization template and ",(0,o.jsx)(s.a,{href:"/authorization/api-resources/protect-your-api/",children:"Protect your API"})," for more details."]}),"\n",(0,o.jsxs)(s.p,{children:["You may create and manage your API resource scopes under the ",(0,o.jsx)(i,{to:"/api-resources",children:"Console > API resources"}),"."]}),"\n",(0,o.jsx)(s.admonition,{type:"warning",children:(0,o.jsx)(s.p,{children:"API resource scopes that are not enabled to the third-party applications will be ignored when sending an authorization request. It won't be displayed on the user consent screen and won't be granted by Logto."})}),"\n",(0,o.jsx)(s.h3,{id:"organization-permissions-organization-scopes",children:"Organization permissions (Organization scopes)"}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.a,{href:"/authorization/organization-template/#organization-permission",children:"Organization permissions"})," are the scopes that defined exclusively for Logto organizations. They are used for accessing organization information and resources."]}),"\n",(0,o.jsx)(s.admonition,{type:"note",children:(0,o.jsxs)(s.p,{children:["In order to use Logto organization permissions, you need to enable the ",(0,o.jsx)(s.code,{children:"urn:logto:scope:organizations"})," user scope. Otherwise the organization permissions will be ignored when sending an authorization request."]})}),"\n",(0,o.jsxs)(s.p,{children:["You can define your own organization scopes under the organization template settings page. Please see ",(0,o.jsx)(s.a,{href:"/authorization/organization-template/configure-organization-template/",children:"Configure organization template"})," for more details."]}),"\n",(0,o.jsx)(s.admonition,{type:"warning",children:(0,o.jsx)(s.p,{children:"Organization scopes that are not enabled to the third-party applications will be ignored when sending an authorization request. It won't be displayed on the user consent screen and won't be granted by Logto."})})]})}function u(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},15658:(e,s,i)=>{i.d(s,{R:()=>a,x:()=>t});var r=i(30758);const o={},n=r.createContext(o);function a(e){const s=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(n.Provider,{value:s},e.children)}}}]);