var mysql = require('mysql');
var mysqlConnectionProvider = {

   getSqlConnection : function() {

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

      return con;
   },
/*
   closeSqlConnection : function (con) {

      con.end(function(error) {
         if (error) { throw error }
         console.log('Connection Closed\n');
      });

   }
*/

}

exports.mysqlConnectionProvider = mysqlConnectionProvider;
