

const add = ((n1, n2) => {
    return n1 + n2
})

const subtract = ((n1, n2) => {
    return n1 - n2
})

const multiply = ((n1, n2) => {
    return n1 * n2
})

const divide = ((n1, n2) => {
    sum = n1 / n2

    if(!isFinite(sum)){
        throw new Error("Tried to divide by zero")
    } else {
        return sum
    }
})


module.exports = {add, subtract, multiply, divide}