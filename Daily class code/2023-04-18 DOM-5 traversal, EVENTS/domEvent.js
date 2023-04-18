const bodyTag = document.getElementsByTagName("body");
// destructure of array
const [bodyFirstEle] = bodyTag;

// inserting new Div to body
const mainDiv = document.createElement("div");
mainDiv.setAttribute("class", "main");
mainDiv.style.background = "red";
mainDiv.style.border = "2px solid black";
mainDiv.style.borderRadius = "20px";
mainDiv.style.fontSize = "30px";
mainDiv.style.width = "100%";
mainDiv.style.height = "600px";

bodyFirstEle.append(mainDiv);

// inserting Heading tag to div
const headingTag = document.createElement("h2");
headingTag.innerText = "List of Pokemons";

headingTag.style.color = "purple";

mainDiv.append(headingTag);

// creating OL tag
const olTag = document.createElement("ol");
olTag.setAttribute("type", "a");
olTag.classList.add("pokemon-list");

mainDiv.append(olTag);

// creating li tag
const liTag_1 = document.createElement("li");
liTag_1.innerText = "Pikachu";

olTag.append(liTag_1);

const liTag_2 = document.createElement("li");
liTag_2.innerText = "Charmender";

olTag.append(liTag_2);

const liTag_3 = document.createElement("li");
liTag_3.innerText = "Baileaf";

olTag.append(liTag_3);

const liTag_4 = document.createElement("li");
liTag_4.innerText = "Septile";

olTag.append(liTag_4);

// creating button
const buttonTag = document.createElement("button");
buttonTag.innerText = "click Here";
buttonTag.setAttribute("type", "button");
buttonTag.setAttribute("class", "click-here-button");
buttonTag.classList.add("red-button-class");

buttonTag.style.background = "#1572E6";
buttonTag.style.color = "white";
buttonTag.style.border = "1px solid blue";
buttonTag.style.borderRadius = "10px";
buttonTag.style.height = "25px";
buttonTag.style.width = "fit-content";
buttonTag.style.margin = "0 0 0 20%";

mainDiv.append(buttonTag);

// modify any value
const selectedHeadingTag = document.querySelector("h2");
console.log("h2--------", selectedHeadingTag);
selectedHeadingTag.innerText = "Modified Pokemon List";

// updating any element
const allOL_tags = document.querySelectorAll("ol");

// destructured Avenger List
const [firstOlList, secondOlList] = allOL_tags;
console.log("firstOlList", firstOlList.childNodes[5]);
firstOlList.childNodes[5].innerText = "Captain America";

// -0 -=----------------
const [pokemonLists] = document.querySelectorAll(".pokemon-list");
console.log("pokemonLists----", pokemonLists);
pokemonLists.children[2].innerText = "Growvile";

//remove any class
pokemonLists.classList.remove("pokemon-list");
pokemonLists.removeAttribute("class");
pokemonLists.removeAttribute("type");

//check if any class existed
const isClassExist = pokemonLists.classList.contains("pokemon-list");
console.log("isClassExist-11111--", isClassExist);

// Traversal --> Parent
console.log("pokemonLists.children[2]----", pokemonLists.children[2]);
const [, , thirdChild] = pokemonLists.children;

console.log(
  "thirdChild parentNode---",
  thirdChild.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
);
console.log(
  "thirdChild parentElement---",
  thirdChild.parentElement.parentElement
);

// Traversal -- Children
const [main] = document.getElementsByClassName("main");
console.log("No. child of main div----", main.childElementCount);
console.log(
  "No. child of main div----",
  main.childNodes[1].childNodes[2].childNodes[0].wholeText
);

// ------- Traversal Sibling
const [h2Child] = document.querySelectorAll("h2");
console.log("h2Child---------", h2Child.nextElementSibling);
console.log("h2Child prevciuos---------", h2Child.previousElementSibling);

const [, olSibling] = document.querySelectorAll("ol");
console.log("olSibling---------", olSibling.nextElementSibling);
console.log("olSibling previous---------", olSibling.previousElementSibling);

///-------------Events
// on click event

const [buttonClick] = document.getElementsByClassName("click-here-button");

let isClicked = false;

const variable = document.createElement("p");
buttonClick.addEventListener("click", function () {
  isClicked = !isClicked;

  console.log("Clicked");
  main.style.background = isClicked ? "yellow" : "blue";
  // if (isClicked) {
  //   main.style.background = "yellow";
  // } else {
  //   main.style.background = "blue";
  // }

  variable.innerText = null;

  if (isClicked) {
    main.append(variable);
    variable.innerText = "Yellow Theme";
    variable.style.color = "red";
  } else {
    main.append(variable);
    variable.innerText = "Blue Theme";
    variable.style.color = "white";
  }
});

// Heading click event
h2Child.addEventListener("click", function () {
  console.log("Heading tag clicked");
  h2Child.style.cursor = "pointer";
  isClicked = !isClicked; // !false // true

  h2Child.innerText = isClicked ? "True Heading" : "False Heading";
  h2Child.style.color = isClicked ? "black" : "blue";
  h2Child.style.border = isClicked ? "2px solid yellow" : "2px dotted green";
  olSibling.style.display = isClicked ? "none" : "block";
});
