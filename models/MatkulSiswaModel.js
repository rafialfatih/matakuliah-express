module.exports = (sequelize, DataTypes) => {
  const MatkulSiswa = sequelize.define(
    "matkulsiswa",
    {
      siswa_id: {
        type: DataTypes.STRING(5),
        allowNull: false,
      },
      matkul_id: {
        type: DataTypes.STRING(3),
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
    }
  );

  MatkulSiswa.removeAttribute("id");

  return MatkulSiswa;
};
