const path = require('path')
const express = require('express')


const app = express()

// Define Paths for Express config
const publicDirectory = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates')

// Setup handlebars engine and views location
app.set('view engine','hbs')
app.set('views',viewsPath)

// Setup static directory to serve
app.use(express.static(publicDirectory))

app.get('',(req, res)=>{
    res.render('index',{
        title:'WEATHER app',
        name: 'Ryan Adkins'
    })
})

app.get('/about',(req, res)=>{
    res.render('about',{
        title:'About Me',
        name:'Ryan Adkins'
    })
})

app.get('/help', (req,res)=>{
    res.render('help',{
        message: 'Need help?',
        text:'Come see me for once'
    })
})

app.get('/weather', (req, res)=>{
    res.send({
        forecast: 'snow',
        location: 'colorado springs'
    })
})

app.listen(3000, ()=>{
    console.log('Server is up on port 3000.')
})