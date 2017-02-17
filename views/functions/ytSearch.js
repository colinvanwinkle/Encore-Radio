var YouTube = require('youtube-node');
var youTube = new YouTube();
youTube.setKey('AIzaSyBT8ce6NXejMyBQJ6vJYTV9MgNW6tXyQiY');



var functions = module.exports = {

	search:	function (song){

	 youTube.search(this.state.text, 1, function(error, result){
				alert( "https://www.youtube.com/embed/" + result.items[0].id.videoId);
			});

	}


}
module.exports = functions;

