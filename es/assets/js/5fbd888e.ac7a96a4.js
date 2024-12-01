"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[83857],{55397:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>t,contentTitle:()=>d,default:()=>u,frontMatter:()=>a,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"authorization/api-resources/README","title":"Recursos de API","description":"Los recursos de API, tambi\xe9n conocidos como Indicadores de Recursos, indican los servicios o recursos objetivo a solicitar, generalmente, una variable en formato URI que representa la identidad del recurso. Este es un concepto clave en el sistema de autorizaci\xf3n de Logto, ya que define el punto final que la pol\xedtica de autorizaci\xf3n est\xe1 dise\xf1ada para proteger.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/authorization/api-resources/README.mdx","sourceDirName":"authorization/api-resources","slug":"/authorization/api-resources/","permalink":"/es/authorization/api-resources/","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/es/docusaurus-plugin-content-docs/current/authorization/api-resources/README.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"docsSidebar","previous":{"title":"Autorizaci\xf3n","permalink":"/es/authorization/"},"next":{"title":"Protege tu API","permalink":"/es/authorization/api-resources/protect-your-api"}}');var s=o(86070),i=o(15658);const a={sidebar_position:1},d="Recursos de API",t={},c=[{value:"Indicador de recurso",id:"indicador-de-recurso",level:2},{value:"Esquema de recurso de API de Logto",id:"esquema-de-recurso-de-api-de-logto",level:2},{value:"API predeterminada",id:"api-predeterminada",level:2},{value:"Registrar los recursos de API en Logto",id:"registrar-los-recursos-de-api-en-logto",level:2}];function l(e){const r={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components},{CloudLink:o}=r;return o||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("CloudLink",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.header,{children:(0,s.jsx)(r.h1,{id:"recursos-de-api",children:"Recursos de API"})}),"\n",(0,s.jsxs)(r.p,{children:["Los recursos de API, tambi\xe9n conocidos como ",(0,s.jsx)(r.a,{href:"https://www.rfc-editor.org/rfc/rfc8707.html",children:"Indicadores de Recursos"}),", indican los servicios o recursos objetivo a solicitar, generalmente, una variable en formato URI que representa la identidad del recurso. Este es un concepto clave en el sistema de autorizaci\xf3n de Logto, ya que define el punto final que la pol\xedtica de autorizaci\xf3n est\xe1 dise\xf1ada para proteger."]}),"\n",(0,s.jsx)(r.h2,{id:"indicador-de-recurso",children:"Indicador de recurso"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"Un valor de recurso indica el servicio o recurso objetivo al que se est\xe1 solicitando acceso."}),"\n",(0,s.jsxs)(r.li,{children:["Su valor ",(0,s.jsx)(r.strong,{children:"DEBE"})," ser un URI absoluto."]}),"\n",(0,s.jsxs)(r.li,{children:["El URI ",(0,s.jsx)(r.strong,{children:"NO DEBE"})," incluir un componente de fragmento."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"NO DEBER\xcdA"})," incluir un componente de consulta."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"DEBER\xcdAS"})," proporcionar el URI m\xe1s espec\xedfico posible para la API completa o el conjunto de recursos que pretende acceder."]}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"En la pr\xe1ctica, un cliente puede conocer un URI base o la aplicaci\xf3n o recurso con el que interactuar. Ser\xeda apropiado usarlo como el valor del par\xe1metro de recurso."}),"\n",(0,s.jsx)(r.p,{children:"Por ejemplo, el URI base de Logto Management API."}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:"https://tenantId.logto.app/api\n"})}),"\n",(0,s.jsxs)(r.p,{children:["Por defecto, este recurso de API est\xe1 pre-registrado en tu servicio Logto. Todas las ",(0,s.jsx)(r.a,{href:"https://openapi.logto.io/",children:"Management API"})," bajo este URI est\xe1n protegidas por Logto."]}),"\n",(0,s.jsx)(r.h2,{id:"esquema-de-recurso-de-api-de-logto",children:"Esquema de recurso de API de Logto"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:(0,s.jsx)(r.strong,{children:"Nombre de la propiedad"})}),(0,s.jsx)(r.th,{children:(0,s.jsx)(r.strong,{children:"Descripci\xf3n de la propiedad"})}),(0,s.jsx)(r.th,{children:(0,s.jsx)(r.strong,{children:"Requerido"})})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Nombre de la API"}),(0,s.jsx)(r.td,{children:"Un nombre amigable que puede ayudarte a identificar el recurso de API."}),(0,s.jsx)(r.td,{children:"true"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Identificador de la API"}),(0,s.jsxs)(r.td,{children:["El valor \xfanico del ",(0,s.jsx)(r.a,{href:"https://www.rfc-editor.org/rfc/rfc8707.html",children:"Indicador de Recurso"})," de la API, con las restricciones listadas arriba."]}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Logto lo usar\xe1 para identificar el recurso de API solicitado y otorgar los tokens de autorizaci\xf3n en consecuencia."}),(0,s.jsx)(r.td,{children:"true"}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["Tiempo de expiraci\xf3n del token ",(0,s.jsx)(r.em,{children:"(en segundos)"})]}),(0,s.jsxs)(r.td,{children:["El tiempo de expiraci\xf3n establecido para el ",(0,s.jsx)(r.code,{children:"token de acceso"}),". El valor de expiraci\xf3n predeterminado es ",(0,s.jsx)(r.strong,{children:"3600"}),"."]}),(0,s.jsx)(r.td,{children:"false"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"API predeterminada"}),(0,s.jsx)(r.td,{children:"Solo se puede establecer cero o una API predeterminada por inquilino."}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Cuando se designa una API predeterminada, el par\xe1metro de recurso puede omitirse en la solicitud de autenticaci\xf3n. Los intercambios de tokens subsiguientes usar\xe1n esa API como la audiencia por defecto, resultando en la emisi\xf3n de JWTs."}),(0,s.jsx)(r.td,{children:"false"}),(0,s.jsx)(r.td,{})]})]})]}),"\n",(0,s.jsx)(r.admonition,{type:"note",children:(0,s.jsxs)(r.p,{children:["Las solicitudes con un ",(0,s.jsx)(r.code,{children:"token de acceso"})," expirado deben ser restringidas. Esto se implementa para proteger tu API de un token abusado. Cuanto mayor sea el valor establecido, m\xe1s tiempo sobrevivir\xe1 un ",(0,s.jsx)(r.code,{children:"token de acceso"})," emitido, y m\xe1s vulnerable ser\xe1 tu API."]})}),"\n",(0,s.jsx)(r.h2,{id:"api-predeterminada",children:"API predeterminada"}),"\n",(0,s.jsx)(r.admonition,{type:"note",children:(0,s.jsx)(r.p,{children:"Esta caracter\xedstica est\xe1 destinada principalmente a aplicaciones que NO soportan indicadores de recursos OIDC, por ejemplo, plugins de ChatGPT."})}),"\n",(0,s.jsxs)(r.p,{children:["Logto aprovecha ",(0,s.jsx)(r.a,{href:"https://www.rfc-editor.org/rfc/rfc8707",children:"RFC 8707: Indicadores de Recursos para OAuth 2.0"})," para implementar el control de acceso basado en roles (RBAC). Aunque es una de las caracter\xedsticas de OAuth 2.0, a\xfan no est\xe1 ampliamente soportada."]}),"\n",(0,s.jsxs)(r.p,{children:["En la implementaci\xf3n de Logto, cada permiso (alcance) definido por el usuario debe estar asociado con un Recurso de API. De lo contrario, se tratar\xe1 como un permiso de OpenID Connect (o OAuth). Generalmente, esto no afecta tu proceso de autorizaci\xf3n. Sin embargo, al integrarse con aplicaciones de terceros que carecen de soporte para ",(0,s.jsx)(r.a,{href:"https://www.rfc-editor.org/rfc/rfc8707.html",children:"RFC 8707"})," (por ejemplo, plugins de ChatGPT), puede plantear desaf\xedos ya que la solicitud de autorizaci\xf3n inicial puede no incluir un par\xe1metro ",(0,s.jsx)(r.code,{children:"resource"}),". En consecuencia, Logto siempre emitir\xe1 Tokens de Acceso Opacos."]}),"\n",(0,s.jsx)(r.p,{children:"Para abordar este problema, puedes designar un Recurso de API como el recurso predeterminado a nivel de inquilino. Una vez hecho esto:"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["Logto usar\xe1 el Recurso de API predeterminado cuando no haya un par\xe1metro ",(0,s.jsx)(r.code,{children:"resource"})," presente en la ",(0,s.jsx)(r.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html#AuthRequest",children:"Solicitud de Autenticaci\xf3n"}),"."]}),"\n",(0,s.jsxs)(r.li,{children:["Si se incluye el alcance ",(0,s.jsx)(r.code,{children:"openid"}),", se emitir\xe1 un Token de Acceso Opaco para el ",(0,s.jsx)(r.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html#UserInfo",children:"Endpoint de Informaci\xf3n del Usuario"})," cuando no haya un par\xe1metro ",(0,s.jsx)(r.code,{children:"resource"})," presente en las ",(0,s.jsx)(r.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html#TokenRequest",children:"Solicitudes de Token"})," subsiguientes."]}),"\n",(0,s.jsxs)(r.li,{children:["Si no se incluye el alcance ",(0,s.jsx)(r.code,{children:"openid"}),", se emitir\xe1 un Token de Acceso JWT para el Recurso de API predeterminado cuando no haya un par\xe1metro ",(0,s.jsx)(r.code,{children:"resource"})," presente en las ",(0,s.jsx)(r.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html#TokenRequest",children:"Solicitudes de Token"})," subsiguientes."]}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"Al designar un Recurso de API predeterminado, puedes asegurar una integraci\xf3n fluida con aplicaciones que carecen de soporte para RFC 8707 mientras mantienes los controles de acceso apropiados."}),"\n",(0,s.jsx)(r.h2,{id:"registrar-los-recursos-de-api-en-logto",children:"Registrar los recursos de API en Logto"}),"\n",(0,s.jsxs)(r.p,{children:["Para obtener un ",(0,s.jsx)(r.code,{children:"token de acceso"})," restringido por audiencia de Logto, primero, registra tus APIs de backend para habilitar los tokens de acceso restringidos por audiencia de Logto. Cuando se recibe una solicitud de autorizaci\xf3n, Logto identificar\xe1 los recursos de API registrados y otorgar\xe1 acceso en consecuencia."]}),"\n",(0,s.jsxs)(r.p,{children:["Para registrar tus APIs, navega a ",(0,s.jsx)(o,{to:"/api-resources",children:"Consola > Recursos de API"}),". Ver\xe1s un recurso incorporado con el identificador de API mostrado como ",(0,s.jsx)(r.code,{children:"https://[your-tenant-id].logto.app/api"}),". Este recurso abarca todas las Management APIs de Logto y asegura que est\xe9n protegidas y accesibles solo para usuarios autorizados de Logto."]}),"\n",(0,s.jsxs)(r.p,{children:["Haz clic en el bot\xf3n ",(0,s.jsx)(r.strong,{children:"Crear recurso de API"})," y sigue el formulario interactivo para crear tus propios recursos de API:"]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["Un ",(0,s.jsx)(r.strong,{children:"nombre de API"})," legible que pueda ayudarte mejor a identificar esta entidad."]}),"\n",(0,s.jsxs)(r.li,{children:["Un ",(0,s.jsx)(r.strong,{children:"identificador de API"})," \xfanico en formato URI. Representa la identidad del recurso de API."]}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"La nueva API aparecer\xe1 en la lista una vez creada. Puedes gestionarla o eliminarla en la p\xe1gina de detalles de la API haciendo clic en la entidad."})]})}function u(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},15658:(e,r,o)=>{o.d(r,{R:()=>a,x:()=>d});var n=o(30758);const s={},i=n.createContext(s);function a(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);