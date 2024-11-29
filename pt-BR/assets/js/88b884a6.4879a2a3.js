"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[91136],{93270:(e,o,a)=>{a.r(o),a.d(o,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>c,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"integrations/email/http-mail/README","title":"Configurar verifica\xe7\xe3o de email via chamada HTTP","description":"O conector oficial do Logto para email HTTP.","source":"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/integrations/email/http-mail/README.mdx","sourceDirName":"integrations/email/http-mail","slug":"/integrations/http-email","permalink":"/pt-BR/integrations/http-email","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/pt-BR/docusaurus-plugin-content-docs/current/integrations/email/http-mail/README.mdx","tags":[],"version":"current","frontMatter":{"slug":"/integrations/http-email","sidebar_label":"HTTP Email","sidebar_custom_props":{"description":"Enviar email via chamada HTTP."}},"sidebar":"integrationsSidebar","previous":{"title":"AWS Direct Mail","permalink":"/pt-BR/integrations/aws-ses"},"next":{"title":"Mailgun","permalink":"/pt-BR/integrations/mailgun"}}');var n=a(86070),t=a(15658),r=a(69927);const c={slug:"/integrations/http-email",sidebar_label:"HTTP Email",sidebar_custom_props:{description:"Enviar email via chamada HTTP."}},s="Configurar verifica\xe7\xe3o de email via chamada HTTP",l={},d=[...r.RM,{value:"Introdu\xe7\xe3o",id:"introdu\xe7\xe3o",level:2},{value:"Configurar conector de email HTTP",id:"configurar-conector-de-email-http",level:2},{value:"Payload",id:"payload",level:2}];function p(e){const o={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.header,{children:(0,n.jsx)(o.h1,{id:"configurar-verifica\xe7\xe3o-de-email-via-chamada-http",children:"Configurar verifica\xe7\xe3o de email via chamada HTTP"})}),"\n",(0,n.jsx)(o.p,{children:"O conector oficial do Logto para email HTTP."}),"\n",(0,n.jsx)(r.Ay,{}),"\n",(0,n.jsx)(o.h2,{id:"introdu\xe7\xe3o",children:"Introdu\xe7\xe3o"}),"\n",(0,n.jsx)(o.p,{children:"O conector de email HTTP permite que voc\xea envie emails via chamada HTTP. Para usar o conector de email HTTP, voc\xea precisar\xe1 ter seu pr\xf3prio servi\xe7o de email que exponha uma API HTTP para envio de emails. O Logto chamar\xe1 essa API quando precisar enviar um email. Por exemplo, quando um usu\xe1rio se registra, o Logto chamar\xe1 a API HTTP para enviar um email de verifica\xe7\xe3o."}),"\n",(0,n.jsx)(o.h2,{id:"configurar-conector-de-email-http",children:"Configurar conector de email HTTP"}),"\n",(0,n.jsx)(o.p,{children:"Para usar o conector de email HTTP, voc\xea precisa configurar um endpoint HTTP que o Logto possa chamar. E um token de autoriza\xe7\xe3o opcional para o endpoint."}),"\n",(0,n.jsx)(o.h2,{id:"payload",children:"Payload"}),"\n",(0,n.jsx)(o.p,{children:"O conector de email HTTP enviar\xe1 o seguinte payload para o endpoint quando precisar enviar um email:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-json",children:'{\n  "to": "foo@logto.io",\n  "type": "SignIn",\n  "payload": {\n    "code": "123456"\n  }\n}\n'})}),"\n",(0,n.jsxs)(o.p,{children:["Voc\xea pode encontrar todos os tipos em ",(0,n.jsx)(o.a,{href:"/connectors/email-connectors/built-in-email-service/#unified-email-templates",children:"Modelo de email"}),", e a defini\xe7\xe3o completa do tipo ",(0,n.jsx)(o.code,{children:"SendMessageData"})," em ",(0,n.jsx)(o.a,{href:"https://github.com/logto-io/logto/tree/master/packages/toolkit/connector-kit/src/types/passwordless.ts",children:"connector-kit"}),"."]})]})}function m(e={}){const{wrapper:o}={...(0,t.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},69927:(e,o,a)=>{a.d(o,{Ay:()=>c,RM:()=>t});var i=a(86070),n=a(15658);const t=[];function r(e){const o={a:"a",admonition:"admonition",p:"p",...(0,n.R)(),...e.components};return(0,i.jsx)(o.admonition,{type:"tip",children:(0,i.jsxs)(o.p,{children:["Neste guia, assumimos que voc\xea tem conhecimento b\xe1sico sobre Conectores (Connectors) do Logto. Se n\xe3o tiver, confira o guia ",(0,i.jsx)(o.a,{href:"/connectors",children:"Configurar conectores"})," para come\xe7ar."]})})}function c(e={}){const{wrapper:o}={...(0,n.R)(),...e.components};return o?(0,i.jsx)(o,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},15658:(e,o,a)=>{a.d(o,{R:()=>r,x:()=>c});var i=a(30758);const n={},t=i.createContext(n);function r(e){const o=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function c(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),i.createElement(t.Provider,{value:o},e.children)}}}]);