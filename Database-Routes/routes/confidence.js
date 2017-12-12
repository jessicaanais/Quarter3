var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

router.get('/', function(req, res) {
  knex('Quotes')
    .select()
      .where('category_id', 3)
        .then((confidence) => {
          res.json(confidence)
     })
});



module.exports = router;
