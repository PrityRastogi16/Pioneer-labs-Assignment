# 🚀 User Management and Public API Data Retrieval API

Welcome to the User Management and Public API Data Retrieval API documentation. This API provides endpoints for user authentication, registration, password reset, and fetching data from a public API with filtering and pagination.

## Project Overview

This project is structured to provide seamless user management functionalities along with the ability to retrieve data from a public API. Below are the key components of the project:

- `userRouter.js`: Manages routes for user-related operations.
- `user.controller.js`: Implements user functionalities such as registration, login, password reset, and logout.
- `auth.middleware.js`: Middleware for user authentication.
- `apidata.controller.js`: Controller for fetching data from a public API with filtering and pagination.
- `README.md`: Comprehensive documentation file for the project.

  ## Deployment and Swagger Documentation

- [Backend Deployment Link](https://pioneer-labs-assignment-p2oz.onrender.com) - Visit this link to access the deployed API.
- [Swagger Documentation Link](https://pioneer-labs-assignment-p2oz.onrender.com/swagger) - View the Swagger documentation for detailed API specifications.


## Getting Started

To run the project locally, follow these simple steps:

1. Clone this repository to your local machine.
2. Install project dependencies using `npm install`.
3. Set up environment variables, including the secret key for JWT and any necessary configurations for connecting to MongoDB.
4. Start the server by running `npm start`.

## API Endpoints

### User Management

- `POST /user/register`: Register a new user.
- `POST /user/login`: Log in a user.
- `GET /user/`: Get all users (protected route).
- `PUT /user/reset/:id`: Reset user password (protected route).
- `DELETE /logout`: Log out the user (protected route).

### Public API Data

- `GET /api`: Retrieve data from a public API with filtering and pagination.

## Pagination Support

The `/api` endpoint supports pagination. You can specify the page number and page size as query parameters.

## Technologies Used

This API is built using the following technologies:

- Node.js
- Express.js
- MongoDB
- bcrypt
- JSON Web Tokens (JWT)
- Axios

Feel free to explore the API and leverage its functionalities for your applications! If you have any questions or feedback, don't hesitate to reach out.
