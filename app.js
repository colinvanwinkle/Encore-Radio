/**
  *This module is the core of the app
  *and is what to execute when running
  * nodemon or forever. 
  * 
  *Initializes the app
  */
require('babel-register')({
presets: ['react']
});

var express = require('express');
var app = express();


app.use(express.static('public'));
app.use(require('./routes/index.jsx'));
app.listen(80);
