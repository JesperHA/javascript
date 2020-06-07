const express = require('express')
const gju = require('geojson-utils')
const {gameArea, players} = require('./gameData')


const app = express()
app.get('/', (req, res) => res.send('Geo Demo!'))





polygonForClient = {};
polygonForClient.coordinates = gameArea.coordinates[0].map(point => {
  return {latitude: point[1],longitude: point[0]}
})

//Returns a polygon, representing the gameArea
app.get("/geoapi/gamearea",(req,res)=>{
  res.json(polygonForClient);
//   res.json(gameArea)
});



app.get('/geoapi/isuserinarea/:lon/:lat', (req, res) => {
    const point = {"type":"Point","coordinates":[req.params.lon,req.params.lat]}

    var status = gju.pointInPolygon(point, gameArea)
    var msg = ""

    if(status){
        msg = "Point was inside the tested polygon"
    }else{
        msg = "Point was NOT inside tested polygon"
    }

    var response = {"status": status, "msg": msg}

    res.send(response)

})

app.get('/geoapi/findNearbyPlayers/:lon/:lat/:rad', (req, res) => {

    const point = {"type":"Point","coordinates":[req.params.lon,req.params.lat]}

    var playersInside = []

    for (var i in players) {
        if(gju.geometryWithinRadius(players[i].geometry, point, req.params.rad)){
            playersInside.push(players[i])
        }

    }


    res.send(playersInside)
})

app.get('/geoapi/distanceToUser/:lon/:lat/:username', (req, res) => {

    const point = {"type":"Point","coordinates":[req.params.lon,req.params.lat]}

    const player = players.find(element => element.properties.name == req.params.username)

    const playerPoint = player.geometry

    const distance = gju.pointDistance(point, playerPoint)
    
    const response = {"distance":distance, "to":player.properties.name}

    res.send(response)

})

app.listen(3000, () => console.log('Example app listening on port 3000!'))