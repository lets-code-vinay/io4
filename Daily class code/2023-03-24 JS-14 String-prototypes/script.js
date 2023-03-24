console.log("-----------String Prototypes-------------");

let str = "I am watching pokemon";

// I, am, watching, pokemon
// I, ,a,m, ,w,a,t,c,h,i,n,g, ,p,o,k,e,m,o,n
// nomekop gnihctaw ma I

let str2 = "ABCD";

// String.chatAt()
console.log(`1. --->`, str.charAt(12));
console.log(`2. --->`, str.charAt(12), "--", str.charCodeAt(12));
console.log(`3. --->`, str.charAt(0), "--", str.charCodeAt(0));
console.log(`4. --->`, str2.charAt(0), "--", str2.charCodeAt(0));

// String.fromCharCode()
console.log(`5. --->`, String.fromCharCode(86, 73, 78, 65, 89)); // VINAY

// String.fromCodePoint()
console.log(`6. --->`, String.fromCodePoint(86, 73, 78, 65, 89)); // VINAY

// includes
console.log("7. ---> String.includes('pikachu')--", str.includes("pikachu")); //false
console.log("8. ---> String.includes('i')--", str.includes("i")); //true
console.log("9. ---> String.includes(am)--", str.includes("am")); //true,
// RegEx -- Regular Expression

// repeat
console.log("10 --> repeat()", "Vinay ".repeat(10));
console.log(
  "11. ---> repeat()",
  `${str.replace("pokemon", "")} ${"Pikachu ".repeat(14)}`
);

// search()
console.log("12 ---> search()--", str.search("v")); // -1 means not exist
console.log("13 ---> search()--", str.search("w")); // 5 index value
console.log("14 ---> search()--", str.search("z")); // -1

// spilt()
console.log("15 ---->split()--", str.split(" "), str.split(" ")[1]);
console.log("16 ---->split()--", str.split(""), str.split("")[15]);
console.log("17 ---->split()--", str.split("t"));
console.log("18 ---->split()--", str.split("am"));

console.log("19 ---> reverse any string", str.split("").reverse().join(""));
console.log("20 ---> reverse any string", str.split(" ").reverse().join(" "));

// string.at()
console.log("21 ---->at()--", str.at(3)); // m
console.log("22 ---->at()--", str.at(6)); // A
console.log("23 ---->at()--", str.at(60)); //

// indexOf()
console.log("24 ---> indexOf()--", str.indexOf("v")); // -1 means not exist
console.log("25 ---> indexOf()--", str.indexOf("w")); // 5 index value
console.log("26 ---> indexOf()--", str.indexOf("z")); // -1
console.log("27 ---> indexOf()--", str.indexOf("am")); // 2 index value
console.log("28 ---> indexOf()--", str.indexOf("pokemon")); //14
console.log("29 ---> indexOf()--", str.indexOf("o")); //15

// lastIndexOf()
console.log("30 ---> lastIndexOf()--", str.lastIndexOf("o")); //19
console.log("31 ---> lastIndexOf()--", str.lastIndexOf("a")); //6

// startsWith()
console.log("32 --> startsWith() --", str.startsWith("I am")); // true
console.log("33 --> startsWith() --", str.startsWith("i am")); // false
console.log("34 --> startsWith() --", str.startsWith("I")); // true

// endsWith()
console.log("35 --> endsWith() --", str.endsWith("I am")); // false
console.log("36 --> endsWith() --", str.endsWith("pokemon")); // true
console.log("37 --> endsWith() --", str.endsWith("n")); // true
