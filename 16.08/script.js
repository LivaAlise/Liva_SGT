const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)
const previousOperand = document.querySelector("[previous-operand]")
const currentOperand = document.querySelector("[current-operand]")
const numberButtons = document.querySelectorAll("[number]")
const operationButtons = document.querySelectorAll("[operation]")
const acButton = document.querySelector("[all-clear]")
const deleteButton = document.querySelector("[delete]")
const equalsButton = document.querySelector("[equals]")

class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement
    this.currentOperandTextElement = currentOperandTextElement
    this.clear()
}
}
numberButtons.forEach(button => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay()
  })
})

operationButtons.forEach(button => {
  button.addEventListener("click", () => {
    calculator.chooseOperation(button.innerText)
    calculator.updateDisplay()
  })
})

acButton (button=> {
  button.addEventListener("click", () => {
    calculator.clear()
    calculator.updateDisplay()
  })
  })
  
  
deleteButton.addEventListener ("click", button => {
  calculator.deleteLastEntry()
  calculator.updateDisplay()
})

equalsButton.addEventListener("click", button => {
  calculator.compute()
  calculator.updateDisplay()
})

function compute() {
    let computation;
    if (isNaN(previousOperand) || isNaN(currentOperand)) 
    return
    switch (this.operation) {
      case '+':
        computation = prev + current
        break
      case '-':
        computation = prev - current
        break
      case '*':
        computation = prev * current
        break
      case '÷':
        computation = prev / current
        break
      default:
        return
    }
}



