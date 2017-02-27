var hash = require('object-hash');

//Export the file to be used in other components
module.exports = { addSong: function(title, songURL, thumbnailURL){

	var db  = require('mysql');
	var date = new Date();



//Connect to the database
	var connection = db.createConnection({
host     : "localhost",
user     : "cvanwinkle",
password : "Legends!",
database : "ERDB"
});

//connection.connect();

/* Helper function
 * Get the current date and time
 * MYSQL Datetime format
 */
function getDateTime() {

	var date = new Date();
	var hour = date.getHours();
	hour = (hour < 10 ? "0" : "") + hour;

	var min  = date.getMinutes();
	min = (min < 10 ? "0" : "") + min;

	var sec  = date.getSeconds();
	sec = (sec < 10 ? "0" : "") + sec;

	var year = date.getFullYear();

	var month = date.getMonth() + 1;
	month = (month < 10 ? "0" : "") +
		month;

	var day  = date.getDate();
	day = (day < 10 ? "0" : "")
		+ day;

	return year + "-" +	month + "-" + day + " "	+ hour + ":" + min + ":" + sec;

}
//Store the current datetime in a variable
var mysqlDateString = getDateTime();

//Hash function to get a unique ID for each song
var hashID = hash({ID: "testURL" + JSON.stringify(songURL) + Math.random()});

/* The command to query the database */
var query = 'INSERT INTO Songs VALUES ("testURL",' + JSON.stringify(songURL) + ', "00:00:00" ,' + JSON.stringify(title) + ',' + JSON.stringify(thumbnailURL) +', "' + hashID + '" , "' +  mysqlDateString + '");'


connection.query(query,  function (error, results, fields) {
		if (error) throw error;
		});


//connection.end();
}
};
