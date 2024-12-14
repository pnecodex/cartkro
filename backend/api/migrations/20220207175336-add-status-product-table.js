module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn('products', 'status', {
        type: Sequelize.BOOLEAN,
        defaultValue: '0',
        comment: "active and deactive",
        after: 'catalog_id'
      })
    ]);

  },
  down: (queryInterface) => {
    return Promise.all([queryInterface.removeColumn('products', 'status')]);
  }
};
