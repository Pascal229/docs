"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[17040],{47468:(e,n,t)=>{t.d(n,{Ay:()=>a,RM:()=>s});var i=t(86070),o=t(15658);const s=[{value:"Register SendGrid account",id:"register-sendgrid-account",level:3},{value:"Verify senders",id:"verify-senders",level:3},{value:"Create API keys",id:"create-api-keys",level:3},{value:"Configure your connector",id:"configure-your-connector",level:3},{value:"Test SendGrid Email connector",id:"test-sendgrid-email-connector",level:4},{value:"Config types",id:"config-types",level:4}];function r(e){const n={a:"a",code:"code",em:"em",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h3,{id:"register-sendgrid-account",children:"Register SendGrid account"}),"\n",(0,i.jsxs)(n.p,{children:["Create a new account at ",(0,i.jsx)(n.a,{href:"https://app.sendgrid.com/",children:"SendGrid website"}),". You may skip this step if you've already registered an account."]}),"\n",(0,i.jsx)(n.h3,{id:"verify-senders",children:"Verify senders"}),"\n",(0,i.jsxs)(n.p,{children:["Go to the ",(0,i.jsx)(n.a,{href:"https://app.sendgrid.com/",children:"SendGrid console page"})," and sign in with your SendGrid account."]}),"\n",(0,i.jsx)(n.p,{children:"Senders indicate the addresses our verification code email will be sent from. In order to send emails via the SendGrid mail server, you need to verify at least one sender."}),"\n",(0,i.jsxs)(n.p,{children:["Starting from the ",(0,i.jsx)(n.a,{href:"https://app.sendgrid.com/",children:"SendGrid console page"}),', go to "Settings" -> "Sender Authentication" from the sidebar.']}),"\n",(0,i.jsx)(n.p,{children:'Domain Authentication is recommended but not obligatory. You can click "Get Started" in "Authenticate Your Domain" card and follow the upcoming guide to link and verify a sender to SendGrid.'}),"\n",(0,i.jsx)(n.p,{children:'By clicking the "Verify a Single Sender" button in the panel, you are now focusing on a form requiring some critical information to create a sender. Follow the guide, fill out all these fields, and hit the "Create" button.'}),"\n",(0,i.jsx)(n.p,{children:"After the single sender is created, an email with a verification link should be sent to your sender's email address. Go to your mailbox, find the verification mail and finish verifying the single sender by clicking the link given in the email. You can now send emails via SendGrid connector using the sender you've just verified."}),"\n",(0,i.jsx)(n.h3,{id:"create-api-keys",children:"Create API keys"}),"\n",(0,i.jsxs)(n.p,{children:["Let's start from the ",(0,i.jsx)(n.a,{href:"https://app.sendgrid.com/",children:"SendGrid console page"}),', go to "Settings" -> "API Keys" from the sidebar.']}),"\n",(0,i.jsxs)(n.p,{children:['Click the "Create API Key" in the top-right corner of the API Keys page. Type in the name of the API key and customize "API Key Permission" per your use case. A global ',(0,i.jsx)(n.code,{children:"Full Access"})," or ",(0,i.jsx)(n.code,{children:"Restricted Access"})," with full access to Mail Send is required before sending emails with this API key."]}),"\n",(0,i.jsxs)(n.p,{children:["The API Key is presented to you on the screen as soon as you finished the ",(0,i.jsx)(n.em,{children:"Create API Key"})," process. You should save this API Key somewhere safe because this is the only chance that you can see it."]}),"\n",(0,i.jsx)(n.h3,{id:"configure-your-connector",children:"Configure your connector"}),"\n",(0,i.jsxs)(n.p,{children:["Fill out the ",(0,i.jsx)(n.code,{children:"apiKey"}),' field with the API Key created in "Create API keys" section.']}),"\n",(0,i.jsxs)(n.p,{children:["Fill out the ",(0,i.jsx)(n.code,{children:"fromEmail"})," and ",(0,i.jsx)(n.code,{children:"fromName"})," fields with the senders' ",(0,i.jsx)(n.em,{children:"From Address"})," and ",(0,i.jsx)(n.em,{children:"Nickname"}),". You can find the sender's details on the ",(0,i.jsx)(n.a,{href:"https://mc.sendgrid.com/senders",children:'"Sender Management" page'}),". ",(0,i.jsx)(n.code,{children:"fromName"})," is OPTIONAL, so you can skip filling it."]}),"\n",(0,i.jsx)(n.p,{children:"You can add multiple SendGrid mail connector templates for different cases. Here is an example of adding a single template:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Fill out the ",(0,i.jsx)(n.code,{children:"subject"})," field, which works as the title of emails."]}),"\n",(0,i.jsxs)(n.li,{children:["Fill out the ",(0,i.jsx)(n.code,{children:"content"})," field with arbitrary string-typed contents. Do not forget to leave the ",(0,i.jsx)(n.code,{children:"{{code}}"})," placeholder for the random verification code."]}),"\n",(0,i.jsxs)(n.li,{children:["Fill out ",(0,i.jsx)(n.code,{children:"usageType"})," field with either ",(0,i.jsx)(n.code,{children:"Register"}),", ",(0,i.jsx)(n.code,{children:"SignIn"}),", ",(0,i.jsx)(n.code,{children:"ForgotPassword"}),", ",(0,i.jsx)(n.code,{children:"Generic"})," for different use cases."]}),"\n",(0,i.jsxs)(n.li,{children:["Fill out ",(0,i.jsx)(n.code,{children:"type"})," field with either ",(0,i.jsx)(n.code,{children:"text/plain"})," or ",(0,i.jsx)(n.code,{children:"text/html"})," for different types of content."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["In order to enable full user flows, templates with usageType ",(0,i.jsx)(n.code,{children:"Register"}),", ",(0,i.jsx)(n.code,{children:"SignIn"}),", ",(0,i.jsx)(n.code,{children:"ForgotPassword"})," and ",(0,i.jsx)(n.code,{children:"Generic"})," are required."]}),"\n",(0,i.jsx)(n.p,{children:"Here is an example of SendGrid connector template JSON."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsonc",children:'[\n  {\n    "subject": "<register-template-subject>",\n    "content": "<Logto: Your verification code is {{code}}. (register template)>",\n    "usageType": "Register",\n    "type": "text/plain",\n  },\n  {\n    "subject": "<sign-in-template-subject>",\n    "content": "<Logto: Your verification code is {{code}}. (sign-in template)>",\n    "usageType": "SignIn",\n    "type": "text/plain",\n  },\n  {\n    "subject": "<forgot-password-template-subject>",\n    "content": "<Logto: Your verification code is {{code}}. (forgot-password template)>",\n    "usageType": "ForgotPassword",\n    "type": "text/plain",\n  },\n  {\n    "subject": "<generic-template-subject>",\n    "content": "<Logto: Your verification code is {{code}}. (generic template)>",\n    "usageType": "Generic",\n    "type": "text/plain",\n  },\n]\n'})}),"\n",(0,i.jsx)(n.h4,{id:"test-sendgrid-email-connector",children:"Test SendGrid Email connector"}),"\n",(0,i.jsx)(n.p,{children:'You can type in an email address and click on "Send" to see whether the settings can work before "Save and Done".'}),"\n",(0,i.jsx)(n.p,{children:"That's it. Don't forget to enable connector in sign-in experience."}),"\n",(0,i.jsx)(n.h4,{id:"config-types",children:"Config types"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Type"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"apiKey"}),(0,i.jsx)(n.td,{children:"string"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"fromEmail"}),(0,i.jsx)(n.td,{children:"string"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"fromName"}),(0,i.jsx)(n.td,{children:"string (OPTIONAL)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"templates"}),(0,i.jsx)(n.td,{children:"Template[]"})]})]})]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Template Properties"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Enum values"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"subject"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"N/A"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"content"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"N/A"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"usageType"}),(0,i.jsx)(n.td,{children:"enum string"}),(0,i.jsx)(n.td,{children:"'Register' | 'SignIn' | 'ForgotPassword' | 'Generic'"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"type"}),(0,i.jsx)(n.td,{children:"enum string"}),(0,i.jsx)(n.td,{children:"'text/plain' | 'text/html'"})]})]})]})]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},575:(e,n,t)=>{t.d(n,{Ay:()=>k,RM:()=>S});var i=t(86070),o=t(15658);function s(e){const n={a:"a",admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"In traditional web applications, the user authentication information will be stored in the user session."}),"\n",(0,i.jsxs)(n.p,{children:["Logto SDK provides a ",(0,i.jsx)(n.code,{children:"Storage"})," interface, you can implement a ",(0,i.jsx)(n.code,{children:"Storage"})," adapter based on your web framework so that the Logto SDK can store user authentication information in the session."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"We do NOT recommend using cookie-based sessions, as user authentication information stored by Logto may exceed the cookie size limit.\nIn this example, we use memory-based sessions. You can use Redis, MongoDB, and other technologies in production to store sessions as needed."})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"Storage"})," type in the Logto SDK is as follows:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",metastring:'title="github.com/logto-io/client/storage.go"',children:"package client\n\ntype Storage interface {\n\tGetItem(key string) string\n\tSetItem(key, value string)\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["We use ",(0,i.jsx)(n.a,{href:"https://github.com/gin-contrib/sessions",children:"github.com/gin-contrib/sessions"})," middleware as an example to demonstrate this process."]}),"\n",(0,i.jsx)(n.p,{children:"Apply the middleware to the application, so that we can get the user session by the user request context in the route handler:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",metastring:'title="main.go"',children:'package main\n\nimport (\n\t"github.com/gin-contrib/sessions"\n\t"github.com/gin-contrib/sessions/memstore"\n\t"github.com/gin-gonic/gin"\n\t"github.com/logto-io/go/client"\n)\n\nfunc main() {\n\trouter := gin.Default()\n\n\t// We use memory-based session in this example\n\tstore := memstore.NewStore([]byte("your session secret"))\n\trouter.Use(sessions.Sessions("logto-session", store))\n\n\trouter.GET("/", func(ctx *gin.Context) {\n\t\t// Get user session\n\t\tsession := sessions.Default(ctx)\n\t\t// ...\n\t\tctx.String(200, "Hello Logto!")\n\t})\n\trouter.Run(":3000")\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Create a ",(0,i.jsx)(n.code,{children:"session_storage.go"})," file, define a ",(0,i.jsx)(n.code,{children:"SessionStorage"})," and implement the Logto SDK's ",(0,i.jsx)(n.code,{children:"Storage"})," interfaces:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",metastring:'title="session_storage.go"',children:'package main\n\nimport (\n\t"github.com/gin-contrib/sessions"\n)\n\ntype SessionStorage struct {\n\tsession sessions.Session\n}\n\nfunc (storage *SessionStorage) GetItem(key string) string {\n\tvalue := storage.session.Get(key)\n\tif value == nil {\n\t\treturn ""\n\t}\n\treturn value.(string)\n}\n\nfunc (storage *SessionStorage) SetItem(key, value string) {\n\tstorage.session.Set(key, value)\n\tstorage.session.Save()\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"Now, in the route handler, you can create a session storage for Logto:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:"session := sessions.Default(ctx)\nsessionStorage := &SessionStorage{session: session}\n"})})]})}function r(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}function a(e){const n={a:"a",admonition:"admonition",li:"li",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The following demonstration is built upon the ",(0,i.jsx)(n.a,{href:"https://gin-gonic.com",children:"Gin Web Framework"}),". You may also integrate Logto into other frameworks by taking the same steps."]}),"\n",(0,i.jsxs)(n.li,{children:["The Go sample project is available on our ",(0,i.jsx)(n.a,{href:"https://github.com/logto-io/go/tree/master/gin-sample",children:"Go SDK repo"}),"."]}),"\n"]})})}function c(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}function l(e){const n={code:"code",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"When the user signs in successfully on the Logto sign-in page, Logto will redirect the user to the Redirect URI."}),"\n",(0,i.jsxs)(n.p,{children:["Since the redirect URI is ",(0,i.jsx)(n.code,{children:"http://localhost:3000/callback"}),", we add the ",(0,i.jsx)(n.code,{children:"/callback"})," route to handle the callback after signing in."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",metastring:'title="main.go"',children:'func main() {\n\t// ...\n\n\t// Add a route for handling sign-in callback requests\n\trouter.GET("/callback", func(ctx *gin.Context) {\n\t\tsession := sessions.Default(ctx)\n\t\tlogtoClient := client.NewLogtoClient(\n\t\t\tlogtoConfig,\n\t\t\t&SessionStorage{session: session},\n\t\t)\n\n\t\t// The sign-in callback request is handled by Logto\n\t\terr := logtoClient.HandleSignInCallback(ctx.Request)\n\t\tif err != nil {\n\t\t\tctx.String(http.StatusInternalServerError, err.Error())\n\t\t\treturn\n\t\t}\n\n\t\t// Jump to the page specified by the developer.\n\t\t// This example takes the user back to the home page.\n\t\tctx.Redirect(http.StatusTemporaryRedirect, "/")\n\t})\n\n\t// ...\n}\n'})})]})}function d(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}function h(e){const n={code:"code",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["After the redirect URI is configured, we add a ",(0,i.jsx)(n.code,{children:"sign-in"})," route to handle the sign-in request and also add an sign-in link on the home page:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",metastring:'title="main.go"',children:'func main() {\n\t// ...\n\n\t// Add a link to perform a sign-in request on the home page\n\trouter.GET("/", func(ctx *gin.Context) {\n\t\t// ...\n\t\thomePage := `<h1>Hello Logto</h1>` +\n\t\t\t"<div>" + authState + "</div>" +\n\t\t\t// Add link\n\t\t\t`<div><a href="/sign-in">Sign In</a></div>`\n\n\t\tctx.Data(http.StatusOK, "text/html; charset=utf-8", []byte(homePage))\n\t})\n\n\t// Add a route for handling sign-in requests\n\trouter.GET("/sign-in", func(ctx *gin.Context) {\n\t\tsession := sessions.Default(ctx)\n\t\tlogtoClient := client.NewLogtoClient(\n\t\t\tlogtoConfig,\n\t\t\t&SessionStorage{session: session},\n\t\t)\n\n\t\t// The sign-in request is handled by Logto.\n\t\t// The user will be redirected to the Redirect URI on signed in.\n\t\tsignInUri, err := logtoClient.SignIn("http://localhost:3000/callback")\n\t\tif err != nil {\n\t\t\tctx.String(http.StatusInternalServerError, err.Error())\n\t\t\treturn\n\t\t}\n\n\t\t// Redirect the user to the Logto sign-in page.\n\t\tctx.Redirect(http.StatusTemporaryRedirect, signInUri)\n\t})\n\n\t// ...\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Now, when your user visit ",(0,i.jsx)(n.code,{children:"http://localhost:3000/sign-in"}),", the user will be redirected to the Logto sign-in page."]})]})}function g(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}function u(e){const n={code:"code",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Similar to the sign-in flow, when the user signs out, Logto will redirect the user to the post sign-out redirect URI."}),"\n",(0,i.jsxs)(n.p,{children:["Now, let's add the ",(0,i.jsx)(n.code,{children:"sign-out"})," route to handle the sign-out request and also add a sign-out link on the home page:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",metastring:'title="main.go"',children:'func main() {\n\t// ...\n\n\t// Add a link to perform a sign-out request on the home page\n\trouter.GET("/", func(ctx *gin.Context) {\n\t\t// ...\n\t\thomePage := `<h1>Hello Logto</h1>` +\n\t\t\t"<div>" + authState + "</div>" +\n\t\t\t`<div><a href="/sign-in">Sign In</a></div>` +\n\t\t\t// Add link\n\t\t\t`<div><a href="/sign-out">Sign Out</a></div>`\n\n\t\tctx.Data(http.StatusOK, "text/html; charset=utf-8", []byte(homePage))\n\t})\n\n\t// Add a route for handling signing out requests\n\trouter.GET("/sign-out", func(ctx *gin.Context) {\n\t\tsession := sessions.Default(ctx)\n\t\tlogtoClient := client.NewLogtoClient(\n\t\t\tlogtoConfig,\n\t\t\t&SessionStorage{session: session},\n\t\t)\n\n\t\t// The sign-out request is handled by Logto.\n\t\t// The user will be redirected to the Post Sign-out Redirect URI on signed out.\n\t\tsignOutUri, signOutErr := logtoClient.SignOut("http://localhost:3000")\n\n\t\tif signOutErr != nil {\n\t\t\tctx.String(http.StatusOK, signOutErr.Error())\n\t\t\treturn\n\t\t}\n\n\t\tctx.Redirect(http.StatusTemporaryRedirect, signOutUri)\n\t})\n\n\t// ...\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"After the user makes a signing-out request, Logto will clear all user authentication information in the session."})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}var m=t(8670);const x=[...m.RM];function j(e){const n={code:"code",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"First, create a Logto config:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",metastring:'title="main.go"',children:'func main() {\n\t// ...\n\tlogtoConfig := &client.LogtoConfig{\n\t\tEndpoint:  "<your-logto-endpoint>", // E.g. http://localhost:3001\n\t\tAppId:     "<your-application-id>",\n\t\tAppSecret: "<your-application-secret>",\n\t}\n\t// ...\n}\n'})}),"\n",(0,i.jsx)(m.Ay,{}),"\n",(0,i.jsxs)(n.p,{children:["Then, you can create a ",(0,i.jsx)(n.code,{children:"LogtoClient"})," for each user request with the Logto config above:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",metastring:'title="main.go"',children:'func main() {\n\t// ...\n\n\trouter.GET("/", func(ctx *gin.Context) {\n\t\t// Create LogtoClient\n\t\tsession := sessions.Default(ctx)\n\t\tlogtoClient := client.NewLogtoClient(\n\t\t\tlogtoConfig,\n\t\t\t&SessionStorage{session: session},\n\t\t)\n\n\t\t// Use Logto to control the content of the home page\n\t\tauthState := "You are not logged in to this website. :("\n\n\t\tif logtoClient.IsAuthenticated() {\n\t\t\tauthState = "You are logged in to this website! :)"\n\t\t}\n\n\t\thomePage := `<h1>Hello Logto</h1>` +\n\t\t\t"<div>" + authState + "</div>"\n\n\t\tctx.Data(http.StatusOK, "text/html; charset=utf-8", []byte(homePage))\n\t})\n\n\t// ...\n}\n'})})]})}function f(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(j,{...e})}):j(e)}function y(e){const n={code:"code",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Execute in the project root directory:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"go get github.com/logto-io/go\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Add the ",(0,i.jsx)(n.code,{children:"github.com/logto-io/go/client"})," package to your application code:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",metastring:'title="main.go"',children:'// main.go\npackage main\n\nimport (\n\t"github.com/gin-gonic/gin"\n\t// Add dependency\n\t"github.com/logto-io/go/client"\n)\n\nfunc main() {\n\trouter := gin.Default()\n\trouter.GET("/", func(c *gin.Context) {\n\t\tc.String(200, "Hello Logto!")\n\t})\n\trouter.Run(":3000")\n}\n'})})]})}function b(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(y,{...e})}):y(e)}var w=t(92409);const S=[{value:"Installation",id:"installation",level:3},{value:"Create a session storage",id:"create-a-session-storage",level:3},{value:"Init LogtoClient",id:"init-logtoclient",level:3},...x,{value:"Implement sign-in route",id:"implement-sign-in-route",level:3},{value:"Implement the callback route",id:"implement-the-callback-route",level:3},{value:"Implement sign-out route",id:"implement-sign-out-route",level:3},...w.RM];function v(e){const n={h3:"h3",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(c,{}),"\n",(0,i.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,i.jsx)(b,{}),"\n",(0,i.jsx)(n.h3,{id:"create-a-session-storage",children:"Create a session storage"}),"\n",(0,i.jsx)(r,{}),"\n",(0,i.jsx)(n.h3,{id:"init-logtoclient",children:"Init LogtoClient"}),"\n",(0,i.jsx)(f,{}),"\n",(0,i.jsx)(n.h3,{id:"implement-sign-in-route",children:"Implement sign-in route"}),"\n",(0,i.jsx)(g,{}),"\n",(0,i.jsx)(n.h3,{id:"implement-the-callback-route",children:"Implement the callback route"}),"\n",(0,i.jsx)(d,{}),"\n",(0,i.jsx)(n.h3,{id:"implement-sign-out-route",children:"Implement sign-out route"}),"\n",(0,i.jsx)(p,{}),"\n",(0,i.jsx)(w.Ay,{sdk:"Go"})]})}function k(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(v,{...e})}):v(e)}},55158:(e,n,t)=>{t.d(n,{Ay:()=>a,RM:()=>s});var i=t(86070),o=t(15658);const s=[];function r(e){const n={img:"img",p:"p",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:["To add or change ",e.connectorType,' connector, go to the "Connector" tab in the Admin Console,\nthen click on "Email and SMS connectors". From there, click "Set up" or go to detail page and\nclick "Change ',e.connectorType,' connector".']})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Connector tab",src:t(73977).A+"",width:"4164",height:"1290"})}),"\n",(0,i.jsxs)("p",{children:['In the openning modal, select "',e.connector,'" and click "Next".']}),"\n",(0,i.jsx)(n.p,{children:"On the next page, you will see a two-column layout with the README content on the left and configuration on the right."}),"\n",(0,i.jsx)(n.p,{children:"Feel free to follow the README file in place or read the following section to complete the configuration process. If you follow the in-place guide, you can skip the next section."})]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},23471:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>r});var i=t(86070),o=t(15658);const s=t.p+"assets/images/create-application-modal-136b6119e66a20d765a416417aeeefda.png",r=[{value:"Choose your application type",id:"choose-your-application-type",level:3},{value:"Enter application name",id:"enter-application-name",level:3}];function a(e){const n={code:"code",h3:"h3",img:"img",p:"p",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"In you browser, open a new tab and enter the link of Logto Admin Console."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Get Started",src:t(13885).A+"",width:"2354",height:"588"})}),"\n",(0,i.jsxs)(n.p,{children:['Once the page is loaded, in the "Get Started" section click the ',(0,i.jsx)(n.code,{children:"View all"})," link to open the application framework list page."]}),"\n",(0,i.jsx)(n.h3,{id:"choose-your-application-type",children:"Choose your application type"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Framework List",src:t(81684).A+"",width:"3626",height:"2804"})}),"\n",(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:['In the opening modal, scroll to the "',e.type,'" section or filter all the available "\n',e.type,'" frameworks using the quick filter checkboxes on the left.']})}),"\n",(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:["Click the"," ","\n",e.framework.split("/").map((e=>`"${e.trim()}"`)).join(" / ")," ","\nframework card to start creating your application."]})}),"\n",(0,i.jsx)(n.h3,{id:"enter-application-name",children:"Enter application name"}),"\n",(0,i.jsx)("center",{children:(0,i.jsx)("img",{src:s,alt:"Create Application modal",width:"700"})}),"\n",(0,i.jsx)(n.p,{children:'Enter the application name, e.g., "Bookstore," and click "Create application."'}),"\n",(0,i.jsx)(n.p,{children:"\ud83c\udf89 Ta-da! You just created your first application in Logto. You'll see a congrats page which includes a detailed integration guide. Follow the guide to see what the experience will be in your application."})]})}function c(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},7968:(e,n,t)=>{t.d(n,{Ay:()=>a,RM:()=>s});var i=t(86070),o=t(15658);const s=[];function r(e){const n={admonition:"admonition",img:"img",p:"p",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:'Switch to the "Sign-in experience" tab, then click the "Sign-up and sign-in" tab.'}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"If it's the first time you enter the tab, you will see a quick introduction about Sign-in Experience and its basic configuration."})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Sign-in Experience tab",src:t(16906).A+"",width:"3502",height:"1794"})}),"\n",(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:['Select "',e.passwordlessSignUpIdentifier,'" or "Email address or phone number" for the "Sign-up\nidentifier" to provide sign-up for ',e.connectorType," passwordless sign-in, which may increase\nyour conversion rate."]})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Save changes",src:t(3466).A+"",width:"2474",height:"188"})}),"\n",(0,i.jsx)(n.p,{children:'Finally, click "Save changes" on the bottom right corner.'})]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},4914:(e,n,t)=>{t.d(n,{Ay:()=>a,RM:()=>s});var i=t(86070),o=t(15658);const s=[];function r(e){const n={a:"a",admonition:"admonition",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:["\n","\n",(0,i.jsx)(n.admonition,{title:"For our new friends",type:"info",children:(0,i.jsxs)(n.p,{children:["Every app needs authentication and authorization. ",(0,i.jsx)(n.a,{href:"https://logto.io",children:"Logto"})," is an Auth0 alternative designed for modern apps and SaaS products."]})}),"\n",(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:["In this article, we will go through the steps to quickly build the ",e.connector," sign-in\nexperience (user authentication) with ",(0,i.jsx)("a",{href:e.link,target:"_blank",rel:"noopener",children:e.sdk})," and\xa0\n",(0,i.jsx)("a",{href:"https://logto.io",target:"_blank",rel:"noopener",children:"Logto"}),"."]})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Prerequisites"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["A running Logto instance. Check out the ",(0,i.jsx)(n.a,{href:"/introduction",children:"introduction page"})," to get started."]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)("span",{children:["Basic knowledge of ",(0,i.jsx)("a",{href:e.link,target:"_blank",rel:"noopener",children:e.sdk}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)("span",{children:["A usable ",e.connector," account."]}),"\n"]}),"\n"]}),"\n"]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},37448:(e,n,t)=>{t.d(n,{Ay:()=>a,RM:()=>s});var i=t(86070),o=t(15658);const s=[];function r(e){const n={p:"p",...(0,o.R)(),...e.components};return(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:['Double check you have filled out necessary values in the Logto connector configuration area. Click\n"Save and Done" (or "Save changes") and the ',e.connector," connector should be available now."]})})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},92409:(e,n,t)=>{t.d(n,{Ay:()=>a,RM:()=>s});var i=t(86070),o=t(15658);const s=[];function r(e){const n={admonition:"admonition",p:"p",...(0,o.R)(),...e.components};return(0,i.jsx)(n.admonition,{title:"Test your integration",type:"info",children:(0,i.jsxs)(n.p,{children:["Open your ",e.sdk,' app to test if the integration works. When you click the "Sign In" button,\nthe page should be redirected to a Logto sign-in page, and you should be able to create a new\naccount by entering username and password and complete the sign-in process.']})})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},52878:(e,n,t)=>{t.d(n,{Ay:()=>a,RM:()=>s});var i=t(86070),o=t(15658);const s=[];function r(e){const n={p:"p",...(0,o.R)(),...e.components};return(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:["Return to your ",e.sdk," app. You should now be able to sign in with ",e.connector,". Enjoy!"]})})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},96906:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>x,connector:()=>j,contentTitle:()=>m,default:()=>b,frontMatter:()=>p,metadata:()=>i,toc:()=>f});var i=t(71628),o=t(86070),s=t(15658),r=t(4914),a=t(23471),c=t(55158),l=t(37448),d=t(7968),h=t(52878),g=t(575),u=t(47468);const p={slug:"how-to-build-sendgrid-sign-in-with-go-and-logto",authors:"logto",tags:["authentication","sendgrid","go","go","passwordless-sign-in","sign-in","login"],title:"How to build SendGrid Email passwordless sign-in with Go and Logto"},m=void 0,x={authorsImageUrls:[void 0]},j="SendGrid",f=[...r.RM,{value:"Create an application in Logto",id:"create-an-application-in-logto",level:2},...a.RM,{value:"Integrate Logto SDK",id:"integrate-logto-sdk",level:2},...g.RM,{value:"Add SendGrid connector",id:"add-sendgrid-connector",level:2},...c.RM,{value:"Set up SendGrid email connector",id:"set-up-sendgrid-email-connector",level:2},...u.RM,{value:"Save your configuration",id:"save-your-configuration",level:2},...l.RM,{value:"Enable SendGrid connector in Sign-in Experience",id:"enable-sendgrid-connector-in-sign-in-experience",level:2},...d.RM,{value:"Testing and Validation",id:"testing-and-validation",level:2},...h.RM,{value:"Further readings",id:"further-readings",level:2}];function y(e){const n={a:"a",h2:"h2",p:"p",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:["\n","\n","\n","\n",(0,o.jsx)(r.Ay,{connector:j,sdk:"Go",link:"https://go.dev/"}),"\n",(0,o.jsx)(n.h2,{id:"create-an-application-in-logto",children:"Create an application in Logto"}),"\n",(0,o.jsx)(a.Ay,{type:"Traditional web",framework:"undefined"}),"\n",(0,o.jsx)(n.h2,{id:"integrate-logto-sdk",children:"Integrate Logto SDK"}),"\n",(0,o.jsx)(g.Ay,{}),"\n",(0,o.jsx)(n.h2,{id:"add-sendgrid-connector",children:"Add SendGrid connector"}),"\n",(0,o.jsx)(c.Ay,{connector:j,connectorType:"Email"}),"\n",(0,o.jsx)(n.h2,{id:"set-up-sendgrid-email-connector",children:"Set up SendGrid email connector"}),"\n",(0,o.jsx)(u.Ay,{}),"\n",(0,o.jsx)(n.h2,{id:"save-your-configuration",children:"Save your configuration"}),"\n",(0,o.jsx)(l.Ay,{connector:j}),"\n",(0,o.jsx)(n.h2,{id:"enable-sendgrid-connector-in-sign-in-experience",children:"Enable SendGrid connector in Sign-in Experience"}),"\n",(0,o.jsx)(d.Ay,{connectorType:"Email",passwordlessSignUpIdentifier:"Email address"}),"\n",(0,o.jsx)(n.h2,{id:"testing-and-validation",children:"Testing and Validation"}),"\n",(0,o.jsx)(h.Ay,{connector:j,sdk:"Go"}),"\n",(0,o.jsx)(n.h2,{id:"further-readings",children:"Further readings"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/authorization/api-resources/protect-your-api",children:"Protect your API"})," For native and single page apps, you'll need to call one or more API endpoints to retrieve and update data.",(0,o.jsx)("br",{}),"\nLearn more about identifying who's who and keeping your API secure."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/user-management",children:"User management"})," We know you care about user management and activities, as we also do.",(0,o.jsx)("br",{}),"\nLearn more about how to know your users and see the figures like DAU and MAU graphically."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/customization/localized-languages",children:"Localization"})," From one regional business to a global corporate, the willingness to offer the best user experience won't change.",(0,o.jsx)("br",{}),"\nYou can change current language phrases or add a new language without friction."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://blog.logto.io/ciam-101-intro-authn-sso",children:"Customer IAM series"})," Our serial blog posts about Customer (or Consumer) Identity and Access Management, from 101 to advanced topics and beyond."]})]})}function b(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(y,{...e})}):y(e)}},8670:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>r});var i=t(86070),o=t(15658);const s=t.p+"assets/images/app-secret-2b2c12ae8557fbcf3b283bf86f3ac6db.png",r=[];function a(e){const n={admonition:"admonition",...(0,o.R)(),...e.components};return(0,i.jsxs)(n.admonition,{type:"tip",children:[(0,i.jsx)("p",{children:'You can find and copy "App Secret" from application details page in Admin Console:'}),(0,i.jsx)("img",{alt:"App Secret",src:s,width:"586px"})]})}function c(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},73977:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/connector-tab-passwordless-9939bc0a0a5bbf8821d700cf9a25b825.png"},81684:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/framework-list-fa8640804a64dea54236744f3287635b.png"},13885:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/get-started-82fd0b8e277e116b01ce1ccaa1b04c8d.png"},3466:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/save-changes-cc32c907e69d5d865b13ee0449e34822.png"},16906:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/sie-tab-12b63a01ce248b8eb8edd1cfd796cb1b.png"},15658:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var i=t(30758);const o={},s=i.createContext(o);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:n},e.children)}},71628:e=>{e.exports=JSON.parse('{"permalink":"/fr/tutorial/how-to-build-sendgrid-sign-in-with-go-and-logto","source":"@site/tutorial/build-with-logto/generated-go-sendgrid.mdx","title":"How to build SendGrid Email passwordless sign-in with Go and Logto","description":"{/*","date":"2024-11-29T04:09:31.000Z","tags":[{"inline":true,"label":"authentication","permalink":"/fr/tutorial/tags/authentication"},{"inline":true,"label":"sendgrid","permalink":"/fr/tutorial/tags/sendgrid"},{"inline":true,"label":"go","permalink":"/fr/tutorial/tags/go"},{"inline":true,"label":"go","permalink":"/fr/tutorial/tags/go"},{"inline":true,"label":"passwordless-sign-in","permalink":"/fr/tutorial/tags/passwordless-sign-in"},{"inline":true,"label":"sign-in","permalink":"/fr/tutorial/tags/sign-in"},{"inline":true,"label":"login","permalink":"/fr/tutorial/tags/login"}],"readingTime":1.28,"hasTruncateMarker":true,"authors":[{"name":"Logto team","title":"The better identity infrastructure for developers","url":"https://logto.io","imageURL":"https://github.com/logto-io.png","key":"logto","page":null}],"frontMatter":{"slug":"how-to-build-sendgrid-sign-in-with-go-and-logto","authors":"logto","tags":["authentication","sendgrid","go","go","passwordless-sign-in","sign-in","login"],"title":"How to build SendGrid Email passwordless sign-in with Go and Logto"},"unlisted":false,"prevItem":{"title":"How to build SAML sign-in with Go and Logto","permalink":"/fr/tutorial/how-to-build-saml-sign-in-with-go-and-logto"},"nextItem":{"title":"How to build Twilio SMS passwordless sign-in with Go and Logto","permalink":"/fr/tutorial/how-to-build-twilio-sign-in-with-go-and-logto"}}')}}]);