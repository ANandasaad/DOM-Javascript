
/**
 * Tests if the element is visible (within the visible part of the page)
 * It's enough that the top or bottom edge of the element are visible
 */
function isVisible(elem) {
//   todo: your code
let coords = elem.getBoundingClientRect();
console.log(coords);

let windowHeight = document.documentElement.clientHeight;
console.log("window: "+windowHeight);

// top elem edge is visible?
let topVisible = coords.top > 0 && coords.top < windowHeight;

// bottom elem edge is visible?
let bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;

return topVisible || bottomVisible;
}

function showVisible() {
  for (let img of document.querySelectorAll('img')) {
    let realSrc = img.dataset.src;
    if (!realSrc) continue;

    if (isVisible(img)) {
      // disable caching
      // this line should be removed in production code
      realSrc += '?nocache=' + Math.random();

      img.src = realSrc;

      img.dataset.src = '';
    }
  }

}

window.addEventListener('scroll', showVisible);
showVisible();
