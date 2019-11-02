var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/toppings", function(req, res) {
    db.Pizza.findAll({}).then(function(dbPizza) {
      res.json(dbPizza);
    });
  });

  // Create a new example
  app.post("/favorites", function(req, res) {
    console.log(req.body)
    // db.Example.create(req.body).then(function(dbExample) {
    //   res.json(dbExample);
    // });
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
