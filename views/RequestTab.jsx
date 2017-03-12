var React = require('react');
var Modal = require('react-bootstrap/lib/Modal');
var Button = require('react-bootstrap/lib/Button');
var axios  = require('axios');

import Help from './Help.jsx';
import Login from './Login.jsx';
import RequestResult from './RequestResult.jsx';
//move this back under <div classnae...> when Help is fixed
//<Help />
/**
 * NavBar component located at the top of the screen and currently consists of
 * logo.
 * #TODO Add help, login, and sign up components
 */
export default class RequestTab extends React.Component {
	constructor(props) {
		super(props);
		var thumbnailURLS = new Array(10)
			for (var i = 0; i < 10; i++)
				thumbnailURLS[i] = "http://www.cityrider.com/fixed/43aspect.png";

		this.state = {
			value: '',
	    	text: '',
	    	titles: new Array(10),
	    	thumbnailURLS: thumbnailURLS,
	    	songs: ''
		};
	}

	render() {
		return (
				<div className="row QueueList">
				<ul>
				<RequestResult songURL={this.state.songs[0]}
				backgroundColor={'#FF6867'} title={this.state.titles[0]} url={this.state.thumbnailURLS[0]} />
				<RequestResult songURL={this.state.songs[1]}
				backgroundColor={'#000000'} title={this.state.titles[1]} url={this.state.thumbnailURLS[1]} />
				<RequestResult songURL={this.state.songs[2]}
				backgroundColor={'#FF6867'} title={this.state.titles[2]} url={this.state.thumbnailURLS[2]} />
					<RequestResult songURL={this.state.songs[3]}
				backgroundColor={'#000000'} title={this.state.titles[3]} url={this.state.thumbnailURLS[3]} />
					<RequestResult songURL={this.state.songs[4]}
				backgroundColor={'#FF6867'} title={this.state.titles[4]} url={this.state.thumbnailURLS[4]} />
					<RequestResult songURL={this.state.songs[5]}
				backgroundColor={'#000000'} title={this.state.titles[5]} url={this.state.thumbnailURLS[5]} />
					<RequestResult songURL={this.state.songs[6]}
				backgroundColor={'#FF6867'} title={this.state.titles[6]} url={this.state.thumbnailURLS[6]} />
					<RequestResult songURL={this.state.songs[7]}
				backgroundColor={'#000000'} title={this.state.titles[7]} url={this.state.thumbnailURLS[7]} />
					<RequestResult songURL={this.state.songs[8]}
				backgroundColor={'#FF6867'} title={this.state.titles[8]} url={this.state.thumbnailURLS[8]} />
					<RequestResult songURL={this.state.songs[9]}
				backgroundColor={'#000000'} title={this.state.titles[9]} url={this.state.thumbnailURLS[9]} />
					</ul>
					</div>

			   );

	}
}
