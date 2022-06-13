
## Get Started

1. Install [node.js](https://nodejs.org/en/) as well as [Docker](https://docs.docker.com/get-docker/).
2. After cloning the repository, run `npm install` in its root to install all dependencies and set up the git hooks.
3. _Optional: Configure VSCode as described in "Editor Setup" below._
4. Run `npm run up:dev` to start the development database in a Docker container.
5. Start the application using `npm run  start:dev`. Happy coding!

_Note: See "Available Scripts" below for more information._

### File Structure

All files should be named in `lower-case-with-dashes.ts`.

The contents of this repo are structured in the following way:

- `.vscode/`: [VSCode](https://code.visualstudio.com/) config
- `dist/`: Build artifacts (excluded from version control)
- `src/`: The application's source files
  - `app/`: The app's entry point
  - `*/`: Top-level NestJS modules

## Instructions to build and run the container image

###Building docker image
```
docker build -t nest-api .
```
## Instructions to run the container image
You can find bellow an exemple of full command to run the container

```
docker run -p 3003:3001 -e DB_HOST=172.16.100.101 -e DB_PORT=5432 -e DB_PASSWORD="postgres" -e DB_USER="postgres" -e DB_DB="nest" nest-api
```
## Envirement Variables
DB_HOST: database host adress
DB_PORT: database port
DB_PASSWORD: database user password
DB_USER: database username
DB_DB: database table



## API Documentation
You access swager documentation via `localhost:3001/api/v2/api-docs`. <br />
Or you can generate a full documentation via script `npx @compodoc/compodoc -p tsconfig.json -s`.
## Database Design

This is a simple design of the DB.

![Database Design](/docs/postgres.png)

So we will have multiple courses with multiple student that can subscribe to <br />
and one profesor to enroll the course. <br />
we will have a one to many relation between  <br />
professor and courses and many to many between courses and students.
## Available Scripts

The most important scripts are outlined below. You can find all script definitions in the `package.json`.

### `npm run start:dev`

Launches a development server that runs the application in development mode.

After running this command, the app will be available at [http://localhost:3001](http://localhost:3001).<br />
The app will automatically reload if you change any of the source files.

### `npm run up:dev`

Starts the dockerized infrastructure (e.g., PostgreSQL).<br />
It can be shut down again using `npm run  down:dev`.

### `npm run format`

Runs automated code formatting on all applicable file types.

### `npm run lint`

Lints all applicable files and prints the output.

### `npm run compile`

Dry-runs the TypeScript compiler.<br />
This is especially useful to check whether any types or references broke after a big refactoring.

### `npm run test`

Runs unit tests via [Jest](https://jestjs.io).

Tests are automatically discovered from all `*.spec.{ts,tsx}` files.

### `npm run test:e2e`

Runs end-to-end tests via [Jest](https://jestjs.io).

### `npm run build`

Builds the application.<br />
The build artifacts will be stored in the `dist/` directory.

## Editor Setup

We recommend using [VSCode](https://code.visualstudio.com/).

After opening the repo in VSCode, it will ask you if you want to install recommend extensions. For a seamless development experience, we recommend accepting.
