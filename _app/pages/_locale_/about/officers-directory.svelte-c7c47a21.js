import{S as me,i as _e,s as he,e as u,t as N,k as S,c as v,a as b,h as E,m as M,d as c,b as A,g as D,H as i,j as B,l as Y,a6 as W,a8 as X,w as ue,x as ve,y as be,q as ke,o as Ae,B as Ne,L as Z,a2 as Ee,O as U}from"../../../chunks/vendor-9b5b5743.js";import{p as x}from"../../../chunks/stores-2de44e8e.js";import{M as ge}from"../../../chunks/Meta-e5282240.js";import"../../../chunks/config-9b6411d1.js";function ee(r,e,l){const a=r.slice();return a[4]=e[l],a[6]=l,a}function te(r,e,l){const a=r.slice();return a[7]=e[l],a[6]=l,a}function ae(r,e,l){const a=r.slice();return a[9]=e[l],a}function ne(r,e){let l,a=e[9]+"",t,n;return{key:r,first:null,c(){l=u("th"),t=N(a),n=S(),this.h()},l(s){l=v(s,"TH",{class:!0});var o=b(l);t=E(o,a),n=M(o),o.forEach(c),this.h()},h(){A(l,"class","p-4"),this.first=l},m(s,o){D(s,l,o),i(l,t),i(l,n)},p(s,o){e=s,o&1&&a!==(a=e[9]+"")&&B(t,a)},d(s){s&&c(l)}}}function ye(r){let e,l;return{c(){e=u("td"),l=N("N/A"),this.h()},l(a){e=v(a,"TD",{class:!0});var t=b(e);l=E(t,"N/A"),t.forEach(c),this.h()},h(){A(e,"class","p-4 text-center")},m(a,t){D(a,e,t),i(e,l)},p:U,d(a){a&&c(e)}}}function De(r){let e,l=r[4].persons[0].state+"",a;return{c(){e=u("td"),a=N(l),this.h()},l(t){e=v(t,"TD",{class:!0});var n=b(e);a=E(n,l),n.forEach(c),this.h()},h(){A(e,"class","p-4 text-center")},m(t,n){D(t,e,n),i(e,a)},p(t,n){n&1&&l!==(l=t[4].persons[0].state+"")&&B(a,l)},d(t){t&&c(e)}}}function Te(r){let e,l;return{c(){e=u("td"),l=N("N/A"),this.h()},l(a){e=v(a,"TD",{class:!0});var t=b(e);l=E(t,"N/A"),t.forEach(c),this.h()},h(){A(e,"class","p-4 text-center")},m(a,t){D(a,e,t),i(e,l)},p:U,d(a){a&&c(e)}}}function we(r){let e,l,a,t=r[4].persons[0].contact.address&&le(r),n=r[4].persons[0].contact.email&&se(r),s=r[4].persons[0].contact.phone&&re(r);return{c(){e=u("td"),t&&t.c(),l=S(),n&&n.c(),a=S(),s&&s.c(),this.h()},l(o){e=v(o,"TD",{class:!0});var d=b(e);t&&t.l(d),l=M(d),n&&n.l(d),a=M(d),s&&s.l(d),d.forEach(c),this.h()},h(){A(e,"class","p-4 flex-cij")},m(o,d){D(o,e,d),t&&t.m(e,null),i(e,l),n&&n.m(e,null),i(e,a),s&&s.m(e,null)},p(o,d){o[4].persons[0].contact.address?t?t.p(o,d):(t=le(o),t.c(),t.m(e,l)):t&&(t.d(1),t=null),o[4].persons[0].contact.email?n?n.p(o,d):(n=se(o),n.c(),n.m(e,a)):n&&(n.d(1),n=null),o[4].persons[0].contact.phone?s?s.p(o,d):(s=re(o),s.c(),s.m(e,null)):s&&(s.d(1),s=null)},d(o){o&&c(e),t&&t.d(),n&&n.d(),s&&s.d()}}}function le(r){let e,l,a=r[4].persons[0].contact.address+"",t;return{c(){e=u("span"),l=N("Address: "),t=N(a)},l(n){e=v(n,"SPAN",{});var s=b(e);l=E(s,"Address: "),t=E(s,a),s.forEach(c)},m(n,s){D(n,e,s),i(e,l),i(e,t)},p(n,s){s&1&&a!==(a=n[4].persons[0].contact.address+"")&&B(t,a)},d(n){n&&c(e)}}}function se(r){let e,l,a=r[4].persons[0].contact.email+"",t;return{c(){e=u("span"),l=N("E-Mail: "),t=N(a)},l(n){e=v(n,"SPAN",{});var s=b(e);l=E(s,"E-Mail: "),t=E(s,a),s.forEach(c)},m(n,s){D(n,e,s),i(e,l),i(e,t)},p(n,s){s&1&&a!==(a=n[4].persons[0].contact.email+"")&&B(t,a)},d(n){n&&c(e)}}}function re(r){let e,l,a=r[4].persons[0].contact.phone+"",t;return{c(){e=u("span"),l=N("Phone: "),t=N(a)},l(n){e=v(n,"SPAN",{});var s=b(e);l=E(s,"Phone: "),t=E(s,a),s.forEach(c)},m(n,s){D(n,e,s),i(e,l),i(e,t)},p(n,s){s&1&&a!==(a=n[4].persons[0].contact.phone+"")&&B(t,a)},d(n){n&&c(e)}}}function oe(r){let e,l,a=r[7].department+"",t,n,s,o=r[7].name+"",d,F,$,w;function C(f,y){return f[7].state?Se:Pe}let P=C(r),k=P(r);function R(f,y){return f[7].contact?Fe:Me}let G=R(r),g=G(r);return{c(){e=u("tr"),l=u("td"),t=N(a),n=S(),s=u("td"),d=N(o),F=S(),k.c(),$=S(),g.c(),w=S(),this.h()},l(f){e=v(f,"TR",{});var y=b(e);l=v(y,"TD",{class:!0});var O=b(l);t=E(O,a),O.forEach(c),n=M(y),s=v(y,"TD",{class:!0});var L=b(s);d=E(L,o),L.forEach(c),F=M(y),k.l(y),$=M(y),g.l(y),w=M(y),y.forEach(c),this.h()},h(){A(l,"class","p-4 text-center"),A(s,"class","p-4 text-center")},m(f,y){D(f,e,y),i(e,l),i(l,t),i(e,n),i(e,s),i(s,d),i(e,F),k.m(e,null),i(e,$),g.m(e,null),i(e,w)},p(f,y){y&1&&a!==(a=f[7].department+"")&&B(t,a),y&1&&o!==(o=f[7].name+"")&&B(d,o),P===(P=C(f))&&k?k.p(f,y):(k.d(1),k=P(f),k&&(k.c(),k.m(e,$))),G===(G=R(f))&&g?g.p(f,y):(g.d(1),g=G(f),g&&(g.c(),g.m(e,w)))},d(f){f&&c(e),k.d(),g.d()}}}function Pe(r){let e,l;return{c(){e=u("td"),l=N("N/A"),this.h()},l(a){e=v(a,"TD",{class:!0});var t=b(e);l=E(t,"N/A"),t.forEach(c),this.h()},h(){A(e,"class","p-4 text-center")},m(a,t){D(a,e,t),i(e,l)},p:U,d(a){a&&c(e)}}}function Se(r){let e,l=r[7].state+"",a;return{c(){e=u("td"),a=N(l),this.h()},l(t){e=v(t,"TD",{class:!0});var n=b(e);a=E(n,l),n.forEach(c),this.h()},h(){A(e,"class","p-4 text-center")},m(t,n){D(t,e,n),i(e,a)},p(t,n){n&1&&l!==(l=t[7].state+"")&&B(a,l)},d(t){t&&c(e)}}}function Me(r){let e,l;return{c(){e=u("td"),l=N("N/A"),this.h()},l(a){e=v(a,"TD",{class:!0});var t=b(e);l=E(t,"N/A"),t.forEach(c),this.h()},h(){A(e,"class","p-4 text-center")},m(a,t){D(a,e,t),i(e,l)},p:U,d(a){a&&c(e)}}}function Fe(r){let e,l,a,t=r[7].contact.address&&ce(r),n=r[7].contact.email&&ie(r),s=r[7].contact.phone&&pe(r);return{c(){e=u("td"),t&&t.c(),l=S(),n&&n.c(),a=S(),s&&s.c(),this.h()},l(o){e=v(o,"TD",{class:!0});var d=b(e);t&&t.l(d),l=M(d),n&&n.l(d),a=M(d),s&&s.l(d),d.forEach(c),this.h()},h(){A(e,"class","p-4 flex-cij")},m(o,d){D(o,e,d),t&&t.m(e,null),i(e,l),n&&n.m(e,null),i(e,a),s&&s.m(e,null)},p(o,d){o[7].contact.address?t?t.p(o,d):(t=ce(o),t.c(),t.m(e,l)):t&&(t.d(1),t=null),o[7].contact.email?n?n.p(o,d):(n=ie(o),n.c(),n.m(e,a)):n&&(n.d(1),n=null),o[7].contact.phone?s?s.p(o,d):(s=pe(o),s.c(),s.m(e,null)):s&&(s.d(1),s=null)},d(o){o&&c(e),t&&t.d(),n&&n.d(),s&&s.d()}}}function ce(r){let e,l,a=r[7].contact.address+"",t;return{c(){e=u("span"),l=N("Address: "),t=N(a)},l(n){e=v(n,"SPAN",{});var s=b(e);l=E(s,"Address: "),t=E(s,a),s.forEach(c)},m(n,s){D(n,e,s),i(e,l),i(e,t)},p(n,s){s&1&&a!==(a=n[7].contact.address+"")&&B(t,a)},d(n){n&&c(e)}}}function ie(r){let e,l,a=r[7].contact.email+"",t;return{c(){e=u("span"),l=N("E-Mail: "),t=N(a)},l(n){e=v(n,"SPAN",{});var s=b(e);l=E(s,"E-Mail: "),t=E(s,a),s.forEach(c)},m(n,s){D(n,e,s),i(e,l),i(e,t)},p(n,s){s&1&&a!==(a=n[7].contact.email+"")&&B(t,a)},d(n){n&&c(e)}}}function pe(r){let e,l,a=r[7].contact.phone+"",t;return{c(){e=u("span"),l=N("Phone: "),t=N(a)},l(n){e=v(n,"SPAN",{});var s=b(e);l=E(s,"Phone: "),t=E(s,a),s.forEach(c)},m(n,s){D(n,e,s),i(e,l),i(e,t)},p(n,s){s&1&&a!==(a=n[7].contact.phone+"")&&B(t,a)},d(n){n&&c(e)}}}function de(r,e){let l,a,t=e[6]!==0&&oe(e);return{key:r,first:null,c(){l=Y(),t&&t.c(),a=Y(),this.h()},l(n){l=Y(),t&&t.l(n),a=Y(),this.h()},h(){this.first=l},m(n,s){D(n,l,s),t&&t.m(n,s),D(n,a,s)},p(n,s){e=n,e[6]!==0?t?t.p(e,s):(t=oe(e),t.c(),t.m(a.parentNode,a)):t&&(t.d(1),t=null)},d(n){n&&c(l),t&&t.d(n),n&&c(a)}}}function fe(r,e){let l,a,t=e[4].post+"",n,s,o,d,F=e[4].persons[0].department+"",$,w,C,P=e[4].persons[0].name+"",k,R,G,g,f=[],y=new Map,O;function L(h,_){return h[4].persons[0].state?De:ye}let V=L(e),I=V(e);function z(h,_){return h[4].persons[0].contact?we:Te}let p=z(e),m=p(e),T=e[4].persons;const J=h=>h[6];for(let h=0;h<T.length;h+=1){let _=te(e,T,h),H=J(_);y.set(H,f[h]=de(H,_))}return{key:r,first:null,c(){l=u("tr"),a=u("td"),n=N(t),o=S(),d=u("td"),$=N(F),w=S(),C=u("td"),k=N(P),R=S(),I.c(),G=S(),m.c(),g=S();for(let h=0;h<f.length;h+=1)f[h].c();O=Y(),this.h()},l(h){l=v(h,"TR",{});var _=b(l);a=v(_,"TD",{rowspan:!0,class:!0});var H=b(a);n=E(H,t),H.forEach(c),o=M(_),d=v(_,"TD",{class:!0});var K=b(d);$=E(K,F),K.forEach(c),w=M(_),C=v(_,"TD",{class:!0});var Q=b(C);k=E(Q,P),Q.forEach(c),R=M(_),I.l(_),G=M(_),m.l(_),_.forEach(c),g=M(h);for(let q=0;q<f.length;q+=1)f[q].l(h);O=Y(),this.h()},h(){A(a,"rowspan",s=e[4].persons.length),A(a,"class","p-4 text-center"),A(d,"class","p-4 text-center"),A(C,"class","p-4 text-center"),this.first=l},m(h,_){D(h,l,_),i(l,a),i(a,n),i(l,o),i(l,d),i(d,$),i(l,w),i(l,C),i(C,k),i(l,R),I.m(l,null),i(l,G),m.m(l,null),D(h,g,_);for(let H=0;H<f.length;H+=1)f[H].m(h,_);D(h,O,_)},p(h,_){e=h,_&1&&t!==(t=e[4].post+"")&&B(n,t),_&1&&s!==(s=e[4].persons.length)&&A(a,"rowspan",s),_&1&&F!==(F=e[4].persons[0].department+"")&&B($,F),_&1&&P!==(P=e[4].persons[0].name+"")&&B(k,P),V===(V=L(e))&&I?I.p(e,_):(I.d(1),I=V(e),I&&(I.c(),I.m(l,G))),p===(p=z(e))&&m?m.p(e,_):(m.d(1),m=p(e),m&&(m.c(),m.m(l,null))),_&1&&(T=e[4].persons,f=W(f,_,J,1,e,T,y,O.parentNode,X,de,O,te))},d(h){h&&c(l),I.d(),m.d(),h&&c(g);for(let _=0;_<f.length;_+=1)f[_].d(h);h&&c(O)}}}function $e(r){let e,l,a,t,n,s=r[0].title+"",o,d,F,$,w,C,P,k=[],R=new Map,G,g,f=[],y=new Map,O;e=new ge({props:{metaData:r[2]}});let L=r[0].cols;const V=p=>p[9];for(let p=0;p<L.length;p+=1){let m=ae(r,L,p),T=V(m);R.set(T,k[p]=ne(T,m))}let I=r[0].content;const z=p=>p[6];for(let p=0;p<I.length;p+=1){let m=ee(r,I,p),T=z(m);y.set(T,f[p]=fe(T,m))}return{c(){ue(e.$$.fragment),l=S(),a=u("div"),t=u("header"),n=u("h2"),o=N(s),d=S(),F=u("div"),$=u("div"),w=u("table"),C=u("thead"),P=u("tr");for(let p=0;p<k.length;p+=1)k[p].c();G=S(),g=u("tbody");for(let p=0;p<f.length;p+=1)f[p].c();this.h()},l(p){ve(e.$$.fragment,p),l=M(p),a=v(p,"DIV",{name:!0,class:!0});var m=b(a);t=v(m,"HEADER",{class:!0});var T=b(t);n=v(T,"H2",{class:!0});var J=b(n);o=E(J,s),J.forEach(c),T.forEach(c),d=M(m),F=v(m,"DIV",{class:!0});var h=b(F);$=v(h,"DIV",{class:!0});var _=b($);w=v(_,"TABLE",{class:!0});var H=b(w);C=v(H,"THEAD",{class:!0});var K=b(C);P=v(K,"TR",{});var Q=b(P);for(let j=0;j<k.length;j+=1)k[j].l(Q);Q.forEach(c),K.forEach(c),G=M(H),g=v(H,"TBODY",{class:!0});var q=b(g);for(let j=0;j<f.length;j+=1)f[j].l(q);q.forEach(c),H.forEach(c),_.forEach(c),h.forEach(c),m.forEach(c),this.h()},h(){A(n,"class","text-2xl font-bold text-gray-800"),A(t,"class","px-5 py-4 border-b border-gray-100"),A(C,"class","text-sm font-semibold uppercase text-gray-500 bg-slate-200"),A(g,"class","text-sm divide-y divide-gray-200"),A(w,"class","table-auto w-full"),A($,"class","overflow-x-auto"),A(F,"class","p-3"),A(a,"name","officers-directory"),A(a,"class","w-full max-w-4xl mx-auto my-4 bg-white shadow-xl rounded-xl border border-gray-200")},m(p,m){be(e,p,m),D(p,l,m),D(p,a,m),i(a,t),i(t,n),i(n,o),i(a,d),i(a,F),i(F,$),i($,w),i(w,C),i(C,P);for(let T=0;T<k.length;T+=1)k[T].m(P,null);i(w,G),i(w,g);for(let T=0;T<f.length;T+=1)f[T].m(g,null);O=!0},p(p,[m]){(!O||m&1)&&s!==(s=p[0].title+"")&&B(o,s),m&1&&(L=p[0].cols,k=W(k,m,V,1,p,L,R,P,X,ne,null,ae)),m&1&&(I=p[0].content,f=W(f,m,z,1,p,I,y,g,X,fe,null,ee))},i(p){O||(ke(e.$$.fragment,p),O=!0)},o(p){Ae(e.$$.fragment,p),O=!1},d(p){Ne(e,p),p&&c(l),p&&c(a);for(let m=0;m<k.length;m+=1)k[m].d();for(let m=0;m<f.length;m+=1)f[m].d()}}}function Ce(r,e,l){let a,t;Z(r,x,o=>l(3,t=o));const n=Ee(x,o=>{let d={title:"Directory of Officers",cols:["Post","Department","Name","Posting State","Contact Details"],content:[{post:"Chairman",persons:[{name:"N/A",department:""}]},{post:"Chief Executive Officer",persons:[{name:"Mr. Surendra Pal",department:"",state:"All",contact:{phone:"+91 9415934691"}}]},{post:"Chief Financial Officer",persons:[{name:"N/A",department:""}]},{post:"Chief Vigilance Officer",persons:[{name:"N/A",department:""}]},{post:"Executive Director",persons:[{name:"N/A",department:"IT"},{name:"N/A",department:"Sales"},{name:"N/A",department:"Finance"},{name:"N/A",department:"Purchase"}]},{post:"Chief General Manager",persons:[{name:"N/A",department:"Sales"},{name:"N/A",department:"Finance"},{name:"N/A",department:"Purchase"}]},{post:"General Manager",persons:[{name:"N/A",department:"IT"},{name:"N/A",department:"Funds"},{name:"N/A",department:"Legal"},{name:"N/A",department:"Sales"},{name:"N/A",department:"Finance/Bills"},{name:"N/A",department:"Purchase"}]},{post:"Deputy General Manager",persons:[{name:"N/A",department:"IT"},{name:"N/A",department:"Funds"},{name:"N/A",department:"Legal"},{name:"N/A",department:"Sales"},{name:"N/A",department:"Accounts"},{name:"N/A",department:"Finance/Bills"},{name:"N/A",department:"Purchase"}]},{post:"Assistant General Manager",persons:[{name:"N/A",department:"IT"},{name:"N/A",department:"Funds"},{name:"N/A",department:"Legal"},{name:"N/A",department:"Sales"},{name:"N/A",department:"Finance"},{name:"N/A",department:"Bills"},{name:"N/A",department:"Purchase"},{name:"N/A",department:"General"},{name:"N/A",department:"Hindi"},{name:"N/A",department:"Civil"}]}],keywords:["about aifpn","directory of officers in aifpn","directory of officers in all india food processing nigam"]};switch(o.params.locale){case"hi":d.title="\u0905\u0927\u093F\u0915\u093E\u0930\u093F\u092F\u094B\u0902 \u0915\u0940 \u0928\u093F\u0930\u094D\u0926\u0947\u0936\u093F\u0915\u093E",d.cols=["\u092A\u094B\u0938\u094D\u091F","\u0935\u093F\u092D\u093E\u0917","\u0928\u093E\u092E","\u092A\u094B\u0938\u094D\u091F\u093F\u0902\u0917 \u0938\u094D\u091F\u0947\u091F","\u0938\u0902\u092A\u0930\u094D\u0915 \u0935\u093F\u0935\u0930\u0923"],d.content=[{post:"\u0905\u0927\u094D\u092F\u0915\u094D\u0937",persons:[{name:"\u0909\u092A\u0932\u092C\u094D\u0927 \u0928\u0939\u0940\u0902 \u0939\u0948",department:""}]},{post:"\u092E\u0941\u0916\u094D\u092F \u0915\u093E\u0930\u094D\u092F\u0915\u093E\u0930\u0940 \u0905\u0927\u093F\u0915\u093E\u0930\u0940",persons:[{name:"\u0936\u094D\u0930\u0940 \u0938\u0941\u0930\u0947\u0902\u0926\u094D\u0930 \u092A\u093E\u0932",department:"",state:"\u0938\u092D\u0940",contact:{phone:"+91 9415934691"}}]},{post:"\u092E\u0941\u0916\u094D\u092F \u0935\u093F\u0924\u094D\u0924\u0940\u092F \u0905\u0927\u093F\u0915\u093E\u0930\u0940",persons:[{name:"\u0909\u092A\u0932\u092C\u094D\u0927 \u0928\u0939\u0940\u0902 \u0939\u0948",department:""}]},{post:"\u092E\u0941\u0916\u094D\u092F \u0938\u0924\u0930\u094D\u0915\u0924\u093E \u0905\u0927\u093F\u0915\u093E\u0930\u0940",persons:[{name:"\u0909\u092A\u0932\u092C\u094D\u0927 \u0928\u0939\u0940\u0902 \u0939\u0948",department:""}]},{post:"\u0915\u093E\u0930\u094D\u092F\u0915\u093E\u0930\u0940 \u0928\u093F\u0926\u0947\u0936\u0915",persons:[{name:"\u0909\u092A\u0932\u092C\u094D\u0927 \u0928\u0939\u0940\u0902 \u0939\u0948",department:"\u0906\u0908\u091F\u0940"},{name:"\u0909\u092A\u0932\u092C\u094D\u0927 \u0928\u0939\u0940\u0902 \u0939\u0948",department:"\u092C\u093F\u0915\u094D\u0930\u0940"},{name:"\u0909\u092A\u0932\u092C\u094D\u0927 \u0928\u0939\u0940\u0902 \u0939\u0948",department:"\u0935\u093F\u0924\u094D\u0924"},{name:"\u0909\u092A\u0932\u092C\u094D\u0927 \u0928\u0939\u0940\u0902 \u0939\u0948",department:"\u0916\u0930\u0940\u0926"}]},{post:"\u092E\u0941\u0916\u094D\u092F \u092E\u0939\u093E\u092A\u094D\u0930\u092C\u0902\u0927\u0915",persons:[{name:"\u0909\u092A\u0932\u092C\u094D\u0927 \u0928\u0939\u0940\u0902 \u0939\u0948",department:"\u092C\u093F\u0915\u094D\u0930\u0940"},{name:"\u0909\u092A\u0932\u092C\u094D\u0927 \u0928\u0939\u0940\u0902 \u0939\u0948",department:"\u0935\u093F\u0924\u094D\u0924"},{name:"\u0909\u092A\u0932\u092C\u094D\u0927 \u0928\u0939\u0940\u0902 \u0939\u0948",department:"\u0916\u0930\u0940\u0926"}]},{post:"\u092E\u0939\u093E\u092A\u094D\u0930\u092C\u0902\u0927\u0915",persons:[{name:"\u0909\u092A\u0932\u092C\u094D\u0927 \u0928\u0939\u0940\u0902 \u0939\u0948",department:"\u0906\u0908\u091F\u0940"},{name:"\u0909\u092A\u0932\u092C\u094D\u0927 \u0928\u0939\u0940\u0902 \u0939\u0948",department:"\u0928\u093F\u0927\u093F"},{name:"\u0909\u092A\u0932\u092C\u094D\u0927 \u0928\u0939\u0940\u0902 \u0939\u0948",department:"\u0915\u093E\u0928\u0942\u0928\u0940"},{name:"\u0909\u092A\u0932\u092C\u094D\u0927 \u0928\u0939\u0940\u0902 \u0939\u0948",department:"\u092C\u093F\u0915\u094D\u0930\u0940"},{name:"\u0909\u092A\u0932\u092C\u094D\u0927 \u0928\u0939\u0940\u0902 \u0939\u0948",department:"\u0935\u093F\u0924\u094D\u0924/\u092C\u093F\u0932"},{name:"\u0909\u092A\u0932\u092C\u094D\u0927 \u0928\u0939\u0940\u0902 \u0939\u0948",department:"\u0916\u0930\u0940\u0926"}]},{post:"\u0909\u092A \u092E\u0939\u093E\u092A\u094D\u0930\u092C\u0902\u0927\u0915",persons:[{name:"\u0909\u092A\u0932\u092C\u094D\u0927 \u0928\u0939\u0940\u0902 \u0939\u0948",department:"\u0906\u0908\u091F\u0940"},{name:"\u0909\u092A\u0932\u092C\u094D\u0927 \u0928\u0939\u0940\u0902 \u0939\u0948",department:"\u0928\u093F\u0927\u093F"},{name:"\u0909\u092A\u0932\u092C\u094D\u0927 \u0928\u0939\u0940\u0902 \u0939\u0948",department:"\u0915\u093E\u0928\u0942\u0928\u0940"},{name:"\u0909\u092A\u0932\u092C\u094D\u0927 \u0928\u0939\u0940\u0902 \u0939\u0948",department:"\u092C\u093F\u0915\u094D\u0930\u0940"},{name:"\u0909\u092A\u0932\u092C\u094D\u0927 \u0928\u0939\u0940\u0902 \u0939\u0948",department:"\u0916\u093E\u0924\u093E"},{name:"\u0909\u092A\u0932\u092C\u094D\u0927 \u0928\u0939\u0940\u0902 \u0939\u0948",department:"\u0935\u093F\u0924\u094D\u0924/\u092C\u093F\u0932"},{name:"\u0909\u092A\u0932\u092C\u094D\u0927 \u0928\u0939\u0940\u0902 \u0939\u0948",department:"\u0916\u0930\u0940\u0926"}]},{post:"\u0938\u0939\u093E\u092F\u0915 \u092E\u0939\u093E\u092A\u094D\u0930\u092C\u0902\u0927\u0915",persons:[{name:"\u0909\u092A\u0932\u092C\u094D\u0927 \u0928\u0939\u0940\u0902 \u0939\u0948",department:"\u0906\u0908\u091F\u0940"},{name:"\u0909\u092A\u0932\u092C\u094D\u0927 \u0928\u0939\u0940\u0902 \u0939\u0948",department:"\u0928\u093F\u0927\u093F"},{name:"\u0909\u092A\u0932\u092C\u094D\u0927 \u0928\u0939\u0940\u0902 \u0939\u0948",department:"\u0915\u093E\u0928\u0942\u0928\u0940"},{name:"\u0909\u092A\u0932\u092C\u094D\u0927 \u0928\u0939\u0940\u0902 \u0939\u0948",department:"\u092C\u093F\u0915\u094D\u0930\u0940"},{name:"\u0909\u092A\u0932\u092C\u094D\u0927 \u0928\u0939\u0940\u0902 \u0939\u0948",department:"\u0935\u093F\u0924\u094D\u0924"},{name:"\u0909\u092A\u0932\u092C\u094D\u0927 \u0928\u0939\u0940\u0902 \u0939\u0948",department:"\u092C\u093F\u0932"},{name:"\u0909\u092A\u0932\u092C\u094D\u0927 \u0928\u0939\u0940\u0902 \u0939\u0948",department:"\u0916\u0930\u0940\u0926"},{name:"\u0909\u092A\u0932\u092C\u094D\u0927 \u0928\u0939\u0940\u0902 \u0939\u0948",department:"\u0938\u093E\u092E\u093E\u0928\u094D\u092F"},{name:"\u0909\u092A\u0932\u092C\u094D\u0927 \u0928\u0939\u0940\u0902 \u0939\u0948",department:"\u0939\u093F\u0902\u0926\u0940"},{name:"\u0909\u092A\u0932\u092C\u094D\u0927 \u0928\u0939\u0940\u0902 \u0939\u0948",department:"\u0938\u093F\u0935\u093F\u0932"}]}],d.keywords=["\u090F\u0906\u0908\u090F\u092B\u092A\u0940\u090F\u0928 \u0915\u0947 \u092C\u093E\u0930\u0947 \u092E\u0947\u0902","\u090F\u0906\u0908\u090F\u092B\u092A\u0940\u090F\u0928 \u092E\u0947\u0902 \u0905\u0927\u093F\u0915\u093E\u0930\u093F\u092F\u094B\u0902 \u0915\u0940 \u0928\u093F\u0930\u094D\u0926\u0947\u0936\u093F\u0915\u093E","\u0905\u0916\u093F\u0932 \u092D\u093E\u0930\u0924\u0940\u092F \u0916\u093E\u0926\u094D\u092F \u092A\u094D\u0930\u0938\u0902\u0938\u094D\u0915\u0930\u0923 \u0928\u093F\u0917\u092E \u092E\u0947\u0902 \u0905\u0927\u093F\u0915\u093E\u0930\u093F\u092F\u094B\u0902 \u0915\u0940 \u0928\u093F\u0930\u094D\u0926\u0947\u0936\u093F\u0915\u093E"]}return d});Z(r,n,o=>l(0,a=o));const s={url:`${t.params.locale}/about/officers-directory`,title:a.title,keywords:a.keywords};return[a,n,s]}class Ge extends me{constructor(e){super();_e(this,e,Ce,$e,he,{})}}export{Ge as default};
