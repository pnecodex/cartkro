'use strict';
module.exports = (sequelize, DataTypes) => {
  const Color = sequelize.define('Color', {
    name: DataTypes.STRING
  }, {});
  Color.associate = function(models) {
    // associations can be defined here
    Color.belongsToMany(models.Productsellerdetail,{
      as:'productsellerdetails',
      through: 'ProductEntery',
      foreignKey:'colorId',
      otherKey: 'productselllerId'
    })
  };
  return Color;
};