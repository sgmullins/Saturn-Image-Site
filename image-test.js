//This js file was an exercise in accessability where the image could have a title
//More work because images need to be entered into the imgs array
const gallery = document.querySelector(".gallery");
const overlay = document.querySelector(".overlay");
const overlayImage = overlay.querySelector("img");
const overlayClose = overlay.querySelector(".close");

const path = "./images/";
const imgs = [
  "saturn-3-hard-knock-life.jpg",
  "saturn-4-saturn-shadow.jpg",
  "saturn-5-great-divide.jpg"
];

function generateHTML([h, v]) {
  for (let j = 0; j < imgs.length; j++) {
    let i = Math.floor(Math.random() * imgs.length);
    console.log(i);
    // console.log(j);
    return `
        <div class="item h${h} v${v}">
          <img src='${path}${imgs[i]}'> 
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
