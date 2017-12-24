var mysql = require('mysql');

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "252810Rak1965!"
});

connection.connect(function(err) {
  if (err) err;
  console.log("Connected!");
});

module.exports = connection;