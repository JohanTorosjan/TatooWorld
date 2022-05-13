const mysql = require("mysql");
const dbConfig = require("./config/db.config.js");
// Create a connection to the database
const sql =mysql.createPool({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});

sql.query(`CREATE TABLE Persons (
    PersonID int,
    LastName varchar(255),
    FirstName varchar(255),
    Address varchar(255),
    City varchar(255)
);`, (err, res) => {
    if(err){console.log("ERRRR"+err)}
    else{console.log(res)}
})

module.exports = sql;