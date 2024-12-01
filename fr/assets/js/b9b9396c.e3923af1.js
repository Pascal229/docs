"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[47250],{91326:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"integrate-logto/third-party-applications/oidc-oauth-third-party-applications/consent-screen-branding","title":"Personnalisation de l\'\xe9cran de consentement","description":"Il est important de s\'assurer que les informations de marque et le lien vers les conditions d\'utilisation du tiers sont correctement affich\xe9s aux utilisateurs lorsqu\'ils sont redirig\xe9s vers l\'\xe9cran de consentement de l\'application tierce.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/integrate-logto/third-party-applications/oidc-oauth-third-party-applications/consent-screen-branding.mdx","sourceDirName":"integrate-logto/third-party-applications/oidc-oauth-third-party-applications","slug":"/integrate-logto/third-party-applications/oidc-oauth-third-party-applications/consent-screen-branding","permalink":"/fr/integrate-logto/third-party-applications/oidc-oauth-third-party-applications/consent-screen-branding","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/fr/docusaurus-plugin-content-docs/current/integrate-logto/third-party-applications/oidc-oauth-third-party-applications/consent-screen-branding.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"docsSidebar","previous":{"title":"Gestion des permissions","permalink":"/fr/integrate-logto/third-party-applications/oidc-oauth-third-party-applications/permission-management"},"next":{"title":"Interagir avec Management API","permalink":"/fr/integrate-logto/interact-with-management-api/"}}');var s=i(86070),r=i(15658);const o=i.p+"assets/images/consent-screen-branding-97db8d17d53df5b60e006bd128f80be1.webp",a={sidebar_position:2},l="Personnalisation de l'\xe9cran de consentement",c={},d=[{value:"Personnaliser les informations de marque",id:"personnaliser-les-informations-de-marque",level:2}];function p(e){const n={h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components},{CloudLink:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("CloudLink",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"personnalisation-de-l\xe9cran-de-consentement",children:"Personnalisation de l'\xe9cran de consentement"})}),"\n",(0,s.jsx)(n.p,{children:"Il est important de s'assurer que les informations de marque et le lien vers les conditions d'utilisation du tiers sont correctement affich\xe9s aux utilisateurs lorsqu'ils sont redirig\xe9s vers l'\xe9cran de consentement de l'application tierce."}),"\n",(0,s.jsx)(n.p,{children:"Logto vous permet de personnaliser les informations de marque de vos applications tierces, y compris le nom de l'application, le logo et le lien vers les conditions d'utilisation."}),"\n",(0,s.jsx)(n.h2,{id:"personnaliser-les-informations-de-marque",children:"Personnaliser les informations de marque"}),"\n",(0,s.jsx)(n.p,{children:"Assurez-vous de bien configurer les informations de marque de vos applications tierces pour garantir une exp\xe9rience d'authentification coh\xe9rente et s\xe9curis\xe9e pour vos utilisateurs."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Allez dans le ",(0,s.jsx)(i,{to:"/applications/third-party-applications",children:"Console > Application > Applications tierces"})," et ouvrez la page de d\xe9tails pour une application tierce OIDC sp\xe9cifique."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Acc\xe9dez \xe0 l'onglet ",(0,s.jsx)(n.strong,{children:"Branding"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Configurez les informations d'affichage pour l'\xe9cran de consentement :"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Nom d'affichage"})," : Le nom de l'application tierce qui sera affich\xe9 sur l'\xe9cran de consentement. Il repr\xe9sentera le nom de l'application tierce qui demande l'acc\xe8s aux informations de vos utilisateurs. ",(0,s.jsx)(n.strong,{children:"Nom de l'application"})," sera utilis\xe9 si ce champ est laiss\xe9 vide."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Logo de l'application (Clair)"})," : Le logo de l'application tierce qui sera affich\xe9 sur l'\xe9cran de consentement. Il repr\xe9sentera la marque de l'application tierce qui demande l'acc\xe8s aux informations de vos utilisateurs. Le logo de l'application tierce et le logo de votre exp\xe9rience de connexion universelle seront affich\xe9s sur l'\xe9cran de consentement si les deux sont fournis."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Logo de l'application (Sombre)"})," : Disponible uniquement lorsque l'exp\xe9rience de connexion en mode sombre est activ\xe9e. G\xe9rez les param\xe8tres du mode sombre sur la page ",(0,s.jsx)(i,{to:"/sign-in-experience/branding",children:"Console > Exp\xe9rience de connexion > Branding"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"URL des conditions d'utilisation"})," : Le lien vers les conditions d'utilisation de l'application tierce qui sera affich\xe9 sur l'\xe9cran de consentement."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"URL de la politique de confidentialit\xe9"})," : Le lien vers la politique de confidentialit\xe9 de l'application tierce qui sera affich\xe9 sur l'\xe9cran de consentement."]}),"\n"]}),"\n",(0,s.jsx)("center",{children:(0,s.jsx)("img",{src:o,alt:"personnalisation de l'\xe9cran de consentement",width:"800"})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},15658:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>a});var t=i(30758);const s={},r=t.createContext(s);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);