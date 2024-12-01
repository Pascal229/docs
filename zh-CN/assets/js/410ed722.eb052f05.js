"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[61096],{40985:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"logto-oss/deployment-and-configuration","title":"\u90e8\u7f72\u548c\u914d\u7f6e","description":"\u5728\u4e0a\u4e00\u7bc7\u6587\u7ae0\u4e2d\uff0c\u6211\u4eec\u4ecb\u7ecd\u4e86\u5feb\u901f\u5f00\u59cb\u4f7f\u7528 Logto\u7684\u57fa\u7840\u77e5\u8bc6\u3002\u672c\u6587\u5c06\u6df1\u5165\u63a2\u8ba8\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u90e8\u7f72 Logto \u7684\u6700\u4f73\u5b9e\u8df5\u548c\u8be6\u7ec6\u914d\u7f6e\u6b65\u9aa4\u3002","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/logto-oss/deployment-and-configuration.mdx","sourceDirName":"logto-oss","slug":"/logto-oss/deployment-and-configuration","permalink":"/zh-CN/logto-oss/deployment-and-configuration","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/zh-CN/docusaurus-plugin-content-docs/current/logto-oss/deployment-and-configuration.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"docsSidebar","previous":{"title":"\u5f00\u59cb\u4f7f\u7528 OSS","permalink":"/zh-CN/logto-oss/get-started-with-oss"},"next":{"title":"Logto CLI","permalink":"/zh-CN/logto-oss/using-cli/"}}');var r=o(86070),s=o(15658);const i={sidebar_position:2},c="\u90e8\u7f72\u548c\u914d\u7f6e",d={},l=[{value:"\u73af\u5883\u53d8\u91cf",id:"\u73af\u5883\u53d8\u91cf",level:2},{value:"\u57fa\u672c\u8981\u7d20",id:"\u57fa\u672c\u8981\u7d20",level:3},{value:"HTTPS",id:"https",level:3},{value:"\u53cd\u5411\u4ee3\u7406",id:"\u53cd\u5411\u4ee3\u7406",level:3},{value:"\u5bb9\u5668\u5316",id:"\u5bb9\u5668\u5316",level:2},{value:"\u5171\u4eab\u8fde\u63a5\u5668\u6587\u4ef6\u5939",id:"\u5171\u4eab\u8fde\u63a5\u5668\u6587\u4ef6\u5939",level:3},{value:"\u6570\u636e\u5e93\u53d8\u66f4",id:"\u6570\u636e\u5e93\u53d8\u66f4",level:3}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"\u90e8\u7f72\u548c\u914d\u7f6e",children:"\u90e8\u7f72\u548c\u914d\u7f6e"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5728\u4e0a\u4e00\u7bc7\u6587\u7ae0\u4e2d\uff0c\u6211\u4eec\u4ecb\u7ecd\u4e86",(0,r.jsx)(n.a,{href:"/logto-oss/get-started-with-oss",children:"\u5feb\u901f\u5f00\u59cb\u4f7f\u7528 Logto"}),"\u7684\u57fa\u7840\u77e5\u8bc6\u3002\u672c\u6587\u5c06\u6df1\u5165\u63a2\u8ba8\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u90e8\u7f72 Logto \u7684\u6700\u4f73\u5b9e\u8df5\u548c\u8be6\u7ec6\u914d\u7f6e\u6b65\u9aa4\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u73af\u5883\u53d8\u91cf",children:"\u73af\u5883\u53d8\u91cf"}),"\n",(0,r.jsxs)(n.p,{children:["\u6211\u4eec\u5728\u6f14\u793a\u4e2d\u4f7f\u7528\u4e86\u751f\u6210\u7684\u73af\u5883\u53d8\u91cf\u9884\u8bbe (",(0,r.jsx)(n.code,{children:"docker-compose.yml"}),")\uff0c\u4f60\u5e94\u8be5\u7528\u81ea\u5df1\u7684\u53d8\u91cf\u66ff\u6362\u5b83\u4eec\uff0c\u5e76\u5728\u591a\u4e2a Logto \u5b9e\u4f8b\u4e2d\u4fdd\u6301\u4e00\u81f4\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u4f60\u53ef\u4ee5\u76f4\u63a5\u8bbe\u7f6e\u73af\u5883\u53d8\u91cf\uff0c\u6216\u8005\u5c06 ",(0,r.jsx)(n.code,{children:".env"})," \u6587\u4ef6\u653e\u5728 Logto \u9879\u76ee\u7684\u6839\u76ee\u5f55\u4e2d\u3002\u5982\u679c\u4f60\u4f7f\u7528 Docker \u8fdb\u884c\u6d4b\u8bd5\uff0c\u8bf7\u67e5\u770b\u955c\u50cf\u5728 ",(0,r.jsx)(n.code,{children:"/etc/logto"})," \u4e2d\u751f\u6210\u7684 ",(0,r.jsx)(n.code,{children:".env"}),"\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"\u57fa\u672c\u8981\u7d20",children:"\u57fa\u672c\u8981\u7d20"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"DB_URL"})," Logto \u6570\u636e\u5e93\u7684 ",(0,r.jsx)(n.a,{href:"https://www.postgresql.org/docs/14/libpq-connect.html#id-1.7.3.8.3.6",children:"Postgres DSN"}),"\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"PORT"})," Logto \u76d1\u542c\u7684\u7aef\u53e3\u3002\u9ed8\u8ba4 ",(0,r.jsx)(n.code,{children:"3001"}),"\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"ENDPOINT"})," \u4f60\u53ef\u4ee5\u4e3a\u751f\u4ea7\u73af\u5883\u6307\u5b9a\u4e00\u4e2a\u5e26\u6709\u81ea\u5b9a\u4e49\u57df\u540d\u7684 URL\uff08\u4f8b\u5982 ",(0,r.jsx)(n.code,{children:"ENDPOINT=https://logto.domain.com"}),"\uff09\u3002\u8fd9\u4e5f\u4f1a\u5f71\u54cd ",(0,r.jsx)(n.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html#IssuerIdentifier",children:"OIDC \u53d1\u884c\u8005\u6807\u8bc6\u7b26"})," \u7684\u503c\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u542f\u7528\u7ba1\u7406\u63a7\u5236\u53f0"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"ADMIN_PORT"})," Logto \u7ba1\u7406\u63a7\u5236\u53f0\u76d1\u542c\u7684\u7aef\u53e3\u3002\u9ed8\u8ba4 ",(0,r.jsx)(n.code,{children:"3002"}),"\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"ADMIN_ENDPOINT"})," \u4f60\u53ef\u4ee5\u4e3a\u751f\u4ea7\u73af\u5883\u6307\u5b9a\u4e00\u4e2a\u5e26\u6709\u81ea\u5b9a\u4e49\u57df\u540d\u7684 URL\uff08\u4f8b\u5982 ",(0,r.jsx)(n.code,{children:"ADMIN_ENDPOINT=https://admin.domain.com"}),"\uff09\u3002\u8fd9\u4e5f\u4f1a\u5f71\u54cd\u7ba1\u7406\u63a7\u5236\u53f0\u91cd\u5b9a\u5411 URI \u7684\u503c\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u7981\u7528\u7ba1\u7406\u63a7\u5236\u53f0"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"ADMIN_DISABLE_LOCALHOST"})," \u8bbe\u7f6e\u4e3a ",(0,r.jsx)(n.code,{children:"1"})," \u6216 ",(0,r.jsx)(n.code,{children:"true"})," \u4ee5\u5173\u95ed\u7ba1\u7406\u63a7\u5236\u53f0\u7684\u7aef\u53e3\u3002\u5982\u679c\u672a\u8bbe\u7f6e ",(0,r.jsx)(n.code,{children:"ADMIN_ENDPOINT"}),"\uff0c\u5b83\u5c06\u5b8c\u5168\u7981\u7528\u7ba1\u7406\u63a7\u5236\u53f0\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u6709\u5173\u73af\u5883\u53d8\u91cf\u7684\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,r.jsx)(n.a,{href:"/concepts/core-service/configuration/",children:"\u914d\u7f6e"}),"\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"https",children:"HTTPS"}),"\n",(0,r.jsxs)(n.p,{children:["\u4f60\u53ef\u4ee5\u4f7f\u7528 Node.js \u76f4\u63a5\u63d0\u4f9b HTTPS \u670d\u52a1\uff0c\u6216\u8005\u5728 Node.js \u524d\u8bbe\u7f6e HTTPS \u4ee3\u7406 / \u8d1f\u8f7d\u5747\u8861\u5668\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,r.jsx)(n.a,{href:"/concepts/core-service/configuration/#enabling-https",children:"\u542f\u7528 HTTPS"}),"\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"\u53cd\u5411\u4ee3\u7406",children:"\u53cd\u5411\u4ee3\u7406"}),"\n",(0,r.jsx)(n.p,{children:"\u5982\u679c\u4f60\u60f3\u5728\u670d\u52a1\u5668\u4e0a\u4f7f\u7528\u53cd\u5411\u4ee3\u7406\uff0c\u4f8b\u5982 Nginx \u6216 Apache\uff0c\u4f60\u9700\u8981\u5728\u4ee3\u7406\u4f20\u9012\u8bbe\u7f6e\u4e2d\u5206\u522b\u6620\u5c04 3001 \u548c 3002 \u7aef\u53e3\u3002\u5047\u8bbe\u4f60\u4f7f\u7528 Nginx\uff0cLogto \u8ba4\u8bc1 (Authentication) \u7aef\u70b9\u8fd0\u884c\u5728\u7aef\u53e3 3001\uff0cLogto \u7ba1\u7406\u63a7\u5236\u53f0\u8fd0\u884c\u5728 3002\uff0c\u8bf7\u5728 nginx.conf \u4e2d\u653e\u7f6e\u4ee5\u4e0b\u914d\u7f6e\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"server {\n  listen 443 ssl;\n  server_name <your_endpoint_url>; // \u4f8b\u5982 auth.your-domain.com\n  ...\n\n  location / {\n    proxy_set_header Host $host;\n    proxy_set_header X-Real-IP $remote_addr;\n    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n    proxy_set_header X-Forwarded-Proto https;\n\n    proxy_pass http://127.0.0.1:3001;\n  }\n\n  ssl_certificate <path-to-your-certificate-for-auth-endpoint>;\n  ssl_certificate_key <path-to-your-certificate-key-for-auth-endpoint>\n  ...\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u7136\u540e\u4e3a\u4f60\u7684\u7ba1\u7406\u63a7\u5236\u53f0\u6dfb\u52a0\u7c7b\u4f3c\u7684\u914d\u7f6e\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"server {\n  listen 443 ssl;\n  server_name <your_admin_endpoint_url>; // \u4f8b\u5982 admin.your-domain.com\n  ...\n\n  location / {\n    proxy_set_header Host $host;\n    proxy_set_header X-Real-IP $remote_addr;\n    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n    proxy_set_header X-Forwarded-Proto https;\n\n    proxy_pass http://127.0.0.1:3002;\n  }\n\n  ssl_certificate <path-to-your-certificate-for-admin-endpoint>;\n  ssl_certificate_key <path-to-your-certificate-key-for-admin-endpoint>\n  ...\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u91cd\u65b0\u52a0\u8f7d Nginx \u914d\u7f6e\u4ee5\u5e94\u7528\u6700\u65b0\u66f4\u6539\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"nginx -s reload\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u4e00\u5207\u5c31\u7eea\u3002\u6253\u5f00\u6d4f\u89c8\u5668\u5e76\u8bbf\u95ee ",(0,r.jsx)(n.code,{children:"https://admin.your-domain.com"}),"\uff0c\u4f60\u5e94\u8be5\u80fd\u591f\u770b\u5230 Logto \u6b22\u8fce\u9875\u9762\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u5bb9\u5668\u5316",children:"\u5bb9\u5668\u5316"}),"\n",(0,r.jsx)(n.p,{children:"\u5bf9\u4e8e\u751f\u4ea7\u73af\u5883\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 Docker \u5c06 Logto \u5bb9\u5668\u5316\u3002\u4f60\u53ef\u4ee5\u5728\u9879\u76ee\u7684\u6839\u76ee\u5f55\u4e2d\u627e\u5230 Dockerfile\u3002\u5982\u679c\u4f60\u60f3\u8fd0\u884c\u591a\u4e2a Logto \u5b9e\u4f8b\uff0c\u4f8b\u5982\u5728 Kubernetes \u96c6\u7fa4\u4e2d\u90e8\u7f72 Logto\uff0c\u9700\u8981\u91c7\u53d6\u4e00\u4e9b\u989d\u5916\u7684\u6b65\u9aa4\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"\u5171\u4eab\u8fde\u63a5\u5668\u6587\u4ef6\u5939",children:"\u5171\u4eab\u8fde\u63a5\u5668\u6587\u4ef6\u5939"}),"\n",(0,r.jsxs)(n.p,{children:["\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cLogto \u4f1a\u5728 ",(0,r.jsx)(n.code,{children:"core"})," \u6587\u4ef6\u5939\u7684\u6839\u76ee\u5f55\u4e2d\u521b\u5efa\u4e00\u4e2a ",(0,r.jsx)(n.code,{children:"connectors"})," \u6587\u4ef6\u5939\u3002\u6211\u4eec\u5efa\u8bae\u5728\u591a\u4e2a Logto \u5b9e\u4f8b\u4e4b\u95f4\u5171\u4eab\u8be5\u6587\u4ef6\u5939\uff0c\u4f60\u9700\u8981\u5c06 ",(0,r.jsx)(n.code,{children:"packages/core/connectors"})," \u6587\u4ef6\u5939\u6302\u8f7d\u5230\u5bb9\u5668\u4e2d\uff0c\u5e76\u8fd0\u884c ",(0,r.jsx)(n.code,{children:"npm run cli connector add -- --official"})," \u6765\u90e8\u7f72\u8fde\u63a5\u5668\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u4ee5\u4e0b\u662f Kubernetes \u7684\u4e00\u4e2a\u6700\u5c0f\u793a\u4f8b ",(0,r.jsx)(n.code,{children:"deployment"}),"\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"apiVersion: extensions/v1beta1\nkind: Deployment\nmetadata:\n  name: logto\n  namespace: default\nspec:\n  template:\n    spec:\n      volumes:\n        - name: connectors\n          emptyDir: {}\n      initContainers:\n        - image: ghcr.io/logto-io/logto\n          command:\n            - /bin/sh\n          args:\n            - '-c'\n            - 'npm run cli connector add -- --official'\n          name: init\n          volumeMounts:\n            - name: connectors\n              mountPath: /etc/logto/packages/core/connectors\n      containers:\n        - image: ghcr.io/logto-io/logto\n          name: logto\n          volumeMounts:\n            - name: connectors\n              mountPath: /etc/logto/packages/core/connectors\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5728\u8fd9\u4e2a\u793a\u4f8b\u4e2d\uff0c\u6211\u4eec\u521b\u5efa\u4e86\u4e00\u4e2a\u7a7a\u76ee\u5f55\u4f5c\u4e3a\u5377\u5e76\u5c06\u5176\u6302\u8f7d\u5230\u5bb9\u5668\u4e2d\u3002\u7136\u540e\u6211\u4eec\u5728\u521d\u59cb\u5316\u5bb9\u5668\u4e2d\u8fd0\u884c ",(0,r.jsx)(n.code,{children:"npm run cli connector add -- --official"})," \u6765\u4e0b\u8f7d\u8fde\u63a5\u5668\u3002\u6700\u540e\uff0c\u6bcf\u4e2a\u5bb9\u5668\u5c06\u5171\u4eab\u540c\u4e00\u4e2a\u5305\u542b\u6211\u4eec\u5b98\u65b9\u8fde\u63a5\u5668\u7684\u8fde\u63a5\u5668\u6587\u4ef6\u5939\u3002"]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"\u8fd9\u662f\u4e00\u4e2a\u793a\u4f8b yaml\uff0c\u4e3a\u4e86\u8fd0\u884c Logto\uff0c\u4f60\u9700\u8981\u6b63\u786e\u8bbe\u7f6e\u73af\u5883\u53d8\u91cf\u3002"})}),"\n",(0,r.jsx)(n.p,{children:"\u5bf9\u4e8e\u751f\u4ea7\u73af\u5883\uff0c\u4f60\u53ef\u4ee5\u5c06\u201c\u7a7a\u76ee\u5f55\u201d\u5377\u66ff\u6362\u4e3a\u6301\u4e45\u5377\uff0c\u5e76\u4ee5\u81ea\u5df1\u7684\u65b9\u5f0f\u5b8c\u6210\u201c\u521d\u59cb\u5316\u201d\u4efb\u52a1\uff0c\u4f60\u77e5\u9053\u81ea\u5df1\u5728\u505a\u4ec0\u4e48\uff01"}),"\n",(0,r.jsx)(n.h3,{id:"\u6570\u636e\u5e93\u53d8\u66f4",children:"\u6570\u636e\u5e93\u53d8\u66f4"}),"\n",(0,r.jsx)(n.p,{children:"\u4e0e\u8fde\u63a5\u5668\u7c7b\u4f3c\uff0c\u6570\u636e\u5e93\u53d8\u66f4\u9700\u8981\u5728\u5355\u4e2a\u5b9e\u4f8b\u4e2d\u8fd0\u884c\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528\u4e00\u4e2a\u4f5c\u4e1a\u6765\u8fd0\u884c\u53d8\u66f4\u811a\u672c\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u5728\u975e\u4ea4\u4e92\u5f0f\u8fd0\u884c\u53d8\u66f4\u65f6\uff0c",(0,r.jsx)(n.code,{children:"CI=true"})," \u73af\u5883\u53d8\u91cf\u662f\u5fc5\u8981\u7684\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"apiVersion: batch/v1\nkind: Job\nmetadata:\n  name: alteration\nspec:\n  template:\n    spec:\n      containers:\n        - name: alteration\n          image: ghcr.io/logto-io/logto\n          imagePullPolicy: Always\n          env:\n            - name: CI\n              value: 'true'\n            - name: DB_URL\n              value: postgresql://user:password@localhost:5432/logto\n          command:\n            - /bin/sh\n          args:\n            - '-c'\n            - 'npm run alteration deploy latest'\n      restartPolicy: Never\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u6709\u5173\u53d8\u66f4\u547d\u4ee4\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,r.jsx)(n.a,{href:"/logto-oss/using-cli/database-alteration/",children:"\u6570\u636e\u5e93\u53d8\u66f4"}),"\u3002"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},15658:(e,n,o)=>{o.d(n,{R:()=>i,x:()=>c});var t=o(30758);const r={},s=t.createContext(r);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);