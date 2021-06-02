module.exports = (sequelize, DataTypes) => {
  const Matkul = sequelize.define(
    "matkul",
    {
      matkul_id: {
        type: DataTypes.STRING(3),
        allowNull: false,
        primaryKey: true,
      },
      matkul_nama: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
    }
  );

  /**
   *
   * Digunakan untuk mengasosiasikan/menghubungkan
   * tabel matkul dengan tabel siswa melalui
   * tabel matkulsiswa
   *
   * (berhubungan dengan file SiswaModel.js)
   *
   * */

  Matkul.associate = (models) => {
    Matkul.belongsToMany(models.siswa, {
      through: models.matkulsiswa,
      foreignKey: "matkul_id",
    });
  };

  return Matkul;
};
