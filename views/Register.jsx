var React = require('react');
var Modal = require('react-bootstrap/lib/Modal');
var Button = require('react-bootstrap/lib/Button');
var axios = require('axios');


/** Maybe export username and password to the calling 
  function and do the database query there **/


function isValid(data, result) {

	var containsNum = /\d/.test(data.password);
	var containsAlph = /[a-z]/i.test(data.password);

	//If passwords do not match
	if(data.password.localeCompare(data.cpassword))
		result = "Passwords do not match";

	//If password is too short
	else if (data.password.length < 6 || data.cpassword.length < 6) {
		result = "Password is too short";
	}
	//if password doesn't contain numbers AND letters
	else if(!(containsNum && containsAlph))
		result = "Password is not valid. Please use at least 6 characters containing at least 1 number";

	else
 		result = "Success";
	console.log("isValid: "+result);
	return result;

}

export default class Register extends React.Component {
	constructor(props) {
		super(props);
		this.state ={
showModal: false,
		   username: '',
		   password: '',
		   cpassword:'',
		   email	: '',
		};

		this.handleUsername = this.handleUsername.bind(this);
		this.handlePassword = this.handlePassword.bind(this);
		this.handleC_Password = this.handleC_Password.bind(this);
		this.handleEmail = this.handleEmail.bind(this);
	}
	close() {
		this.setState({showModal: false});
	}
	open() {
		console.log("Opening tab");
		this.setState({showModal: true})
	}

	handleUsername(e) {
		this.setState({username: e.target.value});
	}
	handlePassword(e) {
		this.setState({password: e.target.value});
	}
	handleC_Password(e) {
		this.setState({cpassword: e.target.value});
	}
	handleEmail(e) {
		this.setState({email: e.target.value});
	}

	handleClick(event) {

		this.setState({showModal: false});

		var data = {
		  username: this.state.username,
		  password: this.state.password,
		  cpassword: this.state.cpassword,
		  email: this.state.email,
		};

		var result = "";
		result = isValid(data);
		console.log(result);
		alert(result);


		console.log(result == "Success");

		if(result == "Success") {
			console.log("Making Axios call");
			axios.post('/register', data).then(function (response) {
					console.log(response);

			}).catch(function (error) {
				console.log(error);
			});
		}

	}
	render() {
		return(
				<div>
				{/*Open the Register Popup when clicking the Register button*/}
				<button className="Register"
				onClick={this.open.bind(this)}>
				Register	
				</button>
				<Modal show={this.state.showModal} onHide={this.close.bind(this)}>
				<Modal.Header closeButton>
				<Modal.Title>Register</Modal.Title>
				</Modal.Header>
				<Modal.Body>
				<p>Username</p>
				<input  type = "text" 
				name = "username" 
				value = {this.state.username}
				onChange = {this.handleUsername}/>
				<p>E-mail</p>
				<input  type = "text" 
				name = "email"
				value = {this.state.email}
				onChange = {this.handleEmail}/>
					<p>Password</p>
					<input  type = "password" 
					name = "password"
					value = {this.state.password}
				onChange = {this.handlePassword}/>
					<p>Confirm Password</p>
					<input  type = "password" 
					name = "cpassword"
					value = {this.state.cpassword}
				onChange = {this.handleC_Password}/>
					<br/>
					<Button className = "RegisterButton" 
					onClick={this.handleClick.bind(this)} >
					Register
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
