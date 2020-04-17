var all = ["Lars", "Peter", "Jan", "Bo"]

console.log(all.join(", #"))


var numbers = [2, 3, 67, 33]

function reduce(array) {
    sum = 0
    for (let i = 0; i < array.length; i++){
        sum = sum + array[i]
    }

    return sum
}

console.log(reduce(numbers))
const reducer = (accumulator, currentValue) => accumulator + currentValue;


console.log(numbers.reduce(reducer))
console.log(numbers.reduce((a, b) => a + b))

let members = [
    {name : "Peter", age: 18},
    {name : "Jan", age: 35},
    {name : "Janne", age: 25},
    {name : "Martin", age: 22},
   ]

   
const ageReducer = function(res, {age}, _, {length}){
    return res + age / length
}

console.log(members.reduce(ageReducer, 0))