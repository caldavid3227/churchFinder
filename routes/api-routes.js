var Church = require("../models/church.js")
var path = require('path');


//ROUTES
module.exports = function(app){
	app.get('/api/friends', function(req, res){
		res.json(Church);
	});
// one will be a post that is a find all where [zipcode = user.zip] [relgion = user.relgion]
	app.get("api/:city&:relgion&:denomination", function(req, res){
		
	});

//one will allow user to create curch in our data base

	app.post("/church/new", function(req, res){
		//grap req
		var church = req.body
		//making create 
		Church.create({
			name: church.name,
			address: church.address,
			city: church.city,
			state: church.state,
			zip: church.zip,
			url: church.url,
			size: church.size,
			denomination: church.denomination
		});
	});
};