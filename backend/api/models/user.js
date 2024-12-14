'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    verifiedAccount: DataTypes.BOOLEAN
  }, {});
  User.associate = function(models) {
   // User.hasMany(models.Todo,{
   //   as: 'todos',
   //   foreignKey:'userId',
   // });
   // User.hasMany(models.Productseller,{
   //   as: 'productsellers',
   //   foreignKey:'userId',
   // });
   // User.belongsTo(models.Productseller,{
   //   as: 'productseller',
   //   foreignKey:'userId',
   // });
   User.hasMany(models.Productsellerdetail,{
     as: 'productsellerdetails',
     foreignKey:'userId',
   });
    User.hasMany(models.Order,{
     as: 'orders',
     foreignKey:'userId',
   });
    User.hasMany(models.SellerShop,{
     as: 'sellershops',
     foreignKey:'userId',
   });

   // User.belongsToMany(models.Order,{
   //      through: 'UserOrderProductseller'
   //  })
  // User.belongsToMany(models.Order,{
  //       as:'orders',
  //       through: 'OrderUsers',
  //       foreignKey:'userId',
  //       otherKey:'orderId'

  //   });
  User.belongsToMany(models.Order,{
        as:'orderes',
        through:'OrderUsers',
        foreignKey:'user_id',
        otherKey:'order_id'
    });
  };
  return User;
};