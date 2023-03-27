// 2023-03-27
// const weight = Number(prompt("Enter your weight in KGs"));
// const height = Number(prompt("Enter your height in meter"));
const weight = 60;
const height = 1.0;

function calculateBMI(w, h) {
  const BMI = (w / Math.pow(h, 2)).toFixed(2);
  console.log("BMI----", BMI);

  if (BMI <= 15) {
    return `This candidate is in STARVATION Category with weight of ${w} and height ${h} so his/her BMI is ${BMI}`;
  } else if (BMI >= 15.1 && BMI <= 17.5) {
    return `This candidate is in Anorexic Category with weight of ${w} and height ${h} so his/her BMI is ${BMI}`;
  } else if (BMI >= 17.6 && BMI <= 18.5) {
    return `This candidate is in UNDERWEIGHT Category with weight of ${w} and height ${h} so his/her BMI is ${BMI}`;
  } else if (BMI >= 18.6 && BMI <= 24.9) {
    return `This candidate is in IDEAL Category with weight of ${w} and height ${h} so his/her BMI is ${BMI}`;
  } else if (BMI >= 25 && BMI <= 29.9) {
    return `This candidate is in OVERWEIGHT Category with weight of ${w} and height ${h} so his/her BMI is ${BMI}`;
  } else if (BMI >= 30 && BMI <= 39.9) {
    return `This candidate is in OBESE Category with weight of ${w} and height ${h} so his/her BMI is ${BMI}`;
  } else if (BMI >= 40) {
    return `This candidate is in MORBIDLY OBESE Category with weight of ${w} and height ${h} so his/her BMI is ${BMI}`;
  } else {
    return `Not in this category. Try some other day`;
  }
}

console.log(calculateBMI(weight, height));

const month = prompt("enter any month, Ex: Jun");

function findMonth(month) {
  // 1
  // jan
  //JAN
  //Jan
  //JAn
  //JANuary.
  console.log("month---", month);

  let m = month
    .toUpperCase() // OCTOBER
    .split("") // ['O','C','T','O','B','E','R',]
    .filter((m, i) => i <= 2) //['O','C','T']
    .join(""); //  OCT;
  console.log("m---", m);

  switch (m) {
    case "JAN":
      return "This is January";
    case "FEB":
      return "This is February";
    case "MAR":
      return "This is MARCH";
    case "APR":
      return "This is APR";
    case "MAY":
      return "This is MAY";
    case "JUN":
      return "This is JUNE";
    case "JUL":
      return "This is July";
    case "AUG":
      return "This is August";
    case "SEP":
      return "This is SEPTEMBER";
    case "OCT":
      return "This is OCTOBER";
    case "NOV":
      return "This is November";
    case "DEC":
      return "This is December";
    default:
      return "Not a valid month";
  }
}

console.log(findMonth(month));
