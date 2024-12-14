'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    qty: DataTypes.INTEGER,
    price: DataTypes.STRING,
    // productId: DataTypes.INTEGER,
    checkoutId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  Order.associate = function (models) {
    // associations can be defined here
    Order.belongsTo(models.Checkout, {
      as: 'checkouts',
      foreignKey: 'checkoutId',

    });
    // Order.belongsTo(models.Product, {
    //   as: 'products',
    //   foreignKey: 'productId',

    // });
    // Order.belongsTo(models.Productsellerdetail, {
    //   as: 'productsellerdetails',
    //   foreignKey: 'productId',

    // });
    // Order.belongsTo(models.User, {
    //   as: 'users',
    //   foreignKey: 'userId',

    // }); 
  };
  return Order;
};