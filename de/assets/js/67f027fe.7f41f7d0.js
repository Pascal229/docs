"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[46342],{73294:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>h,contentTitle:()=>u,default:()=>m,frontMatter:()=>o,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"organizations/just-in-time-provisioning","title":"Just-in-Time-Bereitstellung","description":"In Logto ist die Just-in-Time (JIT) Bereitstellung ein Prozess, der verwendet wird, um Organisationsmitgliedschaften und Rollen f\xfcr Benutzer dynamisch zuzuweisen, w\xe4hrend sie sich zum ersten Mal im System anmelden. Anstatt Benutzerkonten im Voraus bereitzustellen, konfiguriert die JIT-Bereitstellung die erforderlichen Benutzerkonten dynamisch, wenn sich ein Benutzer authentifiziert.","source":"@site/i18n/de/docusaurus-plugin-content-docs/current/organizations/just-in-time-provisioning.mdx","sourceDirName":"organizations","slug":"/organizations/just-in-time-provisioning","permalink":"/de/organizations/just-in-time-provisioning","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/de/docusaurus-plugin-content-docs/current/organizations/just-in-time-provisioning.mdx","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4},"sidebar":"docsSidebar","previous":{"title":"Organisation verwalten","permalink":"/de/organizations/organization-management"},"next":{"title":"Organisationen","permalink":"/de/organizations/"}}');var r=i(86070),s=i(15658);const l=i.p+"assets/images/jit-conflict-20c8c47ff22e7c515772821ffeea1c7d.webp",d=i.p+"assets/images/jit-email-95f7b7cc852ed195e3e970376e758b73.webp",a=i.p+"assets/images/jit-sso-5538460b969a9895cd94f89f4235126d.webp",o={sidebar_position:4},u="Just-in-Time-Bereitstellung",h={},c=[{value:"Wie es funktioniert",id:"wie-es-funktioniert",level:2},{value:"Vorteile der JIT-Bereitstellung",id:"vorteile-der-jit-bereitstellung",level:3},{value:"Unterschiede zwischen JIT und Verzeichnissynchronisation",id:"unterschiede-zwischen-jit-und-verzeichnissynchronisation",level:3},{value:"Just-in-Time-Bereitstellung in Logto",id:"just-in-time-bereitstellung-in-logto",level:2},{value:"Enterprise SSO Bereitstellung",id:"enterprise-sso-bereitstellung",level:3},{value:"E-Mail-Domain-Bereitstellung",id:"e-mail-domain-bereitstellung",level:3},{value:"E-Mail-Anmeldeerfahrung, wenn die E-Mail-Domain-Bereitstellung aktiviert ist",id:"e-mail-anmeldeerfahrung-wenn-die-e-mail-domain-bereitstellung-aktiviert-ist",level:4},{value:"Soziale Anmeldeerfahrung, wenn die E-Mail-Domain-Bereitstellung aktiviert ist",id:"soziale-anmeldeerfahrung-wenn-die-e-mail-domain-bereitstellung-aktiviert-ist",level:4},{value:"Umgang mit dem potenziellen Konflikt zwischen JIT-Bereitstellungsmethoden",id:"umgang-mit-dem-potenziellen-konflikt-zwischen-jit-bereitstellungsmethoden",level:3},{value:"Standard-Organisationsrollen",id:"standard-organisationsrollen",level:2}];function g(e){const n={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components},{CloudLink:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("CloudLink",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"just-in-time-bereitstellung",children:"Just-in-Time-Bereitstellung"})}),"\n",(0,r.jsxs)(n.p,{children:["In Logto ist die ",(0,r.jsx)(n.a,{href:"https://auth.wiki/jit-provisioning",children:"Just-in-Time (JIT) Bereitstellung"})," ein Prozess, der verwendet wird, um Organisationsmitgliedschaften und Rollen f\xfcr Benutzer dynamisch zuzuweisen, w\xe4hrend sie sich zum ersten Mal im System anmelden. Anstatt Benutzerkonten im Voraus bereitzustellen, konfiguriert die JIT-Bereitstellung die erforderlichen Benutzerkonten dynamisch, wenn sich ein Benutzer authentifiziert."]}),"\n",(0,r.jsx)(n.h2,{id:"wie-es-funktioniert",children:"Wie es funktioniert"}),"\n",(0,r.jsx)(n.p,{children:"Hier ist ein \xdcberblick \xfcber den JIT-Bereitstellungsprozess:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Benutzerauthentifizierung"}),": Der Benutzer versucht, sich bei einer Anwendung oder einem Dienst anzumelden, und der Identit\xe4tsanbieter (Logto) authentifiziert den Benutzer."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Kontoanmeldung oder -erstellung"}),": Abh\xe4ngig vom Status des Benutzers meldet Logto den Benutzer entweder an, erstellt ein neues Konto oder f\xfcgt eine neue Identit\xe4t zu einem bestehenden Konto hinzu."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Bereitstellung"}),": Wenn der Benutzer oder seine Identit\xe4t neu ist, l\xf6st Logto den Bereitstellungsprozess aus."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Hier ist ein detailliertes Flussdiagramm der JIT-Bereitstellung:"}),"\n",(0,r.jsxs)(n.p,{children:["Die JIT-Bereitstellung ist eine n\xfctzliche Funktion f\xfcr ",(0,r.jsx)(n.a,{href:"/introduction/plan-your-architecture/b2b",children:"B2B"})," und Multi-Tenancy-Produkte. Sie macht das Onboarding von Mandantenmitgliedern reibungslos und erfordert keine administrative Beteiligung."]}),"\n",(0,r.jsx)(n.p,{children:"Zum Beispiel, wenn du ein Unternehmen aufgenommen hast und m\xf6chtest, dass seine Mitarbeiter sich sicher in dein Produkt einloggen und der Organisation mit dem richtigen Rollen-Zugang beitreten, gibt es mehrere M\xf6glichkeiten, dies zu erreichen. Lass uns die m\xf6glichen L\xf6sungen erkunden, die Logto bietet und wie JIT helfen kann."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Szenario"}),(0,r.jsx)(n.th,{children:"Benutzertypen"}),(0,r.jsx)(n.th,{children:"Automatisiert"}),(0,r.jsx)(n.th,{children:"Verhalten"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Admin-Einladung"}),(0,r.jsx)(n.td,{children:"Neu und bestehend"}),(0,r.jsx)(n.td,{}),(0,r.jsxs)(n.td,{children:["Benutzer k\xf6nnen ",(0,r.jsx)(n.a,{href:"/end-user-flows/organization-experience/invite-organization-members",children:"eine E-Mail-Einladung erhalten"}),", um der Organisation beizutreten."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Management API Benutzererstellung oder -import"}),(0,r.jsx)(n.td,{children:"Neu und bestehend"}),(0,r.jsx)(n.td,{}),(0,r.jsxs)(n.td,{children:["Benutzer k\xf6nnen ein ",(0,r.jsx)(n.a,{href:"/end-user-flows/sign-up-and-sign-in/disable-user-registration#implement-an-invitation-only-sign-up-flow",children:"vorkonfiguriertes Benutzerkonto"})," verwenden, um der Organisation beizutreten."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"SSO Just-in-Time-Bereitstellung"}),(0,r.jsx)(n.td,{children:"Neu und bestehend"}),(0,r.jsx)(n.td,{children:"\u2705"}),(0,r.jsxs)(n.td,{children:["Benutzer, die sich zum ersten Mal mit ",(0,r.jsx)(n.a,{href:"/end-user-flows/enterprise-sso",children:"SSO"})," anmelden, k\xf6nnen der Organisation beitreten."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"E-Mail-Domain Just-in-Time-Bereitstellung"}),(0,r.jsx)(n.td,{children:"Neu"}),(0,r.jsx)(n.td,{children:"\u2705"}),(0,r.jsx)(n.td,{children:"Benutzer mit bestimmten verifizierten Domains, die sich zum ersten Mal anmelden, k\xf6nnen der Organisation beitreten."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Verzeichnissynchronisation"}),(0,r.jsx)(n.td,{children:"Neu und bestehend"}),(0,r.jsx)(n.td,{children:"\u2705"}),(0,r.jsx)(n.td,{children:"Verwende die Verzeichnissynchronisationsfunktion des IdP, um Benutzer im Voraus in der App bereitzustellen."})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["Derzeit unterst\xfctzt Logto ",(0,r.jsx)(n.strong,{children:"SSO Just-in-Time-Bereitstellung"})," und ",(0,r.jsx)(n.strong,{children:"E-Mail-Domain Just-in-Time-Bereitstellung"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"vorteile-der-jit-bereitstellung",children:"Vorteile der JIT-Bereitstellung"}),"\n",(0,r.jsx)(n.p,{children:"Die JIT-Bereitstellung bietet mehrere Vorteile:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Effizienz"}),": Reduziert den administrativen Aufwand f\xfcr die manuelle Erstellung und Verwaltung von Benutzerkonten."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Skalierbarkeit"}),": Handhabt automatisch die Kontoerstellung f\xfcr eine gro\xdfe Anzahl von Benutzern ohne vorherige Einrichtung."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Echtzeit"}),": Stellt sicher, dass Benutzer sofort nach der Authentifizierung auf Ressourcen zugreifen k\xf6nnen, ohne Verz\xf6gerungen."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Wir haben die JIT-Funktionen auf ihrem skalierbarsten und sichersten Niveau implementiert, um den Bereitstellungsprozess f\xfcr dich zu vereinfachen und zu beschleunigen. Da Bereitstellungssysteme jedoch komplex sein k\xf6nnen und auf die spezifischen Bed\xfcrfnisse deiner Kunden zugeschnitten sein m\xfcssen, ist es wichtig, die vorgefertigten JIT-Funktionen von Logto, dein sorgf\xe4ltiges Systemdesign und die Logto Management API zu kombinieren. Dieser integrierte Ansatz hilft dir, ein robustes und effizientes Bereitstellungssystem zu erstellen."}),"\n",(0,r.jsx)(n.h3,{id:"unterschiede-zwischen-jit-und-verzeichnissynchronisation",children:"Unterschiede zwischen JIT und Verzeichnissynchronisation"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"JIT-Bereitstellung"})," wird durch benutzerinitiierte Aktionen ausgel\xf6st, w\xe4hrend ",(0,r.jsx)(n.strong,{children:"Verzeichnissynchronisation"})," sowohl benutzerinitiiert als auch systeminitiiert (geplant oder in Echtzeit) sein kann."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"JIT-Bereitstellung"})," erzwingt nicht die Mitgliedschaft oder Rollenzuweisung, w\xe4hrend ",(0,r.jsx)(n.strong,{children:"Verzeichnissynchronisation"})," diese erzwingen kann."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"JIT-Bereitstellung"})," ist besser geeignet f\xfcr das Onboarding neuer Benutzer, unabh\xe4ngig von der Identit\xe4tsquelle des Benutzers, w\xe4hrend ",(0,r.jsx)(n.strong,{children:"Verzeichnissynchronisation"})," besser geeignet ist f\xfcr verwaltete Benutzerkonten."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Kurz gesagt, die JIT-Bereitstellung ist ein flexiblerer und benutzerfreundlicherer Ansatz f\xfcr das Onboarding von Benutzern, da sie den Benutzern die Freiheit gibt, Organisationen beizutreten oder zu verlassen, und es dir erm\xf6glicht, die bestehenden Benutzer nach eigenem Ermessen zu verwalten."}),"\n",(0,r.jsx)(n.h2,{id:"just-in-time-bereitstellung-in-logto",children:"Just-in-Time-Bereitstellung in Logto"}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"Just-in-Time (JIT) Bereitstellung wird nur f\xfcr benutzerinitiierte Aktionen ausgel\xf6st und beeinflusst nicht die Interaktionen mit der Logto Management API."})}),"\n",(0,r.jsxs)(n.p,{children:["Navigiere zu ",(0,r.jsx)(i,{to:"/organizations",children:"Konsole > Organisationen"}),". Du kannst die JIT-Bereitstellung auf der Detailseite einer Organisation einstellen."]}),"\n",(0,r.jsx)(n.h3,{id:"enterprise-sso-bereitstellung",children:"Enterprise SSO Bereitstellung"}),"\n",(0,r.jsxs)(n.p,{children:["Wenn du ",(0,r.jsx)(n.a,{href:"/end-user-flows/enterprise-sso",children:"Enterprise SSO"})," in Logto eingerichtet hast, kannst du dein Organisations-Enterprise-SSO ausw\xe4hlen, um die Just-in-Time-Bereitstellung zu aktivieren."]}),"\n",(0,r.jsx)(n.p,{children:"Wenn eine der folgenden Bedingungen erf\xfcllt ist:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Neue Benutzer melden sich \xfcber Enterprise SSO an;"}),"\n",(0,r.jsx)(n.li,{children:"Bestehende Benutzer melden sich zum ersten Mal \xfcber Enterprise SSO an."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Sie werden automatisch der Organisation beitreten und erhalten Standard-Organisationsrollen."}),"\n",(0,r.jsx)("center",{children:(0,r.jsx)("img",{src:a,width:"100%",alt:"JIT SSO"})}),"\n",(0,r.jsx)(n.h3,{id:"e-mail-domain-bereitstellung",children:"E-Mail-Domain-Bereitstellung"}),"\n",(0,r.jsx)(n.p,{children:"Wenn dein Kunde kein dediziertes Enterprise SSO hat, kannst du dennoch E-Mail-Domains f\xfcr die Just-in-Time-Bereitstellung verwenden."}),"\n",(0,r.jsx)(n.p,{children:"Wenn sich ein Benutzer anmeldet und seine verifizierte E-Mail-Adresse mit den auf Organisationsebene konfigurierten JIT-E-Mail-Domains \xfcbereinstimmt, wird er den entsprechenden Organisationen mit den entsprechenden Rollen zugewiesen."}),"\n",(0,r.jsx)("center",{children:(0,r.jsx)("img",{src:d,width:"100%",alt:"JIT email"})}),"\n",(0,r.jsx)(n.p,{children:"Die Adress\xfcbereinstimmung kann die verifizierte E-Mail-Adresse aus allen nicht-Enterprise-SSO-Identit\xe4tsquellen erkennen, einschlie\xdflich:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/end-user-flows/sign-up-and-sign-in/sign-up",children:"E-Mail-Anmeldung"})," Authentifizierung"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/end-user-flows/sign-up-and-sign-in/social-sign-in",children:"Soziale Anmeldung"})," Authentifizierung"]}),"\n"]}),"\n",(0,r.jsxs)(n.admonition,{type:"note",children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Warum gilt die E-Mail-Domain-Bereitstellung nicht f\xfcr den bestehenden Benutzeranmeldeprozess?"})}),(0,r.jsx)(n.p,{children:"Die Anmeldung bestehender Benutzer erfordert eine weitere Kontrolle, um festzustellen, ob sie einer bestimmten Organisation zugewiesen oder eine Rolle erhalten k\xf6nnen. Dieser Prozess ist dynamisch und h\xe4ngt von spezifischen Anwendungsf\xe4llen und gesch\xe4ftlichen Anforderungen ab, wie Anmeldefrequenz und organisationsspezifischen Richtlinien."}),(0,r.jsx)(n.p,{children:"Zum Beispiel, wenn du die E-Mail-Domain-Bereitstellung f\xfcr einen bestehenden Benutzer aktivierst und sp\xe4ter eine andere Benutzergruppe mit einer anderen Rolle aufnehmen m\xf6chtest, sollte der zuvor aufgenommene Benutzer die neue Rolle erhalten, die du eingerichtet hast? Dies schafft ein komplexes Szenario f\xfcr \u201eJust-in-Time-Updates\u201c. Das genaue Verhalten h\xe4ngt oft davon ab, wie die Anwendung und die IdP-Integration konfiguriert sind. Wir geben dir diese Kontrolle, damit du dein Bereitstellungssystem frei gestalten und die h\xe4ufigsten Szenarien f\xfcr die Erstellung neuer Konten und das Onboarding von Organisationen handhaben kannst."})]}),"\n",(0,r.jsx)(n.h4,{id:"e-mail-anmeldeerfahrung-wenn-die-e-mail-domain-bereitstellung-aktiviert-ist",children:"E-Mail-Anmeldeerfahrung, wenn die E-Mail-Domain-Bereitstellung aktiviert ist"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Benutzerstatus"}),(0,r.jsx)(n.th,{children:"Beschreibung"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Benutzer existiert nicht und meldet sich mit E-Mail an"}),(0,r.jsx)(n.td,{children:"Benutzer wird erstellt und tritt automatisch der entsprechenden Organisation mit passenden Rollen bei."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Benutzer existiert mit derselben verifizierten E-Mail-Adresse wie bereitgestellte E-Mail-Domains"}),(0,r.jsx)(n.td,{children:"Normale E-Mail-Anmeldeerfahrung."})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"soziale-anmeldeerfahrung-wenn-die-e-mail-domain-bereitstellung-aktiviert-ist",children:"Soziale Anmeldeerfahrung, wenn die E-Mail-Domain-Bereitstellung aktiviert ist"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Benutzerstatus"}),(0,r.jsx)(n.th,{children:"Beschreibung"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Benutzer existiert nicht, meldet sich mit einem sozialen Konto mit einer verifizierten E-Mail an"}),(0,r.jsx)(n.td,{children:"Benutzer wird erstellt und tritt automatisch der entsprechenden Organisation mit passenden Rollen bei."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Benutzer existiert nicht, meldet sich mit einem sozialen Konto mit einer nicht verifizierten E-Mail oder ohne E-Mail an"}),(0,r.jsx)(n.td,{children:"Normale soziale Anmeldeerfahrung."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Benutzer existiert mit derselben verifizierten E-Mail-Adresse wie bereitgestellte E-Mail-Domains, meldet sich \xfcber eine neue soziale Identit\xe4t an"}),(0,r.jsx)(n.td,{children:"Normale soziale Anmeldeerfahrung."})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"umgang-mit-dem-potenziellen-konflikt-zwischen-jit-bereitstellungsmethoden",children:"Umgang mit dem potenziellen Konflikt zwischen JIT-Bereitstellungsmethoden"}),"\n",(0,r.jsx)(n.p,{children:"Wenn du zun\xe4chst die E-Mail-Domain-Bereitstellung einrichtest und sp\xe4ter ein Enterprise SSO mit derselben E-Mail-Domain konfigurierst, passiert Folgendes:"}),"\n",(0,r.jsx)(n.p,{children:"Wenn ein Benutzer seine E-Mail-Adresse eingibt, wird er zum SSO-Identit\xe4tsanbieter weitergeleitet und umgeht die E-Mail-Authentifizierung. Das bedeutet, dass die E-Mail-Domain-Bereitstellung nicht ausgel\xf6st wird."}),"\n",(0,r.jsx)(n.p,{children:"Um dies zu adressieren, zeigen wir eine Warnmeldung bei der Konfiguration an. Stelle sicher, dass du diesen Fall behandelst, indem du den richtigen SSO-Connector ausw\xe4hlst, um die Enterprise SSO-Bereitstellung zu aktivieren, und verlasse dich nicht auf die E-Mail-Domain-Bereitstellung."}),"\n",(0,r.jsx)("center",{children:(0,r.jsx)("img",{src:l,width:"100%",alt:"JIT conflict"})}),"\n",(0,r.jsx)(n.h2,{id:"standard-organisationsrollen",children:"Standard-Organisationsrollen"}),"\n",(0,r.jsxs)(n.p,{children:["Bei der Bereitstellung von Benutzern in einer Organisation kannst du ihre Standard-Organisationsrollen festlegen. Die Rollenliste stammt aus der ",(0,r.jsx)(n.a,{href:"/authorization/organization-template#organization-role",children:"Organisationstemplate"}),", und du kannst eine Rolle ausw\xe4hlen oder sie leer lassen."]})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(g,{...e})}):g(e)}},15658:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>d});var t=i(30758);const r={},s=t.createContext(r);function l(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);