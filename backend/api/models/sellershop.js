'use strict';
module.exports = (sequelize, DataTypes) => {
  const SellerShop = sequelize.define('SellerShop', {
    name: DataTypes.STRING,
    market: DataTypes.STRING,
    location: DataTypes.STRING,
    address: DataTypes.STRING,
    sellerimage: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  SellerShop.associate = function(models) {
    // associations can be defined here
    SellerShop.belongsTo(models.User,{
      as:'users',
      foreignKey: 'userId'
    });
  };
  return SellerShop;
};