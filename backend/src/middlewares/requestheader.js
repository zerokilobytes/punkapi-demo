const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const validator = require('validator');
const RequestLog = require('../models/requestlog.model');


/**
 * Intercept all requests made to your rest API and verifies that the request 
 * has a 'x-user' header parameter containing a valid formatted email address
 * @public
 * @param req
 * @param res
 * @param next
 */
exports.validate = (req, res, next) => {
    var xuserParam = req.headers['x-user'];
    var requestLog = new RequestLog();
    
    requestLog.insert({ user: xuserParam, request_datails: req.body });

    if (!xuserParam || !validator.isEmail(xuserParam)) {
        res.status(400).send(new ApiError(400, 'Request is not valid'));
    }
    next();
};
