"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[37214],{55162:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>u,toc:()=>h});var a=n(11527),s=n(17279),r=n(78663),o=n(18791),i=n(39048);const l={},c="Rotate signing keys",u={id:"docs/references/using-cli/rotate-signing-keys",title:"Rotate signing keys",description:"Logto OIDC signing keys, as known as \u201cOIDC private keys\u201d and \u201cOIDC cookie keys\u201d, are the signing keys used to encrypt JWT tokens (access tokens and ID tokens) and browser cookies in Logto sign-in sessions.",source:"@site/docs/docs/references/using-cli/rotate-signing-keys.mdx",sourceDirName:"docs/references/using-cli",slug:"/docs/references/using-cli/rotate-signing-keys",permalink:"/docs/references/using-cli/rotate-signing-keys",draft:!1,unlisted:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/docs/references/using-cli/rotate-signing-keys.mdx",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Migrate configs from env",permalink:"/docs/references/using-cli/migrate-from-env"},next:{title:"\ud83d\udcf1 Applications",permalink:"/docs/references/applications/"}},d={},h=[{value:"Rotate OIDC private signing keys",id:"rotate-oidc-private-signing-keys",level:2},{value:"Rotate OIDC cookie keys",id:"rotate-oidc-cookie-keys",level:2},{value:"What about the previous keys?",id:"what-about-the-previous-keys",level:2}];function g(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"rotate-signing-keys",children:"Rotate signing keys"}),"\n",(0,a.jsx)(r.Z,{cloud:!0,oss:{major:1,minor:8}}),"\n",(0,a.jsx)(t.p,{children:"Logto OIDC signing keys, as known as \u201cOIDC private keys\u201d and \u201cOIDC cookie keys\u201d, are the signing keys used to encrypt JWT tokens (access tokens and ID tokens) and browser cookies in Logto sign-in sessions."}),"\n",(0,a.jsx)(t.p,{children:"Rotate your signing keys regularly can reduce the risks of potential key compromise. Logto recommends you to rotate your signing keys at least once a year."}),"\n",(0,a.jsx)(t.h2,{id:"rotate-oidc-private-signing-keys",children:"Rotate OIDC private signing keys"}),"\n",(0,a.jsx)(t.p,{children:"Use the CLI command below to generate a new OIDC private signing key. The new key will be automatically utilized after reboot."}),"\n",(0,a.jsx)(t.p,{children:"Available options:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:'--type    (Optional) The signing key algorithm for your JWT tokens.\n          Values are "rsa" or "ec". Defaults to "ec".\n'})}),"\n",(0,a.jsxs)(i.Z,{groupId:"cmd",children:[(0,a.jsx)(o.Z,{value:"cli",label:"CLI",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"logto db config rotate oidc.privateKeys --type rsa\n"})})}),(0,a.jsx)(o.Z,{value:"Local",label:"local",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"npm run cli db config rotate oidc.privateKeys -- --type rsa\n"})})}),(0,a.jsx)(o.Z,{value:"npx",label:"npx",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"npx @logto/cli db config rotate oidc.privateKeys -- --type rsa\n"})})})]}),"\n",(0,a.jsx)(t.h2,{id:"rotate-oidc-cookie-keys",children:"Rotate OIDC cookie keys"}),"\n",(0,a.jsx)(t.p,{children:"Use the CLI command below to generate a new OIDC cookie key. The new key will be automatically utilized after reboot."}),"\n",(0,a.jsxs)(i.Z,{groupId:"cmd",children:[(0,a.jsx)(o.Z,{value:"cli",label:"CLI",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"logto db config rotate oidc.cookieKeys\n"})})}),(0,a.jsx)(o.Z,{value:"Local",label:"local",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"npm run cli db config rotate oidc.cookieKeys\n"})})}),(0,a.jsx)(o.Z,{value:"npx",label:"npx",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"npx @logto/cli db config rotate oidc.cookieKeys\n"})})})]}),"\n",(0,a.jsx)(t.h2,{id:"what-about-the-previous-keys",children:"What about the previous keys?"}),"\n",(0,a.jsx)(t.p,{children:"Logto key rotation commands will not delete your previous signing keys, and they will be kept in the database unless you manually delete them."}),"\n",(0,a.jsx)(t.p,{children:"Also, be cautious when deleting your previous keys, as it may cause unexpected issues. It is recommended to keep both the new key and the previous key for a period of time (e.g. 2 weeks), until you are confident that all your users have migrated to the new key."})]})}function p(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(g,{...e})}):g(e)}},18791:(e,t,n)=>{n.d(t,{Z:()=>o});n(50959);var a=n(5341);const s={tabItem:"tabItem_vv_O"};var r=n(11527);function o(e){let{children:t,hidden:n,className:o}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.Z)(s.tabItem,o),hidden:n,children:t})}},39048:(e,t,n)=>{n.d(t,{Z:()=>j});var a=n(50959),s=n(5341),r=n(90371),o=n(28903),i=n(56330),l=n(81783),c=n(32277),u=n(43332);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:s}}=e;return{value:t,label:n,attributes:a,default:s}}))}(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function g(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const s=(0,o.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(r),(0,a.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(s.location.search);t.set(r,e),s.replace({...s.location,search:t.toString()})}),[r,s])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,r=h(e),[o,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!g({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[c,d]=p({queryString:n,groupId:s}),[b,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,r]=(0,u.Nk)(n);return[s,(0,a.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:s}),y=(()=>{const e=c??b;return g({value:e,tabValues:r})?e:null})();(0,i.Z)((()=>{y&&l(y)}),[y]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!g({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),m(e)}),[d,m,r]),tabValues:r}}var m=n(71195);const y={tabList:"tabList_TFdk",tabItem:"tabItem_m3pr"};var f=n(11527);function k(e){let{className:t,block:n,selectedValue:a,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.o5)(),u=e=>{const t=e.currentTarget,n=l.indexOf(t),s=i[n].value;s!==a&&(c(t),o(s))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:r}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...r,className:(0,s.Z)("tabs__item",y.tabItem,r?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function v(e){let{lazy:t,children:n,selectedValue:s}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===s));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function x(e){const t=b(e);return(0,f.jsxs)("div",{className:(0,s.Z)("tabs-container",y.tabList),children:[(0,f.jsx)(k,{...e,...t}),(0,f.jsx)(v,{...e,...t})]})}function j(e){const t=(0,m.Z)();return(0,f.jsx)(x,{...e,children:d(e.children)},String(t))}},78663:(e,t,n)=>{n.d(t,{Z:()=>o});const a="availability_kRMk";var s=n(11527);const r=e=>"comingSoon"===e?"coming soon-blue":"boolean"==typeof e?e?"\u2713 available-4EA254":"not applicable-78767F":`since v${e.major}.${e.minor}-4EA254`,o=e=>{let{cloud:t,oss:n}=e;return(0,s.jsxs)("div",{className:a,children:[(0,s.jsx)("img",{alt:"Cloud availability",src:`https://img.shields.io/badge/Cloud-${r(t)}`}),(0,s.jsx)("img",{alt:"OSS availability",src:`https://img.shields.io/badge/OSS-${r(n)}`})]})}},17279:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>o});var a=n(50959);const s={},r=a.createContext(s);function o(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);