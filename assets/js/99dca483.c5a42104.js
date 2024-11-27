"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[13610],{64789:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>n,toc:()=>u});const n=JSON.parse('{"id":"logto-oss/using-cli/database-alteration","title":"Database alteration","description":"How to deploy database alteration.","source":"@site/docs/logto-oss/using-cli/database-alteration.mdx","sourceDirName":"logto-oss/using-cli","slug":"/logto-oss/using-cli/database-alteration","permalink":"/logto-oss/using-cli/database-alteration","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/docs/logto-oss/using-cli/database-alteration.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"description":"How to deploy database alteration.","sidebar_position":3},"sidebar":"docsSidebar","previous":{"title":"Manage connectors","permalink":"/logto-oss/using-cli/manage-connectors"},"next":{"title":"Manage database configs","permalink":"/logto-oss/using-cli/manage-database-configs"}}');var r=a(86070),o=a(15658),l=a(77025),s=a(76946);const i={description:"How to deploy database alteration.",sidebar_position:3},c="Database alteration",d={},u=[{value:"Determine the version to deploy",id:"determine-the-version-to-deploy",level:2},{value:"Rollback alterations",id:"rollback-alterations",level:2},{value:"For contributors",id:"for-contributors",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"database-alteration",children:"Database alteration"})}),"\n",(0,r.jsx)(t.p,{children:"When developing new features, or refactoring existing ones, sometimes it is unavoidable to change database schemas."}),"\n",(0,r.jsx)(t.p,{children:"Things may sound scary, as a user, usually you need to:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Double check the difference between two or more versions"}),"\n",(0,r.jsx)(t.li,{children:"Alter database in a safe and backward-compatible way"}),"\n",(0,r.jsx)(t.li,{children:"Get prepared for potential failure, say have a rollback script"}),"\n",(0,r.jsx)(t.li,{children:"Gradually replace running Logto instances to the new version"}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Hey, we are also developers, and we know it feels unhappy to do all these risky but mandatory stuff."})," So why don't we give them to someone that won't make mistake, like a CLI?"]}),"\n",(0,r.jsx)(t.p,{children:"From now on, your upgrade process will be:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Run ",(0,r.jsx)(t.code,{children:"logto db alt deploy"})," from anywhere that can access to the database"]}),"\n",(0,r.jsx)(t.li,{children:"Gradually replace running Logto instances to the new version"}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Let's get started!"}),"\n",(0,r.jsx)(t.h2,{id:"determine-the-version-to-deploy",children:"Determine the version to deploy"}),"\n",(0,r.jsxs)(t.p,{children:["If you have Logto CLI installed globally, it is ",(0,r.jsx)(t.strong,{children:"highly recommended"})," to upgrade the CLI to the latest version before deploying to get full available database alterations. Then run the command:"]}),"\n",(0,r.jsxs)(s.A,{groupId:"cmd",children:[(0,r.jsx)(l.A,{value:"cli",label:"CLI",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"logto db alteration deploy\n"})})}),(0,r.jsx)(l.A,{value:"npx",label:"npx",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"npx @logto/cli db alteration deploy\n"})})})]}),"\n",(0,r.jsx)(t.p,{children:"If your database is up-to-date, you'll see the message below:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"[info] Found 0 alteration to deploy\n"})}),"\n",(0,r.jsx)(t.p,{children:"If you have undeployed alterations, the CLI will ask you to choose the desired version:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"? Choose the alteration target version (Use arrow keys)\n> 1.2.0\n  1.0.0\n"})}),"\n",(0,r.jsx)(t.p,{children:"Theoretically, the version to deploy should match the version of your Logto instance. In the meantime, you can use the command with a target version:"}),"\n",(0,r.jsxs)(s.A,{groupId:"cmd",children:[(0,r.jsx)(l.A,{value:"cli",label:"CLI",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"logto db alteration deploy 1.2.0\n"})})}),(0,r.jsx)(l.A,{value:"npx",label:"npx",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"npx @logto/cli db alteration deploy 1.2.0\n"})})})]}),"\n",(0,r.jsxs)(t.p,{children:["It is helpful when you'd like to do the alteration in a non-TTY pipeline, just remember to pass the database URL using ",(0,r.jsx)(t.code,{children:"--db-url"}),". See ",(0,r.jsx)(t.a,{href:"/logto-oss/deployment-and-configuration/",children:"Deployment and configuration"})," for setting up a alteration job in your cluster."]}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsx)(t.p,{children:"For each alteration script, the Logto CLI will run the whole script in a transaction. So if a deployment is failed, you can easily continue with the same command after the issue fixed."})}),"\n",(0,r.jsx)(t.h2,{id:"rollback-alterations",children:"Rollback alterations"}),"\n",(0,r.jsxs)(t.p,{children:["Our alteration scripts also come with a ",(0,r.jsx)(t.code,{children:"down"})," script which can rollback the changes. To rollback the database status to a specific version, replace ",(0,r.jsx)(t.code,{children:"1.0.0"})," with your target version and run the command below:"]}),"\n",(0,r.jsxs)(s.A,{groupId:"cmd",children:[(0,r.jsx)(l.A,{value:"cli",label:"CLI",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"logto db alteration rollback 1.0.0\n"})})}),(0,r.jsx)(l.A,{value:"npx",label:"npx",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"npx @logto/cli db alteration rollback 1.0.0\n"})})})]}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.p,{children:["You can find all alteration scripts ",(0,r.jsx)(t.a,{href:"https://github.com/logto-io/logto/tree/master/packages/schemas/alterations",children:"in this directory"}),"."]})}),"\n",(0,r.jsx)(t.h2,{id:"for-contributors",children:"For contributors"}),"\n",(0,r.jsx)(t.p,{children:'The master branch of Logto repository may contain unpublished alteration scripts. You may need to manually deploy "next" alterations by running:'}),"\n",(0,r.jsxs)(s.A,{groupId:"cmd",children:[(0,r.jsx)(l.A,{value:"cli",label:"CLI",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"logto db alteration deploy next\n"})})}),(0,r.jsx)(l.A,{value:"npx",label:"npx",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"npx @logto/cli db alteration deploy next\n"})})})]}),"\n",(0,r.jsx)(t.p,{children:"If you are developing a feature that requires database alterations, rather than updating the database schema, you also need to provide a script in the following format:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"next-[timestamp]-what-to-do.ts\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Check ",(0,r.jsx)(t.a,{href:"https://github.com/logto-io/logto/tree/master/packages/schemas/alterations",children:"this directory"})," for reference."]})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},77025:(e,t,a)=>{a.d(t,{A:()=>l});a(30758);var n=a(13526);const r={tabItem:"tabItem_LtUi"};var o=a(86070);function l(e){let{children:t,hidden:a,className:l}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,n.A)(r.tabItem,l),hidden:a,children:t})}},76946:(e,t,a)=>{a.d(t,{A:()=>w});var n=a(30758),r=a(13526),o=a(34303),l=a(25557),s=a(93891),i=a(40480),c=a(55057),d=a(62163);function u(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}(a);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:a}=e;const r=(0,l.W6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i.aZ)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,o=h(e),[l,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[c,u]=b({queryString:a,groupId:r}),[g,m]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,d.Dv)(a);return[r,(0,n.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:r}),x=(()=>{const e=c??g;return p({value:e,tabValues:o})?e:null})();(0,s.A)((()=>{x&&i(x)}),[x]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),m(e)}),[u,m,o]),tabValues:o}}var m=a(36865);const x={tabList:"tabList_rP2z",tabItem:"tabItem_nid_"};var f=a(86070);function j(e){let{className:t,block:a,selectedValue:n,selectValue:l,tabValues:s}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),d=e=>{const t=e.currentTarget,a=i.indexOf(t),r=s[a].value;r!==n&&(c(t),l(r))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=i.indexOf(e.currentTarget)+1;t=i[a]??i[0];break}case"ArrowLeft":{const a=i.indexOf(e.currentTarget)-1;t=i[a]??i[i.length-1];break}}t?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":a},t),children:s.map((e=>{let{value:t,label:a,attributes:o}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>i.push(e),onKeyDown:u,onClick:d,...o,className:(0,r.A)("tabs__item",x.tabItem,o?.className,{"tabs__item--active":n===t}),children:a??t},t)}))})}function y(e){let{lazy:t,children:a,selectedValue:o}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===o));return e?(0,n.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==o})))})}function v(e){const t=g(e);return(0,f.jsxs)("div",{className:(0,r.A)("tabs-container",x.tabList),children:[(0,f.jsx)(j,{...t,...e}),(0,f.jsx)(y,{...t,...e})]})}function w(e){const t=(0,m.A)();return(0,f.jsx)(v,{...e,children:u(e.children)},String(t))}},15658:(e,t,a)=>{a.d(t,{R:()=>l,x:()=>s});var n=a(30758);const r={},o=n.createContext(r);function l(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);