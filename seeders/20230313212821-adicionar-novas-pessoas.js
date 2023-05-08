'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('pessoas', [
      { nome: 'cofre', sobrenome:'fonseca', idade:'18', altura:'170'},
      { nome: 'cofre1', sobrenome:'marques', idade:'26', altura:'186'},
      { nome: 'cofre2', sobrenome:'Leopoldo', idade:'24', altura:'184'},
     
      
      ], {});
  },

  async down (queryInterface, Sequelize) {
 
      await queryInterface.bulkDelete('pessoas', null, {});
    
  }
};
