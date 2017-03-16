var React = require('react');
var Modal = require('react-bootstrap/lib/Modal');
var Button = require('react-bootstrap/lib/Button');
import Help from './Help.jsx';
import Login from './Login.jsx';
import Register from './Register.jsx';
//move this back under <div classnae...> when Help is fixed
//<Help />
/**
 * NavBar component located at the top of the screen and currently consists of
 * logo.
 * #TODO Add help, login, and sign up components
 */

export default class NavBar extends React.Component {
	render() {
		return (
				<div className="row nav" id="nav">
				<div className="col-md-4 col-md-offset-4">
					<h1 id="logo">Encore Radio</h1>
					{/*<img src="http:///i.imgur.com/6dV89XA.png"/> */}
				</div>
				<div className="col-md-1 col-md-offset-1">
				<Login />
				</div>
				<div className="col-md-1">
				<Register />
				</div>
				<div className="col-md-1">
				<Help />
				</div>
				</div>
			   );

	}
}
