// Configuration file
var config = require('./configuration/configuration');

// Global settings and packages
var express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  cookieParser = require('cookie-parser');

// Routes
var api = require('./api/routes/routes');

// Load loggers
var morgan = require('morgan'),
logger = require('./util/logger');

// Middlewares
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(morgan(':status - :date[iso] - :method - :url - :response-time - :remote-addr', { "stream": logger.stream}));

// Routes GTW
app.use('/api', api);

// Start listening in port XXXX
app.listen(config.port || 9997, '0.0.0.0'); // Need to listen to 0.0.0.0 in docker

// Not found request response
app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'});
});


logger.info("Node " + process.env.NODE_APP_INSTANCE + " started on port " + config.port);

// Export app module
module.exports = app;
