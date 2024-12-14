'use strict';
module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define('Todo', {
    title: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  Todo.associate = function(models) {
    Todo.belongsTo(models.User,{
      as:'users',
      foreignKey: 'userId',

    });
    Todo.hasMany(models.TodoItem,{
      as:'todoitems',
      foreignKey: 'todoId',

    })

  };
  return Todo;
};