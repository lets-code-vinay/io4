console.log("--------String------");

let myString = "Iron-man is a multi billionaire. He is friend of Spider-man";

// --1 toUpperCase()
console.log("1------> toUpperCase()", myString.toUpperCase());

// --2 toLowerCase()
console.log("2------> toLowerCase()", myString.toLowerCase());

// --3 toLocaleUpperCase()
let newStr = "Ashwin doesnot study.";
newStr = newStr.toLocaleUpperCase();
console.log("3------> toLocaleUpperCase()", newStr);

// 4 toLocaleLowerCase()
newStr = "Ashwin doesnot study.";
newStr = newStr.toLocaleLowerCase();
console.log("4------> toLocaleLowerCase()", newStr);

// --5 length
console.log("5 ----> length", myString.length);

//  "Iron-man is a multi billionaire. He is friend of Spider-man";

// 1. slice()
// 2. substring()
// 3. substr()
let updateMyString = myString.slice(5, 40);
let updateMyStringReverse = myString.slice(-5);

let subStrMethod = myString.substr(5);
let subStrInside = myString.substr(5, 40);

let subStringMethod = myString.substring(5, 40);
let subStringMethodReverse = myString.substring(-4);

let subStrMethodReverse = myString.substr(-4);

console.log("6 slice--->", updateMyString);
console.log("7 updateMyStringReverse--->", updateMyStringReverse);
console.log("8 subStringMethod--->", subStringMethod);
console.log("9- subStringMethodReverse--->", subStringMethodReverse);
console.log("10- subStrMethod--->", subStrMethod);
console.log("11- subStrInside--->", subStrInside);
console.log("12- subStrMethodReverse--->", subStrMethodReverse);

const dummyStr =
  "The stylus is the most important part of a graphics tablet and Wacom is known for its very precise stylus with has a very fast response rate and a well-balanced pressure sensitivity.";
console.log(
  "13 ---> replace",
  dummyStr.replace("tablet", "iPhone").replace("Wacom", "viaCom")
);

console.log(
  "14 ---> replaceAll",
  dummyStr.replaceAll("a", "X").replaceAll("o", "47")
);

console.log("14 ---> replaceAll", dummyStr.replaceAll("and", "AIR"));

const str1 = "Hello!, Thor";
const str2 = "Hulk";
const str3 = "Hawkeye";

console.log("15 --> Concat--", str1.concat(str2).concat(str3)); // Hello!, ThorHulkHawkeye
console.log("16---> ", str1, str2, str3);
console.log(
  "16.1---> ",
  str1 + " " + str2 + " " + str3 + " are my fav avengers"
);

console.log("17 -->", `${str1} ${str2} ${str3} are my fav avengers`);

// --- trim--
const emptyString = "      Ultron       ";
console.log("18 --> trim--", emptyString.trim());

// --- trim start-
const emptyStringEnd = "      Ultron       ";
console.log("18 --> trimStart--", emptyStringEnd.trimStart());

// --- trim End-
const emptyStringStart = "      Ultron       ";
console.log("18 --> trimEnd--", emptyStringStart.trimEnd());

// ---padStart---
const stringPadding = "Development_available"; // $$$$$Development_available

console.log("19.a ---->pasStart--", stringPadding.length); // 11
console.log("19 ---->pasStart--", stringPadding.padStart(25, "+")); //AADevelopment
console.log(
  "19.b ---->pasStart dynamic--",
  stringPadding.padStart(stringPadding.length + 5, "%")
); //AADevelopment

// ---padEnd---
const stringPadEnd = "Development";
console.log("20.a ---->pasEnd--", stringPadEnd.length); // 11
console.log("21 ---->pasEnd--", stringPadEnd.padEnd(18, "+")); //AADevelopment
console.log(
  "22 ----> dynamic end",
  stringPadEnd.padEnd(stringPadEnd.length + 3, "@")
);
