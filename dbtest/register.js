var mysql = require("mysql");


var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "AMosshart7!",
	database: "ERDB"
});

con.connect(function(err) {
	if (err) {
		console.log('error connecting to Db');
		return;
	}
	console.log('Connection established\n');
});

con.query('SELECT * FROM User_Info', function(err,rows) {
	if (err) throw err;

	console.log('Data received\n');
	console.log(rows);
});




/* Reigster */
console.log('Proceed to register:');

var prompt = require('prompt');

prompt.start();
prompt.get(['id', 'pw', 'email'], function (err, result) {
	console.log('User Id: ' + result.id);
	console.log('User Password: ' + result.pw);
	console.log('Email: ' + result.email);

	var User = { User_ID : result.id, Password : result.pw, Email : result.email };
	con.query('INSERT INTO User_Info SET ?', User, function(err, res) {
		if (err) throw err;

		console.log('Inserted', res.insertId);
	});
});
