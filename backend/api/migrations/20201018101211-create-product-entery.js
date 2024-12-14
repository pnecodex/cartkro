'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ProductEnteries', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      // productselllerId: {
      //   type: Sequelize.INTEGER,
      //   references:{
      //     model:'productsellerdetails',
      //     key:'id'
      //   },
      //   onDelete:'CASCADE',
      //   onUpdate:'CASCADE',
      // },
      colorId: {
        type: Sequelize.INTEGER,
        references:{
          model:'colors',
          key:'id'
        },
        onDelete:'CASCADE',
        onUpdate:'CASCADE',
      },
      sizeId: {
        type: Sequelize.INTEGER,
        references:{
          model:'sizes',
          key:'id'
        },
        onDelete:'CASCADE',
        onUpdate:'CASCADE',
        
      },
      typeId: {
        type: Sequelize.INTEGER,
        references:{
          model:'types',
          key:'id'
        },
        onDelete:'CASCADE',
        onUpdate:'CASCADE',
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
    return queryInterface.dropTable('ProductEnteries');
  }
};