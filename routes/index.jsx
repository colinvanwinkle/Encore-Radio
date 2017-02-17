var router = require('express').Router();

var bodyParser = require('body-parser');
var urlEncodedParser = bodyParser.urlencoded({extended: false});

var React = require('react');
var ReactDOMServer = require('react-dom/server');
var Redux = require('redux');
var Provider = require('react-redux').Provider;

var Home = require('../views/index.jsx');
var ReactRouter = require('react-router');


function reducer(state) { return state; }

router.get('*', function(req, res){

			var initialState = {data: 'hi'};
			var store = Redux.createStore(reducer, initialState);

		ReactRouter.match({	
		
		routes: require('./routes.jsx'),
		location: req.url

		}, function(error, redirectLocation, renderProps){
		if (renderProps)

		var html = ReactDOMServer.renderToString(
			<Provider store={store}>
				<ReactRouter.RouterContext {...renderProps}/>
			</Provider>
				);
		res.send(html);

		});

});



//-------------------------------------------------------------------
module.exports = router;
