var React = require('react');
var ReactDOM = require('react-dom');
var connect  = require('react-redux').connect;
var YouTube = require('youtube-node');
var youTube = new YouTube();
youTube.setKey('AIzaSyBT8ce6NXejMyBQJ6vJYTV9MgNW6tXyQiY');
//var audioGetter = require('./functions/getAudio.js');
var audio;	//this object holds the audio object
var fs = require('fs');
var ytdl = require('ytdl-core');

class NavBar extends React.Component {
	render() {
		return (
				<div className="container-fluid" id="nav">
				<h1 id="logo">Encore
				Radio</h1>
				</div>
			   );

	}
}

class Body extends React.Component {
	render() {
		return ( 
				<div className="row" id="body">
				<Queue />
				<SearchAndReco />
				</div>
			   );
	}
}

class Queue extends React.Component {
	render() {
		return ( 
				<div className="col-md-6 col-md-offset-1"
				id="Queue">

				<div className="QueueRow">

				<QueuedSong
				/>
				<QueuedSong
				/>
				<QueuedSongMain
				/>
				<QueuedSong
				/>
				<QueuedSong
				/>

				</div>
				</div>
			   );
	}
}

class QueuedSong extends React.Component {
	render() {
		return ( 
				<div className="col-md-2 QueuedSong">
				<SongDisplay />
				<SongBar />
				</div>
			   );
	}
}

class QueuedSongMain extends React.Component {
	render() {
		return ( 
				<div className="col-md-3 QueuedSongMain">
				<SongDisplay />
				<SongBar />
				<audio controls className="player" preload="false">
				      <source
					  src="http://www.nihilus.net/soundtracks/Static%20Memories.mp3"
					  />
				</audio>
				</div>
			   );
	}
}

class SearchAndReco extends React.Component {
	render() {
		return ( 
				<div className="col-md-3 col-md-offset-1
				row" id="Search"> 
				<SearchBar />

				</div>
			   );
	}
}

class AcceptButton extends React.Component {

	render(){
		return (

				<button></button>


			   );
	}
}

class SearchBar extends React.Component {
	constructor(props){
		super(props);
		this.state = {audioTest: "http://www.nihilus.net/soundtracks/Static%20Memories.mp3", value: '', text: '', results: new Array(), urls: new Array()};
	}
	getAudio(url) {
		var audio1 = ytdl(url, {filter: function(f) {
		    return f.container == 'mp4' && !f.encoding; }, requestOptions:
			{headers : {
				'Access-Control-Allow-Origin' :
				'*',	
				'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
				'Access-Control-Allow-Headers' : 'Content-Type'
				}}});
		return audio1

	}
	handleClick() {
		this.setState({text: ''});	
		var that = this;


		var urlList;
		youTube.search(this.state.value, 10, function(error, result){
				var i = 0;
				var tempResults = new Array();
				var tempUrls = new Array();
				for (i = 0; i < 10; i++) {
					tempResults[i] = result.items[i].snippet.title;
					tempUrls[i] = result.items[i].snippet.thumbnails.default.url;
				}
				that.setState({results: tempResults, urls: tempUrls});
				audio = that.getAudio("www.youtube.com/watch?v=" + result.items[0].id.videoId);

				/* this holds the actual audio object */
				//audio = audioGetter.audio;
				//that.setState({audioTest: audio});

				//that.setState({text: that.state.text +
				//result.items[i].snippet.title + ": " +
				//"https://www.youtube.com/embed/" +
				//	result.items[i].id.videoId + " "});	
				});
	}
	handleChange(event){
		this.setState({value: event.target.value});
	}
	handleLiClick(){
		alert("Added Song to Queue");
	}
	render() {
		return (
				<div>
					<div className="row searchInput">
					<input value = {this.state.value} type="text" onChange={this.handleChange.bind(this)} />
					<button onClick={this.handleClick.bind(this)}>Search</button>
					<audio controls className="player" preload="false">
					      <source
						  src={this.state.audioTest}
						  />
				    </audio>
					</div>
					<div className="row resultList">
					<ul>
						<SearchResult backgroundColor={'#6ac5fd'} title={this.state.results[0]} url={this.state.urls[0]} />
						<SearchResult backgroundColor={'#EEEEEE'} title={this.state.results[1]} url={this.state.urls[1]} />
						<SearchResult backgroundColor={'#6ac5fd'} title={this.state.results[2]} url={this.state.urls[2]} />
						<SearchResult backgroundColor={'#EEEEEE'}i title={this.state.results[3]} url={this.state.urls[3]} />
						<SearchResult backgroundColor={'#6ac5fd'} title={this.state.results[4]} url={this.state.urls[4]} />
						<SearchResult backgroundColor={'#EEEEEE'} title={this.state.results[5]} url={this.state.urls[5]} />
						<SearchResult backgroundColor={'#6ac5fd'} title={this.state.results[6]} url={this.state.urls[6]} />
						<SearchResult backgroundColor={'#EEEEEE'} title={this.state.results[7]} url={this.state.urls[7]} />
						<SearchResult backgroundColor={'#6ac5fd'} title={this.state.results[8]} url={this.state.urls[8]} />
						<SearchResult backgroundColor={'#EEEEEE'} title={this.state.results[9]} url={this.state.urls[9]} />
					</ul>
					</div>
				</div>
				);
	}
}

class TabTest extends React.Component {
	constructor(props) {
		super(props);

	}
	render() {
		return (
			<div className="row">
				<ul className="nav nav-pills nav-justified">
					<li className="active"><a data-toggle="pill" href="SearchTab">Search</a></li> 
					<li><a data-toggle="pill" href="RecoTab">Reco</a></li>
				</ul>
				<div className="tab-content">
					<div id="SearchTab" className="tab-pane fade">
						<SearchBar />	
					</div>
					<div id="RecoTab" className="tab-pane fade">
						<h1>Reco</h1>
					</div>
				</div>
			</div>
		);
	}
}


class SearchResult extends React.Component {
	render() {
		return (
			<div style={{backgroundColor: this.props.backgroundColor}} className="row SearchResult">
				<img className="ResultPic col-sm-2" src={this.props.url}/>
				<p className="col-sm-9">{this.props.title}</p>
			</div>
		);
	}
}

class SongDisplay extends React.Component {
	render() {
		return ( 
				<div className="SongDisplay">
				<img className="SongPic"
				src="http://images.genius.com/b17a54d05a3de269cc6ea53c3f71f73e.1000x1000x1.jpg"
				/>
				</div>
			   );
	}
}

class SongBar extends React.Component {
	render() {
		return ( 
				<div className="SongBar">  
					<button className="Like"><span className="glyphicon glyphicon-thumbs-up"></span></button>
					<button className="Dislike"><span className="glyphicon glyphicon-thumbs-down"></span></button>
				</div>
			   );
	}
}

class Station extends React.Component {
	render() {
		return (
				<div className="fill">
				<NavBar />
				<Body />
				</div>
			   );
	}
}


var layout = React.createClass({
render: function() {
return (
		<html>
		<head>
		<link rel="stylesheet"
		href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
		integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
		crossOrigin="anonymous"/>

		<link rel="stylesheet"
		href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css"
		integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp"
		crossOrigin="anonymous"/>
		<link rel="stylesheet" href="style.css" />
		</head>

		<body>
		<script
		src="https://code.jquery.com/jquery-3.1.1.min.js"
		integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="
		crossOrigin="anonymous"></script>
		<script
		src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"
		integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa"
		crossOrigin="anonymous"></script>
		<Station />
		{ this.props.children}
<script dangerouslySetInnerHTML={{ __html: 'window.PROPS=' + JSON.stringify(this.props.custom)}}/>
	<script src="/bundle.js"/>
	</body>
	</html>
	);
		}
}); 



var wrapper = connect(

		function(state){
		return {custom: state};
		}

		);

module.exports = wrapper(layout);
