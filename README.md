## Description

### Sports Standings App

Service stub for handling sports results build with NestJs framework structured with some DDD essential rules.
The goal of this application is to manage matches data and to return sorted teams positions as in leagues standings tables.

Tasks for further development:
1. Implement `MatchRepository`, propose right place in project structure, in this point You can use array for storing Matches.
2. Propose and implement some validation rules for domain objects like `Match`, `Team` and `Team Position`.
3. Implement two or three disciplines (each discipline have their own way for rewarding win matches) and rulebooks. Rule books are the way of comparing team positions. In `SimpleRuleBook` You can compare just points, in `AdvacedRuleBook` for the same number of points compare other parameters like goals.
4. Implement two services `FootbalStandingsService` and `BasketballStandingsService` implementing `SportStandingsInterface`. Set or inject discipline and rulebooks to it. In `getSortedStandings` it should read all matches from repository, calculate all teams positions and sort them according to proper rulebook. Add unit tests to those services.
5. Add short service and endpoint for adding new `Match`. Add also endpoint for getting sorted results. Use **REST API** standard, propose **HTTP** status codes.

Extra tasks:
1. Add `docker-compose` with MongoDB database and implement new repository using this database.

Powered by: [Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

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
```
