'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    title: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Category.associate = function (models) {
    Category.hasMany(models.SubCategory, {
      foreignKey: 'categoryId',
      as: 'subcategories',
     
    })

  };
  return Category;
};