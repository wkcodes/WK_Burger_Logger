const { response } = require("express");
let orm = require("../config/orm.js");

let burger = {
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
  update: (burger_id, cb) => {
    orm.update(burger_id, (response) => {
      cb(response);
    });
  },
};

module.exports = burger;
