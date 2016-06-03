var express = require('express');
var stylus = require('stylus');
var path = require('path');
var app = express();

var port = process.argv[2];
var publicFilePath = process.argv[3];

app.use(stylus.middleware(publicFilePath || path.join(__dirname, 'public')));
app.use(express.static(publicFilePath || path.join(__dirname, 'public')));

app.listen(port || 3000);
