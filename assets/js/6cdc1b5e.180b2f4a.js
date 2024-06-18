"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[35119],{43394:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var t=i(11527),o=i(17279);const a=i.p+"assets/images/organization-roles-1492f03a077b3572daf6e60cd1835f3e.webp",s={sidebar_position:5},r="Invite members to your organization",c={id:"docs/recipes/organizations/organization-invitations",title:"Invite members to your organization",description:"As a multi-organization application, one common requirement is to invite members to your organization. In this guide, we will walk you through the steps and technical details to implement this feature in your application.",source:"@site/docs/docs/recipes/organizations/organization-invitations.mdx",sourceDirName:"docs/recipes/organizations",slug:"/docs/recipes/organizations/organization-invitations",permalink:"/docs/recipes/organizations/organization-invitations",draft:!1,unlisted:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/docs/recipes/organizations/organization-invitations.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docsSidebar",previous:{title:"Integrate Organizations with your app",permalink:"/docs/recipes/organizations/integration"},next:{title:"\u2601\ufe0f Enterprise SSO (SAML & OIDC)",permalink:"/docs/recipes/single-sign-on/"}},l={},d=[{value:"Flow overview",id:"flow-overview",level:2},{value:"Create organization roles",id:"create-organization-roles",level:2},{value:"Configure your email connector",id:"configure-your-email-connector",level:2},{value:"Handle invitations with Logto management API",id:"handle-invitations-with-logto-management-api",level:2},{value:"Use organization role-based access control (RBAC) to manage user permissions",id:"use-organization-role-based-access-control-rbac-to-manage-user-permissions",level:2},{value:"Handle scope updates in access tokens",id:"handle-scope-updates-in-access-tokens",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",mermaid:"mermaid",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"invite-members-to-your-organization",children:"Invite members to your organization"}),"\n",(0,t.jsx)(n.p,{children:"As a multi-organization application, one common requirement is to invite members to your organization. In this guide, we will walk you through the steps and technical details to implement this feature in your application."}),"\n",(0,t.jsx)(n.h2,{id:"flow-overview",children:"Flow overview"}),"\n",(0,t.jsx)(n.p,{children:"The overall process is illustrated in the diagram below:"}),"\n",(0,t.jsx)(n.mermaid,{value:"sequenceDiagram\n\tParticipant U as End user\n  Participant A as Organization admin\n  Participant C as Your multi-organization app\n\tParticipant L as Logto\n\n  A ->> C: Input invitee email and role\n  C ->> L: Create organization invitation with management API\n  L --\x3e> C: Return invitation ID\n  C ->> C: Compose invitation link with invitation ID\n  C ->> L: Request sending invitation email with invitation link\n  L --\x3e> U: Send invitation email with invitation link\n  U ->> C: Click invitation link and navigate to your landing page,<br /> accept or reject the invitation\n  C ->> L: Update invitation status with management API"}),"\n",(0,t.jsx)(n.h2,{id:"create-organization-roles",children:"Create organization roles"}),"\n",(0,t.jsxs)(n.p,{children:["Before inviting members to your organization, you need to create organization roles. Check out the ",(0,t.jsx)(n.a,{href:"/docs/recipes/organizations/configuration/",children:"Configure organizations"})," guide for detailed instructions."]}),"\n",(0,t.jsxs)(n.p,{children:["In this guide, let's create two typical organization roles: ",(0,t.jsx)(n.code,{children:"admin"})," and ",(0,t.jsx)(n.code,{children:"member"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"admin"})," role has full access to all resources in the organization, while the ",(0,t.jsx)(n.code,{children:"member"})," role has limited access. For example, each role can have a set of permissions as follows:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"admin"})," role:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"read:data"})," - Read access to all organization data resources."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"write:data"})," - Write access to all organization data resources."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"delete:data"})," - Delete access to all organization data resources."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"invite:member"})," - Invite members to the organization."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"manage:member"})," - Manage members in the organization."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"delete:member"})," - Remove members from the organization."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"member"})," role:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"read:data"})," - Read access to all organization data resources."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"write:data"})," - Write access to all organization data resources."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"invite:member"})," - Invite members to the organization."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"This can be done easily in the Logto Admin Console. You can also use the Logto management API to create organization roles programmatically."}),"\n",(0,t.jsx)("center",{children:(0,t.jsx)("img",{src:a,alt:"organization roles"})}),"\n",(0,t.jsx)(n.h2,{id:"configure-your-email-connector",children:"Configure your email connector"}),"\n",(0,t.jsxs)(n.p,{children:["Since invitations are sent via email, ensure your email connector is properly configured. To send invitations, you need to configure a newly introduced email template usage type - ",(0,t.jsx)(n.code,{children:"OrganizationInvitation"}),"."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:['Logto Cloud\'s built-in "Logto email service" does not support the ',(0,t.jsx)(n.code,{children:"OrganizationInvitation"})," usage type at the moment. Instead, you need to configure your email connector (e.g. Sendgrid) and set up the ",(0,t.jsx)(n.code,{children:"OrganizationInvitation"})," template."]})}),"\n",(0,t.jsxs)(n.p,{children:["A sample email template for the ",(0,t.jsx)(n.code,{children:"OrganizationInvitation"})," usage type is shown below:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "subject": "Welcome to my organization",\n  "content": "<p>Join my organization by this <a href=\\"{{link}}\\" target=\\"_blank\\">link</a>.</p>",\n  "usageType": "OrganizationInvitation",\n  "type": "text/html"\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"{{link}}"})," placeholder in the email content will be replaced with the actual invitation link when sending the email. In this guide, let's say it would be ",(0,t.jsx)(n.code,{children:"https://your-app.com/invitation/accept/{your-invitation-id}"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["You can check out the ",(0,t.jsx)(n.a,{href:"/docs/recipes/configure-connectors/email-connector/configure-popular-email-service/",children:"Configure popular email service"})," guide for more details on setting up email connectors."]}),"\n",(0,t.jsx)(n.h2,{id:"handle-invitations-with-logto-management-api",children:"Handle invitations with Logto management API"}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["If you haven't set up the Logto management API yet, check out ",(0,t.jsx)(n.a,{href:"/docs/recipes/interact-with-management-api/",children:"Interact with Management API"})," for details."]})}),"\n",(0,t.jsx)(n.p,{children:"We've provided a set of invitation-related management APIs in the organizations feature. With these APIs, you can:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"POST /api/organization-invitations"})," create an organization invitation with an assigned organization role."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"POST /api/organization-invitations/{id}/message"})," send the organization invitation to invitee via email."]}),"\n",(0,t.jsxs)(n.p,{children:["Note: This API payload supports a ",(0,t.jsx)(n.code,{children:"link"})," property, you can compose your invitation link based on the invitation ID. For example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "link": "https://your-app.com/invitation/accept/{your-invitation-id}"\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"Accordingly, you need to implement a landing page when your invitee navigates through the invitation link to your application."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"GET /api/organization-invitations"})," & ",(0,t.jsx)(n.code,{children:"GET /api/organization-invitations/{id}"})," get all your invitations or a specific one by ID."]}),"\n",(0,t.jsx)(n.p,{children:"On your landing page, use these APIs to list all invitations or details of an invitation that a user has received."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"PUT /api/organization-invitations/{id}/status"})," accept or reject the invitation by updating the invitation status."]}),"\n",(0,t.jsx)(n.p,{children:"Use this API to handle the user's response to the invitation."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:['Please be noted that all the APIs listed above requires a valid "organization access token". Check this ',(0,t.jsx)(n.a,{href:"/docs/recipes/organizations/integration/#step-2-fetch-the-organization-token",children:"guide"})," to learn how to obtain the organization access token."]}),"\n",(0,t.jsx)(n.h2,{id:"use-organization-role-based-access-control-rbac-to-manage-user-permissions",children:"Use organization role-based access control (RBAC) to manage user permissions"}),"\n",(0,t.jsx)(n.p,{children:"With the above setups, you can now send invitations via email, and invitees can join the organization with the assigned role."}),"\n",(0,t.jsx)(n.p,{children:"Users with different organization roles will have different scopes (permissions) in their organization access tokens. Thus, both your client app and backend services should check these scopes to determine visible features and permitted actions."}),"\n",(0,t.jsx)(n.h2,{id:"handle-scope-updates-in-access-tokens",children:"Handle scope updates in access tokens"}),"\n",(0,t.jsx)(n.p,{children:"Managing scope updates in access tokens involves:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Revoking existing scopes: For instance, demoting an admin to a non-admin member automatically shrinks scopes in the new access token obtained with the existing refresh token."}),"\n",(0,t.jsx)(n.li,{children:"Granting new scopes: Conversely, promoting a user to admin requires triggering a re-login or re-consent process to reflect the change in user access tokens."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Logto provides management API to fetch real-time user permissions in the organization."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"GET /api/organizations/{id}/users/{userId}/scopes"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"You can then compare the scopes in the user's access token with the real-time permissions to determine if the user has been promoted or demoted."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"If promoted, trigger a re-login or re-consent process to update the user's access token. Let's take the React SDK for example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"const { clearAllTokens, signIn } = useLogto();\n\n...\n// If fetched real-time scopes have newly assigned scopes than the organization access token scopes\nawait clearAllTokens();\nsignIn({\n  redirectUri: '<your-sign-in-redirect-uri>',\n  prompt: 'consent',\n});\n"})}),"\n",(0,t.jsx)(n.p,{children:"The above code will trigger a page navigation to the consent page and auto-redirect back to your app, with updated scopes in the user's organization access token."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"If demoted, you can simply clear the cached access token and the SDK will automatically issue a new one with the updated scopes."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"const { clearAccessToken } = useLogto();\n\n...\n// If fetched real-time scopes have fewer scopes than the organization access token scopes\nawait clearAccessToken();\n"})}),"\n",(0,t.jsx)(n.p,{children:"This does not require a re-login or re-consent process. New access tokens will be issued automatically by the Logto SDK."}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},17279:(e,n,i)=>{i.d(n,{Z:()=>r,a:()=>s});var t=i(50959);const o={},a=t.createContext(o);function s(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);