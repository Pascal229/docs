"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[63213],{47147:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>l,contentTitle:()=>t,default:()=>g,frontMatter:()=>d,metadata:()=>o,toc:()=>p});const o=JSON.parse('{"id":"integrate-logto/third-party-applications/oidc-oauth-third-party-applications/permission-management","title":"Gesti\xf3n de permisos","description":"Las aplicaciones de terceros, que no son propiedad de tu servicio, se integran con Logto como proveedores de identidad para autenticar a los usuarios. Estas aplicaciones, generalmente de proveedores de servicios externos, requieren una gesti\xf3n cuidadosa de permisos para proteger los datos de los usuarios.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/integrate-logto/third-party-applications/oidc-oauth-third-party-applications/permission-management.mdx","sourceDirName":"integrate-logto/third-party-applications/oidc-oauth-third-party-applications","slug":"/integrate-logto/third-party-applications/oidc-oauth-third-party-applications/permission-management","permalink":"/es/integrate-logto/third-party-applications/oidc-oauth-third-party-applications/permission-management","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/es/docusaurus-plugin-content-docs/current/integrate-logto/third-party-applications/oidc-oauth-third-party-applications/permission-management.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"docsSidebar","previous":{"title":"Aplicaciones de terceros OIDC / OAuth","permalink":"/es/integrate-logto/third-party-applications/oidc-oauth-third-party-applications/"},"next":{"title":"Personalizaci\xf3n de la pantalla de consentimiento","permalink":"/es/integrate-logto/third-party-applications/oidc-oauth-third-party-applications/consent-screen-branding"}}');var i=s(86070),r=s(15658);const n=s.p+"assets/images/grant-permissions-of-organization-data-f95d12ea1b21642e833e8214480f4e3a.webp",c=s.p+"assets/images/grant-permissions-of-user-data-c91e7739d488c66f8553f60d74ce012f.webp",d={sidebar_position:1},t="Gesti\xf3n de permisos",l={},p=[{value:"Gestiona los permisos de tus aplicaciones de terceros OIDC",id:"gestiona-los-permisos-de-tus-aplicaciones-de-terceros-oidc",level:2},{value:"Otorgar permisos de datos de usuario",id:"otorgar-permisos-de-datos-de-usuario",level:3},{value:"Otorgar permisos de datos de la organizaci\xf3n",id:"otorgar-permisos-de-datos-de-la-organizaci\xf3n",level:3},{value:"Tipos de permisos",id:"tipos-de-permisos",level:2},{value:"Permisos de usuario (Alcances de perfil de usuario)",id:"permisos-de-usuario-alcances-de-perfil-de-usuario",level:3},{value:"Permisos de recursos de API (Alcances de recursos de API)",id:"permisos-de-recursos-de-api-alcances-de-recursos-de-api",level:3},{value:"Permisos de organizaci\xf3n (Alcances de organizaci\xf3n)",id:"permisos-de-organizaci\xf3n-alcances-de-organizaci\xf3n",level:3}];function u(e){const a={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components},{CloudLink:s}=a;return s||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("CloudLink",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.header,{children:(0,i.jsx)(a.h1,{id:"gesti\xf3n-de-permisos",children:"Gesti\xf3n de permisos"})}),"\n",(0,i.jsx)(a.p,{children:"Las aplicaciones de terceros, que no son propiedad de tu servicio, se integran con Logto como proveedores de identidad para autenticar a los usuarios. Estas aplicaciones, generalmente de proveedores de servicios externos, requieren una gesti\xf3n cuidadosa de permisos para proteger los datos de los usuarios."}),"\n",(0,i.jsxs)(a.p,{children:["Logto te permite controlar los permisos espec\xedficos otorgados a las aplicaciones de terceros. Esto incluye gestionar ",(0,i.jsx)(a.a,{href:"#user-permissions-user-profile-scopes",children:"perfiles de usuario"}),", ",(0,i.jsx)(a.a,{href:"#api-resource-permissions-api-resource-scopes",children:"recursos de API"})," y ",(0,i.jsx)(a.a,{href:"#organization-permissions-organization-scopes",children:"alcances de organizaci\xf3n"}),". A diferencia de las aplicaciones de primera parte, las aplicaciones de terceros que soliciten alcances no autorizados se les negar\xe1 el acceso."]}),"\n",(0,i.jsx)(a.p,{children:"Al habilitar alcances espec\xedficos, determinas qu\xe9 informaci\xf3n de usuario pueden acceder las aplicaciones de terceros. Los usuarios revisar\xe1n y aprobar\xe1n estos permisos en la pantalla de consentimiento antes de otorgar acceso."}),"\n",(0,i.jsx)(a.h2,{id:"gestiona-los-permisos-de-tus-aplicaciones-de-terceros-oidc",children:"Gestiona los permisos de tus aplicaciones de terceros OIDC"}),"\n",(0,i.jsxs)(a.p,{children:["Ve a la ",(0,i.jsx)(s,{to:"/applications",children:"Consola > Aplicaciones > P\xe1gina de detalles de la aplicaci\xf3n"})," de tu aplicaci\xf3n de terceros OIDC y navega a la pesta\xf1a ",(0,i.jsx)(a.strong,{children:"Permisos"})," y haz clic en el bot\xf3n ",(0,i.jsx)(a.strong,{children:"Agregar permisos"})," para gestionar los permisos de tus aplicaciones de terceros."]}),"\n",(0,i.jsx)(a.p,{children:"Los datos b\xe1sicos del usuario siempre son necesarios para las solicitudes de aplicaciones de terceros. Adem\xe1s, Logto admite la asignaci\xf3n de recursos de organizaci\xf3n, lo que lo hace ideal para servicios B2B."}),"\n",(0,i.jsx)(a.h3,{id:"otorgar-permisos-de-datos-de-usuario",children:"Otorgar permisos de datos de usuario"}),"\n",(0,i.jsxs)(a.p,{children:["Asigna permisos a nivel de usuario, incluidos ",(0,i.jsx)(a.a,{href:"#user-permissions-user-profile-scopes",children:"permisos de perfil de usuario"})," (por ejemplo, correo electr\xf3nico, nombre y avatar) y ",(0,i.jsx)(a.a,{href:"#api-resource-permissions-api-resource-scopes",children:"permisos de recursos de API"})," (por ejemplo, acceso de lectura o escritura a recursos espec\xedficos)."]}),"\n",(0,i.jsx)(a.p,{children:"Los nombres de los recursos solicitados (por ejemplo, Datos personales del usuario, Nombre de la API) y las descripciones espec\xedficas de los permisos (por ejemplo, Tu direcci\xf3n de correo electr\xf3nico) aparecer\xe1n en la pantalla de consentimiento para que los usuarios los revisen."}),"\n",(0,i.jsxs)(a.p,{children:["Al hacer clic en el bot\xf3n ",(0,i.jsx)(a.strong,{children:"Autorizar"}),", los usuarios aceptan otorgar los permisos especificados a la aplicaci\xf3n de terceros."]}),"\n",(0,i.jsx)("center",{children:(0,i.jsx)("img",{src:c,alt:"otorgar permisos de datos de usuario"})}),"\n",(0,i.jsx)(a.h3,{id:"otorgar-permisos-de-datos-de-la-organizaci\xf3n",children:"Otorgar permisos de datos de la organizaci\xf3n"}),"\n",(0,i.jsxs)(a.p,{children:["Asigna permisos a nivel de organizaci\xf3n, incluidos ",(0,i.jsx)(a.a,{href:"#organization-permissions-organization-scopes",children:"permisos de organizaci\xf3n"})," y ",(0,i.jsx)(a.a,{href:"#api-resource-permissions-api-resource-scopes",children:"permisos de recursos de API"}),". Logto permite que los recursos de API se asignen a roles espec\xedficos de la organizaci\xf3n."]}),"\n",(0,i.jsx)(a.p,{children:"En la pantalla de consentimiento, los datos de la organizaci\xf3n se muestran por separado de los datos del usuario. Durante el flujo de autorizaci\xf3n, el usuario debe seleccionar una organizaci\xf3n espec\xedfica para otorgar acceso. Los usuarios pueden cambiar entre organizaciones antes de confirmar. La aplicaci\xf3n de terceros solo recibir\xe1 acceso a los datos de la organizaci\xf3n seleccionada y los permisos asociados."}),"\n",(0,i.jsx)("center",{children:(0,i.jsx)("img",{src:n,alt:"otorgar permisos de datos de la organizaci\xf3n"})}),"\n",(0,i.jsx)(a.h2,{id:"tipos-de-permisos",children:"Tipos de permisos"}),"\n",(0,i.jsx)(a.h3,{id:"permisos-de-usuario-alcances-de-perfil-de-usuario",children:"Permisos de usuario (Alcances de perfil de usuario)"}),"\n",(0,i.jsx)(a.p,{children:"Esos permisos son alcances est\xe1ndar de OIDC y alcances esenciales del perfil de usuario de Logto utilizados para acceder a reclamos de usuario. Los reclamos de usuario se devolver\xe1n en el token de ID y el endpoint de userinfo respectivamente."}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.code,{children:"profile"}),": Alcance est\xe1ndar de OIDC, utilizado para acceder al nombre y avatar del usuario."]}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.code,{children:"email"}),": Alcance est\xe1ndar de OIDC, utilizado para acceder al correo electr\xf3nico del usuario."]}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.code,{children:"phone"}),": Alcance est\xe1ndar de OIDC, utilizado para acceder al n\xfamero de tel\xe9fono del usuario."]}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.code,{children:"custom_data"}),": Alcance de perfil de usuario de Logto, utilizado para acceder a ",(0,i.jsx)(a.a,{href:"/user-management/user-data/#custom-data",children:"datos personalizados del usuario"}),"."]}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.code,{children:"identity"}),": Alcance de perfil de usuario de Logto, utilizado para acceder a la informaci\xf3n de ",(0,i.jsx)(a.a,{href:"/user-management/user-data/#social-identities",children:"identidades sociales"})," vinculadas del usuario."]}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.code,{children:"role"}),": Alcance de perfil de usuario de Logto, utilizado para acceder a la informaci\xf3n de ",(0,i.jsx)(a.a,{href:"/authorization/role-based-access-control/#roles",children:"rol"})," del usuario."]}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.code,{children:"urn:logto:scope:organizations"}),": Alcance de organizaci\xf3n de usuario de Logto, utilizado para acceder a la informaci\xf3n de organizaciones del usuario. Si est\xe1 habilitado y solicitado por una aplicaci\xf3n de terceros, se mostrar\xe1 un selector de organizaci\xf3n en la pantalla de consentimiento. Esto permite a los usuarios revisar y elegir la organizaci\xf3n a la que desean otorgar acceso. Consulta ",(0,i.jsx)(a.a,{href:"/organizations",children:"organizaciones"})," para m\xe1s detalles."]}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.code,{children:"urn:logto:scope:organization_roles"}),": Alcance de organizaci\xf3n de usuario de Logto, utilizado para acceder a la informaci\xf3n de roles de organizaci\xf3n del usuario."]}),"\n"]}),"\n",(0,i.jsx)(a.admonition,{type:"warning",children:(0,i.jsx)(a.p,{children:"Solicitar un alcance de perfil de usuario no habilitado en la solicitud de autorizaci\xf3n resultar\xe1 en un error."})}),"\n",(0,i.jsx)(a.h3,{id:"permisos-de-recursos-de-api-alcances-de-recursos-de-api",children:"Permisos de recursos de API (Alcances de recursos de API)"}),"\n",(0,i.jsxs)(a.p,{children:["Logto proporciona control de acceso basado en roles (RBAC) para recursos de API. Los recursos de API son los recursos que son propiedad de tu servicio y est\xe1n protegidos por Logto. Puedes asignar alcances de API definidos por ti mismo a las aplicaciones de terceros para acceder a tus recursos de API. Consulta ",(0,i.jsx)(a.a,{href:"/authorization/role-based-access-control",children:"RBAC"}),", Plantilla de organizaci\xf3n y ",(0,i.jsx)(a.a,{href:"/authorization/api-resources/protect-your-api/",children:"Protege tu API"})," para m\xe1s detalles."]}),"\n",(0,i.jsxs)(a.p,{children:["Puedes crear y gestionar tus alcances de recursos de API en la ",(0,i.jsx)(s,{to:"/api-resources",children:"Consola > Recursos de API"}),"."]}),"\n",(0,i.jsx)(a.admonition,{type:"warning",children:(0,i.jsx)(a.p,{children:"Los alcances de recursos de API que no est\xe1n habilitados para las aplicaciones de terceros ser\xe1n ignorados al enviar una solicitud de autorizaci\xf3n. No se mostrar\xe1n en la pantalla de consentimiento del usuario y no ser\xe1n otorgados por Logto."})}),"\n",(0,i.jsx)(a.h3,{id:"permisos-de-organizaci\xf3n-alcances-de-organizaci\xf3n",children:"Permisos de organizaci\xf3n (Alcances de organizaci\xf3n)"}),"\n",(0,i.jsxs)(a.p,{children:[(0,i.jsx)(a.a,{href:"/authorization/organization-template/#organization-permission",children:"Permisos de organizaci\xf3n"})," son los alcances definidos exclusivamente para organizaciones de Logto. Se utilizan para acceder a la informaci\xf3n y recursos de la organizaci\xf3n."]}),"\n",(0,i.jsx)(a.admonition,{type:"note",children:(0,i.jsxs)(a.p,{children:["Para usar los permisos de organizaci\xf3n de Logto, necesitas habilitar el alcance de usuario ",(0,i.jsx)(a.code,{children:"urn:logto:scope:organizations"}),". De lo contrario, los permisos de organizaci\xf3n ser\xe1n ignorados al enviar una solicitud de autorizaci\xf3n."]})}),"\n",(0,i.jsxs)(a.p,{children:["Puedes definir tus propios alcances de organizaci\xf3n en la p\xe1gina de configuraci\xf3n de la plantilla de organizaci\xf3n. Consulta ",(0,i.jsx)(a.a,{href:"/authorization/organization-template/configure-organization-template/",children:"Configurar plantilla de organizaci\xf3n"})," para m\xe1s detalles."]}),"\n",(0,i.jsx)(a.admonition,{type:"warning",children:(0,i.jsx)(a.p,{children:"Los alcances de organizaci\xf3n que no est\xe1n habilitados para las aplicaciones de terceros ser\xe1n ignorados al enviar una solicitud de autorizaci\xf3n. No se mostrar\xe1n en la pantalla de consentimiento del usuario y no ser\xe1n otorgados por Logto."})})]})}function g(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},15658:(e,a,s)=>{s.d(a,{R:()=>n,x:()=>c});var o=s(30758);const i={},r=o.createContext(i);function n(e){const a=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function c(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:n(e.components),o.createElement(r.Provider,{value:a},e.children)}}}]);