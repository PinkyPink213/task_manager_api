const dotenv = require('dotenv');
const colors = require('colors');
// const morgan = require('morgan');
const express = require('express');
const app = express();
const tasks = require('../routes/task');
const notFound = require('../middleware/not-found');
const errorHandlerMiddleware = require('../middleware/error-handler');
// Load env vars
dotenv.config({ path: '../config/config.env' });
const connectDB = require('../database/db');
import serverless from 'serverless-http';

// Connect to database
connectDB();

// Body parser
app.use(express.json());

//routes
app.use(express.static('./public'));
app.use('/api/v1/tasks', tasks);
app.use(notFound);
app.use(errorHandlerMiddleware);

// const PORT = process.env.PORT || 5000;

// app.listen(
// 	PORT,
// 	console.log(
// 		`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
// 	)
// );

export const handler = serverless(api);
