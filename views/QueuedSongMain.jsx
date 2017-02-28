var React = require('react');
var Modal = require('react-bootstrap/lib/Modal');
var Button = require('react-bootstrap/lib/Button');
var ReactPlayer = require('react-player');
var axios = require('axios')

import SongBar from './SongBar.jsx';
import SongDisplay from './SongDisplay.jsx';
/**
 * QueuedSongMain component located inside the queue and consists of a
 * songDisplay, songbar, audio component. This is the component that plays the
 * current song.
 */
export default class QueuedSongMain extends React.Component {

	constructor(){
		super();
		this.state = {
			currentSongURL: '',
			currentThumbnailURL: ''
		};
	}

	componentDidMount(){

		var that = this;
		axios.get('/playNextSong').then(function (response) {
			that.setState({
				currentSongURL: response.data.Song_URL,
				currentThumbnailURL: response.data.Thumbnail
			});
		})
		.catch(function (error) {
			console.log(error);

		});


	}

	playNextSong(){
		var that = this;
		axios.get('/playNextSong').then(function (response) {
			that.setState({currentSongURL: response.data.Song_URL});
		})
		.catch(function (error) {
			console.log("Error");
		});
	}

	render() {
		return (
				<div className="col-md-3 QueuedSongMain">
				<SongDisplay thumbnail={this.state.currentThumbnailURL}/>
				<SongBar />
				<ReactPlayer url={this.state.currentSongURL} hidden={false}/>
				</div>
			   );
			 }

}
