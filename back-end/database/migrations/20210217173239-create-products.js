module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      product_name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      product_price: {
        allowNull: false,
        type: Sequelize.STRING,
      }
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('Products');
  }
};
