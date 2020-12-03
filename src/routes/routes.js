const routes = require('express').Router()

//controllers
const UserController = require('../controllers/UserController')
const Authcontroller = require('../controllers/AuthController')
const RepositoryController = require('../controllers/RepositoryController')

//middleware
const authentication = require('../middleware/auth')

//crud User
routes.post('/users', UserController.create)
routes.get('/users', UserController.show)
routes.put('/users/:id', UserController.update)
routes.delete('/users/:id', UserController.delete)

// Login and logout
routes.post('/login', Authcontroller.authenticate);
routes.post('/logout', Authcontroller.logoutUser);

routes.use(authentication)

routes.get('/profile', RepositoryController.show)
routes.post('/repositories', RepositoryController.create)

module.exports = routes;