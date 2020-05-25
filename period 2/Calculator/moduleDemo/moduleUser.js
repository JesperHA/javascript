var calculator = require("./lib/calculator")


try {
    console.log(calculator.divide(20, 0))
} catch (error) {
    console.log(error)
}
