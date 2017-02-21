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


//calling render will look in the 'views' folder
//app.set('views', __dirname + '/views');

app.use(express.static('public'));
app.use(require('./routes/index.jsx'));

//using react as the view engine
//app.set('view engine', 'jsx');
//app.engine('jsx', require('express-react-views').createEngine());





//-----------------FUNCTION DEFINITIONS------------------------------


app.listen(80);
