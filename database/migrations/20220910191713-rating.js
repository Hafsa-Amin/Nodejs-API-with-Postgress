'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.addColumn('Movies', 'rating',{ type: Sequelize.INTEGER });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Movies', 'rating',{ type: Sequelize.INTEGER });
  }
};
