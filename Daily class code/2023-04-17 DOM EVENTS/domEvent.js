console.log("test");
// window.alert("Please accept this T&C");
const variable = document.querySelector("p");

const variable1 = document.querySelectorAll("p");

console.log("access", variable.innerHTML);

console.log("all tag", variable1);

console.log("access by", variable1[4].innerHTML);

// addEventListener event -------
let btnCLick = document.querySelector("button");

function generateRandomColor(number) {
  return Math.floor(Math.random() * (number + 1));
}

// console.log("sf", Math.floor(3.5555654));
// const btnCLickFunction = () => {

// click event ----
btnCLick.addEventListener("click", () => {
  const randomColor = `rgb(${generateRandomColor(255)}, 
    ${generateRandomColor(255)}, ${generateRandomColor(255)})`;

  // rgb(15,156,488)
  document.body.style.backgroundColor = randomColor;
  console.log("click perform");
});
// };

// btnCLickFunction();

// console.log("btn access", btnCLick.innerHTML);

let secondBtn = document.querySelectorAll("button");
let button1 = secondBtn[1];

button1.addEventListener("click", () => {
  console.log("second btn click");
});
console.log("access btn 1", secondBtn[1].innerHTML);

// onChange dom event ----

let inputBox = document.querySelector("input");
console.log("input", inputBox);
inputBox.addEventListener("keydown", (event) => {
  console.log("onChange fire", event.key, event.keyCode, event);
});

let newTag = document.createElement("p");
let divTag = document.getElementById("divId");
let newVar = divTag.appendChild(newTag);
newVar.innerHTML = "this is para";
// console.log()
