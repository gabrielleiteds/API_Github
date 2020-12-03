const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');
const bcryptjs = require('bcryptjs');
const uuid = require('uuid');

const ROUNDS = 10;


const User = sequelize.define("User", {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  biography: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  avatar_url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  latitude: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  longitude: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
}, {
  hooks: {
    afterValidate: async (user) => {
      // generate uuid v4:
      user.id = uuid.v4();

      // encrypt the password:
      if (user.password)
        user.password = await bcryptjs.hash(user.password, ROUNDS);
    }
  },
  sequelize,
  tableName: 'users',
  underscored: true
});

User.prototype.comparePassword = function (password) {
  return bcryptjs.compare(password, this.password);
}

module.exports = User;