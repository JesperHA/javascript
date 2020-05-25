const name1 = "Jesper"

hoist(name1)
hoist(name2)

//function is hoisted to the top
function hoist(text) {
    if(text == undefined){
        console.log("name exist but is not defined")
    } else {
        console.log(text)
    }
}

// vars is hoisted to the "top" just below functions, but the decleration only happens on line 16, so it will show as undefined in function call.
var name2 = "Karl"