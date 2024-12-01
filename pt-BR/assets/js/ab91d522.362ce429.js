"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[74089],{12338:(e,o,s)=>{s.r(o),s.d(o,{assets:()=>t,contentTitle:()=>d,default:()=>l,frontMatter:()=>r,metadata:()=>a,toc:()=>c});const a=JSON.parse('{"id":"developers/custom-token-claims/README","title":"Reivindica\xe7\xf5es de token personalizadas","description":"Introdu\xe7\xe3o","source":"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/developers/custom-token-claims/README.mdx","sourceDirName":"developers/custom-token-claims","slug":"/developers/custom-token-claims/","permalink":"/pt-BR/developers/custom-token-claims/","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/pt-BR/docusaurus-plugin-content-docs/current/developers/custom-token-claims/README.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"docsSidebar","previous":{"title":"Desenvolvedor","permalink":"/pt-BR/developers/"},"next":{"title":"Casos de uso comuns","permalink":"/pt-BR/developers/custom-token-claims/common-use-cases"}}');var i=s(86070),n=s(15658);const r={sidebar_position:2},d="Reivindica\xe7\xf5es de token personalizadas",t={},c=[{value:"Introdu\xe7\xe3o",id:"introdu\xe7\xe3o",level:2},{value:"Como funcionam as reivindica\xe7\xf5es de token personalizadas?",id:"como-funcionam-as-reivindica\xe7\xf5es-de-token-personalizadas",level:2}];function u(e){const o={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",mermaid:"mermaid",p:"p",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.header,{children:(0,i.jsx)(o.h1,{id:"reivindica\xe7\xf5es-de-token-personalizadas",children:"Reivindica\xe7\xf5es de token personalizadas"})}),"\n",(0,i.jsx)(o.h2,{id:"introdu\xe7\xe3o",children:"Introdu\xe7\xe3o"}),"\n",(0,i.jsx)(o.p,{children:"Tokens de acesso (Access tokens) desempenham um papel cr\xedtico no processo de autentica\xe7\xe3o e autoriza\xe7\xe3o, carregando as informa\xe7\xf5es de identidade e permiss\xf5es do sujeito, e s\xe3o passados entre o servidor Logto (serve como servidor de autentica\xe7\xe3o ou provedor de identidade, IdP), seu servidor de servi\xe7o web (provedor de recursos) e aplicativos clientes (clientes)."}),"\n",(0,i.jsx)(o.p,{children:"Reivindica\xe7\xf5es de token (Token claims) s\xe3o os pares chave-valor que fornecem informa\xe7\xf5es sobre uma entidade ou o pr\xf3prio token. As reivindica\xe7\xf5es podem incluir informa\xe7\xf5es do usu\xe1rio, tempo de expira\xe7\xe3o do token, permiss\xf5es e outros metadados que s\xe3o relevantes para o processo de autentica\xe7\xe3o (link para auth.wiki) e autoriza\xe7\xe3o (link para auth.wiki)."}),"\n",(0,i.jsx)(o.p,{children:"Existem dois tipos de tokens de acesso no Logto:"}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.strong,{children:"JSON Web Token:"})," JSON Web Token (JWT) \xe9 um formato popular que codifica reivindica\xe7\xf5es de uma forma que \xe9 segura e leg\xedvel pelos clientes. Reivindica\xe7\xf5es comuns como ",(0,i.jsx)(o.code,{children:"sub"}),", ",(0,i.jsx)(o.code,{children:"iss"}),", ",(0,i.jsx)(o.code,{children:"aud"}),", etc., s\xe3o usadas em conformidade com o protocolo OAuth 2.0 (Veja ",(0,i.jsx)(o.a,{href:"https://datatracker.ietf.org/doc/html/rfc7519#section-4",children:"este link"})," para mais detalhes). Tokens JWT permitem que os consumidores acessem diretamente as reivindica\xe7\xf5es sem etapas adicionais de valida\xe7\xe3o. No Logto, tokens de acesso s\xe3o emitidos no formato JWT por padr\xe3o quando um cliente inicia solicita\xe7\xf5es de autoriza\xe7\xe3o de recursos ou organiza\xe7\xf5es espec\xedficas."]}),"\n",(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.strong,{children:"Token opaco (Opaque token):"})," Um token opaco (Opaque token) n\xe3o \xe9 autossuficiente e sempre requer uma etapa adicional de valida\xe7\xe3o via o endpoint de introspec\xe7\xe3o de token. Apesar de seu formato n\xe3o transparente, tokens opacos podem ajudar a obter reivindica\xe7\xf5es e serem transmitidos de forma segura entre as partes. As reivindica\xe7\xf5es de token s\xe3o armazenadas de forma segura no servidor Logto e acessadas pelos aplicativos clientes via o endpoint de introspec\xe7\xe3o de token. Tokens de acesso s\xe3o emitidos no formato opaco quando nenhum recurso ou organiza\xe7\xe3o espec\xedfico \xe9 inclu\xeddo na solicita\xe7\xe3o de autoriza\xe7\xe3o. Esses tokens s\xe3o usados principalmente para acessar o endpoint ",(0,i.jsx)(o.code,{children:"userinfo"})," do OIDC e outros prop\xf3sitos gerais."]}),"\n"]}),"\n",(0,i.jsx)(o.p,{children:"Em muitos casos, as reivindica\xe7\xf5es padr\xe3o n\xe3o s\xe3o suficientes para atender \xe0s necessidades espec\xedficas de seus aplicativos, seja voc\xea usando JWT ou tokens opacos. Para resolver isso, o Logto oferece a flexibilidade de adicionar reivindica\xe7\xf5es personalizadas dentro dos tokens de acesso. Com esse recurso, voc\xea pode incluir informa\xe7\xf5es adicionais para sua l\xf3gica de neg\xf3cios, todas transmitidas de forma segura nos tokens e recuper\xe1veis via introspec\xe7\xe3o no caso de tokens opacos."}),"\n",(0,i.jsx)(o.h2,{id:"como-funcionam-as-reivindica\xe7\xf5es-de-token-personalizadas",children:"Como funcionam as reivindica\xe7\xf5es de token personalizadas?"}),"\n",(0,i.jsxs)(o.p,{children:["Logto permite que voc\xea insira reivindica\xe7\xf5es personalizadas no ",(0,i.jsx)(o.code,{children:"token de acesso"})," atrav\xe9s de uma fun\xe7\xe3o de callback ",(0,i.jsx)(o.code,{children:"getCustomJwtClaims"}),". Voc\xea pode fornecer sua implementa\xe7\xe3o da fun\xe7\xe3o ",(0,i.jsx)(o.code,{children:"getCustomJwtClaims"})," para retornar um objeto de reivindica\xe7\xf5es personalizadas. O valor de retorno ser\xe1 mesclado com a carga \xfatil original do token e assinado para gerar o token de acesso final."]}),"\n",(0,i.jsx)(o.mermaid,{value:"sequenceDiagram\n  participant U as Usu\xe1rio ou agente do usu\xe1rio\n  participant IdP as Logto (provedor de identidade)\n  participant SP as Provedor de Servi\xe7o\n\n  autonumber\n  U ->> IdP: Solicita\xe7\xe3o de autentica\xe7\xe3o (com credenciais)\n  activate IdP\n  IdP--\x3e>IdP: Validar credenciais &<br/>gerar carga \xfatil bruta do token de acesso\n  rect var(--mermaid-rect-fill)\n  note over IdP: Reivindica\xe7\xf5es de token personalizadas\n  IdP->>IdP: Executar script de reivindica\xe7\xf5es de token personalizadas (`getCustomJwtClaims`) &<br/>obter reivindica\xe7\xf5es de token extras\n  end\n  IdP--\x3e>IdP: Mesclar carga \xfatil bruta do token de acesso e reivindica\xe7\xf5es de token extras\n  IdP--\x3e>IdP: Assinar & criptografar carga \xfatil para obter token de acesso\n  deactivate IdP\n  IdP--\x3e>U: Emitir token de acesso no formato JWT\n  par Obter servi\xe7o via API\n  U->>SP: solicita\xe7\xe3o de servi\xe7o (com token de acesso JWT)\n  SP--\x3e>U: resposta de servi\xe7o\n  end"}),"\n",(0,i.jsx)(o.admonition,{type:"warning",children:(0,i.jsx)(o.p,{children:"Reivindica\xe7\xf5es de token embutidas no Logto N\xc3O podem ser substitu\xeddas ou modificadas. Reivindica\xe7\xf5es personalizadas ser\xe3o adicionadas ao token como reivindica\xe7\xf5es adicionais. Se houver qualquer conflito entre as reivindica\xe7\xf5es personalizadas e as reivindica\xe7\xf5es embutidas, essas reivindica\xe7\xf5es personalizadas ser\xe3o ignoradas."})})]})}function l(e={}){const{wrapper:o}={...(0,n.R)(),...e.components};return o?(0,i.jsx)(o,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},15658:(e,o,s)=>{s.d(o,{R:()=>r,x:()=>d});var a=s(30758);const i={},n=a.createContext(i);function r(e){const o=a.useContext(n);return a.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(n.Provider,{value:o},e.children)}}}]);