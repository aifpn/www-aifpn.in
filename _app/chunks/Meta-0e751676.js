var te=Object.defineProperty,le=Object.defineProperties;var ie=Object.getOwnPropertyDescriptors;var q=Object.getOwnPropertySymbols;var ne=Object.prototype.hasOwnProperty,oe=Object.prototype.propertyIsEnumerable;var U=(o,t,n)=>t in o?te(o,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[t]=n,G=(o,t)=>{for(var n in t||(t={}))ne.call(t,n)&&U(o,n,t[n]);if(q)for(var n of q(t))oe.call(t,n)&&U(o,n,t[n]);return o},M=(o,t)=>le(o,ie(t));import{S as ae,i as re,s as fe,j as D,e as E,l as I,c as O,b as s,f as N,d as m,k as c,U as W,V as H,W as L,O as se,H as j,L as P,K as z,P as me}from"./vendor-9e861a44.js";import{c as A,l as F}from"./config-9f733ca2.js";function K(o,t,n){const i=o.slice();return i[5]=t[n],i}function C(o,t,n){const i=o.slice();return i[5]=t[n],i}function J(o){let t,n,i,l;return document.title=t=o[0].title,{c(){n=D(),i=E("meta"),this.h()},l(e){n=I(e),i=O(e,"META",{name:!0,content:!0}),this.h()},h(){s(i,"name","title"),s(i,"content",l=o[0].title)},m(e,a){N(e,n,a),N(e,i,a)},p(e,a){a&1&&t!==(t=e[0].title)&&(document.title=t),a&1&&l!==(l=e[0].title)&&s(i,"content",l)},d(e){e&&m(n),e&&m(i)}}}function V(o){let t,n;return{c(){t=E("meta"),this.h()},l(i){t=O(i,"META",{name:!0,content:!0}),this.h()},h(){s(t,"name","description"),s(t,"content",n=o[0].description)},m(i,l){N(i,t,l)},p(i,l){l&1&&n!==(n=i[0].description)&&s(t,"content",n)},d(i){i&&m(t)}}}function B(o){let t,n;return{c(){t=E("meta"),this.h()},l(i){t=O(i,"META",{name:!0,content:!0}),this.h()},h(){s(t,"name","keywords"),s(t,"content",n=o[0].keywords.join(", "))},m(i,l){N(i,t,l)},p(i,l){l&1&&n!==(n=i[0].keywords.join(", "))&&s(t,"content",n)},d(i){i&&m(t)}}}function Q(o){let t,n;return{c(){t=E("link"),this.h()},l(i){t=O(i,"LINK",{rel:!0,href:!0}),this.h()},h(){s(t,"rel","canonical"),s(t,"href",n=`${A.base_url}${o[0].url}/`)},m(i,l){N(i,t,l)},p(i,l){l&1&&n!==(n=`${A.base_url}${i[0].url}/`)&&s(t,"href",n)},d(i){i&&m(t)}}}function R(o){let t,n,i,l=Object.keys(o[0].twitter),e=[];for(let a=0;a<l.length;a+=1)e[a]=X(C(o,l,a));return{c(){t=E("meta"),n=D();for(let a=0;a<e.length;a+=1)e[a].c();i=c(),this.h()},l(a){t=O(a,"META",{name:!0,content:!0}),n=I(a);for(let h=0;h<e.length;h+=1)e[h].l(a);i=c(),this.h()},h(){s(t,"name","twitter:card"),s(t,"content","summary_large_image")},m(a,h){N(a,t,h),N(a,n,h);for(let f=0;f<e.length;f+=1)e[f].m(a,h);N(a,i,h)},p(a,h){if(h&1){l=Object.keys(a[0].twitter);let f;for(f=0;f<l.length;f+=1){const y=C(a,l,f);e[f]?e[f].p(y,h):(e[f]=X(y),e[f].c(),e[f].m(i.parentNode,i))}for(;f<e.length;f+=1)e[f].d(1);e.length=l.length}},d(a){a&&m(t),a&&m(n),W(e,a),a&&m(i)}}}function X(o){let t,n,i;return{c(){t=E("meta"),this.h()},l(l){t=O(l,"META",{name:!0,content:!0}),this.h()},h(){s(t,"name",n="twitter:"+o[5]),s(t,"content",i=o[0].twitter[o[5]])},m(l,e){N(l,t,e)},p(l,e){e&1&&n!==(n="twitter:"+l[5])&&s(t,"name",n),e&1&&i!==(i=l[0].twitter[l[5]])&&s(t,"content",i)},d(l){l&&m(t)}}}function Y(o){let t,n=Object.keys(o[0].openGraph),i=[];for(let l=0;l<n.length;l+=1)i[l]=Z(K(o,n,l));return{c(){for(let l=0;l<i.length;l+=1)i[l].c();t=c()},l(l){for(let e=0;e<i.length;e+=1)i[e].l(l);t=c()},m(l,e){for(let a=0;a<i.length;a+=1)i[a].m(l,e);N(l,t,e)},p(l,e){if(e&1){n=Object.keys(l[0].openGraph);let a;for(a=0;a<n.length;a+=1){const h=K(l,n,a);i[a]?i[a].p(h,e):(i[a]=Z(h),i[a].c(),i[a].m(t.parentNode,t))}for(;a<i.length;a+=1)i[a].d(1);i.length=n.length}},d(l){W(i,l),l&&m(t)}}}function Z(o){let t,n,i;return{c(){t=E("meta"),this.h()},l(l){t=O(l,"META",{name:!0,content:!0}),this.h()},h(){s(t,"name",n="og:"+o[5]),s(t,"content",i=o[0].openGraph[o[5]])},m(l,e){N(l,t,e)},p(l,e){e&1&&n!==(n="og:"+l[5])&&s(t,"name",n),e&1&&i!==(i=l[0].openGraph[l[5]])&&s(t,"content",i)},d(l){l&&m(t)}}}function x(o){let t,n=o[2]({"@context":"https://schema.org","@type":"Organization",url:o[0].url,logo:`${A.base_url}/favicon.ico`})+"",i;return{c(){t=new H,i=c(),this.h()},l(l){t=L(l),i=c(),this.h()},h(){t.a=i},m(l,e){t.m(n,l,e),N(l,i,e)},p(l,e){e&1&&n!==(n=l[2]({"@context":"https://schema.org","@type":"Organization",url:l[0].url,logo:`${A.base_url}/favicon.ico`})+"")&&t.p(n)},d(l){l&&m(i),l&&t.d()}}}function ee(o){let t,n=o[2]({"@context":"https://schema.org","@type":"WebSite",url:o[0].url,potentialAction:{"@type":"SearchAction",target:o[0].searchUrl,"query-input":"required name=search_term_string"}})+"",i;return{c(){t=new H,i=c(),this.h()},l(l){t=L(l),i=c(),this.h()},h(){t.a=i},m(l,e){t.m(n,l,e),N(l,i,e)},p(l,e){e&1&&n!==(n=l[2]({"@context":"https://schema.org","@type":"WebSite",url:l[0].url,potentialAction:{"@type":"SearchAction",target:l[0].searchUrl,"query-input":"required name=search_term_string"}})+"")&&t.p(n)},d(l){l&&m(i),l&&t.d()}}}function ce(o){let t,n,i,l,e,a,h,f,y,T,$,S,_=o[0]&&o[0].title&&J(o),p=o[0]&&o[0].description&&V(o),d=o[0]&&o[0].keywords&&B(o),g=o[0]&&o[0].url&&A.base_url&&Q(o),b=o[0]&&o[0].twitter&&R(o),k=o[0]&&o[0].openGraph&&Y(o),w=o[0]&&o[0].url&&x(o),v=o[0]&&o[0].url&&o[0].searchUrl&&ee(o);return{c(){t=E("meta"),i=E("meta"),_&&_.c(),e=c(),p&&p.c(),a=c(),d&&d.c(),h=c(),g&&g.c(),f=c(),b&&b.c(),y=c(),k&&k.c(),T=c(),w&&w.c(),$=c(),v&&v.c(),S=c(),this.h()},l(r){const u=se('[data-svelte="svelte-1t47ntd"]',document.head);t=O(u,"META",{name:!0,content:!0}),i=O(u,"META",{name:!0,content:!0}),_&&_.l(u),e=c(),p&&p.l(u),a=c(),d&&d.l(u),h=c(),g&&g.l(u),f=c(),b&&b.l(u),y=c(),k&&k.l(u),T=c(),w&&w.l(u),$=c(),v&&v.l(u),S=c(),u.forEach(m),this.h()},h(){s(t,"name","robots"),s(t,"content",n=o[0].robots),s(i,"name","googlebot"),s(i,"content",l=o[0].robots)},m(r,u){j(document.head,t),j(document.head,i),_&&_.m(document.head,null),j(document.head,e),p&&p.m(document.head,null),j(document.head,a),d&&d.m(document.head,null),j(document.head,h),g&&g.m(document.head,null),j(document.head,f),b&&b.m(document.head,null),j(document.head,y),k&&k.m(document.head,null),j(document.head,T),w&&w.m(document.head,null),j(document.head,$),v&&v.m(document.head,null),j(document.head,S)},p(r,[u]){u&1&&n!==(n=r[0].robots)&&s(t,"content",n),u&1&&l!==(l=r[0].robots)&&s(i,"content",l),r[0]&&r[0].title?_?_.p(r,u):(_=J(r),_.c(),_.m(e.parentNode,e)):_&&(_.d(1),_=null),r[0]&&r[0].description?p?p.p(r,u):(p=V(r),p.c(),p.m(a.parentNode,a)):p&&(p.d(1),p=null),r[0]&&r[0].keywords?d?d.p(r,u):(d=B(r),d.c(),d.m(h.parentNode,h)):d&&(d.d(1),d=null),r[0]&&r[0].url&&A.base_url?g?g.p(r,u):(g=Q(r),g.c(),g.m(f.parentNode,f)):g&&(g.d(1),g=null),r[0]&&r[0].twitter?b?b.p(r,u):(b=R(r),b.c(),b.m(y.parentNode,y)):b&&(b.d(1),b=null),r[0]&&r[0].openGraph?k?k.p(r,u):(k=Y(r),k.c(),k.m(T.parentNode,T)):k&&(k.d(1),k=null),r[0]&&r[0].url?w?w.p(r,u):(w=x(r),w.c(),w.m($.parentNode,$)):w&&(w.d(1),w=null),r[0]&&r[0].url&&r[0].searchUrl?v?v.p(r,u):(v=ee(r),v.c(),v.m(S.parentNode,S)):v&&(v.d(1),v=null)},i:P,o:P,d(r){m(t),m(i),_&&_.d(r),m(e),p&&p.d(r),m(a),d&&d.d(r),m(h),g&&g.d(r),m(f),b&&b.d(r),m(y),k&&k.d(r),m(T),w&&w.d(r),m($),v&&v.d(r),m(S)}}}function he(o,t,n){let i,l;z(o,F,f=>n(3,i=f));let{metaData:e={}}=t;const a=me(F,f=>{let y={page_title:"All India Food Processing Nigam",page_description:"Official Website for All India Food Processing Nigam"};switch(f){case"hi":y.page_title="\u0905\u0916\u093F\u0932 \u092D\u093E\u0930\u0924\u0940\u092F \u0916\u093E\u0926\u094D\u092F \u092A\u094D\u0930\u0938\u0902\u0938\u094D\u0915\u0930\u0923 \u0928\u093F\u0917\u092E",y.page_description="\u0905\u0916\u093F\u0932 \u092D\u093E\u0930\u0924\u0940\u092F \u0916\u093E\u0926\u094D\u092F \u092A\u094D\u0930\u0938\u0902\u0938\u094D\u0915\u0930\u0923 \u0928\u093F\u0917\u092E \u0915\u0940 \u0906\u0927\u093F\u0915\u093E\u0930\u093F\u0915 \u0935\u0947\u092C\u0938\u093E\u0907\u091F"}return y});z(o,a,f=>n(4,l=f)),e=M(G({description:e.description||l.page_description,keywords:["aifpn","food processing","nigam","indian food processing nigam"]},e),{title:`${e.title||""}${e.title&&" - "}${l.page_title}`}),e=M(G({},e),{robots:"index,follow",openGraph:M(G({},e.openGraph),{url:`${A.base_url}${e.url}/`,title:e.title,description:e.description,locale:`${i}_IN`}),twitter:M(G({},e.twitter),{title:e.title,description:e.description})});const h=f=>`<script type="application/ld+json">${JSON.stringify(f)}<\/script>`;return o.$$set=f=>{"metaData"in f&&n(0,e=f.metaData)},o.$$.update=()=>{o.$$.dirty&1&&(!!e.image&&typeof e.image=="string"&&(n(0,e.openGraph=M(G({},e.openGraph),{image:`${A.base_url}${e.image}`}),e),n(0,e.twitter=M(G({},e.twitter),{image:`${A.base_url}${e.image}`}),e)),typeof e.image=="object"&&(n(0,e.openGraph=M(G({},e.openGraph),{image:`${A.base_url}${e.image}`,"image:width":e.image.width,"image:height":e.image.height,"image:alt":e.image.alt||e.title}),e),n(0,e.twitter=M(G({},e.twitter),{image:`${A.base_url}${e.image}`,"image:alt":e.image.alt||e.title}),e)))},[e,a,h]}class de extends ae{constructor(t){super();re(this,t,he,ce,fe,{metaData:0})}}export{de as M};
