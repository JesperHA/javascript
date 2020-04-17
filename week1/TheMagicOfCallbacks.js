const myArray = ["Lars", "Jesper", "karl", "Flemming", "Bent"]

function myFilter(array, callback) {

    let filteredArray = []

    for (let i = 0; i < array.length; i++){
        if(callback(array[i])){
            filteredArray.push(array[i])
        }
    }
    
    return filteredArray
}

Array.prototype.myFilter = function(callback) {

    let filteredArray = []

    for (let i = 0; i < this.length; i++){
        if(callback(this[i])){
            filteredArray.push(this[i])
        }
    }
    
    return filteredArray
}

// const filtered = myArray.filter(function(name) {
//     return name.length > 5;
// })

const filtered = myArray.filter((name) => name.length > 5)

// const myFiltered = myArray.myFilter((name) => name.length > 5)

// const myFiltered = myArray.myFilter(function(name) {
//     return name.length > 5;
// })

console.log(myFilter(myArray, (name) => name.length > 5))
console.log(myArray.myFilter((name) => name.length > 5))
console.log(filtered)
// console.log(myFiltered)


function myMap(array, callback) {

    let mappedArray = []

    for (let i = 0; i < array.length; i++){
        mappedArray.push(callback(array[i]))
    }
    
    return mappedArray
}

Array.prototype.myMap = function (callback) {

    let mappedArray = []

    for (let i = 0; i < this.length; i++){
        mappedArray.push(callback(this[i]))
    }
    
    return mappedArray
}

console.log(myMap(myArray, (name) => name + "kek"))
console.log(myArray.myMap((name) => name + "kek"))

