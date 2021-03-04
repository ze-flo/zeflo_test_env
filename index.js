function add(a, b) {
    return a + b
}

function multiply(a, b) {
    return a * b
}

function divide(a = 0, b = 0) {
    if (b === 0) throw new Error("can't divide by 0")

    return a / b
}

module.exports = {
    add,
    multiply,
    divide,
}
