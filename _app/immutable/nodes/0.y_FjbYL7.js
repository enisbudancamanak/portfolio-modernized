import{s as x,n as U,o as ee,c as ae,u as le,g as re,d as ne,e as oe}from"../chunks/scheduler.J9bTUkkY.js";import{S as te,i as se,H as ie,e as J,x as ce,y as ue,f as n,z as m,r as de,s as k,g as h,u as me,c as y,h as p,j as S,A as j,k as _,B as M,v as fe,a as T,d as Q,t as R,w as ve}from"../chunks/index.FsTd3-io.js";import{d as he,s as Z,a as pe,l as _e}from"../chunks/mode.qAUdP_uQ.js";import{g as ge}from"../chunks/globals.0cDDIVm6.js";import{p as Me}from"../chunks/stores.pkBAZy4k.js";import{b as A}from"../chunks/paths.ZPt0VKws.js";import{s as Le}from"../chunks/sveltekit-view-transition.Ciu0QSyd.js";const be=!0,qe=Object.freeze(Object.defineProperty({__proto__:null,prerender:be},Symbol.toStringTag,{value:"Module"})),{document:B}=ge;function Ee(a){let t,i='<script nonce="%sveltekit.nonce%">('+a[0]+")();<\/script>",r;return{c(){t=new ie(!1),r=J(),this.h()},l(c){const u=ce("svelte-184nin2",B.head);t=ue(u,!1),r=J(),u.forEach(n),this.h()},h(){t.a=r},m(c,u){t.m(i,B.head),m(B.head,r)},p:U,i:U,o:U,d(c){c&&t.d(),n(r)}}}function Ie(){const a=document.documentElement,t=localStorage.getItem("mode")||"<DEFAULT_MODE>",i=t==="light"||t==="system"&&window.matchMedia("(prefers-color-scheme: light)").matches;a.classList[i?"remove":"add"]("dark"),a.style.colorScheme=i?"light":"dark",localStorage.setItem("mode",t)}function ze(a,t,i){let{track:r=!0}=t,{defaultMode:c="system"}=t;ee(()=>{const l=he.subscribe(()=>{});return Z.tracking(r),Z.query(),pe(localStorage.getItem(_e)||c),()=>{l()}});const u=Ie.toString().replace("<DEFAULT_MODE>",c);return a.$$set=l=>{"track"in l&&i(1,r=l.track),"defaultMode"in l&&i(2,c=l.defaultMode)},[u,r,c]}class $e extends te{constructor(t){super(),se(this,t,ze,Ee,x,{track:1,defaultMode:2})}}function ke(a){let t,i,r,c,u,l,f,D,o,z,H,v,L,F=`<a href="${`${A}/`}" class="link svelte-zf1am3">Home</a>`,q,b,N=`<a href="${`${A}/projects`}" class="link svelte-zf1am3">Projects</a>`,C,E,X=`<a href="${`${A}/brand`}" class="link svelte-zf1am3">Branding</a>`,V,I,Y=`<a href="${`${A}/contact`}" class="link svelte-zf1am3">Contact</a>`,O,w,g;t=new $e({});const P=a[2].default,d=ae(P,a,a[1],null);return{c(){de(t.$$.fragment),i=k(),r=h("div"),c=k(),u=h("div"),l=k(),f=h("div"),D=k(),o=h("div"),z=h("aside"),H=h("nav"),v=h("ul"),L=h("li"),L.innerHTML=F,q=k(),b=h("li"),b.innerHTML=N,C=k(),E=h("li"),E.innerHTML=X,V=k(),I=h("li"),I.innerHTML=Y,O=k(),w=h("main"),d&&d.c(),this.h()},l(e){me(t.$$.fragment,e),i=y(e),r=p(e,"DIV",{class:!0}),S(r).forEach(n),c=y(e),u=p(e,"DIV",{class:!0}),S(u).forEach(n),l=y(e),f=p(e,"DIV",{class:!0}),S(f).forEach(n),D=y(e),o=p(e,"DIV",{class:!0});var s=S(o);z=p(s,"ASIDE",{class:!0});var K=S(z);H=p(K,"NAV",{class:!0});var W=S(H);v=p(W,"UL",{class:!0});var $=S(v);L=p($,"LI",{class:!0,"data-svelte-h":!0}),j(L)!=="svelte-19hp02t"&&(L.innerHTML=F),q=y($),b=p($,"LI",{class:!0,"data-svelte-h":!0}),j(b)!=="svelte-squbrj"&&(b.innerHTML=N),C=y($),E=p($,"LI",{class:!0,"data-svelte-h":!0}),j(E)!=="svelte-bp1mno"&&(E.innerHTML=X),V=y($),I=p($,"LI",{class:!0,"data-svelte-h":!0}),j(I)!=="svelte-s9h9al"&&(I.innerHTML=Y),$.forEach(n),W.forEach(n),K.forEach(n),O=y(s),w=p(s,"MAIN",{class:!0});var G=S(w);d&&d.l(G),G.forEach(n),s.forEach(n),this.h()},h(){_(r,"class","cursor-dot svelte-zf1am3"),_(u,"class","cursor-outline svelte-zf1am3"),_(f,"class","background svelte-zf1am3"),_(L,"class","navItem activeMenu svelte-zf1am3"),M(L,"activeMenu",a[0].route.id==="/"),_(b,"class","navItem svelte-zf1am3"),M(b,"activeMenu",a[0].route.id==="/projects"),_(E,"class","navItem svelte-zf1am3"),M(E,"activeMenu",a[0].route.id==="/brand"),_(I,"class","navItem svelte-zf1am3"),M(I,"activeMenu",a[0].route.id==="/contact"),_(v,"class","navInnerWrapper svelte-zf1am3"),_(H,"class","svelte-zf1am3"),_(z,"class","svelte-zf1am3"),M(z,"transformLeft",a[0].route.id?.split("/").length===3||a[0].route.id?.includes("brand")),_(w,"class","content svelte-zf1am3"),_(o,"class","container svelte-zf1am3")},m(e,s){fe(t,e,s),T(e,i,s),T(e,r,s),T(e,c,s),T(e,u,s),T(e,l,s),T(e,f,s),T(e,D,s),T(e,o,s),m(o,z),m(z,H),m(H,v),m(v,L),m(v,q),m(v,b),m(v,C),m(v,E),m(v,V),m(v,I),m(o,O),m(o,w),d&&d.m(w,null),g=!0},p(e,[s]){(!g||s&1)&&M(L,"activeMenu",e[0].route.id==="/"),(!g||s&1)&&M(b,"activeMenu",e[0].route.id==="/projects"),(!g||s&1)&&M(E,"activeMenu",e[0].route.id==="/brand"),(!g||s&1)&&M(I,"activeMenu",e[0].route.id==="/contact"),(!g||s&1)&&M(z,"transformLeft",e[0].route.id?.split("/").length===3||e[0].route.id?.includes("brand")),d&&d.p&&(!g||s&2)&&le(d,P,e,e[1],g?ne(P,e[1],s,null):re(e[1]),null)},i(e){g||(Q(t.$$.fragment,e),Q(d,e),g=!0)},o(e){R(t.$$.fragment,e),R(d,e),g=!1},d(e){e&&(n(i),n(r),n(c),n(u),n(l),n(f),n(D),n(o)),ve(t,e),d&&d.d(e)}}}function ye(a,t,i){let r;oe(a,Me,l=>i(0,r=l));let{$$slots:c={},$$scope:u}=t;return Le(),ee(()=>{const l=document.querySelector(".cursor-dot"),f=document.querySelector(".cursor-outline");document.querySelectorAll(".navItem").forEach(o=>{o.addEventListener("mouseover",()=>{l.classList.add("cursor-dot-hover"),f.classList.add("cursor-outline-hover")}),o.addEventListener("mouseleave",()=>{l.classList.remove("cursor-dot-hover"),f.classList.remove("cursor-outline-hover")})}),document.addEventListener("click",()=>{f.classList.add("cursor-dot-expand"),setTimeout(()=>{f.classList.remove("cursor-dot-expand")},100)}),document.addEventListener("mousemove",o=>{l.setAttribute("style","top: "+o.pageY+"px; left: "+o.pageX+"px;"),f.animate({left:`${o.pageX}px`,top:`${o.pageY}px`},{duration:50,fill:"forwards",easing:"ease-in-out"})})}),a.$$set=l=>{"$$scope"in l&&i(1,u=l.$$scope)},[r,u,c]}class Ce extends te{constructor(t){super(),se(this,t,ye,ke,x,{})}}export{Ce as component,qe as universal};
