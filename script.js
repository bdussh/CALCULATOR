let input1 = 0
let input2 = 0
let inputOperator
let i1 = true
let io = false
let i2 = false
const operation = document.getElementById("operation")
const number = document.getElementById("number")
let buttons = document.querySelectorAll("button")
number.textContent = `${input1}`

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
    if (i1 === true) {

        if (button.id === "+" || button.id === "-" || button.id === "/" || button.id === "*") {

            inputOperator = button.id
            number.textContent = `${inputOperator}`
            i1 = false
            io = true

        } else if (typeof parseInt(button.id) === "number") {

            if (input1 === 0) {
                input1 = parseInt(button.id)
            } else {
                input1 = input1 * 10 + parseInt(button.id)
            }
            number.textContent = `${input1}`
        }


    } else if (io === true) {
        if (button.id === "+" || button.id === "-" || button.id === "/" || button.id === "*") {
            inputOperator = button.id
            number.textContent = `${inputOperator}`
        } else if (typeof parseInt(button.id) === "number") {
            io = false
            i2 = true
            input2 = parseInt(button.id)
            number.textContent = `${input2}`
        }
    } else if (i2 === true) {
        if (typeof parseInt(button.id) === "number") {

            if (input2 === 0) {
                input2 = parseInt(button.id)
            } else {
                input2 = input2 * 10 + parseInt(button.id)
            }
            number.textContent = `${input2}`
        } else if (button.id === "+" || button.id === "-" || button.id === "/" || button.id === "*" || button.id === "=") {
            input1 = operate(input1, input2, inputOperator)
            number.textContent = `${input1}`
            input2 = 0
            inputOperator = null

            i2 = false
            i1 = true
        }

    }
console.log(input1, input2, inputOperator)

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

