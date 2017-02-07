var router = require('express').Router();

var bodyParser = require('body-parser');
var urlEncodedParser = bodyParser.urlencoded({extended: false});

var React = require('react');
var ReactDOMServer = require('react-dom/server');

var searchSong = require('../views/searchSong.jsx');
var Home = require('../views/index.jsx');
var ReactRouter = require('react-router');

var YouTube = require('youtube-node');
var youTube = new YouTube();
youTube.setKey('AIzaSyBT8ce6NXejMyBQJ6vJYTV9MgNW6tXyQiY');
router.get('*', function(req, res){
		ReactRouter.match({

		routes: require('./routes.jsx'),
		location: req.url

		}, function(error, redirectLocation, renderProps){
		if (renderProps)
		var html = ReactDOMServer.renderToString(

				<ReactRouter.RouterContext {...renderProps}    	createElement =
				{function(Home, renderProps){
				return <Home {...renderProps}/>;	
				}
				}

				/>

				);
		res.send(html);

		});





});




router.post('/search', urlEncodedParser, function(req, res){
		youTube.search(req.body.song, 1, function(error, result){
				if (error) console.log(error);
				var videoURL =	"https://www.youtube.com/embed/"+ (result.items[0].id.videoId);
				var props = { song: videoURL };

				ReactRouter.match({

		routes: require('./routes.jsx'),
		location: req.url

		}, function(error, redirectLocation, renderProps){
			if (error) console.log(error);
		if (renderProps)
		var html = ReactDOMServer.renderToString(

				<ReactRouter.RouterContext {...renderProps}	createElement =
				{function(searchSong, renderProps){
				return <searchSong {...renderProps} {...props} />;	
				}
				}

				/>

				);
		res.send(html);

		});





		});
});


//-------------------------------------------------------------------
module.exports = router;
