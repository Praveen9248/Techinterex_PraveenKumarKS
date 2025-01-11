
# MERN Stack Event Management Application

This is a full-stack event management application built using the MERN stack (MongoDB, Express.js, React, Node.js). The app allows users to create, update, view, and delete events, with data stored in MongoDB Atlas.

## Features
- Create new events with title, date, and description.
- View a list of all events.
- Edit existing events.
- Delete events.
- Backend API for CRUD operations.

## Technologies Used
- **MongoDB Atlas**: Cloud database to store event data.
- **Express.js**: Backend framework to create RESTful APIs.
- **React**: Frontend library for building the user interface.
- **Node.js**: JavaScript runtime for server-side programming.
- **Axios**: HTTP client for making API requests from the React frontend.

## Prerequisites
- Node.js and npm installed
- MongoDB Atlas account

## Setup Instructions

### Backend Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Praveen9248/Techinterex_PraveenKumarKS.git
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   ```

3. **Create a `.env` File**
   Create a `.env` file in the `backend` directory with the following contents:
   ```env
   MONGO_URI=your_mongodb_atlas_uri
   PORT=5000
   ```
   Replace `your_mongodb_atlas_uri` with your actual MongoDB Atlas connection string.

4. **Start the Backend Server**
   ```bash
   node server.js
   ```
   The backend server will start on `http://localhost:5000`.

### Frontend Setup

1. **Navigate to Frontend Directory**
   ```bash
   cd ../frontend
   npm install
   ```

2. **Update API URL**
   Make sure the `API_URL` in `src/api.js` is set to the correct backend server URL:
   ```javascript
   const API_URL = 'http://localhost:5000/events';
   ```

3. **Start the Frontend Server**
   ```bash
   npm run dev
   ```
   The frontend app will open in your default web browser at `http://localhost:3000`.

## Usage

1. **Create an Event**
   - Fill in the title, date, and description fields in the form.
   - Click the "Create Event" button.

2. **View Events**
   - All created events are listed below the form.

3. **Edit an Event**
   - Click the "Edit" button next to the event you want to edit.
   - The event details will populate the form.
   - Modify the details and click "Update Event".

4. **Delete an Event**
   - Click the "Delete" button next to the event you want to remove.

## Project Structure

```
project-root/
|-- backend/
|   |-- .env
|   |-- package.json
|   |-- server.js
|   `-- ...
|
|-- frontend/
|   |-- src/
|   |   |-- App.js
|   |   |-- api.js
|   |   |-- index.js
|   |   `-- ...
|   |-- package.json
|   `-- ...
|
`-- README.md
```

## Deployment

### Backend Deployment
1. **Deploy on Heroku, DigitalOcean, or any preferred cloud platform**.
2. **Set environment variables for `MONGO_URI` and `PORT` on the deployment platform**.

### Frontend Deployment
1. **Deploy on Netlify, Vercel, or any preferred static site hosting platform**.
2. **Ensure the `API_URL` in `api.js` points to the deployed backend URL**.

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request with your changes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgements
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [Express.js](https://expressjs.com/)
- [React](https://reactjs.org/)
- [Node.js](https://nodejs.org/)
