"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[31085],{78918:(e,n,t)=>{t.d(n,{Ay:()=>a,RM:()=>s});var i=t(86070),o=t(15658);const s=[{value:"Configure a mail service in the AWS service console",id:"configure-a-mail-service-in-the-aws-service-console",level:3},{value:"Register AWS account",id:"register-aws-account",level:4},{value:"Create a identity",id:"create-a-identity",level:4},{value:"Configuration of the connector",id:"configuration-of-the-connector",level:4},{value:"Test the Amazon SES connector",id:"test-the-amazon-ses-connector",level:4},{value:"Configure types",id:"configure-types",level:4}];function r(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h3,{id:"configure-a-mail-service-in-the-aws-service-console",children:"Configure a mail service in the AWS service console"}),"\n",(0,i.jsx)(n.p,{children:"Amazon SES is a cloud email service provider that can integrate into any application for bulk email sending."}),"\n",(0,i.jsx)(n.p,{children:"Logto core calls the Amazon Simple Email Service APIs via this connector, with the help of which Logto end-users can register and sign in to their Logto account via email verification code."}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["\ud83d\udca1 ",(0,i.jsx)(n.strong,{children:"Tip"})]}),"\n",(0,i.jsx)(n.p,{children:"You can skip some sections if you have already finished."}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"register-aws-account",children:"Register AWS account"}),"\n",(0,i.jsxs)(n.p,{children:["Go to ",(0,i.jsx)(n.a,{href:"https://aws.amazon.com/",children:"AWS"})," and register an account."]}),"\n",(0,i.jsx)(n.h4,{id:"create-a-identity",children:"Create a identity"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Go to ",(0,i.jsx)(n.code,{children:"Amazon Simple Email Service"})," Console"]}),"\n",(0,i.jsxs)(n.li,{children:["Create an identity, choose one of the following options","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Create a domain"}),"\n",(0,i.jsx)(n.li,{children:"Create an email address"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"configuration-of-the-connector",children:"Configuration of the connector"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Click your username in the upper right corner of the Amazon console to enter ",(0,i.jsx)(n.code,{children:"Security Credentials"}),". If you don't have one, create an ",(0,i.jsx)(n.code,{children:"AccessKey"})," and save it carefully."]}),"\n",(0,i.jsxs)(n.li,{children:["Complete the settings of the ",(0,i.jsx)(n.code,{children:"Amazon Simple Email Service"})," connector:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Use the ",(0,i.jsx)(n.code,{children:"AccessKey ID"})," and ",(0,i.jsx)(n.code,{children:"AccessKey Secret"})," obtained in step 1 to fill in ",(0,i.jsx)(n.code,{children:"accessKeyId"})," and ",(0,i.jsx)(n.code,{children:"accessKeySecret"})," respectively."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"region"}),": Fill in the ",(0,i.jsx)(n.code,{children:"region"})," field with the region of the identity you use to send mail."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"emailAddress"}),": The email address you use to send mail, in the format of ",(0,i.jsx)(n.code,{children:"Logto<noreply@logto.io>"})," or ",(0,i.jsx)(n.code,{children:"<noreply@logto.io>"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["the following parameters are optional; parameters description can be found in the ",(0,i.jsx)(n.a,{href:"https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_SendEmail.html",children:"AWS SES API documentation"}),"."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"feedbackForwardingEmailAddress"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"feedbackForwardingEmailAddressIdentityArn"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"configurationSetName"})}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"test-the-amazon-ses-connector",children:"Test the Amazon SES connector"}),"\n",(0,i.jsx)(n.p,{children:'You can type in an email address and click on "Send" to see whether the settings work before "Save and Done".'}),"\n",(0,i.jsx)(n.p,{children:"That's it. Don't forget to enable connector in sign-in experience."}),"\n",(0,i.jsx)(n.h4,{id:"configure-types",children:"Configure types"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Type"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"accessKeyId"}),(0,i.jsx)(n.td,{children:"string"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"accessKeySecret"}),(0,i.jsx)(n.td,{children:"string"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"region"}),(0,i.jsx)(n.td,{children:"string"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"emailAddress"}),(0,i.jsx)(n.td,{children:"string (OPTIONAL)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"emailAddressIdentityArn"}),(0,i.jsx)(n.td,{children:"string (OPTIONAL)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"feedbackForwardingEmailAddress"}),(0,i.jsx)(n.td,{children:"string (OPTIONAL)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"feedbackForwardingEmailAddressIdentityArn"}),(0,i.jsx)(n.td,{children:"string (OPTIONAL)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"configurationSetName"}),(0,i.jsx)(n.td,{children:"string (OPTIONAL)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"templates"}),(0,i.jsx)(n.td,{children:"Template[]"})]})]})]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Template Properties"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Enum values"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"subject"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"N/A"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"content"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"N/A"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"usageType"}),(0,i.jsx)(n.td,{children:"enum string"}),(0,i.jsx)(n.td,{children:"'Register' | 'SignIn' | 'ForgotPassword' | 'Generic'"})]})]})]})]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},85330:(e,n,t)=>{t.d(n,{Ay:()=>w,RM:()=>f});var i=t(86070),o=t(15658),s=t(61672);function r(e){const n={code:"code",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["In Logto SDK, we can use ",(0,i.jsx)(n.code,{children:"logtoClient.isAuthenticated"})," to check the authentication status, if the user is signed in, the value will be ",(0,i.jsx)(n.code,{children:"true"}),", otherwise, the value will be ",(0,i.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Now, let's add a live data to ",(0,i.jsx)(n.code,{children:"LogtoViewModel.kt"})," to observe the authentication status, and update the status when the user signed in or signed out:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:'//...with other imports\nclass LogtoViewModel(application: Application) : AndroidViewModel(application) {\n    // ...other codes\n\n    // Add a live data to observe the authentication status\n    private val _authenticated = MutableLiveData(logtoClient.isAuthenticated)\n    val authenticated: LiveData<Boolean>\n        get() = _authenticated\n\n    fun signIn(context: Activity) {\n        logtoClient.signIn(context, "io.logto.android://io.logto.sample/callback") { logtoException ->\n            logtoException?.let { println(it) }\n            // Update the live data\n            _authenticated.postValue(logtoClient.isAuthenticated)\n        }\n    }\n\n    fun signOut() {\n        logtoClient.signOut { logtoException ->\n            logtoException?.let { println(it) }\n            // Update the live data\n            _authenticated.postValue(logtoClient.isAuthenticated)\n        }\n    }\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Then, we observe the ",(0,i.jsx)(n.code,{children:"authenticated"})," live data in ",(0,i.jsx)(n.code,{children:"MainActivity.kt"}),", when the user is signed in, we hide the sign-in button and show the sign-out button and vice versa:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:"//...with other imports\nclass MainActivity : AppCompatActivity() {\n    //...other codes\n    override fun onCreate(savedInstanceState: Bundle?) {\n        //...other codes\n        val signInButton = findViewById<Button>(R.id.sign_in_button)\n        val signOutButton = findViewById<Button>(R.id.sign_out_button)\n        // ...handle button click codes\n\n        // Observe the authentication status\n        logtoViewModel.authenticated.observe(this) { authenticated ->\n            if (authenticated) {\n                // The user is authenticated\n                signInButton.visibility = View.GONE\n                signOutButton.visibility = View.VISIBLE\n            } else {\n                // The user is not authenticated\n                signInButton.visibility = View.VISIBLE\n                signOutButton.visibility = View.GONE\n            }\n        }\n    }\n}\n"})})]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}var l=t(3957),c=t(96097);const d=[...c.RM];function h(e){const n={code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Before starting, you need to add a redirect URI in the Admin Console for your application."}),"\n",(0,i.jsxs)(n.p,{children:["In Android, the redirect URI follows the pattern: ",(0,i.jsx)(n.code,{children:"$(LOGTO_REDIRECT_SCHEME)://$(YOUR_APP_PACKAGE)/callback"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"LOGTO_REDIRECT_SCHEME"})," should be a custom scheme in the reverse domain format."]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"YOUR_APP_PACKAGE"})," is your app package name."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Assuming you treat ",(0,i.jsx)(n.code,{children:"io.logto.android"})," as the custom ",(0,i.jsx)(n.code,{children:"LOGTO_REDIRECT_SCHEME"}),", and ",(0,i.jsx)(n.code,{children:"io.logto.sample"})," is your app package name, the Redirect URI should be ",(0,i.jsx)(n.code,{children:"io.logto.android://io.logto.sample/callback"}),"."]}),"\n",(0,i.jsx)(c.Ay,{figureSrc:l.A,redirectUri:"io.logto.android://io.logto.sample/callback"}),"\n",(0,i.jsxs)(n.p,{children:["After the redirect URI is configured, we add a ",(0,i.jsx)(n.code,{children:"signIn"})," method to your ",(0,i.jsx)(n.code,{children:"LogtoViewModel.kt"}),", which will call ",(0,i.jsx)(n.code,{children:"logtoClient.signIn"})," API to invoke the Logto sign-in page:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:'//...with other imports\nclass LogtoViewModel(application: Application) : AndroidViewModel(application) {\n    // ...other codes\n    fun signIn(context: Activity) {\n        logtoClient.signIn(context, "io.logto.android://io.logto.sample/callback") { logtoException ->\n            logtoException?.let { println(it) }\n        }\n    }\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Now setup on-click listener for the sign-in button in your ",(0,i.jsx)(n.code,{children:"MainActivity.kt"})," to call the ",(0,i.jsx)(n.code,{children:"signIn"})," method:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:"//...with other imports\nclass MainActivity : AppCompatActivity() {\n    override fun onCreate(savedInstanceState: Bundle?) {\n        //...other codes\n\n        // Assume you have a button with id `sign_in_button` in your layout\n        val signInButton = findViewById<Button>(R.id.sign_in_button)\n        signInButton.setOnClickListener {\n            logtoViewModel.signIn(this)\n        }\n    }\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"When you click the button, the Logto SDK will navigate to the Logto sign-in page."})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}function p(e){const n={code:"code",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Similar to sign-in, we add a ",(0,i.jsx)(n.code,{children:"signOut"})," method to ",(0,i.jsx)(n.code,{children:"LogtoViewModel.kt"})," to call ",(0,i.jsx)(n.code,{children:"logtoClient.signOut"})," API:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:"//...with other imports\nclass LogtoViewModel(application: Application) : AndroidViewModel(application) {\n    // ...other codes\n    fun signOut() {\n        logtoClient.signOut { logtoException ->\n            logtoException?.let { println(it) }\n        }\n    }\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["After you signed out, the Logto SDK will clear all local credentials even though Logto exceptions occurred when calling ",(0,i.jsx)(n.code,{children:"logtoClient.signOut"})," API."]}),"\n",(0,i.jsxs)(n.p,{children:["Then, we can add a button to call the ",(0,i.jsx)(n.code,{children:"signOut"})," method in ",(0,i.jsx)(n.code,{children:"MainActivity.kt"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:"//...with other imports\nclass MainActivity : AppCompatActivity() {\n    //...other codes\n    override fun onCreate(savedInstanceState: Bundle?) {\n        //...other codes\n        //...sign-in button codes\n\n        // Assume you have a button with id `sign_out_button` in your layout\n        val signOutButton = findViewById<Button>(R.id.sign_out_button)\n        signOutButton.setOnClickListener {\n            logtoViewModel.signOut()\n        }\n    }\n}\n"})})]})}function g(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}var x=t(26076),m=t(65082),j=t(41440);const f=[...s.RM,{value:"Installation",id:"installation",level:3},...m.RM,{value:"Init LogtoClient",id:"init-logtoclient",level:3},...x.RM,{value:"Implement sign-in",id:"implement-sign-in",level:3},...d,{value:"Implement sign-out",id:"implement-sign-out",level:3},{value:"Handle authentication status",id:"handle-authentication-status",level:3},...j.RM];function v(e){const n={h3:"h3",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.Ay,{}),"\n",(0,i.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,i.jsx)(m.Ay,{}),"\n",(0,i.jsx)(n.h3,{id:"init-logtoclient",children:"Init LogtoClient"}),"\n",(0,i.jsx)(x.Ay,{}),"\n",(0,i.jsx)(n.h3,{id:"implement-sign-in",children:"Implement sign-in"}),"\n",(0,i.jsx)(u,{}),"\n",(0,i.jsx)(n.h3,{id:"implement-sign-out",children:"Implement sign-out"}),"\n",(0,i.jsx)(g,{}),"\n",(0,i.jsx)(n.h3,{id:"handle-authentication-status",children:"Handle authentication status"}),"\n",(0,i.jsx)(a,{}),"\n",(0,i.jsx)(j.Ay,{sdk:"Android"})]})}function w(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(v,{...e})}):v(e)}},95261:(e,n,t)=>{t.d(n,{Ay:()=>a,RM:()=>s});var i=t(86070),o=t(15658);const s=[];function r(e){const n={img:"img",p:"p",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:["To add or change ",e.connectorType,' connector, go to the "Connector" tab in the Admin Console,\nthen click on "Email and SMS connectors". From there, click "Set up" or go to detail page and\nclick "Change ',e.connectorType,' connector".']})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Connector tab",src:t(73977).A+"",width:"4164",height:"1290"})}),"\n",(0,i.jsxs)("p",{children:['In the openning modal, select "',e.connector,'" and click "Next".']}),"\n",(0,i.jsx)(n.p,{children:"On the next page, you will see a two-column layout with the README content on the left and configuration on the right."}),"\n",(0,i.jsx)(n.p,{children:"Feel free to follow the README file in place or read the following section to complete the configuration process. If you follow the in-place guide, you can skip the next section."})]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},2297:(e,n,t)=>{t.d(n,{Ay:()=>l,RM:()=>r});var i=t(86070),o=t(15658);const s=t.p+"assets/images/create-application-modal-136b6119e66a20d765a416417aeeefda.png",r=[{value:"Choose your application type",id:"choose-your-application-type",level:3},{value:"Enter application name",id:"enter-application-name",level:3}];function a(e){const n={code:"code",h3:"h3",img:"img",p:"p",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"In you browser, open a new tab and enter the link of Logto Admin Console."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Get Started",src:t(13885).A+"",width:"2354",height:"588"})}),"\n",(0,i.jsxs)(n.p,{children:['Once the page is loaded, in the "Get Started" section click the ',(0,i.jsx)(n.code,{children:"View all"})," link to open the application framework list page."]}),"\n",(0,i.jsx)(n.h3,{id:"choose-your-application-type",children:"Choose your application type"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Framework List",src:t(81684).A+"",width:"3626",height:"2804"})}),"\n",(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:['In the opening modal, scroll to the "',e.type,'" section or filter all the available "\n',e.type,'" frameworks using the quick filter checkboxes on the left.']})}),"\n",(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:["Click the"," ","\n",e.framework.split("/").map((e=>`"${e.trim()}"`)).join(" / ")," ","\nframework card to start creating your application."]})}),"\n",(0,i.jsx)(n.h3,{id:"enter-application-name",children:"Enter application name"}),"\n",(0,i.jsx)("center",{children:(0,i.jsx)("img",{src:s,alt:"Create Application modal",width:"700"})}),"\n",(0,i.jsx)(n.p,{children:'Enter the application name, e.g., "Bookstore," and click "Create application."'}),"\n",(0,i.jsx)(n.p,{children:"\ud83c\udf89 Ta-da! You just created your first application in Logto. You'll see a congrats page which includes a detailed integration guide. Follow the guide to see what the experience will be in your application."})]})}function l(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},90293:(e,n,t)=>{t.d(n,{Ay:()=>a,RM:()=>s});var i=t(86070),o=t(15658);const s=[];function r(e){const n={admonition:"admonition",img:"img",p:"p",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:'Switch to the "Sign-in experience" tab, then click the "Sign-up and sign-in" tab.'}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"If it's the first time you enter the tab, you will see a quick introduction about Sign-in Experience and its basic configuration."})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Sign-in Experience tab",src:t(16906).A+"",width:"3502",height:"1794"})}),"\n",(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:['Select "',e.passwordlessSignUpIdentifier,'" or "Email address or phone number" for the "Sign-up\nidentifier" to provide sign-up for ',e.connectorType," passwordless sign-in, which may increase\nyour conversion rate."]})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Save changes",src:t(3466).A+"",width:"2474",height:"188"})}),"\n",(0,i.jsx)(n.p,{children:'Finally, click "Save changes" on the bottom right corner.'})]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},65159:(e,n,t)=>{t.d(n,{Ay:()=>a,RM:()=>s});var i=t(86070),o=t(15658);const s=[];function r(e){const n={a:"a",admonition:"admonition",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:["\n","\n",(0,i.jsx)(n.admonition,{title:"For our new friends",type:"info",children:(0,i.jsxs)(n.p,{children:["Every app needs authentication and authorization. ",(0,i.jsx)(n.a,{href:"https://logto.io",children:"Logto"})," is an Auth0 alternative designed for modern apps and SaaS products."]})}),"\n",(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:["In this article, we will go through the steps to quickly build the ",e.connector," sign-in\nexperience (user authentication) with ",(0,i.jsx)("a",{href:e.link,target:"_blank",rel:"noopener",children:e.sdk})," and\xa0\n",(0,i.jsx)("a",{href:"https://logto.io",target:"_blank",rel:"noopener",children:"Logto"}),"."]})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Prerequisites"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["A running Logto instance. Check out the ",(0,i.jsx)(n.a,{href:"/docs/get-started/",children:"get started page"})," if you don't have one."]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)("span",{children:["Basic knowledge of ",(0,i.jsx)("a",{href:e.link,target:"_blank",rel:"noopener",children:e.sdk}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)("span",{children:["A usable ",e.connector," account."]}),"\n"]}),"\n"]}),"\n"]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},93857:(e,n,t)=>{t.d(n,{Ay:()=>a,RM:()=>s});var i=t(86070),o=t(15658);const s=[];function r(e){const n={p:"p",...(0,o.R)(),...e.components};return(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:['Double check you have filled out necessary values in the Logto connector configuration area. Click\n"Save and Done" (or "Save changes") and the ',e.connector," connector should be available now."]})})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},41440:(e,n,t)=>{t.d(n,{Ay:()=>a,RM:()=>s});var i=t(86070),o=t(15658);const s=[];function r(e){const n={admonition:"admonition",p:"p",...(0,o.R)(),...e.components};return(0,i.jsx)(n.admonition,{title:"Test your integration",type:"info",children:(0,i.jsxs)(n.p,{children:["Open your ",e.sdk,' app to test if the integration works. When you click the "Sign In" button,\nthe page should be redirected to a Logto sign-in page, and you should be able to create a new\naccount by entering username and password and complete the sign-in process.']})})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},35317:(e,n,t)=>{t.d(n,{Ay:()=>a,RM:()=>s});var i=t(86070),o=t(15658);const s=[];function r(e){const n={p:"p",...(0,o.R)(),...e.components};return(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:["Return to your ",e.sdk," app. You should now be able to sign in with ",e.connector,". Enjoy!"]})})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},41619:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,connector:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var i=t(59297),o=t(86070),s=t(15658);t(65159),t(2297),t(95261),t(93857),t(90293),t(35317),t(85330),t(78918);const r={slug:"how-to-build-aws-ses-sign-in-with-android-and-logto",authors:"logto",tags:["authentication","aws-ses","android","kotlin/java","passwordless-sign-in","sign-in","login"],title:"How to build AWS SES Email passwordless sign-in with Android and Logto"},a=void 0,l={authorsImageUrls:[void 0]},c="AWS SES",d=[];function h(e){return(0,o.jsx)(o.Fragment,{})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h()}},96097:(e,n,t)=>{t.d(n,{Ay:()=>a,RM:()=>s});var i=t(86070),o=t(15658);const s=[];function r(e){const n={p:"p",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Let's switch to the Application details page of Logto Console. Add a Redirect URI ",(0,i.jsx)("code",{children:e.redirectUri}),' and click "Save changes".']}),"\n",(0,i.jsx)("img",{alt:"Redirect URI in Logto Console",src:e.figureSrc,width:"600px"})]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},61672:(e,n,t)=>{t.d(n,{Ay:()=>a,RM:()=>s});var i=t(86070),o=t(15658);const s=[];function r(e){const n={a:"a",admonition:"admonition",li:"li",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The example is based on ",(0,i.jsx)(n.a,{href:"https://developer.android.com/reference/android/view/View",children:"View system"})," and ",(0,i.jsx)(n.a,{href:"https://developer.android.com/topic/libraries/architecture/viewmodel",children:"View Model"}),", but the concepts are the same when using ",(0,i.jsx)(n.a,{href:"https://developer.android.com/jetpack/compose",children:"Jetpack Compose"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"The example is written in Kotlin, but the concepts are the same for Java."}),"\n",(0,i.jsxs)(n.li,{children:["Both ",(0,i.jsx)(n.a,{href:"https://github.com/logto-io/kotlin/tree/master/android-sample-kotlin",children:"Kotlin"})," and ",(0,i.jsx)(n.a,{href:"https://github.com/logto-io/kotlin/tree/master/android-sample-java",children:"Java"})," sample projects are available on our ",(0,i.jsx)(n.a,{href:"https://github.com/logto-io/kotlin",children:"SDK repository"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["The tutorial video is available on our ",(0,i.jsx)(n.a,{href:"https://youtu.be/_GSiYqTLnak",children:"YouTube channel"}),"."]}),"\n"]})})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},26076:(e,n,t)=>{t.d(n,{Ay:()=>a,RM:()=>s});var i=t(86070),o=t(15658);const s=[];function r(e){const n={code:"code",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Create a ",(0,i.jsx)(n.code,{children:"LogtoViewModel.kt"})," and init ",(0,i.jsx)(n.code,{children:"LogtoClient"})," in this view model:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",metastring:'title="LogtoViewModel.kt"',children:'//...with other imports\nimport io.logto.sdk.android.LogtoClient\nimport io.logto.sdk.android.type.LogtoConfig\n\nclass LogtoViewModel(application: Application) : AndroidViewModel(application) {\n    private val logtoConfig = LogtoConfig(\n          endpoint = "<your-logto-endpoint>",\n          appId = "<your-app-id>",\n          scopes = null,\n          resources = null,\n          usingPersistStorage = true,\n    )\n\n    private val logtoClient = LogtoClient(logtoConfig, application)\n\n    companion object {\n        val Factory: ViewModelProvider.Factory = object : ViewModelProvider.Factory {\n            @Suppress("UNCHECKED_CAST")\n            override fun <T : ViewModel> create(\n                modelClass: Class<T>,\n                extras: CreationExtras\n            ): T {\n                // Get the Application object from extras\n                val application = checkNotNull(extras[APPLICATION_KEY])\n                return LogtoViewModel(application) as T\n            }\n        }\n    }\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["then, create a ",(0,i.jsx)(n.code,{children:"LogtoViewModel"})," for your ",(0,i.jsx)(n.code,{children:"MainActivity.kt"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",metastring:'title="MainActivity.kt"',children:"//...with other imports\nclass MainActivity : AppCompatActivity() {\n    private val logtoViewModel: LogtoViewModel by viewModels { LogtoViewModel.Factory }\n    //...other codes\n}\n"})})]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},65082:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>a});var i=t(86070),o=t(15658),s=t(77025),r=t(76946);const a=[];function l(e){const n={admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"The minimum supported Android API level of Logto Android SDK is level 24."})}),"\n",(0,i.jsxs)(n.p,{children:["Before you install Logto Android SDK, ensure ",(0,i.jsx)(n.code,{children:"mavenCentral()"})," is added to your repository configuration in the Gradle project build file:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",metastring:'title="settings.gradle.kts"',children:"dependencyResolutionManagement {\n  repositories {\n    mavenCentral()\n  }\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"Add Logto Android SDK to your dependencies:"}),"\n",(0,i.jsxs)(r.A,{children:[(0,i.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",metastring:'title="build.gradle.kts"',children:'dependencies {\n  implementation("io.logto.sdk:android:1.1.3")\n}\n'})})}),(0,i.jsx)(s.A,{value:"groovy",label:"Groovy",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-groovy",metastring:'title="build.gradle"',children:"dependencies {\n  implementation 'io.logto.sdk:android:1.1.3'\n}\n"})})})]}),"\n",(0,i.jsxs)(n.p,{children:["Since the SDK needs internet access, you need to add the following permission to your ",(0,i.jsx)(n.code,{children:"AndroidManifest.xml"})," file:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-xml",metastring:'title="AndroidManifest.xml"',children:'<?xml version="1.0" encoding="utf-8"?>\n<manifest xmlns:android="http://schemas.android.com/apk/res/android"\n  xmlns:tools="http://schemas.android.com/tools">\n\n  \x3c!-- add internet permission --\x3e\n  <uses-permission android:name="android.permission.INTERNET" />\n\n  \x3c!-- other configurations... --\x3e\n</manifest>\n'})})]})}function c(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},77025:(e,n,t)=>{t.d(n,{A:()=>r});t(30758);var i=t(13526);const o={tabItem:"tabItem_LtUi"};var s=t(86070);function r(e){let{children:n,hidden:t,className:r}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,i.A)(o.tabItem,r),hidden:t,children:n})}},76946:(e,n,t)=>{t.d(n,{A:()=>y});var i=t(30758),o=t(13526),s=t(34303),r=t(25557),a=t(93891),l=t(40480),c=t(55057),d=t(62163);function h(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:t}=e;return(0,i.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:t,attributes:i,default:o}}=e;return{value:n,label:t,attributes:i,default:o}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const o=(0,r.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(s),(0,i.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(o.location.search);n.set(s,e),o.replace({...o.location,search:n.toString()})}),[s,o])]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:o}=e,s=u(e),[r,l]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=t.find((e=>e.default))??t[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:s}))),[c,h]=g({queryString:t,groupId:o}),[x,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,s]=(0,d.Dv)(t);return[o,(0,i.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:o}),j=(()=>{const e=c??x;return p({value:e,tabValues:s})?e:null})();(0,a.A)((()=>{j&&l(j)}),[j]);return{selectedValue:r,selectValue:(0,i.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),m(e)}),[h,m,s]),tabValues:s}}var m=t(36865);const j={tabList:"tabList_rP2z",tabItem:"tabItem_nid_"};var f=t(86070);function v(e){let{className:n,block:t,selectedValue:i,selectValue:r,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),o=a[t].value;o!==i&&(c(n),r(o))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":t},n),children:a.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>l.push(e),onKeyDown:h,onClick:d,...s,className:(0,o.A)("tabs__item",j.tabItem,s?.className,{"tabs__item--active":i===n}),children:t??n},n)}))})}function w(e){let{lazy:n,children:t,selectedValue:s}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===s));return e?(0,i.cloneElement)(e,{className:(0,o.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function b(e){const n=x(e);return(0,f.jsxs)("div",{className:(0,o.A)("tabs-container",j.tabList),children:[(0,f.jsx)(v,{...n,...e}),(0,f.jsx)(w,{...n,...e})]})}function y(e){const n=(0,m.A)();return(0,f.jsx)(b,{...e,children:h(e.children)},String(n))}},3957:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/android-redirect-uri-ac35116d71d63d3bf964651207e82085.png"},73977:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/connector-tab-passwordless-9939bc0a0a5bbf8821d700cf9a25b825.png"},81684:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/framework-list-fa8640804a64dea54236744f3287635b.png"},13885:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/get-started-82fd0b8e277e116b01ce1ccaa1b04c8d.png"},3466:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/save-changes-cc32c907e69d5d865b13ee0449e34822.png"},16906:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/sie-tab-12b63a01ce248b8eb8edd1cfd796cb1b.png"},15658:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var i=t(30758);const o={},s=i.createContext(o);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:n},e.children)}},59297:e=>{e.exports=JSON.parse('{"permalink":"/tutorial/how-to-build-aws-ses-sign-in-with-android-and-logto","source":"@site/tutorial/build-with-logto/generated-android-aws-ses.mdx","title":"How to build AWS SES Email passwordless sign-in with Android and Logto","description":"{/*","date":"2024-11-11T08:03:26.000Z","tags":[{"inline":true,"label":"authentication","permalink":"/tutorial/tags/authentication"},{"inline":true,"label":"aws-ses","permalink":"/tutorial/tags/aws-ses"},{"inline":true,"label":"android","permalink":"/tutorial/tags/android"},{"inline":true,"label":"kotlin/java","permalink":"/tutorial/tags/kotlin-java"},{"inline":true,"label":"passwordless-sign-in","permalink":"/tutorial/tags/passwordless-sign-in"},{"inline":true,"label":"sign-in","permalink":"/tutorial/tags/sign-in"},{"inline":true,"label":"login","permalink":"/tutorial/tags/login"}],"readingTime":1.34,"hasTruncateMarker":true,"authors":[{"name":"Logto team","title":"The better identity infrastructure for developers","url":"https://logto.io","imageURL":"https://github.com/logto-io.png","key":"logto","page":null}],"frontMatter":{"slug":"how-to-build-aws-ses-sign-in-with-android-and-logto","authors":"logto","tags":["authentication","aws-ses","android","kotlin/java","passwordless-sign-in","sign-in","login"],"title":"How to build AWS SES Email passwordless sign-in with Android and Logto"},"unlisted":false,"prevItem":{"title":"How to build Apple sign-in with Android and Logto","permalink":"/tutorial/how-to-build-apple-sign-in-with-android-and-logto"},"nextItem":{"title":"How to build Azure AD sign-in with Android and Logto","permalink":"/tutorial/how-to-build-azure-ad-sign-in-with-android-and-logto"}}')}}]);