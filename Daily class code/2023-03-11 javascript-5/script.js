// // -- Revision
// // --type conversion
// let num = 45;
// console.log("1 --> ", num, typeof num); //45  number

// num = String(45);
// console.log("2 --> ", num, typeof num); // 45 string

// let system = Number("honey");
// console.log("3 --> ", system, typeof system);

// system = Boolean("honey"); // true boolean
// console.log("4 --> ", system, typeof system);

// // false values   0, false, '', null, undefined
// system = Boolean(""); // false boolean,
// console.log("5 --> ", system, typeof system);

// let numSystem = Number(""); // 0 number
// console.log("6 --> ", numSystem, typeof numSystem);

// numSystem = Number(false); // 0 number
// console.log("7 --> ", numSystem, typeof numSystem);

// numSystem = Number(null); // 0 number
// console.log("8 --> ", numSystem, typeof numSystem);

// numSystem = Boolean(null); //
// console.log("9 --> ", numSystem, typeof numSystem); // false boolean,

// numSystem = Number(true); // 1 number
// console.log("10 --> ", numSystem, typeof numSystem);

// alert("this is alert box");

// const num1 = prompt("Enter number 1"); // 10
// const num2 = prompt("Enter number 2"); //20

// console.log("num1", num1, typeof num1);
// console.log("num2", num2, typeof num2);
// console.log("sum", Number(num1) + Number(num2)); // 30, 30, 30, 30, 30 -- 1020

// CONFIRM
// const isDelete = confirm("Do you want to delete?");
// console.log("isDelete", isDelete);

// if (isDelete) {
//   // if true
//   console.log("item deleted");
// } else {
//   console.log("Deleting cancel");
// }

// ---- function -----
// DRY -- Do not repeat your self

// function sum(para1, para2) {
//   const total = para1 + para2;

//   console.log("sum", para1, para2, "total", total);
// }

// sum(10, 20);
// sum(20, 20);
// sum(30, 20);
// sum(40, 20);
// sum(50, 20);
// sum(60, 20);

// example
function plumber(wrench, plier) {
  console.log("fix the taps and pipes");
  mason();
}

function mason(karandi, thread) {
  console.log("Hio! i am mason");
}

function carpenter(nosePlier, hammer, cutter, favicol) {
  console.log("I am carpenter");
  plumber();
}

carpenter();

const n1 = Number(prompt("Enter number 1--", 10));
const n2 = Number(prompt("Enter number 2--", 30));

/**
 * @description Adding number
 *
 * @param {Number} num1
 * @param {Number} num2
 *
 * @return {number} sum
 */
function addNumbers(num1, num2) {
  console.log("1. --> num1, num2", num1, num2); // 10 , 20
  const sum = num1 + num2; // 30
  console.log("-->sum", sum);

  multiplyNumbers(sum, num2); // 30, 20
}

/**
 * @description Multiplying numbers
 *
 * @param {Number} num1
 * @param {Number} num2
 *
 * @return {number} sum
 */
function multiplyNumbers(num1, num2) {
  // 30, 20
  console.log("2. --> num1, num2", num1, num2); // 30 , 20
  const sum = num1 * num2;
  console.log("-->multiplied", sum); // 60

  division(sum, num1); // 60, 30
}

/**
 * @description Division numbers
 *
 * @param {Number} nakul
 * @param {Number} neeta
 *
 * @return {number} sum
 */
function division(nakul, neeta) {
  // 60, 30
  const div = nakul / neeta; // 20
  console.log("3. --> nakul, neeta", nakul, neeta, "division", div);
}
addNumbers(n1, n2);
// multiplyNumbers(n1, n2);
// division(n1, n2);

// 1. function to call your self

// 2.
// Enter 5 subjects through keyboard
// find total of all subjects
// find average of all subject
