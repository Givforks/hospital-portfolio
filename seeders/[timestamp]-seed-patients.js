module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Patients', [
      {
        name: 'Givens Abraham',
        age: 22,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Add other seed data as needed
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Patients', null, {});
  },
};

