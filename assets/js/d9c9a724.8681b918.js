"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[38004],{75695:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>u,toc:()=>h});var o=n(86070),r=n(15658),a=n(84271),s=n(11888),i=n(68962);const l={},c="Rotate signing keys",u={id:"docs/references/using-cli/rotate-signing-keys",title:"Rotate signing keys",description:"If you're using Logto Cloud, you can rotate signing keys in the Console UI, please refer to this tutorial.",source:"@site/docs/docs/references/using-cli/rotate-signing-keys.mdx",sourceDirName:"docs/references/using-cli",slug:"/docs/references/using-cli/rotate-signing-keys",permalink:"/docs/references/using-cli/rotate-signing-keys",draft:!1,unlisted:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/docs/references/using-cli/rotate-signing-keys.mdx",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Migrate configs from env",permalink:"/docs/references/using-cli/migrate-from-env"},next:{title:"\ud83d\udcf1 Applications",permalink:"/docs/references/applications/"}},d={},h=[{value:"Rotate OIDC private signing keys",id:"rotate-oidc-private-signing-keys",level:2},{value:"Rotate OIDC cookie keys",id:"rotate-oidc-cookie-keys",level:2},{value:"What about the previous keys?",id:"what-about-the-previous-keys",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Using Logto as OIDC Provider in Cloudflare Zero Trust",id:"using-logto-as-oidc-provider-in-cloudflare-zero-trust",level:3}];function g(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"rotate-signing-keys",children:"Rotate signing keys"})}),"\n",(0,o.jsx)(a.A,{cloud:!0,oss:{major:1,minor:8}}),"\n",(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsxs)(t.p,{children:["If you're using Logto Cloud, you can rotate signing keys in the Console UI, please refer to ",(0,o.jsx)(t.a,{href:"/docs/references/openid-connect/signing-keys-rotation/#rotate-signing-keys-from-console-ui",children:"this tutorial"}),"."]})}),"\n",(0,o.jsx)(t.p,{children:"Logto OIDC signing keys, as known as \u201cOIDC private keys\u201d and \u201cOIDC cookie keys\u201d, are the signing keys used to encrypt JWT tokens (access tokens and ID tokens) and browser cookies in Logto sign-in sessions."}),"\n",(0,o.jsx)(t.p,{children:"Rotate your signing keys regularly can reduce the risks of potential key compromise. Logto recommends you to rotate your signing keys at least once a year."}),"\n",(0,o.jsx)(t.h2,{id:"rotate-oidc-private-signing-keys",children:"Rotate OIDC private signing keys"}),"\n",(0,o.jsx)(t.p,{children:"Use the CLI command below to generate a new OIDC private signing key. The new key will be automatically utilized after reboot."}),"\n",(0,o.jsx)(t.p,{children:"Available options:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:'--type    (Optional) The signing key algorithm for your JWT tokens.\n          Values are "rsa" or "ec". Defaults to "ec".\n'})}),"\n",(0,o.jsxs)(i.A,{groupId:"cmd",children:[(0,o.jsx)(s.A,{value:"cli",label:"CLI",children:(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"logto db config rotate oidc.privateKeys --type rsa\n"})})}),(0,o.jsx)(s.A,{value:"Local",label:"local",children:(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"npm run cli db config rotate oidc.privateKeys -- --type rsa\n"})})}),(0,o.jsx)(s.A,{value:"npx",label:"npx",children:(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"npx @logto/cli db config rotate oidc.privateKeys -- --type rsa\n"})})})]}),"\n",(0,o.jsx)(t.h2,{id:"rotate-oidc-cookie-keys",children:"Rotate OIDC cookie keys"}),"\n",(0,o.jsx)(t.p,{children:"Use the CLI command below to generate a new OIDC cookie key. The new key will be automatically utilized after reboot."}),"\n",(0,o.jsxs)(i.A,{groupId:"cmd",children:[(0,o.jsx)(s.A,{value:"cli",label:"CLI",children:(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"logto db config rotate oidc.cookieKeys\n"})})}),(0,o.jsx)(s.A,{value:"Local",label:"local",children:(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"npm run cli db config rotate oidc.cookieKeys\n"})})}),(0,o.jsx)(s.A,{value:"npx",label:"npx",children:(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"npx @logto/cli db config rotate oidc.cookieKeys\n"})})})]}),"\n",(0,o.jsx)(t.h2,{id:"what-about-the-previous-keys",children:"What about the previous keys?"}),"\n",(0,o.jsx)(t.p,{children:"Logto key rotation commands will not delete your previous signing keys, and they will be kept in the database unless you manually delete them."}),"\n",(0,o.jsx)(t.p,{children:"Also, be cautious when deleting your previous keys, as it may cause unexpected issues. It is recommended to keep both the new key and the previous key for a period of time (e.g. 2 weeks), until you are confident that all your users have migrated to the new key."}),"\n",(0,o.jsx)(t.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,o.jsx)(t.h3,{id:"using-logto-as-oidc-provider-in-cloudflare-zero-trust",children:"Using Logto as OIDC Provider in Cloudflare Zero Trust"}),"\n",(0,o.jsxs)(t.p,{children:["If you intend to use Logto as an OIDC provider with Cloudflare Zero Trust, please note that it does not support OIDC providers using ECDSA algorithms. When rotating OIDC private signing keys, ensure you use the RSA algorithm by specifying ",(0,o.jsx)(t.code,{children:"--type rsa"})," in the rotation command:"]}),"\n",(0,o.jsxs)(i.A,{groupId:"cmd-cloudflare-zero-trust",children:[(0,o.jsx)(s.A,{value:"cli",label:"CLI",children:(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"logto db config rotate oidc.privateKeys --type rsa\n"})})}),(0,o.jsx)(s.A,{value:"Local",label:"local",children:(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"npm run cli db config rotate oidc.privateKeys -- --type rsa\n"})})}),(0,o.jsx)(s.A,{value:"npx",label:"npx",children:(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"npx @logto/cli db config rotate oidc.privateKeys -- --type rsa\n"})})})]})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(g,{...e})}):g(e)}},11888:(e,t,n)=>{n.d(t,{A:()=>s});n(30758);var o=n(13526);const r={tabItem:"tabItem_bozN"};var a=n(86070);function s(e){let{children:t,hidden:n,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,o.A)(r.tabItem,s),hidden:n,children:t})}},68962:(e,t,n)=>{n.d(t,{A:()=>j});var o=n(30758),r=n(13526),a=n(15354),s=n(25557),i=n(60978),l=n(5679),c=n(69332),u=n(58582);function d(e){return o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:o,default:r}}=e;return{value:t,label:n,attributes:o,default:r}}))}(n);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function g(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const r=(0,s.W6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(a),(0,o.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(r.location.search);t.set(a,e),r.replace({...r.location,search:t.toString()})}),[a,r])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,a=h(e),[s,l]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!g({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const o=n.find((e=>e.default))??n[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:t,tabValues:a}))),[c,d]=p({queryString:n,groupId:r}),[b,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,a]=(0,u.Dv)(n);return[r,(0,o.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:r}),f=(()=>{const e=c??b;return g({value:e,tabValues:a})?e:null})();(0,i.A)((()=>{f&&l(f)}),[f]);return{selectedValue:s,selectValue:(0,o.useCallback)((e=>{if(!g({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),m(e)}),[d,m,a]),tabValues:a}}var m=n(77066);const f={tabList:"tabList_jdoc",tabItem:"tabItem_lSGj"};var y=n(86070);function v(e){let{className:t,block:n,selectedValue:o,selectValue:s,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),u=e=>{const t=e.currentTarget,n=l.indexOf(t),r=i[n].value;r!==o&&(c(t),s(r))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...a,className:(0,r.A)("tabs__item",f.tabItem,a?.className,{"tabs__item--active":o===t}),children:n??t},t)}))})}function x(e){let{lazy:t,children:n,selectedValue:a}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,o.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function k(e){const t=b(e);return(0,y.jsxs)("div",{className:(0,r.A)("tabs-container",f.tabList),children:[(0,y.jsx)(v,{...t,...e}),(0,y.jsx)(x,{...t,...e})]})}function j(e){const t=(0,m.A)();return(0,y.jsx)(k,{...e,children:d(e.children)},String(t))}},84271:(e,t,n)=>{n.d(t,{A:()=>s});const o="availability_kRMk";var r=n(86070);const a=e=>"comingSoon"===e?"coming soon-blue":"boolean"==typeof e?e?"\u2713 available-4EA254":"not applicable-78767F":`since v${e.major}.${e.minor}-4EA254`,s=e=>{let{cloud:t,oss:n}=e;return(0,r.jsxs)("div",{className:o,children:[(0,r.jsx)("img",{alt:"Cloud availability",src:`https://img.shields.io/badge/Cloud-${a(t)}`}),(0,r.jsx)("img",{alt:"OSS availability",src:`https://img.shields.io/badge/OSS-${a(n)}`})]})}},15658:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>i});var o=n(30758);const r={},a=o.createContext(r);function s(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);