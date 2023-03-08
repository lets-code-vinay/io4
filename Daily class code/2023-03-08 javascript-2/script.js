console.log("Hello world");

var name = "Nakul";
let age = 20;
const gender = "male";
let isCorrupt = false;

console.log("My name is", name, "My age is ", age, "I am", gender);
console.log(
  name,
  "is a nice guy",
  "of",
  age,
  "and he is very respect ful",
  gender,
  "and his corrupt status is",
  isCorrupt
);

// var a23 = 10;
// var $90 = 20;
// var _ab = 30;
// var d = 45;

// console.log("sum", a23 + $90 + _ab + d);

// Value overriding with var
var firstNum = 20;
console.log("firstNum", firstNum);

var firstNum = 30;
console.log("firstNum -2", firstNum);

// value over ridding with let
let secondNum = 32;
console.log("secondNum", secondNum);

// let secondNum = 33; // it won't work because we can not initiate same variable with let

secondNum = 33;
console.log("secondNum-2", secondNum);

const thirdNum = 50;
console.log("thirdNum", thirdNum);

thirdNum = 60;
console.log("thirdNum -2", thirdNum);

const PRIMARY_COLOR = "#FFFFFF";
