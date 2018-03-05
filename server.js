var express = require("express");
var bodyParser = require("body-parser");
var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Import routes and give the server access to them.
var routes = require("./controllers/churchesController.js");

app.use(routes);

app.listen(process.env.PORT || 3000, function(){
	// console.log('App listening on PORT ' + PORT);
});

