const express = require('express')
const app = express()

const routeProducts = require('./routes/products')

//suporte a infileiramento
app.use(express.urlencoded({ extended: false }));

app.use('/produtos', routeProducts)

module.exports = app