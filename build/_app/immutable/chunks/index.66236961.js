function v(){}const V=t=>t;function ht(t,e){for(const n in e)t[n]=e[n];return t}function mt(t){return!!t&&(typeof t=="object"||typeof t=="function")&&typeof t.then=="function"}function X(t){return t()}function K(){return Object.create(null)}function N(t){t.forEach(X)}function R(t){return typeof t=="function"}function Lt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let M;function Ft(t,e){return M||(M=document.createElement("a")),M.href=e,t===M.href}function pt(t){return Object.keys(t).length===0}function yt(t,...e){if(t==null)return v;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function It(t,e,n){t.$$.on_destroy.push(yt(e,n))}function Wt(t,e,n,r){if(t){const i=Y(t,e,n,r);return t[0](i)}}function Y(t,e,n,r){return t[1]&&r?ht(n.ctx.slice(),t[1](r(e))):n.ctx}function Gt(t,e,n,r){if(t[2]&&r){const i=t[2](r(n));if(e.dirty===void 0)return i;if(typeof i=="object"){const u=[],c=Math.max(e.dirty.length,i.length);for(let s=0;s<c;s+=1)u[s]=e.dirty[s]|i[s];return u}return e.dirty|i}return e.dirty}function Jt(t,e,n,r,i,u){if(i){const c=Y(e,n,r,u);t.p(c,i)}}function Kt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}function Qt(t,e,n){return t.set(n),e}const Z=typeof window<"u";let tt=Z?()=>window.performance.now():()=>Date.now(),I=Z?t=>requestAnimationFrame(t):v;const k=new Set;function et(t){k.forEach(e=>{e.c(t)||(k.delete(e),e.f())}),k.size!==0&&I(et)}function nt(t){let e;return k.size===0&&I(et),{promise:new Promise(n=>{k.add(e={c:t,f:n})}),abort(){k.delete(e)}}}let z=!1;function gt(){z=!0}function bt(){z=!1}function xt(t,e,n,r){for(;t<e;){const i=t+(e-t>>1);n(i)<=r?t=i+1:e=i}return t}function $t(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let o=0;o<e.length;o++){const f=e[o];f.claim_order!==void 0&&l.push(f)}e=l}const n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let i=0;for(let l=0;l<e.length;l++){const o=e[l].claim_order,f=(i>0&&e[n[i]].claim_order<=o?i+1:xt(1,i,d=>e[n[d]].claim_order,o))-1;r[l]=n[f]+1;const a=f+1;n[a]=l,i=Math.max(a,i)}const u=[],c=[];let s=e.length-1;for(let l=n[i]+1;l!=0;l=r[l-1]){for(u.push(e[l-1]);s>=l;s--)c.push(e[s]);s--}for(;s>=0;s--)c.push(e[s]);u.reverse(),c.sort((l,o)=>l.claim_order-o.claim_order);for(let l=0,o=0;l<c.length;l++){for(;o<u.length&&c[l].claim_order>=u[o].claim_order;)o++;const f=o<u.length?u[o]:null;t.insertBefore(c[l],f)}}function vt(t,e){t.appendChild(e)}function rt(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function wt(t){const e=st("style");return Et(rt(t),e),e.sheet}function Et(t,e){return vt(t.head||t,e),e.sheet}function kt(t,e){if(z){for($t(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Ut(t,e,n){z&&!n?kt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function it(t){t.parentNode&&t.parentNode.removeChild(t)}function Vt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function st(t){return document.createElement(t)}function Nt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function W(t){return document.createTextNode(t)}function Xt(){return W(" ")}function Yt(){return W("")}function Zt(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function te(t){return function(e){return e.preventDefault(),t.call(this,e)}}function ee(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function ne(t){return t===""?null:+t}function At(t){return Array.from(t.childNodes)}function St(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function ct(t,e,n,r,i=!1){St(t);const u=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const s=t[c];if(e(s)){const l=n(s);return l===void 0?t.splice(c,1):t[c]=l,i||(t.claim_info.last_index=c),s}}for(let c=t.claim_info.last_index-1;c>=0;c--){const s=t[c];if(e(s)){const l=n(s);return l===void 0?t.splice(c,1):t[c]=l,i?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,s}}return r()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function lt(t,e,n,r){return ct(t,i=>i.nodeName===e,i=>{const u=[];for(let c=0;c<i.attributes.length;c++){const s=i.attributes[c];n[s.name]||u.push(s.name)}u.forEach(c=>i.removeAttribute(c))},()=>r(e))}function re(t,e,n){return lt(t,e,n,st)}function ie(t,e,n){return lt(t,e,n,Nt)}function Ct(t,e){return ct(t,n=>n.nodeType===3,n=>{const r=""+e;if(n.data.startsWith(r)){if(n.data.length!==r.length)return n.splitText(r.length)}else n.data=r},()=>W(e),!0)}function se(t){return Ct(t," ")}function ce(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function le(t,e){t.value=e??""}function ue(t,e,n,r){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}function oe(t,e){for(let n=0;n<t.options.length;n+=1){const r=t.options[n];if(r.__value===e){r.selected=!0;return}}t.selectedIndex=-1}function ae(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}function jt(t,e,{bubbles:n=!1,cancelable:r=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,r,e),i}function fe(t,e){const n=[];let r=0;for(const i of e.childNodes)if(i.nodeType===8){const u=i.textContent.trim();u===`HEAD_${t}_END`?(r-=1,n.push(i)):u===`HEAD_${t}_START`&&(r+=1,n.push(i))}else r>0&&n.push(i);return n}function _e(t,e){return new t(e)}const O=new Map;let P=0;function Dt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Mt(t,e){const n={stylesheet:wt(e),rules:{}};return O.set(t,n),n}function H(t,e,n,r,i,u,c,s=0){const l=16.666/r;let o=`{
`;for(let p=0;p<=1;p+=l){const y=e+(n-e)*u(p);o+=p*100+`%{${c(y,1-y)}}
`}const f=o+`100% {${c(n,1-n)}}
}`,a=`__svelte_${Dt(f)}_${s}`,d=rt(t),{stylesheet:_,rules:h}=O.get(d)||Mt(d,t);h[a]||(h[a]=!0,_.insertRule(`@keyframes ${a} ${f}`,_.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?`${m}, `:""}${a} ${r}ms linear ${i}ms 1 both`,P+=1,a}function L(t,e){const n=(t.style.animation||"").split(", "),r=n.filter(e?u=>u.indexOf(e)<0:u=>u.indexOf("__svelte")===-1),i=n.length-r.length;i&&(t.style.animation=r.join(", "),P-=i,P||Tt())}function Tt(){I(()=>{P||(O.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&it(e)}),O.clear())})}let j;function g(t){j=t}function G(){if(!j)throw new Error("Function called outside component initialization");return j}function de(t){G().$$.on_mount.push(t)}function he(t){G().$$.after_update.push(t)}const E=[],Q=[],T=[],U=[],ut=Promise.resolve();let F=!1;function ot(){F||(F=!0,ut.then(J))}function me(){return ot(),ut}function D(t){T.push(t)}const B=new Set;let w=0;function J(){if(w!==0)return;const t=j;do{try{for(;w<E.length;){const e=E[w];w++,g(e),qt(e.$$)}}catch(e){throw E.length=0,w=0,e}for(g(null),E.length=0,w=0;Q.length;)Q.pop()();for(let e=0;e<T.length;e+=1){const n=T[e];B.has(n)||(B.add(n),n())}T.length=0}while(E.length);for(;U.length;)U.pop()();F=!1,B.clear(),g(t)}function qt(t){if(t.fragment!==null){t.update(),N(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(D)}}let S;function at(){return S||(S=Promise.resolve(),S.then(()=>{S=null})),S}function C(t,e,n){t.dispatchEvent(jt(`${e?"intro":"outro"}${n}`))}const q=new Set;let b;function Ot(){b={r:0,c:[],p:b}}function Pt(){b.r||N(b.c),b=b.p}function ft(t,e){t&&t.i&&(q.delete(t),t.i(e))}function Rt(t,e,n,r){if(t&&t.o){if(q.has(t))return;q.add(t),b.c.push(()=>{q.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}const _t={duration:0};function pe(t,e,n){const r={direction:"in"};let i=e(t,n,r),u=!1,c,s,l=0;function o(){c&&L(t,c)}function f(){const{delay:d=0,duration:_=300,easing:h=V,tick:m=v,css:p}=i||_t;p&&(c=H(t,0,1,_,d,h,p,l++)),m(0,1);const y=tt()+d,A=y+_;s&&s.abort(),u=!0,D(()=>C(t,!0,"start")),s=nt(x=>{if(u){if(x>=A)return m(1,0),C(t,!0,"end"),o(),u=!1;if(x>=y){const $=h((x-y)/_);m($,1-$)}}return u})}let a=!1;return{start(){a||(a=!0,L(t),R(i)?(i=i(r),at().then(f)):f())},invalidate(){a=!1},end(){u&&(o(),u=!1)}}}function ye(t,e,n,r){const i={direction:"both"};let u=e(t,n,i),c=r?0:1,s=null,l=null,o=null;function f(){o&&L(t,o)}function a(_,h){const m=_.b-c;return h*=Math.abs(m),{a:c,b:_.b,d:m,duration:h,start:_.start,end:_.start+h,group:_.group}}function d(_){const{delay:h=0,duration:m=300,easing:p=V,tick:y=v,css:A}=u||_t,x={start:tt()+h,b:_};_||(x.group=b,b.r+=1),s||l?l=x:(A&&(f(),o=H(t,c,_,m,h,p,A)),_&&y(0,1),s=a(x,m),D(()=>C(t,_,"start")),nt($=>{if(l&&$>l.start&&(s=a(l,m),l=null,C(t,s.b,"start"),A&&(f(),o=H(t,c,s.b,s.duration,0,p,u.css))),s){if($>=s.end)y(c=s.b,1-c),C(t,s.b,"end"),l||(s.b?f():--s.group.r||N(s.group.c)),s=null;else if($>=s.start){const dt=$-s.start;c=s.a+s.d*p(dt/s.duration),y(c,1-c)}}return!!(s||l)}))}return{run(_){R(u)?at().then(()=>{u=u(i),d(_)}):d(_)},end(){f(),s=l=null}}}function ge(t,e){const n=e.token={};function r(i,u,c,s){if(e.token!==n)return;e.resolved=s;let l=e.ctx;c!==void 0&&(l=l.slice(),l[c]=s);const o=i&&(e.current=i)(l);let f=!1;e.block&&(e.blocks?e.blocks.forEach((a,d)=>{d!==u&&a&&(Ot(),Rt(a,1,1,()=>{e.blocks[d]===a&&(e.blocks[d]=null)}),Pt())}):e.block.d(1),o.c(),ft(o,1),o.m(e.mount(),e.anchor),f=!0),e.block=o,e.blocks&&(e.blocks[u]=o),f&&J()}if(mt(t)){const i=G();if(t.then(u=>{g(i),r(e.then,1,e.value,u),g(null)},u=>{if(g(i),r(e.catch,2,e.error,u),g(null),!e.hasCatch)throw u}),e.current!==e.pending)return r(e.pending,0),!0}else{if(e.current!==e.then)return r(e.then,1,e.value,t),!0;e.resolved=t}}function be(t,e,n){const r=e.slice(),{resolved:i}=t;t.current===t.then&&(r[t.value]=i),t.current===t.catch&&(r[t.error]=i),t.block.p(r,n)}function xe(t){t&&t.c()}function $e(t,e){t&&t.l(e)}function zt(t,e,n,r){const{fragment:i,after_update:u}=t.$$;i&&i.m(e,n),r||D(()=>{const c=t.$$.on_mount.map(X).filter(R);t.$$.on_destroy?t.$$.on_destroy.push(...c):N(c),t.$$.on_mount=[]}),u.forEach(D)}function Bt(t,e){const n=t.$$;n.fragment!==null&&(N(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ht(t,e){t.$$.dirty[0]===-1&&(E.push(t),ot(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ve(t,e,n,r,i,u,c,s=[-1]){const l=j;g(t);const o=t.$$={fragment:null,ctx:[],props:u,update:v,not_equal:i,bound:K(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:K(),dirty:s,skip_bound:!1,root:e.target||l.$$.root};c&&c(o.root);let f=!1;if(o.ctx=n?n(t,e.props||{},(a,d,..._)=>{const h=_.length?_[0]:d;return o.ctx&&i(o.ctx[a],o.ctx[a]=h)&&(!o.skip_bound&&o.bound[a]&&o.bound[a](h),f&&Ht(t,a)),d}):[],o.update(),f=!0,N(o.before_update),o.fragment=r?r(o.ctx):!1,e.target){if(e.hydrate){gt();const a=At(e.target);o.fragment&&o.fragment.l(a),a.forEach(it)}else o.fragment&&o.fragment.c();e.intro&&ft(t.$$.fragment),zt(t,e.target,e.anchor,e.customElement),bt(),J()}g(l)}class we{$destroy(){Bt(this,1),this.$destroy=v}$on(e,n){if(!R(n))return v;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const i=r.indexOf(n);i!==-1&&r.splice(i,1)}}$set(e){this.$$set&&!pt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{oe as $,$e as A,zt as B,Bt as C,Nt as D,ie as E,kt as F,It as G,Qt as H,Zt as I,D as J,ye as K,Vt as L,pe as M,Wt as N,Jt as O,Kt as P,Gt as Q,fe as R,we as S,Ft as T,ge as U,be as V,R as W,N as X,le as Y,te as Z,ne as _,Xt as a,ae as a0,Ut as b,se as c,Rt as d,Yt as e,Pt as f,ft as g,it as h,ve as i,he as j,st as k,re as l,At as m,v as n,de as o,ee as p,ue as q,W as r,Lt as s,me as t,Ct as u,ce as v,Ot as w,Q as x,_e as y,xe as z};