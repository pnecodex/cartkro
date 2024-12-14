'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.STRING,
    image: DataTypes.STRING,
    catalog_id: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN,

  }, {});
  Product.associate = function (models) {
    Product.belongsTo(models.Catalogue, {
      as: 'catalogue',
      foreignKey: 'catalog_id',
    });
    Product.hasMany(models.ProductSaleOffer, {
      as: 'productsaleoffers',
      foreignKey: 'product_id',
    });
    // Product.hasMany(models.Order, {
    //   as: 'orders',
    //   foreignKey: 'productId',
    // });
  };
  return Product;
};