'use strict';
module.exports = (sequelize, DataTypes) => {
  const SellerProductImageSellerProductDetail = sequelize.define('SellerProductImageSellerProductDetail', {
    sellerproductimageId: DataTypes.INTEGER,
    sellerproductdetailId: DataTypes.INTEGER
  }, {});
  SellerProductImageSellerProductDetail.associate = function(models) {
    // associations can be defined here
  };
  return SellerProductImageSellerProductDetail;
};