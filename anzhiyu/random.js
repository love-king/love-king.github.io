var posts=["2025/01/28/Theoretical-knowledge/","2025/01/25/limit/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };