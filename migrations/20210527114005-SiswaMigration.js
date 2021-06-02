"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return await Promise.all([
      queryInterface.addColumn("siswa", "siswa_umur", {
        type: Sequelize.INTEGER(2),
        after: "siswa_email",
      }),
      queryInterface.addColumn("siswa", "siswa_alamat", {
        type: Sequelize.STRING(50),
        after: "siswa_umur",
      }),
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
