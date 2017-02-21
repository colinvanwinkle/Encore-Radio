/**
 * This module is responsible for rendering and declaring the components
 * that are used on the homepage as well as functionality that occurs on
 * the current home page like searching for songs and addings songs to DB
 */

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

var db = require('mysql');


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

//Component that conains all the search results when search button is clicked
class SearchBar extends React.Component {
	constructor(props){
		super(props);

		this.state = {audioTest:
			"http://www.nihilus.net/soundtracks/Static%20Memories.mp3", value: '',
				text: '', titles: '', urls: '', songs: ''};
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
		return audio;

	}

	//Fires when the search button is clicked
	handleClick() {
		this.setState({text: ''});	
		var that = this;

		//Searches for the videos
		youTube.search(this.state.value, 10, function(error, result){
				var i = 0;
				var vidTitles = new Array();
				var tempThumbUrls = new Array();
				var songURLs = new Array();

				//gets the title, the thumbnail url, and the video URL
				for (i = 0; i < 10; i++) {
				vidTitles[i] = result.items[i].snippet.title;
				tempThumbUrls[i] = result.items[i].snippet.thumbnails.default.url;
				songURLs[i] = "https://youtube.com/embed/" + result.items[i].id.videoId
				}

				//set the state of the variables so that they are applied to the
				//elements below
				that.setState({titles: vidTitles, urls: tempThumbUrls, songs: songURLs});

				audio = that.getAudio("www.youtube.com/watch?v=" + result.items[0].id.videoId);


				}); //end of youtube search
	}

	handleChange(event){
		this.setState({value: event.target.value});
	}


	//Renders all the searhc results and sets the values of their fields to the
	//state of the component
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
				<SearchResult songURL={this.state.songs[0]} backgroundColor={'#6ac5fd'} title={this.state.titles[0]} url={this.state.urls[0]} />
				<SearchResult songURL={this.state.songs[1]} backgroundColor={'#EEEEEE'} title={this.state.titles[1]} url={this.state.urls[1]} />
				<SearchResult songURL={this.state.songs[2]} backgroundColor={'#6ac5fd'} title={this.state.titles[2]} url={this.state.urls[2]} />
				<SearchResult songURL={this.state.songs[3]} backgroundColor={'#EEEEEE'} title={this.state.titles[3]} url={this.state.urls[3]} />
				<SearchResult songURL={this.state.songs[4]} backgroundColor={'#6ac5fd'} title={this.state.titles[4]} url={this.state.urls[4]} />
				<SearchResult songURL={this.state.songs[5]} backgroundColor={'#EEEEEE'} title={this.state.titles[5]} url={this.state.urls[5]} />
				<SearchResult songURL={this.state.songs[6]} backgroundColor={'#6ac5fd'} title={this.state.titles[6]} url={this.state.urls[6]} />
				<SearchResult songURL={this.state.songs[7]} backgroundColor={'#EEEEEE'} title={this.state.titles[7]} url={this.state.urls[7]} />
				<SearchResult songURL={this.state.songs[8]} backgroundColor={'#6ac5fd'} title={this.state.titles[8]} url={this.state.urls[8]} />
				<SearchResult songURL={this.state.songs[9]} backgroundColor={'#EEEEEE'} title={this.state.titles[9]} url={this.state.urls[9]} />
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

//Contains an individual search result (one row) that is inserted into the
//SearchBar component 10 times.
class SearchResult extends React.Component {


	//This function is fired when a <div> containing the song
	//is clicked and should add the song to the DB
	handleAdd(event){

/*
	var connection = db.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : 'AMosshart7!',
	database : 'ERDB'
	});
*/
alert(this.props.title + "\n" + this.props.songURL + "\n" +
		this.props.url);

/*
connection.connect();

connection.query('INSERT INTO Songs' +
		'(Station_URL,Song_URL,Running_Time,Song_Title) VALUES (NULL,' +
			this.props.songURL +  ',NULL,' + this.props.title + ',',  function (error, results,
				fields) {
			if (error) throw error;
			});

		connection.end();
		*/
		}

		//Renders an individual row component
		render() {
		return (
				<div onClick={this.handleAdd.bind(this)}  style={{backgroundColor: this.props.backgroundColor}} className="row SearchResult">
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


//Inserts the Station component that is inserted into the final component that
//is exported
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


//Used for redux
var wrapper = connect(

		function(state){
		return {custom: state};
		}

		);

module.exports = wrapper(layout);
