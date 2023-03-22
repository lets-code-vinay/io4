// write a program to find the month

const month = Number(prompt("Enter any month from 1-12"));

function findMonth(month) {
  if (isNaN(month)) return "Enter a valid month";

  if (month < 1) return "Enter month greater than 1";
  if (month > 12) return "Enter month less than 12";

  if (month === 1) {
    return "January";
  } else if (month == 2) {
    return "February";
  } else if (month === 3) {
    return "March";
  } else if (month === 4) {
    return "April";
  } else if (month === 5) {
    return "May";
  } else if (month === 6) {
    return "June";
  } else if (month === 7) {
    return "July";
  } else if (month === 8) {
    return "August";
  } else if (month === 9) {
    return "September";
  } else if (month === 10) {
    return "October";
  } else if (month === 11) {
    return "November";
  } else return "December";
}

console.log(findMonth(month));
