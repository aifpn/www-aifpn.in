var te=Object.defineProperty,le=Object.defineProperties;var ie=Object.getOwnPropertyDescriptors;var q=Object.getOwnPropertySymbols;var ne=Object.prototype.hasOwnProperty,oe=Object.prototype.propertyIsEnumerable;var U=(o,t,n)=>t in o?te(o,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[t]=n,G=(o,t)=>{for(var n in t||(t={}))ne.call(t,n)&&U(o,n,t[n]);if(q)for(var n of q(t))oe.call(t,n)&&U(o,n,t[n]);return o},M=(o,t)=>le(o,ie(t));import{S as ae,i as re,s as se,j as D,e as E,l as I,c as O,b as f,f as N,d as c,k as m,U as W,V as H,W as z,N as fe,H as j,R as F,K,O as ce}from"./vendor-307b7864.js";import{c as A,l as L}from"./config-6c2cbd12.js";function P(o,t,n){const i=o.slice();return i[5]=t[n],i}function C(o,t,n){const i=o.slice();return i[5]=t[n],i}function J(o){let t,n,i,l;return document.title=t=o[0].title,{c(){n=D(),i=E("meta"),this.h()},l(e){n=I(e),i=O(e,"META",{name:!0,content:!0}),this.h()},h(){f(i,"name","title"),f(i,"content",l=o[0].title)},m(e,a){N(e,n,a),N(e,i,a)},p(e,a){a&1&&t!==(t=e[0].title)&&(document.title=t),a&1&&l!==(l=e[0].title)&&f(i,"content",l)},d(e){e&&c(n),e&&c(i)}}}function R(o){let t,n;return{c(){t=E("meta"),this.h()},l(i){t=O(i,"META",{name:!0,content:!0}),this.h()},h(){f(t,"name","description"),f(t,"content",n=o[0].description)},m(i,l){N(i,t,l)},p(i,l){l&1&&n!==(n=i[0].description)&&f(t,"content",n)},d(i){i&&c(t)}}}function V(o){let t,n;return{c(){t=E("meta"),this.h()},l(i){t=O(i,"META",{name:!0,content:!0}),this.h()},h(){f(t,"name","keywords"),f(t,"content",n=o[0].keywords.join(", "))},m(i,l){N(i,t,l)},p(i,l){l&1&&n!==(n=i[0].keywords.join(", "))&&f(t,"content",n)},d(i){i&&c(t)}}}function B(o){let t,n;return{c(){t=E("link"),this.h()},l(i){t=O(i,"LINK",{rel:!0,href:!0}),this.h()},h(){f(t,"rel","canonical"),f(t,"href",n=`${A.base_url}${o[0].url}/`)},m(i,l){N(i,t,l)},p(i,l){l&1&&n!==(n=`${A.base_url}${i[0].url}/`)&&f(t,"href",n)},d(i){i&&c(t)}}}function Q(o){let t,n,i,l=Object.keys(o[0].twitter),e=[];for(let a=0;a<l.length;a+=1)e[a]=X(C(o,l,a));return{c(){t=E("meta"),n=D();for(let a=0;a<e.length;a+=1)e[a].c();i=m(),this.h()},l(a){t=O(a,"META",{name:!0,content:!0}),n=I(a);for(let h=0;h<e.length;h+=1)e[h].l(a);i=m(),this.h()},h(){f(t,"name","twitter:card"),f(t,"content","summary_large_image")},m(a,h){N(a,t,h),N(a,n,h);for(let s=0;s<e.length;s+=1)e[s].m(a,h);N(a,i,h)},p(a,h){if(h&1){l=Object.keys(a[0].twitter);let s;for(s=0;s<l.length;s+=1){const y=C(a,l,s);e[s]?e[s].p(y,h):(e[s]=X(y),e[s].c(),e[s].m(i.parentNode,i))}for(;s<e.length;s+=1)e[s].d(1);e.length=l.length}},d(a){a&&c(t),a&&c(n),W(e,a),a&&c(i)}}}function X(o){let t,n,i;return{c(){t=E("meta"),this.h()},l(l){t=O(l,"META",{name:!0,content:!0}),this.h()},h(){f(t,"name",n="twitter:"+o[5]),f(t,"content",i=o[0].twitter[o[5]])},m(l,e){N(l,t,e)},p(l,e){e&1&&n!==(n="twitter:"+l[5])&&f(t,"name",n),e&1&&i!==(i=l[0].twitter[l[5]])&&f(t,"content",i)},d(l){l&&c(t)}}}function Y(o){let t,n=Object.keys(o[0].openGraph),i=[];for(let l=0;l<n.length;l+=1)i[l]=Z(P(o,n,l));return{c(){for(let l=0;l<i.length;l+=1)i[l].c();t=m()},l(l){for(let e=0;e<i.length;e+=1)i[e].l(l);t=m()},m(l,e){for(let a=0;a<i.length;a+=1)i[a].m(l,e);N(l,t,e)},p(l,e){if(e&1){n=Object.keys(l[0].openGraph);let a;for(a=0;a<n.length;a+=1){const h=P(l,n,a);i[a]?i[a].p(h,e):(i[a]=Z(h),i[a].c(),i[a].m(t.parentNode,t))}for(;a<i.length;a+=1)i[a].d(1);i.length=n.length}},d(l){W(i,l),l&&c(t)}}}function Z(o){let t,n,i;return{c(){t=E("meta"),this.h()},l(l){t=O(l,"META",{name:!0,content:!0}),this.h()},h(){f(t,"name",n="og:"+o[5]),f(t,"content",i=o[0].openGraph[o[5]])},m(l,e){N(l,t,e)},p(l,e){e&1&&n!==(n="og:"+l[5])&&f(t,"name",n),e&1&&i!==(i=l[0].openGraph[l[5]])&&f(t,"content",i)},d(l){l&&c(t)}}}function x(o){let t,n=o[2]({"@context":"https://schema.org","@type":"Organization",url:o[0].url,logo:`${A.base_url}/favicon.ico`})+"",i;return{c(){t=new H,i=m(),this.h()},l(l){t=z(l),i=m(),this.h()},h(){t.a=i},m(l,e){t.m(n,l,e),N(l,i,e)},p(l,e){e&1&&n!==(n=l[2]({"@context":"https://schema.org","@type":"Organization",url:l[0].url,logo:`${A.base_url}/favicon.ico`})+"")&&t.p(n)},d(l){l&&c(i),l&&t.d()}}}function ee(o){let t,n=o[2]({"@context":"https://schema.org","@type":"WebSite",url:o[0].url,potentialAction:{"@type":"SearchAction",target:o[0].searchUrl,"query-input":"required name=search_term_string"}})+"",i;return{c(){t=new H,i=m(),this.h()},l(l){t=z(l),i=m(),this.h()},h(){t.a=i},m(l,e){t.m(n,l,e),N(l,i,e)},p(l,e){e&1&&n!==(n=l[2]({"@context":"https://schema.org","@type":"WebSite",url:l[0].url,potentialAction:{"@type":"SearchAction",target:l[0].searchUrl,"query-input":"required name=search_term_string"}})+"")&&t.p(n)},d(l){l&&c(i),l&&t.d()}}}function me(o){let t,n,i,l,e,a,h,s,y,T,$,S,_=o[0]&&o[0].title&&J(o),p=o[0]&&o[0].description&&R(o),d=o[0]&&o[0].keywords&&V(o),g=o[0]&&o[0].url&&A.base_url&&B(o),b=o[0]&&o[0].twitter&&Q(o),k=o[0]&&o[0].openGraph&&Y(o),w=o[0]&&o[0].url&&x(o),v=o[0]&&o[0].url&&o[0].searchUrl&&ee(o);return{c(){t=E("meta"),i=E("meta"),_&&_.c(),e=m(),p&&p.c(),a=m(),d&&d.c(),h=m(),g&&g.c(),s=m(),b&&b.c(),y=m(),k&&k.c(),T=m(),w&&w.c(),$=m(),v&&v.c(),S=m(),this.h()},l(r){const u=fe('[data-svelte="svelte-1t47ntd"]',document.head);t=O(u,"META",{name:!0,content:!0}),i=O(u,"META",{name:!0,content:!0}),_&&_.l(u),e=m(),p&&p.l(u),a=m(),d&&d.l(u),h=m(),g&&g.l(u),s=m(),b&&b.l(u),y=m(),k&&k.l(u),T=m(),w&&w.l(u),$=m(),v&&v.l(u),S=m(),u.forEach(c),this.h()},h(){f(t,"name","robots"),f(t,"content",n=o[0].robots),f(i,"name","googlebot"),f(i,"content",l=o[0].robots)},m(r,u){j(document.head,t),j(document.head,i),_&&_.m(document.head,null),j(document.head,e),p&&p.m(document.head,null),j(document.head,a),d&&d.m(document.head,null),j(document.head,h),g&&g.m(document.head,null),j(document.head,s),b&&b.m(document.head,null),j(document.head,y),k&&k.m(document.head,null),j(document.head,T),w&&w.m(document.head,null),j(document.head,$),v&&v.m(document.head,null),j(document.head,S)},p(r,[u]){u&1&&n!==(n=r[0].robots)&&f(t,"content",n),u&1&&l!==(l=r[0].robots)&&f(i,"content",l),r[0]&&r[0].title?_?_.p(r,u):(_=J(r),_.c(),_.m(e.parentNode,e)):_&&(_.d(1),_=null),r[0]&&r[0].description?p?p.p(r,u):(p=R(r),p.c(),p.m(a.parentNode,a)):p&&(p.d(1),p=null),r[0]&&r[0].keywords?d?d.p(r,u):(d=V(r),d.c(),d.m(h.parentNode,h)):d&&(d.d(1),d=null),r[0]&&r[0].url&&A.base_url?g?g.p(r,u):(g=B(r),g.c(),g.m(s.parentNode,s)):g&&(g.d(1),g=null),r[0]&&r[0].twitter?b?b.p(r,u):(b=Q(r),b.c(),b.m(y.parentNode,y)):b&&(b.d(1),b=null),r[0]&&r[0].openGraph?k?k.p(r,u):(k=Y(r),k.c(),k.m(T.parentNode,T)):k&&(k.d(1),k=null),r[0]&&r[0].url?w?w.p(r,u):(w=x(r),w.c(),w.m($.parentNode,$)):w&&(w.d(1),w=null),r[0]&&r[0].url&&r[0].searchUrl?v?v.p(r,u):(v=ee(r),v.c(),v.m(S.parentNode,S)):v&&(v.d(1),v=null)},i:F,o:F,d(r){c(t),c(i),_&&_.d(r),c(e),p&&p.d(r),c(a),d&&d.d(r),c(h),g&&g.d(r),c(s),b&&b.d(r),c(y),k&&k.d(r),c(T),w&&w.d(r),c($),v&&v.d(r),c(S)}}}function he(o,t,n){let i,l;K(o,L,s=>n(3,i=s));let{metaData:e={}}=t;const a=ce(L,s=>{let y={page_title:"All India Food Processing Nigam",page_description:"Official Website for All India Food Processing Nigam"};switch(s){case"hi":y.page_title="\u0905\u0916\u093F\u0932 \u092D\u093E\u0930\u0924\u0940\u092F \u0916\u093E\u0926\u094D\u092F \u092A\u094D\u0930\u0938\u0902\u0938\u094D\u0915\u0930\u0923 \u0928\u093F\u0917\u092E",y.page_description="\u0905\u0916\u093F\u0932 \u092D\u093E\u0930\u0924\u0940\u092F \u0916\u093E\u0926\u094D\u092F \u092A\u094D\u0930\u0938\u0902\u0938\u094D\u0915\u0930\u0923 \u0928\u093F\u0917\u092E \u0915\u0940 \u0906\u0927\u093F\u0915\u093E\u0930\u093F\u0915 \u0935\u0947\u092C\u0938\u093E\u0907\u091F"}return y});K(o,a,s=>n(4,l=s)),e=M(G({description:e.description||l.page_description,keywords:["aifpn","food processing","nigam","indian food processing nigam"]},e),{title:`${e.title||""}${e.title&&" - "}${l.page_title}`}),e=M(G({},e),{robots:"index,follow",openGraph:M(G({},e.openGraph),{url:`${A.base_url}${e.url}/`,title:e.title,description:e.description,locale:`${i}_IN`}),twitter:M(G({},e.twitter),{title:e.title,description:e.description})});const h=s=>`<script type="application/ld+json">${JSON.stringify(s)}<\/script>`;return o.$$set=s=>{"metaData"in s&&n(0,e=s.metaData)},o.$$.update=()=>{o.$$.dirty&1&&(!!e.image&&typeof e.image=="string"&&(n(0,e.openGraph=M(G({},e.openGraph),{image:`${A.base_url}${e.image}`}),e),n(0,e.twitter=M(G({},e.twitter),{image:`${A.base_url}${e.image}`}),e)),typeof e.image=="object"&&(n(0,e.openGraph=M(G({},e.openGraph),{image:`${A.base_url}${e.image}`,"image:width":e.image.width,"image:height":e.image.height,"image:alt":e.image.alt||e.title}),e),n(0,e.twitter=M(G({},e.twitter),{image:`${A.base_url}${e.image}`,"image:alt":e.image.alt||e.title}),e)))},[e,a,h]}class de extends ae{constructor(t){super();re(this,t,he,me,se,{metaData:0})}}export{de as M};
