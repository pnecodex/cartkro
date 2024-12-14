'use strict';
module.exports = (sequelize, DataTypes) => {
  const Size = sequelize.define('Size', {
    name: DataTypes.STRING
  }, {});
  Size.associate = function(models) {
    // associations can be defined here
    // Size.belongsToMany(models.ProductEnter,{
    //   as:'sizes',
    //   through: 'productenters',
    // })
    Size.belongsToMany(models.Productsellerdetail,{
      as:'productsellerdetails',
      through: 'ProductEntery',
      foreignKey:'sizeId',
      // otherKey: 'productsellerId'
    })
  };
  return Size;
};