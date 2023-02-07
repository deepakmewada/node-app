const products = require("../controllers/product.controller");
const express = require("express");
const router = express.Router();

// Create a new Tutorial
router.post("/add", products.create);
router.post("/all", products.findAll);
router.get("/:id", products.findOne);
router.put("/:id", products.update);

// Delete a Tutorial with id
router.delete("/:id", products.delete);

// Create a new Tutorial
router.delete("/", products.deleteAll);
module.exports = router;
