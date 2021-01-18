
const validator = require('validator');
const NosqlHelper = require('../utils/NosqlHelper');


/**
 * RequestLog model for persisting the request logs to the local nosql db
 */
class RequestLog{
    fields = {
        logid: null
    };

    /**
     * RequestLog model for persisting the request logs to the local nosql db
     * @public
     */
    insert(params) {
        NosqlHelper.insert("requestlogs", params);
    }

}

module.exports = RequestLog;
