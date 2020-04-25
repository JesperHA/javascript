
interface ImyFunc {
    (input1: string, input2: string, input3: string): Array<string>
}

let myFunc: ImyFunc = function (input1: string, input2: string, input3: string): Array<string>{
    return [input1, input2, input3]
}

console.log(myFunc("faggot", "greatness", "rappers"))

let myFunc2: ImyFunc = function (input1: string, input2: string, input3: string): Array<string>{
    return [input1.toUpperCase(), input2.toUpperCase(), input3.toUpperCase()]
}

console.log(myFunc2("faggot", "greatness", "rappers"))


let f2 = function logger(f1: ImyFunc){
    //Simulate that we get data from somewhere and uses the provided function
    let [ a, b, c] = ["A", "b", "C"];
    console.log(f1(a,b,c));
}

f2(myFunc)
f2(myFunc2)

function removeByIndex(str: string, i: number): string{
    return str.substring(i);
}

let s = removeByIndex("Hello world!", 3);

console.log(s)
// f2(s)