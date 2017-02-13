const express = require('express');
const router = express.Router();
const config = require('../config');

const database = require('../client/database');

router.get('/', function(req, res, next) {
  res.render('home', {});
});

router.get('/signup', function(req, res, next) {
  res.render('signup', {});
});

router.get('/signup/submit', function(req, res, next) {
  const username = req.query.username;
  const password = req.query.password;
  database.addUser(username, password);

  res.render('submitted', {});
});

router.get('/login', function(req, res, next) {
  res.render('login', {});
});

module.exports = router;
