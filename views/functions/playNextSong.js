var db = require('mysql');
var connection = db.createConnection({
    host     : "localhost",
    user     : "cvanwinkle",
    password : "Legends!",
    database : "ERDB"
});


module.exports = { playNextSong: function(){

var query = 'SELECT * FROM (SELECT FIRST * FROM Songs ORDER BY Added_Time);'

  connection.query(query, function(error, results, fields){
    if (error) throw error;
    return results[0];
  });



  }
};
