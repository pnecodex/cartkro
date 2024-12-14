'use strict';
module.exports = (sequelize, DataTypes) => {
  const Checkout = sequelize.define('Checkout', {
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    phone: DataTypes.STRING,
    city: DataTypes.STRING
  }, {});
  Checkout.associate = function(models) {
    // associations can be defined here
    Checkout.hasMany(models.Order)
  };
  return Checkout;
};