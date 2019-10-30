module.exports = function(sequelize, DataTypes) {
  var Topping = sequelize.define("topping", {
    toppingName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    toppingType: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  return Topping;
};
