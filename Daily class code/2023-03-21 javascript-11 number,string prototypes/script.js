console.log("------number revision ---------");

console.log(` 1. ---> Math.abs()--`, Math.abs(-89)); //
// 8^3
console.log(` 2. ---> Math.pow(8,3)--`, Math.pow(8, 3)); //

// 121 find square root
console.log(` 3. ---> Math.sqrt(121)--`, Math.sqrt(121)); //N:sqrt(121,) S:? R:sqrt(121) nM:? A:?
// random number
console.log(` 4. ---> Math.random()--`, Math.random()); //
console.log(` 5. ---> Math.random()--`, Math.random() * 10); //
console.log(` 6. ---> Math.random()--`, Math.random() * 100); //

// round the number
console.log(` 7. ---> Math.round()--`, Math.round(125.598741574)); //  126,126
console.log(` 8. ---> Math.round()--`, Math.round(Math.random() * 100)); //

// floor
console.log(` 9. ---> Math.floor()--`, Math.floor(125.598741574)); //  125
console.log(` 10. ---> Math.floor()--`, Math.floor(Math.random() * 100)); //

// ceil
console.log(` 11. ---> Math.ceil()--`, Math.ceil(125.1)); //  126
console.log(` 12. ---> Math.ceil()--`, Math.ceil(Math.random() * 100)); //

//min
console.log(` 13. ---> Math.min()--`, Math.min(125, 1, 45, 879, 2)); //1

//max
console.log(` 14. ---> Math.max()--`, Math.max(12, 5, 1, 45, 8, 79, 2)); //79

// truncate
console.log(` 15. ---> Math.trunc()--`, Math.trunc(125.998741574)); //  125
console.log(` 16. ---> Math.trunc()--`, Math.trunc(Math.random() * 100)); //

// toFixed() -- fix decimal place values
console.log(` 15. ---> Math.trunc()--`, (125.198741574).toFixed(2)); //  125.20
console.log(` 16. ---> Math.trunc()--`, (Math.random() * 100).toFixed(2)); //

console.log(`---------2023-03-21--------------`);
// Number()  type converter
console.log(
  `17. --> '45'`,
  typeof Number("45"),
  Number("45"),
  " ---",
  typeof "45",
  "45"
);

console.log(
  `18. --> '45'`,
  typeof Number("45e"),
  Number(45e5), // 45*10^5
  " ---",
  typeof "45e",
  "45e"
);

// parseInt()
console.log(`19. --> '45 10 '`, parseInt(45, 10)); //
console.log(`20. --> '45acb10 '`, parseInt("45.256acb10"), Number("45acb10")); //

// parseFloat()
console.log(`20. --> '45 10 '`, parseFloat(45.235, 10.235)); //
console.log(`21. --> '45acb10 '`, parseFloat("45.254acb10")); //

// isNaN()
console.log(`22. --> 45`, isNaN(45.235)); // false
console.log(`23. --> '45acb10 '`, isNaN("45.254acb10")); // true

// string
console.log(
  `24. --> 45`,
  typeof String(45),
  String(45), // 45
  String(45e5) // 45*10^5
);

// valueOf
console.log(`25 -->`, (10 * 20).valueOf());

// isInteger
console.log(`26 -->`, Number.isInteger(45)); // true
console.log(`27 -->`, Number.isInteger("45")); // false
console.log(
  `28 -->`,
  Number.isInteger(4545451215746157854574854216526542484545751571524545) // true
);

// isSafeInteger()
console.log(`29--->`, Number.isSafeInteger(45), typeof 45); // true
console.log(
  `30 -->`,
  Number.isSafeInteger(4545451215746157854574854216526542484545751571524545) // false
);

console.log(
  `30 -->`,
  Number.isSafeInteger(4545451215746157854574854216526542484545751571524545n), // false
  typeof 4545451215746157854574854216526542484545751571524545n
);

console.log("===============string prototypes===============");
// 1. 'this is string'
// 2. "this is string in double quotes"
// 3. `this is string in template literals`
// 4. \this is also a string\i
// 4. \this is also a string\g

let myName = "Vinay Maurya";

// to find the length
console.log(`31 --> length `, myName.length);
console.log(`32 --> length `, "      ".length);

// how to cut any string
// 1. slice
// 2. substring
// 3. substr
console.log(`33 --> slice `, myName.slice(4));
console.log(`34 --> slice `, myName.slice(4, 9));
console.log(`35 --> slice `, myName.slice(-3));

// substring
console.log(`36 --> substring `, myName.substring(4));
console.log(`37 --> substring `, myName.substring(4, 9));

// substr
console.log(`38 --> substr `, myName.substr(4));
console.log(`39 --> substr `, myName.substr(4));

//replace
console.log(`40 --> replace `, myName.replace("Vinay", "Neeta"));
console.log(`41 --> replace `, myName.replace("Vinay", "Rajni"));

let anyStr = "TypeError: Cannot convert undefined or null to object";
console.log(`42 --> replaceAll `, anyStr.replaceAll("n", "o"));

let avengers =
  "Thor is most powerful, Thor has beaten Iron-man, Thor and Iron-man is Invincible";

avengers = avengers
  .replaceAll("Thor", "Hulk")
  .replaceAll("Iron", "Spider")
  .replace("is", "was");

console.log(`43 --> replaceAll`, avengers);

console.log(`44 --> toUpperCase`, avengers.toUpperCase());
console.log(`45 --> toLowerCase`, avengers.toLowerCase());

// concat
console.log(`46 --> concat --`, myName + " " + "and" + " ".concat(avengers));
console.log(
  `47 --> concat/literals --`,
  `${myName.slice(0, 5)} and ${avengers.replace("was", "were")}`
);
