var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

router.get('/quotes', function(req, res, next) {
  knex('Quotes')
    .select()
    .then(quote =>
        res.json(quote))
});

router.post('/quotes', function (req, res) {
  knex('Quotes')
  .insert(req.body).then(() => {
    knex('Quotes').select()
    .then(quote => res.json(quote))
  });
});

module.exports = router;
