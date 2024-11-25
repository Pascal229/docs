"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[83249],{35844:(e,t,n)=>{n.d(t,{A:()=>E});var a=n(30758),r=n(13526),s=n(83485),i=n(86070);function l(e){let{children:t,className:n}=e;return(0,i.jsx)("article",{className:n,children:t})}var o=n(13887);function c(e){let{children:t,fallback:n}=e;return(0,o.A)()?(0,i.jsx)(i.Fragment,{children:t?.()}):n??null}var d=n(39798),m=n(75161);const u="title_xvU1",h="listTitle_ozbw",g=e=>{let{className:t}=e;const{metadata:n,isBlogPostPage:l}=(0,s.e7)(),{permalink:o,title:c}=n,g=l?"h1":"h2",f=window.location.pathname.startsWith("/blog"),x=(0,a.useCallback)((()=>{const e=new URL(l?window.location.pathname.replace(/^\/blog/,""):"/","https://blog.logto.io"),t=new URLSearchParams(window.location.search);for(const[n,a]of t.entries())e.searchParams.append(n,a);return e.pathname.endsWith("/")||(e.pathname+="/"),e}),[l]);return(0,a.useEffect)((()=>{if(!f)return;for(const t of document.head.querySelectorAll("link"))["canonical","alternate"].includes(t.getAttribute("rel")??"")&&t.remove();const e=document.createElement("link");e.setAttribute("rel","canonical"),e.href=x().href,document.head.append(e)}),[x,f]),(0,i.jsxs)(i.Fragment,{children:[f&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(m.A,{type:"tip",children:["Logto Blog has been moved to the new place!"," ",(0,i.jsx)("a",{href:x().href,children:"Click here"})," to see this article in the new blog."]}),(0,i.jsx)("hr",{})]}),(0,i.jsx)(g,{className:(0,r.$)(u,!l&&h,t),itemProp:"headline",children:l?c:(0,i.jsx)(d.A,{itemProp:"url",to:o,children:c})})]})},f=()=>(0,i.jsx)(c,{children:()=>(0,i.jsx)(g,{})});var x=n(51074),p=n(70885),v=n(52758);const j={container:"container_uWgP"};function b(e){let{readingTime:t}=e;const n=function(){const{selectMessage:e}=(0,p.W)();return t=>{const n=Math.ceil(t);return e(n,(0,x.T)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:n}))}}();return(0,i.jsx)(i.Fragment,{children:n(t)})}function A(e){let{date:t,formattedDate:n}=e;return(0,i.jsx)("time",{dateTime:t,children:n})}function N(){return(0,i.jsx)(i.Fragment,{children:" \xb7 "})}function L(e){let{className:t}=e;const{metadata:n}=(0,s.e7)(),{date:a,readingTime:l}=n,o=(0,v.i)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,i.jsxs)("div",{className:(0,r.A)(j.container,"margin-vert--md",t),children:[(0,i.jsx)(A,{date:a,formattedDate:(c=a,o.format(new Date(c)))}),void 0!==l&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(N,{}),(0,i.jsx)(b,{readingTime:l})]})]});var c}var y=n(40384);const w={authorCol:"authorCol_lpgm",imageOnlyAuthorRow:"imageOnlyAuthorRow_alI9",imageOnlyAuthorCol:"imageOnlyAuthorCol_ujRt"};function _(e){let{className:t}=e;const{metadata:{authors:n},assets:a}=(0,s.e7)();if(0===n.length)return null;const l=n.every((e=>{let{name:t}=e;return!t})),o=1===n.length;return(0,i.jsx)("div",{className:(0,r.A)("margin-top--md margin-bottom--sm",l?w.imageOnlyAuthorRow:"row",t),children:n.map(((e,t)=>(0,i.jsx)("div",{className:(0,r.A)(!l&&(o?"col col--12":"col col--6"),l?w.imageOnlyAuthorCol:w.authorCol),children:(0,i.jsx)(y.A,{author:{...e,imageURL:a.authorsImageUrls[t]??e.imageURL}})},t)))})}function C(){return(0,i.jsxs)("header",{children:[(0,i.jsx)(f,{}),(0,i.jsx)(L,{}),(0,i.jsx)(_,{})]})}var T=n(2686),k=n(42953);function H(e){let{children:t,className:n}=e;const{isBlogPostPage:a}=(0,s.e7)();return(0,i.jsx)("div",{id:a?T.LU:void 0,className:(0,r.A)("markdown",n),children:(0,i.jsx)(k.A,{children:t})})}var P=n(59491),R=n(50991),O=n(26525);function U(){return(0,i.jsx)("b",{children:(0,i.jsx)(x.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read more"})})}function B(e){const{blogPostTitle:t,...n}=e;return(0,i.jsx)(d.A,{"aria-label":(0,x.T)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...n,children:(0,i.jsx)(U,{})})}function I(){const{metadata:e,isBlogPostPage:t}=(0,s.e7)(),{tags:n,title:a,editUrl:l,hasTruncateMarker:o,lastUpdatedBy:c,lastUpdatedAt:d}=e,m=!t&&o,u=n.length>0;if(!(u||m||l))return null;if(t){const e=!!(l||d||c);return(0,i.jsxs)("footer",{className:"docusaurus-mt-lg",children:[u&&(0,i.jsx)("div",{className:(0,r.A)("row","margin-top--sm",P.G.blog.blogFooterEditMetaRow),children:(0,i.jsx)("div",{className:"col",children:(0,i.jsx)(O.A,{tags:n})})}),e&&(0,i.jsx)(R.A,{className:(0,r.A)("margin-top--sm",P.G.blog.blogFooterEditMetaRow),editUrl:l,lastUpdatedAt:d,lastUpdatedBy:c})]})}return(0,i.jsxs)("footer",{className:"row docusaurus-mt-lg",children:[u&&(0,i.jsx)("div",{className:(0,r.A)("col",{"col--9":m}),children:(0,i.jsx)(O.A,{tags:n})}),m&&(0,i.jsx)("div",{className:(0,r.A)("col text--right",{"col--3":u}),children:(0,i.jsx)(B,{blogPostTitle:a,to:e.permalink})})]})}function E(e){let{children:t,className:n}=e;const a=function(){const{isBlogPostPage:e}=(0,s.e7)();return e?void 0:"margin-bottom--xl"}();return(0,i.jsxs)(l,{className:(0,r.A)(a,n),children:[(0,i.jsx)(C,{}),(0,i.jsx)(H,{children:t}),(0,i.jsx)(I,{})]})}},65500:(e,t,n)=>{n.r(t),n.d(t,{default:()=>j});n(30758);var a=n(13526),r=n(16696),s=n(59491),i=n(83485),l=n(3990),o=n(35844),c=n(51074),d=n(46395),m=n(86070);function u(e){const{nextItem:t,prevItem:n}=e;return(0,m.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,c.T)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"}),children:[n&&(0,m.jsx)(d.A,{...n,subLabel:(0,m.jsx)(c.A,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post",children:"Newer post"})}),t&&(0,m.jsx)(d.A,{...t,subLabel:(0,m.jsx)(c.A,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post",children:"Older post"}),isNext:!0})]})}function h(){const{assets:e,metadata:t}=(0,i.e7)(),{title:n,description:a,date:s,tags:l,authors:o,frontMatter:c}=t,{keywords:d}=c,u=e.image??c.image;return(0,m.jsxs)(r.be,{title:c.title_meta??n,description:a,keywords:d,image:u,children:[(0,m.jsx)("meta",{property:"og:type",content:"article"}),(0,m.jsx)("meta",{property:"article:published_time",content:s}),o.some((e=>e.url))&&(0,m.jsx)("meta",{property:"article:author",content:o.map((e=>e.url)).filter(Boolean).join(",")}),l.length>0&&(0,m.jsx)("meta",{property:"article:tag",content:l.map((e=>e.label)).join(",")})]})}var g=n(27740);function f(){const e=(0,i.J_)();return(0,m.jsx)(g.A,{children:(0,m.jsx)("script",{type:"application/ld+json",children:JSON.stringify(e)})})}var x=n(71741),p=n(86322);function v(e){let{sidebar:t,children:n}=e;const{metadata:a,toc:r}=(0,i.e7)(),{nextItem:s,prevItem:c,frontMatter:d}=a,{hide_table_of_contents:h,toc_min_heading_level:g,toc_max_heading_level:f}=d;return(0,m.jsxs)(l.A,{sidebar:t,toc:!h&&r.length>0?(0,m.jsx)(x.A,{toc:r,minHeadingLevel:g,maxHeadingLevel:f}):void 0,children:[(0,m.jsx)(p.A,{metadata:a}),(0,m.jsx)(o.A,{children:n}),(s||c)&&(0,m.jsx)(u,{nextItem:s,prevItem:c})]})}function j(e){const t=e.content;return(0,m.jsx)(i.in,{content:e.content,isBlogPostPage:!0,children:(0,m.jsxs)(r.e3,{className:(0,a.A)(s.G.wrapper.blogPages,s.G.page.blogPostPage),children:[(0,m.jsx)(h,{}),(0,m.jsx)(f,{}),(0,m.jsx)(v,{sidebar:e.sidebar,children:(0,m.jsx)(t,{})})]})})}},52995:(e,t,n)=>{n.d(t,{A:()=>c});n(30758);var a=n(13526),r=n(81720),s=n(59491),i=n(75161),l=n(86070);function o(e){let{className:t}=e;return(0,l.jsx)(i.A,{type:"caution",title:(0,l.jsx)(r.Rc,{}),className:(0,a.A)(t,s.G.common.unlistedBanner),children:(0,l.jsx)(r.Uh,{})})}function c(e){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r.AE,{}),(0,l.jsx)(o,{...e})]})}},86322:(e,t,n)=>{n.d(t,{A:()=>d});n(30758);var a=n(13526),r=n(81720),s=n(59491),i=n(75161),l=n(86070);function o(e){let{className:t}=e;return(0,l.jsx)(i.A,{type:"caution",title:(0,l.jsx)(r.Yh,{}),className:(0,a.A)(t,s.G.common.draftBanner),children:(0,l.jsx)(r.TT,{})})}var c=n(52995);function d(e){let{metadata:t}=e;const{unlisted:n,frontMatter:a}=t;return(0,l.jsxs)(l.Fragment,{children:[(n||a.unlisted)&&(0,l.jsx)(c.A,{}),a.draft&&(0,l.jsx)(o,{})]})}},71741:(e,t,n)=>{n.d(t,{A:()=>c});n(30758);var a=n(13526),r=n(45080);const s={tableOfContents:"tableOfContents_vGaP",docItemContainer:"docItemContainer_u446"};var i=n(86070);const l="table-of-contents__link toc-highlight",o="table-of-contents__link--active";function c(e){let{className:t,...n}=e;return(0,i.jsx)("div",{className:(0,a.A)(s.tableOfContents,"thin-scrollbar",t),children:(0,i.jsx)(r.A,{...n,linkClassName:l,linkActiveClassName:o})})}},45080:(e,t,n)=>{n.d(t,{A:()=>f});var a=n(30758),r=n(1610);function s(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...r}=e;n>=0?t[n].children.push(r):a.push(r)})),a}function i(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=i({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function l(e){const t=e.getBoundingClientRect();return t.top===t.bottom?l(e.parentNode):t}function o(e,t){let{anchorTopOffset:n}=t;const a=e.find((e=>l(e).top>=n));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(l(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function c(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:t}}=(0,r.p)();return(0,a.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,a.useRef)(void 0),n=c();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:r,minHeadingLevel:s,maxHeadingLevel:i}=e;function l(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),l=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let r=t;r<=n;r+=1)a.push(`h${r}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:s,maxHeadingLevel:i}),c=o(l,{anchorTopOffset:n.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(r),e.classList.add(r),t.current=e):e.classList.remove(r)}(e,e===d)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),()=>{document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,n])}var m=n(39798),u=n(86070);function h(e){let{toc:t,className:n,linkClassName:a,isChild:r}=e;return t.length?(0,u.jsx)("ul",{className:r?void 0:n,children:t.map((e=>(0,u.jsxs)("li",{children:[(0,u.jsx)(m.A,{to:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,u.jsx)(h,{isChild:!0,toc:e.children,className:n,linkClassName:a})]},e.id)))}):null}const g=a.memo(h);function f(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:l="table-of-contents__link",linkActiveClassName:o,minHeadingLevel:c,maxHeadingLevel:m,...h}=e;const f=(0,r.p)(),x=c??f.tableOfContents.minHeadingLevel,p=m??f.tableOfContents.maxHeadingLevel,v=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:r}=e;return(0,a.useMemo)((()=>i({toc:s(t),minHeadingLevel:n,maxHeadingLevel:r})),[t,n,r])}({toc:t,minHeadingLevel:x,maxHeadingLevel:p});return d((0,a.useMemo)((()=>{if(l&&o)return{linkClassName:l,linkActiveClassName:o,minHeadingLevel:x,maxHeadingLevel:p}}),[l,o,x,p])),(0,u.jsx)(g,{toc:v,className:n,linkClassName:l,...h})}},81720:(e,t,n)=>{n.d(t,{AE:()=>o,Rc:()=>i,TT:()=>d,Uh:()=>l,Yh:()=>c});n(30758);var a=n(51074),r=n(27740),s=n(86070);function i(){return(0,s.jsx)(a.A,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function l(){return(0,s.jsx)(a.A,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function o(){return(0,s.jsx)(r.A,{children:(0,s.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function c(){return(0,s.jsx)(a.A,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function d(){return(0,s.jsx)(a.A,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}}}]);