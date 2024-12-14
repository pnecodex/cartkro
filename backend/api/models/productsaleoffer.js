'use strict';
module.exports = (sequelize, DataTypes) => {
  const ProductSaleOffer = sequelize.define('ProductSaleOffer', {
    product_id: DataTypes.INTEGER,
    discount_price: DataTypes.STRING,
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE,
    status: DataTypes.BOOLEAN
  }, {});
  ProductSaleOffer.associate = function (models) {
    // associations can be defined here
    ProductSaleOffer.belongsTo(models.Product, {
      as: 'products',
      foreignKey: 'product_id',
    });
  };
  return ProductSaleOffer;
};