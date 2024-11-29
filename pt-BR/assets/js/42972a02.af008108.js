"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[21416],{92789:(e,a,o)=>{o.r(a),o.d(a,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"logto-oss/using-cli/rotate-signing-keys","title":"Rotacionar chaves de assinatura (OSS)","description":"Se voc\xea estiver usando Logto Cloud, pode rotacionar chaves de assinatura na interface do Console, por favor, consulte este tutorial.","source":"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/logto-oss/using-cli/rotate-signing-keys.mdx","sourceDirName":"logto-oss/using-cli","slug":"/logto-oss/using-cli/rotate-signing-keys","permalink":"/pt-BR/logto-oss/using-cli/rotate-signing-keys","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/pt-BR/docusaurus-plugin-content-docs/current/logto-oss/using-cli/rotate-signing-keys.mdx","tags":[],"version":"current","frontMatter":{},"sidebar":"docsSidebar","previous":{"title":"Migrar configura\xe7\xf5es do env","permalink":"/pt-BR/logto-oss/using-cli/migrate-from-env"},"next":{"title":"Traduzir CLI","permalink":"/pt-BR/logto-oss/translate-cli"}}');var s=o(86070),n=o(15658),t=o(78551),i=o(77501);const l={},c="Rotacionar chaves de assinatura (OSS)",u={},d=[{value:"Rotacionar chaves de assinatura privadas OIDC",id:"rotacionar-chaves-de-assinatura-privadas-oidc",level:2},{value:"Rotacionar chaves de cookie OIDC",id:"rotacionar-chaves-de-cookie-oidc",level:2},{value:"E quanto \xe0s chaves anteriores?",id:"e-quanto-\xe0s-chaves-anteriores",level:2},{value:"Solu\xe7\xe3o de problemas",id:"solu\xe7\xe3o-de-problemas",level:2},{value:"Usando Logto como Provedor OIDC no Cloudflare Zero Trust",id:"usando-logto-como-provedor-oidc-no-cloudflare-zero-trust",level:3}];function p(e){const a={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.header,{children:(0,s.jsx)(a.h1,{id:"rotacionar-chaves-de-assinatura-oss",children:"Rotacionar chaves de assinatura (OSS)"})}),"\n",(0,s.jsx)(a.admonition,{type:"note",children:(0,s.jsxs)(a.p,{children:["Se voc\xea estiver usando Logto Cloud, pode rotacionar chaves de assinatura na interface do Console, por favor, consulte ",(0,s.jsx)(a.a,{href:"/developers/signing-keys/#rotate-signing-keys-from-console-ui",children:"este tutorial"}),"."]})}),"\n",(0,s.jsx)(a.p,{children:"Logto OSS suporta a rota\xe7\xe3o de chaves de assinatura desde a vers\xe3o v1.8."}),"\n",(0,s.jsx)(a.p,{children:'As chaves de assinatura OIDC do Logto, conhecidas como "chaves privadas OIDC" e "chaves de cookie OIDC", s\xe3o as chaves de assinatura usadas para criptografar tokens JWT (tokens de acesso e tokens de ID) e cookies de navegador em sess\xf5es de login do Logto.'}),"\n",(0,s.jsx)(a.p,{children:"Rotacionar suas chaves de assinatura regularmente pode reduzir os riscos de comprometimento potencial das chaves. Logto recomenda que voc\xea rotacione suas chaves de assinatura pelo menos uma vez por ano."}),"\n",(0,s.jsx)(a.h2,{id:"rotacionar-chaves-de-assinatura-privadas-oidc",children:"Rotacionar chaves de assinatura privadas OIDC"}),"\n",(0,s.jsx)(a.p,{children:"Use o comando CLI abaixo para gerar uma nova chave de assinatura privada OIDC. A nova chave ser\xe1 automaticamente utilizada ap\xf3s a reinicializa\xe7\xe3o."}),"\n",(0,s.jsx)(a.p,{children:"Op\xe7\xf5es dispon\xedveis:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{children:'--type    (Opcional) O algoritmo de chave de assinatura para seus tokens JWT.\n          Os valores s\xe3o "rsa" ou "ec". O padr\xe3o \xe9 "ec".\n'})}),"\n",(0,s.jsxs)(i.A,{groupId:"cmd",children:[(0,s.jsx)(t.A,{value:"cli",label:"CLI",children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"logto db config rotate oidc.privateKeys --type rsa\n"})})}),(0,s.jsx)(t.A,{value:"Local",label:"local",children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"npm run cli db config rotate oidc.privateKeys -- --type rsa\n"})})}),(0,s.jsx)(t.A,{value:"npx",label:"npx",children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"npx @logto/cli db config rotate oidc.privateKeys -- --type rsa\n"})})})]}),"\n",(0,s.jsx)(a.h2,{id:"rotacionar-chaves-de-cookie-oidc",children:"Rotacionar chaves de cookie OIDC"}),"\n",(0,s.jsx)(a.p,{children:"Use o comando CLI abaixo para gerar uma nova chave de cookie OIDC. A nova chave ser\xe1 automaticamente utilizada ap\xf3s a reinicializa\xe7\xe3o."}),"\n",(0,s.jsxs)(i.A,{groupId:"cmd",children:[(0,s.jsx)(t.A,{value:"cli",label:"CLI",children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"logto db config rotate oidc.cookieKeys\n"})})}),(0,s.jsx)(t.A,{value:"Local",label:"local",children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"npm run cli db config rotate oidc.cookieKeys\n"})})}),(0,s.jsx)(t.A,{value:"npx",label:"npx",children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"npx @logto/cli db config rotate oidc.cookieKeys\n"})})})]}),"\n",(0,s.jsx)(a.h2,{id:"e-quanto-\xe0s-chaves-anteriores",children:"E quanto \xe0s chaves anteriores?"}),"\n",(0,s.jsx)(a.p,{children:"Os comandos de rota\xe7\xe3o de chave do Logto n\xe3o deletar\xe3o suas chaves de assinatura anteriores, e elas ser\xe3o mantidas no banco de dados a menos que voc\xea as delete manualmente."}),"\n",(0,s.jsx)(a.p,{children:"Al\xe9m disso, tenha cuidado ao deletar suas chaves anteriores, pois isso pode causar problemas inesperados. Recomenda-se manter tanto a nova chave quanto a chave anterior por um per\xedodo de tempo (por exemplo, 2 semanas), at\xe9 que voc\xea esteja confiante de que todos os seus usu\xe1rios migraram para a nova chave."}),"\n",(0,s.jsx)(a.h2,{id:"solu\xe7\xe3o-de-problemas",children:"Solu\xe7\xe3o de problemas"}),"\n",(0,s.jsx)(a.h3,{id:"usando-logto-como-provedor-oidc-no-cloudflare-zero-trust",children:"Usando Logto como Provedor OIDC no Cloudflare Zero Trust"}),"\n",(0,s.jsxs)(a.p,{children:["Se voc\xea pretende usar Logto como um provedor OIDC com Cloudflare Zero Trust, observe que ele n\xe3o suporta provedores OIDC usando algoritmos ECDSA. Ao rotacionar chaves de assinatura privadas OIDC, certifique-se de usar o algoritmo RSA especificando ",(0,s.jsx)(a.code,{children:"--type rsa"})," no comando de rota\xe7\xe3o:"]}),"\n",(0,s.jsxs)(i.A,{groupId:"cmd-cloudflare-zero-trust",children:[(0,s.jsx)(t.A,{value:"cli",label:"CLI",children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"logto db config rotate oidc.privateKeys --type rsa\n"})})}),(0,s.jsx)(t.A,{value:"Local",label:"local",children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"npm run cli db config rotate oidc.privateKeys -- --type rsa\n"})})}),(0,s.jsx)(t.A,{value:"npx",label:"npx",children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"npx @logto/cli db config rotate oidc.privateKeys -- --type rsa\n"})})})]})]})}function h(e={}){const{wrapper:a}={...(0,n.R)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},78551:(e,a,o)=>{o.d(a,{A:()=>t});o(30758);var r=o(13526);const s={tabItem:"tabItem_PGP0"};var n=o(86070);function t(e){let{children:a,hidden:o,className:t}=e;return(0,n.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,t),hidden:o,children:a})}},77501:(e,a,o)=>{o.d(a,{A:()=>I});var r=o(30758),s=o(13526),n=o(65052),t=o(25557),i=o(77469),l=o(50873),c=o(62230),u=o(60196);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:a,children:o}=e;return(0,r.useMemo)((()=>{const e=a??function(e){return d(e).map((e=>{let{props:{value:a,label:o,attributes:r,default:s}}=e;return{value:a,label:o,attributes:r,default:s}}))}(o);return function(e){const a=(0,c.XI)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,o])}function h(e){let{value:a,tabValues:o}=e;return o.some((e=>e.value===a))}function v(e){let{queryString:a=!1,groupId:o}=e;const s=(0,t.W6)(),n=function(e){let{queryString:a=!1,groupId:o}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!o)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return o??null}({queryString:a,groupId:o});return[(0,l.aZ)(n),(0,r.useCallback)((e=>{if(!n)return;const a=new URLSearchParams(s.location.search);a.set(n,e),s.replace({...s.location,search:a.toString()})}),[n,s])]}function m(e){const{defaultValue:a,queryString:o=!1,groupId:s}=e,n=p(e),[t,l]=(0,r.useState)((()=>function(e){let{defaultValue:a,tabValues:o}=e;if(0===o.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!h({value:a,tabValues:o}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${o.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const r=o.find((e=>e.default))??o[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:a,tabValues:n}))),[c,d]=v({queryString:o,groupId:s}),[m,g]=function(e){let{groupId:a}=e;const o=function(e){return e?`docusaurus.tab.${e}`:null}(a),[s,n]=(0,u.Dv)(o);return[s,(0,r.useCallback)((e=>{o&&n.set(e)}),[o,n])]}({groupId:s}),b=(()=>{const e=c??m;return h({value:e,tabValues:n})?e:null})();(0,i.A)((()=>{b&&l(b)}),[b]);return{selectedValue:t,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),g(e)}),[d,g,n]),tabValues:n}}var g=o(13887);const b={tabList:"tabList_CGfx",tabItem:"tabItem_JX1E"};var f=o(86070);function x(e){let{className:a,block:o,selectedValue:r,selectValue:t,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,n.a_)(),u=e=>{const a=e.currentTarget,o=l.indexOf(a),s=i[o].value;s!==r&&(c(a),t(s))},d=e=>{let a=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const o=l.indexOf(e.currentTarget)+1;a=l[o]??l[0];break}case"ArrowLeft":{const o=l.indexOf(e.currentTarget)-1;a=l[o]??l[l.length-1];break}}a?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":o},a),children:i.map((e=>{let{value:a,label:o,attributes:n}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:r===a?0:-1,"aria-selected":r===a,ref:e=>l.push(e),onKeyDown:d,onClick:u,...n,className:(0,s.A)("tabs__item",b.tabItem,n?.className,{"tabs__item--active":r===a}),children:o??a},a)}))})}function j(e){let{lazy:a,children:o,selectedValue:n}=e;const t=(Array.isArray(o)?o:[o]).filter(Boolean);if(a){const e=t.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:t.map(((e,a)=>(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==n})))})}function y(e){const a=m(e);return(0,f.jsxs)("div",{className:(0,s.A)("tabs-container",b.tabList),children:[(0,f.jsx)(x,{...a,...e}),(0,f.jsx)(j,{...a,...e})]})}function I(e){const a=(0,g.A)();return(0,f.jsx)(y,{...e,children:d(e.children)},String(a))}},15658:(e,a,o)=>{o.d(a,{R:()=>t,x:()=>i});var r=o(30758);const s={},n=r.createContext(s);function t(e){const a=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),r.createElement(n.Provider,{value:a},e.children)}}}]);