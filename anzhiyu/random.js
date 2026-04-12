var posts=["2026/04/10/typora激活分享/","2026/03/26/博客/","2026/03/30/剪辑分享/","2026/04/12/避雷贴（山东省淄博市）/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };