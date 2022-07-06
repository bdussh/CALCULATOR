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
    return Math.round((parseFloat(a) + parseFloat(b)) * 1000) / 1000
}

function subtract(a, b) {
    return Math.round((parseFloat(a) - parseFloat(b)) *1000) /1000
}

function multiply(a, b) {
    return Math.round(parseFloat(a) * parseFloat(b) *1000)/1000
}

function divide(a, b) {
    if (b !== '0') {
        return Math.round((parseFloat(a) / parseFloat(b))*1000)/1000
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

function display() {
    operation.textContent = `${memory.firstOperand} ${memory.operator} ${memory.secondOperand}`
    if (i1 === true) {
        number.textContent = memory.firstOperand
    } else if (i2 === true) {
        number.textContent = memory.secondOperand
    } else {
        number.textContent = memory.operator
    }
}

function buttonClear() {
    memory.firstOperand = ""
    memory.secondOperand = ""
    memory.operator = ""
    i1 = true
    io = false
    i2 = false
    display()
}


function buttonDigit(button) {
    if (i1 === true) {
        memory.firstOperand += button.id
        display()
    } else if (i2 === true) {
        memory.secondOperand += button.id
        display()
    } else {
        io = false
        i2 = true
        memory.secondOperand += button.id
        display()
    }
}

function buttonOperand(button) {
    if (i1 === true && memory.firstOperand !== '') {
        i1 = false
        io = true
        memory.operator = button.id
        display()
    } else if (i2 === true) {
        i2 = false
        io = true
        memory.firstOperand = operate(memory.firstOperand, memory.secondOperand, memory.operator).toString()
        memory.secondOperand = ''
        memory.operator = button.id
        display()
    } else {
        memory.operator = button.id
        memory.secondOperand = ''
        display()

    }
}

function buttonEqual() {
    if (i2 === true) {

        operation.textContent = `${memory.firstOperand} ${memory.operator} ${memory.secondOperand} =`
        memory.firstOperand = operate(memory.firstOperand, memory.secondOperand, memory.operator).toString()
        number.textContent = memory.firstOperand
        memory.secondOperand = ''
        memory.operator = ''
        i2 = false
        i1 = true

    }
}

function buttonDelete() {
    if (i1 === true) {
        memory.firstOperand = memory.firstOperand.slice(0, -1)
        display()
    } else if (i2 === true) {
        memory.secondOperand = memory.secondOperand.slice(0, -1)
        display()
    }
}

function buttonPoint() {
    if (i1 === true) {
        if (memory.firstOperand === '') {
            memory.firstOperand = '0.'
        } else if (!memory.firstOperand.includes('.')) {
            memory.firstOperand += '.'
        }
        display()

    } else if (i2 === true) {
        if (memory.secondOperand === '') {
            memory.secondOperand = '0.'
        } else if (!memory.secondOperand.includes('.')) {
            memory.secondOperand += '.'
        }
        display()
    }
}

function logic(button) {
    if (button.id === "clear") {
        buttonClear()
    } else if (button.id in digits) {
        buttonDigit(button)
    } else if (button.id === "+" || button.id === "-" || button.id === "×" || button.id === "÷") {
        buttonOperand(button)
    } else if (button.id === '=') {
        buttonEqual(button)
    } else if (button.id === 'delete') {
        buttonDelete()
    } else if (button.id === 'point') {
        buttonPoint()
    }
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



