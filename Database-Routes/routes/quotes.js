var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

router.get('/', function(req, res, next) {
  knex('Quotes')
    .select()
    .then(quote =>
        res.json(quote))
});

router.post('/', function (req, res) {
  knex('Quotes')
  .insert(req.body).then(() => {
    knex('Quotes').select()
    .then(quote => res.json(quote))
  });
});

router.delete('/:id', function (req, res) {
  knex('Quotes')
  .del()
  .where('id', req.params.id)
    .then(function () {
   knex('Quotes')
   .select()
    .then(quote => res.json(quote))
  });
});

router.patch('/:id', function (req, res) {
  knex('Quotes')
  .update(req.body)
  .where('id', req.params.id)
    .then(function () {
    knex('Quotes')
    .select()
    .then(quote => res.json(quote))
  });
});

module.exports = router;
