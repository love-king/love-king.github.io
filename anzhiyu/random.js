var posts=["2025/02/28/lab1/","2025/02/24/Theoretical-knowledge/","2025/01/25/limit/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };