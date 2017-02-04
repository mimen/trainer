const express = require('express');
const router = express.Router();
const config = require('../config.js');

router.get('/', function(req, res, next) {
  res.render('home', {});
});

module.exports = router;
