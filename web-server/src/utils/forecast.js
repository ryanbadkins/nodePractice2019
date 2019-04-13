const request = require('request')

const forecast = (lat, lon, callback)=>{
    const url = `https://api.darksky.net/forecast/5363acf84c2c69caa9080936d5d17453/${lon},${lat}`

    request({url, json:true}, (error, {body})=>{
        if(error){
            callback('unable to connect to weather services', undefined)
        }else if(body.error === 0){
            callback('unable to find longitude/latitude, try another search',undefined)
        }else{
            callback(undefined,`its currently ${body.currently.temperature} degrees out. there's a ${body.currently.precipProbability}% chance of precipitation.`)
        }
    })
}

module.exports = forecast