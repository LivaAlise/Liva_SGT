// Task 1: Write the script which asks user to provide two values and the operation (+,-.*,/). Based on the operation value, return the result
// Remark: If one of the values provided is not the number (string only), then display error message for the operators -,*,/ (allow concatenation only) 
// Remark 2: Display the error message if the operation provided is not one of these (+,-.*,/)

let val1 = prompt("Your date of birth");
let val2 = prompt("Your month of birth");
operation = prompt("What operation should I perform? (please enter + - * /)");

if (operation == "+") {
  if (+val1!= NaN && +val2 != NaN) {
    result = +val1 + +val2;
    alert("The addition result is " + " " + result);
  }
  else if (val1 || val2 == !number) {
    result = val1 + val2;
  }
}


else if (operation == "-") {
  if (val1 || val2 == number) {
    result = val1 - val2;
    alert("The subtraction result is " + " " + result);
  }
  else {
    alert("Please enter one of the operations - * / ")
  }
}


else if (operation == "*") {
  if (val1 || val2 == number) {
    result = val1 * val2;
    alert("The multiplication result is " + " " + result);
  }
  else {
    alert("Please enter one of the operations - * / ")
  }
}

else if (operation == "/") {
  if (val1 || val2 == number) {
    result = val1 / val2;
    alert("The division result is " + " " + result);
  }
  else {
    alert("Please enter one of the operations - * / ");
  }
}


else {
  alert("Error! Please choose one of the provided options!");
}


/*if (val1|val2==(!NaN){
 alert ("Error! Please enter a numerical value!")
}


/*
|  val1  |  val2  | op | result  |
|--------|--------|----|---------|
| number | number | +  | n1 + n2 |
| string | string | +  | "s1s2"  |
*/

// if (val1 || val2 == !Number) {
//   alert("ERROR!!")
// }