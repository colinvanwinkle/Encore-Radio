
module.exports = { queryDB:  function(username, password, cpassword, email, callback) {
	
	var db = require('mysql');
	var connection = db.createConnection({
		host     : "localhost",
		user     : "cvanwinkle",
		password : "Legends!",
		database : "ERDB"
	});


	var result,callback_error;

	if(password != cpassword) {
		result = "Passwords do not match";
		return;
	}
	
	var User = { User_ID : username, Password : password, Email : email, Host: true };

	connection.query('INSERT INTO User_Info SET ?', User, function(error, res) {
		if(error) {
			callback_error = error;
			throw error;
		}
		else
			result = "Registered Account";

	return callback(callback_error, result);
	});

	callback(callback_error,result);

  }

};


