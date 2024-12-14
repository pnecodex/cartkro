'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Variations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      size: {
        type: Sequelize.STRING
      },
      sellerSKU: {
        type: Sequelize.STRING
      },
      saleprice: {
        type: Sequelize.STRING
      },
      conditionId: {
        type: Sequelize.INTEGER,
        references: { 
          model: 'conditions',
          key: 'id' 
        },
         onDelete: 'CASCADE',
         onUpdate: 'CASCADE'
      },
      qty: {
        type: Sequelize.INTEGER
      },
      sellerproductId: {
        type: Sequelize.INTEGER,
        references:{
          model:'productsellerdetails',
          key:'id'
        },
         onDelete: 'CASCADE',
         onUpdate: 'CASCADE'
      },
      cId: {
        type: Sequelize.INTEGER,
        references: { 
          model: 'productvariations',
          key: 'id' 
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
    return queryInterface.dropTable('Variations');
  }
};