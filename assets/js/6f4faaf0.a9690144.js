"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[71733],{18100:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>c,contentTitle:()=>r,default:()=>m,frontMatter:()=>a,metadata:()=>d,toc:()=>l});var i=n(86070),t=n(25710),s=n(6251);const a={sidebar_position:9},r="\ud83c\udf0d Custom domain",d={id:"docs/recipes/custom-domain/README",title:"\ud83c\udf0d Custom domain",description:"You can use your own domain name for your Logto tenant. This feature lets you present a consistent brand by having your own domain name on the sign-in and registration pages, as well as via the Management API.",source:"@site/docs/docs/recipes/custom-domain/README.mdx",sourceDirName:"docs/recipes/custom-domain",slug:"/docs/recipes/custom-domain/",permalink:"/docs/recipes/custom-domain/",draft:!1,unlisted:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/docs/recipes/custom-domain/README.mdx",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"docsSidebar",previous:{title:"Protect your API Resource with RBAC",permalink:"/docs/recipes/rbac/protect-resource"},next:{title:"Configure custom domain in Console",permalink:"/docs/recipes/custom-domain/configure-custom-domain-in-console"}},c={},l=[{value:"Advantages of Using a Custom Domain",id:"advantages-of-using-a-custom-domain",level:2},{value:"How Does it Work?",id:"how-does-it-work",level:2},{value:"Frequently Asked Questions",id:"frequently-asked-questions",level:2},{value:"Is it possible to use a bare domain?",id:"is-it-possible-to-use-a-bare-domain",level:3},{value:"Can I use self-managed SSL certificates?",id:"can-i-use-self-managed-ssl-certificates",level:3},{value:"Will users need to re-authenticate when switching to a custom domain?",id:"will-users-need-to-re-authenticate-when-switching-to-a-custom-domain",level:3}];function u(e){const o={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.h1,{id:"-custom-domain",children:"\ud83c\udf0d Custom domain"}),"\n",(0,i.jsx)(s.A,{cloud:!0,oss:!1}),"\n",(0,i.jsx)(o.p,{children:"You can use your own domain name for your Logto tenant. This feature lets you present a consistent brand by having your own domain name on the sign-in and registration pages, as well as via the Management API."}),"\n",(0,i.jsx)(o.h2,{id:"advantages-of-using-a-custom-domain",children:"Advantages of Using a Custom Domain"}),"\n",(0,i.jsx)(o.p,{children:"By using your own domain name for your Logto tenant, you'll benefit from several advantages:"}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsx)(o.li,{children:"Branding and Trust: Your users will see your domain name in the browser's address bar when they sign in to your application. By avoiding redirects to a third-party domain site, your users are provided with a sense of security and trust."}),"\n",(0,i.jsx)(o.li,{children:"Versatility: Having a sub-domain can be beneficial if you wish to use your own wildcard SSL certificate, or cross-domain cookies."}),"\n"]}),"\n",(0,i.jsx)(o.h2,{id:"how-does-it-work",children:"How Does it Work?"}),"\n",(0,i.jsxs)(o.p,{children:["Logto uses a ",(0,i.jsx)(o.a,{href:"https://en.wikipedia.org/wiki/CNAME_record",children:"CNAME record"})," to map your domain name to the Logto domain name, and will subsequently generate an SSL certificate for your domain name automatically."]}),"\n",(0,i.jsx)(o.p,{children:"The custom domain will exist in conjunction with the default Logto domain name. This gives you the flexibility to use either domain name when initiating the authentication process."}),"\n",(0,i.jsx)(o.h2,{id:"frequently-asked-questions",children:"Frequently Asked Questions"}),"\n",(0,i.jsx)(o.h3,{id:"is-it-possible-to-use-a-bare-domain",children:"Is it possible to use a bare domain?"}),"\n",(0,i.jsxs)(o.p,{children:['Bare domains, also known as "naked domains", "APEX domains" or "root domains", are domains without a prefix, such as ',(0,i.jsx)(o.code,{children:"example.com"}),". Unfortunately, Logto does not support the use of bare domains for now. You are required to use a sub-domain, like ",(0,i.jsx)(o.code,{children:"auth.example.com"}),"."]}),"\n",(0,i.jsx)(o.h3,{id:"can-i-use-self-managed-ssl-certificates",children:"Can I use self-managed SSL certificates?"}),"\n",(0,i.jsx)(o.p,{children:"Logto does not support self-managed SSL certificates for now. An SSL certificate for your domain name will be generated by Logto automatically."}),"\n",(0,i.jsx)(o.h3,{id:"will-users-need-to-re-authenticate-when-switching-to-a-custom-domain",children:"Will users need to re-authenticate when switching to a custom domain?"}),"\n",(0,i.jsx)(o.p,{children:"Users will be able to maintain their authenticated state even when switching to a custom domain, and the custom domain will be visible during the next authentication process."})]})}function m(e={}){const{wrapper:o}={...(0,t.R)(),...e.components};return o?(0,i.jsx)(o,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},6251:(e,o,n)=>{n.d(o,{A:()=>a});const i="availability_kRMk";var t=n(86070);const s=e=>"comingSoon"===e?"coming soon-blue":"boolean"==typeof e?e?"\u2713 available-4EA254":"not applicable-78767F":`since v${e.major}.${e.minor}-4EA254`,a=e=>{let{cloud:o,oss:n}=e;return(0,t.jsxs)("div",{className:i,children:[(0,t.jsx)("img",{alt:"Cloud availability",src:`https://img.shields.io/badge/Cloud-${s(o)}`}),(0,t.jsx)("img",{alt:"OSS availability",src:`https://img.shields.io/badge/OSS-${s(n)}`})]})}},25710:(e,o,n)=>{n.d(o,{R:()=>a,x:()=>r});var i=n(30758);const t={},s=i.createContext(t);function a(e){const o=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function r(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(s.Provider,{value:o},e.children)}}}]);