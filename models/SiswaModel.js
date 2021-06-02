module.exports = (sequelize, DataTypes) => {
  const Siswa = sequelize.define(
    "siswa",
    {
      siswa_id: {
        type: DataTypes.STRING(5),
        allowNull: false,
        primaryKey: true,
        validate: {
          len: [4, 5],
        },
      },
      siswa_nama: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
          isAlpha: true,
        },
      },
      siswa_email: {
        type: DataTypes.STRING(50),
        allowNull: true,
        validate: {
          isEmail: {
            args: true,
            msg: "Email tidak valid!",
          },
        },
      },
      siswa_umur: {
        type: DataTypes.INTEGER(2),
        allowNull: false,
        validate: {
          isNumeric: {
            args: true,
            msg: "Umur harus diisi dengan angka",
          },
          len: [1, 2],
        },
      },
      siswa_alamat: {
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
   * tabel siswa dengan tabel matkul melalui
   * tabel matkulsiswa
   *
   * (berhubungan dengan file MatkulModel.js)
   *
   * */

  Siswa.associate = (models) => {
    Siswa.belongsToMany(models.matkul, {
      through: models.matkulsiswa,
      foreignKey: "siswa_id",
    });
  };

  return Siswa;
};
