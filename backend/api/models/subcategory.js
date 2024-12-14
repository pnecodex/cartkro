'use strict';
module.exports = (sequelize, DataTypes) => {
  const SubCategory = sequelize.define('SubCategory', {
    brandName: DataTypes.STRING,
    categoryId: DataTypes.INTEGER
  }, {});
  SubCategory.associate = function(models) {
    SubCategory.belongsTo(models.Category,{
      as:'categories',
      foreignKey:'categoryId'
      
    })
  };
  return SubCategory;
};