const express = require('express');
const dotenv = require('dotenv');

// Routes
const auth = require('./routes/auth');
const bootcamps = require('./routes/bootcamps');
const courses = require('./routes/courses');
const reviews = require('./routes/reviews');
const users = require('./routes/users');

// load env vera
dotenv.config({ path: './config/config.env' });

const app = express();

app.use('/api/v1/auth', auth);
app.use('/api/v1/bootcamps', bootcamps);
app.use('/api/v1/courses', courses);
app.use('/api/v1/reviews', reviews);
app.use('/api/v1/users', users);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port: ${PORT}`)
);
