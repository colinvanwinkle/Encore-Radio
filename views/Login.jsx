var React = require('react');
var Modal = require('react-bootstrap/lib/Modal');
var Button = require('react-bootstrap/lib/Button');
var axios = require('axios');
var queryObj = require('./LoginQuery.js');
var LoginController = require('./controllers/Login.js')

/** Maybe export username and password to the calling
	function and do the database query there **/

export default class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state ={
					showModal: false,
					username: '',
					password: '',
					isLoggedIn: false,
					loginText: "Login"
					};

		this.handleUsername = this.handleUsername.bind(this);
		this.handlePassword = this.handlePassword.bind(this);
		this.handleLogout = this.handleLogout.bind(this);
	}
	close() {
		this.setState({showModal: false});
	}
	open() {
		console.log("isLoggedIn "+this.state.isLoggedIn);
		if(!this.state.isLoggedIn)
			this.setState({showModal: true});
		else {
			this.handleLogout();
			console.log("Logging out");
		}
	}

	handleUsername(e) {
		   this.setState({username: e.target.value});
	}
	handlePassword(e) {
		   this.setState({password: e.target.value});
	}
	handleClick(event) {
		console.log("Handling click");
		if(!this.state.isLoggedIn) {
			var that = this;
			LoginController.Login(that);
			console.log("Dialog: "+result);

		}
	}
	handleLogout() {
		this.state.loginText = "Login";
		this.setState({username:'', password:'', isLoggedIn: false});
		console.log(this.state.isLoggedIn);
	}


	render() {
		return(
		<div>
			{/*Open the Login Popup when clicking the Login button*/}

			<button className="Login"
			onClick={this.open.bind(this)}>
			{this.state.loginText}
			</button>

			{
			/*if (isLoggedIn) {
				button = <LogoutButton onClick={this.handleLogout}	/>;
		    }
			else {
			    button = <LoginButton onClick={this.handleClick}/>;
		    }
			*/}

			<Modal show={this.state.showModal} onHide={this.close.bind(this)}>
				<Modal.Header closeButton>
					<Modal.Title>Login</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<p>Username</p>
					<input  type = "text"
							name = "username"
							value = {this.state.username}
							onChange = {this.handleUsername}/>
					<p>Password</p>
					<input  type = "password"
							name = "password"
							value = {this.state.password}
							onChange = {this.handlePassword}/>
					<br/>
					<Button className = "LoginButton"
							onClick={this.handleClick.bind(this)} >
						Login
					</Button>
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={this.close.bind(this)}>Close</Button>
				</Modal.Footer>
			</Modal>
		</div>
		);
	}
}
