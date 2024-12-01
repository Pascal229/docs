"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[51180],{41879:(e,o,r)=>{r.r(o),r.d(o,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>t});const s=JSON.parse('{"id":"connectors/connector-data-structure","title":"Estrutura de dados do conector","description":"Introdu\xe7\xe3o","source":"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/connectors/connector-data-structure.mdx","sourceDirName":"connectors","slug":"/connectors/connector-data-structure","permalink":"/pt-BR/connectors/connector-data-structure","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/pt-BR/docusaurus-plugin-content-docs/current/connectors/connector-data-structure.mdx","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"sidebar_position":5},"sidebar":"docsSidebar","previous":{"title":"Conectores empresariais","permalink":"/pt-BR/connectors/enterprise-connectors"},"next":{"title":"Conectores","permalink":"/pt-BR/connectors/"}}');var n=r(86070),a=r(15658);const i={sidebar_position:5},c="Estrutura de dados do conector",d={},t=[{value:"Introdu\xe7\xe3o",id:"introdu\xe7\xe3o",level:2},{value:"O que \xe9 um conector?",id:"o-que-\xe9-um-conector",level:3},{value:"Composi\xe7\xf5es",id:"composi\xe7\xf5es",level:2},{value:"Armazenamento local do conector: <em>ConnectorMetadata</em>",id:"armazenamento-local-do-conector-connectormetadata",level:2},{value:"id",id:"id",level:3},{value:"target (Nome do provedor de identidade)",id:"target-nome-do-provedor-de-identidade",level:3},{value:"type",id:"type",level:3},{value:"platform",id:"platform",level:3},{value:"name",id:"name",level:3},{value:"description",id:"description",level:3},{value:"logo",id:"logo",level:3},{value:"logoDark",id:"logodark",level:3},{value:"isStandard",id:"isstandard",level:3},{value:"readme",id:"readme",level:3},{value:"configTemplate",id:"configtemplate",level:3},{value:"Armazenamento remoto do conector: <em>Connector DB</em>",id:"armazenamento-remoto-do-conector-connector-db",level:2},{value:"id",id:"id-1",level:3},{value:"connectorId",id:"connectorid",level:3},{value:"metadata",id:"metadata",level:3},{value:"syncProfile",id:"syncprofile",level:3},{value:"config",id:"config",level:3},{value:"createdAt",id:"createdat",level:3}];function l(e){const o={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.header,{children:(0,n.jsx)(o.h1,{id:"estrutura-de-dados-do-conector",children:"Estrutura de dados do conector"})}),"\n",(0,n.jsx)(o.h2,{id:"introdu\xe7\xe3o",children:"Introdu\xe7\xe3o"}),"\n",(0,n.jsx)(o.h3,{id:"o-que-\xe9-um-conector",children:"O que \xe9 um conector?"}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.em,{children:"Conectores"})," desempenham um papel cr\xedtico no Logto. Com a ajuda deles, o Logto permite que os usu\xe1rios finais usem registro ou login sem senha e as capacidades de login com contas sociais. Com a crescente popularidade de sites e aplicativos, logins sem senha e sociais permitem que os usu\xe1rios evitem gerenciar in\xfameras contas e senhas."]}),"\n",(0,n.jsxs)(o.p,{children:["Siga nossos ",(0,n.jsx)(o.a,{href:"/connectors",children:"guias de conectores"})," se voc\xea quiser configurar um conector existente. Se voc\xea n\xe3o encontrar o conector que deseja configurar, pode desenvolv\xea-los seguindo os guias em ",(0,n.jsx)(o.a,{href:"/logto-oss/develop-your-connector",children:"desenvolver seu conector"}),"."]}),"\n",(0,n.jsx)(o.h2,{id:"composi\xe7\xf5es",children:"Composi\xe7\xf5es"}),"\n",(0,n.jsx)(o.p,{children:"Existem muitas propriedades nos dados do conector."}),"\n",(0,n.jsx)(o.p,{children:"Para tornar o carregamento e a atualiza\xe7\xe3o dos dados mais eficientes, armazenamos parte dos dados do conector que ser\xe3o modificados frequentemente no DB e o restante localmente."}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.em,{children:"Armazenamento local"}),", tamb\xe9m conhecido como ",(0,n.jsx)(o.a,{href:"./#connectors-remote-storage-connector-db",children:(0,n.jsx)(o.em,{children:"ConnectorMetadata"})}),", \xe9 um objeto que cont\xe9m propriedades fixas, como logotipo, tipo de conector, e assim por diante. (:face_with_monocle: Est\xe1 com dificuldade para entender essas propriedades? N\xe3o se preocupe, uma explica\xe7\xe3o detalhada vem a seguir!)"]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.em,{children:"Armazenamento remoto"})," \xe9 armazenado no DB devido \xe0s mudan\xe7as relativamente frequentes nesses dados."]}),"\n"]}),"\n",(0,n.jsxs)(o.h2,{id:"armazenamento-local-do-conector-connectormetadata",children:["Armazenamento local do conector: ",(0,n.jsx)(o.em,{children:"ConnectorMetadata"})]}),"\n",(0,n.jsx)(o.h3,{id:"id",children:"id"}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.em,{children:"id"})," \xe9 uma chave do tipo string ",(0,n.jsx)(o.em,{children:"\xfanica"})," para identificar um conector no Logto."]}),"\n",(0,n.jsx)(o.p,{children:"\xc9 atribu\xedda pelos desenvolvedores de cada conector e ser\xe1 carregada para o DB."}),"\n",(0,n.jsx)(o.h3,{id:"target-nome-do-provedor-de-identidade",children:"target (Nome do provedor de identidade)"}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.em,{children:"target"})," \xe9 uma string em min\xfasculas para distinguir a fonte de identidades sociais do conector social."]}),"\n",(0,n.jsx)(o.p,{children:'Os usu\xe1rios do Logto podem considerar essa vari\xe1vel como "Nome do provedor de identidade" para melhor compreens\xe3o.'}),"\n",(0,n.jsxs)(o.p,{children:["Por exemplo, seu ",(0,n.jsx)(o.em,{children:"target"})," deve ser ",(0,n.jsx)(o.em,{children:"google"})," se voc\xea fizer login no Logto com sua conta do Google. O valor de ",(0,n.jsx)(o.em,{children:"target"})," pode ser uma string arbitr\xe1ria n\xe3o vazia, mas incentivamos voc\xea a mant\xea-la direta, pois n\xe3o pode ser alterada. N\xc3O permitimos a exist\xeancia de m\xfaltiplos conectores com o mesmo ",(0,n.jsx)(o.em,{children:"target"})," e plataforma. Por outro lado, voc\xea pode ter conectores sociais para diferentes plataformas compartilhando o mesmo ",(0,n.jsx)(o.em,{children:"target"}),". Por exemplo, se os usu\xe1rios quiserem fazer login via ",(0,n.jsx)(o.em,{children:"WeChat"})," em seu telefone, um aplicativo nativo ",(0,n.jsx)(o.em,{children:"WeChat"})," \xe9 necess\xe1rio conforme o TOU do ",(0,n.jsx)(o.em,{children:"WeChat"}),"; ao mesmo tempo, um aplicativo web ",(0,n.jsx)(o.em,{children:"WeChat"})," tamb\xe9m \xe9 necess\xe1rio para permitir o login em aplicativos web. Esses dois aplicativos ",(0,n.jsx)(o.em,{children:"WeChat"})," compartilham o mesmo provedor de identidade e devem ter o mesmo target."]}),"\n",(0,n.jsxs)(o.p,{children:["Conclu\xedmos diferentes casos de uso e sugest\xf5es para os usu\xe1rios, j\xe1 que ",(0,n.jsx)(o.em,{children:"target"})," \xe9 um conceito complicado."]}),"\n",(0,n.jsxs)(o.table,{children:[(0,n.jsx)(o.thead,{children:(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.th,{}),(0,n.jsx)(o.th,{children:"Exemplo"}),(0,n.jsx)(o.th,{children:"Cen\xe1rio"}),(0,n.jsx)(o.th,{children:"Resultado"}),(0,n.jsx)(o.th,{children:"Recomenda?"})]})}),(0,n.jsxs)(o.tbody,{children:[(0,n.jsxs)(o.tr,{children:[(0,n.jsxs)(o.td,{children:["Diferentes IdPs e diferentes ",(0,n.jsx)(o.em,{children:"targets"})]}),(0,n.jsxs)(o.td,{children:["1. Conector GitHub (target: ",(0,n.jsx)(o.code,{children:"github"}),") ",(0,n.jsx)("br",{})," 2. Conector Google (target: ",(0,n.jsx)(o.code,{children:"google"}),")"]}),(0,n.jsx)(o.td,{children:"Um aplicativo que suporta login com conta do GitHub e do Google."}),(0,n.jsx)(o.td,{children:"Casos de uso mais comuns."}),(0,n.jsx)(o.td,{children:"\u2705"})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsxs)(o.td,{children:["Diferentes IdPs e o mesmo ",(0,n.jsx)(o.em,{children:"target"})]}),(0,n.jsxs)(o.td,{children:["1. Conector GitHub (target: ",(0,n.jsx)(o.code,{children:"github"}),") ",(0,n.jsx)("br",{})," 2. Conector Google (target: ",(0,n.jsx)(o.code,{children:"github"}),")"]}),(0,n.jsx)(o.td,{children:"N/A"}),(0,n.jsx)(o.td,{children:"\xc9 poss\xedvel que um usu\xe1rio fa\xe7a login em uma conta Logto que foi criada usando a conta GitHub de outro usu\xe1rio."}),(0,n.jsx)(o.td,{children:"\u274c"})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsxs)(o.td,{children:["O mesmo IdP e diferentes ",(0,n.jsx)(o.em,{children:"targets"})]}),(0,n.jsxs)(o.td,{children:["1. Conector GitHub (target: ",(0,n.jsx)(o.code,{children:"github"}),") ",(0,n.jsx)("br",{})," 2. Conector OAuth GitHub (target: ",(0,n.jsx)(o.code,{children:"github_oauth"}),")"]}),(0,n.jsx)(o.td,{children:"O conector GitHub \xe9 usado para o Aplicativo A, enquanto o conector OAuth GitHub foi criado especificamente para o Aplicativo B."}),(0,n.jsx)(o.td,{children:"Fazer login no Logto usando esses dois conectores diferentes sempre criar\xe1 contas Logto separadas - mesmo que o usu\xe1rio esteja usando a mesma conta GitHub."}),(0,n.jsx)(o.td,{children:"Dividir seu pool de usu\xe1rios \xe9 o \xfanico cen\xe1rio em que voc\xea precisaria usar ambos os conectores. No entanto, geralmente \xe9 considerado uma boa pr\xe1tica criar dois locat\xe1rios separados para lidar com esse caso de uso."})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsxs)(o.td,{children:["O mesmo IdP e o mesmo ",(0,n.jsx)(o.em,{children:"target"})]}),(0,n.jsxs)(o.td,{children:["1. Conector GitHub (target: ",(0,n.jsx)(o.code,{children:"github"}),") ",(0,n.jsx)("br",{})," 2. Conector OAuth GitHub (target: ",(0,n.jsx)(o.code,{children:"github"}),")"]}),(0,n.jsx)(o.td,{children:"N/A"}),(0,n.jsx)(o.td,{children:"Usar qualquer um desses dois conectores pode resultar no mesmo resultado exato."}),(0,n.jsx)(o.td,{children:"Criar dois conectores que essencialmente fazem a mesma coisa pode ser confuso para os usu\xe1rios finais e n\xe3o faz muito sentido. \xc9 melhor usar um conector que se encaixe no seu caso de uso espec\xedfico."})]})]})]}),"\n",(0,n.jsx)(o.h3,{id:"type",children:"type"}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.em,{children:"type"})," \xe9 a propriedade que registra o tipo do conector."]}),"\n",(0,n.jsx)(o.p,{children:"Definimos os conectores em tr\xeas tipos diferentes, com base em suas funcionalidades:"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.em,{children:"Social"}),": Conectores que podem acessar informa\xe7\xf5es do usu\xe1rio de m\xeddias sociais de terceiros com autoriza\xe7\xe3o dos usu\xe1rios finais."]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.em,{children:"SMS"}),": Conectores que permitem que os usu\xe1rios finais recebam mensagens de texto em seus telefones."]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.em,{children:"Email"}),": Conectores que podem ajudar a enviar emails para os usu\xe1rios finais."]}),"\n"]}),"\n",(0,n.jsx)(o.h3,{id:"platform",children:"platform"}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.em,{children:"platform"})," \xe9 usado para identificar para qual plataforma o conector foi constru\xeddo."]}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.em,{children:"platform"})," deve ser ",(0,n.jsx)(o.code,{children:"null"})," ou um dos seguintes valores do tipo string:"]}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.em,{children:"Native"}),": Conectores que funcionam SOMENTE para aplicativos m\xf3veis nativos."]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.em,{children:"Web"}),": Conectores que funcionam SOMENTE em aplicativos web de desktop."]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.em,{children:"Universal"}),": Conectores que podem funcionar em aplicativos web m\xf3veis e aplicativos web de desktop."]}),"\n"]}),"\n",(0,n.jsx)(o.admonition,{type:"note",children:(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.em,{children:"platform"})," de ",(0,n.jsx)(o.em,{children:"conectores de email"})," e ",(0,n.jsx)(o.em,{children:"conectores de SMS"})," deve sempre ser ",(0,n.jsx)(o.code,{children:"null"}),".",(0,n.jsx)("br",{}),"\nSOMENTE ",(0,n.jsx)(o.em,{children:"conectores sociais"})," podem ter valores ",(0,n.jsx)(o.em,{children:"platform"})," n\xe3o nulos."]})}),"\n",(0,n.jsx)(o.h3,{id:"name",children:"name"}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.em,{children:"name"})," \xe9 um objeto cujas chaves s\xe3o c\xf3digos de pa\xeds i18n e os valores s\xe3o o nome de exibi\xe7\xe3o dos conectores."]}),"\n",(0,n.jsx)(o.h3,{id:"description",children:"description"}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.em,{children:"description"})," tamb\xe9m \xe9 um objeto cujas chaves s\xe3o c\xf3digos de pa\xeds i18n e os valores s\xe3o breves descri\xe7\xf5es do conector."]}),"\n",(0,n.jsx)(o.admonition,{type:"note",children:(0,n.jsxs)(o.p,{children:["Para suportar a exibi\xe7\xe3o i18n no lado do cliente, armazenamos as propriedades ",(0,n.jsx)(o.em,{children:"name"})," (assim como ",(0,n.jsx)(o.em,{children:"description"}),") como um mapa, que usa c\xf3digos de pa\xeds como chave e o nome (ou descri\xe7\xe3o) em caracteres locais como valor."]})}),"\n",(0,n.jsx)(o.h3,{id:"logo",children:"logo"}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.em,{children:"logo"})," \xe9 um URL ou caminho relativo do logotipo do conector."]}),"\n",(0,n.jsx)(o.h3,{id:"logodark",children:"logoDark"}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.em,{children:"logoDark"})," \xe9 um URL ou caminho relativo ",(0,n.jsx)(o.em,{children:"nulo"})," do logotipo do conector em modo escuro."]}),"\n",(0,n.jsxs)(o.admonition,{type:"note",children:[(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.em,{children:"logo"})," \xe9 sempre obrigat\xf3rio, e ",(0,n.jsx)(o.em,{children:"logoDark"})," \xe9 opcional."]}),(0,n.jsxs)(o.p,{children:["Exibimos ",(0,n.jsx)(o.em,{children:"logo"})," no modo claro e ",(0,n.jsx)(o.em,{children:"logoDark"})," no modo escuro, se existir. Caso contr\xe1rio, ser\xe1 exibido ",(0,n.jsx)(o.em,{children:"logo"})," no modo escuro."]})]}),"\n",(0,n.jsx)(o.h3,{id:"isstandard",children:"isStandard"}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.em,{children:"isStandard"}),' \xe9 um atributo booleano OPCIONAL para identificar se o conector social \xe9 um conector "padr\xe3o". Voc\xea pode identificar um conector "padr\xe3o" pelo seu atributo ',(0,n.jsx)(o.code,{children:"isStandard"})," verdadeiro."]}),"\n",(0,n.jsxs)(o.admonition,{type:"note",children:[(0,n.jsx)(o.p,{children:'Logto s\xf3 suporta conectores sociais "padr\xe3o". Isso significa que todos os conectores de Email ou SMS do Logto N\xc3O s\xe3o "padr\xe3o".'}),(0,n.jsx)(o.p,{children:'Logto chama conectores constru\xeddos com base em protocolos abertos e padr\xe3o (por exemplo, OAuth, OIDC, SAML, etc.) de conectores "padr\xe3o". Espera-se que os usu\xe1rios do Logto construam v\xe1rias inst\xe2ncias em cada conector padr\xe3o com base nesse contexto. Por exemplo, suponha que o Logto j\xe1 tenha fornecido um conector padr\xe3o OAuth, os usu\xe1rios podem construir inst\xe2ncias "Conector OAuth GitHub", "Conector OAuth Google" e "Conector OAuth Facebook". Todos eles s\xe3o baseados no conector padr\xe3o OAuth do Logto.'}),(0,n.jsx)(o.p,{children:'Se voc\xea estiver familiarizado com o design de conectores do Logto, no m\xe1ximo UM conector de Email ou SMS pode existir ao mesmo tempo, o que significa que o Logto n\xe3o precisa de conectores de Email ou SMS "padr\xe3o" no est\xe1gio atual.'})]}),"\n",(0,n.jsx)(o.h3,{id:"readme",children:"readme"}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.em,{children:"readme"}),' \xe9 um caminho relativo do arquivo README markdown do conector cujos contextos aparecer\xe3o no "Admin Console" durante a configura\xe7\xe3o dos conectores.']}),"\n",(0,n.jsx)(o.h3,{id:"configtemplate",children:"configTemplate"}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.em,{children:"configTemplate"})," \xe9 um caminho relativo do exemplo de configura\xe7\xe3o do conector."]}),"\n",(0,n.jsxs)(o.h2,{id:"armazenamento-remoto-do-conector-connector-db",children:["Armazenamento remoto do conector: ",(0,n.jsx)(o.em,{children:"Connector DB"})]}),"\n",(0,n.jsx)(o.h3,{id:"id-1",children:"id"}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.em,{children:"id"}),", que funciona como chave prim\xe1ria do DB do conector, \xe9 uma chave do tipo string gerada aleatoriamente para identificar o conector no DB."]}),"\n",(0,n.jsx)(o.h3,{id:"connectorid",children:"connectorId"}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.em,{children:"connectorId"})," \xe9 uma chave do tipo string e \xe9 a \xdaNICA ponte para alinhar ",(0,n.jsx)(o.em,{children:"Connector DB"})," e ",(0,n.jsx)(o.em,{children:"ConnectorMetadata"}),". Para cada par de dados de DB de conector e m\xf3dulo de c\xf3digo de conector correspondentes, ",(0,n.jsx)(o.em,{children:"connectorId"})," sempre \xe9 igual a ",(0,n.jsxs)(o.a,{href:"#id",children:["metadata.",(0,n.jsx)(o.em,{children:"id"})]})," do m\xf3dulo de c\xf3digo."]}),"\n",(0,n.jsx)(o.h3,{id:"metadata",children:"metadata"}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.em,{children:"metadata"})," \xe9 um subconjunto de ",(0,n.jsx)(o.a,{href:"#connectors-local-storage-connectormetadata",children:"ConnectorMetadata"}),", que cont\xe9m atributos configur\xe1veis, ou seja, ",(0,n.jsx)(o.a,{href:"#logo",children:(0,n.jsx)(o.em,{children:"logo"})}),", ",(0,n.jsx)(o.a,{href:"#logodark",children:(0,n.jsx)(o.em,{children:"logoDark"})}),", ",(0,n.jsx)(o.a,{href:"#target",children:(0,n.jsx)(o.em,{children:"target"})})," e ",(0,n.jsx)(o.a,{href:"#name",children:(0,n.jsx)(o.em,{children:"name"})}),"."]}),"\n",(0,n.jsx)(o.h3,{id:"syncprofile",children:"syncProfile"}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.em,{children:"syncProfile"})," \xe9 um valor booleano para determinar o esquema de atualiza\xe7\xe3o do perfil do usu\xe1rio, padr\xe3o para ser FALSO."]}),"\n",(0,n.jsxs)(o.p,{children:["Se ",(0,n.jsx)(o.em,{children:"syncProfile"})," for FALSO, as informa\xe7\xf5es b\xe1sicas do usu\xe1rio do Logto (incluindo nome e avatar) ser\xe3o atualizadas apenas quando o usu\xe1rio se inscrever pela primeira vez no Logto atrav\xe9s deste conector. Caso contr\xe1rio, toda vez que os usu\xe1rios fizerem login no Logto atrav\xe9s do conector, o perfil da conta Logto ser\xe1 atualizado."]}),"\n",(0,n.jsx)(o.h3,{id:"config",children:"config"}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.em,{children:"config"})," pode ser um objeto arbitr\xe1rio n\xe3o vazio."]}),"\n",(0,n.jsxs)(o.p,{children:["\xc9 onde um conector armazena sua configura\xe7\xe3o. Cada conector tem diferentes propriedades em ",(0,n.jsx)(o.em,{children:"config"}),' e \xe9 obrigado a ser v\xe1lido (conectores t\xeam diferentes padr\xf5es para "v\xe1lido") antes de ser salvo no DB. SOMENTE aqueles ',(0,n.jsx)(o.em,{children:"config"})," que passaram na verifica\xe7\xe3o de validade podem ser atualizados para o DB, caso contr\xe1rio, haver\xe1 um erro."]}),"\n",(0,n.jsxs)(o.p,{children:["Os desenvolvedores s\xe3o obrigados a implementar uma prote\xe7\xe3o ",(0,n.jsx)(o.em,{children:"config"})," ao desenvolver seus pr\xf3prios conectores, veja ",(0,n.jsx)(o.a,{href:"/logto-oss/develop-your-connector",children:"desenvolver seu conector"})," para mais detalhes."]}),"\n",(0,n.jsxs)(o.p,{children:["Quer dar uma olhada em amostras de ",(0,n.jsx)(o.em,{children:"config"}),"? V\xe1 para ",(0,n.jsx)(o.a,{href:"/connectors",children:"conectores"})," ou a p\xe1gina de configura\xe7\xf5es de cada conector."]}),"\n",(0,n.jsxs)(o.admonition,{type:"note",children:[(0,n.jsxs)(o.p,{children:["Na vers\xe3o atual do Logto, apenas um conector ",(0,n.jsx)(o.em,{children:"Email/SMS"})," pode existir ao mesmo tempo, todos os outros conectores com o mesmo tipo s\xe3o automaticamente exclu\xeddos."]}),(0,n.jsxs)(o.p,{children:["A regra, conector de Email ou SMS \xfanico em funcionamento, n\xe3o se aplica aos conectores ",(0,n.jsx)(o.em,{children:"Social"}),".",(0,n.jsx)("br",{}),"\nEm outras palavras, voc\xea pode adicionar v\xe1rios conectores ",(0,n.jsx)(o.em,{children:"Social"}),"."]})]}),"\n",(0,n.jsx)(o.h3,{id:"createdat",children:"createdAt"}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.em,{children:"createdAt"})," \xe9 uma string de timestamp gerada automaticamente para rastrear o momento em que um conector \xe9 criado no DB."]})]})}function m(e={}){const{wrapper:o}={...(0,a.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},15658:(e,o,r)=>{r.d(o,{R:()=>i,x:()=>c});var s=r(30758);const n={},a=s.createContext(n);function i(e){const o=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function c(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),s.createElement(a.Provider,{value:o},e.children)}}}]);