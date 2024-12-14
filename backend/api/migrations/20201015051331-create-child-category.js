'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ChildCategories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      // categoryId: {
      //   type: Sequelize.INTEGER,
      //   references:{
      //     model:'categories',
      //     key:'id'
      //   }
      // },
      // subcategoryId: {
      //   type: Sequelize.INTEGER,
      //   references:{
      //     model:'subcategories',
      //     key:'id'
      //   }
      
      // },
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
    return queryInterface.dropTable('ChildCategories');
  }
};