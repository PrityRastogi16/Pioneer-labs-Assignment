# User Management and Public API Data Retrieval API

This project provides an API for managing user authentication, registration, password reset, and fetching data from a public API with filtering and pagination.

## Project Structure

The project consists of the following components:

- `userRouter.js`: Contains routes for user management operations.
- `user.controller.js`: Implements user-related functionalities such as registration, login, password reset, and logout.
- `auth.middleware.js`: Middleware for user authentication.
- `apidata.controller.js`: Controller for fetching data from a public API with filtering and pagination.
- `README.md`: Documentation file for the project.

## Getting Started

To run the project locally, follow these steps:

1. Clone this repository to your local machine.
2. Install dependencies using `npm install`.
3. Set up environment variables, including the secret key for JWT and any necessary configurations for connecting to MongoDB.
4. Start the server using `npm start`.

## Endpoints

### User Management

- `POST /user/register`: Register a new user.
- `POST /user/login`: Log in a user.
- `GET /user/`: Get all users (protected route).
- `PUT /user/reset/:id`: Reset user password (protected route).
- `DELETE /logout`: Log out the user (protected route).

### Public API Data

- `GET /api`: Get data from a public API with filtering and pagination.

## Pagination

The `/api` endpoint supports pagination. You can specify the page number and page size as query parameters.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- bcrypt
- JSON Web Tokens (JWT)
- Axios
