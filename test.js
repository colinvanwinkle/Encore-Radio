var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');
var urlEncodedParser = bodyParser.urlencoded({extended: false});
var app = express();


app.get('/', function(req, res){
res.sendFile(__dirname + '/index.html');
});


app.post('/', urlEncodedParser, function(req, res){
console.log(req.body);
console.log('hi');
});

app.listen(80);
