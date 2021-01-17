
const validator = require('validator');
const NosqlHelper = require('../utils/NosqlHelper');



class BeerRating{
    insert(params) {
        NosqlHelper.insert("beerrating", params);
    }

}

module.exports = BeerRating;
