// write a program to find the month

// const month = prompt("Enter any month from 1-12 or Jan to Dec");

function findMonth(month) {
  const m = month
    .toUpperCase()
    .split("") // ['J", 'A', 'N','U'....]
    .filter((v, i) => i < 3 && v) // ['J", 'A', 'N']
    .join(""); //JAN

  if (m === "JAN") {
    return "January";
  } else if (m === "FEB") {
    return "February";
  } else if (m === "MAR") {
    return "March";
  } else if (m === "APR") {
    return "April";
  } else if (m === "MAY") {
    return "May";
  } else if (m === "JUNE") {
    return "June";
  } else if (m === "JUL") {
    return "July";
  } else if (m === "AUG") {
    return "August";
  } else if (m === "SEP") {
    return "September";
  } else if (m === "OCT") {
    return "October";
  } else if (m === "NOV") {
    return "November";
  } else if (m === "DEC") {
    return "December";
  } else {
    return "Something Went Wrong!!!";
  }
}

// console.log(findMonth(month));

//----------------------------------
console.log("------------Have fun with your Zodiac------------");
const date = Number(prompt("Enter your date"));
const month = Number(prompt("Enter your month"));

function findZodiac({ date, month }) {
  let d = date;
  let m = month;

  const isFebruary = d < 30;
  const isThirtyDays = d <= 30;

  if (d > 0 && d <= 31 && m > 0 && m <= 12) {
    if ((d >= 20 && m === 1) || (d <= 17 && m === 2)) {
      return `your DOB is ${d}-${m} and your Zodiac is Aquarius`;
    } else if ((isFebruary && d >= 18 && m === 2) || (d <= 19 && m === 3)) {
      return `your DOB is ${d}-${m} and your Zodiac is Pisces`;
    } else if ((d >= 20 && m === 3) || (d <= 19 && m === 4)) {
      return `your DOB is ${d}-${m} and your Zodiac is Aries`;
    } else if ((isThirtyDays && d >= 20 && m === 4) || (d <= 20 && m === 5)) {
      return `your DOB is ${d}-${m} and your Zodiac is Taurus`;
    } else if ((d >= 21 && m === 5) || (d <= 20 && m === 6)) {
      return `your DOB is ${d}-${m} and your Zodiac is Gemini`;
    } else if ((d >= 21 && m === 6) || (d <= 22 && m === 7)) {
      return `your DOB is ${d}-${m} and your Zodiac is Cancer`;
    } else if ((isThirtyDays && d >= 23 && m === 7) || (d <= 22 && m === 8)) {
      return `your DOB is ${d}-${m} and your Zodiac is Leo`;
    } else if ((d >= 23 && m === 8) || (d <= 22 && m === 9)) {
      return `your DOB is ${d}-${m} and your Zodiac is Virgo`;
    } else if ((isThirtyDays && d >= 23 && m === 9) || (d <= 22 && m === 10)) {
      return `your DOB is ${d}-${m} and your Zodiac is Libra`;
    } else if ((d >= 23 && m === 10) || (d <= 21 && m === 1)) {
      return `your DOB is ${d}-${m} and your Zodiac is Scorpio`;
    } else if ((isThirtyDays && d >= 22 && m === 11) || (d <= 21 && m === 12)) {
      return `your DOB is ${d}-${m} and your Zodiac is Sagittarius`;
    } else if ((d >= 22 && m === 12) || (d <= 19 && m === 1)) {
      return `your DOB is ${d}-${m} and your Zodiac is Capricorn`;
    } else {
      return `You have entered ${d}-${m}. please enter correct details`;
    }
  } else {
    return "Please enter a valid Date and Month";
  }
}

console.log(findZodiac({ date: date, month: month }));
