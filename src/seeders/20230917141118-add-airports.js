// Seeders are used to populate the database with data. They are executed when running sequelize db:seed, We use seeder files to populate the database with data without having to insert it manually using SQL queries or APIs.

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Airports', [
      {
        name : 'Kempegowda International Airport',
        cityId : 7,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name : 'Mysore Airport',
        cityId : 7,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name : 'Mengaluru International Airport',
        cityId : 7,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name : 'Indira Gandhi International Airport',
        cityId : 1,
        createdAt : new Date(),
        updatedAt : new Date()
      }
    ], {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
