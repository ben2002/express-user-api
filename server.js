const express = require('express');
const bodyParser = require('body-parser');

const { connectMongoDB } = require('./config/mongoose');

// Error handling inside express
// No try/catch blocks in route-handling
require('express-async-errors');

// Use environment variables
require('dotenv').config();

// Initialize express
const app = express();

// Error handling outside express
process.on('uncaughtException', (err) => {
	console.log(err);
});

// Set up database
connectMongoDB();

// Set body parser middleware for different types
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Define routes in a seperate file
app.use(require('./routes/v1'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server is up and running on port ${PORT}`));
