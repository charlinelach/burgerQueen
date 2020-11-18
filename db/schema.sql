DROP DATABASE IF EXISTS burgers_db;

-- Create the burger database to keep info about burgers
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burger (
    id INTEGER NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(50),
    devoured BOOLEAN DEFAULT false,
    createdAt TIMESTAMP NOT NULL,
    PRIMARY KEY (id)
);

-- Could not connect DB to Heroku. JawsDB MySQL did not work, regardless the number of attempts
-- 11/17: Made JAWS DB work