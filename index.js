function sum(a = 0, b = 0) {
    return a + b
}

function multiply(a, b) {
    return a * b
}

function divide(a = 0, b = 0) {
    if (b === 0) throw new Error("can't divide by 0")

    return a / b
}

function subtract(a, b) {
    return a - b
}

function identity(v) {
    return v
}

module.exports = {
    sum,
    multiply,
    divide,
    subtract,
    identity,
}
