'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('usuarios', [
      { nome: 'Gabriela'},
      { nome: 'Roberta'},
      { nome: 'Gabriel'},
      { nome: 'Gustavo'},
      { nome: 'Cofre'}

      ], {});
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
