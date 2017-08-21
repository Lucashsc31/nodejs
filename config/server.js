var express = require('express');
var consign = require('consign');

var app = express();
//var mensagem = require('./modulo_teste');
// A engine de view mudou. Será  EJS e para setarmos isso na propriedade do node
// iremos utilizar:
app.set('view engine', 'ejs');
app.set('views', './app/views');

consign()
.include('app/routes')
.then('config/dbConnection.js')
.into(app);

module.exports = app;
