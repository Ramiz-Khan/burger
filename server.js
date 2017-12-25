var express = require("express");
var method = require("method-override");
var bodyParser = require("body-parser");

var app = express();
var PORT = process.env.PORT || 3306;

// Requiring our models for syncing
var db = require("./models/burger.js");

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

// Static directory
app.use(express.static("public"));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


var routes = require("./controllers/burgers_controller.js");


app.use("/", routes);

// app.get('/', function (req,res) {
//     res.render("index")
// });

// app.get('/newburg', function (req,res) {
//     res.JSON(req.body);
// })

// app.get('/burger', function (req,res) {
//     console.log("newburg");
// })


    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
