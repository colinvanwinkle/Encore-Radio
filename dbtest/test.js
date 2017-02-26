var connectionProvider = require('./mysqlConnectionProvider.js');

var connection = connectionProvider.mysqlConnectionProvider.getSqlConnection();

var loginSystem = require('./loginSystem.js');

var prompt = require('prompt');

connection;
/*
connection.query("SELECT * FROM User_Info", function (err, rows) {
   if (err) { throw err }

   console.log(rows);
});
*/

console.log('[r]egister / [l]ogin :')

prompt.start();
prompt.get('val', function (err, result) {
   if (err) {throw err}

   if (result.val === 'r')
      loginSystem.register(connection);
   else if (result.val === 'l')
      loginSystem.login(connection);
  
});

//connection.end();
