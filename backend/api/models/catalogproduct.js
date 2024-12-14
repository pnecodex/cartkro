'use strict';
module.exports = (sequelize, DataTypes) => {
  const CatalogProduct = sequelize.define('CatalogProduct', {
    catalogue: DataTypes.STRING,
    parentId: DataTypes.INTEGER
  }, {});
  CatalogProduct.associate = function(models) {
    
  };
  return CatalogProduct;
};