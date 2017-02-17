var ReactDOM = require('react-dom');
var routes = require('./routes/routes.jsx');
var Redux = require('redux');
var Provider = require('react-redux').Provider;
var React = require('react');

function reducer(state) { return state; }

var store = Redux.createStore(reducer, window.PROPS);

ReactDOM.render(

<Provider store={store}>
	{routes}
</Provider>, document
);
