var express = require('express');
var app = express();
//var msg = require('./modulo_teste');
//var msg1 = require('./modulo_teste1')();

app.set('view engine','ejs');
app.set('views','./app/views');

module.exports = app;