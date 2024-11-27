"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[99568],{65101:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"developers/signing-keys","title":"Signing keys","description":"Logto OIDC signing keys, as known as \\"OIDC private keys\\" and \\"OIDC cookie keys\\", are the signing keys used to sign JWT tokens (access tokens and ID tokens) and browser cookies in Logto sign-in sessions. These signing keys are generated when seeding Logto database (open-source) or creating a new tenant (Cloud) and can be managed through CLI (open-source), Management APIs or Console UI.","source":"@site/docs/developers/signing-keys.mdx","sourceDirName":"developers","slug":"/developers/signing-keys","permalink":"/developers/signing-keys","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/docs/developers/signing-keys.mdx","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"id":"signing-keys","title":"Signing keys","sidebar_label":"Signing keys","sidebar_position":4},"sidebar":"docsSidebar","previous":{"title":"User impersonation","permalink":"/developers/user-impersonation"},"next":{"title":"Webhooks","permalink":"/developers/webhooks/"}}');var s=t(86070),o=t(15658);const r={id:"signing-keys",title:"Signing keys",sidebar_label:"Signing keys",sidebar_position:4},a="Signing keys",l={},d=[{value:"How it works?",id:"how-it-works",level:2},{value:"Rotate signing keys from Console UI",id:"rotate-signing-keys-from-console-ui",level:2}];function c(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components},{CloudLink:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("CloudLink",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"signing-keys",children:"Signing keys"})}),"\n",(0,s.jsx)(n.p,{children:'Logto OIDC signing keys, as known as "OIDC private keys" and "OIDC cookie keys", are the signing keys used to sign JWT tokens (access tokens and ID tokens) and browser cookies in Logto sign-in sessions. These signing keys are generated when seeding Logto database (open-source) or creating a new tenant (Cloud) and can be managed through CLI (open-source), Management APIs or Console UI.'}),"\n",(0,s.jsx)(n.p,{children:"By default, Logto uses the elliptic curve (EC) algorithm to generate digital signatures. However, considering that users often need to verify JWT signatures and many older tools do not support the EC algorithm (only supporting RSA), we have implemented the functionality to rotate private keys and allow users to choose the signature algorithm (including both RSA and EC). This ensures compatibility with services that use outdated signature verification tools."}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"Theoretically, signing keys should not be leaked and do not have an expiration time, meaning there's no need to rotate them. However, periodically rotating the signing key after a certain period can enhance security."})}),"\n",(0,s.jsx)(n.h2,{id:"how-it-works",children:"How it works?"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"OIDC private key"}),"\nWhen initializing a Logto instance, a pair of public key and private key are automatically generated and are registered in the underlying OIDC provider. Thereby, when Logto issues a new JWT token (access token or ID token), the token is signed with the private key. In the meantime, any client application that receives a JWT token can use the paired public key to verify the token signature, in order to ensure the token is not tampered by any third-party. The private key is protected on the Logto server. The public key, however, as the name suggests, are public to everyone, and can be accessed through the ",(0,s.jsx)(n.code,{children:"/oidc/jwks"})," interface of the OIDC endpoint. A signing key algorithm can be specified when generating the private key, and Logto uses EC (Elliptic Curve) algorithm by default. The admin users can change the default algorithm to RSA (Rivest-Shamir-Adleman) by rotating the private keys."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"OIDC cookie key"}),'\nWhen user initiate a sign-in or sign-up flow, an "OIDC session" will be created on the server, as well as a set of browser cookies. With these cookies, browser can request Logto Experience API to perform a series of interactions on behalf of the user, such as sign-in, sign-up, and reset password. However, unlike the JWT tokens, the cookies are only signed and verified by Logto OIDC service itself, asymmetric cryptography measures are not required. Thus we don\'t have paired public keys for cookie signing keys, nor asymmetric encryption algorithms.']}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"rotate-signing-keys-from-console-ui",children:"Rotate signing keys from Console UI"}),"\n",(0,s.jsx)(n.p,{children:'Logto introduces a "Signing Keys Rotation" feature, which allows you to create a new OIDC private key and cookie key in your tenant.'}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Navigate to ",(0,s.jsx)(t,{to:"/signing-keys",children:"Console > Signing keys"}),". From there, you can manage both OIDC private keys and OIDC cookie keys."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:'To rotate the signing key, click the "Rotate private keys" or "Rotate cookie keys" button. When rotating private keys, you have the option to change the signing algorithm.'}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"And you'll find a table that lists all the signing keys in use. Note: You can delete the previous key, but you cannot delete the current one."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Status"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Current"}),(0,s.jsx)(n.td,{children:"This indicates that this key is currently in active use within your applications and APIs."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Previous"}),(0,s.jsx)(n.td,{children:"It refers to a key that was previously used but has been rotated out. Existing tokens with this signing key remain valid."})]})]})]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Please remember that rotation involves the following three actions:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Creating a new signing key"}),": This will require all your ",(0,s.jsx)(n.strong,{children:"applications"})," and ",(0,s.jsx)(n.strong,{children:"APIs"})," to adopt the new signing key."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Rotating the current key"}),': The existing key will be designated as "previous" after the rotation and will not be utilized by newly created applications and APIs. However, tokens signed with this key will still remain valid.']}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Removing your previous key"}),': Keys labeled as "previous" will be revoked and removed from the table.']}),"\n"]}),"\n",(0,s.jsxs)(n.admonition,{type:"warning",children:[(0,s.jsx)(n.p,{children:"Never rotate signing keys consecutively (two or more times), as this may invalidate ALL issued tokens."}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"For OSS users, after rotating the signing key, a Logto instance restart is required for the new signing key to take effect."}),"\n",(0,s.jsx)(n.li,{children:"For Cloud users, the new signing key takes effect immediately after rotation, but please make sure not to rotate the signing key multiple times consecutively."}),"\n"]})]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},15658:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var i=t(30758);const s={},o=i.createContext(s);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);