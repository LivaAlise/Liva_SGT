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

a.sort()

alert(a)