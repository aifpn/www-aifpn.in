var Y=Object.defineProperty,Z=Object.defineProperties;var ee=Object.getOwnPropertyDescriptors;var F=Object.getOwnPropertySymbols;var te=Object.prototype.hasOwnProperty,ae=Object.prototype.propertyIsEnumerable;var G=(n,t,a)=>t in n?Y(n,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[t]=a,d=(n,t)=>{for(var a in t||(t={}))te.call(t,a)&&G(n,a,t[a]);if(F)for(var a of F(t))ae.call(t,a)&&G(n,a,t[a]);return n},h=(n,t)=>Z(n,ee(t));import{S as se,i as ie,s as le,l as H,w as Q,x as U,g as w,y as W,q as I,o as L,d as g,B as X,k as x,e as A,t as P,m as D,c as E,a as M,h as S,b as v,H as b,j as N,a6 as ne,p as oe,L as R,a2 as re,n as ce,a8 as me,a3 as T}from"../../../chunks/vendor-08efcc10.js";import{p as V}from"../../../chunks/stores-d101fe06.js";import{c as J}from"../../../chunks/config-9b6411d1.js";import{M as fe}from"../../../chunks/Meta-1fb2756b.js";import{L as pe}from"../../../chunks/Link-7ff5eae3.js";function K(n,t,a){const s=n.slice();return s[4]=t[a],s[6]=a,s}function ue(n){let t,a,s,m,r,c,l=n[4].name+"",o,k;return{c(){t=A("card"),a=A("img"),r=x(),c=A("span"),o=P(l),k=x(),this.h()},l(f){t=E(f,"CARD",{class:!0});var p=M(t);a=E(p,"IMG",{class:!0,src:!0,alt:!0}),r=D(p),c=E(p,"SPAN",{class:!0});var _=M(c);o=S(_,l),_.forEach(g),p.forEach(g),k=D(f),this.h()},h(){v(a,"class","w-full h-40 rounded-t-xl"),T(a.src,s=`${J.base_url}/images/img-${n[4].img}.jpeg`)||v(a,"src",s),v(a,"alt",m=`img-${n[4].img}`),v(c,"class","py-4 px-2 w-full bg-blue-500 text-white text-center rounded-b-xl"),v(t,"class","w-full flex-cij capitalize rounded-xl hover:shadow-xl")},m(f,p){w(f,t,p),b(t,a),b(t,r),b(t,c),b(c,o),w(f,k,p)},p(f,p){p&1&&!T(a.src,s=`${J.base_url}/images/img-${f[4].img}.jpeg`)&&v(a,"src",s),p&1&&m!==(m=`img-${f[4].img}`)&&v(a,"alt",m),p&1&&l!==(l=f[4].name+"")&&N(o,l)},d(f){f&&g(t),f&&g(k)}}}function O(n,t){let a,s,m;return s=new pe({props:{href:t[4].link,$$slots:{default:[ue]},$$scope:{ctx:t}}}),{key:n,first:null,c(){a=H(),Q(s.$$.fragment),this.h()},l(r){a=H(),U(s.$$.fragment,r),this.h()},h(){this.first=a},m(r,c){w(r,a,c),W(s,r,c),m=!0},p(r,c){t=r;const l={};c&1&&(l.href=t[4].link),c&129&&(l.$$scope={dirty:c,ctx:t}),s.$set(l)},i(r){m||(I(s.$$.fragment,r),m=!0)},o(r){L(s.$$.fragment,r),m=!1},d(r){r&&g(a),X(s,r)}}}function ge(n){let t,a,s,m=n[0].title+"",r,c,l,o,k=n[0].content.d+"",f,p,_,u=[],C=new Map,y;t=new fe({props:{metaData:n[2]}});let j=n[0].content.a;const z=e=>e[6];for(let e=0;e<j.length;e+=1){let i=K(n,j,e),$=z(i);C.set($,u[e]=O($,i))}return{c(){Q(t.$$.fragment),a=x(),s=A("span"),r=P(m),c=P(":"),l=x(),o=A("p"),f=P(k),p=x(),_=A("div");for(let e=0;e<u.length;e+=1)u[e].c();this.h()},l(e){U(t.$$.fragment,e),a=D(e),s=E(e,"SPAN",{class:!0});var i=M(s);r=S(i,m),c=S(i,":"),i.forEach(g),l=D(e),o=E(e,"P",{class:!0});var $=M(o);f=S($,k),$.forEach(g),p=D(e),_=E(e,"DIV",{class:!0});var B=M(_);for(let q=0;q<u.length;q+=1)u[q].l(B);B.forEach(g),this.h()},h(){v(s,"class","my-2 text-2xl font-bold text-gray-600"),v(o,"class","my-2"),v(_,"class","my-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4")},m(e,i){W(t,e,i),w(e,a,i),w(e,s,i),b(s,r),b(s,c),w(e,l,i),w(e,o,i),b(o,f),w(e,p,i),w(e,_,i);for(let $=0;$<u.length;$+=1)u[$].m(_,null);y=!0},p(e,[i]){(!y||i&1)&&m!==(m=e[0].title+"")&&N(r,m),(!y||i&1)&&k!==(k=e[0].content.d+"")&&N(f,k),i&1&&(j=e[0].content.a,ce(),u=ne(u,i,z,1,e,j,C,_,me,O,null,K),oe())},i(e){if(!y){I(t.$$.fragment,e);for(let i=0;i<j.length;i+=1)I(u[i]);y=!0}},o(e){L(t.$$.fragment,e);for(let i=0;i<u.length;i+=1)L(u[i]);y=!1},d(e){X(t,e),e&&g(a),e&&g(s),e&&g(l),e&&g(o),e&&g(p),e&&g(_);for(let i=0;i<u.length;i+=1)u[i].d()}}}function _e(n,t,a){let s,m;R(n,V,l=>a(3,m=l));const r=re(V,l=>{let o={title:"Activities",content:{d:"The industries and practices of All India Food Processing Nigam include the following:",a:[{img:101,name:"canning",link:`/${l.params.locale}/activities/food-processing`},{img:102,name:"fish processing",link:`/${l.params.locale}/activities/fish-processing`},{img:103,name:"vegetable packing plant",link:`/${l.params.locale}/activities/food-processing`},{img:104,name:"fruit processing",link:`/${l.params.locale}/activities/food-processing`},{img:105,name:"grain processing",link:`/${l.params.locale}/activities/food-processing`},{img:107,name:"beet sugar processing",link:`/${l.params.locale}/activities/beet-sugar-processing`},{img:108,name:"slaughterhouse",link:`/${l.params.locale}/activities/meat-processing`},{img:109,name:"meat packing plant",link:`/${l.params.locale}/activities/meat-processing`},{img:110,name:"spice processing",link:`/${l.params.locale}/activities/food-processing`}]},keywords:["activities at aifpn","what does aifpn do","what is the work of all india food processing nigam"]};switch(l.params.locale){case"hi":o.title="\u0916\u093E\u0926\u094D\u092F \u092A\u094D\u0930\u0938\u0902\u0938\u094D\u0915\u0930\u0923",o.content={d:"\u0905\u0916\u093F\u0932 \u092D\u093E\u0930\u0924\u0940\u092F \u0916\u093E\u0926\u094D\u092F \u092A\u094D\u0930\u0938\u0902\u0938\u094D\u0915\u0930\u0923 \u0928\u093F\u0917\u092E \u0915\u0947 \u0909\u0926\u094D\u092F\u094B\u0917\u094B\u0902 \u0914\u0930 \u092A\u094D\u0930\u0925\u093E\u0913\u0902 \u092E\u0947\u0902 \u0928\u093F\u092E\u094D\u0928\u0932\u093F\u0916\u093F\u0924 \u0936\u093E\u092E\u093F\u0932 \u0939\u0948\u0902:",a:[h(d({},o.content.a[0]),{name:"\u0921\u093F\u092C\u094D\u092C\u093E\u092C\u0902\u0926\u0940"}),h(d({},o.content.a[1]),{name:"\u092E\u091B\u0932\u0940 \u092A\u094D\u0930\u0938\u0902\u0938\u094D\u0915\u0930\u0923"}),h(d({},o.content.a[2]),{name:"\u0938\u092C\u094D\u091C\u0940 \u092A\u0948\u0915\u093F\u0902\u0917 \u0938\u0902\u092F\u0902\u0924\u094D\u0930"}),h(d({},o.content.a[3]),{name:"\u092B\u0932 \u092A\u094D\u0930\u0938\u0902\u0938\u094D\u0915\u0930\u0923"}),h(d({},o.content.a[4]),{name:"\u0905\u0928\u093E\u091C \u092A\u094D\u0930\u0938\u0902\u0938\u094D\u0915\u0930\u0923"}),h(d({},o.content.a[5]),{name:"\u0914\u0926\u094D\u092F\u094B\u0917\u093F\u0915 \u092A\u094D\u0930\u0924\u093F\u092A\u093E\u0926\u0928"}),h(d({},o.content.a[6]),{name:"\u091A\u0941\u0915\u0902\u0926\u0930 \u091A\u0940\u0928\u0940 \u092A\u094D\u0930\u0938\u0902\u0938\u094D\u0915\u0930\u0923"}),h(d({},o.content.a[7]),{name:"\u0915\u0938\u093E\u0908\u0916\u093E\u0928\u093E"}),h(d({},o.content.a[8]),{name:"\u092E\u093E\u0902\u0938 \u092A\u0948\u0915\u093F\u0902\u0917 \u0938\u0902\u092F\u0902\u0924\u094D\u0930"}),h(d({},o.content.a[9]),{name:"\u092E\u0938\u093E\u0932\u093E \u092A\u094D\u0930\u0938\u0902\u0938\u094D\u0915\u0930\u0923"})]},o.keywords=["\u090F\u0906\u0908\u090F\u092B\u092A\u0940\u090F\u0928 \u092A\u0930 \u0917\u0924\u093F\u0935\u093F\u0927\u093F\u092F\u093E\u0902","\u090F\u0906\u0908\u090F\u092B\u092A\u0940\u090F\u0928 \u0915\u094D\u092F\u093E \u0915\u0930\u0924\u093E \u0939\u0948","\u0905\u0916\u093F\u0932 \u092D\u093E\u0930\u0924\u0940\u092F \u0916\u093E\u0926\u094D\u092F \u092A\u094D\u0930\u0938\u0902\u0938\u094D\u0915\u0930\u0923 \u0928\u093F\u0917\u092E \u0915\u093E \u0915\u093E\u0930\u094D\u092F \u0915\u094D\u092F\u093E \u0939\u0948"]}return o});R(n,r,l=>a(0,s=l));const c={url:`/${m.params.locale}/activities`,title:s.title,keywords:s.keywords};return[s,r,c]}class be extends se{constructor(t){super();ie(this,t,_e,ge,le,{})}}export{be as default};
