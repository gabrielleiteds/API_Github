const Sequelize = require('sequelize');
const dbconfig = require('../config/database');

const connection = new Sequelize(dbconfig);

try {
  connection.authenticate();
  console.log("conectado!");
} catch (error) {
  console.error("falha: ", error);
}

module.exports = connection;