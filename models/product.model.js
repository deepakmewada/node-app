module.exports = (sequelize, Sequelize) => {
  const Product = sequelize.define("product", {
    product_id: {
      type: Sequelize.INTEGER,
    },
    name: {
      type: Sequelize.STRING,
    },
    desc: {
      type: Sequelize.STRING,
    },
    image: {
      type: Sequelize.STRING,
    },
    amount: {
      type: Sequelize.INTEGER,
    },
    quantity: {
      type: Sequelize.INTEGER,
    },
    size: {
      type: Sequelize.BOOLEAN,
    },
    deleted_at: {
      type: Sequelize.DATE,
    },
  });

  return Product;
};
