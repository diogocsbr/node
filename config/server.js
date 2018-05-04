var express = require('express');
var app = express();
var consign = require("consign");

//var msg = require('./modulo_teste');
//var msg1 = require('./modulo_teste1')();

app.set('view engine','ejs');
app.set('views','./app/views');

//1 - apontando a pasta para o routes e colocando dentro do app
//2 - incluir o modulo de conexao 

consign()
    .include('app/routes')
    .then('config/dbconnection.js') // - como é na mesma pasta, tomar cuidado para nao carregar o server.js
    .then('app/models')
    .into(app);



module.exports = app;