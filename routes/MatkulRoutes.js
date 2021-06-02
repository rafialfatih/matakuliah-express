const router = require("express-promise-router")();

const MatkulController = require("../controllers/MatkulController");

router.route("/").get(MatkulController.index).post(MatkulController.create);

module.exports = router;
