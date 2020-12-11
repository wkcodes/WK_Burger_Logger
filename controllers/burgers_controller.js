// Express deps
let express = require("express");
let router = express.Router();

// Burger model
let burger = require("../models/burger.js");

// Root directory for the site
router.get("/", (req,res) => {
    burger.all( (data) => {
        let handleBurger = {
            burgers: data
        }
        console.log(handleBurger);
        res.render("index", handleBurger);
    });
});

module.exports = router;