//this is connecting to sequilize 
//I NEED TO FIGURE OUT HOW TO ADD MY PASS WORD USER NAME AND DATABASE TO GIT INGNORE
require("dotenv").config();

var Sequelize = require("sequelize");


// Creates mySQL connection using Sequelize
var sequelize = new Sequelize("church_db", process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  host: "localhost",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

// Exports the connection for other files to use
module.exports = sequelize;