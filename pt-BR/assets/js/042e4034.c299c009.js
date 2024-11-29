"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[15733],{69927:(e,o,n)=>{n.d(o,{Ay:()=>t,RM:()=>i});var s=n(86070),r=n(15658);const i=[];function c(e){const o={a:"a",admonition:"admonition",p:"p",...(0,r.R)(),...e.components};return(0,s.jsx)(o.admonition,{type:"tip",children:(0,s.jsxs)(o.p,{children:["Neste guia, assumimos que voc\xea tem conhecimento b\xe1sico sobre Conectores (Connectors) do Logto. Se n\xe3o tiver, confira o guia ",(0,s.jsx)(o.a,{href:"/connectors",children:"Configurar conectores"})," para come\xe7ar."]})})}function t(e={}){const{wrapper:o}={...(0,r.R)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},33540:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>d,contentTitle:()=>a,default:()=>m,frontMatter:()=>t,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"integrations/sms/twilio-sms/README","title":"Configurar verifica\xe7\xe3o SMS com Twilio SMS","description":"O conector oficial do Logto para o servi\xe7o de mensagens curtas Twilio.","source":"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/integrations/sms/twilio-sms/README.mdx","sourceDirName":"integrations/sms/twilio-sms","slug":"/integrations/twilio-sms","permalink":"/pt-BR/integrations/twilio-sms","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/pt-BR/docusaurus-plugin-content-docs/current/integrations/sms/twilio-sms/README.mdx","tags":[],"version":"current","frontMatter":{"slug":"/integrations/twilio-sms","sidebar_label":"Twilio SMS","sidebar_custom_props":{"description":"Twilio fornece ferramentas de comunica\xe7\xe3o program\xe1veis para chamadas telef\xf4nicas e mensagens.","logoFilename":"twilio.svg"}},"sidebar":"integrationsSidebar","previous":{"title":"Tencent Short Message","permalink":"/pt-BR/integrations/tencent-sms"},"next":{"title":"Vonage SMS","permalink":"/pt-BR/integrations/vonage-sms"}}');var r=n(86070),i=n(15658),c=n(69927);const t={slug:"/integrations/twilio-sms",sidebar_label:"Twilio SMS",sidebar_custom_props:{description:"Twilio fornece ferramentas de comunica\xe7\xe3o program\xe1veis para chamadas telef\xf4nicas e mensagens.",logoFilename:"twilio.svg"}},a="Configurar verifica\xe7\xe3o SMS com Twilio SMS",d={},l=[...c.RM,{value:"Introdu\xe7\xe3o",id:"introdu\xe7\xe3o",level:2},{value:"Registrar conta Twilio",id:"registrar-conta-twilio",level:2},{value:"Configurar n\xfameros de telefone dos remetentes",id:"configurar-n\xfameros-de-telefone-dos-remetentes",level:2},{value:"Obter credenciais da conta",id:"obter-credenciais-da-conta",level:2},{value:"Compor o JSON do conector",id:"compor-o-json-do-conector",level:2},{value:"Testar o conector Twilio SMS",id:"testar-o-conector-twilio-sms",level:3},{value:"Tipos de configura\xe7\xe3o",id:"tipos-de-configura\xe7\xe3o",level:3},{value:"Refer\xeancia",id:"refer\xeancia",level:2}];function h(e){const o={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.header,{children:(0,r.jsx)(o.h1,{id:"configurar-verifica\xe7\xe3o-sms-com-twilio-sms",children:"Configurar verifica\xe7\xe3o SMS com Twilio SMS"})}),"\n",(0,r.jsx)(o.p,{children:"O conector oficial do Logto para o servi\xe7o de mensagens curtas Twilio."}),"\n",(0,r.jsx)(c.Ay,{}),"\n",(0,r.jsx)(o.h2,{id:"introdu\xe7\xe3o",children:"Introdu\xe7\xe3o"}),"\n",(0,r.jsx)(o.p,{children:'Twilio fornece ferramentas de comunica\xe7\xe3o program\xe1veis para fazer e receber chamadas telef\xf4nicas, enviar e receber mensagens de texto e outras fun\xe7\xf5es de comunica\xe7\xe3o. Podemos enviar mensagens de texto de "c\xf3digo de verifica\xe7\xe3o" atrav\xe9s de suas APIs de servi\xe7o web.'}),"\n",(0,r.jsx)(o.h2,{id:"registrar-conta-twilio",children:"Registrar conta Twilio"}),"\n",(0,r.jsxs)(o.p,{children:["Crie uma nova conta no ",(0,r.jsx)(o.a,{href:"https://www.twilio.com",children:"Twilio"}),". (Pule para o pr\xf3ximo passo se voc\xea j\xe1 tiver uma.)"]}),"\n",(0,r.jsx)(o.h2,{id:"configurar-n\xfameros-de-telefone-dos-remetentes",children:"Configurar n\xfameros de telefone dos remetentes"}),"\n",(0,r.jsxs)(o.p,{children:["V\xe1 para a ",(0,r.jsx)(o.a,{href:"https://console.twilio.com/",children:"p\xe1gina do console Twilio"})," e fa\xe7a login com sua conta Twilio."]}),"\n",(0,r.jsx)(o.p,{children:'Compre um n\xfamero de telefone em "Phone Numbers" -> "Manage" -> "Buy a number".'}),"\n",(0,r.jsxs)(o.blockquote,{children:["\n",(0,r.jsxs)(o.p,{children:["\u2139\ufe0f ",(0,r.jsx)(o.strong,{children:"Dica"})]}),"\n",(0,r.jsx)(o.p,{children:"\xc0s vezes, voc\xea pode encontrar a situa\xe7\xe3o em que o servi\xe7o de SMS n\xe3o \xe9 suportado em pa\xedses ou \xe1reas espec\xedficas. Escolha um n\xfamero de outras regi\xf5es para contornar."}),"\n"]}),"\n",(0,r.jsx)(o.p,{children:'Uma vez que tenhamos um n\xfamero v\xe1lido reivindicado, navegue para "Messaging" -> "Services". Crie um novo Servi\xe7o de Mensagens clicando no bot\xe3o.'}),"\n",(0,r.jsxs)(o.p,{children:["D\xea um nome amig\xe1vel ao servi\xe7o e escolha ",(0,r.jsx)(o.em,{children:"Notify my users"})," como nosso prop\xf3sito de servi\xe7o. No pr\xf3ximo passo, escolha ",(0,r.jsx)(o.code,{children:"Phone Number"})," como ",(0,r.jsx)(o.em,{children:"Sender Type"}),", e adicione o n\xfamero de telefone que acabamos de reivindicar a este servi\xe7o como remetente."]}),"\n",(0,r.jsxs)(o.blockquote,{children:["\n",(0,r.jsxs)(o.p,{children:["\u2139\ufe0f ",(0,r.jsx)(o.strong,{children:"Nota"})]}),"\n",(0,r.jsx)(o.p,{children:"Cada n\xfamero de telefone pode ser vinculado apenas a um servi\xe7o de mensagens."}),"\n"]}),"\n",(0,r.jsx)(o.h2,{id:"obter-credenciais-da-conta",children:"Obter credenciais da conta"}),"\n",(0,r.jsxs)(o.p,{children:["Precisaremos das credenciais da API para fazer o conector funcionar. Vamos come\xe7ar pela ",(0,r.jsx)(o.a,{href:"https://console.twilio.com/",children:"p\xe1gina do console Twilio"}),"."]}),"\n",(0,r.jsxs)(o.p,{children:['Clique no menu "Account" no canto superior direito, depois v\xe1 para a p\xe1gina "API keys & tokens" para obter seu ',(0,r.jsx)(o.code,{children:"Account SID"})," e ",(0,r.jsx)(o.code,{children:"Auth token"}),"."]}),"\n",(0,r.jsxs)(o.p,{children:['Volte para a p\xe1gina de configura\xe7\xf5es de "Messaging" -> "Services" a partir da barra lateral e encontre o ',(0,r.jsx)(o.code,{children:"Sid"})," do seu servi\xe7o."]}),"\n",(0,r.jsx)(o.h2,{id:"compor-o-json-do-conector",children:"Compor o JSON do conector"}),"\n",(0,r.jsxs)(o.p,{children:["Preencha os campos ",(0,r.jsx)(o.em,{children:"accountSID"}),", ",(0,r.jsx)(o.em,{children:"authToken"})," e ",(0,r.jsx)(o.em,{children:"fromMessagingServiceSID"})," com ",(0,r.jsx)(o.code,{children:"Account SID"}),", ",(0,r.jsx)(o.code,{children:"Auth token"})," e ",(0,r.jsx)(o.code,{children:"Sid"})," do servi\xe7o de mensagens correspondente."]}),"\n",(0,r.jsx)(o.p,{children:"Voc\xea pode adicionar v\xe1rios modelos de conector SMS para diferentes casos. Aqui est\xe1 um exemplo de adi\xe7\xe3o de um \xfanico modelo:"}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsxs)(o.li,{children:["Preencha o campo ",(0,r.jsx)(o.code,{children:"content"})," com conte\xfados de string arbitr\xe1ria. N\xe3o se esque\xe7a de deixar o espa\xe7o reservado ",(0,r.jsx)(o.code,{children:"{{code}}"})," para o c\xf3digo de verifica\xe7\xe3o aleat\xf3rio."]}),"\n",(0,r.jsxs)(o.li,{children:["Preencha o campo ",(0,r.jsx)(o.code,{children:"usageType"})," com ",(0,r.jsx)(o.code,{children:"Register"}),", ",(0,r.jsx)(o.code,{children:"SignIn"}),", ",(0,r.jsx)(o.code,{children:"ForgotPassword"}),", ",(0,r.jsx)(o.code,{children:"Generic"})," para diferentes casos de uso. Para habilitar fluxos completos de usu\xe1rio, s\xe3o necess\xe1rios modelos com usageType ",(0,r.jsx)(o.code,{children:"Register"}),", ",(0,r.jsx)(o.code,{children:"SignIn"}),", ",(0,r.jsx)(o.code,{children:"ForgotPassword"})," e ",(0,r.jsx)(o.code,{children:"Generic"}),"."]}),"\n"]}),"\n",(0,r.jsx)(o.h3,{id:"testar-o-conector-twilio-sms",children:"Testar o conector Twilio SMS"}),"\n",(0,r.jsx)(o.p,{children:'Voc\xea pode inserir um n\xfamero de telefone e clicar em "Send" para ver se as configura\xe7\xf5es funcionam antes de "Save and Done".'}),"\n",(0,r.jsxs)(o.p,{children:["\xc9 isso. N\xe3o se esque\xe7a de ",(0,r.jsx)(o.a,{href:"/connectors/sms-connectors/#enable-phone-number-sign-up-or-sign-in",children:"Habilitar conector na experi\xeancia de login"}),"."]}),"\n",(0,r.jsx)(o.h3,{id:"tipos-de-configura\xe7\xe3o",children:"Tipos de configura\xe7\xe3o"}),"\n",(0,r.jsxs)(o.table,{children:[(0,r.jsx)(o.thead,{children:(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.th,{children:"Nome"}),(0,r.jsx)(o.th,{children:"Tipo"})]})}),(0,r.jsxs)(o.tbody,{children:[(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"accountSID"}),(0,r.jsx)(o.td,{children:"string"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"authToken"}),(0,r.jsx)(o.td,{children:"string"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"fromMessagingServiceSID"}),(0,r.jsx)(o.td,{children:"string"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"templates"}),(0,r.jsx)(o.td,{children:"Templates[]"})]})]})]}),"\n",(0,r.jsxs)(o.table,{children:[(0,r.jsx)(o.thead,{children:(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.th,{children:"Propriedades do Modelo"}),(0,r.jsx)(o.th,{children:"Tipo"}),(0,r.jsx)(o.th,{children:"Valores do enum"})]})}),(0,r.jsxs)(o.tbody,{children:[(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"content"}),(0,r.jsx)(o.td,{children:"string"}),(0,r.jsx)(o.td,{children:"N/A"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"usageType"}),(0,r.jsx)(o.td,{children:"enum string"}),(0,r.jsx)(o.td,{children:"'Register' | 'SignIn' | 'ForgotPassword' | 'Generic'"})]})]})]}),"\n",(0,r.jsx)(o.h2,{id:"refer\xeancia",children:"Refer\xeancia"}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsx)(o.li,{children:(0,r.jsx)(o.a,{href:"https://www.twilio.com/docs/api/errors",children:"Twilio - Dicion\xe1rio de Erros e Avisos"})}),"\n"]})]})}function m(e={}){const{wrapper:o}={...(0,i.R)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},15658:(e,o,n)=>{n.d(o,{R:()=>c,x:()=>t});var s=n(30758);const r={},i=s.createContext(r);function c(e){const o=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function t(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(i.Provider,{value:o},e.children)}}}]);