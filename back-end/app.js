const express = require('express')
const app = express()

const routeProducts = require('./routes/products')

app.use('/produtos', routeProducts)

module.exports = app