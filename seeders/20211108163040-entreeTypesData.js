'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
      */
   return queryInterface.bulkInsert('EntreeTypes', [
    { name: "Beef",  isVegetarian: false, createdAt: '2019-04-12', updatedAt: '2019-04-12'},
    { name: "Chicken",  isVegetarian: false, createdAt: '2019-04-12', updatedAt: '2019-04-12' },
    { name: "Goat",  isVegetarian: false, createdAt: '2019-04-12', updatedAt: '2019-04-12' },
    { name: "Jackfruit",  isVegetarian: true, createdAt: '2019-04-12', updatedAt: '2019-04-12' },
    { name: "Plant-based",  isVegetarian: true, createdAt: '2019-04-12', updatedAt: '2019-04-12' },
    { name: "Pork",  isVegetarian: false, createdAt: '2019-04-12', updatedAt: '2019-04-12' },
    { name: "Soy",  isVegetarian: true, createdAt: '2019-04-12', updatedAt: '2019-04-12' },
   ], {})
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
      */
   return queryInterface.bulkDelete('EntreeTypes', null, {})
  }
};
