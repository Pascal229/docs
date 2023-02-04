"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[3974,4541],{49613:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var o=t(59496);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),s=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return o.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(t),m=r,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return t?o.createElement(f,i(i({ref:n},u),{},{components:t})):o.createElement(f,i({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=p;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},56949:function(e,n,t){t.d(n,{Z:function(){return g}});var o=t(59496),r=t(45924),a=t(90942),i=t(35182),c="admonition_OLkb",l="admonitionHeading_f7PA",s="admonitionIcon_JZUS",u="admonitionContent_Uxjc",d=t(4637);var p={note:{infimaClassName:"secondary",iconComponent:function(){return(0,d.jsx)("svg",{viewBox:"0 0 14 16",children:(0,d.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})},label:(0,d.jsx)(i.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})},tip:{infimaClassName:"success",iconComponent:function(){return(0,d.jsx)("svg",{viewBox:"0 0 12 16",children:(0,d.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})},label:(0,d.jsx)(i.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})},danger:{infimaClassName:"danger",iconComponent:function(){return(0,d.jsx)("svg",{viewBox:"0 0 12 16",children:(0,d.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})},label:(0,d.jsx)(i.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})},info:{infimaClassName:"info",iconComponent:function(){return(0,d.jsx)("svg",{viewBox:"0 0 14 16",children:(0,d.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})},label:(0,d.jsx)(i.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})},caution:{infimaClassName:"warning",iconComponent:function(){return(0,d.jsx)("svg",{viewBox:"0 0 16 16",children:(0,d.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})},label:(0,d.jsx)(i.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})}},m={secondary:"note",important:"info",success:"tip",warning:"danger"};function f(e){var n,t=function(e){var n=o.Children.toArray(e),t=n.find((function(e){var n;return o.isValidElement(e)&&"mdxAdmonitionTitle"===(null==(n=e.props)?void 0:n.mdxType)})),r=(0,d.jsx)(d.Fragment,{children:n.filter((function(e){return e!==t}))});return{mdxAdmonitionTitle:t,rest:r}}(e.children),r=t.mdxAdmonitionTitle,a=t.rest;return Object.assign({},e,{title:null!=(n=e.title)?n:r,children:a})}function g(e){var n=f(e),t=n.children,o=n.type,i=n.title,g=n.icon,h=function(e){var n,t=null!=(n=m[e])?n:e;return p[t]||(console.warn('No admonition config found for admonition type "'+t+'". Using Info as fallback.'),p.info)}(o),v=null!=i?i:h.label,b=h.iconComponent,y=null!=g?g:(0,d.jsx)(b,{});return(0,d.jsxs)("div",{className:(0,r.Z)(a.k.common.admonition,a.k.common.admonitionType(e.type),"alert","alert--"+h.infimaClassName,c),children:[(0,d.jsxs)("div",{className:l,children:[(0,d.jsx)("span",{className:s,children:y}),v]}),(0,d.jsx)("div",{className:u,children:t})]})}},81307:function(e,n,t){t.d(n,{Z:function(){return i}});t(59496);var o=t(45924),r="tabItem_Fttz",a=t(4637);function i(e){var n=e.children,t=e.hidden,i=e.className;return(0,a.jsx)("div",{role:"tabpanel",className:(0,o.Z)(r,i),hidden:t,children:n})}},86350:function(e,n,t){t.d(n,{Z:function(){return T}});var o=t(59496),r=t(45924),a=t(43226),i=t(61009),c=t(53662),l=t(25982);function s(e){return function(e){return o.Children.map(e,(function(e){if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}function u(e){var n=e.values,t=e.children;return(0,o.useMemo)((function(){var e=null!=n?n:s(t);return function(e){var n=(0,c.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function d(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function p(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId,c=(0,a.k6)(),l=function(e){var n=e.queryString,t=void 0!==n&&n,o=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!o)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=o?o:null}({queryString:t,groupId:r});return[(0,i._X)(l),(0,o.useCallback)((function(e){if(l){var n=new URLSearchParams(c.location.search);n.set(l,e),c.replace(Object.assign({},c.location,{search:n.toString()}))}}),[l,c])]}function m(e){var n,t,r,a,i=e.defaultValue,c=e.queryString,s=void 0!==c&&c,m=e.groupId,f=u(e),g=(0,o.useState)((function(){return function(e){var n,t=e.defaultValue,o=e.tabValues;if(0===o.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:o}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+o.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var r=null!=(n=o.find((function(e){return e.default})))?n:o[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:i,tabValues:f})})),h=g[0],v=g[1],b=p({queryString:s,groupId:m}),y=b[0],k=b[1],x=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:m}.groupId),t=(0,l.Nk)(n),r=t[0],a=t[1],[r,(0,o.useCallback)((function(e){n&&a.set(e)}),[n,a])]),T=x[0],N=x[1],j=function(){var e=null!=y?y:T;return d({value:e,tabValues:f})?e:null}();return(0,o.useLayoutEffect)((function(){j&&v(j)}),[j]),{selectedValue:h,selectValue:(0,o.useCallback)((function(e){if(!d({value:e,tabValues:f}))throw new Error("Can't select invalid tab value="+e);v(e),k(e),N(e)}),[k,N,f]),tabValues:f}}var f=t(10006),g=t(67623),h="tabList_tmZl",v="tabItem_AGpd",b=t(4637);function y(e){var n=e.className,t=e.block,o=e.selectedValue,a=e.selectValue,i=e.tabValues,c=[],l=(0,f.o5)().blockElementScrollPositionUntilNextRender,s=function(e){var n=e.currentTarget,t=c.indexOf(n),r=i[t].value;r!==o&&(l(n),a(r))},u=function(e){var n,t=null;switch(e.key){case"Enter":s(e);break;case"ArrowRight":var o,r=c.indexOf(e.currentTarget)+1;t=null!=(o=c[r])?o:c[0];break;case"ArrowLeft":var a,i=c.indexOf(e.currentTarget)-1;t=null!=(a=c[i])?a:c[c.length-1]}null==(n=t)||n.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n),children:i.map((function(e){var n=e.value,t=e.label,a=e.attributes;return(0,b.jsx)("li",Object.assign({role:"tab",tabIndex:o===n?0:-1,"aria-selected":o===n,ref:function(e){return c.push(e)},onKeyDown:u,onClick:s},a,{className:(0,r.Z)("tabs__item",v,null==a?void 0:a.className,{"tabs__item--active":o===n}),children:null!=t?t:n}),n)}))})}function k(e){var n=e.lazy,t=e.children,r=e.selectedValue;if(t=Array.isArray(t)?t:[t],n){var a=t.find((function(e){return e.props.value===r}));return a?(0,o.cloneElement)(a,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:t.map((function(e,n){return(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==r})}))})}function x(e){var n=m(e);return(0,b.jsxs)("div",{className:(0,r.Z)("tabs-container",h),children:[(0,b.jsx)(y,Object.assign({},e,n)),(0,b.jsx)(k,Object.assign({},e,n))]})}function T(e){var n=(0,g.Z)();return(0,b.jsx)(x,Object.assign({},e),String(n))}},39947:function(e,n,t){t.r(n),t.d(n,{assets:function(){return h},contentTitle:function(){return f},default:function(){return y},frontMatter:function(){return m},metadata:function(){return g},toc:function(){return v}});var o=t(665),r=t(40151),a=(t(59496),t(49613)),i=t(56949),c=t(81307),l=t(86350),s=["components"],u={toc:[]};function d(e){var n=e.components,t=(0,r.Z)(e,s);return(0,a.kt)("wrapper",(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"About connectors",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Connectors are the bridges between Logto and third-party services. We have three connector types: SMS, email, and social.",(0,a.kt)("br",null),"\nWhile Logto provides some built-in connectors, you can also implement your own. See ",(0,a.kt)("a",{parentName:"p",href:"/docs/references/connectors"},"Connectors")," to learn more.")))}d.isMDXComponent=!0;var p=["components"],m={sidebar_position:2},f="Manage connectors",g={unversionedId:"docs/tutorials/using-cli/manage-connectors",id:"docs/tutorials/using-cli/manage-connectors",title:"Manage connectors",description:"For each command, you can append --path /your/path/to/logto (alias -p) to specify the Logto instance path.",source:"@site/docs/docs/tutorials/using-cli/manage-connectors.mdx",sourceDirName:"docs/tutorials/using-cli",slug:"/docs/tutorials/using-cli/manage-connectors",permalink:"/zh-cn/docs/tutorials/using-cli/manage-connectors",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/docs/tutorials/using-cli/manage-connectors.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Install Logto",permalink:"/zh-cn/docs/tutorials/using-cli/install-logto"},next:{title:"Database alteration",permalink:"/zh-cn/docs/tutorials/using-cli/database-alteration"}},h={},v=[{value:"List existing connectors",id:"list-existing-connectors",level:2},{value:"Add connectors",id:"add-connectors",level:2},{value:"Official connectors",id:"official-connectors",level:3},{value:"Third-party connectors",id:"third-party-connectors",level:3},{value:"Remove connectors",id:"remove-connectors",level:2}],b={toc:v};function y(e){var n=e.components,t=(0,r.Z)(e,p);return(0,a.kt)("wrapper",(0,o.Z)({},b,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"manage-connectors"},"Manage connectors"),(0,a.kt)(d,{mdxType:"ConnectorsIntro"}),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"For each command, you can append ",(0,a.kt)("inlineCode",{parentName:"p"},"--path /your/path/to/logto")," (alias ",(0,a.kt)("inlineCode",{parentName:"p"},"-p"),") to specify the Logto instance path.")),(0,a.kt)("h2",{id:"list-existing-connectors"},"List existing connectors"),(0,a.kt)("p",null,"Use the command below to list existing connectors that have been added to your Logto instance:"),(0,a.kt)(l.Z,{groupId:"cmd",mdxType:"Tabs"},(0,a.kt)(c.Z,{value:"cli",label:"CLI",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"logto connector list\n"))),(0,a.kt)(c.Z,{value:"npx",label:"npx",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npx @logto/cli connector list\n")))),(0,a.kt)("p",null,"A sample output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"OFFICIAL\n  @logto/connector-alipay-native\n  @logto/connector-aliyun-dm\n  @logto/connector-aliyun-sms\n  @logto/connector-apple\n  @logto/connector-azuread\n\n3RD-PARTY\n  connector-some-third-party\n")),(0,a.kt)("h2",{id:"add-connectors"},"Add connectors"),(0,a.kt)("h3",{id:"official-connectors"},"Official connectors"),(0,a.kt)("p",null,"All official connectors are listed in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/logto-io/connectors/tree/master/packages"},"@logto/connectors"),", except those names that start with ",(0,a.kt)("inlineCode",{parentName:"p"},"connector-mock-")," for testing purposes."),(0,a.kt)(i.Z,{type:"tip",icon:"\ud83e\udd20",title:"Call for contributors!",mdxType:"Admonition"},(0,a.kt)("p",null,"Every connector is a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/logto-io/logto/issues/1861"},"Tier 1 Bounty Hunter issue")," by default. Feel free to comment on or create the related GitHub issue for acknowledging a connector if you are interested.")),(0,a.kt)("p",null,"If you are using the official Docker image or added official connectors during init, there's no need to add them again. If not, use the command below to add all official connectors:"),(0,a.kt)(l.Z,{groupId:"cmd",mdxType:"Tabs"},(0,a.kt)(c.Z,{value:"cli",label:"CLI",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"logto connector add --official\n"))),(0,a.kt)(c.Z,{value:"npx",label:"npx",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npx @logto/cli connector add --official\n")))),(0,a.kt)("h3",{id:"third-party-connectors"},"Third-party connectors"),(0,a.kt)("p",null,"Third-party connectors are those made for Logto but NOT in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/logto-io/connectors/tree/master/packages"},"@logto/connectors"),"."),(0,a.kt)("p",null,"The connector to add should be a valid NPM package, and the package name must start with ",(0,a.kt)("inlineCode",{parentName:"p"},"connector-")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"@some-org/connector-"),". E.g.:"),(0,a.kt)(l.Z,{groupId:"cmd",mdxType:"Tabs"},(0,a.kt)(c.Z,{value:"cli",label:"CLI",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"logto connector add service-a connector-service-b @org/service-c\n# is equal to\nlogto connector add connector-service-a connector-service-b @org/connector-service-c\n"))),(0,a.kt)(c.Z,{value:"npx",label:"npx",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npx @logto/cli connector add service-a connector-service-b @org/service-c\n# is equal to\nnpx @logto/cli connector add connector-service-a connector-service-b @org/connector-service-c\n")))),(0,a.kt)("admonition",{type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"Connectors are executable code! Inspect and review the COMPILED CODE (the content download from NPM) very, very carefully to avoid potential security issues if you are trying to use a third-party connector.")),(0,a.kt)("admonition",{title:"Note",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Remember to restart your Logto instance to get the changes reflected.")),(0,a.kt)("h2",{id:"remove-connectors"},"Remove connectors"),(0,a.kt)(l.Z,{groupId:"cmd",mdxType:"Tabs"},(0,a.kt)(c.Z,{value:"cli",label:"CLI",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"logto connector remove connector-service-a @org/connector-service-b\n"))),(0,a.kt)(c.Z,{value:"npx",label:"npx",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npx @logto/cli connector remove connector-service-a @org/connector-service-b\n")))),(0,a.kt)("admonition",{title:"Note",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Remember to restart your Logto instance to get the changes reflected.")))}y.isMDXComponent=!0}}]);