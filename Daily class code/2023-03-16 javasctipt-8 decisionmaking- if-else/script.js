/**
 * if--- used for conditions
 */
// if(condition){ what to do when condition got true}

if (true) {
  // true/false
  console.log("printing true");
}

if (2 + 2 == 5) {
  // 4 == 4
  console.log("this is true");
} else {
  console.log("this is false");
}
// ----------------------------

// -----Logical NOT -----  !
console.log(`1 -->  this is !`);
console.log(`2 -->  this is ${!true}`); //false -- !false -> true, !true -> false
console.log(`3 -->  this is ${!false}`);

console.log(`4 -->  this is ${!!true}`); // not not true --> not false --> true
console.log(`5 -->  this is ${!!!true}`); // not not not true --> not not false --> not true --> false

console.log(`6 -->  this is ${!null}`);
console.log(`7 -->  this is ${!undefined}`);
console.log(`8 -->  this is ${!""}`);
console.log(`9 -->  this is ${!0}`);

console.log(`10 -->  this is ${!10}`); // false
console.log(`11 -->  this is ${!"Delhi"}`); // false
console.log(`12 -->  this is ${"!Delhi"}`); // NM:false, A:false, S: true, N:!Delhi , R: confusion

// -----------Relational Operator------
console.log("-----------Relational Operator------");

console.log(`13 --> 21 > 10 -  ${21 > 10}`); // true
console.log(`14 --> 21 < 10 -  ${21 < 10}`); // false
console.log(`15 --> 21 < 10 -  ${210 < 10}`); // false
console.log(`16 --> 21 < 10 -  ${210 < 210}`); // false

// == and ===
// = Assignment operator
// == checks values, not data-types
// === checks values, checks data-types
// Javascript is a case-sensitive language
console.log(`17 --> 21 == 10 -  ${21 == 10}`); // false
console.log(`18 --> 21 == 21 -  ${21 == 21}`); // true
console.log(`19 --> 21 == '21' -  ${21 == "21"}`); // true
console.log(`21 --> 21 === '21' -  ${21 === "21"}`); // false
console.log(`20 --> '210' == '21' -  ${"210" == "21"}`); // false
console.log(`22 --> '21' === '21' -  ${"21" === "21"}`); // true
console.log(`23--> '21' =='21' -  ${"21" == "21"}`); // true,
console.log(`24 --> 210 =='21' -  ${210 == "21"}`); // false,

console.log(`25 --> !true == false -  ${!true == false}`); // true,
console.log(`26 --> true == false -  ${true == false}`); // false
console.log(`27 --> true === true -  ${true === true}`); // true
console.log(`28 --> 'true' == true -  ${"true" == true}`); // false
console.log(`29 --> 'true' === true -  ${"true" === true}`); //false
console.log(`30 --> 'true' == 'true' -  ${"true" == "true"}`); // tr30
console.log(`31 --> 'true' === 'true' -  ${"true" === "true"}`); //tr130
console.log(`30 --> 'True' == 'true' -  ${"True" == "true"}`); // false
console.log(`31 --> 'True' === 'true' -  ${"True" === "true"}`); // false

console.log(`32 --> 'Tanu' == 'tanu' -  ${"Tanu" == "tanu"}`); // false
console.log(`33 --> 'Tanu' === 'tanu' -  ${"Tanu" === "tanu"}`); // false
console.log(`34 --> null === null -  ${null === null}`); // true
console.log(`35 --> null === !null -  ${null === !null}`); // false
console.log(`36 --> null == undefined -  ${null == undefined}`); //A: false S:False N:False NM:False R:true
console.log(`37 --> null === undefined -  ${null === undefined}`); // A: false, S:false N; false NM:false R: false

console.log(`38 --> 'Tanu' != 'tanu' -  ${"Tanu" != "tanu"}`); //A:true
console.log(`39 --> 'Delhi' !== 'delhi' -  ${"Delhi" !== "delhi"}`); // !false  -- true
console.log(`40 --> 10 != '10' --> ${10 != "10"}`); // 10 != "10" ==> !true -- false
console.log(`41 --> 10 !== '10' --> ${10 !== "10"}`); // 10 !== "10" ==> !false -- true

// ---- >, <, >=, <=
// ---- && , ||
