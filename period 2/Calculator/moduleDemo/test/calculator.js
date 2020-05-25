var expect    = require("chai").expect
var calculator = require("../lib/calculator")


describe("Calculator", function() {
    describe("Adder", function() {
        it("adds 2 numbers", function() {
            var sum = calculator.add(2, 3)

            expect(sum).to.equal(5)
        })
    })

    describe("subtract", function() {
        it("Subtracts 2 numbers", function () {
            var sum = calculator.subtract(5, 3)

            expect(sum).to.equal(2)
        })
    })

    describe("Multiplicator", function() {
        it("Multiplies 2 numbers", function(){
            var sum = calculator.multiply(5, 5)

            expect(sum).to.equal(25)
        })
    })

    describe("Divide", function() {
        it("Divides two numbers", function() {
            var sum = calculator.divide(20, 5)

            expect(sum).to.equal(4)
        })
    })
})