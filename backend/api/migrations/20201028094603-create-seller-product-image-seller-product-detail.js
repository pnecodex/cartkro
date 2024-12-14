'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('SellerProductImageSellerProductDetails', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      // sellerproductimageId: {
      //   type: Sequelize.INTEGER,
      //   references:{
      //     model:'sellerproductimages',
      //     key:'id'
      //   },
      //   onDelete:'CASCADE',
      //   onUpdate:'CASCADE'
      // },
      sellerproductdetailId: {
        type: Sequelize.INTEGER,
        references:{
          model:'productsellerdetails',
          key:'id'
        },
        onDelete:'CASCADE',
        onUpdate:'CASCADE'
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
    return queryInterface.dropTable('SellerProductImageSellerProductDetails');
  }
};