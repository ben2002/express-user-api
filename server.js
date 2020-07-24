const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { connectMongoDB } = require('./config/mongoose');

//use .env file
require('dotenv').config();
//initialize express
const app = express();

//set up database
connectMongoDB();

//set body parser middleware for different types
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//define routes in a seperate file
app.use(require('./routes/v1'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server is up and running on port ${PORT}`));
