import{S as D,i as M,s as j,z as I,a as $,k as u,r as x,A as O,c as C,l as f,m as d,u as E,h as t,p as S,B as R,b as o,F as h,I as W,n as X,g as z,d as F,C as G,G as U}from"../chunks/index.66236961.js";import{R as V}from"../chunks/RedirectHome.4111473b.js";import{B as J}from"../chunks/stores.ac482e23.js";function K(b){let a,m,s,_,i,n,T,w,r,P,v,p,c,A,y,B,N;return a=new V({}),{c(){I(a.$$.fragment),m=$(),s=u("p"),_=x("The option is available to open multiple clients at the same time."),i=$(),n=u("h2"),T=x("Enable Multiple Clients"),w=$(),r=u("p"),P=x(`When enabled, multiple instances of the client can be opened simultaneously, however only one can\r
	be attached to LoLXD.`),v=$(),p=u("div"),c=u("button"),A=x("Start New Client"),this.h()},l(e){O(a.$$.fragment,e),m=C(e),s=f(e,"P",{});var l=d(s);_=E(l,"The option is available to open multiple clients at the same time."),l.forEach(t),i=C(e),n=f(e,"H2",{class:!0});var k=d(n);T=E(k,"Enable Multiple Clients"),k.forEach(t),w=C(e),r=f(e,"P",{class:!0});var H=d(r);P=E(H,`When enabled, multiple instances of the client can be opened simultaneously, however only one can\r
	be attached to LoLXD.`),H.forEach(t),v=C(e),p=f(e,"DIV",{class:!0});var L=d(p);c=f(L,"BUTTON",{class:!0});var q=d(c);A=E(q,"Start New Client"),q.forEach(t),L.forEach(t),this.h()},h(){S(n,"class","mt-6 text-xl font-bold"),S(r,"class","mt-4"),S(c,"class","px-4 py-1 my-2 bg-[rgba(11,0,22,0.55)] border rounded border-yellow-800 hover:border-yellow-500 hover:shadow-inner hover:shadow-yellow-700 text-lg"),S(p,"class","flex flex-row flex-nowrap justify-center mt-4")},m(e,l){R(a,e,l),o(e,m,l),o(e,s,l),h(s,_),o(e,i,l),o(e,n,l),h(n,T),o(e,w,l),o(e,r,l),h(r,P),o(e,v,l),o(e,p,l),h(p,c),h(c,A),y=!0,B||(N=W(c,"click",b[0]),B=!0)},p:X,i(e){y||(z(a.$$.fragment,e),y=!0)},o(e){F(a.$$.fragment,e),y=!1},d(e){G(a,e),e&&t(m),e&&t(s),e&&t(i),e&&t(n),e&&t(w),e&&t(r),e&&t(v),e&&t(p),B=!1,N()}}}function Q(b,a,m){let s;return U(b,J,i=>m(1,s=i)),[async i=>{await(await fetch(`http://${s}/addedfunction/spawnMultipleClient`,{method:"POST"})).json()}]}class ee extends D{constructor(a){super(),M(this,a,Q,K,j,{})}}export{ee as default};