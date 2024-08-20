const preLoader = document.getElementsByClassName("onload-img");
const elements = document.querySelectorAll(".display-element");

if (preLoader) {
  function preloaderFunction() {
    $(preLoader[0]).addClass("fade-out");
  }
} else {
  console.log("hell");
}

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  //console.log(element, rect.y);
 // console.log("TOP:", rect.top, "BOTTOM:", rect.bottom, rect.x, rect.y);
  return (
    rect.y <= 850
    // rect.bottom <= 500 &&
    // rect.left <= window.innerWidth &&
    // rect.top <= 9082 &&
    // rect.right <= window.innerWidth 
    // rect.bottom <= 0 &&
    // rect.left >= 0 &&
    // rect.top <= window.innerHeight &&
    // rect.right <= window.innerWidth
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
