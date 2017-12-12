var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

router.get('/', function(req, res) {
  knex('Quotes')
    .select()
      .where('category_id', 5)
        .then((life) => {
          res.json(life)
     })
});



module.exports = router;