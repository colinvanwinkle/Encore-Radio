var axios = require('axios');
//Export the file to be used in other components
module.exports = {

  updateSongQueue: function(that){

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

},

  syncTime: function(that){
    axios.get('/updateSongQueue').then(function(response){

    if (response.data.length >=2){
    var start_time = JSON.stringify(response.data[1].Running_Time);
    start_time = moment(start_time, "hh:mm:ss");
    var now_time = moment(new Date().toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1"), "hh:mm:ss");

    var time_since_started = moment.duration(now_time.diff(start_time)).asSeconds();
    that.state.time = time_since_started + 25;
    }

  });

  }

};
