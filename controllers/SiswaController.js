const Sequelize = require("sequelize");
const db = require("../models");
const Op = Sequelize.Op;

// Menggunakan controller dengan async await
module.exports = {
  // Mengambil seluruh data siswa
  index: async (req, res, next) => {
    const allSiswa = await db.siswa.findAll({
      // Menghilangkan attribute yang tidak ingin ditampilkan
      attributes: { exclude: ["siswa_umur", "siswa_email"] },
    });
    res.status(200).send(allSiswa);
    next();
  },

  // Mencari data siswa
  find: async (req, res) => {
    const { siswaId } = req.params;
    const findSiswa = await db.siswa.findByPk(siswaId);
    res.status(200).send(findSiswa);
  },

  // Hapus data siswa
  delete: async (req, res) => {
    const { siswaId } = req.params;
    const deleteSiswa = await db.siswa.destroy({
      where: {
        siswa_id: siswaId,
      },
    });
    res.status(200).send("delete success");
  },

  // Menambahkan data siswa
  create: async (req, res, next) => {
    const createSiswa = await db.siswa.create({
      siswa_id: req.body.id,
      siswa_nama: req.body.nama,
      siswa_email: req.body.email,
      siswa_umur: req.body.umur,
      siswa_alamat: req.body.alamat,
    });
    res.status(200).send(createSiswa);
  },

  // Menambahkan matkul kepada siswa melalui table matkulsiswa
  addSiswaMatkul: async (req, res) => {
    const createAddSiswaMatkul = await db.matkulsiswa.create({
      siswa_id: req.body.idSiswa,
      matkul_id: req.body.idMatkul,
    });
    res.status(200).send(createAddSiswaMatkul);
  },

  // Ubah data siswa
  update: async (req, res) => {
    const { siswaId } = req.params;
    const updateSiswa = await db.siswa.update(
      {
        siswa_id: req.body.id,
        siswa_nama: req.body.nama,
        siswa_email: req.body.email,
        siswa_umur: req.body.umur,
        siswa_alamat: req.body.alamat,
      },
      {
        where: {
          siswa_id: siswaId,
        },
      }
    );
    res.status(200).send("success");
  },

  // Cari Data Siswa Dengan Umur Lebih Dari 10 Tahun
  findAge: async (req, res) => {
    const findAge = await db.siswa.findAll({
      where: {
        siswa_umur: {
          // OP digunakan sebagai operator logika, lt artinya less than atau kurang dari (<)
          [Op.lt]: 10,
        },
      },
    });
    res.send(findAge);
  },

  /**
   *
   * Cari siswa dengan matkul
   * Query SQL Many to Many
   *
   * SELECT s.siswa_id, s.siswa_nama, s.siswa_email, m.matkul_nama FROM siswa s
   * INNER JOIN matkulsiswa ms ON ms.siswa_id = s.siswa_id
   * INNER JOIN matkul m ON m.matkul_id = ms.matkul_id
   *
   */

  findMatkul: async (req, res) => {
    const findMatkul = await db.siswa.findAll({
      include: [
        {
          model: db.matkul,
          through: { attributes: [] }, // Agar tabel matkulsiswa/tabel penghubung tidak ditampilkan
          attributes: ["matkul_nama", "matkul_id"], // Untuk pilihan attribute yang ingin ditampilkan
        },
      ],
    });
    res.send(findMatkul);
  },
};
