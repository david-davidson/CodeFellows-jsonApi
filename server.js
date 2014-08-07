// Dependencies and config
var express = require('express');
var app = express();
var port = 3001;

// Routes
app.get('/', function(request, response) {
	response.send('Visit name/yourName (e.g., name/david) to fire the name route, ' +
		'or visit /time to see the current time.');
});

app.get('/name/:name', function(request, response) {
	response.send({
		'msg': 'Hello ' + request.params.name
	});
});

app.get('/time', function(request, response) {
	response.send({
		'time': new Date().getHours() + ':' + new Date().getMinutes() 
	});
});

app.listen(port, function() {
	console.log('Server has started on port ' + port);
});