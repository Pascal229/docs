"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[59873],{38228:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>u,contentTitle:()=>c,default:()=>g,frontMatter:()=>l,metadata:()=>n,toc:()=>p});const n=JSON.parse('{"id":"authorization/organization-template/README","title":"Mod\xe8le d\'organisation","description":"Un mod\xe8le d\'organisation est une conception de contr\xf4le d\'acc\xe8s pour les applications multi-locataires. Il s\'appuie sur les bases du contr\xf4le d\u2019acc\xe8s bas\xe9 sur les r\xf4les (RBAC) mais est adapt\xe9 aux environnements multi-locataires, o\xf9 les organisations repr\xe9sentent des entreprises, des groupes ou des utilisateurs.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/authorization/organization-template/README.mdx","sourceDirName":"authorization/organization-template","slug":"/authorization/organization-template/","permalink":"/fr/authorization/organization-template/","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/fr/docusaurus-plugin-content-docs/current/authorization/organization-template/README.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"docsSidebar","previous":{"title":"Prot\xe9ger les ressources API avec le contr\xf4le d\u2019acc\xe8s bas\xe9 sur les r\xf4les (RBAC)","permalink":"/fr/authorization/role-based-access-control/protect-api-resources-with-rbac"},"next":{"title":"Configurer le mod\xe8le d\'organisation","permalink":"/fr/authorization/organization-template/configure-organization-template"}}');var o=i(86070),r=i(15658);const a=i.p+"assets/images/organization-example-afa2da085d6afd66d90ecece13bedd5c.webp",t="data:image/webp;base64,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",d=i.p+"assets/images/organization-role-ae60e0000282d30a23f9c694c4074d5f.webp",l={sidebar_position:3},c="Mod\xe8le d'organisation",u={},p=[{value:"Permission d&#39;organisation",id:"permission-dorganisation",level:3},{value:"R\xf4le d&#39;organisation",id:"r\xf4le-dorganisation",level:3},{value:"Mod\xe8le d&#39;organisation",id:"mod\xe8le-dorganisation-1",level:2}];function m(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components},{CloudLink:i}=s;return i||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("CloudLink",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.header,{children:(0,o.jsx)(s.h1,{id:"mod\xe8le-dorganisation",children:"Mod\xe8le d'organisation"})}),"\n",(0,o.jsxs)(s.p,{children:["Un ",(0,o.jsx)(s.strong,{children:"mod\xe8le d'organisation"})," est une conception de contr\xf4le d'acc\xe8s pour les applications multi-locataires. Il s'appuie sur les bases du ",(0,o.jsx)(s.a,{href:"/authorization/role-based-access-control",children:"contr\xf4le d\u2019acc\xe8s bas\xe9 sur les r\xf4les (RBAC)"})," mais est adapt\xe9 aux environnements multi-locataires, o\xf9 les organisations repr\xe9sentent des entreprises, des groupes ou des utilisateurs."]}),"\n",(0,o.jsx)(s.p,{children:"Au niveau de l'organisation, un contr\xf4le d'acc\xe8s est n\xe9cessaire pour g\xe9rer les permissions pour les ressources."}),"\n",(0,o.jsxs)(s.p,{children:["Voici un exemple utilisant Notion, un outil de collaboration populaire, et une application ",(0,o.jsx)(s.a,{href:"https://auth.wiki/multi-tenancy",children:"multi-locataire"})," typique. Il prend en charge diverses fonctionnalit\xe9s pour l'",(0,o.jsx)(s.a,{href:"https://auth.wiki/authentication",children:"authentification"})," et l'",(0,o.jsx)(s.a,{href:"https://auth.wiki/authorization",children:"autorisation"})," :"]}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:"Vous pouvez cr\xe9er et rejoindre plusieurs espaces de travail avec un seul compte, au lieu de n\xe9cessiter des comptes s\xe9par\xe9s pour chaque espace de travail."}),"\n",(0,o.jsxs)(s.li,{children:["Notion utilise le ",(0,o.jsx)(s.strong,{children:"m\xeame ensemble"}),' de niveaux d\'acc\xe8s, comme "Propri\xe9taire de l\'espace de travail" et "Membre", dans tous les espaces de travail, m\xeame si vous pourriez vous attendre \xe0 des niveaux d\'acc\xe8s diff\xe9rents pour chacun.']}),"\n"]}),"\n",(0,o.jsx)(s.p,{children:"Dans ce chapitre, nous nous concentrerons sur le mod\xe8le d'organisation, qui se r\xe9f\xe8re \xe0 la conception de l'autorisation au niveau de l'organisation."}),"\n",(0,o.jsxs)(s.p,{children:["Pour le configurer correctement, vous devez comprendre ",(0,o.jsx)(s.a,{href:"/organizations/understand-how-organizations-work",children:"comment fonctionnent les organisations"})," et les diff\xe9rentes entit\xe9s impliqu\xe9es. Si vous ne l'avez pas encore examin\xe9, assurez-vous de lire ces chapitres."]}),"\n",(0,o.jsx)(s.h1,{id:"comprendre-le-mod\xe8le-dorganisation",children:"Comprendre le mod\xe8le d'organisation"}),"\n",(0,o.jsx)(s.h3,{id:"permission-dorganisation",children:"Permission d'organisation"}),"\n",(0,o.jsx)(s.p,{children:"La permission d'organisation se r\xe9f\xe8re \xe0 l'autorisation d'effectuer une action dans le contexte de l'organisation. Une permission d'organisation doit \xeatre repr\xe9sent\xe9e par une cha\xeene significative, servant \xe9galement de nom et d'identifiant unique."}),"\n",(0,o.jsx)("img",{src:t,width:"100%",alt:"Permissions d'organisation"}),"\n",(0,o.jsxs)(s.p,{children:["Par exemple, ",(0,o.jsx)(s.code,{children:"edit:resource"}),"."]}),"\n",(0,o.jsxs)(s.p,{children:["Les permissions d'organisation ne sont pas significatives sans le contexte d'une organisation. Par exemple, ",(0,o.jsx)(s.code,{children:"edit:resource"})," dans le contexte de l'organisation ",(0,o.jsx)(s.code,{children:"org1"})," est diff\xe9rent de ",(0,o.jsx)(s.code,{children:"edit:resource"})," dans le contexte de l'organisation ",(0,o.jsx)(s.code,{children:"org2"})," car elles pointent vers des ressources diff\xe9rentes (",(0,o.jsx)(s.code,{children:"org 1"})," vs ",(0,o.jsx)(s.code,{children:"org 2"}),")."]}),"\n",(0,o.jsx)(s.h3,{id:"r\xf4le-dorganisation",children:"R\xf4le d'organisation"}),"\n",(0,o.jsxs)(s.p,{children:["Un r\xf4le d'organisation est un ensemble de ",(0,o.jsx)(s.a,{href:"#organization-permission",children:"permissions d'organisation"})," ou de ",(0,o.jsx)(s.a,{href:"/authorization/role-based-access-control/configure-permissions",children:"permissions API"})," (permissions API d\xe9finies directement dans les ",(0,o.jsx)(i,{to:"/api-resources",children:"ressources API dans Logto Console"}),") qui peuvent \xeatre attribu\xe9es aux utilisateurs."]}),"\n",(0,o.jsx)("img",{src:d,width:"100%",alt:"R\xf4les d'organisation"}),"\n",(0,o.jsxs)(s.p,{children:["Les r\xf4les d'organisation ne sont pas significatifs sans le contexte d'une organisation. Par exemple, ",(0,o.jsx)(s.code,{children:"admin"})," dans le contexte de l'organisation ",(0,o.jsx)(s.code,{children:"org1"})," est diff\xe9rent de ",(0,o.jsx)(s.code,{children:"admin"})," dans le contexte de l'organisation ",(0,o.jsx)(s.code,{children:"org2"}),"."]}),"\n",(0,o.jsxs)(s.admonition,{type:"note",children:[(0,o.jsx)(s.p,{children:(0,o.jsx)(s.strong,{children:"Puis-je attribuer des permissions d\xe9finies au niveau des ressources API aux r\xf4les d'organisation ?"})}),(0,o.jsxs)(s.p,{children:["Oui, vous pouvez attribuer des ",(0,o.jsx)(s.a,{href:"/authorization/role-based-access-control#permissionsscopes",children:"permissions API"})," aux r\xf4les d'organisation, pas seulement des ",(0,o.jsx)(s.a,{href:"/authorization/organization-template#organization-permission",children:"permissions au niveau de l'organisation"}),"."]}),(0,o.jsxs)(s.p,{children:["Les ",(0,o.jsx)(s.a,{href:"/authorization/api-resources",children:"ressources API"})," dans Logto Cloud prot\xe8gent principalement les ressources au niveau utilisateur / syst\xe8me, mais lorsque les syst\xe8mes et les organisations partagent des points de terminaison, Logto vous permet d'attribuer des permissions API aux r\xf4les d'organisation pour plus de flexibilit\xe9."]})]}),"\n",(0,o.jsx)(s.h2,{id:"mod\xe8le-dorganisation-1",children:"Mod\xe8le d'organisation"}),"\n",(0,o.jsxs)(s.p,{children:["Le mod\xe8le d'organisation se r\xe9f\xe8re \xe0 un ensemble de permissions et de r\xf4les d'organisation qui s'appliquent \xe0 chaque ",(0,o.jsx)(s.a,{href:"/organizations",children:"organisation."})," Il est consid\xe9r\xe9 comme un contr\xf4le d'acc\xe8s bas\xe9 sur les r\xf4les au niveau de l'organisation."]}),"\n",(0,o.jsx)(s.p,{children:"Pensez \xe0 une application de collaboration typique, et elles partagent naturellement le m\xeame \"mod\xe8le\" de contr\xf4le d'acc\xe8s qui d\xe9finit les niveaux d'acc\xe8s et ce que les utilisateurs peuvent faire dans l'organisation. Nous l'appelons \"mod\xe8le d'organisation\" dans Logto."}),"\n",(0,o.jsx)(s.p,{children:"Prenons un exemple pour comprendre comment tout se connecte :"}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"John"}),", ",(0,o.jsx)(s.strong,{children:"Sarah"})," sont dans diff\xe9rentes organisations avec des r\xf4les diff\xe9rents dans le contexte de diff\xe9rentes organisations."]}),"\n",(0,o.jsx)("img",{src:a,width:"100%",alt:"Mod\xe8le d'organisation"}),"\n",(0,o.jsx)(s.p,{children:"\xc0 partir de ce diagramme, voici quelques informations que vous devez conna\xeetre :"}),"\n",(0,o.jsxs)(s.ol,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"John"})," est affili\xe9 \xe0 deux organisations, utilisant l'email ",(0,o.jsx)(s.code,{children:"john@email.com"})," comme identifiant unique. Il occupe le poste d'",(0,o.jsx)(s.code,{children:"admin"})," dans ",(0,o.jsx)(s.code,{children:"Organization A"})," et est un ",(0,o.jsx)(s.code,{children:"guest"})," dans ",(0,o.jsx)(s.code,{children:"Organization B"}),"."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Sarah"})," est associ\xe9e \xe0 une seule organisation et utilise l'email ",(0,o.jsx)(s.code,{children:"sarah@email.com"})," comme identifiant unique. Elle est l'",(0,o.jsx)(s.code,{children:"admin"})," de ",(0,o.jsx)(s.code,{children:"Organization B"}),"."]}),"\n",(0,o.jsxs)(s.li,{children:["Les r\xf4les d'",(0,o.jsx)(s.code,{children:"Admin"}),", ",(0,o.jsx)(s.code,{children:"Member"}),", et ",(0,o.jsx)(s.code,{children:"Guest"})," sont d\xe9sign\xe9s au sein des organisations et ces r\xf4les sont coh\xe9rents \xe0 travers diverses organisations."]}),"\n",(0,o.jsx)(s.li,{children:"Des r\xf4les suppl\xe9mentaires peuvent \xeatre cr\xe9\xe9s dans les param\xe8tres du mod\xe8le d'organisation. Ces r\xf4les nouvellement cr\xe9\xe9s seront appliqu\xe9s et partag\xe9s \xe0 travers toutes les organisations."}),"\n"]}),"\n",(0,o.jsxs)(s.admonition,{type:"note",children:[(0,o.jsx)(s.p,{children:"Dans Logto, le mod\xe8le d'organisation est un mod\xe8le de contr\xf4le d'acc\xe8s con\xe7u sp\xe9cifiquement pour les organisations. Bien qu'il soit bas\xe9 sur le contr\xf4le d'acc\xe8s bas\xe9 sur les r\xf4les (RBAC), il est destin\xe9 \xe0 diff\xe9rents sc\xe9narios."}),(0,o.jsx)(s.p,{children:"Utilisez le mod\xe8le d'organisation lorsque vous devez configurer des r\xf4les et des permissions pour une organisation."}),(0,o.jsx)(s.p,{children:"Pour une application B2C simple sans niveau d'organisation, utilisez plut\xf4t le RBAC au niveau utilisateur / syst\xe8me."}),(0,o.jsxs)(s.p,{children:["Vous pouvez utiliser \xe0 la fois le ",(0,o.jsx)(s.a,{href:"/authorization/organization-template",children:"mod\xe8le d'organisation"})," et le ",(0,o.jsx)(s.a,{href:"/authorization/role-based-access-control/",children:"RBAC au niveau utilisateur / syst\xe8me"})," dans Logto, permettant une approche plus robuste pour r\xe9pondre \xe0 vos exigences commerciales et produit sp\xe9cifiques."]})]})]})}function g(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}},15658:(e,s,i)=>{i.d(s,{R:()=>a,x:()=>t});var n=i(30758);const o={},r=n.createContext(o);function a(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);