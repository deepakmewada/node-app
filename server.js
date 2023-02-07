const express = require("express");
const cors = require("cors");

const app = express();
const productRoutes = require("./routes/product.routes");
const authRoutes = require("./routes/auth.routes");

const db = require("./models");

var corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

db.sequelize
  .sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

app.get("/hello", (req, res) => {
  res.send("Hello World");
});
app.use("/api/product", productRoutes);
app.use("/api/user", authRoutes);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
