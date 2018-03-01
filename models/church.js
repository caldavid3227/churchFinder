// this will be where sequlize will go 
// Dependencies
// var Sequelize = require("sequelize");
// // sequelize (lowercase) references our connection to the DB.
// var sequelize = require("../config/connection.js");
// =============================================================
module.exports = function(sequelize, DataTypes) { 

var Church = sequelize.define("Church",{
  name: {
  	type: DataTypes.STRING,
  	allownull: false,

  },	
  address:{
  	type: DataTypes.STRING,
  	allownull: false,

  }, 
  city: {  	
  	type: DataTypes.STRING,
  	allownull: false,	
  }, 
  state: {  	
  	type: DataTypes.STRING,
  	allownull: false,
  }, 
  zip: {  	
  	type: DataTypes.INTEGER,
  	allownull: false,
  }, 
  url:{  	
  	type: DataTypes.STRING,
  	allownull: false,
  }, 
  size:{  	
  	type: DataTypes.INTEGER,
  	allownull: false,
  },  
  denomination:{  	
  	type: DataTypes.STRING,
  	allownull: false,
  },  
},{
	timestamps: false
});
return Church;
// Church.sync();
};
