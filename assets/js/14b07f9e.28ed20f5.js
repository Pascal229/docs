"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[51443],{53207:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>j,contentTitle:()=>x,default:()=>k,frontMatter:()=>f,metadata:()=>r,toc:()=>w});const r=JSON.parse('{"id":"quick-starts/framework/flutterflow/README","title":"Customize the FlutterFlow CustomAuthManager using Logto SDK","description":"FlutterFlow has a built-in custom authentication feature that allows you to authenticate users using your own backend. However, the build-in custom authentication flow was designed to work with a single authentication API call. If you are using a third-party Identity Provider (IdP) the authentication request can only be done using the Resource Owner Password Credentials grant type, which is not recommended for production use. See Deprecated ropc grant type for more details.","source":"@site/docs/quick-starts/framework/flutterflow/README.mdx","sourceDirName":"quick-starts/framework/flutterflow","slug":"/quick-starts/flutter-flow","permalink":"/quick-starts/flutter-flow","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/docs/quick-starts/framework/flutterflow/README.mdx","tags":[],"version":"current","frontMatter":{"slug":"/quick-starts/flutter-flow","sidebar_label":"FlutterFlow","sidebar_custom_props":{"description":"FlutterFlow is a low code framework for building hybrid flutter apps."}},"sidebar":"quickStartSidebar","previous":{"title":"Flutter","permalink":"/quick-starts/flutter"},"next":{"title":"Go","permalink":"/quick-starts/go"}}');var o=n(86070),i=n(15658);function a(e){const t={code:"code",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-dart",children:"// lib/auth/custom_auth/custom_auth_manager.dart\n\nimport 'dart:async';\n\nimport 'package:flutter/foundation.dart';\nimport 'package:http/http.dart' as http;\nimport 'package:logto_dart_sdk/logto_client.dart';\nimport 'package:logto_dart_sdk/src/modules/id_token.dart';\n\nimport 'custom_auth_user_provider.dart';\n\nexport 'custom_auth_manager.dart';\n\n\nclass CustomAuthManager {\n  late LogtoClient logtoClient;\n\n  final logtoConfig = const LogtoConfig(\n      appId: '<YOUR-APP-ID>',\n      endpoint: '<YOUR-LOGTO-ENDPOINT>');\n\n\n  // ...\n\n  FlutterFlowAuthAuthUser? _updateCurrentUser(\n      {bool loggedIn = false, String? uid, OpenIdClaims? idToken}) {\n    // Update the current user stream.\n    final updatedUser = FlutterFlowAuthAuthUser(\n      loggedIn: loggedIn,\n      uid: uid,\n      idToken: idToken,\n    );\n\n    flutterFlowAuthAuthUserSubject.add(updatedUser);\n\n    return updatedUser;\n  }\n\n  Future initialize() async {\n    logtoClient = LogtoClient(config: logtoConfig, httpClient: http.Client());\n\n    late OpenIdClaims? idToken;\n\n    try {\n      idToken = await logtoClient.idTokenClaims;\n    } catch (e) {\n      if (kDebugMode) {\n        print('Error initializing auth: $e');\n      }\n    }\n\n    _updateCurrentUser(\n        loggedIn: idToken != null, uid: idToken?.subject, idToken: idToken);\n  }\n}\n\nFlutterFlowAuthAuthUser? currentUser;\nbool get loggedIn => currentUser?.loggedIn ?? false;\n\n"})})}function s(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}function l(e){const t={code:"code",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-dart",children:"// lib/auth/custom_auth/custom_auth_user_provider.dart\n\nimport 'package:logto_dart_sdk/src/modules/id_token.dart';\nimport 'package:rxdart/rxdart.dart';\n\nimport 'custom_auth_manager.dart';\n\nclass FlutterFlowAuthAuthUser {\n  FlutterFlowAuthAuthUser({required this.loggedIn, this.uid, this.idToken});\n\n  bool loggedIn;\n  String? uid;\n  OpenIdClaims? idToken;\n}\n\n/// Generates a stream of the authenticated user.\nBehaviorSubject<FlutterFlowAuthAuthUser> flutterFlowAuthAuthUserSubject =\n    BehaviorSubject.seeded(FlutterFlowAuthAuthUser(loggedIn: false));\nStream<FlutterFlowAuthAuthUser> flutterFlowAuthAuthUserStream() =>\n    flutterFlowAuthAuthUserSubject\n        .asBroadcastStream()\n        .map((user) => currentUser = user);\n\n"})})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}function u(e){const t={a:"a",admonition:"admonition",code:"code",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,o.jsxs)(n,{children:[(0,o.jsx)("summary",{children:"flutter_secure_storage"}),(0,o.jsxs)(t.p,{children:["We use ",(0,o.jsx)(t.a,{href:"https://pub.dev/packages/flutter_secure_storage",children:"flutter_secure_storage"})," to implement the cross-platform persistent secure token storage. Under the hood:"]}),(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Keychain is used for iOS"}),"\n",(0,o.jsx)(t.li,{children:"AES encryption is used for Android."}),"\n"]}),(0,o.jsx)(t.h3,{id:"config-android-version",children:"Config Android version:"}),(0,o.jsx)(t.p,{children:"In [project]/android/app/build.gradle set minSdkVersion to >= 18."}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-kotlin",children:"  android {\n      ...\n\n      defaultConfig {\n          ...\n          minSdkVersion 18\n          ...\n      }\n  }\n"})}),(0,o.jsx)(t.h3,{id:"disable-autobackup",children:"Disable autobackup:"}),(0,o.jsx)(t.admonition,{type:"note",children:(0,o.jsxs)(t.p,{children:["By default Android backups data on Google Drive. It can cause exception java.security.InvalidKeyException",":Failed"," to unwrap key."]})}),(0,o.jsx)(t.p,{children:"To avoid this, you can disable auto backup for your app or exclude sharedprefs from the FlutterSecureStorage."}),(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"To disable auto backup, go to your app manifest file and set the boolean value android:allowBackup:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-xml",children:'<manifest ... >\n    ...\n    <application\n      android:allowBackup="false"\n      android:fullBackupContent="false"\n      ...\n    >\n        ...\n    </application>\n</manifest>\n\n'})}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"Exclude sharedprefs from FlutterSecureStorage."}),"\n",(0,o.jsxs)(t.p,{children:["If you need to enable the android",":fullBackupContent"," for your app. Set up a backup rule to ",(0,o.jsx)(t.a,{href:"https://developer.android.com/guide/topics/data/autobackup#IncludingFiles",children:"exclude"})," the prefs used by the plugin:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-xml",children:'<application ...\n  android:fullBackupContent="@xml/backup_rules">\n</application>\n'})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-xml",children:'<?xml version="1.0" encoding="utf-8"?>\n<full-backup-content>\n  <exclude domain="sharedpref" path="FlutterSecureStorage"/>\n</full-backup-content>\n'})}),"\n",(0,o.jsxs)(t.p,{children:["Please check ",(0,o.jsx)(t.a,{href:"https://pub.dev/packages/flutter_secure_storage#configure-android-version",children:"flutter_secure_storage"})," for more details."]}),"\n"]}),"\n"]})]})}function c(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}function h(e){const t={a:"a",admonition:"admonition",code:"code",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,o.jsxs)(n,{children:[(0,o.jsx)("summary",{children:"flutter_web_auth"}),(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"https://pub.dev/packages/flutter_web_auth",children:"flutter_web_auth"})," is used behind Logto's flutter SDK. We rely on its webview-based interaction interface to open Logto's authorization pages."]}),(0,o.jsx)(t.admonition,{type:"note",children:(0,o.jsx)(t.p,{children:"This plugin uses ASWebAuthenticationSession on iOS 12+ and macOS 10.15+, SFAuthenticationSession on iOS 11, Chrome Custom Tabs on Android and opens a new window on Web.\nYou can build it with iOS 8+, but it is currently only supported by iOS 11 or higher."})}),(0,o.jsx)(t.h3,{id:"register-the-callback-url-on-android",children:"Register the callback url on Android"}),(0,o.jsx)(t.p,{children:"In order to capture the callback url from Logto's sign-in web page, you will need to register your sign-in redirectUri to the AndroidManifest.xml."}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-xml",children:'<activity android:name="com.linusu.flutter_web_auth.CallbackActivity" android:exported="true">\n    <intent-filter android:label="flutter_web_auth">\n        <action android:name="android.intent.action.VIEW"/>\n        <category android:name="android.intent.category.DEFAULT"/>\n        <category android:name="android.intent.category.BROWSABLE"/>\n        <data android:scheme="io.logto"/>\n    </intent-filter>\n</activity>\n'})})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}const g=n.p+"assets/images/flutter-flow-custom-authentication-29ea475c8e52fe77ef9348d6a769ffa8.png",m=n.p+"assets/images/flutter-flow-github-push-ac7fd20f25760f669a19dd9fe61906b3.png",f={slug:"/quick-starts/flutter-flow",sidebar_label:"FlutterFlow",sidebar_custom_props:{description:"FlutterFlow is a low code framework for building hybrid flutter apps."}},x="Customize the FlutterFlow CustomAuthManager using Logto SDK",j={},w=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Enable FlutterFlow custom code",id:"enable-flutterflow-custom-code",level:2},{value:"Create your UI in FlutterFlow",id:"create-your-ui-in-flutterflow",level:2},{value:"Customize the CustomAuthManager",id:"customize-the-customauthmanager",level:2},{value:"Install Logto SDK dependency",id:"install-logto-sdk-dependency",level:3},{value:"Update the UserProvider",id:"update-the-userprovider",level:3},{value:"Init the logto client in CustomAuthManager",id:"init-the-logto-client-in-customauthmanager",level:3},{value:"Implement the Sign-in method",id:"implement-the-sign-in-method",level:3},{value:"Implement the Sign-out method",id:"implement-the-sign-out-method",level:3},{value:"Update the auth util methods",id:"update-the-auth-util-methods",level:3},{value:"Integrate the custom authentication in your UI",id:"integrate-the-custom-authentication-in-your-ui",level:2},{value:"Home Page",id:"home-page",level:3},{value:"User Profile Page",id:"user-profile-page",level:3},{value:"Further readings",id:"further-readings",level:2},{value:"Dependency troubleshooting",id:"dependency-troubleshooting",level:2},{value:"Config Android version:",id:"config-android-version",level:3},{value:"Disable autobackup:",id:"disable-autobackup",level:3},{value:"Register the callback url on Android",id:"register-the-callback-url-on-android",level:3}];function b(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"customize-the-flutterflow-customauthmanager-using-logto-sdk",children:"Customize the FlutterFlow CustomAuthManager using Logto SDK"})}),"\n",(0,o.jsxs)(t.p,{children:["FlutterFlow has a built-in ",(0,o.jsx)(t.a,{href:"https://docs.flutterflow.io/data-and-backend/custom-authentication",children:"custom authentication"})," feature that allows you to authenticate users using your own backend. However, the build-in custom authentication flow was designed to work with a single authentication API call. If you are using a third-party Identity Provider (IdP) the authentication request can only be done using the ",(0,o.jsx)(t.code,{children:"Resource Owner Password Credentials"})," grant type, which is not recommended for production use. See ",(0,o.jsx)(t.a,{href:"https://blog.logto.io/deprecated-ropc-grant-type/",children:"Deprecated ropc grant type"})," for more details."]}),"\n",(0,o.jsxs)(t.p,{children:["A standard OpenID Connect (OIDC) authentication flow involves multiple steps, such as authorization, token exchange, and user information retrieval. To implement a standard OIDC authentication flow with a IdP like Logto, you need to customize the ",(0,o.jsx)(t.code,{children:"CustomAuthManager"})," class in FlutterFlow."]}),"\n",(0,o.jsxs)(t.p,{children:["This tutorial will show you how to customize the ",(0,o.jsx)(t.code,{children:"CustomAuthManager"})," class in FlutterFlow using Logto ",(0,o.jsx)(t.a,{href:"/quick-starts/flutter",children:"Flutter SDK"}),". You may take advantage of the Logto SDK for the standard OIDC authentication flow while keeping the benefits of the FlutterFlow UI builder."]}),"\n",(0,o.jsx)(t.admonition,{type:"tip",children:(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["Logto SDK package is available on ",(0,o.jsx)(t.a,{href:"https://pub.dev/packages/logto_dart_sdk",children:"pub.dev"})," and Logto ",(0,o.jsx)(t.a,{href:"https://github.com/logto-io/dart",children:"github repository"}),"."]}),"\n",(0,o.jsx)(t.li,{children:"The SDK is currently only suitable for Android and iOS platforms."}),"\n"]})}),"\n",(0,o.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["A ",(0,o.jsx)(t.a,{href:"https://cloud.logto.io",children:"Logto Cloud"})," account or a ",(0,o.jsx)(t.a,{href:"/introduction/set-up-logto-oss",children:"self-hosted Logto"}),"."]}),"\n",(0,o.jsx)(t.li,{children:"Create a Logto Flutter application."}),"\n",(0,o.jsx)(t.li,{children:"A FlutterFlow project."}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"enable-flutterflow-custom-code",children:"Enable FlutterFlow custom code"}),"\n",(0,o.jsxs)(t.p,{children:["In order to customize the ",(0,o.jsx)(t.code,{children:"CustomAuthManager"})," class, you need to enable the custom code feature in FlutterFlow. Following the ",(0,o.jsx)(t.a,{href:"https://docs.flutterflow.io/customizing-your-app/manage-custom-code-in-github",children:"Manage Custom Code In GitHub"})," guide to sync your FlutterFlow project with GitHub."]}),"\n",(0,o.jsx)(t.admonition,{type:"note",children:(0,o.jsx)(t.p,{children:"Manage custom code in GitHub is a premium feature in FlutterFlow. You need to upgrade your FlutterFlow to pro plan to enable this feature."})}),"\n",(0,o.jsx)(t.p,{children:"Once it is done, you will have three different branches under your GitHub FlutterFlow repository:"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"main"}),": The main branch for the flutter project. You will need this branch to deploy your project."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"flutterflow"}),": The branch where the ",(0,o.jsx)(t.code,{children:"FlutterFlow"})," will sync the changes from the FlutterFlow editor."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"develop"}),": The branch where you can modify your custom code."]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"create-your-ui-in-flutterflow",children:"Create your UI in FlutterFlow"}),"\n",(0,o.jsxs)(t.p,{children:["First, create your UI in FlutterFlow. You can follow the ",(0,o.jsx)(t.a,{href:"https://docs.flutterflow.io/",children:"FlutterFlow documentation"})," to create your UI based on your requirements. For this tutorial, for the minimum requirement, we will create two pages:"]}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:"A simple home page with a login button."}),"\n",(0,o.jsx)(t.li,{children:"A user profile page to display user information and logout button."}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["Got to the ",(0,o.jsx)(t.code,{children:"App Settings"})," -> ",(0,o.jsx)(t.code,{children:"Authentication"})," page and enable the custom authentication. This will create a ",(0,o.jsx)(t.code,{children:"CustomAuthManager"})," class in your FlutterFlow project."]}),"\n",(0,o.jsx)("center",{children:(0,o.jsx)("img",{src:g,alt:"FlutterFlow custom authentication"})}),"\n",(0,o.jsxs)(t.p,{children:["Once you have the UI ready, navigate to the ",(0,o.jsx)(t.code,{children:"integrations"})," -> ",(0,o.jsx)(t.code,{children:"GitHub"})," page and click on the ",(0,o.jsx)(t.code,{children:"Push to Repository"})," button to push the changes to the ",(0,o.jsx)(t.code,{children:"flutterflow"})," branch."]}),"\n",(0,o.jsx)("center",{children:(0,o.jsx)("img",{src:m,alt:"FlutterFlow GitHub push"})}),"\n",(0,o.jsx)(t.h2,{id:"customize-the-customauthmanager",children:"Customize the CustomAuthManager"}),"\n",(0,o.jsxs)(t.p,{children:["Switch to the ",(0,o.jsx)(t.code,{children:"develop"})," branch in your GitHub repository and merge the latest changes from the ",(0,o.jsx)(t.code,{children:"flutterflow"})," branch. Including your UI pages, and the pre built ",(0,o.jsx)(t.code,{children:"CustomAuthManager"})," class."]}),"\n",(0,o.jsx)(t.h3,{id:"install-logto-sdk-dependency",children:"Install Logto SDK dependency"}),"\n",(0,o.jsx)(t.p,{children:"Add the Logto SDK dependency to your project."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"  flutter pub add logto_dart_sdk\n"})}),"\n",(0,o.jsxs)(t.admonition,{type:"note",children:[(0,o.jsx)(t.p,{children:"Optional Http package:"}),(0,o.jsxs)(t.p,{children:["Logto client requires a http client to make API calls. You can use the ",(0,o.jsx)(t.code,{children:"http"})," package or any other http client package of your choice."]}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"  flutter pub add http\n"})})]}),"\n",(0,o.jsx)(t.h3,{id:"update-the-userprovider",children:"Update the UserProvider"}),"\n",(0,o.jsxs)(t.p,{children:["Add the ",(0,o.jsx)(t.code,{children:"OpenIdClaims"})," class to the ",(0,o.jsx)(t.code,{children:"CustomAuthUserProvider"})," class to store the user information."]}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"OpenIdClaims"})," class is a part of the Logto SDK, which will provide the ",(0,o.jsx)(t.code,{children:"id_token"})," claims for the authenticated user."]}),"\n"]}),"\n",(0,o.jsx)(d,{}),"\n",(0,o.jsx)(t.h3,{id:"init-the-logto-client-in-customauthmanager",children:"Init the logto client in CustomAuthManager"}),"\n",(0,o.jsxs)(t.p,{children:["Initialize the Logto client in the ",(0,o.jsx)(t.code,{children:"CustomAuthManager"})," class."]}),"\n",(0,o.jsx)(s,{}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"initialize"})," method will initialize the Logto client and update the current user stream with the user authentication status persisted in the local storage."]}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsxs)(t.p,{children:["Logto SDK uses the ",(0,o.jsx)(t.a,{href:"https://pub.dev/packages/flutter_secure_storage",children:"flutter_secure_storage"})," package to store the user authentication information securely."]}),"\n"]}),"\n",(0,o.jsx)(t.h3,{id:"implement-the-sign-in-method",children:"Implement the Sign-in method"}),"\n",(0,o.jsxs)(t.p,{children:["Call the ",(0,o.jsx)(t.code,{children:"LogtoClient.signIn"})," method will initiate a standard OIDC authentication flow. The Logto Sign-In page will be opened in a webview using ",(0,o.jsx)(t.a,{href:"https://pub.dev/packages/flutter_web_auth",children:"flutter_web_auth"}),"."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-dart",children:"// lib/auth/custom_auth/custom_auth_manager.dart\n\nFuture<FlutterFlowAuthAuthUser?> signIn(\n    String redirectUri,\n  ) async {\n    await logtoClient.signIn(redirectUri);\n\n    var idTokenClaims = await logtoClient.idTokenClaims;\n\n    return _updateCurrentUser(\n      loggedIn: idTokenClaims != null,\n      uid: idTokenClaims?.subject,\n      idToken: idTokenClaims,\n    );\n  }\n\n"})}),"\n",(0,o.jsxs)(t.p,{children:["LogtoClient will handle the authorization, token exchange, and user information retrieval steps. Once the user is authenticated, the ",(0,o.jsx)(t.code,{children:"idTokenClaims"})," will be stored in the local storage.\nRetrieve the ",(0,o.jsx)(t.code,{children:"idTokenClaims"})," from the LogtoClient and update the current user stream."]}),"\n",(0,o.jsx)(t.h3,{id:"implement-the-sign-out-method",children:"Implement the Sign-out method"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-dart",children:"// lib/auth/custom_auth/custom_auth_manager.dart\n\nFuture signOut() async {\n    await logtoClient.signOut();\n\n    flutterFlowAuthAuthUserSubject.add(\n      FlutterFlowAuthAuthUser(loggedIn: false),\n    );\n  }\n"})}),"\n",(0,o.jsx)(t.h3,{id:"update-the-auth-util-methods",children:"Update the auth util methods"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["Add the ",(0,o.jsx)(t.code,{children:"authManager"})," getter to access the ",(0,o.jsx)(t.code,{children:"CustomAuthManager"})," instance."]}),"\n",(0,o.jsxs)(t.li,{children:["Add the ",(0,o.jsx)(t.code,{children:"currentUserUid"})," getter to get the current user uid."]}),"\n",(0,o.jsxs)(t.li,{children:["Add the ",(0,o.jsx)(t.code,{children:"currentUserData"})," getter to get the current user data."]}),"\n",(0,o.jsxs)(t.li,{children:["Add the ",(0,o.jsx)(t.code,{children:"logtoClient"})," getter to access the Logto client instance."]}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-dart",children:"// lib/auth/custom_auth/auth_util.dart\n\nimport 'package:logto_dart_sdk/logto_client.dart';\nimport 'package:logto_dart_sdk/src/modules/id_token.dart';\n\nimport 'custom_auth_manager.dart';\n\nexport 'custom_auth_manager.dart';\n\nfinal _authManager = CustomAuthManager();\nCustomAuthManager get authManager => _authManager;\nString get currentUserUid => currentUser?.uid ?? '';\nOpenIdClaims? get currentUserData => currentUser?.idToken;\nLogtoClient get logtoClient => _authManager.logtoClient;\n"})}),"\n",(0,o.jsx)(t.h2,{id:"integrate-the-custom-authentication-in-your-ui",children:"Integrate the custom authentication in your UI"}),"\n",(0,o.jsx)(t.h3,{id:"home-page",children:"Home Page"}),"\n",(0,o.jsxs)(t.p,{children:["Call the ",(0,o.jsx)(t.code,{children:"authManager.signIn"})," method to initiate the authentication flow when the user clicks on the sign-in button."]}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"redirectUri"})," is the callback URL that will be used to capture the authorization callback from the Logto sign-in page.\nSee the ",(0,o.jsx)(t.a,{href:"/quick-starts/flutter#implement-sign-in",children:"Flutter SDK"})," for more details on the redirectUri."]}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-dart",children:"// lib/pages/home_page/home_page_widget.dart\n\nfinal redirectUri = 'io.logto://callback';\n\n// ...\n\nFFButtonWidget(\n  onPressed: () async {\n    GoRouter.of(context).prepareAuthEvent();\n\n    await authManager.signIn(redirectUri);\n\n    context.replaceNamed('user');\n  },\n  text: 'Sign In',\n  // ...\n)\n"})}),"\n",(0,o.jsx)(t.h3,{id:"user-profile-page",children:"User Profile Page"}),"\n",(0,o.jsx)(t.p,{children:"Use the auth util getters to access the current user data and the Logto client instance."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-dart",children:"// lib/pages/user/user_widget.dart\n\nimport '/auth/custom_auth/auth_util.dart';\n\n// ...\n\nchildren: [\n  Text(\n    'User ID: $currentUserUid',\n  ),\n  Text(\n    'Display Name: ${currentUserData?.name}',\n  ),\n  Text(\n    'Username: ${currentUserData?.username}',\n  ),\n  Text(\n    'Email: ${currentUserData?.emailVerified ?? currentUserData?.email}',\n  ),\n]\n\n"})}),"\n",(0,o.jsx)(t.p,{children:"Implement the sign-out method when the user clicks on the sign-out button."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-dart",children:"// lib/pages/user/user_widget.dart\n\nFFButtonWidget(\n  onPressed: () async {\n    await authManager.signOut();\n\n    context.replaceNamed('HomePage');\n  },\n  text: 'Sign Out',\n  // ...\n)\n"})}),"\n",(0,o.jsx)(t.h2,{id:"further-readings",children:"Further readings"}),"\n",(0,o.jsxs)(t.p,{children:["Logto SDK provides more methods to interact with the Logto API. You may further customize the ",(0,o.jsx)(t.code,{children:"CustomAuthManager"})," class to implement more features."]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"/quick-starts/flutter#get-user-information",children:"User Profile"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"/quick-starts/flutter#api-resources",children:"API Resources"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"/quick-starts/flutter#organization",children:"Organization"})}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"dependency-troubleshooting",children:"Dependency troubleshooting"}),"\n",(0,o.jsx)(c,{}),"\n",(0,o.jsx)(p,{})]})}function k(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(b,{...e})}):b(e)}},15658:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>s});var r=n(30758);const o={},i=r.createContext(o);function a(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);