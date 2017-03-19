var axios = require('axios');
var React = require('react');
var moment = require('moment');

import QueuedSong from './QueuedSong.jsx';
import QueuedSongMain from './QueuedSongMain.jsx';
import QueueController from './controllers/Queue.js';

/**
 * Queue component located inside the body component, and currently consists of
 * 5 song components
 * #TODO Alter styling
 */
export default class Queue extends React.Component {

	constructor(){
		super();
		this.state = {
			currentSongURL: '',
			currentThumbnailURL: 'https://www.praisecharts.com/themes/praisecharts/images/layout/music-placeholder.png',
			nextSongThumbnaiLURL: 'https://www.praisecharts.com/themes/praisecharts/images/layout/music-placeholder.png',
			previousSongThumbnaiLURL: 'https://www.praisecharts.com/themes/praisecharts/images/layout/music-placeholder.png',

			currentSongHash: '',
			nextSongHash: '',
			previousSongHash: '',
			playing: true,
			time: 0

		};
	}

	componentDidMount(){
		var that = this;
		this.syncTime();
		setInterval(function(){ that.updateSongQueue(); }, 2000);
	}

		syncTime(){
			var that = this;
			QueueController.updateSongQueue(that);

		}

		updateSongQueue(){
			var that = this;
			QueueController.updateSongQueue(that);
		}

		 playNextSong(){
			var that = this;
			this.setState({time: 0});
			axios.get('/playNextSong').then(function (response) {
				that.updateSongQueue();

			})
			.catch(function (error) {
				console.log(error);
			});
	}

	render() {
		return (
				<div className="col-md-6 col-md-offset-1"
				id="Queue">

				<div className="row">

				<QueuedSong thumbnailURL={this.state.previousSongThumbnaiLURL} hash={this.state.previousSongHash}
				/>
			<QueuedSongMain playing={this.state.playing} songURL={this.state.currentSongURL + "?start=" + this.state.time} playNextSong={this.playNextSong.bind(this)} thumbnailURL={this.state.currentThumbnailURL} hash={this.state.currentSongHash}
				/>
			<QueuedSong thumbnailURL={this.state.nextSongThumbnaiLURL} hash={this.state.nextSongHash}/>



				</div>
				</div>
			   );
	}
}
