const mongoose = require('mongoose');
const express = require('express');
require('dotenv').config();

const mongoDB = require('./configs/keys').MongoURL

const app = express();
app.use(express.json());

//* API routes
const genres = require('./routes/genres');
const customers = require('./routes/customers');
const movies = require('./routes/movies');
const rentals = require('./routes/rentals');
const registers = require('./routes/auth/registers');
const auth = require('./routes/auth/auth');

app.use('/api/genres', genres);
app.use('/api/customers', customers);
app.use('/api/movies', movies);
app.use('/api/rentals', rentals);
app.use('/api/auth', auth);
app.use('/api/registers', registers);

//* Connect to Database
mongoose
  .connect(mongoDB, {
    useNewUrlParser: true,
    useCreateIndex: true
  })
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
