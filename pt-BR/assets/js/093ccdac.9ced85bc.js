"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[20297],{64304:(e,o,r)=>{r.r(o),r.d(o,{assets:()=>t,contentTitle:()=>n,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"authorization/api-resources/README","title":"Recursos de API","description":"Recursos de API, tamb\xe9m conhecidos como Indicadores de Recurso, indicam os servi\xe7os ou recursos de destino a serem solicitados, geralmente uma vari\xe1vel no formato URI que representa a identidade do recurso. Este \xe9 um conceito chave no sistema de autoriza\xe7\xe3o do Logto, pois define o endpoint que a pol\xedtica de autoriza\xe7\xe3o foi projetada para proteger.","source":"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/authorization/api-resources/README.mdx","sourceDirName":"authorization/api-resources","slug":"/authorization/api-resources/","permalink":"/pt-BR/authorization/api-resources/","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/pt-BR/docusaurus-plugin-content-docs/current/authorization/api-resources/README.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"docsSidebar","previous":{"title":"Autoriza\xe7\xe3o (Authorization)","permalink":"/pt-BR/authorization/"},"next":{"title":"Proteja sua API","permalink":"/pt-BR/authorization/api-resources/protect-your-api"}}');var i=r(86070),d=r(15658);const a={sidebar_position:1},n="Recursos de API",t={},c=[{value:"Indicador de recurso",id:"indicador-de-recurso",level:2},{value:"Esquema de recurso de API do Logto",id:"esquema-de-recurso-de-api-do-logto",level:2},{value:"API padr\xe3o",id:"api-padr\xe3o",level:2},{value:"Registrar os recursos de API no Logto",id:"registrar-os-recursos-de-api-no-logto",level:2}];function l(e){const o={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...e.components},{CloudLink:r}=o;return r||function(e,o){throw new Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("CloudLink",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.header,{children:(0,i.jsx)(o.h1,{id:"recursos-de-api",children:"Recursos de API"})}),"\n",(0,i.jsxs)(o.p,{children:["Recursos de API, tamb\xe9m conhecidos como ",(0,i.jsx)(o.a,{href:"https://www.rfc-editor.org/rfc/rfc8707.html",children:"Indicadores de Recurso"}),", indicam os servi\xe7os ou recursos de destino a serem solicitados, geralmente uma vari\xe1vel no formato URI que representa a identidade do recurso. Este \xe9 um conceito chave no sistema de autoriza\xe7\xe3o do Logto, pois define o endpoint que a pol\xedtica de autoriza\xe7\xe3o foi projetada para proteger."]}),"\n",(0,i.jsx)(o.h2,{id:"indicador-de-recurso",children:"Indicador de recurso"}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsx)(o.li,{children:"Um valor de recurso indica o servi\xe7o ou recurso de destino ao qual o acesso est\xe1 sendo solicitado."}),"\n",(0,i.jsxs)(o.li,{children:["Seu valor ",(0,i.jsx)(o.strong,{children:"DEVE"})," ser um URI absoluto."]}),"\n",(0,i.jsxs)(o.li,{children:["O URI ",(0,i.jsx)(o.strong,{children:"N\xc3O DEVE"})," incluir um componente de fragmento."]}),"\n",(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.strong,{children:"N\xc3O DEVE"})," incluir um componente de consulta."]}),"\n",(0,i.jsxs)(o.li,{children:["Voc\xea ",(0,i.jsx)(o.strong,{children:"DEVE"})," fornecer o URI mais espec\xedfico poss\xedvel para a API completa ou conjunto de recursos que pretende acessar."]}),"\n"]}),"\n",(0,i.jsx)(o.p,{children:"Na pr\xe1tica, um cliente pode conhecer um URI base ou o aplicativo ou recurso com o qual interagir. Seria apropriado us\xe1-lo como o valor do par\xe2metro de recurso."}),"\n",(0,i.jsx)(o.p,{children:"Por exemplo, URI base da Logto Management API."}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{children:"https://tenantId.logto.app/api\n"})}),"\n",(0,i.jsx)(o.p,{children:"Por padr\xe3o, este recurso de API \xe9 pr\xe9-registrado no seu servi\xe7o Logto. Todas as Management APIs sob este URI s\xe3o protegidas pelo Logto."}),"\n",(0,i.jsx)(o.h2,{id:"esquema-de-recurso-de-api-do-logto",children:"Esquema de recurso de API do Logto"}),"\n",(0,i.jsxs)(o.table,{children:[(0,i.jsx)(o.thead,{children:(0,i.jsxs)(o.tr,{children:[(0,i.jsx)(o.th,{children:(0,i.jsx)(o.strong,{children:"Nome da propriedade"})}),(0,i.jsx)(o.th,{children:(0,i.jsx)(o.strong,{children:"Descri\xe7\xe3o da propriedade"})}),(0,i.jsx)(o.th,{children:(0,i.jsx)(o.strong,{children:"Obrigat\xf3rio"})})]})}),(0,i.jsxs)(o.tbody,{children:[(0,i.jsxs)(o.tr,{children:[(0,i.jsx)(o.td,{children:"Nome da API"}),(0,i.jsx)(o.td,{children:"Um nome amig\xe1vel que pode ajud\xe1-lo a identificar o recurso de API."}),(0,i.jsx)(o.td,{children:"true"})]}),(0,i.jsxs)(o.tr,{children:[(0,i.jsx)(o.td,{children:"Identificador da API"}),(0,i.jsxs)(o.td,{children:["O valor \xfanico do ",(0,i.jsx)(o.a,{href:"https://www.rfc-editor.org/rfc/rfc8707.html",children:"Indicador de Recurso"})," da API, com as restri\xe7\xf5es listadas acima."]}),(0,i.jsx)(o.td,{})]}),(0,i.jsxs)(o.tr,{children:[(0,i.jsx)(o.td,{children:"O Logto usar\xe1 isso para identificar o recurso de API solicitado e conceder os tokens de autoriza\xe7\xe3o de acordo."}),(0,i.jsx)(o.td,{children:"true"}),(0,i.jsx)(o.td,{})]}),(0,i.jsxs)(o.tr,{children:[(0,i.jsxs)(o.td,{children:["Tempo de expira\xe7\xe3o do token ",(0,i.jsx)(o.em,{children:"(em segundos)"})]}),(0,i.jsxs)(o.td,{children:["O tempo de expira\xe7\xe3o definido para ",(0,i.jsx)(o.code,{children:"token de acesso"}),". O valor padr\xe3o de expira\xe7\xe3o \xe9 ",(0,i.jsx)(o.strong,{children:"3600"}),"."]}),(0,i.jsx)(o.td,{children:"false"})]}),(0,i.jsxs)(o.tr,{children:[(0,i.jsx)(o.td,{children:"API padr\xe3o"}),(0,i.jsx)(o.td,{children:"Apenas zero ou uma API padr\xe3o pode ser definida por locat\xe1rio."}),(0,i.jsx)(o.td,{})]}),(0,i.jsxs)(o.tr,{children:[(0,i.jsx)(o.td,{children:"Quando uma API padr\xe3o \xe9 designada, o par\xe2metro de recurso pode ser omitido na solicita\xe7\xe3o de autentica\xe7\xe3o. Trocas de token subsequentes usar\xe3o essa API como o p\xfablico por padr\xe3o, resultando na emiss\xe3o de JWTs."}),(0,i.jsx)(o.td,{children:"false"}),(0,i.jsx)(o.td,{})]})]})]}),"\n",(0,i.jsx)(o.admonition,{type:"note",children:(0,i.jsxs)(o.p,{children:["Solicita\xe7\xf5es com um ",(0,i.jsx)(o.code,{children:"token de acesso"})," expirado devem ser restritas. Isso \xe9 implementado para proteger sua API de um token abusado. Quanto maior o valor definido, mais tempo um ",(0,i.jsx)(o.code,{children:"token de acesso"})," emitido sobreviver\xe1, e mais vulner\xe1vel sua API ser\xe1."]})}),"\n",(0,i.jsx)(o.h2,{id:"api-padr\xe3o",children:"API padr\xe3o"}),"\n",(0,i.jsx)(o.admonition,{type:"note",children:(0,i.jsx)(o.p,{children:"Este recurso \xe9 principalmente destinado a aplicativos que N\xc3O suportam indicadores de recurso OIDC, por exemplo, plugins do ChatGPT."})}),"\n",(0,i.jsxs)(o.p,{children:["O Logto utiliza ",(0,i.jsx)(o.a,{href:"https://www.rfc-editor.org/rfc/rfc8707",children:"RFC 8707: Indicadores de Recurso para OAuth 2.0"})," para implementar controle de acesso baseado em papel (RBAC). Embora seja um dos recursos do OAuth 2.0, ainda n\xe3o \xe9 amplamente suportado."]}),"\n",(0,i.jsxs)(o.p,{children:["Na implementa\xe7\xe3o do Logto, cada permiss\xe3o (escopo) definida pelo usu\xe1rio deve estar associada a um Recurso de API. Caso contr\xe1rio, ser\xe1 tratada como uma permiss\xe3o OpenID Connect (ou OAuth). Geralmente, isso n\xe3o afeta seu processo de autoriza\xe7\xe3o. No entanto, ao integrar com aplicativos de terceiros que n\xe3o suportam ",(0,i.jsx)(o.a,{href:"https://www.rfc-editor.org/rfc/rfc8707.html",children:"RFC 8707"})," (por exemplo, plugins do ChatGPT), pode haver desafios, pois a solicita\xe7\xe3o de autoriza\xe7\xe3o inicial pode n\xe3o incluir um par\xe2metro ",(0,i.jsx)(o.code,{children:"resource"}),". Consequentemente, o Logto sempre emitir\xe1 Tokens de Acesso Opacos."]}),"\n",(0,i.jsx)(o.p,{children:"Para resolver esse problema, voc\xea pode designar um Recurso de API como o recurso padr\xe3o em n\xedvel de locat\xe1rio. Uma vez feito isso:"}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsxs)(o.li,{children:["O Logto usar\xe1 o Recurso de API padr\xe3o quando nenhum par\xe2metro ",(0,i.jsx)(o.code,{children:"resource"})," estiver presente na ",(0,i.jsx)(o.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html#AuthRequest",children:"Solicita\xe7\xe3o de Autentica\xe7\xe3o"}),"."]}),"\n",(0,i.jsxs)(o.li,{children:["Se o escopo ",(0,i.jsx)(o.code,{children:"openid"})," estiver inclu\xeddo, um Token de Acesso Opaco para o ",(0,i.jsx)(o.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html#UserInfo",children:"Endpoint de Informa\xe7\xf5es do Usu\xe1rio"})," ser\xe1 emitido quando nenhum par\xe2metro ",(0,i.jsx)(o.code,{children:"resource"})," estiver presente em ",(0,i.jsx)(o.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html#TokenRequest",children:"Solicita\xe7\xf5es de Token"})," subsequentes."]}),"\n",(0,i.jsxs)(o.li,{children:["Se o escopo ",(0,i.jsx)(o.code,{children:"openid"})," n\xe3o estiver inclu\xeddo, um Token de Acesso JWT para o Recurso de API padr\xe3o ser\xe1 emitido quando nenhum par\xe2metro ",(0,i.jsx)(o.code,{children:"resource"})," estiver presente em ",(0,i.jsx)(o.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html#TokenRequest",children:"Solicita\xe7\xf5es de Token"})," subsequentes."]}),"\n"]}),"\n",(0,i.jsx)(o.p,{children:"Ao designar um Recurso de API padr\xe3o, voc\xea pode garantir uma integra\xe7\xe3o suave com aplicativos que n\xe3o suportam RFC 8707, mantendo os controles de acesso apropriados."}),"\n",(0,i.jsx)(o.h2,{id:"registrar-os-recursos-de-api-no-logto",children:"Registrar os recursos de API no Logto"}),"\n",(0,i.jsxs)(o.p,{children:["Para obter um ",(0,i.jsx)(o.code,{children:"token de acesso"})," restrito ao p\xfablico do Logto, primeiro registre suas APIs de backend para habilitar os tokens de acesso restritos ao p\xfablico do Logto. Quando uma solicita\xe7\xe3o de autoriza\xe7\xe3o \xe9 recebida, o Logto identificar\xe1 os recursos de API registrados e conceder\xe1 acesso de acordo."]}),"\n",(0,i.jsxs)(o.p,{children:["Para registrar suas APIs, navegue at\xe9 ",(0,i.jsx)(r,{to:"/api-resources",children:"Console > Recursos de API"}),". Voc\xea ver\xe1 um recurso embutido com o identificador de API exibido como ",(0,i.jsx)(o.code,{children:"https://[your-tenant-id].logto.app/api"}),". Este recurso abrange todas as Management APIs do Logto e garante que elas sejam protegidas e acess\xedveis apenas a usu\xe1rios autorizados do Logto."]}),"\n",(0,i.jsxs)(o.p,{children:["Clique no bot\xe3o ",(0,i.jsx)(o.strong,{children:"Criar recurso de API"})," e siga o formul\xe1rio interativo para criar seus pr\xf3prios recursos de API:"]}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsxs)(o.li,{children:["Um ",(0,i.jsx)(o.strong,{children:"nome de API"})," leg\xedvel que pode ajud\xe1-lo a identificar melhor esta entidade."]}),"\n",(0,i.jsxs)(o.li,{children:["Um ",(0,i.jsx)(o.strong,{children:"identificador de API"})," \xfanico no formato URI. Ele representa a identidade do recurso de API."]}),"\n"]}),"\n",(0,i.jsx)(o.p,{children:"A nova API aparecer\xe1 na lista assim que for criada. Voc\xea pode gerenci\xe1-la ou exclu\xed-la na p\xe1gina de detalhes da API clicando na entidade."})]})}function u(e={}){const{wrapper:o}={...(0,d.R)(),...e.components};return o?(0,i.jsx)(o,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},15658:(e,o,r)=>{r.d(o,{R:()=>a,x:()=>n});var s=r(30758);const i={},d=s.createContext(i);function a(e){const o=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function n(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(d.Provider,{value:o},e.children)}}}]);