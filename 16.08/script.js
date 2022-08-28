let operator = null;
let prev = null;
let needToClearDisplay = false;

function initialize() {
  console.log("init");
  operator = null;
  prev = null;
  needToClearDisplay = false;
  document.getElementById("display").value = "0";
}

function backspace() {
  console.log("backspace");
  let display = document.getElementById("display");
  display.value = display.value.slice(0, -1);

  if (display.value.length == 0) {
    display.value = "0";
  }
}

function append(character) {
  console.log("appending '" + character + "'");
  let display = document.getElementById("display");

  if (needToClearDisplay) {
    display.value = "0";
    needToClearDisplay = false;
  }

  if (character == ".") {
    // don't append '.' twice!
    if (display.value.indexOf(".") == -1) {
      display.value += character;
    }
  }
  else if (display.value == "0") {
    // don't keep leading zero
    display.value = character;
  }
  else {
    display.value += character;
  }
}

function rememberOperator(op) {
  console.log("remembering '" + op + "'");
  operator = op;
  let display = document.getElementById("display");
  prev = display.value;
  needToClearDisplay = true;
}

function compute() {
  console.log("compute");

  let display = document.getElementById("display");
  const current = display.value;

  let computation;

  if (prev === null) {
    computation = current;
  }
  else {
    switch (operator) {
      case '+':
        computation = +prev + +current;
        break;
      case '-':
        computation = prev - current;
        break;
      case '*':
        computation = prev * current;
        break;
      case '/':
        computation = prev / current;
        break;
      default:
        console.log("unexpected operator '" + operator + "'");
        return;
    }
  }

  display.value = computation;
  prev = display.value;
  needToClearDisplay = true;
}
