var React = require('react');
var Modal = require('react-bootstrap/lib/Modal');
var Button = require('react-bootstrap/lib/Button');
var axios  = require('axios');

import Help from './Help.jsx';
import Login from './Login.jsx';
import QueueResult from './QueueResult.jsx';
//move this back under <div classnae...> when Help is fixed
//<Help />
/**
 * NavBar component located at the top of the screen and currently consists of
 * logo.
 * #TODO Add help, login, and sign up components
 */
export default class QueueTab extends React.Component {
	constructor(props) {
		super(props);
		var thumbnailURLS = new Array(10)
			for (var i = 0; i < 10; i++)
				thumbnailURLS[i] = "https://www.praisecharts.com/themes/praisecharts/images/layout/music-placeholder.png";

		this.state = {
			value: '',
	    	text: '',
	    	titles: new Array(10),
	    	thumbnailURLS: thumbnailURLS,
	    	songs: ''
		};
	}

componentDidMount(){
	this.updateQueueTab();
	var that = this;
	setInterval(function(){ that.updateQueueTab(); }, 1000)
}

updateQueueTab(){
	var that = this;
	axios.get('/updateQueueTab').then(function(response){
		var i = 1;
		for (; i < response.data.length; i++){
			that.state.titles[i-1] = response.data[i].Song_Title;
			that.state.thumbnailURLS[i-1] = response.data[i].Thumbnail;
		}

		for (; i < 11; i++){
			that.state.titles[i-1] = "";
			that.state.thumbnailURLS[i-1] = "https://www.praisecharts.com/themes/praisecharts/images/layout/music-placeholder.png";
		}

	});


}


	render() {
		return (
				<div className="row QueueList">
				<ul>
				<QueueResult songURL={this.state.songs[0]}
				backgroundColor={'#FF6867'} title={this.state.titles[0]} url={this.state.thumbnailURLS[0]} />
				<QueueResult songURL={this.state.songs[1]}
				backgroundColor={'#000000'} title={this.state.titles[1]} url={this.state.thumbnailURLS[1]} />
				<QueueResult songURL={this.state.songs[2]}
				backgroundColor={'#FF6867'} title={this.state.titles[2]} url={this.state.thumbnailURLS[2]} />
					<QueueResult songURL={this.state.songs[3]}
				backgroundColor={'#000000'} title={this.state.titles[3]} url={this.state.thumbnailURLS[3]} />
					<QueueResult songURL={this.state.songs[4]}
				backgroundColor={'#FF6867'} title={this.state.titles[4]} url={this.state.thumbnailURLS[4]} />
					<QueueResult songURL={this.state.songs[5]}
				backgroundColor={'#000000'} title={this.state.titles[5]} url={this.state.thumbnailURLS[5]} />
					<QueueResult songURL={this.state.songs[6]}
				backgroundColor={'#FF6867'} title={this.state.titles[6]} url={this.state.thumbnailURLS[6]} />
					<QueueResult songURL={this.state.songs[7]}
				backgroundColor={'#000000'} title={this.state.titles[7]} url={this.state.thumbnailURLS[7]} />
					<QueueResult songURL={this.state.songs[8]}
				backgroundColor={'#FF6867'} title={this.state.titles[8]} url={this.state.thumbnailURLS[8]} />
					<QueueResult songURL={this.state.songs[9]}
				backgroundColor={'#000000'} title={this.state.titles[9]} url={this.state.thumbnailURLS[9]} />
					</ul>
					</div>

			   );

	}
}
