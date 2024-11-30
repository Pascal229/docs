"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[27965],{65920:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>s,toc:()=>p});const s=JSON.parse('{"id":"developers/user-impersonation","title":"User impersonation","description":"Imagine Sarah, a support engineer at TechCorp, receives an urgent ticket from Alex, a customer who can\'t access a critical resource. To efficiently diagnose and resolve the issue, Sarah needs to see exactly what Alex sees in the system. This is where Logto\'s user impersonation feature comes in handy.","source":"@site/docs/developers/user-impersonation.mdx","sourceDirName":"developers","slug":"/developers/user-impersonation","permalink":"/developers/user-impersonation","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/docs/developers/user-impersonation.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"id":"user-impersonation","title":"User impersonation","sidebar_label":"User impersonation","sidebar_position":3},"sidebar":"docsSidebar","previous":{"title":"Create a custom token claims script","permalink":"/developers/custom-token-claims/create-script"},"next":{"title":"Signing keys","permalink":"/developers/signing-keys"}}');var o=t(86070),r=t(15658);const a={id:"user-impersonation",title:"User impersonation",sidebar_label:"User impersonation",sidebar_position:3},i="User impersonation",c={},p=[{value:"How it works?",id:"how-it-works",level:2},{value:"Step 1: Requesting impersonation",id:"step-1-requesting-impersonation",level:3},{value:"Step 2: Obtaining a subject token",id:"step-2-obtaining-a-subject-token",level:3},{value:"Step 3: Exchanging the subject token for an access token",id:"step-3-exchanging-the-subject-token-for-an-access-token",level:3},{value:"Example usage",id:"example-usage",level:2},{value:"<code>act</code> claim",id:"act-claim",level:2},{value:"Customizing token claims",id:"customizing-token-claims",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",mermaid:"mermaid",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"user-impersonation",children:"User impersonation"})}),"\n",(0,o.jsx)(n.p,{children:"Imagine Sarah, a support engineer at TechCorp, receives an urgent ticket from Alex, a customer who can't access a critical resource. To efficiently diagnose and resolve the issue, Sarah needs to see exactly what Alex sees in the system. This is where Logto's user impersonation feature comes in handy."}),"\n",(0,o.jsx)(n.p,{children:"User impersonation allows authorized users like Sarah to temporarily act on behalf of other users like Alex within the system. This powerful feature is invaluable for troubleshooting, providing customer support, and performing administrative tasks."}),"\n",(0,o.jsx)(n.h2,{id:"how-it-works",children:"How it works?"}),"\n",(0,o.jsx)(n.mermaid,{value:"sequenceDiagram\n    participant Sarah as Sarah's app\n    participant TechCorp as TechCorp's server\n    participant Logto as Logto Management API\n    participant LogtoToken as Logto token endpoint\n\n    Sarah->>TechCorp: POST /api/request-impersonation\n    Note over Sarah,TechCorp: Request to impersonate Alex\n\n    TechCorp->>Logto: POST /api/subject-tokens\n    Note over TechCorp,Logto: Request subject token for Alex\n\n    Logto--\x3e>TechCorp: Return subject token\n    TechCorp--\x3e>Sarah: Return subject token\n\n    Sarah->>LogtoToken: POST /oidc/token\n    Note over Sarah,LogtoToken: Exchange subject token for access token\n\n    LogtoToken--\x3e>Sarah: Return access token\n    Note over Sarah: Sarah can now access resources as Alex"}),"\n",(0,o.jsx)(n.p,{children:"The impersonation process involves three main steps:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Sarah requests impersonation through TechCorp's backend server"}),"\n",(0,o.jsx)(n.li,{children:"TechCorp's server obtains a subject token from Logto's Management API"}),"\n",(0,o.jsx)(n.li,{children:"Sarah's application exchanges this subject token for an access token"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Let's walk through how Sarah can use this feature to help Alex."}),"\n",(0,o.jsx)(n.h3,{id:"step-1-requesting-impersonation",children:"Step 1: Requesting impersonation"}),"\n",(0,o.jsx)(n.p,{children:"First, Sarah's support application needs to request impersonation from TechCorp's backend server."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Request (Sarah's application to TechCorp's server)"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'POST /api/request-impersonation HTTP/1.1\nHost: api.techcorp.com\nAuthorization: Bearer <Sarah\'s_access_token>\nContent-Type: application/json\n\n{\n  "userId": "alex123",\n  "reason": "Investigating resource access issue",\n  "ticketId": "TECH-1234"\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"In this API, the backend should perform proper authorization checks to ensure Sarah has the necessary permissions to impersonate Alex."}),"\n",(0,o.jsx)(n.h3,{id:"step-2-obtaining-a-subject-token",children:"Step 2: Obtaining a subject token"}),"\n",(0,o.jsxs)(n.p,{children:["TechCorp's server, upon validating Sarah's request, will then call Logto's ",(0,o.jsx)(n.a,{href:"/integrate-logto/interact-with-management-api",children:"Management API"})," to obtain a subject token."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Request (TechCorp's server to Logto's Management API)"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'POST /api/subject-tokens HTTP/1.1\nHost: techcorp.logto.app\nAuthorization: Bearer <TechCorp_m2m_access_token>\nContent-Type: application/json\n\n{\n  "userId": "alex123",\n  "context": {\n    "ticketId": "TECH-1234",\n    "reason": "Resource access issue",\n    "supportEngineerId": "sarah789"\n  }\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Response (Logto to TechCorp's server)"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "subjectToken": "sub_7h32jf8sK3j2",\n  "expiresIn": 600\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"TechCorp's server should then return this subject token to Sarah's application."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Response (TechCorp's server to Sarah's application)"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "subjectToken": "sub_7h32jf8sK3j2",\n  "expiresIn": 600\n}\n'})}),"\n",(0,o.jsx)(n.h3,{id:"step-3-exchanging-the-subject-token-for-an-access-token",children:"Step 3: Exchanging the subject token for an access token"}),"\n",(0,o.jsx)(n.p,{children:"Now, Sarah's application exchanges this subject token for an access token representing Alex, specifying the resource where the token will be used."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Request (Sarah's application to Logto's token endpoint)"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"POST /oidc/token HTTP/1.1\nHost: techcorp.logto.app\nContent-Type: application/x-www-form-urlencoded\n\ngrant_type=urn:ietf:params:oauth:grant-type:token-exchange\n&client_id=techcorp_support_app\n&scope=resource:read\n&subject_token=alx_7h32jf8sK3j2\n&subject_token_type=urn:ietf:params:oauth:token-type:access_token\n&resource=https://api.techcorp.com/customer-data\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Response (Logto to Sarah's application)"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "access_token": "eyJhbG...<truncated>",\n  "issued_token_type": "urn:ietf:params:oauth:token-type:access_token",\n  "token_type": "Bearer",\n  "expires_in": 3600,\n  "scope": "resource:read"\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"access_token"})," returned will be bound to the specified resource, ensuring it can only be used with TechCorp's customer data API."]}),"\n",(0,o.jsx)(n.h2,{id:"example-usage",children:"Example usage"}),"\n",(0,o.jsx)(n.p,{children:"Here's how Sarah might use this in a Node.js support application:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",children:"interface ImpersonationResponse {\n  subjectToken: string;\n  expiresIn: number;\n}\n\ninterface TokenExchangeResponse {\n  access_token: string;\n  issued_token_type: string;\n  token_type: string;\n  expires_in: number;\n  scope: string;\n}\n\nasync function impersonateUser(\n  userId: string,\n  clientId: string,\n  ticketId: string,\n  resource: string\n): Promise<string> {\n  try {\n    // Step 1 & 2: Request impersonation and get subject token\n    const impersonationResponse = await fetch(\n      'https://api.techcorp.com/api/request-impersonation',\n      {\n        method: 'POST',\n        headers: {\n          Authorization: \"Bearer <Sarah's_access_token>\",\n          'Content-Type': 'application/json',\n        },\n        body: JSON.stringify({\n          userId,\n          reason: 'Investigating resource access issue',\n          ticketId,\n        }),\n      }\n    );\n\n    if (!impersonationResponse.ok) {\n      throw new Error(`HTTP error occurred. Status: ${impersonationResponse.status}`);\n    }\n\n    const { subjectToken } = (await impersonationResponse.json()) as ImpersonationResponse;\n\n    // Step 3: Exchange subject token for access token\n    const tokenExchangeBody = new URLSearchParams({\n      grant_type: 'urn:ietf:params:oauth:grant-type:token-exchange',\n      client_id: clientId,\n      scope: 'openid profile resource.read',\n      subject_token: subjectToken,\n      subject_token_type: 'urn:ietf:params:oauth:token-type:access_token',\n      resource: resource,\n    });\n\n    const tokenExchangeResponse = await fetch('https://techcorp.logto.app/oidc/token', {\n      method: 'POST',\n      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },\n      body: tokenExchangeBody,\n    });\n\n    if (!tokenExchangeResponse.ok) {\n      throw new Error(`HTTP error! status: ${tokenExchangeResponse.status}`);\n    }\n\n    const tokenData = (await tokenExchangeResponse.json()) as TokenExchangeResponse;\n    return tokenData.access_token;\n  } catch (error) {\n    console.error('Impersonation failed:', error);\n    throw error;\n  }\n}\n\n// Sarah uses this function to impersonate Alex\nasync function performImpersonation(): Promise<void> {\n  try {\n    const accessToken = await impersonateUser(\n      'alex123',\n      'techcorp_support_app',\n      'TECH-1234',\n      'https://api.techcorp.com/customer-data'\n    );\n    console.log('Impersonation access token for Alex:', accessToken);\n  } catch (error) {\n    console.error('Failed to perform impersonation:', error);\n  }\n}\n\n// Execute the impersonation\nvoid performImpersonation()\n"})}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"The subject token is short-lived and for one-time-use."}),"\n",(0,o.jsxs)(n.li,{children:["The impersonation access token doesn't come with a ",(0,o.jsx)(n.a,{href:"https://auth.wiki/refresh-token",children:"refresh token"}),". Sarah will need to repeat this process if the token expires before she resolves Alex's issue."]}),"\n",(0,o.jsx)(n.li,{children:"TechCorp's backend server must implement proper authorization checks to ensure only authorized support staff like Sarah can request impersonation."}),"\n"]})}),"\n",(0,o.jsxs)(n.h2,{id:"act-claim",children:[(0,o.jsx)(n.code,{children:"act"})," claim"]}),"\n",(0,o.jsxs)(n.p,{children:["When using the token exchange flow for impersonation, the issued access token can include an additional ",(0,o.jsx)(n.code,{children:"act"}),' (actor) claim. This claim represents the identity of the "acting party" - in our example, Sarah, who is performing the impersonation.']}),"\n",(0,o.jsxs)(n.p,{children:["To include the ",(0,o.jsx)(n.code,{children:"act"})," claim, Sarah's application needs to provide an ",(0,o.jsx)(n.code,{children:"actor_token"})," in the token exchange request. This token should be a valid access token for Sarah with the ",(0,o.jsx)(n.code,{children:"openid"})," scope. Here's how to include it in the token exchange request:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"POST /oidc/token HTTP/1.1\nHost: techcorp.logto.app\nContent-Type: application/x-www-form-urlencoded\n\ngrant_type=urn:ietf:params:oauth:grant-type:token-exchange\n&client_id=techcorp_support_app\n&scope=resource:read\n&subject_token=alx_7h32jf8sK3j2\n&subject_token_type=urn:ietf:params:oauth:token-type:access_token\n&actor_token=sarah_access_token\n&actor_token_type=urn:ietf:params:oauth:token-type:access_token\n&resource=https://api.techcorp.com/customer-data\n"})}),"\n",(0,o.jsxs)(n.p,{children:["If an ",(0,o.jsx)(n.code,{children:"actor_token"})," is provided, the resulting access token will contain an ",(0,o.jsx)(n.code,{children:"act"})," claim like this:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "aud": "https://api.techcorp.com",\n  "iss": "https://techcorp.logto.app",\n  "exp": 1443904177,\n  "sub": "alex123",\n  "act": {\n    "sub": "sarah789"\n  }\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["This ",(0,o.jsx)(n.code,{children:"act"})," claim clearly indicates that Sarah (sarah789) is acting on behalf of Alex (alex123). The ",(0,o.jsx)(n.code,{children:"act"})," claim can be useful for auditing and tracking impersonation actions."]}),"\n",(0,o.jsx)(n.h2,{id:"customizing-token-claims",children:"Customizing token claims"}),"\n",(0,o.jsxs)(n.p,{children:["Logto allows you to ",(0,o.jsx)(n.a,{href:"/developers/custom-token-claims",children:"customize the token claims"})," for impersonation tokens. This can be useful for adding additional context or metadata to the impersonation process, such as the reason for impersonation or the associated support ticket."]}),"\n",(0,o.jsxs)(n.p,{children:["When TechCorp's server requests a subject token from Logto's Management API, it can include a ",(0,o.jsx)(n.code,{children:"context"})," object:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "userId": "alex123",\n  "context": {\n    "ticketId": "TECH-1234",\n    "reason": "Resource access issue",\n    "supportEngineerId": "sarah789"\n  }\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["This ",(0,o.jsx)(n.a,{href:"/developers/custom-token-claims/create-script#context-only-available-for-user-access-token",children:"context"})," can then be used in a ",(0,o.jsx)(n.code,{children:"getCustomJwtClaims()"})," function to add specific claims to the final access token. Here's an example of how this might be implemented:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"const getCustomJwtClaims = async ({ token, context, environmentVariables }) => {\n  if (context.grant?.type === 'urn:ietf:params:oauth:grant-type:token-exchange') {\n    const { ticketId, reason, supportEngineerId } = context.grant.subjectTokenContext;\n    return {\n      impersonation_context: {\n        ticket_id: ticketId,\n        reason: reason,\n        support_engineer: supportEngineerId,\n      },\n    };\n  }\n  return {};\n};\n"})}),"\n",(0,o.jsx)(n.p,{children:"The resulting access token that Sarah receives might look like this:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "sub": "alex123",\n  "aud": "https://api.techcorp.com/customer-data",\n  "impersonation_context": {\n    "ticket_id": "TECH-1234",\n    "reason": "Resource access issue",\n    "support_engineer": "sarah789"\n  }\n  // ... other standard claims\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"By customizing access token claims in this way, TechCorp can include valuable information about the impersonation context, making it easier to audit and understand impersonation activities in their system."}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:"Be cautious when adding custom claims to your tokens. Avoid including sensitive information that could pose security risks if the token is intercepted or leaked. The JWTs are signed but not encrypted, so the claims are visible to anyone with access to the token."})})]})}function l(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},15658:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>i});var s=t(30758);const o={},r=s.createContext(o);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);