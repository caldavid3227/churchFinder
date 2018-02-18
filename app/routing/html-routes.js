var path = require('path');

// =============================================================
//ROUTING
// =============================================================

module.exports = function(app){

	app.get('/', function(req, res){
		res.sendFile(path.join(__dirname, '../public/home.html'));
	});

	app.get('/findChurch', function(req, res){
		res.sendFile(path.join(__dirname, '../public/findChurch.html'));
	});
};