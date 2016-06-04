var express = require('express');
var fs = require('fs');
var app = express();

var port = process.argv[2];
var file = process.argv[3];

app.get('/books', function(req, res) {
  fs.readFile(file, function(err, data) {
    var jsonData = JSON.parse(data);
    res.json(jsonData);
  });
});

app.listen(port || 3000);

//***************************
//*    Official Solution    *
//***************************

app.get('/books', function(req, res){
  var filename = process.argv[3]
  fs.readFile(filename, function(e, data) {
    if (e) return res.sendStatus(500)
    try {
      books = JSON.parse(data)
    } catch (e) {
      res.sendStatus(500)
    }
    res.json(books)
  })
})

app.listen(process.argv[2])
