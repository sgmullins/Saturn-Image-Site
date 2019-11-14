// This JS file will initialize var i and then loop through i while assigning i to the image Number. Images come from ./imgs. There will be no repeats
// This code is a bit fragile as you need to make sure you have the same number of images as the const imgs
//You will also need to update the tiles array length and extra 1x1 tiles to match number of images
//Would like to try to do this with a Fisher–Yates Shuffle

const gallery = document.querySelector(".gallery");
const overlay = document.querySelector(".overlay");
const overlayImage = overlay.querySelector("img");
const overlayClose = overlay.querySelector(".close");
const imgs = 31;
let i = 0;

//Never Repeat any images
function generateHTML([h, v]) {
  for (let j = 1; j < imgs; j++) {
    i += 1;
    console.log(i);
    return `
        <div class="item h${h} v${v}">
          <img src="imgs/saturn-${i}.jpg"> 
          <div class="item__overlay">
              <button>View →</button>
          </div>
        </div>
      `;
  }
}

//Generate random number that will then load random image
function randomNumber(limit) {
  return Math.floor(Math.random() * limit) + 1;
}

function handleClick(e) {
  // gets the target(div) looks for img element and grabs the src attribute
  const src = e.currentTarget.querySelector("img").src;
  overlayImage.src = src;
  overlay.classList.add("open");
}

function close() {
  overlay.classList.remove("open");
}

//Array.from takes a length property and a map function (right now it creates 31 tiles)
const tiles = Array.from({ length: 21 }, () => [
  randomNumber(4),
  randomNumber(4)
]).concat([
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1]
]);

//Map over tiles array and pass the array items to generateHTML
const html = tiles.map(generateHTML).join("");
gallery.innerHTML = html;

const items = document.querySelectorAll(".item");

items.forEach(item => item.addEventListener("click", handleClick));

overlayClose.addEventListener("click", close);
