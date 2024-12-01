"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[20794],{86676:(e,n,r)=>{r.d(n,{Ay:()=>l,RM:()=>t});var i=r(86070),s=r(15658);const t=[];function o(e){const n={a:"a",admonition:"admonition",p:"p",...(0,s.R)(),...e.components};return(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["Dans ce guide, nous supposons que vous avez des connaissances de base sur les Connecteurs Logto. Si ce n'est pas le cas, consultez le guide ",(0,i.jsx)(n.a,{href:"/connectors",children:"Configurer les connecteurs"})," pour commencer."]})})}function l(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},89903:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"integrations/social/google/README","title":"Configurer la connexion sociale avec Google","description":"Le connecteur Google offre un moyen succinct pour votre application d\'utiliser le syst\xe8me d\'authentification OAuth 2.0 de Google.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/integrations/social/google/README.mdx","sourceDirName":"integrations/social/google","slug":"/integrations/google","permalink":"/fr/integrations/google","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/fr/docusaurus-plugin-content-docs/current/integrations/social/google/README.mdx","tags":[],"version":"current","frontMatter":{"slug":"/integrations/google","sidebar_label":"Google","sidebar_custom_props":{"description":"Google est un principal moteur de recherche et fournisseur de services de messagerie."}},"sidebar":"integrationsSidebar","previous":{"title":"GitHub","permalink":"/fr/integrations/github"},"next":{"title":"Hugging Face","permalink":"/fr/integrations/huggingface"}}');var s=r(86070),t=r(15658),o=r(86676);const l={slug:"/integrations/google",sidebar_label:"Google",sidebar_custom_props:{description:"Google est un principal moteur de recherche et fournisseur de services de messagerie."}},c="Configurer la connexion sociale avec Google",u={},d=[...o.RM,{value:"Configurer un projet dans la Google API Console",id:"configurer-un-projet-dans-la-google-api-console",level:2},{value:"Configurer votre \xe9cran de consentement",id:"configurer-votre-\xe9cran-de-consentement",level:2},{value:"Configurer et enregistrer votre application",id:"configurer-et-enregistrer-votre-application",level:3},{value:"Modifier l&#39;enregistrement de l&#39;application",id:"modifier-lenregistrement-de-lapplication",level:3},{value:"Configurer l&#39;\xe9cran de consentement OAuth",id:"configurer-l\xe9cran-de-consentement-oauth",level:4},{value:"Configurer les port\xe9es",id:"configurer-les-port\xe9es",level:4},{value:"Ajouter des utilisateurs de test (Type d&#39;utilisateur externe uniquement)",id:"ajouter-des-utilisateurs-de-test-type-dutilisateur-externe-uniquement",level:4},{value:"Obtenir des identifiants OAuth 2.0",id:"obtenir-des-identifiants-oauth-20",level:2},{value:"Configurer votre connecteur",id:"configurer-votre-connecteur",level:2},{value:"Types de configuration",id:"types-de-configuration",level:3},{value:"Activer Google One Tap",id:"activer-google-one-tap",level:2},{value:"R\xe9f\xe9rences",id:"r\xe9f\xe9rences",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"configurer-la-connexion-sociale-avec-google",children:"Configurer la connexion sociale avec Google"})}),"\n",(0,s.jsx)(n.p,{children:"Le connecteur Google offre un moyen succinct pour votre application d'utiliser le syst\xe8me d'authentification OAuth 2.0 de Google."}),"\n",(0,s.jsx)(o.Ay,{}),"\n",(0,s.jsx)(n.h2,{id:"configurer-un-projet-dans-la-google-api-console",children:"Configurer un projet dans la Google API Console"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Visitez la ",(0,s.jsx)(n.a,{href:"https://console.developers.google.com",children:"Google API Console"})," et connectez-vous avec votre compte Google."]}),"\n",(0,s.jsxs)(n.li,{children:["Cliquez sur le bouton ",(0,s.jsx)(n.strong,{children:"S\xe9lectionner un projet"})," dans la barre de menu sup\xe9rieure, puis cliquez sur le bouton ",(0,s.jsx)(n.strong,{children:"Nouveau projet"})," pour cr\xe9er un projet."]}),"\n",(0,s.jsxs)(n.li,{children:["Dans votre projet nouvellement cr\xe9\xe9, cliquez sur ",(0,s.jsx)(n.strong,{children:"APIs & Services"})," pour entrer dans le menu ",(0,s.jsx)(n.strong,{children:"APIs & Services"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"configurer-votre-\xe9cran-de-consentement",children:"Configurer votre \xe9cran de consentement"}),"\n",(0,s.jsx)(n.h3,{id:"configurer-et-enregistrer-votre-application",children:"Configurer et enregistrer votre application"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Dans le menu de gauche ",(0,s.jsx)(n.strong,{children:"APIs & Services"}),", cliquez sur le bouton ",(0,s.jsx)(n.strong,{children:"\xc9cran de consentement OAuth"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Choisissez le ",(0,s.jsx)(n.strong,{children:"Type d'utilisateur"})," que vous souhaitez, puis cliquez sur le bouton ",(0,s.jsx)(n.strong,{children:"Cr\xe9er"}),". (Remarque : Si vous s\xe9lectionnez ",(0,s.jsx)(n.strong,{children:"Externe"})," comme ",(0,s.jsx)(n.strong,{children:"Type d'utilisateur"}),", vous devrez ajouter des utilisateurs de test plus tard.)"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Vous serez maintenant sur la page ",(0,s.jsx)(n.strong,{children:"Modifier l'enregistrement de l'application"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"modifier-lenregistrement-de-lapplication",children:"Modifier l'enregistrement de l'application"}),"\n",(0,s.jsx)(n.h4,{id:"configurer-l\xe9cran-de-consentement-oauth",children:"Configurer l'\xe9cran de consentement OAuth"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Suivez les instructions pour remplir le formulaire ",(0,s.jsx)(n.strong,{children:"\xc9cran de consentement OAuth"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Cliquez sur ",(0,s.jsx)(n.strong,{children:"ENREGISTRER ET CONTINUER"})," pour continuer."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"configurer-les-port\xe9es",children:"Configurer les port\xe9es"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Cliquez sur ",(0,s.jsx)(n.strong,{children:"AJOUTER OU SUPPRIMER DES PORT\xc9ES"})," et s\xe9lectionnez ",(0,s.jsx)(n.code,{children:"../auth/userinfo.email"}),", ",(0,s.jsx)(n.code,{children:"../auth/userinfo.profile"})," et ",(0,s.jsx)(n.code,{children:"openid"})," dans le tiroir contextuel, puis cliquez sur ",(0,s.jsx)(n.strong,{children:"METTRE \xc0 JOUR"})," pour terminer. Il est recommand\xe9 de consid\xe9rer l'ajout de toutes les port\xe9es que vous pourriez utiliser, sinon certaines port\xe9es que vous avez ajout\xe9es dans la configuration pourraient ne pas fonctionner."]}),"\n",(0,s.jsx)(n.li,{children:"Remplissez le formulaire selon vos besoins."}),"\n",(0,s.jsxs)(n.li,{children:["Cliquez sur ",(0,s.jsx)(n.strong,{children:"ENREGISTRER ET CONTINUER"})," pour continuer."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"ajouter-des-utilisateurs-de-test-type-dutilisateur-externe-uniquement",children:"Ajouter des utilisateurs de test (Type d'utilisateur externe uniquement)"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Cliquez sur ",(0,s.jsx)(n.strong,{children:"AJOUTER DES UTILISATEURS"})," et ajoutez des utilisateurs de test pour permettre \xe0 ces utilisateurs d'acc\xe9der \xe0 votre application pendant les tests."]}),"\n",(0,s.jsxs)(n.li,{children:["Cliquez sur ",(0,s.jsx)(n.strong,{children:"ENREGISTRER ET CONTINUER"})," pour continuer."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Vous devriez maintenant avoir l'\xe9cran de consentement OAuth 2.0 de Google configur\xe9."}),"\n",(0,s.jsx)(n.h2,{id:"obtenir-des-identifiants-oauth-20",children:"Obtenir des identifiants OAuth 2.0"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Dans le menu de gauche ",(0,s.jsx)(n.strong,{children:"APIs & Services"}),", cliquez sur le bouton ",(0,s.jsx)(n.strong,{children:"Identifiants"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Sur la page ",(0,s.jsx)(n.strong,{children:"Identifiants"}),", cliquez sur le bouton ",(0,s.jsx)(n.strong,{children:"+ CR\xc9ER DES IDENTIFIANTS"})," dans la barre de menu sup\xe9rieure, puis s\xe9lectionnez ",(0,s.jsx)(n.strong,{children:"ID client OAuth"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Sur la page ",(0,s.jsx)(n.strong,{children:"Cr\xe9er un ID client OAuth"}),", s\xe9lectionnez ",(0,s.jsx)(n.strong,{children:"Application Web"})," comme type d'application."]}),"\n",(0,s.jsx)(n.li,{children:"Remplissez les informations de base pour votre application."}),"\n",(0,s.jsxs)(n.li,{children:["Cliquez sur ",(0,s.jsx)(n.strong,{children:"+ Ajouter URI"})," pour ajouter un domaine autoris\xe9 \xe0 la section ",(0,s.jsx)(n.strong,{children:"Origines JavaScript autoris\xe9es"}),". C'est le domaine \xe0 partir duquel votre page d'autorisation Logto sera servie. Dans notre cas, ce sera ",(0,s.jsx)(n.code,{children:"${your_logto_origin}"}),". par exemple ",(0,s.jsx)(n.code,{children:"https://logto.dev"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Cliquez sur ",(0,s.jsx)(n.strong,{children:"+ Ajouter URI"})," dans la section *",(0,s.jsx)(n.strong,{children:"*URIs de redirection autoris\xe9es**"})," pour configurer les *",(0,s.jsx)(n.strong,{children:"*URIs de redirection autoris\xe9es**"}),", qui redirigent l'utilisateur vers l'application apr\xe8s la connexion. Dans notre cas, ce sera ",(0,s.jsx)(n.code,{children:"${your_logto_endpoint}/callback/${connector_id}"}),". par exemple ",(0,s.jsx)(n.code,{children:"https://logto.dev/callback/${connector_id}"}),". Le ",(0,s.jsx)(n.code,{children:"connector_id"})," peut \xeatre trouv\xe9 sur la barre sup\xe9rieure de la page de d\xe9tails du connecteur dans la Logto Admin Console."]}),"\n",(0,s.jsxs)(n.li,{children:["Cliquez sur ",(0,s.jsx)(n.strong,{children:"Cr\xe9er"})," pour terminer, puis vous obtiendrez le ",(0,s.jsx)(n.strong,{children:"Client ID"})," et le ",(0,s.jsx)(n.strong,{children:"Client Secret"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"configurer-votre-connecteur",children:"Configurer votre connecteur"}),"\n",(0,s.jsxs)(n.p,{children:["Remplissez les champs ",(0,s.jsx)(n.code,{children:"clientId"})," et ",(0,s.jsx)(n.code,{children:"clientSecret"})," avec le ",(0,s.jsx)(n.em,{children:"Client ID"})," et le ",(0,s.jsx)(n.em,{children:"Client Secret"})," que vous avez obtenus des pages de d\xe9tails de l'application OAuth mentionn\xe9es dans la section pr\xe9c\xe9dente."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"scope"})," est une liste d\xe9limit\xe9e par des espaces de ",(0,s.jsx)(n.a,{href:"https://developers.google.com/identity/protocols/oauth2/scopes",children:"port\xe9es"}),". Si non fourni, la port\xe9e par d\xe9faut sera ",(0,s.jsx)(n.code,{children:"openid profile email"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"prompts"})," est un tableau de cha\xeenes qui sp\xe9cifie le type d'interaction utilisateur requis. La cha\xeene peut \xeatre l'une des valeurs suivantes :"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"none"})," : Le serveur d'autorisation n'affiche aucun \xe9cran d'authentification ou de consentement utilisateur ; il retournera une erreur si l'utilisateur n'est pas d\xe9j\xe0 authentifi\xe9 et n'a pas pr\xe9configur\xe9 le consentement pour les port\xe9es demand\xe9es. Vous pouvez utiliser none pour v\xe9rifier l'authentification et/ou le consentement existants."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"consent"})," : Le serveur d'autorisation demande le consentement de l'utilisateur avant de retourner des informations au client."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"select_account"})," : Le serveur d'autorisation demande \xe0 l'utilisateur de s\xe9lectionner un compte utilisateur. Cela permet \xe0 un utilisateur qui a plusieurs comptes sur le serveur d'autorisation de s\xe9lectionner parmi les multiples comptes pour lesquels il peut avoir des sessions en cours."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"types-de-configuration",children:"Types de configuration"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Nom"}),(0,s.jsx)(n.th,{children:"Type"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"clientId"}),(0,s.jsx)(n.td,{children:"string"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"clientSecret"}),(0,s.jsx)(n.td,{children:"string"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"scope"}),(0,s.jsx)(n.td,{children:"string"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"prompts"}),(0,s.jsx)(n.td,{children:"string[]"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"activer-google-one-tap",children:"Activer Google One Tap"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://developers.google.com/identity/gsi/web/guides/features",children:"Google One Tap"})," est un moyen s\xe9curis\xe9 et facile permettant aux utilisateurs de se connecter \xe0 votre site web ou application avec leur compte Google."]}),"\n",(0,s.jsx)(n.p,{children:"Une fois que vous avez configur\xe9 le connecteur Google, vous verrez une carte pour Google One Tap dans la page de d\xe9tails du connecteur. Vous pouvez activer Google One Tap dans vos pages d'inscription et de connexion en basculant l'interrupteur."}),"\n",(0,s.jsx)(n.p,{children:"Lorsque vous activez Google One Tap, vous pouvez configurer les options suivantes :"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"S\xe9lection automatique des identifiants si possible"})," : Connectez automatiquement l'utilisateur avec le compte Google si ",(0,s.jsx)(n.a,{href:"https://developers.google.com/identity/gsi/web/guides/automatic-sign-in-sign-out",children:"certaines conditions sont remplies"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Annuler l'invite si l'utilisateur clique / tape \xe0 l'ext\xe9rieur"})," : Fermez l'invite Google One Tap si l'utilisateur clique ou tape \xe0 l'ext\xe9rieur de l'invite. Si d\xe9sactiv\xe9, l'utilisateur doit cliquer sur le bouton de fermeture pour rejeter l'invite."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Activer l'exp\xe9rience utilisateur One Tap am\xe9lior\xe9e sur les navigateurs ITP"})," : Activez l'exp\xe9rience utilisateur Google One Tap am\xe9lior\xe9e sur les navigateurs avec pr\xe9vention intelligente du suivi (ITP). Veuillez vous r\xe9f\xe9rer \xe0 ",(0,s.jsx)(n.a,{href:"https://developers.google.com/identity/gsi/web/guides/features#upgraded_ux_on_itp_browsers",children:"cette page"})," pour plus d'informations."]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"Pour activer Google One Tap sur votre site web (au-del\xe0 de l'exp\xe9rience de connexion Logto), cette fonctionnalit\xe9 est en cours de d\xe9veloppement. Veuillez rester \xe0 l'\xe9coute pour les mises \xe0 jour."})}),"\n",(0,s.jsx)(n.h2,{id:"r\xe9f\xe9rences",children:"R\xe9f\xe9rences"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://developers.google.com/identity/protocols/oauth2/openid-connect#appsetup",children:"Google Identity : Configuration de OAuth 2.0"})}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},15658:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>l});var i=r(30758);const s={},t=i.createContext(s);function o(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);