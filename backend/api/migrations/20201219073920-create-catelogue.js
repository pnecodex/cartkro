'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Catelogues', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cateloguename: {
        type: Sequelize.STRING
      },
      parentId: {
        type: Sequelize.INTEGER,
        references:{
          model:'catelogues',
          key:'id'
        },
        // allowNull:false,
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
    return queryInterface.dropTable('Catelogues');
  }
};