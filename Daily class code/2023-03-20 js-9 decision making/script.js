// const enteredValue = prompt("Enter any value");

function findEnteredValue(value = 0) {
  const characterCode = value.charCodeAt(0);

  console.log("value---", value, "characterCode--", characterCode);

  if (characterCode > 65 && characterCode < 90) {
    // 65 - 90
    console.log("---> here is the value in capital letter --> ", value);
  } else if (characterCode >= 97 && characterCode <= 122) {
    console.log("---> here is the value in small letter --> ", value);
  } else if (characterCode >= 48 && characterCode <= 57) {
    console.log("---> here is the value in number --> ", value);
  } else {
    console.log("---> here is the value in symbols --> ", value);
  }
}

// findEnteredValue(enteredValue);

// ----2---
// console.log("Find the largest number of two numbers");
// const num1 = prompt("Enter 1st number");
// const num2 = prompt("Enter 2nd number");

// function findLargest(n1, n2) {
//   if (n1 > n2) {
//     console.log(`Number ${n1} is greater than Number ${n2}`);
//   } else {
//     console.log(`Number ${n1} is smaller than Number ${n2}`);
//   }
// }

// findLargest(num1, num2);

// --------3---------
// Write a program to find type of triangle
// const arm1 = Number(prompt("Enter the first side of Triangle"));
// const arm2 = Number(prompt("Enter the second side of Triangle"));
// const arm3 = Number(prompt("Enter the third side of Triangle"));

// function findTypeOfTriangle(a1, a2, a3) {
//   console.log("Entered sides", a1, a2, a3);
//   if (a1 === a2 && a2 === a3) {
//     console.log(";The triangle is Equilateral");
//   } else if (a1 === a2 || a2 === a3) {
//     console.log(";The triangle is Isoscele");
//   } else {
//     console.log(";The triangle is Scalene");
//   }
// }

// findTypeOfTriangle(arm1, arm2, arm3);
