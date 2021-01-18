# RESTFul API using Express.js on Node.js

The back end and front end node applications were placed in the same repository for easy demonstration.

Punk API documentation:
https://punkapi.com/documentation/v2 nosql
NPM module:
https://www.npmjs.com/package/nosql
memory-cache module:
https://www.npmjs.com/package/memory-cache


## Table of Contents

- [API Documentation](#api-documentation)
- [Environment Variables](#environment-variables)
- [Commands](#commands)


## API Documentation

The api can be visualized using Swagger UI on the local environment by going to `http://localhost:3000/api/docs` in your browser. The Vue.js front end can be viewed by going to `http://localhost:8080/`

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

Running Back-end:

```bash
yarn start
```

Running Front-end:

```bash
yarn start
```


## Screen shots
![home-page](https://github.com/zerokilobytes/punkapi-demo/blob/master/screenshots/home-page.png)
![rate-page](https://github.com/zerokilobytes/punkapi-demo/blob/master/screenshots/rate-page.png)
![swagger](https://github.com/zerokilobytes/punkapi-demo/blob/master/screenshots/rate-page.png)


## License

[No License]
