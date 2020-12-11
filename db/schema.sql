CREATE DATABASE IF NOT EXISTS burgers_db;
USE burgers_db;

CREATE TABLE IF NOT EXISTS burgers (
    burger_id INT AUTO_INCREMENT,
    burger_name VARCHAR(255) NOT NULL,
    devoured BOOLEAN
)