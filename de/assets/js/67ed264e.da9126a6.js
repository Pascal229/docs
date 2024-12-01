"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[24652],{6781:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>d,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"concepts/sign-in-experience","title":"Anmeldeerfahrung erkl\xe4rt","description":"Diese Seite erkl\xe4rt die Anmeldeerfahrung in Logto und warum sie auf diese Weise gestaltet ist.","source":"@site/i18n/de/docusaurus-plugin-content-docs/current/concepts/sign-in-experience.mdx","sourceDirName":"concepts","slug":"/concepts/sign-in-experience","permalink":"/de/concepts/sign-in-experience","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/de/docusaurus-plugin-content-docs/current/concepts/sign-in-experience.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1,"sidebar_label":"Anmeldeerfahrung"},"sidebar":"docsSidebar","previous":{"title":"Konzepte","permalink":"/de/concepts/"},"next":{"title":"Authentifizierung vs. Autorisierung","permalink":"/de/concepts/authn-vs-authz"}}');var t=i(86070),s=i(15658);const d={sidebar_position:1,sidebar_label:"Anmeldeerfahrung"},l="Anmeldeerfahrung erkl\xe4rt",o={},a=[{value:"Einf\xfchrung",id:"einf\xfchrung",level:2},{value:"Warum weiterleiten?",id:"warum-weiterleiten",level:2},{value:"Flexibilit\xe4t",id:"flexibilit\xe4t",level:3},{value:"Unterst\xfctzung f\xfcr mehrere Apps",id:"unterst\xfctzung-f\xfcr-mehrere-apps",level:3},{value:"Native Apps",id:"native-apps",level:3},{value:"Sicherheit",id:"sicherheit",level:3},{value:"Was, wenn ich einige Anmeldekomponenten in meiner App anzeigen muss?",id:"was-wenn-ich-einige-anmeldekomponenten-in-meiner-app-anzeigen-muss",level:2},{value:"Wie funktioniert das?",id:"wie-funktioniert-das",level:3},{value:"Prozess des Klickens auf &quot;Loslegen&quot;",id:"prozess-des-klickens-auf-loslegen",level:4},{value:"Prozess des Klickens auf &quot;Mit Google anmelden&quot;",id:"prozess-des-klickens-auf-mit-google-anmelden",level:4},{value:"Verwende Direktanmeldung in deiner App",id:"verwende-direktanmeldung-in-deiner-app",level:3},{value:"Ich ben\xf6tige, dass meine Benutzer ihre Anmeldedaten in meiner App eingeben",id:"ich-ben\xf6tige-dass-meine-benutzer-ihre-anmeldedaten-in-meiner-app-eingeben",level:2},{value:"Verwandte Ressourcen:",id:"verwandte-ressourcen",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",mermaid:"mermaid",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{Url:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Url",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"anmeldeerfahrung-erkl\xe4rt",children:"Anmeldeerfahrung erkl\xe4rt"})}),"\n",(0,t.jsx)(n.p,{children:"Diese Seite erkl\xe4rt die Anmeldeerfahrung in Logto und warum sie auf diese Weise gestaltet ist."}),"\n",(0,t.jsx)(n.h2,{id:"einf\xfchrung",children:"Einf\xfchrung"}),"\n",(0,t.jsx)(n.p,{children:"Die Anmeldeerfahrung ist der Benutzer-Authentifizierungsprozess in Logto. Der Prozess kann wie folgt vereinfacht werden:"}),"\n",(0,t.jsx)(n.mermaid,{value:"graph LR\n    A(<b>Deine App</b>) --\x3e|1. Anmeldung aufrufen| B(<b>Logto</b>)\n    B --\x3e|2. Anmeldung abschlie\xdfen| A"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Deine App ruft die Anmeldemethode auf."}),"\n",(0,t.jsx)(n.li,{children:"Der Benutzer wird zur Logto-Anmeldeseite weitergeleitet. Bei nativen Apps wird der Systembrowser ge\xf6ffnet."}),"\n",(0,t.jsx)(n.li,{children:'Der Benutzer meldet sich an und wird zur\xfcck zu deiner App weitergeleitet (konfiguriert als "Redirect URI" in Logto).'}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Obwohl der Prozess einfach ist, kann der Weiterleitungsteil manchmal \xfcbertrieben erscheinen. Dennoch kann er in vielerlei Hinsicht vorteilhaft und sicher sein. Wir werden die Gr\xfcnde in den folgenden Abschnitten erkl\xe4ren."}),"\n",(0,t.jsx)(n.h2,{id:"warum-weiterleiten",children:"Warum weiterleiten?"}),"\n",(0,t.jsx)(n.h3,{id:"flexibilit\xe4t",children:"Flexibilit\xe4t"}),"\n",(0,t.jsx)(n.p,{children:"Das Weiterleiten erm\xf6glicht es dir, den Authentifizierungsprozess von deiner App zu entkoppeln. Wenn dein Gesch\xe4ft w\xe4chst, kannst du den gleichen Authentifizierungsprozess beibehalten, ohne deine App zu \xe4ndern. Zum Beispiel kannst du Multi-Faktor-Authentifizierung (MFA) hinzuf\xfcgen oder die Anmeldemethoden \xe4ndern, ohne deine App zu ber\xfchren."}),"\n",(0,t.jsx)(n.mermaid,{value:'graph LR\n    A(<b>Deine App</b>) --\x3e|1. Anmeldung aufrufen| B("<b>Logto</b>\\nEmail\\nGoogle\\nFacebook")\n    B --\x3e|2. Anmeldung abschlie\xdfen| A'}),"\n",(0,t.jsx)(n.h3,{id:"unterst\xfctzung-f\xfcr-mehrere-apps",children:"Unterst\xfctzung f\xfcr mehrere Apps"}),"\n",(0,t.jsx)(n.p,{children:"Wenn du mehrere Apps hast, k\xf6nnen sich deine Benutzer einmal anmelden und auf alle Apps zugreifen, ohne sich erneut anmelden zu m\xfcssen. Dies ist besonders n\xfctzlich f\xfcr SaaS-Unternehmen oder Unternehmen mit mehreren Diensten."}),"\n",(0,t.jsx)(n.mermaid,{value:"graph LR\n    A(<b>Deine App 1</b>) <--\x3e B(<b>Logto</b>)\n    C(<b>Deine App 2</b>) <--\x3e B\n    B <--\x3e D(<b>Deine App 3</b>)"}),"\n",(0,t.jsx)(n.h3,{id:"native-apps",children:"Native Apps"}),"\n",(0,t.jsx)(n.p,{children:"F\xfcr native Apps ist das Weiterleiten zum Systembrowser eine sichere M\xf6glichkeit, Benutzer zu authentifizieren, und bietet integrierte Unterst\xfctzung sowohl f\xfcr iOS als auch Android."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"iOS"}),": Apple bietet ",(0,t.jsx)(n.a,{href:"https://developer.apple.com/documentation/authenticationservices/aswebauthenticationsession",children:"ASWebAuthenticationSession"})," f\xfcr sichere Authentifizierung."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Android"}),": Google stellt ",(0,t.jsx)(n.a,{href:"https://developer.chrome.com/docs/android/custom-tabs",children:"Custom Tabs"})," f\xfcr ein nahtloses Erlebnis bereit."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"sicherheit",children:"Sicherheit"}),"\n",(0,t.jsxs)(n.p,{children:["Im Hintergrund ist Logto ein ",(0,t.jsx)(n.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html",children:"OpenID Connect (OIDC)"})," Anbieter. OIDC ist ein weit verbreiteter Standard f\xfcr Benutzer-Authentifizierung."]}),"\n",(0,t.jsxs)(n.p,{children:["Logto erzwingt strenge Sicherheitsma\xdfnahmen, wie ",(0,t.jsx)(n.a,{href:"https://tools.ietf.org/html/rfc7636",children:"PKCE"}),", und deaktiviert unsichere Flows wie den impliziten Flow. Das Weiterleiten ist eine sichere M\xf6glichkeit, Benutzer zu authentifizieren und kann viele g\xe4ngige Angriffe verhindern."]}),"\n",(0,t.jsx)(n.h2,{id:"was-wenn-ich-einige-anmeldekomponenten-in-meiner-app-anzeigen-muss",children:"Was, wenn ich einige Anmeldekomponenten in meiner App anzeigen muss?"}),"\n",(0,t.jsx)(n.p,{children:'Manchmal m\xf6chte dein Team m\xf6glicherweise einige Anmeldekomponenten in der App anzeigen, wie z. B. einen "Mit Google anmelden" Button. Dies kann durch die Verwendung der "Direktanmeldung" Funktion in Logto erreicht werden.'}),"\n",(0,t.jsx)(n.h3,{id:"wie-funktioniert-das",children:"Wie funktioniert das?"}),"\n",(0,t.jsx)(n.p,{children:'Angenommen, du hast zwei Call-to-Action-Buttons in deiner App: "Loslegen" und "Mit Google anmelden". Diese Buttons sind so konzipiert, dass sie:'}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:'"Loslegen": Zur normalen Anmeldeseite weiterleiten.'}),"\n",(0,t.jsx)(n.li,{children:'"Mit Google anmelden": Zur Google-Anmeldeseite weiterleiten.'}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Beide Aktionen m\xfcssen den Anmeldeprozess abschlie\xdfen und zur\xfcck zu deiner App weiterleiten."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h4,{id:"prozess-des-klickens-auf-loslegen",children:'Prozess des Klickens auf "Loslegen"'}),"\n",(0,t.jsx)(n.p,{children:"In diesem Fall ist die Anmeldeerfahrung dieselbe wie die Standarderfahrung. Der Benutzer wird zur Logto-Anmeldeseite und dann zur\xfcck zu deiner App weitergeleitet."}),"\n",(0,t.jsx)(n.mermaid,{value:'sequenceDiagram\n  participant A as Deine App\n  participant B as Logto\n\n  Note over A: Benutzer klickt<br/>"Loslegen"\n  A->>B: Weiterleiten\n  B->B: Benutzer schlie\xdft Anmeldung ab\n  B->>A: Zur\xfcckleiten'}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"Wenn du soziale Anmeldemethoden (z. B. Google, Facebook) in Logto konfiguriert hast, kann der Benutzer zur entsprechenden Anmeldeseite weitergeleitet werden. In der Darstellung zeigen wir nur den allgemeinen Ablauf zur Vereinfachung."})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h4,{id:"prozess-des-klickens-auf-mit-google-anmelden",children:'Prozess des Klickens auf "Mit Google anmelden"'}),"\n",(0,t.jsx)(n.p,{children:"In diesem Fall wird der Benutzer automatisch zur Google-Anmeldeseite weitergeleitet, ohne mit der Logto-Anmeldeseite zu interagieren. Die Geschwindigkeit dieser automatischen Weiterleitung ist fast sofort, sodass Benutzer die Weiterleitung m\xf6glicherweise nicht bemerken."}),"\n",(0,t.jsx)(n.mermaid,{value:'sequenceDiagram\n  participant A as Deine App\n  participant B as Logto\n  participant C as Google\n\n  Note over A: Benutzer klickt<br/>"Mit Google anmelden"\n  A->>B: Weiterleiten mit Direktanmeldeparametern\n  B->>C: Automatisch weiterleiten\n  C->C: Benutzer schlie\xdft Anmeldung ab\n  C->>B: Zur\xfcckleiten\n  B->>A: Zur\xfcckleiten'}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.p,{children:"Zusammenfassend ist die Direktanmeldefunktion eine M\xf6glichkeit, einige Interaktionen in der Anmeldeerfahrung zu automatisieren, ohne das Sicherheitsniveau zu \xe4ndern."}),"\n",(0,t.jsx)(n.h3,{id:"verwende-direktanmeldung-in-deiner-app",children:"Verwende Direktanmeldung in deiner App"}),"\n",(0,t.jsxs)(n.p,{children:["Um die Direktanmeldung zu verwenden, musst du den Parameter ",(0,t.jsx)(n.code,{children:"direct_sign_in"})," \xfcbergeben, wenn du die Anmeldemethode aufrufst. Der Wert sollte aus einem bestimmten Format bestehen, das Logto erkennt. Zum Beispiel sollte der Wert f\xfcr die Anmeldung mit Google ",(0,t.jsx)(n.code,{children:"social:google"})," sein."]}),"\n",(0,t.jsxs)(n.p,{children:["In einigen offiziellen Logto SDKs gibt es eine spezielle Option f\xfcr die Direktanmeldung. Hier ist ein Beispiel f\xfcr die Verwendung der Direktanmeldung im ",(0,t.jsx)(n.code,{children:"@logto/client"})," JavaScript SDK:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"client.signIn({\n  redirectUri: 'https://some-redirect-uri',\n  directSignIn: { method: 'social', target: 'google' },\n});\n"})}),"\n",(0,t.jsxs)(n.p,{children:["F\xfcr weitere Details siehe ",(0,t.jsx)(n.a,{href:"/end-user-flows/authentication-parameters/direct-sign-in",children:"Direktanmeldung"}),"."]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"Wir f\xfchren diese Funktion schrittweise in allen offiziellen Logto SDKs ein. Wenn du sie in deinem SDK nicht siehst, kontaktiere uns bitte."})}),"\n",(0,t.jsx)(n.h2,{id:"ich-ben\xf6tige-dass-meine-benutzer-ihre-anmeldedaten-in-meiner-app-eingeben",children:"Ich ben\xf6tige, dass meine Benutzer ihre Anmeldedaten in meiner App eingeben"}),"\n",(0,t.jsxs)(n.p,{children:['Wenn du ben\xf6tigst, dass deine Benutzer ihre Anmeldedaten (wie E-Mail und Passwort) direkt in deiner App eingeben, anstatt zu Logto weitergeleitet zu werden, k\xf6nnen wir dir derzeit nicht helfen. Historisch gesehen gab es einen "Resource Owner Password Credentials" Grant, aber dieser wird jetzt als unsicher angesehen und wurde in OAuth 2.1 ',(0,t.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/draft-ietf-oauth-security-topics#name-resource-owner-password-cre",children:"formell veraltet"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Um mehr \xfcber die Sicherheitsrisiken des ROPC-Grant-Typs zu erfahren, lies unseren Blogbeitrag ",(0,t.jsx)(n.a,{href:"https://blog.logto.io/deprecated-ropc-grant-type/",children:"Warum du den ROPC-Grant-Typ veralten solltest"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"verwandte-ressourcen",children:"Verwandte Ressourcen:"}),"\n",(0,t.jsx)(i,{href:"https://blog.logto.io/oauth-2-1/",children:"OAuth 2.1 ist da: Was du wissen musst"})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},15658:(e,n,i)=>{i.d(n,{R:()=>d,x:()=>l});var r=i(30758);const t={},s=r.createContext(t);function d(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);