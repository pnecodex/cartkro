'use strict';
module.exports = (sequelize, DataTypes) => {
  const Condition = sequelize.define('Condition', {
    condition: DataTypes.STRING
  }, {});
  Condition.associate = function(models) {
    // associations can be defined here
    Condition.hasMany(models.ProductVariation,{
      foreignKey:'conditionId',
      as:'productvariations'
    })
  };
  return Condition;
};