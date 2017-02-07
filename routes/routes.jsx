var React = require('react');
var ReactRouter = require('react-router');



function createElement(Component, props){
	return <Component {...props} {...window.PROPS} />;
	}

module.exports = (
		<ReactRouter.Router history={ReactRouter.hashHistory} createElement={createElement}>

		<ReactRouter.Route path='/' component={require('../views/index.jsx')}/>
		<ReactRouter.Route path='/search'
		component={require('../views/searchSong.jsx')}/>
		<ReactRouter.Route path="/help"
		component={require('../views/help.jsx')}/>


		</ReactRouter.Router>

		);
