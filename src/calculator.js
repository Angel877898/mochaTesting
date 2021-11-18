const add = (a, b) => a + b 
const divide = (a, b) => b !== 0 ? (a / b) :undefined
const multiply = (a, b) => a * b
const substract = (a, b) => a - b
module.exports = {
    add,
    divide,
    multiply,
    substract,
}