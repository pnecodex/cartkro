module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn('orders', 'productId', {
        type: Sequelize.INTEGER,
        comment: "product table",
        after: 'userId'
      })
    ]);

  },
  down: (queryInterface) => {
    return Promise.all([queryInterface.removeColumn('orders', 'productId')]);
  }
};
