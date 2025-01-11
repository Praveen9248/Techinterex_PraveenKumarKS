
# Event Management Backend (Node.js with Express and MongoDB)

This is the backend part of the Event Management Application built using Node.js, Express, and MongoDB. The backend provides a REST API to manage events, including creating, updating, retrieving, and deleting events.

## Features
- Create, read, update, and delete events.
- MongoDB as the database to store event data.
- RESTful API endpoints to interact with the frontend.

## Prerequisites
Before you begin, ensure you have the following installed:
- **Node.js**: [Download and Install Node.js](https://nodejs.org/)
- **MongoDB**: [Download and Install MongoDB](https://www.mongodb.com/try/download/community) or use a MongoDB service like [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/event-management.git
cd event-management
node server.js
```

### 2. Install Backend Dependencies

Navigate to the backend directory and install the dependencies:

```bash
cd backend
cd event-management
npm install
```

### 3. Set Up MongoDB

Make sure your MongoDB instance is running locally, or configure your environment to connect to a cloud-based MongoDB database such as MongoDB Atlas.


#### MongoDB Atlas Setup:
1. Create a MongoDB Atlas account (if you haven't already).
2. Create a cluster and get the connection string.
3. Update the `MONGO_URI` in `.env` with your connection string.

### 4. Start the Backend Server

Run the following command to start the backend server:

```bash
npm start
```

This will start the backend server on `http://localhost:5000`.

### 5. API Documentation

The backend exposes the following endpoints:

- **GET `/api/events`**: Fetches all events.
- **GET `/api/events/:id`**: Fetches a specific event by ID.
- **POST `/api/events`**: Creates a new event.
- **PUT `/api/events/:id`**: Updates an existing event.
- **DELETE `/api/events/:id`**: Deletes an event.


### 6. Folder Structure

The folder structure for the backend is as follows:

```
backend/                   # Environment variables
├── server.js                 # Entry point for the server and schema creation and api management
├── package.json              # Project dependencies and scripts
└── README.md                 # This file
```


## Available Scripts

In the backend directory, you can run the following commands:

### `npm start`
Starts the backend server in development mode on port 5000.

### `npm run dev`
Runs the server with `nodemon` for automatic restarts during development.

### `npm test`
Runs the test suite if you have set up tests (optional).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments
- Express for building the RESTful API.
- MongoDB for providing a flexible NoSQL database.
- Mongoose for interacting with MongoDB in an elegant way.
- dotenv for loading environment variables.
