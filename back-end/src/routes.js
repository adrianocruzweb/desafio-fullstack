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

// list all companies
routes.get('/companies', CompanieController.index)
// create one companie
routes.post('/companies', CompanieController.store)
// find all users
routes.get('/users', UserController.indexAll)
// get all users to index
routes.get('/companies/:companieId/users', UserController.index)
// create one user
routes.post('/companies/:companieId/users', UserController.store)

module.exports = routes