
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://fullstackUser:1234@cluster0-zfyhy.gcp.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });



async function mongoTest() {
    try {

        await client.connect()
        const dogs = client.db("kennel")
        const dogsCollection = dogs.collection("dogs")
        await dogsCollection.insertMany([{name: "togo"}, {name:"Fido"}, {name:"Tut", race:"bulldog"}])
        await dogsCollection.insertOne({name:"Growler"})
        const allDogs = await dogsCollection.find({}).toArray()
        console.log(allDogs)
        
    } catch (error) {
        console.log(error)
    }
    finally {
        client.close()
        console.log("Closed conn")
    }
}

mongoTest()