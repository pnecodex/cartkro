'use strict';
module.exports = (sequelize, DataTypes) => {
  const SellImage = sequelize.define('SellImage', {
    sellimage: DataTypes.STRING,
    productsellerId: DataTypes.INTEGER
  }, {});
  SellImage.associate = function(models) {
    SellImage.belongsTo(models.Productsellerdetail,{
      foreignKey:'productsellerId',
        as:'productsellerdetails'
    })
  };
  return SellImage;
};