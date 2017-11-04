var orm = require("orm.js");

var burger = { function (cb) {
        all: orm.selectAll("burger", function (res) {
            cb(res);
        });
    },
     function (cb) {
        addOne: orm.insertOne("burger", function (res) {
            cb(res);
        });
    },
     function (cb) {
        update: orm.updateOne("burger", function (res) {
            cb(res);
        });
    }
};

module.exports = burger;