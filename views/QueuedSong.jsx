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
				<div className="col-md-2 QueuedSong">
				<SongDisplay thumbnail="http://icdn3.digitaltrends.com/image/chance-the-rapper-album-1200x630-c.jpg" />
				<SongBar />
				</div>
			   );
	}
}
