import{S as te,i as le,s as oe,U as J,z as V,a as H,k as $,r as x,A as D,c as S,l as v,m as w,u as C,h as u,p as j,B as I,b as f,F as q,V as Q,g as L,d as U,C as O,G as W,n as m,e as X,L as ne,v as ae}from"../chunks/index.66236961.js";import{R as re}from"../chunks/RedirectHome.4111473b.js";import{H as ie}from"../chunks/HotkeySetter.c162716b.js";import{T as ee}from"../chunks/ToggleButton.96f3db0f.js";import{B as se,L as ue}from"../chunks/stores.ac482e23.js";function Y(r,l,n){const e=r.slice();return e[8]=l[n],e}function ce(r){return{c:m,l:m,m,p:m,i:m,o:m,d:m}}function fe(r){let l,n;return l=new ee({props:{initialState:r[11],id:"EnableToggleMute",titleText:"Enable Toggle Mute",callbackFn:r[3]}}),{c(){V(l.$$.fragment)},l(e){D(l.$$.fragment,e)},m(e,o){I(l,e,o),n=!0},p:m,i(e){n||(L(l.$$.fragment,e),n=!0)},o(e){U(l.$$.fragment,e),n=!1},d(e){O(l,e)}}}function me(r){let l,n;return l=new ee({props:{disabled:!0,initialState:!1,id:"EnableToggleMute",titleText:"Enable Toggle Mute"}}),{c(){V(l.$$.fragment)},l(e){D(l.$$.fragment,e)},m(e,o){I(l,e,o),n=!0},p:m,i(e){n||(L(l.$$.fragment,e),n=!0)},o(e){U(l.$$.fragment,e),n=!1},d(e){O(l,e)}}}function pe(r){return{c:m,l:m,m,p:m,d:m}}function he(r){let l,n=r[0],e=[];for(let o=0;o<n.length;o+=1)e[o]=Z(Y(r,n,o));return{c(){for(let o=0;o<e.length;o+=1)e[o].c();l=X()},l(o){for(let i=0;i<e.length;i+=1)e[i].l(o);l=X()},m(o,i){for(let a=0;a<e.length;a+=1)e[a].m(o,i);f(o,l,i)},p(o,i){if(i&1){n=o[0];let a;for(a=0;a<n.length;a+=1){const T=Y(o,n,a);e[a]?e[a].p(T,i):(e[a]=Z(T),e[a].c(),e[a].m(l.parentNode,l))}for(;a<e.length;a+=1)e[a].d(1);e.length=n.length}},d(o){ne(e,o),o&&u(l)}}}function Z(r){let l,n=r[8].toUpperCase()+"",e;return{c(){l=$("kbd"),e=x(n),this.h()},l(o){l=v(o,"KBD",{class:!0});var i=w(l);e=C(i,n),i.forEach(u),this.h()},h(){j(l,"class","px-1 before:content-['['] before:pr-2 after:content-[']'] after:pl-2")},m(o,i){f(o,l,i),q(l,e)},p(o,i){i&1&&n!==(n=o[8].toUpperCase()+"")&&ae(e,n)},d(o){o&&u(l)}}}function ge(r){let l,n;return{c(){l=$("kbd"),n=x("UNSET"),this.h()},l(e){l=v(e,"KBD",{class:!0});var o=w(l);n=C(o,"UNSET"),o.forEach(u),this.h()},h(){j(l,"class","px-2 before:content-['['] before:pr-2 after:content-[']'] after:pl-2")},m(e,o){f(e,l,o),q(l,n)},p:m,d(e){e&&u(l)}}}function de(r){let l,n,e,o,i,a,T,B,_,c,p,d,g,E,k,y,K,M,P,A;l=new re({});let h={ctx:r,current:null,token:null,hasCatch:!1,pending:me,then:fe,catch:ce,value:11,blocks:[,,,]};J(r[1](),h);let b={ctx:r,current:null,token:null,hasCatch:!1,pending:ge,then:he,catch:pe,value:7};return J(r[2](),b),P=new ie({props:{returnFunction:r[4]}}),{c(){V(l.$$.fragment),n=H(),e=$("p"),o=x(`By default, the only voice chat options are push-to-talk or voice activity; there is no option to\r
	mute/unmute you microphone via hotkey.`),i=H(),a=$("h2"),T=x("Toggle Mute Hotkey"),B=H(),_=$("p"),c=x("Enabling voice mute toggle allows you to toggle between muted/unmuted microphone in-game."),p=H(),h.block.c(),d=H(),g=$("p"),E=x("Currently the hotkey to toggle mute is set to:"),k=H(),y=$("div"),b.block.c(),K=H(),M=$("div"),V(P.$$.fragment),this.h()},l(t){D(l.$$.fragment,t),n=S(t),e=v(t,"P",{});var s=w(e);o=C(s,`By default, the only voice chat options are push-to-talk or voice activity; there is no option to\r
	mute/unmute you microphone via hotkey.`),s.forEach(u),i=S(t),a=v(t,"H2",{class:!0});var N=w(a);T=C(N,"Toggle Mute Hotkey"),N.forEach(u),B=S(t),_=v(t,"P",{class:!0});var R=w(_);c=C(R,"Enabling voice mute toggle allows you to toggle between muted/unmuted microphone in-game."),R.forEach(u),p=S(t),h.block.l(t),d=S(t),g=v(t,"P",{});var F=w(g);E=C(F,"Currently the hotkey to toggle mute is set to:"),F.forEach(u),k=S(t),y=v(t,"DIV",{class:!0});var z=w(y);b.block.l(z),z.forEach(u),K=S(t),M=v(t,"DIV",{class:!0});var G=w(M);D(P.$$.fragment,G),G.forEach(u),this.h()},h(){j(a,"class","mt-8 text-xl font-bold"),j(_,"class","mt-2"),j(y,"class","my-4 ml-1 flex flex-row flex-nowrap justify-center w-full text-lg gap-1"),j(M,"class","flex flex-row justify-center")},m(t,s){I(l,t,s),f(t,n,s),f(t,e,s),q(e,o),f(t,i,s),f(t,a,s),q(a,T),f(t,B,s),f(t,_,s),q(_,c),f(t,p,s),h.block.m(t,h.anchor=s),h.mount=()=>d.parentNode,h.anchor=d,f(t,d,s),f(t,g,s),q(g,E),f(t,k,s),f(t,y,s),b.block.m(y,b.anchor=null),b.mount=()=>y,b.anchor=null,f(t,K,s),f(t,M,s),I(P,M,null),A=!0},p(t,[s]){r=t,Q(h,r,s),Q(b,r,s)},i(t){A||(L(l.$$.fragment,t),L(h.block),L(P.$$.fragment,t),A=!0)},o(t){U(l.$$.fragment,t);for(let s=0;s<3;s+=1){const N=h.blocks[s];U(N)}U(P.$$.fragment,t),A=!1},d(t){O(l,t),t&&u(n),t&&u(e),t&&u(i),t&&u(a),t&&u(B),t&&u(_),t&&u(p),h.block.d(t),h.token=null,h=null,t&&u(d),t&&u(g),t&&u(k),t&&u(y),b.block.d(),b.token=null,b=null,t&&u(K),t&&u(M),O(P)}}}function be(r,l,n){let e,o;W(r,se,c=>n(5,e=c)),W(r,ue,c=>n(6,o=c));let i="UNSET",a=()=>new Promise(async(c,p)=>{if(o){let d=await Promise.all([fetch(`http://${e}/addedfunction/togglemute/isenabled`),fetch(`http://${e}/utility/getlocalsettings/enableToggleMute`)]),g=await Promise.all(d.map(E=>E.json()));c(g[0].enabled&&g[1].enableToggleMute)}else setTimeout(()=>{c(a())},200)});return[i,a,async()=>{let p=await(await fetch(`http://${e}/utility/getlocalsettings/toggleMuteHotkey`)).json();n(0,i=p.toggleMuteHotkey.substring(1,p.toggleMuteHotkey.length-1).split("]["))},async c=>{if(c){let p=await Promise.all([fetch(`http://${e}/utility/updatelocalsettings/enableToggleMute/true`,{method:"POST"}),fetch(`http://${e}/addedfunction/togglemute/enable`,{method:"POST"})]);await Promise.all(p.map(d=>d.json()));return}else{await(await fetch(`http://${e}/utility/updatelocalsettings/enableToggleMute/false`,{method:"POST"})).json();return}},async c=>{if(c.length>0){let p=c.map(E=>{let k=E.toLowerCase();return k==="escape"&&(k="esc"),k}),g=await(await fetch(`http://${e}/utility/updatelocalsettings/toggleMuteHotkey/[${p.join("][")}]`,{method:"POST"})).json();n(0,i=g.updatedVal.substring(1,g.updatedVal.length-1).split("]["))}}]}class we extends te{constructor(l){super(),le(this,l,be,de,oe,{})}}export{we as default};