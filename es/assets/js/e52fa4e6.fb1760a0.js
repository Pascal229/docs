"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[535],{35782:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>c,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"user-management/advanced-user-search","title":"B\xfasqueda avanzada de usuarios","description":"Usar directamente la Management API para aprovechar las condiciones avanzadas de b\xfasqueda de usuarios.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/user-management/advanced-user-search.mdx","sourceDirName":"user-management","slug":"/user-management/advanced-user-search","permalink":"/es/user-management/advanced-user-search","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/es/docusaurus-plugin-content-docs/current/user-management/advanced-user-search.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"docsSidebar","previous":{"title":"Gestionar usuarios","permalink":"/es/user-management/manage-users"},"next":{"title":"Token de acceso personal","permalink":"/es/user-management/personal-access-token"}}');var i=s(86070),r=s(15658);const c={sidebar_position:3},o="B\xfasqueda avanzada de usuarios",d={},l=[{value:"Realizar una solicitud de b\xfasqueda",id:"realizar-una-solicitud-de-b\xfasqueda",level:2},{value:"Ejemplo",id:"ejemplo",level:3},{value:"Par\xe1metros",id:"par\xe1metros",level:3},{value:"B\xfasqueda difusa b\xe1sica",id:"b\xfasqueda-difusa-b\xe1sica",level:3},{value:"Especificar campos",id:"especificar-campos",level:3},{value:"Cambiar el modo conjunto",id:"cambiar-el-modo-conjunto",level:3},{value:"Coincidencia exacta y sensibilidad a may\xfasculas y min\xfasculas",id:"coincidencia-exacta-y-sensibilidad-a-may\xfasculas-y-min\xfasculas",level:3},{value:"Expresi\xf3n regular (RegEx)",id:"expresi\xf3n-regular-regex",level:3},{value:"Sobrescribir el modo de coincidencia",id:"sobrescribir-el-modo-de-coincidencia",level:3}];function t(e){const a={a:"a",blockquote:"blockquote",code:"code",div:"div",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.header,{children:(0,i.jsx)(a.h1,{id:"b\xfasqueda-avanzada-de-usuarios",children:"B\xfasqueda avanzada de usuarios"})}),"\n",(0,i.jsx)(a.p,{children:"Usar directamente la Management API para aprovechar las condiciones avanzadas de b\xfasqueda de usuarios."}),"\n",(0,i.jsx)(a.h2,{id:"realizar-una-solicitud-de-b\xfasqueda",children:"Realizar una solicitud de b\xfasqueda"}),"\n",(0,i.jsxs)(a.p,{children:["Usa ",(0,i.jsx)(a.a,{href:"https://openapi.logto.io/operation/operation-getuser",children:(0,i.jsx)(a.code,{children:"GET /api/users"})})," para buscar usuarios. Ten en cuenta que es una Management API que requiere autenticaci\xf3n como las dem\xe1s. Consulta ",(0,i.jsx)(a.a,{href:"/integrate-logto/interact-with-management-api",children:"Interactuar con Management API"})," para la receta de interacci\xf3n."]}),"\n",(0,i.jsx)(a.h3,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.strong,{children:"Solicitud"})}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-bash",children:"curl \\\n  --location \\\n  --request GET \\\n  'http://<your-logto-endpoint>/api/users?search=%25alice%25'\n\n"})}),"\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.strong,{children:"Respuesta"})}),"\n",(0,i.jsxs)(a.p,{children:["Un array de entidades ",(0,i.jsx)(a.code,{children:"User"}),"."]}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-json",children:'[\n  {\n    "id": "MgUzzDsyX0iB",\n    "username": "alice_123",\n    "primaryEmail": "alice@some.email.domain",\n    "primaryPhone": null,\n    "name": null,\n    "avatar": null\n    // ...\n  }\n]\n'})}),"\n",(0,i.jsx)(a.h3,{id:"par\xe1metros",children:"Par\xe1metros"}),"\n",(0,i.jsx)(a.p,{children:"Una solicitud de b\xfasqueda consta de las siguientes claves de par\xe1metros:"}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsxs)(a.li,{children:["Palabras clave de b\xfasqueda: ",(0,i.jsx)(a.code,{children:"search"}),", ",(0,i.jsx)(a.code,{children:"search.*"})]}),"\n",(0,i.jsxs)(a.li,{children:["Modo de b\xfasqueda para campos: ",(0,i.jsx)(a.code,{children:"mode"}),", ",(0,i.jsx)(a.code,{children:"mode.*"})," (valor predeterminado ",(0,i.jsx)(a.code,{children:"'like'"}),", disponibles ",(0,i.jsx)(a.code,{children:"['exact', 'like', 'similar_to', 'posix']"}),")"]}),"\n",(0,i.jsxs)(a.li,{children:["Modo conjunto: ",(0,i.jsx)(a.code,{children:"joint"})," o ",(0,i.jsx)(a.code,{children:"jointMode"})," (valor predeterminado ",(0,i.jsx)(a.code,{children:"'or'"}),", disponibles ",(0,i.jsx)(a.code,{children:"['or', 'and']"}),")"]}),"\n",(0,i.jsxs)(a.li,{children:["Es sensible a may\xfasculas y min\xfasculas: ",(0,i.jsx)(a.code,{children:"isCaseSensitive"})," (valor predeterminado ",(0,i.jsx)(a.code,{children:"false"}),")"]}),"\n"]}),"\n",(0,i.jsxs)(a.p,{children:["Esta API tiene ",(0,i.jsx)(a.a,{href:"/integrate-logto/interact-with-management-api/#managing-paginated-api-responses",children:"paginaci\xf3n"})," habilitada."]}),"\n",(0,i.jsxs)(a.p,{children:["Vamos a revisarlos a trav\xe9s de algunos ejemplos. Todos los par\xe1metros de b\xfasqueda se formatear\xe1n como un constructor de ",(0,i.jsx)(a.code,{children:"URLSearchParams"}),"."]}),"\n",(0,i.jsx)(a.div,{children:(0,i.jsxs)(a.p,{children:["El modo de b\xfasqueda est\xe1 configurado en ",(0,i.jsx)(a.code,{children:"like"})," por defecto, que utiliza ",(0,i.jsx)(a.a,{href:"https://en.wikipedia.org/wiki/Approximate_string_matching",children:"coincidencia aproximada de cadenas"}),' ("b\xfasqueda difusa").']})}),"\n",(0,i.jsx)(a.div,{children:(0,i.jsxs)(a.p,{children:['Todos los modos de b\xfasqueda difusa solo admiten la coincidencia de un valor por campo. Si necesitas coincidir m\xfaltiples valores para un solo campo, debes usar el modo "exacto". Consulta ',(0,i.jsx)(a.a,{href:"./#exact-match-and-case-sensitivity",children:"Coincidencia exacta y sensibilidad a may\xfasculas y min\xfasculas"})," para m\xe1s detalles."]})}),"\n",(0,i.jsx)(a.h3,{id:"b\xfasqueda-difusa-b\xe1sica",children:"B\xfasqueda difusa b\xe1sica"}),"\n",(0,i.jsxs)(a.p,{children:["Si deseas realizar una b\xfasqueda difusa en todos los campos disponibles, simplemente proporciona un valor para la clave ",(0,i.jsx)(a.code,{children:"search"}),". Utilizar\xe1 ",(0,i.jsxs)(a.a,{href:"https://www.postgresql.org/docs/current/functions-matching.html#FUNCTIONS-LIKE",children:["el operador ",(0,i.jsx)(a.code,{children:"like"})]})," internamente:"]}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-javascript",children:"new URLSearchParams([['search', '%foo%']]);\n"})}),"\n",(0,i.jsxs)(a.p,{children:["Esta b\xfasqueda iterar\xe1 sobre todos los campos disponibles en una b\xfasqueda de usuario, es decir, ",(0,i.jsx)(a.code,{children:"id"}),", ",(0,i.jsx)(a.code,{children:"primaryEmail"}),", ",(0,i.jsx)(a.code,{children:"primaryPhone"}),", ",(0,i.jsx)(a.code,{children:"username"}),", ",(0,i.jsx)(a.code,{children:"name"}),"."]}),"\n",(0,i.jsx)(a.h3,{id:"especificar-campos",children:"Especificar campos"}),"\n",(0,i.jsxs)(a.p,{children:["\xbfQu\xe9 pasa si deseas limitar la b\xfasqueda solo en ",(0,i.jsx)(a.code,{children:"name"}),"? Para buscar a alguien que incluya ",(0,i.jsx)(a.code,{children:"foo"})," en su nombre, simplemente usa el s\xedmbolo ",(0,i.jsx)(a.code,{children:"."})," para especificar el campo:"]}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-javascript",children:"new URLSearchParams([['search.name', '%foo%']]);\n"})}),"\n",(0,i.jsxs)(a.p,{children:["Recuerda que los campos anidados no son compatibles, por ejemplo, ",(0,i.jsx)(a.code,{children:"search.name.first"})," resultar\xe1 en un error."]}),"\n",(0,i.jsx)(a.p,{children:"Tambi\xe9n puedes especificar m\xfaltiples campos al mismo tiempo:"}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-javascript",children:"new URLSearchParams([\n  ['search.name', '%foo%'],\n  ['search.primaryEmail', '%@gmail.com'],\n]);\n"})}),"\n",(0,i.jsxs)(a.p,{children:["Significa buscar usuarios que tengan ",(0,i.jsx)(a.code,{children:"foo"})," en el nombre ",(0,i.jsx)(a.strong,{children:"O"})," su correo electr\xf3nico termine con ",(0,i.jsx)(a.code,{children:"@gmail.com"}),"."]}),"\n",(0,i.jsx)(a.h3,{id:"cambiar-el-modo-conjunto",children:"Cambiar el modo conjunto"}),"\n",(0,i.jsxs)(a.p,{children:["Si deseas que la API solo devuelva el resultado que satisfaga TODAS las condiciones, establece el modo conjunto en ",(0,i.jsx)(a.code,{children:"and"}),":"]}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-javascript",children:"new URLSearchParams([\n  ['search.name', '%foo%'],\n  ['search.primaryEmail', '%@gmail.com'],\n  ['joint', 'and'],\n]);\n"})}),"\n",(0,i.jsxs)(a.p,{children:["Significa buscar usuarios que tengan ",(0,i.jsx)(a.code,{children:"foo"})," en el nombre ",(0,i.jsx)(a.strong,{children:"Y"})," su correo electr\xf3nico termine con ",(0,i.jsx)(a.code,{children:"@gmail.com"}),"."]}),"\n",(0,i.jsx)(a.h3,{id:"coincidencia-exacta-y-sensibilidad-a-may\xfasculas-y-min\xfasculas",children:"Coincidencia exacta y sensibilidad a may\xfasculas y min\xfasculas"}),"\n",(0,i.jsxs)(a.p,{children:['Supongamos que deseas buscar cuyo nombre sea exactamente "Alice". Puedes establecer ',(0,i.jsx)(a.code,{children:"mode.name"})," para usar coincidencia exacta."]}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-javascript",children:"new URLSearchParams([\n  ['search.name', 'Alice'],\n  ['mode.name', 'exact'],\n]);\n"})}),"\n",(0,i.jsxs)(a.p,{children:["Puedes encontrar que tiene el mismo efecto al usar el modo ",(0,i.jsx)(a.code,{children:"like"})," (predeterminado) vs. especificar ",(0,i.jsx)(a.code,{children:"exact"}),". Una diferencia es que el modo ",(0,i.jsx)(a.code,{children:"exact"})," utiliza ",(0,i.jsx)(a.code,{children:"="})," para comparar mientras que ",(0,i.jsx)(a.code,{children:"like"})," utiliza ",(0,i.jsx)(a.code,{children:"like"})," o ",(0,i.jsx)(a.code,{children:"ilike"}),". Te\xf3ricamente ",(0,i.jsx)(a.code,{children:"="})," deber\xeda tener un mejor rendimiento."]}),"\n",(0,i.jsxs)(a.p,{children:["Adem\xe1s, en el modo ",(0,i.jsx)(a.code,{children:"exact"}),", puedes pasar m\xfaltiples valores para la coincidencia, y se conectar\xe1n con ",(0,i.jsx)(a.code,{children:"or"}),":"]}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-javascript",children:"new URLSearchParams([\n  ['search.name', 'Alice'],\n  ['search.name', 'Bob'],\n  ['mode.name', 'exact'],\n]);\n"})}),"\n",(0,i.jsxs)(a.p,{children:['Coincidir\xe1 con los usuarios con nombre "Alice" ',(0,i.jsx)(a.strong,{children:"O"}),' "Bob".']}),"\n",(0,i.jsx)(a.p,{children:"Por defecto, la b\xfasqueda no distingue entre may\xfasculas y min\xfasculas. Para ser m\xe1s preciso, establece la b\xfasqueda como sensible a may\xfasculas y min\xfasculas:"}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-javascript",children:"new URLSearchParams([\n  ['search.name', 'Alice'],\n  ['search.name', 'Bob'],\n  ['mode.name', 'exact'],\n  ['isCaseSensitive', 'true'],\n]);\n"})}),"\n",(0,i.jsxs)(a.p,{children:["Ten en cuenta que ",(0,i.jsx)(a.code,{children:"isCaseSensitive"})," es una configuraci\xf3n global. Por lo tanto, TODOS los campos la seguir\xe1n."]}),"\n",(0,i.jsx)(a.h3,{id:"expresi\xf3n-regular-regex",children:"Expresi\xf3n regular (RegEx)"}),"\n",(0,i.jsxs)(a.p,{children:["PostgreSQL admite dos tipos de expresiones regulares, ",(0,i.jsx)(a.a,{href:"https://www.postgresql.org/docs/current/functions-matching.html#FUNCTIONS-SIMILARTO-REGEXP",children:"similar a"})," y ",(0,i.jsx)(a.a,{href:"https://www.postgresql.org/docs/current/functions-matching.html#FUNCTIONS-POSIX-REGEXP",children:"posix"}),". Establece ",(0,i.jsx)(a.code,{children:"mode"})," en ",(0,i.jsx)(a.code,{children:"similar_to"})," o ",(0,i.jsx)(a.code,{children:"posix"})," para buscar por expresiones regulares:"]}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-javascript",children:"new URLSearchParams([\n  ['search', '^T.?m Scot+$'],\n  ['mode', 'posix'],\n]);\n"})}),"\n",(0,i.jsxs)(a.blockquote,{children:["\n",(0,i.jsx)(a.p,{children:"Nota: El modo similar_to solo funciona en b\xfasquedas sensibles a may\xfasculas y min\xfasculas."}),"\n"]}),"\n",(0,i.jsx)(a.h3,{id:"sobrescribir-el-modo-de-coincidencia",children:"Sobrescribir el modo de coincidencia"}),"\n",(0,i.jsx)(a.p,{children:"Por defecto, todas las palabras clave heredar\xe1n el modo de coincidencia de la b\xfasqueda general:"}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-javascript",children:"new URLSearchParams([\n  ['search', '^T.?m Scot+$'],\n  ['mode', 'posix'],\n  ['search.primaryEmail', 'tom%'], // Modo Posix\n  ['joint', 'and'],\n]);\n"})}),"\n",(0,i.jsx)(a.p,{children:"Para sobrescribir un campo espec\xedfico:"}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-javascript",children:"new URLSearchParams([\n  ['search', '^T.?m Scot+$'],\n  ['mode', 'posix'],\n  ['search.primaryEmail', 'tom%'], // Modo Like\n  ['mode.primaryEmail', 'like'],\n  ['search.phone', '0{3,}'], // Modo Posix\n  ['joint', 'and'],\n]);\n"})})]})}function u(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(t,{...e})}):t(e)}},15658:(e,a,s)=>{s.d(a,{R:()=>c,x:()=>o});var n=s(30758);const i={},r=n.createContext(i);function c(e){const a=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),n.createElement(r.Provider,{value:a},e.children)}}}]);