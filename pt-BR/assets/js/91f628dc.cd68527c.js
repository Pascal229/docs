"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[40448],{69927:(e,o,i)=>{i.d(o,{Ay:()=>t,RM:()=>n});var s=i(86070),r=i(15658);const n=[];function d(e){const o={a:"a",admonition:"admonition",p:"p",...(0,r.R)(),...e.components};return(0,s.jsx)(o.admonition,{type:"tip",children:(0,s.jsxs)(o.p,{children:["Neste guia, assumimos que voc\xea tem conhecimento b\xe1sico sobre Conectores (Connectors) do Logto. Se n\xe3o tiver, confira o guia ",(0,s.jsx)(o.a,{href:"/connectors",children:"Configurar conectores"})," para come\xe7ar."]})})}function t(e={}){const{wrapper:o}={...(0,r.R)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},27555:(e,o,i)=>{i.r(o),i.d(o,{assets:()=>a,contentTitle:()=>c,default:()=>p,frontMatter:()=>t,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"integrations/social/oidc/README","title":"Configurar login social com OpenID Connect (OIDC)","description":"O conector oficial do Logto para o protocolo OpenID Connect (OIDC).","source":"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/integrations/social/oidc/README.mdx","sourceDirName":"integrations/social/oidc","slug":"/integrations/oidc","permalink":"/pt-BR/integrations/oidc","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/pt-BR/docusaurus-plugin-content-docs/current/integrations/social/oidc/README.mdx","tags":[],"version":"current","frontMatter":{"slug":"/integrations/oidc","sidebar_label":"OIDC (Social)","sidebar_custom_props":{"description":"OpenID Connect 1.0 \xe9 uma camada de identidade simples sobre o protocolo OAuth 2.0."}},"sidebar":"integrationsSidebar","previous":{"title":"OAuth 2.0 (Social)","permalink":"/pt-BR/integrations/oauth2"},"next":{"title":"WeChat (Native)","permalink":"/pt-BR/integrations/wechat-native"}}');var r=i(86070),n=i(15658),d=i(69927);const t={slug:"/integrations/oidc",sidebar_label:"OIDC (Social)",sidebar_custom_props:{description:"OpenID Connect 1.0 \xe9 uma camada de identidade simples sobre o protocolo OAuth 2.0."}},c="Configurar login social com OpenID Connect (OIDC)",a={},l=[...d.RM,{value:"Introdu\xe7\xe3o",id:"introdu\xe7\xe3o",level:2},{value:"Crie seu aplicativo OIDC",id:"crie-seu-aplicativo-oidc",level:2},{value:"Configure seu conector",id:"configure-seu-conector",level:2},{value:"Tipos de configura\xe7\xe3o",id:"tipos-de-configura\xe7\xe3o",level:2}];function u(e){const o={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.header,{children:(0,r.jsx)(o.h1,{id:"configurar-login-social-com-openid-connect-oidc",children:"Configurar login social com OpenID Connect (OIDC)"})}),"\n",(0,r.jsx)(o.p,{children:"O conector oficial do Logto para o protocolo OpenID Connect (OIDC)."}),"\n",(0,r.jsx)(d.Ay,{}),"\n",(0,r.jsx)(o.h2,{id:"introdu\xe7\xe3o",children:"Introdu\xe7\xe3o"}),"\n",(0,r.jsx)(o.p,{children:"O conector OIDC permite a conex\xe3o do Logto a um provedor de identidade social arbitr\xe1rio que suporta o protocolo OIDC."}),"\n",(0,r.jsxs)(o.blockquote,{children:["\n",(0,r.jsxs)(o.p,{children:["\u2139\ufe0f ",(0,r.jsx)(o.strong,{children:"Nota"})]}),"\n",(0,r.jsx)(o.p,{children:"O conector OIDC \xe9 um tipo especial de conector no Logto, voc\xea pode adicionar alguns conectores baseados em OIDC."}),"\n"]}),"\n",(0,r.jsx)(o.h2,{id:"crie-seu-aplicativo-oidc",children:"Crie seu aplicativo OIDC"}),"\n",(0,r.jsx)(o.p,{children:"Quando voc\xea abre esta p\xe1gina, acreditamos que voc\xea j\xe1 sabe qual provedor de identidade social deseja conectar. A primeira coisa a fazer \xe9 confirmar que o provedor de identidade suporta o protocolo OIDC, que \xe9 um pr\xe9-requisito para configurar um conector v\xe1lido. Em seguida, siga as instru\xe7\xf5es do provedor de identidade para registrar e criar o aplicativo relevante para autoriza\xe7\xe3o OIDC."}),"\n",(0,r.jsx)(o.h2,{id:"configure-seu-conector",children:"Configure seu conector"}),"\n",(0,r.jsx)(o.p,{children:'N\xf3s SOMENTE suportamos o tipo de concess\xe3o "Authorization Code" por quest\xf5es de seguran\xe7a e ele se encaixa perfeitamente no cen\xe1rio do Logto.'}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.code,{children:"clientId"})," e ",(0,r.jsx)(o.code,{children:"clientSecret"})," podem ser encontrados na p\xe1gina de detalhes dos seus aplicativos OIDC."]}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.em,{children:"clientId"}),": O ID do cliente \xe9 um identificador \xfanico que identifica o aplicativo cliente durante o registro com o servidor de autoriza\xe7\xe3o. Este ID \xe9 usado pelo servidor de autoriza\xe7\xe3o para verificar a identidade do aplicativo cliente e associar quaisquer tokens de acesso autorizados a esse aplicativo cliente espec\xedfico."]}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.em,{children:"clientSecret"}),": O segredo do cliente \xe9 uma chave confidencial emitida para o aplicativo cliente pelo servidor de autoriza\xe7\xe3o durante o registro. O aplicativo cliente usa essa chave secreta para se autenticar com o servidor de autoriza\xe7\xe3o ao solicitar tokens de acesso. O segredo do cliente \xe9 considerado informa\xe7\xe3o confidencial e deve ser mantido seguro o tempo todo."]}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.em,{children:"tokenEndpointAuthMethod"}),": O m\xe9todo de autentica\xe7\xe3o do endpoint de token \xe9 usado pelo aplicativo cliente para se autenticar com o servidor de autoriza\xe7\xe3o ao solicitar tokens de acesso. Para descobrir m\xe9todos suportados, consulte o campo ",(0,r.jsx)(o.code,{children:"token_endpoint_auth_methods_supported"})," dispon\xedvel no endpoint de descoberta do OpenID Connect do provedor de servi\xe7os OAuth 2.0, ou consulte a documenta\xe7\xe3o relevante fornecida pelo provedor de servi\xe7os OAuth 2.0."]}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.em,{children:"clientSecretJwtSigningAlgorithm (Opcional)"}),": Apenas necess\xe1rio quando ",(0,r.jsx)(o.code,{children:"tokenEndpointAuthMethod"})," \xe9 ",(0,r.jsx)(o.code,{children:"client_secret_jwt"}),". O algoritmo de assinatura JWT do segredo do cliente \xe9 usado pelo aplicativo cliente para assinar o JWT que \xe9 enviado ao servidor de autoriza\xe7\xe3o durante a solicita\xe7\xe3o de token."]}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.em,{children:"scope"}),': O par\xe2metro de escopo \xe9 usado para especificar o conjunto de recursos e permiss\xf5es que o aplicativo cliente est\xe1 solicitando acesso. O par\xe2metro de escopo \xe9 tipicamente definido como uma lista de valores separados por espa\xe7o que representam permiss\xf5es espec\xedficas. Por exemplo, um valor de escopo de "read write" pode indicar que o aplicativo cliente est\xe1 solicitando acesso de leitura e escrita aos dados de um usu\xe1rio.']}),"\n",(0,r.jsxs)(o.p,{children:["Espera-se que voc\xea encontre ",(0,r.jsx)(o.code,{children:"authorizationEndpoint"}),", ",(0,r.jsx)(o.code,{children:"tokenEndpoint"}),", ",(0,r.jsx)(o.code,{children:"jwksUri"})," e ",(0,r.jsx)(o.code,{children:"issuer"})," como informa\xe7\xf5es de configura\xe7\xe3o do Provedor OpenID. Eles devem estar dispon\xedveis na documenta\xe7\xe3o do fornecedor social."]}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.em,{children:"authenticationEndpoint"}),": Este endpoint \xe9 usado para iniciar o processo de autentica\xe7\xe3o. O processo de autentica\xe7\xe3o normalmente envolve o usu\xe1rio fazer login e conceder autoriza\xe7\xe3o para que o aplicativo cliente acesse seus recursos."]}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.em,{children:"tokenEndpoint"}),": Este endpoint \xe9 usado pelo aplicativo cliente para obter um token de ID que pode ser usado para acessar os recursos solicitados. O aplicativo cliente normalmente envia uma solicita\xe7\xe3o ao endpoint de token com um tipo de concess\xe3o e c\xf3digo de autoriza\xe7\xe3o para receber um token de ID."]}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.em,{children:"jwksUri"}),": Este \xe9 o endpoint URL onde o Conjunto de Chaves Web JSON (JWKS) do provedor de identidade social (abreviado como IdP) pode ser obtido. O JWKS \xe9 um conjunto de chaves criptogr\xe1ficas que o IdP usa para assinar e verificar JSON Web Tokens (JWTs) que s\xe3o emitidos durante o processo de autentica\xe7\xe3o. O ",(0,r.jsx)(o.code,{children:"jwksUri"})," \xe9 usado pela parte confi\xe1vel (RP) para obter as chaves p\xfablicas usadas pelo IdP para assinar os JWTs, para que a RP possa verificar a autenticidade e integridade dos JWTs recebidos do IdP."]}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.em,{children:"issuer"}),": Este \xe9 o identificador \xfanico do IdP que \xe9 usado pela RP para verificar os JWTs recebidos do IdP. Ele \xe9 inclu\xeddo nos JWTs como a ",(0,r.jsx)(o.a,{href:"https://www.rfc-editor.org/rfc/rfc7519#section-4",children:"reivindica\xe7\xe3o"})," ",(0,r.jsx)(o.code,{children:"iss"})," (o token de ID \xe9 sempre um JWT). O valor do emissor deve corresponder ao URL do servidor de autoriza\xe7\xe3o do IdP, e deve ser um URI que a RP confia. Quando a RP recebe um JWT, ela verifica a reivindica\xe7\xe3o ",(0,r.jsx)(o.code,{children:"iss"})," para garantir que foi emitido por um IdP confi\xe1vel e que o JWT \xe9 destinado ao uso com a RP."]}),"\n",(0,r.jsxs)(o.p,{children:["Juntos, ",(0,r.jsx)(o.code,{children:"jwksUri"})," e ",(0,r.jsx)(o.code,{children:"issuer"})," fornecem um mecanismo seguro para a RP verificar a identidade do usu\xe1rio final durante o processo de autentica\xe7\xe3o. Usando as chaves p\xfablicas obtidas do ",(0,r.jsx)(o.code,{children:"jwksUri"}),", a RP pode verificar a autenticidade e integridade dos JWTs emitidos pelo IdP. O valor do emissor garante que a RP apenas aceite JWTs que foram emitidos por um IdP confi\xe1vel e que os JWTs s\xe3o destinados ao uso com a RP."]}),"\n",(0,r.jsxs)(o.p,{children:["Como uma solicita\xe7\xe3o de autentica\xe7\xe3o \xe9 sempre necess\xe1ria, um ",(0,r.jsx)(o.code,{children:"authRequestOptionalConfig"})," \xe9 fornecido para encapsular todas as configura\xe7\xf5es opcionais, voc\xea pode encontrar detalhes em ",(0,r.jsx)(o.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html#AuthRequest",children:"OIDC Authentication Request"}),". Voc\xea tamb\xe9m pode notar que ",(0,r.jsx)(o.code,{children:"nonce"})," est\xe1 ausente nesta configura\xe7\xe3o. Como ",(0,r.jsx)(o.code,{children:"nonce"})," deve ser id\xeantico para cada solicita\xe7\xe3o, colocamos a gera\xe7\xe3o de ",(0,r.jsx)(o.code,{children:"nonce"})," na implementa\xe7\xe3o do c\xf3digo. Ent\xe3o, n\xe3o se preocupe com isso! O anteriormente mencionado ",(0,r.jsx)(o.code,{children:"jwksUri"})," e ",(0,r.jsx)(o.code,{children:"issuer"})," tamb\xe9m est\xe3o inclu\xeddos em ",(0,r.jsx)(o.code,{children:"idTokenVerificationConfig"}),"."]}),"\n",(0,r.jsx)(o.p,{children:"Voc\xea pode estar curioso sobre por que um protocolo OIDC padr\xe3o suporta tanto os fluxos impl\xedcitos quanto h\xedbridos, mas o conector Logto suporta apenas o fluxo de autoriza\xe7\xe3o. Foi determinado que os fluxos impl\xedcitos e h\xedbridos s\xe3o menos seguros do que o fluxo de autoriza\xe7\xe3o. Devido ao foco do Logto na seguran\xe7a, ele suporta apenas o fluxo de autoriza\xe7\xe3o para o mais alto n\xedvel de seguran\xe7a para seus usu\xe1rios, apesar de sua natureza ligeiramente menos conveniente."}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.code,{children:"responseType"})," e ",(0,r.jsx)(o.code,{children:"grantType"}),' podem ser SOMENTE valores FIXOS com o fluxo "Authorization Code", ent\xe3o os tornamos opcionais e os valores padr\xe3o ser\xe3o preenchidos automaticamente.']}),"\n",(0,r.jsxs)(o.blockquote,{children:["\n",(0,r.jsxs)(o.p,{children:["\u2139\ufe0f ",(0,r.jsx)(o.strong,{children:"Nota"})]}),"\n",(0,r.jsxs)(o.p,{children:["Para todos os tipos de fluxo, fornecemos uma chave ",(0,r.jsx)(o.code,{children:"customConfig"})," OPCIONAL para colocar seus par\xe2metros personalizados.\nCada provedor de identidade social pode ter sua pr\xf3pria variante no protocolo padr\xe3o OIDC. Se o provedor de identidade social desejado seguir estritamente o protocolo padr\xe3o OIDC, ent\xe3o voc\xea n\xe3o precisa se preocupar com ",(0,r.jsx)(o.code,{children:"customConfig"}),"."]}),"\n"]}),"\n",(0,r.jsx)(o.h2,{id:"tipos-de-configura\xe7\xe3o",children:"Tipos de configura\xe7\xe3o"}),"\n",(0,r.jsxs)(o.table,{children:[(0,r.jsx)(o.thead,{children:(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.th,{children:"Nome"}),(0,r.jsx)(o.th,{children:"Tipo"}),(0,r.jsx)(o.th,{children:"Obrigat\xf3rio"})]})}),(0,r.jsxs)(o.tbody,{children:[(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"scope"}),(0,r.jsx)(o.td,{children:"string"}),(0,r.jsx)(o.td,{children:"True"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"clientId"}),(0,r.jsx)(o.td,{children:"string"}),(0,r.jsx)(o.td,{children:"True"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"clientSecret"}),(0,r.jsx)(o.td,{children:"string"}),(0,r.jsx)(o.td,{children:"True"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"authorizationEndpoint"}),(0,r.jsx)(o.td,{children:"string"}),(0,r.jsx)(o.td,{children:"True"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"tokenEndpoint"}),(0,r.jsx)(o.td,{children:"string"}),(0,r.jsx)(o.td,{children:"True"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"idTokenVerificationConfig"}),(0,r.jsx)(o.td,{children:"IdTokenVerificationConfig"}),(0,r.jsx)(o.td,{children:"True"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"authRequestOptionalConfig"}),(0,r.jsx)(o.td,{children:"AuthRequestOptionalConfig"}),(0,r.jsx)(o.td,{children:"False"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"customConfig"}),(0,r.jsx)(o.td,{children:"Record<string, string>"}),(0,r.jsx)(o.td,{children:"False"})]})]})]}),"\n",(0,r.jsxs)(o.table,{children:[(0,r.jsx)(o.thead,{children:(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.th,{children:"Propriedades de AuthRequestOptionalConfig"}),(0,r.jsx)(o.th,{children:"Tipo"}),(0,r.jsx)(o.th,{children:"Obrigat\xf3rio"})]})}),(0,r.jsxs)(o.tbody,{children:[(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"responseType"}),(0,r.jsx)(o.td,{children:"string"}),(0,r.jsx)(o.td,{children:"False"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"tokenEndpoint"}),(0,r.jsx)(o.td,{children:"string"}),(0,r.jsx)(o.td,{children:"False"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"responseMode"}),(0,r.jsx)(o.td,{children:"string"}),(0,r.jsx)(o.td,{children:"False"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"display"}),(0,r.jsx)(o.td,{children:"string"}),(0,r.jsx)(o.td,{children:"False"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"prompt"}),(0,r.jsx)(o.td,{children:"string"}),(0,r.jsx)(o.td,{children:"False"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"maxAge"}),(0,r.jsx)(o.td,{children:"string"}),(0,r.jsx)(o.td,{children:"False"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"uiLocales"}),(0,r.jsx)(o.td,{children:"string"}),(0,r.jsx)(o.td,{children:"False"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"idTokenHint"}),(0,r.jsx)(o.td,{children:"string"}),(0,r.jsx)(o.td,{children:"False"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"loginHint"}),(0,r.jsx)(o.td,{children:"string"}),(0,r.jsx)(o.td,{children:"False"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"acrValues"}),(0,r.jsx)(o.td,{children:"string"}),(0,r.jsx)(o.td,{children:"False"})]})]})]}),"\n",(0,r.jsxs)(o.table,{children:[(0,r.jsx)(o.thead,{children:(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.th,{children:"Propriedades de IdTokenVerificationConfig"}),(0,r.jsx)(o.th,{children:"Tipo"}),(0,r.jsx)(o.th,{children:"Obrigat\xf3rio"})]})}),(0,r.jsxs)(o.tbody,{children:[(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"jwksUri"}),(0,r.jsx)(o.td,{children:"string"}),(0,r.jsx)(o.td,{children:"True"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"issuer"}),(0,r.jsx)(o.td,{children:"string | string[]"}),(0,r.jsx)(o.td,{children:"False"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"audience"}),(0,r.jsx)(o.td,{children:"string | string[]"}),(0,r.jsx)(o.td,{children:"False"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"algorithms"}),(0,r.jsx)(o.td,{children:"string[]"}),(0,r.jsx)(o.td,{children:"False"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"clockTolerance"}),(0,r.jsx)(o.td,{children:"string | number"}),(0,r.jsx)(o.td,{children:"False"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"crit"}),(0,r.jsx)(o.td,{children:"Record<string, string | boolean>"}),(0,r.jsx)(o.td,{children:"False"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"currentDate"}),(0,r.jsx)(o.td,{children:"Date"}),(0,r.jsx)(o.td,{children:"False"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"maxTokenAge"}),(0,r.jsx)(o.td,{children:"string | number"}),(0,r.jsx)(o.td,{children:"False"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"subject"}),(0,r.jsx)(o.td,{children:"string"}),(0,r.jsx)(o.td,{children:"False"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"typ"}),(0,r.jsx)(o.td,{children:"string"}),(0,r.jsx)(o.td,{children:"False"})]})]})]}),"\n",(0,r.jsxs)(o.p,{children:["Veja ",(0,r.jsx)(o.a,{href:"https://github.com/panva/jose/blob/main/docs/interfaces/jwt_verify.JWTVerifyOptions.md",children:"aqui"})," para encontrar mais detalhes sobre ",(0,r.jsx)(o.code,{children:"IdTokenVerificationConfig"}),"."]})]})}function p(e={}){const{wrapper:o}={...(0,n.R)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},15658:(e,o,i)=>{i.d(o,{R:()=>d,x:()=>t});var s=i(30758);const r={},n=s.createContext(r);function d(e){const o=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function t(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(n.Provider,{value:o},e.children)}}}]);