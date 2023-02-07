const users = require("../controllers/user.controller");
const express = require("express");
const router = express.Router();

router.get("/hello", users.get);
router.post("/signup", users.create);

module.exports = router;
