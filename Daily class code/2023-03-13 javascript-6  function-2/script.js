// What are functions?
// functions are the piece of code to do a specific task
// Types of functions?
// 1. Pre-defined functions
// 2. user-defined functions

// pre-defined function examples
//anything()
// alert()
// prompt()
// confirm()
// Date()
//Math()
// getElementById()

// user-defined function examples
// function getName() {
//   console.log("my name is vinay");
// }
// getName();

// leakage in water supply

function plumber() {
  console.log("Hi!!, i am plumber");
}

/**
 * ES6-
 * let,
 * const,
 * template literal
 * default
 */

/**
 * ES6- default
 */
function carpenter(
  hacksaw = "hand hacksaw",
  nail_puller = "puller",
  levels = "levels",
  mallet = "mallet",
  plane = "plane 1",
  saw = "circular saw 1"
) {
  console.log("hi! i am carpenter");
  console.log("I have", hacksaw, nail_puller, levels, mallet, plane, saw);
}

carpenter("mallet", "Hand hacksaw", "Nail Puller", "Levels");

// 1. passing simple parameter
function blackSmith({
  weldingSet = "",
  Electrode = "",
  Hammer = "",
  plier = "",
  drill = "Drill Machine Hand",
}) {
  console.log(
    `Hi!, i am black smith. I have
    ${weldingSet},
    ${Electrode},
    ${Hammer},
    ${plier},
    ${drill}`
  );
}
const weldingSet = "Welding Set";
const Electrode = "Electrode set";
const Hammer = "Hammer 2kg";
// const plier = "Flat plier";
// const drill = "drill machine";
// blackSmith(weldingSet, Electrode, Hammer, plier, drill);

blackSmith({
  Electrode: "Electrode set",
  Hammer: Hammer,
  weldingSet: weldingSet,
});

// 2. Parameter in object form
function blackSmith({
  weldingSet = "",
  Electrode = "",
  Hammer = "",
  plier = "",
  drill = "Drill Machine Hand",
}) {
  console.log(
    `Hi!, i am black smith. I have
    ${weldingSet},
    ${Electrode},
    ${Hammer},
    ${plier},
    ${drill}`
  );
}

blackSmith({
  Electrode: "Electrode set",
  Hammer: Hammer,
  weldingSet: weldingSet,
});

// --------------------------------
console.log("-------2023-03-14----------");

/**
 * @description Addition
 *
 * @params {Number} numb1
 * @params {Number} numb2
 * @params {Number} numb3
 *
 */
function addNumber({ numb1 = 1, numb2 = 2, numb3 = 3 }) {
  const total = numb1 + numb2 + numb3;
  console.log(
    `The sum of number-1 ${numb1}, number-2 ${numb2}, number-3 ${numb3} is ${total}`
  );
}

//        n3,  n1, n2
addNumber({ numb3: 20, numb1: 12, numb2: 50 });

console.log("-------------Addition ------");
console.log("10" + 20); // '1020'
console.log("10" + "20"); // '30','30'/nan,  1020
console.log("3. --> ", undefined + "20"); // undefined20
console.log("4. --> ", "undefined" + "20"); // undefined20
console.log("5. --> ", undefined + 20); // NaN,
console.log("6. --> ", "undefined" + 20); // undefined20,
console.log("7. --> ", true + 20); //  21
console.log("8. --> ", "true" + 20); // true20

console.log("-------------example ------");

const eng = Number(prompt("Enter English marks"));
const math = Number(prompt("Enter Math marks"));
const sci = Number(prompt("Enter Science marks"));
const hindi = Number(prompt("Enter Hindi marks"));

function toAddSubjects({ English = 0, Math = 0, Hindi = 0, Science = 0 }) {
  const total = English + Math + Hindi + Science;
  console.log(
    `entered subjects are English-${English}, Hindi-${Hindi}, Science-${Science}, Math=${Math} and sum of all subjects are ${total}`
  );

  toFindAverage({ sum: total, numOfSub: 4 });
}

function toFindAverage({ sum = 400, numOfSub = 4 }) {
  const ave = sum / numOfSub;
  console.log(
    `Average of total-${sum} and number of subs are ${numOfSub} is ${ave}`
  );
}

toAddSubjects({ Math: math, English: eng, Hindi: hindi, Science: sci });
