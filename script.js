console.log("Heee");
let goToGalleryBtn = document.getElementById("goTo-gallery-btn");
if (goToGalleryBtn) {
  document.getElementById("goTo-gallery-btn").onclick = function () {
    location.href = location.href + "gallery.html";
  };
}

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  console.log(rect.top, rect.bottom)
  return (
    // rect.top <= 5200 &&
    // rect.left >= 0 &&
    // rect.bottom <= window.innerHeight &&
    // rect.right <= window.innerWidth

    rect.bottom <= 1300 &&
    rect.left >= 0 &&
    rect.top <= window.innerHeight &&
    rect.right <= window.innerWidth
  );
}

const elements = document.querySelectorAll(".display-image");
// console.log(elements);

window.addEventListener("scroll", () => {
  elements.forEach((element) => {
//     console.log("element: ", element);
    if (isInViewport(element)) {
      element.classList.add("is-in-viewport");
    } else {
      element.classList.remove("is-in-viewport");
    }
  });
});
