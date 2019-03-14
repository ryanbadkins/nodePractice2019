const path = require('path')
const express = require('express')

const app = express()
const publicDirectory = path.join(__dirname, '../public');

app.use(express.static(publicDirectory))

app.get('/weather', (req, res)=>{
    res.send({
        forecast: 'snow',
        location: 'colorado springs'
    })
})

app.listen(3000, ()=>{
    console.log('Server is up on port 3000.')
})