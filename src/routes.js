const express = require('express');
const routes = express.Router();

//CONTROLLERS
const UserController = require('./controllers/UserController');

//USER ROTAS
routes.post('/users', UserController.create);
routes.get('/users', UserController.index);
routes.get('/users/:user_id', UserController.show);
routes.delete('/users/:user_id', UserController.delete);

module.exports = routes;