function m(){}const F=t=>t;function j(t,n){for(const e in n)t[e]=n[e];return t}function M(t){return!!t&&(typeof t=="object"||typeof t=="function")&&typeof t.then=="function"}function E(t){return t()}function S(){return Object.create(null)}function q(t){t.forEach(E)}function v(t){return typeof t=="function"}function A(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let l;function B(t,n){return t===n?!0:(l||(l=document.createElement("a")),l.href=n,t===l.href)}function G(t){return Object.keys(t).length===0}function x(t,...n){if(t==null){for(const o of n)o(void 0);return m}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function H(t){let n;return x(t,e=>n=e)(),n}function I(t,n,e){t.$$.on_destroy.push(x(n,e))}function J(t,n,e,o){if(t){const r=k(t,n,e,o);return t[0](r)}}function k(t,n,e,o){return t[1]&&o?j(e.ctx.slice(),t[1](o(n))):e.ctx}function P(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const f=[],d=Math.max(n.dirty.length,r.length);for(let u=0;u<d;u+=1)f[u]=n.dirty[u]|r[u];return f}return n.dirty|r}return n.dirty}function U(t,n,e,o,r,f){if(r){const d=k(n,e,o,f);t.p(d,r)}}function K(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let o=0;o<e;o++)n[o]=-1;return n}return-1}function L(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}function N(t,n){const e={};n=new Set(n);for(const o in t)!n.has(o)&&o[0]!=="$"&&(e[o]=t[o]);return e}function Q(t){return t&&v(t.destroy)?t.destroy:m}let _;function h(t){_=t}function a(){if(!_)throw new Error("Function called outside component initialization");return _}function R(t){a().$$.on_mount.push(t)}function T(t){a().$$.after_update.push(t)}function V(t){a().$$.on_destroy.push(t)}function W(t,n){return a().$$.context.set(t,n),n}function X(t){return a().$$.context.get(t)}const i=[],b=[];let s=[];const y=[],w=Promise.resolve();let g=!1;function C(){g||(g=!0,w.then(z))}function Y(){return C(),w}function O(t){s.push(t)}const p=new Set;let c=0;function z(){if(c!==0)return;const t=_;do{try{for(;c<i.length;){const n=i[c];c++,h(n),D(n.$$)}}catch(n){throw i.length=0,c=0,n}for(h(null),i.length=0,c=0;b.length;)b.pop()();for(let n=0;n<s.length;n+=1){const e=s[n];p.has(e)||(p.add(e),e())}s.length=0}while(i.length);for(;y.length;)y.pop()();g=!1,p.clear(),h(t)}function D(t){if(t.fragment!==null){t.update(),q(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(O)}}function Z(t){const n=[],e=[];s.forEach(o=>t.indexOf(o)===-1?n.push(o):e.push(o)),e.forEach(o=>o()),s=n}export{x as A,v as B,S as C,G as D,O as E,Z as F,_ as G,E as H,i as I,C as J,T as a,b,J as c,P as d,I as e,j as f,K as g,L as h,H as i,B as j,M as k,a as l,h as m,m as n,R as o,z as p,X as q,q as r,A as s,Y as t,U as u,W as v,V as w,N as x,Q as y,F as z};