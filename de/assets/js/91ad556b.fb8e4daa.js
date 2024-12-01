"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[75448],{5161:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>f,contentTitle:()=>m,default:()=>b,frontMatter:()=>p,metadata:()=>r,toc:()=>x});const r=JSON.parse('{"id":"integrate-logto/interact-with-management-api/README","title":"Interaktion mit der Management API","description":"Was ist die Logto Management API?","source":"@site/i18n/de/docusaurus-plugin-content-docs/current/integrate-logto/interact-with-management-api/README.md","sourceDirName":"integrate-logto/interact-with-management-api","slug":"/integrate-logto/interact-with-management-api/","permalink":"/de/integrate-logto/interact-with-management-api/","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/de/docusaurus-plugin-content-docs/current/integrate-logto/interact-with-management-api/README.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4},"sidebar":"docsSidebar","previous":{"title":"Zustimmungsbildschirm-Branding","permalink":"/de/integrate-logto/third-party-applications/oidc-oauth-third-party-applications/consent-screen-branding"},"next":{"title":"Anwendungsdatenstruktur","permalink":"/de/integrate-logto/application-data-structure"}}');var i=t(86070),a=t(15658);const s=t.p+"assets/images/logto-management-api-resource-14162a031698ad36ac0f8c04ff683ba2.webp",o=t.p+"assets/images/logto-management-api-details-4994334ef32791d9ebc6c9aa298c9ecd.webp";var d=t(92796),l=t(26673),u=t(45929),c=t(67634),g=t(38232),h=t(64189);const p={sidebar_position:4},m="Interaktion mit der Management API",f={},x=[{value:"Was ist die Logto Management API?",id:"was-ist-die-logto-management-api",level:2},{value:"Wie greift man auf die Logto Management API zu?",id:"wie-greift-man-auf-die-logto-management-api-zu",level:2},{value:"Erstelle eine M2M-App",id:"erstelle-eine-m2m-app",level:3},...h.RM,{value:"Ein Zugangstoken abrufen",id:"ein-zugangstoken-abrufen",level:3},{value:"Grundlagen zur Zugangstoken-Anfrage",id:"grundlagen-zur-zugangstoken-anfrage",level:4},...d.RM,{value:"Zugangstoken f\xfcr die Logto Management API abrufen",id:"zugangstoken-f\xfcr-die-logto-management-api-abrufen",level:4},...l.RM,{value:"Zugangstoken-Antwort",id:"zugangstoken-antwort",level:4},...g.RM,{value:"Zugriff auf die Logto Management API mit Zugangstoken",id:"zugriff-auf-die-logto-management-api-mit-zugangstoken",level:3},...u.RM,...c.RM,{value:"Typische Szenarien f\xfcr die Nutzung der Logto Management API",id:"typische-szenarien-f\xfcr-die-nutzung-der-logto-management-api",level:2},{value:"Benutzerprofil selbst implementieren",id:"benutzerprofil-selbst-implementieren",level:3},{value:"Erweiterte Benutzersuche",id:"erweiterte-benutzersuche",level:3},{value:"Organisationsmanagement selbst implementieren",id:"organisationsmanagement-selbst-implementieren",level:3},{value:"Tipps zur Nutzung der Logto Management API",id:"tipps-zur-nutzung-der-logto-management-api",level:2},{value:"Verwaltung von paginierten API-Antworten",id:"verwaltung-von-paginierten-api-antworten",level:3},{value:"Verwendung von Link-Headern",id:"verwendung-von-link-headern",level:4},{value:"Verwendung des Total-Number-Headers",id:"verwendung-des-total-number-headers",level:4},{value:"\xc4ndern der Seitennummer und Seitengr\xf6\xdfe",id:"\xe4ndern-der-seitennummer-und-seitengr\xf6\xdfe",level:4},{value:"Ratenbegrenzung",id:"ratenbegrenzung",level:3}];function j(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components},{CloudLink:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("CloudLink",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"interaktion-mit-der-management-api",children:"Interaktion mit der Management API"})}),"\n",(0,i.jsx)(n.h2,{id:"was-ist-die-logto-management-api",children:"Was ist die Logto Management API?"}),"\n",(0,i.jsxs)(n.p,{children:["Die Logto Management API ist eine umfassende Sammlung von APIs, die Entwicklern die volle Kontrolle \xfcber ihre Implementierung gibt, um ihre Produktanforderungen und ihren Technologie-Stack zu erf\xfcllen. Sie ist vorgefertigt, in der ",(0,i.jsx)(t,{to:"/api-resources",children:"Konsole > API-Ressourcen > Logto Management API"})," aufgelistet und kann nicht gel\xf6scht oder modifiziert werden."]}),"\n",(0,i.jsxs)(n.p,{children:["Ihr Bezeichner hat das Muster ",(0,i.jsx)(n.code,{children:"https://[tenant-id].logto.app/api"})]}),"\n",(0,i.jsx)("img",{alt:"Logto Management API Resource",src:s}),"\n",(0,i.jsx)("img",{alt:"Logto Management API Details",src:o}),"\n",(0,i.jsx)(n.p,{children:"Mit der Logto Management API kannst du auf die robusten Backend-Dienste von Logto zugreifen, die hoch skalierbar sind und in einer Vielzahl von Szenarien genutzt werden k\xf6nnen. Sie geht \xfcber das hinaus, was mit den Low-Code-F\xe4higkeiten der Admin-Konsole m\xf6glich ist."}),"\n",(0,i.jsx)(n.p,{children:"Einige h\xe4ufig verwendete APIs sind unten aufgef\xfchrt:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://openapi.logto.io/operation/operation-getuser",children:"User"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://openapi.logto.io/operation/operation-listapplications",children:"Application"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://openapi.logto.io/operation/operation-listlogs",children:"Audit logs"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://openapi.logto.io/operation/operation-listroles",children:"Roles"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://openapi.logto.io/operation/operation-listresources",children:"Resources"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://openapi.logto.io/operation/operation-listconnectors",children:"Connectors"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://openapi.logto.io/operation/operation-listorganizations",children:"Organizations"})}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Um mehr \xfcber die verf\xfcgbaren APIs zu erfahren, besuche bitte ",(0,i.jsx)(n.a,{href:"https://openapi.logto.io/",children:"https://openapi.logto.io/"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"wie-greift-man-auf-die-logto-management-api-zu",children:"Wie greift man auf die Logto Management API zu?"}),"\n",(0,i.jsx)(n.h3,{id:"erstelle-eine-m2m-app",children:"Erstelle eine M2M-App"}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["Wenn du mit dem M2M (Maschine-zu-Maschine) Authentifizierungsfluss nicht vertraut bist, empfehlen wir, zuerst ",(0,i.jsx)(n.a,{href:"/integrate-logto/integrate-logto-into-your-application/understand-authentication-flow/#machine-to-machine-authentication-flow",children:"Verst\xe4ndnis des Authentifizierungsflusses"})," zu lesen, um die grundlegenden Konzepte zu verstehen."]})}),"\n",(0,i.jsxs)(n.p,{children:["Gehe zu ",(0,i.jsx)(t,{to:"/applications",children:"Konsole > Anwendungen"}),', w\xe4hle den Anwendungstyp "Maschine-zu-Maschine" und starte den Erstellungsprozess.']}),"\n",(0,i.jsx)(h.Ay,{}),"\n",(0,i.jsx)(n.p,{children:"Im Rollenmodul siehst du, dass alle M2M-Rollen enthalten sind, und Rollen, die durch ein Logto-Symbol angezeigt werden, bedeuten, dass diese Rollen Logto Management API-Berechtigungen enthalten."}),"\n",(0,i.jsx)(n.p,{children:"Weise nun M2M-Rollen mit Logto Management API-Berechtigungen f\xfcr deine M2M-App zu."}),"\n",(0,i.jsx)(n.h3,{id:"ein-zugangstoken-abrufen",children:"Ein Zugangstoken abrufen"}),"\n",(0,i.jsx)(n.h4,{id:"grundlagen-zur-zugangstoken-anfrage",children:"Grundlagen zur Zugangstoken-Anfrage"}),"\n",(0,i.jsx)(d.Ay,{}),"\n",(0,i.jsx)(n.h4,{id:"zugangstoken-f\xfcr-die-logto-management-api-abrufen",children:"Zugangstoken f\xfcr die Logto Management API abrufen"}),"\n",(0,i.jsx)(l.Ay,{}),"\n",(0,i.jsx)(n.h4,{id:"zugangstoken-antwort",children:"Zugangstoken-Antwort"}),"\n",(0,i.jsx)(n.p,{children:"Ein erfolgreicher Antwortk\xf6rper f\xfcr den Zugang sieht folgenderma\xdfen aus:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "access_token": "eyJhbG...2g", // Verwende dieses Token, um auf die Logto Management API zuzugreifen\n  "expires_in": 3600, // Token-Ablauf in Sekunden\n  "token_type": "Bearer", // Authentifizierungstyp f\xfcr deine Anfrage bei Verwendung des Zugangstokens\n  "scope": "all" // Berechtigung `all` f\xfcr die Logto Management API\n}\n'})}),"\n",(0,i.jsx)(g.Ay,{}),"\n",(0,i.jsx)(n.h3,{id:"zugriff-auf-die-logto-management-api-mit-zugangstoken",children:"Zugriff auf die Logto Management API mit Zugangstoken"}),"\n",(0,i.jsx)(u.Ay,{}),"\n",(0,i.jsx)(c.Ay,{}),"\n",(0,i.jsx)(n.h2,{id:"typische-szenarien-f\xfcr-die-nutzung-der-logto-management-api",children:"Typische Szenarien f\xfcr die Nutzung der Logto Management API"}),"\n",(0,i.jsx)(n.p,{children:"Unsere Entwickler haben viele zus\xe4tzliche Funktionen mit der Logto Management API implementiert. Wir glauben, dass unsere API hoch skalierbar ist und eine breite Palette deiner Bed\xfcrfnisse unterst\xfctzen kann. Hier sind einige Beispiele f\xfcr Szenarien, die mit der Logto Admin-Konsole nicht m\xf6glich sind, aber durch die Logto Management API erreicht werden k\xf6nnen."}),"\n",(0,i.jsx)(n.h3,{id:"benutzerprofil-selbst-implementieren",children:"Benutzerprofil selbst implementieren"}),"\n",(0,i.jsx)(n.p,{children:"Logto bietet derzeit keine vorgefertigte UI-L\xf6sung f\xfcr Benutzerprofile. Wir erkennen an, dass Benutzerprofile eng mit Gesch\xe4fts- und Produktattributen verbunden sind. W\xe4hrend wir daran arbeiten, den besten Ansatz zu bestimmen, empfehlen wir, unsere APIs zu nutzen, um deine eigene L\xf6sung zu erstellen. Beispielsweise kannst du unsere Interaktions-API, Profil-API und Verifizierungscode-API verwenden, um eine benutzerdefinierte L\xf6sung zu entwickeln, die deinen Anforderungen entspricht."}),"\n",(0,i.jsx)(n.h3,{id:"erweiterte-benutzersuche",children:"Erweiterte Benutzersuche"}),"\n",(0,i.jsxs)(n.p,{children:["Die Logto Admin-Konsole unterst\xfctzt grundlegende Such- und Filterfunktionen. F\xfcr erweiterte Suchoptionen wie unscharfe Suche, exakte \xdcbereinstimmung und Gro\xdf-/Kleinschreibung, schaue dir unsere ",(0,i.jsx)(n.a,{href:"/user-management/advanced-user-search",children:"Erweiterte Benutzersuche"})," Tutorials und Anleitungen an."]}),"\n",(0,i.jsx)(n.h3,{id:"organisationsmanagement-selbst-implementieren",children:"Organisationsmanagement selbst implementieren"}),"\n",(0,i.jsxs)(n.p,{children:["Wenn du die ",(0,i.jsx)(n.a,{href:"/organizations",children:"Organisationen"})," Funktion nutzt, um deine Multi-Tenant-App zu erstellen, ben\xf6tigst du m\xf6glicherweise die Logto Management API f\xfcr Aufgaben wie Organisationseinladungen und Mitgliederverwaltung. F\xfcr dein SaaS-Produkt, bei dem du sowohl Administratoren als auch Mitglieder im Tenant hast, kann die Logto Management API dir helfen, ein benutzerdefiniertes Admin-Portal zu erstellen, das auf deine Gesch\xe4ftsanforderungen zugeschnitten ist. Schaue dir ",(0,i.jsx)(n.a,{href:"/end-user-flows/organization-experience/",children:"dies"})," f\xfcr mehr Details an."]}),"\n",(0,i.jsx)(n.h2,{id:"tipps-zur-nutzung-der-logto-management-api",children:"Tipps zur Nutzung der Logto Management API"}),"\n",(0,i.jsx)(n.h3,{id:"verwaltung-von-paginierten-api-antworten",children:"Verwaltung von paginierten API-Antworten"}),"\n",(0,i.jsx)(n.p,{children:"Einige der API-Antworten k\xf6nnen viele Ergebnisse enthalten, die Ergebnisse werden paginiert. Logto bietet 2 Arten von Paginierungsinformationen."}),"\n",(0,i.jsx)(n.h4,{id:"verwendung-von-link-headern",children:"Verwendung von Link-Headern"}),"\n",(0,i.jsx)(n.p,{children:"Ein paginierter Antwort-Header sieht folgenderma\xdfen aus:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'Link: <https://logto.dev/users?page=1&page_size=20>; rel="first"\n'})}),"\n",(0,i.jsx)(n.p,{children:"Der Link-Header bietet die URL f\xfcr die vorherige, n\xe4chste, erste und letzte Seite der Ergebnisse:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:'Die URL f\xfcr die vorherige Seite folgt auf rel="prev".'}),"\n",(0,i.jsx)(n.li,{children:'Die URL f\xfcr die n\xe4chste Seite folgt auf rel="next".'}),"\n",(0,i.jsx)(n.li,{children:'Die URL f\xfcr die letzte Seite folgt auf rel="last".'}),"\n",(0,i.jsx)(n.li,{children:'Die URL f\xfcr die erste Seite folgt auf rel="first".'}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"verwendung-des-total-number-headers",children:"Verwendung des Total-Number-Headers"}),"\n",(0,i.jsxs)(n.p,{children:["Zus\xe4tzlich zu den Standard-Link-Headern f\xfcgt Logto auch einen ",(0,i.jsx)(n.code,{children:"Total-Number"}),"-Header hinzu:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Total-Number: 216\n"})}),"\n",(0,i.jsx)(n.p,{children:"Das w\xe4re sehr praktisch und n\xfctzlich, um Seitennummern anzuzeigen."}),"\n",(0,i.jsx)(n.h4,{id:"\xe4ndern-der-seitennummer-und-seitengr\xf6\xdfe",children:"\xc4ndern der Seitennummer und Seitengr\xf6\xdfe"}),"\n",(0,i.jsx)(n.p,{children:"Es gibt 2 optionale Abfrageparameter:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"page"}),": gibt die Seitennummer an, beginnt bei 1, der Standardwert ist 1."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"page_size"}),": gibt die Anzahl der Elemente pro Seite an, der Standardwert ist 20."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"ratenbegrenzung",children:"Ratenbegrenzung"}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"Dies gilt nur f\xfcr Logto Cloud."})}),"\n",(0,i.jsx)(n.p,{children:"Um die Zuverl\xe4ssigkeit und Sicherheit unserer Dienste f\xfcr alle Benutzer zu gew\xe4hrleisten, verwenden wir eine allgemeine Firewall, die den Datenverkehr auf unserer Website \xfcberwacht und verwaltet. Obwohl wir keine strikte Ratenbegrenzung durchsetzen, empfehlen wir den Benutzern, ihre Aktivit\xe4t auf etwa 200 Anfragen alle 10 Sekunden zu beschr\xe4nken, um unsere Schutzma\xdfnahmen nicht auszul\xf6sen."})]})}function b(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(j,{...e})}):j(e)}},67634:(e,n,t)=>{t.d(n,{Ay:()=>l,RM:()=>o});var r=t(86070),i=t(15658),a=t(78551),s=t(77501);const o=[];function d(e){const n={code:"code",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["Verwenden des angeforderten Zugangstokens mit der integrierten Logto Management API-Ressource ",(0,r.jsx)(n.code,{children:"https://[your-tenant-id].logto.app/api"}),", um alle Anwendungen in Logto zu erhalten:"]}),"\n",(0,r.jsxs)(s.A,{children:[(0,r.jsx)(a.A,{value:"Node.js",label:"Node.js",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const logtoEndpoint = 'https://your.logto.endpoint'; // Ersetze durch deinen Logto-Endpunkt\nconst accessToken = 'eyJhb...2g'; // Zugangstoken\n\nconst fetchLogtoApplications = async () => {\n  return await fetch(`${logtoEndpoint}/api/applications`, {\n    method: 'GET',\n    headers: {\n      Authorization: `Bearer ${accessToken}`,\n    },\n  });\n};\n"})})}),(0,r.jsxs)(a.A,{value:"cURL",label:"cURL",children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"curl --location \\\n  --request GET 'https://your.logto.endpoint/api/applications' \\\n  --header 'Authorization: Bearer eyJhbG...2g'\n"})}),(0,r.jsxs)(n.p,{children:["Denke daran, die tats\xe4chlichen Werte durch deine eigenen zu ersetzen. Der Wert nach ",(0,r.jsx)(n.code,{children:"Bearer"})," sollte das Zugangstoken (JWT) sein, das du erhalten hast."]})]})]})]})}function l(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},45929:(e,n,t)=>{t.d(n,{Ay:()=>o,RM:()=>a});var r=t(86070),i=t(15658);const a=[];function s(e){const n={code:"code",p:"p",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["Du wirst bemerken, dass die Token-Antwort ein ",(0,r.jsx)(n.code,{children:"token_type"}),"-Feld hat, das auf ",(0,r.jsx)(n.code,{children:"Bearer"})," festgelegt ist."]}),"\n",(0,r.jsxs)(n.p,{children:["Daher solltest du das Zugangstoken im ",(0,r.jsx)(n.code,{children:"Authorization"}),"-Feld der HTTP-Header im Bearer-Format (",(0,r.jsx)(n.code,{children:"Bearer YOUR_TOKEN"}),") platzieren, wenn du mit deinem API-Ressourcenserver interagierst."]})]})}function o(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(s,{...e})}):s(e)}},92796:(e,n,t)=>{t.d(n,{Ay:()=>d,RM:()=>s});var r=t(86070),i=t(15658);const a=t.p+"assets/images/app-id-secret-af29845d7768be05909995293bef45d9.png",s=[];function o(e){const n={a:"a",code:"code",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["Die M2M-Anwendung macht eine ",(0,r.jsx)(n.code,{children:"POST"}),"-Anfrage an den Token-Endpunkt, um ein Zugangstoken zu erhalten, indem sie die folgenden Parameter im Format ",(0,r.jsx)(n.code,{children:"application/x-www-form-urlencoded"})," im HTTP-Anfrage-Entity-Body hinzuf\xfcgt:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"grant_type"}),": Muss auf ",(0,r.jsx)(n.code,{children:"client_credentials"})," gesetzt werden"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"resource"}),": Die Ressource, auf die du zugreifen m\xf6chtest"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"scope"}),": Die Berechtigung der Zugriffsanfrage"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Au\xdferdem musst du die Anmeldeinformationen deiner M2M-Anwendung im Anforderungsheader einf\xfcgen, damit der Token-Endpunkt deine M2M-Anwendung authentifizieren kann."}),"\n",(0,r.jsxs)(n.p,{children:["Dies wird erreicht, indem die Anmeldeinformationen der Anwendung im ",(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization#basic_authentication",children:"Basic Authentication"}),"-Format im Anforderungsheader ",(0,r.jsx)(n.code,{children:"Authorization"})," eingef\xfcgt werden, wobei der Benutzername die App-ID und das Passwort das App-Geheimnis ist."]}),"\n",(0,r.jsx)(n.p,{children:"Du findest die App-ID und das App-Geheimnis auf der Detailseite deiner M2M-Anwendung:"}),"\n",(0,r.jsx)("img",{alt:"App ID und App-Geheimnis",src:a,width:"600px"})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},26673:(e,n,t)=>{t.d(n,{Ay:()=>u,RM:()=>d});var r=t(86070),i=t(15658),a=t(78551),s=t(77501);const o=t.p+"assets/images/logto-management-api-4994334ef32791d9ebc6c9aa298c9ecd.png",d=[];function l(e){const n={admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["Logto bietet eine eingebaute Ressource \u201eLogto Management API\u201c, es ist eine schreibgesch\xfctzte Ressource mit der Berechtigung ",(0,r.jsx)(n.code,{children:"all"}),", um auf die Logto Management API zuzugreifen. Du kannst sie in deiner Liste der API-Ressourcen sehen. Der Ressourcen-API-Indikator hat das Muster ",(0,r.jsx)(n.code,{children:"https://{your-tenant-id}.logto.app/api"})," und dies wird dein Ressourcenwert sein, der im Zugangstoken-Anfragek\xf6rper verwendet wird."]}),"\n",(0,r.jsx)("img",{alt:"Logto Management API Details",src:o,width:"600px"}),"\n",(0,r.jsxs)(n.p,{children:["Bevor du auf die Logto Management API zugreifst, stelle sicher, dass deine M2M-App mit M2M-Rollen zugewiesen wurde, die die Berechtigung ",(0,r.jsx)(n.code,{children:"all"})," von dieser eingebauten \u201eLogto Management API\u201c-Ressource enthalten."]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["Logto bietet auch eine vorkonfigurierte \u201eLogto Management API access\u201c M2M-Rolle f\xfcr neu erstellte Mandanten, der die Berechtigung ",(0,r.jsx)(n.code,{children:"all"})," der Logto Management API-Ressource bereits zugewiesen wurde. Du kannst sie direkt verwenden, ohne Berechtigungen manuell festzulegen. Diese vorkonfigurierte Rolle kann bei Bedarf auch bearbeitet und gel\xf6scht werden."]})}),"\n",(0,r.jsx)(n.p,{children:"Nun, setze alles zusammen und sende die Anfrage:"}),"\n",(0,r.jsxs)(s.A,{children:[(0,r.jsx)(a.A,{value:"Node.js",label:"Node.js",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const logtoEndpoint = 'https://your.logto.endpoint'; // Ersetze durch deinen Logto-Endpunkt\nconst tokenEndpoint = `${logtoEndpoint}/oidc/token`;\nconst applicationId = 'your-application-id';\nconst applicationSecret = 'your-application-secret';\nconst tenantId = 'your-tenant-id';\n\nconst fetchAccessToken = async () => {\n  return await fetch(tokenEndpoint, {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/x-www-form-urlencoded',\n      Authorization: `Basic ${Buffer.from(`${applicationId}:${applicationSecret}`).toString(\n        'base64'\n      )}`,\n    },\n    body: new URLSearchParams({\n      grant_type: 'client_credentials',\n      resource: `https://${tenantId}.logto.app/api`,\n      scope: 'all',\n    }).toString(),\n  });\n};\n"})})}),(0,r.jsxs)(a.A,{value:"cURL",label:"cURL",children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"curl --location \\\n  --request POST 'https://your.logto.endpoint' \\\n  --header 'Authorization: Basic ${your_auth_string}' \\\n  --header 'Content-Type: application/x-www-form-urlencoded' \\\n  --data-urlencode 'grant_type=client_credentials' \\\n  --data-urlencode 'resource=https://${tenantId}.logto.app/api' \\\n  --data-urlencode 'scope=all'\n"})}),(0,r.jsx)(n.p,{children:"Denke daran, die tats\xe4chlichen Werte durch deine eigenen zu ersetzen."})]})]}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsxs)(n.p,{children:["F\xfcr Logto Cloud-Nutzer: Wenn du mit der Logto Management API interagierst, kannst du keine benutzerdefinierte Domain verwenden, sondern den Standard-Logto-Endpunkt ",(0,r.jsx)(n.code,{children:"https://{your_tenant_id}.logto.app/oidc/token"}),", um Zugangstokens zu gew\xe4hren."]})})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},38232:(e,n,t)=>{t.d(n,{Ay:()=>o,RM:()=>a});var r=t(86070),i=t(15658);const a=[];function s(e){const n={admonition:"admonition",code:"code",p:"p",...(0,i.R)(),...e.components};return(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["Logto unterst\xfctzt derzeit nicht, dass die M2M-App einen Benutzer repr\xe4sentiert. Das ",(0,r.jsx)(n.code,{children:"sub"})," im Zugangstoken-Payload wird die App-ID sein."]})})}function o(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(s,{...e})}):s(e)}},64189:(e,n,t)=>{t.d(n,{Ay:()=>l,RM:()=>o});var r=t(86070),i=t(15658);const a=t.p+"assets/images/assign-m2m-roles-modal-f4f833eaf1c4b2c59509c918d3985eee.png",s=t.p+"assets/images/assign-m2m-roles-page-6084df6c23aec9c3f331738031f197b2.png",o=[];function d(e){const n={a:"a",p:"p",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["W\xe4hrend des Erstellungsprozesses der M2M-App wirst du zu einer Seite weitergeleitet, auf der du ",(0,r.jsx)(n.a,{href:"/authorization/role-based-access-control/configure-roles#define-role-type",children:"M2M-Rollen"})," deinen Anwendungen zuweisen kannst:"]}),"\n",(0,r.jsx)("img",{alt:"M2M-Rollen zuweisen Modal",src:a,width:"600px"}),"\n",(0,r.jsx)(n.p,{children:"Oder du kannst diese Rollen auch auf der Detailseite der M2M-App zuweisen, wenn du bereits eine M2M-App erstellt hast:"}),"\n",(0,r.jsx)("img",{alt:"M2M-Rollen zuweisen Seite",src:s,width:"600px"})]})}function l(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},78551:(e,n,t)=>{t.d(n,{A:()=>s});t(30758);var r=t(13526);const i={tabItem:"tabItem_PGP0"};var a=t(86070);function s(e){let{children:n,hidden:t,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(i.tabItem,s),hidden:t,children:n})}},77501:(e,n,t)=>{t.d(n,{A:()=>z});var r=t(30758),i=t(13526),a=t(65052),s=t(25557),o=t(77469),d=t(50873),l=t(62230),u=t(60196);function c(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function g(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return c(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:i}}=e;return{value:n,label:t,attributes:r,default:i}}))}(t);return function(e){const n=(0,l.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const i=(0,s.W6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,d.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(i.location.search);n.set(a,e),i.replace({...i.location,search:n.toString()})}),[a,i])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,a=g(e),[s,d]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:a}))),[l,c]=p({queryString:t,groupId:i}),[m,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,a]=(0,u.Dv)(t);return[i,(0,r.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:i}),x=(()=>{const e=l??m;return h({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{x&&d(x)}),[x]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);d(e),c(e),f(e)}),[c,f,a]),tabValues:a}}var f=t(13887);const x={tabList:"tabList_CGfx",tabItem:"tabItem_JX1E"};var j=t(86070);function b(e){let{className:n,block:t,selectedValue:r,selectValue:s,tabValues:o}=e;const d=[],{blockElementScrollPositionUntilNextRender:l}=(0,a.a_)(),u=e=>{const n=e.currentTarget,t=d.indexOf(n),i=o[t].value;i!==r&&(l(n),s(i))},c=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=d.indexOf(e.currentTarget)+1;n=d[t]??d[0];break}case"ArrowLeft":{const t=d.indexOf(e.currentTarget)-1;n=d[t]??d[d.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>d.push(e),onKeyDown:c,onClick:u,...a,className:(0,i.A)("tabs__item",x.tabItem,a?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function w(e){let{lazy:n,children:t,selectedValue:a}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function A(e){const n=m(e);return(0,j.jsxs)("div",{className:(0,i.A)("tabs-container",x.tabList),children:[(0,j.jsx)(b,{...n,...e}),(0,j.jsx)(w,{...n,...e})]})}function z(e){const n=(0,f.A)();return(0,j.jsx)(A,{...e,children:c(e.children)},String(n))}},15658:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>o});var r=t(30758);const i={},a=r.createContext(i);function s(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);