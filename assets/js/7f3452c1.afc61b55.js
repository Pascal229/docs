"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[10900],{49613:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var o=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=s(n),u=r,m=g["".concat(c,".").concat(u)]||g[u]||d[u]||i;return n?o.createElement(m,a(a({ref:t},p),{},{components:n})):o.createElement(m,a({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=g;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},52717:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return d}});var o=n(665),r=n(40151),i=(n(59496),n(49613)),a=["components"],l={sidebar_label:"Configure popular email service",sidebar_position:2},c="Configure popular email service",s={unversionedId:"docs/recipes/configure-connectors/email-connector/configure-popular-email-service",id:"version-1.x/docs/recipes/configure-connectors/email-connector/configure-popular-email-service",title:"Configure popular email service",description:"Logto provides a low-code configuration for the most popular email delivery service providers. They are using similar configuration steps so you can get started quickly.",source:"@site/versioned_docs/version-1.x/docs/recipes/configure-connectors/email-connector/configure-popular-email-service.md",sourceDirName:"docs/recipes/configure-connectors/email-connector",slug:"/docs/recipes/configure-connectors/email-connector/configure-popular-email-service",permalink:"/docs/recipes/configure-connectors/email-connector/configure-popular-email-service",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/versioned_docs/version-1.x/docs/recipes/configure-connectors/email-connector/configure-popular-email-service.md",tags:[],version:"1.x",sidebarPosition:2,frontMatter:{sidebar_label:"Configure popular email service",sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Configure Logto email service",permalink:"/docs/recipes/configure-connectors/email-connector/configure-logto-email-service"},next:{title:"SMS connector",permalink:"/docs/recipes/configure-connectors/configure-sms-connector"}},p={},d=[{value:"Configuration steps",id:"configuration-steps",level:2},{value:"Email template",id:"email-template",level:2}],g={toc:d};function u(e){var t=e.components,l=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},g,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"configure-popular-email-service"},"Configure popular email service"),(0,i.kt)("p",null,"Logto provides a low-code configuration for the most popular email delivery service providers. They are using similar configuration steps so you can get started quickly."),(0,i.kt)("p",null,"You can refer to the specific doc for detailed instructions on registering each email service provider. Supported email service providers:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/logto-io/logto/tree/master/packages/connectors/connector-aws-ses"},"AWS direct mail connector")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/logto-io/logto/tree/master/packages/connectors/connector-sendgrid-email"},"SendGrid mail connector")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/logto-io/logto/tree/master/packages/connectors/connector-smtp"},"SMTP connector")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/logto-io/logto/tree/master/packages/connectors/connector-aliyun-dm"},"Aliyun direct mail connector"))),(0,i.kt)("h2",{id:"configuration-steps"},"Configuration steps"),(0,i.kt)("p",null,"Follow these steps to configure your email connector:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Go to \u201cConnector > Email and SMS connectors\u201d in Logto Console."),(0,i.kt)("li",{parentName:"ol"},'To add a new one, click the "Set up" button and select the desired Email connector.'),(0,i.kt)("li",{parentName:"ol"},"In the configuration process, follow the steps below:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Go through the README doc for each type connector on the left, then follow the instructions."),(0,i.kt)("li",{parentName:"ul"},"Fill out any required forms in the Parameter Configuration section on the right."),(0,i.kt)("li",{parentName:"ul"},"Customize the Email template to fit your needs by editing the JSON code."),(0,i.kt)("li",{parentName:"ul"},"Test the configuration by sending an Email verification code to your email address using the \u201cGeneric\u201d template."),(0,i.kt)("li",{parentName:"ul"},'Click "Save and Done" to finish.')),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"After making the necessary changes, remember to send a test email to your email address.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Configure email connector guideline",src:n(84987).Z,width:"2512",height:"2666"})),(0,i.kt)("p",null,"If you wish to change the current Email connector, simply access the connector details page and click the \u201cChange connector\u201d button of the \u201cMore\u201d menu in the top-right corner. Or you can delete the old connector first, then add a new Email connector."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"You can bring ONLY ONE ",(0,i.kt)("em",{parentName:"p"},"email connector")," alive."),(0,i.kt)("p",{parentName:"admonition"},"If you change the active email connector and save changes, the previous Email connector will be disabled automatically. Also, the ",(0,i.kt)("em",{parentName:"p"},"config")," of past connectors will lose track. You may keep the old connectors' ",(0,i.kt)("em",{parentName:"p"},"config")," properly if you want to switch back to those connectors in the future.")),(0,i.kt)("h2",{id:"email-template"},"Email template"),(0,i.kt)("p",null,"Notice that:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Logto provides four different templates for customizing Email content, which are categorized based on their usage type: Register, SignIn, ForgotPassword, and Generic. It is highly recommended that you use different templates for various use cases, or it could trigger flow control, leading to a temporary outage of your service."),(0,i.kt)("li",{parentName:"ul"},"The verification code is valid for 10 minutes by default."),(0,i.kt)("li",{parentName:"ul"},"The verification code number sent to users uses the variate of {{code}}.")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Usage"),(0,i.kt)("th",{parentName:"tr",align:null},"Scenario"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Register"),(0,i.kt)("td",{parentName:"tr",align:null},"Users create an account using their phone number and verify by entering the verification code.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"SignIn"),(0,i.kt)("td",{parentName:"tr",align:null},"Users sign in using their phone number and verify by entering verification code instead of entering a password.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ForgotPassword"),(0,i.kt)("td",{parentName:"tr",align:null},"If users forget their password during sign-in, they can choose to verify their identity using their phone number.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Generic"),(0,i.kt)("td",{parentName:"tr",align:null},"This template can be used as a generic backup option for various scenarios, including linking a phone number to an existing account or testing connector configuration\u2026")))),(0,i.kt)("p",null,"There is a template example just for reference:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Email template of Logto for reference",src:n(23733).Z,width:"1876",height:"1364"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'<table cellpadding="0" cellspacing="0" border="0" width="100%"\n  style="font-family: -apple-system, system-ui, \'BlinkMacSystemFont\', \'Segoe UI\', \'Roboto\', \'Arial\', sans-serif;">\n  <tr>\n    <td align="center" valign="center">\n      <table cellpadding="0" cellspacing="0" border="0" width="100%"\n        style="max-width: 680px; border-radius: 16px; border: 1px solid #E0E3E3; padding: 32px; background-color: #FFFFFF;">\n        <tr>\n          <td align="center" valign="center">\n            <img\n              src="https://logtodev.blob.core.windows.net/public-blobs/default/r2a6qctI3lmG/2023/03/16/7Sf0Kx1N/logto_light.png"\n              width="164" height="60" style="margin-bottom: 16px;" alt="logto" />\n          </td>\n        </tr>\n        <tr>\n          <td align="center" valign="center" style="padding-bottom: 16px;">\n            <table cellpadding="0" cellspacing="0" border="0" width="100%" style="padding: 16px 32px;">\n              <tr>\n                <td align="center" valign="center" style="padding-bottom: 20px;">\n                  <h1 style=" font-size: 24px; font-weight: 600; color: #191C1D; line-height: 32px;">\n                    <a href="https://www.{{domain}}/account/verify?token={{token}}"\n                      style="color: #191C1D; text-decoration: none;">Verify your email to sign up for Logto</a>\n                  </h1>\n                </td>\n              </tr>\n              <tr>\n                <td align="center" valign="center" style="padding-bottom: 20px;">\n                  <div style="font-size: 14px; font-weight: 400; color: #191C1D;  line-height: 20px;">\n                    We have received a sign-up attempt with the following code. Please enter it in the browser window\n                    where\n                    you started signing up for Logto.\n                  </div>\n                </td>\n              </tr>\n              <tr>\n                <td align="center" valign="center" style="background: #EFF1F1; padding: 35px; border-radius: 12px;">\n                  <div style="font-size: 32px; font-weight: 600; color: #191C1D;  line-height: 40px;">\n                    {{code}}\n                  </div>\n                </td>\n              </tr>\n              <tr>\n                <td align="center" valign="center" style="padding-top: 20px;">\n                  <div style="font-size: 14px; font-weight: 400; color: #747778; line-height: 20px;">\n                    If you did not attempt to sign up but received this email, please disregard it. The code will remain\n                    active for 10 minutes.\n                  </div>\n                </td>\n            </table>\n          </td>\n        </tr>\n        <tr>\n          <td align="center" valign="center" style="padding-top: 32px;">\n            <table cellpadding="0" cellspacing="0" border="0" width="100%">\n              <tr>\n                <td align="center" valign="center" width="100%" style="padding-bottom: 16px;">\n                  <div style="border-top: 1px solid #E0E3E3; width: 65%;"></div>\n                </td>\n              </tr>\n              <tr>\n                <td align="center" valign="center" style="padding-bottom: 16px;">\n                  <div style="font-size: 14px; font-weight: 400; color: #747778;  line-height: 20px;">\n                    Logto, an effortless identity solution with all the features you need.\n                  </div>\n                </td>\n              </tr>\n              <tr>\n                <td align="center" valign="center" style="padding-bottom: 16px;">\n                  <table cellpadding="0" cellspacing="0" border="0" width="200px">\n                    <tr>\n                      <td align="center" valign="center">\n                        <a href="https://discord.gg/UEPaF3j5e6" target="_blank" rel="noopener">\n                          <img\n                            src="https://logtodev.blob.core.windows.net/public-blobs/default/r2a6qctI3lmG/2023/03/16/oPAkDBTF/discord.png"\n                            width="20px" height="20px" alt="discord" style="object-fit: contain;" />\n                        </a>\n                      </td>\n                      <td align="center" valign="center">\n                        <a href="https://github.com/logto-io/logto" target="_blank" rel="noopener">\n                          <img\n                            src="https://logtodev.blob.core.windows.net/public-blobs/default/r2a6qctI3lmG/2023/03/16/ZwpzN1WU/github.png"\n                            width="20px" height="20px" alt="github" style="object-fit: contain;" />\n                        </a>\n                      </td>\n                      <td align="center" valign="center">\n                        <a href="https://twitter.com/silverhand_io" target="_blank" rel="noopener">\n                          <img\n                            src="https://logtodev.blob.core.windows.net/public-blobs/default/r2a6qctI3lmG/2023/03/16/yoscEXbx/twitter.png"\n                            width="20px" height="20px" alt="twitter" style="object-fit: contain;" />\n                        </a>\n                      </td>\n                      <td align="center" valign="center">\n                        <a href="https://logto.io/subscribe" target="_blank" rel="noopener">\n                          <img\n                            src="https://logtodev.blob.core.windows.net/public-blobs/default/r2a6qctI3lmG/2023/03/16/Us1blUfD/subscribe.png"\n                            width="20px" height="20px" alt="subscribe" style="object-fit: contain;" />\n                        </a>\n                      </td>\n                    </tr>\n                  </table>\n                </td>\n              </tr>\n              <tr>\n                <td align="center" valign="center">\n                  <div style="font-size: 12px; font-weight: 400; color: #747778; line-height: 16px;">\n                    \xa9 2023 Logto. All rights reserved.\n                  </div>\n                </td>\n              </tr>\n            </table>\n          </td>\n        </tr>\n      </table>\n    </td>\n  </tr>\n</table>\n')))}u.isMDXComponent=!0},84987:function(e,t,n){t.Z=n.p+"assets/images/configure-email-connector-guideline-823e9b86b9f1ddafb112aee1bf86cd10.png"},23733:function(e,t,n){t.Z=n.p+"assets/images/email-template-of-Logto-for-reference-badb2c225b4ddd402b755c212fe26ba5.webp"}}]);