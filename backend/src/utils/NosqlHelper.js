var NoSQL = require('nosql');
const path = require('path');

var db = NoSQL.load(path.resolve(__dirname, '..', '..', 'database/database.nosql'), path.resolve(__dirname, '..', '..', 'database'));

/**
 * NosqlHelper class
 */
class NosqlHelper {
    /**
     * Inserts the data
     * @public
     * @param key
     */
    static insert(view, data) {
        var db = NoSQL.load(path.resolve(__dirname, '..', '..', 'database/database.nosql'), path.resolve(__dirname, '..', '..', 'database'));

        //TODO: apply view to insert
        //db.view(view);
        db.insert(data);
    }
}

module.exports = NosqlHelper;