# Auth Core: Simple Authentication System with NestJS

This is a simple authentication system built using NestJS, bcryptjs, jsonwebtoken, and @nestjs/swagger. The purpose of this project is to learn about NestJS and its features. The architecture follows the Ports and Adapters (Hexagonal) pattern.

## Features

- User registration
- User authentication (with token generation)
- Token expiration in 5 minutes
- Endpoint to list users (requires a valid token)

## Technologies

- [NestJS](https://nestjs.com/)
- [@nestjs/swagger](https://github.com/nestjs/swagger)
- [bcryptjs](https://www.npmjs.com/package/bcryptjs)
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- PostgreSQL

## Architecture

The project uses the Ports and Adapters (also known as Hexagonal) architecture pattern. This pattern helps in creating a maintainable and scalable application by separating the core logic from external dependencies and frameworks.

### Modules

- **User Module**: Handles user registration and listing.
- **Auth Module**: Manages user authentication and token generation.

### Libraries

- **bcryptjs**: Used to create password hashes before storing them in the PostgreSQL database.
- **jsonwebtoken**: Generates JWT tokens based on the user ID (UUID in the database).

## Getting Started

1. Clone the repository
```bash
git clone https://github.com/yourusername/auth-core.git
```

2. Install dependencies
```bash
cd auth-core
npm install
```

3. Set up your PostgreSQL database and update the configuration in `ormconfig.json`.

4. Run the application
```bash
npm run start
```

5. Access the Swagger UI at `http://localhost:3000/api` to test the API endpoints.

## License

This project is open-source and available under the MIT License. Feel free to use it as a starting point for your own projects or as a learning resource.

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest
