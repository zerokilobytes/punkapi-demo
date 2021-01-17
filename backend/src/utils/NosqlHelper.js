var NoSQL = require('nosql');
const path = require('path');

var db = NoSQL.load(path.resolve(__dirname, '..', '..', 'database/database.nosql'), path.resolve(__dirname, '..', '..', 'database'));

class NosqlHelper {
    static read(path, encoding = 'utf8') {
        db.find().make(function (filter) {
            filter.where('age', '>', 20);
            filter.where('removed', false);
            filter.callback(function (err, response) {
                console.log(err, response);
            });
        });
    }

    static insert(view, data) {
        var db = NoSQL.load(path.resolve(__dirname, '..', '..', 'database/database.nosql'), path.resolve(__dirname, '..', '..', 'database'));

        //db.view(view);
        db.insert(data);
    }

    static find(data) {
        var db = NoSQL.load(path.resolve(__dirname, '..', '..', 'database/database.nosql'), path.resolve(__dirname, '..', '..', 'database'));
        var res = db.find().make(function(filter) {
            //filter.where('age', '>', 20);
            //filter.where('removed', false);
            filter.callback(function(err, response) {
                console.log(err, response);
            });
        });
        console.log(res);
    }
}

module.exports = NosqlHelper;