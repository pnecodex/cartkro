'use strict';
module.exports = (sequelize, DataTypes) => {
  const ProductVariation = sequelize.define('ProductVariation', {
    color: DataTypes.STRING,
    size: DataTypes.STRING,
    sellersku: DataTypes.STRING,
    conditionId: DataTypes.INTEGER,
    saleprice: DataTypes.DOUBLE,
    quentity: DataTypes.INTEGER,
    sellerproductId: DataTypes.INTEGER
  }, {});
  ProductVariation.associate = function (models) {
    // associations can be defined here
    ProductVariation.belongsTo(models.Condition,
      { 
        foreignKey: 'conditionId', 
        as: 'conditions' 
      })
    ProductVariation.belongsTo(models.Productsellerdetail,
      { 
        foreignKey: 'sellerproductId', 
        as: 'productsellerdetails' 
      })
    ProductVariation.hasMany(models.ImagesGellery,
      { 
        foreignKey: 'variationId', 
        as: 'imagesgelleries' 
      })
    ProductVariation.hasMany(models.Variation,
      { 
        foreignKey: 'cId', 
        as: 'variations' 
      })
  };
  return ProductVariation;
};