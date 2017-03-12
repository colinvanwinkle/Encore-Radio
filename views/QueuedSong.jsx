var React = require('react');
var Modal = require('react-bootstrap/lib/Modal');
var Button = require('react-bootstrap/lib/Button');
import SongBar from './SongBar.jsx';
import SongDisplay from './SongDisplay.jsx';

/**
 * QueuedSong component located inside the queue and consists of a songDisplay
 * and Songbar component
 */
export default class QueuedSong extends React.Component {
	render() {
		return (
				<div className="col-md-2 col-md-offset-1">
				<div className="QueuedSong">
				<div className="SongDisplay">
					<img className="SongPic"
					src={this.props.thumbnailURL} />
				</div>
				<div className="SongBar">
			    	<button className="Like">
						<span className="glyphicon glyphicon-thumbs-up"></span>
					</button>
			    	<button className="Dislike">
						<span className="glyphicon glyphicon-thumbs-down"></span>
					</button>
				</div>
				</div>
				</div>
			   );
	}
}
