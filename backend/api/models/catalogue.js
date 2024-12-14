'use strict';
module.exports = (sequelize, DataTypes) => {
  const Catalogue = sequelize.define('Catalogue', {
    cataloguename: DataTypes.STRING,
    catalogueslug: DataTypes.STRING,
    image: DataTypes.STRING,
    parentId: DataTypes.INTEGER
  }, {});
  Catalogue.associate = function(models) {  
    Catalogue.belongsToMany(models.Productsellerdetail,{
      as:'productsellerdetails',
      through: 'CatalogueSellerProduct',
      foreignKey: 'CatalogueId',
      otherKey:'ProductsellerdetailId'
    });
    Catalogue.belongsTo(models.Catalogue,{
      as:'catalogues',
      foreignKey: 'parentId',
    });
    Catalogue.hasMany(models.Product,{
      as: 'products',
      foreignKey: 'catalog_id',
    })
  };
  return Catalogue;
};