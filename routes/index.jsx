//This module is responsible for handling the requests made to the server. 


//Imports packages we will need to use
var router = require('express').Router();

var bodyParser = require('body-parser');
var urlEncodedParser = bodyParser.urlencoded({extended: false});
router.use(bodyParser());

var React = require('react');
var ReactDOMServer = require('react-dom/server');
var Redux = require('redux');
var Provider = require('react-redux').Provider;

var Home = require('../views/index.jsx');
var ReactRouter = require('react-router');

var db = require('mysql');
var addSong = require('../views/functions/addSong.js');

/*
var connection = db.createConnection({
	host     : "localhost",
	user     : "root",
	password : "AMosshart7!",
	database : "ERDB"
});
*/

function reducer(state) { return state; }


//Handles the get request (when a user loads the page)
router.get('*', function(req, res){


		var initialState = {data: "test data"};
		var store = Redux.createStore(reducer, initialState);

		//Finds a route that matches the url specified
		ReactRouter.match({	

				//uses routes.jsx to find the match
routes: require('./routes.jsx'),
location: req.url

//on route match, render (serverside) the correct components
}, function(error, redirectLocation, renderProps){
if (renderProps)

var html = ReactDOMServer.renderToString(
		<Provider store={store}>
		<ReactRouter.RouterContext {...renderProps}/>
		</Provider>
		);

//send the html to the webpage
res.send(html);


});

});

router.post('/addSong', function(req,res){

addSong.addSong(req.body.songTitle, req.body.songURL, req.body.thumbnailURL);
console.log(req.body);


});


//-------------------------------------------------------------------
module.exports = router;
