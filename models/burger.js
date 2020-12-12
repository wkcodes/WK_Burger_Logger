const { response } = require("express");
let orm = require("../config/orm.js");

const burger = {
  // Render all burgers
  all: (cb) => {
    orm.all("burgers", (response) => {
      cb(response);
    });
  },
  // Create a new burger
  create: (newBurger, cb) => {
    orm.create(newBurger, (response) => {
      cb(response);
    });
  },
};

module.exports = burger;