import{S as V,i as X,s as J,e as B,t as M,k as C,l as j,c as I,a as S,h as T,d,m as H,b as P,g as y,H as w,j as z,a6 as K,a3 as Q,O as Y,w as Z,x as ee,y as te,q as ae,o as se,B as ie,X as D,L as N,a2 as ne,a7 as oe}from"../../../chunks/vendor-08efcc10.js";import{p as W}from"../../../chunks/stores-d101fe06.js";import{c as re}from"../../../chunks/config-9b6411d1.js";import{M as le}from"../../../chunks/Meta-1fb2756b.js";function F(u,t,a){const s=u.slice();return s[5]=t[a],s}function L(u,t,a){const s=u.slice();return s[8]=t[a],s}function x(u,t,a){const s=u.slice();return s[11]=t[a],s[13]=a,s}function O(u){let t,a=[],s=new Map,h=u[8].l;const f=n=>n[13];for(let n=0;n<h.length;n+=1){let c=x(u,h,n),r=f(c);s.set(r,a[n]=G(r,c))}return{c(){t=B("ol");for(let n=0;n<a.length;n+=1)a[n].c()},l(n){t=I(n,"OL",{});var c=S(t);for(let r=0;r<a.length;r+=1)a[r].l(c);c.forEach(d)},m(n,c){y(n,t,c);for(let r=0;r<a.length;r+=1)a[r].m(t,null)},p(n,c){c&1&&(h=n[8].l,a=K(a,c,f,1,n,h,s,t,oe,G,null,x))},d(n){n&&d(t);for(let c=0;c<a.length;c+=1)a[c].d()}}}function G(u,t){let a,s,h=t[13]+1+"",f,n,c=t[11].k+"",r,p,_=t[11].v+"",m;return{key:u,first:null,c(){a=B("li"),s=B("span"),f=M(h),n=M(". "),r=M(c),p=M(": "),m=M(_),this.h()},l(i){a=I(i,"LI",{});var l=S(a);s=I(l,"SPAN",{class:!0});var k=S(s);f=T(k,h),n=T(k,". "),r=T(k,c),p=T(k,": "),k.forEach(d),m=T(l,_),l.forEach(d),this.h()},h(){P(s,"class","font-bold text-gray-600"),this.first=a},m(i,l){y(i,a,l),w(a,s),w(s,f),w(s,n),w(s,r),w(s,p),w(a,m)},p(i,l){t=i,l&1&&h!==(h=t[13]+1+"")&&z(f,h),l&1&&c!==(c=t[11].k+"")&&z(r,c),l&1&&_!==(_=t[11].v+"")&&z(m,_)},d(i){i&&d(a)}}}function R(u){let t,a=u[8].t+"",s,h,f,n,c=u[8].d+"",r,p,_,m=u[8].l&&O(u);return{c(){t=B("span"),s=M(a),h=M(":"),f=C(),n=B("p"),r=M(c),p=C(),m&&m.c(),_=j(),this.h()},l(i){t=I(i,"SPAN",{class:!0});var l=S(t);s=T(l,a),h=T(l,":"),l.forEach(d),f=H(i),n=I(i,"P",{class:!0});var k=S(n);r=T(k,c),k.forEach(d),p=H(i),m&&m.l(i),_=j(),this.h()},h(){P(t,"class","my-2 text-xl font-bold text-gray-600"),P(n,"class","my-2")},m(i,l){y(i,t,l),w(t,s),w(t,h),y(i,f,l),y(i,n,l),w(n,r),y(i,p,l),m&&m.m(i,l),y(i,_,l)},p(i,l){l&1&&a!==(a=i[8].t+"")&&z(s,a),l&1&&c!==(c=i[8].d+"")&&z(r,c),i[8].l?m?m.p(i,l):(m=O(i),m.c(),m.m(_.parentNode,_)):m&&(m.d(1),m=null)},d(i){i&&d(t),i&&d(f),i&&d(n),i&&d(p),m&&m.d(i),i&&d(_)}}}function U(u){let t,a,s;return{c(){t=B("img"),this.h()},l(h){t=I(h,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){P(t,"class","w-full h-60 rounded-xl"),Q(t.src,a=`${re.base_url}/images/img-${u[5]}.jpeg`)||P(t,"src",a),P(t,"alt",s=`img-${u[5]}`)},m(h,f){y(h,t,f)},p:Y,d(h){h&&d(t)}}}function ce(u){let t,a,s,h=u[0].title+"",f,n,c,r,p=u[0].desc+"",_,m,i,l,k;t=new le({props:{metaData:u[2]}});let A=u[0].content,v=[];for(let e=0;e<A.length;e+=1)v[e]=R(L(u,A,e));let E=u[3],b=[];for(let e=0;e<E.length;e+=1)b[e]=U(F(u,E,e));return{c(){Z(t.$$.fragment),a=C(),s=B("span"),f=M(h),n=M(":"),c=C(),r=B("p"),_=M(p),m=C();for(let e=0;e<v.length;e+=1)v[e].c();i=C(),l=B("div");for(let e=0;e<b.length;e+=1)b[e].c();this.h()},l(e){ee(t.$$.fragment,e),a=H(e),s=I(e,"SPAN",{class:!0});var g=S(s);f=T(g,h),n=T(g,":"),g.forEach(d),c=H(e),r=I(e,"P",{class:!0});var o=S(r);_=T(o,p),o.forEach(d),m=H(e);for(let q=0;q<v.length;q+=1)v[q].l(e);i=H(e),l=I(e,"DIV",{class:!0});var $=S(l);for(let q=0;q<b.length;q+=1)b[q].l($);$.forEach(d),this.h()},h(){P(s,"class","my-2 text-2xl font-bold text-gray-600"),P(r,"class","my-2"),P(l,"class","my-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4")},m(e,g){te(t,e,g),y(e,a,g),y(e,s,g),w(s,f),w(s,n),y(e,c,g),y(e,r,g),w(r,_),y(e,m,g);for(let o=0;o<v.length;o+=1)v[o].m(e,g);y(e,i,g),y(e,l,g);for(let o=0;o<b.length;o+=1)b[o].m(l,null);k=!0},p(e,[g]){if((!k||g&1)&&h!==(h=e[0].title+"")&&z(f,h),(!k||g&1)&&p!==(p=e[0].desc+"")&&z(_,p),g&1){A=e[0].content;let o;for(o=0;o<A.length;o+=1){const $=L(e,A,o);v[o]?v[o].p($,g):(v[o]=R($),v[o].c(),v[o].m(i.parentNode,i))}for(;o<v.length;o+=1)v[o].d(1);v.length=A.length}if(g&8){E=e[3];let o;for(o=0;o<E.length;o+=1){const $=F(e,E,o);b[o]?b[o].p($,g):(b[o]=U($),b[o].c(),b[o].m(l,null))}for(;o<b.length;o+=1)b[o].d(1);b.length=E.length}},i(e){k||(ae(t.$$.fragment,e),k=!0)},o(e){se(t.$$.fragment,e),k=!1},d(e){ie(t,e),e&&d(a),e&&d(s),e&&d(c),e&&d(r),e&&d(m),D(v,e),e&&d(i),e&&d(l),D(b,e)}}}function ue(u,t,a){let s,h;N(u,W,r=>a(4,h=r));const f=ne(W,r=>{let p={title:"Meat Processing",desc:"The meat processing industry includes any business or individual entity. It involves the processing of meat, the distribution and sale of the final product, and even the advertising of those products. Slaughter of animals in the processing of meat. Cutting meat to ensure it is safe for consumption. Packaging it, processing it into other products such as sausage or lunch meat. Distribute it in stores and sell it to customers. Ranchers that raise animals can also be considered an integral part of meat processing. Because they supply raw materials to make other food products.",content:[{t:"Butcher Meat Processing",d:"Butchers are an important part of the meat processing industry. Because these people are responsible for cleaning and cutting meat from animal carcasses. Butchers often work in slaughterhouses. Places where cattle and other animals are killed. They are brightened. and is cleaned. So that the meat can be used for food. A butcher may also work in a grocery store or meat market. Can cut meat ordered from distributors. The meat processing industry is a separate entity from the meat packing industry. Processing involves taking meat in its raw form and turning it into another product that is marketable. is safe for consumption. and attractive to consumers. So the butcher also has a hand in this processing."},{t:"Packaging",d:"Packaging is often an important part of the meat processing industry. Because processed meats are often in this form. Which is not a natural shape. For example, sansage is sometimes sold in a tube-like package with a metal casing at the end. Hot dogs are sold in bunches of eight in many cases. And they are usually contained in a plastic bag. Lunch may be sold depending on the size and quantity of meats."},{t:"Meat Processing Machinery",d:"The following machinery is required for manufacturing various value added meat products like emulsion products, reconstituted meat products, cured smoked products etc.",l:[{k:"Slicer",v:"Meat and meat products are cut in the form of thin slices for different needs. This is done by a reciprocating blade. Which can be adjusted to obtain slices of different thickness. Meat slicers There is also a built-in blade sharpener already fitted for Slicers. A range of capacities and types of slicers are available for various products."},{k:"Mincer",v:"It is used to reduce the size of the meat into different particle sizes. With the help of grinder plates of different hole sizes (3, 5, 8 and 13 mm) the meat is cut into the required particles as per the requirement of the product. Can be reduced in size. Minced meat is used for preparing various value added meat products especially emulsion / reconstituted type products. Blades and knives are used to achieve better mincing and complete production. It is important to maintain a low temperature of the meat during proper fixing and mincing."},{k:"Bowl Chomper",v:"Bowl Chomper is used to make the meat emulsion. Which has many sharp multiple blades with rotating bowl. The minced is done during chopping. The meat turns into a fine paste. And all the ingredients ( The binder converts seasoning mixes (spices etc.) into meat emulsion batter, which is used to make gourmet burger nuggets and sausages. Most of these actions result in lipid oxidation, which affects the quality of the emulsion. Hence the vacuum bowl. It is advisable to use a chamfer, in which all operations will be carried out in vacuum."},{k:"Tumbler",v:"It helps in the fragmentation of the meat fibers due to the pressure caused by the repeated dropping of the meat pieces and through it the proteins from the meat pieces come out to the surface. It consists of a drum. Inside which the paddles When the cylinder rotates with the meat, the impact from the fall will help the mixture of curing ingredients penetrate the meat. The use of a vacuum tumbler will reduce lipid oxidation. The tumbler is a great tool for preparing reconstituted meat products. important requirement."},{k:"Mixer/Massager",v:"Used in the manufacture of ground meat products. Here the minced meat is mixed with all other non-meat ingredients and seasonings inside a steel drum with rotating paddles."},{k:"Sausage Filler",v:"It is used in the preparation of sausages to fill meat emulsions into natural or synthetic casings. Hydraulic operated and manual sausage fillers are both available. The unit consists of a cylinder filler tube (nozzle) with a lid. The upward/parallel movement of the piston helps to fill the emulsion into the casing."},{k:"Automatic Patty Forming & Meat Ball Forming Machine",v:"Definite mass/size meat emulsion can be molded into patties or meat balls under continuous operation."},{k:"Blade Tenderizer",v:"It is a physical method of softening tough meat. Here the pieces of steak are pressed between several sets of blades. This causes tissue disintegration."},{k:"Brine Injector",v:"Brine is a solution. In which penetration of various curing solutions like salt, phosphate, nitrate, ascorbate, sugar takes longer time. Therefore penetration can be accelerated by injecting brine into pieces. Cured like bacon and ham And it is necessary in the preparation of smoked meat products."}]}],keywords:["meat processing","butcher meat processing","what is meat processing","meat processing at aifpn"]};switch(r.params.locale){case"hi":p.title="\u092E\u093E\u0902\u0938 \u092A\u094D\u0930\u0938\u0902\u0938\u094D\u0915\u0930\u0923",p.desc="\u092E\u093E\u0902\u0938 \u092A\u094D\u0930\u0938\u0902\u0938\u094D\u0915\u0930\u0923 \u0909\u0926\u094D\u092F\u094B\u0917 \u092E\u0947\u0902 \u0915\u094B\u0908 \u092D\u0940 \u0935\u094D\u092F\u0935\u0938\u093E\u092F \u092F\u093E \u0935\u094D\u092F\u0915\u094D\u0924\u093F \u0938\u0902\u0938\u094D\u0925\u093E \u0936\u093E\u092E\u093F\u0932 \u0939\u0948\u0964 \u091C\u093F\u0938\u092E\u0947\u0902 \u092E\u093E\u0902\u0938 \u0915\u0947 \u092A\u094D\u0930\u0938\u0902\u0938\u094D\u0915\u0930\u0923 \u0905\u0902\u0924\u093F\u092E \u0909\u0924\u094D\u092A\u093E\u0926 \u0915\u0947 \u0935\u093F\u0924\u0930\u0923 \u0914\u0930 \u092C\u093F\u0915\u094D\u0930\u0940 \u0914\u0930 \u092F\u0939\u093E\u0902 \u0924\u0915 \u0915\u093F \u0909\u0928 \u0909\u0924\u094D\u092A\u093E\u0926\u094B\u0902 \u0915\u0947 \u0935\u093F\u091C\u094D\u091E\u093E\u092A\u0928 \u092E\u0947\u0902 \u092D\u0940 \u0939\u093E\u0925 \u0939\u094B\u0924\u093E \u0939\u0948\u0964 \u092E\u093E\u0902\u0938 \u0915\u0947 \u092A\u094D\u0930\u0938\u0902\u0938\u094D\u0915\u0930\u0923 \u092E\u0947\u0902 \u092A\u0936\u0941\u0913\u0902 \u0915\u093E \u0935\u0927 \u0915\u0930\u0928\u093E\u0964 \u092E\u093E\u0902\u0938 \u0915\u093E\u091F\u0928\u093E \u092F\u0939 \u0938\u0941\u0928\u093F\u0936\u094D\u091A\u093F\u0924 \u0915\u0930\u0928\u093E \u0915\u093F \u092F\u0939 \u0909\u092A\u092D\u094B\u0917 \u0915\u0947 \u0932\u093F\u090F \u0938\u0941\u0930\u0915\u094D\u0937\u093F\u0924 \u0939\u0948\u0964 \u0907\u0938\u0915\u0940 \u092A\u0948\u0915\u0947\u091C\u093F\u0902\u0917 \u0915\u0930\u0947\u0902, \u0907\u0938\u0947 \u0905\u0928\u094D\u092F \u0909\u0924\u094D\u092A\u093E\u0926\u094B\u0902 \u091C\u0948\u0938\u0947 \u0938\u093E\u0902\u0938\u0947\u091C \u092F\u093E \u0932\u0902\u091A \u092E\u0940\u091F \u092E\u0947\u0902 \u0938\u0902\u0938\u093E\u0927\u093F\u0924 \u0915\u0930\u0947\u0902\u0964 \u0907\u0938\u0947 \u0938\u094D\u091F\u094B\u0930\u094B\u0902 \u092E\u0947\u0902 \u0935\u093F\u0924\u0930\u093F\u0924 \u0915\u0930\u0947\u0902 \u0914\u0930 \u0907\u0938\u0947 \u0917\u094D\u0930\u093E\u0939\u0915\u094B\u0902 \u0915\u094B \u092C\u0947\u091A \u0926\u0947\u0902\u0964 \u091C\u093E\u0928\u0935\u0930\u094B\u0902 \u0915\u094B \u092A\u093E\u0932\u0928\u0947 \u0935\u093E\u0932\u0947 \u0930\u0948\u0902\u0915\u0930\u094B\u0902 \u0915\u094B \u092D\u0940 \u092E\u093E\u0902\u0938 \u092A\u094D\u0930\u0938\u0902\u0938\u094D\u0915\u0930\u0923 \u0915\u093E \u090F\u0915 \u0905\u092D\u093F\u0928\u094D\u0928 \u0905\u0902\u0917 \u092E\u093E\u0928\u093E \u091C\u093E \u0938\u0915\u0924\u093E \u0939\u0948\u0964 \u0915\u094D\u092F\u094B\u0902\u0915\u093F \u0935\u0947 \u0905\u0928\u094D\u092F \u0916\u093E\u0926\u094D\u092F \u0909\u0924\u094D\u092A\u093E\u0926\u094B\u0902 \u0915\u094B \u092C\u0928\u093E\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F \u0915\u091A\u094D\u091A\u0947 \u092E\u093E\u0932 \u0915\u0940 \u0906\u092A\u0942\u0930\u094D\u0924\u093F \u0915\u0930\u0947\u0902\u0964",p.content=[{t:"\u0915\u0938\u093E\u0908 \u092E\u093E\u0902\u0938 \u092A\u094D\u0930\u0938\u0902\u0938\u094D\u0915\u0930\u0923",d:"\u0915\u0938\u093E\u0908 \u092E\u093E\u0902\u0938 \u092A\u094D\u0930\u0938\u0902\u0938\u094D\u0915\u0930\u0923 \u0909\u0926\u094D\u092F\u094B\u0917 \u0915\u093E \u090F\u0915 \u092E\u0939\u0924\u094D\u0935\u092A\u0942\u0930\u094D\u0923 \u0939\u093F\u0938\u094D\u0938\u093E \u0939\u0948\u0964 \u0915\u094D\u092F\u094B\u0902\u0915\u093F \u092F\u0947 \u0932\u094B\u0917 \u091C\u093E\u0928\u0935\u0930\u094B\u0902 \u0915\u0947 \u0936\u0935 \u0938\u0947 \u092E\u093E\u0902\u0938 \u0915\u094B \u0938\u093E\u092B \u0915\u0930\u0928\u0947 \u0914\u0930 \u0915\u093E\u091F\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F \u091C\u093F\u092E\u094D\u092E\u0947\u0926\u093E\u0930 \u0939\u0948\u0964 \u0915\u0938\u093E\u0908 \u0905\u0915\u094D\u0938\u0930 \u092C\u0942\u091A\u0921\u093C\u0916\u093E\u0928\u094B\u0902 \u092E\u0947\u0902 \u0915\u093E\u092E \u0915\u0930\u0924\u0947 \u0939\u0948\u0964 \u091C\u093F\u0928 \u0938\u094D\u0925\u093E\u0928\u094B\u0902 \u092A\u0930 \u092E\u0935\u0947\u0936\u0940 \u0914\u0930 \u0905\u0928\u094D\u092F \u091C\u093E\u0928\u0935\u0930 \u092E\u093E\u0930\u0947 \u091C\u093E\u0924\u0947 \u0939\u0948\u0964 \u0909\u0928\u094D\u0939\u0947\u0902 \u091A\u092E\u0915\u093E\u092F\u093E \u091C\u093E\u0924\u093E \u0939\u0948\u0964 \u0914\u0930 \u0938\u093E\u092B \u0915\u093F\u092F\u093E \u091C\u093E\u0924\u093E \u0939\u0948\u0964 \u0924\u093E\u0915\u093F \u092E\u093E\u0902\u0938 \u0915\u093E \u0909\u092A\u092F\u094B\u0917 \u092D\u094B\u091C\u0928 \u0915\u0947 \u0932\u093F\u090F \u0915\u093F\u092F\u093E \u091C\u093E \u0938\u0915\u0947\u0964 \u090F\u0915 \u0915\u0938\u093E\u0908 \u090F\u0915 \u0915\u093F\u0930\u093E\u0928\u0947 \u090F\u0915 \u0915\u093F\u0930\u093E\u0928\u0947 \u0915\u0940 \u0926\u0941\u0915\u093E\u0928 \u092F\u093E \u092E\u093E\u0902\u0938 \u092C\u093E\u091C\u093E\u0930 \u092E\u0947\u0902 \u092D\u0940 \u0915\u093E\u092E \u0915\u0930 \u0938\u0915\u0924\u093E \u0939\u0948\u0964 \u0935\u093F\u0924\u0930\u0915\u094B\u0902 \u0938\u0947 \u0906\u0930\u094D\u0921\u0930 \u0915\u093F\u090F \u0917\u090F \u092E\u093E\u0902\u0938 \u0915\u094B \u0915\u093E\u091F \u0938\u0915\u0924\u093E \u0939\u0948\u0964 \u092E\u093E\u0902\u0938 \u092A\u094D\u0930\u0938\u0902\u0938\u094D\u0915\u0930\u0923 \u0909\u0926\u094D\u092F\u094B\u0917 \u092E\u093E\u0902\u0938 \u092A\u0948\u0915\u093F\u0902\u0917 \u0909\u0926\u094D\u092F\u094B\u0917 \u0938\u0947 \u090F\u0915 \u0905\u0932\u0917 \u0907\u0915\u093E\u0908 \u0939\u0948\u0964 \u092A\u094D\u0930\u0938\u0902\u0938\u094D\u0915\u0930\u0923 \u092E\u0947\u0902 \u092E\u093E\u0902\u0938 \u0915\u094B \u0905\u092A\u0928\u0947 \u0915\u091A\u094D\u091A\u0947 \u0930\u0942\u092A \u092E\u0947\u0902 \u0932\u0947\u0928\u093E \u0914\u0930 \u0907\u0938\u0947 \u0905\u0928\u094D\u092F \u0909\u0924\u094D\u092A\u093E\u0926 \u092E\u0947\u0902 \u092C\u0926\u0932\u0928\u093E, \u091C\u094B \u0935\u093F\u092A\u0923\u0928 \u092F\u094B\u0917\u094D\u092F \u0939\u0948\u0964 \u0909\u092A\u092D\u094B\u0917 \u0915\u0947 \u0932\u093F\u090F \u0938\u0941\u0930\u0915\u094D\u0937\u093F\u0924 \u0939\u0948\u0964 \u0914\u0930 \u0909\u092A\u092D\u094B\u0915\u094D\u0924\u093E\u0913\u0902 \u0915\u0947 \u0932\u093F\u090F \u0906\u0915\u0930\u094D\u0937\u0915 \u0939\u0948\u0964 \u0907\u0938\u0932\u093F\u090F \u0907\u0938 \u092A\u094D\u0930\u0938\u0902\u0938\u094D\u0915\u0930\u0923 \u092E\u0947\u0902 \u0915\u0938\u093E\u0908 \u0915\u093E \u092D\u0940 \u0939\u093E\u0925 \u0939\u094B\u0924\u093E \u0939\u0948\u0964"},{t:"\u092A\u0948\u0915\u0947\u091C\u093F\u0902\u0917",d:"\u092A\u0948\u0915\u0947\u091C\u093F\u0902\u0917 \u0905\u0915\u094D\u0938\u0930 \u092E\u093E\u0902\u0938 \u092A\u094D\u0930\u0938\u0902\u0938\u094D\u0915\u0930\u0923 \u0909\u0926\u094D\u092F\u094B\u0917 \u0915\u093E \u090F\u0915 \u092E\u0939\u0924\u094D\u0935\u092A\u0942\u0930\u094D\u0923 \u0939\u093F\u0938\u094D\u0938\u093E \u0939\u0948\u0964 \u0915\u094D\u092F\u094B\u0902\u0915\u093F \u0938\u0902\u0938\u093E\u0927\u093F\u0924 \u092E\u0940\u091F \u0905\u0915\u094D\u0938\u0930 \u0910\u0938\u0947 \u0930\u0942\u092A \u092E\u0947\u0902 \u0939\u094B\u0924\u0947 \u0939\u0948\u0964 \u091C\u094B \u092A\u094D\u0930\u093E\u0915\u0943\u0924\u093F\u0915 \u0906\u0915\u093E\u0930 \u0928\u0939\u0940\u0902 \u0939\u094B\u0924\u0947 \u0939\u0948\u0964 \u0909\u0926\u093E\u0939\u0930\u0923 \u0915\u0947 \u0932\u093F\u090F \u0938\u093E\u0902\u0938\u0947\u091C \u0915\u094B \u0915\u092D\u0940 \u0915\u092D\u0940 \u0927\u093E\u0924\u0941 \u0915\u0947 \u0906\u0935\u0930\u0923 \u0915\u0947 \u0938\u093E\u0925 \u0905\u0902\u0924 \u092E\u0947\u0902 \u0938\u0940\u0932 \u0915\u093F\u090F \u0917\u090F \u091F\u094D\u092F\u0942\u092C \u091C\u0948\u0938\u0947 \u092A\u0948\u0915\u0947\u091C \u092E\u0947\u0902 \u092C\u0947\u091A\u093E \u091C\u093E\u0924\u093E \u0939\u0948\u0964 \u0917\u0930\u094D\u092E \u0915\u0941\u0924\u094D\u0924\u094B\u0902 \u0915\u094B \u0915\u0908 \u092E\u093E\u092E\u0932\u094B\u0902 \u092E\u0947\u0902 \u0906\u0920 \u0917\u0941\u091A\u094D\u091B\u093E \u092E\u0947\u0902 \u092C\u0947\u091A\u093E \u091C\u093E\u0924\u093E \u0939\u0948\u0964 \u0914\u0930 \u0935\u0947 \u0906\u092E\u0924\u094C\u0930 \u092A\u0930 \u090F\u0915 \u092A\u094D\u0932\u093E\u0938\u094D\u091F\u093F\u0915 \u0925\u0948\u0932\u0940 \u092E\u0947\u0902 \u0928\u093F\u0939\u093F\u0924 \u0939\u094B\u0924\u0947 \u0939\u0948\u0964 \u0926\u094B\u092A\u0939\u0930 \u0915\u0947 \u092D\u094B\u091C\u0928 \u0915\u094B \u092E\u0940\u091F \u0915\u0947 \u0906\u0915\u093E\u0930 \u0914\u0930 \u092E\u093E\u0924\u094D\u0930\u093E \u0915\u0947 \u0906\u0927\u093E\u0930 \u092A\u0930 \u092C\u0947\u091A\u093E \u091C\u093E \u0938\u0915\u0924\u093E \u0939\u0948\u0964"},{t:"\u092E\u093E\u0902\u0938 \u092A\u094D\u0930\u0938\u0902\u0938\u094D\u0915\u0930\u0923 \u092E\u0936\u0940\u0928\u0930\u0940",d:"\u0935\u093F\u092D\u093F\u0928\u094D\u0928 \u092E\u0942\u0932\u094D\u092F \u0938\u0902\u0935\u0930\u094D\u0927\u093F\u0924 \u092E\u093E\u0902\u0938 \u0909\u0924\u094D\u092A\u093E\u0926\u094B\u0902 \u091C\u0948\u0938\u0947 \u0907\u092E\u0932\u094D\u0936\u0928 \u0909\u0924\u094D\u092A\u093E\u0926, \u092A\u0941\u0928\u0930\u094D\u0917\u0920\u093F\u0924 \u092E\u093E\u0902\u0938 \u0909\u0924\u094D\u092A\u093E\u0926, \u0915\u094D\u092F\u094B\u0930\u094D\u0921 \u0938\u094D\u092E\u094B\u0915\u094D\u0921 \u0909\u0924\u094D\u092A\u093E\u0926 \u0906\u0926\u093F \u0915\u0947 \u092C\u0928\u093E\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F \u0928\u093F\u092E\u094D\u0928\u0932\u093F\u0916\u093F\u0924 \u092E\u0936\u0940\u0928\u0930\u0940 \u0906\u0935\u0936\u094D\u092F\u0915 \u0939\u0948\u0964",l:[{k:"\u0938\u094D\u0932\u093E\u0907\u0938\u0930",v:"\u092E\u093E\u0902\u0938 \u0914\u0930 \u092E\u093E\u0902\u0938 \u0909\u0924\u094D\u092A\u093E\u0926\u094B\u0902 \u0915\u094B \u0935\u093F\u092D\u093F\u0928\u094D\u0928 \u0906\u0935\u0936\u094D\u092F\u0915\u0924\u093E\u0913\u0902 \u0915\u0947 \u0932\u093F\u090F \u092A\u0924\u0932\u0940 \u0938\u094D\u0932\u093E\u0907\u0938 \u0915\u0947 \u0930\u0942\u092A \u092E\u0947\u0902 \u0915\u093E\u091F\u093E \u091C\u093E\u0924\u093E \u0939\u0948\u0964 \u092F\u0939 \u090F\u0915 \u0918\u0942\u092E\u0928\u0947 \u0935\u093E\u0932\u0947 \u092C\u094D\u0932\u0947\u0921 \u0926\u094D\u0935\u093E\u0930\u093E \u0915\u093F\u092F\u093E \u091C\u093E\u0924\u093E \u0939\u0948\u0964 \u091C\u093F\u0938\u0947 \u0935\u093F\u092D\u093F\u0928\u094D\u0928 \u092E\u094B\u091F\u093E\u0908 \u0915\u0947 \u0938\u094D\u0932\u093E\u0907\u0938 \u092A\u094D\u0930\u093E\u092A\u094D\u0924 \u0915\u0930\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F \u0938\u092E\u093E\u092F\u094B\u091C\u093F\u0924 \u0915\u093F\u092F\u093E \u091C\u093E \u0938\u0915\u0924\u093E \u0939\u0948\u0964 \u092E\u093E\u0902\u0938 \u0915\u0947 \u091F\u0941\u0915\u0921\u093C\u0947 \u0915\u0930\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F \u092A\u0939\u0932\u0947 \u0938\u0947 \u0939\u0940 \u092B\u093F\u091F \u0915\u093F\u090F \u0917\u090F \u0928\u093F\u0930\u094D\u092E\u093F\u0924 \u092C\u094D\u0932\u0947\u0921 \u0936\u093E\u0930\u094D\u092A\u0928\u0930 \u092D\u0940 \u0909\u092A\u0932\u092C\u094D\u0927 \u0939\u0948\u0964 \u0935\u093F\u092D\u093F\u0928\u094D\u0928 \u0909\u0924\u094D\u092A\u093E\u0926\u094B\u0902 \u0915\u0947 \u0932\u093F\u090F \u0915\u094D\u0937\u092E\u0924\u093E\u0913\u0902 \u0914\u0930 \u092A\u094D\u0930\u0915\u093E\u0930\u094B\u0902 \u0915\u0947 \u0938\u094D\u0932\u093E\u0907\u0938\u0930 \u0909\u092A\u0932\u092C\u094D\u0927 \u0939\u0948\u0964"},{k:"\u092E\u093F\u0928\u094D\u0938\u0930",v:"\u0907\u0938\u0915\u093E \u0909\u092A\u092F\u094B\u0917 \u092E\u093E\u0902\u0938 \u0915\u0947 \u0906\u0915\u093E\u0930 \u0915\u0947 \u0935\u093F\u092D\u093F\u0928\u094D\u0928 \u0915\u0923\u094B\u0902 \u0915\u0947 \u0906\u0915\u093E\u0930 \u092E\u0947\u0902 \u0915\u092E \u0915\u0930\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F \u0915\u093F\u092F\u093E \u091C\u093E\u0924\u093E \u0939\u0948\u0964 \u0935\u093F\u092D\u093F\u0928\u094D\u0928 \u091B\u0947\u0926 \u0906\u0915\u093E\u0930 (3, 5, 8 \u0914\u0930 13 \u092E\u093F\u092E\u0940) \u0915\u0940 \u0917\u094D\u0930\u093E\u0907\u0902\u0921\u0930 \u092A\u094D\u0932\u0947\u091F\u094B\u0902 \u0915\u0940 \u092E\u0926\u0926 \u0938\u0947 \u092E\u093E\u0902\u0938 \u0915\u094B \u0909\u0924\u094D\u092A\u093E\u0926 \u0915\u0940 \u0906\u0935\u0936\u094D\u092F\u0915\u0924\u093E \u0915\u0947 \u0905\u0928\u0941\u0938\u093E\u0930 \u0906\u0935\u0936\u094D\u092F\u0915 \u0915\u0923 \u0906\u0915\u093E\u0930 \u092E\u0947\u0902 \u091B\u094B\u091F\u093E \u0915\u093F\u092F\u093E \u091C\u093E \u0938\u0915\u0924\u093E \u0939\u0948\u0964 \u0915\u0940\u092E\u093E \u092C\u0928\u093E\u092F\u093E \u0939\u0941\u0906 \u092E\u093E\u0902\u0938 \u0915\u093E \u0909\u092A\u092F\u094B\u0917 \u0935\u093F\u092D\u093F\u0928\u094D\u0928 \u092E\u0942\u0932\u094D\u092F \u0938\u0902\u0935\u0930\u094D\u0927\u093F\u0924 \u092E\u093E\u0902\u0938 \u0909\u0924\u094D\u092A\u093E\u0926\u094B\u0902 \u0935\u093F\u0936\u0947\u0937 \u0930\u0942\u092A \u0938\u0947 \u0907\u092E\u0932\u094D\u0936\u0928 / \u092A\u0941\u0928\u0930\u094D\u0917\u0920\u093F\u0924 \u092A\u094D\u0930\u0915\u093E\u0930 \u0915\u0947 \u0909\u0924\u094D\u092A\u093E\u0926\u094B\u0902 \u0915\u094B \u0924\u0948\u092F\u093E\u0930 \u0915\u0930\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F \u0915\u093F\u092F\u093E \u091C\u093E\u0924\u093E \u0939\u0948\u0964 \u092C\u0947\u0939\u0924\u0930 \u092E\u093F\u0928\u0938\u093F\u0902\u0917 \u0914\u0930 \u0938\u0902\u092A\u0942\u0930\u094D\u0923 \u0909\u0924\u094D\u092A\u093E\u0926\u0928 \u092A\u094D\u0930\u093E\u092A\u094D\u0924 \u0915\u0930\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F \u092C\u094D\u0932\u0947\u0921 \u0914\u0930 \u091A\u093E\u0915\u0942 \u0915\u0940 \u0909\u091A\u093F\u0924 \u092B\u093F\u0915\u094D\u0938\u093F\u0902\u0917 \u0914\u0930 \u092E\u093F\u0928\u094D\u0938\u093F\u0902\u0917 \u0915\u0947 \u0938\u092E\u092F \u092E\u093E\u0902\u0938 \u0915\u093E \u0915\u092E \u0924\u093E\u092A\u092E\u093E\u0928 \u092C\u0928\u093E\u090F \u0930\u0916\u0928\u093E \u092E\u0939\u0924\u094D\u0935\u092A\u0942\u0930\u094D\u0923 \u0939\u0948\u0964"},{k:"\u092C\u093E\u0909\u0932 \u091A\u093E\u0902\u092A\u0930",v:"\u092E\u093E\u0902\u0938 \u0915\u094B \u0907\u092E\u0932\u094D\u0936\u0928 \u092C\u0928\u093E\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F \u092C\u093E\u0909\u0932 \u091A\u093E\u0902\u092A\u0930 \u0915\u093E \u0909\u092A\u092F\u094B\u0917 \u0915\u093F\u092F\u093E \u091C\u093E\u0924\u093E \u0939\u0948\u0964 \u091C\u093F\u0938\u092E\u0947\u0902 \u0918\u0942\u092E\u0928\u0947 \u0935\u093E\u0932\u0947 \u092C\u093E\u0909\u0932 \u0915\u0947 \u0938\u093E\u0925 \u0915\u0908 \u0924\u0947\u091C \u0915\u0908 \u092C\u094D\u0932\u0947\u0921 \u0939\u094B\u0924\u0947 \u0939\u0948\u0964 \u091A\u093E\u092A\u093F\u0902\u0917 \u0915\u0947 \u0926\u094C\u0930\u093E\u0928 \u0915\u0940\u092E\u093E \u092C\u0928\u093E\u092F\u093E \u0939\u0941\u0906 \u0939\u0948\u0964 \u092E\u093E\u0902\u0938 \u092C\u093E\u0930\u0940\u0915 \u092A\u0947\u0938\u094D\u091F \u092E\u0947\u0902 \u092C\u0926\u0932 \u091C\u093E\u0924\u093E \u0939\u0948\u0964 \u0914\u0930 \u0938\u092D\u0940 \u0938\u093E\u092E\u0917\u094D\u0930\u0940 (\u092C\u093E\u0907\u0902\u0921\u0930 \u092E\u0938\u093E\u0932\u093E \u092E\u093F\u0936\u094D\u0930\u0923 \u092E\u0938\u093E\u0932\u0947\u0902 \u0906\u0926\u093F) \u0915\u094B \u092E\u0940\u091F \u0907\u092E\u0932\u094D\u0936\u0928 \u092C\u0948\u091F\u0930 \u092E\u0947\u0902 \u092C\u0926\u0932 \u091C\u093E\u0924\u093E \u0939\u0948\u0964 \u091C\u093F\u0938\u0915\u093E \u092A\u0947\u091F\u0940 \u092C\u0930\u094D\u0917\u0930 \u0928\u0917\u0947\u091F\u094D\u0938 \u0914\u0930 \u0938\u093E\u0938\u0947\u091C \u092C\u0928\u093E\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F \u0915\u093F\u092F\u093E \u091C\u093E\u0924\u093E \u0939\u0948\u0964 \u0907\u0928\u092E\u0947\u0902 \u0938\u0947 \u0905\u0927\u093F\u0915\u093E\u0902\u0936 \u0915\u093E\u0930\u094D\u092F\u094B\u0902 \u092E\u0947\u0902 \u0932\u093F\u092A\u093F\u0921 \u0906\u0915\u094D\u0938\u0940\u0915\u0930\u0923 \u0939\u094B\u0924\u093E \u0939\u0948\u0964 \u091C\u094B \u0907\u092E\u0932\u094D\u0936\u0928 \u0915\u0940 \u0917\u0941\u0923\u0935\u0924\u094D\u0924\u093E \u0915\u094B \u092A\u094D\u0930\u092D\u093E\u0935\u093F\u0924 \u0915\u0930\u0924\u093E \u0939\u0948\u0964 \u0907\u0938\u0932\u093F\u090F \u0935\u0948\u0915\u094D\u092F\u0942\u092E \u092C\u093E\u0909\u0932 \u091A\u093E\u0902\u092A\u0930 \u0915\u093E \u0909\u092A\u092F\u094B\u0917 \u0915\u0930\u0928\u0947 \u0915\u0940 \u0938\u0932\u093E\u0939 \u0926\u0940 \u091C\u093E\u0924\u0940 \u0939\u0948\u0964 \u091C\u093F\u0938\u092E\u0947\u0902 \u0938\u092D\u0940 \u0906\u092A\u0930\u0947\u0936\u0928 \u0935\u0948\u0915\u094D\u092F\u0942\u092E \u092E\u0947\u0902 \u0915\u093F\u090F \u091C\u093E\u092F\u0947\u0902\u0917\u0947\u0964"},{k:"\u091F\u092E\u094D\u092C\u0932\u0930",v:"\u092F\u0939 \u092E\u093E\u0902\u0938 \u0915\u0947 \u091F\u0941\u0915\u0921\u093C\u094B\u0902 \u0915\u094B \u092C\u093E\u0930 \u092C\u093E\u0930 \u0917\u093F\u0930\u093E\u0928\u0947 \u0915\u0947 \u0915\u093E\u0930\u0923 \u0939\u094B\u0928\u0947 \u0935\u093E\u0932\u0947 \u0926\u092C\u093E\u0935 \u0915\u0947 \u0915\u093E\u0930\u0923 \u092E\u093E\u0902\u0938 \u0915\u0947 \u0924\u0902\u0924\u0941\u0913\u0902 \u0915\u0947 \u0935\u093F\u0916\u0902\u0921\u0928 \u0914\u0930 \u0907\u0938\u0915\u0947 \u092E\u093E\u0927\u094D\u092F\u092E \u0938\u0947 \u092E\u093E\u0902\u0938 \u0915\u0947 \u091F\u0941\u0915\u0921\u093C\u094B\u0902 \u0938\u0947 \u092A\u094D\u0930\u094B\u091F\u0940\u0928 \u0928\u093F\u0915\u0932\u0915\u0930 \u0938\u0924\u0939 \u092A\u0930 \u0928\u093F\u0915\u0932\u0928\u0947 \u092E\u0947\u0902 \u092E\u0926\u0926 \u0915\u0930\u0924\u093E \u0939\u0948\u0964 \u0907\u0938\u092E\u0947\u0902 \u090F\u0915 \u0921\u094D\u0930\u092E \u0939\u094B\u0924\u093E \u0939\u0948\u0964 \u091C\u093F\u0938\u0915\u0947 \u0905\u0928\u094D\u0926\u0930 \u092A\u0948\u0921\u0932 \u0939\u094B\u0924\u0947 \u0939\u0948\u0964 \u091C\u092C \u0938\u093F\u0932\u0947\u0902\u0921\u0930 \u092E\u093E\u0902\u0938 \u0915\u0947 \u0938\u093E\u0925 \u0918\u0942\u092E\u0924\u093E \u0939\u0948\u0964 \u0924\u094B \u0917\u093F\u0930\u0928\u0947 \u0938\u0947 \u0939\u094B\u0928\u0947 \u0935\u093E\u0932\u0947 \u092A\u094D\u0930\u092D\u093E\u0935 \u0938\u0947 \u0915\u094D\u092F\u094B\u0930\u093F\u0902\u0917 \u0938\u093E\u092E\u0917\u094D\u0930\u0940 \u0915\u0947 \u092E\u093F\u0936\u094D\u0930\u0923 \u0915\u0940 \u092E\u093E\u0902\u0938 \u092E\u0947\u0902 \u092A\u094D\u0930\u0935\u0947\u0936 \u092E\u0947\u0902 \u092E\u0926\u0926 \u092E\u093F\u0932\u0947\u0917\u0940\u0964 \u0935\u0948\u0915\u094D\u092F\u0942\u092E \u091F\u0902\u092C\u0932\u0930 \u0915\u093E \u0909\u092A\u092F\u094B\u0917 \u0932\u093F\u092A\u093F\u0921 \u0906\u0915\u094D\u0938\u0940\u0915\u0930\u0923 \u0915\u094B \u0915\u092E \u0915\u0930\u0947\u0917\u093E\u0964 \u092A\u0941\u0928\u0930\u094D\u0917\u0920\u093F\u0924 \u092E\u093E\u0902\u0938 \u0909\u0924\u094D\u092A\u093E\u0926\u094B\u0902 \u0915\u094B \u0924\u0948\u092F\u093E\u0930 \u0915\u0930\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F \u091F\u092E\u094D\u092C\u0932\u0930 \u090F\u0915 \u092E\u0939\u0924\u094D\u0935\u092A\u0942\u0930\u094D\u0923 \u0906\u0935\u0936\u094D\u092F\u0915\u0924\u093E \u0939\u0948\u0964"},{k:"\u092E\u093F\u0915\u094D\u0938\u0930/\u092E\u0938\u093E\u091C\u0930",v:"\u0917\u094D\u0930\u093E\u0909\u0902\u0921 \u092E\u0940\u091F \u0909\u0924\u094D\u092A\u093E\u0926\u094B\u0902 \u0915\u0947 \u0928\u093F\u0930\u094D\u092E\u093E\u0923 \u092E\u0947\u0902 \u0909\u092A\u092F\u094B\u0917 \u0915\u093F\u092F\u093E \u091C\u093E\u0924\u093E \u0939\u0948\u0964 \u092F\u0939\u093E\u0902 \u0915\u0940\u092E\u093E \u092C\u0928\u093E\u092F\u093E \u0939\u0941\u0906 \u092E\u093E\u0902\u0938 \u0905\u0928\u094D\u092F \u0938\u092D\u0940 \u0917\u0948\u0930 \u092E\u093E\u0902\u0938 \u0938\u093E\u092E\u0917\u094D\u0930\u0940 \u0914\u0930 \u0938\u0940\u091C\u0928\u093F\u0902\u0917 \u0915\u0947 \u0938\u093E\u0925 \u0938\u094D\u091F\u0940\u0932 \u0921\u094D\u0930\u092E \u0915\u0947 \u0905\u0928\u094D\u0926\u0930 \u092E\u093F\u0932\u093E\u092F\u093E \u091C\u093E\u0924\u093E \u0939\u0948\u0964 \u091C\u093F\u0938\u092E\u0947\u0902 \u0918\u0942\u092E\u0928\u0947 \u0935\u093E\u0932\u0947 \u092A\u0948\u0921\u0932 \u0939\u094B\u0924\u0947 \u0939\u0948\u0964"},{k:"\u0938\u093E\u0902\u0938\u0947\u091C \u092B\u093F\u0932\u0930",v:"\u0907\u0938\u0915\u093E \u0909\u092A\u092F\u094B\u0917 \u0938\u093E\u0938\u0947\u091C \u0915\u0940 \u0924\u0948\u092F\u093E\u0930\u0940 \u092E\u0947\u0902 \u092E\u093E\u0902\u0938 \u0915\u0947 \u0907\u092E\u0932\u094D\u0936\u0928 \u0915\u094B \u092A\u094D\u0930\u093E\u0915\u0943\u0924\u093F\u0915 \u092F\u093E \u0938\u093F\u0902\u0925\u0947\u091F\u093F\u0915 \u0915\u0947\u0938\u093F\u0902\u0917 \u092E\u0947\u0902 \u092D\u0930\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F \u0915\u093F\u092F\u093E \u091C\u093E\u0924\u093E \u0939\u0948\u0964 \u0939\u093E\u0907\u0921\u094D\u0930\u094B\u0932\u093F\u0915 \u0938\u0902\u091A\u093E\u0932\u093F\u0924 \u0914\u0930  \u092E\u0948\u0928\u0941\u0905\u0932 \u0938\u093E\u0902\u0938\u0947\u091C \u092B\u093F\u0932\u0930\u094D\u0938 \u0926\u094B\u0928\u094B\u0902 \u0909\u092A\u0932\u092C\u094D\u0927 \u0939\u0948\u0964 \u092F\u0942\u0928\u093F\u091F \u092E\u0947\u0902 \u0938\u093F\u0932\u0947\u0902\u0921\u0930 \u092B\u093F\u0932\u0930 \u091F\u094D\u092F\u0942\u092C (\u0928\u094B\u091C\u0932) \u090F\u0915 \u0922\u0915\u094D\u0915\u0928 \u0939\u094B\u0924\u093E \u0939\u0948\u0964 \u0938\u093F\u0932\u0947\u0902\u0921\u0930 \u092E\u0947\u0902 \u092A\u093F\u0938\u094D\u091F\u0928 \u0915\u0947 \u090A\u092A\u0930/ \u0938\u092E\u093E\u0928\u093E\u0902\u0924\u0930 \u0938\u0902\u091A\u0932\u0928 \u0907\u092E\u0932\u094D\u0936\u0928 \u0915\u094B \u0915\u0947\u0938\u093F\u0902\u0917 \u092E\u0947\u0902 \u092D\u0930\u0928\u0947 \u092E\u0947\u0902 \u092E\u0926\u0926 \u0915\u0930\u0924\u093E \u0939\u0948\u0964"},{k:"\u0938\u094D\u0935\u091A\u093E\u0932\u093F\u0924 \u092A\u0948\u091F\u0940 \u092C\u0928\u093E\u0928\u0947 \u0914\u0930 \u092E\u0940\u091F \u092C\u093E\u0932 \u092C\u0928\u093E\u0928\u0947 \u0915\u0940 \u092E\u0936\u0940\u0928",v:"\u0928\u093F\u0930\u0902\u0924\u0930 \u0938\u0902\u091A\u093E\u0932\u0928 \u092E\u0947\u0902 \u0928\u093F\u0936\u094D\u091A\u093F\u0924 \u0935 \u091C\u0928/ \u0906\u0915\u093E\u0930 \u0915\u0947 \u092E\u093E\u0902\u0938 \u0907\u092E\u0932\u094D\u0936\u0928 \u0915\u094B \u092A\u0948\u091F\u0940 \u092F\u093E \u092E\u0940\u091F \u092C\u093E\u0932 \u0915\u0947 \u0930\u0942\u092A \u092E\u0947\u0902 \u0922\u093E\u0932\u093E \u091C\u093E \u0938\u0915\u0924\u093E \u0939\u0948\u0964"},{k:"\u092C\u094D\u0932\u0947\u0921 \u091F\u0947\u0902\u0921\u0930\u093F\u091C\u0930",v:"\u092F\u0939 \u0938\u0916\u094D\u0924 \u092E\u093E\u0902\u0938 \u0915\u094B \u0928\u0930\u094D\u092E \u092C\u0928\u093E\u0928\u0947 \u0915\u0940 \u090F\u0915 \u092D\u094C\u0924\u093F\u0915 \u0935\u093F\u0927\u093F \u0939\u0948\u0964 \u092F\u0939\u093E\u0902 \u092E\u093E\u0902\u0938 \u0915\u0947 \u091F\u0941\u0915\u0921\u093C\u094B\u0902 \u0938\u094D\u091F\u0947\u0915 \u0915\u094B \u0915\u0908 \u092C\u094D\u0932\u0947\u0921\u094B\u0902 \u0915\u0947 \u0938\u0947\u091F \u0915\u0947 \u092C\u0940\u091A \u0926\u092C\u093E\u092F\u093E \u091C\u093E\u0924\u093E \u0939\u0948\u0964 \u091C\u093F\u0938\u0938\u0947 \u090A\u0924\u0915 \u0935\u093F\u0918\u091F\u0928 \u0939\u094B\u0924\u093E \u0939\u0948\u0964"},{k:"\u092C\u094D\u0930\u093E\u0907\u0928 \u0907\u0902\u091C\u0947\u0915\u094D\u091F\u0930",v:"\u092C\u094D\u0930\u093E\u0907\u0928 \u090F\u0915 \u0938\u093E\u0932\u094D\u092F\u0942\u0936\u0928 \u0939\u0948\u0964 \u091C\u093F\u0938\u092E\u0947\u0902 \u0928\u092E\u0915, \u092B\u093E\u0938\u094D\u092B\u0947\u091F, \u0928\u093E\u0907\u091F\u094D\u0930\u0947\u091F, \u0905\u0938\u094D\u0915\u094B\u0930\u092C\u0947\u091F, \u0936\u0915\u094D\u0915\u0930 \u091C\u0948\u0938\u0947 \u0935\u093F\u092D\u093F\u0928\u094D\u0928 \u0915\u094D\u092F\u094B\u0930\u093F\u0902\u0917 \u0938\u093E\u0932\u094D\u092F\u0942\u0936\u0928 \u0915\u0947 \u092A\u094D\u0930\u0935\u0947\u0936 \u092E\u0947\u0902 \u0905\u0927\u093F\u0915 \u0938\u092E\u092F \u0932\u0917\u0924\u093E \u0939\u0948\u0964 \u0907\u0938\u0932\u093F\u090F \u092C\u094D\u0930\u093E\u0907\u0928 \u0915\u094B \u091F\u0941\u0915\u0921\u093C\u094B\u0902 \u092E\u0947\u0902 \u0907\u0902\u091C\u0947\u0915\u094D\u091F \u0915\u0930\u0915\u0947 \u092A\u094D\u0930\u0935\u0947\u0936 \u0915\u094B \u0924\u0947\u091C \u0915\u093F\u092F\u093E \u091C\u093E \u0938\u0915\u0924\u093E \u0939\u0948\u0964 \u092C\u0947\u0915\u0928 \u0914\u0930 \u0939\u0948\u092E \u091C\u0948\u0938\u0947 \u0915\u094D\u092F\u094B\u0930\u094D\u0921 \u0914\u0930 \u0938\u094D\u092E\u094B\u0915\u094D\u0921 \u092E\u093E\u0902\u0938 \u0909\u0924\u094D\u092A\u093E\u0926\u094B\u0902 \u0915\u0940 \u0924\u0948\u092F\u093E\u0930\u0940 \u092E\u0947\u0902 \u092F\u0939 \u0906\u0935\u0936\u094D\u092F\u0915 \u0939\u0948\u0964"}]}],p.keywords=["\u092E\u093E\u0902\u0938 \u092A\u094D\u0930\u0938\u0902\u0938\u094D\u0915\u0930\u0923","\u0915\u0938\u093E\u0908 \u092E\u093E\u0902\u0938 \u092A\u094D\u0930\u0938\u0902\u0938\u094D\u0915\u0930\u0923","\u092E\u093E\u0902\u0938 \u092A\u094D\u0930\u0938\u0902\u0938\u094D\u0915\u0930\u0923 \u0915\u094D\u092F\u093E \u0939\u0948","\u090F\u0906\u0908\u090F\u092B\u092A\u0940\u090F\u0928 \u092E\u0947\u0902 \u092E\u093E\u0902\u0938 \u092A\u094D\u0930\u0938\u0902\u0938\u094D\u0915\u0930\u0923"]}return p});N(u,f,r=>a(0,s=r));const n={url:`/${h.params.locale}/activities/meat-processing`,title:s.title,keywords:s.keywords};return[s,f,n,[109,1091]]}class pe extends V{constructor(t){super();X(this,t,ue,ce,J,{})}}export{pe as default};