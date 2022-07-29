let val1 = prompt("Your date of birth");
let val2 = prompt("Your month of birth");
operation = prompt("What operation should I perform? (please enter + - * /)");

if (operation == "+") {
  result = +val1 + +val2;
  alert("The addition result is " + " " + result);
}
else if (operation == "-") {
  result = val1 - val2;
  alert("The subtraction result is " + " " + result);
}
else if (operation == "*") {
  result = val1 * val2;
  alert("The multiplication result is " + " " + result);
}
else if (operation == "/") {
  result = val1 / val2;
  alert("The division result is " + " " + result);
}

if (val1 || val2 == !Number) {
  alert("ERROR!!")
  }
else if ( operation !== "+" || "-" || "*" || "/") {
  alert("Error! Please enter + - * or /");
  	}