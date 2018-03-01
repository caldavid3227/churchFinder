var db = require("../models")
var path = require('path');
//ROUTES
module.exports = function(app){
	// app.get('/api/Churchs', function(req, res){
	// 	res.json(Church);
	// });
// one will be a post that is a find all where [zipcode = user.zip] [relgion = user.relgion]
	app.get("/api/:zip?/:denomination?", function(req, res){
           console.log(req.params.denomination)
           console.log(req.params.zip)
        db.Church.findAll({
          	where: {
          		zip: req.params.zip,
          		denomination: req.params.denomination
          	}
          }).then(function(data) {
        	 return res.json(data);
      });
	});

//one will allow user to create curch in our data base

	app.post("/church/new", function(req, res){
		//grap req
		var churches = req.body
		//making create 
		db.Church.create({
			name: churches.name,
			address: churches.address,
			city: churches.city,
			state: churches.state,
			zip: churches.zip,
			url: churches.url,
			size: churches.size,
			denomination: churches.denomination
		});
	});
};