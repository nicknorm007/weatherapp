const express = require('express');
const path = require('path');
const routes = require('./routes/index');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors())

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', routes);
app.use(express.static('public'));
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));

module.exports = app;