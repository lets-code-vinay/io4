const x = 10;
let c;

if (x % 2 == 0) {
  c = "E";
} else {
  c = "O";
}

console.log("1. ---->", c);

x % 2 == 0 ? (c = "This is true") : (c = "This is false");
console.log("2. ---> ", c);

let p = 10;
let q = 20;

let n = q - p > p - q ? q - p : p - q;
// 20 -10 > 10-20 ? 20-10 : 10-20
// 10 > -10 ? 10 : -10
console.log("3. --->", n);

//-------------------------

// const bill = Number(prompt("Enter the bill"));
const bill = 12000;
let discount;
// 20000> 10000
if (bill > 10000) {
  discount = (bill * 10.0) / 100;
} else {
  discount = (bill * 5.0) / 100;
}

// bill 10/100?5/100;
discount =
  bill > 10000
    ? console.log("on true", (bill * 10.0) / 100)
    : console.log("on false", (bill * 5.0) / 100);
//-----------------------------------

// const sale = Number(prompt("Enter Sale"));
const sale = 150000;
let comm;

// if (sale > 15000) {
//   comm = (sale * 5) / 100;
// } else {
//   comm = 0;
// }
// S:
// N: sale > 15000 ? (sale * 5) / 100 :  comm = 0
// NM: sale > 15000 ?  (sale * 5)/ 100 : comm = 0
// R: sale > 15000 ?  (sale * 5)/ 100 :  0;

// DRY-- Donot repeat yourself
//1.  sale > 15000 ? (comm = (sale * 5) / 100) : (comm = 0);
comm = sale > 15000 ? (sale * 5) / 100 : 0;

console.log("commission", comm);

// 7. Any integer is input through the keyboard. Write program to find out
// * whether it is an odd Number or even Number

// const num = Number(prompt("Enter any number"));
const num = 5;

num % 2 === 0 ? console.log("is Even") : console.log("is Odd number");

// -----------------------
const day = Number(prompt("Enter week days from 1-7"));

function findWeekDay(day) {
  if (day < 1 || day > 7) return "Please enter a valid day of week";

  // switch (day) {
  //   case 1:
  //     return "Sunday";
  //   case 2:
  //     return "Monday";
  //   case 3:
  //     return "Tuesday";
  //   case 4:
  //     return "Wednesday";
  //   case 5:
  //     return "Thursday";
  //   case 6:
  //     return "Friday";
  //   case 7:
  //     return "Saturday";
  //   default: //day !== 1
  //     return "Invalid day";
  // }

  let wd;
  switch (day) {
    case 1:
      wd = "Sunday";
      break;
    case 2:
      wd = "Monday";
      break;
    case 3:
      wd = "Tuesday";
      break;
    case 4:
      wd = "Wednesday";
      break;
    case 5:
      wd = "Thursday";
      break;
    case 6:
      wd = "Friday";
      break;
    case 7:
      wd = "Saturday";
      break;
    default: //day !== 1
      wd = "No founds";
      break;
  }
  return wd;
}

console.log(findWeekDay(day));
