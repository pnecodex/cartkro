'use strict';
module.exports = (sequelize, DataTypes) => {
  const ChildCategory = sequelize.define('ChildCategory', {
    name: DataTypes.STRING,
    categoryId: DataTypes.INTEGER,
    subcategoryId: DataTypes.INTEGER
  }, {});
  ChildCategory.associate = function(models) {
    ChildCategory.belongsTo(models.SubCategory,{
      as:'subcategories',
      foreignKey:'subcategoryId'
    });
    ChildCategory.belongsTo(models.Category,{
      as:'categories',
      foreignKey:'categoryId'
      
    })
  };
  return ChildCategory;
};