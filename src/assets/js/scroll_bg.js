document.addEventListener("DOMContentLoaded", function() {
    const content1 = document.querySelector(".about");
    const scrollThresholdStart = 100; // 変化が始まるスクロールの閾値
    const scrollThresholdEnd = 100; // 変化が終わるスクロールの閾値
  
    window.addEventListener("scroll", function() {
      const scrollPosition = window.scrollY;
      const body = document.querySelector(".root");
      // スクロール位置に応じて背景色と文字色を変更
      if (scrollPosition > (content1.offsetTop - scrollThresholdStart) 
       && scrollPosition < (content1.offsetTop + content1.offsetHeight + scrollThresholdEnd)
       )
       {
        body.style.backgroundColor = "black";
        body.style.color = "white"; // 文字色を白に変更
       } else {
        body.style.backgroundColor = "white";
        body.style.color = "black"; // 文字色を黒に変更
      }
    });
  });