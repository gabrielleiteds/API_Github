'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('repositories', {
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
      description: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'description'
      },
      public: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      slug: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'slug'
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
    await queryInterface.dropTable('repositories');
  }
};
