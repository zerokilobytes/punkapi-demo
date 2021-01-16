const express = require('express');
const docsRoute = require('./docs.route');
const beerRoute = require('./beer.route');
const config = require('../../config/config');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/beer',
    route: beerRoute,
  },
];

const devRoutes = [
  {
    path: '/docs',
    route: docsRoute,
  },
];


defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});


devRoutes.forEach((route) => {
  router.use(route.path, route.route);
});


module.exports = router;
