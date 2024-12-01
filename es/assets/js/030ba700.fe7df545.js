"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[62806],{26635:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>t,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"integrate-logto/protected-app","title":"Aplicaci\xf3n Protegida","description":"La Aplicaci\xf3n Protegida est\xe1 dise\xf1ada para eliminar la complejidad de las integraciones de SDK separando la capa de autenticaci\xf3n de tu aplicaci\xf3n. Nosotros manejamos la autenticaci\xf3n, permiti\xe9ndote enfocarte en tu funcionalidad principal. Una vez que un usuario est\xe1 autenticado, la Aplicaci\xf3n Protegida sirve el contenido desde tu servidor.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/integrate-logto/protected-app.mdx","sourceDirName":"integrate-logto","slug":"/integrate-logto/protected-app","permalink":"/es/integrate-logto/protected-app","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/es/docusaurus-plugin-content-docs/current/integrate-logto/protected-app.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"docsSidebar","previous":{"title":"Comprender el flujo de autenticaci\xf3n","permalink":"/es/integrate-logto/integrate-logto-into-your-application/understand-authentication-flow"},"next":{"title":"Aplicaciones de terceros","permalink":"/es/integrate-logto/third-party-applications/"}}');var r=n(86070),o=n(15658);const t={sidebar_position:2},c="Aplicaci\xf3n Protegida",s={},d=[{value:"C\xf3mo funciona la Aplicaci\xf3n Protegida",id:"c\xf3mo-funciona-la-aplicaci\xf3n-protegida",level:2},{value:"Protege tu servidor de origen",id:"protege-tu-servidor-de-origen",level:2},{value:"Validaci\xf3n de Cabecera HTTP",id:"validaci\xf3n-de-cabecera-http",level:3},{value:"Validaci\xf3n de JSON Web Tokens (JWT)",id:"validaci\xf3n-de-json-web-tokens-jwt",level:3},{value:"Obtener el estado de autenticaci\xf3n e informaci\xf3n del usuario",id:"obtener-el-estado-de-autenticaci\xf3n-e-informaci\xf3n-del-usuario",level:2},{value:"Obtener el host original",id:"obtener-el-host-original",level:2},{value:"Personalizar reglas de autenticaci\xf3n",id:"personalizar-reglas-de-autenticaci\xf3n",level:2},{value:"Desarrollo local",id:"desarrollo-local",level:2},{value:"Transici\xf3n a la integraci\xf3n de SDK",id:"transici\xf3n-a-la-integraci\xf3n-de-sdk",level:2}];function l(e){const a={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",mermaid:"mermaid",ol:"ol",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.header,{children:(0,r.jsx)(a.h1,{id:"aplicaci\xf3n-protegida",children:"Aplicaci\xf3n Protegida"})}),"\n",(0,r.jsxs)(a.p,{children:["La Aplicaci\xf3n Protegida est\xe1 dise\xf1ada para eliminar la complejidad de las ",(0,r.jsx)(a.a,{href:"/quick-starts",children:"integraciones de SDK"})," separando la capa de ",(0,r.jsx)(a.a,{href:"https://auth.wiki/authentication",children:"autenticaci\xf3n"})," de tu aplicaci\xf3n. Nosotros manejamos la autenticaci\xf3n, permiti\xe9ndote enfocarte en tu funcionalidad principal. Una vez que un usuario est\xe1 autenticado, la Aplicaci\xf3n Protegida sirve el contenido desde tu servidor."]}),"\n",(0,r.jsx)(a.h2,{id:"c\xf3mo-funciona-la-aplicaci\xf3n-protegida",children:"C\xf3mo funciona la Aplicaci\xf3n Protegida"}),"\n",(0,r.jsx)(a.p,{children:"La Aplicaci\xf3n Protegida, impulsada por Cloudflare, opera globalmente en redes de borde, asegurando baja latencia y alta disponibilidad para tu aplicaci\xf3n."}),"\n",(0,r.jsx)(a.p,{children:"La Aplicaci\xf3n Protegida mantiene el estado de la sesi\xf3n y la informaci\xf3n del usuario. Si un usuario no est\xe1 autenticado, la Aplicaci\xf3n Protegida lo redirige a la p\xe1gina de inicio de sesi\xf3n. Una vez autenticado, la Aplicaci\xf3n Protegida envuelve la solicitud del usuario con autenticaci\xf3n e informaci\xf3n del usuario, y luego la reenv\xeda al servidor de origen."}),"\n",(0,r.jsx)(a.p,{children:"Este proceso se visualiza en el siguiente diagrama de flujo:"}),"\n",(0,r.jsx)(a.mermaid,{value:'graph LR\n  A("Cliente<br/>(Navegador)") --\x3e|Solicitud| B(Logto<br/>Aplicaci\xf3n Protegida)\n  B --\x3e Condition{{\xbfCoincide la ruta?}}\n  Condition --\x3e|S\xed| Matched{{\xbfEst\xe1 autenticado?}}\n  Matched --\x3e|S\xed| C(Servidor de origen)\n  Matched --\x3e|No| D(Inicio de sesi\xf3n de Logto)\n  Condition --\x3e|No| C'}),"\n",(0,r.jsx)(a.h2,{id:"protege-tu-servidor-de-origen",children:"Protege tu servidor de origen"}),"\n",(0,r.jsx)(a.p,{children:"El servidor de origen, que podr\xeda ser un dispositivo f\xedsico o virtual no propiedad de la Aplicaci\xf3n Protegida de Logto, es donde reside el contenido de tu aplicaci\xf3n. Similar a un servidor de Red de Entrega de Contenido (CDN), la Aplicaci\xf3n Protegida gestiona los procesos de autenticaci\xf3n y recupera contenido de tu servidor de origen. Por lo tanto, si los usuarios obtienen acceso directo a tu servidor de origen, pueden eludir la autenticaci\xf3n y tu aplicaci\xf3n ya no est\xe1 protegida."}),"\n",(0,r.jsx)(a.p,{children:"Por lo tanto, es importante asegurar las conexiones de origen, ya que previene que los atacantes descubran y accedan a tu servidor de origen sin autenticaci\xf3n. Hay varias maneras de hacer esto:"}),"\n",(0,r.jsxs)(a.ol,{children:["\n",(0,r.jsx)(a.li,{children:"Validaci\xf3n de Cabecera HTTP"}),"\n",(0,r.jsx)(a.li,{children:"Validaci\xf3n de JSON Web Tokens (JWT)"}),"\n"]}),"\n",(0,r.jsx)(a.h3,{id:"validaci\xf3n-de-cabecera-http",children:"Validaci\xf3n de Cabecera HTTP"}),"\n",(0,r.jsxs)(a.p,{children:["Asegurar tu servidor de origen se puede lograr utilizando ",(0,r.jsx)(a.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication#basic_authentication_scheme",children:"Autenticaci\xf3n B\xe1sica HTTP"})," para asegurar tu servidor de origen."]}),"\n",(0,r.jsx)(a.p,{children:"Cada solicitud de la Aplicaci\xf3n Protegida incluye la siguiente cabecera:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{children:"Authorization: Basic base64(appId:appSecret)\n"})}),"\n",(0,r.jsx)(a.p,{children:"Al validar esta cabecera, puedes confirmar que la solicitud proviene de la Aplicaci\xf3n Protegida y negar cualquier solicitud que no incluya esta cabecera."}),"\n",(0,r.jsx)(a.p,{children:"Si est\xe1s usando Nginx o Apache, puedes consultar las siguientes gu\xedas para implementar la Autenticaci\xf3n B\xe1sica HTTP en tu servidor de origen:"}),"\n",(0,r.jsxs)(a.ol,{children:["\n",(0,r.jsxs)(a.li,{children:["Nginx: ",(0,r.jsx)(a.a,{href:"https://docs.nginx.com/nginx/admin-guide/security-controls/configuring-http-basic-authentication/",children:"Configuraci\xf3n de Autenticaci\xf3n B\xe1sica HTTP"})]}),"\n",(0,r.jsxs)(a.li,{children:["Apache: ",(0,r.jsx)(a.a,{href:"https://httpd.apache.org/docs/2.4/howto/auth.html",children:"Autenticaci\xf3n y Autorizaci\xf3n"})]}),"\n"]}),"\n",(0,r.jsxs)(a.p,{children:["Para verificar las cabeceras dentro de tu aplicaci\xf3n, consulta el ",(0,r.jsx)(a.a,{href:"https://developers.cloudflare.com/workers/examples/basic-auth/",children:"ejemplo de Autenticaci\xf3n B\xe1sica HTTP"})," proporcionado por Cloudflare para aprender c\xf3mo restringir el acceso utilizando el esquema B\xe1sico HTTP."]}),"\n",(0,r.jsx)(a.h3,{id:"validaci\xf3n-de-json-web-tokens-jwt",children:"Validaci\xf3n de JSON Web Tokens (JWT)"}),"\n",(0,r.jsx)(a.p,{children:"Otra forma de asegurar tu servidor de origen es utilizando JSON Web Tokens (JWT)."}),"\n",(0,r.jsx)(a.p,{children:"Cada solicitud autenticada de la Aplicaci\xf3n Protegida incluye la siguiente cabecera:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{children:"Logto-ID-Token: <JWT>\n"})}),"\n",(0,r.jsxs)(a.p,{children:["El JWT se llama ",(0,r.jsx)(a.a,{href:"https://auth.wiki/id-token",children:"Token de ID"})," que est\xe1 firmado por Logto y contiene informaci\xf3n del usuario. Al validar este JWT, puedes confirmar que la solicitud proviene de la Aplicaci\xf3n Protegida y negar cualquier solicitud que no incluya esta cabecera."]}),"\n",(0,r.jsxs)(a.p,{children:["El token est\xe1 encriptado y firmado como un token ",(0,r.jsx)(a.a,{href:"https://auth.wiki/jws",children:"JWS"}),"."]}),"\n",(0,r.jsx)(a.p,{children:"Los pasos de validaci\xf3n:"}),"\n",(0,r.jsxs)(a.ol,{children:["\n",(0,r.jsx)(a.li,{children:(0,r.jsx)(a.a,{href:"https://datatracker.ietf.org/doc/html/rfc7519#section-7.2",children:"Validaci\xf3n de un JWT"})}),"\n",(0,r.jsx)(a.li,{children:(0,r.jsx)(a.a,{href:"https://datatracker.ietf.org/doc/html/rfc7515#section-5.2",children:"Validaci\xf3n de la firma JWS"})}),"\n",(0,r.jsxs)(a.li,{children:["El emisor del token es ",(0,r.jsx)(a.code,{children:"https://<tu-dominio-logto>/oidc"})," (emitido por tu servidor de autenticaci\xf3n Logto)"]}),"\n"]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-js",children:"const express = require('express');\nconst jwksClient = require('jwks-rsa');\nconst jwt = require('jsonwebtoken');\n\nconst ISSUER = 'https://<tu-dominio-logto>/oidc';\nconst CERTS_URL = 'https://<tu-dominio-logto>/oidc/jwks';\n\nconst client = jwksClient({\n  jwksUri: CERTS_URL,\n});\n\nconst getKey = (header, callback) => {\n  client.getSigningKey(header.kid, function (err, key) {\n    callback(err, key?.getPublicKey());\n  });\n};\n\nconst verifyToken = (req, res, next) => {\n  const token = req.headers['Logto-ID-Token'];\n\n  // Aseg\xfarate de que la solicitud entrante tenga nuestra cabecera de token\n  if (!token) {\n    return res\n      .status(403)\n      .send({ status: false, message: 'falta la cabecera requerida Logto-ID-Token' });\n  }\n\n  jwt.verify(token, getKey, { issuer: ISSUER }, (err, decoded) => {\n    if (err) {\n      return res.status(403).send({ status: false, message: 'token de id inv\xe1lido' });\n    }\n\n    req.user = decoded;\n    next();\n  });\n};\n\nconst app = express();\n\napp.use(verifyToken);\n\napp.get('/', (req, res) => {\n  res.send('\xa1Hola Mundo!');\n});\n\napp.listen(3000);\n"})}),"\n",(0,r.jsx)(a.h2,{id:"obtener-el-estado-de-autenticaci\xf3n-e-informaci\xf3n-del-usuario",children:"Obtener el estado de autenticaci\xf3n e informaci\xf3n del usuario"}),"\n",(0,r.jsxs)(a.p,{children:["Si necesitas obtener la autenticaci\xf3n e informaci\xf3n del usuario para tu aplicaci\xf3n, tambi\xe9n puedes usar la cabecera ",(0,r.jsx)(a.code,{children:"Logto-ID-Token"}),"."]}),"\n",(0,r.jsx)(a.p,{children:"Si solo deseas decodificar el token, puedes usar el siguiente c\xf3digo:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-js",children:"const express = require('express');\n\nconst decodeIdToken = (req, res, next) => {\n  const token = req.headers['Logto-ID-Token'];\n\n  if (!token) {\n    return res.status(403).send({\n      status: false,\n      message: 'falta la cabecera requerida Logto-ID-Token',\n    });\n  }\n\n  const parts = token.split('.');\n  if (parts.length !== 3) {\n    throw new Error('Token de ID inv\xe1lido');\n  }\n\n  const payload = parts[1];\n  const decodedPayload = atob(payload.replace(/-/g, '+').replace(/_/g, '/'));\n  const claims = JSON.parse(decodedPayload);\n\n  req.user = claims;\n  next();\n};\n\nconst app = express();\n\napp.use(decodeIdToken);\n\napp.get('/', (req, res) => {\n  res.json(req.user);\n});\n\napp.listen(3000);\n"})}),"\n",(0,r.jsx)(a.h2,{id:"obtener-el-host-original",children:"Obtener el host original"}),"\n",(0,r.jsxs)(a.p,{children:["Si necesitas obtener el host original solicitado por el cliente, puedes usar la cabecera ",(0,r.jsx)(a.code,{children:"Logto-Host"})," o ",(0,r.jsx)(a.code,{children:"x-forwarded-host"}),"."]}),"\n",(0,r.jsx)(a.h2,{id:"personalizar-reglas-de-autenticaci\xf3n",children:"Personalizar reglas de autenticaci\xf3n"}),"\n",(0,r.jsx)(a.p,{children:'Por defecto, la Aplicaci\xf3n Protegida proteger\xe1 todas las rutas. Si necesitas personalizar las reglas de autenticaci\xf3n, puedes configurar el campo "Reglas de autenticaci\xf3n personalizadas" en la Consola.'}),"\n",(0,r.jsx)(a.p,{children:"Admite expresiones regulares, aqu\xed hay dos escenarios de caso:"}),"\n",(0,r.jsxs)(a.ol,{children:["\n",(0,r.jsxs)(a.li,{children:["Para proteger solo las rutas ",(0,r.jsx)(a.code,{children:"/admin"})," y ",(0,r.jsx)(a.code,{children:"/privacy"})," con autenticaci\xf3n: ",(0,r.jsx)(a.code,{children:"^/(admin|privacy)/.*"})]}),"\n",(0,r.jsxs)(a.li,{children:["Para excluir im\xe1genes JPG de la autenticaci\xf3n: ",(0,r.jsx)(a.code,{children:"^(?!.*\\.jpg$).*$"})]}),"\n"]}),"\n",(0,r.jsx)(a.h2,{id:"desarrollo-local",children:"Desarrollo local"}),"\n",(0,r.jsxs)(a.p,{children:["La Aplicaci\xf3n Protegida est\xe1 dise\xf1ada para trabajar con tu servidor de origen. Sin embargo, si tu servidor de origen no es accesible p\xfablicamente, puedes usar una herramienta como ",(0,r.jsx)(a.a,{href:"https://ngrok.com/",children:"ngrok"})," o ",(0,r.jsx)(a.a,{href:"https://developers.cloudflare.com/pages/how-to/preview-with-cloudflare-tunnel/",children:"Cloudflare Tunnels"})," para exponer tu servidor local a internet."]}),"\n",(0,r.jsx)(a.h2,{id:"transici\xf3n-a-la-integraci\xf3n-de-sdk",children:"Transici\xf3n a la integraci\xf3n de SDK"}),"\n",(0,r.jsxs)(a.p,{children:["La Aplicaci\xf3n Protegida est\xe1 dise\xf1ada para simplificar el proceso de autenticaci\xf3n. Sin embargo, si decides hacer la transici\xf3n a la integraci\xf3n de SDK para un mejor control y personalizaci\xf3n, puedes ",(0,r.jsx)(a.a,{href:"/integrate-logto/integrate-logto-into-your-application",children:"crear una nueva aplicaci\xf3n"})," en Logto y configurar la ",(0,r.jsx)(a.a,{href:"/quick-starts",children:"integraci\xf3n de SDK"}),'. Y para una transici\xf3n sin problemas, puedes reutilizar las configuraciones de la aplicaci\xf3n de la Aplicaci\xf3n Protegida. La Aplicaci\xf3n Protegida es en realidad una "Aplicaci\xf3n Web Tradicional" en Logto, puedes encontrar el "',(0,r.jsx)(a.a,{href:"/integrate-logto/application-data-structure#application-id",children:"AppId"}),'" y el "',(0,r.jsx)(a.a,{href:"/integrate-logto/application-data-structure#application-secret",children:"AppSecret"}),'" en la configuraci\xf3n de la aplicaci\xf3n. Una vez que la transici\xf3n est\xe9 completa, puedes eliminar la Aplicaci\xf3n Protegida de tu aplicaci\xf3n.']})]})}function u(e={}){const{wrapper:a}={...(0,o.R)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},15658:(e,a,n)=>{n.d(a,{R:()=>t,x:()=>c});var i=n(30758);const r={},o=i.createContext(r);function t(e){const a=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function c(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(o.Provider,{value:a},e.children)}}}]);