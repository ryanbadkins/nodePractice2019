const path = require('path')
const express = require('express')
const hbs = require('hbs')


const app = express()

// Define Paths for Express config
const publicDirectory = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')


// Setup handlebars engine and views location
app.set('view engine','hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectory))

app.get('',(req, res)=>{
    res.render('index',{
        title:'weather app',
        name: 'ryan adkins'
    })
})

app.get('/about',(req, res)=>{
    res.render('about',{
        title:'about me',
        name:'ryan adkins'
    })
})

app.get('/help', (req,res)=>{
    res.render('help',{
        title: 'help',
        name: 'ryn adkins',
        message: 'need help?',
    })
})

app.get('/weather', (req, res)=>{
    res.send({
        forecast: 'snow',
        location: 'colorado springs'
    })
})

app.get('/help/*',(req,res)=>{
    res.render('404page',{
        title: '404',
        name:'ryn adkins',
        errorMessage:'Help article not found'
    })
})

//404 page, handles all other routes that havent been set
app.get('*',(req,res)=>{
    res.render('404page',{
        title: '404',
        name:'ryn adkins',
        errorMessage:'Page not found'
    })
})
// set u the server on 3000 port localhost
app.listen(3000, ()=>{
    console.log('Server is up on port 3000.')
})