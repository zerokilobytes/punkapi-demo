# RESTFul API using Express.js on Node.js

Punk API documentation:
https://punkapi.com/documentation/v2 nosql
NPM module:
https://www.npmjs.com/package/nosql
memory-cache module:
https://www.npmjs.com/package/memory-cache


## Table of Contents

- [API Documentation](#api-documentation)
- [Environment Variables](#environment-variables)
- [Project Structure](#project-structure)
- [Commands](#commands)


## API Documentation

The api can be visualized using Swagger UI on the local environment be going to `http://localhost:3000/api/docs` in your browser. 

### API Endpoints

API routes:

**Beer routes**:\
`POST /api/beer` - get a beer\
`POST /api/beer/add-rating` - add rating for beer\


## Environment Variables

The environment variables can be found and modified in the `.env` file. They come with these default values:

```bash
# Port number
PORT=3000
```

## Commands

Running backend:

```bash
yarn start
```

## License

[No License]
