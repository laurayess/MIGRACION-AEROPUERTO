if(!self.define){let e,n={};const i=(i,r)=>(i=new URL(i+".js",r).href,n[i]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=n,document.head.appendChild(e)}else e=i,importScripts(i),n()})).then((()=>{let e=n[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,s)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(n[d])return;let c={};const o=e=>i(e,d),l={module:{uri:d},exports:c,require:o};n[d]=Promise.all(r.map((e=>l[e]||o(e)))).then((e=>(s(...e),c)))}}define(["./workbox-3625d7b0"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index.0c388676.js",revision:null},{url:"assets/index.fc792c13.css",revision:null},{url:"index.html",revision:"5ec780947db3d302980596f86b43decd"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"Aeroplane_5060x2154.png",revision:"b27a3d662600dd07cd6f2180bbe654f6"},{url:"Aeroplanex192.png",revision:"42947c478dd22489a86ceb7596f475c6"},{url:"Aeroplanex128.png",revision:"52278d73d22f014a3c6f1acedbc27adb"},{url:"Aeroplanex512.png",revision:"62731f4436305491c9de98f05dd34a85"},{url:"maskable_512.png",revision:"4407dc507c6f19f398a6cefd34ec0ac6"},{url:"manifest.webmanifest",revision:"967670ca23c19fbfdd3fca3bce4504e9"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));