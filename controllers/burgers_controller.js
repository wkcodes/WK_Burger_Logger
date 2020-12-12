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

router.post("/api/addburger", (req,res) => {
    burger.create (req.body.burger_name, (result) => {
        res.json({ id: result.insertId})
        console.log("New ID: ", result.insertId)
    })
})
module.exports = router;