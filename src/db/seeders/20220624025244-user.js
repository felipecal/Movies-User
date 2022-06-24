'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        firstName: 'Felipe',
        lastName: 'Caldas',
        email: 'felipe@gmail.com',
        
      },
      {
        firstName: 'Pedro',
        lastName: 'Oliveira',
        email: 'pedro@gmail.com'
      }
    ], {});
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
