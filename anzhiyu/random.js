var posts=["2025/01/25/limit/","2025/01/28/Theoretical-knowledge/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };