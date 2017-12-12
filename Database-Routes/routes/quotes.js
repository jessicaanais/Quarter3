var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

router.get('/', function(res, req, next) {
  knex('Quotes')
    .select()
      .then(quotes =>
          res.json(quotes))
});


module.exports = router;
