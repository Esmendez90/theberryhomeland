const preLoaderImg = document.getElementsByClassName("onload-img");
const introTextFadeIn = document.getElementsByClassName("intro-text");
const elements = document.querySelectorAll(".display-element");

if ((preLoaderImg) && (introTextFadeIn) ){
  function preloaderFunction() {
    $(preLoaderImg[0]).addClass("fade-out");
    $(introTextFadeIn[0]).addClass("fade-in");
  }
}


function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.y <= 850
  );
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
