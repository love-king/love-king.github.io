if(!self.define){let e,i={};const a=(a,c)=>(a=new URL(a+".js",c).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,s)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let n={};const d=e=>a(e,r),f={module:{uri:r},exports:n,require:d};i[r]=Promise.all(c.map((e=>f[e]||d(e)))).then((e=>(s(...e),n)))}}define(["./workbox-915e8d08"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2025/01/25/limit/index.html",revision:"2815adc52b5ef9fe76729ebd59698053"},{url:"2025/02/24/Theoretical-knowledge/index.html",revision:"b29fcf8ec46d6e81c8f91a6a06ee9874"},{url:"404.html",revision:"3e56aa61f1ab22abf8130aecbfb148ba"},{url:"anzhiyu/random.js",revision:"7f014ca8b69650794f524095327ec21a"},{url:"archives/2025/01/index.html",revision:"31ebdf3bd99879b843df4509b4fb7299"},{url:"archives/2025/02/index.html",revision:"cda5bd3a3ac5c99641f281530afdb808"},{url:"archives/2025/index.html",revision:"c95eee241dfe5853c855ef9112a55a7f"},{url:"archives/index.html",revision:"eef8ec4610ca739b5a2cf9faffed5cc4"},{url:"categories/高等数学/index.html",revision:"1b741be1aa657704ef6843fe58e00cd9"},{url:"css/index.css",revision:"57d4997b0e62a27f3aae5eb74b4f1d55"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"images/favicon.svg",revision:"8035a09a6995177ee44d4dafa2521b33"},{url:"img/404.jpg",revision:"8190796a570d269ef04b777d93d44e6d"},{url:"img/512.png",revision:"701819a72025df4d8e2a111c1c8f2c72"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/comment_bg.png",revision:"fe6bbe142eb7dc7b4f876ae4f5af97d0"},{url:"img/default_cover.jpg",revision:"8b35831759dc5f66710c2839422109d5"},{url:"img/friend_404.gif",revision:"d09ab53cb5bb15079ce8e3d90b157353"},{url:"img/loading.gif",revision:"05fb29f4e677ff6057ef55925f46e9b0"},{url:"img/siteicon/16.png",revision:"3de470acb5237bf16318d827443dd5f1"},{url:"img/siteicon/32.png",revision:"802aa4685b3652d5a1b6e5a6323cf3c0"},{url:"img/siteicon/apple-icon-180.png",revision:"ac045b7b6012d72ccbcffb07727c7b11"},{url:"img/siteicon/manifest-icon-192.maskable.png",revision:"87c1b5883834c2164e20e737bd5c2517"},{url:"img/siteicon/manifest-icon-512.maskable.png",revision:"85b846b5722c684339c8bb3e520bcc6a"},{url:"index.html",revision:"f8101c8d1a36a15e435c2af7e999f944"},{url:"js/anzhiyu/ai_abstract.js",revision:"e4baa11685a6c14d4130b5b74d9222dc"},{url:"js/anzhiyu/comment_barrage.js",revision:"c5ca32eab1b5db6744df49cffaefa3a6"},{url:"js/anzhiyu/people.js",revision:"b946db8294a26b0b91e93dca5abda935"},{url:"js/anzhiyu/random_friends_post.js",revision:"30e5b8070503360d29e26e1b6db29efd"},{url:"js/anzhiyu/right_click_menu.js",revision:"586c1eecf6617180a50d419def5fd4c0"},{url:"js/main.js",revision:"0ca6e958debf5d18e10ead8c0c00191c"},{url:"js/search/algolia.js",revision:"3ce06f0458bccd45a20ae797cccb6561"},{url:"js/search/local-search.js",revision:"0f5dddc0c88389610bae38a044ee7a8a"},{url:"js/tw_cn.js",revision:"80822f672b15a8105128e305e9acbed4"},{url:"js/utils.js",revision:"5e46ef2a6caf9e3430fe9dc22dd30075"},{url:"tags/极限/index.html",revision:"9317c8dba8ca5aa62d304ee364eecbca"},{url:"tags/理论/index.html",revision:"7a30f7272139ef8c0f3fda8dd0849bf5"}],{})}));
//# sourceMappingURL=service-worker.js.map
