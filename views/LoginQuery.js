
module.exports = { queryDB:  function(username, password, callback) {
	
	var db = require('mysql');
	var connection = db.createConnection({
		host     : "localhost",
		user     : "cvanwinkle",
		password : "Legends!",
		database : "ERDB"
	});

	var	queryCommand = "SELECT * FROM User_Info WHERE User_ID = ?";
	var result,callback_error;
	connection.query(queryCommand, username, function(error, rows) {
		if(error) {
			callback_error = error;
			throw error;
		}

		//Check if username exists
		if(!rows.length)
			result = "No user found";
		else
			if(password != rows[0].Password) {
				result = "Wrong Password";
			}
			else
				result = "Logging in";

	return callback(callback_error, result);
	});

	callback(callback_error,result);

  }

};


