var React = require('react');
var Modal = require('react-bootstrap/lib/Modal');
var Button = require('react-bootstrap/lib/Button');
var axios = require('axios');
var queryObj = require('./LoginQuery.js');

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
	}
	close() {
		this.setState({showModal: false});
	}
	open() {
		this.setState({showModal: true})
	}

	handleUsername(e) {
		   this.setState({username: e.target.value});
	}
	handlePassword(e) {
		   this.setState({password: e.target.value});
	}
	handleClick(event) {

		this.setState({showModal: false});
		var saveRef = this;

		var data = {username: this.state.username, password: this.state.password};
		var result;
        axios.post('/login',data).then(function (response) {
			result = JSON.stringify(response.data);
			result = result.substring(1, result.length-1);
			console.log("RESPONSE: "+JSON.stringify(response.config.data));
			console.log("RESULT: "+result);

			if(result === "Logging in") {

				saveRef.setState({ isLoggedIn: true	});
				saveRef.setState({ loginText: "Logout "+saveRef.state.username});

			}

			else if(result === "No user found" || result === "Wrong password") {
				alert("Alert : "+result);
			}


		}).catch(function (error) {
			console.log(error);
		});

			
	
	}


	render() {
		return(
		<div>
			{/*Open the Login Popup when clicking the Login button*/}
			<button className="Login"
			onClick={this.open.bind(this)}>
			{this.state.loginText}
			</button>

			{/*
			if (isLoggedIn) {
				button = <LogoutButton onClick={this.handleLogoutClick}	/>;
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
