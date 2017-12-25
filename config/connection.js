var mysql = require('mysql');

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "burgers_db"
});

connection.connect(function(err) {
  if (err) err;
  console.log("Connected!");
});

module.exports = connection;