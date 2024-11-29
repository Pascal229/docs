"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[78991],{22280:(M,e,i)=>{i.r(e),i.d(e,{assets:()=>d,contentTitle:()=>L,default:()=>S,frontMatter:()=>O,metadata:()=>N,toc:()=>E});const N=JSON.parse('{"id":"connectors/enterprise-connectors","title":"Conectores empresariais","description":"A solu\xe7\xe3o de Single Sign-On (SSO) do Logto simplifica o gerenciamento de acesso para seus clientes empresariais. Conectores de SSO corporativo s\xe3o cruciais para habilitar o SSO para seus diferentes clientes empresariais.","source":"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/connectors/enterprise-connectors.mdx","sourceDirName":"connectors","slug":"/connectors/enterprise-connectors","permalink":"/pt-BR/connectors/enterprise-connectors","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/pt-BR/docusaurus-plugin-content-docs/current/connectors/enterprise-connectors.mdx","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"id":"enterprise-connectors","title":"Conectores empresariais","sidebar_label":"Conectores empresariais","sidebar_position":4},"sidebar":"docsSidebar","previous":{"title":"Conectores sociais","permalink":"/pt-BR/connectors/social-connectors"},"next":{"title":"Estrutura de dados do conector","permalink":"/pt-BR/connectors/connector-data-structure"}}');var j,D=i(86070),o=i(15658),s=i(30758);function n(){return n=Object.assign?Object.assign.bind():function(M){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var N in i)({}).hasOwnProperty.call(i,N)&&(M[N]=i[N])}return M},n.apply(null,arguments)}const a=M=>{let{title:e,titleId:i,...N}=M;return s.createElement("svg",n({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:24,height:24,fill:"none",viewBox:"0 0 24 24","aria-labelledby":i},N),e?s.createElement("title",{id:i},e):null,j||(j=s.createElement("image",{xlinkHref:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUuMDY5MzQgMTguNzA5N0M1LjU4NjY3IDE5LjAzMjMgNi40NDY2NyAxOS4zOTEgNy4zNTYgMTkuMzkxQzguMTg0IDE5LjM5MSA4Ljk1MzM0IDE5LjE1MSA5LjU5MDY3IDE4Ljc0MTdDOS41OTA2NyAxOC43NDE3IDkuNTkyIDE4Ljc0MTcgOS41OTMzNCAxOC43NDAzTDEyIDE3LjIzNjNWMjIuNjY3QzExLjYxODcgMjIuNjY3IDExLjIzNDcgMjIuNTYzIDEwLjkwMTMgMjIuMzU1TDUuMDY5MzQgMTguNzA5N1oiIGZpbGw9IiMyMjUwODYiLz4KPHBhdGggZD0iTTEwLjQ3MDcgMi4wMDkwMUwwLjQ3MDY2MiAxMy4yODlDLTAuMzAxMzM4IDE0LjE2MSAtMC4xMDAwMDUgMTUuNDc4MyAwLjkwMTMyOCAxNi4xMDM3QzAuOTAxMzI4IDE2LjEwMzcgNC42MDI2NiAxOC40MTcgNS4wNjkzMyAxOC43MDlDNS41ODY2NiAxOS4wMzE3IDYuNDQ2NjYgMTkuMzkwMyA3LjM1NTk5IDE5LjM5MDNDOC4xODM5OSAxOS4zOTAzIDguOTUzMzMgMTkuMTUwMyA5LjU5MDY2IDE4Ljc0MUM5LjU5MDY2IDE4Ljc0MSA5LjU5MTk5IDE4Ljc0MSA5LjU5MzMzIDE4LjczOTdMMTIgMTcuMjM1N0w2LjE4MTMzIDEzLjU5ODNMMTIuMDAxMyA3LjAzMzAxVjEuMzMzMDFDMTEuNDM2IDEuMzMzMDEgMTAuODcwNyAxLjU1ODM0IDEwLjQ3MDcgMi4wMDkwMVoiIGZpbGw9IiM2NkRERkYiLz4KPHBhdGggZD0iTTYuMTgxMjcgMTMuNTk5NUw2LjI1MDYxIDEzLjY0MjJMMTEuOTk5OSAxNy4yMzY4SDEyLjAwMTNWNy4wMzU1MUwxMS45OTk5IDcuMDM0MThMNi4xODEyNyAxMy41OTk1WiIgZmlsbD0iI0NCRjhGRiIvPgo8cGF0aCBkPSJNMjMuMDk4NyAxNi4xMDRDMjQuMSAxNS40Nzg3IDI0LjMwMTMgMTQuMTYxMyAyMy41MjkzIDEzLjI4OTNMMTYuOTY4IDUuODg4QzE2LjQzODcgNS42NDEzMyAxNS44NDUzIDUuNSAxNS4yMTczIDUuNUMxMy45ODQgNS41IDEyLjg4MTMgNi4wMzIgMTIuMTQ4IDYuODY4TDEyLjAwMjcgNy4wMzJMMTcuODIxMyAxMy41OTczTDEyLjAwMTMgMTcuMjM0N1YyMi42NjUzQzEyLjM4NCAyMi42NjUzIDEyLjc2NTMgMjIuNTYxMyAxMy4wOTg3IDIyLjM1MzNMMjMuMDk4NyAxNi4xMDI3VjE2LjEwNFoiIGZpbGw9IiMwNzQ3OTMiLz4KPHBhdGggZD0iTTEyLjAwMTMgMS4zMzMwMVY3LjAzMzAxTDEyLjE0NjcgNi44NjkwMUMxMi44OCA2LjAzMzAxIDEzLjk4MjcgNS41MDEwMSAxNS4yMTYgNS41MDEwMUMxNS44NDUzIDUuNTAxMDEgMTYuNDM3MyA1LjY0MzY3IDE2Ljk2NjcgNS44ODkwMUwxMy41MjggMi4wMTAzNEMxMy4xMjkzIDEuNTU5NjcgMTIuNTY0IDEuMzM0MzQgMTIgMS4zMzQzNEwxMi4wMDEzIDEuMzMzMDFaIiBmaWxsPSIjMDI5NEU0Ii8+CjxwYXRoIGQ9Ik0xNy44MiAxMy41OTkyTDEyLjAwMTMgNy4wMzUxNlYxNy4yMzUyTDE3LjgyIDEzLjU5OTJaIiBmaWxsPSIjOTZCQ0MyIi8+Cjwvc3ZnPgo=",width:24,height:24,preserveAspectRatio:"none"})))};var I;function r(){return r=Object.assign?Object.assign.bind():function(M){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var N in i)({}).hasOwnProperty.call(i,N)&&(M[N]=i[N])}return M},r.apply(null,arguments)}const g=M=>{let{title:e,titleId:i,...N}=M;return s.createElement("svg",r({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:24,height:24,fill:"none",viewBox:"0 0 24 24","aria-labelledby":i},N),e?s.createElement("title",{id:i},e):null,I||(I=s.createElement("image",{xlinkHref:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yMy41MiAxMi4yNzI5QzIzLjUyIDExLjQyMiAyMy40NDM2IDEwLjYwMzggMjMuMzAxOCA5LjgxODM2SDEyVjE0LjQ2MDJIMTguNDU4MkMxOC4xOCAxNS45NjAyIDE3LjMzNDUgMTcuMjMxMSAxNi4wNjM2IDE4LjA4MlYyMS4wOTI5SDE5Ljk0MThDMjIuMjEwOSAxOS4wMDM4IDIzLjUyIDE1LjkyNzQgMjMuNTIgMTIuMjcyOVYxMi4yNzI5WiIgZmlsbD0iIzQyODVGNCIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEyIDIzLjk5OTNDMTUuMjQgMjMuOTk5MyAxNy45NTY0IDIyLjkyNDggMTkuOTQxOCAyMS4wOTJMMTYuMDYzNiAxOC4wODExQzE0Ljk4OTEgMTguODAxMSAxMy42MTQ1IDE5LjIyNjYgMTIgMTkuMjI2NkM4Ljg3NDU1IDE5LjIyNjYgNi4yMjkwOSAxNy4xMTU3IDUuMjg1NDYgMTQuMjc5M0gxLjI3NjM3VjE3LjM4ODRDMy4yNTA5MSAyMS4zMTAyIDcuMzA5MDkgMjMuOTk5MyAxMiAyMy45OTkzVjIzLjk5OTNaIiBmaWxsPSIjMzRBODUzIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNS4yODU0NSAxNC4yODA0QzUuMDQ1NDUgMTMuNTYwNCA0LjkwOTA5IDEyLjc5MTMgNC45MDkwOSAxMi4wMDA0QzQuOTA5MDkgMTEuMjA5NSA1LjA0NTQ1IDEwLjQ0MDQgNS4yODU0NSA5LjcyMDQyVjYuNjExMzNIMS4yNzYzNkMwLjQ2MzYzNiA4LjIzMTMzIDAgMTAuMDY0MSAwIDEyLjAwMDRDMCAxMy45MzY4IDAuNDYzNjM2IDE1Ljc2OTUgMS4yNzYzNiAxNy4zODk1TDUuMjg1NDUgMTQuMjgwNFYxNC4yODA0WiIgZmlsbD0iI0ZCQkMwNSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEyIDQuNzcyNzNDMTMuNzYxOCA0Ljc3MjczIDE1LjM0MzYgNS4zNzgxOCAxNi41ODczIDYuNTY3MjdMMjAuMDI5MSAzLjEyNTQ1QzE3Ljk1MDkgMS4xODkwOSAxNS4yMzQ1IDAgMTIgMEM3LjMwOTA5IDAgMy4yNTA5MSAyLjY4OTA5IDEuMjc2MzcgNi42MTA5MUw1LjI4NTQ2IDkuNzJDNi4yMjkwOSA2Ljg4MzY0IDguODc0NTUgNC43NzI3MyAxMiA0Ljc3MjczVjQuNzcyNzNaIiBmaWxsPSIjRUE0MzM1Ii8+Cjwvc3ZnPgo=",width:24,height:24,preserveAspectRatio:"none"})))};var T;function c(){return c=Object.assign?Object.assign.bind():function(M){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var N in i)({}).hasOwnProperty.call(i,N)&&(M[N]=i[N])}return M},c.apply(null,arguments)}const u=M=>{let{title:e,titleId:i,...N}=M;return s.createElement("svg",c({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:24,height:24,fill:"none",viewBox:"0 0 24 24","aria-labelledby":i},N),e?s.createElement("title",{id:i},e):null,T||(T=s.createElement("image",{xlinkHref:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzk5MTRfMjA2MTMpIj4KPHBhdGggZD0iTTI0IDEzLjc5OTJMMjMuNCA4LjM5OTIyTDIxLjY2IDkuNTM5MjJDMjAuMDQgOC41MTkyMiAxOCA3Ljc5OTIyIDE1LjcyIDcuNDM5MjJDMTUuNzIgNy40MzkyMiAxNC41OCA3LjE5OTIyIDEzLjA4IDcuMTk5MjJDMTEuNTggNy4xOTkyMiAxMC4yIDcuMzc5MjIgMTAuMiA3LjM3OTIyQzQuMzggOC4wOTkyMiAwIDExLjM5OTIgMCAxNS4zNTkyQzAgMTkuNDM5MiA0LjUgMjIuNzk5MiAxMS40IDIzLjM5OTJWMjEuMDU5MkM2LjY2IDIwLjM5OTIgMy42NiAxOC4xNzkyIDMuNjYgMTUuMzU5MkMzLjY2IDEyLjcxOTIgNi40MiAxMC40OTkyIDEwLjIgOS43NzkyMkMxMC4yIDkuNzc5MjIgMTMuMTQgOS4xMTkyMiAxNS43MiA5Ljg5OTIyQzE2Ljk4IDEwLjE5OTIgMTguMTIgMTAuNjE5MiAxOS4wOCAxMS4yMTkyTDE2LjggMTIuNTk5MkwyNCAxMy43OTkyWiIgZmlsbD0iIzlFOUU5RSIvPgo8cGF0aCBkPSJNMTEuMzk5OSAyLjM5OTYxVjIzLjM5OTZMMTQuOTk5OSAyMS41OTk2VjAuNTk5NjA5TDExLjM5OTkgMi4zOTk2MVoiIGZpbGw9IiNGRjk4MDAiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF85OTE0XzIwNjEzIj4KPHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=",width:24,height:24,preserveAspectRatio:"none"})))};var z;function t(){return t=Object.assign?Object.assign.bind():function(M){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var N in i)({}).hasOwnProperty.call(i,N)&&(M[N]=i[N])}return M},t.apply(null,arguments)}const x=M=>{let{title:e,titleId:i,...N}=M;return s.createElement("svg",t({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:24,height:24,fill:"none",viewBox:"0 0 24 24","aria-labelledby":i},N),e?s.createElement("title",{id:i},e):null,z||(z=s.createElement("image",{xlinkHref:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzk5MTRfMjA2MzApIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMy4yMDIxIDAuMTcwNDI3TDEyLjcwOTkgNi4yNDkzNEMxMi40NzcgNi4yMjExIDEyLjI0MTEgNi4yMDU5NyAxMiA2LjIwNTk3QzExLjcwMDUgNi4yMDU5NyAxMS40MDYxIDYuMjI4MTYgMTEuMTE4NiA2LjI3MjUzTDEwLjgzODMgMy4zMjQ4NUMxMC44MjkyIDMuMjMzMDggMTAuOTAyOCAzLjE1MjQgMTAuOTk1NiAzLjE1MzQxSDExLjQ5ODhMMTEuMjU1OCAwLjE3MDQyN0MxMS4yNDc3IDAuMDc4NjU4NyAxMS4zMjAzIDAgMTEuNDEyMSAwSDEzLjA0MzdDMTMuMTM1NSAwIDEzLjIwNzEgMC4wNzg2NTg3IDEzLjIwMDEgMC4xNzA0MjdIMTMuMjAyMVpNOS4wODM2IDAuNDcxOTUzQzkuMDU5NCAwLjM4MzIwOSA4Ljk2NDYgMC4zMzQ4MDQgOC44Nzc4NyAwLjM2NjA2Nkw3LjM0NCAwLjkyNDc0N0M3LjI1NzI3IDAuOTU2MDA3IDcuMjE2OTMgMS4wNTQ4MyA3LjI1NTI3IDEuMTM4NTNMOC41MDI3MyAzLjg1ODMxTDguMDI4NzMgNC4wMjk3NUM3Ljk0MiA0LjA2MTAxIDcuODk5NjcgNC4xNjA4NSA3Ljk0IDQuMjQ1NTVMOS4yMTA2NyA2LjkxOTkzQzkuNjcxNTMgNi42NjU4MyAxMC4xNzA3IDYuNDc1MjMgMTAuNjk4MSA2LjM1NDIxTDkuMDgzNiAwLjQ3MTk1M1pNNS4zMTgwMiAyLjE2NTEzTDguODQ3NiA3LjEzNzhDOC4zOTk4NyA3LjQyOTIgNy45OTU0NyA3Ljc4MDEzIDcuNjQ0NTMgOC4xODA1M0w1LjUzMzgzIDYuMTAxMDlDNS40NjcyNyA2LjAzNTU1IDUuNDcyMzEgNS45Mjc2NSA1LjU0MjkxIDUuODY4MTVMNS45MjkxNCA1LjU0NTQ0TDMuODI3NTMgMy40MTY2MUMzLjc2Mjk5IDMuMzUxMDcgMy43NjgwMyAzLjI0NTE4IDMuODM4NjIgMy4xODU2OEw1LjA4ODA5IDIuMTM1ODlDNS4xNTg2OSAyLjA3NjM5IDUuMjY0NTcgMi4wOTA1MSA1LjMxODAyIDIuMTY1MTNaTTIuMzU3MjEgNS4wNDQyNUMyLjI4MTU3IDQuOTkyODEgMi4xNzc3MSA1LjAxNjAxIDIuMTMxMzEgNS4wOTQ2N0wxLjMxNTQ4IDYuNTA4NTFDMS4yNjkwOSA2LjU4ODE3IDEuMzAxMzYgNi42OSAxLjM4NDA1IDYuNzI5MzNMNC4wODc3MSA4LjAxMTA3TDMuODM0NTkgOC40NDY3M0MzLjc4ODIgOC41Mjc0IDMuODIwNDcgOC42MzAyNyAzLjkwNTE4IDguNjY4Nkw2LjU5ODc1IDkuODk5OTNDNi43OTQ0IDkuMzk4NzMgNy4wNTQ2IDguOTMxOCA3LjM3MzI3IDguNTEwMjdMMi4zNTcyMSA1LjA0NDI1Wk0wLjM2NTUxOSA4Ljg4NjRDMC4zODE2NTQgOC43OTU2NyAwLjQ3MDM5OCA4LjczODIgMC41NjAxNSA4Ljc2MTRMNi40NTk1OSAxMC4zMDIzQzYuMzA3MzEgMTAuODAwNSA2LjIyMTU5IDExLjMyNzkgNi4yMDk0OSAxMS44NzM1TDMuMjU1NzQgMTEuNjM2NUMzLjE2Mjk2IDExLjYyOTQgMy4wOTc0MSAxMS41NDM3IDMuMTEzNTUgMTEuNDUxOUwzLjIwMjI5IDEwLjk1NjdMMC4yMjQzMzYgMTAuNjc3NEMwLjEzMjU2NyAxMC42NjgzIDAuMDY4MDI2IDEwLjU4MzcgMC4wODQxNjEzIDEwLjQ5MjlMMC4zNjY1MjcgOC44ODU0TDAuMzY1NTE5IDguODg2NFpNMC4xNDI2NTEgMTIuODcwOEMwLjA1MDg4MjIgMTIuODc5OSAtMC4wMTM2NTg3IDEyLjk2NDYgMC4wMDI0NzY1OCAxMy4wNTUzTDAuMjg1ODUxIDE0LjY2MjhDMC4zMDE5ODcgMTQuNzUzNSAwLjM5MTczOSAxNC44MTExIDAuNDgwNDgyIDE0Ljc4NzlMMy4zNzQ3MyAxNC4wMzE1TDMuNDYxNDYgMTQuNTI2N0MzLjQ3NzYgMTQuNjE4NCAzLjU2OTM3IDE0LjY3NTkgMy42NTgxMSAxNC42NTA3TDYuNTEzMDMgMTMuODYyMUM2LjM0NDYyIDEzLjM2NjkgNi4yNDA3NSAxMi44NDM1IDYuMjEzNTMgMTIuMjk5TDAuMTQyNjUxIDEyLjg3MDhaTTEuMDg2NTYgMTcuMDk1MkMxLjA0MDE3IDE3LjAxNTUgMS4wNzI0NCAxNi45MTM3IDEuMTU1MTMgMTYuODc0M0w2LjY2MzI5IDE0LjI2MjVDNi44NzMwNyAxNC43NTY2IDcuMTUwNCAxNS4yMTU0IDcuNDgyMTMgMTUuNjI2OUw1LjA2NzkzIDE3LjM0NDNDNC45OTIyOSAxNy4zOTg3IDQuODg2NCAxNy4zNzQ1IDQuODQxMDIgMTcuMjk0OUw0LjU4OTkyIDE2Ljg1ODJMMi4xMjkzIDE4LjU1OTVDMi4wNTM2NyAxOC42MTE5IDEuOTQ5NzkgMTguNTg4NyAxLjkwMzQxIDE4LjUwOUwxLjA4NjU2IDE3LjA5NTJaTTcuNzYwNDcgMTUuOTQ5NkwzLjQ3NTU4IDIwLjI4OTlDMy40MTEwNCAyMC4zNTU1IDMuNDE2MDggMjAuNDYxMyAzLjQ4NjY3IDIwLjUyMDlMNC43MzcxNSAyMS41Njk3QzQuODA3NzUgMjEuNjI5MSA0LjkxMzYzIDIxLjYxNSA0Ljk2NzA4IDIxLjU0MDRMNi42OTc2IDE5LjA5OTlMNy4wODI4IDE5LjQyNDdDNy4xNTM0IDE5LjQ4NDIgNy4yNjEzMyAxOS40NzAxIDcuMzEzNzMgMTkuMzkzNEw4Ljk5MzggMTYuOTU2QzguNTM4IDE2LjY3NzcgOC4xMjM1MyAxNi4zMzc4IDcuNzYwNDcgMTUuOTQ5NlpNNi45MTQ0IDIyLjkxNzlDNi44Mjc2NyAyMi44ODY3IDYuNzg3MzMgMjIuNzg3OSA2LjgyNTY3IDIyLjcwNDFMOS4zNjY5MyAxNy4xNTk3QzkuODM0ODcgMTcuMzk4NyAxMC4zMzkxIDE3LjU3NzIgMTAuODY5NSAxNy42ODIxTDEwLjEyNDMgMjAuNTQ4MUMxMC4xMDExIDIwLjYzNzkgMTAuMDA1MyAyMC42ODgzIDkuOTE4NiAyMC42NTZMOS40NDU2IDIwLjQ4MjVMOC42NTMgMjMuMzY3N0M4LjYyODczIDIzLjQ1NjUgOC41MzQgMjMuNTA0OSA4LjQ0NzI3IDIzLjQ3MzZMNi45MTM0IDIyLjkxNTlMNi45MTQ0IDIyLjkxNzlaTTExLjI5MTEgMTcuNzQ5N0wxMC43OTg5IDIzLjgyOTZDMTAuNzkxOSAyMy45MjEzIDEwLjg2MzUgMjQgMTAuOTU1MyAyNEgxMi41ODY5QzEyLjY3ODcgMjQgMTIuNzUxMyAyMy45MjEzIDEyLjc0MzMgMjMuODI5NkwxMi41MDAyIDIwLjg0NzZIMTMuMDAzNEMxMy4wOTYyIDIwLjg0ODYgMTMuMTY4OCAyMC43Njg5IDEzLjE2MDcgMjAuNjc2MUwxMi44ODA0IDE3LjcyODVDMTIuNTkzIDE3Ljc3MTkgMTIuMjk4NSAxNy43OTUxIDExLjk5OSAxNy43OTUxQzExLjc1OSAxNy43OTUxIDExLjUyMyAxNy43Nzg5IDExLjI5MDEgMTcuNzUwN0wxMS4yOTExIDE3Ljc0OTdaTTE3LjE3NTQgMS4yOTQ4NUMxNy4yMTM3IDEuMjExMTQgMTcuMTcyMyAxLjExMzMzIDE3LjA4NjcgMS4wODEwNUwxNS41NTI4IDAuNTIzMzgzQzE1LjQ2NzEgMC40OTIxMjEgMTUuMzcxMyAwLjU0MDUyNyAxNS4zNDcxIDAuNjI5MjdMMTQuNTU0NCAzLjUxNDQzTDE0LjA4MTUgMy4zNDA5OEMxMy45OTQ3IDMuMzA4NzEgMTMuODk4OSAzLjM1OTEzIDEzLjg3NTcgMy40NDg4OUwxMy4xMzA1IDYuMzE0ODlDMTMuNjYwOSA2LjQxOTc3IDE0LjE2NTEgNi41OTgyNiAxNC42MzMxIDYuODM3MjdMMTcuMTc1NCAxLjI5MzgzVjEuMjk0ODVaTTIwLjUyNDUgMy43MTEwOEwxNi4yMzk1IDguMDUxNEMxNS44Nzc1IDcuNjYyMiAxNS40NjMxIDcuMzIyMzMgMTUuMDA2MiA3LjA0NEwxNi42ODYzIDQuNjA2NThDMTYuNzM4NyA0LjUzMDk1IDE2Ljg0NjYgNC41MTU4MiAxNi45MTcyIDQuNTc2MzNMMTcuMzAyNSA0LjkwMTA1TDE5LjAzMjkgMi40NjA2MUMxOS4wODY0IDIuMzg1OTggMTkuMTkyMyAyLjM3MTg3IDE5LjI2MjkgMi40MzEzNkwyMC41MTMzIDMuNDgwMTVDMjAuNTgzOSAzLjUzOTY1IDIwLjU4OSAzLjY0NjU0IDIwLjUyNDUgMy43MTEwOFpNMjIuODQ0OSA3LjEyNjY3QzIyLjkyODYgNy4wODczMyAyMi45NTk5IDYuOTg1NTMgMjIuOTEzNSA2LjkwNTg3TDIyLjA5NjYgNS40OTE5OUMyMi4wNTAzIDUuNDEyMzMgMjEuOTQ2MyA1LjM4OTEzIDIxLjg3MDcgNS40NDE1N0wxOS40MTAxIDcuMTQyOEwxOS4xNTkgNi43MDYxM0MxOS4xMTI2IDYuNjI1NDkgMTkuMDA2NyA2LjYwMjI5IDE4LjkzMjEgNi42NTY3NUwxNi41MTc5IDguMzc0MTNDMTYuODQ5NyA4Ljc4NjYgMTcuMTI3IDkuMjQ0NCAxNy4zMzY3IDkuNzM4NTNMMjIuODQ0OSA3LjEyNjY3Wk0yMy43MTQyIDkuMzM5MkwyMy45OTc1IDEwLjk0NjdDMjQuMDEzNyAxMS4wMzg1IDIzLjk0ODEgMTEuMTIzMSAyMy44NTc0IDExLjEzMTJMMTcuNzg2NSAxMS43MDFDMTcuNzU5MyAxMS4xNTY1IDE3LjY1NTQgMTAuNjMzMSAxNy40ODcgMTAuMTM3OUwyMC4zNDE5IDkuMzUwMzNDMjAuNDMwNyA5LjMyNTA3IDIwLjUyMjQgOS4zODM2IDIwLjUzODUgOS40NzQzM0wyMC42MjQzIDkuOTY5NDdMMjMuNTE4NSA5LjIxMzEzQzIzLjYwNzMgOS4xODk5MyAyMy42OTcxIDkuMjQ3NDcgMjMuNzEzMiA5LjMzODJMMjMuNzE0MiA5LjMzOTJaTTIzLjQzOTkgMTUuMjM5NkMyMy41Mjg2IDE1LjI2MjggMjMuNjE4NCAxNS4yMDUzIDIzLjYzNDUgMTUuMTE0NkwyMy45MTY5IDEzLjUwNzFDMjMuOTMzIDEzLjQxNjMgMjMuODY3NSAxMy4zMzE3IDIzLjc3NjcgMTMuMzIyNkwyMC43OTg3IDEzLjA0MzNMMjAuODg3NSAxMi41NDgxQzIwLjkwMzYgMTIuNDU2MyAyMC44MzgxIDEyLjM3MTYgMjAuNzQ1MyAxMi4zNjM1TDE3Ljc5MTUgMTIuMTI2NUMxNy43Nzk1IDEyLjY3MzEgMTcuNjkzNyAxMy4xOTk1IDE3LjU0MTUgMTMuNjk4N0wyMy40NDA5IDE1LjIzODZMMjMuNDM5OSAxNS4yMzk2Wk0yMS44Njg3IDE4LjkwNzNDMjEuODIyMyAxOC45ODYgMjEuNzE4NSAxOS4wMDkyIDIxLjY0MjggMTguOTU3OEwxNi42MjQ4IDE1LjQ5MTdDMTYuOTQzNSAxNS4wNzAyIDE3LjIwNDYgMTQuNjAzMyAxNy4zOTkzIDE0LjEwMjFMMjAuMDkyOCAxNS4zMzQ0QzIwLjE3NzUgMTUuMzcyNyAyMC4yMTA4IDE1LjQ3NjYgMjAuMTYzNCAxNS41NTYzTDE5LjkxMDMgMTUuOTkxOUwyMi42MTM5IDE3LjI3MzdDMjIuNjk2NyAxNy4zMTMgMjIuNzI4OSAxNy40MTQ5IDIyLjY4MjUgMTcuNDk0NUwyMS44NjY3IDE4LjkwODNMMjEuODY4NyAxOC45MDczWk0xNS4xNTI0IDE2Ljg2MzJMMTguNjgyIDIxLjgzNjlDMTguNzM1NSAyMS45MTE1IDE4Ljg0MDMgMjEuOTI1NiAxOC45MTE5IDIxLjg2NjFMMjAuMTYxNCAyMC44MTYzQzIwLjIzMiAyMC43NTY5IDIwLjIzNzEgMjAuNjQ5OSAyMC4xNzI1IDIwLjU4NTRMMTguMDcwOSAxOC40NTY2TDE4LjQ1NzEgMTguMTMzOUMxOC41Mjc3IDE4LjA3NDQgMTguNTMyNyAxNy45NjY1IDE4LjQ2NjIgMTcuOTAxOUwxNi4zNTU1IDE1LjgyMjVDMTYuMDA0NiAxNi4yMjE5IDE1LjYwMDIgMTYuNTcyOCAxNS4xNTI0IDE2Ljg2NDNWMTYuODYzMlpNMTUuMTIyMiAyMy42MzQ5QzE1LjAzNjUgMjMuNjY2MiAxNC45NDA3IDIzLjYxNzggMTQuOTE2NSAyMy41MjkxTDEzLjMwMDkgMTcuNjQ3OEMxMy44MjgzIDE3LjUyNjggMTQuMzI3NSAxNy4zMzUyIDE0Ljc4ODQgMTcuMDgyMUwxNi4wNTkgMTkuNzU2NUMxNi4wOTkzIDE5Ljg0MDEgMTYuMDU4IDE5Ljk0MSAxNS45NzAzIDE5Ljk3MjNMMTUuNDk2MyAyMC4xNDM3TDE2Ljc0MzcgMjIuODYzNUMxNi43ODIxIDIyLjk0NzIgMTYuNzQwNyAyMy4wNDUgMTYuNjU1IDIzLjA3NzNMMTUuMTIxMiAyMy42MzU5TDE1LjEyMjIgMjMuNjM0OVoiIGZpbGw9ImJsYWNrIi8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDBfOTkxNF8yMDYzMCI+CjxyZWN0IHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K",width:24,height:24,preserveAspectRatio:"none"})))};var A;function l(){return l=Object.assign?Object.assign.bind():function(M){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var N in i)({}).hasOwnProperty.call(i,N)&&(M[N]=i[N])}return M},l.apply(null,arguments)}const y=M=>{let{title:e,titleId:i,...N}=M;return s.createElement("svg",l({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:24,height:24,fill:"none",viewBox:"0 0 24 24","aria-labelledby":i},N),e?s.createElement("title",{id:i},e):null,A||(A=s.createElement("image",{xlinkHref:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAgMjAuMDk4OEMwIDE3LjQ2MzIgMi41MTQzNCA3LjYzMDE1IDcuNzEyOTEgMS4wNDEwMkM0LjA0MzMzIDcuOTY4MDYgMS45MDg3MSAxMi42NTgzIDMuNDY1NzEgMTYuMzE0M0M0LjY4ODkxIDE5LjE4NjUgMTAuOTc0OCAxOC4yNzQxIDE0LjM3MjUgMTcuMTI1M0M4LjMyNDUxIDE5Ljg2MjMgMi4xMTc5NCAyMC4yMzQgMCAyMC4wOTg4WiIgZmlsbD0iI0MxMjcyRCIvPgo8cGF0aCBkPSJNMTEuMjYwNSAwLjc1QzEzLjU1NTcgMi4wNjc4MyAyMC44NjEzIDkuMTQ5ODMgMjQgMTYuOTIxN0MxOS44MDI2IDEwLjI5NzcgMTYuNzg1NSA2LjExNDE2IDEyLjgyMzMgNS42MjcxM0M5LjcxMDU1IDUuMjQ0NTIgNy4zNjIxMSAxMS4xMTQ0IDYuNjYzNyAxNC42MTUyQzcuMzA0MjQgOC4wMzc4IDEwLjA4MzggMi41MDY1IDExLjI2MDUgMC43NVoiIGZpbGw9IiNDMTI3MkQiLz4KPHBhdGggZD0iTTIyLjUzMiAyMC4wNzUyQzIwLjIzNjggMjEuMzkzMSAxMC40MTY4IDI0LjE0NDEgMi4wNzk1OSAyMi45NjE0QzkuOTQ2NiAyMi42NTgzIDE1LjA5ODMgMjIuMTUxNiAxNy41MDM1IDE4Ljk4MjZDMTkuMzkzMSAxNi40OTMxIDE1LjQ1NTYgMTEuNTM1NSAxMi43NTYzIDkuMTgzNTlDMTguMTYzOCAxMy4wMjQgMjEuNTkwNyAxOC4xODM2IDIyLjUzMiAyMC4wNzUyWiIgZmlsbD0iI0MxMjcyRCIvPgo8L3N2Zz4K",width:24,height:24,preserveAspectRatio:"none"})))},O={id:"enterprise-connectors",title:"Conectores empresariais",sidebar_label:"Conectores empresariais",sidebar_position:4},L=void 0,d={},E=[{value:"Conectores empresariais",id:"conectores-empresariais",level:2},{value:"Conectores empresariais populares",id:"conectores-empresariais-populares",level:3},{value:"Personalize seus conectores empresariais",id:"personalize-seus-conectores-empresariais",level:3},{value:"Configurando conectores empresariais",id:"configurando-conectores-empresariais",level:2},{value:"Habilitando SSO empresarial",id:"habilitando-sso-empresarial",level:2},{value:"Just-in-time para organiza\xe7\xe3o",id:"just-in-time-para-organiza\xe7\xe3o",level:2},{value:"FAQs",id:"faqs",level:2}];function w(M){const e={a:"a",admonition:"admonition",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...M.components},{CloudLink:i,Details:N,DocCardList:j,Url:s}=e;return i||p("CloudLink",!0),N||p("Details",!0),j||p("DocCardList",!0),s||p("Url",!0),(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(e.p,{children:"A solu\xe7\xe3o de Single Sign-On (SSO) do Logto simplifica o gerenciamento de acesso para seus clientes empresariais. Conectores de SSO corporativo s\xe3o cruciais para habilitar o SSO para seus diferentes clientes empresariais."}),"\n",(0,D.jsx)(e.p,{children:"Esses conectores facilitam o processo de autentica\xe7\xe3o entre seu servi\xe7o e os IdPs empresariais. O Logto suporta tanto SSO iniciado pelo SP quanto SSO iniciado pelo IdP, o que permite que membros da organiza\xe7\xe3o acessem seus servi\xe7os usando suas credenciais existentes da empresa, aumentando a seguran\xe7a e a produtividade. Saiba mais sobre conceitos de SSO em nosso documento dedicado:"}),"\n",(0,D.jsxs)(e.ul,{children:["\n",(0,D.jsxs)(e.li,{children:["\n",(0,D.jsx)(s,{type:"inline",href:"https://blog.logto.io/idp-vs-sp-initiated-sso",children:(0,D.jsx)(e.p,{children:"SSO iniciado pelo IdP & SSO iniciado pelo SP"})}),"\n"]}),"\n",(0,D.jsxs)(e.li,{children:["\n",(0,D.jsx)(s,{type:"inline",href:"https://blog.logto.io/differences-between-saml-and-oidc",children:(0,D.jsx)(e.p,{children:"SAML vs. OpenID Connect"})}),"\n"]}),"\n",(0,D.jsxs)(e.li,{children:["\n",(0,D.jsx)(s,{type:"inline",href:"https://blog.logto.io/logto-as-idp",children:(0,D.jsx)(e.p,{children:"Aplicativos de terceiros"})}),"\n"]}),"\n"]}),"\n",(0,D.jsx)(e.h2,{id:"conectores-empresariais",children:"Conectores empresariais"}),"\n",(0,D.jsx)(e.p,{children:"O Logto fornece conectores pr\xe9-constru\xeddos para provedores de identidade empresariais populares, oferecendo integra\xe7\xe3o r\xe1pida. Para necessidades personalizadas, suportamos integra\xe7\xe3o via protocolos OIDC e SAML."}),"\n",(0,D.jsx)(e.h3,{id:"conectores-empresariais-populares",children:"Conectores empresariais populares"}),"\n",(0,D.jsx)(j,{items:[{type:"link",label:"Microsoft Entra ID (OIDC)",href:"/integrations/entra-id-oidc",customProps:{icon:(0,D.jsx)(a,{})}},{type:"link",label:"Microsoft Entra ID (SAML)",href:"/integrations/entra-id-saml",customProps:{icon:(0,D.jsx)(a,{})}},{type:"link",label:"Google Workspace (OIDC)",href:"/integrations/google-workspace",customProps:{icon:(0,D.jsx)(g,{})}},{type:"link",label:"Okta (OIDC)",href:"/integrations/okta",customProps:{icon:(0,D.jsx)(x,{})}}]}),"\n",(0,D.jsx)(e.h3,{id:"personalize-seus-conectores-empresariais",children:"Personalize seus conectores empresariais"}),"\n",(0,D.jsx)(j,{items:[{type:"link",label:"OIDC (enterprise)",href:"/integrations/oidc-sso",customProps:{icon:(0,D.jsx)(u,{})}},{type:"link",label:"SAML (enterprise)",href:"/integrations/saml-sso",customProps:{icon:(0,D.jsx)(y,{})}}]}),"\n",(0,D.jsx)(e.p,{children:"Se nossos conectores padr\xe3o n\xe3o atenderem \xe0s suas necessidades espec\xedficas, n\xe3o hesite em nos contatar."}),"\n",(0,D.jsx)(e.h2,{id:"configurando-conectores-empresariais",children:"Configurando conectores empresariais"}),"\n",(0,D.jsxs)(e.ol,{children:["\n",(0,D.jsxs)(e.li,{children:["Navegue para: ",(0,D.jsx)(i,{to:"/enterprise-sso",children:"Console > Enterprise SSO"}),"."]}),"\n",(0,D.jsx)(e.li,{children:'Clique no bot\xe3o "Adicionar conector empresarial" e escolha um tipo de conector.'}),"\n",(0,D.jsx)(e.li,{children:"Forne\xe7a um nome \xfanico (por exemplo, Okta para a Empresa Acme)."}),"\n",(0,D.jsx)(e.li,{children:'Configure a conex\xe3o com seu IdP na aba "Conex\xe3o". Verifique os guias acima para cada tipo de conector.'}),"\n",(0,D.jsxs)(e.li,{children:["Personalize a experi\xeancia de SSO e o ",(0,D.jsx)(e.strong,{children:"dom\xednio de email"}),' na aba "Experi\xeancia".']}),"\n",(0,D.jsx)(e.li,{children:'Para o conector empresarial SAML, habilitar o SSO iniciado pelo IdP na aba "SSO iniciado pelo IdP" \xe9 opcional. Consulte o guia para detalhes.'}),"\n",(0,D.jsx)(e.li,{children:"Salve as altera\xe7\xf5es."}),"\n"]}),"\n",(0,D.jsx)(e.p,{children:"Observe as seguintes configura\xe7\xf5es:"}),"\n",(0,D.jsxs)(e.ul,{children:["\n",(0,D.jsxs)(e.li,{children:["\n",(0,D.jsxs)(e.p,{children:[(0,D.jsx)(e.strong,{children:"Dom\xednios de email"}),': Se o dom\xednio do email inserido pelo usu\xe1rio estiver no campo "Dom\xednios de email empresariais" de alguns conectores de SSO empresariais, o usu\xe1rio ser\xe1 redirecionado para a URL de login correspondente desse conector de SSO.']}),"\n",(0,D.jsxs)(e.admonition,{type:"note",children:[(0,D.jsx)(e.p,{children:"\xc9 importante notar que, ap\xf3s configurar os dom\xednios de email relevantes em um conector de SSO, os usu\xe1rios que fizerem login com emails pertencentes a esses dom\xednios ser\xe3o for\xe7ados a usar o login SSO."}),(0,D.jsx)(e.p,{children:'Em outras palavras, apenas emails de dom\xednios que N\xc3O est\xe3o configurados nos conectores de SSO podem usar o login "email + c\xf3digo de verifica\xe7\xe3o" ou "email + senha" (desde que esses dois m\xe9todos de login estejam habilitados na experi\xeancia de login).'})]}),"\n"]}),"\n",(0,D.jsxs)(e.li,{children:["\n",(0,D.jsxs)(e.p,{children:[(0,D.jsx)(e.strong,{children:"Sincronizar perfis de usu\xe1rio"}),': Escolha quando sincronizar as informa\xe7\xf5es do perfil do usu\xe1rio (por exemplo, avatar, nome). O comportamento padr\xe3o \xe9 "Sincronizar apenas no primeiro login". "Sempre sincronizar a cada login" \xe9 outra op\xe7\xe3o para este campo, mas pode levar \xe0 sobrescri\xe7\xe3o de dados personalizados do usu\xe1rio.']}),"\n"]}),"\n",(0,D.jsxs)(e.li,{children:["\n",(0,D.jsxs)(e.p,{children:[(0,D.jsx)(e.strong,{children:"Informa\xe7\xf5es de exibi\xe7\xe3o"}),": Opcionalmente, personalize o nome de exibi\xe7\xe3o e o logotipo para o conector. Isso \xe9 muito \xfatil quando v\xe1rios conectores est\xe3o associados ao mesmo dom\xednio de email."]}),"\n"]}),"\n"]}),"\n",(0,D.jsx)(e.h2,{id:"habilitando-sso-empresarial",children:"Habilitando SSO empresarial"}),"\n",(0,D.jsxs)(e.ol,{children:["\n",(0,D.jsxs)(e.li,{children:["Navegue para: ",(0,D.jsx)(i,{to:"/sign-in-experience/sign-up-and-sign-in",children:"Console > Experi\xeancia de login > Cadastro e login"}),"."]}),"\n",(0,D.jsx)(e.li,{children:'Habilite a op\xe7\xe3o "Enterprise SSO".'}),"\n",(0,D.jsx)(e.li,{children:"Salve as altera\xe7\xf5es."}),"\n"]}),"\n",(0,D.jsx)(e.p,{children:'Uma vez habilitado, um bot\xe3o "Single Sign-On" aparecer\xe1 na sua p\xe1gina de login. Usu\xe1rios empresariais com dom\xednios de email habilitados para SSO podem acessar seus servi\xe7os usando seus provedores de identidade empresariais (IdPs). Para saber mais sobre a experi\xeancia do usu\xe1rio SSO, consulte Fluxos de usu\xe1rio: SSO empresarial.'}),"\n",(0,D.jsx)(e.h2,{id:"just-in-time-para-organiza\xe7\xe3o",children:"Just-in-time para organiza\xe7\xe3o"}),"\n",(0,D.jsxs)(e.p,{children:["No Logto, ",(0,D.jsx)(e.a,{href:"https://auth.wiki/jit-provisioning",children:"provisionamento Just-in-Time (JIT)"})," \xe9 um processo usado para atribuir automaticamente associa\xe7\xf5es e pap\xe9is de organiza\xe7\xe3o aos usu\xe1rios no momento em que eles fazem login no sistema pela primeira vez."]}),"\n",(0,D.jsx)(e.p,{children:"O Logto fornece um ponto de entrada para configurar o provisionamento JIT do conector SSO dentro de uma organiza\xe7\xe3o, veja a refer\xeancia (link para a parte de provisionamento JIT SSO)."}),"\n",(0,D.jsx)(e.h2,{id:"faqs",children:"FAQs"}),"\n",(0,D.jsxs)(N,{children:[(0,D.jsx)("summary",{children:"Impacto nos usu\xe1rios existentes ap\xf3s altera\xe7\xf5es no conector de SSO empresarial?"}),(0,D.jsxs)(e.ul,{children:["\n",(0,D.jsx)(e.li,{children:"Adicionando SSO: As identidades SSO ser\xe3o vinculadas a contas existentes se o email corresponder."}),"\n",(0,D.jsx)(e.li,{children:"Removendo SSO: Remove identidades SSO vinculadas \xe0 conta, mas mant\xe9m as contas de usu\xe1rio e solicita que os usu\xe1rios configurem m\xe9todos de verifica\xe7\xe3o alternativos."}),"\n"]})]})]})}function S(M={}){const{wrapper:e}={...(0,o.R)(),...M.components};return e?(0,D.jsx)(e,{...M,children:(0,D.jsx)(w,{...M})}):w(M)}function p(M,e){throw new Error("Expected "+(e?"component":"object")+" `"+M+"` to be defined: you likely forgot to import, pass, or provide it.")}},15658:(M,e,i)=>{i.d(e,{R:()=>o,x:()=>s});var N=i(30758);const j={},D=N.createContext(j);function o(M){const e=N.useContext(D);return N.useMemo((function(){return"function"==typeof M?M(e):{...e,...M}}),[e,M])}function s(M){let e;return e=M.disableParentContext?"function"==typeof M.components?M.components(j):M.components||j:o(M.components),N.createElement(D.Provider,{value:e},M.children)}}}]);