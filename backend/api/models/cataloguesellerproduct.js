'use strict';
module.exports = (sequelize, DataTypes) => {
  const CatalogueSellerProduct = sequelize.define('CatalogueSellerProduct', {
    CatalogueId: DataTypes.INTEGER,
    ProductsellerdetailId: DataTypes.INTEGER
  }, {});
  CatalogueSellerProduct.associate = function(models) {
    // associations can be defined here
  };
  return CatalogueSellerProduct;
};