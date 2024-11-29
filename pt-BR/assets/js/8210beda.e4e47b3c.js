"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[90228],{95565:(e,o,s)=>{s.d(o,{Ay:()=>c,RM:()=>i});var n=s(86070),a=s(15658);const i=[];function r(e){const o={a:"a",admonition:"admonition",p:"p",...(0,a.R)(),...e.components};return(0,n.jsx)(o.admonition,{type:"tip",children:(0,n.jsxs)(o.p,{children:["Para mais informa\xe7\xf5es sobre SSO e como configurar SSO no Logto, por favor, confira a documenta\xe7\xe3o de ",(0,n.jsx)(o.a,{href:"/connectors/enterprise-connectors",children:"SSO corporativo (SAML & OIDC)"})," para come\xe7ar."]})})}function c(e={}){const{wrapper:o}={...(0,a.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}},63573:(e,o,s)=>{s.r(o),s.d(o,{assets:()=>d,contentTitle:()=>t,default:()=>u,frontMatter:()=>c,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"integrations/sso/google-workspace/README","title":"Configurar Single Sign-On com Google Workspace","description":"Com esfor\xe7os m\xednimos de configura\xe7\xe3o, este conector permite a integra\xe7\xe3o com o Microsoft Entra ID para SSO corporativo.","source":"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/integrations/sso/google-workspace/README.mdx","sourceDirName":"integrations/sso/google-workspace","slug":"/integrations/google-workspace","permalink":"/pt-BR/integrations/google-workspace","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/pt-BR/docusaurus-plugin-content-docs/current/integrations/sso/google-workspace/README.mdx","tags":[],"version":"current","frontMatter":{"slug":"/integrations/google-workspace","sidebar_label":"Google Workspace","sidebar_custom_props":{"description":"Gerenciamento unificado e seguro do acesso de usu\xe1rios dentro do ecossistema Google.","logoFilename":"google.svg"}},"sidebar":"integrationsSidebar","previous":{"title":"Microsoft Entra ID (SAML)","permalink":"/pt-BR/integrations/entra-id-saml"},"next":{"title":"OIDC (Enterprise)","permalink":"/pt-BR/integrations/oidc-sso"}}');var a=s(86070),i=s(15658),r=s(95565);const c={slug:"/integrations/google-workspace",sidebar_label:"Google Workspace",sidebar_custom_props:{description:"Gerenciamento unificado e seguro do acesso de usu\xe1rios dentro do ecossistema Google.",logoFilename:"google.svg"}},t="Configurar Single Sign-On com Google Workspace",d={},l=[...r.RM,{value:"Passo 1: Crie um novo projeto no Google Cloud Platform",id:"passo-1-crie-um-novo-projeto-no-google-cloud-platform",level:2},{value:"Passo 2: Configure a tela de consentimento para seu aplicativo",id:"passo-2-configure-a-tela-de-consentimento-para-seu-aplicativo",level:2},{value:"Passo 3: Crie uma nova credencial OAuth",id:"passo-3-crie-uma-nova-credencial-oauth",level:2},{value:"Passo 4: Configure o conector Logto com as credenciais do cliente",id:"passo-4-configure-o-conector-logto-com-as-credenciais-do-cliente",level:2},{value:"Passo 5: Escopos Adicionais (Opcional)",id:"passo-5-escopos-adicionais-opcional",level:2},{value:"Passo 6: Defina dom\xednios de email e habilite o conector SSO",id:"passo-6-defina-dom\xednios-de-email-e-habilite-o-conector-sso",level:2}];function p(e){const o={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.header,{children:(0,a.jsx)(o.h1,{id:"configurar-single-sign-on-com-google-workspace",children:"Configurar Single Sign-On com Google Workspace"})}),"\n",(0,a.jsx)(o.p,{children:"Com esfor\xe7os m\xednimos de configura\xe7\xe3o, este conector permite a integra\xe7\xe3o com o Microsoft Entra ID para SSO corporativo."}),"\n",(0,a.jsx)(r.Ay,{}),"\n",(0,a.jsx)(o.h2,{id:"passo-1-crie-um-novo-projeto-no-google-cloud-platform",children:"Passo 1: Crie um novo projeto no Google Cloud Platform"}),"\n",(0,a.jsxs)(o.p,{children:["Antes de poder usar o Google Workspace como um provedor de autentica\xe7\xe3o, voc\xea deve configurar um projeto no ",(0,a.jsx)(o.a,{href:"https://console.developers.google.com/",children:"Google API Console"})," para obter credenciais OAuth 2.0. Se voc\xea j\xe1 tem um projeto, pode pular esta etapa. Caso contr\xe1rio, crie um novo projeto sob sua organiza\xe7\xe3o Google."]}),"\n",(0,a.jsx)(o.h2,{id:"passo-2-configure-a-tela-de-consentimento-para-seu-aplicativo",children:"Passo 2: Configure a tela de consentimento para seu aplicativo"}),"\n",(0,a.jsx)(o.p,{children:"Para criar uma nova credencial OIDC, voc\xea precisa configurar a tela de consentimento para seu aplicativo."}),"\n",(0,a.jsxs)(o.ol,{children:["\n",(0,a.jsxs)(o.li,{children:["Navegue at\xe9 a p\xe1gina ",(0,a.jsx)(o.a,{href:"https://console.cloud.google.com/apis/credentials/consent",children:"Tela de consentimento OAuth"})," e selecione o tipo de usu\xe1rio ",(0,a.jsx)(o.code,{children:"Interno"}),". Isso tornar\xe1 o aplicativo OAuth dispon\xedvel apenas para usu\xe1rios dentro de sua organiza\xe7\xe3o."]}),"\n"]}),"\n",(0,a.jsx)(o.p,{children:(0,a.jsx)(o.img,{alt:"Tipo de usu\xe1rio da tela de consentimento do Google Workspace.webp",src:s(60337).A+"",width:"2604",height:"1363"})}),"\n",(0,a.jsxs)(o.ol,{start:"2",children:["\n",(0,a.jsxs)(o.li,{children:["Preencha as configura\xe7\xf5es da ",(0,a.jsx)(o.code,{children:"Tela de Consentimento"})," seguindo as instru\xe7\xf5es na p\xe1gina. Voc\xea precisa fornecer as seguintes informa\xe7\xf5es m\xednimas:"]}),"\n"]}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsxs)(o.li,{children:[(0,a.jsx)(o.strong,{children:"Nome do aplicativo"}),": O nome do seu aplicativo. Ele ser\xe1 exibido na tela de consentimento."]}),"\n",(0,a.jsxs)(o.li,{children:[(0,a.jsx)(o.strong,{children:"Email de suporte"}),": O email de suporte do seu aplicativo. Ele ser\xe1 exibido na tela de consentimento."]}),"\n"]}),"\n",(0,a.jsx)(o.p,{children:(0,a.jsx)(o.img,{alt:"Configura\xe7\xf5es da tela de consentimento do Google Workspace.webp",src:s(88002).A+"",width:"2604",height:"1865"})}),"\n",(0,a.jsxs)(o.ol,{start:"3",children:["\n",(0,a.jsxs)(o.li,{children:["Defina os ",(0,a.jsx)(o.code,{children:"Escopos"})," para seu aplicativo. Para recuperar corretamente as informa\xe7\xf5es de identidade e endere\xe7o de email do usu\xe1rio do IdP, os conectores SSO do Logto precisam conceder os seguintes escopos do IdP:"]}),"\n"]}),"\n",(0,a.jsx)(o.p,{children:(0,a.jsx)(o.img,{alt:"Escopos da tela de consentimento do Google Workspace.webp",src:s(72778).A+"",width:"2604",height:"1865"})}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsxs)(o.li,{children:[(0,a.jsx)(o.strong,{children:"openid"}),": Este escopo \xe9 necess\xe1rio para autentica\xe7\xe3o OIDC. Ele \xe9 usado para recuperar o Token de ID e obter acesso ao endpoint userInfo do IdP."]}),"\n",(0,a.jsxs)(o.li,{children:[(0,a.jsx)(o.strong,{children:"profile"}),": Este escopo \xe9 necess\xe1rio para acessar as informa\xe7\xf5es b\xe1sicas do perfil do usu\xe1rio."]}),"\n",(0,a.jsxs)(o.li,{children:[(0,a.jsx)(o.strong,{children:"email"}),": Este escopo \xe9 necess\xe1rio para acessar o endere\xe7o de email do usu\xe1rio."]}),"\n"]}),"\n",(0,a.jsxs)(o.p,{children:["Clique no bot\xe3o ",(0,a.jsx)(o.code,{children:"Salvar"})," para salvar as configura\xe7\xf5es da tela de consentimento."]}),"\n",(0,a.jsx)(o.h2,{id:"passo-3-crie-uma-nova-credencial-oauth",children:"Passo 3: Crie uma nova credencial OAuth"}),"\n",(0,a.jsxs)(o.p,{children:["Navegue at\xe9 a p\xe1gina ",(0,a.jsx)(o.a,{href:"https://console.cloud.google.com/apis/credentials",children:"Credenciais"})," e clique no bot\xe3o ",(0,a.jsx)(o.code,{children:"Criar Credenciais"}),". Selecione a op\xe7\xe3o ",(0,a.jsx)(o.code,{children:"ID do cliente OAuth"})," no menu suspenso para criar uma nova credencial OAuth para seu aplicativo."]}),"\n",(0,a.jsx)(o.p,{children:(0,a.jsx)(o.img,{alt:"Criar credenciais do Google Workspace.webp",src:s(8524).A+"",width:"2604",height:"1363"})}),"\n",(0,a.jsx)(o.p,{children:"Continue configurando a credencial OAuth preenchendo as seguintes informa\xe7\xf5es:"}),"\n",(0,a.jsx)(o.p,{children:(0,a.jsx)(o.img,{alt:"Configura\xe7\xe3o de credenciais do Google Workspace.webp",src:s(68184).A+"",width:"2604",height:"1865"})}),"\n",(0,a.jsxs)(o.ol,{children:["\n",(0,a.jsxs)(o.li,{children:["Selecione ",(0,a.jsx)(o.code,{children:"Aplicativo Web"})," como o tipo de aplicativo."]}),"\n",(0,a.jsxs)(o.li,{children:["Preencha o ",(0,a.jsx)(o.code,{children:"Nome"})," do seu aplicativo cliente, ",(0,a.jsx)(o.code,{children:"Logto SSO Connector"}),", por exemplo. Isso ajudar\xe1 voc\xea a identificar as credenciais no futuro."]}),"\n",(0,a.jsxs)(o.li,{children:["Preencha os ",(0,a.jsx)(o.code,{children:"URIs de redirecionamento autorizados"})," com o URI de callback do Logto. Este \xe9 o URI para o qual o Google redirecionar\xe1 o navegador do usu\xe1rio ap\xf3s a autentica\xe7\xe3o bem-sucedida. Ap\xf3s um usu\xe1rio autenticar-se com sucesso no IdP, o IdP redireciona o navegador do usu\xe1rio de volta para este URI designado junto com um c\xf3digo de autoriza\xe7\xe3o. O Logto completar\xe1 o processo de autentica\xe7\xe3o com base no c\xf3digo de autoriza\xe7\xe3o recebido deste URI."]}),"\n",(0,a.jsxs)(o.li,{children:["Preencha as ",(0,a.jsx)(o.code,{children:"Origens JavaScript autorizadas"})," com a origem do URI de callback do Logto. Isso garante que apenas seu aplicativo Logto possa enviar solicita\xe7\xf5es para o servidor OAuth do Google."]}),"\n",(0,a.jsxs)(o.li,{children:["Clique no bot\xe3o ",(0,a.jsx)(o.code,{children:"Criar"})," para criar a credencial OAuth."]}),"\n"]}),"\n",(0,a.jsx)(o.h2,{id:"passo-4-configure-o-conector-logto-com-as-credenciais-do-cliente",children:"Passo 4: Configure o conector Logto com as credenciais do cliente"}),"\n",(0,a.jsx)(o.p,{children:"Ap\xf3s criar com sucesso a credencial OAuth, voc\xea receber\xe1 um modal de prompt com o ID do cliente e o segredo do cliente."}),"\n",(0,a.jsx)(o.p,{children:(0,a.jsx)(o.img,{alt:"Credenciais do cliente do Google Workspace.webp",src:s(52359).A+"",width:"2604",height:"1865"})}),"\n",(0,a.jsxs)(o.p,{children:["Copie o ",(0,a.jsx)(o.code,{children:"ID do Cliente"})," e o ",(0,a.jsx)(o.code,{children:"Segredo do Cliente"})," e preencha os campos correspondentes na aba ",(0,a.jsx)(o.code,{children:"Conex\xe3o"})," do conector SSO do Logto."]}),"\n",(0,a.jsx)(o.p,{children:"Agora voc\xea configurou com sucesso um conector SSO do Google Workspace no Logto."}),"\n",(0,a.jsx)(o.h2,{id:"passo-5-escopos-adicionais-opcional",children:"Passo 5: Escopos Adicionais (Opcional)"}),"\n",(0,a.jsxs)(o.p,{children:["Use o campo ",(0,a.jsx)(o.code,{children:"Escopo"})," para adicionar escopos adicionais \xe0 sua solicita\xe7\xe3o OAuth. Isso permitir\xe1 que voc\xea solicite mais informa\xe7\xf5es do servidor OAuth do Google. Consulte a documenta\xe7\xe3o ",(0,a.jsx)(o.a,{href:"https://developers.google.com/identity/protocols/oauth2/scopes",children:"Escopos OAuth do Google"})," para mais informa\xe7\xf5es."]}),"\n",(0,a.jsxs)(o.p,{children:["Independentemente das configura\xe7\xf5es de escopo personalizadas, o Logto sempre enviar\xe1 os escopos ",(0,a.jsx)(o.code,{children:"openid"}),", ",(0,a.jsx)(o.code,{children:"profile"})," e ",(0,a.jsx)(o.code,{children:"email"})," para o IdP. Isso \xe9 para garantir que o Logto possa recuperar corretamente as informa\xe7\xf5es de identidade e endere\xe7o de email do usu\xe1rio."]}),"\n",(0,a.jsx)(o.h2,{id:"passo-6-defina-dom\xednios-de-email-e-habilite-o-conector-sso",children:"Passo 6: Defina dom\xednios de email e habilite o conector SSO"}),"\n",(0,a.jsxs)(o.p,{children:["Forne\xe7a os ",(0,a.jsx)(o.code,{children:"dom\xednios de email"})," de sua organiza\xe7\xe3o na aba ",(0,a.jsx)(o.code,{children:"Experi\xeancia SSO"})," do conector do Logto. Isso habilitar\xe1 o conector SSO como um m\xe9todo de autentica\xe7\xe3o para esses usu\xe1rios."]}),"\n",(0,a.jsx)(o.p,{children:"Usu\xe1rios com endere\xe7os de email nos dom\xednios especificados ser\xe3o redirecionados para usar seu conector SSO como seu \xfanico m\xe9todo de autentica\xe7\xe3o."}),"\n",(0,a.jsxs)(o.p,{children:["Para mais informa\xe7\xf5es sobre o conector SSO do Google Workspace, consulte ",(0,a.jsx)(o.a,{href:"https://developers.google.com/identity/openid-connect/openid-connect",children:"Google OpenID Connector"}),"."]})]})}function u(e={}){const{wrapper:o}={...(0,i.R)(),...e.components};return o?(0,a.jsx)(o,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},52359:(e,o,s)=>{s.d(o,{A:()=>n});const n=s.p+"assets/images/google_workspace_client_credentials-04b46e076f40fb0bd433529cb59d6f46.webp"},72778:(e,o,s)=>{s.d(o,{A:()=>n});const n=s.p+"assets/images/google_workspace_consent_screen_scopes-eb352a52b1f1056877a6b93edf68a0bb.webp"},88002:(e,o,s)=>{s.d(o,{A:()=>n});const n=s.p+"assets/images/google_workspace_consent_screen_settings-e7eb6c977bb7d90015b38d1d9f84673e.webp"},60337:(e,o,s)=>{s.d(o,{A:()=>n});const n=s.p+"assets/images/google_workspace_consent_screen_user_type-f5da0e8e1d400973d4702ce1f553fd27.webp"},8524:(e,o,s)=>{s.d(o,{A:()=>n});const n=s.p+"assets/images/google_workspace_create_credentials-4b2f8a7bd881d99886aa1131503ea227.webp"},68184:(e,o,s)=>{s.d(o,{A:()=>n});const n=s.p+"assets/images/google_workspace_credentials_config-0a4787d6350ce1a7c3e0c337bb0726c6.webp"},15658:(e,o,s)=>{s.d(o,{R:()=>r,x:()=>c});var n=s(30758);const a={},i=n.createContext(a);function r(e){const o=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function c(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),n.createElement(i.Provider,{value:o},e.children)}}}]);