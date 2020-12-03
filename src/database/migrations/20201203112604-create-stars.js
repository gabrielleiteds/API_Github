'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('stars', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false,
        field: 'id'
      },
      user_id: {
        type: Sequelize.STRING,
        references: {
          model: "users",
          key: "id",
          onUpdate: "CASCADE",
          onDelete: "CASCADE",
        },
        allowNull: false,
        field: 'user_id'
      },
      repository_id: {
        type: Sequelize.STRING,
        references: {
          model: "repositories",
          key: "id",
          onUpdate: "CASCADE",
          onDelete: "CASCADE",
        },
        allowNull: false,
        field: 'repository_id'
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
    await queryInterface.dropTable('stars');
  }
};
