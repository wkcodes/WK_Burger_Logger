// Express deps
let express = require("express");
let router = express.Router();

// Burger model
let burger = require("../models/burger.js");

// Root directory for the site
router.get("/", (req, res) => {
  burger.all((data) => {
    let handleBurger = {
      burgers: data,
    };
    console.log(handleBurger);
    res.render("index", handleBurger);
  });
});

router.post("/api/burgers", (req, res) => {
  burger.create(req.body.burger_name, (result) => {
      res.json({ id: result.insertId });
      console.log("New ID: ", result.insertId);
    }
  );
});

router.put("/api/burgers/:id", (req, res) => {
  burger.update( req.body.id, (result) => {
    res.json({ burger_id: result.insertId});
    console.log("Updated ID: ", result.insertId)
  })
})

module.exports = router;
