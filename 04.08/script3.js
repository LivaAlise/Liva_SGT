/*3)Write a program where multiple actions with an array will be done. For element filtering please use the loop (the loop type can be chosen as You want).
●    Create an array with the elements from input - Y
●    Print out elements which are negative. Y
●    Print out elements which are odd (uneven). Y 
●    Compute how many elements are odd (uneven). Y
●    Verify if there are multiple elements with the same value Y
●    Print out each second element.
●    Compute average value of the array.
●    Establish how many elements are smaller than average value.*/


var a = [];


while (true) {
    let element = prompt("Please enter A element of the array to continue loop or END to stop");

    if (element === "END") {
        break;
    }
    else if (isNaN(element)) {
        alert(" Error!");
        continue;
    }
    else {
        alert("Please continue");
    }

    a.push(element);
}
alert(a)

let negativesArray = [];
for (let number of a) {
    if (number < 0)
        negativesArray.push(number);
}
alert("Negative values entered: " + negativesArray);


let oddsArray = [];
for (let number of a) {
    if (number % 2 != 0)
        oddsArray.push(number);
}
alert("Odd values entered: " + oddsArray);

{
    let count = 0;
    for (let number of a) {
        if (number % 2 != 0)
            count++;
    }
    alert("You have entered " + count + " odd elements");
}

let multiplesArray = [];
for (let number of a) {
    if (a.indexOf(number) !== a.lastIndexOf(number))
        multiplesArray.push(number);
}
if (multiplesArraySorted = multiplesArray.sort(function (a, b) { return a - b }))
alert(" You HAVE entered multiple elements with the same value");
else {
    alert("You HAVE NOT entered multiple values with the same value!")
}

