'use strict';
module.exports = (sequelize, DataTypes) => {
  const CatalogueProduct = sequelize.define('CatalogueProduct', {
    catalogue: DataTypes.STRING,
    parentId: DataTypes.INTEGER
  }, {});
  CatalogueProduct.associate = function(models) {
    // associations can be defined here
  };
  return CatalogueProduct;
};