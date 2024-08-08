function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  console.log(rect.top, rect.bottom)
  return (
    rect.bottom <= 1300 &&
    rect.left >= 0 &&
    rect.top <= window.innerHeight &&
    rect.right <= window.innerWidth
  );
}

const elements = document.querySelectorAll(".display-image");
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

// console.log("hello");
// let zoomInImg = document.getElementById('product');

// zoomInImg.addEventListener('click', function(e){
//   const tgt = e.target;
//   tgt.classList.toggle('zoomed');
// })