if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,s)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let o={};const d=e=>n(e,t),f={module:{uri:t},exports:o,require:d};i[t]=Promise.all(r.map((e=>f[e]||d(e)))).then((e=>(s(...e),o)))}}define(["./workbox-76dbe9db"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"index.css",revision:"42fcd279a4596c23c9df0663e9088524"},{url:"index.html",revision:"67866e680d2f4d118ff271623315690f"},{url:"index.js",revision:"7f7a529d47f45b9a694869a793bde8d5"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/,/^n/]})}));
//# sourceMappingURL=sw.js.map
