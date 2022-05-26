class Calculator {
    constructor(name,age) {
        // this.name = name
        // this.age = age
        this.currentNumber = null;
        this.previousNumber = null;
        this.numberHolder = "";
        this.operatorHolder = "";
        this.userInputNumber = "";
        this.userInputOperator = "";
        this.displayOne = document.querySelector(".display-one");
        this.displayTwo = document.querySelector(".display-two");
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
        const numberButtons = document.querySelectorAll(".number");
        for (let i = 0; i < numberButtons.length; i++) {
            numberButtons[i].addEventListener("click", (event) => {
                this.userInputNumber = event.target.value;
                this.numberHolder += this.userInputNumber;
                this.updateNumber();
            });
        }
    }

    operatorBtnPressed() {
        const operationButtons = document.querySelectorAll(".operator");
        for (let i = 0; i < operationButtons.length; i++) {
            operationButtons[i].addEventListener("click", (event) => {
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
            });
        }
    }

    deleteBtnPressed() {
        const deleteButton = document.querySelector(".delete");
        deleteButton.addEventListener("click", () => {
            this.numberHolder = this.numberHolder.slice(0, -1);
            this.updateNumber();
        });
    }

    equalBtnPressed() {
        const equalsButton = document.querySelector(".equals");
        equalsButton.addEventListener("click", () => {
            if(this.currentNumber === null || this.operatorHolder === '') return
            this.currentNumber = this.calculation();
            this.displayOne.innerText = this.currentNumber;
            this.displayTwo.innerText = "";
            this.previousNumber = null;
        });
    }

    clearBtnPressed() {
        const clearButton = document.querySelector(".clear");
        clearButton.addEventListener("click", () => {
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

    // user1(){
    //     return `my name is ${this.name} and my age is ${this.age}`
    // }
}



let calculator = new Calculator('Rofy', 36);

// console.log(calculator.user1())
