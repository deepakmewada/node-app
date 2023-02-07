const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  try {
    User.findbyId({ id: req.bd });
    res.send("User Create Call");
  } catch (e) {}
};

exports.get = (req, res) => {
  res.send("User Get Call");
};
