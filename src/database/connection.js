const { Sequelize } = require('sequelize');

const config = require('../config/database');

const connection = new Sequelize(config);

try {
  connection.authenticate();
  console.log("conectado!");
} catch (error) {
  console.error("falha: ", error);
}


module.exports = connection;