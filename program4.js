var express = require('express');
var bodyparser = require('body-parser');
var app = express();

var port = process.argv[2];

app.use(bodyparser.urlencoded({extended: false}));

app.post('/form', function(req, res) {
  var parsedData = req.body.str.split('').reverse().join('');
  res.send(parsedData);
});

app.listen(port);
