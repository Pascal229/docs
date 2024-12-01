"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[668],{7970:(e,o,s)=>{s.r(o),s.d(o,{assets:()=>d,contentTitle:()=>n,default:()=>l,frontMatter:()=>i,metadata:()=>a,toc:()=>c});const a=JSON.parse('{"id":"developers/webhooks/secure-webhooks","title":"Webhooks seguros","description":"Uma vez que seu servidor esteja pronto para receber solicita\xe7\xf5es de webhook, voc\xea pode querer garantir que ele possa lidar com as solicita\xe7\xf5es de forma segura. O Logto gera uma assinatura para cada payload de solicita\xe7\xe3o de webhook, o que permite que voc\xea verifique se a solicita\xe7\xe3o vem do Logto.","source":"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/developers/webhooks/secure-webhooks.mdx","sourceDirName":"developers/webhooks","slug":"/developers/webhooks/secure-webhooks","permalink":"/pt-BR/developers/webhooks/secure-webhooks","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/pt-BR/docusaurus-plugin-content-docs/current/developers/webhooks/secure-webhooks.mdx","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"id":"secure-webhooks","title":"Webhooks seguros","sidebar_label":"Webhooks seguros","sidebar_position":5},"sidebar":"docsSidebar","previous":{"title":"Solicita\xe7\xe3o de Webhooks","permalink":"/pt-BR/developers/webhooks/webhooks-request"},"next":{"title":"Logs de auditoria","permalink":"/pt-BR/developers/audit-logs"}}');var r=s(86070),t=s(15658);const i={id:"secure-webhooks",title:"Webhooks seguros",sidebar_label:"Webhooks seguros",sidebar_position:5},n="Webhooks seguros",d={},c=[{value:"Obter a chave de assinatura",id:"obter-a-chave-de-assinatura",level:2},{value:"Verificar a assinatura",id:"verificar-a-assinatura",level:2}];function u(e){const o={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,t.R)(),...e.components},{CloudLink:s}=o;return s||function(e,o){throw new Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("CloudLink",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.header,{children:(0,r.jsx)(o.h1,{id:"webhooks-seguros",children:"Webhooks seguros"})}),"\n",(0,r.jsx)(o.p,{children:"Uma vez que seu servidor esteja pronto para receber solicita\xe7\xf5es de webhook, voc\xea pode querer garantir que ele possa lidar com as solicita\xe7\xf5es de forma segura. O Logto gera uma assinatura para cada payload de solicita\xe7\xe3o de webhook, o que permite que voc\xea verifique se a solicita\xe7\xe3o vem do Logto."}),"\n",(0,r.jsx)(o.h2,{id:"obter-a-chave-de-assinatura",children:"Obter a chave de assinatura"}),"\n",(0,r.jsxs)(o.p,{children:["Voc\xea precisar\xe1 obter a chave de assinatura na p\xe1gina de detalhes do webhook em ",(0,r.jsx)(s,{to:"/webhooks",children:" Logto Console > Webhooks"})," para verificar a assinatura."]}),"\n",(0,r.jsx)(o.h2,{id:"verificar-a-assinatura",children:"Verificar a assinatura"}),"\n",(0,r.jsxs)(o.p,{children:["Extraia a assinatura do cabe\xe7alho ",(0,r.jsx)(o.code,{children:"logto-signature-sha-256"})," da solicita\xe7\xe3o de webhook."]}),"\n",(0,r.jsx)(o.p,{children:"Depois disso, voc\xea deve gerar uma assinatura usando sua chave de assinatura e o corpo da solicita\xe7\xe3o de webhook e garantir que o resultado corresponda \xe0 assinatura do Logto."}),"\n",(0,r.jsx)(o.admonition,{type:"note",children:(0,r.jsx)(o.p,{children:"Use o corpo bruto da solicita\xe7\xe3o de webhook para gera\xe7\xe3o de assinatura; evite usar o corpo analisado, pois os servidores podem pr\xe9-process\xe1-lo antes de chegar ao manipulador de endpoint do webhook."})}),"\n",(0,r.jsx)(o.p,{children:"O Logto usa um digest HMAC em hexadecimal para calcular a assinatura."}),"\n",(0,r.jsx)(o.p,{children:"Aqui est\xe1 um exemplo de como verificar a assinatura em Node.js:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-tsx",children:"import { createHmac } from 'node:crypto';\n\nexport const verify = (signingKey: string, rawBody: Buffer[], expectedSignature: string) => {\n  const hmac = createHmac('sha256', signingKey);\n  hmac.update(rawBody);\n  const signature = hmac.digest('hex');\n  return signature === expectedSignature;\n};\n"})})]})}function l(e={}){const{wrapper:o}={...(0,t.R)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},15658:(e,o,s)=>{s.d(o,{R:()=>i,x:()=>n});var a=s(30758);const r={},t=a.createContext(r);function i(e){const o=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function n(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(t.Provider,{value:o},e.children)}}}]);