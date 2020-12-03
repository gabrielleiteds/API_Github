require('dotenv').config()
const api = require('./api/api');

// connection with database
require('./database/connection');

api.listen(process.env.PORT || 8000);