var express = require("express");
var bodyParser = require("body-parser");
var app = express();

// var map;
// function initMap() {
//   map = new google.maps.Map(document.getElementById('map'), {
//     center: {lat: 33.448376, lng: -112.074036},
//     zoom: 5
//   });
// }
//require .env
require("dotenv").config();

var db = require("./models");

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());


// Import routes and give the server access to them.
require("./routes/api-routes.js")(app);

// Here we introduce HTML routing to serve different HTML files
require("./routes/html-routes.js")(app);

var PORT = process.env.PORT || 3000;

db.sequelize.sync().then(function(){
	app.listen(process.env.PORT || 3000, function(){
		console.log('App listening on PORT ' + PORT);
	});
});

