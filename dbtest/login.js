
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




/* Login */

console.log('Proceed to login:');

var prompt = require('prompt');

prompt.start();
prompt.get(['id', 'pw'], function (err, result) {

	con.query("SELECT * FROM User_Info WHERE User_ID = ?", result.id, function (err, rows) {
		if (err) {
			return ;
		}
		if(!rows.length) {
			console.log('No user found');
			return ;
		}

		if(result.pw !== rows[0].Password) {
			console.log('Wrong Password');
			return ;
		}
		console.log('Login succeed');
	});	
});

