
const gameArea = {

          "type": "Polygon",
          "coordinates": [
            [
              [
                14.713869094848633,
                55.09393975683798
              ],
              [
                14.723224639892578,
                55.10415439652715
              ],
              [
                14.700994491577147,
                55.10454721515625
              ],
              [
                14.701080322265627,
                55.09197510378122
              ],
              [
                14.713869094848633,
                55.09393975683798
              ]
            ]
          ]

}




const players = [
    {
    "type": "Feature",
    "properties": {"name":"Jesper"},
    "geometry": {
        "type": "Point",
        "coordinates": [
            14.713311195373533,
            55.099342054955486
        ]
    }
    },
    {
    
    "type": "Feature",
    "properties": {"name": "Camilla"},
    "geometry": {
        "type": "Point",
        "coordinates": [
        14.710607528686522,
        55.0988509671129
        ]
    }
    },
    {
    
    "type": "Feature",
    "properties": {"name": "Patricia"},
    "geometry": {
        "type": "Point",
        "coordinates": [
        14.722967147827148,
        55.09590431335252
        ]
    }
    
    },
    {
    
    "type": "Feature",
    "properties": {"name": "Liam"},
    "geometry": {
        "type": "Point",
        "coordinates": [
        14.719834327697754,
        55.093988871927465
        ]
    }
    
    },
    {

    "type": "Feature",
    "properties": {"name":"Olaf"},
    "geometry": {
        "type": "Point",
        "coordinates": [
        14.710178375244139,
        55.10476817393833
        ]
    }
    
    },
    {
    
    "type": "Feature",
    "properties": {"name":"Anna"},
    "geometry": {
        "type": "Point",
        "coordinates": [
        14.70695972442627,
        55.101551875583326
        ]
    }
    }
]

module.exports = {gameArea, players}
      
      