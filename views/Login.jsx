var React = require('react');
var Modal = require('react-bootstrap/lib/Modal');
var Button = require('react-bootstrap/lib/Button');

export default class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {showModal: false};
	}
	close() {
		this.setState({showModal: false});
	}
	open() {

		this.setState({showModal: true})
	}
	render() {
		return(
		<div>
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
					<input type="text"/>
					<p>Password</p>
					<input type="text"/>
					<br/>
					<button>Login</button>
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={this.close.bind(this)}>Close</Button>
				</Modal.Footer>
			</Modal>
		</div>
		);
	}
}
