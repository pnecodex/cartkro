'use strict';
module.exports = (sequelize, DataTypes) => {
  const SellerProductImage = sequelize.define('SellerProductImage', {
    sellimg: DataTypes.STRING
  }, {});
  SellerProductImage.associate = function(models) {
    SellerProductImage.belongsToMany(models.Productsellerdetail,{
      as:'productsellerdetails',
      through: 'SellerProductImageSellerProductDetails',
      foreignKey:'sellerproductimageId',
      otherKey: 'sellerproductdetailId'
    })
  };
  return SellerProductImage;
};