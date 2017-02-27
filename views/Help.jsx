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
				<h2>FAQ’s</h2>
				<h4>How do I search a song?</h4>
					<ul>
						<li>The search bar is located on the right side of the
						page and to the right side of the queue.</li>
						<li>Type in the song you wish to search in the search
						bar and click the search button. </li>
					</ul>
				<h4>How do I add songs to the Queue?</h4>
				<ul>
					<li>Songs can be added to the queue after searching for
					them.</li>
					<li>Once you search for a song and the results appear,
					there is an add option next to each result that allows
					you to add the song to the queue.</li>
				</ul>
				<h4>How do I host a station? </h4>
					<ul>
						<li>Once you have signed in you can click onto the host
						a station button.</li>
						<li>If a YouTube playlist has not been linked during
						account creation, then the system shall ask the user to
						put a valid YouTube channel’s name.</li>
						<li>Once you have signed in and connected your YouTube
						channel you shall be able to add songs to the queue and
						host your station. </li>
					</ul>
				<h4>How do I Request a song onto the Queue?</h4>
				<ul>
					<li>Navigate to the request tab to the right of the station
					queue. </li>
					<li>On the top of the tab there is a search bar, type in the
					song you wish to request and click the search button.</li>
					<li>Locate the song you wish to request among the results,
					click the add button to request it to the queue. </li>
				</ul>
				<h4>How do I change the volume?</h4>
				<ul>
					<li>Navigate to the queue, below the current song playing
					there is a volume button that allows you to select the
					appropriate volume button.</li>
				</ul>
				<h4>How do I share my Station to Twitter?</h4>
				<ul>
					<li>Navigate to the share icons below the queue, click on to
					the twitter logo</li>
				    <li>Enter your login information to sign into twitter
					and share the station onto your twitter. </li>
				</ul>
				</Modal.Body>
				</Modal>
				</div>
			  );
	}
}

