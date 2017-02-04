// Set the environment to local if there is no environment variable set
// This will make config.js load the configuration settings from config/local.js
let ENV = process.env.ENV;

if (!ENV) {
  ENV = "LOCAL";
}

console.log('Environment: ' + ENV);

switch (ENV) {
  case 'PROD':
    config = require('./config/prod.js'); break;
  case 'DEV':
    config = require('./config/dev.js'); break;
  case 'HEROKU':
    config = require('./config/heroku.js'); break;
  case 'LOCAL':
    config = require('./config/local.js'); break;
}

module.exports = config;
