const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');
const uuid = require('uuid');

const Token = sequelize.define("Token", {
  id_token: {
    type: DataTypes.STRING,
    allowNull: false
  },
}, {
  hooks: {
    afterValidate: async (token) => {
      // generate uuid v4:
      token.id = uuid.v4();
    }
  },
  sequelize,
  tableName: 'tokens',
  underscored: true
});

module.exports = Token;