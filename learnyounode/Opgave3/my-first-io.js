const fs = require('fs')

var buf = fs.readFileSync(process.argv[2])

const text = buf.toString()

const res = text.split("\n")

const numbers = res.length


console.log((numbers - 1))



