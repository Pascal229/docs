"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[47576],{95565:(o,e,i)=>{i.d(e,{Ay:()=>t,RM:()=>r});var n=i(86070),a=i(15658);const r=[];function s(o){const e={a:"a",admonition:"admonition",p:"p",...(0,a.R)(),...o.components};return(0,n.jsx)(e.admonition,{type:"tip",children:(0,n.jsxs)(e.p,{children:["Para mais informa\xe7\xf5es sobre SSO e como configurar SSO no Logto, por favor, confira a documenta\xe7\xe3o de ",(0,n.jsx)(e.a,{href:"/connectors/enterprise-connectors",children:"SSO corporativo (SAML & OIDC)"})," para come\xe7ar."]})})}function t(o={}){const{wrapper:e}={...(0,a.R)(),...o.components};return e?(0,n.jsx)(e,{...o,children:(0,n.jsx)(s,{...o})}):s(o)}},16486:(o,e,i)=>{i.r(e),i.d(e,{assets:()=>g,contentTitle:()=>u,default:()=>x,frontMatter:()=>m,metadata:()=>n,toc:()=>f});const n=JSON.parse('{"id":"integrations/sso/entra-id-oidc/README","title":"Configurar Single Sign-On com Microsoft Entra ID (OIDC)","description":"Com esfor\xe7os m\xednimos de configura\xe7\xe3o, este conector permite a integra\xe7\xe3o com o Microsoft Entra ID (antigo Azure AD) para SSO corporativo.","source":"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/integrations/sso/entra-id-oidc/README.mdx","sourceDirName":"integrations/sso/entra-id-oidc","slug":"/integrations/entra-id-oidc","permalink":"/pt-BR/integrations/entra-id-oidc","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/pt-BR/docusaurus-plugin-content-docs/current/integrations/sso/entra-id-oidc/README.mdx","tags":[],"version":"current","frontMatter":{"slug":"/integrations/entra-id-oidc","sidebar_label":"Microsoft Entra ID (OIDC)","sidebar_custom_props":{"description":"Antigo Azure AD, um servi\xe7o abrangente de gerenciamento de identidade baseado em nuvem.","logoFilename":"entra-id.svg"}},"sidebar":"integrationsSidebar","previous":{"title":"Vonage SMS","permalink":"/pt-BR/integrations/vonage-sms"},"next":{"title":"Microsoft Entra ID (SAML)","permalink":"/pt-BR/integrations/entra-id-saml"}}');var a=i(86070),r=i(15658),s=i(95565);const t=i.p+"assets/images/entra_id_oidc_application_details-e72cf3559622f8e378ae3e723c8bd73c.webp",c=i.p+"assets/images/entra_id_oidc_config_application-612bae82fc729b0734273f04461c06cc.webp",d=i.p+"assets/images/entra_id_oidc_create_application-ed20e4bf03b991bf7aea5fcfeb7a3728.webp",l=i.p+"assets/images/entra_id_oidc_create_secret-e9d08f9dfdbe4390d32fc6bccc1207d9.webp",p=i.p+"assets/images/entra_id_oidc_endpoints-dc54bc2a3b4731b90d377f1653b67115.webp",m={slug:"/integrations/entra-id-oidc",sidebar_label:"Microsoft Entra ID (OIDC)",sidebar_custom_props:{description:"Antigo Azure AD, um servi\xe7o abrangente de gerenciamento de identidade baseado em nuvem.",logoFilename:"entra-id.svg"}},u="Configurar Single Sign-On com Microsoft Entra ID (OIDC)",g={},f=[...s.RM,{value:"Etapa 1: Criar um aplicativo Microsoft EntraID OIDC",id:"etapa-1-criar-um-aplicativo-microsoft-entraid-oidc",level:2},{value:"Etapa 2: Configurar o Microsoft Entra ID OIDC SSO no Logto",id:"etapa-2-configurar-o-microsoft-entra-id-oidc-sso-no-logto",level:2},{value:"Etapa 3: Definir dom\xednios de email e habilitar o conector SSO",id:"etapa-3-definir-dom\xednios-de-email-e-habilitar-o-conector-sso",level:2}];function h(o){const e={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",...(0,r.R)(),...o.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.header,{children:(0,a.jsx)(e.h1,{id:"configurar-single-sign-on-com-microsoft-entra-id-oidc",children:"Configurar Single Sign-On com Microsoft Entra ID (OIDC)"})}),"\n",(0,a.jsx)(e.p,{children:"Com esfor\xe7os m\xednimos de configura\xe7\xe3o, este conector permite a integra\xe7\xe3o com o Microsoft Entra ID (antigo Azure AD) para SSO corporativo."}),"\n",(0,a.jsx)(s.Ay,{}),"\n",(0,a.jsx)(e.h2,{id:"etapa-1-criar-um-aplicativo-microsoft-entraid-oidc",children:"Etapa 1: Criar um aplicativo Microsoft EntraID OIDC"}),"\n",(0,a.jsxs)(e.ol,{children:["\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsxs)(e.p,{children:["Acesse o ",(0,a.jsx)(e.a,{href:"https://entra.microsoft.com/",children:"centro de administra\xe7\xe3o do Microsoft Entra"})," e fa\xe7a login como administrador."]}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:"Navegue at\xe9 Identidade > Aplicativos > Registros de aplicativos."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)("center",{children:(0,a.jsx)("img",{src:d,alt:"Criar Aplicativo"})}),"\n",(0,a.jsxs)(e.ol,{start:"3",children:["\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsxs)(e.p,{children:["Selecione ",(0,a.jsx)(e.code,{children:"Novo registro"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:"Insira o nome do aplicativo e selecione o tipo de conta apropriado para seu aplicativo."}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsxs)(e.p,{children:["Selecione ",(0,a.jsx)(e.code,{children:"Web"})," como a plataforma do aplicativo."]}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsxs)(e.p,{children:["Copie e cole o ",(0,a.jsx)(e.code,{children:"URI de redirecionamento"})," da p\xe1gina de configura\xe7\xf5es de SSO do Logto. O ",(0,a.jsx)(e.code,{children:"URI de redirecionamento"})," \xe9 o URL para onde o usu\xe1rio \xe9 redirecionado ap\xf3s ser autenticado com o Microsoft Entra ID."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)("center",{children:(0,a.jsx)("img",{src:c,alt:"Configurar Aplicativo"})}),"\n",(0,a.jsxs)(e.ol,{start:"6",children:["\n",(0,a.jsxs)(e.li,{children:["Clique em ",(0,a.jsx)(e.code,{children:"Registrar"})," para criar o aplicativo."]}),"\n"]}),"\n",(0,a.jsx)(e.h2,{id:"etapa-2-configurar-o-microsoft-entra-id-oidc-sso-no-logto",children:"Etapa 2: Configurar o Microsoft Entra ID OIDC SSO no Logto"}),"\n",(0,a.jsxs)(e.p,{children:["Ap\xf3s criar com sucesso um aplicativo Microsoft Entra OIDC, voc\xea precisar\xe1 fornecer as configura\xe7\xf5es do IdP de volta ao Logto. Navegue at\xe9 a aba ",(0,a.jsx)(e.code,{children:"Connection"})," no Logto Console e preencha as seguintes configura\xe7\xf5es:"]}),"\n",(0,a.jsxs)(e.ol,{children:["\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.strong,{children:"Client ID"}),": Um identificador \xfanico atribu\xeddo ao seu aplicativo OIDC pelo Microsoft Entra. Este identificador \xe9 usado pelo Logto para identificar e autenticar o aplicativo durante o fluxo OIDC. Voc\xea pode encontr\xe1-lo na p\xe1gina de vis\xe3o geral do aplicativo como ",(0,a.jsx)(e.code,{children:"Application (client) ID"}),"."]}),"\n"]}),"\n",(0,a.jsx)("center",{children:(0,a.jsx)("img",{src:t,alt:"Detalhes do Aplicativo"})}),"\n",(0,a.jsxs)(e.ol,{start:"2",children:["\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.strong,{children:"Client Secret"}),": Crie um novo segredo de cliente e copie o valor para o Logto. Este segredo \xe9 usado para autenticar o aplicativo OIDC e proteger a comunica\xe7\xe3o entre o Logto e o IdP."]}),"\n"]}),"\n",(0,a.jsx)("center",{children:(0,a.jsx)("img",{src:l,alt:"Criar Segredo"})}),"\n",(0,a.jsxs)(e.ol,{start:"3",children:["\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.strong,{children:"Emissor (Issuer)"}),": O URL do emissor, um identificador \xfanico para o IdP, especificando a localiza\xe7\xe3o onde o provedor de identidade OIDC pode ser encontrado. \xc9 uma parte crucial da configura\xe7\xe3o OIDC, pois ajuda o Logto a descobrir os endpoints necess\xe1rios."]}),"\n",(0,a.jsx)(e.p,{children:"Em vez de fornecer manualmente todos esses endpoints OIDC, o Logto busca automaticamente todas as configura\xe7\xf5es necess\xe1rias e endpoints do IdP. Isso \xe9 feito utilizando o URL do emissor que voc\xea forneceu e fazendo uma chamada ao endpoint de descoberta do IdP."}),"\n",(0,a.jsxs)(e.p,{children:["Para obter o URL do emissor, voc\xea pode encontr\xe1-lo na se\xe7\xe3o ",(0,a.jsx)(e.code,{children:"Endpoints"})," da p\xe1gina de vis\xe3o geral do aplicativo."]}),"\n",(0,a.jsxs)(e.p,{children:["Localize o endpoint ",(0,a.jsx)(e.code,{children:"OpenID Connect metadata document"})," e copie o URL ",(0,a.jsx)(e.strong,{children:"SEM"})," o caminho final ",(0,a.jsx)(e.code,{children:".well-known/openid-configuration"}),". Isso ocorre porque o Logto ir\xe1 automaticamente adicionar o ",(0,a.jsx)(e.code,{children:".well-known/openid-configuration"})," ao URL do emissor ao buscar as configura\xe7\xf5es OIDC."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)("center",{children:(0,a.jsx)("img",{src:p,alt:"Endpoints"})}),"\n",(0,a.jsxs)(e.ol,{start:"4",children:["\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.strong,{children:"Escopo (Scope)"}),": Uma lista de strings separadas por espa\xe7o definindo as permiss\xf5es ou n\xedveis de acesso desejados solicitados pelo Logto durante o processo de autentica\xe7\xe3o OIDC. O par\xe2metro de escopo permite especificar quais informa\xe7\xf5es e acesso o Logto est\xe1 solicitando do IdP."]}),"\n"]}),"\n",(0,a.jsxs)(e.p,{children:["O par\xe2metro de escopo \xe9 opcional. Independentemente das configura\xe7\xf5es de escopo personalizadas, o Logto sempre enviar\xe1 os escopos ",(0,a.jsx)(e.code,{children:"openid"}),", ",(0,a.jsx)(e.code,{children:"profile"})," e ",(0,a.jsx)(e.code,{children:"email"})," para o IdP."]}),"\n",(0,a.jsxs)(e.p,{children:["Clique em ",(0,a.jsx)(e.code,{children:"Salvar"})," para finalizar o processo de configura\xe7\xe3o."]}),"\n",(0,a.jsx)(e.h2,{id:"etapa-3-definir-dom\xednios-de-email-e-habilitar-o-conector-sso",children:"Etapa 3: Definir dom\xednios de email e habilitar o conector SSO"}),"\n",(0,a.jsxs)(e.p,{children:["Forne\xe7a os ",(0,a.jsx)(e.code,{children:"dom\xednios"})," de email da sua organiza\xe7\xe3o na aba de ",(0,a.jsx)(e.code,{children:"experi\xeancia"})," do conector. Isso habilitar\xe1 o conector SSO como um m\xe9todo de autentica\xe7\xe3o para esses usu\xe1rios."]}),"\n",(0,a.jsx)(e.p,{children:"Usu\xe1rios com endere\xe7os de email nos dom\xednios especificados ser\xe3o exclusivamente limitados a usar seu conector SSO como seu \xfanico m\xe9todo de autentica\xe7\xe3o."})]})}function x(o={}){const{wrapper:e}={...(0,r.R)(),...o.components};return e?(0,a.jsx)(e,{...o,children:(0,a.jsx)(h,{...o})}):h(o)}},15658:(o,e,i)=>{i.d(e,{R:()=>s,x:()=>t});var n=i(30758);const a={},r=n.createContext(a);function s(o){const e=n.useContext(r);return n.useMemo((function(){return"function"==typeof o?o(e):{...e,...o}}),[e,o])}function t(o){let e;return e=o.disableParentContext?"function"==typeof o.components?o.components(a):o.components||a:s(o.components),n.createElement(r.Provider,{value:e},o.children)}}}]);