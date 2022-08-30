class Calculator {
    constructor(
        displayOneSelector,
        displayTwoSelector,
        numberButtonsSelector,
        operationButtonsSelector,
        deleteButtonSelector,
        clearButtonSelector,
        equalsButtonSelector
    ) {
        this.currentNumber = null;
        this.previousNumber = null;
        this.numberHolder = "";
        this.operatorHolder = "";
        this.userInputNumber = "";
        this.userInputOperator = "";
        this.equal = "";

        this.displayOne = document.querySelector(displayOneSelector);
        this.displayTwo = document.querySelector(displayTwoSelector);
        this.numberButtons = document.querySelectorAll(numberButtonsSelector);
        this.operationButtons = document.querySelectorAll(operationButtonsSelector);
        this.deleteButton = document.querySelector(deleteButtonSelector);
        this.clearButton = document.querySelector(clearButtonSelector);
        this.equalsButton = document.querySelector(equalsButtonSelector);

        this.numberBtnPressed();
        this.operatorBtnPressed();
        this.equalBtnPressed();
        this.clearBtnPressed();
        this.deleteBtnPressed();
    }


    updateNumber() {
        this.displayTwo.innerText = this.numberHolder;
        if (this.operatorHolder === "") {
            this.currentNumber = Number(this.numberHolder);
        } else {
            this.previousNumber = Number(this.numberHolder);
        }
    }

    numberBtnPressed() {
        for (let i = 0; i < this.numberButtons.length; i++) {
            this.numberButtons[i].addEventListener("click", (event) => {
                if(this.equal !== '') return
                this.userInputNumber = event.target.value;
                this.numberHolder += this.userInputNumber;
                this.updateNumber();
            });
        }
    }

    operatorBtnPressed() {
        for (let i = 0; i < this.operationButtons.length; i++) {
            this.operationButtons[i].addEventListener("click", (event) => {
                if(this.currentNumber === null) return
                this.userInputOperator = event.target.value;
                if (this.operatorHolder === "") {
                    this.displayOne.innerText = this.currentNumber;
                } else if (this.previousNumber !== null) {
                    this.currentNumber = this.calculation();
                    this.displayOne.innerText = this.currentNumber;
                    this.previousNumber = null;
                }
                this.operatorHolder = this.userInputOperator;
                this.displayTwo.innerText = "";
                this.numberHolder = "";
                this.equal = ''
            });
        }
    }

    deleteBtnPressed() {
        this.deleteButton.addEventListener("click", () => {
            this.numberHolder = this.numberHolder.slice(0, -1);
            this.updateNumber();
        });
    }

    equalBtnPressed() {
        this.equalsButton.addEventListener("click", (event) => {
            if(this.currentNumber === null || this.operatorHolder === '') return
            this.equal = event.target.value;
            this.currentNumber = this.calculation();
            this.displayOne.innerText = this.currentNumber;
            this.displayTwo.innerText = "";
            this.numberHolder = ''
            this.operatorHolder = ''
            this.previousNumber = null;
        });

    }

    clearBtnPressed() {
        this.clearButton.addEventListener("click", () => {
            this.currentNumber = null;
            this.previousNumber = null;
            this.numberHolder = "";
            this.operatorHolder = "";
            this.displayOne.innerText = "";
            this.displayTwo.innerText = "";
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

