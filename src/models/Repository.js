const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');
const uuid = require('uuid');

const User = require('./User')

const Repository = sequelize.define("Repository", {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  slug: {
    type: DataTypes.STRING,
    allowNull: false
  },
  public: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
}, {
  hooks:
  {
    afterValidate: async (repository) => {
      // generate uuid v4:
      repository.id = uuid.v4();
    }
  },
  sequelize,
  tableName: 'repositories',
  underscored: true,
})

User.hasMany(Repository, {
  as: 'repositories'
})
Repository.belongsTo(User, {
  foreignKey: 'user_id',
  as: 'users'
})

module.exports = Repository;