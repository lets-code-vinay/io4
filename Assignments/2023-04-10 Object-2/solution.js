// 1.
let car = {
  make: "Toyota",
  model: "Corolla",
  year: 2015,
  color: "blue",
  isRunning: false,
  start: function () {
    this.isRunning = true;
  },
  stop: function () {
    this.isRunning = false;
  },
  getAge: function () {
    let currentYear = new Date().getFullYear();
    return currentYear - this.year;
  },
};

// Testing the object
console.log(car.color); // Output: "blue"

car.start();
console.log(car.isRunning); // Output: true

car.stop();
console.log(car.isRunning); // Output: false

console.log(car.getAge()); // Output: 8
