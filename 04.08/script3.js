/*3)Write a program where multiple actions with an array will be done. For element filtering please use the loop (the loop type can be chosen as You want).
●    Create an array with the elements from input - Y
●    Print out elements which are negative. 
●    Print out elements which are odd (uneven). 
●    Compute how many elements are odd (uneven).
●    Verify if there are multiple elements with the same value
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

if (a<0) {
    alert("Error! The number entered is negative!"+ a)
}