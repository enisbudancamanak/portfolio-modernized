import{n as l,A as m,r as v,s as w,B as q}from"./scheduler.LRKy9K3q.js";const c=[];function z(e,i){return{subscribe:A(e,i).subscribe}}function A(e,i=l){let r;const n=new Set;function a(t){if(w(e,t)&&(e=t,r)){const o=!c.length;for(const s of n)s[1](),c.push(s,e);if(o){for(let s=0;s<c.length;s+=2)c[s][0](c[s+1]);c.length=0}}}function f(t){a(t(e))}function b(t,o=l){const s=[t,o];return n.add(s),n.size===1&&(r=i(a,f)||l),t(e),()=>{n.delete(s),n.size===0&&r&&(r(),r=null)}}return{set:a,update:f,subscribe:b}}function x(e,i,r){const n=!Array.isArray(e),a=n?[e]:e;if(!a.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const f=i.length<2;return z(r,(b,t)=>{let o=!1;const s=[];let d=0,p=l;const g=()=>{if(d)return;p();const u=i(n?s[0]:s,b,t);f?b(u):p=q(u)?u:l},h=a.map((u,_)=>m(u,y=>{s[_]=y,d&=~(1<<_),o&&g()},()=>{d|=1<<_}));return o=!0,g(),function(){v(h),p(),o=!1}})}const j=globalThis.__sveltekit_f0j52v?.base??"/portfolio-modernized",B=globalThis.__sveltekit_f0j52v?.assets??j;export{B as a,j as b,x as d,z as r,A as w};
