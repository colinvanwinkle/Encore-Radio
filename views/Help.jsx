var React = require('react');
var Modal = require('react-bootstrap/lib/Modal');
var Button = require('react-bootstrap/lib/Button');

export default class Help extends React.Component {
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
			<button className="Help"
			onClick={this.open.bind(this)}>
			Help	
			</button>
			<Modal show={this.state.showModal} onHide={this.close.bind(this)}>
				<Modal.Header closeButton>
					<Modal.Title>Help</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<img id="KB"
					src="https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/10406954_1082376818451051_5061726577497292915_n.jpg?oh=d887b91ab27d53ac30dd55672750fabf&oe=59287080"/>
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={this.close.bind(this)}>Close</Button>
				</Modal.Footer>
			</Modal>
		</div>
		);
	}
}
