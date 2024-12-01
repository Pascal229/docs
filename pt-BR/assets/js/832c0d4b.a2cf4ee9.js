"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[88859],{58166:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>t,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"developers/user-impersonation","title":"Imita\xe7\xe3o de usu\xe1rio","description":"Imagine Sarah, uma engenheira de suporte na TechCorp, recebe um ticket urgente de Alex, um cliente que n\xe3o consegue acessar um recurso cr\xedtico. Para diagnosticar e resolver o problema de forma eficiente, Sarah precisa ver exatamente o que Alex v\xea no sistema. \xc9 aqui que o recurso de imita\xe7\xe3o de usu\xe1rio do Logto \xe9 \xfatil.","source":"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/developers/user-impersonation.mdx","sourceDirName":"developers","slug":"/developers/user-impersonation","permalink":"/pt-BR/developers/user-impersonation","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/pt-BR/docusaurus-plugin-content-docs/current/developers/user-impersonation.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"id":"user-impersonation","title":"Imita\xe7\xe3o de usu\xe1rio","sidebar_label":"Imita\xe7\xe3o de usu\xe1rio","sidebar_position":3},"sidebar":"docsSidebar","previous":{"title":"Criar um script de reivindica\xe7\xf5es de token personalizadas","permalink":"/pt-BR/developers/custom-token-claims/create-script"},"next":{"title":"Chaves de assinatura","permalink":"/pt-BR/developers/signing-keys"}}');var r=n(86070),s=n(15658);const t={id:"user-impersonation",title:"Imita\xe7\xe3o de usu\xe1rio",sidebar_label:"Imita\xe7\xe3o de usu\xe1rio",sidebar_position:3},i="Imita\xe7\xe3o de usu\xe1rio",c={},d=[{value:"Como funciona?",id:"como-funciona",level:2},{value:"Etapa 1: Solicitando imita\xe7\xe3o",id:"etapa-1-solicitando-imita\xe7\xe3o",level:3},{value:"Etapa 2: Obtendo um token de sujeito",id:"etapa-2-obtendo-um-token-de-sujeito",level:3},{value:"Etapa 3: Trocando o token de sujeito por um token de acesso",id:"etapa-3-trocando-o-token-de-sujeito-por-um-token-de-acesso",level:3},{value:"Exemplo de uso",id:"exemplo-de-uso",level:2},{value:"Reivindica\xe7\xe3o <code>act</code>",id:"reivindica\xe7\xe3o-act",level:2},{value:"Personalizando reivindica\xe7\xf5es de token",id:"personalizando-reivindica\xe7\xf5es-de-token",level:2}];function p(e){const o={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",mermaid:"mermaid",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.header,{children:(0,r.jsx)(o.h1,{id:"imita\xe7\xe3o-de-usu\xe1rio",children:"Imita\xe7\xe3o de usu\xe1rio"})}),"\n",(0,r.jsx)(o.p,{children:"Imagine Sarah, uma engenheira de suporte na TechCorp, recebe um ticket urgente de Alex, um cliente que n\xe3o consegue acessar um recurso cr\xedtico. Para diagnosticar e resolver o problema de forma eficiente, Sarah precisa ver exatamente o que Alex v\xea no sistema. \xc9 aqui que o recurso de imita\xe7\xe3o de usu\xe1rio do Logto \xe9 \xfatil."}),"\n",(0,r.jsx)(o.p,{children:"A imita\xe7\xe3o de usu\xe1rio permite que usu\xe1rios autorizados como Sarah atuem temporariamente em nome de outros usu\xe1rios como Alex dentro do sistema. Esse recurso poderoso \xe9 inestim\xe1vel para solu\xe7\xe3o de problemas, fornecimento de suporte ao cliente e execu\xe7\xe3o de tarefas administrativas."}),"\n",(0,r.jsx)(o.h2,{id:"como-funciona",children:"Como funciona?"}),"\n",(0,r.jsx)(o.mermaid,{value:"sequenceDiagram\n    participant Sarah as Aplicativo da Sarah\n    participant TechCorp as Servidor da TechCorp\n    participant Logto as Logto Management API\n    participant LogtoToken as Endpoint de token do Logto\n\n    Sarah->>TechCorp: POST /api/request-impersonation\n    Note over Sarah,TechCorp: Solicita\xe7\xe3o para imitar Alex\n\n    TechCorp->>Logto: POST /api/subject-tokens\n    Note over TechCorp,Logto: Solicita\xe7\xe3o de token de sujeito para Alex\n\n    Logto--\x3e>TechCorp: Retorna token de sujeito\n    TechCorp--\x3e>Sarah: Retorna token de sujeito\n\n    Sarah->>LogtoToken: POST /oidc/token\n    Note over Sarah,LogtoToken: Troca de token de sujeito por token de acesso\n\n    LogtoToken--\x3e>Sarah: Retorna token de acesso\n    Note over Sarah: Sarah agora pode acessar recursos como Alex"}),"\n",(0,r.jsx)(o.p,{children:"O processo de imita\xe7\xe3o envolve tr\xeas etapas principais:"}),"\n",(0,r.jsxs)(o.ol,{children:["\n",(0,r.jsx)(o.li,{children:"Sarah solicita a imita\xe7\xe3o atrav\xe9s do servidor backend da TechCorp"}),"\n",(0,r.jsx)(o.li,{children:"O servidor da TechCorp obt\xe9m um token de sujeito da Logto Management API"}),"\n",(0,r.jsx)(o.li,{children:"O aplicativo de Sarah troca esse token de sujeito por um token de acesso"}),"\n"]}),"\n",(0,r.jsx)(o.p,{children:"Vamos ver como Sarah pode usar esse recurso para ajudar Alex."}),"\n",(0,r.jsx)(o.h3,{id:"etapa-1-solicitando-imita\xe7\xe3o",children:"Etapa 1: Solicitando imita\xe7\xe3o"}),"\n",(0,r.jsx)(o.p,{children:"Primeiro, o aplicativo de suporte de Sarah precisa solicitar a imita\xe7\xe3o do servidor backend da TechCorp."}),"\n",(0,r.jsx)(o.p,{children:(0,r.jsx)(o.strong,{children:"Solicita\xe7\xe3o (aplicativo de Sarah para o servidor da TechCorp)"})}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-bash",children:'POST /api/request-impersonation HTTP/1.1\nHost: api.techcorp.com\nAuthorization: Bearer <Sarah\'s_access_token>\nContent-Type: application/json\n\n{\n  "userId": "alex123",\n  "reason": "Investigando problema de acesso ao recurso",\n  "ticketId": "TECH-1234"\n}\n'})}),"\n",(0,r.jsx)(o.p,{children:"Nesta API, o backend deve realizar verifica\xe7\xf5es de autoriza\xe7\xe3o adequadas para garantir que Sarah tenha as permiss\xf5es necess\xe1rias para imitar Alex."}),"\n",(0,r.jsx)(o.h3,{id:"etapa-2-obtendo-um-token-de-sujeito",children:"Etapa 2: Obtendo um token de sujeito"}),"\n",(0,r.jsxs)(o.p,{children:["O servidor da TechCorp, ap\xf3s validar a solicita\xe7\xe3o de Sarah, chamar\xe1 a ",(0,r.jsx)(o.a,{href:"/integrate-logto/interact-with-management-api",children:"Management API"})," do Logto para obter um token de sujeito."]}),"\n",(0,r.jsx)(o.p,{children:(0,r.jsx)(o.strong,{children:"Solicita\xe7\xe3o (servidor da TechCorp para a Management API do Logto)"})}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-bash",children:'POST /api/subject-tokens HTTP/1.1\nHost: techcorp.logto.app\nAuthorization: Bearer <TechCorp_m2m_access_token>\nContent-Type: application/json\n\n{\n  "userId": "alex123",\n  "context": {\n    "ticketId": "TECH-1234",\n    "reason": "Problema de acesso ao recurso",\n    "supportEngineerId": "sarah789"\n  }\n}\n'})}),"\n",(0,r.jsx)(o.p,{children:(0,r.jsx)(o.strong,{children:"Resposta (Logto para o servidor da TechCorp)"})}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-json",children:'{\n  "subjectToken": "sub_7h32jf8sK3j2",\n  "expiresIn": 600\n}\n'})}),"\n",(0,r.jsx)(o.p,{children:"O servidor da TechCorp deve ent\xe3o retornar esse token de sujeito para o aplicativo de Sarah."}),"\n",(0,r.jsx)(o.p,{children:(0,r.jsx)(o.strong,{children:"Resposta (servidor da TechCorp para o aplicativo de Sarah)"})}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-json",children:'{\n  "subjectToken": "sub_7h32jf8sK3j2",\n  "expiresIn": 600\n}\n'})}),"\n",(0,r.jsx)(o.h3,{id:"etapa-3-trocando-o-token-de-sujeito-por-um-token-de-acesso",children:"Etapa 3: Trocando o token de sujeito por um token de acesso"}),"\n",(0,r.jsx)(o.p,{children:"Agora, o aplicativo de Sarah troca esse token de sujeito por um token de acesso representando Alex, especificando o recurso onde o token ser\xe1 usado."}),"\n",(0,r.jsx)(o.p,{children:(0,r.jsx)(o.strong,{children:"Solicita\xe7\xe3o (aplicativo de Sarah para o endpoint de token do Logto)"})}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-bash",children:"POST /oidc/token HTTP/1.1\nHost: techcorp.logto.app\nContent-Type: application/x-www-form-urlencoded\n\ngrant_type=urn:ietf:params:oauth:grant-type:token-exchange\n&client_id=techcorp_support_app\n&scope=resource:read\n&subject_token=alx_7h32jf8sK3j2\n&subject_token_type=urn:ietf:params:oauth:token-type:access_token\n&resource=https://api.techcorp.com/customer-data\n"})}),"\n",(0,r.jsx)(o.p,{children:(0,r.jsx)(o.strong,{children:"Resposta (Logto para o aplicativo de Sarah)"})}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-json",children:'{\n  "access_token": "eyJhbG...<truncated>",\n  "issued_token_type": "urn:ietf:params:oauth:token-type:access_token",\n  "token_type": "Bearer",\n  "expires_in": 3600,\n  "scope": "resource:read"\n}\n'})}),"\n",(0,r.jsxs)(o.p,{children:["O ",(0,r.jsx)(o.code,{children:"access_token"})," retornado ser\xe1 vinculado ao recurso especificado, garantindo que ele s\xf3 possa ser usado com a API de dados do cliente da TechCorp."]}),"\n",(0,r.jsx)(o.h2,{id:"exemplo-de-uso",children:"Exemplo de uso"}),"\n",(0,r.jsx)(o.p,{children:"Veja como Sarah pode usar isso em um aplicativo de suporte Node.js:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-jsx",children:"interface ImpersonationResponse {\n  subjectToken: string;\n  expiresIn: number;\n}\n\ninterface TokenExchangeResponse {\n  access_token: string;\n  issued_token_type: string;\n  token_type: string;\n  expires_in: number;\n  scope: string;\n}\n\nasync function impersonateUser(\n  userId: string,\n  clientId: string,\n  ticketId: string,\n  resource: string\n): Promise<string> {\n  try {\n    // Etapa 1 e 2: Solicitar imita\xe7\xe3o e obter token de sujeito\n    const impersonationResponse = await fetch(\n      'https://api.techcorp.com/api/request-impersonation',\n      {\n        method: 'POST',\n        headers: {\n          Authorization: \"Bearer <Sarah's_access_token>\",\n          'Content-Type': 'application/json',\n        },\n        body: JSON.stringify({\n          userId,\n          reason: 'Investigando problema de acesso ao recurso',\n          ticketId,\n        }),\n      }\n    );\n\n    if (!impersonationResponse.ok) {\n      throw new Error(`Erro HTTP ocorreu. Status: ${impersonationResponse.status}`);\n    }\n\n    const { subjectToken } = (await impersonationResponse.json()) as ImpersonationResponse;\n\n    // Etapa 3: Trocar token de sujeito por token de acesso\n    const tokenExchangeBody = new URLSearchParams({\n      grant_type: 'urn:ietf:params:oauth:grant-type:token-exchange',\n      client_id: clientId,\n      scope: 'openid profile resource.read',\n      subject_token: subjectToken,\n      subject_token_type: 'urn:ietf:params:oauth:token-type:access_token',\n      resource: resource,\n    });\n\n    const tokenExchangeResponse = await fetch('https://techcorp.logto.app/oidc/token', {\n      method: 'POST',\n      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },\n      body: tokenExchangeBody,\n    });\n\n    if (!tokenExchangeResponse.ok) {\n      throw new Error(`Erro HTTP! status: ${tokenExchangeResponse.status}`);\n    }\n\n    const tokenData = (await tokenExchangeResponse.json()) as TokenExchangeResponse;\n    return tokenData.access_token;\n  } catch (error) {\n    console.error('Falha na imita\xe7\xe3o:', error);\n    throw error;\n  }\n}\n\n// Sarah usa esta fun\xe7\xe3o para imitar Alex\nasync function performImpersonation(): Promise<void> {\n  try {\n    const accessToken = await impersonateUser(\n      'alex123',\n      'techcorp_support_app',\n      'TECH-1234',\n      'https://api.techcorp.com/customer-data'\n    );\n    console.log('Token de acesso de imita\xe7\xe3o para Alex:', accessToken);\n  } catch (error) {\n    console.error('Falha ao realizar imita\xe7\xe3o:', error);\n  }\n}\n\n// Executar a imita\xe7\xe3o\nvoid performImpersonation()\n"})}),"\n",(0,r.jsx)(o.admonition,{type:"note",children:(0,r.jsxs)(o.ol,{children:["\n",(0,r.jsx)(o.li,{children:"O token de sujeito \xe9 de curta dura\xe7\xe3o e para uso \xfanico."}),"\n",(0,r.jsxs)(o.li,{children:["O token de acesso de imita\xe7\xe3o n\xe3o vem com um ",(0,r.jsx)(o.a,{href:"https://auth.wiki/refresh-token",children:"token de atualiza\xe7\xe3o"}),". Sarah precisar\xe1 repetir esse processo se o token expirar antes de resolver o problema de Alex."]}),"\n",(0,r.jsx)(o.li,{children:"O servidor backend da TechCorp deve implementar verifica\xe7\xf5es de autoriza\xe7\xe3o adequadas para garantir que apenas a equipe de suporte autorizada, como Sarah, possa solicitar imita\xe7\xe3o."}),"\n"]})}),"\n",(0,r.jsxs)(o.h2,{id:"reivindica\xe7\xe3o-act",children:["Reivindica\xe7\xe3o ",(0,r.jsx)(o.code,{children:"act"})]}),"\n",(0,r.jsxs)(o.p,{children:["Ao usar o fluxo de troca de token para imita\xe7\xe3o, o token de acesso emitido pode incluir uma reivindica\xe7\xe3o adicional ",(0,r.jsx)(o.code,{children:"act"}),' (ator). Esta reivindica\xe7\xe3o representa a identidade da "parte atuante" - em nosso exemplo, Sarah, que est\xe1 realizando a imita\xe7\xe3o.']}),"\n",(0,r.jsxs)(o.p,{children:["Para incluir a reivindica\xe7\xe3o ",(0,r.jsx)(o.code,{children:"act"}),", o aplicativo de Sarah precisa fornecer um ",(0,r.jsx)(o.code,{children:"actor_token"})," na solicita\xe7\xe3o de troca de token. Este token deve ser um token de acesso v\xe1lido para Sarah com o escopo ",(0,r.jsx)(o.code,{children:"openid"}),". Veja como inclu\xed-lo na solicita\xe7\xe3o de troca de token:"]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-bash",children:"POST /oidc/token HTTP/1.1\nHost: techcorp.logto.app\nContent-Type: application/x-www-form-urlencoded\n\ngrant_type=urn:ietf:params:oauth:grant-type:token-exchange\n&client_id=techcorp_support_app\n&scope=resource:read\n&subject_token=alx_7h32jf8sK3j2\n&subject_token_type=urn:ietf:params:oauth:token-type:access_token\n&actor_token=sarah_access_token\n&actor_token_type=urn:ietf:params:oauth:token-type:access_token\n&resource=https://api.techcorp.com/customer-data\n"})}),"\n",(0,r.jsxs)(o.p,{children:["Se um ",(0,r.jsx)(o.code,{children:"actor_token"})," for fornecido, o token de acesso resultante conter\xe1 uma reivindica\xe7\xe3o ",(0,r.jsx)(o.code,{children:"act"})," assim:"]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-json",children:'{\n  "aud": "https://api.techcorp.com",\n  "iss": "https://techcorp.logto.app",\n  "exp": 1443904177,\n  "sub": "alex123",\n  "act": {\n    "sub": "sarah789"\n  }\n}\n'})}),"\n",(0,r.jsxs)(o.p,{children:["Esta reivindica\xe7\xe3o ",(0,r.jsx)(o.code,{children:"act"})," indica claramente que Sarah (sarah789) est\xe1 agindo em nome de Alex (alex123). A reivindica\xe7\xe3o ",(0,r.jsx)(o.code,{children:"act"})," pode ser \xfatil para auditoria e rastreamento de a\xe7\xf5es de imita\xe7\xe3o."]}),"\n",(0,r.jsx)(o.h2,{id:"personalizando-reivindica\xe7\xf5es-de-token",children:"Personalizando reivindica\xe7\xf5es de token"}),"\n",(0,r.jsxs)(o.p,{children:["Logto permite que voc\xea ",(0,r.jsx)(o.a,{href:"/developers/custom-token-claims",children:"personalize as reivindica\xe7\xf5es de token"})," para tokens de imita\xe7\xe3o. Isso pode ser \xfatil para adicionar contexto ou metadados adicionais ao processo de imita\xe7\xe3o, como o motivo da imita\xe7\xe3o ou o ticket de suporte associado."]}),"\n",(0,r.jsxs)(o.p,{children:["Quando o servidor da TechCorp solicita um token de sujeito da Logto Management API, ele pode incluir um objeto ",(0,r.jsx)(o.code,{children:"context"}),":"]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-json",children:'{\n  "userId": "alex123",\n  "context": {\n    "ticketId": "TECH-1234",\n    "reason": "Problema de acesso ao recurso",\n    "supportEngineerId": "sarah789"\n  }\n}\n'})}),"\n",(0,r.jsxs)(o.p,{children:["Este ",(0,r.jsx)(o.a,{href:"/developers/custom-token-claims/create-script#context-only-available-for-user-access-token",children:"contexto"})," pode ent\xe3o ser usado em uma fun\xe7\xe3o ",(0,r.jsx)(o.code,{children:"getCustomJwtClaims()"})," para adicionar reivindica\xe7\xf5es espec\xedficas ao token de acesso final. Veja um exemplo de como isso pode ser implementado:"]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-tsx",children:"const getCustomJwtClaims = async ({ token, context, environmentVariables }) => {\n  if (context.grant?.type === 'urn:ietf:params:oauth:grant-type:token-exchange') {\n    const { ticketId, reason, supportEngineerId } = context.grant.subjectTokenContext;\n    return {\n      impersonation_context: {\n        ticket_id: ticketId,\n        reason: reason,\n        support_engineer: supportEngineerId,\n      },\n    };\n  }\n  return {};\n};\n"})}),"\n",(0,r.jsx)(o.p,{children:"O token de acesso resultante que Sarah recebe pode parecer assim:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-json",children:'{\n  "sub": "alex123",\n  "aud": "https://api.techcorp.com/customer-data",\n  "impersonation_context": {\n    "ticket_id": "TECH-1234",\n    "reason": "Problema de acesso ao recurso",\n    "support_engineer": "sarah789"\n  }\n  // ... outras reivindica\xe7\xf5es padr\xe3o\n}\n'})}),"\n",(0,r.jsx)(o.p,{children:"Ao personalizar as reivindica\xe7\xf5es de token de acesso dessa forma, a TechCorp pode incluir informa\xe7\xf5es valiosas sobre o contexto de imita\xe7\xe3o, facilitando a auditoria e o entendimento das atividades de imita\xe7\xe3o em seu sistema."}),"\n",(0,r.jsx)(o.admonition,{type:"note",children:(0,r.jsx)(o.p,{children:"Tenha cuidado ao adicionar reivindica\xe7\xf5es personalizadas aos seus tokens. Evite incluir informa\xe7\xf5es sens\xedveis que possam representar riscos de seguran\xe7a se o token for interceptado ou vazado. Os JWTs s\xe3o assinados, mas n\xe3o criptografados, portanto, as reivindica\xe7\xf5es s\xe3o vis\xedveis para qualquer pessoa com acesso ao token."})})]})}function l(e={}){const{wrapper:o}={...(0,s.R)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},15658:(e,o,n)=>{n.d(o,{R:()=>t,x:()=>i});var a=n(30758);const r={},s=a.createContext(r);function t(e){const o=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),a.createElement(s.Provider,{value:o},e.children)}}}]);