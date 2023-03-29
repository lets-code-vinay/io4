// Write a program to print all ASCII code

let name = "";
for (let i = 0; i <= 255; i++) {
  let ascii = String.fromCharCode(i);
  //   console.log(`The ASCII value of ${i} is ${String.fromCharCode(i)}`);
  if (
    ascii == "V" ||
    ascii == "i" ||
    ascii == "n" ||
    ascii == "a" ||
    ascii == "y"
  ) {
    name = name + ascii;
  }
}

console.log("My Name is", name);

// Write a program to find all the armstrong from 0 - 500
// 1 == 1^3 -- 1
// 2^3 == 8 XX
// 11 == 1^3 + 1^3 -- 1 + 1 -- 2 XX
// 153 == 1^3 + 5^3 + 3^3 -- 1 + 125 + 27 ---153

for (let i = 0; i <= 1000; i++) {
  let n = String(i);
  n = n.split("");
  //   console.log("-aaa->", n);

  let armstrong = 0;
  for (let j = 0; j < n.length; j++) {
    armstrong = armstrong + n[j] * n[j] * n[j];
  }

  //   console.log("armstrong", armstrong);
  if (i == armstrong) {
    console.log("armstrong---->", armstrong, "and number is--", i);
  }
}

// write a program to enter number till user wants.at the end it should
//display the count of even, odd

let num = Number(prompt("Enter number of choice"));

let even = 0;
let odd = 0;

for (let i = 0; i <= num; i++) {
  if (i % 2 == 0) {
    even = even + 1;
  } else {
    odd = odd + 1;
  }
}

console.log(
  `You have entered the number ${num},
   which contains ${even} Even numbers and ${odd} Odd-numbers`
);

// Write a program to find leap year from 3000
