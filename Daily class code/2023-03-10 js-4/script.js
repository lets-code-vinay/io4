console.log(
  "1. --> ",
  15451574515648541545157451564854n,
  typeof 15451574515648541545157451564854n
); // bigint

console.log("2 --> ", 1 / 0); //Infinity
console.log("3 --> ", typeof Infinity); // number
console.log("4 --> ", "10" * 5); //5
console.log("5 --> ", "10rs" * 5); // NaN

console.log("6 --> ", "10" + 5); // R-105, NM-15, NP-15, S-15, AS-15, CS-15
console.log("7 --> ", "10rs" + 5); // R-NaN, NM-NaN, NP-NaN, S-NaN, AS-NaN, CS-NaN,, 10rs5

//------------------String-------
// 1. Single quotes string 'hello Ashwin'
// 2. Double quotes string "hello Shekhar"
// 3. Template literals(ES6) string `hello Shekhar`

const eng = 85;
const math = 60;
const phy = 65;
const chem = 70;
const total = eng + math + phy + chem;

console.log(
  "--> Hi!, My name is Vinay, i'm Non-Med student. I got marks in Physics",
  phy,
  "in Chemistry",
  chem,
  "in Math",
  math,
  "in English",
  eng,
  "and my total marks are",
  total
);

console.log(
  `--> Hi!, My name is Vinay, i'm Non-Med student. I got marks in Physics ${phy}, in Chemistry ${chem}, in Math ${math}, in English ${eng} and my total marks are ${total}`
);

console.log("Is it rain today", false);

const abc = null;
console.log("8. -->", abc, typeof null);

let room;
console.log("9 --> ", room, typeof room);
console.log("10 --> ", typeof []);
console.log("11 --> ", typeof {});
console.log("12 --> ", typeof Symbol(410));

//--------------- 2023-03-10--------------
// -------------Falsy Value ----------
/**
 * false
 * 0
 * ''
 * null
 * undefined
 */

const value = false;
if (!value) {
  console.log("hello falsy");
} else {
  console.log("good day");
}

//--------------------------------------------
// 1. ALERT
// 2. PROMPT
// 3. CONFIRM

// alert- just to show message using browser popup
// alert("This is any message");

// prompt- Used to get value from keyboard
// prompt("Enter your price"); // simple input
// prompt("Enter your price", 500); // input with default value to be updated
// const enteredValue = prompt("Enter your price", 100);

// console.log("12 You have entered-->", enteredValue);

// uncomment when you want to use
/*
 * const mathMarks = prompt("Enter math marks");
 * console.log("typeof math", typeof mathMarks, typeof Number(mathMarks));
 * const engMarks = prompt("Enter English marks");
 * const phyMarks = prompt("Enter Physics marks");
 * const totalMarks = Number(mathMarks) + Number(engMarks) + Number(phyMarks);
 *
 * console.log(
 *   `You got Marks in math ${mathMarks}, in English ${engMarks}, in Physics ${phyMarks} which total is ${totalMarks}`
 * );
 */

//---------- confirm box ---------
/*
 *const isSleeping = confirm("Are you sleeping?");
 *console.log("Are you sleeping", isSleeping);
 *
 *if (isSleeping) {
 *  console.log("Get out of my class");
 *} else {
 * console.log("Thanks for paying attention");
 *}
 */

//-------Type conversion-----
// 1. to convert datatype to string
// .toString()
// String()
const anyNum = 45687;
console.log(
  "13 -->",
  anyNum,
  typeof anyNum,
  "converted to String",
  anyNum.toString(),
  typeof anyNum.toString(),
  typeof String(anyNum)
);

let str = "4841";

console.log("14. --> str ", str, typeof str, typeof Number(str), Number(str));
let city = "Mumbai";
console.log(
  "15. --> City ",
  city,
  typeof city,
  typeof Number(city),
  Number(city),
  "converting in boolean-->",
  Boolean(city),
  typeof Boolean(city)
);

console.log("15. -->", "15" / "3"); //5
console.log("16 -->", Boolean("")); //false
console.log("17 -->", Boolean("  ")); //true
console.log("18 -->", Boolean(NaN)); // false

console.log("19. -->", "15" + "Nakul"); //15Nakul,
console.log("20. -->", "15" - "Nakul"); //NaN,
console.log("21. -->", "15" * "Nakul"); //NaN

console.log("22. -->", "Delhi" + "1545"); //
// So- Delhi1545
// RM- Delhi1545
// NM - Delhi1545
// NP- Delhi1545
// CS - Delhi1545
// AS - kuchh nhi samjh aa rha Ashwin ko

console.log("23. -->", 10 * "5" * "5"); // "50" * '5' -- '250'
// So- 250
// RM- 250
// NM - 250
// CS - 250
// NP - 250
// AS - NaN

// functions
