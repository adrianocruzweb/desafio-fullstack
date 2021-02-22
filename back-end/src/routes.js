const express = require('express')
const CompanieController = require('./controllers/CompanieController')
const UserController = require('./controllers/UserController')
const ClientController = require('./controllers/ClientController')
const ProductController = require('./controllers/ProductController')
const OrderController = require('./controllers/OrderController')

const routes = express.Router()

routes.get('/', (req, res) => {
  return res.json({ hello: 'world' })
})

routes.get('/companies', UserController.index)

routes.post('/companies/:companieId/users', UserController.store)

routes.post('/companies', CompanieController.store)




module.exports = routes