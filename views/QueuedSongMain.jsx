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
				<div className="col-md-4 col-md-offset-1">
				<div className="MainDisplay">
					<img className="MainSongPic"
					src={this.props.thumbnailURL}/>
				</div>
				<div className="MainBar">
					<button className="MainLike">
						<span className="glyphicon glyphicon-thumbs-up"></span></button>
					<button className="MainDislike">
						<span className="glyphicon
						glyphicon-thumbs-down"></span>
					</button>
				</div>
				<ReactPlayer playing={this.props.playing} hidden onEnded={this.props.playNextSong} url={this.props.songURL} />
				<button onClick={this.props.playNextSong}>Skip</button>
				</div>
			   );
			 }

}
