var express = require('express');
var app = express(); 
var router = express.Router(); 
var bodyParser = require('body-parser');
var morgan = require('morgan');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname + '/public'));
app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist'));
app.use('/angular', express.static(__dirname + '/node_modules/angular'));
app.use('/api',router);

app.get('/', function(req, res){
	res.redirect('/index.html');
	console.log("res rendered index!")
});

app.listen(3000, function(){
	console.log('listening on port 3000!');
});

module.exports = app;