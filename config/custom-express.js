var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var cors = require('cors');

module.exports = () => {
  var app = express();

  app.use(bodyParser.json());
  app.disable('etag');
  app.use(cors());

  consign()
    .include('controllers')
    .into(app);

  return app;
}
