"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[82937],{10986:(e,a,o)=>{o.r(a),o.d(a,{assets:()=>c,contentTitle:()=>u,default:()=>m,frontMatter:()=>l,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"customization/bring-your-ui/debug-and-test-your-custom-ui-locally","title":"Depure e teste sua UI personalizada localmente","description":"Para usu\xe1rios do Logto Cloud, facilitamos para que voc\xea \\"Traga sua pr\xf3pria UI\\" para o Logto. Usu\xe1rios do Cloud agora podem fazer upload de um arquivo zip contendo os ativos de UI personalizados em Console > Experi\xeancia de login > Branding > Traga sua UI (Confira a p\xe1gina Traga sua UI para mais detalhes.)","source":"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/customization/bring-your-ui/debug-and-test-your-custom-ui-locally.mdx","sourceDirName":"customization/bring-your-ui","slug":"/customization/bring-your-ui/debug-and-test-your-custom-ui-locally","permalink":"/pt-BR/customization/bring-your-ui/debug-and-test-your-custom-ui-locally","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/pt-BR/docusaurus-plugin-content-docs/current/customization/bring-your-ui/debug-and-test-your-custom-ui-locally.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"docsSidebar","previous":{"title":"Traga sua pr\xf3pria UI","permalink":"/pt-BR/customization/bring-your-ui/"},"next":{"title":"Fazer upload de ativos de UI personalizados usando CLI","permalink":"/pt-BR/customization/bring-your-ui/upload-custom-ui-assets-using-cli"}}');var t=o(86070),i=o(15658),r=o(78551),s=o(77501);const l={sidebar_position:1},u="Depure e teste sua UI personalizada localmente",c={},d=[{value:"Por que eu preciso disso?",id:"por-que-eu-preciso-disso",level:2},{value:"Instru\xe7\xf5es",id:"instru\xe7\xf5es",level:2},{value:"Passo 1: Execute o comando",id:"passo-1-execute-o-comando",level:3},{value:"Passo 2: Atualize o URI do endpoint em seu aplicativo",id:"passo-2-atualize-o-uri-do-endpoint-em-seu-aplicativo",level:3}];function p(e){const a={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",mermaid:"mermaid",p:"p",pre:"pre",...(0,i.R)(),...e.components},{CloudLink:o}=a;return o||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("CloudLink",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.header,{children:(0,t.jsx)(a.h1,{id:"depure-e-teste-sua-ui-personalizada-localmente",children:"Depure e teste sua UI personalizada localmente"})}),"\n",(0,t.jsxs)(a.p,{children:['Para usu\xe1rios do Logto Cloud, facilitamos para que voc\xea "Traga sua pr\xf3pria UI" para o Logto. Usu\xe1rios do Cloud agora podem fazer upload de um arquivo zip contendo os ativos de UI personalizados em ',(0,t.jsx)(o,{to:"/sign-in-experience/branding",children:"Console > Experi\xeancia de login > Branding > Traga sua UI"})," (Confira a p\xe1gina ",(0,t.jsx)(a.a,{href:"/customization/bring-your-ui",children:"Traga sua UI"})," para mais detalhes.)"]}),"\n",(0,t.jsx)(a.p,{children:"No entanto, ao desenvolver essas p\xe1ginas de UI personalizadas, os usu\xe1rios querem testar e depurar o c\xf3digo localmente, antes de fazer o upload para o Logto Cloud. Este comando CLI ajuda voc\xea a configurar um t\xfanel local e conectar as seguintes 3 entidades juntas:\nseu endpoint de autentica\xe7\xe3o do Logto Cloud, seu aplicativo e sua UI de login personalizada."}),"\n",(0,t.jsx)(a.h2,{id:"por-que-eu-preciso-disso",children:"Por que eu preciso disso?"}),"\n",(0,t.jsx)(a.p,{children:'Por padr\xe3o, quando voc\xea clica no bot\xe3o "login" em seu aplicativo, voc\xea ser\xe1 direcionado para a p\xe1gina de login configurada no endpoint do Logto. Um fluxo de login bem-sucedido pode ser ilustrado da seguinte forma:'}),"\n",(0,t.jsx)(a.mermaid,{value:'sequenceDiagram\n    box M\xe1quina local\n    participant A as Seu aplicativo\n    end\n    box Logto Cloud\n    participant B as Endpoint de autentica\xe7\xe3o do Logto Cloud\n    participant C as P\xe1gina de login do Logto\n    end\n    A ->> B: Usu\xe1rio inicia a a\xe7\xe3o de "login" e solicita autentica\xe7\xe3o\n    B --\x3e> A: Retorna resposta de autentica\xe7\xe3o e informa o cliente<br/>para redirecionar para a p\xe1gina de login do Logto\n    A ->> C: Redireciona para a p\xe1gina de login do Logto\n    C ->> B: Envia o formul\xe1rio de login e<br/>solicita a Experience API para autenticar\n    B --\x3e> C: Responde \xe0 solicita\xe7\xe3o de login e<br/>informa o cliente para redirecionar para seu aplicativo\n    C --\x3e> A: Redireciona para seu aplicativo\n    A --\x3e A: Lida com o callback de login e<br/>o usu\xe1rio agora est\xe1 autenticado'}),"\n",(0,t.jsx)(a.p,{children:"Mas agora, como voc\xea est\xe1 desenvolvendo sua pr\xf3pria UI de login personalizada, voc\xea precisa de uma maneira de navegar para as p\xe1ginas de UI de login personalizadas rodando em sua m\xe1quina local.\nIsso requer um servi\xe7o de t\xfanel local para interceptar as solicita\xe7\xf5es de sa\xedda do seu aplicativo e redirecion\xe1-las para suas p\xe1ginas de UI de login personalizadas."}),"\n",(0,t.jsxs)(a.p,{children:["Al\xe9m disso, voc\xea precisa interagir com a ",(0,t.jsx)(a.a,{href:"https://openapi.logto.io/group/endpoint-experience",children:"Experience API do Logto"})," para autenticar usu\xe1rios e gerenciar sess\xf5es.\nEste servi\xe7o tamb\xe9m ajudar\xe1 a encaminhar essas solicita\xe7\xf5es da Experience API para o Logto Cloud a fim de evitar problemas de CORS."]}),"\n",(0,t.jsx)(a.p,{children:'O diagrama de sequ\xeancia abaixo ilustra como um fluxo de "login" bem-sucedido funciona com sua UI personalizada e o servi\xe7o de t\xfanel em funcionamento:'}),"\n",(0,t.jsx)(a.mermaid,{value:'sequenceDiagram\n    box M\xe1quina local\n    participant A as Seu aplicativo\n    participant B as Sua UI de login personalizada\n    participant C as T\xfanel\n    end\n    box Logto Cloud\n    participant D as Endpoint de autentica\xe7\xe3o do Logto Cloud\n    participant E as P\xe1gina de login do Logto\n    end\n    A ->> C: Usu\xe1rio inicia a a\xe7\xe3o de "login" e solicita autentica\xe7\xe3o\n    C ->> D: Encaminha a solicita\xe7\xe3o de autentica\xe7\xe3o para o endpoint do Logto Cloud\n    D --\x3e> C: Retorna resposta de autentica\xe7\xe3o e informa o cliente<br/>para redirecionar para a p\xe1gina de login do Logto\n    C ->> B: Intercepta o redirecionamento e<br/>redireciona para sua p\xe1gina de login personalizada\n    B ->> C: Envia o formul\xe1rio de login e<br/>solicita a Experience API para autenticar\n    C ->> D: Encaminha as solicita\xe7\xf5es da Experience API para o Logto Cloud\n    D --\x3e> C: Autentica a solicita\xe7\xe3o de login e<br/>informa o cliente para redirecionar para seu aplicativo\n    C --\x3e> A: Redireciona para seu aplicativo\n    A --\x3e A: Lida com o callback de login e<br/>o usu\xe1rio agora est\xe1 autenticado'}),"\n",(0,t.jsx)(a.p,{children:"Com o servi\xe7o de t\xfanel em funcionamento, voc\xea pode agora desenvolver e testar sua UI de login personalizada localmente, sem precisar fazer upload dos ativos para o Logto Cloud toda vez que fizer uma altera\xe7\xe3o."}),"\n",(0,t.jsx)(a.h2,{id:"instru\xe7\xf5es",children:"Instru\xe7\xf5es"}),"\n",(0,t.jsx)(a.h3,{id:"passo-1-execute-o-comando",children:"Passo 1: Execute o comando"}),"\n",(0,t.jsxs)(a.p,{children:["Supondo que seu ID de locat\xe1rio do Cloud seja ",(0,t.jsx)(a.code,{children:"foobar"}),", e voc\xea tenha uma p\xe1gina de login personalizada rodando em seu servidor de desenvolvimento local em ",(0,t.jsx)(a.code,{children:"http://localhost:4000"}),", ent\xe3o voc\xea pode executar o comando desta forma:"]}),"\n",(0,t.jsxs)(s.A,{groupId:"cmd",children:[(0,t.jsx)(r.A,{value:"cli",label:"CLI",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"logto-tunnel -p 9000 --experience-uri http://localhost:4000/ --endpoint https://foobar.logto.app/\n"})})}),(0,t.jsx)(r.A,{value:"npx",label:"npx",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"npx @logto/tunnel -p 9000 --experience-uri http://localhost:4000/ --endpoint https://foobar.logto.app/\n"})})})]}),"\n",(0,t.jsx)(a.p,{children:"Tamb\xe9m funciona se voc\xea tiver um dom\xednio personalizado configurado no Logto:"}),"\n",(0,t.jsxs)(s.A,{groupId:"cmd",children:[(0,t.jsx)(r.A,{value:"cli",label:"CLI",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"logto-tunnel -p 9000 --experience-uri http://localhost:4000/ --endpoint https://your.custom.domain/\n"})})}),(0,t.jsx)(r.A,{value:"npx",label:"npx",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"npx @logto/tunnel -p 9000 --experience-uri http://localhost:4000/ --endpoint https://your.custom.domain/\n"})})})]}),"\n",(0,t.jsxs)(a.p,{children:["Alternativamente, o comando tamb\xe9m suporta ativos HTML est\xe1ticos sem precisar execut\xe1-los primeiro em um servidor de desenvolvimento. Apenas certifique-se de que h\xe1 um ",(0,t.jsx)(a.code,{children:"index.html"})," no caminho que voc\xea especificou."]}),"\n",(0,t.jsxs)(s.A,{groupId:"cmd",children:[(0,t.jsx)(r.A,{value:"cli",label:"CLI",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"logto-tunnel -p 9000 --experience-path /path/to/your/static/files --endpoint https://foobar.logto.app/\n"})})}),(0,t.jsx)(r.A,{value:"npx",label:"npx",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"npx @logto/tunnel -p 9000 --experience-path /path/to/your/static/files --endpoint https://foobar.logto.app/\n"})})})]}),"\n",(0,t.jsx)(a.h3,{id:"passo-2-atualize-o-uri-do-endpoint-em-seu-aplicativo",children:"Passo 2: Atualize o URI do endpoint em seu aplicativo"}),"\n",(0,t.jsxs)(a.p,{children:["Finalmente, execute seu aplicativo e defina seu endpoint do Logto para o endere\xe7o do servi\xe7o de t\xfanel ",(0,t.jsx)(a.code,{children:"http://localhost:9000/"}),"."]}),"\n",(0,t.jsx)(a.p,{children:"Vamos tomar um aplicativo React como exemplo:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-tsx",metastring:"title=App.tsx",children:"import { LogtoProvider, LogtoConfig } from '@logto/react';\n\nconst config: LogtoConfig = {\n  // endpoint: 'https://foobar.logto.app/', // endpoint original do Logto Cloud\n  endpoint: 'http://localhost:9000/', // endere\xe7o do servi\xe7o de t\xfanel\n  appId: '<your-application-id>',\n};\n\nconst App = () => (\n  <LogtoProvider config={config}>\n    <YourAppContent />\n  </LogtoProvider>\n);\n"})}),"\n",(0,t.jsx)(a.p,{children:"Se voc\xea estiver usando login social, tamb\xe9m precisar\xe1 atualizar o URI de redirecionamento nas configura\xe7\xf5es do seu provedor social para o endere\xe7o do servi\xe7o de t\xfanel."}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{children:"http://localhost:9000/callback/<connector-id>\n"})}),"\n",(0,t.jsx)(a.p,{children:'Se tudo estiver configurado corretamente, quando voc\xea clicar no bot\xe3o "login" em seu aplicativo, voc\xea dever\xe1 ser direcionado para sua p\xe1gina de login personalizada em vez da UI integrada do Logto, junto com uma sess\xe3o v\xe1lida (cookies) que permite que voc\xea interaja ainda mais com a Experience API do Logto.'}),"\n",(0,t.jsx)(a.p,{children:"Feliz codifica\xe7\xe3o!"})]})}function m(e={}){const{wrapper:a}={...(0,i.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},78551:(e,a,o)=>{o.d(a,{A:()=>r});o(30758);var n=o(13526);const t={tabItem:"tabItem_PGP0"};var i=o(86070);function r(e){let{children:a,hidden:o,className:r}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,n.A)(t.tabItem,r),hidden:o,children:a})}},77501:(e,a,o)=>{o.d(a,{A:()=>C});var n=o(30758),t=o(13526),i=o(65052),r=o(25557),s=o(77469),l=o(50873),u=o(62230),c=o(60196);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:a,children:o}=e;return(0,n.useMemo)((()=>{const e=a??function(e){return d(e).map((e=>{let{props:{value:a,label:o,attributes:n,default:t}}=e;return{value:a,label:o,attributes:n,default:t}}))}(o);return function(e){const a=(0,u.XI)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,o])}function m(e){let{value:a,tabValues:o}=e;return o.some((e=>e.value===a))}function g(e){let{queryString:a=!1,groupId:o}=e;const t=(0,r.W6)(),i=function(e){let{queryString:a=!1,groupId:o}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!o)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return o??null}({queryString:a,groupId:o});return[(0,l.aZ)(i),(0,n.useCallback)((e=>{if(!i)return;const a=new URLSearchParams(t.location.search);a.set(i,e),t.replace({...t.location,search:a.toString()})}),[i,t])]}function h(e){const{defaultValue:a,queryString:o=!1,groupId:t}=e,i=p(e),[r,l]=(0,n.useState)((()=>function(e){let{defaultValue:a,tabValues:o}=e;if(0===o.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!m({value:a,tabValues:o}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${o.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const n=o.find((e=>e.default))??o[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:a,tabValues:i}))),[u,d]=g({queryString:o,groupId:t}),[h,v]=function(e){let{groupId:a}=e;const o=function(e){return e?`docusaurus.tab.${e}`:null}(a),[t,i]=(0,c.Dv)(o);return[t,(0,n.useCallback)((e=>{o&&i.set(e)}),[o,i])]}({groupId:t}),x=(()=>{const e=u??h;return m({value:e,tabValues:i})?e:null})();(0,s.A)((()=>{x&&l(x)}),[x]);return{selectedValue:r,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),v(e)}),[d,v,i]),tabValues:i}}var v=o(13887);const x={tabList:"tabList_CGfx",tabItem:"tabItem_JX1E"};var b=o(86070);function f(e){let{className:a,block:o,selectedValue:n,selectValue:r,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.a_)(),c=e=>{const a=e.currentTarget,o=l.indexOf(a),t=s[o].value;t!==n&&(u(a),r(t))},d=e=>{let a=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const o=l.indexOf(e.currentTarget)+1;a=l[o]??l[0];break}case"ArrowLeft":{const o=l.indexOf(e.currentTarget)-1;a=l[o]??l[l.length-1];break}}a?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":o},a),children:s.map((e=>{let{value:a,label:o,attributes:i}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:n===a?0:-1,"aria-selected":n===a,ref:e=>l.push(e),onKeyDown:d,onClick:c,...i,className:(0,t.A)("tabs__item",x.tabItem,i?.className,{"tabs__item--active":n===a}),children:o??a},a)}))})}function j(e){let{lazy:a,children:o,selectedValue:i}=e;const r=(Array.isArray(o)?o:[o]).filter(Boolean);if(a){const e=r.find((e=>e.props.value===i));return e?(0,n.cloneElement)(e,{className:(0,t.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:r.map(((e,a)=>(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==i})))})}function I(e){const a=h(e);return(0,b.jsxs)("div",{className:(0,t.A)("tabs-container",x.tabList),children:[(0,b.jsx)(f,{...a,...e}),(0,b.jsx)(j,{...a,...e})]})}function C(e){const a=(0,v.A)();return(0,b.jsx)(I,{...e,children:d(e.children)},String(a))}},15658:(e,a,o)=>{o.d(a,{R:()=>r,x:()=>s});var n=o(30758);const t={},i=n.createContext(t);function r(e){const a=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function s(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),n.createElement(i.Provider,{value:a},e.children)}}}]);