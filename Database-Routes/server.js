const env = 'development';
const config = require('./knexfile.js')[env];
const knex = require('knex')(config);
const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;
const cors = require('cors');

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())


app.use('/', require('./routes/category.js'));

app.use('/quotes', require('./routes/quotes.js'));


app.listen(port, function() {
  console.log("listening on port: ", port);
});
