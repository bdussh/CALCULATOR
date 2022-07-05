let firstOperand = 0
let secondOperand = 0
let operator
let i1 = true
let io = false
let i2 = false
const operation = document.getElementById("operation")
const number = document.getElementById("number")
let buttons = document.querySelectorAll("button")
number.textContent = `${firstOperand}`

function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    if (b !== 0) {
        return a / b
    }
}

function operate(a, b, operator) {
    if (operator === "+") {
        return add(a, b)
    } else if (operator === "-") {
        return subtract(a, b)
    } else if (operator === "*") {
        return multiply(a, b)
    } else {
        return divide(a, b)
    }
}

function logic(button) {
    console.log(` button.id ${button.id}`)
    console.log(firstOperand, secondOperand, operator)
}

buttons.forEach(function (button) {
    button.addEventListener("mouseover", function () {
        button.classList.add("hovered")
    })
    button.addEventListener("mouseout", function () {
        button.classList.remove("hovered")
    })
    button.addEventListener("mousedown", function () {
        button.classList.add("clicked")
    })
    button.addEventListener("mouseup", function () {
        button.classList.remove("clicked")
        logic(button)
    })
})


console.log(buttons)

