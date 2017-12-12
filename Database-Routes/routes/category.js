var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

router.get('/category', function(req, res, next) {
  knex('Category')
    .select()
      .then(category =>
        res.json(category))
});

module.exports = router;
