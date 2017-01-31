// ========================================
var playVideo = function() {    
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '390',
          width: '640',
          videoId: 'M7lc1UVf-VE',
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      }

      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        event.target.playVideo();
      }

      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
      var done = false;
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
          setTimeout(stopVideo, 6000);
          done = true;
        }
      }
      function stopVideo() {
        player.stopVideo();
  }
}


// ========================================





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
            <QueuedSong />
            <QueuedSongMain />
            <QueuedSong />
            <QueuedSong />
            
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
    return ( 
        <div className="SongDisplay">
          <img className="SongPic" src="http://images.genius.com/b17a54d05a3de269cc6ea53c3f71f73e.1000x1000x1.jpg" />
        </div>
    );
  }
}

class SongBar extends React.Component {
  render() {
    return ( 
        <div className="SongBar">  
            <div className="Like col-md-6">Like</div>
            <div className="Dislike col-md-6">Dislike</div>
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
        <div id="player"></div>
            
            
        </div>
    );
  }
}


class Game extends React.Component {
  render() {
    return (
      <div className="fill">
      <NavBar />
      <Body />
      </div>
    );
  }
}

class Test extends React.Component {  
  render() {
    return (
      <Song />
    );
  }
}


// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('container')
);
