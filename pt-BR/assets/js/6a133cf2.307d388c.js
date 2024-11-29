"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[30770],{95565:(e,o,a)=>{a.d(o,{Ay:()=>t,RM:()=>r});var i=a(86070),s=a(15658);const r=[];function n(e){const o={a:"a",admonition:"admonition",p:"p",...(0,s.R)(),...e.components};return(0,i.jsx)(o.admonition,{type:"tip",children:(0,i.jsxs)(o.p,{children:["Para mais informa\xe7\xf5es sobre SSO e como configurar SSO no Logto, por favor, confira a documenta\xe7\xe3o de ",(0,i.jsx)(o.a,{href:"/connectors/enterprise-connectors",children:"SSO corporativo (SAML & OIDC)"})," para come\xe7ar."]})})}function t(e={}){const{wrapper:o}={...(0,s.R)(),...e.components};return o?(0,i.jsx)(o,{...e,children:(0,i.jsx)(n,{...e})}):n(e)}},66694:(e,o,a)=>{a.r(o),a.d(o,{assets:()=>c,contentTitle:()=>d,default:()=>p,frontMatter:()=>t,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"integrations/sso/entra-id-saml/README","title":"Configurar Single Sign-On com Microsoft Entra ID (SAML)","description":"Com esfor\xe7os m\xednimos de configura\xe7\xe3o, este conector permite a integra\xe7\xe3o com o Microsoft Entra ID (anteriormente Azure AD) para SSO corporativo.","source":"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/integrations/sso/entra-id-saml/README.mdx","sourceDirName":"integrations/sso/entra-id-saml","slug":"/integrations/entra-id-saml","permalink":"/pt-BR/integrations/entra-id-saml","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/pt-BR/docusaurus-plugin-content-docs/current/integrations/sso/entra-id-saml/README.mdx","tags":[],"version":"current","frontMatter":{"slug":"/integrations/entra-id-saml","sidebar_label":"Microsoft Entra ID (SAML)","sidebar_custom_props":{"description":"Anteriormente Azure AD, um servi\xe7o abrangente de gerenciamento de identidade baseado em nuvem.","logoFilename":"entra-id.svg"}},"sidebar":"integrationsSidebar","previous":{"title":"Microsoft Entra ID (OIDC)","permalink":"/pt-BR/integrations/entra-id-oidc"},"next":{"title":"Google Workspace","permalink":"/pt-BR/integrations/google-workspace"}}');var s=a(86070),r=a(15658),n=a(95565);const t={slug:"/integrations/entra-id-saml",sidebar_label:"Microsoft Entra ID (SAML)",sidebar_custom_props:{description:"Anteriormente Azure AD, um servi\xe7o abrangente de gerenciamento de identidade baseado em nuvem.",logoFilename:"entra-id.svg"}},d="Configurar Single Sign-On com Microsoft Entra ID (SAML)",c={},l=[...n.RM,{value:"Passo 1: Criar um aplicativo SSO no Azure AD",id:"passo-1-criar-um-aplicativo-sso-no-azure-ad",level:2},{value:"Passo 2: Configurar SAML SSO no Logto",id:"passo-2-configurar-saml-sso-no-logto",level:2},{value:"Passo 3: Configurar mapeamento de atributos do usu\xe1rio",id:"passo-3-configurar-mapeamento-de-atributos-do-usu\xe1rio",level:2},{value:"Passo 4: Atribuir usu\xe1rios ao aplicativo SSO do Azure AD",id:"passo-4-atribuir-usu\xe1rios-ao-aplicativo-sso-do-azure-ad",level:2},{value:"Passo 5: Definir dom\xednios de email e habilitar o conector SSO",id:"passo-5-definir-dom\xednios-de-email-e-habilitar-o-conector-sso",level:2}];function u(e){const o={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.header,{children:(0,s.jsx)(o.h1,{id:"configurar-single-sign-on-com-microsoft-entra-id-saml",children:"Configurar Single Sign-On com Microsoft Entra ID (SAML)"})}),"\n",(0,s.jsx)(o.p,{children:"Com esfor\xe7os m\xednimos de configura\xe7\xe3o, este conector permite a integra\xe7\xe3o com o Microsoft Entra ID (anteriormente Azure AD) para SSO corporativo."}),"\n",(0,s.jsx)(n.Ay,{}),"\n",(0,s.jsx)(o.h2,{id:"passo-1-criar-um-aplicativo-sso-no-azure-ad",children:"Passo 1: Criar um aplicativo SSO no Azure AD"}),"\n",(0,s.jsx)(o.p,{children:"Inicie a integra\xe7\xe3o SSO do Azure AD criando um aplicativo SSO no lado do Azure AD."}),"\n",(0,s.jsxs)(o.ol,{children:["\n",(0,s.jsxs)(o.li,{children:["Acesse o ",(0,s.jsx)(o.a,{href:"https://portal.azure.com/",children:"portal do Azure"})," e fa\xe7a login como administrador."]}),"\n",(0,s.jsxs)(o.li,{children:["Selecione o servi\xe7o ",(0,s.jsx)(o.code,{children:"Microsoft Entra ID"}),"."]}),"\n",(0,s.jsxs)(o.li,{children:["Navegue at\xe9 ",(0,s.jsx)(o.code,{children:"Enterprise applications"})," usando o menu lateral. Clique em ",(0,s.jsx)(o.code,{children:"New application"})," e selecione ",(0,s.jsx)(o.code,{children:"Create your own application"}),"."]}),"\n"]}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.img,{alt:"Azure AD create application.webp",src:a(23659).A+"",width:"2084",height:"1463"})}),"\n",(0,s.jsxs)(o.ol,{children:["\n",(0,s.jsxs)(o.li,{children:["Insira o nome do aplicativo e selecione ",(0,s.jsx)(o.code,{children:"Integrate any other application you don't find in the gallery (Non-gallery)"}),"."]}),"\n",(0,s.jsxs)(o.li,{children:["Selecione ",(0,s.jsx)(o.code,{children:"Setup single sign-on"})," > ",(0,s.jsx)(o.code,{children:"SAML"}),"."]}),"\n"]}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.img,{alt:"Azure AD set up SSO.webp",src:a(34195).A+"",width:"2084",height:"1462"})}),"\n",(0,s.jsxs)(o.ol,{children:["\n",(0,s.jsx)(o.li,{children:"Siga as instru\xe7\xf5es; como primeiro passo, voc\xea precisar\xe1 preencher a configura\xe7\xe3o b\xe1sica do SAML usando as seguintes informa\xe7\xf5es fornecidas pelo Logto."}),"\n"]}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.img,{alt:"Azure AD SP config",src:a(676).A+"",width:"2084",height:"1461"})}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"Audience URI(SP Entity ID)"}),": Representa um identificador globalmente \xfanico para o seu servi\xe7o Logto, funcionando como o EntityId para SP durante solicita\xe7\xf5es de autentica\xe7\xe3o ao IdP. Este identificador \xe9 fundamental para a troca segura de afirma\xe7\xf5es SAML e outros dados relacionados \xe0 autentica\xe7\xe3o entre o IdP e o Logto."]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"ACS URL"}),": A URL do Assertion Consumer Service (ACS) \xe9 o local onde a afirma\xe7\xe3o SAML \xe9 enviada com uma solicita\xe7\xe3o POST. Esta URL \xe9 usada pelo IdP para enviar a afirma\xe7\xe3o SAML para o Logto. Atua como uma URL de callback onde o Logto espera receber e consumir a resposta SAML contendo as informa\xe7\xf5es de identidade do usu\xe1rio."]}),"\n"]}),"\n",(0,s.jsxs)(o.p,{children:["Clique em ",(0,s.jsx)(o.code,{children:"Save"})," para continuar."]}),"\n",(0,s.jsx)(o.h2,{id:"passo-2-configurar-saml-sso-no-logto",children:"Passo 2: Configurar SAML SSO no Logto"}),"\n",(0,s.jsxs)(o.p,{children:["Para que a integra\xe7\xe3o SAML SSO funcione, voc\xea precisar\xe1 fornecer os metadados do IdP de volta ao Logto. Vamos voltar para o lado do Logto e navegar at\xe9 a aba ",(0,s.jsx)(o.code,{children:"Connection"})," do seu conector SSO do Azure AD."]}),"\n",(0,s.jsxs)(o.p,{children:["O Logto oferece tr\xeas maneiras diferentes de configurar os metadados do IdP. A maneira mais f\xe1cil \xe9 fornecendo a ",(0,s.jsx)(o.code,{children:"metadata URL"})," do aplicativo SSO do Azure AD."]}),"\n",(0,s.jsxs)(o.p,{children:["Copie a ",(0,s.jsx)(o.code,{children:"App Federation Metadata Url"})," da se\xe7\xe3o ",(0,s.jsx)(o.code,{children:"SAML Certificates"})," do seu aplicativo SSO do Azure AD e cole no campo ",(0,s.jsx)(o.code,{children:"Metadata URL"})," no Logto."]}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.img,{alt:"Azure AD Metadata URL.webp",src:a(86045).A+"",width:"2084",height:"1462"})}),"\n",(0,s.jsx)(o.p,{children:"O Logto buscar\xe1 os metadados da URL e configurar\xe1 a integra\xe7\xe3o SAML SSO automaticamente."}),"\n",(0,s.jsx)(o.h2,{id:"passo-3-configurar-mapeamento-de-atributos-do-usu\xe1rio",children:"Passo 3: Configurar mapeamento de atributos do usu\xe1rio"}),"\n",(0,s.jsx)(o.p,{children:"O Logto oferece uma maneira flex\xedvel de mapear os atributos do usu\xe1rio retornados do IdP para os atributos do usu\xe1rio no Logto. O Logto sincronizar\xe1 os seguintes atributos do usu\xe1rio do IdP por padr\xe3o:"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:["id: O identificador \xfanico do usu\xe1rio. O Logto ler\xe1 a reivindica\xe7\xe3o ",(0,s.jsx)(o.code,{children:"nameID"})," da resposta SAML como o id de identidade SSO do usu\xe1rio."]}),"\n",(0,s.jsxs)(o.li,{children:["email: O endere\xe7o de email do usu\xe1rio. O Logto ler\xe1 a reivindica\xe7\xe3o ",(0,s.jsx)(o.code,{children:"email"})," da resposta SAML como o email principal do usu\xe1rio por padr\xe3o."]}),"\n",(0,s.jsx)(o.li,{children:"name: O nome do usu\xe1rio."}),"\n"]}),"\n",(0,s.jsx)(o.p,{children:"Voc\xea pode gerenciar a l\xf3gica de mapeamento de atributos do usu\xe1rio tanto no lado do Azure AD quanto no lado do Logto."}),"\n",(0,s.jsxs)(o.ol,{children:["\n",(0,s.jsxs)(o.li,{children:["\n",(0,s.jsx)(o.p,{children:"Mapear os atributos do usu\xe1rio do AzureAD para os atributos do usu\xe1rio do Logto no lado do Logto."}),"\n",(0,s.jsxs)(o.p,{children:["Visite a se\xe7\xe3o ",(0,s.jsx)(o.code,{children:"Attributes & Claims"})," do seu aplicativo SSO do Azure AD."]}),"\n",(0,s.jsx)(o.p,{children:"Copie os seguintes nomes de atributos (com prefixo de namespace) e cole nos campos correspondentes no Logto."}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:(0,s.jsx)(o.code,{children:"http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"})}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.code,{children:"http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"})," (Recomenda\xe7\xe3o: atualize este valor de atributo para ",(0,s.jsx)(o.code,{children:"user.displayname"})," para uma melhor experi\xeancia do usu\xe1rio)"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.img,{alt:"Azure AD default attribute mapping.webp",src:a(11553).A+"",width:"6252",height:"3504"})}),"\n",(0,s.jsxs)(o.ol,{children:["\n",(0,s.jsxs)(o.li,{children:["\n",(0,s.jsx)(o.p,{children:"Mapear os atributos do usu\xe1rio do AzureAD para os atributos do usu\xe1rio do Logto no lado do AzureAD."}),"\n",(0,s.jsxs)(o.p,{children:["Visite a se\xe7\xe3o ",(0,s.jsx)(o.code,{children:"Attributes & Claims"})," do seu aplicativo SSO do Azure AD."]}),"\n",(0,s.jsxs)(o.p,{children:["Clique em ",(0,s.jsx)(o.code,{children:"Edit"})," e atualize os campos ",(0,s.jsx)(o.code,{children:"Additional claims"})," com base nas configura\xe7\xf5es de atributos do usu\xe1rio do Logto:"]}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:"atualize o valor do nome da reivindica\xe7\xe3o com base nas configura\xe7\xf5es de atributos do usu\xe1rio do Logto."}),"\n",(0,s.jsx)(o.li,{children:"remova o prefixo de namespace."}),"\n",(0,s.jsxs)(o.li,{children:["clique em ",(0,s.jsx)(o.code,{children:"Save"})," para continuar."]}),"\n"]}),"\n",(0,s.jsx)(o.p,{children:"Deve terminar com as seguintes configura\xe7\xf5es:"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.img,{alt:"Azure AD_Logto attribute mapping.webp",src:a(73271).A+"",width:"6252",height:"3162"})}),"\n",(0,s.jsxs)(o.p,{children:["Voc\xea tamb\xe9m pode especificar atributos adicionais do usu\xe1rio no lado do Azure AD. O Logto manter\xe1 um registro dos atributos originais do usu\xe1rio retornados do IdP no campo ",(0,s.jsx)(o.code,{children:"sso_identity"})," do usu\xe1rio."]}),"\n",(0,s.jsx)(o.h2,{id:"passo-4-atribuir-usu\xe1rios-ao-aplicativo-sso-do-azure-ad",children:"Passo 4: Atribuir usu\xe1rios ao aplicativo SSO do Azure AD"}),"\n",(0,s.jsxs)(o.p,{children:["Visite a se\xe7\xe3o ",(0,s.jsx)(o.code,{children:"Users and groups"})," do seu aplicativo SSO do Azure AD. Clique em ",(0,s.jsx)(o.code,{children:"Add user/group"})," para atribuir usu\xe1rios ao aplicativo SSO do Azure AD. Somente usu\xe1rios atribu\xeddos ao seu aplicativo SSO do Azure AD poder\xe3o se autenticar atrav\xe9s do conector SSO do Azure AD."]}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.img,{alt:"Azure AD assign users.webp",src:a(85588).A+"",width:"6705",height:"2931"})}),"\n",(0,s.jsx)(o.h2,{id:"passo-5-definir-dom\xednios-de-email-e-habilitar-o-conector-sso",children:"Passo 5: Definir dom\xednios de email e habilitar o conector SSO"}),"\n",(0,s.jsxs)(o.p,{children:["Forne\xe7a os ",(0,s.jsx)(o.code,{children:"dom\xednios de email"})," da sua organiza\xe7\xe3o na aba ",(0,s.jsx)(o.code,{children:"SSO experience"})," do conector do Logto. Isso habilitar\xe1 o conector SSO como um m\xe9todo de autentica\xe7\xe3o para esses usu\xe1rios."]}),"\n",(0,s.jsx)(o.p,{children:"Usu\xe1rios com endere\xe7os de email nos dom\xednios especificados ser\xe3o redirecionados para usar o conector SAML SSO como seu \xfanico m\xe9todo de autentica\xe7\xe3o."}),"\n",(0,s.jsxs)(o.p,{children:["Por favor, consulte a ",(0,s.jsx)(o.a,{href:"https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/add-application-portal-setup-sso",children:"documenta\xe7\xe3o"})," oficial do Azure AD para mais detalhes sobre a integra\xe7\xe3o SSO do Azure AD."]})]})}function p(e={}){const{wrapper:o}={...(0,r.R)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},85588:(e,o,a)=>{a.d(o,{A:()=>i});const i=a.p+"assets/images/azure_ad_assign_users-8997b6906f1d43ddd66069d053cc429d.webp"},23659:(e,o,a)=>{a.d(o,{A:()=>i});const i=a.p+"assets/images/azure_ad_create_application-53a2881e548a2da0b8da4aa413fffaf6.webp"},11553:(e,o,a)=>{a.d(o,{A:()=>i});const i=a.p+"assets/images/azure_ad_default_attribute_mapping-ef77c6b868372f41ae3a35d0f0e78e1b.webp"},73271:(e,o,a)=>{a.d(o,{A:()=>i});const i=a.p+"assets/images/azure_ad_logto_attribute_mapping-06c15edd5383d728d128338558e0c63b.webp"},86045:(e,o,a)=>{a.d(o,{A:()=>i});const i=a.p+"assets/images/azure_ad_metadata_url-a2a6ca0844e0c42a80f36a0fc6c115b9.webp"},34195:(e,o,a)=>{a.d(o,{A:()=>i});const i=a.p+"assets/images/azure_ad_set_up_single_sign_on-43a54d9878b88ef6473961b222377b47.webp"},676:(e,o,a)=>{a.d(o,{A:()=>i});const i=a.p+"assets/images/azure_ad_sp_config-fceb6b9a77f55d69d13b6ae94a9fc773.webp"},15658:(e,o,a)=>{a.d(o,{R:()=>n,x:()=>t});var i=a(30758);const s={},r=i.createContext(s);function n(e){const o=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function t(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:n(e.components),i.createElement(r.Provider,{value:o},e.children)}}}]);