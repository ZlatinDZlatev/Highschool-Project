const express = require('express')
const bodyParser = require('body-parser')
const cors= require('cors')
const app = express()
const db = require('./queries')
const port = 4000
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.use(cors())
app.get('/login', db.login)
app.post('/register', db.createUser)
app.post('/add-product', db.addProduct)
app.get('/laptops', db.getLaptops)
app.get('/get-product', db.getProduct)
app.get('/filter',  db.filter)
app.get('/filter-monitors',  db.filterMonitors)
app.put('/edit-product', db.editProduct)
app.delete('/delete-product', db.deleteProduct)
app.post('/update-cart', db.updateCart)
app.get('/get-cart', db.getCart)
app.delete('/delete-from-cart', db.deleteFromCart)
app.delete('/delete-all', db.deleteAll)
app.get('/get-user', db.getUser)
app.get('/get-first', db.getFirst)
app.get('/get-second', db.getSecond)
app.get('/homepage', db.homePage)
  app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })
