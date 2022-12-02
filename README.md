## Description

Back end rapid development template based on [Nest](https://github.com/nestjs/nest) framework.
Save the time of relevant configuration of JWT and database

## Technology stack
+ DataBase: MySql
+ Orm: TypeOrm

## Tip

The. env file configuration database information and JWT key need to be added locally

```env
DATABASE_HOST=xxx
DATABASE_NAME=xxx
DATABASE_PASSWORD=xxx
DATABASE_USERNAME=xxx
JWT_SECRET=xxx
```

## Installation

```bash
$ pnpm i
```

## Running the app

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```
