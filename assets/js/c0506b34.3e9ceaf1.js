"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[97744],{60733:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>h,contentTitle:()=>u,default:()=>g,frontMatter:()=>d,metadata:()=>t,toc:()=>m});const t=JSON.parse('{"id":"docs/references/using-cli/manage-connectors","title":"Manage connectors","description":"Note","source":"@site/docs/docs/references/using-cli/manage-connectors.mdx","sourceDirName":"docs/references/using-cli","slug":"/docs/references/using-cli/manage-connectors","permalink":"/docs/references/using-cli/manage-connectors","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/docs/docs/references/using-cli/manage-connectors.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"docsSidebar","previous":{"title":"Install Logto","permalink":"/docs/references/using-cli/install-logto"},"next":{"title":"Database alteration","permalink":"/docs/references/using-cli/database-alteration"}}');var c=o(86070),r=o(15658),a=o(10763),s=o(33670),l=o(77025),i=o(76946);const d={sidebar_position:2},u="Manage connectors",h={},m=[{value:"List existing connectors",id:"list-existing-connectors",level:2},{value:"Add connectors",id:"add-connectors",level:2},{value:"Official connectors",id:"official-connectors",level:3},{value:"Third-party connectors",id:"third-party-connectors",level:3},{value:"Link local connectors",id:"link-local-connectors",level:3},{value:"Remove connectors",id:"remove-connectors",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.header,{children:(0,c.jsx)(n.h1,{id:"manage-connectors",children:"Manage connectors"})}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"Note"})}),"\n",(0,c.jsxs)(n.p,{children:["For each command, you can append ",(0,c.jsx)(n.code,{children:"--path /your/path/to/logto"})," (alias ",(0,c.jsx)(n.code,{children:"-p"}),") to specify the Logto instance path."]}),"\n",(0,c.jsx)(a.A,{cloud:!0,oss:{major:1,minor:2}}),"\n",(0,c.jsxs)(n.p,{children:["If the working directory at the root of a Logto project, you can skip using the ",(0,c.jsx)(n.code,{children:"--path"})," option as the CLI will automatically detect it."]}),"\n",(0,c.jsx)(n.h2,{id:"list-existing-connectors",children:"List existing connectors"}),"\n",(0,c.jsx)(n.p,{children:"Use the command below to list existing connectors that have been added to your Logto instance:"}),"\n",(0,c.jsxs)(i.A,{groupId:"cmd",children:[(0,c.jsx)(l.A,{value:"cli",label:"CLI",children:(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"logto connector list\n"})})}),(0,c.jsx)(l.A,{value:"local",label:"Local",children:(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"npm run cli connector list\n"})})}),(0,c.jsx)(l.A,{value:"npx",label:"npx",children:(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"npx @logto/cli connector list\n"})})})]}),"\n",(0,c.jsx)(n.p,{children:"A sample output:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"OFFICIAL\n  @logto/connector-alipay-native\n  @logto/connector-aliyun-dm\n  @logto/connector-aliyun-sms\n  @logto/connector-apple\n  @logto/connector-azuread\n\n3RD-PARTY\n  connector-some-third-party\n"})}),"\n",(0,c.jsx)(n.h2,{id:"add-connectors",children:"Add connectors"}),"\n",(0,c.jsx)(n.h3,{id:"official-connectors",children:"Official connectors"}),"\n",(0,c.jsxs)(n.p,{children:["All official connectors are listed in ",(0,c.jsx)(n.a,{href:"https://github.com/logto-io/logto/tree/master/packages/connectors",children:"@logto/connectors"}),", except those names that start with ",(0,c.jsx)(n.code,{children:"connector-mock-"})," for testing purposes."]}),"\n",(0,c.jsx)(s.A,{type:"tip",icon:"\ud83e\udd20",title:"Call for contributors!",children:(0,c.jsxs)(n.p,{children:["Every connector is a ",(0,c.jsx)(n.a,{href:"https://github.com/logto-io/logto/issues/1861",children:"Tier 1 Bounty Hunter issue"})," by default. Feel free to comment on or create the related GitHub issue for acknowledging a connector if you are interested."]})}),"\n",(0,c.jsx)(n.p,{children:"If you are using the official Logto release (Docker image, Docker Compose, download from GitHub release page, or init via CLI), there's no need to manually add official connectors."}),"\n",(0,c.jsxs)(i.A,{groupId:"cmd",children:[(0,c.jsx)(l.A,{value:"cli",label:"CLI",children:(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"logto connector add --official\n"})})}),(0,c.jsx)(l.A,{value:"local",label:"Local",children:(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"npm run cli connector add --official\n"})})}),(0,c.jsx)(l.A,{value:"npx",label:"npx",children:(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"npx @logto/cli connector add --official\n"})})})]}),"\n",(0,c.jsx)(n.h3,{id:"third-party-connectors",children:"Third-party connectors"}),"\n",(0,c.jsxs)(n.p,{children:["Third-party connectors are those made for Logto but NOT in ",(0,c.jsx)(n.a,{href:"https://github.com/logto-io/logto/tree/master/packages/connectors",children:"@logto/connectors"}),"."]}),"\n",(0,c.jsxs)(n.p,{children:["The connector to add should be a valid NPM package, and the package name must start with ",(0,c.jsx)(n.code,{children:"connector-"})," or ",(0,c.jsx)(n.code,{children:"@some-org/connector-"}),". E.g.:"]}),"\n",(0,c.jsxs)(i.A,{groupId:"cmd",children:[(0,c.jsx)(l.A,{value:"cli",label:"CLI",children:(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"logto connector add service-a connector-service-b @org/service-c\n# is equal to\nlogto connector add connector-service-a connector-service-b @org/connector-service-c\n"})})}),(0,c.jsx)(l.A,{value:"local",label:"Local",children:(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"npm run cli connector add service-a connector-service-b @org/service-c\n# is equal to\nnpm run cli connector add connector-service-a connector-service-b @org/connector-service-c\n"})})}),(0,c.jsx)(l.A,{value:"npx",label:"npx",children:(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"npx @logto/cli connector add service-a connector-service-b @org/service-c\n# is equal to\nnpx @logto/cli connector add connector-service-a connector-service-b @org/connector-service-c\n"})})})]}),"\n",(0,c.jsx)(n.admonition,{type:"danger",children:(0,c.jsx)(n.p,{children:"Connectors are executable code! Inspect and review the COMPILED CODE (the content download from NPM) very, very carefully to avoid potential security issues if you are trying to use a third-party connector."})}),"\n",(0,c.jsx)(n.admonition,{title:"Note",type:"info",children:(0,c.jsx)(n.p,{children:"Remember to restart your Logto instance to get the changes reflected."})}),"\n",(0,c.jsx)(n.h3,{id:"link-local-connectors",children:"Link local connectors"}),"\n",(0,c.jsx)(a.A,{cloud:!0,oss:{major:1,minor:2}}),"\n",(0,c.jsxs)(n.p,{children:["Logto also comes with a set of prebuilt connectors in the ",(0,c.jsx)(n.code,{children:"<logto-root>/pacakges/connectors"})," of your Logto instance directory. They are linked to the core service by default, which you can manually link again for updates (e.g. add a new local connector)."]}),"\n",(0,c.jsxs)(i.A,{groupId:"cmd",children:[(0,c.jsx)(l.A,{value:"cli",label:"CLI",children:(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"logto connector link\n"})})}),(0,c.jsx)(l.A,{value:"local",label:"Local",children:(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"npm run cli connector link\n"})})}),(0,c.jsx)(l.A,{value:"npx",label:"npx",children:(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"npx @logto/cli connector link\n"})})})]}),"\n",(0,c.jsxs)(n.p,{children:["This command will create symbolic links of every connector in ",(0,c.jsx)(n.code,{children:"<logto-root>/packages/connectors"})," to ",(0,c.jsx)(n.code,{children:"<logto-root>/packages/core/connectors"}),". If a connector with the same name already exists in ",(0,c.jsx)(n.code,{children:"packages/core/connectors"}),", it will be removed first."]}),"\n",(0,c.jsx)(n.h2,{id:"remove-connectors",children:"Remove connectors"}),"\n",(0,c.jsxs)(i.A,{groupId:"cmd",children:[(0,c.jsx)(l.A,{value:"cli",label:"CLI",children:(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"logto connector remove connector-service-a @org/connector-service-b\n"})})}),(0,c.jsx)(l.A,{value:"local",label:"Local",children:(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"npm run cli connector remove connector-service-a @org/connector-service-b\n"})})}),(0,c.jsx)(l.A,{value:"npx",label:"npx",children:(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"npx @logto/cli connector remove connector-service-a @org/connector-service-b\n"})})})]}),"\n",(0,c.jsx)(n.admonition,{title:"Note",type:"info",children:(0,c.jsx)(n.p,{children:"Remember to restart your Logto instance to get the changes reflected."})})]})}function g(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(p,{...e})}):p(e)}},33670:(e,n,o)=>{o.d(n,{A:()=>E});var t=o(30758),c=o(86070);function r(e){const{mdxAdmonitionTitle:n,rest:o}=function(e){const n=t.Children.toArray(e),o=n.find((e=>t.isValidElement(e)&&"mdxAdmonitionTitle"===e.type)),r=n.filter((e=>e!==o)),a=o?.props.children;return{mdxAdmonitionTitle:a,rest:r.length>0?(0,c.jsx)(c.Fragment,{children:r}):null}}(e.children),r=e.title??n;return{...e,...r&&{title:r},children:o}}var a=o(13526),s=o(15252),l=o(55072);const i="admonition_UwGv",d="admonitionHeading_iIKz",u="admonitionIcon_m3Fv",h="admonitionContent_CVAz";function m(e){let{type:n,className:o,children:t}=e;return(0,c.jsx)("div",{className:(0,a.A)(l.G.common.admonition,l.G.common.admonitionType(n),i,o),children:t})}function p(e){let{icon:n,title:o}=e;return(0,c.jsxs)("div",{className:d,children:[(0,c.jsx)("span",{className:u,children:n}),o]})}function g(e){let{children:n}=e;return n?(0,c.jsx)("div",{className:h,children:n}):null}function x(e){const{type:n,icon:o,title:t,children:r,className:a}=e;return(0,c.jsxs)(m,{type:n,className:a,children:[t||o?(0,c.jsx)(p,{title:t,icon:o}):null,(0,c.jsx)(g,{children:r})]})}function f(e){return(0,c.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,c.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})}const v={icon:(0,c.jsx)(f,{}),title:(0,c.jsx)(s.A,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function j(e){return(0,c.jsx)(x,{...v,...e,className:(0,a.A)("alert alert--secondary",e.className),children:e.children})}function b(e){return(0,c.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,c.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})}const y={icon:(0,c.jsx)(b,{}),title:(0,c.jsx)(s.A,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function A(e){return(0,c.jsx)(x,{...y,...e,className:(0,a.A)("alert alert--success",e.className),children:e.children})}function N(e){return(0,c.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,c.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})}const w={icon:(0,c.jsx)(N,{}),title:(0,c.jsx)(s.A,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function k(e){return(0,c.jsx)(x,{...w,...e,className:(0,a.A)("alert alert--info",e.className),children:e.children})}function I(e){return(0,c.jsx)("svg",{viewBox:"0 0 16 16",...e,children:(0,c.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})}const L={icon:(0,c.jsx)(I,{}),title:(0,c.jsx)(s.A,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})};function C(e){return(0,c.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,c.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})}const T={icon:(0,c.jsx)(C,{}),title:(0,c.jsx)(s.A,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};const V={icon:(0,c.jsx)(I,{}),title:(0,c.jsx)(s.A,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};const z={...{note:j,tip:A,info:k,warning:function(e){return(0,c.jsx)(x,{...L,...e,className:(0,a.A)("alert alert--warning",e.className),children:e.children})},danger:function(e){return(0,c.jsx)(x,{...T,...e,className:(0,a.A)("alert alert--danger",e.className),children:e.children})}},...{secondary:e=>(0,c.jsx)(j,{title:"secondary",...e}),important:e=>(0,c.jsx)(k,{title:"important",...e}),success:e=>(0,c.jsx)(A,{title:"success",...e}),caution:function(e){return(0,c.jsx)(x,{...V,...e,className:(0,a.A)("alert alert--warning",e.className),children:e.children})}}};function E(e){const n=r(e),o=(t=n.type,z[t]||(console.warn(`No admonition component found for admonition type "${t}". Using Info as fallback.`),z.info));var t;return(0,c.jsx)(o,{...n})}},77025:(e,n,o)=>{o.d(n,{A:()=>a});o(30758);var t=o(13526);const c={tabItem:"tabItem_LtUi"};var r=o(86070);function a(e){let{children:n,hidden:o,className:a}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,t.A)(c.tabItem,a),hidden:o,children:n})}},76946:(e,n,o)=>{o.d(n,{A:()=>A});var t=o(30758),c=o(13526),r=o(34303),a=o(25557),s=o(93891),l=o(40480),i=o(55057),d=o(62163);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:o}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:o,attributes:t,default:c}}=e;return{value:n,label:o,attributes:t,default:c}}))}(o);return function(e){const n=(0,i.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,o])}function m(e){let{value:n,tabValues:o}=e;return o.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:o}=e;const c=(0,a.W6)(),r=function(e){let{queryString:n=!1,groupId:o}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!o)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return o??null}({queryString:n,groupId:o});return[(0,l.aZ)(r),(0,t.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(c.location.search);n.set(r,e),c.replace({...c.location,search:n.toString()})}),[r,c])]}function g(e){const{defaultValue:n,queryString:o=!1,groupId:c}=e,r=h(e),[a,l]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:o}=e;if(0===o.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:o}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${o.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=o.find((e=>e.default))??o[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:r}))),[i,u]=p({queryString:o,groupId:c}),[g,x]=function(e){let{groupId:n}=e;const o=function(e){return e?`docusaurus.tab.${e}`:null}(n),[c,r]=(0,d.Dv)(o);return[c,(0,t.useCallback)((e=>{o&&r.set(e)}),[o,r])]}({groupId:c}),f=(()=>{const e=i??g;return m({value:e,tabValues:r})?e:null})();(0,s.A)((()=>{f&&l(f)}),[f]);return{selectedValue:a,selectValue:(0,t.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),x(e)}),[u,x,r]),tabValues:r}}var x=o(36865);const f={tabList:"tabList_rP2z",tabItem:"tabItem_nid_"};var v=o(86070);function j(e){let{className:n,block:o,selectedValue:t,selectValue:a,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:i}=(0,r.a_)(),d=e=>{const n=e.currentTarget,o=l.indexOf(n),c=s[o].value;c!==t&&(i(n),a(c))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const o=l.indexOf(e.currentTarget)+1;n=l[o]??l[0];break}case"ArrowLeft":{const o=l.indexOf(e.currentTarget)-1;n=l[o]??l[l.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.A)("tabs",{"tabs--block":o},n),children:s.map((e=>{let{value:n,label:o,attributes:r}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>l.push(e),onKeyDown:u,onClick:d,...r,className:(0,c.A)("tabs__item",f.tabItem,r?.className,{"tabs__item--active":t===n}),children:o??n},n)}))})}function b(e){let{lazy:n,children:o,selectedValue:r}=e;const a=(Array.isArray(o)?o:[o]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===r));return e?(0,t.cloneElement)(e,{className:(0,c.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function y(e){const n=g(e);return(0,v.jsxs)("div",{className:(0,c.A)("tabs-container",f.tabList),children:[(0,v.jsx)(j,{...n,...e}),(0,v.jsx)(b,{...n,...e})]})}function A(e){const n=(0,x.A)();return(0,v.jsx)(y,{...e,children:u(e.children)},String(n))}},10763:(e,n,o)=>{o.d(n,{A:()=>a});const t="availability_kRMk";var c=o(86070);const r=e=>"comingSoon"===e?"coming soon-blue":"boolean"==typeof e?e?"\u2713 available-4EA254":"not applicable-78767F":`since v${e.major}.${e.minor}-4EA254`,a=e=>{let{cloud:n,oss:o}=e;return(0,c.jsxs)("div",{className:t,children:[(0,c.jsx)("img",{alt:"Cloud availability",src:`https://img.shields.io/badge/Cloud-${r(n)}`}),(0,c.jsx)("img",{alt:"OSS availability",src:`https://img.shields.io/badge/OSS-${r(o)}`})]})}},15658:(e,n,o)=>{o.d(n,{R:()=>a,x:()=>s});var t=o(30758);const c={},r=t.createContext(c);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);