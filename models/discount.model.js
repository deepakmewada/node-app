module.exports = (sequelize, Sequelize) => {
  const Discount = sequelize.define("discount", {
    name: {
      type: Sequelize.STRING,
    },
    desc: {
      type: Sequelize.STRING,
    },
    discount_percent: {
      type: Sequelize.DECIMAL,
    },
    active: {
      type: Sequelize.BOOLEAN,
    },
    deleted_at: {
      type: Sequelize.DATE,
    },
  });

  return Discount;
};