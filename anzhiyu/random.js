var posts=["2026/03/30/剪辑分享/","2026/03/26/博客/","2026/04/10/typora激活分享/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };