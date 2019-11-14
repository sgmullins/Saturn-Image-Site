// This JS file will generate a random number and then use that random number to grab an image from ./imgs, you will get repeat images from this
const gallery = document.querySelector(".gallery");
const overlay = document.querySelector(".overlay");
const overlayImage = overlay.querySelector("img");
const overlayClose = overlay.querySelector(".close");

function generateHTML([h, v]) {
  return `
      <div class="item h${h} v${v}">
        <img src="./imgs/saturn-${randomNumber(31)}.jpg"> 
        <div class="item__overlay">
            <button>View →</button>
        </div>
      </div>
    `;
}

//Generate random number that will then load random image
function randomNumber(limit) {
  return Math.floor(Math.random() * limit) + 1;
}

//Array.from takes a length property and a map function
const tiles = Array.from({ length: 30 }, () => [
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

function handleClick(e) {
  // gets the target(div) looks for img element and grabs the src attribute
  const src = e.currentTarget.querySelector("img").src;
  overlayImage.src = src;
  overlay.classList.add("open");
}

function close() {
  overlay.classList.remove("open");
}
overlayImage.addEventListener("click", close);
