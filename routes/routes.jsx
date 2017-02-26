//This module creates the routes given a url the user enters.
// For example: when the user enters encoreradio.me/, the correspoinding
// layout.jsx component is rendered because it uses the '/' path.
var React = require('react');
var ReactRouter = require('react-router');
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var Router = ReactRouter.Router;


//Exports the routes
module.exports = (
	<Router history={ReactRouter.hashHistory}>

			<Route path= '/' component ={require('../views/layout.jsx')}>
				<IndexRoute component={require('../views/index.jsx')}/>
			</Route>

	</Router>

		);
