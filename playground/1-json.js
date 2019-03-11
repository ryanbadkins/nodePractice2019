const fs = require('fs')
// const book = {
//     title:'Ego is the enemy',
//     author: 'Ryan Holidaze'
// }

// const bookJson =JSON.stringify(book)

// fs.writeFileSync('1-json.json', bookJson);

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON)
// console.log(data.title)

//Load and parse the data in 1json file
//change the name and age property using my info
//stringify and overwrite original data

const dataBuffer2 = fs.readFileSync('1-json.json')
const dataJason = dataBuffer2.toString();
const data = JSON.parse(dataJason);

data.name = "ryan";
data.age ="23";

const modified = JSON.stringify(data);
fs.writeFileSync('1-json.json', modified);




