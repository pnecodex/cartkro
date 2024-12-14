'use strict';
module.exports = (sequelize, DataTypes) => {
  const Variation = sequelize.define('Variation', {
    size: DataTypes.STRING,
    sellerSKU: DataTypes.STRING,
    saleprice: DataTypes.STRING,
    conditionId: DataTypes.INTEGER,
    qty: DataTypes.INTEGER,
    sellerproductId: DataTypes.UUID,
    cId: DataTypes.UUID
  }, {});
  Variation.associate = function (models) {
    Variation.belongsTo(models.Productsellerdetail,
      {
        foreignKey: 'sellerproductId',
        as: 'productsellerdetails'
      })
    Variation.belongsTo(models.Condition,
      {
        foreignKey: 'conditionId',
        as: 'conditions'
      })
    Variation.belongsTo(models.ProductVariation, {
      foreignKey: 'cId',
      as: 'productvariations'
    })
  };
  return Variation;
};