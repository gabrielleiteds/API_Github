const routes = require('express').Router()

//controllers
const UserController = require('../controllers/UserController')
const Authcontroller = require('../controllers/AuthController')
const RepositoryController = require('../controllers/RepositoryController')

//middleware
const authentication = require('../middleware/auth')
const StarController = require('../controllers/StarController')
const FollowController = require('../controllers/FollowController')

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
routes.put('/repositories/:id', RepositoryController.update)
routes.delete('/repositories/:id', RepositoryController.delete)

routes.post('/stars/:repository_id', StarController.create)
routes.get('/stars', StarController.show)
routes.delete('/stars/:stars_id', StarController.delete)

routes.post('/follow/:user_follower', FollowController.create)
routes.get('/follow', FollowController.show)

module.exports = routes;