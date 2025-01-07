
// Load environment variables from .env file
const dotenv = require('dotenv');
dotenv.config();

// Initialize the server and listen to the port 3000
const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

// Set the port to the environment variable PORT or 3000
app.get('/', (req, res) => {
  res.send('Hello there!');
});

module.exports = app;

