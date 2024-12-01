"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[35276],{62868:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>u,frontMatter:()=>t,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"end-user-flows/organization-experience/organization-management","title":"Gesti\xf3n de organizaciones","description":"Al desarrollar una aplicaci\xf3n multi-tenant, un escenario com\xfan es tener una plataforma para que los miembros de tu organizaci\xf3n autogestionen sus recursos de organizaci\xf3n.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/end-user-flows/organization-experience/organization-management.mdx","sourceDirName":"end-user-flows/organization-experience","slug":"/end-user-flows/organization-experience/organization-management","permalink":"/es/end-user-flows/organization-experience/organization-management","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/es/docusaurus-plugin-content-docs/current/end-user-flows/organization-experience/organization-management.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"docsSidebar","previous":{"title":"Invitar a miembros de la organizaci\xf3n","permalink":"/es/end-user-flows/organization-experience/invite-organization-members"},"next":{"title":"Conectores","permalink":"/es/connectors/"}}');var o=a(86070),r=a(15658);const s=a.p+"assets/images/organization-template-dda57e12975fce661806e6050125b576.webp",t={sidebar_position:3},d="Gesti\xf3n de organizaciones",l={},c=[{value:"Ejemplos de autogesti\xf3n de usuarios en sus propias organizaciones",id:"ejemplos-de-autogesti\xf3n-de-usuarios-en-sus-propias-organizaciones",level:2},{value:"Permitir que todos inviten a miembros:",id:"permitir-que-todos-inviten-a-miembros",level:3},{value:"El administrador puede modificar roles de miembros:",id:"el-administrador-puede-modificar-roles-de-miembros",level:3},{value:"A\xf1adir bots a la organizaci\xf3n",id:"a\xf1adir-bots-a-la-organizaci\xf3n",level:3},{value:"Desbloquea m\xe1s posibilidades con Management API",id:"desbloquea-m\xe1s-posibilidades-con-management-api",level:2}];function p(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components},{Url:a}=n;return a||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Url",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"gesti\xf3n-de-organizaciones",children:"Gesti\xf3n de organizaciones"})}),"\n",(0,o.jsxs)(n.p,{children:["Al desarrollar una ",(0,o.jsx)(n.a,{href:"https://auth.wiki/multi-tenancy",children:"aplicaci\xf3n multi-tenant"}),", un escenario com\xfan es tener una plataforma para que los miembros de tu organizaci\xf3n autogestionen sus recursos de organizaci\xf3n."]}),"\n",(0,o.jsx)(n.p,{children:"Tomemos como ejemplo la configuraci\xf3n b\xe1sica de una organizaci\xf3n que contiene tanto un rol de administrador como un rol de miembro normal."}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Rol"}),(0,o.jsx)(n.th,{children:"Permisos"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Admin"}),(0,o.jsxs)(n.td,{children:["Gestionar miembros de la organizaci\xf3n en la organizaci\xf3n, por ejemplo, invitar, actualizar el rol de miembro, eliminar miembro, etc.",(0,o.jsx)("br",{}),"Gestionar informaci\xf3n de la organizaci\xf3n, por ejemplo, actualizar el nombre de la organizaci\xf3n y datos personalizados, eliminar organizaci\xf3n, etc."]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Miembro"}),(0,o.jsx)(n.td,{children:"Solo puede invitar usuarios a la organizaci\xf3n."})]})]})]}),"\n",(0,o.jsxs)(n.p,{children:["As\xed que podemos definir la siguiente ",(0,o.jsx)(n.a,{href:"/authorization/organization-template",children:"plantilla de organizaci\xf3n"}),":"]}),"\n",(0,o.jsx)("center",{children:(0,o.jsx)("img",{src:s,width:"100%",alt:"Plantilla de organizaci\xf3n"})}),"\n",(0,o.jsx)(n.p,{children:"Una vez establecida la plantilla de organizaci\xf3n, tambi\xe9n puedes crear un conjunto de APIs en tu servicio que llamen a la Management API para realizar acciones de gesti\xf3n en una organizaci\xf3n espec\xedfica. Las APIs en tu servicio deben validar el token de organizaci\xf3n para asegurar que el usuario tiene los permisos requeridos."}),"\n",(0,o.jsx)(n.h2,{id:"ejemplos-de-autogesti\xf3n-de-usuarios-en-sus-propias-organizaciones",children:"Ejemplos de autogesti\xf3n de usuarios en sus propias organizaciones"}),"\n",(0,o.jsx)(n.p,{children:"Aqu\xed tienes una lista de cosas que puedes permitir que tus usuarios hagan en tu aplicaci\xf3n multi-organizaci\xf3n:"}),"\n",(0,o.jsx)(n.h3,{id:"permitir-que-todos-inviten-a-miembros",children:"Permitir que todos inviten a miembros:"}),"\n",(0,o.jsxs)(n.p,{children:["Puedes permitir que tanto los usuarios administradores como los miembros inviten a otros a la organizaci\xf3n. Consulta ",(0,o.jsx)(n.a,{href:"/end-user-flows/organization-experience/invite-organization-members",children:"esta documentaci\xf3n"})," para obtener detalles sobre c\xf3mo invitar a miembros."]}),"\n",(0,o.jsx)(n.h3,{id:"el-administrador-puede-modificar-roles-de-miembros",children:"El administrador puede modificar roles de miembros:"}),"\n",(0,o.jsx)(n.p,{children:"El administrador puede tener el privilegio de modificar los roles de otros miembros. Y el administrador puede crear roles m\xe1s espec\xedficos para la organizaci\xf3n, como l\xedder de departamento, gerente de proyecto, coordinador, etc. Esto se puede implementar con estas Management APIs:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'curl \\\n -X POST https://[tenant_id].logto.app/api/organizations/{id}/users/{userId}/roles \\\n -H "Authorization: Bearer $ACCESS_TOKEN" \\\n -H "Content-Type: application/json" \\\n -d \'{"organizationRoleIds":["admin"]}\'\n'})}),"\n",(0,o.jsx)(n.p,{children:"O de manera masiva:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'curl \\\n -X POST https://[tenant_id].logto.app/api/organizations/{id}/users/roles \\\n -H "Authorization: Bearer $ACCESS_TOKEN" \\\n -H "Content-Type: application/json" \\\n -d \'{"userIds":["userId1", "userId2"],"organizationRoleIds":["admin"]}\'\n'})}),"\n",(0,o.jsx)(n.h3,{id:"a\xf1adir-bots-a-la-organizaci\xf3n",children:"A\xf1adir bots a la organizaci\xf3n"}),"\n",(0,o.jsx)(n.p,{children:"Tambi\xe9n puedes implementar la funci\xf3n para permitir que los usuarios administradores a\xf1adan bots a una organizaci\xf3n espec\xedfica. Esto se puede hacer creando primero aplicaciones M\xe1quina a M\xe1quina (M2M), y luego a\xf1adiendo estas aplicaciones M2M a las organizaciones como bots."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'curl \\\n -X POST https://[tenant_id].logto.app/api/organizations/{id}/applications \\\n -H "Authorization: Bearer $ACCESS_TOKEN" \\\n -H "Content-Type: application/json" \\\n -d \'{"applicationIds":["botAppId"]}\'\n'})}),"\n",(0,o.jsx)(n.p,{children:"Luego tambi\xe9n puedes asignar roles de organizaci\xf3n a estos bots."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'curl \\\n -X POST https://[tenant_id].logto.app/api/organizations/{id}/applications/roles \\\n -H "Authorization: Bearer $ACCESS_TOKEN" \\\n -H "Content-Type: application/json" \\\n -d \'{"applicationIds":["botApp1"],"organizationRoleIds":["botRoleId"]}\'\n'})}),"\n",(0,o.jsx)(n.h2,{id:"desbloquea-m\xe1s-posibilidades-con-management-api",children:"Desbloquea m\xe1s posibilidades con Management API"}),"\n",(0,o.jsx)(n.p,{children:"Los ejemplos anteriores son solo algunas de las muchas posibilidades que puedes lograr con Management API. Consulta la lista completa de endpoints de Logto Management API y descubre qu\xe9 m\xe1s puedes hacer con ellos:"}),"\n",(0,o.jsx)(a,{href:"https://openapi.logto.io/operation/operation-listorganizations",children:(0,o.jsx)(n.p,{children:"Obtener organizaciones"})}),"\n",(0,o.jsx)(a,{href:"https://openapi.logto.io/operation/operation-listorganizationscopes",children:(0,o.jsx)(n.p,{children:"Obtener alcances de la organizaci\xf3n"})}),"\n",(0,o.jsx)(a,{href:"https://openapi.logto.io/operation/operation-getorganizationrole",children:(0,o.jsx)(n.p,{children:"Obtener rol de la organizaci\xf3n"})}),"\n",(0,o.jsx)(a,{href:"https://openapi.logto.io/operation/operation-getorganizationinvitation",children:(0,o.jsx)(n.p,{children:"Obtener invitaciones de la organizaci\xf3n"})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},15658:(e,n,a)=>{a.d(n,{R:()=>s,x:()=>t});var i=a(30758);const o={},r=i.createContext(o);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);