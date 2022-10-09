var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')
const promMid = require('express-prometheus-middleware'); 
require('dotenv').config();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var itineraireRouter = require('./routes/itineraire');
var avisRouter = require('./routes/avis');

var app = express();

app.use(logger('dev'));
app.use(cors()); 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(promMid({
    metricsPath: '/metrics',
    collectDefaultMetrics: true,
    requestDurationBuckets: [0.1, 0.5, 1, 1.5],
    requestLengthBuckets: [512, 1024, 5120, 10240, 51200, 102400],
    responseLengthBuckets: [512, 1024, 5120, 10240, 51200, 102400],
  }));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/itineraire', itineraireRouter);
app.use('/avis', avisRouter);

module.exports = app;
