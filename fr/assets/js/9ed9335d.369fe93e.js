"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[62153],{28611:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"end-user-flows/organization-experience/invite-organization-members","title":"Inviter des membres de l\'organisation","description":"En tant qu\'application multi-organisation, un besoin courant est d\'inviter des membres dans votre organisation. Dans ce guide, nous vous expliquerons les \xe9tapes et les d\xe9tails techniques pour impl\xe9menter cette fonctionnalit\xe9 dans votre application.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/end-user-flows/organization-experience/invite-organization-members.mdx","sourceDirName":"end-user-flows/organization-experience","slug":"/end-user-flows/organization-experience/invite-organization-members","permalink":"/fr/end-user-flows/organization-experience/invite-organization-members","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/fr/docusaurus-plugin-content-docs/current/end-user-flows/organization-experience/invite-organization-members.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"docsSidebar","previous":{"title":"Cr\xe9er une organisation","permalink":"/fr/end-user-flows/organization-experience/create-organization"},"next":{"title":"Gestion des organisations","permalink":"/fr/end-user-flows/organization-experience/organization-management"}}');var t=i(86070),r=i(15658);const o={sidebar_position:2},a="Inviter des membres de l'organisation",l={},d=[{value:"Aper\xe7u du flux",id:"aper\xe7u-du-flux",level:2},{value:"Cr\xe9er des r\xf4les d&#39;organisation",id:"cr\xe9er-des-r\xf4les-dorganisation",level:2},{value:"Configurer votre connecteur de messagerie",id:"configurer-votre-connecteur-de-messagerie",level:2},{value:"G\xe9rer les invitations avec Logto Management API",id:"g\xe9rer-les-invitations-avec-logto-management-api",level:2},{value:"Utiliser le contr\xf4le d\u2019acc\xe8s bas\xe9 sur les r\xf4les (RBAC) pour g\xe9rer les permissions des utilisateurs",id:"utiliser-le-contr\xf4le-dacc\xe8s-bas\xe9-sur-les-r\xf4les-rbac-pour-g\xe9rer-les-permissions-des-utilisateurs",level:2},{value:"G\xe9rer les mises \xe0 jour des port\xe9es dans les jetons d\u2019organisation",id:"g\xe9rer-les-mises-\xe0-jour-des-port\xe9es-dans-les-jetons-dorganisation",level:2},{value:"R\xe9voquer les port\xe9es existantes",id:"r\xe9voquer-les-port\xe9es-existantes",level:3},{value:"Accorder de nouvelles port\xe9es",id:"accorder-de-nouvelles-port\xe9es",level:3},{value:"Accorder de nouvelles port\xe9es d\xe9j\xe0 d\xe9finies dans votre syst\xe8me d&#39;authentification",id:"accorder-de-nouvelles-port\xe9es-d\xe9j\xe0-d\xe9finies-dans-votre-syst\xe8me-dauthentification",level:4},{value:"Accorder de nouvelles port\xe9es nouvellement introduites dans votre syst\xe8me d&#39;authentification",id:"accorder-de-nouvelles-port\xe9es-nouvellement-introduites-dans-votre-syst\xe8me-dauthentification",level:4},{value:"Impl\xe9menter la v\xe9rification des permissions en temps r\xe9el et mettre \xe0 jour le jeton d\u2019organisation",id:"impl\xe9menter-la-v\xe9rification-des-permissions-en-temps-r\xe9el-et-mettre-\xe0-jour-le-jeton-dorganisation",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",mermaid:"mermaid",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"inviter-des-membres-de-lorganisation",children:"Inviter des membres de l'organisation"})}),"\n",(0,t.jsx)(n.p,{children:"En tant qu'application multi-organisation, un besoin courant est d'inviter des membres dans votre organisation. Dans ce guide, nous vous expliquerons les \xe9tapes et les d\xe9tails techniques pour impl\xe9menter cette fonctionnalit\xe9 dans votre application."}),"\n",(0,t.jsx)(n.h2,{id:"aper\xe7u-du-flux",children:"Aper\xe7u du flux"}),"\n",(0,t.jsx)(n.p,{children:"Le processus global est illustr\xe9 dans le diagramme ci-dessous :"}),"\n",(0,t.jsx)(n.mermaid,{value:"sequenceDiagram\n\tParticipant U as Utilisateur final\n  Participant A as Administrateur de l'organisation\n  Participant C as Votre application multi-organisation\n\tParticipant L as Logto\n\n  A ->> C: Saisir l'e-mail et le r\xf4le de l'invit\xe9\n  C ->> L: Cr\xe9er une invitation d'organisation avec Management API\n  L --\x3e> C: Retourner l'ID de l'invitation\n  C ->> C: Composer le lien d'invitation avec l'ID de l'invitation\n  C ->> L: Demander l'envoi de l'e-mail d'invitation avec le lien d'invitation\n  L --\x3e> U: Envoyer l'e-mail d'invitation avec le lien d'invitation\n  U ->> C: Cliquer sur le lien d'invitation et naviguer vers votre page d'accueil,<br /> accepter ou rejeter l'invitation\n  C ->> L: Mettre \xe0 jour le statut de l'invitation avec Management API"}),"\n",(0,t.jsx)(n.h2,{id:"cr\xe9er-des-r\xf4les-dorganisation",children:"Cr\xe9er des r\xf4les d'organisation"}),"\n",(0,t.jsxs)(n.p,{children:["Avant d'inviter des membres dans votre organisation, vous devez cr\xe9er des r\xf4les d'organisation. Consultez le guide ",(0,t.jsx)(n.a,{href:"/authorization/organization-template/configure-organization-template",children:"Configurer le mod\xe8le d'organisation"})," pour des instructions d\xe9taill\xe9es."]}),"\n",(0,t.jsxs)(n.p,{children:["Dans ce guide, cr\xe9ons deux r\xf4les d'organisation typiques : ",(0,t.jsx)(n.code,{children:"admin"})," et ",(0,t.jsx)(n.code,{children:"member"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Le r\xf4le ",(0,t.jsx)(n.code,{children:"admin"})," a un acc\xe8s complet \xe0 toutes les ressources de l'organisation, tandis que le r\xf4le ",(0,t.jsx)(n.code,{children:"member"})," a un acc\xe8s limit\xe9. Par exemple, chaque r\xf4le peut avoir un ensemble de permissions comme suit :"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["R\xf4le ",(0,t.jsx)(n.code,{children:"admin"})," :","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"read:data"})," - Acc\xe8s en lecture \xe0 toutes les ressources de donn\xe9es de l'organisation."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"write:data"})," - Acc\xe8s en \xe9criture \xe0 toutes les ressources de donn\xe9es de l'organisation."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"delete:data"})," - Suppression des ressources de donn\xe9es de l'organisation."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"invite:member"})," - Inviter des membres dans l'organisation."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"manage:member"})," - G\xe9rer les membres de l'organisation."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"delete:member"})," - Supprimer des membres de l'organisation."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["R\xf4le ",(0,t.jsx)(n.code,{children:"member"})," :","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"read:data"})," - Acc\xe8s en lecture \xe0 toutes les ressources de donn\xe9es de l'organisation."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"write:data"})," - Acc\xe8s en \xe9criture \xe0 toutes les ressources de donn\xe9es de l'organisation."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"invite:member"})," - Inviter des membres dans l'organisation."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Cela peut \xeatre fait facilement dans le ",(0,t.jsx)(n.a,{href:"https://cloud.logto.io/",children:"Logto Console"}),". Vous pouvez \xe9galement utiliser le ",(0,t.jsx)(n.a,{href:"https://openapi.logto.io/operation/operation-createorganizationrole",children:"Logto Management API"})," pour cr\xe9er des r\xf4les d'organisation de mani\xe8re programmatique."]}),"\n",(0,t.jsx)(n.h2,{id:"configurer-votre-connecteur-de-messagerie",children:"Configurer votre connecteur de messagerie"}),"\n",(0,t.jsxs)(n.p,{children:["\xc9tant donn\xe9 que les invitations sont envoy\xe9es par e-mail, assurez-vous que votre ",(0,t.jsx)(n.a,{href:"/connectors/email-connectors",children:"connecteur de messagerie"})," est correctement configur\xe9. Pour envoyer des invitations, vous devez configurer un type d'utilisation de ",(0,t.jsx)(n.a,{href:"/connectors/email-connectors/email-templates#email-template-types",children:"mod\xe8le d'e-mail"})," nouvellement introduit - ",(0,t.jsx)(n.code,{children:"OrganizationInvitation"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Un exemple de mod\xe8le d'e-mail pour le type d'utilisation ",(0,t.jsx)(n.code,{children:"OrganizationInvitation"})," est pr\xe9sent\xe9 ci-dessous :"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "subject": "Bienvenue dans mon organisation",\n  "content": "<p>Rejoignez mon organisation via ce <a href=\\"{{link}}\\" target=\\"_blank\\">lien</a>.</p>",\n  "usageType": "OrganizationInvitation",\n  "type": "text/html"\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Le placeholder ",(0,t.jsx)(n.code,{children:"{{link}}"})," dans le contenu de l'e-mail sera remplac\xe9 par le lien d'invitation r\xe9el lors de l'envoi de l'e-mail. Dans ce guide, disons qu'il serait ",(0,t.jsx)(n.code,{children:"https://your-app.com/invitation/accept/{your-invitation-id}"}),"."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:['Le "service de messagerie Logto" int\xe9gr\xe9 de Logto Cloud ne prend pas en charge le type d\'utilisation ',(0,t.jsx)(n.code,{children:"OrganizationInvitation"})," pour le moment. Vous devez donc configurer votre connecteur de messagerie (par exemple, Sendgrid) et configurer le mod\xe8le ",(0,t.jsx)(n.code,{children:"OrganizationInvitation"}),"."]})}),"\n",(0,t.jsx)(n.h2,{id:"g\xe9rer-les-invitations-avec-logto-management-api",children:"G\xe9rer les invitations avec Logto Management API"}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["Si vous n'avez pas encore configur\xe9 le Logto Management API, consultez ",(0,t.jsx)(n.a,{href:"/integrate-logto/interact-with-management-api",children:"Interagir avec Management API"})," pour plus de d\xe9tails."]})}),"\n",(0,t.jsx)(n.p,{children:"Nous avons fourni un ensemble d'APIs de gestion des invitations dans la fonctionnalit\xe9 des organisations. Avec ces APIs, vous pouvez :"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"POST /api/organization-invitations"})," cr\xe9er une invitation d'organisation avec un r\xf4le d'organisation attribu\xe9."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"POST /api/organization-invitations/{id}/message"})," envoyer l'invitation d'organisation \xe0 l'invit\xe9 par e-mail.\nNote : Ce payload API prend en charge une propri\xe9t\xe9 ",(0,t.jsx)(n.code,{children:"link"}),", vous pouvez composer votre lien d'invitation bas\xe9 sur l'ID de l'invitation. Par exemple :","\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "link": "https://your-app.com/invitation/accept/{your-invitation-id}"\n}\n'})}),"\n","En cons\xe9quence, vous devez impl\xe9menter une page d'accueil lorsque votre invit\xe9 navigue via le lien d'invitation vers votre application."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"GET /api/organization-invitations"})," & ",(0,t.jsx)(n.code,{children:"GET /api/organization-invitations/{id}"})," obtenir toutes vos invitations ou une invitation sp\xe9cifique par ID.\nSur votre page d'accueil, utilisez ces APIs pour lister toutes les invitations ou les d\xe9tails d'une invitation qu'un utilisateur a re\xe7ue."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"PUT /api/organization-invitations/{id}/status"})," accepter ou rejeter l'invitation en mettant \xe0 jour le statut de l'invitation.\nUtilisez cette API pour g\xe9rer la r\xe9ponse de l'utilisateur \xe0 l'invitation."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:['Veuillez noter que toutes les APIs list\xe9es ci-dessus n\xe9cessitent un "jeton d\u2019organisation" valide. ',(0,t.jsx)(n.a,{href:"/authorization/organization-template/protect-organization-resources#step-2-fetch-the-organization-token",children:"Consultez ce guide"})," pour apprendre comment obtenir le jeton d\u2019organisation."]}),"\n",(0,t.jsx)(n.h2,{id:"utiliser-le-contr\xf4le-dacc\xe8s-bas\xe9-sur-les-r\xf4les-rbac-pour-g\xe9rer-les-permissions-des-utilisateurs",children:"Utiliser le contr\xf4le d\u2019acc\xe8s bas\xe9 sur les r\xf4les (RBAC) pour g\xe9rer les permissions des utilisateurs"}),"\n",(0,t.jsx)(n.p,{children:"Avec les configurations ci-dessus, vous pouvez maintenant envoyer des invitations par e-mail, et les invit\xe9s peuvent rejoindre l'organisation avec le r\xf4le attribu\xe9."}),"\n",(0,t.jsx)(n.p,{children:"Les utilisateurs avec diff\xe9rents r\xf4les d'organisation auront diff\xe9rentes port\xe9es (permissions) dans leurs jetons d\u2019organisation. Ainsi, votre application cliente et vos services backend doivent v\xe9rifier ces port\xe9es pour d\xe9terminer les fonctionnalit\xe9s visibles et les actions autoris\xe9es."}),"\n",(0,t.jsx)(n.h2,{id:"g\xe9rer-les-mises-\xe0-jour-des-port\xe9es-dans-les-jetons-dorganisation",children:"G\xe9rer les mises \xe0 jour des port\xe9es dans les jetons d\u2019organisation"}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["Assurez-vous d'avoir int\xe9gr\xe9 l'organisation avec votre application. Consultez le ",(0,t.jsx)(n.a,{href:"/authorization/organization-template/protect-organization-resources",children:"guide d'int\xe9gration"})," pour plus de d\xe9tails."]})}),"\n",(0,t.jsx)(n.p,{children:"G\xe9rer les mises \xe0 jour des port\xe9es dans les jetons d\u2019organisation implique :"}),"\n",(0,t.jsx)(n.h3,{id:"r\xe9voquer-les-port\xe9es-existantes",children:"R\xe9voquer les port\xe9es existantes"}),"\n",(0,t.jsx)(n.p,{children:"Par exemple, r\xe9trograder un administrateur \xe0 un membre non-administrateur devrait supprimer des port\xe9es de l'utilisateur. Dans ce cas, vous pouvez simplement effacer le jeton d\u2019organisation mis en cache et en obtenir un nouveau avec le jeton de rafra\xeechissement. Les port\xe9es r\xe9duites seront imm\xe9diatement refl\xe9t\xe9es dans le nouveau jeton d\u2019organisation \xe9mis."}),"\n",(0,t.jsx)(n.h3,{id:"accorder-de-nouvelles-port\xe9es",children:"Accorder de nouvelles port\xe9es"}),"\n",(0,t.jsx)(n.p,{children:"Cela peut \xeatre divis\xe9 en deux sc\xe9narios :"}),"\n",(0,t.jsx)(n.h4,{id:"accorder-de-nouvelles-port\xe9es-d\xe9j\xe0-d\xe9finies-dans-votre-syst\xe8me-dauthentification",children:"Accorder de nouvelles port\xe9es d\xe9j\xe0 d\xe9finies dans votre syst\xe8me d'authentification"}),"\n",(0,t.jsx)(n.p,{children:"Similaire \xe0 la r\xe9vocation des port\xe9es, si la nouvelle port\xe9e accord\xe9e est d\xe9j\xe0 enregistr\xe9e aupr\xe8s du serveur d'authentification, vous pouvez simplement \xe9mettre un nouveau jeton d\u2019organisation, et les nouvelles port\xe9es seront imm\xe9diatement refl\xe9t\xe9es."}),"\n",(0,t.jsx)(n.h4,{id:"accorder-de-nouvelles-port\xe9es-nouvellement-introduites-dans-votre-syst\xe8me-dauthentification",children:"Accorder de nouvelles port\xe9es nouvellement introduites dans votre syst\xe8me d'authentification"}),"\n",(0,t.jsxs)(n.p,{children:["Dans ce cas, vous devez d\xe9clencher un processus de reconnexion ou de reconsentement pour mettre \xe0 jour le jeton d\u2019organisation de l'utilisateur. Par exemple, en appelant la m\xe9thode ",(0,t.jsx)(n.code,{children:"signIn"})," dans le Logto SDK."]}),"\n",(0,t.jsxs)(n.p,{children:["En savoir plus sur ",(0,t.jsx)(n.a,{href:"/authorization/organization-template/protect-organization-resources/#fetch-the-organization-token",children:"l'\xe9mission d'un jeton d\u2019organisation"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"impl\xe9menter-la-v\xe9rification-des-permissions-en-temps-r\xe9el-et-mettre-\xe0-jour-le-jeton-dorganisation",children:"Impl\xe9menter la v\xe9rification des permissions en temps r\xe9el et mettre \xe0 jour le jeton d\u2019organisation"}),"\n",(0,t.jsx)(n.p,{children:"Logto fournit Management API pour r\xe9cup\xe9rer les permissions des utilisateurs en temps r\xe9el dans l'organisation."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"GET /api/organizations/{id}/users/{userId}/scopes"})," (",(0,t.jsx)(n.a,{href:"https://openapi.logto.io/operation/operation-listorganizationuserscopes",children:"R\xe9f\xe9rences API"}),")"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Vous pouvez ensuite comparer les port\xe9es dans le jeton d\u2019organisation de l'utilisateur avec les permissions en temps r\xe9el pour d\xe9terminer si l'utilisateur a \xe9t\xe9 promu ou r\xe9trograd\xe9."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Si r\xe9trograd\xe9, vous pouvez simplement effacer le jeton d\u2019organisation mis en cache et le SDK \xe9mettra automatiquement un nouveau avec les port\xe9es mises \xe0 jour."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"const { clearAccessToken } = useLogto();\n\n...\n// Si les port\xe9es en temps r\xe9el r\xe9cup\xe9r\xe9es ont moins de port\xe9es que les port\xe9es du jeton d\u2019organisation\nawait clearAccessToken();\n"})}),"\n",(0,t.jsx)(n.p,{children:"Cela ne n\xe9cessite pas de processus de reconnexion ou de reconsentement. De nouveaux jetons d\u2019organisation seront \xe9mis automatiquement par le Logto SDK."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Si une nouvelle port\xe9e est introduite dans votre syst\xe8me d'authentification, d\xe9clenchez un processus de reconnexion ou de reconsentement pour mettre \xe0 jour le jeton d\u2019organisation de l'utilisateur. Prenons l'exemple du SDK React :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"const { clearAllTokens, signIn } = useLogto();\n\n...\n// Si les port\xe9es en temps r\xe9el r\xe9cup\xe9r\xe9es ont des port\xe9es nouvellement attribu\xe9es que les port\xe9es du jeton d\u2019organisation\nawait clearAllTokens();\nsignIn({\n  redirectUri: '<your-sign-in-redirect-uri>',\n  prompt: 'consent',\n});\n"})}),"\n",(0,t.jsx)(n.p,{children:"Le code ci-dessus d\xe9clenchera une navigation de page vers l'\xe9cran de consentement et redirigera automatiquement vers votre application, avec des port\xe9es mises \xe0 jour dans le jeton d\u2019organisation de l'utilisateur."}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},15658:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>a});var s=i(30758);const t={},r=s.createContext(t);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);