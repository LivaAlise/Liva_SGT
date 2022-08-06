// Task 1: Write the script which asks user to provide two values and the operation (+,-.*,/). Based on the operation value, return the result
// Remark: If one of the values provided is not the number (string only), then display error message for the operators -,*,/ (allow concatenation only) 
// Remark 2: Display the error message if the operation provided is not one of these (+,-.*,/)

let val1 = prompt("Your date of birth");
let val2 = prompt("Your month of birth");
let operation = prompt("What operation should I perform? (please enter one of the options: + - * /)");

let result;
if (operation == "+") {
  if (isNaN(val1) || isNaN(val2))
    result = +val1 + +val2;
  else
  result = Number(value1) + Number(value2);
  alert("The addition result is " + " " + result)
}


if (operation == "-") 
  if (isNaN(val1) || isNaN(val2))
  alert("Please enter one of the operations - * / ")

  else
    result = val1 - val2;
    

if (operation == "*") 
  if (isNaN(val1) || isNaN(val2))
  alert("Please enter one of the operations - * / ")

  else
    result = val1 * val2;
  
if (operation == "/")
  if (isNaN(value1) || isNaN(value2))
    alert("Please enter one of the operations - * / ")

  else
    result = val1 / val2;
  
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

