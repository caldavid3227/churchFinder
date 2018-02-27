var path = require('path');

// =============================================================
//ROUTING
// =============================================================

module.exports = function(app){
	//set default to homepage!!!!
	// this is the home page
	app.get('/home', function(req, res){
		res.sendFile(path.join(__dirname, '../public/home.html'));
	});
	//this is the find your church page
	app.get('/findChurch', function(req, res){
		res.sendFile(path.join(__dirname, '../public/findChurch.html'));
	});
	//this is the add your church!
	app.get('/addChurch', function(req, res){
		res.sendFile(path.join(__dirname, '../public/addChurch.html'))
	})
};