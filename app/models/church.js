// this will be where sequlize will go 
// Dependencies
// =============================================================
// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

var Church = sequelize.define("choices",{
	name: Sequelize.STRING,
	address: Sequelize.STRING,
	city: Sequelize.STRING,
	state: Sequelize.STRING,
	zip: Sequelize.INTEGER,
	phone: Sequelize.STRING,
	url: Sequelize.STRING,
	size: Sequelize.INTEGER,
	denomination: Sequelize.STRING
});

Church.sync();

module.exports = Church;