module.exports = function(sequelize, dataTypes) {
  var Favorite = sequelize.define("Favorite", {
    pizzaName: {
      type: dataTypes.STRING,
      allowNull: false
    },
    toppings: {
      type: dataTypes.STRING,
      allowNull: false
    }
  });
  return Favorite;
};
