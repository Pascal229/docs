"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[89702],{99887:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>f,contentTitle:()=>m,default:()=>b,frontMatter:()=>g,metadata:()=>a,toc:()=>x});const a=JSON.parse('{"id":"integrate-logto/interact-with-management-api/README","title":"Interact with Management API","description":"What is Logto Management API?","source":"@site/docs/integrate-logto/interact-with-management-api/README.md","sourceDirName":"integrate-logto/interact-with-management-api","slug":"/integrate-logto/interact-with-management-api/","permalink":"/integrate-logto/interact-with-management-api/","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/docs/integrate-logto/interact-with-management-api/README.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4},"sidebar":"docsSidebar","previous":{"title":"Consent screen branding","permalink":"/integrate-logto/third-party-applications/oidc-oauth-third-party-applications/consent-screen-branding"},"next":{"title":"Application data structure","permalink":"/integrate-logto/application-data-structure"}}');var o=t(86070),s=t(15658);const r=t.p+"assets/images/logto-management-api-resource-14162a031698ad36ac0f8c04ff683ba2.webp",i=t.p+"assets/images/logto-management-api-details-4994334ef32791d9ebc6c9aa298c9ecd.webp";var c=t(98746),l=t(70124),d=t(13333),u=t(72734),h=t(81948),p=t(89931);const g={sidebar_position:4},m="Interact with Management API",f={},x=[{value:"What is Logto Management API?",id:"what-is-logto-management-api",level:2},{value:"How to access Logto Management API",id:"how-to-access-logto-management-api",level:2},{value:"Create an M2M app",id:"create-an-m2m-app",level:3},...p.RM,{value:"Fetch an access token",id:"fetch-an-access-token",level:3},{value:"Basics about access token request",id:"basics-about-access-token-request",level:4},...c.RM,{value:"Fetch access token for Logto Management API",id:"fetch-access-token-for-logto-management-api",level:4},...l.RM,{value:"Access token response",id:"access-token-response",level:4},...h.RM,{value:"Access Logto Management API using access token",id:"access-logto-management-api-using-access-token",level:3},...d.RM,...u.RM,{value:"Typical scenarios for using Logto Management API",id:"typical-scenarios-for-using-logto-management-api",level:2},{value:"Implement user profile on your own",id:"implement-user-profile-on-your-own",level:3},{value:"Advanced user search",id:"advanced-user-search",level:3},{value:"Implement organization management on your own",id:"implement-organization-management-on-your-own",level:3},{value:"Tips for using Logto Management API",id:"tips-for-using-logto-management-api",level:2},{value:"Managing paginated API responses",id:"managing-paginated-api-responses",level:3},{value:"Using link headers",id:"using-link-headers",level:4},{value:"Using total-number header",id:"using-total-number-header",level:4},{value:"Changing page number and page size",id:"changing-page-number-and-page-size",level:4},{value:"Rate limit",id:"rate-limit",level:3}];function j(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components},{CloudLink:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("CloudLink",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"interact-with-management-api",children:"Interact with Management API"})}),"\n",(0,o.jsx)(n.h2,{id:"what-is-logto-management-api",children:"What is Logto Management API?"}),"\n",(0,o.jsx)(n.p,{children:"The Logto Management API is a comprehensive set of APIs that gives developers full control over their implementation to suit their product needs and tech stack. It is pre-built, listed in the API resource list in the Logto Console, and cannot be deleted or modified."}),"\n",(0,o.jsxs)(n.p,{children:["Its identifier is in the pattern of ",(0,o.jsx)(n.code,{children:"https://[tenant-id].logto.app/api"})]}),"\n",(0,o.jsx)("img",{alt:"Logto Management API Resource",src:r}),"\n",(0,o.jsx)("img",{alt:"Logto Management API Details",src:i}),"\n",(0,o.jsx)(n.p,{children:"With the Logto Management API, you can access Logto's robust backend services, which are highly scalable and can be utilized in a multitude of scenarios. It goes beyond what's possible with the Admin Console's low-code capabilities."}),"\n",(0,o.jsx)(n.p,{children:"Some frequently used APIs are listed below:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"User"}),"\n",(0,o.jsx)(n.li,{children:"Application"}),"\n",(0,o.jsx)(n.li,{children:"Logs"}),"\n",(0,o.jsx)(n.li,{children:"Roles"}),"\n",(0,o.jsx)(n.li,{children:"Resources"}),"\n",(0,o.jsx)(n.li,{children:"Connectors"}),"\n",(0,o.jsx)(n.li,{children:"Organizations"}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["To learn more about the APIs that are available, please visit ",(0,o.jsx)(n.a,{href:"https://openapi.logto.io/",children:"https://openapi.logto.io/"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"how-to-access-logto-management-api",children:"How to access Logto Management API"}),"\n",(0,o.jsx)(n.h3,{id:"create-an-m2m-app",children:"Create an M2M app"}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["If you're not familiar with M2M (Machine-to-Machine) authentication flow, we recommend reading ",(0,o.jsx)(n.a,{href:"/integrate-logto/integrate-logto-into-your-application/understand-authentication-flow/#machine-to-machine-authentication-flow",children:"Understanding authentication flow"})," first to understand the basic concepts."]})}),"\n",(0,o.jsxs)(n.p,{children:["Go to ",(0,o.jsx)(t,{to:"/applications",children:"Console > Applications"}),", select the M2M app type and start the creation process."]}),"\n",(0,o.jsx)(p.Ay,{}),"\n",(0,o.jsx)(n.p,{children:"In the role assignment module, you can see all M2M roles are included, and roles indicated by a Logto icon means that these roles include Logto Management API permissions."}),"\n",(0,o.jsx)(n.p,{children:"Now assign M2M roles include Logto Management API permissions for your M2M app."}),"\n",(0,o.jsx)(n.h3,{id:"fetch-an-access-token",children:"Fetch an access token"}),"\n",(0,o.jsx)(n.h4,{id:"basics-about-access-token-request",children:"Basics about access token request"}),"\n",(0,o.jsx)(c.Ay,{}),"\n",(0,o.jsx)(n.h4,{id:"fetch-access-token-for-logto-management-api",children:"Fetch access token for Logto Management API"}),"\n",(0,o.jsx)(l.Ay,{}),"\n",(0,o.jsx)(n.h4,{id:"access-token-response",children:"Access token response"}),"\n",(0,o.jsx)(n.p,{children:"A successful access response body would be like:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "access_token": "eyJhbG...2g", // Use this token for accessing the Logto Management API\n  "expires_in": 3600, // Token expiration in seconds\n  "token_type": "Bearer", // Auth type for your request when using the access token\n  "scope": "all" // scope `all` for Logto Management API\n}\n'})}),"\n",(0,o.jsx)(h.Ay,{}),"\n",(0,o.jsx)(n.h3,{id:"access-logto-management-api-using-access-token",children:"Access Logto Management API using access token"}),"\n",(0,o.jsx)(d.Ay,{}),"\n",(0,o.jsx)(u.Ay,{}),"\n",(0,o.jsx)(n.h2,{id:"typical-scenarios-for-using-logto-management-api",children:"Typical scenarios for using Logto Management API"}),"\n",(0,o.jsx)(n.p,{children:"Our developers have implemented many additional features using Logto Management API. We believe that our API is highly scalable and can support a wide range of your needs. Here are a few examples of scenarios that are not possible with the Logto Admin Console but can be achieved through the Logto Management API."}),"\n",(0,o.jsx)(n.h3,{id:"implement-user-profile-on-your-own",children:"Implement user profile on your own"}),"\n",(0,o.jsx)(n.p,{children:"Logto currently does not provide a pre-built UI solution for user profiles. We recognize that user profiles are closely tied to business and product attributes. While we work on determining the best approach, we suggest using our APIs to create your own solution. For instance, you can utilize our interaction API, profile API, and verification code API to develop a custom solution that meets your needs."}),"\n",(0,o.jsx)(n.h3,{id:"advanced-user-search",children:"Advanced user search"}),"\n",(0,o.jsxs)(n.p,{children:["The Logto Admin Console supports basic search and filtering functions. For advanced search options like fuzzy search, exact match, and case sensitivity, check out our ",(0,o.jsx)(n.a,{href:"/user-management/advanced-user-search",children:"Advanced User Search"})," tutorials and guides."]}),"\n",(0,o.jsx)(n.h3,{id:"implement-organization-management-on-your-own",children:"Implement organization management on your own"}),"\n",(0,o.jsxs)(n.p,{children:["If you\u2019re using the ",(0,o.jsx)(n.a,{href:"/organizations",children:"organizations"})," feature to build your multi-tenant app, you might need the Logto Management API for tasks like organization invitations and member management. For your SaaS product, where you have both admins and members in the tenant, the Logto Management API can help you create a custom admin portal tailored to your business needs. Check out ",(0,o.jsx)(n.a,{href:"/end-user-flows/organization-experience/",children:"this"})," for more detail."]}),"\n",(0,o.jsx)(n.h2,{id:"tips-for-using-logto-management-api",children:"Tips for using Logto Management API"}),"\n",(0,o.jsx)(n.h3,{id:"managing-paginated-api-responses",children:"Managing paginated API responses"}),"\n",(0,o.jsx)(n.p,{children:"Some of the API responses may include many results, the results will be paginated. Logto provides 2 kinds of pagination info."}),"\n",(0,o.jsx)(n.h4,{id:"using-link-headers",children:"Using link headers"}),"\n",(0,o.jsx)(n.p,{children:"A paginated response header will be like:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'Link: <https://logto.dev/users?page=1&page_size=20>; rel="first"\n'})}),"\n",(0,o.jsx)(n.p,{children:"The link header provides the URL for the previous, next, first, and last page of results:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:'The URL for the previous page is followed by rel="prev".'}),"\n",(0,o.jsx)(n.li,{children:'The URL for the next page is followed by rel="next".'}),"\n",(0,o.jsx)(n.li,{children:'The URL for the last page is followed by rel="last".'}),"\n",(0,o.jsx)(n.li,{children:'The URL for the first page is followed by rel="first".'}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"using-total-number-header",children:"Using total-number header"}),"\n",(0,o.jsxs)(n.p,{children:["In addition to the standard link headers, Logto will also add a ",(0,o.jsx)(n.code,{children:"Total-Number"})," header:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"Total-Number: 216\n"})}),"\n",(0,o.jsx)(n.p,{children:"That would be very convenient and useful to show page numbers."}),"\n",(0,o.jsx)(n.h4,{id:"changing-page-number-and-page-size",children:"Changing page number and page size"}),"\n",(0,o.jsx)(n.p,{children:"There are 2 optional query parameters:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"page"}),": indicates the page number, starts from 1, the default value is 1."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"page_size"}),": indicates the number of items per page, the default value is 20."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"rate-limit",children:"Rate limit"}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:"This is only for Logto Cloud."})}),"\n",(0,o.jsx)(n.p,{children:"To ensure the reliability and security of our services for all users, we employ a general firewall that monitors and manages traffic to our website. While we do not enforce a strict rate limit, we recommend that users limit their activity to approximately 200 requests every 10 seconds to avoid triggering our protective measures."})]})}function b(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(j,{...e})}):j(e)}},72734:(e,n,t)=>{t.d(n,{Ay:()=>l,RM:()=>i});var a=t(86070),o=t(15658),s=t(78551),r=t(77501);const i=[];function c(e){const n={code:"code",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["Using the requested access token with the built-in Logto Management API resource ",(0,a.jsx)(n.code,{children:"https://[your-tenant-id].logto.app/api"})," to get all applications in Logto:"]}),"\n",(0,a.jsxs)(r.A,{children:[(0,a.jsx)(s.A,{value:"Node.js",label:"Node.js",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"const logtoEndpoint = 'https://your.logto.endpoint'; // Replace with your Logto endpoint\nconst accessToken = 'eyJhb...2g'; // Access Token\n\nconst fetchLogtoApplications = async () => {\n  return await fetch(`${logtoEndpoint}/api/applications`, {\n    method: 'GET',\n    headers: {\n      Authorization: `Bearer ${accessToken}`,\n    },\n  });\n};\n"})})}),(0,a.jsxs)(s.A,{value:"cURL",label:"cURL",children:[(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"curl --location \\\n  --request GET 'https://your.logto.endpoint/api/applications' \\\n  --header 'Authorization: Bearer eyJhbG...2g'\n"})}),(0,a.jsxs)(n.p,{children:["Remember to replace the actual values with your own. The value after ",(0,a.jsx)(n.code,{children:"Bearer"})," should be the access token (JWT) you received."]})]})]})]})}function l(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},13333:(e,n,t)=>{t.d(n,{Ay:()=>i,RM:()=>s});var a=t(86070),o=t(15658);const s=[];function r(e){const n={code:"code",p:"p",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["You may notice the token response has a ",(0,a.jsx)(n.code,{children:"token_type"})," field, which it's fixed to ",(0,a.jsx)(n.code,{children:"Bearer"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Thus you should put the access token in the ",(0,a.jsx)(n.code,{children:"Authorization"})," field of HTTP headers with the Bearer format (",(0,a.jsx)(n.code,{children:"Bearer YOUR_TOKEN"}),") when you're interacting with your API resource server."]})]})}function i(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(r,{...e})}):r(e)}},98746:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>r});var a=t(86070),o=t(15658);const s=t.p+"assets/images/app-id-secret-af29845d7768be05909995293bef45d9.png",r=[];function i(e){const n={a:"a",code:"code",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["M2M app makes a ",(0,a.jsx)(n.code,{children:"POST"})," request to the token endpoint to fetch an access token by adding the following parameters using the ",(0,a.jsx)(n.code,{children:"application/x-www-form-urlencoded"})," format in the HTTP request entity-body:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"grant_type"}),": Must be set to ",(0,a.jsx)(n.code,{children:"client_credentials"})]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"resource"}),": The resource you want to access"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"scope"}),": The scope of the access request"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"And you also need to include your M2M app's credentials in the request header for the token endpoint to authenticate your M2M app."}),"\n",(0,a.jsxs)(n.p,{children:["This is achieved by including the app's credentials in the ",(0,a.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization#basic_authentication",children:"Basic authentication"})," form in the request ",(0,a.jsx)(n.code,{children:"Authorization"})," header, where username is the App ID, and password is the App Secret."]}),"\n",(0,a.jsx)(n.p,{children:"You can find the App ID and App Secret from your M2M app's details page:"}),"\n",(0,a.jsx)("img",{alt:"App ID and App Secret",src:s,width:"600px"})]})}function c(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(i,{...e})}):i(e)}},70124:(e,n,t)=>{t.d(n,{Ay:()=>d,RM:()=>c});var a=t(86070),o=t(15658),s=t(78551),r=t(77501);const i=t.p+"assets/images/logto-management-api-4994334ef32791d9ebc6c9aa298c9ecd.png",c=[];function l(e){const n={admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["Logto provides a built-in \u201cLogto Management API\u201d resource, it\u2019s a readonly resource with the ",(0,a.jsx)(n.code,{children:"all"})," permission to access Logto Management API, you can see it from your API resource list.\nThe resource API indicator is in the pattern of ",(0,a.jsx)(n.code,{children:"https://{your-tenant-id}.logto.app/api"})," , and this will be your resource value used in the access token request body."]}),"\n",(0,a.jsx)("img",{alt:"Logto Management API details",src:i,width:"600px"}),"\n",(0,a.jsxs)(n.p,{children:["Before accessing Logto Management API, make sure your M2M app has been assigned with M2M roles that include the ",(0,a.jsx)(n.code,{children:"all"})," permission from this built-in \u201cLogto Management API\u201d resource."]}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsx)(n.p,{children:"Logto also provides a pre-configured \u201cLogto Management API access\u201d M2M role for new created tenants, which the Logto Management API resource\u2019s all permission has already assigned to. You can use it directly without manually setting permissions. This pre-configured role can also be edited and deleted as needed."})}),"\n",(0,a.jsx)(n.p,{children:"Now, compose all we have and send the request:"}),"\n",(0,a.jsxs)(r.A,{children:[(0,a.jsx)(s.A,{value:"Node.js",label:"Node.js",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"const logtoEndpoint = 'https://your.logto.endpoint'; // Replace with your Logto endpoint\nconst tokenEndpoint = `${logtoEndpoint}/oidc/token`;\nconst applicationId = 'your-application-id';\nconst applicationSecret = 'your-application-secret';\nconst tenantId = 'your-tenant-id';\n\nconst fetchAccessToken = async () => {\n  return await fetch(tokenEndpoint, {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/x-www-form-urlencoded',\n      Authorization: `Basic ${Buffer.from(`${applicationId}:${applicationSecret}`).toString(\n        'base64'\n      )}`,\n    },\n    body: new URLSearchParams({\n      grant_type: 'client_credentials',\n      resource: `https://${tenantId}.logto.app/api`,\n      scope: 'all',\n    }).toString(),\n  });\n};\n"})})}),(0,a.jsxs)(s.A,{value:"cURL",label:"cURL",children:[(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"curl --location \\\n  --request POST 'https://your.logto.endpoint' \\\n  --header 'Authorization: Basic ${your_auth_string}' \\\n  --header 'Content-Type: application/x-www-form-urlencoded' \\\n  --data-urlencode 'grant_type=client_credentials' \\\n  --data-urlencode 'resource=https://${tenantId}.logto.app/api' \\\n  --data-urlencode 'scope=all'\n"})}),(0,a.jsx)(n.p,{children:"Remember to replace the actual values with your own."})]})]}),"\n",(0,a.jsx)(n.admonition,{type:"caution",children:(0,a.jsxs)(n.p,{children:["For Logto Cloud users: when you\u2019re interacting with Logto Management API, you can not use custom domain, use the default Logto endpoint ",(0,a.jsx)(n.code,{children:"https://{your_tenant_id}.logto.app/oidc/token"})," to grant access tokens."]})})]})}function d(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},81948:(e,n,t)=>{t.d(n,{Ay:()=>i,RM:()=>s});var a=t(86070),o=t(15658);const s=[];function r(e){const n={admonition:"admonition",code:"code",p:"p",...(0,o.R)(),...e.components};return(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["Logto does not currently support the M2M app to represent a user. The ",(0,a.jsx)(n.code,{children:"sub"})," in the access token payload will be the App ID."]})})}function i(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(r,{...e})}):r(e)}},89931:(e,n,t)=>{t.d(n,{Ay:()=>l,RM:()=>i});var a=t(86070),o=t(15658);const s=t.p+"assets/images/assign-m2m-roles-modal-f4f833eaf1c4b2c59509c918d3985eee.png",r=t.p+"assets/images/assign-m2m-roles-page-6084df6c23aec9c3f331738031f197b2.png",i=[];function c(e){const n={p:"p",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"During the M2M app creation process, you\u2019ll be directed to a page where you can assign M2M roles to your applications:"}),"\n",(0,a.jsx)("img",{alt:"Assign M2M roles modal",src:s,width:"600px"}),"\n",(0,a.jsx)(n.p,{children:"Or you can also assign these roles on the M2M app detail page when you already have an M2M app created:"}),"\n",(0,a.jsx)("img",{alt:"Assign M2M roles page",src:r,width:"600px"})]})}function l(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},78551:(e,n,t)=>{t.d(n,{A:()=>r});t(30758);var a=t(13526);const o={tabItem:"tabItem_PGP0"};var s=t(86070);function r(e){let{children:n,hidden:t,className:r}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.A)(o.tabItem,r),hidden:t,children:n})}},77501:(e,n,t)=>{t.d(n,{A:()=>w});var a=t(30758),o=t(13526),s=t(65052),r=t(25557),i=t(77469),c=t(50873),l=t(62230),d=t(60196);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:o}}=e;return{value:n,label:t,attributes:a,default:o}}))}(t);return function(e){const n=(0,l.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const o=(0,r.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c.aZ)(s),(0,a.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(o.location.search);n.set(s,e),o.replace({...o.location,search:n.toString()})}),[s,o])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:o}=e,s=h(e),[r,c]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:s}))),[l,u]=g({queryString:t,groupId:o}),[m,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,s]=(0,d.Dv)(t);return[o,(0,a.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:o}),x=(()=>{const e=l??m;return p({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{x&&c(x)}),[x]);return{selectedValue:r,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),f(e)}),[u,f,s]),tabValues:s}}var f=t(13887);const x={tabList:"tabList_CGfx",tabItem:"tabItem_JX1E"};var j=t(86070);function b(e){let{className:n,block:t,selectedValue:a,selectValue:r,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,s.a_)(),d=e=>{const n=e.currentTarget,t=c.indexOf(n),o=i[t].value;o!==a&&(l(n),r(o))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>c.push(e),onKeyDown:u,onClick:d,...s,className:(0,o.A)("tabs__item",x.tabItem,s?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function y(e){let{lazy:n,children:t,selectedValue:s}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===s));return e?(0,a.cloneElement)(e,{className:(0,o.A)("margin-top--md",e.props.className)}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function v(e){const n=m(e);return(0,j.jsxs)("div",{className:(0,o.A)("tabs-container",x.tabList),children:[(0,j.jsx)(b,{...n,...e}),(0,j.jsx)(y,{...n,...e})]})}function w(e){const n=(0,f.A)();return(0,j.jsx)(v,{...e,children:u(e.children)},String(n))}},15658:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>i});var a=t(30758);const o={},s=a.createContext(o);function r(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);