var toppings = require("../models/pizzaTopping");
var favorites = require("../models/favorites")
module.exports = function(sequelize, dataTypes) {
  var PizzaTopping = sequelize.define("pizzatopping", {
    pizzaId: {
      type: dataTypes.INTEGER,
      references: toppings,
      allowNull: false
    }
  });
  return PizzaTopping;
};
