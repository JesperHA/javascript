const fs = require('fs')

const path = process.argv[2]

// function callback(err, data) {

//     if (err) {
//         console.log("error: " + err)
//     }

//     const lines = data.toString().split('\n').length - 1
//     console.log(lines)
// }

fs.readFile(path, function (err, data) {
    if (err){
        return console.log("error: " + err)
    }

    const lines = data.toString().split('\n').length - 1
    console.log(lines)
})