import{S as M,i as N,s as C,v as D,j as x,e as v,t as b,w as P,l as E,c as g,a as j,g as k,d as p,b as d,x as $,f as w,H as f,h as A,p as q,n as z,A as H}from"../chunks/vendor-9e861a44.js";import"../chunks/config-9f733ca2.js";import{M as I}from"../chunks/Meta-0e751676.js";function O(r){let s,l,e,n,i,o,c,u=r[1].message+"",_,h,m;return s=new I({props:{metaData:r[2]}}),{c(){D(s.$$.fragment),l=x(),e=v("section"),n=v("span"),i=b(r[0]),o=x(),c=v("span"),_=b(u),h=x(),this.h()},l(t){P(s.$$.fragment,t),l=E(t),e=g(t,"SECTION",{id:!0,class:!0});var a=j(e);n=g(a,"SPAN",{class:!0});var y=j(n);i=k(y,r[0]),y.forEach(p),o=E(a),c=g(a,"SPAN",{class:!0});var S=j(c);_=k(S,u),S.forEach(p),h=E(a),a.forEach(p),this.h()},h(){d(n,"class","my-2 font-bold text-9xl text-error }}"),d(c,"class","my-2 font-semibold text-3xl capitalize"),d(e,"id","error"),d(e,"class","px-8 w-full min-h-screen flex-cj flex-col")},m(t,a){$(s,t,a),w(t,l,a),w(t,e,a),f(e,n),f(n,i),f(e,o),f(e,c),f(c,_),f(e,h),m=!0},p(t,[a]){(!m||a&1)&&A(i,t[0]),(!m||a&2)&&u!==(u=t[1].message+"")&&A(_,u)},i(t){m||(q(s.$$.fragment,t),m=!0)},o(t){z(s.$$.fragment,t),m=!1},d(t){H(s,t),t&&p(l),t&&p(e)}}}async function J({error:r,status:s}){return{props:{status:s,error:r}}}function T(r,s,l){let{status:e}=s,{error:n}=s;const i={title:`${e} (Error)`,description:`Error ${e}`};return r.$$set=o=>{"status"in o&&l(0,e=o.status),"error"in o&&l(1,n=o.error)},[e,n,i]}class K extends M{constructor(s){super();N(this,s,T,O,C,{status:0,error:1})}}export{K as default,J as load};
