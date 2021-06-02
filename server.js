const express = require("express");
const db = require("./models");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const SiswaRoutes = require("./routes/SiswaRoutes");
app.use("/siswa", SiswaRoutes);

const MatkulRoutes = require("./routes/MatkulRoutes");
app.use("/matkul", MatkulRoutes);

db.sequelize
  .sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`App is running at http://localhost:${PORT}`);
    });
  })
  .catch(() => {
    res.status(500).json({
      status: "Error",
      msg: "Connection to database failed!",
    }),
      res.send(res.status);
  });
