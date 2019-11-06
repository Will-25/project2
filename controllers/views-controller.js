var express = require("express");
var router = express.Router();

router.get("/", (req, res) => res.render("home", {
    user: req.user
}));

router.get("/register", (req, res) => res.render("home", {
    user: req.user
}));

module.exports = router;