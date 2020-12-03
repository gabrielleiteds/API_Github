const routes = require('express').Router()

//controllers
const UserController = require('../controllers/UserController')
const Authcontroller = require('../controllers/AuthController')

//crud User
routes.post('/users', UserController.create)
routes.get('/users', UserController.show)
routes.put('/users/:id', UserController.update)
routes.delete('/users/:id', UserController.delete)

// Login and logout
routes.post('/login', Authcontroller.authenticate);
routes.post('/logout', Authcontroller.logoutUser);

module.exports = routes;