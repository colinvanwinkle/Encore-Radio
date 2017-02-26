var React = require('react');
var Modal = require('react-bootstrap/lib/Modal');
var Button = require('react-bootstrap/lib/Button');
var ReactPlayer = require('react-player');
import SongBar from './SongBar.jsx';
import SongDisplay from './SongDisplay.jsx';

/**
 * QueuedSongMain component located inside the queue and consists of a
 * songDisplay, songbar, audio component. This is the component that plays the
 * current song.
 */
export default class QueuedSongMain extends React.Component {
	render() {
		return ( 
				<div className="col-md-3 QueuedSongMain">
				<SongDisplay />
				<SongBar />
				<ReactPlayer url='https://www.youtube.com/watch?v=Av8sn7BXLxE'
				hidden={true}/>
				</div>
			   );
	}
}
