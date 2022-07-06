let memory = {
    firstOperand: "",
    secondOperand: "",
    operator: "",
}
let digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
let i1 = true
let io = false
let i2 = false
const operation = document.getElementById("operation")
const number = document.getElementById("number")
let buttons = document.querySelectorAll("button")

function add(a, b) {
    return parseFloat(a) + parseFloat(b)
}

function subtract(a, b) {
    return parseFloat(a) - parseFloat(b)
}

function multiply(a, b) {
    return parseFloat(a) * parseFloat(b)
}

function divide(a, b) {
    if (b !== '0') {
        return parseFloat(a) / parseFloat(b)
    }
}

function operate(a, b, operator) {
    if (operator === "+") {
        return add(a, b)
    } else if (operator === "-") {
        return subtract(a, b)
    } else if (operator === "×") {
        return multiply(a, b)
    } else {
        return divide(a, b)
    }
}

function restart() {
    memory.firstOperand = ""
    memory.secondOperand = ""
    memory.operator = ""
    i1 = true
    io = false
    i2 = false
    number.textContent = ''
    operation.textContent = ''
}

function logic(button) {

    if (button.id === "clear") {
        restart()
    } else if (button.id in digits) {
        if (i1 === true) {
            memory.firstOperand += button.id
            number.textContent = memory.firstOperand
            operation.textContent = memory.firstOperand
        } else if (i2 === true) {
            memory.secondOperand += button.id
            number.textContent = memory.secondOperand
            operation.textContent = `${memory.firstOperand} ${memory.operator} ${memory.secondOperand}`
        } else {
            io = false
            i2 = true
            memory.secondOperand += button.id
            number.textContent = memory.secondOperand
            operation.textContent = `${memory.firstOperand} ${memory.operator} ${memory.secondOperand}`
        }
    } else if (button.id === "+" || button.id === "-" || button.id === "×" || button.id === "÷") {
        if (i1 === true && memory.firstOperand !== '') {
            i1 = false
            io = true
            memory.operator = button.id
            number.textContent = memory.operator
            operation.textContent = `${memory.firstOperand} ${memory.operator}`
        } else if (i2 === true) {
            i2 = false
            io = true
            memory.firstOperand = operate(memory.firstOperand, memory.secondOperand, memory.operator).toString()
            memory.secondOperand = ''
            memory.operator = button.id
            number.textContent = memory.operator
            operation.textContent = memory.firstOperand
        } else {
            memory.operator = button.id
            number.textContent = memory.operator
            memory.secondOperand = ''
            operation.textContent = `${memory.firstOperand} ${memory.operator}`

        }
    } else if (button.id === '=') {
        if (i2 === true) {

            operation.textContent = `${memory.firstOperand} ${memory.operator} ${memory.secondOperand} =`
            memory.firstOperand = operate(memory.firstOperand, memory.secondOperand, memory.operator).toString()
            number.textContent = memory.firstOperand
            memory.secondOperand = ''
            memory.operator = ''
            i2 = false
            i1 = true

        }
    } else if (button.id === 'delete') {
        if (i1 === true) {
            memory.firstOperand = memory.firstOperand.slice(0, -1)
            number.textContent = memory.firstOperand
            operation.textContent = memory.firstOperand
        } else if (i2 === true) {
            memory.secondOperand = memory.secondOperand.slice(0, -1)
            number.textContent = memory.secondOperand
            operation.textContent = `${memory.firstOperand} ${memory.operator} ${memory.secondOperand}`
        }
    }
    console.log(memory)
    console.log(i1, io, i2)
}

buttons.forEach(function (button) {
    button.addEventListener("mouseover", function () {
        button.classList.add("hovered")
    })
    button.addEventListener("mouseout", function () {
        button.classList.remove("hovered")
        button.classList.remove("clicked")
    })
    button.addEventListener("mousedown", function () {
        button.classList.add("clicked")
    })
    button.addEventListener("mouseup", function () {
        button.classList.remove("clicked")
        logic(button)
    })
})



