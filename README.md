<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

## Description

A simple project created under MVC architecture && Mysql && NestJs that manages user and provides token for connected user

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov


## Requests

```bash
# POST [Create Account]

https://user-management-mohamed.herokuapp.com/users
{
  "firstName":"firstName",
  "lastName":"lastName",
  "isActive":true, 
  "email":"user@gmail.com", 
  "password":123
}
# POST [Login]

https://user-management-mohamed.herokuapp.com/login
{
  "email":"user@gmail.com", 
  "password":123
}

# GET [User From Token]
https://user-management-mohamed.herokuapp.com/users/user-info

# GET [User List]
https://user-management-mohamed.herokuapp.com/users/