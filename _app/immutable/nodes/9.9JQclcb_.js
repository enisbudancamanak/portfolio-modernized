import{s as fe,j as Z,n as ee,x as _e}from"../chunks/scheduler.J9bTUkkY.js";import{S as pe,i as ve,g as m,s as A,r as ge,m as X,x as be,h as f,f as l,c as B,j as p,u as ke,n as Y,k as _,l as we,z as c,a as S,v as ye,F as Ee,d as Ie,t as $e,w as De,G as ie,e as le}from"../chunks/index.FsTd3-io.js";import{e as O}from"../chunks/each.-oqiv04n.js";import{g as xe}from"../chunks/navigation.nPJdURY7.js";import{b as U}from"../chunks/paths.ZPt0VKws.js";import{s as Ve}from"../chunks/sveltekit-view-transition.Ciu0QSyd.js";import{A as je}from"../chunks/arrow-back-ios-new-rounded.KQ_QAfm3.js";function ce(i,e,r){const n=i.slice();return n[4]=e[r],n[6]=r,n}function de(i,e,r){const n=i.slice();return n[7]=e[r],n}function ue(i){let e,r=i[7]+"",n;return{c(){e=m("div"),n=X(r),this.h()},l(s){e=f(s,"DIV",{class:!0});var o=p(e);n=Y(o,r),o.forEach(l),this.h()},h(){_(e,"class","badge")},m(s,o){S(s,e,o),c(e,n)},p:ee,d(s){s&&l(e)}}}function Te(i){let e,r;return{c(){e=m("img"),this.h()},l(n){e=f(n,"IMG",{src:!0,alt:!0}),this.h()},h(){Z(e.src,r=U+`/images/projects/${P}/${i[6]+1}.png`)||_(e,"src",r),_(e,"alt","")},m(n,s){S(n,e,s)},p:ee,d(n){n&&l(e)}}}function Ae(i){let e,r,n,s,o;return{c(){e=m("div"),r=m("img"),this.h()},l(d){e=f(d,"DIV",{});var v=p(e);r=f(v,"IMG",{src:!0,alt:!0}),v.forEach(l),this.h()},h(){Z(r.src,n=U+`/images/projects/${P}/${i[6]+1}.png`)||_(r,"src",n),_(r,"alt","")},m(d,v){S(d,e,v),c(e,r),s||(o=_e(i[0].call(null,r,P)),s=!0)},p:ee,d(d){d&&l(e),s=!1,o()}}}function he(i){let e;function r(o,d){return o[6]===0?Ae:Te}let s=r(i)(i);return{c(){s.c(),e=le()},l(o){s.l(o),e=le()},m(o,d){s.m(o,d),S(o,e,d)},p(o,d){s.p(o,d)},d(o){o&&l(e),s.d(o)}}}function Be(i){let e,r,n,s,o,d,v,k,E,I,F,H,K,w,$,L,V,J,Q,b,M,D,te,q,R,ae;document.title=e=G+" | Enis Budancamanak",I=new je({props:{style:"width: 2rem; height: 2rem;"}});let j=O(i[1]),u=[];for(let a=0;a<j.length;a+=1)u[a]=ue(de(i,j,a));let T=O(Array(me)),h=[];for(let a=0;a<T.length;a+=1)h[a]=he(ce(i,T,a));return{c(){r=m("meta"),n=A(),s=m("div"),o=m("div"),d=m("div"),v=m("div"),k=m("h1"),E=m("button"),ge(I.$$.fragment),F=A(),H=X(G),K=A(),w=m("div"),$=m("div");for(let a=0;a<u.length;a+=1)u[a].c();L=A(),V=m("p"),J=X(i[2]),Q=A(),b=m("div");for(let a=0;a<h.length;a+=1)h[a].c();M=A(),D=m("video"),this.h()},l(a){const g=be("svelte-xw0q1u",document.head);r=f(g,"META",{name:!0,content:!0}),g.forEach(l),n=B(a),s=f(a,"DIV",{class:!0});var t=p(s);o=f(t,"DIV",{class:!0});var y=p(o);d=f(y,"DIV",{});var C=p(d);v=f(C,"DIV",{class:!0});var re=p(v);k=f(re,"H1",{style:!0});var W=p(k);E=f(W,"BUTTON",{class:!0});var se=p(E);ke(I.$$.fragment,se),se.forEach(l),F=B(W),H=Y(W,G),W.forEach(l),re.forEach(l),K=B(C),w=f(C,"DIV",{class:!0});var z=p(w);$=f(z,"DIV",{class:!0});var ne=p($);for(let x=0;x<u.length;x+=1)u[x].l(ne);ne.forEach(l),L=B(z),V=f(z,"P",{class:!0});var oe=p(V);J=Y(oe,i[2]),oe.forEach(l),z.forEach(l),C.forEach(l),y.forEach(l),Q=B(t),b=f(t,"DIV",{class:!0});var N=p(b);for(let x=0;x<h.length;x+=1)h[x].l(N);M=B(N),D=f(N,"VIDEO",{src:!0}),p(D).forEach(l),N.forEach(l),t.forEach(l),this.h()},h(){_(r,"name","description"),_(r,"content",G+" | Enis Budancamanak"),_(E,"class","backArrow"),we(k,"color","#9e198b",1),_(v,"class","header"),_($,"class","badges"),_(V,"class","project-description"),_(w,"class","small-margin"),_(o,"class","textBase"),D.controls=!0,Z(D.src,te=U+`/images/projects/${P}/video.mp4`)||_(D,"src",te),_(b,"class","imagesBase small-margin"),_(s,"class","projectsDetailWrapper")},m(a,g){c(document.head,r),S(a,n,g),S(a,s,g),c(s,o),c(o,d),c(d,v),c(v,k),c(k,E),ye(I,E,null),c(k,F),c(k,H),c(d,K),c(d,w),c(w,$);for(let t=0;t<u.length;t+=1)u[t]&&u[t].m($,null);c(w,L),c(w,V),c(V,J),c(s,Q),c(s,b);for(let t=0;t<h.length;t+=1)h[t]&&h[t].m(b,null);c(b,M),c(b,D),q=!0,R||(ae=Ee(E,"click",i[3]),R=!0)},p(a,[g]){if((!q||g&0)&&e!==(e=G+" | Enis Budancamanak")&&(document.title=e),g&2){j=O(a[1]);let t;for(t=0;t<j.length;t+=1){const y=de(a,j,t);u[t]?u[t].p(y,g):(u[t]=ue(y),u[t].c(),u[t].m($,null))}for(;t<u.length;t+=1)u[t].d(1);u.length=j.length}if(g&0){T=O(Array(me));let t;for(t=0;t<T.length;t+=1){const y=ce(a,T,t);h[t]?h[t].p(y,g):(h[t]=he(y),h[t].c(),h[t].m(b,M))}for(;t<h.length;t+=1)h[t].d(1);h.length=T.length}},i(a){q||(Ie(I.$$.fragment,a),q=!0)},o(a){$e(I.$$.fragment,a),q=!1},d(a){a&&(l(n),l(s)),l(r),De(I),ie(u,a),ie(h,a),R=!1,ae()}}}const G="Car Showcase",P="CarShowcase",me=3;function Se(i){const{transition:e}=Ve();return[e,["Experimental","WebGL","SvelteKit"],"During International Week (University), we were given a unique opportunity to unleash our creativity. My project for the week was to create a car showcase. The professor provided me with a car model to use as a starting point. The resulting product now allows you to immerse yourself in the fascinating 3D world of the car and create custom configurations. The showcase provides an immersive experience that allows viewers to explore and experience the car in different variations. Immerse yourself in this innovative 3D world and experience the diversity and customization of a car in an unprecedented dimension.",()=>xe(U+"/projects")]}class Oe extends pe{constructor(e){super(),ve(this,e,Se,Be,fe,{})}}export{Oe as component};