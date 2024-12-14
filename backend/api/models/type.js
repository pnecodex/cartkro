'use strict';
module.exports = (sequelize, DataTypes) => {
  const type = sequelize.define('type', {
    name: DataTypes.STRING
  }, {});
  type.associate = function(models) {
    // associations can be defined here
    // type.belongsToMany(models.ProductEnter,{
    //   as:'types',
    //   through: 'productenters',
    // })
    type.belongsToMany(models.Productsellerdetail,{
      as:'productsellerdetails',
      through: 'ProductEntery',
      foreignKey:'typeId',
      // otherKey: 'productsellerId'
    })
  };
  return type;
};