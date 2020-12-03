const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');
const uuid = require('uuid');

const User = require('./User');
const Repository = require('./Repository');

const Star = sequelize.define('Star', {

}, {
  hooks:
  {
    afterValidate: async (repository) => {
      // generate uuid v4:
      repository.id = uuid.v4();
    }
  },
  sequelize,
  tableName: 'stars',
  underscored: true,
})

Repository.hasMany(Star, {
  as: 'stars'
})
Star.belongsTo(Repository, {
  foreignKey: 'repository_id',
  as: 'repositories'
})
Star.belongsTo(User, {
  foreignKey: 'user_id',
  as: 'users'
})

module.exports = Star;