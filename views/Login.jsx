var React = require('react');
var Modal = require('react-bootstrap/lib/Modal');
var Button = require('react-bootstrap/lib/Button');
var axios = require('axios');
var db = require('mysql');
var queryObj = require('./LoginQuery.js');

var connection = db.createConnection({
	host     : "localhost",
	user     : "cvanwinkle",
	password : "Legends!",
	database : "ERDB"
});

/** Maybe export username and password to the calling 
	function and do the database query there **/

export default class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state ={
					showModal: false,
					username: '',
					password: ''
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

		var data = {username: this.state.username, password: this.state.password};	

        axios.post('/login',data).then(function (response) {
			console.log("RESPONSE: "+response.body); 
		}).catch(function (error) {
			console.log(error);
		});
		//alert("Hi");
	}

	render() {
		return(
		<div>
			{/*Open the Login Popup when clicking the Login button*/}
			<button className="Login"
			onClick={this.open.bind(this)}>
			Login	
			</button>
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
