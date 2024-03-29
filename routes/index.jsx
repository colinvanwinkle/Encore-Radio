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

var ReactRouter = require('react-router');

var addSong = require('../views/functions/addSong.js');
var login = require('../views/LoginQuery.js');
var register = require('../views/RegisterQuery.js');

var db = require('mysql');
var pool = db.createPool({
host     : "localhost",
user     : "cvanwinkle",
password : "Legends!",
database : "ERDB",

});


function reducer(state) { return state; }
//__________________________________________________________________________

router.post('/upvote', function(req,res){
	const getLikesQuery = 'SELECT Upvote FROM Songs WHERE SongID = ' + JSON.stringify(req.body.songHash);

	pool.getConnection(function (error, connection) {

	connection.query(getLikesQuery, function(error, results, fields){
		if (error) throw error;

		const addLikeQuery = 'UPDATE Songs SET Upvote = ' + (results[0].Upvote + 1) + ' WHERE SongID = ' + JSON.stringify(req.body.songHash);
	 connection.query(addLikeQuery, function(req, res){
		 if (error) throw error;
	 	 });
		 connection.release();
	 });
});

});

router.post('/downvote', function(req,res){
	const getLikesQuery = 'SELECT Downvote FROM Songs WHERE SongID = ' + JSON.stringify(req.body.songHash);

	pool.getConnection(function (error, connection) {

	connection.query(getLikesQuery, function(error, results, fields){
		if (error) throw error;

		const addLikeQuery = 'UPDATE Songs SET Downvote = ' + (results[0].Downvote + 1) + ' WHERE SongID = ' + JSON.stringify(req.body.songHash);
	 connection.query(addLikeQuery, function(req, res){
		 if (error) throw error;
	 	 });
	});
	connection.release()
});
});

router.get('/updateUpvoteDownvotes', function(req, res){

	const getVotesQuery = 'SELECT Upvote, Downvote FROM Songs WHERE SongID = ' + JSON.stringify(req.query.songHash);
	pool.getConnection(function (error, connection) {

	connection.query(getVotesQuery, function(error, results, fields){
		connection.release();

		res.send(results);

	});
});
});

//periodcally called to update song queue
router.get('/updateSongQueue', function(req,res){

	const songQuery = 'SELECT * FROM (SELECT * FROM Songs ORDER BY Added_Time) song LIMIT 4'
    pool.getConnection(function (error, connection) {


	connection.query(songQuery, function(error, results, fields){
			if (error) throw error;
			connection.release();
			res.send(results);
			});

		});
});


//finds the next song to be played by getting the next song in queue
router.get('/playNextSong', function(req,res){

		const rowCountQuery = 'SELECT COUNT(*) as numSongs FROM Songs'
		const deleteQuery = 'DELETE FROM Songs ORDER BY Added_Time LIMIT 1'
		const startTimeQuery = 'UPDATE Songs SET Running_Time = CURRENT_TIMESTAMP WHERE Station_URL = "testURL"'

		    pool.getConnection(function (error, connection) {
		connection.query(rowCountQuery, function(error, results, fields){
				if (error) throw error;
				if (results[0].numSongs > 1){
					connection.query(deleteQuery, function(error, results, fields){
							if (error) throw error;

							connection.query(startTimeQuery, function(error, results, fields){
								if (error) throw error;
								connection.release();
							});

							});
				}
				});

			});
		});


	router.get('/updateQueueTab', function(req,res){

		var query = 'Select * FROM (SELECT * FROM Songs ORDER BY ADDED_TIME) song LIMIT 11'
    pool.getConnection(function (error, connection) {
		connection.query(query, function(error, results, fields){
			if (error) throw error;
			connection.release();
			res.send(results);
		});
});
	});



//___________________________________________________________________________

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
//--------------------------------------------------------------------------





router.post('/addSong', function(req,res){
	    pool.getConnection(function (error, connection) {
		addSong.addSong(req.body.songTitle, req.body.songURL, req.body.thumbnailURL);
		console.log(req.body);
		connection.release();
	});
		});


var username;
//Make database query to check user login
router.post('/login', function(req,res){
	login.queryDB(req.body.username, req.body.password,
	function(error,result){
		if (result) {
			console.log("RESULT: "+result);
			//console.log("req and res"+JSON.stringify(req));
			res.send(result);
		}
	});
	username = req.body.username;
});

//Register new account
router.post('/register', function(req,res){
	register.queryDB(
		req.body.username, req.body.password, req.body.cpassword, req.body.email,
		function(error, result){
			console.log("called back "+result);
		}
	);
});

//Try to host a station on a new, identical page
router.post('/nik', function(req,res){
	console.log("Nik's station page");
});

//-------------------------------------------------------------------
module.exports = router;
