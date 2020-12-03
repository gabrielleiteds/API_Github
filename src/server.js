require('dotenv').config()
const api = require('./api/api');

api.listen(process.env.PORT || 8000);