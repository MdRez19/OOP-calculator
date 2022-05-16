// 1. find html elements
const numberButtons = document.querySelectorAll(".number");
const operationButtons = document.querySelectorAll(".operator");
const equalsButton = document.querySelector(".equals");
const displayOne = document.querySelector(".display-one");
const displayTwo = document.querySelector(".display-two");
const clearButton = document.querySelector(".clear");


class Calculator {
    constructor() {
       return
    }

}


let calculator = new Calculator();



//
// // 2. add click event...
for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener("click", function (event){

    });
}



// for (let i = 0; i < operationButtons.length; i++) {
//     operationButtons[i].addEventListener("click", calculator.operatorBtnPressed);
// }
// equalsButton.addEventListener("click", calculator.equalBtnPressed);
// clearButton.addEventListener("click", calculator.clearBtnPressed);

// ********
// Function
// ********
// function calculation(firstValue, operator, secondValue) {
//     if (operator === '+'){
//         return firstValue + secondValue
//     } else if (operator === '-'){
//         return firstValue - secondValue
//     } else if (operator === '×'){
//         return firstValue * secondValue
//     } else if (operator === '/'){
//         return firstValue / secondValue
//     }
// }

//****************
// calculator code
//****************

// put your variables here
// let firstNumber = null;
// let secondNumber = null;
// let numberHolder = '';
// let operatorHolder = '';




// when the user presses a number button
// function numberBtnPressed(event) {
//     let userInputNumber = event.target.value;
//     numberHolder += userInputNumber;
//     displayTwo.innerText = numberHolder
//     if (operatorHolder === ''){
//         firstNumber = Number(numberHolder)
//     } else {
//         secondNumber = Number(numberHolder)
//     }
// }

// when the user presses a operator button
// function operatorBtnPressed(event) {
//     let userInputOperator = event.target.value
//     if (operatorHolder === ''){
//         displayOne.innerText = firstNumber
//     } else if(secondNumber !== null) {
//         firstNumber = calculation(firstNumber, operatorHolder, secondNumber)
//         displayOne.innerText = firstNumber
//         secondNumber = null
//     }
//     operatorHolder = userInputOperator
//     displayTwo.innerText = ''
//     numberHolder = ''
// }

// when the use presss equal. You must show the result
// function equalBtnPressed() {
//     firstNumber = calculation(firstNumber, operatorHolder, secondNumber)
//     displayOne.innerText = firstNumber
//     displayTwo.innerText = ''
//     secondNumber = null
// }

// clear values of all the variables...
// function clearBtnPressed(){
//     firstNumber = null;
//     secondNumber = null;
//     numberHolder = '';
//     operatorHolder = '';
//     displayOne.innerText = ''
//     displayTwo.innerText = ''
// }