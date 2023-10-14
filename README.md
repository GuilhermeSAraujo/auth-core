# Auth Core: Simple Authentication System with NestJS

This is a simple authentication system built using NestJS, bcryptjs and jsonwebtoken. The purpose of this project is to learn about NestJS and its features. The architecture follows the Ports and Adapters (Hexagonal) pattern.

## Features

- User registration;
- User authentication (with token generation);
- Token expiration in 5 minutes;
- Endpoint to list users (requires a valid token).

## Technologies

- [NestJS](https://nestjs.com/);
- [@nestjs/swagger](https://github.com/nestjs/swagger);
- [bcryptjs](https://www.npmjs.com/package/bcryptjs);
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken);
- [PostgreSQL]().

## Architecture

The project uses the Ports and Adapters (also known as Hexagonal) architecture pattern. This pattern helps in creating a maintainable and scalable application by separating the core logic from external dependencies and frameworks.

### Modules

- **User Module**: Handles user registration and listing.
- **Auth Module**: Manages user authentication and token generation.

### Libraries

- **bcryptjs**: Used to create password hashes before storing them in the PostgreSQL database.
- **jsonwebtoken**: Generates JWT tokens based on the user ID (UUID in the database).

## Dockerization with Docker Compose

The entire application has been dockerized using Docker Compose, which allows you to run the app independently and with ease, as long as you have Docker installed on your machine.

This configuration sets up two services: the PostgreSQL database (`db`) and the NestJS API (`api1`). The `db` service uses the official PostgreSQL image and includes a custom configuration for performance tuning. The `api1` service builds the application from the current directory and runs it using `npm run start`.

Both services are connected to a bridge network named `rinha`. The API service depends on the database service, ensuring that the database is up and running before the API starts.

To run the application using Docker Compose, simply execute the following command in the terminal:

```bash
docker-compose up
```

This will build and run both services, making the API accessible at `http://localhost:8080`.

Alternatively, you can use the provided `run.sh` script to manage the Docker Compose setup. This script includes commands to remove any existing containers, shut down the services, and rebuild and start the services:

```bash
./run.sh
```

This script executes the following commands:

```bash
docker compose rm -f
docker compose down
docker compose up --build
```

Running the `run.sh` script ensures that you always have a clean environment when starting the application.

## License

This project is open-source and available under the MIT License. Feel free to use it as a starting point for your own projects or as a learning resource.

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest
