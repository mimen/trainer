var config = require('../config.js')

var options = {};
var pgp = require('pg-promise')(options);
var db = pgp(config.postgres_url);

function addUser(username, password) {

  var query = `INSERT INTO USERS(username, password)
               VALUES (${username}, ${password})`;

  console.log(query);
  // db.query(query);
}

// -- INSERT INTO users(username, password)
// -- VALUES ("milad", "poop")
// -- RETURNING id;

module.exports = {
  addUser: addUser
};
