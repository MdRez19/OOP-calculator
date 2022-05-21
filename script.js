class Calculator {
    constructor() {
        this.currentNumber = null;
        this.previousNumber = null;
        this.numberHolder = "";
        this.operatorHolder = "";
        this.userInputNumber = "";
        this.userInputOperator = "";
    }

    updateNumber() {
        displayTwo.innerText = this.numberHolder;
        if (this.operatorHolder === "") {
            this.currentNumber = Number(this.numberHolder);
        } else {
            this.previousNumber = Number(this.numberHolder);
        }
    }

    numberBtnPressed() {
        for (let i = 0; i < numberButtons.length; i++) {
            numberButtons[i].addEventListener("click", (event) => {
                this.userInputNumber = event.target.value;
                this.numberHolder += this.userInputNumber;
                this.updateNumber();
            });
        }
    }

    operatorBtnPressed() {
        for (let i = 0; i < operationButtons.length; i++) {
            operationButtons[i].addEventListener("click", (event) => {
                this.userInputOperator = event.target.value;
                if (this.operatorHolder === "") {
                    displayOne.innerText = this.currentNumber;
                } else if (this.previousNumber !== null) {
                    this.currentNumber = this.calculation();
                    displayOne.innerText = this.currentNumber;
                    this.previousNumber = null;
                }
                this.operatorHolder = this.userInputOperator;
                displayTwo.innerText = "";
                this.numberHolder = "";
            });
        }
    }

    deleteBtnPressed() {
        deleteButton.addEventListener("click", () => {
            this.numberHolder = this.numberHolder.slice(0, -1);
            this.updateNumber();
        });
    }

    equalBtnPressed() {
        equalsButton.addEventListener("click", () => {
            this.currentNumber = this.calculation();
            displayOne.innerText = this.currentNumber;
            displayTwo.innerText = "";
            this.previousNumber = null;
        });
    }

    clearBtnPressed() {
        clearButton.addEventListener("click", () => {
            this.currentNumber = null;
            this.previousNumber = null;
            this.numberHolder = "";
            this.operatorHolder = "";
            displayOne.innerText = "";
            displayTwo.innerText = "";
        });
    }

    add() {
        return this.currentNumber + this.previousNumber;
    }

    subtract() {
        return this.currentNumber - this.previousNumber;
    }

    multiply() {
        return this.currentNumber * this.previousNumber;
    }

    divide() {
        return this.currentNumber / this.previousNumber;
    }

    calculation() {
        if (this.operatorHolder === "+") {
            return this.add();
        } else if (this.operatorHolder === "-") {
            return this.subtract();
        } else if (this.operatorHolder === "×") {
            return this.multiply();
        } else if (this.operatorHolder === "/") {
            return this.divide();
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
const deleteButton = document.querySelector(".delete");

calculator.numberBtnPressed();
calculator.operatorBtnPressed();
calculator.equalBtnPressed();
calculator.clearBtnPressed();
calculator.deleteBtnPressed();