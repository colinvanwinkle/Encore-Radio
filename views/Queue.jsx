var React = require('react');
var axios = require('axios');
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
			currentSongURL: 'https://www.praisecharts.com/themes/praisecharts/images/layout/music-placeholder.png',
			currentThumbnailURL: 'https://www.praisecharts.com/themes/praisecharts/images/layout/music-placeholder.png',
			nextSongThumbnaiLURL: 'https://www.praisecharts.com/themes/praisecharts/images/layout/music-placeholder.png',
			previousSongThumbnaiLURL: 'https://www.praisecharts.com/themes/praisecharts/images/layout/music-placeholder.png',

			currentSongHash: '',
			nextSongHash: '',
			previousSongHash: '',
			playing: true

		};
	}

	componentDidMount(){
		var that = this;
		setInterval(function(){ that.updateSongQueue(); }, 1000);
	}

		updateSongQueue(){

			var that = this;
			axios.get('/updateSongQueue').then(function(response){

				if (response.data.length >=2){
				var start_time = JSON.stringify(response.data[1].Running_Time);
				var now_time = new Date().toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");
			
			
				var t1 = moment(start_time, "hh:mm:ss");
				var offset = moment("08:00:00", "hh:mm:ss");
				var start_time_machine = t1.diff(offset, 'seconds');
			
				console.log(start_time_machine);

			}

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
			axios.get('/playNextSong').then(function (response) {
				that.updateSongQueue();
				console.log(response);

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
				/>
			<QueuedSongMain playing={this.state.playing} songURL={this.state.currentSongURL} playNextSong={this.playNextSong.bind(this)} thumbnailURL={this.state.currentThumbnailURL} hash={this.state.currentSongHash}
				/>
			<QueuedSong thumbnailURL={this.state.nextSongThumbnaiLURL} hash={this.state.nextSongHash}/>



				</div>
				</div>
			   );
	}
}
