if(!self.define){let e,i={};const c=(c,a)=>(c=new URL(c+".js",a).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(a,r)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let s={};const n=e=>c(e,d),b={module:{uri:d},exports:s,require:n};i[d]=Promise.all(a.map((e=>b[e]||n(e)))).then((e=>(r(...e),s)))}}define(["./workbox-915e8d08"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2025/01/25/limit/index.html",revision:"7a44bcd109605bae234610859f2d380c"},{url:"2025/02/24/Theoretical-knowledge/index.html",revision:"039f8a5f10711fe9493800c9349c01cf"},{url:"2025/02/28/lab1/index.html",revision:"d469843b35b1a9cfc9363ee7de217cca"},{url:"404.html",revision:"708499bcb4473c5ad7d1f193ba6ade06"},{url:"anzhiyu/random.js",revision:"2d09de658baca8ac9276c864ee9f4b52"},{url:"archives/2025/01/index.html",revision:"661ef762705b8e0718d6fda807ee5666"},{url:"archives/2025/02/index.html",revision:"640da5d77de36bbdff70f904adaf19df"},{url:"archives/2025/index.html",revision:"cfa49beb376bbeb1201b0ca2f50da39d"},{url:"archives/index.html",revision:"21e23ebe274b6de3821fd159414de192"},{url:"categories/信息学/index.html",revision:"3c18be8982571f840bd13b7ebbf15fc2"},{url:"categories/高等数学/index.html",revision:"1aae84bcd1667bcf4fc661cf6c43a536"},{url:"css/index.css",revision:"57d4997b0e62a27f3aae5eb74b4f1d55"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"images/favicon.svg",revision:"8035a09a6995177ee44d4dafa2521b33"},{url:"img/404.jpg",revision:"8190796a570d269ef04b777d93d44e6d"},{url:"img/512.png",revision:"701819a72025df4d8e2a111c1c8f2c72"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/comment_bg.png",revision:"fe6bbe142eb7dc7b4f876ae4f5af97d0"},{url:"img/default_cover.jpg",revision:"8b35831759dc5f66710c2839422109d5"},{url:"img/friend_404.gif",revision:"d09ab53cb5bb15079ce8e3d90b157353"},{url:"img/loading.gif",revision:"05fb29f4e677ff6057ef55925f46e9b0"},{url:"img/siteicon/16.png",revision:"3de470acb5237bf16318d827443dd5f1"},{url:"img/siteicon/32.png",revision:"802aa4685b3652d5a1b6e5a6323cf3c0"},{url:"img/siteicon/apple-icon-180.png",revision:"ac045b7b6012d72ccbcffb07727c7b11"},{url:"img/siteicon/manifest-icon-192.maskable.png",revision:"87c1b5883834c2164e20e737bd5c2517"},{url:"img/siteicon/manifest-icon-512.maskable.png",revision:"85b846b5722c684339c8bb3e520bcc6a"},{url:"index.html",revision:"461131dfd3712bb8c4fe7a22749cb55a"},{url:"js/anzhiyu/ai_abstract.js",revision:"e4baa11685a6c14d4130b5b74d9222dc"},{url:"js/anzhiyu/comment_barrage.js",revision:"c5ca32eab1b5db6744df49cffaefa3a6"},{url:"js/anzhiyu/people.js",revision:"b946db8294a26b0b91e93dca5abda935"},{url:"js/anzhiyu/random_friends_post.js",revision:"30e5b8070503360d29e26e1b6db29efd"},{url:"js/anzhiyu/right_click_menu.js",revision:"586c1eecf6617180a50d419def5fd4c0"},{url:"js/main.js",revision:"0ca6e958debf5d18e10ead8c0c00191c"},{url:"js/search/algolia.js",revision:"3ce06f0458bccd45a20ae797cccb6561"},{url:"js/search/local-search.js",revision:"0f5dddc0c88389610bae38a044ee7a8a"},{url:"js/tw_cn.js",revision:"80822f672b15a8105128e305e9acbed4"},{url:"js/utils.js",revision:"5e46ef2a6caf9e3430fe9dc22dd30075"},{url:"tags/代码/index.html",revision:"8a250802dc3c7e5f5d8f46c59cfa0d3f"},{url:"tags/极限/index.html",revision:"b960434a65b8ec245faff06f4275b75a"},{url:"tags/理论/index.html",revision:"8c1471dffdf3f24e0c885bfd9e20716a"}],{})}));
//# sourceMappingURL=service-worker.js.map
