"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[5747],{69927:(e,o,n)=>{n.d(o,{Ay:()=>t,RM:()=>r});var a=n(86070),s=n(15658);const r=[];function i(e){const o={a:"a",admonition:"admonition",p:"p",...(0,s.R)(),...e.components};return(0,a.jsx)(o.admonition,{type:"tip",children:(0,a.jsxs)(o.p,{children:["Neste guia, assumimos que voc\xea tem conhecimento b\xe1sico sobre Conectores (Connectors) do Logto. Se n\xe3o tiver, confira o guia ",(0,a.jsx)(o.a,{href:"/connectors",children:"Configurar conectores"})," para come\xe7ar."]})})}function t(e={}){const{wrapper:o}={...(0,s.R)(),...e.components};return o?(0,a.jsx)(o,{...e,children:(0,a.jsx)(i,{...e})}):i(e)}},44044:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>t,metadata:()=>a,toc:()=>u});const a=JSON.parse('{"id":"integrations/sms/vonage-sms/README","title":"Configurar verifica\xe7\xe3o SMS com Vonage SMS","description":"O conector oficial do Logto para Vonage SMS.","source":"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/integrations/sms/vonage-sms/README.mdx","sourceDirName":"integrations/sms/vonage-sms","slug":"/integrations/vonage-sms","permalink":"/pt-BR/integrations/vonage-sms","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/pt-BR/docusaurus-plugin-content-docs/current/integrations/sms/vonage-sms/README.mdx","tags":[],"version":"current","frontMatter":{"slug":"/integrations/vonage-sms","sidebar_label":"Vonage SMS","sidebar_custom_props":{"description":"APIs de comunica\xe7\xe3o para conectar o mundo.","darkLogoFilename":"vonage-sms-dark.svg"}},"sidebar":"integrationsSidebar","previous":{"title":"Twilio SMS","permalink":"/pt-BR/integrations/twilio-sms"},"next":{"title":"Microsoft Entra ID (OIDC)","permalink":"/pt-BR/integrations/entra-id-oidc"}}');var s=n(86070),r=n(15658),i=n(69927);const t={slug:"/integrations/vonage-sms",sidebar_label:"Vonage SMS",sidebar_custom_props:{description:"APIs de comunica\xe7\xe3o para conectar o mundo.",darkLogoFilename:"vonage-sms-dark.svg"}},c="Configurar verifica\xe7\xe3o SMS com Vonage SMS",d={},u=[...i.RM,{value:"Introdu\xe7\xe3o",id:"introdu\xe7\xe3o",level:2},{value:"Configura\xe7\xe3o no Vonage",id:"configura\xe7\xe3o-no-vonage",level:2},{value:"Configura\xe7\xe3o no Logto",id:"configura\xe7\xe3o-no-logto",level:2}];function l(e){const o={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.header,{children:(0,s.jsx)(o.h1,{id:"configurar-verifica\xe7\xe3o-sms-com-vonage-sms",children:"Configurar verifica\xe7\xe3o SMS com Vonage SMS"})}),"\n",(0,s.jsx)(o.p,{children:"O conector oficial do Logto para Vonage SMS."}),"\n",(0,s.jsx)(i.Ay,{}),"\n",(0,s.jsx)(o.h2,{id:"introdu\xe7\xe3o",children:"Introdu\xe7\xe3o"}),"\n",(0,s.jsx)(o.p,{children:"Vonage \xe9 um provedor de comunica\xe7\xf5es global, oferecendo servi\xe7os de comunica\xe7\xe3o robustos baseados em nuvem, incluindo SMS (servi\xe7o de mensagens curtas). O Conector SMS Vonage \xe9 um plugin fornecido pela equipe Logto para permitir que os usu\xe1rios finais do Logto se registrem e fa\xe7am login em sua conta Logto via c\xf3digos de verifica\xe7\xe3o SMS."}),"\n",(0,s.jsx)(o.h2,{id:"configura\xe7\xe3o-no-vonage",children:"Configura\xe7\xe3o no Vonage"}),"\n",(0,s.jsx)(o.admonition,{type:"tip",children:(0,s.jsx)(o.p,{children:"Voc\xea pode pular esta etapa se j\xe1 a tiver conclu\xeddo."})}),"\n",(0,s.jsxs)(o.p,{children:["Para trabalhar com este conector, voc\xea precisar\xe1 ",(0,s.jsx)(o.a,{href:"https://developer.vonage.com/en/account/guides/dashboard-management#create-and-configure-a-vonage-account",children:"criar uma conta"})," no Vonage. Isso lhe dar\xe1 uma chave de API e um segredo que voc\xea pode usar para acessar as APIs atrav\xe9s deste conector."]}),"\n",(0,s.jsx)(o.p,{children:"Depois de ter uma conta, voc\xea pode encontrar sua chave de API e segredo de API no topo do Painel de API do Vonage."}),"\n",(0,s.jsxs)(o.p,{children:["E voc\xea pode precisar ",(0,s.jsx)(o.a,{href:"https://developer.vonage.com/en/numbers/guides/number-management#rent-a-virtual-number",children:"alugar um n\xfamero virtual"})," para enviar mensagens SMS."]}),"\n",(0,s.jsxs)(o.p,{children:["Consulte a ",(0,s.jsx)(o.a,{href:"https://developer.vonage.com/en/messaging/sms/overview",children:"API SMS Vonage"})," para mais informa\xe7\xf5es."]}),"\n",(0,s.jsx)(o.h2,{id:"configura\xe7\xe3o-no-logto",children:"Configura\xe7\xe3o no Logto"}),"\n",(0,s.jsxs)(o.ol,{children:["\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"API Key"}),": Sua chave de API Vonage."]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"API Secret"}),": Seu segredo de API Vonage."]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"Brand Name"}),": O nome da marca que voc\xea deseja usar para enviar o SMS, isso tamb\xe9m \xe9 chamado de campo ",(0,s.jsx)(o.code,{children:"from"}),", veja a ",(0,s.jsx)(o.a,{href:"https://developer.vonage.com/en/messaging/sms/guides/custom-sender-id",children:"Identidade do Remetente"})," para mais informa\xe7\xf5es."]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"Templates"}),": Os modelos que voc\xea deseja usar para enviar o SMS, voc\xea pode usar os modelos padr\xe3o ou modific\xe1-los conforme necess\xe1rio."]}),"\n"]})]})}function m(e={}){const{wrapper:o}={...(0,r.R)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},15658:(e,o,n)=>{n.d(o,{R:()=>i,x:()=>t});var a=n(30758);const s={},r=a.createContext(s);function i(e){const o=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function t(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(r.Provider,{value:o},e.children)}}}]);