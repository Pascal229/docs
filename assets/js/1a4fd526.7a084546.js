"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[87230],{95178:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"logto-cloud/custom-domain","title":"Custom domain","description":"Your Logto tenant comes with a default free domain {}.app.logto. However, you can elevate your user experience and brand recognition by using a custom domain, like auth.example.com.","source":"@site/docs/logto-cloud/custom-domain.mdx","sourceDirName":"logto-cloud","slug":"/logto-cloud/custom-domain","permalink":"/logto-cloud/custom-domain","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/docs/logto-cloud/custom-domain.mdx","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"id":"custom-domain","title":"Custom domain","sidebar_position":4},"sidebar":"docsSidebar","previous":{"title":"Tenant member management","permalink":"/logto-cloud/tenant-member-management"},"next":{"title":"Billing and pricing","permalink":"/logto-cloud/billing-and-pricing"}}');var i=n(86070),s=n(15658);const a={id:"custom-domain",title:"Custom domain",sidebar_position:4},r="Custom domain",d={},c=[{value:"Configure custom domain in Console",id:"configure-custom-domain-in-console",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Use custom domain",id:"use-custom-domain",level:2},{value:"Updating the SDK endpoint for applications",id:"updating-the-sdk-endpoint-for-applications",level:3},{value:"Modifying auth endpoints for other applications",id:"modifying-auth-endpoints-for-other-applications",level:3},{value:"Updating the social connector&#39;s callback URI",id:"updating-the-social-connectors-callback-uri",level:3}];function l(e){const o={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{CloudLink:t,Details:a}=o;return t||h("CloudLink",!0),a||h("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.header,{children:(0,i.jsx)(o.h1,{id:"custom-domain",children:"Custom domain"})}),"\n",(0,i.jsxs)(o.p,{children:["Your Logto tenant comes with a default free domain ",(0,i.jsx)(o.code,{children:"{{tenant-id}}.app.logto"}),". However, you can elevate your user experience and brand recognition by using a custom domain, like ",(0,i.jsx)(o.code,{children:"auth.example.com"}),"."]}),"\n",(0,i.jsx)(o.p,{children:"Your custom domain is used for several functions:"}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsx)(o.li,{children:"Sign-in and registration page URLs"}),"\n",(0,i.jsx)(o.li,{children:"Passkey linking URLs (Changing the domain after users have linked Passkeys may block their authentication)."}),"\n",(0,i.jsx)(o.li,{children:"Callback URIs for social connectors or enterprise SSO connectors."}),"\n",(0,i.jsx)(o.li,{children:"SDK endpoint for integrating Logto with your application."}),"\n"]}),"\n",(0,i.jsx)(o.admonition,{type:"note",children:(0,i.jsxs)(o.p,{children:["Changing the domain after publishing your service may cause troubles because your application code and integrations might still reference the old domain. To ensure a smooth transition, ",(0,i.jsx)(o.strong,{children:"set up your custom domain at the beginning"})," during a Production tenant creation."]})}),"\n",(0,i.jsx)(o.h2,{id:"configure-custom-domain-in-console",children:"Configure custom domain in Console"}),"\n",(0,i.jsx)(o.p,{children:"To add a new custom domain in the Logto Console, follow these steps:"}),"\n",(0,i.jsxs)(o.ol,{children:["\n",(0,i.jsxs)(o.li,{children:["\n",(0,i.jsxs)(o.p,{children:["Navigate to ",(0,i.jsx)(t,{to:"/tenant-settings/domains",children:"Console > Settings > Domains"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(o.li,{children:["\n",(0,i.jsx)(o.p,{children:'In "Custom Domain" section, enter your domain name and click "add domain".'}),"\n",(0,i.jsx)(o.p,{children:(0,i.jsx)(o.img,{alt:"Add domain",src:n(64943).A+"",width:"2880",height:"1026"})}),"\n"]}),"\n",(0,i.jsxs)(o.li,{children:["\n",(0,i.jsx)(o.p,{children:"Copy the CNAME value in the table, and go to your domain's DNS provider to add record."}),"\n",(0,i.jsx)(o.p,{children:(0,i.jsx)(o.img,{alt:"Custom domain processing",src:n(19179).A+"",width:"2880",height:"1212"})}),"\n"]}),"\n",(0,i.jsxs)(o.li,{children:["\n",(0,i.jsx)(o.p,{children:"Wait for the verification and SSL process."}),"\n",(0,i.jsxs)(o.ol,{children:["\n",(0,i.jsx)(o.li,{children:"We will auto-verify your records every 10 seconds until the custom domain is added. Just ensure that the entered domain name or DNS Records are accurate."}),"\n",(0,i.jsx)(o.li,{children:"Verification typically takes a few minutes but can take up to 24 hours, depending on the DNS provider. Feel free to navigate away during the process."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(o.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,i.jsxs)(a,{children:[(0,i.jsx)("summary",{children:"SSL certificate issues"}),(0,i.jsx)(o.p,{children:"If you encounter SSL certificate issues when setting up your custom domain, it may be related to CAA records in your DNS configuration. CAA records specify which Certificate Authorities (CAs) are authorized to issue certificates for your domain."}),(0,i.jsxs)(o.p,{children:["To troubleshoot and resolve SSL certificate issues related to CAA records, refer to ",(0,i.jsx)(o.a,{href:"https://developers.cloudflare.com/ssl/edge-certificates/caa-records/",children:"Cloudflare's documentation"})," on CAA Records."]})]}),"\n",(0,i.jsxs)(a,{children:[(0,i.jsx)("summary",{children:'"The hostname is associated with a held zone" Error'}),(0,i.jsxs)(o.p,{children:['If you encounter the error message "The hostname is associated with a held zone, please contact the owner to have the hold removed" when adding a custom domain, it means that the domain is already in Cloudflare zone, and it is set to "Zone Hold" status. See this ',(0,i.jsx)(o.a,{href:"https://developers.cloudflare.com/fundamentals/setup/account/account-security/zone-holds/",children:"Cloudflare documentation"})," for more information."]}),(0,i.jsx)(o.p,{children:"To resolve this issue, you'll need to release the zone hold. Follow the above link for instructions on how to release the zone hold in Cloudflare."})]}),"\n",(0,i.jsx)(o.h2,{id:"use-custom-domain",children:"Use custom domain"}),"\n",(0,i.jsx)(o.p,{children:"Once you've configured your settings, both your custom domain name and the default Logto domain name will be available for your tenant. However, certain configurations are required to activate your custom domain name."}),"\n",(0,i.jsxs)(o.admonition,{type:"note",children:[(0,i.jsxs)(o.p,{children:["In this article, we assume that your custom domain is ",(0,i.jsx)(o.code,{children:"auth.example.com"}),"."]}),(0,i.jsx)(o.p,{children:(0,i.jsx)(o.img,{alt:"Custom domain added",src:n(12538).A+"",width:"2880",height:"1178"})})]}),"\n",(0,i.jsx)(o.h3,{id:"updating-the-sdk-endpoint-for-applications",children:"Updating the SDK endpoint for applications"}),"\n",(0,i.jsx)(o.p,{children:"Alter your initialization code for the Logto SDK by modifying the domain name of the endpoint."}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-typescript",children:"const client = new LogtoClient({\n  ...,// other options\n  endpoint: 'https://auth.example.com',\n});\n"})}),"\n",(0,i.jsx)(o.h3,{id:"modifying-auth-endpoints-for-other-applications",children:"Modifying auth endpoints for other applications"}),"\n",(0,i.jsx)(o.p,{children:"If you have applications that aren't using the Logto SDK, it's necessary to update their auth endpoints."}),"\n",(0,i.jsx)(o.p,{children:"You can locate the auth endpoints at the well-known URL:"}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{children:"https://auth.example.com/oidc/.well-known/openid-configuration\n"})}),"\n",(0,i.jsx)(o.h3,{id:"updating-the-social-connectors-callback-uri",children:"Updating the social connector's callback URI"}),"\n",(0,i.jsx)(o.p,{children:"The social connector's callback URI will be updated automatically if your users are using the custom domain. You need to go to the social provider's developer console to update the callback URI."}),"\n",(0,i.jsx)(o.p,{children:"When your users are using the custom domain, the social connector's callback URI will be using the new domain. Therefore, you need to navigate to the social provider's developer console to manually update the callback URI."})]})}function u(e={}){const{wrapper:o}={...(0,s.R)(),...e.components};return o?(0,i.jsx)(o,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}function h(e,o){throw new Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},12538:(e,o,n)=>{n.d(o,{A:()=>t});const t=n.p+"assets/images/custom-domain-added-6493bb65f39cff5d6d8c7a5bdccf413b.jpeg"},19179:(e,o,n)=>{n.d(o,{A:()=>t});const t=n.p+"assets/images/custom-domain-processing-28ff46a3d867e7c069203c6f02cbdb13.jpeg"},64943:(e,o,n)=>{n.d(o,{A:()=>t});const t=n.p+"assets/images/custom-domain-section-755de162507f83d2a1d99fe8e2db0ebe.jpeg"},15658:(e,o,n)=>{n.d(o,{R:()=>a,x:()=>r});var t=n(30758);const i={},s=t.createContext(i);function a(e){const o=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function r(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(s.Provider,{value:o},e.children)}}}]);