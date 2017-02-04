// Require our node packages for use in the application.
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const config = require('./config.js');
const hbs = require('hbs');

// Require routes javascript files for use in application routing.
const routes = require('./routes/index');

// Initialize the express application.
const app = express();

// Set the port
app.set('port', config.port);

// Allows us to pass JSON from server side to a client JS file via handlebars.
hbs.registerHelper('json', function(context) {
  return JSON.stringify(context);
});

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// Set the environment variable
app.set('env', 'dev');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.text({type : 'application/text-enriched', limit: '10mb'}));

// Setup bodyParser and cookieParser middlewares.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Expose contents of 'public' folder on the top level domain
app.use(express.static(path.join(__dirname, 'public')));

// Allow access to bower_components
app.use('/bower_components',  express.static(__dirname + '/bower_components'));

// Route requests to their corresponding route files.
app.use('/', routes);

// Listen for requests on the defined port
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

// Catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'dev') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;
console.log('Application Loaded...');
