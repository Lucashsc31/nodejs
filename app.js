var express = require("express");
var app = express();

app.get('/', function(req, res){
    res.send("<html><body>Página Inicial</body></html>");
});