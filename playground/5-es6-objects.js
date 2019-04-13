//object property shorthand

const name = 'Ryan'
const userAge = 23

const user ={
    name,
    age: userAge,
    location: 'Colorado Springs'
}

console.log(user)

//Object destructuring
const product = {
    label:'Red notebook',
    price:3,
    stock: 201,
    salePrice: undefined,
    rating: 4.2
}

// const label = product.label
// const stock = product.stock

// const {label:productLabel, stock, rating =5} = product

// console.log(productLabel)
// console.log(stock)
// console.log(rating)

const trans =(type, {label, stock = 0}={})=>{
    console.log(type, label, stock)
}

trans('order', product)