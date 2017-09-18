// create the express server
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');

const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Invalid endpoint!');
});

app.listen(port, (req, res) => {
    console.log('Express is running on port ' + port);
});
