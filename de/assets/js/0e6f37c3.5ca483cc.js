"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[39206],{2817:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>t,contentTitle:()=>c,default:()=>o,frontMatter:()=>d,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"user-management/advanced-user-search","title":"Erweiterte Benutzersuche","description":"Direkte Nutzung der Management API, um erweiterte Benutzersuchbedingungen zu nutzen.","source":"@site/i18n/de/docusaurus-plugin-content-docs/current/user-management/advanced-user-search.mdx","sourceDirName":"user-management","slug":"/user-management/advanced-user-search","permalink":"/de/user-management/advanced-user-search","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/de/docusaurus-plugin-content-docs/current/user-management/advanced-user-search.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"docsSidebar","previous":{"title":"Benutzer verwalten","permalink":"/de/user-management/manage-users"},"next":{"title":"Pers\xf6nliches Zugangstoken","permalink":"/de/user-management/personal-access-token"}}');var i=r(86070),a=r(15658);const d={sidebar_position:3},c="Erweiterte Benutzersuche",t={},l=[{value:"Eine Suchanfrage durchf\xfchren",id:"eine-suchanfrage-durchf\xfchren",level:2},{value:"Beispiel",id:"beispiel",level:3},{value:"Parameter",id:"parameter",level:3},{value:"Grundlegende unscharfe Suche",id:"grundlegende-unscharfe-suche",level:3},{value:"Felder angeben",id:"felder-angeben",level:3},{value:"\xc4ndern des Verkn\xfcpfungsmodus",id:"\xe4ndern-des-verkn\xfcpfungsmodus",level:3},{value:"Exakte \xdcbereinstimmung und Gro\xdf-/Kleinschreibung",id:"exakte-\xfcbereinstimmung-und-gro\xdf-kleinschreibung",level:3},{value:"Regul\xe4rer Ausdruck (RegEx)",id:"regul\xe4rer-ausdruck-regex",level:3},{value:"\xdcbereinstimmungsmodus \xfcberschreiben",id:"\xfcbereinstimmungsmodus-\xfcberschreiben",level:3}];function h(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"erweiterte-benutzersuche",children:"Erweiterte Benutzersuche"})}),"\n",(0,i.jsx)(n.p,{children:"Direkte Nutzung der Management API, um erweiterte Benutzersuchbedingungen zu nutzen."}),"\n",(0,i.jsx)(n.h2,{id:"eine-suchanfrage-durchf\xfchren",children:"Eine Suchanfrage durchf\xfchren"}),"\n",(0,i.jsxs)(n.p,{children:["Verwende ",(0,i.jsx)(n.a,{href:"https://openapi.logto.io/operation/operation-getuser",children:(0,i.jsx)(n.code,{children:"GET /api/users"})})," f\xfcr die Suche nach Benutzern. Beachte, dass es sich um eine Management API handelt, die wie andere eine Authentifizierung erfordert. Siehe ",(0,i.jsx)(n.a,{href:"/integrate-logto/interact-with-management-api",children:"Interaktion mit der Management API"})," f\xfcr das Interaktionsrezept."]}),"\n",(0,i.jsx)(n.h3,{id:"beispiel",children:"Beispiel"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Anfrage"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"curl \\\n  --location \\\n  --request GET \\\n  'http://<your-logto-endpoint>/api/users?search=%25alice%25'\n\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Antwort"})}),"\n",(0,i.jsxs)(n.p,{children:["Ein Array von ",(0,i.jsx)(n.code,{children:"User"}),"-Entit\xe4ten."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'[\n  {\n    "id": "MgUzzDsyX0iB",\n    "username": "alice_123",\n    "primaryEmail": "alice@some.email.domain",\n    "primaryPhone": null,\n    "name": null,\n    "avatar": null\n    // ...\n  }\n]\n'})}),"\n",(0,i.jsx)(n.h3,{id:"parameter",children:"Parameter"}),"\n",(0,i.jsx)(n.p,{children:"Eine Suchanfrage besteht aus den folgenden Parameter-Schl\xfcsseln:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Suchbegriffe: ",(0,i.jsx)(n.code,{children:"search"}),", ",(0,i.jsx)(n.code,{children:"search.*"})]}),"\n",(0,i.jsxs)(n.li,{children:["Suchmodus f\xfcr Felder: ",(0,i.jsx)(n.code,{children:"mode"}),", ",(0,i.jsx)(n.code,{children:"mode.*"})," (Standardwert ",(0,i.jsx)(n.code,{children:"'like'"}),", verf\xfcgbar ",(0,i.jsx)(n.code,{children:"['exact', 'like', 'similar_to', 'posix']"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:["Verkn\xfcpfungsmodus: ",(0,i.jsx)(n.code,{children:"joint"})," oder ",(0,i.jsx)(n.code,{children:"jointMode"})," (Standardwert ",(0,i.jsx)(n.code,{children:"'or'"}),", verf\xfcgbar ",(0,i.jsx)(n.code,{children:"['or', 'and']"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:["Ist Gro\xdf-/Kleinschreibung beachten: ",(0,i.jsx)(n.code,{children:"isCaseSensitive"})," (Standardwert ",(0,i.jsx)(n.code,{children:"false"}),")"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Diese API hat ",(0,i.jsx)(n.a,{href:"/integrate-logto/interact-with-management-api/#managing-paginated-api-responses",children:"Paginierung"})," aktiviert."]}),"\n",(0,i.jsxs)(n.p,{children:["Lass uns sie anhand einiger Beispiele durchgehen. Alle Suchparameter werden als Konstruktor von ",(0,i.jsx)(n.code,{children:"URLSearchParams"})," formatiert."]}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsxs)(n.p,{children:["Der Suchmodus ist standardm\xe4\xdfig auf ",(0,i.jsx)(n.code,{children:"like"})," gesetzt, was ",(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Approximate_string_matching",children:"Ann\xe4hernde Zeichenfolgen\xfcbereinstimmung"}),' ("unscharfe Suche") verwendet.']})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:['Alle unscharfen Suchmodi unterst\xfctzen nur die \xdcbereinstimmung eines Wertes pro Feld. Wenn du mehrere Werte f\xfcr ein einzelnes Feld abgleichen musst, solltest du den "exact"-Modus verwenden. Siehe ',(0,i.jsx)(n.a,{href:"./#exact-match-and-case-sensitivity",children:"Exakte \xdcbereinstimmung und Gro\xdf-/Kleinschreibung"})," f\xfcr Details."]})}),"\n",(0,i.jsx)(n.h3,{id:"grundlegende-unscharfe-suche",children:"Grundlegende unscharfe Suche"}),"\n",(0,i.jsxs)(n.p,{children:["Wenn du eine unscharfe Suche \xfcber alle verf\xfcgbaren Felder durchf\xfchren m\xf6chtest, gib einfach einen Wert f\xfcr den Schl\xfcssel ",(0,i.jsx)(n.code,{children:"search"})," an. Es wird ",(0,i.jsxs)(n.a,{href:"https://www.postgresql.org/docs/current/functions-matching.html#FUNCTIONS-LIKE",children:["den ",(0,i.jsx)(n.code,{children:"like"}),"-Operator"]})," im Hintergrund verwenden:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"new URLSearchParams([['search', '%foo%']]);\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Diese Suche wird \xfcber alle verf\xfcgbaren Felder in einer Benutzersuche iterieren, d.h. ",(0,i.jsx)(n.code,{children:"id"}),", ",(0,i.jsx)(n.code,{children:"primaryEmail"}),", ",(0,i.jsx)(n.code,{children:"primaryPhone"}),", ",(0,i.jsx)(n.code,{children:"username"}),", ",(0,i.jsx)(n.code,{children:"name"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"felder-angeben",children:"Felder angeben"}),"\n",(0,i.jsxs)(n.p,{children:["Was ist, wenn du die Suche nur auf ",(0,i.jsx)(n.code,{children:"name"})," beschr\xe4nken m\xf6chtest? Um jemanden zu suchen, der ",(0,i.jsx)(n.code,{children:"foo"})," in seinem Namen hat, verwende einfach das ",(0,i.jsx)(n.code,{children:"."}),"-Symbol, um das Feld anzugeben:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"new URLSearchParams([['search.name', '%foo%']]);\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Denke daran, dass verschachtelte Felder nicht unterst\xfctzt werden, z.B. wird ",(0,i.jsx)(n.code,{children:"search.name.first"})," zu einem Fehler f\xfchren."]}),"\n",(0,i.jsx)(n.p,{children:"Du kannst auch mehrere Felder gleichzeitig angeben:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"new URLSearchParams([\n  ['search.name', '%foo%'],\n  ['search.primaryEmail', '%@gmail.com'],\n]);\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Bedeutet, Benutzer zu suchen, die ",(0,i.jsx)(n.code,{children:"foo"})," im Namen haben ",(0,i.jsx)(n.strong,{children:"ODER"})," deren E-Mail mit ",(0,i.jsx)(n.code,{children:"@gmail.com"})," endet."]}),"\n",(0,i.jsx)(n.h3,{id:"\xe4ndern-des-verkn\xfcpfungsmodus",children:"\xc4ndern des Verkn\xfcpfungsmodus"}),"\n",(0,i.jsxs)(n.p,{children:["Wenn du m\xf6chtest, dass die API nur das Ergebnis zur\xfcckgibt, das ALLE Bedingungen erf\xfcllt, setze den Verkn\xfcpfungsmodus auf ",(0,i.jsx)(n.code,{children:"and"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"new URLSearchParams([\n  ['search.name', '%foo%'],\n  ['search.primaryEmail', '%@gmail.com'],\n  ['joint', 'and'],\n]);\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Bedeutet, Benutzer zu suchen, die ",(0,i.jsx)(n.code,{children:"foo"})," im Namen haben ",(0,i.jsx)(n.strong,{children:"UND"})," deren E-Mail mit ",(0,i.jsx)(n.code,{children:"@gmail.com"})," endet."]}),"\n",(0,i.jsx)(n.h3,{id:"exakte-\xfcbereinstimmung-und-gro\xdf-kleinschreibung",children:"Exakte \xdcbereinstimmung und Gro\xdf-/Kleinschreibung"}),"\n",(0,i.jsxs)(n.p,{children:['Angenommen, du m\xf6chtest nach jemandem suchen, dessen Name genau "Alice" ist. Du kannst ',(0,i.jsx)(n.code,{children:"mode.name"})," auf exakte \xdcbereinstimmung setzen."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"new URLSearchParams([\n  ['search.name', 'Alice'],\n  ['mode.name', 'exact'],\n]);\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Du wirst feststellen, dass es denselben Effekt hat, wenn du den ",(0,i.jsx)(n.code,{children:"like"}),"-Modus (Standard) verwendest im Vergleich zu ",(0,i.jsx)(n.code,{children:"exact"}),". Ein Unterschied ist, dass der ",(0,i.jsx)(n.code,{children:"exact"}),"-Modus ",(0,i.jsx)(n.code,{children:"="})," zum Vergleichen verwendet, w\xe4hrend ",(0,i.jsx)(n.code,{children:"like"})," ",(0,i.jsx)(n.code,{children:"like"})," oder ",(0,i.jsx)(n.code,{children:"ilike"})," verwendet. Theoretisch sollte ",(0,i.jsx)(n.code,{children:"="})," eine bessere Leistung haben."]}),"\n",(0,i.jsxs)(n.p,{children:["Au\xdferdem kannst du im ",(0,i.jsx)(n.code,{children:"exact"}),"-Modus mehrere Werte zum Abgleichen \xfcbergeben, und sie werden mit ",(0,i.jsx)(n.code,{children:"or"})," verbunden:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"new URLSearchParams([\n  ['search.name', 'Alice'],\n  ['search.name', 'Bob'],\n  ['mode.name', 'exact'],\n]);\n"})}),"\n",(0,i.jsxs)(n.p,{children:['Es wird die Benutzer mit dem Namen "Alice" ',(0,i.jsx)(n.strong,{children:"ODER"}),' "Bob" abgleichen.']}),"\n",(0,i.jsx)(n.p,{children:"Standardm\xe4\xdfig ist die Suche nicht auf Gro\xdf-/Kleinschreibung achten. Um pr\xe4ziser zu sein, setze die Suche als gro\xdf-/kleinschreibungssensitiv:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"new URLSearchParams([\n  ['search.name', 'Alice'],\n  ['search.name', 'Bob'],\n  ['mode.name', 'exact'],\n  ['isCaseSensitive', 'true'],\n]);\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Beachte, dass ",(0,i.jsx)(n.code,{children:"isCaseSensitive"})," eine globale Konfiguration ist. Daher wird JEDES Feld ihr folgen."]}),"\n",(0,i.jsx)(n.h3,{id:"regul\xe4rer-ausdruck-regex",children:"Regul\xe4rer Ausdruck (RegEx)"}),"\n",(0,i.jsxs)(n.p,{children:["PostgreSQL unterst\xfctzt zwei Arten von regul\xe4ren Ausdr\xfccken, ",(0,i.jsx)(n.a,{href:"https://www.postgresql.org/docs/current/functions-matching.html#FUNCTIONS-SIMILARTO-REGEXP",children:"\xe4hnlich wie"})," und ",(0,i.jsx)(n.a,{href:"https://www.postgresql.org/docs/current/functions-matching.html#FUNCTIONS-POSIX-REGEXP",children:"posix"}),". Setze ",(0,i.jsx)(n.code,{children:"mode"})," auf ",(0,i.jsx)(n.code,{children:"similar_to"})," oder ",(0,i.jsx)(n.code,{children:"posix"}),", um nach regul\xe4ren Ausdr\xfccken zu suchen:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"new URLSearchParams([\n  ['search', '^T.?m Scot+$'],\n  ['mode', 'posix'],\n]);\n"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Hinweis: Der Modus similar_to funktioniert nur bei gro\xdf-/kleinschreibungssensitiven Suchen."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"\xfcbereinstimmungsmodus-\xfcberschreiben",children:"\xdcbereinstimmungsmodus \xfcberschreiben"}),"\n",(0,i.jsx)(n.p,{children:"Standardm\xe4\xdfig erben alle Schl\xfcsselw\xf6rter den \xdcbereinstimmungsmodus von der allgemeinen Suche:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"new URLSearchParams([\n  ['search', '^T.?m Scot+$'],\n  ['mode', 'posix'],\n  ['search.primaryEmail', 'tom%'], // Posix-Modus\n  ['joint', 'and'],\n]);\n"})}),"\n",(0,i.jsx)(n.p,{children:"Um f\xfcr ein bestimmtes Feld zu \xfcberschreiben:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"new URLSearchParams([\n  ['search', '^T.?m Scot+$'],\n  ['mode', 'posix'],\n  ['search.primaryEmail', 'tom%'], // Like-Modus\n  ['mode.primaryEmail', 'like'],\n  ['search.phone', '0{3,}'], // Posix-Modus\n  ['joint', 'and'],\n]);\n"})})]})}function o(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},15658:(e,n,r)=>{r.d(n,{R:()=>d,x:()=>c});var s=r(30758);const i={},a=s.createContext(i);function d(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);