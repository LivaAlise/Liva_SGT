let operator = null;
let prev = null;

function initialize() {
  console.log("init");
  operator = null;
  prev = null;
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

  if (prev !== null) {
    display.value = "0";
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
}

function compute() {
  console.log("compute");

  let display = document.getElementById("display");
  const current = display.value;

  let computation;

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

  display.value = computation;
  prev = display.value;
}



