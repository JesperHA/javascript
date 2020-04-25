
function reverseArr<T>(array: Array<T>){
    return array.reverse()
}





console.log(reverseArr<string>(["a","b","c"]));
console.log(reverseArr<number>([1,2,3]));
console.log(reverseArr<boolean>([true,true,false]));
// kan godt compiles til og køre fint. Men står som fejl i Typescript da det er mod reglerne her, men ikke i javascript.
//console.log(reverseArr<number>(["a","b","c"]));

class DataHolder<T> {
    private _value: T

    constructor(value: T){
        this._value = value
    }

    set value(input: T){
        this._value = input
    }

    get value(): T {
        return this._value
    }

}

let d = new DataHolder<string>("Hello")
console.log(d.value)
d.value = "World"
console.log(d.value)

let d2 = new DataHolder<number>(123);
console.log(d2.value)
d2.value = 500;
console.log(d2.value)

let d3 = new DataHolder<string>("Space Engineer");
console.log(d3.value)
// d3.value = 8500
// console.log(d3.value)