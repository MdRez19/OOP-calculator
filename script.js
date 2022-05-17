class Calculator {
    constructor() {
        this.firstNumber = null
        this.secondNumber = null;
        this.numberHolder = ''
        this.operatorHolder = ''
        this.userInputNumber = ''
        this.userInputOperator = ''
    }

    add(){
        return this.firstNumber + this.secondNumber
    }

    subtract(){
        return this.firstNumber + this.secondNumber
    }

    multiply(){
        return this.firstNumber + this.secondNumber
    }

    divide(){
        return this.firstNumber + this.secondNumber
    }

    calculation(){
        if (this.operatorHolder === '+'){
            return this.add()
        } else if (this.operatorHolder === '-'){
            return this.subtract()
        } else if (this.operatorHolder === '×'){
            return this.multiply()
        } else if (this.operatorHolder === '/'){
            return this.divide()
        }
    }

}


let calculator = new Calculator();

// 1. find html elements
const numberButtons = document.querySelectorAll(".number");
const operationButtons = document.querySelectorAll(".operator");
const equalsButton = document.querySelector(".equals");
const displayOne = document.querySelector(".display-one");
const displayTwo = document.querySelector(".display-two");
const clearButton = document.querySelector(".clear");



//
// // 2. add click event...
for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener("click", numberBtnPressed)
}

for (let i = 0; i < operationButtons.length; i++) {
    operationButtons[i].addEventListener("click", operatorBtnPressed)
}

equalsButton.addEventListener("click", equalBtnPressed);
clearButton.addEventListener("click", clearBtnPressed);

function numberBtnPressed(event){
    calculator.userInputNumber = event.target.value
    calculator.numberHolder += calculator.userInputNumber
    displayTwo.innerText = calculator.numberHolder;
    if (calculator.operatorHolder === ''){
        calculator.firstNumber = Number(calculator.numberHolder)
    } else {
        calculator.secondNumber = Number(calculator.numberHolder)
    }
}

function operatorBtnPressed(event){
    calculator.userInputOperator = event.target.value;
    if (calculator.operatorHolder === ''){
        displayOne.innerText = calculator.firstNumber
    } else if(calculator.secondNumber !== null) {
        calculator.firstNumber = calculator.calculation()
        displayOne.innerText = calculator.firstNumber
        calculator.secondNumber = null
    }
    calculator.operatorHolder = calculator.userInputOperator
    displayTwo.innerText = ''
    calculator.numberHolder = ''
}

// when the use presses equal. You must show the result
function equalBtnPressed() {
    calculator.firstNumber = calculator.calculation()
    displayOne.innerText = calculator.firstNumber
    displayTwo.innerText = ''
    calculator.secondNumber = null
}

// clear values of all the variables...
function clearBtnPressed(){
    calculator.firstNumber = null;
    calculator.secondNumber = null;
    calculator.numberHolder = '';
    calculator.operatorHolder = '';
    displayOne.innerText = ''
    displayTwo.innerText = ''
}