"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[93910],{69927:(e,o,s)=>{s.d(o,{Ay:()=>c,RM:()=>r});var n=s(86070),i=s(15658);const r=[];function a(e){const o={a:"a",admonition:"admonition",p:"p",...(0,i.R)(),...e.components};return(0,n.jsx)(o.admonition,{type:"tip",children:(0,n.jsxs)(o.p,{children:["Neste guia, assumimos que voc\xea tem conhecimento b\xe1sico sobre Conectores (Connectors) do Logto. Se n\xe3o tiver, confira o guia ",(0,n.jsx)(o.a,{href:"/connectors",children:"Configurar conectores"})," para come\xe7ar."]})})}function c(e={}){const{wrapper:o}={...(0,i.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},10012:(e,o,s)=>{s.r(o),s.d(o,{assets:()=>d,contentTitle:()=>t,default:()=>m,frontMatter:()=>c,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"integrations/sms/aliyun-sms/README","title":"Configurar verifica\xe7\xe3o SMS com Aliyun Short Message Service","description":"O conector oficial do Logto para o servi\xe7o de mensagens curtas da Aliyun.","source":"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/integrations/sms/aliyun-sms/README.mdx","sourceDirName":"integrations/sms/aliyun-sms","slug":"/integrations/aliyun-sms","permalink":"/pt-BR/integrations/aliyun-sms","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/pt-BR/docusaurus-plugin-content-docs/current/integrations/sms/aliyun-sms/README.mdx","tags":[],"version":"current","frontMatter":{"slug":"/integrations/aliyun-sms","sidebar_label":"Aliyun Short Message","sidebar_custom_props":{"description":"Aliyun fornece servi\xe7os de computa\xe7\xe3o em nuvem para empresas online.","logoFilename":"aliyun.svg"}},"sidebar":"integrationsSidebar","previous":{"title":"SMTP","permalink":"/pt-BR/integrations/smtp"},"next":{"title":"GatewayAPI SMS","permalink":"/pt-BR/integrations/gatewayapi"}}');var i=s(86070),r=s(15658),a=s(69927);const c={slug:"/integrations/aliyun-sms",sidebar_label:"Aliyun Short Message",sidebar_custom_props:{description:"Aliyun fornece servi\xe7os de computa\xe7\xe3o em nuvem para empresas online.",logoFilename:"aliyun.svg"}},t="Configurar verifica\xe7\xe3o SMS com Aliyun Short Message Service",d={},l=[...a.RM,{value:"Introdu\xe7\xe3o",id:"introdu\xe7\xe3o",level:2},{value:"Configurar um servi\xe7o de mensagens curtas no Console SMS da Aliyun",id:"configurar-um-servi\xe7o-de-mensagens-curtas-no-console-sms-da-aliyun",level:2},{value:"Criar uma conta Aliyun",id:"criar-uma-conta-aliyun",level:3},{value:"Ativar e Configurar o Aliyun Short Message Service",id:"ativar-e-configurar-o-aliyun-short-message-service",level:3},{value:"Compor o JSON do conector",id:"compor-o-json-do-conector",level:2},{value:"Testar o conector SMS da Aliyun",id:"testar-o-conector-sms-da-aliyun",level:3},{value:"Tipos de configura\xe7\xe3o",id:"tipos-de-configura\xe7\xe3o",level:3},{value:"Refer\xeancias",id:"refer\xeancias",level:2}];function u(e){const o={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.header,{children:(0,i.jsx)(o.h1,{id:"configurar-verifica\xe7\xe3o-sms-com-aliyun-short-message-service",children:"Configurar verifica\xe7\xe3o SMS com Aliyun Short Message Service"})}),"\n",(0,i.jsx)(o.p,{children:"O conector oficial do Logto para o servi\xe7o de mensagens curtas da Aliyun."}),"\n",(0,i.jsx)(a.Ay,{}),"\n",(0,i.jsx)(o.h2,{id:"introdu\xe7\xe3o",children:"Introdu\xe7\xe3o"}),"\n",(0,i.jsx)(o.p,{children:"Aliyun \xe9 um provedor de servi\xe7os em nuvem prim\xe1rio na \xc1sia, oferecendo muitos servi\xe7os em nuvem, incluindo SMS (servi\xe7o de mensagens curtas). O Aliyun SMS Connector \xe9 um plugin fornecido pela equipe Logto para chamar o servi\xe7o SMS da Aliyun, com a ajuda do qual os usu\xe1rios finais do Logto podem se registrar e fazer login em sua conta Logto via c\xf3digo de verifica\xe7\xe3o SMS."}),"\n",(0,i.jsx)(o.h2,{id:"configurar-um-servi\xe7o-de-mensagens-curtas-no-console-sms-da-aliyun",children:"Configurar um servi\xe7o de mensagens curtas no Console SMS da Aliyun"}),"\n",(0,i.jsxs)(o.blockquote,{children:["\n",(0,i.jsxs)(o.p,{children:["\ud83d\udca1 ",(0,i.jsx)(o.strong,{children:"Dica"})]}),"\n",(0,i.jsx)(o.p,{children:"Voc\xea pode pular algumas se\xe7\xf5es se j\xe1 as tiver conclu\xeddo."}),"\n"]}),"\n",(0,i.jsx)(o.h3,{id:"criar-uma-conta-aliyun",children:"Criar uma conta Aliyun"}),"\n",(0,i.jsxs)(o.p,{children:["V\xe1 para o ",(0,i.jsx)(o.a,{href:"https://cn.aliyun.com/",children:"site da Aliyun"})," e registre sua conta Aliyun se voc\xea n\xe3o tiver uma."]}),"\n",(0,i.jsx)(o.h3,{id:"ativar-e-configurar-o-aliyun-short-message-service",children:"Ativar e Configurar o Aliyun Short Message Service"}),"\n",(0,i.jsxs)(o.ol,{children:["\n",(0,i.jsxs)(o.li,{children:["Fa\xe7a login com sua conta Aliyun no ",(0,i.jsx)(o.a,{href:"https://cn.aliyun.com/",children:"site da Aliyun"})," e v\xe1 para a ",(0,i.jsx)(o.a,{href:"https://www.aliyun.com/product/sms",children:"p\xe1gina do console do servi\xe7o SMS"}),"."]}),"\n",(0,i.jsx)(o.li,{children:'Clique no bot\xe3o "Open for free" (\u514d\u8d39\u5f00\u901a) no canto superior esquerdo da p\xe1gina do servi\xe7o SMS e comece o processo de configura\xe7\xe3o.'}),"\n",(0,i.jsx)(o.li,{children:'Leia e concorde com o "SMS service activation Agreement" (\u77ed\u4fe1\u670d\u52a1\u5f00\u901a\u6761\u6b3e) e clique em "Subscribe to a service" (\u5f00\u901a\u670d\u52a1) para prosseguir.'}),"\n",(0,i.jsxs)(o.li,{children:["Agora voc\xea est\xe1 na ",(0,i.jsx)(o.a,{href:"https://dysms.console.aliyun.com/overview",children:"p\xe1gina do console do servi\xe7o SMS"}),', v\xe1 para "Mainland China" (\u56fd\u5185\u6d88\u606f) ou "Outside Mainland China" (\u56fd\u9645/\u6e2f\u6fb3\u53f0\u6d88\u606f) no menu lateral conforme seu caso de uso.']}),"\n",(0,i.jsxs)(o.li,{children:["Adicione assinatura e modelo seguindo as diretrizes e forne\xe7a os materiais ou informa\xe7\xf5es necess\xe1rias para revis\xe3o.","\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsx)(o.li,{children:'Lembre-se de selecionar "Verification Code Message" (\u9a8c\u8bc1\u7801) como "Scenario" (\u9002\u7528\u573a\u666f) ao preencher a aplica\xe7\xe3o de assinatura e tamb\xe9m "Verification Code Message" (\u9a8c\u8bc1\u7801) para "Type" (\u6a21\u677f\u7c7b\u578b) ao solicitar uma revis\xe3o de modelo, pois estamos usando essas assinaturas e modelos para enviar c\xf3digo de verifica\xe7\xe3o. Atualmente, n\xe3o suportamos o envio de mensagens SMS al\xe9m de mensagens de texto relacionadas a c\xf3digos de verifica\xe7\xe3o.'}),"\n",(0,i.jsxs)(o.li,{children:["Al\xe9m disso, use ",(0,i.jsx)(o.code,{children:"{{code}}"})," como um espa\xe7o reservado onde voc\xea deseja colocar seu c\xf3digo de verifica\xe7\xe3o digital no conte\xfado do modelo."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(o.li,{children:["Ap\xf3s enviar sua aplica\xe7\xe3o de assinatura e modelo SMS, voc\xea precisar\xe1 esperar que ela entre em vigor. Neste ponto, podemos voltar para a ",(0,i.jsx)(o.a,{href:"https://dysms.console.aliyun.com/overview",children:"p\xe1gina do console do servi\xe7o SMS"})," e enviar um SMS de teste. Se suas assinaturas e modelos estiverem prontos para uso, voc\xea pode test\xe1-los diretamente; se ainda n\xe3o estiverem em vigor, a Aliyun tamb\xe9m fornece modelos de teste.","\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsx)(o.li,{children:"Voc\xea pode precisar recarregar uma pequena quantia de dinheiro antes de enviar mensagens de teste."}),"\n",(0,i.jsxs)(o.li,{children:['Voc\xea tamb\xe9m pode ser solicitado a vincular um n\xfamero de telefone de teste antes de enviar mensagens de teste. Para mais detalhes, v\xe1 para a guia "Quick Start" (\u5feb\u901f\u5b66\u4e60) no menu lateral da ',(0,i.jsx)(o.a,{href:"https://dysms.console.aliyun.com/overview",children:"p\xe1gina do console do servi\xe7o SMS"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(o.h2,{id:"compor-o-json-do-conector",children:"Compor o JSON do conector"}),"\n",(0,i.jsxs)(o.ol,{children:["\n",(0,i.jsxs)(o.li,{children:["Na ",(0,i.jsx)(o.a,{href:"https://dysms.console.aliyun.com/overview",children:"p\xe1gina do console do servi\xe7o SMS"}),', passe o mouse sobre seu avatar no canto superior direito e v\xe1 para "AccessKey Management" (AccessKey \u7ba1\u7406), e clique em "Create AccessKey" (\u521b\u5efa AccessKey). Voc\xea obter\xe1 um par "AccessKey ID" e "AccessKey Secret" ap\xf3s concluir a verifica\xe7\xe3o de seguran\xe7a. Por favor, mantenha-os adequadamente.']}),"\n",(0,i.jsxs)(o.li,{children:['V\xe1 para a guia "Mainland China" (\u56fd\u5185\u6d88\u606f) ou "Outside Mainland China" (\u56fd\u9645/\u6e2f\u6fb3\u53f0\u6d88\u606f) que voc\xea acabou de visitar, voc\xea pode encontrar facilmente "Signature" (\u7b7e\u540d\u540d\u79f0) e "Template Code" (\u6a21\u677f CODE).',"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsx)(o.li,{children:'Se voc\xea quiser usar a assinatura e o modelo apenas para teste, v\xe1 para a guia "Quick Start" (\u5feb\u901f\u5b66\u4e60) e voc\xea os encontrar\xe1 abaixo de "Signature & Templates (For Test Only)".'}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(o.li,{children:["Preencha as configura\xe7\xf5es do Aliyun SMS Connector:","\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsxs)(o.li,{children:["Preencha os campos ",(0,i.jsx)(o.code,{children:"accessKeyId"})," e ",(0,i.jsx)(o.code,{children:"accessKeySecret"})," com os pares de chave de acesso que voc\xea obteve no passo 1."]}),"\n",(0,i.jsxs)(o.li,{children:["Preencha o campo ",(0,i.jsx)(o.code,{children:"signName"}),' com "Signature" (\u7b7e\u540d\u540d\u79f0) mencionado no passo 2. Todos os modelos compartilhar\xe3o este nome de assinatura.']}),"\n",(0,i.jsxs)(o.li,{children:["Voc\xea pode adicionar v\xe1rios modelos de conector SMS para diferentes casos. Aqui est\xe1 um exemplo de adi\xe7\xe3o de um \xfanico modelo:","\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsxs)(o.li,{children:["Preencha o campo ",(0,i.jsx)(o.code,{children:"templateCode"}),', que \xe9 como voc\xea pode controlar o contexto do SMS, com "Template Code" (\u6a21\u677f CODE) do passo 2.']}),"\n",(0,i.jsxs)(o.li,{children:["Preencha o campo ",(0,i.jsx)(o.code,{children:"usageType"})," com ",(0,i.jsx)(o.code,{children:"Register"}),", ",(0,i.jsx)(o.code,{children:"SignIn"}),", ",(0,i.jsx)(o.code,{children:"ForgotPassword"})," ou ",(0,i.jsx)(o.code,{children:"Generic"})," para diferentes casos de uso. (",(0,i.jsx)(o.code,{children:"usageType"})," \xe9 uma propriedade do Logto para identificar o caso de uso adequado.) Para habilitar fluxos de usu\xe1rio completos, s\xe3o necess\xe1rios modelos com usageType ",(0,i.jsx)(o.code,{children:"Register"}),", ",(0,i.jsx)(o.code,{children:"SignIn"}),", ",(0,i.jsx)(o.code,{children:"ForgotPassword"})," e ",(0,i.jsx)(o.code,{children:"Generic"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(o.h3,{id:"testar-o-conector-sms-da-aliyun",children:"Testar o conector SMS da Aliyun"}),"\n",(0,i.jsx)(o.p,{children:'Voc\xea pode digitar um n\xfamero de telefone e clicar em "Send" para ver se as configura\xe7\xf5es funcionam antes de "Save and Done".'}),"\n",(0,i.jsxs)(o.p,{children:["\xc9 isso. N\xe3o se esque\xe7a de ",(0,i.jsx)(o.a,{href:"/connectors/sms-connectors/#enable-phone-number-sign-up-or-sign-in",children:"Habilitar conector na experi\xeancia de login"}),"."]}),"\n",(0,i.jsx)(o.h3,{id:"tipos-de-configura\xe7\xe3o",children:"Tipos de configura\xe7\xe3o"}),"\n",(0,i.jsxs)(o.table,{children:[(0,i.jsx)(o.thead,{children:(0,i.jsxs)(o.tr,{children:[(0,i.jsx)(o.th,{children:"Nome"}),(0,i.jsx)(o.th,{children:"Tipo"})]})}),(0,i.jsxs)(o.tbody,{children:[(0,i.jsxs)(o.tr,{children:[(0,i.jsx)(o.td,{children:"accessKeyId"}),(0,i.jsx)(o.td,{children:"string"})]}),(0,i.jsxs)(o.tr,{children:[(0,i.jsx)(o.td,{children:"accessKeySecret"}),(0,i.jsx)(o.td,{children:"string"})]}),(0,i.jsxs)(o.tr,{children:[(0,i.jsx)(o.td,{children:"signName"}),(0,i.jsx)(o.td,{children:"string"})]}),(0,i.jsxs)(o.tr,{children:[(0,i.jsx)(o.td,{children:"templates"}),(0,i.jsx)(o.td,{children:"Template[]"})]})]})]}),"\n",(0,i.jsxs)(o.table,{children:[(0,i.jsx)(o.thead,{children:(0,i.jsxs)(o.tr,{children:[(0,i.jsx)(o.th,{children:"Propriedades do Template"}),(0,i.jsx)(o.th,{children:"Tipo"}),(0,i.jsx)(o.th,{children:"Valores do enum"})]})}),(0,i.jsxs)(o.tbody,{children:[(0,i.jsxs)(o.tr,{children:[(0,i.jsx)(o.td,{children:"templateCode"}),(0,i.jsx)(o.td,{children:"string"}),(0,i.jsx)(o.td,{children:"N/A"})]}),(0,i.jsxs)(o.tr,{children:[(0,i.jsx)(o.td,{children:"usageType"}),(0,i.jsx)(o.td,{children:"enum string"}),(0,i.jsx)(o.td,{children:"'Register' | 'SignIn' | 'ForgotPassword' | 'Generic'"})]})]})]}),"\n",(0,i.jsx)(o.h2,{id:"refer\xeancias",children:"Refer\xeancias"}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsx)(o.li,{children:(0,i.jsx)(o.a,{href:"https://dysms.console.aliyun.com/quickstart",children:"Aliyun SMS - Quick Start"})}),"\n"]})]})}function m(e={}){const{wrapper:o}={...(0,r.R)(),...e.components};return o?(0,i.jsx)(o,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},15658:(e,o,s)=>{s.d(o,{R:()=>a,x:()=>c});var n=s(30758);const i={},r=n.createContext(i);function a(e){const o=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function c(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(r.Provider,{value:o},e.children)}}}]);