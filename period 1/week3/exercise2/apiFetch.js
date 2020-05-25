 const fetch = require('node-fetch')

 const getFirstBooknameOfFounderOfAllegianceForPerson = id => {
     fetch("https://anapioficeandfire.com/api/characters/" + id)
     .then(response => response.json())
     .then(data => {
         console.log("name: " + data.name)

         fetch(data.allegiances[0])
         .then(response => response.json())
         .then(data => {
             console.log("Allegiance: " + data.name)

             fetch(data.founder)
             .then(response => response.json())
             .then(data => {
                 console.log("Founder: " + data.name)

                 fetch(data.books[0])
                 .then(response => response.json())
                 .then(data => {
                     console.log("Book: " + data.name)
                 })
             })
         })
     })
 }

 getFirstBooknameOfFounderOfAllegianceForPerson(583)

 async function getFirstBooknameOfFounderOfAllegianceForPersonAsync(id) {
     try {
        
        const a = await fetch("https://anapioficeandfire.com/api/characters/" + id).then(data => data.json())
        const b = await fetch(a.allegiances[0]).then(data => data.json())
        const c = await fetch(b.founder).then(data => data.json())
        const d = await fetch(c.books[0]).then(data => data.json())

        console.log("async/await: " + `Name: ${a.name}, Allegiance: ${b.name}, Founder: ${c.name}, Book: ${d.name}`)

        

     } catch (error) {
         console.log(error)
     }

 }

getFirstBooknameOfFounderOfAllegianceForPersonAsync(583)