"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[9769],{91581:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>r,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"end-user-flows/mfa/authenticator-app-otp","title":"OTP de l\'application d\'authentification","description":"Concepts","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/end-user-flows/mfa/authenticator-app-otp.md","sourceDirName":"end-user-flows/mfa","slug":"/end-user-flows/mfa/authenticator-app-otp","permalink":"/fr/end-user-flows/mfa/authenticator-app-otp","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/fr/docusaurus-plugin-content-docs/current/end-user-flows/mfa/authenticator-app-otp.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"docsSidebar","previous":{"title":"Configurer MFA","permalink":"/fr/end-user-flows/mfa/configure-mfa"},"next":{"title":"Passkeys (WebAuthn)","permalink":"/fr/end-user-flows/mfa/webauthn"}}');var s=t(86070),a=t(15658);const o={sidebar_position:2},l="OTP de l'application d'authentification",r={},c=[{value:"Concepts",id:"concepts",level:2},{value:"Flux d&#39;authentification",id:"flux-dauthentification",level:2},{value:"Flux de configuration de l&#39;OTP de l&#39;application d&#39;authentification",id:"flux-de-configuration-de-lotp-de-lapplication-dauthentification",level:3},{value:"Flux de v\xe9rification de l&#39;OTP de l&#39;application d&#39;authentification",id:"flux-de-v\xe9rification-de-lotp-de-lapplication-dauthentification",level:3}];function u(e){const i={a:"a",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.header,{children:(0,s.jsx)(i.h1,{id:"otp-de-lapplication-dauthentification",children:"OTP de l'application d'authentification"})}),"\n",(0,s.jsx)(i.h2,{id:"concepts",children:"Concepts"}),"\n",(0,s.jsxs)(i.p,{children:["L'application d'authentification, \xe9galement appel\xe9e Jeton logiciel, est l'une des m\xe9thodes ",(0,s.jsx)(i.a,{href:"https://auth.wiki/mfa",children:"MFA"})," les plus largement adopt\xe9es. Elle g\xe9n\xe8re des ",(0,s.jsx)(i.a,{href:"https://auth.wiki/otp",children:"mots de passe \xe0 usage unique (OTP)"})," temporaires pour renforcer la s\xe9curit\xe9 de l'authentification des services en ligne. Contrairement aux jetons mat\xe9riels physiques, les jetons logiciels sont g\xe9n\xe9ralement des applications ou des plugins que les utilisateurs installent sur leurs appareils, qu'il s'agisse d'un smartphone ou d'un navigateur d'ordinateur. Les jetons logiciels peuvent fonctionner localement sur un seul appareil ou se synchroniser sur divers appareils, en fonction des capacit\xe9s de l'authentificateur et des param\xe8tres individuels de l'utilisateur."]}),"\n",(0,s.jsx)(i.p,{children:"Des exemples populaires de jetons logiciels incluent Google Authenticator, Microsoft Authenticator, Duo, 1Password, Authy, et plus encore."}),"\n",(0,s.jsx)(i.h2,{id:"flux-dauthentification",children:"Flux d'authentification"}),"\n",(0,s.jsx)(i.h3,{id:"flux-de-configuration-de-lotp-de-lapplication-dauthentification",children:"Flux de configuration de l'OTP de l'application d'authentification"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"QR Code ou Cl\xe9 secr\xe8te"})," : Les utilisateurs re\xe7oivent un QR code ou une cl\xe9 secr\xe8te de votre service."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Ajouter un compte"})," : En utilisant leur application d'authentification, les utilisateurs scannent le QR code ou saisissent manuellement la cl\xe9 secr\xe8te pour ajouter leur compte."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Mot de passe \xe0 usage unique dynamique"})," : L'application d'authentification affiche un code \xe0 six chiffres qui se rafra\xeechit toutes les 1-2 minutes pour le compte ajout\xe9."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Compl\xe9ter la configuration MFA"})," : Les utilisateurs saisissent ce code dans sa validit\xe9 sur la page de configuration MFA, compl\xe9tant ainsi la configuration de l'OTP de l'application d'authentification pour MFA."]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Flux de configuration OTP",src:t(77629).A+"",width:"3986",height:"1520"})}),"\n",(0,s.jsx)(i.h3,{id:"flux-de-v\xe9rification-de-lotp-de-lapplication-dauthentification",children:"Flux de v\xe9rification de l'OTP de l'application d'authentification"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Tentative de connexion"})," : Lors de la connexion, les utilisateurs sont invit\xe9s \xe0 utiliser MFA."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"R\xe9cup\xe9rer l'OTP"})," : Ouvrez leur application d'authentification pour r\xe9cup\xe9rer l'OTP pour le compte respectif."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Saisir l'OTP"})," : Les utilisateurs saisissent l'OTP affich\xe9 dans l'application dans sa validit\xe9 sur la page de v\xe9rification en deux \xe9tapes."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Authentification"})," : Le syst\xe8me v\xe9rifie l'OTP, accordant l'acc\xe8s apr\xe8s une validation r\xe9ussie."]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Flux de v\xe9rification OTP",src:t(96176).A+"",width:"2704",height:"1238"})})]})}function d(e={}){const{wrapper:i}={...(0,a.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},77629:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/otp-set-up-flow-69a6e5fe60cccaad368240770c1da3a9.png"},96176:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/otp-verification-flow-49801a8f920430d2f6e315eaef445545.png"},15658:(e,i,t)=>{t.d(i,{R:()=>o,x:()=>l});var n=t(30758);const s={},a=n.createContext(s);function o(e){const i=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(a.Provider,{value:i},e.children)}}}]);