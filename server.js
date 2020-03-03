const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/api');
const fileUpload = require('express-fileupload');
const mongoose = require('mongoose');

// set up express app
const app = express();

// connect to mongodb
mongoose.connect('mongodb://localhost/images');
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

app.use(fileUpload());

// init routes
app.use('/api', routes);

// error handling middleware
app.use((err, req, res, next) => {
  res.status(422).send({ error: err.message });
});

// // listen for requests
app.listen(process.env.port || 4000, () => {
  console.log('now listening for incoming requests');
});
