var prompt = require('prompt');
var bcrypt = require('bcrypt');
var salt = bcrypt.genSaltSync(10);


/* Login */
var login = function(con) {

   console.log('Proceed to login:');


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

	bcrypt.compare(result.pw, rows[0].Password, function(err, res) {

	   if (res !== true) {
	      console.log('Wrong Password');
	      return ;
           }

	   console.log('Login succeed');

	});


        });	
   });
}

/* Register */
var register = function(con) {

   console.log('Proceed to register:');

   prompt.start();
   prompt.get(['id', 'pw', 'email'], function (err, result) {
        console.log('User Id: ' + result.id);
        console.log('User Password: ' + result.pw);
        console.log('Email: ' + result.email);

        var encryptedPassword = bcrypt.hashSync("" + result.pw, salt);

        var User = { User_ID : result.id, Password : encryptedPassword, Email : result.email };
        con.query('INSERT INTO User_Info SET ?', User, function(err, res) {
                if (err) throw err;

                console.log('Inserted', res.insertId);
        });
   });

}

exports.login = login;
exports.register = register;
