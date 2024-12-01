"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[38652],{36923:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"end-user-flows/sign-up-and-sign-in/README","title":"Inscription et connexion","description":"L\'inscription et la connexion sont le processus d\'interaction principal pour que les utilisateurs finaux s\'authentifient et autorisent l\'acc\xe8s aux applications clientes. En tant que plateforme CIAM centralis\xe9e bas\xe9e sur OIDC, Logto offre une exp\xe9rience de connexion universelle pour les utilisateurs \xe0 travers plusieurs applications et plateformes clientes.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/end-user-flows/sign-up-and-sign-in/README.mdx","sourceDirName":"end-user-flows/sign-up-and-sign-in","slug":"/end-user-flows/sign-up-and-sign-in/","permalink":"/fr/end-user-flows/sign-up-and-sign-in/","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/fr/docusaurus-plugin-content-docs/current/end-user-flows/sign-up-and-sign-in/README.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"docsSidebar","previous":{"title":"Flux des utilisateurs finaux","permalink":"/fr/end-user-flows/"},"next":{"title":"Inscription par e-mail / t\xe9l\xe9phone / nom d\'utilisateur","permalink":"/fr/end-user-flows/sign-up-and-sign-in/sign-up"}}');var s=i(86070),r=i(15658);const o={sidebar_position:1},a="Inscription et connexion",l={},c=[{value:"Flux utilisateur",id:"flux-utilisateur",level:2},{value:"Interaction utilisateur",id:"interaction-utilisateur",level:2},{value:"Personnalisation de l&#39;exp\xe9rience de connexion",id:"personnalisation-de-lexp\xe9rience-de-connexion",level:2},{value:"FAQs",id:"faqs",level:2}];function u(e){const n={a:"a",h1:"h1",h2:"h2",header:"header",mermaid:"mermaid",p:"p",strong:"strong",...(0,r.R)(),...e.components},{Details:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"inscription-et-connexion",children:"Inscription et connexion"})}),"\n",(0,s.jsx)(n.p,{children:"L'inscription et la connexion sont le processus d'interaction principal pour que les utilisateurs finaux s'authentifient et autorisent l'acc\xe8s aux applications clientes. En tant que plateforme CIAM centralis\xe9e bas\xe9e sur OIDC, Logto offre une exp\xe9rience de connexion universelle pour les utilisateurs \xe0 travers plusieurs applications et plateformes clientes."}),"\n",(0,s.jsx)(n.h2,{id:"flux-utilisateur",children:"Flux utilisateur"}),"\n",(0,s.jsxs)(n.p,{children:["Dans un flux d'authentification OIDC typique, l'utilisateur commence par ouvrir l'application cliente. L'application cliente envoie une ",(0,s.jsx)(n.a,{href:"https://auth.wiki/authorization-request",children:"requ\xeate d\u2019autorisation"})," au fournisseur OIDC de Logto. Si l'utilisateur n'a pas de session active, Logto redirigera l'utilisateur vers la page d'exp\xe9rience de connexion h\xe9berg\xe9e par Logto. L'utilisateur interagit avec la page d'exp\xe9rience Logto et s'authentifie en fournissant les informations d'identification n\xe9cessaires. Une fois l'utilisateur authentifi\xe9 avec succ\xe8s, Logto redirige l'utilisateur vers l'application cliente avec le ",(0,s.jsx)(n.a,{href:"https://auth.wiki/authorization-code-flow#how-does-authorization-code-flow-work",children:"code d\u2019autorisation"}),". L'application cliente envoie ensuite une ",(0,s.jsx)(n.a,{href:"https://auth.wiki/token-request",children:"requ\xeate de jeton"})," au fournisseur OIDC de Logto avec le code d'autorisation pour obtenir les jetons."]}),"\n",(0,s.jsx)(n.mermaid,{value:"sequenceDiagram\n  actor user as Utilisateur\n  participant client as Application cliente\n\n  box Logto\n    participant experience as Application d'exp\xe9rience de connexion\n    participant oidc as Fournisseur OIDC\n  end\n\n  user ->> client: Ouvrir l'application\n  client ->> oidc: Envoyer la requ\xeate d\u2019autorisation : post /authorize\n  oidc --\x3e> client: Inviter l'utilisateur \xe0 se connecter\n  client ->> experience: Rediriger vers la page de connexion\n  user ->> experience: Se connecter\n  experience ->> oidc: Attribuer le r\xe9sultat de l'interaction : post /experience/submit\n  oidc --\x3e> experience: Authentifi\xe9 et rediriger vers l'application cliente\n  experience ->> client: Redirection post-connexion : post /callback?code=...\n  client ->> oidc: Envoyer la requ\xeate de jeton : post /token\n  oidc --\x3e> client: Retourner le jeton"}),"\n",(0,s.jsx)(n.h2,{id:"interaction-utilisateur",children:"Interaction utilisateur"}),"\n",(0,s.jsxs)(n.p,{children:["Une ",(0,s.jsx)(n.strong,{children:"session d'interaction"})," est cr\xe9\xe9e pour chaque interaction utilisateur lorsqu'une application cliente initie une requ\xeate d'autorisation. Cette session centralise le statut de l'interaction utilisateur \xe0 travers plusieurs applications clientes, permettant \xe0 Logto de fournir une exp\xe9rience de connexion coh\xe9rente. Lorsque les utilisateurs passent d'une application cliente \xe0 une autre, la session d'interaction reste coh\xe9rente, maintenant le statut d'authentification de l'utilisateur et r\xe9duisant le besoin de connexions r\xe9p\xe9t\xe9es \xe0 travers les plateformes. Une fois la ",(0,s.jsx)(n.strong,{children:"session d'interaction"})," \xe9tablie, l'utilisateur est invit\xe9 \xe0 se connecter \xe0 Logto."]}),"\n",(0,s.jsxs)(n.p,{children:["L'",(0,s.jsx)(n.strong,{children:"application d'exp\xe9rience"})," dans Logto est une application d\xe9di\xe9e et h\xe9berg\xe9e qui facilite l'exp\xe9rience de connexion. Lorsque les utilisateurs ont besoin de s'authentifier, ils sont dirig\xe9s vers l'",(0,s.jsx)(n.strong,{children:"application d'exp\xe9rience"}),", o\xf9 ils compl\xe8tent leur connexion et interagissent avec Logto. L'",(0,s.jsx)(n.strong,{children:"application d'exp\xe9rience"})," utilise la session d'interaction active pour suivre et soutenir la progression de l'interaction de l'utilisateur."]}),"\n",(0,s.jsxs)(n.p,{children:["Pour soutenir et contr\xf4ler ce parcours utilisateur, Logto pr\xe9sente un ensemble d'",(0,s.jsx)(n.strong,{children:"Experience APIs"})," bas\xe9es sur les sessions. Ces APIs permettent \xe0 l'",(0,s.jsx)(n.strong,{children:"application d'exp\xe9rience"})," de g\xe9rer une large gamme de m\xe9thodes d'identification et de v\xe9rification des utilisateurs en mettant \xe0 jour et en acc\xe9dant au statut de la session d'interaction en temps r\xe9el."]}),"\n",(0,s.jsx)(n.p,{children:"Une fois que l'utilisateur r\xe9pond \xe0 toutes les exigences de validation et de v\xe9rification, la session d'interaction se termine par une soumission de r\xe9sultat au fournisseur OIDC, o\xf9 l'utilisateur est enti\xe8rement authentifi\xe9 et a donn\xe9 son consentement, finalisant ainsi le processus de connexion s\xe9curis\xe9."}),"\n",(0,s.jsx)(n.mermaid,{value:"flowchart TD\n  %% Couches\n  subgraph Layer1 [Couche Application Cliente]\n      A[Application Cliente]\n  end\n\n  subgraph Layer2 [Couche Gestion de l'Interaction]\n      B[Fournisseur OIDC]\n      C[Session d'Interaction]\n  end\n\n  subgraph Layer3 [Couche Exp\xe9rience]\n      D[Application d'Exp\xe9rience]\n  end\n\n  %% Connexions\n  A --\x3e |Requ\xeate d\u2019Autorisation| B\n  B --\x3e |\xc9tat de la Session| C\n  C -.-> |Connexion Utilisateur| D\n  D --\x3e |Identification et V\xe9rification| C\n  C --\x3e |R\xe9sultat de Session Finalis\xe9| B\n  B --\x3e |R\xe9ponse d\u2019Autorisation| A"}),"\n",(0,s.jsx)(n.h2,{id:"personnalisation-de-lexp\xe9rience-de-connexion",children:"Personnalisation de l'exp\xe9rience de connexion"}),"\n",(0,s.jsxs)(n.p,{children:["Logto offre une exp\xe9rience utilisateur flexible et personnalisable pour r\xe9pondre \xe0 divers besoins commerciaux, y compris la personnalisation de la marque, de l'interface utilisateur et des flux d'interaction utilisateur. L'",(0,s.jsx)(n.strong,{children:"application d'exp\xe9rience"})," peut \xeatre adapt\xe9e pour r\xe9pondre aux exigences de marque et de s\xe9curit\xe9 de l'application cliente."]}),"\n",(0,s.jsxs)(n.p,{children:["Continuez \xe0 en apprendre davantage sur la ",(0,s.jsx)(n.a,{href:"/end-user-flows/sign-up-and-sign-in/sign-up",children:"configuration"})," et la ",(0,s.jsx)(n.a,{href:"/customization",children:"personnalisation"})," de l'exp\xe9rience de connexion dans Logto."]}),"\n",(0,s.jsx)(n.h2,{id:"faqs",children:"FAQs"}),"\n",(0,s.jsxs)(i,{children:[(0,s.jsx)("summary",{children:"M\xe9thode ou personnalisation de l'exp\xe9rience de connexion par application"}),(0,s.jsxs)(n.p,{children:["Pour les applications n\xe9cessitant des exp\xe9riences de connexion ou des personnalisations de marque diff\xe9rentes, Logto prend \xe9galement en charge la personnalisation par application. Consultez les ",(0,s.jsx)(n.a,{href:"/customization/match-your-brand/#app-specific-branding",children:"param\xe8tres de l'application"})," pour plus de d\xe9tails."]})]}),"\n",(0,s.jsxs)(i,{children:[(0,s.jsx)("summary",{children:"Limiter le domaine de messagerie / l'adresse IP / la r\xe9gion"}),(0,s.jsxs)(n.p,{children:["Pour le contr\xf4le d'acc\xe8s bas\xe9 sur les attributs, par exemple, limiter la connexion en fonction du domaine de messagerie, de l'adresse IP ou de la r\xe9gion, vous pouvez utiliser la fonctionnalit\xe9 ",(0,s.jsx)(n.a,{href:"/developers/custom-token-claims/",children:"Revendications de jeton personnalis\xe9es"})," dans Logto pour rejeter ou autoriser les requ\xeates d'autorisation en fonction des attributs de l'utilisateur."]})]}),"\n",(0,s.jsxs)(i,{children:[(0,s.jsx)("summary",{children:"API sans interface pour la connexion et l'inscription"}),(0,s.jsxs)(n.p,{children:["Actuellement, Logto ne fournit pas d'API sans interface pour la connexion et l'inscription. Cependant, vous pouvez apporter votre propre interface de connexion en utilisant ",(0,s.jsx)(n.a,{href:"/customization/bring-your-ui/",children:"Apportez votre propre interface"})," pour personnaliser l'exp\xe9rience de connexion et d'inscription."]})]})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},15658:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>a});var t=i(30758);const s={},r=t.createContext(s);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);