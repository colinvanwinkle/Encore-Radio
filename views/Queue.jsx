var axios = require('axios');
var React = require('react');
var moment = require('moment');

import QueuedSong from './QueuedSong.jsx';
import QueuedSongMain from './QueuedSongMain.jsx';

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
			axios.get('/updateSongQueue').then(function(response){

			if (response.data.length >=2){
			var start_time = JSON.stringify(response.data[1].Running_Time);
			start_time = moment(start_time, "hh:mm:ss");
			var now_time = moment(new Date().toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1"), "hh:mm:ss");

			var time_since_started = moment.duration(now_time.diff(start_time)).asSeconds();

			that.state.time = time_since_started + 25;
			console.log(that.state.time);
			}

	});


		}

		updateSongQueue(){

			var that = this;

			console.log(this.state.time);
			axios.get('/updateSongQueue').then(function(response){

				if (response.data.length == 2)

					that.setState({
						previousSongThumbnaiLURL: response.data[0].Thumbnail,
						currentSongURL: response.data[1].Song_URL,
						currentThumbnailURL: response.data[1].Thumbnail,
						nextSongThumbnaiLURL: 'https://www.praisecharts.com/themes/praisecharts/images/layout/music-placeholder.png',

						currentSongHash: response.data[1].SongID,
						nextSongHash: '',
						previousSongHash: response.data[0].SongID,
						playing: true


					});

				else if (response.data.length >= 3)

					that.setState({
						previousSongThumbnaiLURL: response.data[0].Thumbnail,
						currentSongURL: response.data[1].Song_URL,
						currentThumbnailURL: response.data[1].Thumbnail,
						nextSongThumbnaiLURL: response.data[2].Thumbnail,

						currentSongHash: response.data[1].SongID,
						nextSongHash: response.data[2].SongID,
						previousSongHash: response.data[0].SongID,
						playing: true

					});

				else if (response.data.length == 1)

					that.setState({
						previousSongThumbnaiLURL: response.data[0].Thumbnail,
						currentThumbnailURL: "https://www.praisecharts.com/themes/praisecharts/images/layout/music-placeholder.png",
						nextSongThumbnaiLURL: "https://www.praisecharts.com/themes/praisecharts/images/layout/music-placeholder.png",

						currentSongHash: '',
						nextSongHash: '',
						previousSongHash: response.data[0].SongID,
						playing: false
					});

			});
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
