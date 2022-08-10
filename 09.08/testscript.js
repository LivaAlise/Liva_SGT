function add() {
    const Number1 = document.getElementById("Number1").value;
    const Number2 = document.getElementById("Number2").value;
    const calculation = document.getElementById("calculation").value;
    calculation.innerText = document.getElementById("Number1").value + document.getElementById("Number2").value;
    alert("The result is" + add);
}

function subtract () {
    const Number1 = document.getElementById("Number1").value;
    const Number2 = document.getElementById("Number2").value;
    const calculation = document.getElementById("calculation").value;
    calculation.innerText = document.getElementById("Number1").value - document.getElementById("Number2").value;
    alert("The result is" + subtract)
}

function multiply () {
    const Number1 = document.getElementById("Number1").value;
    const Number2 = document.getElementById("Number2").value;
    const calculation = document.getElementById("calculation").value;
    calculation.innerText = document.getElementById("Number1").value * document.getElementById("Number2").value;
    alert("The result is" + multiply)
}

function divide () {
    const Number1 = document.getElementById("Number1").value;
    const Number2 = document.getElementById("Number2").value;
    const calculation = document.getElementById("calculation").value;
    calculation.innerText = document.getElementById("Number1").value / document.getElementById("Number2").value;
    alert("The result is" + divide)
}