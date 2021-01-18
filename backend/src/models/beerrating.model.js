
const validator = require('validator');
const NosqlHelper = require('../utils/NosqlHelper');


/**
 * BeerRating model for persisting the beer info to the local nosql db
 */
class BeerRating{
    /**
     * Inserts the beer data to the local nosql db
     * @public
     * @param params
     */
    insert(params) {
        NosqlHelper.insert("beerrating", params);
    }

}

module.exports = BeerRating;
