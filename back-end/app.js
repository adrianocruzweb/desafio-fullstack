const express = require('express')
const app = express()
const { User } = require('./app/models');

const routeProducts = require('./routes/products')

User.create({ name: 'Claudio', email: 'claudio@rocketseat.com.br', password: '123456' });

//suporte a infileiramento
app.use(express.urlencoded({ extended: false }));

app.use('/produtos', routeProducts)

module.exports = app