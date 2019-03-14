const request = require('request')

const geocode = (address, callback)=>{
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoicnNoaXp6bGUiLCJhIjoiY2p0M3N5c3ppMHVucDQ0cGNwbmF1bDcxNyJ9.nxLxNAc2ErKZL0DngwfwBQ&limit=1`

    request({url, json:true},(error, {body})=>{
        if(error){
            callback('unable to connect to location services', undefined)
        }else if(body.features.length === 0){
            callback('unable to find location, try another search',undefined)
        }else{
            callback(undefined,{
                latitude: body.features[0].center[0],
                longitude: body.features[0].center[1],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode