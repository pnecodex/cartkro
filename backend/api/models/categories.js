'use strict';
module.exports = (sequelize, DataTypes) => {
  const Categories = sequelize.define('Categories', {
    title: DataTypes.STRING,
    parentId: DataTypes.INTEGER
  }, {});
  Categories.associate = function(models) {
    // Categories.
  };
  return Categories;
};