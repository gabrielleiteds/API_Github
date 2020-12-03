const routes = require('express').Router()

//controllers
const UserController = require('../controllers/UserController')

//crud User
routes.post('/users', UserController.create)
routes.get('/users', UserController.show)
routes.put('/users/:id', UserController.update)
routes.delete('/users/:id', UserController.delete)

module.exports = routes;