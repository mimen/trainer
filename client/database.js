var config = require('../config.js')

var options = {};
var pgp = require('pg-promise')(options);
var db = pgp(config.postgres_url);
