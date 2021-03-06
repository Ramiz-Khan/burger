var express = require("express");

var router = express.Router();

var burger = require(".././models/burger.js");


router.get("/", function(req, res) {
    burger.all("", function (data) {
        var hbsObject = {
            burger: data
        };

        res.render("index", hbsObject);

        console.log(hbsObject);

    });
});

router.get("/api/newburg", function(req, res) {

    
    burger.all("", function (data) {
        var burgs = {
            burger: data
        }; 
        res.json(burgs);

    });
 });

router.post("/api/newburg", function(req, res) {
    burger.all("", function (burgs) {
        var burgs = {
            burger: data
        }; 
        res.json(burgs);

    });
});


router.post("/api/newburg", function(req, res) {
    burger.create([
        'burger_name','devoured'
    ], [
        req.params.burger_name, req.params.devoured
    ], function(result) {
        res.json({ id: result.insertId });

        console.log(result)
    });
});

router.put("/api/newburg/", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);

    burger.update("", {
        devoured: req.body.devoured
      }, condition, function(data) {

        burgs = {
            burger: data
        };

        console.log("Updated Burger" + burgs);

        if (result.changedRows == 0) {
          // If no rows were changed, then the ID must not exist, so 404
          return res.status(404).end();
        } else {
          res.status(200).end();
        }
      });
    });

module.exports = router;



