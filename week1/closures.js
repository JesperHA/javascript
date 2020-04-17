
let makeCounter = function () {
    let privateCounter = 0;
    function changeBy(val) {
        privateCounter += val;
    }

    return {
        inc: () => {changeBy(1)},
        dec: () => {changeBy(-1)},
        value: () => {return privateCounter}
    }
};

var counter1 = makeCounter()
var counter2 = makeCounter()

counter1.inc();
counter2.dec();

console.log(counter1.value())
console.log(counter2.value())


let makePerson = function () {
    let privatePerson = {name: "stegt flæsk", age: "44"}

    function setAge(val) {
        privatePerson.age = val;
    }
    
    function setName(val) {
        privatePerson.name = val;
    }

    return {
        setAge: (age) => {setAge(age)},
        setName: (name) => {setName(name)},
        getInfo: () => {return privatePerson}
    }



};

const person1 = makePerson()
const person2 = makePerson()

person1.setName("Jesper")
person1.setAge("28")



console.log(person1.getInfo())
console.log(person2.getInfo())




class Person {
    constructor(name, age) {
        this._name = name
        this._age = age
    }

    set name(newName) {
        this._name = newName
    }

    set age(newAge) {
        this._age = newAge
    }

    get info() {

        let personInfo = this._name + ", " + this._age

        return personInfo
    }
}

let man = new Person("Jesper", "28")
let woman = new Person("Camilla", "28")
console.log(man.info)
console.log(woman.info)

man.name = "Raymond"

console.log(man.info)



