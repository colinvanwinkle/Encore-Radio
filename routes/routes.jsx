var React = require('react');
var ReactRouter = require('react-router');
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var Router = ReactRouter.Router;


module.exports = (
	<Router history={ReactRouter.hashHistory}>

			<Route path= '/' component ={require('../views/layout.jsx')}>
				<IndexRoute component={require('../views/index.jsx')}/>
			</Route>

	</Router>

		);
