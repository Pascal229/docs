"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[79266],{15065:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>v,contentTitle:()=>g,default:()=>f,frontMatter:()=>h,metadata:()=>s,toc:()=>j});const s=JSON.parse('{"id":"integrate-logto/interact-with-management-api/README","title":"Interagir avec Management API","description":"Qu\'est-ce que Logto Management API ?","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/integrate-logto/interact-with-management-api/README.md","sourceDirName":"integrate-logto/interact-with-management-api","slug":"/integrate-logto/interact-with-management-api/","permalink":"/fr/integrate-logto/interact-with-management-api/","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/fr/docusaurus-plugin-content-docs/current/integrate-logto/interact-with-management-api/README.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4},"sidebar":"docsSidebar","previous":{"title":"Personnalisation de l\'\xe9cran de consentement","permalink":"/fr/integrate-logto/third-party-applications/oidc-oauth-third-party-applications/consent-screen-branding"},"next":{"title":"Structure des donn\xe9es de l\'application","permalink":"/fr/integrate-logto/application-data-structure"}}');var o=t(86070),a=t(15658);const i=t.p+"assets/images/logto-management-api-resource-14162a031698ad36ac0f8c04ff683ba2.webp",r=t.p+"assets/images/logto-management-api-details-4994334ef32791d9ebc6c9aa298c9ecd.webp";var l=t(64455),c=t(93378),u=t(62862),d=t(47029),p=t(38397),m=t(84814);const h={sidebar_position:4},g="Interagir avec Management API",v={},j=[{value:"Qu&#39;est-ce que Logto Management API ?",id:"quest-ce-que-logto-management-api-",level:2},{value:"Comment acc\xe9der \xe0 Logto Management API",id:"comment-acc\xe9der-\xe0-logto-management-api",level:2},{value:"Cr\xe9er une application M2M",id:"cr\xe9er-une-application-m2m",level:3},...m.RM,{value:"R\xe9cup\xe9rer un jeton d\u2019acc\xe8s",id:"r\xe9cup\xe9rer-un-jeton-dacc\xe8s",level:3},{value:"Notions de base sur la requ\xeate de jeton d\u2019acc\xe8s",id:"notions-de-base-sur-la-requ\xeate-de-jeton-dacc\xe8s",level:4},...l.RM,{value:"R\xe9cup\xe9rer un jeton d\u2019acc\xe8s pour Logto Management API",id:"r\xe9cup\xe9rer-un-jeton-dacc\xe8s-pour-logto-management-api",level:4},...c.RM,{value:"R\xe9ponse du jeton d\u2019acc\xe8s",id:"r\xe9ponse-du-jeton-dacc\xe8s",level:4},...p.RM,{value:"Acc\xe9der \xe0 Logto Management API en utilisant le jeton d\u2019acc\xe8s",id:"acc\xe9der-\xe0-logto-management-api-en-utilisant-le-jeton-dacc\xe8s",level:3},...u.RM,...d.RM,{value:"Sc\xe9narios typiques d&#39;utilisation de Logto Management API",id:"sc\xe9narios-typiques-dutilisation-de-logto-management-api",level:2},{value:"Impl\xe9menter le profil utilisateur par vous-m\xeame",id:"impl\xe9menter-le-profil-utilisateur-par-vous-m\xeame",level:3},{value:"Recherche avanc\xe9e d&#39;utilisateurs",id:"recherche-avanc\xe9e-dutilisateurs",level:3},{value:"Impl\xe9menter la gestion des organisations par vous-m\xeame",id:"impl\xe9menter-la-gestion-des-organisations-par-vous-m\xeame",level:3},{value:"Conseils pour utiliser Logto Management API",id:"conseils-pour-utiliser-logto-management-api",level:2},{value:"Gestion des r\xe9ponses API pagin\xe9es",id:"gestion-des-r\xe9ponses-api-pagin\xe9es",level:3},{value:"Utilisation des en-t\xeates de lien",id:"utilisation-des-en-t\xeates-de-lien",level:4},{value:"Utilisation de l&#39;en-t\xeate total-number",id:"utilisation-de-len-t\xeate-total-number",level:4},{value:"Changer le num\xe9ro de page et la taille de la page",id:"changer-le-num\xe9ro-de-page-et-la-taille-de-la-page",level:4},{value:"Limite de taux",id:"limite-de-taux",level:3}];function x(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components},{CloudLink:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("CloudLink",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"interagir-avec-management-api",children:"Interagir avec Management API"})}),"\n",(0,o.jsx)(n.h2,{id:"quest-ce-que-logto-management-api-",children:"Qu'est-ce que Logto Management API ?"}),"\n",(0,o.jsxs)(n.p,{children:["Logto Management API est un ensemble complet d'API qui donne aux d\xe9veloppeurs un contr\xf4le total sur leur impl\xe9mentation pour r\xe9pondre \xe0 leurs besoins produits et technologiques. Il est pr\xe9-construit, r\xe9pertori\xe9 dans le ",(0,o.jsx)(t,{to:"/api-resources",children:"Console > Ressources API > Logto Management API"}),", et ne peut pas \xeatre supprim\xe9 ou modifi\xe9."]}),"\n",(0,o.jsxs)(n.p,{children:["Son identifiant suit le mod\xe8le ",(0,o.jsx)(n.code,{children:"https://[tenant-id].logto.app/api"})]}),"\n",(0,o.jsx)("img",{alt:"Ressource Logto Management API",src:i}),"\n",(0,o.jsx)("img",{alt:"D\xe9tails Logto Management API",src:r}),"\n",(0,o.jsx)(n.p,{children:"Avec Logto Management API, vous pouvez acc\xe9der aux services backend robustes de Logto, qui sont hautement \xe9volutifs et peuvent \xeatre utilis\xe9s dans une multitude de sc\xe9narios. Cela va au-del\xe0 de ce qui est possible avec les capacit\xe9s low-code de la Console Admin."}),"\n",(0,o.jsx)(n.p,{children:"Certaines API fr\xe9quemment utilis\xe9es sont list\xe9es ci-dessous :"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://openapi.logto.io/operation/operation-getuser",children:"Utilisateur"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://openapi.logto.io/operation/operation-listapplications",children:"Application"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://openapi.logto.io/operation/operation-listlogs",children:"Journaux d'audit"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://openapi.logto.io/operation/operation-listroles",children:"R\xf4les"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://openapi.logto.io/operation/operation-listresources",children:"Ressources"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://openapi.logto.io/operation/operation-listconnectors",children:"Connecteurs"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://openapi.logto.io/operation/operation-listorganizations",children:"Organisations"})}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Pour en savoir plus sur les API disponibles, veuillez visiter ",(0,o.jsx)(n.a,{href:"https://openapi.logto.io/",children:"https://openapi.logto.io/"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"comment-acc\xe9der-\xe0-logto-management-api",children:"Comment acc\xe9der \xe0 Logto Management API"}),"\n",(0,o.jsx)(n.h3,{id:"cr\xe9er-une-application-m2m",children:"Cr\xe9er une application M2M"}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["Si vous n'\xeates pas familier avec le flux d'authentification M2M (Machine-to-Machine), nous vous recommandons de lire ",(0,o.jsx)(n.a,{href:"/integrate-logto/integrate-logto-into-your-application/understand-authentication-flow/#machine-to-machine-authentication-flow",children:"Comprendre le flux d'authentification"})," d'abord pour comprendre les concepts de base."]})}),"\n",(0,o.jsxs)(n.p,{children:["Allez dans ",(0,o.jsx)(t,{to:"/applications",children:"Console > Applications"}),', s\xe9lectionnez le type d\'application "Machine-to-machine" et commencez le processus de cr\xe9ation.']}),"\n",(0,o.jsx)(m.Ay,{}),"\n",(0,o.jsx)(n.p,{children:"Dans le module d'attribution de r\xf4les, vous pouvez voir que tous les r\xf4les M2M sont inclus, et les r\xf4les indiqu\xe9s par une ic\xf4ne Logto signifient que ces r\xf4les incluent des permissions Logto Management API."}),"\n",(0,o.jsx)(n.p,{children:"Attribuez maintenant des r\xf4les M2M incluant des permissions Logto Management API pour votre application M2M."}),"\n",(0,o.jsx)(n.h3,{id:"r\xe9cup\xe9rer-un-jeton-dacc\xe8s",children:"R\xe9cup\xe9rer un jeton d\u2019acc\xe8s"}),"\n",(0,o.jsx)(n.h4,{id:"notions-de-base-sur-la-requ\xeate-de-jeton-dacc\xe8s",children:"Notions de base sur la requ\xeate de jeton d\u2019acc\xe8s"}),"\n",(0,o.jsx)(l.Ay,{}),"\n",(0,o.jsx)(n.h4,{id:"r\xe9cup\xe9rer-un-jeton-dacc\xe8s-pour-logto-management-api",children:"R\xe9cup\xe9rer un jeton d\u2019acc\xe8s pour Logto Management API"}),"\n",(0,o.jsx)(c.Ay,{}),"\n",(0,o.jsx)(n.h4,{id:"r\xe9ponse-du-jeton-dacc\xe8s",children:"R\xe9ponse du jeton d\u2019acc\xe8s"}),"\n",(0,o.jsx)(n.p,{children:"Un corps de r\xe9ponse d'acc\xe8s r\xe9ussi serait comme :"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "access_token": "eyJhbG...2g", // Utilisez ce jeton pour acc\xe9der \xe0 Logto Management API\n  "expires_in": 3600, // Expiration du jeton en secondes\n  "token_type": "Bearer", // Type d\'authentification pour votre requ\xeate lors de l\'utilisation du jeton d\u2019acc\xe8s\n  "scope": "all" // port\xe9e `all` pour Logto Management API\n}\n'})}),"\n",(0,o.jsx)(p.Ay,{}),"\n",(0,o.jsx)(n.h3,{id:"acc\xe9der-\xe0-logto-management-api-en-utilisant-le-jeton-dacc\xe8s",children:"Acc\xe9der \xe0 Logto Management API en utilisant le jeton d\u2019acc\xe8s"}),"\n",(0,o.jsx)(u.Ay,{}),"\n",(0,o.jsx)(d.Ay,{}),"\n",(0,o.jsx)(n.h2,{id:"sc\xe9narios-typiques-dutilisation-de-logto-management-api",children:"Sc\xe9narios typiques d'utilisation de Logto Management API"}),"\n",(0,o.jsx)(n.p,{children:"Nos d\xe9veloppeurs ont impl\xe9ment\xe9 de nombreuses fonctionnalit\xe9s suppl\xe9mentaires en utilisant Logto Management API. Nous croyons que notre API est hautement \xe9volutive et peut r\xe9pondre \xe0 un large \xe9ventail de vos besoins. Voici quelques exemples de sc\xe9narios qui ne sont pas possibles avec la Console Admin Logto mais qui peuvent \xeatre r\xe9alis\xe9s via Logto Management API."}),"\n",(0,o.jsx)(n.h3,{id:"impl\xe9menter-le-profil-utilisateur-par-vous-m\xeame",children:"Impl\xe9menter le profil utilisateur par vous-m\xeame"}),"\n",(0,o.jsx)(n.p,{children:"Logto ne fournit actuellement pas de solution d'interface utilisateur pr\xe9-construite pour les profils utilisateurs. Nous reconnaissons que les profils utilisateurs sont \xe9troitement li\xe9s aux attributs commerciaux et produits. Pendant que nous travaillons \xe0 d\xe9terminer la meilleure approche, nous vous sugg\xe9rons d'utiliser nos API pour cr\xe9er votre propre solution. Par exemple, vous pouvez utiliser notre API d'interaction, API de profil et API de code de v\xe9rification pour d\xe9velopper une solution personnalis\xe9e qui r\xe9pond \xe0 vos besoins."}),"\n",(0,o.jsx)(n.h3,{id:"recherche-avanc\xe9e-dutilisateurs",children:"Recherche avanc\xe9e d'utilisateurs"}),"\n",(0,o.jsxs)(n.p,{children:["La Console Admin Logto prend en charge les fonctions de recherche et de filtrage de base. Pour des options de recherche avanc\xe9es comme la recherche floue, la correspondance exacte et la sensibilit\xe9 \xe0 la casse, consultez nos tutoriels et guides ",(0,o.jsx)(n.a,{href:"/user-management/advanced-user-search",children:"Recherche avanc\xe9e d'utilisateurs"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"impl\xe9menter-la-gestion-des-organisations-par-vous-m\xeame",children:"Impl\xe9menter la gestion des organisations par vous-m\xeame"}),"\n",(0,o.jsxs)(n.p,{children:["Si vous utilisez la fonctionnalit\xe9 ",(0,o.jsx)(n.a,{href:"/organizations",children:"organisations"})," pour construire votre application multi-tenant, vous pourriez avoir besoin de Logto Management API pour des t\xe2ches comme les invitations d'organisation et la gestion des membres. Pour votre produit SaaS, o\xf9 vous avez \xe0 la fois des administrateurs et des membres dans le tenant, Logto Management API peut vous aider \xe0 cr\xe9er un portail admin personnalis\xe9 adapt\xe9 \xe0 vos besoins commerciaux. Consultez ",(0,o.jsx)(n.a,{href:"/end-user-flows/organization-experience/",children:"ceci"})," pour plus de d\xe9tails."]}),"\n",(0,o.jsx)(n.h2,{id:"conseils-pour-utiliser-logto-management-api",children:"Conseils pour utiliser Logto Management API"}),"\n",(0,o.jsx)(n.h3,{id:"gestion-des-r\xe9ponses-api-pagin\xe9es",children:"Gestion des r\xe9ponses API pagin\xe9es"}),"\n",(0,o.jsx)(n.p,{children:"Certaines des r\xe9ponses API peuvent inclure de nombreux r\xe9sultats, les r\xe9sultats seront pagin\xe9s. Logto fournit 2 types d'informations de pagination."}),"\n",(0,o.jsx)(n.h4,{id:"utilisation-des-en-t\xeates-de-lien",children:"Utilisation des en-t\xeates de lien"}),"\n",(0,o.jsx)(n.p,{children:"Un en-t\xeate de r\xe9ponse pagin\xe9e sera comme :"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'Link: <https://logto.dev/users?page=1&page_size=20>; rel="first"\n'})}),"\n",(0,o.jsx)(n.p,{children:"L'en-t\xeate de lien fournit l'URL pour la page pr\xe9c\xe9dente, suivante, premi\xe8re et derni\xe8re des r\xe9sultats :"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:'L\'URL pour la page pr\xe9c\xe9dente est suivie de rel="prev".'}),"\n",(0,o.jsx)(n.li,{children:'L\'URL pour la page suivante est suivie de rel="next".'}),"\n",(0,o.jsx)(n.li,{children:'L\'URL pour la derni\xe8re page est suivie de rel="last".'}),"\n",(0,o.jsx)(n.li,{children:'L\'URL pour la premi\xe8re page est suivie de rel="first".'}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"utilisation-de-len-t\xeate-total-number",children:"Utilisation de l'en-t\xeate total-number"}),"\n",(0,o.jsxs)(n.p,{children:["En plus des en-t\xeates de lien standard, Logto ajoutera \xe9galement un en-t\xeate ",(0,o.jsx)(n.code,{children:"Total-Number"})," :"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"Total-Number: 216\n"})}),"\n",(0,o.jsx)(n.p,{children:"Cela serait tr\xe8s pratique et utile pour afficher les num\xe9ros de page."}),"\n",(0,o.jsx)(n.h4,{id:"changer-le-num\xe9ro-de-page-et-la-taille-de-la-page",children:"Changer le num\xe9ro de page et la taille de la page"}),"\n",(0,o.jsx)(n.p,{children:"Il y a 2 param\xe8tres de requ\xeate optionnels :"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"page"})," : indique le num\xe9ro de page, commence \xe0 1, la valeur par d\xe9faut est 1."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"page_size"})," : indique le nombre d'\xe9l\xe9ments par page, la valeur par d\xe9faut est 20."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"limite-de-taux",children:"Limite de taux"}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:"Ceci est uniquement pour Logto Cloud."})}),"\n",(0,o.jsx)(n.p,{children:"Pour assurer la fiabilit\xe9 et la s\xe9curit\xe9 de nos services pour tous les utilisateurs, nous employons un pare-feu g\xe9n\xe9ral qui surveille et g\xe8re le trafic vers notre site Web. Bien que nous n'imposions pas de limite de taux stricte, nous recommandons aux utilisateurs de limiter leur activit\xe9 \xe0 environ 200 requ\xeates toutes les 10 secondes pour \xe9viter de d\xe9clencher nos mesures de protection."})]})}function f(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(x,{...e})}):x(e)}},47029:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>r});var s=t(86070),o=t(15658),a=t(78551),i=t(77501);const r=[];function l(e){const n={code:"code",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["Utilisation du jeton d\u2019acc\xe8s (Jeton d\u2019acc\xe8s) demand\xe9 avec la ressource API de gestion int\xe9gr\xe9e de Logto ",(0,s.jsx)(n.code,{children:"https://[your-tenant-id].logto.app/api"})," pour obtenir toutes les applications dans Logto :"]}),"\n",(0,s.jsxs)(i.A,{children:[(0,s.jsx)(a.A,{value:"Node.js",label:"Node.js",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const logtoEndpoint = 'https://your.logto.endpoint'; // Remplacez par votre point de terminaison Logto\nconst accessToken = 'eyJhb...2g'; // Jeton d\u2019acc\xe8s\n\nconst fetchLogtoApplications = async () => {\n  return await fetch(`${logtoEndpoint}/api/applications`, {\n    method: 'GET',\n    headers: {\n      Authorization: `Bearer ${accessToken}`,\n    },\n  });\n};\n"})})}),(0,s.jsxs)(a.A,{value:"cURL",label:"cURL",children:[(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"curl --location \\\n  --request GET 'https://your.logto.endpoint/api/applications' \\\n  --header 'Authorization: Bearer eyJhbG...2g'\n"})}),(0,s.jsxs)(n.p,{children:["N'oubliez pas de remplacer les valeurs r\xe9elles par les v\xf4tres. La valeur apr\xe8s ",(0,s.jsx)(n.code,{children:"Bearer"})," doit \xeatre le jeton d\u2019acc\xe8s (JWT) que vous avez re\xe7u."]})]})]})]})}function c(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},62862:(e,n,t)=>{t.d(n,{Ay:()=>r,RM:()=>a});var s=t(86070),o=t(15658);const a=[];function i(e){const n={code:"code",p:"p",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["Vous pouvez remarquer que la r\xe9ponse du jeton a un champ ",(0,s.jsx)(n.code,{children:"token_type"}),", qui est fix\xe9 \xe0 ",(0,s.jsx)(n.code,{children:"Bearer"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Ainsi, vous devez placer le jeton d\u2019acc\xe8s dans le champ ",(0,s.jsx)(n.code,{children:"Authorization"})," des en-t\xeates HTTP avec le format Bearer (",(0,s.jsx)(n.code,{children:"Bearer YOUR_TOKEN"}),") lorsque vous interagissez avec votre serveur de ressource API."]})]})}function r(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}},64455:(e,n,t)=>{t.d(n,{Ay:()=>l,RM:()=>i});var s=t(86070),o=t(15658);const a=t.p+"assets/images/app-id-secret-af29845d7768be05909995293bef45d9.png",i=[];function r(e){const n={a:"a",code:"code",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["L'application M2M effectue une requ\xeate ",(0,s.jsx)(n.code,{children:"POST"})," vers le point de terminaison de jeton pour r\xe9cup\xe9rer un jeton d\u2019acc\xe8s (Access token) en ajoutant les param\xe8tres suivants en utilisant le format ",(0,s.jsx)(n.code,{children:"application/x-www-form-urlencoded"})," dans le corps de l'entit\xe9 de la requ\xeate HTTP :"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"grant_type"})," : Doit \xeatre d\xe9fini sur ",(0,s.jsx)(n.code,{children:"client_credentials"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"resource"})," : La ressource \xe0 laquelle vous souhaitez acc\xe9der"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"scope"})," : La port\xe9e de la requ\xeate d\u2019acc\xe8s"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Vous devez \xe9galement inclure les informations d'identification de votre application M2M dans l'en-t\xeate de la requ\xeate pour que le point de terminaison de jeton puisse authentifier votre application M2M."}),"\n",(0,s.jsxs)(n.p,{children:["Cela est r\xe9alis\xe9 en incluant les informations d'identification de l'application dans le formulaire d' ",(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization#basic_authentication",children:"Authentification (Basic authentication)"})," dans l'en-t\xeate de la requ\xeate ",(0,s.jsx)(n.code,{children:"Authorization"}),", o\xf9 le nom d'utilisateur est l'ID de l'application et le mot de passe est le secret de l'application."]}),"\n",(0,s.jsx)(n.p,{children:"Vous pouvez trouver l'ID de l'application et le secret de l'application sur la page des d\xe9tails de votre application M2M :"}),"\n",(0,s.jsx)("img",{alt:"ID de l'application et secret de l'application",src:a,width:"600px"})]})}function l(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}},93378:(e,n,t)=>{t.d(n,{Ay:()=>u,RM:()=>l});var s=t(86070),o=t(15658),a=t(78551),i=t(77501);const r=t.p+"assets/images/logto-management-api-4994334ef32791d9ebc6c9aa298c9ecd.png",l=[];function c(e){const n={admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:['Logto fournit une ressource int\xe9gr\xe9e "Logto Management API", c\'est une ressource en lecture seule avec la permission ',(0,s.jsx)(n.code,{children:"all"})," pour acc\xe9der \xe0 Logto Management API, vous pouvez la voir dans votre liste de ressources API. L'indicateur de ressource API suit le mod\xe8le ",(0,s.jsx)(n.code,{children:"https://{your-tenant-id}.logto.app/api"})," , et cela sera votre valeur de ressource utilis\xe9e dans le corps de la requ\xeate de jeton d\u2019acc\xe8s."]}),"\n",(0,s.jsx)("img",{alt:"D\xe9tails de Logto Management API",src:r,width:"600px"}),"\n",(0,s.jsxs)(n.p,{children:["Avant d'acc\xe9der \xe0 Logto Management API, assurez-vous que votre application M2M a \xe9t\xe9 assign\xe9e avec des r\xf4les M2M qui incluent la permission ",(0,s.jsx)(n.code,{children:"all"}),' de cette ressource int\xe9gr\xe9e "Logto Management API".']}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:['Logto fournit \xe9galement un r\xf4le M2M pr\xe9configur\xe9 "Logto Management API access" pour les nouveaux locataires cr\xe9\xe9s, auquel la permission ',(0,s.jsx)(n.code,{children:"all"})," de la ressource Logto Management API a d\xe9j\xe0 \xe9t\xe9 assign\xe9e. Vous pouvez l'utiliser directement sans configurer manuellement les permissions. Ce r\xf4le pr\xe9configur\xe9 peut \xe9galement \xeatre modifi\xe9 et supprim\xe9 selon les besoins."]})}),"\n",(0,s.jsx)(n.p,{children:"Maintenant, composez tout ce que nous avons et envoyez la requ\xeate :"}),"\n",(0,s.jsxs)(i.A,{children:[(0,s.jsx)(a.A,{value:"Node.js",label:"Node.js",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const logtoEndpoint = 'https://your.logto.endpoint'; // Remplacez par votre point de terminaison Logto\nconst tokenEndpoint = `${logtoEndpoint}/oidc/token`;\nconst applicationId = 'your-application-id';\nconst applicationSecret = 'your-application-secret';\nconst tenantId = 'your-tenant-id';\n\nconst fetchAccessToken = async () => {\n  return await fetch(tokenEndpoint, {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/x-www-form-urlencoded',\n      Authorization: `Basic ${Buffer.from(`${applicationId}:${applicationSecret}`).toString(\n        'base64'\n      )}`,\n    },\n    body: new URLSearchParams({\n      grant_type: 'client_credentials',\n      resource: `https://${tenantId}.logto.app/api`,\n      scope: 'all',\n    }).toString(),\n  });\n};\n"})})}),(0,s.jsxs)(a.A,{value:"cURL",label:"cURL",children:[(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"curl --location \\\n  --request POST 'https://your.logto.endpoint' \\\n  --header 'Authorization: Basic ${your_auth_string}' \\\n  --header 'Content-Type: application/x-www-form-urlencoded' \\\n  --data-urlencode 'grant_type=client_credentials' \\\n  --data-urlencode 'resource=https://${tenantId}.logto.app/api' \\\n  --data-urlencode 'scope=all'\n"})}),(0,s.jsx)(n.p,{children:"N'oubliez pas de remplacer les valeurs r\xe9elles par les v\xf4tres."})]})]}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsxs)(n.p,{children:["Pour les utilisateurs de Logto Cloud : lorsque vous interagissez avec Logto Management API, vous ne pouvez pas utiliser de domaine personnalis\xe9, utilisez le point de terminaison Logto par d\xe9faut ",(0,s.jsx)(n.code,{children:"https://{your_tenant_id}.logto.app/oidc/token"})," pour obtenir des jetons d\u2019acc\xe8s."]})})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},38397:(e,n,t)=>{t.d(n,{Ay:()=>r,RM:()=>a});var s=t(86070),o=t(15658);const a=[];function i(e){const n={admonition:"admonition",code:"code",p:"p",...(0,o.R)(),...e.components};return(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["Logto ne prend pas actuellement en charge l'application M2M pour repr\xe9senter un utilisateur. Le ",(0,s.jsx)(n.code,{children:"sub"})," dans la charge utile du jeton d\u2019acc\xe8s sera l'ID de l'application."]})})}function r(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}},84814:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>r});var s=t(86070),o=t(15658);const a=t.p+"assets/images/assign-m2m-roles-modal-f4f833eaf1c4b2c59509c918d3985eee.png",i=t.p+"assets/images/assign-m2m-roles-page-6084df6c23aec9c3f331738031f197b2.png",r=[];function l(e){const n={a:"a",p:"p",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["Lors du processus de cr\xe9ation d'une application M2M, vous serez dirig\xe9 vers une page o\xf9 vous pouvez attribuer des ",(0,s.jsx)(n.a,{href:"/authorization/role-based-access-control/configure-roles#define-role-type",children:"r\xf4les M2M"})," \xe0 vos applications :"]}),"\n",(0,s.jsx)("img",{alt:"Assign M2M roles modal",src:a,width:"600px"}),"\n",(0,s.jsx)(n.p,{children:"Ou vous pouvez \xe9galement attribuer ces r\xf4les sur la page de d\xe9tails de l'application M2M lorsque vous avez d\xe9j\xe0 cr\xe9\xe9 une application M2M :"}),"\n",(0,s.jsx)("img",{alt:"Assign M2M roles page",src:i,width:"600px"})]})}function c(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},78551:(e,n,t)=>{t.d(n,{A:()=>i});t(30758);var s=t(13526);const o={tabItem:"tabItem_PGP0"};var a=t(86070);function i(e){let{children:n,hidden:t,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,s.A)(o.tabItem,i),hidden:t,children:n})}},77501:(e,n,t)=>{t.d(n,{A:()=>M});var s=t(30758),o=t(13526),a=t(65052),i=t(25557),r=t(77469),l=t(50873),c=t(62230),u=t(60196);function d(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:s,default:o}}=e;return{value:n,label:t,attributes:s,default:o}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:t}=e;const o=(0,i.W6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(a),(0,s.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(o.location.search);n.set(a,e),o.replace({...o.location,search:n.toString()})}),[a,o])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:o}=e,a=p(e),[i,l]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:a}))),[c,d]=h({queryString:t,groupId:o}),[g,v]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,a]=(0,u.Dv)(t);return[o,(0,s.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:o}),j=(()=>{const e=c??g;return m({value:e,tabValues:a})?e:null})();(0,r.A)((()=>{j&&l(j)}),[j]);return{selectedValue:i,selectValue:(0,s.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),v(e)}),[d,v,a]),tabValues:a}}var v=t(13887);const j={tabList:"tabList_CGfx",tabItem:"tabItem_JX1E"};var x=t(86070);function f(e){let{className:n,block:t,selectedValue:s,selectValue:i,tabValues:r}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),u=e=>{const n=e.currentTarget,t=l.indexOf(n),o=r[t].value;o!==s&&(c(n),i(o))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":t},n),children:r.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>l.push(e),onKeyDown:d,onClick:u,...a,className:(0,o.A)("tabs__item",j.tabItem,a?.className,{"tabs__item--active":s===n}),children:t??n},n)}))})}function b(e){let{lazy:n,children:t,selectedValue:a}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===a));return e?(0,s.cloneElement)(e,{className:(0,o.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function A(e){const n=g(e);return(0,x.jsxs)("div",{className:(0,o.A)("tabs-container",j.tabList),children:[(0,x.jsx)(f,{...n,...e}),(0,x.jsx)(b,{...n,...e})]})}function M(e){const n=(0,v.A)();return(0,x.jsx)(A,{...e,children:d(e.children)},String(n))}},15658:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>r});var s=t(30758);const o={},a=s.createContext(o);function i(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);