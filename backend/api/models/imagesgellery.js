'use strict';
module.exports = (sequelize, DataTypes) => {
  const ImagesGellery = sequelize.define('ImagesGellery', {
    imagegellery: DataTypes.STRING,
    variationId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER
  }, {});
  ImagesGellery.associate = function(models) {
    ImagesGellery.belongsTo(models.Productsellerdetail,{
      foreignKey:'productId',
        as:'products'
    })
    ImagesGellery.belongsTo(models.ProductVariation,{
      foreignKey:'variationId',
        as:'productvariations'
    })
  };
  return ImagesGellery;
};