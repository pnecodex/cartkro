'use strict';
module.exports = (sequelize, DataTypes) => {
  const TodoItem = sequelize.define('TodoItem', {
    text: DataTypes.STRING,
    todoId: DataTypes.INTEGER
  }, {});
  TodoItem.associate = function(models) {
    TodoItem.belongsTo(models.Todo,{
      as:'todo',
      foreignKey:'todoId',
    })
  };
  return TodoItem;
};