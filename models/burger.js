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
  create: (burger_name, cb) => {
    orm.create(burger_name, (response) => {
      cb(response);
    });
  },
};

module.exports = burger;