"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[6305],{64003:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>t,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"end-user-flows/mfa/webauthn","title":"Passkeys (WebAuthn)","description":"Passkey proporciona una alternativa m\xe1s segura y f\xe1cil de usar a las contrase\xf1as tradicionales. Al utilizar criptograf\xeda de clave p\xfablica, el passkey mejora la seguridad al vincular el dispositivo del usuario, el dominio del servicio y el ID del usuario, contrarrestando efectivamente el phishing y los ataques de contrase\xf1as. Es compatible con varios dispositivos o navegadores y permite a los usuarios emplear caracter\xedsticas de seguridad biom\xe9trica y de hardware para una autenticaci\xf3n conveniente. WebAuthn proporciona la API para permitir que los sitios web implementen passkey.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/end-user-flows/mfa/webauthn.md","sourceDirName":"end-user-flows/mfa","slug":"/end-user-flows/mfa/webauthn","permalink":"/es/end-user-flows/mfa/webauthn","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/es/docusaurus-plugin-content-docs/current/end-user-flows/mfa/webauthn.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"docsSidebar","previous":{"title":"OTP de la aplicaci\xf3n autenticadora","permalink":"/es/end-user-flows/mfa/authenticator-app-otp"},"next":{"title":"C\xf3digos de respaldo","permalink":"/es/end-user-flows/mfa/backup-codes"}}');var n=s(86070),o=s(15658);const t={sidebar_position:3},r="Passkeys (WebAuthn)",c={},l=[{value:"Conceptos",id:"conceptos",level:2},{value:"Presta atenci\xf3n a las limitaciones",id:"presta-atenci\xf3n-a-las-limitaciones",level:2},{value:"Flujos de autenticaci\xf3n",id:"flujos-de-autenticaci\xf3n",level:2}];function d(e){const a={a:"a",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.header,{children:(0,n.jsx)(a.h1,{id:"passkeys-webauthn",children:"Passkeys (WebAuthn)"})}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.a,{href:"https://auth.wiki/passkey",children:"Passkey"})," proporciona una alternativa m\xe1s segura y f\xe1cil de usar a las contrase\xf1as tradicionales. Al utilizar criptograf\xeda de clave p\xfablica, el passkey mejora la seguridad al vincular el dispositivo del usuario, el dominio del servicio y el ID del usuario, contrarrestando efectivamente el phishing y los ataques de contrase\xf1as. Es compatible con varios dispositivos o navegadores y permite a los usuarios emplear caracter\xedsticas de seguridad biom\xe9trica y de hardware para una autenticaci\xf3n conveniente. ",(0,n.jsx)(a.a,{href:"https://auth.wiki/webauthn",children:"WebAuthn"})," proporciona la API para permitir que los sitios web implementen passkey."]}),"\n",(0,n.jsx)(a.p,{children:"Logto ahora admite passkey (Webauthn) para la Autenticaci\xf3n Multifactor (MFA). La funci\xf3n de inicio de sesi\xf3n con passkey estar\xe1 disponible pr\xf3ximamente. Por favor, mantente atento a las actualizaciones."}),"\n",(0,n.jsx)(a.h2,{id:"conceptos",children:"Conceptos"}),"\n",(0,n.jsx)(a.p,{children:"Los clientes siempre conocen Passkeys en lugar de WebAuthn, entonces, \xbfcu\xe1l es la relaci\xf3n entre ellos y c\xf3mo usarlos? Vamos a explorar estos conceptos:"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.strong,{children:"Passkeys"}),': Un passkey es una credencial basada en FIDO, resistente al phishing, para reemplazar las contrase\xf1as. Utiliza criptograf\xeda de clave p\xfablica asim\xe9trica para mejorar la seguridad. Puede ser tokens de hardware o claves de seguridad, como dispositivos USB o Bluetooth. Dado que "Passkeys" es el m\xe9todo de autenticaci\xf3n mostrado a los usuarios, debe usarse dentro del cliente de tu producto.']}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.strong,{children:"WebAuthn"}),': Es una API de JavaScript desarrollada por el W3C y la FIDO Alliance, que potencia la autenticaci\xf3n de aplicaciones web con est\xe1ndares FIDO2. Passkeys es uno de los m\xe9todos de autenticaci\xf3n que WebAuthn admite. En la Consola de Logto, nos referimos profesionalmente a esta integraci\xf3n como "WebAuthn".']}),"\n"]}),"\n",(0,n.jsx)(a.p,{children:"WebAuthn proporciona diversos autenticadores para que los usuarios elijan, disponibles en dos tipos para uso local y en la nube:"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.strong,{children:"Autenticador de plataforma (Autenticador interno)"}),": Est\xe1 vinculado a un \xfanico y espec\xedfico sistema operativo de dispositivo, como una computadora, laptop, tel\xe9fono o tableta, con el que el usuario inicia sesi\xf3n. Funciona exclusivamente en el dispositivo para la autorizaci\xf3n utilizando m\xe9todos como biometr\xeda o un c\xf3digo de acceso del dispositivo, por lo que es una forma r\xe1pida de autenticar. Por ejemplo, iCloud Keychain verificado por Touch ID, Face ID o c\xf3digo de acceso del dispositivo en macOS o iOS; Windows Hello verificado por reconocimiento facial, huella digital o PIN amigable."]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.strong,{children:"Autenticador itinerante (Autenticador externo, Autenticador multiplataforma)"}),": Es un dispositivo port\xe1til separado o una aplicaci\xf3n de software, como una clave de seguridad de hardware o un tel\xe9fono inteligente. Debe vincular el dispositivo usando USB o mantener NFC o Bluetooth activado. El autenticador itinerante no est\xe1 limitado a un solo dispositivo o navegador, proporcionando mayor flexibilidad."]}),"\n"]}),"\n",(0,n.jsxs)(a.p,{children:["Para profundizar en los principios y procesos de WebAuthn, puedes consultar nuestras publicaciones de blog: ",(0,n.jsx)(a.a,{href:"https://blog.logto.io/web-authn-and-passkey-101/",children:"WebAuthn y Passkeys 101"})," y ",(0,n.jsx)(a.a,{href:"https://blog.logto.io/webauthn-base-knowledge/",children:"Cosas que debes saber antes de integrar WebAuthn"}),"."]}),"\n",(0,n.jsx)(a.h2,{id:"presta-atenci\xf3n-a-las-limitaciones",children:"Presta atenci\xf3n a las limitaciones"}),"\n",(0,n.jsx)(a.p,{children:"Es esencial estar al tanto de algunas limitaciones al implementar WebAuthn:"}),"\n",(0,n.jsxs)(a.ol,{children:["\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.strong,{children:"Limitaci\xf3n de plataforma y navegador"}),": Es importante tener en cuenta que Logto actualmente no ofrece soporte para WebAuthn en aplicaciones nativas. Adem\xe1s, la disponibilidad de autenticadores WebAuthn depende de las capacidades del navegador y del dispositivo (",(0,n.jsx)(a.a,{href:"https://caniuse.com/?search=webauthn",children:"Consulta la lista"}),"). Por lo tanto, WebAuthn no siempre es la \xfanica opci\xf3n para implementar la Autenticaci\xf3n Multifactor (MFA), de lo contrario, puedes controlar qu\xe9 navegadores y dispositivos pueden acceder a tu producto."]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.strong,{children:"Limitaci\xf3n de dominio"}),": Cambiar el dominio puede obstaculizar la verificaci\xf3n del usuario a trav\xe9s de sus cuentas WebAuthn existentes. Los passkeys est\xe1n vinculados al dominio espec\xedfico de la p\xe1gina web actual y no se pueden usar en diferentes dominios."]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.strong,{children:"Limitaci\xf3n de dispositivo"}),': Perder el dispositivo puede resultar en la p\xe9rdida de acceso a sus cuentas, especialmente para aquellos que dependen de los Autenticadores de Plataforma "Este dispositivo". Para mejorar el acceso a la autenticaci\xf3n, es aconsejable proporcionar a los usuarios m\xe1s de un factor de autenticaci\xf3n.']}),"\n"]}),"\n",(0,n.jsx)(a.h2,{id:"flujos-de-autenticaci\xf3n",children:"Flujos de autenticaci\xf3n"}),"\n",(0,n.jsx)(a.p,{children:"La especificaci\xf3n de Passkeys requiere que los usuarios hagan clic activamente en el bot\xf3n de la p\xe1gina actual para iniciar el componente de autenticaci\xf3n. Esto significa que tanto en los flujos de configuraci\xf3n como de verificaci\xf3n, los usuarios deben ser redirigidos a la p\xe1gina de inicio para iniciar WebAuthn."}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:(0,n.jsx)(a.strong,{children:"Flujos de configuraci\xf3n de Passkey"})}),"\n"]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"Flujo de configuraci\xf3n de WebAuthn",src:s(78730).A+"",width:"3052",height:"1392"})}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:(0,n.jsx)(a.strong,{children:"Flujos de verificaci\xf3n de Passkey"})}),"\n"]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"Flujo de verificaci\xf3n de WebAuthn",src:s(50691).A+"",width:"3052",height:"1400"})})]})}function u(e={}){const{wrapper:a}={...(0,o.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},78730:(e,a,s)=>{s.d(a,{A:()=>i});const i=s.p+"assets/images/webauthn-setup-flow-fd8ec10e337aed4b098916be9d5df1ad.png"},50691:(e,a,s)=>{s.d(a,{A:()=>i});const i=s.p+"assets/images/webauthn-verification-flow-2096bb143ca02cd8355891da54af550e.png"},15658:(e,a,s)=>{s.d(a,{R:()=>t,x:()=>r});var i=s(30758);const n={},o=i.createContext(n);function t(e){const a=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:t(e.components),i.createElement(o.Provider,{value:a},e.children)}}}]);