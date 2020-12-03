'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false,
        field: 'id'
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'name'
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'email'
      },
      avatar_url: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'avatar_url'
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'username'
      },
      biography: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'biography'
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'password'
      },
      latitude: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'latitude'
      },
      longitude: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'longitude'
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        field: 'created_at'
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        field: 'updated_at'
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};
