
var UserList = require('../data/user.js');
var Church = require("../models/church.js")
var path = require('path');


//ROUTES
// one will be a post that is a find all where [zipcode = user.zip] [relgion = user.relgion]
//one will  create in to the second table of users 
module.exports = function(app){
	app.get('/api/friends', function(req, res){
		res.json(friendList);
	});

	app.post('/api/friends', function(req, res){
		userList.push(req.body);
	});

	app.get("api/:area?", function(req, res){
		if(req.params.city){
			Church.findall({
				where: {
					city: req.params.city
				}
			}).then(function(result){
				return res.json(result);
			});
		}
		//this else will show all the chruches if nothing is pput in on the html side
		 else{
			alert("No chruches were found");
		}
	});

	app.post("user/new", function(req, res){
		//grap req
		var users = req.body

		//making create 
		UserList.create({
			//im not sure what we will put in the second table
		})
	})
};