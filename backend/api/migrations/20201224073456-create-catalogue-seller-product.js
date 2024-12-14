'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('CatalogueSellerProducts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      CatalogueId: {
        type: Sequelize.INTEGER,
        references:{
          model:'catalogues',
          key:'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
        
      },
      ProductsellerdetailId: {
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
    return queryInterface.dropTable('CatalogueSellerProducts');
  }
};