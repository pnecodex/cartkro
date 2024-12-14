'use strict';
module.exports = (sequelize, DataTypes) => {
  const ProductEntery = sequelize.define('ProductEntery', {
    productselllerId: DataTypes.INTEGER,
    colorId: DataTypes.INTEGER,
    sizeId: DataTypes.INTEGER,
    typeId: DataTypes.INTEGER
  }, {});
  ProductEntery.associate = function(models) {
    // associations can be defined here
  };
  return ProductEntery;
};