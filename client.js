//This module uses redux and routes to synchronize what is rendered on the
//server and on the client

var ReactDOM = require('react-dom');
var routes = require('./routes/routes.jsx');
var Redux = require('redux');
var Provider = require('react-redux').Provider;
var React = require('react');

function reducer(state) { return state; }

var store = Redux.createStore(reducer, window.PROPS);


//renders to the client
ReactDOM.render(

<Provider store={store}>
	{routes}
</Provider>, document
);
