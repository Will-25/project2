module.exports = function(sequelize, dataTypes) {
  var Favorite = sequelize.define("favorites", {
    pizzaName: {
      type: dataTypes.STRING,
      allowNull: false
    }
  });
  return Favorite;
};
