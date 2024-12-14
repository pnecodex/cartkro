'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Catalogues', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cataloguename: {
        type: Sequelize.STRING
      },
      catalogueslug: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      },
      parentId: {
        type: Sequelize.INTEGER,
        references:{
          model:'catalogues',
          key:'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
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
    return queryInterface.dropTable('Catalogues');
  }
};