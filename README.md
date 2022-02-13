<p align="center">
  <img src="https://cdn.getir.com/marketing/Getir_Logo_1621812382342.png" alt="Getir logo" width="300"/>
</p>

# Getir Assignment

A RESTful API with a single endpoint that fetches the data in the provided MongoDB collection and return the results in the requested format.
Made with [Node.js](https://nodejs.org/), [MongoDB](https://www.mongodb.com/) and ❤️.

## Application Url
> https://getir-assignment-fedaipaca.herokuapp.com/

## Installation

Clone or download repo. Use the package manager [npm](https://www.npmjs.com/) to install dependencies.

```bash
npm install
```
Rename `.env.example` file to `.env` and assign values to PORT and MONGO_URL

## Run

- Run in development

```bash
npm run dev
```

- Run in production:

```bash
npm run start
```

- Run test suites:

```bash
npm run test
```
## Postman Collection
[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/a876dff0649a16ba3251?action=collection%2Fimport)

## Resources
### Record Resource

| Method                       | Description            | Required Body Fields                     | Authentication |
| ---------------------------- | ---------------------- | ------------------------                 | -------------- |
| POST /records                | Returns all records    | `startDate, endDate, minCount, maxCount` | not required   |

## Used Tools

- [Express](https://expressjs.com/) for web framework
- [Mongoose](https://mongoosejs.com/) for object modeling
- [Winston](https://github.com/winstonjs/winston) for application wide logging
- [Morgan](https://github.com/expressjs/morgan) for http request logging
- [Joi](https://joi.dev/) for validation
- [cors](https://www.npmjs.com/package/cors) to enable cors
- [express-mongo-sanitize](https://github.com/fiznool/express-mongo-sanitize) for sanitizing user-supplied data to prevent MongoDB Operator Injection
- [express-rate-limit](https://github.com/nfriedly/express-rate-limit) to limit repeated requests to the API
- [helmet](https://helmetjs.github.io/) to secure API by setting various HTTP headers
- [hpp](https://github.com/analog-nico/hpp) to protect against HTTP Parameter Pollution attacks
- [swagger-ui-express](https://github.com/scottie1984/swagger-ui-express) to auto-generate API doc

## Contact
📧 fedaipaca@gmail.com