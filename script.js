const preLoaderImg = document.getElementsByClassName("onload-img");
const introTextFadeIn = document.getElementsByClassName("intro-text");
const elements = document.querySelectorAll(".display-element");
const abacaBtn = document.getElementById("abaca-container");
const cacaoBtn = document.getElementById("cacao-container");

const abacaPhotosContainer =
  document.getElementsByClassName("gallery-item");
const cacaoPhotosContainer =
  document.getElementsByClassName("gallery-item-2");

if (abacaBtn){
  abacaBtn.addEventListener("click", function (e) {
  e.preventDefault();
  abacaPhotosContainer[0].style.display = "grid";
  cacaoPhotosContainer[0].style.display = "none";
});
} 

if (cacaoBtn){

cacaoBtn.addEventListener("click", function (e) {
  e.preventDefault();
  cacaoPhotosContainer[0].style.display = "grid";
  abacaPhotosContainer[0].style.display = "none";
});
}

if (preLoaderImg && introTextFadeIn) {
  function preloaderFunction() {
    $(preLoaderImg[0]).addClass("fade-out");
    $(introTextFadeIn[0]).addClass("fade-in");
  }
}

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return rect.y <= 850;
}

window.addEventListener("scroll", () => {
  elements.forEach((element) => {
    if (isInViewport(element)) {
      element.classList.add("is-in-viewport");
    } else {
      element.classList.remove("is-in-viewport");
    }
  });
});

window.onload = preloaderFunction;
