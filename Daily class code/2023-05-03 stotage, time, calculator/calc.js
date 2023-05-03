const displayValue = document.getElementById("calc-operation");
let displayValueString = "";

const getNine = () => {
  displayValueString = displayValueString + "9";

  getInputValues(displayValueString);
};

const getEight = () => {
  displayValueString = displayValueString + "8";

  getInputValues(displayValueString);
};

const getSeven = () => {
  displayValueString = displayValueString + "7";

  getInputValues(displayValueString);
};

const getSix = () => {
  displayValueString = displayValueString + "6";

  getInputValues(displayValueString);
};

const getFive = () => {
  displayValueString = displayValueString + "5";

  getInputValues(displayValueString);
};

const getFour = () => {
  displayValueString = displayValueString + "4";

  getInputValues(displayValueString);
};

const getThree = () => {
  displayValueString = displayValueString + "3";

  getInputValues(displayValueString);
};

const getTwo = () => {
  displayValueString = displayValueString + "2";

  getInputValues(displayValueString);
};

const getOne = () => {
  displayValueString = displayValueString + "1";

  getInputValues(displayValueString);
};

const getZero = () => {
  displayValueString = displayValueString + "0";

  getInputValues(displayValueString);
};
const getMultiplication = () => {
  displayValueString = displayValueString + "*";

  getInputValues(displayValueString);
};

const getSubtraction = () => {
  displayValueString = displayValueString + "-";

  getInputValues(displayValueString);
};

const getAddition = () => {
  displayValueString = displayValueString + "+";

  getInputValues(displayValueString);
};

const getDecimal = () => {
  displayValueString = displayValueString + ".";

  getInputValues(displayValueString);
};

const getBack = () => {
  // displayValueString = displayValueString + ".";
  // getInputValues(displayValueString);
};

const getResult = () => {
  // displayValueString = displayValueString + ".";
  // getInputValues(displayValueString);
};

const getAllClear = () => {
  displayValueString = 0;

  getInputValues(0);
};

/**
 * @description Getting values to display
 *
 * @param {String} value
 */
const getInputValues = (value) => {
  displayValue.innerText = value;

  localStorage.setItem("calculator_display", value);
};

const valueFromLocalStorage = localStorage.getItem("calculator_display");

console.log("valueFromLocalStorage", valueFromLocalStorage);
