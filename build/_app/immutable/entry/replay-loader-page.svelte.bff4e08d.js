import{S as Ee,i as $e,s as Ce,k as d,D as ie,a as R,r as k,l as p,m as f,E as he,h as o,c as L,u as E,p as i,b as C,F as s,n as D,U as ue,z as fe,A as de,B as pe,I as le,V as me,g as _e,d as ve,C as ye,G as be,e as ge,L as Re,v as we}from"../chunks/index.66236961.js";import{R as Le}from"../chunks/RedirectHome.4111473b.js";import{B as De,L as Te}from"../chunks/stores.ac482e23.js";function He(u){let e,l,t,r,n,a;return{c(){e=d("div"),l=ie("svg"),t=ie("path"),r=R(),n=d("div"),a=k("Refresh"),this.h()},l(m){e=p(m,"DIV",{});var v=f(e);l=he(v,"svg",{version:!0,xmlns:!0,"xmlns:xlink":!0,width:!0,height:!0,viewBox:!0,alt:!0});var y=f(l);t=he(y,"path",{fill:!0,d:!0}),f(t).forEach(o),y.forEach(o),r=L(v),n=p(v,"DIV",{class:!0});var c=f(n);a=E(c,"Refresh"),c.forEach(o),v.forEach(o),this.h()},h(){i(t,"fill","#ffffff"),i(t,"d","M89.1 202.6c7.7-21.8 20.2-42.3 37.8-59.8c62.5-62.5 163.8-62.5 226.3 0L370.3 160H320c-17.7 0-32 14.3-32 32s14.3 32 32 32H447.5c0 0 0 0 0 0h.4c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v51.2L398.4 97.6c-87.5-87.5-229.3-87.5-316.8 0C57.2 122 39.6 150.7 28.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5zM23 289.3c-5 1.5-9.8 4.2-13.7 8.2c-4 4-6.7 8.8-8.1 14c-.3 1.2-.6 2.5-.8 3.8c-.3 1.7-.4 3.4-.4 5.1V448c0 17.7 14.3 32 32 32s32-14.3 32-32V396.9l17.6 17.5 0 0c87.5 87.4 229.3 87.4 316.7 0c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.5 62.5-163.8 62.5-226.3 0l-.1-.1L109.6 352H160c17.7 0 32-14.3 32-32s-14.3-32-32-32H32.4c-1.6 0-3.2 .1-4.8 .3s-3.1 .5-4.6 1z"),i(l,"version","1.1"),i(l,"xmlns","http://www.w3.org/2000/svg"),i(l,"xmlns:xlink","http://www.w3.org/1999/xlink"),i(l,"width","1rem"),i(l,"height","1rem"),i(l,"viewBox","0 0 512 512"),i(l,"alt","Refresh Icon"),i(n,"class","sr-only")},m(m,v){C(m,e,v),s(e,l),s(l,t),s(e,r),s(e,n),s(n,a)},p:D,i:D,o:D,d(m){m&&o(e)}}}class Ne extends Ee{constructor(e){super(),$e(this,e,null,He,Ce,{})}}function xe(u,e,l){const t=u.slice();return t[8]=e[l],t}function Ie(u){let e,l,t,r;return{c(){e=d("div"),l=k("NO PATH FOUND "),t=d("br"),r=k(" Check client is connected."),this.h()},l(n){e=p(n,"DIV",{class:!0});var a=f(e);l=E(a,"NO PATH FOUND "),t=p(a,"BR",{}),r=E(a," Check client is connected."),a.forEach(o),this.h()},h(){i(e,"class","flex flex-row flex-nowrap justify-center text-center")},m(n,a){C(n,e,a),s(e,l),s(e,t),s(e,r)},p:D,d(n){n&&o(e)}}}function Oe(u){let e,l=u[7]+"",t;return{c(){e=d("code"),t=k(l),this.h()},l(r){e=p(r,"CODE",{class:!0});var n=f(e);t=E(n,l),n.forEach(o),this.h()},h(){i(e,"class","flex flex-row flex-nowrap justify-center text-center")},m(r,n){C(r,e,n),s(e,t)},p:D,d(r){r&&o(e)}}}function Se(u){let e,l;return{c(){e=d("code"),l=k("C://path/to/directory"),this.h()},l(t){e=p(t,"CODE",{class:!0});var r=f(e);l=E(r,"C://path/to/directory"),r.forEach(o),this.h()},h(){i(e,"class","flex flex-row flex-nowrap justify-center text-center")},m(t,r){C(t,e,r),s(e,l)},p:D,d(t){t&&o(e)}}}function Ae(u){return{c:D,l:D,m:D,p:D,d:D}}function Fe(u){let e,l=u[0],t=[];for(let r=0;r<l.length;r+=1)t[r]=ke(xe(u,l,r));return{c(){for(let r=0;r<t.length;r+=1)t[r].c();e=ge()},l(r){for(let n=0;n<t.length;n+=1)t[n].l(r);e=ge()},m(r,n){for(let a=0;a<t.length;a+=1)t[a].m(r,n);C(r,e,n)},p(r,n){if(n&9){l=r[0];let a;for(a=0;a<l.length;a+=1){const m=xe(r,l,a);t[a]?t[a].p(m,n):(t[a]=ke(m),t[a].c(),t[a].m(e.parentNode,e))}for(;a<t.length;a+=1)t[a].d(1);t.length=l.length}},d(r){Re(t,r),r&&o(e)}}}function ke(u){let e,l,t,r=u[8][0]+"",n,a,m,v=u[8][1]+"",y,c,w,_,x;return{c(){e=d("li"),l=d("button"),t=d("h3"),n=k(r),a=R(),m=d("h3"),y=k(v),w=R(),this.h()},l(b){e=p(b,"LI",{class:!0});var g=f(e);l=p(g,"BUTTON",{id:!0,class:!0});var O=f(l);t=p(O,"H3",{class:!0});var N=f(t);n=E(N,r),N.forEach(o),a=L(O),m=p(O,"H3",{class:!0});var P=f(m);y=E(P,v),P.forEach(o),O.forEach(o),w=L(g),g.forEach(o),this.h()},h(){i(t,"class","pointer-events-none"),i(m,"class","hidden sm:block pointer-events-none"),i(l,"id",c=u[8][0]),i(l,"class","w-full grid grid-cols-2 sm:grid-cols-2 text-left hover:bg-[rgba(94,76,114,0.7)] hover:rounded px-2"),i(e,"class","w-full")},m(b,g){C(b,e,g),s(e,l),s(l,t),s(t,n),s(l,a),s(l,m),s(m,y),s(e,w),_||(x=le(l,"click",u[3]),_=!0)},p(b,g){g&1&&r!==(r=b[8][0]+"")&&we(n,r),g&1&&v!==(v=b[8][1]+"")&&we(y,v),g&1&&c!==(c=b[8][0])&&i(l,"id",c)},d(b){b&&o(e),_=!1,x()}}}function Pe(u){let e,l,t,r,n,a,m,v,y;return{c(){e=d("li"),l=d("button"),t=d("h3"),r=k("Null"),n=R(),a=d("h3"),m=k("null"),this.h()},l(c){e=p(c,"LI",{class:!0});var w=f(e);l=p(w,"BUTTON",{class:!0});var _=f(l);t=p(_,"H3",{});var x=f(t);r=E(x,"Null"),x.forEach(o),n=L(_),a=p(_,"H3",{class:!0});var b=f(a);m=E(b,"null"),b.forEach(o),_.forEach(o),w.forEach(o),this.h()},h(){i(a,"class","hidden sm:block"),i(l,"class","w-full grid grid-cols-2 sm:grid-cols-2 text-left hover:bg-[rgba(94,76,114,0.7)] hover:rounded px-2"),i(e,"class","w-full")},m(c,w){C(c,e,w),s(e,l),s(l,t),s(t,r),s(l,n),s(l,a),s(a,m),v||(y=le(l,"click",null),v=!0)},p:D,d(c){c&&o(e),v=!1,y()}}}function Be(u){let e,l,t,r,n,a,m,v,y,c,w,_,x,b,g,O,N,P,I,S,j,Y,K,A,B,Q,W,U,F,X,V,Z,re;e=new Le({});let T={ctx:u,current:null,token:null,hasCatch:!0,pending:Se,then:Oe,catch:Ie,value:7,error:11};ue(u[1](),T),F=new Ne({});let H={ctx:u,current:null,token:null,hasCatch:!0,pending:Pe,then:Fe,catch:Ae,value:7,error:11};return ue(u[2](),H),{c(){fe(e.$$.fragment),l=R(),t=d("p"),r=k("Easily load replay files by copying them to your replays folder."),n=R(),a=d("h2"),m=k("Load Replay File"),v=R(),y=d("ol"),c=d("li"),w=k(`Copy and paste your replay to the replay directory. The replay directory can be changed in the\r
		client (Settings -> Replays -> Replays Location).\r
		`),_=d("span"),x=d("span"),b=k("Current Replay Directory:"),g=R(),T.block.c(),O=R(),N=d("li"),P=k(`Select a file to watch:\r
		`),I=d("ul"),S=d("li"),j=d("h3"),Y=k("File Name"),K=R(),A=d("div"),B=d("h3"),Q=k("Downloaded On"),W=R(),U=d("button"),fe(F.$$.fragment),X=R(),H.block.c(),this.h()},l(h){de(e.$$.fragment,h),l=L(h),t=p(h,"P",{});var $=f(t);r=E($,"Easily load replay files by copying them to your replays folder."),$.forEach(o),n=L(h),a=p(h,"H2",{class:!0});var ae=f(a);m=E(ae,"Load Replay File"),ae.forEach(o),v=L(h),y=p(h,"OL",{class:!0});var q=f(y);c=p(q,"LI",{class:!0});var ee=f(c);w=E(ee,`Copy and paste your replay to the replay directory. The replay directory can be changed in the\r
		client (Settings -> Replays -> Replays Location).\r
		`),_=p(ee,"SPAN",{class:!0});var M=f(_);x=p(M,"SPAN",{class:!0});var se=f(x);b=E(se,"Current Replay Directory:"),se.forEach(o),g=L(M),T.block.l(M),M.forEach(o),ee.forEach(o),O=L(q),N=p(q,"LI",{class:!0});var te=f(N);P=E(te,`Select a file to watch:\r
		`),I=p(te,"UL",{class:!0});var z=f(I);S=p(z,"LI",{class:!0});var J=f(S);j=p(J,"H3",{});var ne=f(j);Y=E(ne,"File Name"),ne.forEach(o),K=L(J),A=p(J,"DIV",{class:!0});var G=f(A);B=p(G,"H3",{class:!0});var oe=f(B);Q=E(oe,"Downloaded On"),oe.forEach(o),W=L(G),U=p(G,"BUTTON",{});var ce=f(U);de(F.$$.fragment,ce),ce.forEach(o),G.forEach(o),J.forEach(o),X=L(z),H.block.l(z),z.forEach(o),te.forEach(o),q.forEach(o),this.h()},h(){i(a,"class","text-xl font-bold mb-4 mt-8"),i(x,"class","pr-3 underline underline-offset-4"),i(_,"class","flex flex-col gap-1 justify-center mt-4 text-lg flex-wrap items-baseline"),i(c,"class","mt-8 pl-2"),i(B,"class","hidden sm:block"),i(A,"class","flex flex-row flex-nowrap justify-between"),i(S,"class","py-1 w-full grid grid-cols-2 sm:grid-cols-2 mb-1 pb-1 border-b border-yellow-500 px-2 sticky top-0 bg-[rgba(11,0,22,1)]"),i(I,"class","mt-4 bg-[rgba(11,0,22,1)] border border-yellow-900 px-4 flex flex-col flex-nowrap gap-1 rounded max-h-96 overflow-auto"),i(N,"class","mt-8 pl-2"),i(y,"class","sm:ml-10 list-decimal")},m(h,$){pe(e,h,$),C(h,l,$),C(h,t,$),s(t,r),C(h,n,$),C(h,a,$),s(a,m),C(h,v,$),C(h,y,$),s(y,c),s(c,w),s(c,_),s(_,x),s(x,b),s(_,g),T.block.m(_,T.anchor=null),T.mount=()=>_,T.anchor=null,s(y,O),s(y,N),s(N,P),s(N,I),s(I,S),s(S,j),s(j,Y),s(S,K),s(S,A),s(A,B),s(B,Q),s(A,W),s(A,U),pe(F,U,null),s(I,X),H.block.m(I,H.anchor=null),H.mount=()=>I,H.anchor=null,V=!0,Z||(re=le(U,"click",u[4]),Z=!0)},p(h,[$]){u=h,me(T,u,$),me(H,u,$)},i(h){V||(_e(e.$$.fragment,h),_e(F.$$.fragment,h),V=!0)},o(h){ve(e.$$.fragment,h),ve(F.$$.fragment,h),V=!1},d(h){ye(e,h),h&&o(l),h&&o(t),h&&o(n),h&&o(a),h&&o(v),h&&o(y),T.block.d(),T.token=null,T=null,ye(F),H.block.d(),H.token=null,H=null,Z=!1,re()}}}function Ue(u,e,l){let t,r;be(u,De,c=>l(5,t=c)),be(u,Te,c=>l(6,r=c));let n=[],a=async()=>new Promise(async(c,w)=>{if(r){let _=await fetch(`http://${t}/utility/getroflpath`);if(_.status<=200&&_.status<300){let x=await _.json();c(x.path)}else w()}else setTimeout(()=>{c(a())},200)}),m=async()=>{const c=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];let x=(await(await fetch(`http://${t}/addedfunction/replayloader/getallreplays`)).json()).data.sort((b,g)=>g.modifiedTime-b.modifiedTime).map(b=>{let g=new Date(b.modifiedTime);return[b.filename,`${g.getDate()} ${c[g.getMonth()]}, ${g.getFullYear()}`]});l(0,n=x)};return[n,a,m,async c=>{await(await fetch(`http://${t}/addedfunction/replayloader/playreplay/${c.target.id}`,{method:"POST"})).json()},c=>{m()}]}class Me extends Ee{constructor(e){super(),$e(this,e,Ue,Be,Ce,{})}}export{Me as default};