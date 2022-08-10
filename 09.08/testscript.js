function add() {
    const Number1 = document.getElementById("Number1").value;
    const Number2 = document.getElementById("Number2").value;
    const calculation = document.getElementById("calculation");
    calculation.innerText = Number(Number1) + Number(Number2);
    alert("The result is " + calculation.innerText);
}

function subtract () {
    const Number1 = document.getElementById("Number1").value;
    const Number2 = document.getElementById("Number2").value;
    const calculation = document.getElementById("calculation");
    calculation.innerText = Number(Number1) - Number(Number2);
    alert("The result is " + calculation.innerText)
}

function multiply () {
    const Number1 = document.getElementById("Number1").value;
    const Number2 = document.getElementById("Number2").value;
    const calculation = document.getElementById("calculation");
    calculation.innerText = Number(Number1) * Number(Number2);
    alert("The result is " + calculation.innerText)
}

function divide () {
    const Number1 = document.getElementById("Number1").value;
    const Number2 = document.getElementById("Number2").value;
    const calculation = document.getElementById("calculation");
    calculation.innerText = Number(Number1) / Number(Number2);
    alert("The result is " + calculation.innerText)
}