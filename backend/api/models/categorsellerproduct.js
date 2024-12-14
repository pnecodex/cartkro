'use strict';
module.exports = (sequelize, DataTypes) => {
  const CategorSellerProduct = sequelize.define('CategorSellerProduct', {
    categoryName: DataTypes.STRING,
    image: DataTypes.STRING,
    mainCategory: DataTypes.STRING
  }, {});
  CategorSellerProduct.associate = function(models) {
    // associations can be defined here
  };
  return CategorSellerProduct;
};