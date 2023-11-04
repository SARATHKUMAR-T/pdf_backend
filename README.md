# PDF Backend Documentation

This documentation outlines the PDF Backend, a Node.js and Express web server that provides JWT-based user authentication, password encryption, and MongoDB database integration. It offers two main routes: one for user authentication and another for CRUD operations on PDF files.

## Table of Contents

1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [Authentication](#authentication)
4. [Password Encryption](#password-encryption)
5. [Database](#database)
6. [User Routes](#user-routes)
7. [PDF Routes](#pdf-routes)
8. [Usage](#usage)
9. [Deployment](#deployment)

## Features<a name="features"></a>

- User authentication using JWT tokens.
- Password encryption with bcrypt.
- MongoDB integration for storing user data and PDF metadata.
- User routes for signup and login.
- PDF routes for CRUD operations on PDF files.

## Technologies Used<a name="technologies-used"></a>

- Node.js and Express for the web server.
- JSON Web Tokens (JWT) for user authentication.
- Bcrypt for password encryption.
- MongoDB for the database.

## Authentication<a name="authentication"></a>

- Users are authenticated using JWT tokens.
- Access to protected routes requires a valid token.
- Includes custom authentication middleware.

## Password Encryption<a name="password-encryption"></a>

- Passwords are securely hashed and encrypted using bcrypt.
- Ensures user data privacy and security.

## Database<a name="database"></a>

- MongoDB is used for storing user details and PDF metadata.
- Provides a flexible and scalable data storage solution.

## User Routes<a name="user-routes"></a>

- **POST /api/signup**: Register a new user.
- **POST /api/login**: Authenticate and log in a user.
- User details must have email,username and password.

## PDF Routes<a name="pdf-routes"></a>

- **POST /api/uploadfiles**: Upload a new pdffile metadata.
- **GET /api/getfiles**: Get all files related to particular user.


## Usage<a name="usage"></a>

- Clone this repo.
- Run npm install to install necessary packages.
- create .env file on the root folder.
- add SECRET KEY and MONGODB_URL on the .env file.
- Run npm start command to start the server.


## Deployment<a name="deployment"></a>

- Push your repo to github.
- Use vercel for deployment.


