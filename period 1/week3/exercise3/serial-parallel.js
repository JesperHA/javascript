const fetch = require('node-fetch')
const now = require('performance-now')

const URL = "https://anapioficeandfire.com/api/characters/";
 
async function fetchPerson(url){
    const person = await fetch(url).then(data => data.json())
    return person
}
async function printNames() {

    let start = now()

    console.log("Before");
    const person1 = await fetchPerson(URL+'583');
    const person2 = await fetchPerson(URL+'2');
    console.log(person1.name);
    console.log(person2.name)
    console.log("After all"); 

    let end = now()
    console.log("speed of serial: " + start.toFixed(3)) // the number of milliseconds the current node process is running
    console.log("speed of serial: " + (end - start).toFixed(3)) // ~ 0.002 on my system
}

printNames()

async function fetchPersonParallel(url){

    let start = now()

    const names = []
    const person1 = await fetchPerson(URL+'583');
    names.push(person1.name)
    const person2 = await fetchPerson(URL+'2');
    names.push(person2.name)
    
    let end = now()
    console.log("Speed of parallel: " + start.toFixed(3)) // the number of milliseconds the current node process is running
    console.log("Speed of parallel: " + (end - start).toFixed(3)) // ~ 0.002 on my system
    return names
}

async function printNamesParallel() {
    const names = await fetchPersonParallel()
    console.log(names)

}

printNamesParallel()