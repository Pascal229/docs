"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[25767],{75106:(e,s,o)=>{o.r(s),o.d(s,{assets:()=>t,contentTitle:()=>n,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"developers/custom-token-claims/create-script","title":"Criar um script de reivindica\xe7\xf5es de token personalizadas","description":"Para adicionar reivindica\xe7\xf5es personalizadas ao token de acesso, voc\xea precisa fornecer um script que retorne um objeto contendo essas reivindica\xe7\xf5es. O script deve ser escrito como uma fun\xe7\xe3o JavaScript que retorna um objeto com as reivindica\xe7\xf5es personalizadas.","source":"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/developers/custom-token-claims/create-script.mdx","sourceDirName":"developers/custom-token-claims","slug":"/developers/custom-token-claims/create-script","permalink":"/pt-BR/developers/custom-token-claims/create-script","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/pt-BR/docusaurus-plugin-content-docs/current/developers/custom-token-claims/create-script.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"id":"create-script","title":"Criar um script de reivindica\xe7\xf5es de token personalizadas","sidebar_label":"Criar um script de reivindica\xe7\xf5es de token personalizadas","sidebar_position":3},"sidebar":"docsSidebar","previous":{"title":"Casos de uso comuns","permalink":"/pt-BR/developers/custom-token-claims/common-use-cases"},"next":{"title":"Imita\xe7\xe3o de usu\xe1rio","permalink":"/pt-BR/developers/user-impersonation"}}');var d=o(86070),a=o(15658);const i={id:"create-script",title:"Criar um script de reivindica\xe7\xf5es de token personalizadas",sidebar_label:"Criar um script de reivindica\xe7\xf5es de token personalizadas",sidebar_position:3},n="Criar um script de reivindica\xe7\xf5es de token personalizadas",t={},c=[{value:"Implementar a fun\xe7\xe3o <code>getCustomJwtClaims()</code>",id:"implementar-a-fun\xe7\xe3o-getcustomjwtclaims",level:2},{value:"Passo 1: Editar o script",id:"passo-1-editar-o-script",level:2},{value:"Passo 2: Par\xe2metros de entrada",id:"passo-2-par\xe2metros-de-entrada",level:2},{value:"token",id:"token",level:3},{value:"context (Dispon\xedvel apenas para token de acesso do usu\xe1rio)",id:"context-dispon\xedvel-apenas-para-token-de-acesso-do-usu\xe1rio",level:3},{value:"environmentVariables",id:"environmentvariables",level:3},{value:"api",id:"api",level:3},{value:"Passo 3: Buscar dados externos",id:"passo-3-buscar-dados-externos",level:2},{value:"Passo 4: Testar o script",id:"passo-4-testar-o-script",level:2}];function l(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components},{CloudLink:r}=s;return r||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("CloudLink",!0),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(s.header,{children:(0,d.jsx)(s.h1,{id:"criar-um-script-de-reivindica\xe7\xf5es-de-token-personalizadas",children:"Criar um script de reivindica\xe7\xf5es de token personalizadas"})}),"\n",(0,d.jsxs)(s.p,{children:["Para adicionar reivindica\xe7\xf5es personalizadas ao token de acesso, voc\xea precisa fornecer um script que retorne um objeto contendo essas reivindica\xe7\xf5es. O script deve ser escrito como uma fun\xe7\xe3o ",(0,d.jsx)(s.code,{children:"JavaScript"})," que retorna um objeto com as reivindica\xe7\xf5es personalizadas."]}),"\n",(0,d.jsxs)(s.ol,{children:["\n",(0,d.jsxs)(s.li,{children:["\n",(0,d.jsxs)(s.p,{children:["Navegue para ",(0,d.jsx)(r,{to:"/customize-jwt",children:"Console > Custom JWT"}),"."]}),"\n"]}),"\n",(0,d.jsxs)(s.li,{children:["\n",(0,d.jsx)(s.p,{children:"Existem dois tipos diferentes de tokens de acesso para os quais voc\xea pode personalizar as reivindica\xe7\xf5es do token de acesso:"}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.strong,{children:"Token de acesso do usu\xe1rio"}),": O token de acesso emitido para usu\xe1rios finais. Por exemplo, para aplicativos Web ou aplicativos m\xf3veis."]}),"\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.strong,{children:"Token de acesso m\xe1quina para m\xe1quina"}),": O token de acesso emitido para os servi\xe7os ou aplicativos. Por exemplo, para aplicativos m\xe1quina para m\xe1quina."]}),"\n"]}),"\n",(0,d.jsx)(s.p,{children:"Diferentes tipos de tokens de acesso podem ter diferentes contextos de carga \xfatil do token. Voc\xea pode personalizar as reivindica\xe7\xf5es do token para cada tipo de token de acesso separadamente."}),"\n",(0,d.jsxs)(s.p,{children:["Escolha qualquer tipo de token de acesso para o qual voc\xea deseja personalizar as reivindica\xe7\xf5es do token e clique no bot\xe3o ",(0,d.jsx)(s.strong,{children:"Adicionar reivindica\xe7\xf5es personalizadas"})," para criar um novo script."]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(s.admonition,{type:"note",children:[(0,d.jsx)(s.p,{children:"O recurso de reivindica\xe7\xf5es de token personalizadas est\xe1 dispon\xedvel apenas para:"}),(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsx)(s.li,{children:"Usu\xe1rios OSS"}),"\n",(0,d.jsx)(s.li,{children:"Locat\xe1rios Dev"}),"\n",(0,d.jsx)(s.li,{children:"Locat\xe1rios pagos (incluindo locat\xe1rios Pro e locat\xe1rios Enterprise)"}),"\n"]})]}),"\n",(0,d.jsxs)(s.h2,{id:"implementar-a-fun\xe7\xe3o-getcustomjwtclaims",children:["Implementar a fun\xe7\xe3o ",(0,d.jsx)(s.code,{children:"getCustomJwtClaims()"})]}),"\n",(0,d.jsxs)(s.p,{children:["Na p\xe1gina de detalhes do ",(0,d.jsx)(s.strong,{children:"Custom JWT"}),", voc\xea pode encontrar o editor de scripts para escrever seu script de reivindica\xe7\xf5es de token personalizadas. O script deve ser uma fun\xe7\xe3o ",(0,d.jsx)(s.code,{children:"JavaScript"})," que retorna um objeto de reivindica\xe7\xf5es personalizadas."]}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.img,{alt:"P\xe1gina de detalhes de reivindica\xe7\xf5es de token personalizadas",src:o(79509).A+"",width:"3146",height:"1818"})}),"\n",(0,d.jsx)(s.h2,{id:"passo-1-editar-o-script",children:"Passo 1: Editar o script"}),"\n",(0,d.jsxs)(s.p,{children:["Use o editor de c\xf3digo no lado esquerdo para modificar o script. Um ",(0,d.jsx)(s.code,{children:"getCustomJwtClaims"})," padr\xe3o com um valor de retorno de objeto vazio \xe9 fornecido para voc\xea come\xe7ar. Voc\xea pode modificar a fun\xe7\xe3o para retornar um objeto de suas pr\xf3prias reivindica\xe7\xf5es personalizadas."]}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-jsx",children:"const getCustomJwtClaims = async ({ token, context, environmentVariables }) => {\n  return {};\n};\n"})}),"\n",(0,d.jsx)(s.p,{children:"Este editor usa o servidor de linguagem JavaScript para fornecer realce de sintaxe b\xe1sico, conclus\xe3o de c\xf3digo e verifica\xe7\xe3o de erros. O par\xe2metro de entrada \xe9 bem tipado e documentado no estilo jsDoc. Voc\xea pode usar o IntelliSense do editor para acessar corretamente as propriedades do objeto de entrada. Voc\xea pode encontrar as defini\xe7\xf5es detalhadas dos par\xe2metros no lado direito da p\xe1gina."}),"\n",(0,d.jsx)(s.admonition,{type:"note",children:(0,d.jsxs)(s.p,{children:["Esta fun\xe7\xe3o ser\xe1 exportada como um m\xf3dulo. Certifique-se de manter o nome da fun\xe7\xe3o como ",(0,d.jsx)(s.code,{children:"getCustomJwtClaims"})," para que o m\xf3dulo possa exportar a fun\xe7\xe3o corretamente."]})}),"\n",(0,d.jsx)(s.h2,{id:"passo-2-par\xe2metros-de-entrada",children:"Passo 2: Par\xe2metros de entrada"}),"\n",(0,d.jsxs)(s.p,{children:["A fun\xe7\xe3o ",(0,d.jsx)(s.code,{children:"getCustomJwtClaims"})," recebe um objeto como par\xe2metro de entrada. O objeto de entrada cont\xe9m as seguintes propriedades:"]}),"\n",(0,d.jsx)(s.h3,{id:"token",children:"token"}),"\n",(0,d.jsx)(s.p,{children:"O objeto de carga \xfatil do token. Este objeto cont\xe9m reivindica\xe7\xf5es de token originais e metadados que voc\xea pode precisar acessar no script."}),"\n",(0,d.jsx)(s.p,{children:"Voc\xea pode encontrar a defini\xe7\xe3o de tipo detalhada do objeto de carga \xfatil do token e do objeto de dados do usu\xe1rio no lado direito da p\xe1gina. O IntelliSense do editor tamb\xe9m ajudar\xe1 voc\xea a acessar corretamente essas propriedades do objeto de entrada."}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsxs)(s.li,{children:["Objeto de dados do token de acesso do usu\xe1rio","\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Propriedade"}),(0,d.jsx)(s.th,{children:"Descri\xe7\xe3o"}),(0,d.jsx)(s.th,{children:"Tipo"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"jti"})}),(0,d.jsx)(s.td,{children:"O ID \xfanico do JWT"}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"string"})})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"aud"})}),(0,d.jsx)(s.td,{children:"O p\xfablico do token"}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"string"})})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"scope"})}),(0,d.jsx)(s.td,{children:"Os escopos do token"}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"string"})})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"clientId"})}),(0,d.jsx)(s.td,{children:"O ID do cliente do token"}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"string"})})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"accountId"})}),(0,d.jsx)(s.td,{children:"O ID do usu\xe1rio do token"}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"string"})})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"expiresWithSession"})}),(0,d.jsx)(s.td,{children:"Se o token expirar\xe1 com a sess\xe3o"}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"boolean"})})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"grantId"})}),(0,d.jsx)(s.td,{children:"O ID da concess\xe3o de autentica\xe7\xe3o atual do token"}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"string"})})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"gty"})}),(0,d.jsx)(s.td,{children:"O tipo de concess\xe3o do token"}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"string"})})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"kind"})}),(0,d.jsx)(s.td,{children:"O tipo de token"}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"AccessToken"})})]})]})]}),"\n"]}),"\n",(0,d.jsxs)(s.li,{children:["Objeto de dados do token de acesso m\xe1quina para m\xe1quina","\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Propriedade"}),(0,d.jsx)(s.th,{children:"Descri\xe7\xe3o"}),(0,d.jsx)(s.th,{children:"Tipo"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"jti"})}),(0,d.jsx)(s.td,{children:"O ID \xfanico do JWT"}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"string"})})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"aud"})}),(0,d.jsx)(s.td,{children:"O p\xfablico do token"}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"string"})})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"scope"})}),(0,d.jsx)(s.td,{children:"Os escopos do token"}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"string"})})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"clientId"})}),(0,d.jsx)(s.td,{children:"O ID do cliente do token"}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"string"})})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"kind"})}),(0,d.jsx)(s.td,{children:"O tipo de token"}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"ClientCredentials"})})]})]})]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(s.h3,{id:"context-dispon\xedvel-apenas-para-token-de-acesso-do-usu\xe1rio",children:"context (Dispon\xedvel apenas para token de acesso do usu\xe1rio)"}),"\n",(0,d.jsx)(s.p,{children:"O objeto de contexto cont\xe9m os dados do usu\xe1rio e os dados da concess\xe3o relevantes para o processo de autoriza\xe7\xe3o atual."}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.strong,{children:"Objeto de dados do usu\xe1rio"}),"\nPara o token de acesso do usu\xe1rio, o Logto fornece um contexto de dados do usu\xe1rio adicional para voc\xea acessar. O objeto de dados do usu\xe1rio cont\xe9m todos os dados do perfil do usu\xe1rio e dados de associa\xe7\xe3o \xe0 organiza\xe7\xe3o que voc\xea pode precisar para configurar as reivindica\xe7\xf5es personalizadas. Por favor, verifique ",(0,d.jsx)(s.a,{href:"/user-management/user-data",children:"Usu\xe1rios"})," e ",(0,d.jsx)(s.a,{href:"/organizations/organization-data",children:"Organiza\xe7\xf5es"})," para mais detalhes."]}),"\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.strong,{children:"Objeto de dados da concess\xe3o"}),"\nPara o token de acesso do usu\xe1rio concedido por troca de token de imita\xe7\xe3o, o Logto fornece um contexto de dados de concess\xe3o adicional para voc\xea acessar. O objeto de dados da concess\xe3o cont\xe9m o contexto personalizado do token do sujeito. Por favor, verifique ",(0,d.jsx)(s.a,{href:"/developers/user-impersonation",children:"Imita\xe7\xe3o de usu\xe1rio"})," para mais detalhes."]}),"\n"]}),"\n",(0,d.jsx)(s.h3,{id:"environmentvariables",children:"environmentVariables"}),"\n",(0,d.jsxs)(s.p,{children:["Use a se\xe7\xe3o ",(0,d.jsx)(s.strong,{children:"Definir vari\xe1veis de ambiente"})," \xe0 direita para configurar as vari\xe1veis de ambiente para seu script. Voc\xea pode usar essas vari\xe1veis para armazenar informa\xe7\xf5es sens\xedveis ou dados de configura\xe7\xe3o que voc\xea n\xe3o deseja codificar no script. Por exemplo, chaves de API, segredos ou URLs."]}),"\n",(0,d.jsxs)(s.p,{children:["Todas as vari\xe1veis de ambiente que voc\xea definir aqui estar\xe3o dispon\xedveis no script. Use o objeto ",(0,d.jsx)(s.code,{children:"environmentVariables"})," no par\xe2metro de entrada para acessar essas vari\xe1veis."]}),"\n",(0,d.jsx)(s.h3,{id:"api",children:"api"}),"\n",(0,d.jsxs)(s.p,{children:["O objeto ",(0,d.jsx)(s.code,{children:"api"})," fornece um conjunto de fun\xe7\xf5es utilit\xe1rias que voc\xea pode usar em seu script para controle de acesso adicional sobre o processo de emiss\xe3o de tokens. O objeto ",(0,d.jsx)(s.code,{children:"api"})," cont\xe9m as seguintes fun\xe7\xf5es:"]}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-jsx",children:"api.denyAccess(message?: string): void\n"})}),"\n",(0,d.jsxs)(s.p,{children:["A fun\xe7\xe3o ",(0,d.jsx)(s.code,{children:"api.denyAccess()"})," permite que voc\xea negue o processo de emiss\xe3o de tokens com uma mensagem personalizada. Voc\xea pode usar essa fun\xe7\xe3o para impor valida\xe7\xf5es de acesso adicionais sobre o processo de emiss\xe3o de tokens."]}),"\n",(0,d.jsx)(s.h2,{id:"passo-3-buscar-dados-externos",children:"Passo 3: Buscar dados externos"}),"\n",(0,d.jsxs)(s.p,{children:["Voc\xea pode usar a fun\xe7\xe3o ",(0,d.jsx)(s.code,{children:"fetch"})," embutida do node para buscar dados externos em seu script. A fun\xe7\xe3o ",(0,d.jsx)(s.code,{children:"fetch"})," \xe9 uma fun\xe7\xe3o baseada em promessa que permite fazer solicita\xe7\xf5es HTTP para APIs externas."]}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-jsx",children:"const getCustomJwtClaims = async ({ environmentVariables }) => {\n  const response = await fetch('https://api.example.com/data', {\n    headers: {\n      Authorization: `Bearer ${environmentVariables.API_KEY}`,\n    },\n  });\n\n  const data = await response.json();\n\n  return {\n    data,\n  };\n};\n"})}),"\n",(0,d.jsxs)(s.admonition,{type:"note",children:[(0,d.jsx)(s.p,{children:"Esteja ciente de que qualquer busca de dados externos pode introduzir lat\xeancia no processo de emiss\xe3o de tokens. Certifique-se de que a API externa seja confi\xe1vel e r\xe1pida o suficiente para atender aos seus requisitos."}),(0,d.jsx)(s.p,{children:"Al\xe9m disso:"}),(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsx)(s.li,{children:"Lide com erros e tempo limite adequadamente em seu script para evitar que o processo de emiss\xe3o de tokens seja bloqueado."}),"\n",(0,d.jsx)(s.li,{children:"Use cabe\xe7alhos de autoriza\xe7\xe3o adequados para proteger sua API externa contra acesso n\xe3o autorizado."}),"\n"]})]}),"\n",(0,d.jsx)(s.h2,{id:"passo-4-testar-o-script",children:"Passo 4: Testar o script"}),"\n",(0,d.jsxs)(s.p,{children:["Certifique-se de testar seu script antes de salv\xe1-lo. Clique na aba ",(0,d.jsx)(s.strong,{children:"Testar contexto"})," no lado direito da p\xe1gina para modificar a carga \xfatil do token simulado e o contexto de dados do usu\xe1rio para teste."]}),"\n",(0,d.jsxs)(s.p,{children:["Clique em ",(0,d.jsx)(s.strong,{children:"Executar teste"})," no canto superior direito do editor para executar o script com os dados simulados. A sa\xedda do script ser\xe1 exibida na gaveta ",(0,d.jsx)(s.strong,{children:"Resultado do Teste"}),"."]}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.img,{alt:"Testar script de JWT personalizado",src:o(26846).A+"",width:"2682",height:"1322"})}),"\n",(0,d.jsx)(s.admonition,{type:"note",children:(0,d.jsxs)(s.p,{children:["O resultado do teste \xe9 a sa\xedda da fun\xe7\xe3o ",(0,d.jsx)(s.code,{children:"getCustomJwtClaims"}),' com os dados simulados que voc\xea definiu ("reivindica\xe7\xf5es de token extras" obtidas ap\xf3s completar o passo 3 no ',(0,d.jsx)(s.a,{href:"/developers/custom-token-claims/#how-do-custom-token-claims-work",children:"diagrama de sequ\xeancia"}),"). A carga \xfatil real do token e o contexto de dados do usu\xe1rio ser\xe3o diferentes quando o script for executado no processo de emiss\xe3o de tokens."]})}),"\n",(0,d.jsxs)(s.p,{children:["Clique no bot\xe3o ",(0,d.jsx)(s.strong,{children:"Criar"})," para salvar o script. O script de reivindica\xe7\xf5es de token personalizadas ser\xe1 salvo e aplicado ao processo de emiss\xe3o de tokens de acesso."]})]})}function p(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,d.jsx)(s,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}},79509:(e,s,o)=>{o.d(s,{A:()=>r});const r=o.p+"assets/images/custom-jwt-detail-page-9dc0f24eaf27c30b0b8b505111355be4.png"},26846:(e,s,o)=>{o.d(s,{A:()=>r});const r=o.p+"assets/images/test-custom-jwt-script-312444d1b749a7a2be2b94f501dda3aa.png"},15658:(e,s,o)=>{o.d(s,{R:()=>i,x:()=>n});var r=o(30758);const d={},a=r.createContext(d);function i(e){const s=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function n(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),r.createElement(a.Provider,{value:s},e.children)}}}]);