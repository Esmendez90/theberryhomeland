document.getElementById("goTo-gallery-btn").onclick = function () {
  location.href = location.href + "gallery.html";
};

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
console.log(rect.top, rect.left)
  return (
    rect.top <= 800 &&
    rect.left >= 0 &&
    rect.bottom <= window.innerHeight &&
    rect.right <= window.innerWidth
  );
}

const elements = document.querySelectorAll(".snapshot-container");
//console.log(elements);

window.addEventListener("scroll", () => {
  elements.forEach((element) => {
    if (isInViewport(element)) {
      element.classList.add("is-in-viewport");
    } else {
      element.classList.remove("is-in-viewport");
    }
  });
});
