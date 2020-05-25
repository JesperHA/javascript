const getSecureRandoms = require('./exercise1')

const makeRequest = () =>
    getSecureRandoms([48,40,32,24,16,8])
    .then(function(response){
        console.log("Promise: \n" + JSON.stringify(response) + "\n")

    })

makeRequest()


const makeAsyncRequest = async () => {
    let object
    await getSecureRandoms([48,40,32,24,16,8]).then(value => {
        object = value
    })
    console.log("async/await: \n" + JSON.stringify(object) + "\n")
    return "done"
}

makeAsyncRequest()


