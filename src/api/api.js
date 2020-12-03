const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session')
const cookieParser = require('cookie-parser')
const cors = require('cors');

const routes = require('../routes/routes');

const api = express();

api.use(cors());
api.use(cookieParser())
api.use(bodyParser.urlencoded({ extended: true }));
api.use(bodyParser.json());
api.use(routes)

module.exports = api; 