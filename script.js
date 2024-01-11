document.getElementById("goTo-gallery-btn").onclick = function () {
    location.href = "https://esmendez90.github.io/theberryhomeland/gallery.html";
};

let interval = setInterval(function(){
    let countForVideo = document.getElementById('vid').readyState;
    if(countForVideo == 4){
      document.getElementById('vid').play();
      clearInterval(interval);
    }
  },2000);
