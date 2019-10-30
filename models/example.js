module.exports = function(sequelize, DataTypes) {
  var Pizza = sequelize.define("Pizza", {
    text: DataTypes.STRING,
    description: DataTypes.TEXT
  });
  return Pizza;
};
