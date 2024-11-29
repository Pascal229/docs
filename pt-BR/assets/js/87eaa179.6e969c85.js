"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[14428],{40724:(e,o,i)=>{i.r(o),i.d(o,{assets:()=>t,contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"concepts/sign-in-experience","title":"Experi\xeancia de login explicada","description":"Esta p\xe1gina explica a experi\xeancia de login no Logto e por que ela \xe9 projetada dessa forma.","source":"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/concepts/sign-in-experience.mdx","sourceDirName":"concepts","slug":"/concepts/sign-in-experience","permalink":"/pt-BR/concepts/sign-in-experience","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/pt-BR/docusaurus-plugin-content-docs/current/concepts/sign-in-experience.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1,"sidebar_label":"Experi\xeancia de login"},"sidebar":"docsSidebar","previous":{"title":"Conceitos","permalink":"/pt-BR/concepts/"},"next":{"title":"Authentication vs. authorization","permalink":"/pt-BR/concepts/authn-vs-authz"}}');var n=i(86070),r=i(15658);const s={sidebar_position:1,sidebar_label:"Experi\xeancia de login"},c="Experi\xeancia de login explicada",t={},d=[{value:"Introdu\xe7\xe3o",id:"introdu\xe7\xe3o",level:2},{value:"Por que redirecionar?",id:"por-que-redirecionar",level:2},{value:"Flexibilidade",id:"flexibilidade",level:3},{value:"Suporte a m\xfaltiplos aplicativos",id:"suporte-a-m\xfaltiplos-aplicativos",level:3},{value:"Aplicativos nativos",id:"aplicativos-nativos",level:3},{value:"Seguran\xe7a",id:"seguran\xe7a",level:3},{value:"E se eu precisar mostrar alguns componentes de login no meu aplicativo?",id:"e-se-eu-precisar-mostrar-alguns-componentes-de-login-no-meu-aplicativo",level:2},{value:"Como funciona?",id:"como-funciona",level:3},{value:"Processo de clicar em &quot;Come\xe7ar&quot;",id:"processo-de-clicar-em-come\xe7ar",level:4},{value:"Processo de clicar em &quot;Entrar com Google&quot;",id:"processo-de-clicar-em-entrar-com-google",level:4},{value:"Usar direct sign-in no seu aplicativo",id:"usar-direct-sign-in-no-seu-aplicativo",level:3},{value:"Preciso que meus usu\xe1rios preencham suas credenciais no meu aplicativo",id:"preciso-que-meus-usu\xe1rios-preencham-suas-credenciais-no-meu-aplicativo",level:2},{value:"Recursos relacionados:",id:"recursos-relacionados",level:2}];function l(e){const o={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",mermaid:"mermaid",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components},{Url:i}=o;return i||function(e,o){throw new Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Url",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.header,{children:(0,n.jsx)(o.h1,{id:"experi\xeancia-de-login-explicada",children:"Experi\xeancia de login explicada"})}),"\n",(0,n.jsx)(o.p,{children:"Esta p\xe1gina explica a experi\xeancia de login no Logto e por que ela \xe9 projetada dessa forma."}),"\n",(0,n.jsx)(o.h2,{id:"introdu\xe7\xe3o",children:"Introdu\xe7\xe3o"}),"\n",(0,n.jsx)(o.p,{children:"A experi\xeancia de login \xe9 o processo de autentica\xe7\xe3o de usu\xe1rio no Logto. O processo pode ser simplificado da seguinte forma:"}),"\n",(0,n.jsx)(o.mermaid,{value:"graph LR\n    A(<b>Seu aplicativo</b>) --\x3e|1. Iniciar login| B(<b>Logto</b>)\n    B --\x3e|2. Concluir login| A"}),"\n",(0,n.jsxs)(o.ol,{children:["\n",(0,n.jsx)(o.li,{children:"Seu aplicativo inicia o m\xe9todo de login."}),"\n",(0,n.jsx)(o.li,{children:"O usu\xe1rio \xe9 redirecionado para a p\xe1gina de login do Logto. Para aplicativos nativos, o navegador do sistema \xe9 aberto."}),"\n",(0,n.jsx)(o.li,{children:'O usu\xe1rio faz login e \xe9 redirecionado de volta para o seu aplicativo (configurado como o "Redirect URI" no Logto).'}),"\n"]}),"\n",(0,n.jsx)(o.p,{children:"Embora o processo seja simples, a parte de redirecionamento pode parecer exagerada \xe0s vezes. No entanto, pode ser ben\xe9fico e seguro de v\xe1rias maneiras. Explicaremos as raz\xf5es nas se\xe7\xf5es seguintes."}),"\n",(0,n.jsx)(o.h2,{id:"por-que-redirecionar",children:"Por que redirecionar?"}),"\n",(0,n.jsx)(o.h3,{id:"flexibilidade",children:"Flexibilidade"}),"\n",(0,n.jsx)(o.p,{children:"O redirecionamento permite que voc\xea desacople o processo de autentica\xe7\xe3o do seu aplicativo. \xc0 medida que seu neg\xf3cio cresce, voc\xea pode manter o mesmo processo de autentica\xe7\xe3o sem alterar seu aplicativo. Por exemplo, voc\xea pode adicionar autentica\xe7\xe3o multifatorial (MFA) ou alterar os m\xe9todos de login sem tocar no seu aplicativo."}),"\n",(0,n.jsx)(o.mermaid,{value:'graph LR\n    A(<b>Seu aplicativo</b>) --\x3e|1. Iniciar login| B("<b>Logto</b>\\nEmail\\nGoogle\\nFacebook")\n    B --\x3e|2. Concluir login| A'}),"\n",(0,n.jsx)(o.h3,{id:"suporte-a-m\xfaltiplos-aplicativos",children:"Suporte a m\xfaltiplos aplicativos"}),"\n",(0,n.jsx)(o.p,{children:"Se voc\xea tiver v\xe1rios aplicativos, seus usu\xe1rios podem fazer login uma vez e acessar todos os aplicativos sem precisar fazer login novamente. Isso \xe9 especialmente \xfatil para empresas SaaS ou empresas com m\xfaltiplos servi\xe7os."}),"\n",(0,n.jsx)(o.mermaid,{value:"graph LR\n    A(<b>Seu aplicativo 1</b>) <--\x3e B(<b>Logto</b>)\n    C(<b>Seu aplicativo 2</b>) <--\x3e B\n    B <--\x3e D(<b>Seu aplicativo 3</b>)"}),"\n",(0,n.jsx)(o.h3,{id:"aplicativos-nativos",children:"Aplicativos nativos"}),"\n",(0,n.jsx)(o.p,{children:"Para aplicativos nativos, redirecionar para o navegador do sistema \xe9 uma maneira segura de autenticar usu\xe1rios e possui suporte embutido tanto para iOS quanto para Android."}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.strong,{children:"iOS"}),": A Apple oferece ",(0,n.jsx)(o.a,{href:"https://developer.apple.com/documentation/authenticationservices/aswebauthenticationsession",children:"ASWebAuthenticationSession"})," para autentica\xe7\xe3o segura."]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.strong,{children:"Android"}),": O Google fornece ",(0,n.jsx)(o.a,{href:"https://developer.chrome.com/docs/android/custom-tabs",children:"Custom Tabs"})," para uma experi\xeancia perfeita."]}),"\n"]}),"\n",(0,n.jsx)(o.h3,{id:"seguran\xe7a",children:"Seguran\xe7a"}),"\n",(0,n.jsxs)(o.p,{children:["Nos bastidores, o Logto \xe9 um provedor ",(0,n.jsx)(o.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html",children:"OpenID Connect (OIDC)"}),". O OIDC \xe9 um padr\xe3o amplamente adotado para autentica\xe7\xe3o de usu\xe1rios."]}),"\n",(0,n.jsxs)(o.p,{children:["O Logto aplica medidas de seguran\xe7a rigorosas, como ",(0,n.jsx)(o.a,{href:"https://tools.ietf.org/html/rfc7636",children:"PKCE"}),", e desativa fluxos inseguros como o fluxo impl\xedcito. O redirecionamento \xe9 uma maneira segura de autenticar usu\xe1rios e pode prevenir muitos ataques comuns."]}),"\n",(0,n.jsx)(o.h2,{id:"e-se-eu-precisar-mostrar-alguns-componentes-de-login-no-meu-aplicativo",children:"E se eu precisar mostrar alguns componentes de login no meu aplicativo?"}),"\n",(0,n.jsx)(o.p,{children:'\xc0s vezes, sua equipe pode querer mostrar alguns componentes de login no aplicativo, como um bot\xe3o "Entrar com Google". Isso pode ser alcan\xe7ado usando o recurso "Direct sign-in" no Logto.'}),"\n",(0,n.jsx)(o.h3,{id:"como-funciona",children:"Como funciona?"}),"\n",(0,n.jsx)(o.p,{children:'Digamos que voc\xea tenha dois bot\xf5es de call-to-action no seu aplicativo: "Come\xe7ar" e "Entrar com Google". Esses bot\xf5es s\xe3o projetados para:'}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:'"Come\xe7ar": Redirecionar para a p\xe1gina de login normal.'}),"\n",(0,n.jsx)(o.li,{children:'"Entrar com Google": Redirecionar para a p\xe1gina de login do Google.'}),"\n"]}),"\n",(0,n.jsx)(o.p,{children:"Ambas as a\xe7\xf5es precisam concluir o processo de login e redirecionar de volta para o seu aplicativo."}),"\n",(0,n.jsx)(o.hr,{}),"\n",(0,n.jsx)(o.h4,{id:"processo-de-clicar-em-come\xe7ar",children:'Processo de clicar em "Come\xe7ar"'}),"\n",(0,n.jsx)(o.p,{children:"Neste caso, a experi\xeancia de login \xe9 a mesma do padr\xe3o. O usu\xe1rio \xe9 redirecionado para a p\xe1gina de login do Logto e depois de volta para o seu aplicativo."}),"\n",(0,n.jsx)(o.mermaid,{value:'sequenceDiagram\n  participant A as Seu aplicativo\n  participant B as Logto\n\n  Note over A: Usu\xe1rio clica em<br/>"Come\xe7ar"\n  A->>B: Redirecionar\n  B->B: Usu\xe1rio conclui login\n  B->>A: Redirecionar de volta'}),"\n",(0,n.jsx)(o.admonition,{type:"note",children:(0,n.jsx)(o.p,{children:"Se voc\xea configurou m\xe9todos de login social (por exemplo, Google, Facebook) no Logto, o usu\xe1rio pode ser redirecionado para a p\xe1gina de login correspondente. Na ilustra\xe7\xe3o, mostramos apenas o fluxo geral para simplicidade."})}),"\n",(0,n.jsx)(o.hr,{}),"\n",(0,n.jsx)(o.h4,{id:"processo-de-clicar-em-entrar-com-google",children:'Processo de clicar em "Entrar com Google"'}),"\n",(0,n.jsx)(o.p,{children:"Neste caso, o usu\xe1rio \xe9 redirecionado para a p\xe1gina de login do Google automaticamente sem interagir com a p\xe1gina de login do Logto. A velocidade desse redirecionamento autom\xe1tico \xe9 quase instant\xe2nea, de modo que os usu\xe1rios podem n\xe3o perceber o redirecionamento."}),"\n",(0,n.jsx)(o.mermaid,{value:'sequenceDiagram\n  participant A as Seu aplicativo\n  participant B as Logto\n  participant C as Google\n\n  Note over A: Usu\xe1rio clica em<br/>"Entrar com Google"\n  A->>B: Redirecionar com par\xe2metros de direct sign-in\n  B->>C: Redirecionar automaticamente\n  C->C: Usu\xe1rio conclui login\n  C->>B: Redirecionar de volta\n  B->>A: Redirecionar de volta'}),"\n",(0,n.jsx)(o.hr,{}),"\n",(0,n.jsx)(o.p,{children:"Em resumo, o recurso de direct sign-in \xe9 uma maneira de automatizar algumas intera\xe7\xf5es na experi\xeancia de login sem alterar o n\xedvel de seguran\xe7a."}),"\n",(0,n.jsx)(o.h3,{id:"usar-direct-sign-in-no-seu-aplicativo",children:"Usar direct sign-in no seu aplicativo"}),"\n",(0,n.jsxs)(o.p,{children:["Para usar o direct sign-in, voc\xea precisa passar o par\xe2metro ",(0,n.jsx)(o.code,{children:"direct_sign_in"})," ao iniciar o m\xe9todo de login. O valor deve ser composto de um formato que o Logto reconhe\xe7a. Por exemplo, para entrar com o Google, o valor deve ser ",(0,n.jsx)(o.code,{children:"social:google"}),"."]}),"\n",(0,n.jsxs)(o.p,{children:["Em alguns SDKs oficiais do Logto, h\xe1 uma op\xe7\xe3o dedicada para direct sign-in. Aqui est\xe1 um exemplo de uso de direct sign-in no SDK JavaScript ",(0,n.jsx)(o.code,{children:"@logto/client"}),":"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-ts",children:"client.signIn({\n  redirectUri: 'https://some-redirect-uri',\n  directSignIn: { method: 'social', target: 'google' },\n});\n"})}),"\n",(0,n.jsxs)(o.p,{children:["Para mais detalhes, consulte ",(0,n.jsx)(o.a,{href:"/end-user-flows/authentication-parameters/direct-sign-in",children:"Direct sign-in"}),"."]}),"\n",(0,n.jsx)(o.admonition,{type:"info",children:(0,n.jsx)(o.p,{children:"Estamos implementando gradualmente esse recurso em todos os SDKs oficiais do Logto. Se voc\xea n\xe3o o v\xea no seu SDK, sinta-se \xe0 vontade para nos contatar."})}),"\n",(0,n.jsx)(o.h2,{id:"preciso-que-meus-usu\xe1rios-preencham-suas-credenciais-no-meu-aplicativo",children:"Preciso que meus usu\xe1rios preencham suas credenciais no meu aplicativo"}),"\n",(0,n.jsxs)(o.p,{children:['Se voc\xea precisa que seus usu\xe1rios preencham suas credenciais (como email e senha) diretamente no seu aplicativo, em vez de redirecionar para o Logto, n\xe3o podemos ajud\xe1-lo com isso no momento. Historicamente, havia uma concess\xe3o de "Credenciais de Senha do Propriet\xe1rio do Recurso", mas agora \xe9 considerada insegura e foi ',(0,n.jsx)(o.a,{href:"https://datatracker.ietf.org/doc/html/draft-ietf-oauth-security-topics#name-resource-owner-password-cre",children:"formalmente descontinuada no OAuth 2.1"}),"."]}),"\n",(0,n.jsxs)(o.p,{children:["Para saber mais sobre os riscos de seguran\xe7a do tipo de concess\xe3o ROPC, confira nosso post no blog ",(0,n.jsx)(o.a,{href:"https://blog.logto.io/deprecated-ropc-grant-type/",children:"Por que voc\xea deve descontinuar o tipo de concess\xe3o ROPC"}),"."]}),"\n",(0,n.jsx)(o.h2,{id:"recursos-relacionados",children:"Recursos relacionados:"}),"\n",(0,n.jsx)(i,{href:"https://blog.logto.io/oauth-2-1/",children:"OAuth 2.1 est\xe1 aqui: O que voc\xea precisa saber"})]})}function p(e={}){const{wrapper:o}={...(0,r.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},15658:(e,o,i)=>{i.d(o,{R:()=>s,x:()=>c});var a=i(30758);const n={},r=a.createContext(n);function s(e){const o=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function c(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),a.createElement(r.Provider,{value:o},e.children)}}}]);