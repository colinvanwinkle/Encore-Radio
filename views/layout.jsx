/**
 * This module is responsible for rendering and declaring the components
 * that are used on the homepage as well as functionality that occurs on
 * the current home page like searching for songs and addings songs to DB
 */

var React = require('react');
var ReactDOM = require('react-dom');
var connect  = require('react-redux').connect;
var YouTube = require('youtube-node');
var Modal = require('react-bootstrap/lib/Modal');
var Nav = require('react-bootstrap/lib/Nav')
var NavItem = require('react-bootstrap/lib/NavItem')
var Button = require('react-bootstrap/lib/Button');
var ReactPlayer = require('react-player');
var youTube = new YouTube();
youTube.setKey('AIzaSyBT8ce6NXejMyBQJ6vJYTV9MgNW6tXyQiY');
//var audioGetter = require('./functions/getAudio.js');
var audio;	//this object holds the audio object
var fs = require('fs');
var ytdl = require('ytdl-core');
import NavBar from './NavBar.jsx';
import Queue from './Queue.jsx';
var db = require('mysql');
var axios = require('axios');
/**
 * Body component located under NavBar and currently consists of the queue and
 * search tab.
 */
class Body extends React.Component {
	render() {
		return (
				<div className="row" id="body">
				<Queue />
				<SearchAndReco />
				<AudioPlayer/>
				</div>
			   );
	}
}

/**
 * SearchAndReco component located inside the body and consists of the search
 * bar, and eventually the suggested song tab
 */
export default class SearchAndReco extends React.Component {
	render() {
		return (
				<div className="col-md-3 col-md-offset-1
				row "id="Search">
        		<Test />
				</div>
			   );
	}
}

class Test extends React.Component {

	handleSelect(selectedKey) {
  alert('selected ' + selectedKey);
}

  render(){
  return (
    <Nav bsStyle="pills" activeKey={1} onSelect={handleSelect}>
      <NavItem eventKey={1} href="/home">NavItem 1 content</NavItem>
      <NavItem eventKey={2} title="Item">NavItem 2 content</NavItem>
      <NavItem eventKey={3} disabled>NavItem 3 content</NavItem>
    </Nav>
    );

  }
}

//Component that conains all the search results when search button is clicked
	/**
class SearchBar extends React.Component {
	constructor(props){
		super(props);
		var test = []
		for (var i = 0; i < 10; i++) {
			test[i] = "http://www.cityrider.com/fixed/43aspect.png";
		}
		this.state = {
			value: '',
			text: '',
			titles: '',
			urls: test,
			songs: ''
		};
	}
	//the temporary button click will trigger this function and it will play the
	//next song in queue
	handlePlayNextSong(){
		axios.get('/playNextSong').then(function (response) {
				console.log("This is the reponse: " + JSON.stringify(response));
				})
		.catch(function (error) {
				console.log(error);
				});

		alert("Hello!");
	}

	//Fires when the search button is clicked
		this.setState({value: event.target.value});

		var that = this;
		//Searches for the videos
		youTube.search(event.target.value, 10, function(error, result){
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

				}); //end of youtube search
	}


	//Renders all the searhc results and sets the values of their fields to the
	//state of the component
	render() {
		return (
				<div id="SearchResults">
				<div className="row searchInput">
					<div className="input-group stylish-input-group">
	            		<input value = {this.state.value} type="text"
						class="form-control" id="SearchInput" placeholder="Search"
						onChange={this.handleChange.bind(this)} />
			    		<Button className="SearchButton" onClick={this.handleClick.bind(this)}>
							<span className="glyphicon glyphicon-search"></span>
						</Button>
					</div>
				</div>
				<div id="scrollTest">
				<div className="row resultList">
				<ul>
				<SearchResult songURL={this.state.songs[0]}
				backgroundColor={'#FF6867'} title={this.state.titles[0]} url={this.state.urls[0]} />
				<SearchResult songURL={this.state.songs[1]}
				backgroundColor={'#000D41'} title={this.state.titles[1]} url={this.state.urls[1]} />
				<SearchResult songURL={this.state.songs[2]}
				backgroundColor={'#FF6867'} title={this.state.titles[2]} url={this.state.urls[2]} />
				<SearchResult songURL={this.state.songs[3]}
				backgroundColor={'#000D41'} title={this.state.titles[3]} url={this.state.urls[3]} />
				<SearchResult songURL={this.state.songs[4]}
				backgroundColor={'#FF6867'} title={this.state.titles[4]} url={this.state.urls[4]} />
				<SearchResult songURL={this.state.songs[5]}
				backgroundColor={'#000D41'} title={this.state.titles[5]} url={this.state.urls[5]} />
				<SearchResult songURL={this.state.songs[6]}
				backgroundColor={'#FF6867'} title={this.state.titles[6]} url={this.state.urls[6]} />
				<SearchResult songURL={this.state.songs[7]}
				backgroundColor={'#000D41'} title={this.state.titles[7]} url={this.state.urls[7]} />
				<SearchResult songURL={this.state.songs[8]}
				backgroundColor={'#FF6867'} title={this.state.titles[8]} url={this.state.urls[8]} />
				<SearchResult songURL={this.state.songs[9]}
				backgroundColor={'#000D41'} title={this.state.titles[9]} url={this.state.urls[9]} />
				</ul>
				</div>
				</div>
				</div>
				);
	}
}**/

class AudioPlayer extends React.Component{

	componentDidMount(){
			alert("Audioplayer mounted!");


	}
	render(){

		return (
			<ReactPlayer url="" Playing/>
		)
	}

}

//Contains an individual search result (one row) that is inserted into the
//SearchBar component 10 times.
class SearchResult extends React.Component {


	//This function is fired when a <div> containing the song
	//is clicked and should add the song to the DB
	handleAdd(event){


alert(this.props.title + "\n" + this.props.songURL + "\n" +
		this.props.url);

var data = {
	songTitle: this.props.title,
	songURL: this.props.songURL,
	thumbnailURL: this.props.url
};

axios.post('/addSong', data).then(function (response) {
		console.log(response);
		})
.catch(function (error) {
		console.log(error);
		});
}

//Renders an individual row component
render() {
	return (
			<div onClick={this.handleAdd.bind(this)}  style={{backgroundColor: this.props.backgroundColor}} className="row SearchResult">
			<img className="ResultPic" src={this.props.url}/>
			<p className="ResultTitle">{this.props.title}</p>
			</div>
		   );
}
}


class Station extends React.Component {
	render() {
		return (
				<div className="fill body">
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

		<link href='//fonts.googleapis.com/css?family=Carrois Gothic SC'
		rel='stylesheet'/>

		<link rel="stylesheet"
		href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css"
		integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp"
		crossOrigin="anonymous"/>
		<link rel="stylesheet" href="style.css" />
		</head>

		<body id="main">
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
