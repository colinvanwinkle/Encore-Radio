
module.exports = { addSong: function(title, songURL, thumbnailURL){

	var db  = require('mysql');

var connection = db.createConnection({
host     : "localhost",
user     : "cvanwinkle",
password : "Legends!",
database : "ERDB"
});

//alert(this.props.title + "\n" + this.props.songURL + "\n" +
//      this.props.url);


connection.connect();

var query = 'INSERT INTO Songs VALUES ("testURL",' + JSON.stringify(songURL) +
', "00:00:00",' + JSON.stringify(title) + ',' +
JSON.stringify(thumbnailURL) + ');'


connection.query(query,  function (error, results,
				fields) {
			if (error) throw error;
			});

	
	connection.end();
	}
};
