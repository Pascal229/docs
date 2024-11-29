"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[49507],{92603:(e,o,s)=>{s.r(o),s.d(o,{assets:()=>d,contentTitle:()=>t,default:()=>l,frontMatter:()=>n,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"end-user-flows/enterprise-sso/README","title":"SSO corporativo","description":"A autentica\xe7\xe3o \xfanica (SSO) permite que os usu\xe1rios fa\xe7am login em v\xe1rios aplicativos com um \xfanico conjunto de credenciais. Isso simplifica o processo de autentica\xe7\xe3o para usu\xe1rios corporativos, especialmente para as plataformas SaaS da for\xe7a de trabalho de hoje.","source":"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/end-user-flows/enterprise-sso/README.mdx","sourceDirName":"end-user-flows/enterprise-sso","slug":"/end-user-flows/enterprise-sso/","permalink":"/pt-BR/end-user-flows/enterprise-sso/","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/pt-BR/docusaurus-plugin-content-docs/current/end-user-flows/enterprise-sso/README.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"docsSidebar","previous":{"title":"Desativar registro de usu\xe1rio","permalink":"/pt-BR/end-user-flows/sign-up-and-sign-in/disable-user-registration"},"next":{"title":"SSO iniciado pelo SP","permalink":"/pt-BR/end-user-flows/enterprise-sso/sp-initiated-sso"}}');var a=s(86070),r=s(15658);const n={sidebar_position:2},t="SSO corporativo",d={},c=[{value:"Componentes principais do SSO corporativo",id:"componentes-principais-do-sso-corporativo",level:2},{value:"Fluxo de trabalho de SSO suportado",id:"fluxo-de-trabalho-de-sso-suportado",level:2},{value:"Protocolos de SSO suportados",id:"protocolos-de-sso-suportados",level:2},{value:"Perguntas frequentes",id:"perguntas-frequentes",level:2},{value:"Recursos relacionados",id:"recursos-relacionados",level:2}];function u(e){const o={a:"a",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components},{Details:i,Url:n}=o;return i||p("Details",!0),n||p("Url",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.header,{children:(0,a.jsx)(o.h1,{id:"sso-corporativo",children:"SSO corporativo"})}),"\n",(0,a.jsx)(o.p,{children:"A autentica\xe7\xe3o \xfanica (SSO) permite que os usu\xe1rios fa\xe7am login em v\xe1rios aplicativos com um \xfanico conjunto de credenciais. Isso simplifica o processo de autentica\xe7\xe3o para usu\xe1rios corporativos, especialmente para as plataformas SaaS da for\xe7a de trabalho de hoje."}),"\n",(0,a.jsx)(o.p,{children:"O Logto aprimora a experi\xeancia de SSO fornecendo uma ampla gama de conectores de SSO corporativo que voc\xea pode configurar e integrar facilmente com seus aplicativos, por exemplo, Google Workspace, Microsoft Azure AD, Okta e mais."}),"\n",(0,a.jsx)(o.h2,{id:"componentes-principais-do-sso-corporativo",children:"Componentes principais do SSO corporativo"}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsxs)(o.li,{children:[(0,a.jsx)(o.strong,{children:"Provedor de identidade (IdP)"}),": Um servi\xe7o que verifica identidades de usu\xe1rios e gerencia suas credenciais de login. Ap\xf3s confirmar a identidade de um usu\xe1rio, o IdP gera tokens de autentica\xe7\xe3o ou declara\xe7\xf5es e permite que o usu\xe1rio acesse v\xe1rios aplicativos ou servi\xe7os sem precisar fazer login novamente. Essencialmente, \xe9 o sistema de refer\xeancia para gerenciar identidades e permiss\xf5es de funcion\xe1rios em sua empresa. Exemplos: Okta, Azure AD, Google Workspace, LastPass, OneLogin, Ping Identity, Cyberark, etc."]}),"\n",(0,a.jsxs)(o.li,{children:[(0,a.jsx)(o.strong,{children:"Provedor de servi\xe7o (SP)"}),": Um sistema ou aplicativo que requer autentica\xe7\xe3o de usu\xe1rio e depende do Provedor de Identidade (IdP) para autentica\xe7\xe3o. O SP recebe tokens de autentica\xe7\xe3o ou declara\xe7\xf5es do IdP, concedendo acesso aos seus recursos sem exigir credenciais de login separadas. Exemplos: Slack, Shopify, Dropbox, Figma, Notion, etc... e seu servi\xe7o."]}),"\n",(0,a.jsxs)(o.li,{children:[(0,a.jsx)(o.strong,{children:"Identidade corporativa"}),": Normalmente identificada pelo uso de um dom\xednio de email da empresa para login. Esta conta de email corporativa pertence, em \xfaltima an\xe1lise, \xe0 empresa."]}),"\n"]}),"\n",(0,a.jsx)(o.h2,{id:"fluxo-de-trabalho-de-sso-suportado",children:"Fluxo de trabalho de SSO suportado"}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsxs)(o.li,{children:[(0,a.jsx)(o.strong,{children:"SSO iniciado pelo IdP"}),": No SSO iniciado pelo IdP, o Provedor de Identidade (IdP) controla principalmente o processo de autentica\xe7\xe3o \xfanica. Este processo come\xe7a quando um usu\xe1rio faz login na plataforma do IdP, como um portal da empresa ou um painel de identidade centralizado. Uma vez autenticado, o IdP gera um token de autentica\xe7\xe3o ou declara\xe7\xe3o, que \xe9 ent\xe3o usado para conceder ao usu\xe1rio acesso a v\xe1rios servi\xe7os ou aplicativos conectados (SPs) sem exigir logins adicionais.\n",(0,a.jsx)(o.img,{alt:"SSO iniciado pelo IdP",src:s(15043).A+"",width:"2704",height:"560"})]}),"\n",(0,a.jsxs)(o.li,{children:[(0,a.jsx)(o.strong,{children:"SSO iniciado pelo SP"}),": No SSO iniciado pelo SP, o Provedor de Servi\xe7o (SP) assume a lideran\xe7a na inicia\xe7\xe3o e gerenciamento do processo de autentica\xe7\xe3o \xfanica, frequentemente preferido em cen\xe1rios B2B. Este cen\xe1rio ocorre quando um usu\xe1rio tenta acessar um servi\xe7o ou aplicativo espec\xedfico (o SP) e \xe9 redirecionado para seu IdP para autentica\xe7\xe3o. Ap\xf3s o login bem-sucedido no IdP, um token de autentica\xe7\xe3o \xe9 enviado de volta ao SP, concedendo acesso ao usu\xe1rio. O Logto suporta SSO iniciado pelo SP para seus servi\xe7os B2B.\n",(0,a.jsx)(o.img,{alt:"SSO iniciado pelo SP",src:s(92065).A+"",width:"2704",height:"560"})]}),"\n"]}),"\n",(0,a.jsx)(o.h2,{id:"protocolos-de-sso-suportados",children:"Protocolos de SSO suportados"}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsxs)(o.li,{children:[(0,a.jsx)(o.strong,{children:"SAML"}),": Security Assertion Markup Language (SAML) \xe9 um padr\xe3o aberto baseado em XML para troca de dados de autentica\xe7\xe3o e autoriza\xe7\xe3o entre um IdP e SP. Este protocolo \xe9 particularmente h\xe1bil em lidar com requisitos de seguran\xe7a complexos em n\xedvel empresarial."]}),"\n",(0,a.jsxs)(o.li,{children:[(0,a.jsx)(o.strong,{children:"OIDC"}),": OpenID Connect (OIDC) \xe9 uma camada de identidade simples constru\xedda sobre o protocolo OAuth 2.0. Ele emprega JSON/REST para comunica\xe7\xe3o, tornando-o mais leve e mais adequado para arquiteturas de aplicativos modernos, incluindo aplicativos m\xf3veis e aplicativos de p\xe1gina \xfanica (SPAs)."]}),"\n"]}),"\n",(0,a.jsx)(o.h2,{id:"perguntas-frequentes",children:"Perguntas frequentes"}),"\n",(0,a.jsxs)(i,{children:[(0,a.jsx)("summary",{children:"Como adicionar bot\xf5es de conector SSO e fazer login diretamente com o provedor SSO no meu site?"}),(0,a.jsxs)(o.p,{children:["O Logto permite que voc\xea adicione bot\xf5es de login social ao seu site e inicie o processo de login SSO diretamente sem mostrar o formul\xe1rio de login padr\xe3o. Confira nosso guia de ",(0,a.jsx)(o.a,{href:"/end-user-flows/authentication-parameters/direct-sign-in/",children:"Login direto"})," para instru\xe7\xf5es detalhadas."]})]}),"\n",(0,a.jsx)(o.h2,{id:"recursos-relacionados",children:"Recursos relacionados"}),"\n",(0,a.jsx)(n,{href:"https://www.youtube.com/watch?v=-mD8Sfab7sI&t=12s",children:" Experi\xeancia de SSO corporativo"})]})}function l(e={}){const{wrapper:o}={...(0,r.R)(),...e.components};return o?(0,a.jsx)(o,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}function p(e,o){throw new Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},15043:(e,o,s)=>{s.d(o,{A:()=>i});const i=s.p+"assets/images/idp-initiated-sso-fa28df4b9ccb0be62e3a5de9d8ee08bc.png"},92065:(e,o,s)=>{s.d(o,{A:()=>i});const i=s.p+"assets/images/sp-initiated-sso-8314b0882ae25cc5d39ba6beb466a367.png"},15658:(e,o,s)=>{s.d(o,{R:()=>n,x:()=>t});var i=s(30758);const a={},r=i.createContext(a);function n(e){const o=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function t(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:n(e.components),i.createElement(r.Provider,{value:o},e.children)}}}]);