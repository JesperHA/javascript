const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://fullstackUser:1234@cluster0-zfyhy.gcp.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const express = require('express')

const app = express();
app.use(express.json())


app.get('/', (req, res) => res.send('Crud demo!'))

app.get('/setup', async (req, res) => {
    
    await client.connect()
    res.send("setup database")

    const gameDB = client.db("gameDB")
    const users = gameDB.collection("users")
    await users.insertMany([{name: "Jesper", userName: "Lamseben", age: "28"}, {name: "Camilla", userName: "Mille", age: "29"}, {name: "Patricia", userName: "Sisha", age: "3"}])
})


app.post('/create', async (req, res) => {
    await client.connect()
    const gameDB = client.db("gameDB")
    const users = gameDB.collection("users")

    let user = req.body
    await users.insertOne(user)
    res.send("Succes")

})

app.get('/:userName', async (req, res) => {
    
    await client.connect()
    const gameDB = client.db("gameDB")
    const users = gameDB.collection("users")
    
    let userName = req.params.userName
    let user = await gameDB.collection('users').findOne({"name": userName})
    res.json(user)
})

app.delete('/:userName', async (req, res) => {
    
    await client.connect()
    const gameDB = client.db("gameDB")
    const users = gameDB.collection("users")
    
    let userName = req.params.userName
    let user = await gameDB.collection('users').deleteOne({"name": userName})
    res.send("Succes")
})


app.listen(5000, () => console.log('Example app listening on port 5000!'))