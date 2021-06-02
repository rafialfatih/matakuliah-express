const router = require("express-promise-router")();

const SiswaController = require("../controllers/SiswaController");

router.route("/").get(SiswaController.index).post(SiswaController.create);

router.get("/findage", SiswaController.findAge);

router
  .route("/siswamatkul")
  .get(SiswaController.findMatkul)
  .post(SiswaController.addSiswaMatkul);

router
  .route("/:siswaId")
  .get(SiswaController.find)
  .put(SiswaController.update)
  .delete(SiswaController.delete);

module.exports = router;
