// 1. declare variable
// 2. condition
// 3. increment i++ ==> i+1

// ++i pre-increment
// i++ post-increment
// i+1

// for (var i = 1; i <= 10; i++) {
//   console.log("Nakul", i);
// }

// for (var i = 10; i >= 1; i--) {
//   console.log("Chander", i);
// }

// 2*1=2
// 2*2=4
// !
// !
// !
// 2*10= 20

for (var i = 1; i <= 200; i++) {
  if (i % 2 == 0) {
    // odd
    if (7 * i > 1000) {
      // <1000
      console.log(`7 x ${i} = ${7 * i}`);
    }
  }
}

const ot = 12;
const oth = 40;
for (var i = 1; i <= 10; i++) {
  let empWh = (Math.random() * 100).toFixed(0);
  console.log(`employee ${i} --> working hour--> ${empWh}`);
  if (empWh > oth) {
    console.log(`Overtime of ${i}th employees`, empWh * ot);
  } else {
    console.log(`Overtime of ${i}th employees will not be given`);
  }
}

const num = Number(prompt("Enter a number"));
const exponential = Number(prompt("Enter exponential"));

// 10^3
let val = 1;
for (var i = 1; i <= exponential; i++) {
  val = val * num;
}

console.log(`The power ${exponential} of number ${num} is ${val}`);
