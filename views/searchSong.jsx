import reactCSS from 'reactcss'
var React = require('react');

class NavBar extends React.Component {
	render() {
		return (
				<div className="container-fluid" id="nav">
				<h1 id="logo">Encore Radio</h1>
				</div>
			   );
	}
}

class Body extends React.Component {
	render() {
		return ( 
				<div className="row" id="body">
				<Queue />
				<Search />
				</div>
			   );
	}
}

class Queue extends React.Component {
	render() {
		return ( 
				<div className="col-md-6 col-md-offset-1" id="Queue">

				<div className="QueueRow">

				<QueuedSong />
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
				<Song />
				</div>
			   );
	}
}

class Search extends React.Component {
	render() {
		return ( 
				<div className="col-md-3 col-md-offset-1 row" id="Search"> 

				</div>
			   );
	}
}

class Request extends React.Component {
	render() {
		return ( 
				<div id="SearchTAB" className="tab-pane fade in active">
				<p>test1</p>
				</div>
			   );
	}
}



class SongDisplay extends React.Component {
	render() {
		const styles = reactCSS({
				'default': {
img: {
width:'100px',
height:'100px',
},
},
})
return ( 
		<div className="SongDisplay">
		<img style={styles.img} className="SongPic"
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
				<div className="Like col-md-6">Like</div>
				<div className="Dislike
				col-md-6">Dislike</div>
				</div>
			   );
	}
}

class Song extends React.Component {
	video() {
		alert("Voila")
	}
	componentDidMount() {
		this.video()
	}
	render() {
		return ( 
				<div className="Song">  
				<div
				id="player"></div>


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




var searchSong = React.createClass({

_alertMe: function(){
alert("Hello");
},


render: function() {
return (
		<html>
				<head>
				<link rel='stylesheet' href='/style.css'/>
				</head>
					<body>
					<div>
					<Station />
						<form method="POST" action="/">
						Song
						URL:<br/>
						<input type="text" name="song"/><br/>
						<input type="submit" value="Submit"/>
						</form>
					<button onClick={this._alertMe}>{this.props.song} </button>
					<script dangerouslySetInnerHTML={{ __html: 'window.PROPS=' + JSON.stringify(this.props) }} />
					<script src='/bundle.js'/>
					</div>
					</body>
		</html>
);
}
});

module.exports = searchSong;
