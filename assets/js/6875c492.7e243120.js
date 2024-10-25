"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[84813],{86689:(e,t,n)=>{n.d(t,{A:()=>i});n(30758);var a=n(36575),s=n(83150),r=n(86070);function i(e){const{metadata:t}=e,{previousPage:n,nextPage:i}=t;return(0,r.jsxs)("nav",{className:"pagination-nav","aria-label":(0,a.T)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[n&&(0,r.jsx)(s.A,{permalink:n,title:(0,r.jsx)(a.A,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer entries"})}),i&&(0,r.jsx)(s.A,{permalink:i,title:(0,r.jsx)(a.A,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older entries"}),isNext:!0})]})}},17016:(e,t,n)=>{n.d(t,{A:()=>D});var a={};n.r(a);var s=n(30758),r=n(13526),i=n(69171),l=n(86070);function o(e){let{children:t,className:n}=e;return(0,l.jsx)("article",{className:n,children:t})}var c=n(77066);function d(e){let{children:t,fallback:n}=e;return(0,c.A)()?(0,l.jsx)(l.Fragment,{children:t?.()}):n??null}var h=n(24811),u=n(89965);const m="title_xvU1",g="listTitle_ozbw",p=e=>{let{className:t}=e;const{metadata:n,isBlogPostPage:i}=(0,a.useBlogPost)(),{permalink:o,title:c}=n,d=i?"h1":"h2",p=window.location.pathname.startsWith("/blog"),x=(0,s.useCallback)((()=>{const e=new URL(i?window.location.pathname.replace(/^\/blog/,""):"/","https://blog.logto.io"),t=new URLSearchParams(window.location.search);for(const[n,a]of t.entries())e.searchParams.append(n,a);return e.pathname.endsWith("/")||(e.pathname+="/"),e}),[i]);return(0,s.useEffect)((()=>{if(!p)return;for(const t of document.head.querySelectorAll("link"))["canonical","alternate"].includes(t.getAttribute("rel")??"")&&t.remove();const e=document.createElement("link");e.setAttribute("rel","canonical"),e.href=x().href,document.head.append(e)}),[x,p]),(0,l.jsxs)(l.Fragment,{children:[p&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(u.A,{type:"tip",children:["Logto Blog has been moved to the new place!"," ",(0,l.jsx)("a",{href:x().href,children:"Click here"})," to see this article in the new blog."]}),(0,l.jsx)("hr",{})]}),(0,l.jsx)(d,{className:(0,r.$)(m,!i&&g,t),itemProp:"headline",children:i?c:(0,l.jsx)(h.A,{itemProp:"url",to:o,children:c})})]})},x=()=>(0,l.jsx)(d,{children:()=>(0,l.jsx)(p,{})});var j=n(36575),f=n(1083),b=n(50352);const A={container:"container_lLZ5"};function v(e){let{readingTime:t}=e;const n=function(){const{selectMessage:e}=(0,f.W)();return t=>{const n=Math.ceil(t);return e(n,(0,j.T)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:n}))}}();return(0,l.jsx)(l.Fragment,{children:n(t)})}function T(e){let{date:t,formattedDate:n}=e;return(0,l.jsx)("time",{dateTime:t,children:n})}function w(){return(0,l.jsx)(l.Fragment,{children:" \xb7 "})}function N(e){let{className:t}=e;const{metadata:n}=(0,i.e7)(),{date:a,readingTime:s}=n,o=(0,b.i)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,l.jsxs)("div",{className:(0,r.A)(A.container,"margin-vert--md",t),children:[(0,l.jsx)(T,{date:a,formattedDate:(c=a,o.format(new Date(c)))}),void 0!==s&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(w,{}),(0,l.jsx)(v,{readingTime:s})]})]});var c}var P=n(90275);const y={authorCol:"authorCol_XHqU",imageOnlyAuthorRow:"imageOnlyAuthorRow_fmmP",imageOnlyAuthorCol:"imageOnlyAuthorCol_AQq2"};function k(e){let{className:t}=e;const{metadata:{authors:n},assets:a}=(0,i.e7)();if(0===n.length)return null;const s=n.every((e=>{let{name:t}=e;return!t})),o=1===n.length;return(0,l.jsx)("div",{className:(0,r.A)("margin-top--md margin-bottom--sm",s?y.imageOnlyAuthorRow:"row",t),children:n.map(((e,t)=>(0,l.jsx)("div",{className:(0,r.A)(!s&&(o?"col col--12":"col col--6"),s?y.imageOnlyAuthorCol:y.authorCol),children:(0,l.jsx)(P.A,{author:{...e,imageURL:a.authorsImageUrls[t]??e.imageURL}})},t)))})}function U(){return(0,l.jsxs)("header",{children:[(0,l.jsx)(x,{}),(0,l.jsx)(N,{}),(0,l.jsx)(k,{})]})}var _=n(85862),R=n(40221);function B(e){let{children:t,className:n}=e;const{isBlogPostPage:a}=(0,i.e7)();return(0,l.jsx)("div",{id:a?_.LU:void 0,className:(0,r.A)("markdown",n),children:(0,l.jsx)(R.A,{children:t})})}var L=n(47425),C=n(7578),F=n(80);function M(){return(0,l.jsx)("b",{children:(0,l.jsx)(j.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read more"})})}function O(e){const{blogPostTitle:t,...n}=e;return(0,l.jsx)(h.A,{"aria-label":(0,j.T)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...n,children:(0,l.jsx)(M,{})})}function E(){const{metadata:e,isBlogPostPage:t}=(0,i.e7)(),{tags:n,title:a,editUrl:s,hasTruncateMarker:o,lastUpdatedBy:c,lastUpdatedAt:d}=e,h=!t&&o,u=n.length>0;if(!(u||h||s))return null;if(t){const e=!!(s||d||c);return(0,l.jsxs)("footer",{className:"docusaurus-mt-lg",children:[u&&(0,l.jsx)("div",{className:(0,r.A)("row","margin-top--sm",L.G.blog.blogFooterEditMetaRow),children:(0,l.jsx)("div",{className:"col",children:(0,l.jsx)(F.A,{tags:n})})}),e&&(0,l.jsx)(C.A,{className:(0,r.A)("margin-top--sm",L.G.blog.blogFooterEditMetaRow),editUrl:s,lastUpdatedAt:d,lastUpdatedBy:c})]})}return(0,l.jsxs)("footer",{className:"row docusaurus-mt-lg",children:[u&&(0,l.jsx)("div",{className:(0,r.A)("col",{"col--9":h}),children:(0,l.jsx)(F.A,{tags:n})}),h&&(0,l.jsx)("div",{className:(0,r.A)("col text--right",{"col--3":u}),children:(0,l.jsx)(O,{blogPostTitle:a,to:e.permalink})})]})}function D(e){let{children:t,className:n}=e;const a=function(){const{isBlogPostPage:e}=(0,i.e7)();return e?void 0:"margin-bottom--xl"}();return(0,l.jsxs)(o,{className:(0,r.A)(a,n),children:[(0,l.jsx)(U,{}),(0,l.jsx)(B,{children:t}),(0,l.jsx)(E,{})]})}},19684:(e,t,n)=>{n.d(t,{A:()=>i});n(30758);var a=n(69171),s=n(17016),r=n(86070);function i(e){let{items:t,component:n=s.A}=e;return(0,r.jsx)(r.Fragment,{children:t.map((e=>{let{content:t}=e;return(0,r.jsx)(a.in,{content:t,children:(0,r.jsx)(n,{children:(0,r.jsx)(t,{})})},t.metadata.permalink)}))})}},17229:(e,t,n)=>{n.r(t),n.d(t,{default:()=>f});n(30758);var a=n(13526),s=n(36575),r=n(45302),i=n(47425),l=n(1131),o=n(24811),c=n(24527),d=n(86689),h=n(47959),u=n(19684),m=n(44362),g=n(19546),p=n(86070);function x(e){let{tag:t}=e;const n=(0,l.ZD)(t);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(r.be,{title:n,description:t.description}),(0,p.jsx)(h.A,{tag:"blog_tags_posts"})]})}function j(e){let{tag:t,items:n,sidebar:a,listMetadata:r}=e;const i=(0,l.ZD)(t);return(0,p.jsxs)(c.A,{sidebar:a,children:[t.unlisted&&(0,p.jsx)(m.A,{}),(0,p.jsxs)("header",{className:"margin-bottom--xl",children:[(0,p.jsx)(g.A,{as:"h1",children:i}),t.description&&(0,p.jsx)("p",{children:t.description}),(0,p.jsx)(o.A,{href:t.allTagsPath,children:(0,p.jsx)(s.A,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page",children:"View All Tags"})})]}),(0,p.jsx)(u.A,{items:n}),(0,p.jsx)(d.A,{metadata:r})]})}function f(e){return(0,p.jsxs)(r.e3,{className:(0,a.A)(i.G.wrapper.blogPages,i.G.page.blogTagPostListPage),children:[(0,p.jsx)(x,{...e}),(0,p.jsx)(j,{...e})]})}},44362:(e,t,n)=>{n.d(t,{A:()=>c});n(30758);var a=n(13526),s=n(60286),r=n(47425),i=n(89965),l=n(86070);function o(e){let{className:t}=e;return(0,l.jsx)(i.A,{type:"caution",title:(0,l.jsx)(s.Rc,{}),className:(0,a.A)(t,r.G.common.unlistedBanner),children:(0,l.jsx)(s.Uh,{})})}function c(e){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.AE,{}),(0,l.jsx)(o,{...e})]})}},1131:(e,t,n)=>{n.d(t,{ZD:()=>i,uz:()=>l});n(30758);var a=n(36575),s=n(1083);n(86070);function r(){const{selectMessage:e}=(0,s.W)();return t=>e(t,(0,a.T)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}function i(e){const t=r();return(0,a.T)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}const l=()=>(0,a.T)({id:"theme.blog.authorsList.pageTitle",message:"Authors",description:"The title of the authors page"})},60286:(e,t,n)=>{n.d(t,{AE:()=>o,Rc:()=>i,TT:()=>d,Uh:()=>l,Yh:()=>c});n(30758);var a=n(36575),s=n(53393),r=n(86070);function i(){return(0,r.jsx)(a.A,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function l(){return(0,r.jsx)(a.A,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function o(){return(0,r.jsx)(s.A,{children:(0,r.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function c(){return(0,r.jsx)(a.A,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function d(){return(0,r.jsx)(a.A,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}}}]);