module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn('users', 'verifiedAccount', {
        type: Sequelize.BOOLEAN,
        comment: "verfied Account",
        after: 'password',
        defaultValue:false
      })
    ]);

  },
  down: (queryInterface) => {
    return Promise.all([queryInterface.removeColumn('users', 'verifiedAccount')]);
  }
};
