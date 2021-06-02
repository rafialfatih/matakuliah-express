const db = require("../models");

module.exports = {
  index: async (req, res) => {
    const allMatKul = await db.matkul.findAll();
    res.status(200).send(allMatKul);
  },

  create: async (req, res) => {
    const addMatkul = await db.matkul.create({
      matkul_id: req.body.id,
      matkul_nama: req.body.nama,
    });
    res.status(200).send(addMatkul);
  },
};
