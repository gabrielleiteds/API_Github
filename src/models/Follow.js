const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');
const uuid = require('uuid');

const User = require('./User');

const Follow = sequelize.define('Follow', {

}, {
  hooks:
  {
    afterValidate: async (repository) => {
      // generate uuid v4:
      repository.id = uuid.v4();
    }
  },
  sequelize,
  tableName: 'follows',
  underscored: true,
})

User.hasMany(Follow, {
  foreignKey: 'user_follower',
  as: 'follows'
})
Follow.belongsTo(User, {
  foreignKey: 'user_follower',
  as: 'users'
})

module.exports = Follow;