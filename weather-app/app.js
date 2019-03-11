const request = require('request')

const url ='https://api.darksky.net/forecast/5363acf84c2c69caa9080936d5d17453/37.8267,-122.4233?units=us'

request({url: url, json: true}, (error, response)=>{
    console.log(`${response.body.daily.data[0].summary}It is currently ${response.body.currently.temperature} degrees out. There is a ${response.body.currently.precipProbability}% chance of rain.`)    
})

//Geocoding
//Address -> long.lat -> weather

const apiurl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoicnNoaXp6bGUiLCJhIjoiY2p0M3N5c3ppMHVucDQ0cGNwbmF1bDcxNyJ9.nxLxNAc2ErKZL0DngwfwBQ&limit=1'

request({url:apiurl,json:true}, (error, response)=>{
    console.log(`Long: ${response.body.features[0].center[0]} \nLat: ${response.body.features[0].center[1]}`)
})