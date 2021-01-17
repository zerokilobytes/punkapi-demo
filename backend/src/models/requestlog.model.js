
const validator = require('validator');
const NosqlHelper = require('../utils/NosqlHelper');



class RequestLog{
    fields = {
        logid: null
    };

    insert(params) {
        NosqlHelper.insert("requestlogs", params);
    }

}

module.exports = RequestLog;
