const connection = require('./connection.js');

//Custom ORM
let orm = {
    all: (tableInput, cb) => {
        let queryString = "SELECT * FROM burgers;";
        connection.query(queryString, function (err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        });
    },
    create: (newBurger, cb) => {
        let queryString = "INSERT INTO burgers (burger_name) VALUES (?)";
        connection.query(queryString, newBurger, (err, res) => {
            if(err) throw err;
            cb(res)
        });
    },
    //update needs to get id from handlebars somehow
    update: (burger_id, cb) => {
        let queryString = "UPDATE burgers SET devoured = true WHERE burger_id = 2";
        connection.query(queryString, burger_id, (err, res) => {
            if(err) throw err;
            cb(res)
        })
    }
};

module.exports = orm;