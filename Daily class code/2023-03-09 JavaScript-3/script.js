/*
shortcut for common selections 
1. select single item
2. ctrl+D
*/
/* 
1. data-types
     i. primitive data-type
         a. string
         b. number
         c. boolean
         d. null
         e. undefined
     ii. non-primitive data-type
         a. array
         b. object
         c. RegEx

 2. Variables
     1. var, 2. let, 3. const

     */
// var var_1 = "10";
// console.log("variable 1", var_1);

// var var_1 = "vinay";
// console.log("variable 2", var_1);

// let num = 56;
// console.log("variable-3", num);

// num = 156;
// console.log("variable-4", num);

// const age = 87;
// console.log("variable-5", age);

// age = 187;
// console.log("variable-6", age);

//  3. comments
//      <!-- my html comment -->  == html comment
//      /* This is my CSS comment */
//      i. Single line comment
//         // this is my line
//     ii. multi line comment
//         /*
//         this is line 1
//         this is line 2
//         */
//     iii. shortcut for comment --> ctrl+/

/*
4. Identifiers:
        Identifiers can be used to specify any value or character,
        variables, functions, reserved keywords
*/
/**
 * 5. keywords
 *    var, let, const, this, if, else, return, for, break, switch,while
 *    function,
 */

/**
 * 6. Memory Allocation
 */

/**
 * 7. Number Data-types
 *
 */

let num = 50;
let num2 = "50";

console.log("-->", typeof num, typeof num2, num + num2);

let big = 77777773242345234542377777777777777777777788888888888888885n;
console.log("big number", big);

/**
 * 8. Infinity
 * let infin = 1 / 0;
    console.log("infinity", infin);
    console.log("infinity 2", Infinity);
 */

/**
 * 9. NaN
 * Not a Number
 */
let sellingPrice = "50";
let buyPrice = 150;
let currPrice = buyPrice + 60;

let price = buyPrice + 60;
console.log("price0", price); // 210

price = sellingPrice + 60; //  5060
console.log("price1", price);

price = "sellingPrice" + 60; // sellingPrice60
console.log("price2", price);

price = "price" / 60; // Nan
console.log("price3", price);

console.log("1. -->", NaN + 1);
console.log("2. -->", NaN * 3);
console.log("3. -->", "string" / 2 - 1);

/**
 * 10. String-data-types
 * anything written inside the single quotes, double quotes and backticks
 * are strings
 * single quotes --> 'this is single quote'
 * double quotes --> "this is double quotes"
 * back-tick     --> `this is back-tick`
 */

console.log("i'm' a teacher");
console.log(`i'm using back-tick`);

// Hi all!,
// i have bought a mobile which buy-price was 1500rs.
// and selling price was 1600rs and current price is 3450rs
console.log(
  "Hi all! i have bought a mobile which buy price was",
  buyPrice + "rs.",
  "and selling price was",
  sellingPrice + "rs and current price is ",
  currPrice + "rs"
);

// Template literals  --> ES6
console.log(
  `Hi all! i have bought a mobile which buy price was ${buyPrice}rs. and selling price was ${sellingPrice}rs. and current price is ${currPrice}rs.`
);

const num1 = 21;
const num3 = 56;

const num4 = num1 + num3; //77
console.log("The sum of number-1", num1, "and number-2", num3, "is", num4);
console.log(`The sum of number-1 ${num1} and number-2 ${num3} is ${num4}`);

/**
 * 11. Boolean - data-type
 * Meaning of Boolean is set of True/false
 * Naming Conviction
 */

const nakulAge = 15;
const ashwinAge = 19;

const isNakulElder = false;

console.log("isNakulElder", isNakulElder);

/**
 * 12. null
 * null means no-value
 */
let speed;
console.log("speed-1", speed, typeof speed); // undefined -- undefined

speed = null;
console.log("speed-2", speed, typeof speed); // null -- object,

speed = "100km/h";
console.log("speed-3", speed, typeof speed); // 100km/h -- string

/**
 * 13. undefined
 * variable has been declared but values is not assigned
 */
let distance;
console.log("distance-1", distance, typeof distance);

distance = "100km";
console.log("distance-2", distance, typeof distance);

/**
 * 14. Typeof
 * It is a predefined function, use to check data-type of any variable or value
 */

console.log("typeof 10", typeof 10); // number
console.log("typeof false", typeof false); // boolean
console.log("typeof false", typeof "false"); // string
console.log("typeof undefined", typeof undefined); // undefined
console.log("typeof undefined", typeof "undefined"); // string
console.log("typeof null", typeof null); // object
console.log("typeof null", typeof "null"); // string
console.log("typeof []", typeof []); // object
console.log("typeof {}", typeof {}); // object
console.log("typeof 0", typeof 0); // number
console.log("typeof 100n", typeof 100n); // bigInt
console.log("typeof 100n", typeof "100n"); // string
console.log("typeof my name is vinay", typeof "my name is vinay"); // string
console.log("typeof Symbol(100)", typeof Symbol(100)); // Symbol
console.log("typeof alert", typeof alert); // function
console.log("typeof console", typeof console); // object
