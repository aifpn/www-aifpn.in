var ne=Object.defineProperty,ae=Object.defineProperties;var oe=Object.getOwnPropertyDescriptors;var I=Object.getOwnPropertySymbols;var re=Object.prototype.hasOwnProperty,fe=Object.prototype.propertyIsEnumerable;var D=(n,e,a)=>e in n?ne(n,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[e]=a,E=(n,e)=>{for(var a in e||(e={}))re.call(e,a)&&D(n,a,e[a]);if(I)for(var a of I(e))fe.call(e,a)&&D(n,a,e[a]);return n},O=(n,e)=>ae(n,oe(e));import{S as se,i as me,s as ce,e as M,c as j,b as s,g as A,d as c,k as x,m as ee,l as m,X as te,a4 as le,a5 as ie,G as he,H as G,O as L,L as H,a2 as ue}from"./vendor-e664f212.js";import{p as W}from"./stores-6a897e73.js";import{c as $}from"./config-9b6411d1.js";function z(n,e,a){const i=n.slice();return i[5]=e[a],i}function F(n,e,a){const i=n.slice();return i[5]=e[a],i}function K(n){let e,a,i;return{c(){e=M("link"),this.h()},l(l){e=j(l,"LINK",{rel:!0,type:!0,title:!0,href:!0}),this.h()},h(){s(e,"rel","sitemap"),s(e,"type","application/xml"),s(e,"title",a=`${n[1].title} - Sitemap`),s(e,"href",i=n[0].sitemapUrl)},m(l,t){A(l,e,t)},p(l,t){t&2&&a!==(a=`${l[1].title} - Sitemap`)&&s(e,"title",a),t&1&&i!==(i=l[0].sitemapUrl)&&s(e,"href",i)},d(l){l&&c(e)}}}function P(n){let e,a,i,l;return document.title=e=n[0].title,{c(){a=x(),i=M("meta"),this.h()},l(t){a=ee(t),i=j(t,"META",{name:!0,content:!0}),this.h()},h(){s(i,"name","title"),s(i,"content",l=n[0].title)},m(t,o){A(t,a,o),A(t,i,o)},p(t,o){o&1&&e!==(e=t[0].title)&&(document.title=e),o&1&&l!==(l=t[0].title)&&s(i,"content",l)},d(t){t&&c(a),t&&c(i)}}}function C(n){let e,a;return{c(){e=M("meta"),this.h()},l(i){e=j(i,"META",{name:!0,content:!0}),this.h()},h(){s(e,"name","description"),s(e,"content",a=n[0].description)},m(i,l){A(i,e,l)},p(i,l){l&1&&a!==(a=i[0].description)&&s(e,"content",a)},d(i){i&&c(e)}}}function J(n){let e,a;return{c(){e=M("meta"),this.h()},l(i){e=j(i,"META",{name:!0,content:!0}),this.h()},h(){s(e,"name","keywords"),s(e,"content",a=n[0].keywords.join(", "))},m(i,l){A(i,e,l)},p(i,l){l&1&&a!==(a=i[0].keywords.join(", "))&&s(e,"content",a)},d(i){i&&c(e)}}}function X(n){let e,a;return{c(){e=M("link"),this.h()},l(i){e=j(i,"LINK",{rel:!0,href:!0}),this.h()},h(){s(e,"rel","canonical"),s(e,"href",a=`${$.base_url}${n[0].url}`)},m(i,l){A(i,e,l)},p(i,l){l&1&&a!==(a=`${$.base_url}${i[0].url}`)&&s(e,"href",a)},d(i){i&&c(e)}}}function B(n){let e,a,i,l=Object.keys(n[0].twitter),t=[];for(let o=0;o<l.length;o+=1)t[o]=Q(F(n,l,o));return{c(){e=M("meta"),a=x();for(let o=0;o<t.length;o+=1)t[o].c();i=m(),this.h()},l(o){e=j(o,"META",{name:!0,content:!0}),a=ee(o);for(let u=0;u<t.length;u+=1)t[u].l(o);i=m(),this.h()},h(){s(e,"name","twitter:card"),s(e,"content","summary_large_image")},m(o,u){A(o,e,u),A(o,a,u);for(let f=0;f<t.length;f+=1)t[f].m(o,u);A(o,i,u)},p(o,u){if(u&1){l=Object.keys(o[0].twitter);let f;for(f=0;f<l.length;f+=1){const N=F(o,l,f);t[f]?t[f].p(N,u):(t[f]=Q(N),t[f].c(),t[f].m(i.parentNode,i))}for(;f<t.length;f+=1)t[f].d(1);t.length=l.length}},d(o){o&&c(e),o&&c(a),te(t,o),o&&c(i)}}}function Q(n){let e,a,i;return{c(){e=M("meta"),this.h()},l(l){e=j(l,"META",{name:!0,content:!0}),this.h()},h(){s(e,"name",a="twitter:"+n[5]),s(e,"content",i=n[0].twitter[n[5]])},m(l,t){A(l,e,t)},p(l,t){t&1&&a!==(a="twitter:"+l[5])&&s(e,"name",a),t&1&&i!==(i=l[0].twitter[l[5]])&&s(e,"content",i)},d(l){l&&c(e)}}}function R(n){let e,a=Object.keys(n[0].openGraph),i=[];for(let l=0;l<a.length;l+=1)i[l]=V(z(n,a,l));return{c(){for(let l=0;l<i.length;l+=1)i[l].c();e=m()},l(l){for(let t=0;t<i.length;t+=1)i[t].l(l);e=m()},m(l,t){for(let o=0;o<i.length;o+=1)i[o].m(l,t);A(l,e,t)},p(l,t){if(t&1){a=Object.keys(l[0].openGraph);let o;for(o=0;o<a.length;o+=1){const u=z(l,a,o);i[o]?i[o].p(u,t):(i[o]=V(u),i[o].c(),i[o].m(e.parentNode,e))}for(;o<i.length;o+=1)i[o].d(1);i.length=a.length}},d(l){te(i,l),l&&c(e)}}}function V(n){let e,a,i;return{c(){e=M("meta"),this.h()},l(l){e=j(l,"META",{name:!0,content:!0}),this.h()},h(){s(e,"name",a="og:"+n[5]),s(e,"content",i=n[0].openGraph[n[5]])},m(l,t){A(l,e,t)},p(l,t){t&1&&a!==(a="og:"+l[5])&&s(e,"name",a),t&1&&i!==(i=l[0].openGraph[l[5]])&&s(e,"content",i)},d(l){l&&c(e)}}}function Y(n){let e,a=n[3]({"@context":"https://schema.org","@type":"Organization",url:n[0].url,logo:`${$.base_url}/favicon.ico`})+"",i;return{c(){e=new le,i=m(),this.h()},l(l){e=ie(l),i=m(),this.h()},h(){e.a=i},m(l,t){e.m(a,l,t),A(l,i,t)},p(l,t){t&1&&a!==(a=l[3]({"@context":"https://schema.org","@type":"Organization",url:l[0].url,logo:`${$.base_url}/favicon.ico`})+"")&&e.p(a)},d(l){l&&c(i),l&&e.d()}}}function Z(n){let e,a=n[3]({"@context":"https://schema.org","@type":"WebSite",url:n[0].url,potentialAction:{"@type":"SearchAction",target:n[0].searchUrl,"query-input":"required name=search_term_string"}})+"",i;return{c(){e=new le,i=m(),this.h()},l(l){e=ie(l),i=m(),this.h()},h(){e.a=i},m(l,t){e.m(a,l,t),A(l,i,t)},p(l,t){t&1&&a!==(a=l[3]({"@context":"https://schema.org","@type":"WebSite",url:l[0].url,potentialAction:{"@type":"SearchAction",target:l[0].searchUrl,"query-input":"required name=search_term_string"}})+"")&&e.p(a)},d(l){l&&c(i),l&&e.d()}}}function _e(n){let e,a,i,l,t,o,u,f,N,S,T,U,q,_=n[0]&&n[0].title&&n[0].sitemapUrl&&K(n),p=n[0]&&n[0].title&&P(n),d=n[0]&&n[0].description&&C(n),b=n[0]&&n[0].keywords&&J(n),g=n[0]&&n[0].url&&$.base_url&&X(n),k=n[0]&&n[0].twitter&&B(n),w=n[0]&&n[0].openGraph&&R(n),y=n[0]&&n[0].url&&Y(n),v=n[0]&&n[0].url&&n[0].searchUrl&&Z(n);return{c(){e=M("meta"),i=M("meta"),_&&_.c(),t=m(),p&&p.c(),o=m(),d&&d.c(),u=m(),b&&b.c(),f=m(),g&&g.c(),N=m(),k&&k.c(),S=m(),w&&w.c(),T=m(),y&&y.c(),U=m(),v&&v.c(),q=m(),this.h()},l(r){const h=he('[data-svelte="svelte-oxpqoq"]',document.head);e=j(h,"META",{name:!0,content:!0}),i=j(h,"META",{name:!0,content:!0}),_&&_.l(h),t=m(),p&&p.l(h),o=m(),d&&d.l(h),u=m(),b&&b.l(h),f=m(),g&&g.l(h),N=m(),k&&k.l(h),S=m(),w&&w.l(h),T=m(),y&&y.l(h),U=m(),v&&v.l(h),q=m(),h.forEach(c),this.h()},h(){s(e,"name","robots"),s(e,"content",a=n[0].robots),s(i,"name","googlebot"),s(i,"content",l=n[0].robots)},m(r,h){G(document.head,e),G(document.head,i),_&&_.m(document.head,null),G(document.head,t),p&&p.m(document.head,null),G(document.head,o),d&&d.m(document.head,null),G(document.head,u),b&&b.m(document.head,null),G(document.head,f),g&&g.m(document.head,null),G(document.head,N),k&&k.m(document.head,null),G(document.head,S),w&&w.m(document.head,null),G(document.head,T),y&&y.m(document.head,null),G(document.head,U),v&&v.m(document.head,null),G(document.head,q)},p(r,[h]){h&1&&a!==(a=r[0].robots)&&s(e,"content",a),h&1&&l!==(l=r[0].robots)&&s(i,"content",l),r[0]&&r[0].title&&r[0].sitemapUrl?_?_.p(r,h):(_=K(r),_.c(),_.m(t.parentNode,t)):_&&(_.d(1),_=null),r[0]&&r[0].title?p?p.p(r,h):(p=P(r),p.c(),p.m(o.parentNode,o)):p&&(p.d(1),p=null),r[0]&&r[0].description?d?d.p(r,h):(d=C(r),d.c(),d.m(u.parentNode,u)):d&&(d.d(1),d=null),r[0]&&r[0].keywords?b?b.p(r,h):(b=J(r),b.c(),b.m(f.parentNode,f)):b&&(b.d(1),b=null),r[0]&&r[0].url&&$.base_url?g?g.p(r,h):(g=X(r),g.c(),g.m(N.parentNode,N)):g&&(g.d(1),g=null),r[0]&&r[0].twitter?k?k.p(r,h):(k=B(r),k.c(),k.m(S.parentNode,S)):k&&(k.d(1),k=null),r[0]&&r[0].openGraph?w?w.p(r,h):(w=R(r),w.c(),w.m(T.parentNode,T)):w&&(w.d(1),w=null),r[0]&&r[0].url?y?y.p(r,h):(y=Y(r),y.c(),y.m(U.parentNode,U)):y&&(y.d(1),y=null),r[0]&&r[0].url&&r[0].searchUrl?v?v.p(r,h):(v=Z(r),v.c(),v.m(q.parentNode,q)):v&&(v.d(1),v=null)},i:L,o:L,d(r){c(e),c(i),_&&_.d(r),c(t),p&&p.d(r),c(o),d&&d.d(r),c(u),b&&b.d(r),c(f),g&&g.d(r),c(N),k&&k.d(r),c(S),w&&w.d(r),c(T),y&&y.d(r),c(U),v&&v.d(r),c(q)}}}function pe(n,e,a){let i,l;H(n,W,f=>a(4,i=f));let{metaData:t={}}=e;const o=ue(W,f=>{let N={title:"All India Food Processing Nigam",description:"Official Website for All India Food Processing Nigam",keywords:["aifpn","all india food processing nigam","all india food processing corporation"]};switch(f.params.locale){case"hi":N.title="\u0905\u0916\u093F\u0932 \u092D\u093E\u0930\u0924\u0940\u092F \u0916\u093E\u0926\u094D\u092F \u092A\u094D\u0930\u0938\u0902\u0938\u094D\u0915\u0930\u0923 \u0928\u093F\u0917\u092E",N.description="\u0905\u0916\u093F\u0932 \u092D\u093E\u0930\u0924\u0940\u092F \u0916\u093E\u0926\u094D\u092F \u092A\u094D\u0930\u0938\u0902\u0938\u094D\u0915\u0930\u0923 \u0928\u093F\u0917\u092E \u0915\u0940 \u0906\u0927\u093F\u0915\u093E\u0930\u093F\u0915 \u0935\u0947\u092C\u0938\u093E\u0907\u091F",N.keywords=["\u090F\u0906\u0908\u090F\u092B\u092A\u0940\u090F\u0928","\u0905\u0916\u093F\u0932 \u092D\u093E\u0930\u0924\u0940\u092F \u0916\u093E\u0926\u094D\u092F \u092A\u094D\u0930\u0938\u0902\u0938\u094D\u0915\u0930\u0923 \u0928\u093F\u0917\u092E"]}return N});H(n,o,f=>a(1,l=f)),t=O(E({url:`/${i.params.locale}`,robots:"index,follow",keywords:[],sitemapUrl:`/${i.params.locale}/sitemap.xml`},t),{title:`${t.title||""}${t.title&&" - "}${l.title}`,description:t.description||l.description}),t=O(E({},t),{keywords:[...t.keywords,...l.keywords],openGraph:O(E({},t.openGraph),{url:`${$.base_url}${t.url}`,title:t.title,description:t.description,locale:`${i.params.locale}_IN`}),twitter:O(E({},t.twitter),{title:t.title,description:t.description})});const u=f=>`<script type="application/ld+json">${JSON.stringify(f)}<\/script>`;return n.$$set=f=>{"metaData"in f&&a(0,t=f.metaData)},n.$$.update=()=>{n.$$.dirty&1&&(!!t.image&&typeof t.image=="string"&&(a(0,t.openGraph=O(E({},t.openGraph),{image:`${$.base_url}${t.image}`}),t),a(0,t.twitter=O(E({},t.twitter),{image:`${$.base_url}${t.image}`}),t)),typeof t.image=="object"&&(a(0,t.openGraph=O(E({},t.openGraph),{image:`${$.base_url}${t.image}`,"image:width":t.image.width,"image:height":t.image.height,"image:alt":t.image.alt||t.title}),t),a(0,t.twitter=O(E({},t.twitter),{image:`${$.base_url}${t.image}`,"image:alt":t.image.alt||t.title}),t)))},[t,l,o,u]}class we extends se{constructor(e){super();me(this,e,pe,_e,ce,{metaData:0})}}export{we as M};
