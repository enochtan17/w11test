'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Entrees', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(70),
        unique: true
      },
      description: {
        type: Sequelize.TEXT
      },
      price: {
        allowNull: false,
        type: Sequelize.NUMERIC(6, 2)
      },
      entreeTypeId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'EntreeTypes' }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Entrees');
  }
};
