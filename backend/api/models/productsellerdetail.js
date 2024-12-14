'use strict';
module.exports = (sequelize, DataTypes) => {
  const Productsellerdetail = sequelize.define('Productsellerdetail', {
    name: DataTypes.STRING,
    price: DataTypes.STRING,
    image: DataTypes.STRING,
    stock: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
    childcategoryId: DataTypes.INTEGER,
  }, {});
  Productsellerdetail.associate = function(models) {
    // associations can be defined here
    Productsellerdetail.belongsTo(models.User,{
      as:'users',
      foreignKey: 'userId',
    });
    Productsellerdetail.belongsTo(models.Category,{
      as:'categories',
      foreignKey: 'categoryId',
    });
    Productsellerdetail.belongsTo(models.ChildCategory,{
      as:'childcategories',
      foreignKey: 'childcategoryId',
    });
    // Productsellerdetail.hasMany(models.Order,{
    //   as:'orders',
    //   foreignKey: 'productId',
    // });
    Productsellerdetail.belongsToMany(models.Color,{
      as:'colors',
      through: 'ProductEntery',
      foreignKey:'productselllerId',
      otherKey: 'colorId'
    })
    Productsellerdetail.belongsToMany(models.Size,{
      as:'sizes',
      through: 'ProductEntery',
      foreignKey:'productselllerId',
      // otherKey: 'colorId'
    })
     Productsellerdetail.belongsToMany(models.type,{
      as:'types',
      through: 'ProductEntery',
      foreignKey:'productselllerId',
      // otherKey: 'colorId'
    })
    
    Productsellerdetail.belongsToMany(models.SellerProductImage,{
      as:'sellerproductimages',
      through: 'SellerProductImageSellerProductDetail',
      foreignKey: 'sellerproductdetailId',
      otherKey:'sellerproductimageId'
    })
    Productsellerdetail.hasMany(models.SellImage,{
      foreignKey:'productsellerId',
      as:'sellimages'
    })
  Productsellerdetail.hasMany(models.ImagesGellery,{
    foreignKey:'productId',
    as:'ImagesGelleries',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  Productsellerdetail.hasMany(models.ProductVariation,{
    foreignKey:'sellerproductId',
    as:'productvariations',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  Productsellerdetail.hasMany(models.Variation,{
    foreignKey:'sellerproductId',
    as:'variations',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  Productsellerdetail.belongsToMany(models.Catalogue,{
    as:'catalogues',
    through: 'CatalogueSellerProduct',
    foreignKey: 'ProductsellerdetailId',
    otherKey:'CatalogueId'
  })
};
  return Productsellerdetail;
};