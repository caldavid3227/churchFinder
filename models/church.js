// this will be where sequlize will go 
// Dependencies
// =============================================================
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

var Church = sequelize.define("churches",{
  name: Sequelize.STRING,
  address: Sequelize.STRING,
  city: Sequelize.STRING,
  state: Sequelize.STRING,
  zip: Sequelize.INTEGER,
  url: Sequelize.STRING,
  size: Sequelize.INTEGER,
  denomination: Sequelize.STRING
});

Church.sync();

module.exports = Church;