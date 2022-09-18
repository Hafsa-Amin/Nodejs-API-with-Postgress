'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

      await queryInterface.bulkInsert('Movies', [{
       name: 'Arcline',
       duration: 1.5,
       rating: 5,
       createdAt: new Date(),
       updatedAt: new Date()

      }], {});

  },

  down: async (queryInterface, Sequelize) => {

      await queryInterface.bulkDelete('Movies', null, {});

  }
};
