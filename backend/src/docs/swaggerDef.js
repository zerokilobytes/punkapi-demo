const config = require('../config/config');

const swaggerDef = {
  openapi: '3.0.0',
  info: {
    title: 'API documentation',
  },
  servers: [
    {
      url: `http://localhost:${config.port}/api`,
    },
  ],
};

module.exports = swaggerDef;
