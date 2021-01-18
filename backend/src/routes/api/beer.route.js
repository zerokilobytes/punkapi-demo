const express = require('express');

const router = express.Router();
const fetch = require('node-fetch');
var _ = require("underscore");
const cache = require('memory-cache');
const validator = require('validator');
const { check, validationResult } = require('express-validator');

const BeerRating = require('../../models/beerrating.model');
const MemoryCacheHelper = require('../../utils/MemoryCacheHelper');


/**
 * @swagger
 * /api/beer:
 *   post:
 *    description:  Endpoint for viewing a beer
 *    parameters:
 *      - name: name
 *        in: query
 *        description: Name of beer
 *        required: true
 *        type: string
 *        x-example: Buzz
 */
router.post('/', function (req, res, next) {
    const nameQuery = req.body.name.toLowerCase();
    var url = 'https://api.punkapi.com/v2/beers';

    //Gets cache data
    var cacheData = MemoryCacheHelper.read(nameQuery);

    //Checks if cache is available and fetches data from punkapi if no cach data is available
    if (cacheData) {
        res.send(cacheData);
    } else {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                var response = [];
                var beers = data.filter(function (i) {
                    return i.name.toLowerCase().startsWith(nameQuery);
                });

                for (beer of beers) {
                    response.push({
                        id: beer.id, name: beer.name, description: beer.description,
                        first_brewed: beer.first_brewed, food_pairing: beer.food_pairing
                    });
                }

                //Saves the results of the request
                MemoryCacheHelper.save(nameQuery, response);
                res.send(response);
            })
            .catch(err => {
                res.send(err);
            });
    }
});

/**
 * @swagger
 * /api/add-rating:
 *   post:
 *    description:  Endpoint for adding ratings for a beer
 *    parameters:
 *      - name: id
 *        in: query
 *        description: Beer id
 *        required: true
 *        type: string
 *        x-example: Buzz
 *    requestBody:
 *        description: JSON request body which includes rating and comments 
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *               type: string
 */
router.post('/add-rating/:id', function (req, res, next) {
    const idParam = req.body.id;

    //Gets request data
    const requestData = JSON.parse(JSON.stringify(req.body));
    const ratingParam = requestData.rating;
    const commentParam = requestData.comment;

    //Validate user inputs
    if (!validator.isInt(ratingParam, { min: 1, max: 5 })) {
        res.status(422).json({ errors: ["Rating is invalid"] })
    }
    if (validator.isEmpty(commentParam, { ignore_whitespace: true })) {
        res.status(422).json({ errors: ["Comment is required"] })
    }

    //Inserts beer into database
    var beerRating = new BeerRating();
    beerRating.insert({ id: idParam, rating: ratingParam, comment: commentParam });

    //Sends response
    res.send('Beer rating added');
});

module.exports = router;
