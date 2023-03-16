/**
 * Addition
 */

const num1 = 45;
const num2 = 58;

const num3 = 145;
const num4 = 518;

/**
 * @description Adding two number
 *
 * @param {Number|String|Boolean} number1
 * @param {Number|String|Boolean} number2
 *
 * @return
 */
function add(number1, number2) {
  const total = number1 + number2;
  console.log("1. --> ", `sum of ${number1} and ${number2} is`, total);
}

add(num1, num2);
add(num3, num4);

add(546, 850);
add(num1, 650);

add("grace", 78); //grace78,
add(true, 89); //90
add("grace", "hello"); // gracehello

// --- Subtraction ---

/**
 * @description Subtracting two numbers
 *
 * @param {Number|String|boolean|null| undefined} n1
 * @param {Number|String|boolean|null| undefined} n2
 */
function subtract(n1, n2) {
  const cal = n1 - n2;

  console.log("2 -->", `The subtraction value of ${n1} and ${n2} is ${cal}`);
}

subtract(78, 45);
subtract(num1, num2);
subtract(num3, num2);
subtract(num3);
subtract("grace", 89); //NaN
subtract("grace", "hello"); //NaN
subtract(true, "hello"); //NaN
subtract(true, 5); //-4
subtract(true, true); //0, 0, 0
subtract(true, undefined); //NaN

/**
 * @description Multiplication of two numbers
 *
 * @param {Number|String|Boolean|Null|undefined} n1
 * @param {Number|String|Boolean|Null|undefined} n2
 *
 * @return
 */
function multiply(n1, n2) {
  const calc = n1 * n2;

  console.log(
    "3 --> ",
    `The multiplication value of ${n1} and ${n2} is ${calc}`
  );
}

multiply(10, 20); // 200
multiply(10, -20); // -200
multiply(num1, -20); // 45*-20 = -900
multiply(num2, "10"); // 58 * '10' = '580'
multiply(num2, "100ab"); // 58 * '100ab' = NaN
multiply(num2, true); //58 * true --  58
multiply(num2, false); // 58 * false -- 0
multiply(true, false); // true * false -- 0
multiply("", false); // '' * false --
multiply("", true); //
multiply("", null); //
multiply("", undefined); //

// -------Division ----

/**
 * @description Division of two numbers
 *
 * @param {Number|String|Boolean|Null|undefined} n1
 * @param {Number|String|Boolean|Null|undefined} n2
 *
 * @return
 */
function div(n1, n2) {
  const division = n1 / n2;

  console.log(`4 --> The division value of ${n1} and ${n2} is ${division}`);
}

div(10, 5); //2
div(10, 20); //0.5
div(10, true); //10,
div(10, false); // 10 / 0 - Infinity,
div(true, false); // 10 / 0 -- Infinity,
div(5, 0); // 5 / 0 -- Infinity,
div(5, "0"); // 5 / '0' -- Infinity,
div(5, "Ash"); // 5 / 'Ash' -- N:Nan, A: NaN, S:NaN, NM:NaN, R:NaN
div("Nakul", "Shekhar"); //NaN

add("Nakul", "Shekhar"); //NakulShekhar

// --- Modulus % ---

/**
 * @description Modulus of two numbers
 *
 * @param {Number|String|Boolean|Null|undefined} n1
 * @param {Number|String|Boolean|Null|undefined} n2
 *
 * @return
 */
function mod(n1, n2) {
  const Modulus = n1 % n2;

  console.log(
    `5.--> The remaining value(modulus) of ${n1} and ${n2} is ${Modulus}`
  );
}

mod(15, 3); // 0
mod(115, "3"); // 1
mod(115, "true"); // NaN
mod(115, true); // 0
mod(false, true); // 0
div(false, true); // 0 / 1

// Write a program to find even or Odd number
// even -- 2,4,6,,,
// of -- 1,3,5,7

/**
 * @description find Even/odd of given number
 *
 * @param {Number} n1
 * @param {Number} n2
 *
 * @return
 */
function findEven(n) {
  console.log("typeof", typeof n);
  if (typeof n != "number") return;

  const rem = n % 2;
  if (rem === 0) {
    console.log(`6. --> The number ${n} is an Even number`);
  } else {
    console.log(`7. --> The number ${n} is an odd number`);
  }
}

findEven(45);
findEven(44);
findEven("red");

function findLeapYear(year) {
  if (typeof Number(year) != "number") return;

  const rem = Number(year) % 4;

  if (rem === 0) {
    console.log(`8. --> The year ${year} is a leap year`);
  } else {
    console.log(`9. --> The year ${year} is not a leap year`);
  }
}

findLeapYear(1501);
findLeapYear(2023);
findLeapYear("2024");
