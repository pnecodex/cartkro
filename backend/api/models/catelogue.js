'use strict';
module.exports = (sequelize, DataTypes) => {
  const Catelogue = sequelize.define('Catelogue', {
    cateloguename: DataTypes.STRING,
    parentId: DataTypes.INTEGER
  }, {});
  Catelogue.associate = function(models) {
    // associations can be defined here
    Catelogue.belongsTo(models.Catelogue,{
      as: 'catelogues',
      foreignKey: 'parentId',
    })
  };
  return Catelogue;
};