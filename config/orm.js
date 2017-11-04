var con = require("connection.js");

var orm = {
selectAll: function(tableName, colToSearch, valOfCol) {
    var querystring = "SELECT * FROM ??";

    con.query(querystring, [tableName], function (err,resuts) {
        console.log(result);
    });

},

 insertOne: function (burger_nameVal, devouredVal, dateVal) {
    var querystring = "INSERT INTO burger (burger_name, devoured, date) VALUES (??, ??, ??)";
    
        con.query(querystring, [burger_nameVal, devouredVal, dateVal], function (err,resuts) {
            console.log(result);
    });
 },
 updateOne: function () {
    var querystring = "UPDATE burgers SET ?? = ?, ?? = ?, ?? = ?";
    
        con.query(querystring, [], function (err,resuts) {
            console.log(result);
    });

}

};

module.exports  = orm;