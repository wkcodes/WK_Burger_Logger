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
        })
    },
    create: (newBurger, cb) => {
        let queryString = "INSERT INTO burgers (burger_name) VALUES ?";
        connection.query(queryString, newBurger, (err, res) => {
            if(err) throw err;
            cb(res)
        })
    }
}

module.exports = orm;