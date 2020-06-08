const crypt = require('crypto')

let randomArray = []

crypt.randomBytes(48, function(err, buffer) {
    let secureHex = buffer.toString('hex')
    randomArray.push(secureHex)
    
    crypt.randomBytes(40, function(err, buffer) {
        let secureHex = buffer.toString('hex')
        randomArray.push(secureHex)
        
        crypt.randomBytes(32, function(err, buffer) {
            let secureHex = buffer.toString('hex')
            randomArray.push(secureHex)
            
            crypt.randomBytes(24, function(err, buffer) {
                let secureHex = buffer.toString('hex')
                randomArray.push(secureHex)

                crypt.randomBytes(16, function(err, buffer) {
                    let secureHex = buffer.toString('hex')
                    randomArray.push(secureHex)

                    crypt.randomBytes(8, function(err, buffer) {
                        let secureHex = buffer.toString('hex')
                        randomArray.push(secureHex)
                        console.log(randomArray)
                      });
                  });
              });
          });
      });
  });


function makeSecureRandom(size) {
    return new Promise(function(resolve, reject){
        crypt.randomBytes(size, function(err, buffer) {
            resolve(buffer.toString('hex'))
        })

    })
}
  
makeSecureRandom(48)
.then(function(response){
    console.log(response)
})

async function makeSecureRandomList(list){

        let jsonObject = {
        "title": "6 Secure Randoms",
        "randoms": []
        }

    let randomPromises = []
    for (let i of list){
        randomPromises.push(makeSecureRandom(i))
    }

    await Promise.all(randomPromises)
    .then(function(response){

        jsonObject.randoms = response
    })
    


    return jsonObject
}

module.exports = makeSecureRandomList