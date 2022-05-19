class Calculator {
    constructor() {
        this.firstNumber = null
        this.secondNumber = null;
        this.numberHolder = ''
        this.operatorHolder = ''
        this.userInputNumber = ''
        this.userInputOperator = ''
    }

    numberBtnPressed(){
        for (let i = 0; i < numberButtons.length; i++) {
            numberButtons[i].addEventListener("click", event => {
                this.userInputNumber = event.target.value
                this.numberHolder += this.userInputNumber
                displayTwo.innerText = this.numberHolder;
                if (this.operatorHolder === ''){
                    this.firstNumber = Number(this.numberHolder)
                } else {
                    this.secondNumber = Number(this.numberHolder)
                }
            })
        }
    }

    operatorBtnPressed(){
        for (let i = 0; i < operationButtons.length; i++) {
            operationButtons[i].addEventListener("click", event => {
                this.userInputOperator = event.target.value;
                if (this.operatorHolder === ''){
                    displayOne.innerText = this.firstNumber
                } else if(this.secondNumber !== null) {
                    this.firstNumber = this.calculation()
                    displayOne.innerText = this.firstNumber
                    this.secondNumber = null
                }
                this.operatorHolder = this.userInputOperator
                displayTwo.innerText = ''
                this.numberHolder = ''
            })
        }
    }

    equalBtnPressed(){
        equalsButton.addEventListener("click", () => {
            this.firstNumber = this.calculation()
            displayOne.innerText = this.firstNumber
            displayTwo.innerText = ''
            this.secondNumber = null
        });
    }

    clearBtnPressed(){
        clearButton.addEventListener("click", () => {
            this.firstNumber = null;
            this.secondNumber = null;
            this.numberHolder = '';
            this.operatorHolder = '';
            displayOne.innerText = ''
            displayTwo.innerText = ''
        });
    }

    add(){
        return this.firstNumber + this.secondNumber
    }

    subtract(){
        return this.firstNumber - this.secondNumber
    }

    multiply(){
        return this.firstNumber * this.secondNumber
    }

    divide(){
        return this.firstNumber / this.secondNumber
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

calculator.numberBtnPressed()
calculator.operatorBtnPressed()
calculator.equalBtnPressed()
calculator.clearBtnPressed()