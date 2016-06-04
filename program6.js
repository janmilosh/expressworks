var express = require('express');
var app = express();
var crypto = require('crypto')

var port = process.argv[2];

app.put('/message/:id', function(req, res) {
  var id = req.params.id;
  res.send(hash(id));
});

function hash(id) {
  return crypto.createHash('sha1')
        .update(new Date().toDateString() + id)
        .digest('hex');
}

app.listen(port || 3000);
