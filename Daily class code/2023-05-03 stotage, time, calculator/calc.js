const displayValue = document.getElementById("calc-operation");
const sumValue = document.getElementById("calculation");

const buttons = document.querySelectorAll(".button");

let displayValueString = "";

Array.from(buttons).map((button) => {
  button.addEventListener("click", (event) => {
    if (event.target.value == "=") {
      getEvaluation();
    } else if (event.target.value == "ac") {
      displayValueString = "";
      displayValue.innerText = "0";
      sumValue.innerText = "0";
    } else if (event.target.value == "back") {
      displayValueString = displayValueString.slice(0, -1);
      displayValue.innerText = displayValueString;
    } else {
      getInputValues(event.target.innerText);
    }
  });
});

/**
 * @description Getting values to display
 *
 * @param {String} value
 */
const getInputValues = (value) => {
  if (
    (displayValueString.includes("+") ||
      displayValueString.includes("-") ||
      displayValueString.includes("*") ||
      displayValueString.includes("/") ||
      displayValueString.includes("=")) &&
    (value == "+" || value == "-" || value == "*" || value == "/")
  ) {
    getEvaluation();
    return displayValueString;
  } else {
    displayValueString = displayValueString + value;
    displayValue.innerText = displayValueString;
  }
};

const getEvaluation = () => {
  const sum = eval(displayValueString);
  sumValue.innerText = sum;
};
