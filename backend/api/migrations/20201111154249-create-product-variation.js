'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ProductVariations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      color: {
        type: Sequelize.STRING
      },
      size: {
        type: Sequelize.STRING
      },
      sellersku: {
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
      saleprice: {
        type: Sequelize.DOUBLE
      },
      quentity: {
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
    return queryInterface.dropTable('ProductVariations');
  }
};