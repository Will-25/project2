var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/favorites", function(req, res) {
    db.Favorite.findAll({}).then(function(dbFavorite) {
      res.json(dbFavorite);
    });
  });

  // Create a new example
  app.post("/api/favorites", function(req, res) {
    console.log(req.body);
    db.Favorite.create({
      pizzaName: req.body.name,
      toppings: req.body.toppings
    }).then(function(dbFavorite) {
      res.json(dbFavorite);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.json(dbExample);
    });
  });
};
