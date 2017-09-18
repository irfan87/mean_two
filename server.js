// create the express server
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');

const config = require('./config/database');

// connect to the database
mongoose.connect(config.database, {
    useMongoClient: true
});

// check the database connection
mongoose.connection.on('connected', () => {
    console.log('connected to database ' + config.database);
});

// check the database error
mongoose.connection.on('error', (err) => {
    console.log('Database error ' + err);
});

const app = express();

// add users route
const user = require('./routes/users');

const port = process.env.PORT || 3000;

// cors' setup
app.use(cors());

// set the static page
app.use(express.static(path.join(__dirname, 'public')));

// body-parser middleware setup
app.use(bodyParser.json());

app.use('/users', user);

app.get('/', (req, res) => {
    res.send('Invalid endpoint!');
});

app.listen(port, (req, res) => {
    console.log('Express is running on port ' + port);
});
