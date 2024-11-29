"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[73255],{46201:(e,i,o)=>{o.r(i),o.d(i,{assets:()=>t,contentTitle:()=>n,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>c});const a=JSON.parse('{"id":"end-user-flows/account-settings/by-management-api","title":"Configura\xe7\xf5es de conta pela Management API","description":"Integra\xe7\xf5es","source":"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/end-user-flows/account-settings/by-management-api.mdx","sourceDirName":"end-user-flows/account-settings","slug":"/end-user-flows/account-settings/by-management-api","permalink":"/pt-BR/end-user-flows/account-settings/by-management-api","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/pt-BR/docusaurus-plugin-content-docs/current/end-user-flows/account-settings/by-management-api.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"docsSidebar","previous":{"title":"Configura\xe7\xf5es de conta","permalink":"/pt-BR/end-user-flows/account-settings/"},"next":{"title":"Configura\xe7\xf5es de conta pela Account API","permalink":"/pt-BR/end-user-flows/account-settings/by-account-api"}}');var r=o(86070),d=o(15658);const s={sidebar_position:1},n="Configura\xe7\xf5es de conta pela Management API",t={},c=[{value:"Integra\xe7\xf5es",id:"integra\xe7\xf5es",level:2},{value:"Arquitetura",id:"arquitetura",level:3},{value:"Diagrama de sequ\xeancia",id:"diagrama-de-sequ\xeancia",level:3},{value:"Integrar Management API ao aplicativo do lado do servidor",id:"integrar-management-api-ao-aplicativo-do-lado-do-servidor",level:3},{value:"APIs de Gerenciamento de Usu\xe1rios",id:"apis-de-gerenciamento-de-usu\xe1rios",level:2},{value:"Esquema de dados do usu\xe1rio",id:"esquema-de-dados-do-usu\xe1rio",level:3},{value:"APIs de Gerenciamento de perfil e identificadores do usu\xe1rio",id:"apis-de-gerenciamento-de-perfil-e-identificadores-do-usu\xe1rio",level:3},{value:"Verifica\xe7\xe3o de email e n\xfamero de telefone",id:"verifica\xe7\xe3o-de-email-e-n\xfamero-de-telefone",level:3},{value:"Gerenciamento de senha do usu\xe1rio",id:"gerenciamento-de-senha-do-usu\xe1rio",level:3},{value:"Gerenciamento de identidades sociais do usu\xe1rio",id:"gerenciamento-de-identidades-sociais-do-usu\xe1rio",level:3},{value:"Gerenciamento de identidades empresariais do usu\xe1rio",id:"gerenciamento-de-identidades-empresariais-do-usu\xe1rio",level:3},{value:"Gerenciamento de configura\xe7\xf5es de MFA do usu\xe1rio",id:"gerenciamento-de-configura\xe7\xf5es-de-mfa-do-usu\xe1rio",level:3},{value:"Exclus\xe3o de conta de usu\xe1rio",id:"exclus\xe3o-de-conta-de-usu\xe1rio",level:3}];function l(e){const i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",mermaid:"mermaid",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.header,{children:(0,r.jsx)(i.h1,{id:"configura\xe7\xf5es-de-conta-pela-management-api",children:"Configura\xe7\xf5es de conta pela Management API"})}),"\n",(0,r.jsx)(i.h2,{id:"integra\xe7\xf5es",children:"Integra\xe7\xf5es"}),"\n",(0,r.jsx)(i.p,{children:"Logto fornece v\xe1rias Management API para gerenciar contas de usu\xe1rio. Voc\xea pode usar essas APIs para construir uma p\xe1gina de configura\xe7\xf5es de conta de autoatendimento para usu\xe1rios finais."}),"\n",(0,r.jsx)(i.h3,{id:"arquitetura",children:"Arquitetura"}),"\n",(0,r.jsx)(i.mermaid,{value:"  graph TB\n    A[Usu\xe1rio] --\x3e B[Aplicativo cliente]\n    B --\x3e|Chamada de API de configura\xe7\xf5es de conta auto-hospedada|C[Aplicativo do lado do servidor]\n    C --\x3e|Chamada de Management API| D[Logto]"}),"\n",(0,r.jsxs)(i.ol,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Usu\xe1rio"}),": Usu\xe1rio final autenticado que precisa acessar e gerenciar suas configura\xe7\xf5es de conta."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Aplicativo cliente"}),": Seu aplicativo cliente que serve a p\xe1gina de configura\xe7\xf5es de conta para o usu\xe1rio."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Aplicativo do lado do servidor"}),": Aplicativo do lado do servidor que fornece a API de configura\xe7\xf5es de conta para o cliente. Interage com a Management API do Logto."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Logto"}),": Logto como o servi\xe7o de autentica\xe7\xe3o e autoriza\xe7\xe3o. Fornece a Management API para gerenciar contas de usu\xe1rio."]}),"\n"]}),"\n",(0,r.jsx)(i.h3,{id:"diagrama-de-sequ\xeancia",children:"Diagrama de sequ\xeancia"}),"\n",(0,r.jsx)(i.mermaid,{value:"  sequenceDiagram\n    autonumber\n    actor User as Usu\xe1rio\n    participant Client as Aplicativo cliente\n    participant Server as Aplicativo do lado do servidor\n    participant Logto as Logto\n\n    User ->> Client: Acessar aplicativo cliente\n    Client ->> Logto: POST /oidc/auth\n    User --\x3e> Logto: fazer login\n    Logto --\x3e> Client: Redirecionar para aplicativo cliente\n    Client ->> Logto: POST /oidc/token\n    Logto ->> Client: Token de acesso A\n    Client ->> Server: GET /account-settings (com token de acesso A)\n    Server ->> Logto: POST /oidc/token (com credenciais do cliente)\n    Logto ->> Server: Token de acesso B\n    Server ->> Logto: GET /api/users/{userId} (com token de acesso B)\n    Logto ->> Server: Detalhes do usu\xe1rio\n    Server ->> Client: Detalhes do usu\xe1rio"}),"\n",(0,r.jsxs)(i.ol,{children:["\n",(0,r.jsx)(i.li,{children:"O usu\xe1rio acessa o aplicativo cliente."}),"\n",(0,r.jsx)(i.li,{children:"O aplicativo cliente envia a solicita\xe7\xe3o de autentica\xe7\xe3o para o Logto e redireciona o usu\xe1rio para a p\xe1gina de login do Logto."}),"\n",(0,r.jsx)(i.li,{children:"O usu\xe1rio faz login no Logto."}),"\n",(0,r.jsx)(i.li,{children:"O usu\xe1rio autenticado \xe9 redirecionado de volta para o aplicativo cliente com o c\xf3digo de autoriza\xe7\xe3o."}),"\n",(0,r.jsx)(i.li,{children:"O aplicativo cliente solicita o token de acesso do Logto para o acesso \xe0 API de configura\xe7\xf5es de conta auto-hospedada."}),"\n",(0,r.jsx)(i.li,{children:"Logto concede o token de acesso ao aplicativo cliente."}),"\n",(0,r.jsx)(i.li,{children:"O aplicativo cliente envia a solicita\xe7\xe3o de configura\xe7\xf5es de conta para o aplicativo do lado do servidor com o token de acesso do usu\xe1rio."}),"\n",(0,r.jsx)(i.li,{children:"O aplicativo do lado do servidor verifica a identidade e permiss\xe3o do solicitante a partir do token de acesso do usu\xe1rio. Em seguida, solicita um token de acesso da Management API do Logto."}),"\n",(0,r.jsx)(i.li,{children:"Logto concede o token de acesso da Management API ao aplicativo do lado do servidor."}),"\n",(0,r.jsx)(i.li,{children:"O aplicativo do lado do servidor solicita os dados do usu\xe1rio do Logto usando o token de acesso da Management API."}),"\n",(0,r.jsx)(i.li,{children:"Logto verifica a identidade do servidor e a permiss\xe3o da Management API e retorna os dados do usu\xe1rio."}),"\n",(0,r.jsx)(i.li,{children:"O aplicativo do lado do servidor processa os dados do usu\xe1rio com base na permiss\xe3o do solicitante e retorna os detalhes da conta do usu\xe1rio para o aplicativo cliente."}),"\n"]}),"\n",(0,r.jsx)(i.h3,{id:"integrar-management-api-ao-aplicativo-do-lado-do-servidor",children:"Integrar Management API ao aplicativo do lado do servidor"}),"\n",(0,r.jsxs)(i.p,{children:["Confira a se\xe7\xe3o ",(0,r.jsx)(i.a,{href:"/integrate-logto/interact-with-management-api/",children:"Management API"})," para aprender como integrar as Management APIs com aplicativos do lado do servidor."]}),"\n",(0,r.jsx)(i.h2,{id:"apis-de-gerenciamento-de-usu\xe1rios",children:"APIs de Gerenciamento de Usu\xe1rios"}),"\n",(0,r.jsx)(i.h3,{id:"esquema-de-dados-do-usu\xe1rio",children:"Esquema de dados do usu\xe1rio"}),"\n",(0,r.jsxs)(i.p,{children:["Confira a se\xe7\xe3o ",(0,r.jsx)(i.a,{href:"/user-management/user-data/",children:"dados do usu\xe1rio e dados personalizados"})," para saber mais sobre o esquema de usu\xe1rio no Logto."]}),"\n",(0,r.jsx)(i.h3,{id:"apis-de-gerenciamento-de-perfil-e-identificadores-do-usu\xe1rio",children:"APIs de Gerenciamento de perfil e identificadores do usu\xe1rio"}),"\n",(0,r.jsx)(i.p,{children:"O perfil e os identificadores de um usu\xe1rio s\xe3o essenciais para o gerenciamento de usu\xe1rios. Voc\xea pode usar as seguintes APIs para gerenciar perfis e identificadores de usu\xe1rios."}),"\n",(0,r.jsxs)(i.table,{children:[(0,r.jsx)(i.thead,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.th,{children:"m\xe9todo"}),(0,r.jsx)(i.th,{children:"caminho"}),(0,r.jsx)(i.th,{children:"descri\xe7\xe3o"})]})}),(0,r.jsxs)(i.tbody,{children:[(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"GET"}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.a,{href:"https://openapi.logto.io/operation/operation-getuser",children:"/api/users/{userId}"})}),(0,r.jsx)(i.td,{children:"Obter detalhes do usu\xe1rio por ID do usu\xe1rio."})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"PATCH"}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.a,{href:"https://openapi.logto.io/operation/operation-updateuser",children:"/api/users/{userId}"})}),(0,r.jsx)(i.td,{children:"Atualizar detalhes do usu\xe1rio."})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"PATCH"}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.a,{href:"https://openapi.logto.io/operation/operation-updateuserprofile",children:"/api/users/{userId}/profile"})}),(0,r.jsx)(i.td,{children:"Atualizar campos do perfil do usu\xe1rio por ID do usu\xe1rio."})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"GET"}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.a,{href:"https://openapi.logto.io/operation/operation-listusercustomdata",children:"/api/users/{userId}/custom-data"})}),(0,r.jsx)(i.td,{children:"Obter dados personalizados do usu\xe1rio por ID do usu\xe1rio."})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"PATCH"}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.a,{href:"https://openapi.logto.io/operation/operation-updateusercustomdata",children:"/api/users/{userId}/custom-data"})}),(0,r.jsx)(i.td,{children:"Atualizar dados personalizados do usu\xe1rio por ID do usu\xe1rio."})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"PATCH"}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.a,{href:"https://openapi.logto.io/operation/operation-updateuserissuspended",children:"/api/users/{userId}/is-suspended"})}),(0,r.jsx)(i.td,{children:"Atualizar status de suspens\xe3o do usu\xe1rio por ID do usu\xe1rio."})]})]})]}),"\n",(0,r.jsx)(i.h3,{id:"verifica\xe7\xe3o-de-email-e-n\xfamero-de-telefone",children:"Verifica\xe7\xe3o de email e n\xfamero de telefone"}),"\n",(0,r.jsx)(i.p,{children:"No sistema Logto, tanto endere\xe7os de email quanto n\xfameros de telefone podem servir como identificadores de usu\xe1rio, tornando sua verifica\xe7\xe3o essencial. Para suportar isso, fornecemos um conjunto de APIs de c\xf3digo de verifica\xe7\xe3o para ajudar a verificar o email ou n\xfamero de telefone fornecido."}),"\n",(0,r.jsx)(i.admonition,{type:"note",children:(0,r.jsx)(i.p,{children:"Certifique-se de verificar o email ou n\xfamero de telefone antes de atualizar o perfil do usu\xe1rio com um novo email ou n\xfamero de telefone."})}),"\n",(0,r.jsxs)(i.table,{children:[(0,r.jsx)(i.thead,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.th,{children:"m\xe9todo"}),(0,r.jsx)(i.th,{children:"caminho"}),(0,r.jsx)(i.th,{children:"descri\xe7\xe3o"})]})}),(0,r.jsxs)(i.tbody,{children:[(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"POST"}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.a,{href:"https://openapi.logto.io/operation/operation-createverificationcode",children:"/api/verification/verification-codes"})}),(0,r.jsx)(i.td,{children:"Enviar c\xf3digo de verifica\xe7\xe3o de email ou n\xfamero de telefone."})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"POST"}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.a,{href:"https://openapi.logto.io/operation/operation-verifyverificationcode",children:"/api/verification/verification-codes/verify"})}),(0,r.jsx)(i.td,{children:"Verificar email ou n\xfamero de telefone por c\xf3digo de verifica\xe7\xe3o."})]})]})]}),"\n",(0,r.jsx)(i.h3,{id:"gerenciamento-de-senha-do-usu\xe1rio",children:"Gerenciamento de senha do usu\xe1rio"}),"\n",(0,r.jsxs)(i.table,{children:[(0,r.jsx)(i.thead,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.th,{children:"m\xe9todo"}),(0,r.jsx)(i.th,{children:"caminho"}),(0,r.jsx)(i.th,{children:"descri\xe7\xe3o"})]})}),(0,r.jsxs)(i.tbody,{children:[(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"POST"}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.a,{href:"https://openapi.logto.io/operation/operation-verifyuserpassword",children:"/api/users/{userId}/password/verify"})}),(0,r.jsx)(i.td,{children:"Verificar senha atual do usu\xe1rio por ID do usu\xe1rio."})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"PATCH"}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.a,{href:"https://openapi.logto.io/operation/operation-updateuserpassword",children:"/api/users/{userId}/password"})}),(0,r.jsx)(i.td,{children:"Atualizar senha do usu\xe1rio por ID do usu\xe1rio."})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"GET"}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.a,{href:"https://openapi.logto.io/operation/operation-getuserhaspassword",children:"/api/users/{userId}/has-password"})}),(0,r.jsx)(i.td,{children:"Verificar se o usu\xe1rio tem uma senha por ID do usu\xe1rio."})]})]})]}),"\n",(0,r.jsx)(i.admonition,{type:"note",children:(0,r.jsx)(i.p,{children:"Certifique-se de verificar a senha atual do usu\xe1rio antes de atualizar a senha do usu\xe1rio."})}),"\n",(0,r.jsx)(i.h3,{id:"gerenciamento-de-identidades-sociais-do-usu\xe1rio",children:"Gerenciamento de identidades sociais do usu\xe1rio"}),"\n",(0,r.jsxs)(i.table,{children:[(0,r.jsx)(i.thead,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.th,{children:"m\xe9todo"}),(0,r.jsx)(i.th,{children:"caminho"}),(0,r.jsx)(i.th,{children:"descri\xe7\xe3o"})]})}),(0,r.jsxs)(i.tbody,{children:[(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"GET"}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.a,{href:"https://openapi.logto.io/operation/operation-getuser",children:"/api/users/{userId}"})}),(0,r.jsxs)(i.td,{children:["Obter detalhes do usu\xe1rio por ID do usu\xe1rio. As identidades sociais podem ser encontradas no campo ",(0,r.jsx)(i.code,{children:"identities"}),"."]})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"POST"}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.a,{href:"https://openapi.logto.io/operation/operation-createuseridentity",children:"/api/users/{userId}/identities"})}),(0,r.jsx)(i.td,{children:"Vincular uma identidade social autenticada ao usu\xe1rio por ID do usu\xe1rio."})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"DELETE"}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.a,{href:"https://openapi.logto.io/operation/operation-deleteuseridentity",children:"/api/users/{userId}/identities"})}),(0,r.jsx)(i.td,{children:"Desvincular uma identidade social do usu\xe1rio por ID do usu\xe1rio."})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"PUT"}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.a,{href:"https://openapi.logto.io/operation/operation-replaceuseridentity",children:"/api/users/{userId}/identities"})}),(0,r.jsx)(i.td,{children:"Atualizar diretamente uma identidade social vinculada ao usu\xe1rio por ID do usu\xe1rio."})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"POST"}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.a,{href:"https://openapi.logto.io/operation/operation-createconnectorauthorizationuri",children:"/api/connectors/{connectorId}/authorization-uri"})}),(0,r.jsx)(i.td,{children:"Obter o URI de autoriza\xe7\xe3o para um provedor de identidade social. Use este URI para iniciar uma nova conex\xe3o de identidade social."})]})]})]}),"\n",(0,r.jsx)(i.mermaid,{value:"sequenceDiagram\n    autoNumber\n    participant User as Usu\xe1rio\n    participant Client as Aplicativo cliente\n    participant App as aplicativo do servidor\n    participant Logto as Logto\n    participant IdP as Provedor de identidade social\n\n    User ->> Client: Acessar aplicativo cliente e solicitar vincula\xe7\xe3o de identidade social\n    Client ->> App: Enviar solicita\xe7\xe3o para vincular identidade social\n    App ->> Logto: POST /api/connectors/{connectorId}/authorization-uri\n    Logto ->> App: URI de autoriza\xe7\xe3o\n    App ->> Client: Retornar URI de autoriza\xe7\xe3o\n    Client ->> IdP: Redirecionar para p\xe1gina de autoriza\xe7\xe3o do IdP\n    User --\x3e> IdP: Fazer login no IdP\n    IdP ->> Client: Redirecionar para aplicativo cliente com c\xf3digo de autoriza\xe7\xe3o\n    Client ->> Server: Solicita\xe7\xe3o de vincula\xe7\xe3o de identidade social, encaminhar resposta de autoriza\xe7\xe3o do IdP\n    Server ->> Logto: POST /api/users/{userId}/identities\n    Logto ->> IdP: Obter informa\xe7\xf5es do usu\xe1rio do IdP usando o c\xf3digo de autoriza\xe7\xe3o\n    IdP ->> Logto: Retornar informa\xe7\xf5es do usu\xe1rio"}),"\n",(0,r.jsxs)(i.ol,{children:["\n",(0,r.jsx)(i.li,{children:"O usu\xe1rio acessa o aplicativo cliente e solicita vincular uma identidade social."}),"\n",(0,r.jsx)(i.li,{children:"O aplicativo cliente envia uma solicita\xe7\xe3o ao servidor para vincular uma identidade social."}),"\n",(0,r.jsxs)(i.li,{children:["O servidor envia uma solicita\xe7\xe3o ao Logto para obter o URI de autoriza\xe7\xe3o para o provedor de identidade social. Voc\xea precisa fornecer seu pr\xf3prio par\xe2metro ",(0,r.jsx)(i.code,{children:"state"})," e ",(0,r.jsx)(i.code,{children:"redirect_uri"})," na solicita\xe7\xe3o. Certifique-se de registrar o ",(0,r.jsx)(i.code,{children:"redirect_uri"})," no provedor de identidade social."]}),"\n",(0,r.jsx)(i.li,{children:"Logto retorna o URI de autoriza\xe7\xe3o para o servidor."}),"\n",(0,r.jsx)(i.li,{children:"O servidor retorna o URI de autoriza\xe7\xe3o para o aplicativo cliente."}),"\n",(0,r.jsx)(i.li,{children:"O aplicativo cliente redireciona o usu\xe1rio para o URI de autoriza\xe7\xe3o do IdP."}),"\n",(0,r.jsx)(i.li,{children:"O usu\xe1rio faz login no IdP."}),"\n",(0,r.jsxs)(i.li,{children:["O IdP redireciona o usu\xe1rio de volta para o aplicativo cliente usando o ",(0,r.jsx)(i.code,{children:"redirect_uri"})," com o c\xf3digo de autoriza\xe7\xe3o."]}),"\n",(0,r.jsxs)(i.li,{children:["O aplicativo cliente valida o ",(0,r.jsx)(i.code,{children:"state"})," e encaminha a resposta de autoriza\xe7\xe3o do IdP para o servidor."]}),"\n",(0,r.jsx)(i.li,{children:"O servidor envia uma solicita\xe7\xe3o ao Logto para vincular a identidade social ao usu\xe1rio."}),"\n",(0,r.jsx)(i.li,{children:"Logto obt\xe9m as informa\xe7\xf5es do usu\xe1rio do IdP usando o c\xf3digo de autoriza\xe7\xe3o."}),"\n",(0,r.jsx)(i.li,{children:"O IdP retorna as informa\xe7\xf5es do usu\xe1rio para o Logto e o Logto vincula a identidade social ao usu\xe1rio."}),"\n"]}),"\n",(0,r.jsxs)(i.admonition,{type:"note",children:[(0,r.jsx)(i.p,{children:"Existem algumas limita\xe7\xf5es a serem consideradas ao vincular novas identidades sociais a um usu\xe1rio:"}),(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"A Management API n\xe3o possui nenhum contexto de sess\xe3o, qualquer conector social que exija uma sess\xe3o ativa para manter com seguran\xe7a o estado de autentica\xe7\xe3o social n\xe3o pode ser vinculado via Management API. Conectores n\xe3o suportados incluem apple, OIDC padr\xe3o e conector OAuth 2.0 padr\xe3o."}),"\n",(0,r.jsxs)(i.li,{children:["Pelo mesmo motivo, o Logto n\xe3o pode verificar o par\xe2metro ",(0,r.jsx)(i.code,{children:"state"})," na resposta de autoriza\xe7\xe3o. Certifique-se de armazenar o par\xe2metro ",(0,r.jsx)(i.code,{children:"state"})," no seu aplicativo cliente e valid\xe1-lo quando a resposta de autoriza\xe7\xe3o for recebida."]}),"\n",(0,r.jsxs)(i.li,{children:["Voc\xea precisa registrar o ",(0,r.jsx)(i.code,{children:"redirect_uri"})," no provedor de identidade social com anteced\xeancia. Caso contr\xe1rio, o IdP social n\xe3o redirecionar\xe1 o usu\xe1rio de volta para o seu aplicativo cliente. Seu IdP social deve aceitar mais de um ",(0,r.jsx)(i.code,{children:"redirect_uri"})," de retorno, um para login do usu\xe1rio, outro para sua pr\xf3pria p\xe1gina de vincula\xe7\xe3o de perfil."]}),"\n"]})]}),"\n",(0,r.jsx)(i.h3,{id:"gerenciamento-de-identidades-empresariais-do-usu\xe1rio",children:"Gerenciamento de identidades empresariais do usu\xe1rio"}),"\n",(0,r.jsxs)(i.table,{children:[(0,r.jsx)(i.thead,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.th,{children:"m\xe9todo"}),(0,r.jsx)(i.th,{children:"caminho"}),(0,r.jsx)(i.th,{children:"descri\xe7\xe3o"})]})}),(0,r.jsx)(i.tbody,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"GET"}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.a,{href:"https://openapi.logto.io/operation/operation-getuser",children:"/api/users/{userId}?includeSsoIdentities=true"})}),(0,r.jsxs)(i.td,{children:["Obter detalhes do usu\xe1rio por ID do usu\xe1rio. As identidades empresariais podem ser encontradas no campo ",(0,r.jsx)(i.code,{children:"ssoIdentities"}),". Adicione o par\xe2metro de consulta ",(0,r.jsx)(i.code,{children:"includeSsoIdentities=true"})," \xe0 API de detalhes do usu\xe1rio para inclu\xed-las."]})]})})]}),"\n",(0,r.jsx)(i.p,{children:"Atualmente, a Management API n\xe3o suporta vincular ou desvincular identidades empresariais a um usu\xe1rio. Voc\xea s\xf3 pode exibir as identidades empresariais vinculadas a um usu\xe1rio."}),"\n",(0,r.jsx)(i.h3,{id:"gerenciamento-de-configura\xe7\xf5es-de-mfa-do-usu\xe1rio",children:"Gerenciamento de configura\xe7\xf5es de MFA do usu\xe1rio"}),"\n",(0,r.jsxs)(i.table,{children:[(0,r.jsx)(i.thead,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.th,{children:"m\xe9todo"}),(0,r.jsx)(i.th,{children:"caminho"}),(0,r.jsx)(i.th,{children:"descri\xe7\xe3o"})]})}),(0,r.jsxs)(i.tbody,{children:[(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"GET"}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.a,{href:"https://openapi.logto.io/operation/operation-listusermfaverifications",children:"/api/users/{userId}/mfa-verifications"})}),(0,r.jsx)(i.td,{children:"Obter configura\xe7\xf5es de MFA do usu\xe1rio por ID do usu\xe1rio."})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"POST"}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.a,{href:"https://openapi.logto.io/operation/operation-createusermfaverification",children:"/api/users/{userId}/mfa-verifications"})}),(0,r.jsx)(i.td,{children:"Configurar uma verifica\xe7\xe3o de MFA do usu\xe1rio por ID do usu\xe1rio."})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"DELETE"}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.a,{href:"https://openapi.logto.io/operation/operation-deleteusermfaverification",children:"/api/users/{userId}/mfa-verifications/{verificationId}"})}),(0,r.jsx)(i.td,{children:"Excluir uma verifica\xe7\xe3o de MFA do usu\xe1rio por ID."})]})]})]}),"\n",(0,r.jsx)(i.h3,{id:"exclus\xe3o-de-conta-de-usu\xe1rio",children:"Exclus\xe3o de conta de usu\xe1rio"}),"\n",(0,r.jsxs)(i.table,{children:[(0,r.jsx)(i.thead,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.th,{children:"m\xe9todo"}),(0,r.jsx)(i.th,{children:"caminho"}),(0,r.jsx)(i.th,{children:"descri\xe7\xe3o"})]})}),(0,r.jsx)(i.tbody,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"DELETE"}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.a,{href:"https://openapi.logto.io/operation/operation-deleteuser",children:"/api/users/{userId}"})}),(0,r.jsx)(i.td,{children:"Excluir um usu\xe1rio por ID do usu\xe1rio."})]})})]})]})}function u(e={}){const{wrapper:i}={...(0,d.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},15658:(e,i,o)=>{o.d(i,{R:()=>s,x:()=>n});var a=o(30758);const r={},d=a.createContext(r);function s(e){const i=a.useContext(d);return a.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function n(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(d.Provider,{value:i},e.children)}}}]);